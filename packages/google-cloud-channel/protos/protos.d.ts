// Copyright 2021 Google LLC
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

        /** Namespace channel. */
        namespace channel {

            /** Namespace v1. */
            namespace v1 {

                /** ChannelPartnerLinkView enum. */
                enum ChannelPartnerLinkView {
                    UNSPECIFIED = 0,
                    BASIC = 1,
                    FULL = 2
                }

                /** ChannelPartnerLinkState enum. */
                enum ChannelPartnerLinkState {
                    CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED = 0,
                    INVITED = 1,
                    ACTIVE = 2,
                    REVOKED = 3,
                    SUSPENDED = 4
                }

                /** Properties of a ChannelPartnerLink. */
                interface IChannelPartnerLink {

                    /** ChannelPartnerLink name */
                    name?: (string|null);

                    /** ChannelPartnerLink resellerCloudIdentityId */
                    resellerCloudIdentityId?: (string|null);

                    /** ChannelPartnerLink linkState */
                    linkState?: (google.cloud.channel.v1.ChannelPartnerLinkState|keyof typeof google.cloud.channel.v1.ChannelPartnerLinkState|null);

                    /** ChannelPartnerLink inviteLinkUri */
                    inviteLinkUri?: (string|null);

                    /** ChannelPartnerLink createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ChannelPartnerLink updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ChannelPartnerLink publicId */
                    publicId?: (string|null);

                    /** ChannelPartnerLink channelPartnerCloudIdentityInfo */
                    channelPartnerCloudIdentityInfo?: (google.cloud.channel.v1.ICloudIdentityInfo|null);
                }

                /** Represents a ChannelPartnerLink. */
                class ChannelPartnerLink implements IChannelPartnerLink {

                    /**
                     * Constructs a new ChannelPartnerLink.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IChannelPartnerLink);

                    /** ChannelPartnerLink name. */
                    public name: string;

                    /** ChannelPartnerLink resellerCloudIdentityId. */
                    public resellerCloudIdentityId: string;

                    /** ChannelPartnerLink linkState. */
                    public linkState: (google.cloud.channel.v1.ChannelPartnerLinkState|keyof typeof google.cloud.channel.v1.ChannelPartnerLinkState);

                    /** ChannelPartnerLink inviteLinkUri. */
                    public inviteLinkUri: string;

                    /** ChannelPartnerLink createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ChannelPartnerLink updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ChannelPartnerLink publicId. */
                    public publicId: string;

                    /** ChannelPartnerLink channelPartnerCloudIdentityInfo. */
                    public channelPartnerCloudIdentityInfo?: (google.cloud.channel.v1.ICloudIdentityInfo|null);

                    /**
                     * Creates a new ChannelPartnerLink instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChannelPartnerLink instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IChannelPartnerLink): google.cloud.channel.v1.ChannelPartnerLink;

                    /**
                     * Encodes the specified ChannelPartnerLink message. Does not implicitly {@link google.cloud.channel.v1.ChannelPartnerLink.verify|verify} messages.
                     * @param message ChannelPartnerLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IChannelPartnerLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChannelPartnerLink message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ChannelPartnerLink.verify|verify} messages.
                     * @param message ChannelPartnerLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IChannelPartnerLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChannelPartnerLink message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChannelPartnerLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ChannelPartnerLink;

                    /**
                     * Decodes a ChannelPartnerLink message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChannelPartnerLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ChannelPartnerLink;

                    /**
                     * Verifies a ChannelPartnerLink message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChannelPartnerLink message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChannelPartnerLink
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ChannelPartnerLink;

                    /**
                     * Creates a plain object from a ChannelPartnerLink message. Also converts values to other types if specified.
                     * @param message ChannelPartnerLink
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ChannelPartnerLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChannelPartnerLink to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EduData. */
                interface IEduData {

                    /** EduData instituteType */
                    instituteType?: (google.cloud.channel.v1.EduData.InstituteType|keyof typeof google.cloud.channel.v1.EduData.InstituteType|null);

                    /** EduData instituteSize */
                    instituteSize?: (google.cloud.channel.v1.EduData.InstituteSize|keyof typeof google.cloud.channel.v1.EduData.InstituteSize|null);

                    /** EduData website */
                    website?: (string|null);
                }

                /** Represents an EduData. */
                class EduData implements IEduData {

                    /**
                     * Constructs a new EduData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IEduData);

                    /** EduData instituteType. */
                    public instituteType: (google.cloud.channel.v1.EduData.InstituteType|keyof typeof google.cloud.channel.v1.EduData.InstituteType);

                    /** EduData instituteSize. */
                    public instituteSize: (google.cloud.channel.v1.EduData.InstituteSize|keyof typeof google.cloud.channel.v1.EduData.InstituteSize);

                    /** EduData website. */
                    public website: string;

                    /**
                     * Creates a new EduData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EduData instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IEduData): google.cloud.channel.v1.EduData;

                    /**
                     * Encodes the specified EduData message. Does not implicitly {@link google.cloud.channel.v1.EduData.verify|verify} messages.
                     * @param message EduData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IEduData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EduData message, length delimited. Does not implicitly {@link google.cloud.channel.v1.EduData.verify|verify} messages.
                     * @param message EduData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IEduData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EduData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EduData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.EduData;

                    /**
                     * Decodes an EduData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EduData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.EduData;

                    /**
                     * Verifies an EduData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EduData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EduData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.EduData;

                    /**
                     * Creates a plain object from an EduData message. Also converts values to other types if specified.
                     * @param message EduData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.EduData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EduData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace EduData {

                    /** InstituteType enum. */
                    enum InstituteType {
                        INSTITUTE_TYPE_UNSPECIFIED = 0,
                        K12 = 1,
                        UNIVERSITY = 2
                    }

                    /** InstituteSize enum. */
                    enum InstituteSize {
                        INSTITUTE_SIZE_UNSPECIFIED = 0,
                        SIZE_1_100 = 1,
                        SIZE_101_500 = 2,
                        SIZE_501_1000 = 3,
                        SIZE_1001_2000 = 4,
                        SIZE_2001_5000 = 5,
                        SIZE_5001_10000 = 6,
                        SIZE_10001_OR_MORE = 7
                    }
                }

                /** Properties of a CloudIdentityInfo. */
                interface ICloudIdentityInfo {

                    /** CloudIdentityInfo customerType */
                    customerType?: (google.cloud.channel.v1.CloudIdentityInfo.CustomerType|keyof typeof google.cloud.channel.v1.CloudIdentityInfo.CustomerType|null);

                    /** CloudIdentityInfo primaryDomain */
                    primaryDomain?: (string|null);

                    /** CloudIdentityInfo isDomainVerified */
                    isDomainVerified?: (boolean|null);

                    /** CloudIdentityInfo alternateEmail */
                    alternateEmail?: (string|null);

                    /** CloudIdentityInfo phoneNumber */
                    phoneNumber?: (string|null);

                    /** CloudIdentityInfo languageCode */
                    languageCode?: (string|null);

                    /** CloudIdentityInfo adminConsoleUri */
                    adminConsoleUri?: (string|null);

                    /** CloudIdentityInfo eduData */
                    eduData?: (google.cloud.channel.v1.IEduData|null);
                }

                /** Represents a CloudIdentityInfo. */
                class CloudIdentityInfo implements ICloudIdentityInfo {

                    /**
                     * Constructs a new CloudIdentityInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ICloudIdentityInfo);

                    /** CloudIdentityInfo customerType. */
                    public customerType: (google.cloud.channel.v1.CloudIdentityInfo.CustomerType|keyof typeof google.cloud.channel.v1.CloudIdentityInfo.CustomerType);

                    /** CloudIdentityInfo primaryDomain. */
                    public primaryDomain: string;

                    /** CloudIdentityInfo isDomainVerified. */
                    public isDomainVerified: boolean;

                    /** CloudIdentityInfo alternateEmail. */
                    public alternateEmail: string;

                    /** CloudIdentityInfo phoneNumber. */
                    public phoneNumber: string;

                    /** CloudIdentityInfo languageCode. */
                    public languageCode: string;

                    /** CloudIdentityInfo adminConsoleUri. */
                    public adminConsoleUri: string;

                    /** CloudIdentityInfo eduData. */
                    public eduData?: (google.cloud.channel.v1.IEduData|null);

                    /**
                     * Creates a new CloudIdentityInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudIdentityInfo instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ICloudIdentityInfo): google.cloud.channel.v1.CloudIdentityInfo;

                    /**
                     * Encodes the specified CloudIdentityInfo message. Does not implicitly {@link google.cloud.channel.v1.CloudIdentityInfo.verify|verify} messages.
                     * @param message CloudIdentityInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ICloudIdentityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudIdentityInfo message, length delimited. Does not implicitly {@link google.cloud.channel.v1.CloudIdentityInfo.verify|verify} messages.
                     * @param message CloudIdentityInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ICloudIdentityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudIdentityInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudIdentityInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.CloudIdentityInfo;

                    /**
                     * Decodes a CloudIdentityInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudIdentityInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.CloudIdentityInfo;

                    /**
                     * Verifies a CloudIdentityInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudIdentityInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudIdentityInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.CloudIdentityInfo;

                    /**
                     * Creates a plain object from a CloudIdentityInfo message. Also converts values to other types if specified.
                     * @param message CloudIdentityInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.CloudIdentityInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudIdentityInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CloudIdentityInfo {

                    /** CustomerType enum. */
                    enum CustomerType {
                        CUSTOMER_TYPE_UNSPECIFIED = 0,
                        DOMAIN = 1,
                        TEAM = 2
                    }
                }

                /** Properties of a Value. */
                interface IValue {

                    /** Value int64Value */
                    int64Value?: (number|Long|string|null);

                    /** Value stringValue */
                    stringValue?: (string|null);

                    /** Value doubleValue */
                    doubleValue?: (number|null);

                    /** Value protoValue */
                    protoValue?: (google.protobuf.IAny|null);

                    /** Value boolValue */
                    boolValue?: (boolean|null);
                }

                /** Represents a Value. */
                class Value implements IValue {

                    /**
                     * Constructs a new Value.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IValue);

                    /** Value int64Value. */
                    public int64Value?: (number|Long|string|null);

                    /** Value stringValue. */
                    public stringValue?: (string|null);

                    /** Value doubleValue. */
                    public doubleValue?: (number|null);

                    /** Value protoValue. */
                    public protoValue?: (google.protobuf.IAny|null);

                    /** Value boolValue. */
                    public boolValue?: (boolean|null);

                    /** Value kind. */
                    public kind?: ("int64Value"|"stringValue"|"doubleValue"|"protoValue"|"boolValue");

                    /**
                     * Creates a new Value instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Value instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IValue): google.cloud.channel.v1.Value;

                    /**
                     * Encodes the specified Value message. Does not implicitly {@link google.cloud.channel.v1.Value.verify|verify} messages.
                     * @param message Value message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Value message, length delimited. Does not implicitly {@link google.cloud.channel.v1.Value.verify|verify} messages.
                     * @param message Value message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Value message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Value
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.Value;

                    /**
                     * Decodes a Value message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Value
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.Value;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.Value;

                    /**
                     * Creates a plain object from a Value message. Also converts values to other types if specified.
                     * @param message Value
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Value to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AdminUser. */
                interface IAdminUser {

                    /** AdminUser email */
                    email?: (string|null);

                    /** AdminUser givenName */
                    givenName?: (string|null);

                    /** AdminUser familyName */
                    familyName?: (string|null);
                }

                /** Represents an AdminUser. */
                class AdminUser implements IAdminUser {

                    /**
                     * Constructs a new AdminUser.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IAdminUser);

                    /** AdminUser email. */
                    public email: string;

                    /** AdminUser givenName. */
                    public givenName: string;

                    /** AdminUser familyName. */
                    public familyName: string;

                    /**
                     * Creates a new AdminUser instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AdminUser instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IAdminUser): google.cloud.channel.v1.AdminUser;

                    /**
                     * Encodes the specified AdminUser message. Does not implicitly {@link google.cloud.channel.v1.AdminUser.verify|verify} messages.
                     * @param message AdminUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IAdminUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AdminUser message, length delimited. Does not implicitly {@link google.cloud.channel.v1.AdminUser.verify|verify} messages.
                     * @param message AdminUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IAdminUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AdminUser message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AdminUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.AdminUser;

                    /**
                     * Decodes an AdminUser message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AdminUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.AdminUser;

                    /**
                     * Verifies an AdminUser message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AdminUser message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AdminUser
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.AdminUser;

                    /**
                     * Creates a plain object from an AdminUser message. Also converts values to other types if specified.
                     * @param message AdminUser
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.AdminUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AdminUser to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Customer. */
                interface ICustomer {

                    /** Customer name */
                    name?: (string|null);

                    /** Customer orgDisplayName */
                    orgDisplayName?: (string|null);

                    /** Customer orgPostalAddress */
                    orgPostalAddress?: (google.type.IPostalAddress|null);

                    /** Customer primaryContactInfo */
                    primaryContactInfo?: (google.cloud.channel.v1.IContactInfo|null);

                    /** Customer alternateEmail */
                    alternateEmail?: (string|null);

                    /** Customer domain */
                    domain?: (string|null);

                    /** Customer createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Customer updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Customer cloudIdentityId */
                    cloudIdentityId?: (string|null);

                    /** Customer languageCode */
                    languageCode?: (string|null);

                    /** Customer cloudIdentityInfo */
                    cloudIdentityInfo?: (google.cloud.channel.v1.ICloudIdentityInfo|null);

                    /** Customer channelPartnerId */
                    channelPartnerId?: (string|null);
                }

                /** Represents a Customer. */
                class Customer implements ICustomer {

                    /**
                     * Constructs a new Customer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ICustomer);

                    /** Customer name. */
                    public name: string;

                    /** Customer orgDisplayName. */
                    public orgDisplayName: string;

                    /** Customer orgPostalAddress. */
                    public orgPostalAddress?: (google.type.IPostalAddress|null);

                    /** Customer primaryContactInfo. */
                    public primaryContactInfo?: (google.cloud.channel.v1.IContactInfo|null);

                    /** Customer alternateEmail. */
                    public alternateEmail: string;

                    /** Customer domain. */
                    public domain: string;

                    /** Customer createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Customer updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Customer cloudIdentityId. */
                    public cloudIdentityId: string;

                    /** Customer languageCode. */
                    public languageCode: string;

                    /** Customer cloudIdentityInfo. */
                    public cloudIdentityInfo?: (google.cloud.channel.v1.ICloudIdentityInfo|null);

                    /** Customer channelPartnerId. */
                    public channelPartnerId: string;

                    /**
                     * Creates a new Customer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Customer instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ICustomer): google.cloud.channel.v1.Customer;

                    /**
                     * Encodes the specified Customer message. Does not implicitly {@link google.cloud.channel.v1.Customer.verify|verify} messages.
                     * @param message Customer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Customer message, length delimited. Does not implicitly {@link google.cloud.channel.v1.Customer.verify|verify} messages.
                     * @param message Customer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Customer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Customer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.Customer;

                    /**
                     * Decodes a Customer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Customer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.Customer;

                    /**
                     * Verifies a Customer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Customer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Customer
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.Customer;

                    /**
                     * Creates a plain object from a Customer message. Also converts values to other types if specified.
                     * @param message Customer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.Customer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Customer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ContactInfo. */
                interface IContactInfo {

                    /** ContactInfo firstName */
                    firstName?: (string|null);

                    /** ContactInfo lastName */
                    lastName?: (string|null);

                    /** ContactInfo displayName */
                    displayName?: (string|null);

                    /** ContactInfo email */
                    email?: (string|null);

                    /** ContactInfo title */
                    title?: (string|null);

                    /** ContactInfo phone */
                    phone?: (string|null);
                }

                /** Represents a ContactInfo. */
                class ContactInfo implements IContactInfo {

                    /**
                     * Constructs a new ContactInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IContactInfo);

                    /** ContactInfo firstName. */
                    public firstName: string;

                    /** ContactInfo lastName. */
                    public lastName: string;

                    /** ContactInfo displayName. */
                    public displayName: string;

                    /** ContactInfo email. */
                    public email: string;

                    /** ContactInfo title. */
                    public title: string;

                    /** ContactInfo phone. */
                    public phone: string;

                    /**
                     * Creates a new ContactInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContactInfo instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IContactInfo): google.cloud.channel.v1.ContactInfo;

                    /**
                     * Encodes the specified ContactInfo message. Does not implicitly {@link google.cloud.channel.v1.ContactInfo.verify|verify} messages.
                     * @param message ContactInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IContactInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ContactInfo message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ContactInfo.verify|verify} messages.
                     * @param message ContactInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IContactInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContactInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContactInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ContactInfo;

                    /**
                     * Decodes a ContactInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ContactInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ContactInfo;

                    /**
                     * Verifies a ContactInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ContactInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ContactInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ContactInfo;

                    /**
                     * Creates a plain object from a ContactInfo message. Also converts values to other types if specified.
                     * @param message ContactInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ContactInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ContactInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Entitlement. */
                interface IEntitlement {

                    /** Entitlement name */
                    name?: (string|null);

                    /** Entitlement createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Entitlement updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Entitlement offer */
                    offer?: (string|null);

                    /** Entitlement commitmentSettings */
                    commitmentSettings?: (google.cloud.channel.v1.ICommitmentSettings|null);

                    /** Entitlement provisioningState */
                    provisioningState?: (google.cloud.channel.v1.Entitlement.ProvisioningState|keyof typeof google.cloud.channel.v1.Entitlement.ProvisioningState|null);

                    /** Entitlement provisionedService */
                    provisionedService?: (google.cloud.channel.v1.IProvisionedService|null);

                    /** Entitlement suspensionReasons */
                    suspensionReasons?: (google.cloud.channel.v1.Entitlement.SuspensionReason[]|null);

                    /** Entitlement purchaseOrderId */
                    purchaseOrderId?: (string|null);

                    /** Entitlement trialSettings */
                    trialSettings?: (google.cloud.channel.v1.ITrialSettings|null);

                    /** Entitlement associationInfo */
                    associationInfo?: (google.cloud.channel.v1.IAssociationInfo|null);

                    /** Entitlement parameters */
                    parameters?: (google.cloud.channel.v1.IParameter[]|null);
                }

                /** Represents an Entitlement. */
                class Entitlement implements IEntitlement {

                    /**
                     * Constructs a new Entitlement.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IEntitlement);

                    /** Entitlement name. */
                    public name: string;

                    /** Entitlement createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Entitlement updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Entitlement offer. */
                    public offer: string;

                    /** Entitlement commitmentSettings. */
                    public commitmentSettings?: (google.cloud.channel.v1.ICommitmentSettings|null);

                    /** Entitlement provisioningState. */
                    public provisioningState: (google.cloud.channel.v1.Entitlement.ProvisioningState|keyof typeof google.cloud.channel.v1.Entitlement.ProvisioningState);

                    /** Entitlement provisionedService. */
                    public provisionedService?: (google.cloud.channel.v1.IProvisionedService|null);

                    /** Entitlement suspensionReasons. */
                    public suspensionReasons: google.cloud.channel.v1.Entitlement.SuspensionReason[];

                    /** Entitlement purchaseOrderId. */
                    public purchaseOrderId: string;

                    /** Entitlement trialSettings. */
                    public trialSettings?: (google.cloud.channel.v1.ITrialSettings|null);

                    /** Entitlement associationInfo. */
                    public associationInfo?: (google.cloud.channel.v1.IAssociationInfo|null);

                    /** Entitlement parameters. */
                    public parameters: google.cloud.channel.v1.IParameter[];

                    /**
                     * Creates a new Entitlement instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Entitlement instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IEntitlement): google.cloud.channel.v1.Entitlement;

                    /**
                     * Encodes the specified Entitlement message. Does not implicitly {@link google.cloud.channel.v1.Entitlement.verify|verify} messages.
                     * @param message Entitlement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IEntitlement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Entitlement message, length delimited. Does not implicitly {@link google.cloud.channel.v1.Entitlement.verify|verify} messages.
                     * @param message Entitlement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IEntitlement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Entitlement message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Entitlement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.Entitlement;

                    /**
                     * Decodes an Entitlement message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Entitlement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.Entitlement;

                    /**
                     * Verifies an Entitlement message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Entitlement message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Entitlement
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.Entitlement;

                    /**
                     * Creates a plain object from an Entitlement message. Also converts values to other types if specified.
                     * @param message Entitlement
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.Entitlement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Entitlement to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Entitlement {

                    /** ProvisioningState enum. */
                    enum ProvisioningState {
                        PROVISIONING_STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        SUSPENDED = 5
                    }

                    /** SuspensionReason enum. */
                    enum SuspensionReason {
                        SUSPENSION_REASON_UNSPECIFIED = 0,
                        RESELLER_INITIATED = 1,
                        TRIAL_ENDED = 2,
                        RENEWAL_WITH_TYPE_CANCEL = 3,
                        PENDING_TOS_ACCEPTANCE = 4,
                        OTHER = 100
                    }
                }

                /** Properties of a Parameter. */
                interface IParameter {

                    /** Parameter name */
                    name?: (string|null);

                    /** Parameter value */
                    value?: (google.cloud.channel.v1.IValue|null);

                    /** Parameter editable */
                    editable?: (boolean|null);
                }

                /** Represents a Parameter. */
                class Parameter implements IParameter {

                    /**
                     * Constructs a new Parameter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IParameter);

                    /** Parameter name. */
                    public name: string;

                    /** Parameter value. */
                    public value?: (google.cloud.channel.v1.IValue|null);

                    /** Parameter editable. */
                    public editable: boolean;

                    /**
                     * Creates a new Parameter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Parameter instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IParameter): google.cloud.channel.v1.Parameter;

                    /**
                     * Encodes the specified Parameter message. Does not implicitly {@link google.cloud.channel.v1.Parameter.verify|verify} messages.
                     * @param message Parameter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Parameter message, length delimited. Does not implicitly {@link google.cloud.channel.v1.Parameter.verify|verify} messages.
                     * @param message Parameter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Parameter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.Parameter;

                    /**
                     * Decodes a Parameter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.Parameter;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.Parameter;

                    /**
                     * Creates a plain object from a Parameter message. Also converts values to other types if specified.
                     * @param message Parameter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.Parameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Parameter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AssociationInfo. */
                interface IAssociationInfo {

                    /** AssociationInfo baseEntitlement */
                    baseEntitlement?: (string|null);
                }

                /** Represents an AssociationInfo. */
                class AssociationInfo implements IAssociationInfo {

                    /**
                     * Constructs a new AssociationInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IAssociationInfo);

                    /** AssociationInfo baseEntitlement. */
                    public baseEntitlement: string;

                    /**
                     * Creates a new AssociationInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AssociationInfo instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IAssociationInfo): google.cloud.channel.v1.AssociationInfo;

                    /**
                     * Encodes the specified AssociationInfo message. Does not implicitly {@link google.cloud.channel.v1.AssociationInfo.verify|verify} messages.
                     * @param message AssociationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IAssociationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AssociationInfo message, length delimited. Does not implicitly {@link google.cloud.channel.v1.AssociationInfo.verify|verify} messages.
                     * @param message AssociationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IAssociationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AssociationInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AssociationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.AssociationInfo;

                    /**
                     * Decodes an AssociationInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AssociationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.AssociationInfo;

                    /**
                     * Verifies an AssociationInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AssociationInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AssociationInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.AssociationInfo;

                    /**
                     * Creates a plain object from an AssociationInfo message. Also converts values to other types if specified.
                     * @param message AssociationInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.AssociationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AssociationInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ProvisionedService. */
                interface IProvisionedService {

                    /** ProvisionedService provisioningId */
                    provisioningId?: (string|null);

                    /** ProvisionedService productId */
                    productId?: (string|null);

                    /** ProvisionedService skuId */
                    skuId?: (string|null);
                }

                /** Represents a ProvisionedService. */
                class ProvisionedService implements IProvisionedService {

                    /**
                     * Constructs a new ProvisionedService.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IProvisionedService);

                    /** ProvisionedService provisioningId. */
                    public provisioningId: string;

                    /** ProvisionedService productId. */
                    public productId: string;

                    /** ProvisionedService skuId. */
                    public skuId: string;

                    /**
                     * Creates a new ProvisionedService instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProvisionedService instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IProvisionedService): google.cloud.channel.v1.ProvisionedService;

                    /**
                     * Encodes the specified ProvisionedService message. Does not implicitly {@link google.cloud.channel.v1.ProvisionedService.verify|verify} messages.
                     * @param message ProvisionedService message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IProvisionedService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProvisionedService message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ProvisionedService.verify|verify} messages.
                     * @param message ProvisionedService message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IProvisionedService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProvisionedService message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProvisionedService
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ProvisionedService;

                    /**
                     * Decodes a ProvisionedService message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProvisionedService
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ProvisionedService;

                    /**
                     * Verifies a ProvisionedService message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProvisionedService message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProvisionedService
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ProvisionedService;

                    /**
                     * Creates a plain object from a ProvisionedService message. Also converts values to other types if specified.
                     * @param message ProvisionedService
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ProvisionedService, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProvisionedService to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CommitmentSettings. */
                interface ICommitmentSettings {

                    /** CommitmentSettings startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** CommitmentSettings endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** CommitmentSettings renewalSettings */
                    renewalSettings?: (google.cloud.channel.v1.IRenewalSettings|null);
                }

                /** Represents a CommitmentSettings. */
                class CommitmentSettings implements ICommitmentSettings {

                    /**
                     * Constructs a new CommitmentSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ICommitmentSettings);

                    /** CommitmentSettings startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** CommitmentSettings endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** CommitmentSettings renewalSettings. */
                    public renewalSettings?: (google.cloud.channel.v1.IRenewalSettings|null);

                    /**
                     * Creates a new CommitmentSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommitmentSettings instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ICommitmentSettings): google.cloud.channel.v1.CommitmentSettings;

                    /**
                     * Encodes the specified CommitmentSettings message. Does not implicitly {@link google.cloud.channel.v1.CommitmentSettings.verify|verify} messages.
                     * @param message CommitmentSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ICommitmentSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommitmentSettings message, length delimited. Does not implicitly {@link google.cloud.channel.v1.CommitmentSettings.verify|verify} messages.
                     * @param message CommitmentSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ICommitmentSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommitmentSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommitmentSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.CommitmentSettings;

                    /**
                     * Decodes a CommitmentSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommitmentSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.CommitmentSettings;

                    /**
                     * Verifies a CommitmentSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommitmentSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommitmentSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.CommitmentSettings;

                    /**
                     * Creates a plain object from a CommitmentSettings message. Also converts values to other types if specified.
                     * @param message CommitmentSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.CommitmentSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommitmentSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RenewalSettings. */
                interface IRenewalSettings {

                    /** RenewalSettings enableRenewal */
                    enableRenewal?: (boolean|null);

                    /** RenewalSettings resizeUnitCount */
                    resizeUnitCount?: (boolean|null);

                    /** RenewalSettings paymentPlan */
                    paymentPlan?: (google.cloud.channel.v1.PaymentPlan|keyof typeof google.cloud.channel.v1.PaymentPlan|null);

                    /** RenewalSettings paymentCycle */
                    paymentCycle?: (google.cloud.channel.v1.IPeriod|null);
                }

                /** Represents a RenewalSettings. */
                class RenewalSettings implements IRenewalSettings {

                    /**
                     * Constructs a new RenewalSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IRenewalSettings);

                    /** RenewalSettings enableRenewal. */
                    public enableRenewal: boolean;

                    /** RenewalSettings resizeUnitCount. */
                    public resizeUnitCount: boolean;

                    /** RenewalSettings paymentPlan. */
                    public paymentPlan: (google.cloud.channel.v1.PaymentPlan|keyof typeof google.cloud.channel.v1.PaymentPlan);

                    /** RenewalSettings paymentCycle. */
                    public paymentCycle?: (google.cloud.channel.v1.IPeriod|null);

                    /**
                     * Creates a new RenewalSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RenewalSettings instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IRenewalSettings): google.cloud.channel.v1.RenewalSettings;

                    /**
                     * Encodes the specified RenewalSettings message. Does not implicitly {@link google.cloud.channel.v1.RenewalSettings.verify|verify} messages.
                     * @param message RenewalSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IRenewalSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RenewalSettings message, length delimited. Does not implicitly {@link google.cloud.channel.v1.RenewalSettings.verify|verify} messages.
                     * @param message RenewalSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IRenewalSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RenewalSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RenewalSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.RenewalSettings;

                    /**
                     * Decodes a RenewalSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RenewalSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.RenewalSettings;

                    /**
                     * Verifies a RenewalSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RenewalSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RenewalSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.RenewalSettings;

                    /**
                     * Creates a plain object from a RenewalSettings message. Also converts values to other types if specified.
                     * @param message RenewalSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.RenewalSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RenewalSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TrialSettings. */
                interface ITrialSettings {

                    /** TrialSettings trial */
                    trial?: (boolean|null);

                    /** TrialSettings endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TrialSettings. */
                class TrialSettings implements ITrialSettings {

                    /**
                     * Constructs a new TrialSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ITrialSettings);

                    /** TrialSettings trial. */
                    public trial: boolean;

                    /** TrialSettings endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TrialSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TrialSettings instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ITrialSettings): google.cloud.channel.v1.TrialSettings;

                    /**
                     * Encodes the specified TrialSettings message. Does not implicitly {@link google.cloud.channel.v1.TrialSettings.verify|verify} messages.
                     * @param message TrialSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ITrialSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TrialSettings message, length delimited. Does not implicitly {@link google.cloud.channel.v1.TrialSettings.verify|verify} messages.
                     * @param message TrialSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ITrialSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TrialSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TrialSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.TrialSettings;

                    /**
                     * Decodes a TrialSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TrialSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.TrialSettings;

                    /**
                     * Verifies a TrialSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TrialSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TrialSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.TrialSettings;

                    /**
                     * Creates a plain object from a TrialSettings message. Also converts values to other types if specified.
                     * @param message TrialSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.TrialSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TrialSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TransferableSku. */
                interface ITransferableSku {

                    /** TransferableSku transferEligibility */
                    transferEligibility?: (google.cloud.channel.v1.ITransferEligibility|null);

                    /** TransferableSku sku */
                    sku?: (google.cloud.channel.v1.ISku|null);

                    /** TransferableSku legacySku */
                    legacySku?: (google.cloud.channel.v1.ISku|null);
                }

                /** Represents a TransferableSku. */
                class TransferableSku implements ITransferableSku {

                    /**
                     * Constructs a new TransferableSku.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ITransferableSku);

                    /** TransferableSku transferEligibility. */
                    public transferEligibility?: (google.cloud.channel.v1.ITransferEligibility|null);

                    /** TransferableSku sku. */
                    public sku?: (google.cloud.channel.v1.ISku|null);

                    /** TransferableSku legacySku. */
                    public legacySku?: (google.cloud.channel.v1.ISku|null);

                    /**
                     * Creates a new TransferableSku instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransferableSku instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ITransferableSku): google.cloud.channel.v1.TransferableSku;

                    /**
                     * Encodes the specified TransferableSku message. Does not implicitly {@link google.cloud.channel.v1.TransferableSku.verify|verify} messages.
                     * @param message TransferableSku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ITransferableSku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransferableSku message, length delimited. Does not implicitly {@link google.cloud.channel.v1.TransferableSku.verify|verify} messages.
                     * @param message TransferableSku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ITransferableSku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransferableSku message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransferableSku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.TransferableSku;

                    /**
                     * Decodes a TransferableSku message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransferableSku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.TransferableSku;

                    /**
                     * Verifies a TransferableSku message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransferableSku message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransferableSku
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.TransferableSku;

                    /**
                     * Creates a plain object from a TransferableSku message. Also converts values to other types if specified.
                     * @param message TransferableSku
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.TransferableSku, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransferableSku to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TransferEligibility. */
                interface ITransferEligibility {

                    /** TransferEligibility isEligible */
                    isEligible?: (boolean|null);

                    /** TransferEligibility description */
                    description?: (string|null);

                    /** TransferEligibility ineligibilityReason */
                    ineligibilityReason?: (google.cloud.channel.v1.TransferEligibility.Reason|keyof typeof google.cloud.channel.v1.TransferEligibility.Reason|null);
                }

                /** Represents a TransferEligibility. */
                class TransferEligibility implements ITransferEligibility {

                    /**
                     * Constructs a new TransferEligibility.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ITransferEligibility);

                    /** TransferEligibility isEligible. */
                    public isEligible: boolean;

                    /** TransferEligibility description. */
                    public description: string;

                    /** TransferEligibility ineligibilityReason. */
                    public ineligibilityReason: (google.cloud.channel.v1.TransferEligibility.Reason|keyof typeof google.cloud.channel.v1.TransferEligibility.Reason);

                    /**
                     * Creates a new TransferEligibility instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransferEligibility instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ITransferEligibility): google.cloud.channel.v1.TransferEligibility;

                    /**
                     * Encodes the specified TransferEligibility message. Does not implicitly {@link google.cloud.channel.v1.TransferEligibility.verify|verify} messages.
                     * @param message TransferEligibility message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ITransferEligibility, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransferEligibility message, length delimited. Does not implicitly {@link google.cloud.channel.v1.TransferEligibility.verify|verify} messages.
                     * @param message TransferEligibility message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ITransferEligibility, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransferEligibility message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransferEligibility
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.TransferEligibility;

                    /**
                     * Decodes a TransferEligibility message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransferEligibility
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.TransferEligibility;

                    /**
                     * Verifies a TransferEligibility message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransferEligibility message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransferEligibility
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.TransferEligibility;

                    /**
                     * Creates a plain object from a TransferEligibility message. Also converts values to other types if specified.
                     * @param message TransferEligibility
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.TransferEligibility, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransferEligibility to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace TransferEligibility {

                    /** Reason enum. */
                    enum Reason {
                        REASON_UNSPECIFIED = 0,
                        PENDING_TOS_ACCEPTANCE = 1,
                        SKU_NOT_ELIGIBLE = 2,
                        SKU_SUSPENDED = 3
                    }
                }

                /** PromotionalOrderType enum. */
                enum PromotionalOrderType {
                    PROMOTIONAL_TYPE_UNSPECIFIED = 0,
                    NEW_UPGRADE = 1,
                    TRANSFER = 2,
                    PROMOTION_SWITCH = 3
                }

                /** PaymentPlan enum. */
                enum PaymentPlan {
                    PAYMENT_PLAN_UNSPECIFIED = 0,
                    COMMITMENT = 1,
                    FLEXIBLE = 2,
                    FREE = 3,
                    TRIAL = 4,
                    OFFLINE = 5
                }

                /** PaymentType enum. */
                enum PaymentType {
                    PAYMENT_TYPE_UNSPECIFIED = 0,
                    PREPAY = 1,
                    POSTPAY = 2
                }

                /** ResourceType enum. */
                enum ResourceType {
                    RESOURCE_TYPE_UNSPECIFIED = 0,
                    SEAT = 1,
                    MAU = 2,
                    GB = 3,
                    LICENSED_USER = 4,
                    MINUTES = 5,
                    IAAS_USAGE = 6,
                    SUBSCRIPTION = 7
                }

                /** PeriodType enum. */
                enum PeriodType {
                    PERIOD_TYPE_UNSPECIFIED = 0,
                    DAY = 1,
                    MONTH = 2,
                    YEAR = 3
                }

                /** Properties of an Offer. */
                interface IOffer {

                    /** Offer name */
                    name?: (string|null);

                    /** Offer marketingInfo */
                    marketingInfo?: (google.cloud.channel.v1.IMarketingInfo|null);

                    /** Offer sku */
                    sku?: (google.cloud.channel.v1.ISku|null);

                    /** Offer plan */
                    plan?: (google.cloud.channel.v1.IPlan|null);

                    /** Offer constraints */
                    constraints?: (google.cloud.channel.v1.IConstraints|null);

                    /** Offer priceByResources */
                    priceByResources?: (google.cloud.channel.v1.IPriceByResource[]|null);

                    /** Offer startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Offer endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** Offer parameterDefinitions */
                    parameterDefinitions?: (google.cloud.channel.v1.IParameterDefinition[]|null);
                }

                /** Represents an Offer. */
                class Offer implements IOffer {

                    /**
                     * Constructs a new Offer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IOffer);

                    /** Offer name. */
                    public name: string;

                    /** Offer marketingInfo. */
                    public marketingInfo?: (google.cloud.channel.v1.IMarketingInfo|null);

                    /** Offer sku. */
                    public sku?: (google.cloud.channel.v1.ISku|null);

                    /** Offer plan. */
                    public plan?: (google.cloud.channel.v1.IPlan|null);

                    /** Offer constraints. */
                    public constraints?: (google.cloud.channel.v1.IConstraints|null);

                    /** Offer priceByResources. */
                    public priceByResources: google.cloud.channel.v1.IPriceByResource[];

                    /** Offer startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Offer endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Offer parameterDefinitions. */
                    public parameterDefinitions: google.cloud.channel.v1.IParameterDefinition[];

                    /**
                     * Creates a new Offer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Offer instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IOffer): google.cloud.channel.v1.Offer;

                    /**
                     * Encodes the specified Offer message. Does not implicitly {@link google.cloud.channel.v1.Offer.verify|verify} messages.
                     * @param message Offer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Offer message, length delimited. Does not implicitly {@link google.cloud.channel.v1.Offer.verify|verify} messages.
                     * @param message Offer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Offer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Offer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.Offer;

                    /**
                     * Decodes an Offer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Offer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.Offer;

                    /**
                     * Verifies an Offer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Offer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Offer
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.Offer;

                    /**
                     * Creates a plain object from an Offer message. Also converts values to other types if specified.
                     * @param message Offer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.Offer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Offer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ParameterDefinition. */
                interface IParameterDefinition {

                    /** ParameterDefinition name */
                    name?: (string|null);

                    /** ParameterDefinition parameterType */
                    parameterType?: (google.cloud.channel.v1.ParameterDefinition.ParameterType|keyof typeof google.cloud.channel.v1.ParameterDefinition.ParameterType|null);

                    /** ParameterDefinition minValue */
                    minValue?: (google.cloud.channel.v1.IValue|null);

                    /** ParameterDefinition maxValue */
                    maxValue?: (google.cloud.channel.v1.IValue|null);

                    /** ParameterDefinition allowedValues */
                    allowedValues?: (google.cloud.channel.v1.IValue[]|null);

                    /** ParameterDefinition optional */
                    optional?: (boolean|null);
                }

                /** Represents a ParameterDefinition. */
                class ParameterDefinition implements IParameterDefinition {

                    /**
                     * Constructs a new ParameterDefinition.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IParameterDefinition);

                    /** ParameterDefinition name. */
                    public name: string;

                    /** ParameterDefinition parameterType. */
                    public parameterType: (google.cloud.channel.v1.ParameterDefinition.ParameterType|keyof typeof google.cloud.channel.v1.ParameterDefinition.ParameterType);

                    /** ParameterDefinition minValue. */
                    public minValue?: (google.cloud.channel.v1.IValue|null);

                    /** ParameterDefinition maxValue. */
                    public maxValue?: (google.cloud.channel.v1.IValue|null);

                    /** ParameterDefinition allowedValues. */
                    public allowedValues: google.cloud.channel.v1.IValue[];

                    /** ParameterDefinition optional. */
                    public optional: boolean;

                    /**
                     * Creates a new ParameterDefinition instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ParameterDefinition instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IParameterDefinition): google.cloud.channel.v1.ParameterDefinition;

                    /**
                     * Encodes the specified ParameterDefinition message. Does not implicitly {@link google.cloud.channel.v1.ParameterDefinition.verify|verify} messages.
                     * @param message ParameterDefinition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IParameterDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ParameterDefinition message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ParameterDefinition.verify|verify} messages.
                     * @param message ParameterDefinition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IParameterDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ParameterDefinition message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ParameterDefinition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ParameterDefinition;

                    /**
                     * Decodes a ParameterDefinition message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ParameterDefinition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ParameterDefinition;

                    /**
                     * Verifies a ParameterDefinition message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ParameterDefinition message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ParameterDefinition
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ParameterDefinition;

                    /**
                     * Creates a plain object from a ParameterDefinition message. Also converts values to other types if specified.
                     * @param message ParameterDefinition
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ParameterDefinition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ParameterDefinition to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ParameterDefinition {

                    /** ParameterType enum. */
                    enum ParameterType {
                        PARAMETER_TYPE_UNSPECIFIED = 0,
                        INT64 = 1,
                        STRING = 2,
                        DOUBLE = 3
                    }
                }

                /** Properties of a Constraints. */
                interface IConstraints {

                    /** Constraints customerConstraints */
                    customerConstraints?: (google.cloud.channel.v1.ICustomerConstraints|null);
                }

                /** Represents a Constraints. */
                class Constraints implements IConstraints {

                    /**
                     * Constructs a new Constraints.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IConstraints);

                    /** Constraints customerConstraints. */
                    public customerConstraints?: (google.cloud.channel.v1.ICustomerConstraints|null);

                    /**
                     * Creates a new Constraints instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Constraints instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IConstraints): google.cloud.channel.v1.Constraints;

                    /**
                     * Encodes the specified Constraints message. Does not implicitly {@link google.cloud.channel.v1.Constraints.verify|verify} messages.
                     * @param message Constraints message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Constraints message, length delimited. Does not implicitly {@link google.cloud.channel.v1.Constraints.verify|verify} messages.
                     * @param message Constraints message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Constraints message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Constraints
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.Constraints;

                    /**
                     * Decodes a Constraints message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Constraints
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.Constraints;

                    /**
                     * Verifies a Constraints message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Constraints message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Constraints
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.Constraints;

                    /**
                     * Creates a plain object from a Constraints message. Also converts values to other types if specified.
                     * @param message Constraints
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.Constraints, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Constraints to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CustomerConstraints. */
                interface ICustomerConstraints {

                    /** CustomerConstraints allowedRegions */
                    allowedRegions?: (string[]|null);

                    /** CustomerConstraints allowedCustomerTypes */
                    allowedCustomerTypes?: (google.cloud.channel.v1.CloudIdentityInfo.CustomerType[]|null);

                    /** CustomerConstraints promotionalOrderTypes */
                    promotionalOrderTypes?: (google.cloud.channel.v1.PromotionalOrderType[]|null);
                }

                /** Represents a CustomerConstraints. */
                class CustomerConstraints implements ICustomerConstraints {

                    /**
                     * Constructs a new CustomerConstraints.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ICustomerConstraints);

                    /** CustomerConstraints allowedRegions. */
                    public allowedRegions: string[];

                    /** CustomerConstraints allowedCustomerTypes. */
                    public allowedCustomerTypes: google.cloud.channel.v1.CloudIdentityInfo.CustomerType[];

                    /** CustomerConstraints promotionalOrderTypes. */
                    public promotionalOrderTypes: google.cloud.channel.v1.PromotionalOrderType[];

                    /**
                     * Creates a new CustomerConstraints instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomerConstraints instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ICustomerConstraints): google.cloud.channel.v1.CustomerConstraints;

                    /**
                     * Encodes the specified CustomerConstraints message. Does not implicitly {@link google.cloud.channel.v1.CustomerConstraints.verify|verify} messages.
                     * @param message CustomerConstraints message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ICustomerConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomerConstraints message, length delimited. Does not implicitly {@link google.cloud.channel.v1.CustomerConstraints.verify|verify} messages.
                     * @param message CustomerConstraints message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ICustomerConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomerConstraints message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomerConstraints
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.CustomerConstraints;

                    /**
                     * Decodes a CustomerConstraints message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomerConstraints
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.CustomerConstraints;

                    /**
                     * Verifies a CustomerConstraints message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomerConstraints message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomerConstraints
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.CustomerConstraints;

                    /**
                     * Creates a plain object from a CustomerConstraints message. Also converts values to other types if specified.
                     * @param message CustomerConstraints
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.CustomerConstraints, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomerConstraints to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Plan. */
                interface IPlan {

                    /** Plan paymentPlan */
                    paymentPlan?: (google.cloud.channel.v1.PaymentPlan|keyof typeof google.cloud.channel.v1.PaymentPlan|null);

                    /** Plan paymentType */
                    paymentType?: (google.cloud.channel.v1.PaymentType|keyof typeof google.cloud.channel.v1.PaymentType|null);

                    /** Plan paymentCycle */
                    paymentCycle?: (google.cloud.channel.v1.IPeriod|null);

                    /** Plan trialPeriod */
                    trialPeriod?: (google.cloud.channel.v1.IPeriod|null);

                    /** Plan billingAccount */
                    billingAccount?: (string|null);
                }

                /** Represents a Plan. */
                class Plan implements IPlan {

                    /**
                     * Constructs a new Plan.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IPlan);

                    /** Plan paymentPlan. */
                    public paymentPlan: (google.cloud.channel.v1.PaymentPlan|keyof typeof google.cloud.channel.v1.PaymentPlan);

                    /** Plan paymentType. */
                    public paymentType: (google.cloud.channel.v1.PaymentType|keyof typeof google.cloud.channel.v1.PaymentType);

                    /** Plan paymentCycle. */
                    public paymentCycle?: (google.cloud.channel.v1.IPeriod|null);

                    /** Plan trialPeriod. */
                    public trialPeriod?: (google.cloud.channel.v1.IPeriod|null);

                    /** Plan billingAccount. */
                    public billingAccount: string;

                    /**
                     * Creates a new Plan instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Plan instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IPlan): google.cloud.channel.v1.Plan;

                    /**
                     * Encodes the specified Plan message. Does not implicitly {@link google.cloud.channel.v1.Plan.verify|verify} messages.
                     * @param message Plan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Plan message, length delimited. Does not implicitly {@link google.cloud.channel.v1.Plan.verify|verify} messages.
                     * @param message Plan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Plan message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Plan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.Plan;

                    /**
                     * Decodes a Plan message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Plan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.Plan;

                    /**
                     * Verifies a Plan message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Plan message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Plan
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.Plan;

                    /**
                     * Creates a plain object from a Plan message. Also converts values to other types if specified.
                     * @param message Plan
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.Plan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Plan to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PriceByResource. */
                interface IPriceByResource {

                    /** PriceByResource resourceType */
                    resourceType?: (google.cloud.channel.v1.ResourceType|keyof typeof google.cloud.channel.v1.ResourceType|null);

                    /** PriceByResource price */
                    price?: (google.cloud.channel.v1.IPrice|null);

                    /** PriceByResource pricePhases */
                    pricePhases?: (google.cloud.channel.v1.IPricePhase[]|null);
                }

                /** Represents a PriceByResource. */
                class PriceByResource implements IPriceByResource {

                    /**
                     * Constructs a new PriceByResource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IPriceByResource);

                    /** PriceByResource resourceType. */
                    public resourceType: (google.cloud.channel.v1.ResourceType|keyof typeof google.cloud.channel.v1.ResourceType);

                    /** PriceByResource price. */
                    public price?: (google.cloud.channel.v1.IPrice|null);

                    /** PriceByResource pricePhases. */
                    public pricePhases: google.cloud.channel.v1.IPricePhase[];

                    /**
                     * Creates a new PriceByResource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PriceByResource instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IPriceByResource): google.cloud.channel.v1.PriceByResource;

                    /**
                     * Encodes the specified PriceByResource message. Does not implicitly {@link google.cloud.channel.v1.PriceByResource.verify|verify} messages.
                     * @param message PriceByResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IPriceByResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PriceByResource message, length delimited. Does not implicitly {@link google.cloud.channel.v1.PriceByResource.verify|verify} messages.
                     * @param message PriceByResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IPriceByResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PriceByResource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PriceByResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.PriceByResource;

                    /**
                     * Decodes a PriceByResource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PriceByResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.PriceByResource;

                    /**
                     * Verifies a PriceByResource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PriceByResource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PriceByResource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.PriceByResource;

                    /**
                     * Creates a plain object from a PriceByResource message. Also converts values to other types if specified.
                     * @param message PriceByResource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.PriceByResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PriceByResource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Price. */
                interface IPrice {

                    /** Price basePrice */
                    basePrice?: (google.type.IMoney|null);

                    /** Price discount */
                    discount?: (number|null);

                    /** Price effectivePrice */
                    effectivePrice?: (google.type.IMoney|null);

                    /** Price externalPriceUri */
                    externalPriceUri?: (string|null);
                }

                /** Represents a Price. */
                class Price implements IPrice {

                    /**
                     * Constructs a new Price.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IPrice);

                    /** Price basePrice. */
                    public basePrice?: (google.type.IMoney|null);

                    /** Price discount. */
                    public discount: number;

                    /** Price effectivePrice. */
                    public effectivePrice?: (google.type.IMoney|null);

                    /** Price externalPriceUri. */
                    public externalPriceUri: string;

                    /**
                     * Creates a new Price instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Price instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IPrice): google.cloud.channel.v1.Price;

                    /**
                     * Encodes the specified Price message. Does not implicitly {@link google.cloud.channel.v1.Price.verify|verify} messages.
                     * @param message Price message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Price message, length delimited. Does not implicitly {@link google.cloud.channel.v1.Price.verify|verify} messages.
                     * @param message Price message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Price message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Price
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.Price;

                    /**
                     * Decodes a Price message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Price
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.Price;

                    /**
                     * Verifies a Price message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Price message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Price
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.Price;

                    /**
                     * Creates a plain object from a Price message. Also converts values to other types if specified.
                     * @param message Price
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.Price, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Price to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PricePhase. */
                interface IPricePhase {

                    /** PricePhase periodType */
                    periodType?: (google.cloud.channel.v1.PeriodType|keyof typeof google.cloud.channel.v1.PeriodType|null);

                    /** PricePhase firstPeriod */
                    firstPeriod?: (number|null);

                    /** PricePhase lastPeriod */
                    lastPeriod?: (number|null);

                    /** PricePhase price */
                    price?: (google.cloud.channel.v1.IPrice|null);

                    /** PricePhase priceTiers */
                    priceTiers?: (google.cloud.channel.v1.IPriceTier[]|null);
                }

                /** Represents a PricePhase. */
                class PricePhase implements IPricePhase {

                    /**
                     * Constructs a new PricePhase.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IPricePhase);

                    /** PricePhase periodType. */
                    public periodType: (google.cloud.channel.v1.PeriodType|keyof typeof google.cloud.channel.v1.PeriodType);

                    /** PricePhase firstPeriod. */
                    public firstPeriod: number;

                    /** PricePhase lastPeriod. */
                    public lastPeriod: number;

                    /** PricePhase price. */
                    public price?: (google.cloud.channel.v1.IPrice|null);

                    /** PricePhase priceTiers. */
                    public priceTiers: google.cloud.channel.v1.IPriceTier[];

                    /**
                     * Creates a new PricePhase instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PricePhase instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IPricePhase): google.cloud.channel.v1.PricePhase;

                    /**
                     * Encodes the specified PricePhase message. Does not implicitly {@link google.cloud.channel.v1.PricePhase.verify|verify} messages.
                     * @param message PricePhase message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IPricePhase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PricePhase message, length delimited. Does not implicitly {@link google.cloud.channel.v1.PricePhase.verify|verify} messages.
                     * @param message PricePhase message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IPricePhase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PricePhase message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PricePhase
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.PricePhase;

                    /**
                     * Decodes a PricePhase message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PricePhase
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.PricePhase;

                    /**
                     * Verifies a PricePhase message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PricePhase message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PricePhase
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.PricePhase;

                    /**
                     * Creates a plain object from a PricePhase message. Also converts values to other types if specified.
                     * @param message PricePhase
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.PricePhase, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PricePhase to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PriceTier. */
                interface IPriceTier {

                    /** PriceTier firstResource */
                    firstResource?: (number|null);

                    /** PriceTier lastResource */
                    lastResource?: (number|null);

                    /** PriceTier price */
                    price?: (google.cloud.channel.v1.IPrice|null);
                }

                /** Represents a PriceTier. */
                class PriceTier implements IPriceTier {

                    /**
                     * Constructs a new PriceTier.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IPriceTier);

                    /** PriceTier firstResource. */
                    public firstResource: number;

                    /** PriceTier lastResource. */
                    public lastResource: number;

                    /** PriceTier price. */
                    public price?: (google.cloud.channel.v1.IPrice|null);

                    /**
                     * Creates a new PriceTier instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PriceTier instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IPriceTier): google.cloud.channel.v1.PriceTier;

                    /**
                     * Encodes the specified PriceTier message. Does not implicitly {@link google.cloud.channel.v1.PriceTier.verify|verify} messages.
                     * @param message PriceTier message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IPriceTier, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PriceTier message, length delimited. Does not implicitly {@link google.cloud.channel.v1.PriceTier.verify|verify} messages.
                     * @param message PriceTier message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IPriceTier, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PriceTier message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PriceTier
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.PriceTier;

                    /**
                     * Decodes a PriceTier message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PriceTier
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.PriceTier;

                    /**
                     * Verifies a PriceTier message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PriceTier message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PriceTier
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.PriceTier;

                    /**
                     * Creates a plain object from a PriceTier message. Also converts values to other types if specified.
                     * @param message PriceTier
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.PriceTier, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PriceTier to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Period. */
                interface IPeriod {

                    /** Period duration */
                    duration?: (number|null);

                    /** Period periodType */
                    periodType?: (google.cloud.channel.v1.PeriodType|keyof typeof google.cloud.channel.v1.PeriodType|null);
                }

                /** Represents a Period. */
                class Period implements IPeriod {

                    /**
                     * Constructs a new Period.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IPeriod);

                    /** Period duration. */
                    public duration: number;

                    /** Period periodType. */
                    public periodType: (google.cloud.channel.v1.PeriodType|keyof typeof google.cloud.channel.v1.PeriodType);

                    /**
                     * Creates a new Period instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Period instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IPeriod): google.cloud.channel.v1.Period;

                    /**
                     * Encodes the specified Period message. Does not implicitly {@link google.cloud.channel.v1.Period.verify|verify} messages.
                     * @param message Period message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Period message, length delimited. Does not implicitly {@link google.cloud.channel.v1.Period.verify|verify} messages.
                     * @param message Period message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Period message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Period
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.Period;

                    /**
                     * Decodes a Period message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Period
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.Period;

                    /**
                     * Verifies a Period message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Period message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Period
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.Period;

                    /**
                     * Creates a plain object from a Period message. Also converts values to other types if specified.
                     * @param message Period
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.Period, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Period to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** MediaType enum. */
                enum MediaType {
                    MEDIA_TYPE_UNSPECIFIED = 0,
                    MEDIA_TYPE_IMAGE = 1
                }

                /** Properties of a Product. */
                interface IProduct {

                    /** Product name */
                    name?: (string|null);

                    /** Product marketingInfo */
                    marketingInfo?: (google.cloud.channel.v1.IMarketingInfo|null);
                }

                /** Represents a Product. */
                class Product implements IProduct {

                    /**
                     * Constructs a new Product.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IProduct);

                    /** Product name. */
                    public name: string;

                    /** Product marketingInfo. */
                    public marketingInfo?: (google.cloud.channel.v1.IMarketingInfo|null);

                    /**
                     * Creates a new Product instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Product instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IProduct): google.cloud.channel.v1.Product;

                    /**
                     * Encodes the specified Product message. Does not implicitly {@link google.cloud.channel.v1.Product.verify|verify} messages.
                     * @param message Product message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Product message, length delimited. Does not implicitly {@link google.cloud.channel.v1.Product.verify|verify} messages.
                     * @param message Product message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Product message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Product
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.Product;

                    /**
                     * Decodes a Product message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Product
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.Product;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.Product;

                    /**
                     * Creates a plain object from a Product message. Also converts values to other types if specified.
                     * @param message Product
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.Product, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Product to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Sku. */
                interface ISku {

                    /** Sku name */
                    name?: (string|null);

                    /** Sku marketingInfo */
                    marketingInfo?: (google.cloud.channel.v1.IMarketingInfo|null);

                    /** Sku product */
                    product?: (google.cloud.channel.v1.IProduct|null);
                }

                /** Represents a Sku. */
                class Sku implements ISku {

                    /**
                     * Constructs a new Sku.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ISku);

                    /** Sku name. */
                    public name: string;

                    /** Sku marketingInfo. */
                    public marketingInfo?: (google.cloud.channel.v1.IMarketingInfo|null);

                    /** Sku product. */
                    public product?: (google.cloud.channel.v1.IProduct|null);

                    /**
                     * Creates a new Sku instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Sku instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ISku): google.cloud.channel.v1.Sku;

                    /**
                     * Encodes the specified Sku message. Does not implicitly {@link google.cloud.channel.v1.Sku.verify|verify} messages.
                     * @param message Sku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ISku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Sku message, length delimited. Does not implicitly {@link google.cloud.channel.v1.Sku.verify|verify} messages.
                     * @param message Sku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ISku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sku message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Sku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.Sku;

                    /**
                     * Decodes a Sku message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Sku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.Sku;

                    /**
                     * Verifies a Sku message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Sku message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Sku
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.Sku;

                    /**
                     * Creates a plain object from a Sku message. Also converts values to other types if specified.
                     * @param message Sku
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.Sku, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Sku to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MarketingInfo. */
                interface IMarketingInfo {

                    /** MarketingInfo displayName */
                    displayName?: (string|null);

                    /** MarketingInfo description */
                    description?: (string|null);

                    /** MarketingInfo defaultLogo */
                    defaultLogo?: (google.cloud.channel.v1.IMedia|null);
                }

                /** Represents a MarketingInfo. */
                class MarketingInfo implements IMarketingInfo {

                    /**
                     * Constructs a new MarketingInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IMarketingInfo);

                    /** MarketingInfo displayName. */
                    public displayName: string;

                    /** MarketingInfo description. */
                    public description: string;

                    /** MarketingInfo defaultLogo. */
                    public defaultLogo?: (google.cloud.channel.v1.IMedia|null);

                    /**
                     * Creates a new MarketingInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MarketingInfo instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IMarketingInfo): google.cloud.channel.v1.MarketingInfo;

                    /**
                     * Encodes the specified MarketingInfo message. Does not implicitly {@link google.cloud.channel.v1.MarketingInfo.verify|verify} messages.
                     * @param message MarketingInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IMarketingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MarketingInfo message, length delimited. Does not implicitly {@link google.cloud.channel.v1.MarketingInfo.verify|verify} messages.
                     * @param message MarketingInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IMarketingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MarketingInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MarketingInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.MarketingInfo;

                    /**
                     * Decodes a MarketingInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MarketingInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.MarketingInfo;

                    /**
                     * Verifies a MarketingInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MarketingInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MarketingInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.MarketingInfo;

                    /**
                     * Creates a plain object from a MarketingInfo message. Also converts values to other types if specified.
                     * @param message MarketingInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.MarketingInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MarketingInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Media. */
                interface IMedia {

                    /** Media title */
                    title?: (string|null);

                    /** Media content */
                    content?: (string|null);

                    /** Media type */
                    type?: (google.cloud.channel.v1.MediaType|keyof typeof google.cloud.channel.v1.MediaType|null);
                }

                /** Represents a Media. */
                class Media implements IMedia {

                    /**
                     * Constructs a new Media.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IMedia);

                    /** Media title. */
                    public title: string;

                    /** Media content. */
                    public content: string;

                    /** Media type. */
                    public type: (google.cloud.channel.v1.MediaType|keyof typeof google.cloud.channel.v1.MediaType);

                    /**
                     * Creates a new Media instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Media instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IMedia): google.cloud.channel.v1.Media;

                    /**
                     * Encodes the specified Media message. Does not implicitly {@link google.cloud.channel.v1.Media.verify|verify} messages.
                     * @param message Media message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IMedia, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Media message, length delimited. Does not implicitly {@link google.cloud.channel.v1.Media.verify|verify} messages.
                     * @param message Media message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IMedia, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Media message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Media
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.Media;

                    /**
                     * Decodes a Media message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Media
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.Media;

                    /**
                     * Verifies a Media message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Media message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Media
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.Media;

                    /**
                     * Creates a plain object from a Media message. Also converts values to other types if specified.
                     * @param message Media
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.Media, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Media to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata operationType */
                    operationType?: (google.cloud.channel.v1.OperationMetadata.OperationType|keyof typeof google.cloud.channel.v1.OperationMetadata.OperationType|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IOperationMetadata);

                    /** OperationMetadata operationType. */
                    public operationType: (google.cloud.channel.v1.OperationMetadata.OperationType|keyof typeof google.cloud.channel.v1.OperationMetadata.OperationType);

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IOperationMetadata): google.cloud.channel.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.channel.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.channel.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace OperationMetadata {

                    /** OperationType enum. */
                    enum OperationType {
                        OPERATION_TYPE_UNSPECIFIED = 0,
                        CREATE_ENTITLEMENT = 1,
                        CHANGE_RENEWAL_SETTINGS = 3,
                        START_PAID_SERVICE = 5,
                        ACTIVATE_ENTITLEMENT = 7,
                        SUSPEND_ENTITLEMENT = 8,
                        CANCEL_ENTITLEMENT = 9,
                        TRANSFER_ENTITLEMENTS = 10,
                        TRANSFER_ENTITLEMENTS_TO_GOOGLE = 11,
                        CHANGE_OFFER = 14,
                        CHANGE_PARAMETERS = 15,
                        PROVISION_CLOUD_IDENTITY = 16
                    }
                }

                /** Represents a CloudChannelService */
                class CloudChannelService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudChannelService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudChannelService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudChannelService;

                    /**
                     * Calls ListCustomers.
                     * @param request ListCustomersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCustomersResponse
                     */
                    public listCustomers(request: google.cloud.channel.v1.IListCustomersRequest, callback: google.cloud.channel.v1.CloudChannelService.ListCustomersCallback): void;

                    /**
                     * Calls ListCustomers.
                     * @param request ListCustomersRequest message or plain object
                     * @returns Promise
                     */
                    public listCustomers(request: google.cloud.channel.v1.IListCustomersRequest): Promise<google.cloud.channel.v1.ListCustomersResponse>;

                    /**
                     * Calls GetCustomer.
                     * @param request GetCustomerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Customer
                     */
                    public getCustomer(request: google.cloud.channel.v1.IGetCustomerRequest, callback: google.cloud.channel.v1.CloudChannelService.GetCustomerCallback): void;

                    /**
                     * Calls GetCustomer.
                     * @param request GetCustomerRequest message or plain object
                     * @returns Promise
                     */
                    public getCustomer(request: google.cloud.channel.v1.IGetCustomerRequest): Promise<google.cloud.channel.v1.Customer>;

                    /**
                     * Calls CheckCloudIdentityAccountsExist.
                     * @param request CheckCloudIdentityAccountsExistRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CheckCloudIdentityAccountsExistResponse
                     */
                    public checkCloudIdentityAccountsExist(request: google.cloud.channel.v1.ICheckCloudIdentityAccountsExistRequest, callback: google.cloud.channel.v1.CloudChannelService.CheckCloudIdentityAccountsExistCallback): void;

                    /**
                     * Calls CheckCloudIdentityAccountsExist.
                     * @param request CheckCloudIdentityAccountsExistRequest message or plain object
                     * @returns Promise
                     */
                    public checkCloudIdentityAccountsExist(request: google.cloud.channel.v1.ICheckCloudIdentityAccountsExistRequest): Promise<google.cloud.channel.v1.CheckCloudIdentityAccountsExistResponse>;

                    /**
                     * Calls CreateCustomer.
                     * @param request CreateCustomerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Customer
                     */
                    public createCustomer(request: google.cloud.channel.v1.ICreateCustomerRequest, callback: google.cloud.channel.v1.CloudChannelService.CreateCustomerCallback): void;

                    /**
                     * Calls CreateCustomer.
                     * @param request CreateCustomerRequest message or plain object
                     * @returns Promise
                     */
                    public createCustomer(request: google.cloud.channel.v1.ICreateCustomerRequest): Promise<google.cloud.channel.v1.Customer>;

                    /**
                     * Calls UpdateCustomer.
                     * @param request UpdateCustomerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Customer
                     */
                    public updateCustomer(request: google.cloud.channel.v1.IUpdateCustomerRequest, callback: google.cloud.channel.v1.CloudChannelService.UpdateCustomerCallback): void;

                    /**
                     * Calls UpdateCustomer.
                     * @param request UpdateCustomerRequest message or plain object
                     * @returns Promise
                     */
                    public updateCustomer(request: google.cloud.channel.v1.IUpdateCustomerRequest): Promise<google.cloud.channel.v1.Customer>;

                    /**
                     * Calls DeleteCustomer.
                     * @param request DeleteCustomerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteCustomer(request: google.cloud.channel.v1.IDeleteCustomerRequest, callback: google.cloud.channel.v1.CloudChannelService.DeleteCustomerCallback): void;

                    /**
                     * Calls DeleteCustomer.
                     * @param request DeleteCustomerRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCustomer(request: google.cloud.channel.v1.IDeleteCustomerRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ProvisionCloudIdentity.
                     * @param request ProvisionCloudIdentityRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public provisionCloudIdentity(request: google.cloud.channel.v1.IProvisionCloudIdentityRequest, callback: google.cloud.channel.v1.CloudChannelService.ProvisionCloudIdentityCallback): void;

                    /**
                     * Calls ProvisionCloudIdentity.
                     * @param request ProvisionCloudIdentityRequest message or plain object
                     * @returns Promise
                     */
                    public provisionCloudIdentity(request: google.cloud.channel.v1.IProvisionCloudIdentityRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListEntitlements.
                     * @param request ListEntitlementsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEntitlementsResponse
                     */
                    public listEntitlements(request: google.cloud.channel.v1.IListEntitlementsRequest, callback: google.cloud.channel.v1.CloudChannelService.ListEntitlementsCallback): void;

                    /**
                     * Calls ListEntitlements.
                     * @param request ListEntitlementsRequest message or plain object
                     * @returns Promise
                     */
                    public listEntitlements(request: google.cloud.channel.v1.IListEntitlementsRequest): Promise<google.cloud.channel.v1.ListEntitlementsResponse>;

                    /**
                     * Calls ListTransferableSkus.
                     * @param request ListTransferableSkusRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTransferableSkusResponse
                     */
                    public listTransferableSkus(request: google.cloud.channel.v1.IListTransferableSkusRequest, callback: google.cloud.channel.v1.CloudChannelService.ListTransferableSkusCallback): void;

                    /**
                     * Calls ListTransferableSkus.
                     * @param request ListTransferableSkusRequest message or plain object
                     * @returns Promise
                     */
                    public listTransferableSkus(request: google.cloud.channel.v1.IListTransferableSkusRequest): Promise<google.cloud.channel.v1.ListTransferableSkusResponse>;

                    /**
                     * Calls ListTransferableOffers.
                     * @param request ListTransferableOffersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTransferableOffersResponse
                     */
                    public listTransferableOffers(request: google.cloud.channel.v1.IListTransferableOffersRequest, callback: google.cloud.channel.v1.CloudChannelService.ListTransferableOffersCallback): void;

                    /**
                     * Calls ListTransferableOffers.
                     * @param request ListTransferableOffersRequest message or plain object
                     * @returns Promise
                     */
                    public listTransferableOffers(request: google.cloud.channel.v1.IListTransferableOffersRequest): Promise<google.cloud.channel.v1.ListTransferableOffersResponse>;

                    /**
                     * Calls GetEntitlement.
                     * @param request GetEntitlementRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Entitlement
                     */
                    public getEntitlement(request: google.cloud.channel.v1.IGetEntitlementRequest, callback: google.cloud.channel.v1.CloudChannelService.GetEntitlementCallback): void;

                    /**
                     * Calls GetEntitlement.
                     * @param request GetEntitlementRequest message or plain object
                     * @returns Promise
                     */
                    public getEntitlement(request: google.cloud.channel.v1.IGetEntitlementRequest): Promise<google.cloud.channel.v1.Entitlement>;

                    /**
                     * Calls CreateEntitlement.
                     * @param request CreateEntitlementRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createEntitlement(request: google.cloud.channel.v1.ICreateEntitlementRequest, callback: google.cloud.channel.v1.CloudChannelService.CreateEntitlementCallback): void;

                    /**
                     * Calls CreateEntitlement.
                     * @param request CreateEntitlementRequest message or plain object
                     * @returns Promise
                     */
                    public createEntitlement(request: google.cloud.channel.v1.ICreateEntitlementRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ChangeParameters.
                     * @param request ChangeParametersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public changeParameters(request: google.cloud.channel.v1.IChangeParametersRequest, callback: google.cloud.channel.v1.CloudChannelService.ChangeParametersCallback): void;

                    /**
                     * Calls ChangeParameters.
                     * @param request ChangeParametersRequest message or plain object
                     * @returns Promise
                     */
                    public changeParameters(request: google.cloud.channel.v1.IChangeParametersRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ChangeRenewalSettings.
                     * @param request ChangeRenewalSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public changeRenewalSettings(request: google.cloud.channel.v1.IChangeRenewalSettingsRequest, callback: google.cloud.channel.v1.CloudChannelService.ChangeRenewalSettingsCallback): void;

                    /**
                     * Calls ChangeRenewalSettings.
                     * @param request ChangeRenewalSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public changeRenewalSettings(request: google.cloud.channel.v1.IChangeRenewalSettingsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ChangeOffer.
                     * @param request ChangeOfferRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public changeOffer(request: google.cloud.channel.v1.IChangeOfferRequest, callback: google.cloud.channel.v1.CloudChannelService.ChangeOfferCallback): void;

                    /**
                     * Calls ChangeOffer.
                     * @param request ChangeOfferRequest message or plain object
                     * @returns Promise
                     */
                    public changeOffer(request: google.cloud.channel.v1.IChangeOfferRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartPaidService.
                     * @param request StartPaidServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startPaidService(request: google.cloud.channel.v1.IStartPaidServiceRequest, callback: google.cloud.channel.v1.CloudChannelService.StartPaidServiceCallback): void;

                    /**
                     * Calls StartPaidService.
                     * @param request StartPaidServiceRequest message or plain object
                     * @returns Promise
                     */
                    public startPaidService(request: google.cloud.channel.v1.IStartPaidServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls SuspendEntitlement.
                     * @param request SuspendEntitlementRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public suspendEntitlement(request: google.cloud.channel.v1.ISuspendEntitlementRequest, callback: google.cloud.channel.v1.CloudChannelService.SuspendEntitlementCallback): void;

                    /**
                     * Calls SuspendEntitlement.
                     * @param request SuspendEntitlementRequest message or plain object
                     * @returns Promise
                     */
                    public suspendEntitlement(request: google.cloud.channel.v1.ISuspendEntitlementRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CancelEntitlement.
                     * @param request CancelEntitlementRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public cancelEntitlement(request: google.cloud.channel.v1.ICancelEntitlementRequest, callback: google.cloud.channel.v1.CloudChannelService.CancelEntitlementCallback): void;

                    /**
                     * Calls CancelEntitlement.
                     * @param request CancelEntitlementRequest message or plain object
                     * @returns Promise
                     */
                    public cancelEntitlement(request: google.cloud.channel.v1.ICancelEntitlementRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ActivateEntitlement.
                     * @param request ActivateEntitlementRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public activateEntitlement(request: google.cloud.channel.v1.IActivateEntitlementRequest, callback: google.cloud.channel.v1.CloudChannelService.ActivateEntitlementCallback): void;

                    /**
                     * Calls ActivateEntitlement.
                     * @param request ActivateEntitlementRequest message or plain object
                     * @returns Promise
                     */
                    public activateEntitlement(request: google.cloud.channel.v1.IActivateEntitlementRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls TransferEntitlements.
                     * @param request TransferEntitlementsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public transferEntitlements(request: google.cloud.channel.v1.ITransferEntitlementsRequest, callback: google.cloud.channel.v1.CloudChannelService.TransferEntitlementsCallback): void;

                    /**
                     * Calls TransferEntitlements.
                     * @param request TransferEntitlementsRequest message or plain object
                     * @returns Promise
                     */
                    public transferEntitlements(request: google.cloud.channel.v1.ITransferEntitlementsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls TransferEntitlementsToGoogle.
                     * @param request TransferEntitlementsToGoogleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public transferEntitlementsToGoogle(request: google.cloud.channel.v1.ITransferEntitlementsToGoogleRequest, callback: google.cloud.channel.v1.CloudChannelService.TransferEntitlementsToGoogleCallback): void;

                    /**
                     * Calls TransferEntitlementsToGoogle.
                     * @param request TransferEntitlementsToGoogleRequest message or plain object
                     * @returns Promise
                     */
                    public transferEntitlementsToGoogle(request: google.cloud.channel.v1.ITransferEntitlementsToGoogleRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListChannelPartnerLinks.
                     * @param request ListChannelPartnerLinksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListChannelPartnerLinksResponse
                     */
                    public listChannelPartnerLinks(request: google.cloud.channel.v1.IListChannelPartnerLinksRequest, callback: google.cloud.channel.v1.CloudChannelService.ListChannelPartnerLinksCallback): void;

                    /**
                     * Calls ListChannelPartnerLinks.
                     * @param request ListChannelPartnerLinksRequest message or plain object
                     * @returns Promise
                     */
                    public listChannelPartnerLinks(request: google.cloud.channel.v1.IListChannelPartnerLinksRequest): Promise<google.cloud.channel.v1.ListChannelPartnerLinksResponse>;

                    /**
                     * Calls GetChannelPartnerLink.
                     * @param request GetChannelPartnerLinkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ChannelPartnerLink
                     */
                    public getChannelPartnerLink(request: google.cloud.channel.v1.IGetChannelPartnerLinkRequest, callback: google.cloud.channel.v1.CloudChannelService.GetChannelPartnerLinkCallback): void;

                    /**
                     * Calls GetChannelPartnerLink.
                     * @param request GetChannelPartnerLinkRequest message or plain object
                     * @returns Promise
                     */
                    public getChannelPartnerLink(request: google.cloud.channel.v1.IGetChannelPartnerLinkRequest): Promise<google.cloud.channel.v1.ChannelPartnerLink>;

                    /**
                     * Calls CreateChannelPartnerLink.
                     * @param request CreateChannelPartnerLinkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ChannelPartnerLink
                     */
                    public createChannelPartnerLink(request: google.cloud.channel.v1.ICreateChannelPartnerLinkRequest, callback: google.cloud.channel.v1.CloudChannelService.CreateChannelPartnerLinkCallback): void;

                    /**
                     * Calls CreateChannelPartnerLink.
                     * @param request CreateChannelPartnerLinkRequest message or plain object
                     * @returns Promise
                     */
                    public createChannelPartnerLink(request: google.cloud.channel.v1.ICreateChannelPartnerLinkRequest): Promise<google.cloud.channel.v1.ChannelPartnerLink>;

                    /**
                     * Calls UpdateChannelPartnerLink.
                     * @param request UpdateChannelPartnerLinkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ChannelPartnerLink
                     */
                    public updateChannelPartnerLink(request: google.cloud.channel.v1.IUpdateChannelPartnerLinkRequest, callback: google.cloud.channel.v1.CloudChannelService.UpdateChannelPartnerLinkCallback): void;

                    /**
                     * Calls UpdateChannelPartnerLink.
                     * @param request UpdateChannelPartnerLinkRequest message or plain object
                     * @returns Promise
                     */
                    public updateChannelPartnerLink(request: google.cloud.channel.v1.IUpdateChannelPartnerLinkRequest): Promise<google.cloud.channel.v1.ChannelPartnerLink>;

                    /**
                     * Calls LookupOffer.
                     * @param request LookupOfferRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Offer
                     */
                    public lookupOffer(request: google.cloud.channel.v1.ILookupOfferRequest, callback: google.cloud.channel.v1.CloudChannelService.LookupOfferCallback): void;

                    /**
                     * Calls LookupOffer.
                     * @param request LookupOfferRequest message or plain object
                     * @returns Promise
                     */
                    public lookupOffer(request: google.cloud.channel.v1.ILookupOfferRequest): Promise<google.cloud.channel.v1.Offer>;

                    /**
                     * Calls ListProducts.
                     * @param request ListProductsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListProductsResponse
                     */
                    public listProducts(request: google.cloud.channel.v1.IListProductsRequest, callback: google.cloud.channel.v1.CloudChannelService.ListProductsCallback): void;

                    /**
                     * Calls ListProducts.
                     * @param request ListProductsRequest message or plain object
                     * @returns Promise
                     */
                    public listProducts(request: google.cloud.channel.v1.IListProductsRequest): Promise<google.cloud.channel.v1.ListProductsResponse>;

                    /**
                     * Calls ListSkus.
                     * @param request ListSkusRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSkusResponse
                     */
                    public listSkus(request: google.cloud.channel.v1.IListSkusRequest, callback: google.cloud.channel.v1.CloudChannelService.ListSkusCallback): void;

                    /**
                     * Calls ListSkus.
                     * @param request ListSkusRequest message or plain object
                     * @returns Promise
                     */
                    public listSkus(request: google.cloud.channel.v1.IListSkusRequest): Promise<google.cloud.channel.v1.ListSkusResponse>;

                    /**
                     * Calls ListOffers.
                     * @param request ListOffersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListOffersResponse
                     */
                    public listOffers(request: google.cloud.channel.v1.IListOffersRequest, callback: google.cloud.channel.v1.CloudChannelService.ListOffersCallback): void;

                    /**
                     * Calls ListOffers.
                     * @param request ListOffersRequest message or plain object
                     * @returns Promise
                     */
                    public listOffers(request: google.cloud.channel.v1.IListOffersRequest): Promise<google.cloud.channel.v1.ListOffersResponse>;

                    /**
                     * Calls ListPurchasableSkus.
                     * @param request ListPurchasableSkusRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPurchasableSkusResponse
                     */
                    public listPurchasableSkus(request: google.cloud.channel.v1.IListPurchasableSkusRequest, callback: google.cloud.channel.v1.CloudChannelService.ListPurchasableSkusCallback): void;

                    /**
                     * Calls ListPurchasableSkus.
                     * @param request ListPurchasableSkusRequest message or plain object
                     * @returns Promise
                     */
                    public listPurchasableSkus(request: google.cloud.channel.v1.IListPurchasableSkusRequest): Promise<google.cloud.channel.v1.ListPurchasableSkusResponse>;

                    /**
                     * Calls ListPurchasableOffers.
                     * @param request ListPurchasableOffersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPurchasableOffersResponse
                     */
                    public listPurchasableOffers(request: google.cloud.channel.v1.IListPurchasableOffersRequest, callback: google.cloud.channel.v1.CloudChannelService.ListPurchasableOffersCallback): void;

                    /**
                     * Calls ListPurchasableOffers.
                     * @param request ListPurchasableOffersRequest message or plain object
                     * @returns Promise
                     */
                    public listPurchasableOffers(request: google.cloud.channel.v1.IListPurchasableOffersRequest): Promise<google.cloud.channel.v1.ListPurchasableOffersResponse>;

                    /**
                     * Calls RegisterSubscriber.
                     * @param request RegisterSubscriberRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RegisterSubscriberResponse
                     */
                    public registerSubscriber(request: google.cloud.channel.v1.IRegisterSubscriberRequest, callback: google.cloud.channel.v1.CloudChannelService.RegisterSubscriberCallback): void;

                    /**
                     * Calls RegisterSubscriber.
                     * @param request RegisterSubscriberRequest message or plain object
                     * @returns Promise
                     */
                    public registerSubscriber(request: google.cloud.channel.v1.IRegisterSubscriberRequest): Promise<google.cloud.channel.v1.RegisterSubscriberResponse>;

                    /**
                     * Calls UnregisterSubscriber.
                     * @param request UnregisterSubscriberRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UnregisterSubscriberResponse
                     */
                    public unregisterSubscriber(request: google.cloud.channel.v1.IUnregisterSubscriberRequest, callback: google.cloud.channel.v1.CloudChannelService.UnregisterSubscriberCallback): void;

                    /**
                     * Calls UnregisterSubscriber.
                     * @param request UnregisterSubscriberRequest message or plain object
                     * @returns Promise
                     */
                    public unregisterSubscriber(request: google.cloud.channel.v1.IUnregisterSubscriberRequest): Promise<google.cloud.channel.v1.UnregisterSubscriberResponse>;

                    /**
                     * Calls ListSubscribers.
                     * @param request ListSubscribersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSubscribersResponse
                     */
                    public listSubscribers(request: google.cloud.channel.v1.IListSubscribersRequest, callback: google.cloud.channel.v1.CloudChannelService.ListSubscribersCallback): void;

                    /**
                     * Calls ListSubscribers.
                     * @param request ListSubscribersRequest message or plain object
                     * @returns Promise
                     */
                    public listSubscribers(request: google.cloud.channel.v1.IListSubscribersRequest): Promise<google.cloud.channel.v1.ListSubscribersResponse>;
                }

                namespace CloudChannelService {

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#listCustomers}.
                     * @param error Error, if any
                     * @param [response] ListCustomersResponse
                     */
                    type ListCustomersCallback = (error: (Error|null), response?: google.cloud.channel.v1.ListCustomersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#getCustomer}.
                     * @param error Error, if any
                     * @param [response] Customer
                     */
                    type GetCustomerCallback = (error: (Error|null), response?: google.cloud.channel.v1.Customer) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#checkCloudIdentityAccountsExist}.
                     * @param error Error, if any
                     * @param [response] CheckCloudIdentityAccountsExistResponse
                     */
                    type CheckCloudIdentityAccountsExistCallback = (error: (Error|null), response?: google.cloud.channel.v1.CheckCloudIdentityAccountsExistResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#createCustomer}.
                     * @param error Error, if any
                     * @param [response] Customer
                     */
                    type CreateCustomerCallback = (error: (Error|null), response?: google.cloud.channel.v1.Customer) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#updateCustomer}.
                     * @param error Error, if any
                     * @param [response] Customer
                     */
                    type UpdateCustomerCallback = (error: (Error|null), response?: google.cloud.channel.v1.Customer) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#deleteCustomer}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteCustomerCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#provisionCloudIdentity}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ProvisionCloudIdentityCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#listEntitlements}.
                     * @param error Error, if any
                     * @param [response] ListEntitlementsResponse
                     */
                    type ListEntitlementsCallback = (error: (Error|null), response?: google.cloud.channel.v1.ListEntitlementsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#listTransferableSkus}.
                     * @param error Error, if any
                     * @param [response] ListTransferableSkusResponse
                     */
                    type ListTransferableSkusCallback = (error: (Error|null), response?: google.cloud.channel.v1.ListTransferableSkusResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#listTransferableOffers}.
                     * @param error Error, if any
                     * @param [response] ListTransferableOffersResponse
                     */
                    type ListTransferableOffersCallback = (error: (Error|null), response?: google.cloud.channel.v1.ListTransferableOffersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#getEntitlement}.
                     * @param error Error, if any
                     * @param [response] Entitlement
                     */
                    type GetEntitlementCallback = (error: (Error|null), response?: google.cloud.channel.v1.Entitlement) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#createEntitlement}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateEntitlementCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#changeParameters}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ChangeParametersCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#changeRenewalSettings}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ChangeRenewalSettingsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#changeOffer}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ChangeOfferCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#startPaidService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartPaidServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#suspendEntitlement}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type SuspendEntitlementCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#cancelEntitlement}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CancelEntitlementCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#activateEntitlement}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ActivateEntitlementCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#transferEntitlements}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type TransferEntitlementsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#transferEntitlementsToGoogle}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type TransferEntitlementsToGoogleCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#listChannelPartnerLinks}.
                     * @param error Error, if any
                     * @param [response] ListChannelPartnerLinksResponse
                     */
                    type ListChannelPartnerLinksCallback = (error: (Error|null), response?: google.cloud.channel.v1.ListChannelPartnerLinksResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#getChannelPartnerLink}.
                     * @param error Error, if any
                     * @param [response] ChannelPartnerLink
                     */
                    type GetChannelPartnerLinkCallback = (error: (Error|null), response?: google.cloud.channel.v1.ChannelPartnerLink) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#createChannelPartnerLink}.
                     * @param error Error, if any
                     * @param [response] ChannelPartnerLink
                     */
                    type CreateChannelPartnerLinkCallback = (error: (Error|null), response?: google.cloud.channel.v1.ChannelPartnerLink) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#updateChannelPartnerLink}.
                     * @param error Error, if any
                     * @param [response] ChannelPartnerLink
                     */
                    type UpdateChannelPartnerLinkCallback = (error: (Error|null), response?: google.cloud.channel.v1.ChannelPartnerLink) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#lookupOffer}.
                     * @param error Error, if any
                     * @param [response] Offer
                     */
                    type LookupOfferCallback = (error: (Error|null), response?: google.cloud.channel.v1.Offer) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#listProducts}.
                     * @param error Error, if any
                     * @param [response] ListProductsResponse
                     */
                    type ListProductsCallback = (error: (Error|null), response?: google.cloud.channel.v1.ListProductsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#listSkus}.
                     * @param error Error, if any
                     * @param [response] ListSkusResponse
                     */
                    type ListSkusCallback = (error: (Error|null), response?: google.cloud.channel.v1.ListSkusResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#listOffers}.
                     * @param error Error, if any
                     * @param [response] ListOffersResponse
                     */
                    type ListOffersCallback = (error: (Error|null), response?: google.cloud.channel.v1.ListOffersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#listPurchasableSkus}.
                     * @param error Error, if any
                     * @param [response] ListPurchasableSkusResponse
                     */
                    type ListPurchasableSkusCallback = (error: (Error|null), response?: google.cloud.channel.v1.ListPurchasableSkusResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#listPurchasableOffers}.
                     * @param error Error, if any
                     * @param [response] ListPurchasableOffersResponse
                     */
                    type ListPurchasableOffersCallback = (error: (Error|null), response?: google.cloud.channel.v1.ListPurchasableOffersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#registerSubscriber}.
                     * @param error Error, if any
                     * @param [response] RegisterSubscriberResponse
                     */
                    type RegisterSubscriberCallback = (error: (Error|null), response?: google.cloud.channel.v1.RegisterSubscriberResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#unregisterSubscriber}.
                     * @param error Error, if any
                     * @param [response] UnregisterSubscriberResponse
                     */
                    type UnregisterSubscriberCallback = (error: (Error|null), response?: google.cloud.channel.v1.UnregisterSubscriberResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.channel.v1.CloudChannelService#listSubscribers}.
                     * @param error Error, if any
                     * @param [response] ListSubscribersResponse
                     */
                    type ListSubscribersCallback = (error: (Error|null), response?: google.cloud.channel.v1.ListSubscribersResponse) => void;
                }

                /** Properties of a CheckCloudIdentityAccountsExistRequest. */
                interface ICheckCloudIdentityAccountsExistRequest {

                    /** CheckCloudIdentityAccountsExistRequest parent */
                    parent?: (string|null);

                    /** CheckCloudIdentityAccountsExistRequest domain */
                    domain?: (string|null);
                }

                /** Represents a CheckCloudIdentityAccountsExistRequest. */
                class CheckCloudIdentityAccountsExistRequest implements ICheckCloudIdentityAccountsExistRequest {

                    /**
                     * Constructs a new CheckCloudIdentityAccountsExistRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ICheckCloudIdentityAccountsExistRequest);

                    /** CheckCloudIdentityAccountsExistRequest parent. */
                    public parent: string;

                    /** CheckCloudIdentityAccountsExistRequest domain. */
                    public domain: string;

                    /**
                     * Creates a new CheckCloudIdentityAccountsExistRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CheckCloudIdentityAccountsExistRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ICheckCloudIdentityAccountsExistRequest): google.cloud.channel.v1.CheckCloudIdentityAccountsExistRequest;

                    /**
                     * Encodes the specified CheckCloudIdentityAccountsExistRequest message. Does not implicitly {@link google.cloud.channel.v1.CheckCloudIdentityAccountsExistRequest.verify|verify} messages.
                     * @param message CheckCloudIdentityAccountsExistRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ICheckCloudIdentityAccountsExistRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CheckCloudIdentityAccountsExistRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.CheckCloudIdentityAccountsExistRequest.verify|verify} messages.
                     * @param message CheckCloudIdentityAccountsExistRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ICheckCloudIdentityAccountsExistRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CheckCloudIdentityAccountsExistRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CheckCloudIdentityAccountsExistRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.CheckCloudIdentityAccountsExistRequest;

                    /**
                     * Decodes a CheckCloudIdentityAccountsExistRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CheckCloudIdentityAccountsExistRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.CheckCloudIdentityAccountsExistRequest;

                    /**
                     * Verifies a CheckCloudIdentityAccountsExistRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CheckCloudIdentityAccountsExistRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CheckCloudIdentityAccountsExistRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.CheckCloudIdentityAccountsExistRequest;

                    /**
                     * Creates a plain object from a CheckCloudIdentityAccountsExistRequest message. Also converts values to other types if specified.
                     * @param message CheckCloudIdentityAccountsExistRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.CheckCloudIdentityAccountsExistRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CheckCloudIdentityAccountsExistRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CloudIdentityCustomerAccount. */
                interface ICloudIdentityCustomerAccount {

                    /** CloudIdentityCustomerAccount existing */
                    existing?: (boolean|null);

                    /** CloudIdentityCustomerAccount owned */
                    owned?: (boolean|null);

                    /** CloudIdentityCustomerAccount customerName */
                    customerName?: (string|null);

                    /** CloudIdentityCustomerAccount customerCloudIdentityId */
                    customerCloudIdentityId?: (string|null);
                }

                /** Represents a CloudIdentityCustomerAccount. */
                class CloudIdentityCustomerAccount implements ICloudIdentityCustomerAccount {

                    /**
                     * Constructs a new CloudIdentityCustomerAccount.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ICloudIdentityCustomerAccount);

                    /** CloudIdentityCustomerAccount existing. */
                    public existing: boolean;

                    /** CloudIdentityCustomerAccount owned. */
                    public owned: boolean;

                    /** CloudIdentityCustomerAccount customerName. */
                    public customerName: string;

                    /** CloudIdentityCustomerAccount customerCloudIdentityId. */
                    public customerCloudIdentityId: string;

                    /**
                     * Creates a new CloudIdentityCustomerAccount instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudIdentityCustomerAccount instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ICloudIdentityCustomerAccount): google.cloud.channel.v1.CloudIdentityCustomerAccount;

                    /**
                     * Encodes the specified CloudIdentityCustomerAccount message. Does not implicitly {@link google.cloud.channel.v1.CloudIdentityCustomerAccount.verify|verify} messages.
                     * @param message CloudIdentityCustomerAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ICloudIdentityCustomerAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudIdentityCustomerAccount message, length delimited. Does not implicitly {@link google.cloud.channel.v1.CloudIdentityCustomerAccount.verify|verify} messages.
                     * @param message CloudIdentityCustomerAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ICloudIdentityCustomerAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudIdentityCustomerAccount message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudIdentityCustomerAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.CloudIdentityCustomerAccount;

                    /**
                     * Decodes a CloudIdentityCustomerAccount message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudIdentityCustomerAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.CloudIdentityCustomerAccount;

                    /**
                     * Verifies a CloudIdentityCustomerAccount message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudIdentityCustomerAccount message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudIdentityCustomerAccount
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.CloudIdentityCustomerAccount;

                    /**
                     * Creates a plain object from a CloudIdentityCustomerAccount message. Also converts values to other types if specified.
                     * @param message CloudIdentityCustomerAccount
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.CloudIdentityCustomerAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudIdentityCustomerAccount to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CheckCloudIdentityAccountsExistResponse. */
                interface ICheckCloudIdentityAccountsExistResponse {

                    /** CheckCloudIdentityAccountsExistResponse cloudIdentityAccounts */
                    cloudIdentityAccounts?: (google.cloud.channel.v1.ICloudIdentityCustomerAccount[]|null);
                }

                /** Represents a CheckCloudIdentityAccountsExistResponse. */
                class CheckCloudIdentityAccountsExistResponse implements ICheckCloudIdentityAccountsExistResponse {

                    /**
                     * Constructs a new CheckCloudIdentityAccountsExistResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ICheckCloudIdentityAccountsExistResponse);

                    /** CheckCloudIdentityAccountsExistResponse cloudIdentityAccounts. */
                    public cloudIdentityAccounts: google.cloud.channel.v1.ICloudIdentityCustomerAccount[];

                    /**
                     * Creates a new CheckCloudIdentityAccountsExistResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CheckCloudIdentityAccountsExistResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ICheckCloudIdentityAccountsExistResponse): google.cloud.channel.v1.CheckCloudIdentityAccountsExistResponse;

                    /**
                     * Encodes the specified CheckCloudIdentityAccountsExistResponse message. Does not implicitly {@link google.cloud.channel.v1.CheckCloudIdentityAccountsExistResponse.verify|verify} messages.
                     * @param message CheckCloudIdentityAccountsExistResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ICheckCloudIdentityAccountsExistResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CheckCloudIdentityAccountsExistResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.CheckCloudIdentityAccountsExistResponse.verify|verify} messages.
                     * @param message CheckCloudIdentityAccountsExistResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ICheckCloudIdentityAccountsExistResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CheckCloudIdentityAccountsExistResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CheckCloudIdentityAccountsExistResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.CheckCloudIdentityAccountsExistResponse;

                    /**
                     * Decodes a CheckCloudIdentityAccountsExistResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CheckCloudIdentityAccountsExistResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.CheckCloudIdentityAccountsExistResponse;

                    /**
                     * Verifies a CheckCloudIdentityAccountsExistResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CheckCloudIdentityAccountsExistResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CheckCloudIdentityAccountsExistResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.CheckCloudIdentityAccountsExistResponse;

                    /**
                     * Creates a plain object from a CheckCloudIdentityAccountsExistResponse message. Also converts values to other types if specified.
                     * @param message CheckCloudIdentityAccountsExistResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.CheckCloudIdentityAccountsExistResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CheckCloudIdentityAccountsExistResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCustomersRequest. */
                interface IListCustomersRequest {

                    /** ListCustomersRequest parent */
                    parent?: (string|null);

                    /** ListCustomersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCustomersRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListCustomersRequest. */
                class ListCustomersRequest implements IListCustomersRequest {

                    /**
                     * Constructs a new ListCustomersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListCustomersRequest);

                    /** ListCustomersRequest parent. */
                    public parent: string;

                    /** ListCustomersRequest pageSize. */
                    public pageSize: number;

                    /** ListCustomersRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListCustomersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCustomersRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListCustomersRequest): google.cloud.channel.v1.ListCustomersRequest;

                    /**
                     * Encodes the specified ListCustomersRequest message. Does not implicitly {@link google.cloud.channel.v1.ListCustomersRequest.verify|verify} messages.
                     * @param message ListCustomersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListCustomersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCustomersRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListCustomersRequest.verify|verify} messages.
                     * @param message ListCustomersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListCustomersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCustomersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCustomersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListCustomersRequest;

                    /**
                     * Decodes a ListCustomersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCustomersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListCustomersRequest;

                    /**
                     * Verifies a ListCustomersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCustomersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCustomersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListCustomersRequest;

                    /**
                     * Creates a plain object from a ListCustomersRequest message. Also converts values to other types if specified.
                     * @param message ListCustomersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListCustomersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCustomersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCustomersResponse. */
                interface IListCustomersResponse {

                    /** ListCustomersResponse customers */
                    customers?: (google.cloud.channel.v1.ICustomer[]|null);

                    /** ListCustomersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListCustomersResponse. */
                class ListCustomersResponse implements IListCustomersResponse {

                    /**
                     * Constructs a new ListCustomersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListCustomersResponse);

                    /** ListCustomersResponse customers. */
                    public customers: google.cloud.channel.v1.ICustomer[];

                    /** ListCustomersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListCustomersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCustomersResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListCustomersResponse): google.cloud.channel.v1.ListCustomersResponse;

                    /**
                     * Encodes the specified ListCustomersResponse message. Does not implicitly {@link google.cloud.channel.v1.ListCustomersResponse.verify|verify} messages.
                     * @param message ListCustomersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListCustomersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCustomersResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListCustomersResponse.verify|verify} messages.
                     * @param message ListCustomersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListCustomersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCustomersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCustomersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListCustomersResponse;

                    /**
                     * Decodes a ListCustomersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCustomersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListCustomersResponse;

                    /**
                     * Verifies a ListCustomersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCustomersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCustomersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListCustomersResponse;

                    /**
                     * Creates a plain object from a ListCustomersResponse message. Also converts values to other types if specified.
                     * @param message ListCustomersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListCustomersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCustomersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetCustomerRequest. */
                interface IGetCustomerRequest {

                    /** GetCustomerRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCustomerRequest. */
                class GetCustomerRequest implements IGetCustomerRequest {

                    /**
                     * Constructs a new GetCustomerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IGetCustomerRequest);

                    /** GetCustomerRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCustomerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCustomerRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IGetCustomerRequest): google.cloud.channel.v1.GetCustomerRequest;

                    /**
                     * Encodes the specified GetCustomerRequest message. Does not implicitly {@link google.cloud.channel.v1.GetCustomerRequest.verify|verify} messages.
                     * @param message GetCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IGetCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCustomerRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.GetCustomerRequest.verify|verify} messages.
                     * @param message GetCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IGetCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCustomerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.GetCustomerRequest;

                    /**
                     * Decodes a GetCustomerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.GetCustomerRequest;

                    /**
                     * Verifies a GetCustomerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCustomerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCustomerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.GetCustomerRequest;

                    /**
                     * Creates a plain object from a GetCustomerRequest message. Also converts values to other types if specified.
                     * @param message GetCustomerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.GetCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCustomerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateCustomerRequest. */
                interface ICreateCustomerRequest {

                    /** CreateCustomerRequest parent */
                    parent?: (string|null);

                    /** CreateCustomerRequest customer */
                    customer?: (google.cloud.channel.v1.ICustomer|null);
                }

                /** Represents a CreateCustomerRequest. */
                class CreateCustomerRequest implements ICreateCustomerRequest {

                    /**
                     * Constructs a new CreateCustomerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ICreateCustomerRequest);

                    /** CreateCustomerRequest parent. */
                    public parent: string;

                    /** CreateCustomerRequest customer. */
                    public customer?: (google.cloud.channel.v1.ICustomer|null);

                    /**
                     * Creates a new CreateCustomerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCustomerRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ICreateCustomerRequest): google.cloud.channel.v1.CreateCustomerRequest;

                    /**
                     * Encodes the specified CreateCustomerRequest message. Does not implicitly {@link google.cloud.channel.v1.CreateCustomerRequest.verify|verify} messages.
                     * @param message CreateCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ICreateCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCustomerRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.CreateCustomerRequest.verify|verify} messages.
                     * @param message CreateCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ICreateCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCustomerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.CreateCustomerRequest;

                    /**
                     * Decodes a CreateCustomerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.CreateCustomerRequest;

                    /**
                     * Verifies a CreateCustomerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCustomerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCustomerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.CreateCustomerRequest;

                    /**
                     * Creates a plain object from a CreateCustomerRequest message. Also converts values to other types if specified.
                     * @param message CreateCustomerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.CreateCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCustomerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateCustomerRequest. */
                interface IUpdateCustomerRequest {

                    /** UpdateCustomerRequest customer */
                    customer?: (google.cloud.channel.v1.ICustomer|null);

                    /** UpdateCustomerRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateCustomerRequest. */
                class UpdateCustomerRequest implements IUpdateCustomerRequest {

                    /**
                     * Constructs a new UpdateCustomerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IUpdateCustomerRequest);

                    /** UpdateCustomerRequest customer. */
                    public customer?: (google.cloud.channel.v1.ICustomer|null);

                    /** UpdateCustomerRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateCustomerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCustomerRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IUpdateCustomerRequest): google.cloud.channel.v1.UpdateCustomerRequest;

                    /**
                     * Encodes the specified UpdateCustomerRequest message. Does not implicitly {@link google.cloud.channel.v1.UpdateCustomerRequest.verify|verify} messages.
                     * @param message UpdateCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IUpdateCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCustomerRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.UpdateCustomerRequest.verify|verify} messages.
                     * @param message UpdateCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IUpdateCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCustomerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.UpdateCustomerRequest;

                    /**
                     * Decodes an UpdateCustomerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.UpdateCustomerRequest;

                    /**
                     * Verifies an UpdateCustomerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCustomerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCustomerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.UpdateCustomerRequest;

                    /**
                     * Creates a plain object from an UpdateCustomerRequest message. Also converts values to other types if specified.
                     * @param message UpdateCustomerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.UpdateCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCustomerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteCustomerRequest. */
                interface IDeleteCustomerRequest {

                    /** DeleteCustomerRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteCustomerRequest. */
                class DeleteCustomerRequest implements IDeleteCustomerRequest {

                    /**
                     * Constructs a new DeleteCustomerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IDeleteCustomerRequest);

                    /** DeleteCustomerRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteCustomerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCustomerRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IDeleteCustomerRequest): google.cloud.channel.v1.DeleteCustomerRequest;

                    /**
                     * Encodes the specified DeleteCustomerRequest message. Does not implicitly {@link google.cloud.channel.v1.DeleteCustomerRequest.verify|verify} messages.
                     * @param message DeleteCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IDeleteCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCustomerRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.DeleteCustomerRequest.verify|verify} messages.
                     * @param message DeleteCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IDeleteCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCustomerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.DeleteCustomerRequest;

                    /**
                     * Decodes a DeleteCustomerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.DeleteCustomerRequest;

                    /**
                     * Verifies a DeleteCustomerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCustomerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCustomerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.DeleteCustomerRequest;

                    /**
                     * Creates a plain object from a DeleteCustomerRequest message. Also converts values to other types if specified.
                     * @param message DeleteCustomerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.DeleteCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCustomerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ProvisionCloudIdentityRequest. */
                interface IProvisionCloudIdentityRequest {

                    /** ProvisionCloudIdentityRequest customer */
                    customer?: (string|null);

                    /** ProvisionCloudIdentityRequest cloudIdentityInfo */
                    cloudIdentityInfo?: (google.cloud.channel.v1.ICloudIdentityInfo|null);

                    /** ProvisionCloudIdentityRequest user */
                    user?: (google.cloud.channel.v1.IAdminUser|null);

                    /** ProvisionCloudIdentityRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a ProvisionCloudIdentityRequest. */
                class ProvisionCloudIdentityRequest implements IProvisionCloudIdentityRequest {

                    /**
                     * Constructs a new ProvisionCloudIdentityRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IProvisionCloudIdentityRequest);

                    /** ProvisionCloudIdentityRequest customer. */
                    public customer: string;

                    /** ProvisionCloudIdentityRequest cloudIdentityInfo. */
                    public cloudIdentityInfo?: (google.cloud.channel.v1.ICloudIdentityInfo|null);

                    /** ProvisionCloudIdentityRequest user. */
                    public user?: (google.cloud.channel.v1.IAdminUser|null);

                    /** ProvisionCloudIdentityRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new ProvisionCloudIdentityRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProvisionCloudIdentityRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IProvisionCloudIdentityRequest): google.cloud.channel.v1.ProvisionCloudIdentityRequest;

                    /**
                     * Encodes the specified ProvisionCloudIdentityRequest message. Does not implicitly {@link google.cloud.channel.v1.ProvisionCloudIdentityRequest.verify|verify} messages.
                     * @param message ProvisionCloudIdentityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IProvisionCloudIdentityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProvisionCloudIdentityRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ProvisionCloudIdentityRequest.verify|verify} messages.
                     * @param message ProvisionCloudIdentityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IProvisionCloudIdentityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProvisionCloudIdentityRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProvisionCloudIdentityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ProvisionCloudIdentityRequest;

                    /**
                     * Decodes a ProvisionCloudIdentityRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProvisionCloudIdentityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ProvisionCloudIdentityRequest;

                    /**
                     * Verifies a ProvisionCloudIdentityRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProvisionCloudIdentityRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProvisionCloudIdentityRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ProvisionCloudIdentityRequest;

                    /**
                     * Creates a plain object from a ProvisionCloudIdentityRequest message. Also converts values to other types if specified.
                     * @param message ProvisionCloudIdentityRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ProvisionCloudIdentityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProvisionCloudIdentityRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListEntitlementsRequest. */
                interface IListEntitlementsRequest {

                    /** ListEntitlementsRequest parent */
                    parent?: (string|null);

                    /** ListEntitlementsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEntitlementsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListEntitlementsRequest. */
                class ListEntitlementsRequest implements IListEntitlementsRequest {

                    /**
                     * Constructs a new ListEntitlementsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListEntitlementsRequest);

                    /** ListEntitlementsRequest parent. */
                    public parent: string;

                    /** ListEntitlementsRequest pageSize. */
                    public pageSize: number;

                    /** ListEntitlementsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListEntitlementsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEntitlementsRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListEntitlementsRequest): google.cloud.channel.v1.ListEntitlementsRequest;

                    /**
                     * Encodes the specified ListEntitlementsRequest message. Does not implicitly {@link google.cloud.channel.v1.ListEntitlementsRequest.verify|verify} messages.
                     * @param message ListEntitlementsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListEntitlementsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEntitlementsRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListEntitlementsRequest.verify|verify} messages.
                     * @param message ListEntitlementsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListEntitlementsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEntitlementsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEntitlementsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListEntitlementsRequest;

                    /**
                     * Decodes a ListEntitlementsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEntitlementsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListEntitlementsRequest;

                    /**
                     * Verifies a ListEntitlementsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEntitlementsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEntitlementsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListEntitlementsRequest;

                    /**
                     * Creates a plain object from a ListEntitlementsRequest message. Also converts values to other types if specified.
                     * @param message ListEntitlementsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListEntitlementsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEntitlementsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListEntitlementsResponse. */
                interface IListEntitlementsResponse {

                    /** ListEntitlementsResponse entitlements */
                    entitlements?: (google.cloud.channel.v1.IEntitlement[]|null);

                    /** ListEntitlementsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListEntitlementsResponse. */
                class ListEntitlementsResponse implements IListEntitlementsResponse {

                    /**
                     * Constructs a new ListEntitlementsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListEntitlementsResponse);

                    /** ListEntitlementsResponse entitlements. */
                    public entitlements: google.cloud.channel.v1.IEntitlement[];

                    /** ListEntitlementsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListEntitlementsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEntitlementsResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListEntitlementsResponse): google.cloud.channel.v1.ListEntitlementsResponse;

                    /**
                     * Encodes the specified ListEntitlementsResponse message. Does not implicitly {@link google.cloud.channel.v1.ListEntitlementsResponse.verify|verify} messages.
                     * @param message ListEntitlementsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListEntitlementsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEntitlementsResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListEntitlementsResponse.verify|verify} messages.
                     * @param message ListEntitlementsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListEntitlementsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEntitlementsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEntitlementsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListEntitlementsResponse;

                    /**
                     * Decodes a ListEntitlementsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEntitlementsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListEntitlementsResponse;

                    /**
                     * Verifies a ListEntitlementsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEntitlementsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEntitlementsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListEntitlementsResponse;

                    /**
                     * Creates a plain object from a ListEntitlementsResponse message. Also converts values to other types if specified.
                     * @param message ListEntitlementsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListEntitlementsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEntitlementsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTransferableSkusRequest. */
                interface IListTransferableSkusRequest {

                    /** ListTransferableSkusRequest cloudIdentityId */
                    cloudIdentityId?: (string|null);

                    /** ListTransferableSkusRequest customerName */
                    customerName?: (string|null);

                    /** ListTransferableSkusRequest parent */
                    parent?: (string|null);

                    /** ListTransferableSkusRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTransferableSkusRequest pageToken */
                    pageToken?: (string|null);

                    /** ListTransferableSkusRequest authToken */
                    authToken?: (string|null);

                    /** ListTransferableSkusRequest languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a ListTransferableSkusRequest. */
                class ListTransferableSkusRequest implements IListTransferableSkusRequest {

                    /**
                     * Constructs a new ListTransferableSkusRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListTransferableSkusRequest);

                    /** ListTransferableSkusRequest cloudIdentityId. */
                    public cloudIdentityId?: (string|null);

                    /** ListTransferableSkusRequest customerName. */
                    public customerName?: (string|null);

                    /** ListTransferableSkusRequest parent. */
                    public parent: string;

                    /** ListTransferableSkusRequest pageSize. */
                    public pageSize: number;

                    /** ListTransferableSkusRequest pageToken. */
                    public pageToken: string;

                    /** ListTransferableSkusRequest authToken. */
                    public authToken: string;

                    /** ListTransferableSkusRequest languageCode. */
                    public languageCode: string;

                    /** ListTransferableSkusRequest transferredCustomerIdentity. */
                    public transferredCustomerIdentity?: ("cloudIdentityId"|"customerName");

                    /**
                     * Creates a new ListTransferableSkusRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTransferableSkusRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListTransferableSkusRequest): google.cloud.channel.v1.ListTransferableSkusRequest;

                    /**
                     * Encodes the specified ListTransferableSkusRequest message. Does not implicitly {@link google.cloud.channel.v1.ListTransferableSkusRequest.verify|verify} messages.
                     * @param message ListTransferableSkusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListTransferableSkusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTransferableSkusRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListTransferableSkusRequest.verify|verify} messages.
                     * @param message ListTransferableSkusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListTransferableSkusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTransferableSkusRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTransferableSkusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListTransferableSkusRequest;

                    /**
                     * Decodes a ListTransferableSkusRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTransferableSkusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListTransferableSkusRequest;

                    /**
                     * Verifies a ListTransferableSkusRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTransferableSkusRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTransferableSkusRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListTransferableSkusRequest;

                    /**
                     * Creates a plain object from a ListTransferableSkusRequest message. Also converts values to other types if specified.
                     * @param message ListTransferableSkusRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListTransferableSkusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTransferableSkusRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTransferableSkusResponse. */
                interface IListTransferableSkusResponse {

                    /** ListTransferableSkusResponse transferableSkus */
                    transferableSkus?: (google.cloud.channel.v1.ITransferableSku[]|null);

                    /** ListTransferableSkusResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTransferableSkusResponse. */
                class ListTransferableSkusResponse implements IListTransferableSkusResponse {

                    /**
                     * Constructs a new ListTransferableSkusResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListTransferableSkusResponse);

                    /** ListTransferableSkusResponse transferableSkus. */
                    public transferableSkus: google.cloud.channel.v1.ITransferableSku[];

                    /** ListTransferableSkusResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTransferableSkusResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTransferableSkusResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListTransferableSkusResponse): google.cloud.channel.v1.ListTransferableSkusResponse;

                    /**
                     * Encodes the specified ListTransferableSkusResponse message. Does not implicitly {@link google.cloud.channel.v1.ListTransferableSkusResponse.verify|verify} messages.
                     * @param message ListTransferableSkusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListTransferableSkusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTransferableSkusResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListTransferableSkusResponse.verify|verify} messages.
                     * @param message ListTransferableSkusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListTransferableSkusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTransferableSkusResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTransferableSkusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListTransferableSkusResponse;

                    /**
                     * Decodes a ListTransferableSkusResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTransferableSkusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListTransferableSkusResponse;

                    /**
                     * Verifies a ListTransferableSkusResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTransferableSkusResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTransferableSkusResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListTransferableSkusResponse;

                    /**
                     * Creates a plain object from a ListTransferableSkusResponse message. Also converts values to other types if specified.
                     * @param message ListTransferableSkusResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListTransferableSkusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTransferableSkusResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTransferableOffersRequest. */
                interface IListTransferableOffersRequest {

                    /** ListTransferableOffersRequest cloudIdentityId */
                    cloudIdentityId?: (string|null);

                    /** ListTransferableOffersRequest customerName */
                    customerName?: (string|null);

                    /** ListTransferableOffersRequest parent */
                    parent?: (string|null);

                    /** ListTransferableOffersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTransferableOffersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListTransferableOffersRequest sku */
                    sku?: (string|null);

                    /** ListTransferableOffersRequest languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a ListTransferableOffersRequest. */
                class ListTransferableOffersRequest implements IListTransferableOffersRequest {

                    /**
                     * Constructs a new ListTransferableOffersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListTransferableOffersRequest);

                    /** ListTransferableOffersRequest cloudIdentityId. */
                    public cloudIdentityId?: (string|null);

                    /** ListTransferableOffersRequest customerName. */
                    public customerName?: (string|null);

                    /** ListTransferableOffersRequest parent. */
                    public parent: string;

                    /** ListTransferableOffersRequest pageSize. */
                    public pageSize: number;

                    /** ListTransferableOffersRequest pageToken. */
                    public pageToken: string;

                    /** ListTransferableOffersRequest sku. */
                    public sku: string;

                    /** ListTransferableOffersRequest languageCode. */
                    public languageCode: string;

                    /** ListTransferableOffersRequest transferredCustomerIdentity. */
                    public transferredCustomerIdentity?: ("cloudIdentityId"|"customerName");

                    /**
                     * Creates a new ListTransferableOffersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTransferableOffersRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListTransferableOffersRequest): google.cloud.channel.v1.ListTransferableOffersRequest;

                    /**
                     * Encodes the specified ListTransferableOffersRequest message. Does not implicitly {@link google.cloud.channel.v1.ListTransferableOffersRequest.verify|verify} messages.
                     * @param message ListTransferableOffersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListTransferableOffersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTransferableOffersRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListTransferableOffersRequest.verify|verify} messages.
                     * @param message ListTransferableOffersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListTransferableOffersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTransferableOffersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTransferableOffersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListTransferableOffersRequest;

                    /**
                     * Decodes a ListTransferableOffersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTransferableOffersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListTransferableOffersRequest;

                    /**
                     * Verifies a ListTransferableOffersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTransferableOffersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTransferableOffersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListTransferableOffersRequest;

                    /**
                     * Creates a plain object from a ListTransferableOffersRequest message. Also converts values to other types if specified.
                     * @param message ListTransferableOffersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListTransferableOffersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTransferableOffersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTransferableOffersResponse. */
                interface IListTransferableOffersResponse {

                    /** ListTransferableOffersResponse transferableOffers */
                    transferableOffers?: (google.cloud.channel.v1.ITransferableOffer[]|null);

                    /** ListTransferableOffersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTransferableOffersResponse. */
                class ListTransferableOffersResponse implements IListTransferableOffersResponse {

                    /**
                     * Constructs a new ListTransferableOffersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListTransferableOffersResponse);

                    /** ListTransferableOffersResponse transferableOffers. */
                    public transferableOffers: google.cloud.channel.v1.ITransferableOffer[];

                    /** ListTransferableOffersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTransferableOffersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTransferableOffersResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListTransferableOffersResponse): google.cloud.channel.v1.ListTransferableOffersResponse;

                    /**
                     * Encodes the specified ListTransferableOffersResponse message. Does not implicitly {@link google.cloud.channel.v1.ListTransferableOffersResponse.verify|verify} messages.
                     * @param message ListTransferableOffersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListTransferableOffersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTransferableOffersResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListTransferableOffersResponse.verify|verify} messages.
                     * @param message ListTransferableOffersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListTransferableOffersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTransferableOffersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTransferableOffersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListTransferableOffersResponse;

                    /**
                     * Decodes a ListTransferableOffersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTransferableOffersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListTransferableOffersResponse;

                    /**
                     * Verifies a ListTransferableOffersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTransferableOffersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTransferableOffersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListTransferableOffersResponse;

                    /**
                     * Creates a plain object from a ListTransferableOffersResponse message. Also converts values to other types if specified.
                     * @param message ListTransferableOffersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListTransferableOffersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTransferableOffersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TransferableOffer. */
                interface ITransferableOffer {

                    /** TransferableOffer offer */
                    offer?: (google.cloud.channel.v1.IOffer|null);
                }

                /** Represents a TransferableOffer. */
                class TransferableOffer implements ITransferableOffer {

                    /**
                     * Constructs a new TransferableOffer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ITransferableOffer);

                    /** TransferableOffer offer. */
                    public offer?: (google.cloud.channel.v1.IOffer|null);

                    /**
                     * Creates a new TransferableOffer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransferableOffer instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ITransferableOffer): google.cloud.channel.v1.TransferableOffer;

                    /**
                     * Encodes the specified TransferableOffer message. Does not implicitly {@link google.cloud.channel.v1.TransferableOffer.verify|verify} messages.
                     * @param message TransferableOffer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ITransferableOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransferableOffer message, length delimited. Does not implicitly {@link google.cloud.channel.v1.TransferableOffer.verify|verify} messages.
                     * @param message TransferableOffer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ITransferableOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransferableOffer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransferableOffer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.TransferableOffer;

                    /**
                     * Decodes a TransferableOffer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransferableOffer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.TransferableOffer;

                    /**
                     * Verifies a TransferableOffer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransferableOffer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransferableOffer
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.TransferableOffer;

                    /**
                     * Creates a plain object from a TransferableOffer message. Also converts values to other types if specified.
                     * @param message TransferableOffer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.TransferableOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransferableOffer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetEntitlementRequest. */
                interface IGetEntitlementRequest {

                    /** GetEntitlementRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEntitlementRequest. */
                class GetEntitlementRequest implements IGetEntitlementRequest {

                    /**
                     * Constructs a new GetEntitlementRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IGetEntitlementRequest);

                    /** GetEntitlementRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEntitlementRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEntitlementRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IGetEntitlementRequest): google.cloud.channel.v1.GetEntitlementRequest;

                    /**
                     * Encodes the specified GetEntitlementRequest message. Does not implicitly {@link google.cloud.channel.v1.GetEntitlementRequest.verify|verify} messages.
                     * @param message GetEntitlementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IGetEntitlementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEntitlementRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.GetEntitlementRequest.verify|verify} messages.
                     * @param message GetEntitlementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IGetEntitlementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEntitlementRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEntitlementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.GetEntitlementRequest;

                    /**
                     * Decodes a GetEntitlementRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEntitlementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.GetEntitlementRequest;

                    /**
                     * Verifies a GetEntitlementRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEntitlementRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEntitlementRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.GetEntitlementRequest;

                    /**
                     * Creates a plain object from a GetEntitlementRequest message. Also converts values to other types if specified.
                     * @param message GetEntitlementRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.GetEntitlementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEntitlementRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListChannelPartnerLinksRequest. */
                interface IListChannelPartnerLinksRequest {

                    /** ListChannelPartnerLinksRequest parent */
                    parent?: (string|null);

                    /** ListChannelPartnerLinksRequest pageSize */
                    pageSize?: (number|null);

                    /** ListChannelPartnerLinksRequest pageToken */
                    pageToken?: (string|null);

                    /** ListChannelPartnerLinksRequest view */
                    view?: (google.cloud.channel.v1.ChannelPartnerLinkView|keyof typeof google.cloud.channel.v1.ChannelPartnerLinkView|null);
                }

                /** Represents a ListChannelPartnerLinksRequest. */
                class ListChannelPartnerLinksRequest implements IListChannelPartnerLinksRequest {

                    /**
                     * Constructs a new ListChannelPartnerLinksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListChannelPartnerLinksRequest);

                    /** ListChannelPartnerLinksRequest parent. */
                    public parent: string;

                    /** ListChannelPartnerLinksRequest pageSize. */
                    public pageSize: number;

                    /** ListChannelPartnerLinksRequest pageToken. */
                    public pageToken: string;

                    /** ListChannelPartnerLinksRequest view. */
                    public view: (google.cloud.channel.v1.ChannelPartnerLinkView|keyof typeof google.cloud.channel.v1.ChannelPartnerLinkView);

                    /**
                     * Creates a new ListChannelPartnerLinksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListChannelPartnerLinksRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListChannelPartnerLinksRequest): google.cloud.channel.v1.ListChannelPartnerLinksRequest;

                    /**
                     * Encodes the specified ListChannelPartnerLinksRequest message. Does not implicitly {@link google.cloud.channel.v1.ListChannelPartnerLinksRequest.verify|verify} messages.
                     * @param message ListChannelPartnerLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListChannelPartnerLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListChannelPartnerLinksRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListChannelPartnerLinksRequest.verify|verify} messages.
                     * @param message ListChannelPartnerLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListChannelPartnerLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListChannelPartnerLinksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListChannelPartnerLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListChannelPartnerLinksRequest;

                    /**
                     * Decodes a ListChannelPartnerLinksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListChannelPartnerLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListChannelPartnerLinksRequest;

                    /**
                     * Verifies a ListChannelPartnerLinksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListChannelPartnerLinksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListChannelPartnerLinksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListChannelPartnerLinksRequest;

                    /**
                     * Creates a plain object from a ListChannelPartnerLinksRequest message. Also converts values to other types if specified.
                     * @param message ListChannelPartnerLinksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListChannelPartnerLinksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListChannelPartnerLinksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListChannelPartnerLinksResponse. */
                interface IListChannelPartnerLinksResponse {

                    /** ListChannelPartnerLinksResponse channelPartnerLinks */
                    channelPartnerLinks?: (google.cloud.channel.v1.IChannelPartnerLink[]|null);

                    /** ListChannelPartnerLinksResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListChannelPartnerLinksResponse. */
                class ListChannelPartnerLinksResponse implements IListChannelPartnerLinksResponse {

                    /**
                     * Constructs a new ListChannelPartnerLinksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListChannelPartnerLinksResponse);

                    /** ListChannelPartnerLinksResponse channelPartnerLinks. */
                    public channelPartnerLinks: google.cloud.channel.v1.IChannelPartnerLink[];

                    /** ListChannelPartnerLinksResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListChannelPartnerLinksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListChannelPartnerLinksResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListChannelPartnerLinksResponse): google.cloud.channel.v1.ListChannelPartnerLinksResponse;

                    /**
                     * Encodes the specified ListChannelPartnerLinksResponse message. Does not implicitly {@link google.cloud.channel.v1.ListChannelPartnerLinksResponse.verify|verify} messages.
                     * @param message ListChannelPartnerLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListChannelPartnerLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListChannelPartnerLinksResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListChannelPartnerLinksResponse.verify|verify} messages.
                     * @param message ListChannelPartnerLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListChannelPartnerLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListChannelPartnerLinksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListChannelPartnerLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListChannelPartnerLinksResponse;

                    /**
                     * Decodes a ListChannelPartnerLinksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListChannelPartnerLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListChannelPartnerLinksResponse;

                    /**
                     * Verifies a ListChannelPartnerLinksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListChannelPartnerLinksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListChannelPartnerLinksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListChannelPartnerLinksResponse;

                    /**
                     * Creates a plain object from a ListChannelPartnerLinksResponse message. Also converts values to other types if specified.
                     * @param message ListChannelPartnerLinksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListChannelPartnerLinksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListChannelPartnerLinksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetChannelPartnerLinkRequest. */
                interface IGetChannelPartnerLinkRequest {

                    /** GetChannelPartnerLinkRequest name */
                    name?: (string|null);

                    /** GetChannelPartnerLinkRequest view */
                    view?: (google.cloud.channel.v1.ChannelPartnerLinkView|keyof typeof google.cloud.channel.v1.ChannelPartnerLinkView|null);
                }

                /** Represents a GetChannelPartnerLinkRequest. */
                class GetChannelPartnerLinkRequest implements IGetChannelPartnerLinkRequest {

                    /**
                     * Constructs a new GetChannelPartnerLinkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IGetChannelPartnerLinkRequest);

                    /** GetChannelPartnerLinkRequest name. */
                    public name: string;

                    /** GetChannelPartnerLinkRequest view. */
                    public view: (google.cloud.channel.v1.ChannelPartnerLinkView|keyof typeof google.cloud.channel.v1.ChannelPartnerLinkView);

                    /**
                     * Creates a new GetChannelPartnerLinkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetChannelPartnerLinkRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IGetChannelPartnerLinkRequest): google.cloud.channel.v1.GetChannelPartnerLinkRequest;

                    /**
                     * Encodes the specified GetChannelPartnerLinkRequest message. Does not implicitly {@link google.cloud.channel.v1.GetChannelPartnerLinkRequest.verify|verify} messages.
                     * @param message GetChannelPartnerLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IGetChannelPartnerLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetChannelPartnerLinkRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.GetChannelPartnerLinkRequest.verify|verify} messages.
                     * @param message GetChannelPartnerLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IGetChannelPartnerLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetChannelPartnerLinkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetChannelPartnerLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.GetChannelPartnerLinkRequest;

                    /**
                     * Decodes a GetChannelPartnerLinkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetChannelPartnerLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.GetChannelPartnerLinkRequest;

                    /**
                     * Verifies a GetChannelPartnerLinkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetChannelPartnerLinkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetChannelPartnerLinkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.GetChannelPartnerLinkRequest;

                    /**
                     * Creates a plain object from a GetChannelPartnerLinkRequest message. Also converts values to other types if specified.
                     * @param message GetChannelPartnerLinkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.GetChannelPartnerLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetChannelPartnerLinkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateChannelPartnerLinkRequest. */
                interface ICreateChannelPartnerLinkRequest {

                    /** CreateChannelPartnerLinkRequest parent */
                    parent?: (string|null);

                    /** CreateChannelPartnerLinkRequest channelPartnerLink */
                    channelPartnerLink?: (google.cloud.channel.v1.IChannelPartnerLink|null);
                }

                /** Represents a CreateChannelPartnerLinkRequest. */
                class CreateChannelPartnerLinkRequest implements ICreateChannelPartnerLinkRequest {

                    /**
                     * Constructs a new CreateChannelPartnerLinkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ICreateChannelPartnerLinkRequest);

                    /** CreateChannelPartnerLinkRequest parent. */
                    public parent: string;

                    /** CreateChannelPartnerLinkRequest channelPartnerLink. */
                    public channelPartnerLink?: (google.cloud.channel.v1.IChannelPartnerLink|null);

                    /**
                     * Creates a new CreateChannelPartnerLinkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateChannelPartnerLinkRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ICreateChannelPartnerLinkRequest): google.cloud.channel.v1.CreateChannelPartnerLinkRequest;

                    /**
                     * Encodes the specified CreateChannelPartnerLinkRequest message. Does not implicitly {@link google.cloud.channel.v1.CreateChannelPartnerLinkRequest.verify|verify} messages.
                     * @param message CreateChannelPartnerLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ICreateChannelPartnerLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateChannelPartnerLinkRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.CreateChannelPartnerLinkRequest.verify|verify} messages.
                     * @param message CreateChannelPartnerLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ICreateChannelPartnerLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateChannelPartnerLinkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateChannelPartnerLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.CreateChannelPartnerLinkRequest;

                    /**
                     * Decodes a CreateChannelPartnerLinkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateChannelPartnerLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.CreateChannelPartnerLinkRequest;

                    /**
                     * Verifies a CreateChannelPartnerLinkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateChannelPartnerLinkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateChannelPartnerLinkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.CreateChannelPartnerLinkRequest;

                    /**
                     * Creates a plain object from a CreateChannelPartnerLinkRequest message. Also converts values to other types if specified.
                     * @param message CreateChannelPartnerLinkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.CreateChannelPartnerLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateChannelPartnerLinkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateChannelPartnerLinkRequest. */
                interface IUpdateChannelPartnerLinkRequest {

                    /** UpdateChannelPartnerLinkRequest name */
                    name?: (string|null);

                    /** UpdateChannelPartnerLinkRequest channelPartnerLink */
                    channelPartnerLink?: (google.cloud.channel.v1.IChannelPartnerLink|null);

                    /** UpdateChannelPartnerLinkRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateChannelPartnerLinkRequest. */
                class UpdateChannelPartnerLinkRequest implements IUpdateChannelPartnerLinkRequest {

                    /**
                     * Constructs a new UpdateChannelPartnerLinkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IUpdateChannelPartnerLinkRequest);

                    /** UpdateChannelPartnerLinkRequest name. */
                    public name: string;

                    /** UpdateChannelPartnerLinkRequest channelPartnerLink. */
                    public channelPartnerLink?: (google.cloud.channel.v1.IChannelPartnerLink|null);

                    /** UpdateChannelPartnerLinkRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateChannelPartnerLinkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateChannelPartnerLinkRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IUpdateChannelPartnerLinkRequest): google.cloud.channel.v1.UpdateChannelPartnerLinkRequest;

                    /**
                     * Encodes the specified UpdateChannelPartnerLinkRequest message. Does not implicitly {@link google.cloud.channel.v1.UpdateChannelPartnerLinkRequest.verify|verify} messages.
                     * @param message UpdateChannelPartnerLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IUpdateChannelPartnerLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateChannelPartnerLinkRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.UpdateChannelPartnerLinkRequest.verify|verify} messages.
                     * @param message UpdateChannelPartnerLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IUpdateChannelPartnerLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateChannelPartnerLinkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateChannelPartnerLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.UpdateChannelPartnerLinkRequest;

                    /**
                     * Decodes an UpdateChannelPartnerLinkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateChannelPartnerLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.UpdateChannelPartnerLinkRequest;

                    /**
                     * Verifies an UpdateChannelPartnerLinkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateChannelPartnerLinkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateChannelPartnerLinkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.UpdateChannelPartnerLinkRequest;

                    /**
                     * Creates a plain object from an UpdateChannelPartnerLinkRequest message. Also converts values to other types if specified.
                     * @param message UpdateChannelPartnerLinkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.UpdateChannelPartnerLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateChannelPartnerLinkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateEntitlementRequest. */
                interface ICreateEntitlementRequest {

                    /** CreateEntitlementRequest parent */
                    parent?: (string|null);

                    /** CreateEntitlementRequest entitlement */
                    entitlement?: (google.cloud.channel.v1.IEntitlement|null);

                    /** CreateEntitlementRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateEntitlementRequest. */
                class CreateEntitlementRequest implements ICreateEntitlementRequest {

                    /**
                     * Constructs a new CreateEntitlementRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ICreateEntitlementRequest);

                    /** CreateEntitlementRequest parent. */
                    public parent: string;

                    /** CreateEntitlementRequest entitlement. */
                    public entitlement?: (google.cloud.channel.v1.IEntitlement|null);

                    /** CreateEntitlementRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateEntitlementRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateEntitlementRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ICreateEntitlementRequest): google.cloud.channel.v1.CreateEntitlementRequest;

                    /**
                     * Encodes the specified CreateEntitlementRequest message. Does not implicitly {@link google.cloud.channel.v1.CreateEntitlementRequest.verify|verify} messages.
                     * @param message CreateEntitlementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ICreateEntitlementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateEntitlementRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.CreateEntitlementRequest.verify|verify} messages.
                     * @param message CreateEntitlementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ICreateEntitlementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateEntitlementRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateEntitlementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.CreateEntitlementRequest;

                    /**
                     * Decodes a CreateEntitlementRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateEntitlementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.CreateEntitlementRequest;

                    /**
                     * Verifies a CreateEntitlementRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateEntitlementRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateEntitlementRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.CreateEntitlementRequest;

                    /**
                     * Creates a plain object from a CreateEntitlementRequest message. Also converts values to other types if specified.
                     * @param message CreateEntitlementRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.CreateEntitlementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateEntitlementRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TransferEntitlementsRequest. */
                interface ITransferEntitlementsRequest {

                    /** TransferEntitlementsRequest parent */
                    parent?: (string|null);

                    /** TransferEntitlementsRequest entitlements */
                    entitlements?: (google.cloud.channel.v1.IEntitlement[]|null);

                    /** TransferEntitlementsRequest authToken */
                    authToken?: (string|null);

                    /** TransferEntitlementsRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a TransferEntitlementsRequest. */
                class TransferEntitlementsRequest implements ITransferEntitlementsRequest {

                    /**
                     * Constructs a new TransferEntitlementsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ITransferEntitlementsRequest);

                    /** TransferEntitlementsRequest parent. */
                    public parent: string;

                    /** TransferEntitlementsRequest entitlements. */
                    public entitlements: google.cloud.channel.v1.IEntitlement[];

                    /** TransferEntitlementsRequest authToken. */
                    public authToken: string;

                    /** TransferEntitlementsRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new TransferEntitlementsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransferEntitlementsRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ITransferEntitlementsRequest): google.cloud.channel.v1.TransferEntitlementsRequest;

                    /**
                     * Encodes the specified TransferEntitlementsRequest message. Does not implicitly {@link google.cloud.channel.v1.TransferEntitlementsRequest.verify|verify} messages.
                     * @param message TransferEntitlementsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ITransferEntitlementsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransferEntitlementsRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.TransferEntitlementsRequest.verify|verify} messages.
                     * @param message TransferEntitlementsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ITransferEntitlementsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransferEntitlementsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransferEntitlementsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.TransferEntitlementsRequest;

                    /**
                     * Decodes a TransferEntitlementsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransferEntitlementsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.TransferEntitlementsRequest;

                    /**
                     * Verifies a TransferEntitlementsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransferEntitlementsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransferEntitlementsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.TransferEntitlementsRequest;

                    /**
                     * Creates a plain object from a TransferEntitlementsRequest message. Also converts values to other types if specified.
                     * @param message TransferEntitlementsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.TransferEntitlementsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransferEntitlementsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TransferEntitlementsResponse. */
                interface ITransferEntitlementsResponse {

                    /** TransferEntitlementsResponse entitlements */
                    entitlements?: (google.cloud.channel.v1.IEntitlement[]|null);
                }

                /** Represents a TransferEntitlementsResponse. */
                class TransferEntitlementsResponse implements ITransferEntitlementsResponse {

                    /**
                     * Constructs a new TransferEntitlementsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ITransferEntitlementsResponse);

                    /** TransferEntitlementsResponse entitlements. */
                    public entitlements: google.cloud.channel.v1.IEntitlement[];

                    /**
                     * Creates a new TransferEntitlementsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransferEntitlementsResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ITransferEntitlementsResponse): google.cloud.channel.v1.TransferEntitlementsResponse;

                    /**
                     * Encodes the specified TransferEntitlementsResponse message. Does not implicitly {@link google.cloud.channel.v1.TransferEntitlementsResponse.verify|verify} messages.
                     * @param message TransferEntitlementsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ITransferEntitlementsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransferEntitlementsResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.TransferEntitlementsResponse.verify|verify} messages.
                     * @param message TransferEntitlementsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ITransferEntitlementsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransferEntitlementsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransferEntitlementsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.TransferEntitlementsResponse;

                    /**
                     * Decodes a TransferEntitlementsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransferEntitlementsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.TransferEntitlementsResponse;

                    /**
                     * Verifies a TransferEntitlementsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransferEntitlementsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransferEntitlementsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.TransferEntitlementsResponse;

                    /**
                     * Creates a plain object from a TransferEntitlementsResponse message. Also converts values to other types if specified.
                     * @param message TransferEntitlementsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.TransferEntitlementsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransferEntitlementsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TransferEntitlementsToGoogleRequest. */
                interface ITransferEntitlementsToGoogleRequest {

                    /** TransferEntitlementsToGoogleRequest parent */
                    parent?: (string|null);

                    /** TransferEntitlementsToGoogleRequest entitlements */
                    entitlements?: (google.cloud.channel.v1.IEntitlement[]|null);

                    /** TransferEntitlementsToGoogleRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a TransferEntitlementsToGoogleRequest. */
                class TransferEntitlementsToGoogleRequest implements ITransferEntitlementsToGoogleRequest {

                    /**
                     * Constructs a new TransferEntitlementsToGoogleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ITransferEntitlementsToGoogleRequest);

                    /** TransferEntitlementsToGoogleRequest parent. */
                    public parent: string;

                    /** TransferEntitlementsToGoogleRequest entitlements. */
                    public entitlements: google.cloud.channel.v1.IEntitlement[];

                    /** TransferEntitlementsToGoogleRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new TransferEntitlementsToGoogleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransferEntitlementsToGoogleRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ITransferEntitlementsToGoogleRequest): google.cloud.channel.v1.TransferEntitlementsToGoogleRequest;

                    /**
                     * Encodes the specified TransferEntitlementsToGoogleRequest message. Does not implicitly {@link google.cloud.channel.v1.TransferEntitlementsToGoogleRequest.verify|verify} messages.
                     * @param message TransferEntitlementsToGoogleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ITransferEntitlementsToGoogleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransferEntitlementsToGoogleRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.TransferEntitlementsToGoogleRequest.verify|verify} messages.
                     * @param message TransferEntitlementsToGoogleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ITransferEntitlementsToGoogleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransferEntitlementsToGoogleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransferEntitlementsToGoogleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.TransferEntitlementsToGoogleRequest;

                    /**
                     * Decodes a TransferEntitlementsToGoogleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransferEntitlementsToGoogleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.TransferEntitlementsToGoogleRequest;

                    /**
                     * Verifies a TransferEntitlementsToGoogleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransferEntitlementsToGoogleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransferEntitlementsToGoogleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.TransferEntitlementsToGoogleRequest;

                    /**
                     * Creates a plain object from a TransferEntitlementsToGoogleRequest message. Also converts values to other types if specified.
                     * @param message TransferEntitlementsToGoogleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.TransferEntitlementsToGoogleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransferEntitlementsToGoogleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ChangeParametersRequest. */
                interface IChangeParametersRequest {

                    /** ChangeParametersRequest name */
                    name?: (string|null);

                    /** ChangeParametersRequest parameters */
                    parameters?: (google.cloud.channel.v1.IParameter[]|null);

                    /** ChangeParametersRequest requestId */
                    requestId?: (string|null);

                    /** ChangeParametersRequest purchaseOrderId */
                    purchaseOrderId?: (string|null);
                }

                /** Represents a ChangeParametersRequest. */
                class ChangeParametersRequest implements IChangeParametersRequest {

                    /**
                     * Constructs a new ChangeParametersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IChangeParametersRequest);

                    /** ChangeParametersRequest name. */
                    public name: string;

                    /** ChangeParametersRequest parameters. */
                    public parameters: google.cloud.channel.v1.IParameter[];

                    /** ChangeParametersRequest requestId. */
                    public requestId: string;

                    /** ChangeParametersRequest purchaseOrderId. */
                    public purchaseOrderId: string;

                    /**
                     * Creates a new ChangeParametersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChangeParametersRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IChangeParametersRequest): google.cloud.channel.v1.ChangeParametersRequest;

                    /**
                     * Encodes the specified ChangeParametersRequest message. Does not implicitly {@link google.cloud.channel.v1.ChangeParametersRequest.verify|verify} messages.
                     * @param message ChangeParametersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IChangeParametersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChangeParametersRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ChangeParametersRequest.verify|verify} messages.
                     * @param message ChangeParametersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IChangeParametersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChangeParametersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChangeParametersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ChangeParametersRequest;

                    /**
                     * Decodes a ChangeParametersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChangeParametersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ChangeParametersRequest;

                    /**
                     * Verifies a ChangeParametersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChangeParametersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChangeParametersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ChangeParametersRequest;

                    /**
                     * Creates a plain object from a ChangeParametersRequest message. Also converts values to other types if specified.
                     * @param message ChangeParametersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ChangeParametersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChangeParametersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ChangeRenewalSettingsRequest. */
                interface IChangeRenewalSettingsRequest {

                    /** ChangeRenewalSettingsRequest name */
                    name?: (string|null);

                    /** ChangeRenewalSettingsRequest renewalSettings */
                    renewalSettings?: (google.cloud.channel.v1.IRenewalSettings|null);

                    /** ChangeRenewalSettingsRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a ChangeRenewalSettingsRequest. */
                class ChangeRenewalSettingsRequest implements IChangeRenewalSettingsRequest {

                    /**
                     * Constructs a new ChangeRenewalSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IChangeRenewalSettingsRequest);

                    /** ChangeRenewalSettingsRequest name. */
                    public name: string;

                    /** ChangeRenewalSettingsRequest renewalSettings. */
                    public renewalSettings?: (google.cloud.channel.v1.IRenewalSettings|null);

                    /** ChangeRenewalSettingsRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new ChangeRenewalSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChangeRenewalSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IChangeRenewalSettingsRequest): google.cloud.channel.v1.ChangeRenewalSettingsRequest;

                    /**
                     * Encodes the specified ChangeRenewalSettingsRequest message. Does not implicitly {@link google.cloud.channel.v1.ChangeRenewalSettingsRequest.verify|verify} messages.
                     * @param message ChangeRenewalSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IChangeRenewalSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChangeRenewalSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ChangeRenewalSettingsRequest.verify|verify} messages.
                     * @param message ChangeRenewalSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IChangeRenewalSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChangeRenewalSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChangeRenewalSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ChangeRenewalSettingsRequest;

                    /**
                     * Decodes a ChangeRenewalSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChangeRenewalSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ChangeRenewalSettingsRequest;

                    /**
                     * Verifies a ChangeRenewalSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChangeRenewalSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChangeRenewalSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ChangeRenewalSettingsRequest;

                    /**
                     * Creates a plain object from a ChangeRenewalSettingsRequest message. Also converts values to other types if specified.
                     * @param message ChangeRenewalSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ChangeRenewalSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChangeRenewalSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ChangeOfferRequest. */
                interface IChangeOfferRequest {

                    /** ChangeOfferRequest name */
                    name?: (string|null);

                    /** ChangeOfferRequest offer */
                    offer?: (string|null);

                    /** ChangeOfferRequest parameters */
                    parameters?: (google.cloud.channel.v1.IParameter[]|null);

                    /** ChangeOfferRequest purchaseOrderId */
                    purchaseOrderId?: (string|null);

                    /** ChangeOfferRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a ChangeOfferRequest. */
                class ChangeOfferRequest implements IChangeOfferRequest {

                    /**
                     * Constructs a new ChangeOfferRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IChangeOfferRequest);

                    /** ChangeOfferRequest name. */
                    public name: string;

                    /** ChangeOfferRequest offer. */
                    public offer: string;

                    /** ChangeOfferRequest parameters. */
                    public parameters: google.cloud.channel.v1.IParameter[];

                    /** ChangeOfferRequest purchaseOrderId. */
                    public purchaseOrderId: string;

                    /** ChangeOfferRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new ChangeOfferRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChangeOfferRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IChangeOfferRequest): google.cloud.channel.v1.ChangeOfferRequest;

                    /**
                     * Encodes the specified ChangeOfferRequest message. Does not implicitly {@link google.cloud.channel.v1.ChangeOfferRequest.verify|verify} messages.
                     * @param message ChangeOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IChangeOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChangeOfferRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ChangeOfferRequest.verify|verify} messages.
                     * @param message ChangeOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IChangeOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChangeOfferRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChangeOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ChangeOfferRequest;

                    /**
                     * Decodes a ChangeOfferRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChangeOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ChangeOfferRequest;

                    /**
                     * Verifies a ChangeOfferRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChangeOfferRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChangeOfferRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ChangeOfferRequest;

                    /**
                     * Creates a plain object from a ChangeOfferRequest message. Also converts values to other types if specified.
                     * @param message ChangeOfferRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ChangeOfferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChangeOfferRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StartPaidServiceRequest. */
                interface IStartPaidServiceRequest {

                    /** StartPaidServiceRequest name */
                    name?: (string|null);

                    /** StartPaidServiceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a StartPaidServiceRequest. */
                class StartPaidServiceRequest implements IStartPaidServiceRequest {

                    /**
                     * Constructs a new StartPaidServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IStartPaidServiceRequest);

                    /** StartPaidServiceRequest name. */
                    public name: string;

                    /** StartPaidServiceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new StartPaidServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartPaidServiceRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IStartPaidServiceRequest): google.cloud.channel.v1.StartPaidServiceRequest;

                    /**
                     * Encodes the specified StartPaidServiceRequest message. Does not implicitly {@link google.cloud.channel.v1.StartPaidServiceRequest.verify|verify} messages.
                     * @param message StartPaidServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IStartPaidServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartPaidServiceRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.StartPaidServiceRequest.verify|verify} messages.
                     * @param message StartPaidServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IStartPaidServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartPaidServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartPaidServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.StartPaidServiceRequest;

                    /**
                     * Decodes a StartPaidServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartPaidServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.StartPaidServiceRequest;

                    /**
                     * Verifies a StartPaidServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartPaidServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartPaidServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.StartPaidServiceRequest;

                    /**
                     * Creates a plain object from a StartPaidServiceRequest message. Also converts values to other types if specified.
                     * @param message StartPaidServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.StartPaidServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartPaidServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CancelEntitlementRequest. */
                interface ICancelEntitlementRequest {

                    /** CancelEntitlementRequest name */
                    name?: (string|null);

                    /** CancelEntitlementRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CancelEntitlementRequest. */
                class CancelEntitlementRequest implements ICancelEntitlementRequest {

                    /**
                     * Constructs a new CancelEntitlementRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ICancelEntitlementRequest);

                    /** CancelEntitlementRequest name. */
                    public name: string;

                    /** CancelEntitlementRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CancelEntitlementRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelEntitlementRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ICancelEntitlementRequest): google.cloud.channel.v1.CancelEntitlementRequest;

                    /**
                     * Encodes the specified CancelEntitlementRequest message. Does not implicitly {@link google.cloud.channel.v1.CancelEntitlementRequest.verify|verify} messages.
                     * @param message CancelEntitlementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ICancelEntitlementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelEntitlementRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.CancelEntitlementRequest.verify|verify} messages.
                     * @param message CancelEntitlementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ICancelEntitlementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelEntitlementRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelEntitlementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.CancelEntitlementRequest;

                    /**
                     * Decodes a CancelEntitlementRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelEntitlementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.CancelEntitlementRequest;

                    /**
                     * Verifies a CancelEntitlementRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelEntitlementRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelEntitlementRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.CancelEntitlementRequest;

                    /**
                     * Creates a plain object from a CancelEntitlementRequest message. Also converts values to other types if specified.
                     * @param message CancelEntitlementRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.CancelEntitlementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelEntitlementRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SuspendEntitlementRequest. */
                interface ISuspendEntitlementRequest {

                    /** SuspendEntitlementRequest name */
                    name?: (string|null);

                    /** SuspendEntitlementRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a SuspendEntitlementRequest. */
                class SuspendEntitlementRequest implements ISuspendEntitlementRequest {

                    /**
                     * Constructs a new SuspendEntitlementRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ISuspendEntitlementRequest);

                    /** SuspendEntitlementRequest name. */
                    public name: string;

                    /** SuspendEntitlementRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new SuspendEntitlementRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SuspendEntitlementRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ISuspendEntitlementRequest): google.cloud.channel.v1.SuspendEntitlementRequest;

                    /**
                     * Encodes the specified SuspendEntitlementRequest message. Does not implicitly {@link google.cloud.channel.v1.SuspendEntitlementRequest.verify|verify} messages.
                     * @param message SuspendEntitlementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ISuspendEntitlementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SuspendEntitlementRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.SuspendEntitlementRequest.verify|verify} messages.
                     * @param message SuspendEntitlementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ISuspendEntitlementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SuspendEntitlementRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SuspendEntitlementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.SuspendEntitlementRequest;

                    /**
                     * Decodes a SuspendEntitlementRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SuspendEntitlementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.SuspendEntitlementRequest;

                    /**
                     * Verifies a SuspendEntitlementRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SuspendEntitlementRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SuspendEntitlementRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.SuspendEntitlementRequest;

                    /**
                     * Creates a plain object from a SuspendEntitlementRequest message. Also converts values to other types if specified.
                     * @param message SuspendEntitlementRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.SuspendEntitlementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SuspendEntitlementRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ActivateEntitlementRequest. */
                interface IActivateEntitlementRequest {

                    /** ActivateEntitlementRequest name */
                    name?: (string|null);

                    /** ActivateEntitlementRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an ActivateEntitlementRequest. */
                class ActivateEntitlementRequest implements IActivateEntitlementRequest {

                    /**
                     * Constructs a new ActivateEntitlementRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IActivateEntitlementRequest);

                    /** ActivateEntitlementRequest name. */
                    public name: string;

                    /** ActivateEntitlementRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new ActivateEntitlementRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActivateEntitlementRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IActivateEntitlementRequest): google.cloud.channel.v1.ActivateEntitlementRequest;

                    /**
                     * Encodes the specified ActivateEntitlementRequest message. Does not implicitly {@link google.cloud.channel.v1.ActivateEntitlementRequest.verify|verify} messages.
                     * @param message ActivateEntitlementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IActivateEntitlementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActivateEntitlementRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ActivateEntitlementRequest.verify|verify} messages.
                     * @param message ActivateEntitlementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IActivateEntitlementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActivateEntitlementRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActivateEntitlementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ActivateEntitlementRequest;

                    /**
                     * Decodes an ActivateEntitlementRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActivateEntitlementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ActivateEntitlementRequest;

                    /**
                     * Verifies an ActivateEntitlementRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActivateEntitlementRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActivateEntitlementRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ActivateEntitlementRequest;

                    /**
                     * Creates a plain object from an ActivateEntitlementRequest message. Also converts values to other types if specified.
                     * @param message ActivateEntitlementRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ActivateEntitlementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActivateEntitlementRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LookupOfferRequest. */
                interface ILookupOfferRequest {

                    /** LookupOfferRequest entitlement */
                    entitlement?: (string|null);
                }

                /** Represents a LookupOfferRequest. */
                class LookupOfferRequest implements ILookupOfferRequest {

                    /**
                     * Constructs a new LookupOfferRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ILookupOfferRequest);

                    /** LookupOfferRequest entitlement. */
                    public entitlement: string;

                    /**
                     * Creates a new LookupOfferRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LookupOfferRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ILookupOfferRequest): google.cloud.channel.v1.LookupOfferRequest;

                    /**
                     * Encodes the specified LookupOfferRequest message. Does not implicitly {@link google.cloud.channel.v1.LookupOfferRequest.verify|verify} messages.
                     * @param message LookupOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ILookupOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LookupOfferRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.LookupOfferRequest.verify|verify} messages.
                     * @param message LookupOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ILookupOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LookupOfferRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LookupOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.LookupOfferRequest;

                    /**
                     * Decodes a LookupOfferRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LookupOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.LookupOfferRequest;

                    /**
                     * Verifies a LookupOfferRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LookupOfferRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LookupOfferRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.LookupOfferRequest;

                    /**
                     * Creates a plain object from a LookupOfferRequest message. Also converts values to other types if specified.
                     * @param message LookupOfferRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.LookupOfferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LookupOfferRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListProductsRequest. */
                interface IListProductsRequest {

                    /** ListProductsRequest account */
                    account?: (string|null);

                    /** ListProductsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListProductsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListProductsRequest languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a ListProductsRequest. */
                class ListProductsRequest implements IListProductsRequest {

                    /**
                     * Constructs a new ListProductsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListProductsRequest);

                    /** ListProductsRequest account. */
                    public account: string;

                    /** ListProductsRequest pageSize. */
                    public pageSize: number;

                    /** ListProductsRequest pageToken. */
                    public pageToken: string;

                    /** ListProductsRequest languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new ListProductsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProductsRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListProductsRequest): google.cloud.channel.v1.ListProductsRequest;

                    /**
                     * Encodes the specified ListProductsRequest message. Does not implicitly {@link google.cloud.channel.v1.ListProductsRequest.verify|verify} messages.
                     * @param message ListProductsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListProductsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProductsRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListProductsRequest.verify|verify} messages.
                     * @param message ListProductsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListProductsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProductsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProductsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListProductsRequest;

                    /**
                     * Decodes a ListProductsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProductsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListProductsRequest;

                    /**
                     * Verifies a ListProductsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProductsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProductsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListProductsRequest;

                    /**
                     * Creates a plain object from a ListProductsRequest message. Also converts values to other types if specified.
                     * @param message ListProductsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListProductsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProductsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListProductsResponse. */
                interface IListProductsResponse {

                    /** ListProductsResponse products */
                    products?: (google.cloud.channel.v1.IProduct[]|null);

                    /** ListProductsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListProductsResponse. */
                class ListProductsResponse implements IListProductsResponse {

                    /**
                     * Constructs a new ListProductsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListProductsResponse);

                    /** ListProductsResponse products. */
                    public products: google.cloud.channel.v1.IProduct[];

                    /** ListProductsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListProductsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProductsResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListProductsResponse): google.cloud.channel.v1.ListProductsResponse;

                    /**
                     * Encodes the specified ListProductsResponse message. Does not implicitly {@link google.cloud.channel.v1.ListProductsResponse.verify|verify} messages.
                     * @param message ListProductsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListProductsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProductsResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListProductsResponse.verify|verify} messages.
                     * @param message ListProductsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListProductsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProductsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProductsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListProductsResponse;

                    /**
                     * Decodes a ListProductsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProductsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListProductsResponse;

                    /**
                     * Verifies a ListProductsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProductsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProductsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListProductsResponse;

                    /**
                     * Creates a plain object from a ListProductsResponse message. Also converts values to other types if specified.
                     * @param message ListProductsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListProductsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProductsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListSkusRequest. */
                interface IListSkusRequest {

                    /** ListSkusRequest parent */
                    parent?: (string|null);

                    /** ListSkusRequest account */
                    account?: (string|null);

                    /** ListSkusRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSkusRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSkusRequest languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a ListSkusRequest. */
                class ListSkusRequest implements IListSkusRequest {

                    /**
                     * Constructs a new ListSkusRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListSkusRequest);

                    /** ListSkusRequest parent. */
                    public parent: string;

                    /** ListSkusRequest account. */
                    public account: string;

                    /** ListSkusRequest pageSize. */
                    public pageSize: number;

                    /** ListSkusRequest pageToken. */
                    public pageToken: string;

                    /** ListSkusRequest languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new ListSkusRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSkusRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListSkusRequest): google.cloud.channel.v1.ListSkusRequest;

                    /**
                     * Encodes the specified ListSkusRequest message. Does not implicitly {@link google.cloud.channel.v1.ListSkusRequest.verify|verify} messages.
                     * @param message ListSkusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListSkusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSkusRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListSkusRequest.verify|verify} messages.
                     * @param message ListSkusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListSkusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSkusRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSkusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListSkusRequest;

                    /**
                     * Decodes a ListSkusRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSkusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListSkusRequest;

                    /**
                     * Verifies a ListSkusRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSkusRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSkusRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListSkusRequest;

                    /**
                     * Creates a plain object from a ListSkusRequest message. Also converts values to other types if specified.
                     * @param message ListSkusRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListSkusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSkusRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListSkusResponse. */
                interface IListSkusResponse {

                    /** ListSkusResponse skus */
                    skus?: (google.cloud.channel.v1.ISku[]|null);

                    /** ListSkusResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListSkusResponse. */
                class ListSkusResponse implements IListSkusResponse {

                    /**
                     * Constructs a new ListSkusResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListSkusResponse);

                    /** ListSkusResponse skus. */
                    public skus: google.cloud.channel.v1.ISku[];

                    /** ListSkusResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListSkusResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSkusResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListSkusResponse): google.cloud.channel.v1.ListSkusResponse;

                    /**
                     * Encodes the specified ListSkusResponse message. Does not implicitly {@link google.cloud.channel.v1.ListSkusResponse.verify|verify} messages.
                     * @param message ListSkusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListSkusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSkusResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListSkusResponse.verify|verify} messages.
                     * @param message ListSkusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListSkusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSkusResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSkusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListSkusResponse;

                    /**
                     * Decodes a ListSkusResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSkusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListSkusResponse;

                    /**
                     * Verifies a ListSkusResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSkusResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSkusResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListSkusResponse;

                    /**
                     * Creates a plain object from a ListSkusResponse message. Also converts values to other types if specified.
                     * @param message ListSkusResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListSkusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSkusResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListOffersRequest. */
                interface IListOffersRequest {

                    /** ListOffersRequest parent */
                    parent?: (string|null);

                    /** ListOffersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListOffersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListOffersRequest filter */
                    filter?: (string|null);

                    /** ListOffersRequest languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a ListOffersRequest. */
                class ListOffersRequest implements IListOffersRequest {

                    /**
                     * Constructs a new ListOffersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListOffersRequest);

                    /** ListOffersRequest parent. */
                    public parent: string;

                    /** ListOffersRequest pageSize. */
                    public pageSize: number;

                    /** ListOffersRequest pageToken. */
                    public pageToken: string;

                    /** ListOffersRequest filter. */
                    public filter: string;

                    /** ListOffersRequest languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new ListOffersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOffersRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListOffersRequest): google.cloud.channel.v1.ListOffersRequest;

                    /**
                     * Encodes the specified ListOffersRequest message. Does not implicitly {@link google.cloud.channel.v1.ListOffersRequest.verify|verify} messages.
                     * @param message ListOffersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListOffersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOffersRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListOffersRequest.verify|verify} messages.
                     * @param message ListOffersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListOffersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOffersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOffersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListOffersRequest;

                    /**
                     * Decodes a ListOffersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOffersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListOffersRequest;

                    /**
                     * Verifies a ListOffersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOffersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOffersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListOffersRequest;

                    /**
                     * Creates a plain object from a ListOffersRequest message. Also converts values to other types if specified.
                     * @param message ListOffersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListOffersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOffersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListOffersResponse. */
                interface IListOffersResponse {

                    /** ListOffersResponse offers */
                    offers?: (google.cloud.channel.v1.IOffer[]|null);

                    /** ListOffersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListOffersResponse. */
                class ListOffersResponse implements IListOffersResponse {

                    /**
                     * Constructs a new ListOffersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListOffersResponse);

                    /** ListOffersResponse offers. */
                    public offers: google.cloud.channel.v1.IOffer[];

                    /** ListOffersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListOffersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOffersResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListOffersResponse): google.cloud.channel.v1.ListOffersResponse;

                    /**
                     * Encodes the specified ListOffersResponse message. Does not implicitly {@link google.cloud.channel.v1.ListOffersResponse.verify|verify} messages.
                     * @param message ListOffersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListOffersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOffersResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListOffersResponse.verify|verify} messages.
                     * @param message ListOffersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListOffersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOffersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOffersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListOffersResponse;

                    /**
                     * Decodes a ListOffersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOffersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListOffersResponse;

                    /**
                     * Verifies a ListOffersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOffersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOffersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListOffersResponse;

                    /**
                     * Creates a plain object from a ListOffersResponse message. Also converts values to other types if specified.
                     * @param message ListOffersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListOffersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOffersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPurchasableSkusRequest. */
                interface IListPurchasableSkusRequest {

                    /** ListPurchasableSkusRequest createEntitlementPurchase */
                    createEntitlementPurchase?: (google.cloud.channel.v1.ListPurchasableSkusRequest.ICreateEntitlementPurchase|null);

                    /** ListPurchasableSkusRequest changeOfferPurchase */
                    changeOfferPurchase?: (google.cloud.channel.v1.ListPurchasableSkusRequest.IChangeOfferPurchase|null);

                    /** ListPurchasableSkusRequest customer */
                    customer?: (string|null);

                    /** ListPurchasableSkusRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPurchasableSkusRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPurchasableSkusRequest languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a ListPurchasableSkusRequest. */
                class ListPurchasableSkusRequest implements IListPurchasableSkusRequest {

                    /**
                     * Constructs a new ListPurchasableSkusRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListPurchasableSkusRequest);

                    /** ListPurchasableSkusRequest createEntitlementPurchase. */
                    public createEntitlementPurchase?: (google.cloud.channel.v1.ListPurchasableSkusRequest.ICreateEntitlementPurchase|null);

                    /** ListPurchasableSkusRequest changeOfferPurchase. */
                    public changeOfferPurchase?: (google.cloud.channel.v1.ListPurchasableSkusRequest.IChangeOfferPurchase|null);

                    /** ListPurchasableSkusRequest customer. */
                    public customer: string;

                    /** ListPurchasableSkusRequest pageSize. */
                    public pageSize: number;

                    /** ListPurchasableSkusRequest pageToken. */
                    public pageToken: string;

                    /** ListPurchasableSkusRequest languageCode. */
                    public languageCode: string;

                    /** ListPurchasableSkusRequest purchaseOption. */
                    public purchaseOption?: ("createEntitlementPurchase"|"changeOfferPurchase");

                    /**
                     * Creates a new ListPurchasableSkusRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPurchasableSkusRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListPurchasableSkusRequest): google.cloud.channel.v1.ListPurchasableSkusRequest;

                    /**
                     * Encodes the specified ListPurchasableSkusRequest message. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableSkusRequest.verify|verify} messages.
                     * @param message ListPurchasableSkusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListPurchasableSkusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPurchasableSkusRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableSkusRequest.verify|verify} messages.
                     * @param message ListPurchasableSkusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListPurchasableSkusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPurchasableSkusRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPurchasableSkusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListPurchasableSkusRequest;

                    /**
                     * Decodes a ListPurchasableSkusRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPurchasableSkusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListPurchasableSkusRequest;

                    /**
                     * Verifies a ListPurchasableSkusRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPurchasableSkusRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPurchasableSkusRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListPurchasableSkusRequest;

                    /**
                     * Creates a plain object from a ListPurchasableSkusRequest message. Also converts values to other types if specified.
                     * @param message ListPurchasableSkusRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListPurchasableSkusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPurchasableSkusRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ListPurchasableSkusRequest {

                    /** Properties of a CreateEntitlementPurchase. */
                    interface ICreateEntitlementPurchase {

                        /** CreateEntitlementPurchase product */
                        product?: (string|null);
                    }

                    /** Represents a CreateEntitlementPurchase. */
                    class CreateEntitlementPurchase implements ICreateEntitlementPurchase {

                        /**
                         * Constructs a new CreateEntitlementPurchase.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.channel.v1.ListPurchasableSkusRequest.ICreateEntitlementPurchase);

                        /** CreateEntitlementPurchase product. */
                        public product: string;

                        /**
                         * Creates a new CreateEntitlementPurchase instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateEntitlementPurchase instance
                         */
                        public static create(properties?: google.cloud.channel.v1.ListPurchasableSkusRequest.ICreateEntitlementPurchase): google.cloud.channel.v1.ListPurchasableSkusRequest.CreateEntitlementPurchase;

                        /**
                         * Encodes the specified CreateEntitlementPurchase message. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableSkusRequest.CreateEntitlementPurchase.verify|verify} messages.
                         * @param message CreateEntitlementPurchase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.channel.v1.ListPurchasableSkusRequest.ICreateEntitlementPurchase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateEntitlementPurchase message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableSkusRequest.CreateEntitlementPurchase.verify|verify} messages.
                         * @param message CreateEntitlementPurchase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.channel.v1.ListPurchasableSkusRequest.ICreateEntitlementPurchase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateEntitlementPurchase message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateEntitlementPurchase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListPurchasableSkusRequest.CreateEntitlementPurchase;

                        /**
                         * Decodes a CreateEntitlementPurchase message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateEntitlementPurchase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListPurchasableSkusRequest.CreateEntitlementPurchase;

                        /**
                         * Verifies a CreateEntitlementPurchase message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateEntitlementPurchase message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateEntitlementPurchase
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListPurchasableSkusRequest.CreateEntitlementPurchase;

                        /**
                         * Creates a plain object from a CreateEntitlementPurchase message. Also converts values to other types if specified.
                         * @param message CreateEntitlementPurchase
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.channel.v1.ListPurchasableSkusRequest.CreateEntitlementPurchase, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateEntitlementPurchase to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ChangeOfferPurchase. */
                    interface IChangeOfferPurchase {

                        /** ChangeOfferPurchase entitlement */
                        entitlement?: (string|null);

                        /** ChangeOfferPurchase changeType */
                        changeType?: (google.cloud.channel.v1.ListPurchasableSkusRequest.ChangeOfferPurchase.ChangeType|keyof typeof google.cloud.channel.v1.ListPurchasableSkusRequest.ChangeOfferPurchase.ChangeType|null);
                    }

                    /** Represents a ChangeOfferPurchase. */
                    class ChangeOfferPurchase implements IChangeOfferPurchase {

                        /**
                         * Constructs a new ChangeOfferPurchase.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.channel.v1.ListPurchasableSkusRequest.IChangeOfferPurchase);

                        /** ChangeOfferPurchase entitlement. */
                        public entitlement: string;

                        /** ChangeOfferPurchase changeType. */
                        public changeType: (google.cloud.channel.v1.ListPurchasableSkusRequest.ChangeOfferPurchase.ChangeType|keyof typeof google.cloud.channel.v1.ListPurchasableSkusRequest.ChangeOfferPurchase.ChangeType);

                        /**
                         * Creates a new ChangeOfferPurchase instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ChangeOfferPurchase instance
                         */
                        public static create(properties?: google.cloud.channel.v1.ListPurchasableSkusRequest.IChangeOfferPurchase): google.cloud.channel.v1.ListPurchasableSkusRequest.ChangeOfferPurchase;

                        /**
                         * Encodes the specified ChangeOfferPurchase message. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableSkusRequest.ChangeOfferPurchase.verify|verify} messages.
                         * @param message ChangeOfferPurchase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.channel.v1.ListPurchasableSkusRequest.IChangeOfferPurchase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ChangeOfferPurchase message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableSkusRequest.ChangeOfferPurchase.verify|verify} messages.
                         * @param message ChangeOfferPurchase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.channel.v1.ListPurchasableSkusRequest.IChangeOfferPurchase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ChangeOfferPurchase message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ChangeOfferPurchase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListPurchasableSkusRequest.ChangeOfferPurchase;

                        /**
                         * Decodes a ChangeOfferPurchase message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ChangeOfferPurchase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListPurchasableSkusRequest.ChangeOfferPurchase;

                        /**
                         * Verifies a ChangeOfferPurchase message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ChangeOfferPurchase message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ChangeOfferPurchase
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListPurchasableSkusRequest.ChangeOfferPurchase;

                        /**
                         * Creates a plain object from a ChangeOfferPurchase message. Also converts values to other types if specified.
                         * @param message ChangeOfferPurchase
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.channel.v1.ListPurchasableSkusRequest.ChangeOfferPurchase, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ChangeOfferPurchase to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace ChangeOfferPurchase {

                        /** ChangeType enum. */
                        enum ChangeType {
                            CHANGE_TYPE_UNSPECIFIED = 0,
                            UPGRADE = 1,
                            DOWNGRADE = 2
                        }
                    }
                }

                /** Properties of a ListPurchasableSkusResponse. */
                interface IListPurchasableSkusResponse {

                    /** ListPurchasableSkusResponse purchasableSkus */
                    purchasableSkus?: (google.cloud.channel.v1.IPurchasableSku[]|null);

                    /** ListPurchasableSkusResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPurchasableSkusResponse. */
                class ListPurchasableSkusResponse implements IListPurchasableSkusResponse {

                    /**
                     * Constructs a new ListPurchasableSkusResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListPurchasableSkusResponse);

                    /** ListPurchasableSkusResponse purchasableSkus. */
                    public purchasableSkus: google.cloud.channel.v1.IPurchasableSku[];

                    /** ListPurchasableSkusResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPurchasableSkusResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPurchasableSkusResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListPurchasableSkusResponse): google.cloud.channel.v1.ListPurchasableSkusResponse;

                    /**
                     * Encodes the specified ListPurchasableSkusResponse message. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableSkusResponse.verify|verify} messages.
                     * @param message ListPurchasableSkusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListPurchasableSkusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPurchasableSkusResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableSkusResponse.verify|verify} messages.
                     * @param message ListPurchasableSkusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListPurchasableSkusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPurchasableSkusResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPurchasableSkusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListPurchasableSkusResponse;

                    /**
                     * Decodes a ListPurchasableSkusResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPurchasableSkusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListPurchasableSkusResponse;

                    /**
                     * Verifies a ListPurchasableSkusResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPurchasableSkusResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPurchasableSkusResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListPurchasableSkusResponse;

                    /**
                     * Creates a plain object from a ListPurchasableSkusResponse message. Also converts values to other types if specified.
                     * @param message ListPurchasableSkusResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListPurchasableSkusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPurchasableSkusResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PurchasableSku. */
                interface IPurchasableSku {

                    /** PurchasableSku sku */
                    sku?: (google.cloud.channel.v1.ISku|null);
                }

                /** Represents a PurchasableSku. */
                class PurchasableSku implements IPurchasableSku {

                    /**
                     * Constructs a new PurchasableSku.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IPurchasableSku);

                    /** PurchasableSku sku. */
                    public sku?: (google.cloud.channel.v1.ISku|null);

                    /**
                     * Creates a new PurchasableSku instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PurchasableSku instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IPurchasableSku): google.cloud.channel.v1.PurchasableSku;

                    /**
                     * Encodes the specified PurchasableSku message. Does not implicitly {@link google.cloud.channel.v1.PurchasableSku.verify|verify} messages.
                     * @param message PurchasableSku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IPurchasableSku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PurchasableSku message, length delimited. Does not implicitly {@link google.cloud.channel.v1.PurchasableSku.verify|verify} messages.
                     * @param message PurchasableSku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IPurchasableSku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PurchasableSku message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PurchasableSku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.PurchasableSku;

                    /**
                     * Decodes a PurchasableSku message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PurchasableSku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.PurchasableSku;

                    /**
                     * Verifies a PurchasableSku message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PurchasableSku message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PurchasableSku
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.PurchasableSku;

                    /**
                     * Creates a plain object from a PurchasableSku message. Also converts values to other types if specified.
                     * @param message PurchasableSku
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.PurchasableSku, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PurchasableSku to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPurchasableOffersRequest. */
                interface IListPurchasableOffersRequest {

                    /** ListPurchasableOffersRequest createEntitlementPurchase */
                    createEntitlementPurchase?: (google.cloud.channel.v1.ListPurchasableOffersRequest.ICreateEntitlementPurchase|null);

                    /** ListPurchasableOffersRequest changeOfferPurchase */
                    changeOfferPurchase?: (google.cloud.channel.v1.ListPurchasableOffersRequest.IChangeOfferPurchase|null);

                    /** ListPurchasableOffersRequest customer */
                    customer?: (string|null);

                    /** ListPurchasableOffersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPurchasableOffersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPurchasableOffersRequest languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a ListPurchasableOffersRequest. */
                class ListPurchasableOffersRequest implements IListPurchasableOffersRequest {

                    /**
                     * Constructs a new ListPurchasableOffersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListPurchasableOffersRequest);

                    /** ListPurchasableOffersRequest createEntitlementPurchase. */
                    public createEntitlementPurchase?: (google.cloud.channel.v1.ListPurchasableOffersRequest.ICreateEntitlementPurchase|null);

                    /** ListPurchasableOffersRequest changeOfferPurchase. */
                    public changeOfferPurchase?: (google.cloud.channel.v1.ListPurchasableOffersRequest.IChangeOfferPurchase|null);

                    /** ListPurchasableOffersRequest customer. */
                    public customer: string;

                    /** ListPurchasableOffersRequest pageSize. */
                    public pageSize: number;

                    /** ListPurchasableOffersRequest pageToken. */
                    public pageToken: string;

                    /** ListPurchasableOffersRequest languageCode. */
                    public languageCode: string;

                    /** ListPurchasableOffersRequest purchaseOption. */
                    public purchaseOption?: ("createEntitlementPurchase"|"changeOfferPurchase");

                    /**
                     * Creates a new ListPurchasableOffersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPurchasableOffersRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListPurchasableOffersRequest): google.cloud.channel.v1.ListPurchasableOffersRequest;

                    /**
                     * Encodes the specified ListPurchasableOffersRequest message. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableOffersRequest.verify|verify} messages.
                     * @param message ListPurchasableOffersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListPurchasableOffersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPurchasableOffersRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableOffersRequest.verify|verify} messages.
                     * @param message ListPurchasableOffersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListPurchasableOffersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPurchasableOffersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPurchasableOffersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListPurchasableOffersRequest;

                    /**
                     * Decodes a ListPurchasableOffersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPurchasableOffersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListPurchasableOffersRequest;

                    /**
                     * Verifies a ListPurchasableOffersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPurchasableOffersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPurchasableOffersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListPurchasableOffersRequest;

                    /**
                     * Creates a plain object from a ListPurchasableOffersRequest message. Also converts values to other types if specified.
                     * @param message ListPurchasableOffersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListPurchasableOffersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPurchasableOffersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ListPurchasableOffersRequest {

                    /** Properties of a CreateEntitlementPurchase. */
                    interface ICreateEntitlementPurchase {

                        /** CreateEntitlementPurchase sku */
                        sku?: (string|null);
                    }

                    /** Represents a CreateEntitlementPurchase. */
                    class CreateEntitlementPurchase implements ICreateEntitlementPurchase {

                        /**
                         * Constructs a new CreateEntitlementPurchase.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.channel.v1.ListPurchasableOffersRequest.ICreateEntitlementPurchase);

                        /** CreateEntitlementPurchase sku. */
                        public sku: string;

                        /**
                         * Creates a new CreateEntitlementPurchase instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateEntitlementPurchase instance
                         */
                        public static create(properties?: google.cloud.channel.v1.ListPurchasableOffersRequest.ICreateEntitlementPurchase): google.cloud.channel.v1.ListPurchasableOffersRequest.CreateEntitlementPurchase;

                        /**
                         * Encodes the specified CreateEntitlementPurchase message. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableOffersRequest.CreateEntitlementPurchase.verify|verify} messages.
                         * @param message CreateEntitlementPurchase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.channel.v1.ListPurchasableOffersRequest.ICreateEntitlementPurchase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateEntitlementPurchase message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableOffersRequest.CreateEntitlementPurchase.verify|verify} messages.
                         * @param message CreateEntitlementPurchase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.channel.v1.ListPurchasableOffersRequest.ICreateEntitlementPurchase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateEntitlementPurchase message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateEntitlementPurchase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListPurchasableOffersRequest.CreateEntitlementPurchase;

                        /**
                         * Decodes a CreateEntitlementPurchase message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateEntitlementPurchase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListPurchasableOffersRequest.CreateEntitlementPurchase;

                        /**
                         * Verifies a CreateEntitlementPurchase message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateEntitlementPurchase message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateEntitlementPurchase
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListPurchasableOffersRequest.CreateEntitlementPurchase;

                        /**
                         * Creates a plain object from a CreateEntitlementPurchase message. Also converts values to other types if specified.
                         * @param message CreateEntitlementPurchase
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.channel.v1.ListPurchasableOffersRequest.CreateEntitlementPurchase, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateEntitlementPurchase to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ChangeOfferPurchase. */
                    interface IChangeOfferPurchase {

                        /** ChangeOfferPurchase entitlement */
                        entitlement?: (string|null);

                        /** ChangeOfferPurchase newSku */
                        newSku?: (string|null);
                    }

                    /** Represents a ChangeOfferPurchase. */
                    class ChangeOfferPurchase implements IChangeOfferPurchase {

                        /**
                         * Constructs a new ChangeOfferPurchase.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.channel.v1.ListPurchasableOffersRequest.IChangeOfferPurchase);

                        /** ChangeOfferPurchase entitlement. */
                        public entitlement: string;

                        /** ChangeOfferPurchase newSku. */
                        public newSku: string;

                        /**
                         * Creates a new ChangeOfferPurchase instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ChangeOfferPurchase instance
                         */
                        public static create(properties?: google.cloud.channel.v1.ListPurchasableOffersRequest.IChangeOfferPurchase): google.cloud.channel.v1.ListPurchasableOffersRequest.ChangeOfferPurchase;

                        /**
                         * Encodes the specified ChangeOfferPurchase message. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableOffersRequest.ChangeOfferPurchase.verify|verify} messages.
                         * @param message ChangeOfferPurchase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.channel.v1.ListPurchasableOffersRequest.IChangeOfferPurchase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ChangeOfferPurchase message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableOffersRequest.ChangeOfferPurchase.verify|verify} messages.
                         * @param message ChangeOfferPurchase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.channel.v1.ListPurchasableOffersRequest.IChangeOfferPurchase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ChangeOfferPurchase message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ChangeOfferPurchase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListPurchasableOffersRequest.ChangeOfferPurchase;

                        /**
                         * Decodes a ChangeOfferPurchase message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ChangeOfferPurchase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListPurchasableOffersRequest.ChangeOfferPurchase;

                        /**
                         * Verifies a ChangeOfferPurchase message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ChangeOfferPurchase message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ChangeOfferPurchase
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListPurchasableOffersRequest.ChangeOfferPurchase;

                        /**
                         * Creates a plain object from a ChangeOfferPurchase message. Also converts values to other types if specified.
                         * @param message ChangeOfferPurchase
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.channel.v1.ListPurchasableOffersRequest.ChangeOfferPurchase, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ChangeOfferPurchase to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a ListPurchasableOffersResponse. */
                interface IListPurchasableOffersResponse {

                    /** ListPurchasableOffersResponse purchasableOffers */
                    purchasableOffers?: (google.cloud.channel.v1.IPurchasableOffer[]|null);

                    /** ListPurchasableOffersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPurchasableOffersResponse. */
                class ListPurchasableOffersResponse implements IListPurchasableOffersResponse {

                    /**
                     * Constructs a new ListPurchasableOffersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListPurchasableOffersResponse);

                    /** ListPurchasableOffersResponse purchasableOffers. */
                    public purchasableOffers: google.cloud.channel.v1.IPurchasableOffer[];

                    /** ListPurchasableOffersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPurchasableOffersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPurchasableOffersResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListPurchasableOffersResponse): google.cloud.channel.v1.ListPurchasableOffersResponse;

                    /**
                     * Encodes the specified ListPurchasableOffersResponse message. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableOffersResponse.verify|verify} messages.
                     * @param message ListPurchasableOffersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListPurchasableOffersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPurchasableOffersResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListPurchasableOffersResponse.verify|verify} messages.
                     * @param message ListPurchasableOffersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListPurchasableOffersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPurchasableOffersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPurchasableOffersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListPurchasableOffersResponse;

                    /**
                     * Decodes a ListPurchasableOffersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPurchasableOffersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListPurchasableOffersResponse;

                    /**
                     * Verifies a ListPurchasableOffersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPurchasableOffersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPurchasableOffersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListPurchasableOffersResponse;

                    /**
                     * Creates a plain object from a ListPurchasableOffersResponse message. Also converts values to other types if specified.
                     * @param message ListPurchasableOffersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListPurchasableOffersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPurchasableOffersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PurchasableOffer. */
                interface IPurchasableOffer {

                    /** PurchasableOffer offer */
                    offer?: (google.cloud.channel.v1.IOffer|null);
                }

                /** Represents a PurchasableOffer. */
                class PurchasableOffer implements IPurchasableOffer {

                    /**
                     * Constructs a new PurchasableOffer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IPurchasableOffer);

                    /** PurchasableOffer offer. */
                    public offer?: (google.cloud.channel.v1.IOffer|null);

                    /**
                     * Creates a new PurchasableOffer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PurchasableOffer instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IPurchasableOffer): google.cloud.channel.v1.PurchasableOffer;

                    /**
                     * Encodes the specified PurchasableOffer message. Does not implicitly {@link google.cloud.channel.v1.PurchasableOffer.verify|verify} messages.
                     * @param message PurchasableOffer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IPurchasableOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PurchasableOffer message, length delimited. Does not implicitly {@link google.cloud.channel.v1.PurchasableOffer.verify|verify} messages.
                     * @param message PurchasableOffer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IPurchasableOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PurchasableOffer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PurchasableOffer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.PurchasableOffer;

                    /**
                     * Decodes a PurchasableOffer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PurchasableOffer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.PurchasableOffer;

                    /**
                     * Verifies a PurchasableOffer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PurchasableOffer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PurchasableOffer
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.PurchasableOffer;

                    /**
                     * Creates a plain object from a PurchasableOffer message. Also converts values to other types if specified.
                     * @param message PurchasableOffer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.PurchasableOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PurchasableOffer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RegisterSubscriberRequest. */
                interface IRegisterSubscriberRequest {

                    /** RegisterSubscriberRequest account */
                    account?: (string|null);

                    /** RegisterSubscriberRequest serviceAccount */
                    serviceAccount?: (string|null);
                }

                /** Represents a RegisterSubscriberRequest. */
                class RegisterSubscriberRequest implements IRegisterSubscriberRequest {

                    /**
                     * Constructs a new RegisterSubscriberRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IRegisterSubscriberRequest);

                    /** RegisterSubscriberRequest account. */
                    public account: string;

                    /** RegisterSubscriberRequest serviceAccount. */
                    public serviceAccount: string;

                    /**
                     * Creates a new RegisterSubscriberRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RegisterSubscriberRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IRegisterSubscriberRequest): google.cloud.channel.v1.RegisterSubscriberRequest;

                    /**
                     * Encodes the specified RegisterSubscriberRequest message. Does not implicitly {@link google.cloud.channel.v1.RegisterSubscriberRequest.verify|verify} messages.
                     * @param message RegisterSubscriberRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IRegisterSubscriberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RegisterSubscriberRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.RegisterSubscriberRequest.verify|verify} messages.
                     * @param message RegisterSubscriberRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IRegisterSubscriberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RegisterSubscriberRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RegisterSubscriberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.RegisterSubscriberRequest;

                    /**
                     * Decodes a RegisterSubscriberRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RegisterSubscriberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.RegisterSubscriberRequest;

                    /**
                     * Verifies a RegisterSubscriberRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RegisterSubscriberRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RegisterSubscriberRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.RegisterSubscriberRequest;

                    /**
                     * Creates a plain object from a RegisterSubscriberRequest message. Also converts values to other types if specified.
                     * @param message RegisterSubscriberRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.RegisterSubscriberRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RegisterSubscriberRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RegisterSubscriberResponse. */
                interface IRegisterSubscriberResponse {

                    /** RegisterSubscriberResponse topic */
                    topic?: (string|null);
                }

                /** Represents a RegisterSubscriberResponse. */
                class RegisterSubscriberResponse implements IRegisterSubscriberResponse {

                    /**
                     * Constructs a new RegisterSubscriberResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IRegisterSubscriberResponse);

                    /** RegisterSubscriberResponse topic. */
                    public topic: string;

                    /**
                     * Creates a new RegisterSubscriberResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RegisterSubscriberResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IRegisterSubscriberResponse): google.cloud.channel.v1.RegisterSubscriberResponse;

                    /**
                     * Encodes the specified RegisterSubscriberResponse message. Does not implicitly {@link google.cloud.channel.v1.RegisterSubscriberResponse.verify|verify} messages.
                     * @param message RegisterSubscriberResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IRegisterSubscriberResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RegisterSubscriberResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.RegisterSubscriberResponse.verify|verify} messages.
                     * @param message RegisterSubscriberResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IRegisterSubscriberResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RegisterSubscriberResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RegisterSubscriberResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.RegisterSubscriberResponse;

                    /**
                     * Decodes a RegisterSubscriberResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RegisterSubscriberResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.RegisterSubscriberResponse;

                    /**
                     * Verifies a RegisterSubscriberResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RegisterSubscriberResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RegisterSubscriberResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.RegisterSubscriberResponse;

                    /**
                     * Creates a plain object from a RegisterSubscriberResponse message. Also converts values to other types if specified.
                     * @param message RegisterSubscriberResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.RegisterSubscriberResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RegisterSubscriberResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UnregisterSubscriberRequest. */
                interface IUnregisterSubscriberRequest {

                    /** UnregisterSubscriberRequest account */
                    account?: (string|null);

                    /** UnregisterSubscriberRequest serviceAccount */
                    serviceAccount?: (string|null);
                }

                /** Represents an UnregisterSubscriberRequest. */
                class UnregisterSubscriberRequest implements IUnregisterSubscriberRequest {

                    /**
                     * Constructs a new UnregisterSubscriberRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IUnregisterSubscriberRequest);

                    /** UnregisterSubscriberRequest account. */
                    public account: string;

                    /** UnregisterSubscriberRequest serviceAccount. */
                    public serviceAccount: string;

                    /**
                     * Creates a new UnregisterSubscriberRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UnregisterSubscriberRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IUnregisterSubscriberRequest): google.cloud.channel.v1.UnregisterSubscriberRequest;

                    /**
                     * Encodes the specified UnregisterSubscriberRequest message. Does not implicitly {@link google.cloud.channel.v1.UnregisterSubscriberRequest.verify|verify} messages.
                     * @param message UnregisterSubscriberRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IUnregisterSubscriberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UnregisterSubscriberRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.UnregisterSubscriberRequest.verify|verify} messages.
                     * @param message UnregisterSubscriberRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IUnregisterSubscriberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UnregisterSubscriberRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UnregisterSubscriberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.UnregisterSubscriberRequest;

                    /**
                     * Decodes an UnregisterSubscriberRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UnregisterSubscriberRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.UnregisterSubscriberRequest;

                    /**
                     * Verifies an UnregisterSubscriberRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UnregisterSubscriberRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UnregisterSubscriberRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.UnregisterSubscriberRequest;

                    /**
                     * Creates a plain object from an UnregisterSubscriberRequest message. Also converts values to other types if specified.
                     * @param message UnregisterSubscriberRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.UnregisterSubscriberRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UnregisterSubscriberRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UnregisterSubscriberResponse. */
                interface IUnregisterSubscriberResponse {

                    /** UnregisterSubscriberResponse topic */
                    topic?: (string|null);
                }

                /** Represents an UnregisterSubscriberResponse. */
                class UnregisterSubscriberResponse implements IUnregisterSubscriberResponse {

                    /**
                     * Constructs a new UnregisterSubscriberResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IUnregisterSubscriberResponse);

                    /** UnregisterSubscriberResponse topic. */
                    public topic: string;

                    /**
                     * Creates a new UnregisterSubscriberResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UnregisterSubscriberResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IUnregisterSubscriberResponse): google.cloud.channel.v1.UnregisterSubscriberResponse;

                    /**
                     * Encodes the specified UnregisterSubscriberResponse message. Does not implicitly {@link google.cloud.channel.v1.UnregisterSubscriberResponse.verify|verify} messages.
                     * @param message UnregisterSubscriberResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IUnregisterSubscriberResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UnregisterSubscriberResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.UnregisterSubscriberResponse.verify|verify} messages.
                     * @param message UnregisterSubscriberResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IUnregisterSubscriberResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UnregisterSubscriberResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UnregisterSubscriberResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.UnregisterSubscriberResponse;

                    /**
                     * Decodes an UnregisterSubscriberResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UnregisterSubscriberResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.UnregisterSubscriberResponse;

                    /**
                     * Verifies an UnregisterSubscriberResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UnregisterSubscriberResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UnregisterSubscriberResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.UnregisterSubscriberResponse;

                    /**
                     * Creates a plain object from an UnregisterSubscriberResponse message. Also converts values to other types if specified.
                     * @param message UnregisterSubscriberResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.UnregisterSubscriberResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UnregisterSubscriberResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListSubscribersRequest. */
                interface IListSubscribersRequest {

                    /** ListSubscribersRequest account */
                    account?: (string|null);

                    /** ListSubscribersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSubscribersRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListSubscribersRequest. */
                class ListSubscribersRequest implements IListSubscribersRequest {

                    /**
                     * Constructs a new ListSubscribersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListSubscribersRequest);

                    /** ListSubscribersRequest account. */
                    public account: string;

                    /** ListSubscribersRequest pageSize. */
                    public pageSize: number;

                    /** ListSubscribersRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListSubscribersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSubscribersRequest instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListSubscribersRequest): google.cloud.channel.v1.ListSubscribersRequest;

                    /**
                     * Encodes the specified ListSubscribersRequest message. Does not implicitly {@link google.cloud.channel.v1.ListSubscribersRequest.verify|verify} messages.
                     * @param message ListSubscribersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListSubscribersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSubscribersRequest message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListSubscribersRequest.verify|verify} messages.
                     * @param message ListSubscribersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListSubscribersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSubscribersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSubscribersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListSubscribersRequest;

                    /**
                     * Decodes a ListSubscribersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSubscribersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListSubscribersRequest;

                    /**
                     * Verifies a ListSubscribersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSubscribersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSubscribersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListSubscribersRequest;

                    /**
                     * Creates a plain object from a ListSubscribersRequest message. Also converts values to other types if specified.
                     * @param message ListSubscribersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListSubscribersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSubscribersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListSubscribersResponse. */
                interface IListSubscribersResponse {

                    /** ListSubscribersResponse topic */
                    topic?: (string|null);

                    /** ListSubscribersResponse serviceAccounts */
                    serviceAccounts?: (string[]|null);

                    /** ListSubscribersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListSubscribersResponse. */
                class ListSubscribersResponse implements IListSubscribersResponse {

                    /**
                     * Constructs a new ListSubscribersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IListSubscribersResponse);

                    /** ListSubscribersResponse topic. */
                    public topic: string;

                    /** ListSubscribersResponse serviceAccounts. */
                    public serviceAccounts: string[];

                    /** ListSubscribersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListSubscribersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSubscribersResponse instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IListSubscribersResponse): google.cloud.channel.v1.ListSubscribersResponse;

                    /**
                     * Encodes the specified ListSubscribersResponse message. Does not implicitly {@link google.cloud.channel.v1.ListSubscribersResponse.verify|verify} messages.
                     * @param message ListSubscribersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IListSubscribersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSubscribersResponse message, length delimited. Does not implicitly {@link google.cloud.channel.v1.ListSubscribersResponse.verify|verify} messages.
                     * @param message ListSubscribersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IListSubscribersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSubscribersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSubscribersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.ListSubscribersResponse;

                    /**
                     * Decodes a ListSubscribersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSubscribersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.ListSubscribersResponse;

                    /**
                     * Verifies a ListSubscribersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSubscribersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSubscribersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.ListSubscribersResponse;

                    /**
                     * Creates a plain object from a ListSubscribersResponse message. Also converts values to other types if specified.
                     * @param message ListSubscribersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.ListSubscribersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSubscribersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CustomerEvent. */
                interface ICustomerEvent {

                    /** CustomerEvent customer */
                    customer?: (string|null);

                    /** CustomerEvent eventType */
                    eventType?: (google.cloud.channel.v1.CustomerEvent.Type|keyof typeof google.cloud.channel.v1.CustomerEvent.Type|null);
                }

                /** Represents a CustomerEvent. */
                class CustomerEvent implements ICustomerEvent {

                    /**
                     * Constructs a new CustomerEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ICustomerEvent);

                    /** CustomerEvent customer. */
                    public customer: string;

                    /** CustomerEvent eventType. */
                    public eventType: (google.cloud.channel.v1.CustomerEvent.Type|keyof typeof google.cloud.channel.v1.CustomerEvent.Type);

                    /**
                     * Creates a new CustomerEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomerEvent instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ICustomerEvent): google.cloud.channel.v1.CustomerEvent;

                    /**
                     * Encodes the specified CustomerEvent message. Does not implicitly {@link google.cloud.channel.v1.CustomerEvent.verify|verify} messages.
                     * @param message CustomerEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ICustomerEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomerEvent message, length delimited. Does not implicitly {@link google.cloud.channel.v1.CustomerEvent.verify|verify} messages.
                     * @param message CustomerEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ICustomerEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomerEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomerEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.CustomerEvent;

                    /**
                     * Decodes a CustomerEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomerEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.CustomerEvent;

                    /**
                     * Verifies a CustomerEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomerEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomerEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.CustomerEvent;

                    /**
                     * Creates a plain object from a CustomerEvent message. Also converts values to other types if specified.
                     * @param message CustomerEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.CustomerEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomerEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CustomerEvent {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        PRIMARY_DOMAIN_CHANGED = 1,
                        PRIMARY_DOMAIN_VERIFIED = 2
                    }
                }

                /** Properties of an EntitlementEvent. */
                interface IEntitlementEvent {

                    /** EntitlementEvent entitlement */
                    entitlement?: (string|null);

                    /** EntitlementEvent eventType */
                    eventType?: (google.cloud.channel.v1.EntitlementEvent.Type|keyof typeof google.cloud.channel.v1.EntitlementEvent.Type|null);
                }

                /** Represents an EntitlementEvent. */
                class EntitlementEvent implements IEntitlementEvent {

                    /**
                     * Constructs a new EntitlementEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.IEntitlementEvent);

                    /** EntitlementEvent entitlement. */
                    public entitlement: string;

                    /** EntitlementEvent eventType. */
                    public eventType: (google.cloud.channel.v1.EntitlementEvent.Type|keyof typeof google.cloud.channel.v1.EntitlementEvent.Type);

                    /**
                     * Creates a new EntitlementEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EntitlementEvent instance
                     */
                    public static create(properties?: google.cloud.channel.v1.IEntitlementEvent): google.cloud.channel.v1.EntitlementEvent;

                    /**
                     * Encodes the specified EntitlementEvent message. Does not implicitly {@link google.cloud.channel.v1.EntitlementEvent.verify|verify} messages.
                     * @param message EntitlementEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.IEntitlementEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EntitlementEvent message, length delimited. Does not implicitly {@link google.cloud.channel.v1.EntitlementEvent.verify|verify} messages.
                     * @param message EntitlementEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.IEntitlementEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EntitlementEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EntitlementEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.EntitlementEvent;

                    /**
                     * Decodes an EntitlementEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EntitlementEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.EntitlementEvent;

                    /**
                     * Verifies an EntitlementEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EntitlementEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EntitlementEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.EntitlementEvent;

                    /**
                     * Creates a plain object from an EntitlementEvent message. Also converts values to other types if specified.
                     * @param message EntitlementEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.EntitlementEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EntitlementEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace EntitlementEvent {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        CREATED = 1,
                        PRICE_PLAN_SWITCHED = 3,
                        COMMITMENT_CHANGED = 4,
                        RENEWED = 5,
                        SUSPENDED = 6,
                        ACTIVATED = 7,
                        CANCELLED = 8,
                        SKU_CHANGED = 9,
                        RENEWAL_SETTING_CHANGED = 10,
                        PAID_SERVICE_STARTED = 11,
                        LICENSE_ASSIGNMENT_CHANGED = 12,
                        LICENSE_CAP_CHANGED = 13
                    }
                }

                /** Properties of a SubscriberEvent. */
                interface ISubscriberEvent {

                    /** SubscriberEvent customerEvent */
                    customerEvent?: (google.cloud.channel.v1.ICustomerEvent|null);

                    /** SubscriberEvent entitlementEvent */
                    entitlementEvent?: (google.cloud.channel.v1.IEntitlementEvent|null);
                }

                /** Represents a SubscriberEvent. */
                class SubscriberEvent implements ISubscriberEvent {

                    /**
                     * Constructs a new SubscriberEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.channel.v1.ISubscriberEvent);

                    /** SubscriberEvent customerEvent. */
                    public customerEvent?: (google.cloud.channel.v1.ICustomerEvent|null);

                    /** SubscriberEvent entitlementEvent. */
                    public entitlementEvent?: (google.cloud.channel.v1.IEntitlementEvent|null);

                    /** SubscriberEvent event. */
                    public event?: ("customerEvent"|"entitlementEvent");

                    /**
                     * Creates a new SubscriberEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubscriberEvent instance
                     */
                    public static create(properties?: google.cloud.channel.v1.ISubscriberEvent): google.cloud.channel.v1.SubscriberEvent;

                    /**
                     * Encodes the specified SubscriberEvent message. Does not implicitly {@link google.cloud.channel.v1.SubscriberEvent.verify|verify} messages.
                     * @param message SubscriberEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.channel.v1.ISubscriberEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubscriberEvent message, length delimited. Does not implicitly {@link google.cloud.channel.v1.SubscriberEvent.verify|verify} messages.
                     * @param message SubscriberEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.channel.v1.ISubscriberEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubscriberEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubscriberEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.channel.v1.SubscriberEvent;

                    /**
                     * Decodes a SubscriberEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubscriberEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.channel.v1.SubscriberEvent;

                    /**
                     * Verifies a SubscriberEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubscriberEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubscriberEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.channel.v1.SubscriberEvent;

                    /**
                     * Creates a plain object from a SubscriberEvent message. Also converts values to other types if specified.
                     * @param message SubscriberEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.channel.v1.SubscriberEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubscriberEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
            UNORDERED_LIST = 6
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
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|string|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: (Uint8Array|string);

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
    }

    /** Namespace type. */
    namespace type {

        /** Properties of a PostalAddress. */
        interface IPostalAddress {

            /** PostalAddress revision */
            revision?: (number|null);

            /** PostalAddress regionCode */
            regionCode?: (string|null);

            /** PostalAddress languageCode */
            languageCode?: (string|null);

            /** PostalAddress postalCode */
            postalCode?: (string|null);

            /** PostalAddress sortingCode */
            sortingCode?: (string|null);

            /** PostalAddress administrativeArea */
            administrativeArea?: (string|null);

            /** PostalAddress locality */
            locality?: (string|null);

            /** PostalAddress sublocality */
            sublocality?: (string|null);

            /** PostalAddress addressLines */
            addressLines?: (string[]|null);

            /** PostalAddress recipients */
            recipients?: (string[]|null);

            /** PostalAddress organization */
            organization?: (string|null);
        }

        /** Represents a PostalAddress. */
        class PostalAddress implements IPostalAddress {

            /**
             * Constructs a new PostalAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IPostalAddress);

            /** PostalAddress revision. */
            public revision: number;

            /** PostalAddress regionCode. */
            public regionCode: string;

            /** PostalAddress languageCode. */
            public languageCode: string;

            /** PostalAddress postalCode. */
            public postalCode: string;

            /** PostalAddress sortingCode. */
            public sortingCode: string;

            /** PostalAddress administrativeArea. */
            public administrativeArea: string;

            /** PostalAddress locality. */
            public locality: string;

            /** PostalAddress sublocality. */
            public sublocality: string;

            /** PostalAddress addressLines. */
            public addressLines: string[];

            /** PostalAddress recipients. */
            public recipients: string[];

            /** PostalAddress organization. */
            public organization: string;

            /**
             * Creates a new PostalAddress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PostalAddress instance
             */
            public static create(properties?: google.type.IPostalAddress): google.type.PostalAddress;

            /**
             * Encodes the specified PostalAddress message. Does not implicitly {@link google.type.PostalAddress.verify|verify} messages.
             * @param message PostalAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IPostalAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PostalAddress message, length delimited. Does not implicitly {@link google.type.PostalAddress.verify|verify} messages.
             * @param message PostalAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IPostalAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PostalAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PostalAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.PostalAddress;

            /**
             * Decodes a PostalAddress message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PostalAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.PostalAddress;

            /**
             * Verifies a PostalAddress message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PostalAddress message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PostalAddress
             */
            public static fromObject(object: { [k: string]: any }): google.type.PostalAddress;

            /**
             * Creates a plain object from a PostalAddress message. Also converts values to other types if specified.
             * @param message PostalAddress
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.PostalAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PostalAddress to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Money. */
        interface IMoney {

            /** Money currencyCode */
            currencyCode?: (string|null);

            /** Money units */
            units?: (number|Long|string|null);

            /** Money nanos */
            nanos?: (number|null);
        }

        /** Represents a Money. */
        class Money implements IMoney {

            /**
             * Constructs a new Money.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IMoney);

            /** Money currencyCode. */
            public currencyCode: string;

            /** Money units. */
            public units: (number|Long|string);

            /** Money nanos. */
            public nanos: number;

            /**
             * Creates a new Money instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Money instance
             */
            public static create(properties?: google.type.IMoney): google.type.Money;

            /**
             * Encodes the specified Money message. Does not implicitly {@link google.type.Money.verify|verify} messages.
             * @param message Money message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Money message, length delimited. Does not implicitly {@link google.type.Money.verify|verify} messages.
             * @param message Money message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Money message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Money
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Money;

            /**
             * Decodes a Money message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Money
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Money;

            /**
             * Verifies a Money message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Money message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Money
             */
            public static fromObject(object: { [k: string]: any }): google.type.Money;

            /**
             * Creates a plain object from a Money message. Also converts values to other types if specified.
             * @param message Money
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Money, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Money to JSON.
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
