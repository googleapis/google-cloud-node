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

        /** Namespace edgenetwork. */
        namespace edgenetwork {

            /** Namespace v1. */
            namespace v1 {

                /** ResourceState enum. */
                enum ResourceState {
                    STATE_UNKNOWN = 0,
                    STATE_PENDING = 1,
                    STATE_PROVISIONING = 2,
                    STATE_RUNNING = 3,
                    STATE_SUSPENDED = 4,
                    STATE_DELETING = 5
                }

                /** Properties of a Zone. */
                interface IZone {

                    /** Zone name */
                    name?: (string|null);

                    /** Zone createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Zone updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Zone labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Zone layoutName */
                    layoutName?: (string|null);
                }

                /** Represents a Zone. */
                class Zone implements IZone {

                    /**
                     * Constructs a new Zone.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IZone);

                    /** Zone name. */
                    public name: string;

                    /** Zone createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Zone updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Zone labels. */
                    public labels: { [k: string]: string };

                    /** Zone layoutName. */
                    public layoutName: string;

                    /**
                     * Creates a new Zone instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Zone instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IZone): google.cloud.edgenetwork.v1.Zone;

                    /**
                     * Encodes the specified Zone message. Does not implicitly {@link google.cloud.edgenetwork.v1.Zone.verify|verify} messages.
                     * @param message Zone message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IZone, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Zone message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.Zone.verify|verify} messages.
                     * @param message Zone message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IZone, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Zone message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Zone
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.Zone;

                    /**
                     * Decodes a Zone message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Zone
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.Zone;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.Zone;

                    /**
                     * Creates a plain object from a Zone message. Also converts values to other types if specified.
                     * @param message Zone
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.Zone, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Zone to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Zone
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Network. */
                interface INetwork {

                    /** Network name */
                    name?: (string|null);

                    /** Network createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Network updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Network labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Network description */
                    description?: (string|null);

                    /** Network mtu */
                    mtu?: (number|null);
                }

                /** Represents a Network. */
                class Network implements INetwork {

                    /**
                     * Constructs a new Network.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.INetwork);

                    /** Network name. */
                    public name: string;

                    /** Network createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Network updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Network labels. */
                    public labels: { [k: string]: string };

                    /** Network description. */
                    public description: string;

                    /** Network mtu. */
                    public mtu: number;

                    /**
                     * Creates a new Network instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Network instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.INetwork): google.cloud.edgenetwork.v1.Network;

                    /**
                     * Encodes the specified Network message. Does not implicitly {@link google.cloud.edgenetwork.v1.Network.verify|verify} messages.
                     * @param message Network message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.INetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Network message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.Network.verify|verify} messages.
                     * @param message Network message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.INetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Network message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Network
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.Network;

                    /**
                     * Decodes a Network message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Network
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.Network;

                    /**
                     * Verifies a Network message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Network message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Network
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.Network;

                    /**
                     * Creates a plain object from a Network message. Also converts values to other types if specified.
                     * @param message Network
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.Network, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Network to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Network
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Subnet. */
                interface ISubnet {

                    /** Subnet name */
                    name?: (string|null);

                    /** Subnet createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Subnet updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Subnet labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Subnet description */
                    description?: (string|null);

                    /** Subnet network */
                    network?: (string|null);

                    /** Subnet ipv4Cidr */
                    ipv4Cidr?: (string[]|null);

                    /** Subnet ipv6Cidr */
                    ipv6Cidr?: (string[]|null);

                    /** Subnet vlanId */
                    vlanId?: (number|null);

                    /** Subnet bondingType */
                    bondingType?: (google.cloud.edgenetwork.v1.Subnet.BondingType|keyof typeof google.cloud.edgenetwork.v1.Subnet.BondingType|null);

                    /** Subnet state */
                    state?: (google.cloud.edgenetwork.v1.ResourceState|keyof typeof google.cloud.edgenetwork.v1.ResourceState|null);
                }

                /** Represents a Subnet. */
                class Subnet implements ISubnet {

                    /**
                     * Constructs a new Subnet.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.ISubnet);

                    /** Subnet name. */
                    public name: string;

                    /** Subnet createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Subnet updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Subnet labels. */
                    public labels: { [k: string]: string };

                    /** Subnet description. */
                    public description: string;

                    /** Subnet network. */
                    public network: string;

                    /** Subnet ipv4Cidr. */
                    public ipv4Cidr: string[];

                    /** Subnet ipv6Cidr. */
                    public ipv6Cidr: string[];

                    /** Subnet vlanId. */
                    public vlanId: number;

                    /** Subnet bondingType. */
                    public bondingType: (google.cloud.edgenetwork.v1.Subnet.BondingType|keyof typeof google.cloud.edgenetwork.v1.Subnet.BondingType);

                    /** Subnet state. */
                    public state: (google.cloud.edgenetwork.v1.ResourceState|keyof typeof google.cloud.edgenetwork.v1.ResourceState);

                    /**
                     * Creates a new Subnet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Subnet instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.ISubnet): google.cloud.edgenetwork.v1.Subnet;

                    /**
                     * Encodes the specified Subnet message. Does not implicitly {@link google.cloud.edgenetwork.v1.Subnet.verify|verify} messages.
                     * @param message Subnet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.ISubnet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Subnet message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.Subnet.verify|verify} messages.
                     * @param message Subnet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.ISubnet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Subnet message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Subnet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.Subnet;

                    /**
                     * Decodes a Subnet message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Subnet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.Subnet;

                    /**
                     * Verifies a Subnet message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Subnet message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Subnet
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.Subnet;

                    /**
                     * Creates a plain object from a Subnet message. Also converts values to other types if specified.
                     * @param message Subnet
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.Subnet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Subnet to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Subnet
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Subnet {

                    /** BondingType enum. */
                    enum BondingType {
                        BONDING_TYPE_UNSPECIFIED = 0,
                        BONDED = 1,
                        NON_BONDED = 2
                    }
                }

                /** Properties of an Interconnect. */
                interface IInterconnect {

                    /** Interconnect name */
                    name?: (string|null);

                    /** Interconnect createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Interconnect updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Interconnect labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Interconnect description */
                    description?: (string|null);

                    /** Interconnect interconnectType */
                    interconnectType?: (google.cloud.edgenetwork.v1.Interconnect.InterconnectType|keyof typeof google.cloud.edgenetwork.v1.Interconnect.InterconnectType|null);

                    /** Interconnect uuid */
                    uuid?: (string|null);

                    /** Interconnect deviceCloudResourceName */
                    deviceCloudResourceName?: (string|null);

                    /** Interconnect physicalPorts */
                    physicalPorts?: (string[]|null);
                }

                /** Represents an Interconnect. */
                class Interconnect implements IInterconnect {

                    /**
                     * Constructs a new Interconnect.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IInterconnect);

                    /** Interconnect name. */
                    public name: string;

                    /** Interconnect createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Interconnect updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Interconnect labels. */
                    public labels: { [k: string]: string };

                    /** Interconnect description. */
                    public description: string;

                    /** Interconnect interconnectType. */
                    public interconnectType: (google.cloud.edgenetwork.v1.Interconnect.InterconnectType|keyof typeof google.cloud.edgenetwork.v1.Interconnect.InterconnectType);

                    /** Interconnect uuid. */
                    public uuid: string;

                    /** Interconnect deviceCloudResourceName. */
                    public deviceCloudResourceName: string;

                    /** Interconnect physicalPorts. */
                    public physicalPorts: string[];

                    /**
                     * Creates a new Interconnect instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Interconnect instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IInterconnect): google.cloud.edgenetwork.v1.Interconnect;

                    /**
                     * Encodes the specified Interconnect message. Does not implicitly {@link google.cloud.edgenetwork.v1.Interconnect.verify|verify} messages.
                     * @param message Interconnect message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IInterconnect, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Interconnect message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.Interconnect.verify|verify} messages.
                     * @param message Interconnect message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IInterconnect, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Interconnect message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Interconnect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.Interconnect;

                    /**
                     * Decodes an Interconnect message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Interconnect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.Interconnect;

                    /**
                     * Verifies an Interconnect message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Interconnect message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Interconnect
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.Interconnect;

                    /**
                     * Creates a plain object from an Interconnect message. Also converts values to other types if specified.
                     * @param message Interconnect
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.Interconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Interconnect to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Interconnect
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Interconnect {

                    /** InterconnectType enum. */
                    enum InterconnectType {
                        INTERCONNECT_TYPE_UNSPECIFIED = 0,
                        DEDICATED = 1
                    }
                }

                /** Properties of an InterconnectAttachment. */
                interface IInterconnectAttachment {

                    /** InterconnectAttachment name */
                    name?: (string|null);

                    /** InterconnectAttachment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** InterconnectAttachment updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** InterconnectAttachment labels */
                    labels?: ({ [k: string]: string }|null);

                    /** InterconnectAttachment description */
                    description?: (string|null);

                    /** InterconnectAttachment interconnect */
                    interconnect?: (string|null);

                    /** InterconnectAttachment network */
                    network?: (string|null);

                    /** InterconnectAttachment vlanId */
                    vlanId?: (number|null);

                    /** InterconnectAttachment mtu */
                    mtu?: (number|null);

                    /** InterconnectAttachment state */
                    state?: (google.cloud.edgenetwork.v1.ResourceState|keyof typeof google.cloud.edgenetwork.v1.ResourceState|null);
                }

                /** Represents an InterconnectAttachment. */
                class InterconnectAttachment implements IInterconnectAttachment {

                    /**
                     * Constructs a new InterconnectAttachment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IInterconnectAttachment);

                    /** InterconnectAttachment name. */
                    public name: string;

                    /** InterconnectAttachment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** InterconnectAttachment updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** InterconnectAttachment labels. */
                    public labels: { [k: string]: string };

                    /** InterconnectAttachment description. */
                    public description: string;

                    /** InterconnectAttachment interconnect. */
                    public interconnect: string;

                    /** InterconnectAttachment network. */
                    public network: string;

                    /** InterconnectAttachment vlanId. */
                    public vlanId: number;

                    /** InterconnectAttachment mtu. */
                    public mtu: number;

                    /** InterconnectAttachment state. */
                    public state: (google.cloud.edgenetwork.v1.ResourceState|keyof typeof google.cloud.edgenetwork.v1.ResourceState);

                    /**
                     * Creates a new InterconnectAttachment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InterconnectAttachment instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IInterconnectAttachment): google.cloud.edgenetwork.v1.InterconnectAttachment;

                    /**
                     * Encodes the specified InterconnectAttachment message. Does not implicitly {@link google.cloud.edgenetwork.v1.InterconnectAttachment.verify|verify} messages.
                     * @param message InterconnectAttachment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IInterconnectAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InterconnectAttachment message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.InterconnectAttachment.verify|verify} messages.
                     * @param message InterconnectAttachment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IInterconnectAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InterconnectAttachment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InterconnectAttachment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.InterconnectAttachment;

                    /**
                     * Decodes an InterconnectAttachment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InterconnectAttachment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.InterconnectAttachment;

                    /**
                     * Verifies an InterconnectAttachment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InterconnectAttachment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InterconnectAttachment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.InterconnectAttachment;

                    /**
                     * Creates a plain object from an InterconnectAttachment message. Also converts values to other types if specified.
                     * @param message InterconnectAttachment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.InterconnectAttachment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InterconnectAttachment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InterconnectAttachment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Router. */
                interface IRouter {

                    /** Router name */
                    name?: (string|null);

                    /** Router createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Router updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Router labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Router description */
                    description?: (string|null);

                    /** Router network */
                    network?: (string|null);

                    /** Router interface */
                    "interface"?: (google.cloud.edgenetwork.v1.Router.IInterface[]|null);

                    /** Router bgpPeer */
                    bgpPeer?: (google.cloud.edgenetwork.v1.Router.IBgpPeer[]|null);

                    /** Router bgp */
                    bgp?: (google.cloud.edgenetwork.v1.Router.IBgp|null);

                    /** Router state */
                    state?: (google.cloud.edgenetwork.v1.ResourceState|keyof typeof google.cloud.edgenetwork.v1.ResourceState|null);

                    /** Router routeAdvertisements */
                    routeAdvertisements?: (string[]|null);
                }

                /** Represents a Router. */
                class Router implements IRouter {

                    /**
                     * Constructs a new Router.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IRouter);

                    /** Router name. */
                    public name: string;

                    /** Router createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Router updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Router labels. */
                    public labels: { [k: string]: string };

                    /** Router description. */
                    public description: string;

                    /** Router network. */
                    public network: string;

                    /** Router interface. */
                    public interface: google.cloud.edgenetwork.v1.Router.IInterface[];

                    /** Router bgpPeer. */
                    public bgpPeer: google.cloud.edgenetwork.v1.Router.IBgpPeer[];

                    /** Router bgp. */
                    public bgp?: (google.cloud.edgenetwork.v1.Router.IBgp|null);

                    /** Router state. */
                    public state: (google.cloud.edgenetwork.v1.ResourceState|keyof typeof google.cloud.edgenetwork.v1.ResourceState);

                    /** Router routeAdvertisements. */
                    public routeAdvertisements: string[];

                    /**
                     * Creates a new Router instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Router instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IRouter): google.cloud.edgenetwork.v1.Router;

                    /**
                     * Encodes the specified Router message. Does not implicitly {@link google.cloud.edgenetwork.v1.Router.verify|verify} messages.
                     * @param message Router message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IRouter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Router message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.Router.verify|verify} messages.
                     * @param message Router message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IRouter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Router message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Router
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.Router;

                    /**
                     * Decodes a Router message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Router
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.Router;

                    /**
                     * Verifies a Router message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Router message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Router
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.Router;

                    /**
                     * Creates a plain object from a Router message. Also converts values to other types if specified.
                     * @param message Router
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.Router, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Router to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Router
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Router {

                    /** Properties of an Interface. */
                    interface IInterface {

                        /** Interface name */
                        name?: (string|null);

                        /** Interface ipv4Cidr */
                        ipv4Cidr?: (string|null);

                        /** Interface ipv6Cidr */
                        ipv6Cidr?: (string|null);

                        /** Interface linkedInterconnectAttachment */
                        linkedInterconnectAttachment?: (string|null);

                        /** Interface subnetwork */
                        subnetwork?: (string|null);

                        /** Interface loopbackIpAddresses */
                        loopbackIpAddresses?: (string[]|null);
                    }

                    /** Represents an Interface. */
                    class Interface implements IInterface {

                        /**
                         * Constructs a new Interface.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.edgenetwork.v1.Router.IInterface);

                        /** Interface name. */
                        public name: string;

                        /** Interface ipv4Cidr. */
                        public ipv4Cidr: string;

                        /** Interface ipv6Cidr. */
                        public ipv6Cidr: string;

                        /** Interface linkedInterconnectAttachment. */
                        public linkedInterconnectAttachment: string;

                        /** Interface subnetwork. */
                        public subnetwork: string;

                        /** Interface loopbackIpAddresses. */
                        public loopbackIpAddresses: string[];

                        /**
                         * Creates a new Interface instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Interface instance
                         */
                        public static create(properties?: google.cloud.edgenetwork.v1.Router.IInterface): google.cloud.edgenetwork.v1.Router.Interface;

                        /**
                         * Encodes the specified Interface message. Does not implicitly {@link google.cloud.edgenetwork.v1.Router.Interface.verify|verify} messages.
                         * @param message Interface message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.edgenetwork.v1.Router.IInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Interface message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.Router.Interface.verify|verify} messages.
                         * @param message Interface message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.edgenetwork.v1.Router.IInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Interface message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Interface
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.Router.Interface;

                        /**
                         * Decodes an Interface message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Interface
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.Router.Interface;

                        /**
                         * Verifies an Interface message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Interface message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Interface
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.Router.Interface;

                        /**
                         * Creates a plain object from an Interface message. Also converts values to other types if specified.
                         * @param message Interface
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.edgenetwork.v1.Router.Interface, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Interface to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Interface
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BgpPeer. */
                    interface IBgpPeer {

                        /** BgpPeer name */
                        name?: (string|null);

                        /** BgpPeer interface */
                        "interface"?: (string|null);

                        /** BgpPeer interfaceIpv4Cidr */
                        interfaceIpv4Cidr?: (string|null);

                        /** BgpPeer interfaceIpv6Cidr */
                        interfaceIpv6Cidr?: (string|null);

                        /** BgpPeer peerIpv4Cidr */
                        peerIpv4Cidr?: (string|null);

                        /** BgpPeer peerIpv6Cidr */
                        peerIpv6Cidr?: (string|null);

                        /** BgpPeer peerAsn */
                        peerAsn?: (number|null);

                        /** BgpPeer localAsn */
                        localAsn?: (number|null);
                    }

                    /** Represents a BgpPeer. */
                    class BgpPeer implements IBgpPeer {

                        /**
                         * Constructs a new BgpPeer.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.edgenetwork.v1.Router.IBgpPeer);

                        /** BgpPeer name. */
                        public name: string;

                        /** BgpPeer interface. */
                        public interface: string;

                        /** BgpPeer interfaceIpv4Cidr. */
                        public interfaceIpv4Cidr: string;

                        /** BgpPeer interfaceIpv6Cidr. */
                        public interfaceIpv6Cidr: string;

                        /** BgpPeer peerIpv4Cidr. */
                        public peerIpv4Cidr: string;

                        /** BgpPeer peerIpv6Cidr. */
                        public peerIpv6Cidr: string;

                        /** BgpPeer peerAsn. */
                        public peerAsn: number;

                        /** BgpPeer localAsn. */
                        public localAsn: number;

                        /**
                         * Creates a new BgpPeer instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BgpPeer instance
                         */
                        public static create(properties?: google.cloud.edgenetwork.v1.Router.IBgpPeer): google.cloud.edgenetwork.v1.Router.BgpPeer;

                        /**
                         * Encodes the specified BgpPeer message. Does not implicitly {@link google.cloud.edgenetwork.v1.Router.BgpPeer.verify|verify} messages.
                         * @param message BgpPeer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.edgenetwork.v1.Router.IBgpPeer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BgpPeer message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.Router.BgpPeer.verify|verify} messages.
                         * @param message BgpPeer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.edgenetwork.v1.Router.IBgpPeer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BgpPeer message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BgpPeer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.Router.BgpPeer;

                        /**
                         * Decodes a BgpPeer message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BgpPeer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.Router.BgpPeer;

                        /**
                         * Verifies a BgpPeer message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BgpPeer message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BgpPeer
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.Router.BgpPeer;

                        /**
                         * Creates a plain object from a BgpPeer message. Also converts values to other types if specified.
                         * @param message BgpPeer
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.edgenetwork.v1.Router.BgpPeer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BgpPeer to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BgpPeer
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Bgp. */
                    interface IBgp {

                        /** Bgp asn */
                        asn?: (number|null);

                        /** Bgp keepaliveIntervalInSeconds */
                        keepaliveIntervalInSeconds?: (number|null);
                    }

                    /** Represents a Bgp. */
                    class Bgp implements IBgp {

                        /**
                         * Constructs a new Bgp.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.edgenetwork.v1.Router.IBgp);

                        /** Bgp asn. */
                        public asn: number;

                        /** Bgp keepaliveIntervalInSeconds. */
                        public keepaliveIntervalInSeconds: number;

                        /**
                         * Creates a new Bgp instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Bgp instance
                         */
                        public static create(properties?: google.cloud.edgenetwork.v1.Router.IBgp): google.cloud.edgenetwork.v1.Router.Bgp;

                        /**
                         * Encodes the specified Bgp message. Does not implicitly {@link google.cloud.edgenetwork.v1.Router.Bgp.verify|verify} messages.
                         * @param message Bgp message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.edgenetwork.v1.Router.IBgp, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Bgp message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.Router.Bgp.verify|verify} messages.
                         * @param message Bgp message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.edgenetwork.v1.Router.IBgp, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Bgp message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Bgp
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.Router.Bgp;

                        /**
                         * Decodes a Bgp message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Bgp
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.Router.Bgp;

                        /**
                         * Verifies a Bgp message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Bgp message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Bgp
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.Router.Bgp;

                        /**
                         * Creates a plain object from a Bgp message. Also converts values to other types if specified.
                         * @param message Bgp
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.edgenetwork.v1.Router.Bgp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Bgp to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Bgp
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a LinkLayerAddress. */
                interface ILinkLayerAddress {

                    /** LinkLayerAddress macAddress */
                    macAddress?: (string|null);

                    /** LinkLayerAddress ipAddress */
                    ipAddress?: (string|null);
                }

                /** Represents a LinkLayerAddress. */
                class LinkLayerAddress implements ILinkLayerAddress {

                    /**
                     * Constructs a new LinkLayerAddress.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.ILinkLayerAddress);

                    /** LinkLayerAddress macAddress. */
                    public macAddress: string;

                    /** LinkLayerAddress ipAddress. */
                    public ipAddress: string;

                    /**
                     * Creates a new LinkLayerAddress instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LinkLayerAddress instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.ILinkLayerAddress): google.cloud.edgenetwork.v1.LinkLayerAddress;

                    /**
                     * Encodes the specified LinkLayerAddress message. Does not implicitly {@link google.cloud.edgenetwork.v1.LinkLayerAddress.verify|verify} messages.
                     * @param message LinkLayerAddress message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.ILinkLayerAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LinkLayerAddress message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.LinkLayerAddress.verify|verify} messages.
                     * @param message LinkLayerAddress message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.ILinkLayerAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LinkLayerAddress message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LinkLayerAddress
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.LinkLayerAddress;

                    /**
                     * Decodes a LinkLayerAddress message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LinkLayerAddress
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.LinkLayerAddress;

                    /**
                     * Verifies a LinkLayerAddress message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LinkLayerAddress message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LinkLayerAddress
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.LinkLayerAddress;

                    /**
                     * Creates a plain object from a LinkLayerAddress message. Also converts values to other types if specified.
                     * @param message LinkLayerAddress
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.LinkLayerAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LinkLayerAddress to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LinkLayerAddress
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SubnetStatus. */
                interface ISubnetStatus {

                    /** SubnetStatus name */
                    name?: (string|null);

                    /** SubnetStatus macAddress */
                    macAddress?: (string|null);

                    /** SubnetStatus linkLayerAddresses */
                    linkLayerAddresses?: (google.cloud.edgenetwork.v1.ILinkLayerAddress[]|null);
                }

                /** Represents a SubnetStatus. */
                class SubnetStatus implements ISubnetStatus {

                    /**
                     * Constructs a new SubnetStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.ISubnetStatus);

                    /** SubnetStatus name. */
                    public name: string;

                    /** SubnetStatus macAddress. */
                    public macAddress: string;

                    /** SubnetStatus linkLayerAddresses. */
                    public linkLayerAddresses: google.cloud.edgenetwork.v1.ILinkLayerAddress[];

                    /**
                     * Creates a new SubnetStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubnetStatus instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.ISubnetStatus): google.cloud.edgenetwork.v1.SubnetStatus;

                    /**
                     * Encodes the specified SubnetStatus message. Does not implicitly {@link google.cloud.edgenetwork.v1.SubnetStatus.verify|verify} messages.
                     * @param message SubnetStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.ISubnetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubnetStatus message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.SubnetStatus.verify|verify} messages.
                     * @param message SubnetStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.ISubnetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubnetStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubnetStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.SubnetStatus;

                    /**
                     * Decodes a SubnetStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubnetStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.SubnetStatus;

                    /**
                     * Verifies a SubnetStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubnetStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubnetStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.SubnetStatus;

                    /**
                     * Creates a plain object from a SubnetStatus message. Also converts values to other types if specified.
                     * @param message SubnetStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.SubnetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubnetStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SubnetStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InterconnectDiagnostics. */
                interface IInterconnectDiagnostics {

                    /** InterconnectDiagnostics macAddress */
                    macAddress?: (string|null);

                    /** InterconnectDiagnostics linkLayerAddresses */
                    linkLayerAddresses?: (google.cloud.edgenetwork.v1.ILinkLayerAddress[]|null);

                    /** InterconnectDiagnostics links */
                    links?: (google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkStatus[]|null);
                }

                /** Represents an InterconnectDiagnostics. */
                class InterconnectDiagnostics implements IInterconnectDiagnostics {

                    /**
                     * Constructs a new InterconnectDiagnostics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IInterconnectDiagnostics);

                    /** InterconnectDiagnostics macAddress. */
                    public macAddress: string;

                    /** InterconnectDiagnostics linkLayerAddresses. */
                    public linkLayerAddresses: google.cloud.edgenetwork.v1.ILinkLayerAddress[];

                    /** InterconnectDiagnostics links. */
                    public links: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkStatus[];

                    /**
                     * Creates a new InterconnectDiagnostics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InterconnectDiagnostics instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IInterconnectDiagnostics): google.cloud.edgenetwork.v1.InterconnectDiagnostics;

                    /**
                     * Encodes the specified InterconnectDiagnostics message. Does not implicitly {@link google.cloud.edgenetwork.v1.InterconnectDiagnostics.verify|verify} messages.
                     * @param message InterconnectDiagnostics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IInterconnectDiagnostics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InterconnectDiagnostics message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.InterconnectDiagnostics.verify|verify} messages.
                     * @param message InterconnectDiagnostics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IInterconnectDiagnostics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InterconnectDiagnostics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InterconnectDiagnostics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.InterconnectDiagnostics;

                    /**
                     * Decodes an InterconnectDiagnostics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InterconnectDiagnostics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.InterconnectDiagnostics;

                    /**
                     * Verifies an InterconnectDiagnostics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InterconnectDiagnostics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InterconnectDiagnostics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.InterconnectDiagnostics;

                    /**
                     * Creates a plain object from an InterconnectDiagnostics message. Also converts values to other types if specified.
                     * @param message InterconnectDiagnostics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.InterconnectDiagnostics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InterconnectDiagnostics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InterconnectDiagnostics
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace InterconnectDiagnostics {

                    /** Properties of a LinkStatus. */
                    interface ILinkStatus {

                        /** LinkStatus circuitId */
                        circuitId?: (string|null);

                        /** LinkStatus lacpStatus */
                        lacpStatus?: (google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkLACPStatus|null);

                        /** LinkStatus lldpStatuses */
                        lldpStatuses?: (google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkLLDPStatus[]|null);

                        /** LinkStatus packetCounts */
                        packetCounts?: (google.cloud.edgenetwork.v1.InterconnectDiagnostics.IPacketCounts|null);
                    }

                    /** Represents a LinkStatus. */
                    class LinkStatus implements ILinkStatus {

                        /**
                         * Constructs a new LinkStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkStatus);

                        /** LinkStatus circuitId. */
                        public circuitId: string;

                        /** LinkStatus lacpStatus. */
                        public lacpStatus?: (google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkLACPStatus|null);

                        /** LinkStatus lldpStatuses. */
                        public lldpStatuses: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkLLDPStatus[];

                        /** LinkStatus packetCounts. */
                        public packetCounts?: (google.cloud.edgenetwork.v1.InterconnectDiagnostics.IPacketCounts|null);

                        /**
                         * Creates a new LinkStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LinkStatus instance
                         */
                        public static create(properties?: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkStatus): google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkStatus;

                        /**
                         * Encodes the specified LinkStatus message. Does not implicitly {@link google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkStatus.verify|verify} messages.
                         * @param message LinkStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LinkStatus message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkStatus.verify|verify} messages.
                         * @param message LinkStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LinkStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LinkStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkStatus;

                        /**
                         * Decodes a LinkStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LinkStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkStatus;

                        /**
                         * Verifies a LinkStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LinkStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LinkStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkStatus;

                        /**
                         * Creates a plain object from a LinkStatus message. Also converts values to other types if specified.
                         * @param message LinkStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LinkStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LinkStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PacketCounts. */
                    interface IPacketCounts {

                        /** PacketCounts inboundUnicast */
                        inboundUnicast?: (number|Long|string|null);

                        /** PacketCounts inboundErrors */
                        inboundErrors?: (number|Long|string|null);

                        /** PacketCounts inboundDiscards */
                        inboundDiscards?: (number|Long|string|null);

                        /** PacketCounts outboundUnicast */
                        outboundUnicast?: (number|Long|string|null);

                        /** PacketCounts outboundErrors */
                        outboundErrors?: (number|Long|string|null);

                        /** PacketCounts outboundDiscards */
                        outboundDiscards?: (number|Long|string|null);
                    }

                    /** Represents a PacketCounts. */
                    class PacketCounts implements IPacketCounts {

                        /**
                         * Constructs a new PacketCounts.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.edgenetwork.v1.InterconnectDiagnostics.IPacketCounts);

                        /** PacketCounts inboundUnicast. */
                        public inboundUnicast: (number|Long|string);

                        /** PacketCounts inboundErrors. */
                        public inboundErrors: (number|Long|string);

                        /** PacketCounts inboundDiscards. */
                        public inboundDiscards: (number|Long|string);

                        /** PacketCounts outboundUnicast. */
                        public outboundUnicast: (number|Long|string);

                        /** PacketCounts outboundErrors. */
                        public outboundErrors: (number|Long|string);

                        /** PacketCounts outboundDiscards. */
                        public outboundDiscards: (number|Long|string);

                        /**
                         * Creates a new PacketCounts instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PacketCounts instance
                         */
                        public static create(properties?: google.cloud.edgenetwork.v1.InterconnectDiagnostics.IPacketCounts): google.cloud.edgenetwork.v1.InterconnectDiagnostics.PacketCounts;

                        /**
                         * Encodes the specified PacketCounts message. Does not implicitly {@link google.cloud.edgenetwork.v1.InterconnectDiagnostics.PacketCounts.verify|verify} messages.
                         * @param message PacketCounts message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.edgenetwork.v1.InterconnectDiagnostics.IPacketCounts, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PacketCounts message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.InterconnectDiagnostics.PacketCounts.verify|verify} messages.
                         * @param message PacketCounts message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.edgenetwork.v1.InterconnectDiagnostics.IPacketCounts, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PacketCounts message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PacketCounts
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.InterconnectDiagnostics.PacketCounts;

                        /**
                         * Decodes a PacketCounts message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PacketCounts
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.InterconnectDiagnostics.PacketCounts;

                        /**
                         * Verifies a PacketCounts message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PacketCounts message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PacketCounts
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.InterconnectDiagnostics.PacketCounts;

                        /**
                         * Creates a plain object from a PacketCounts message. Also converts values to other types if specified.
                         * @param message PacketCounts
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.edgenetwork.v1.InterconnectDiagnostics.PacketCounts, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PacketCounts to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PacketCounts
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a LinkLACPStatus. */
                    interface ILinkLACPStatus {

                        /** LinkLACPStatus state */
                        state?: (google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLACPStatus.State|keyof typeof google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLACPStatus.State|null);

                        /** LinkLACPStatus googleSystemId */
                        googleSystemId?: (string|null);

                        /** LinkLACPStatus neighborSystemId */
                        neighborSystemId?: (string|null);

                        /** LinkLACPStatus aggregatable */
                        aggregatable?: (boolean|null);

                        /** LinkLACPStatus collecting */
                        collecting?: (boolean|null);

                        /** LinkLACPStatus distributing */
                        distributing?: (boolean|null);
                    }

                    /** Represents a LinkLACPStatus. */
                    class LinkLACPStatus implements ILinkLACPStatus {

                        /**
                         * Constructs a new LinkLACPStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkLACPStatus);

                        /** LinkLACPStatus state. */
                        public state: (google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLACPStatus.State|keyof typeof google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLACPStatus.State);

                        /** LinkLACPStatus googleSystemId. */
                        public googleSystemId: string;

                        /** LinkLACPStatus neighborSystemId. */
                        public neighborSystemId: string;

                        /** LinkLACPStatus aggregatable. */
                        public aggregatable: boolean;

                        /** LinkLACPStatus collecting. */
                        public collecting: boolean;

                        /** LinkLACPStatus distributing. */
                        public distributing: boolean;

                        /**
                         * Creates a new LinkLACPStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LinkLACPStatus instance
                         */
                        public static create(properties?: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkLACPStatus): google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLACPStatus;

                        /**
                         * Encodes the specified LinkLACPStatus message. Does not implicitly {@link google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLACPStatus.verify|verify} messages.
                         * @param message LinkLACPStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkLACPStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LinkLACPStatus message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLACPStatus.verify|verify} messages.
                         * @param message LinkLACPStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkLACPStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LinkLACPStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LinkLACPStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLACPStatus;

                        /**
                         * Decodes a LinkLACPStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LinkLACPStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLACPStatus;

                        /**
                         * Verifies a LinkLACPStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LinkLACPStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LinkLACPStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLACPStatus;

                        /**
                         * Creates a plain object from a LinkLACPStatus message. Also converts values to other types if specified.
                         * @param message LinkLACPStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLACPStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LinkLACPStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LinkLACPStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace LinkLACPStatus {

                        /** State enum. */
                        enum State {
                            UNKNOWN = 0,
                            ACTIVE = 1,
                            DETACHED = 2
                        }
                    }

                    /** Properties of a LinkLLDPStatus. */
                    interface ILinkLLDPStatus {

                        /** LinkLLDPStatus peerSystemName */
                        peerSystemName?: (string|null);

                        /** LinkLLDPStatus peerSystemDescription */
                        peerSystemDescription?: (string|null);

                        /** LinkLLDPStatus peerChassisId */
                        peerChassisId?: (string|null);

                        /** LinkLLDPStatus peerChassisIdType */
                        peerChassisIdType?: (string|null);

                        /** LinkLLDPStatus peerPortId */
                        peerPortId?: (string|null);

                        /** LinkLLDPStatus peerPortIdType */
                        peerPortIdType?: (string|null);
                    }

                    /** Represents a LinkLLDPStatus. */
                    class LinkLLDPStatus implements ILinkLLDPStatus {

                        /**
                         * Constructs a new LinkLLDPStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkLLDPStatus);

                        /** LinkLLDPStatus peerSystemName. */
                        public peerSystemName: string;

                        /** LinkLLDPStatus peerSystemDescription. */
                        public peerSystemDescription: string;

                        /** LinkLLDPStatus peerChassisId. */
                        public peerChassisId: string;

                        /** LinkLLDPStatus peerChassisIdType. */
                        public peerChassisIdType: string;

                        /** LinkLLDPStatus peerPortId. */
                        public peerPortId: string;

                        /** LinkLLDPStatus peerPortIdType. */
                        public peerPortIdType: string;

                        /**
                         * Creates a new LinkLLDPStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LinkLLDPStatus instance
                         */
                        public static create(properties?: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkLLDPStatus): google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLLDPStatus;

                        /**
                         * Encodes the specified LinkLLDPStatus message. Does not implicitly {@link google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLLDPStatus.verify|verify} messages.
                         * @param message LinkLLDPStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkLLDPStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LinkLLDPStatus message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLLDPStatus.verify|verify} messages.
                         * @param message LinkLLDPStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.edgenetwork.v1.InterconnectDiagnostics.ILinkLLDPStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LinkLLDPStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LinkLLDPStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLLDPStatus;

                        /**
                         * Decodes a LinkLLDPStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LinkLLDPStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLLDPStatus;

                        /**
                         * Verifies a LinkLLDPStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LinkLLDPStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LinkLLDPStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLLDPStatus;

                        /**
                         * Creates a plain object from a LinkLLDPStatus message. Also converts values to other types if specified.
                         * @param message LinkLLDPStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.edgenetwork.v1.InterconnectDiagnostics.LinkLLDPStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LinkLLDPStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LinkLLDPStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a RouterStatus. */
                interface IRouterStatus {

                    /** RouterStatus network */
                    network?: (string|null);

                    /** RouterStatus bgpPeerStatus */
                    bgpPeerStatus?: (google.cloud.edgenetwork.v1.RouterStatus.IBgpPeerStatus[]|null);
                }

                /** Represents a RouterStatus. */
                class RouterStatus implements IRouterStatus {

                    /**
                     * Constructs a new RouterStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IRouterStatus);

                    /** RouterStatus network. */
                    public network: string;

                    /** RouterStatus bgpPeerStatus. */
                    public bgpPeerStatus: google.cloud.edgenetwork.v1.RouterStatus.IBgpPeerStatus[];

                    /**
                     * Creates a new RouterStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouterStatus instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IRouterStatus): google.cloud.edgenetwork.v1.RouterStatus;

                    /**
                     * Encodes the specified RouterStatus message. Does not implicitly {@link google.cloud.edgenetwork.v1.RouterStatus.verify|verify} messages.
                     * @param message RouterStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IRouterStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouterStatus message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.RouterStatus.verify|verify} messages.
                     * @param message RouterStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IRouterStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouterStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouterStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.RouterStatus;

                    /**
                     * Decodes a RouterStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouterStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.RouterStatus;

                    /**
                     * Verifies a RouterStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouterStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouterStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.RouterStatus;

                    /**
                     * Creates a plain object from a RouterStatus message. Also converts values to other types if specified.
                     * @param message RouterStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.RouterStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouterStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouterStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RouterStatus {

                    /** Properties of a BgpPeerStatus. */
                    interface IBgpPeerStatus {

                        /** BgpPeerStatus name */
                        name?: (string|null);

                        /** BgpPeerStatus ipAddress */
                        ipAddress?: (string|null);

                        /** BgpPeerStatus peerIpAddress */
                        peerIpAddress?: (string|null);

                        /** BgpPeerStatus status */
                        status?: (google.cloud.edgenetwork.v1.RouterStatus.BgpPeerStatus.BgpStatus|keyof typeof google.cloud.edgenetwork.v1.RouterStatus.BgpPeerStatus.BgpStatus|null);

                        /** BgpPeerStatus state */
                        state?: (string|null);

                        /** BgpPeerStatus uptime */
                        uptime?: (string|null);

                        /** BgpPeerStatus uptimeSeconds */
                        uptimeSeconds?: (number|Long|string|null);

                        /** BgpPeerStatus prefixCounter */
                        prefixCounter?: (google.cloud.edgenetwork.v1.RouterStatus.IPrefixCounter|null);
                    }

                    /** Represents a BgpPeerStatus. */
                    class BgpPeerStatus implements IBgpPeerStatus {

                        /**
                         * Constructs a new BgpPeerStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.edgenetwork.v1.RouterStatus.IBgpPeerStatus);

                        /** BgpPeerStatus name. */
                        public name: string;

                        /** BgpPeerStatus ipAddress. */
                        public ipAddress: string;

                        /** BgpPeerStatus peerIpAddress. */
                        public peerIpAddress: string;

                        /** BgpPeerStatus status. */
                        public status: (google.cloud.edgenetwork.v1.RouterStatus.BgpPeerStatus.BgpStatus|keyof typeof google.cloud.edgenetwork.v1.RouterStatus.BgpPeerStatus.BgpStatus);

                        /** BgpPeerStatus state. */
                        public state: string;

                        /** BgpPeerStatus uptime. */
                        public uptime: string;

                        /** BgpPeerStatus uptimeSeconds. */
                        public uptimeSeconds: (number|Long|string);

                        /** BgpPeerStatus prefixCounter. */
                        public prefixCounter?: (google.cloud.edgenetwork.v1.RouterStatus.IPrefixCounter|null);

                        /**
                         * Creates a new BgpPeerStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BgpPeerStatus instance
                         */
                        public static create(properties?: google.cloud.edgenetwork.v1.RouterStatus.IBgpPeerStatus): google.cloud.edgenetwork.v1.RouterStatus.BgpPeerStatus;

                        /**
                         * Encodes the specified BgpPeerStatus message. Does not implicitly {@link google.cloud.edgenetwork.v1.RouterStatus.BgpPeerStatus.verify|verify} messages.
                         * @param message BgpPeerStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.edgenetwork.v1.RouterStatus.IBgpPeerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BgpPeerStatus message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.RouterStatus.BgpPeerStatus.verify|verify} messages.
                         * @param message BgpPeerStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.edgenetwork.v1.RouterStatus.IBgpPeerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BgpPeerStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BgpPeerStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.RouterStatus.BgpPeerStatus;

                        /**
                         * Decodes a BgpPeerStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BgpPeerStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.RouterStatus.BgpPeerStatus;

                        /**
                         * Verifies a BgpPeerStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BgpPeerStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BgpPeerStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.RouterStatus.BgpPeerStatus;

                        /**
                         * Creates a plain object from a BgpPeerStatus message. Also converts values to other types if specified.
                         * @param message BgpPeerStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.edgenetwork.v1.RouterStatus.BgpPeerStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BgpPeerStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BgpPeerStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace BgpPeerStatus {

                        /** BgpStatus enum. */
                        enum BgpStatus {
                            UNKNOWN = 0,
                            UP = 1,
                            DOWN = 2
                        }
                    }

                    /** Properties of a PrefixCounter. */
                    interface IPrefixCounter {

                        /** PrefixCounter advertised */
                        advertised?: (number|Long|string|null);

                        /** PrefixCounter denied */
                        denied?: (number|Long|string|null);

                        /** PrefixCounter received */
                        received?: (number|Long|string|null);

                        /** PrefixCounter sent */
                        sent?: (number|Long|string|null);

                        /** PrefixCounter suppressed */
                        suppressed?: (number|Long|string|null);

                        /** PrefixCounter withdrawn */
                        withdrawn?: (number|Long|string|null);
                    }

                    /** Represents a PrefixCounter. */
                    class PrefixCounter implements IPrefixCounter {

                        /**
                         * Constructs a new PrefixCounter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.edgenetwork.v1.RouterStatus.IPrefixCounter);

                        /** PrefixCounter advertised. */
                        public advertised: (number|Long|string);

                        /** PrefixCounter denied. */
                        public denied: (number|Long|string);

                        /** PrefixCounter received. */
                        public received: (number|Long|string);

                        /** PrefixCounter sent. */
                        public sent: (number|Long|string);

                        /** PrefixCounter suppressed. */
                        public suppressed: (number|Long|string);

                        /** PrefixCounter withdrawn. */
                        public withdrawn: (number|Long|string);

                        /**
                         * Creates a new PrefixCounter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PrefixCounter instance
                         */
                        public static create(properties?: google.cloud.edgenetwork.v1.RouterStatus.IPrefixCounter): google.cloud.edgenetwork.v1.RouterStatus.PrefixCounter;

                        /**
                         * Encodes the specified PrefixCounter message. Does not implicitly {@link google.cloud.edgenetwork.v1.RouterStatus.PrefixCounter.verify|verify} messages.
                         * @param message PrefixCounter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.edgenetwork.v1.RouterStatus.IPrefixCounter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PrefixCounter message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.RouterStatus.PrefixCounter.verify|verify} messages.
                         * @param message PrefixCounter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.edgenetwork.v1.RouterStatus.IPrefixCounter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PrefixCounter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PrefixCounter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.RouterStatus.PrefixCounter;

                        /**
                         * Decodes a PrefixCounter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PrefixCounter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.RouterStatus.PrefixCounter;

                        /**
                         * Verifies a PrefixCounter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PrefixCounter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PrefixCounter
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.RouterStatus.PrefixCounter;

                        /**
                         * Creates a plain object from a PrefixCounter message. Also converts values to other types if specified.
                         * @param message PrefixCounter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.edgenetwork.v1.RouterStatus.PrefixCounter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PrefixCounter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PrefixCounter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Represents an EdgeNetwork */
                class EdgeNetwork extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new EdgeNetwork service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new EdgeNetwork service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EdgeNetwork;

                    /**
                     * Calls InitializeZone.
                     * @param request InitializeZoneRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and InitializeZoneResponse
                     */
                    public initializeZone(request: google.cloud.edgenetwork.v1.IInitializeZoneRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.InitializeZoneCallback): void;

                    /**
                     * Calls InitializeZone.
                     * @param request InitializeZoneRequest message or plain object
                     * @returns Promise
                     */
                    public initializeZone(request: google.cloud.edgenetwork.v1.IInitializeZoneRequest): Promise<google.cloud.edgenetwork.v1.InitializeZoneResponse>;

                    /**
                     * Calls ListZones.
                     * @param request ListZonesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListZonesResponse
                     */
                    public listZones(request: google.cloud.edgenetwork.v1.IListZonesRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.ListZonesCallback): void;

                    /**
                     * Calls ListZones.
                     * @param request ListZonesRequest message or plain object
                     * @returns Promise
                     */
                    public listZones(request: google.cloud.edgenetwork.v1.IListZonesRequest): Promise<google.cloud.edgenetwork.v1.ListZonesResponse>;

                    /**
                     * Calls GetZone.
                     * @param request GetZoneRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Zone
                     */
                    public getZone(request: google.cloud.edgenetwork.v1.IGetZoneRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.GetZoneCallback): void;

                    /**
                     * Calls GetZone.
                     * @param request GetZoneRequest message or plain object
                     * @returns Promise
                     */
                    public getZone(request: google.cloud.edgenetwork.v1.IGetZoneRequest): Promise<google.cloud.edgenetwork.v1.Zone>;

                    /**
                     * Calls ListNetworks.
                     * @param request ListNetworksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListNetworksResponse
                     */
                    public listNetworks(request: google.cloud.edgenetwork.v1.IListNetworksRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.ListNetworksCallback): void;

                    /**
                     * Calls ListNetworks.
                     * @param request ListNetworksRequest message or plain object
                     * @returns Promise
                     */
                    public listNetworks(request: google.cloud.edgenetwork.v1.IListNetworksRequest): Promise<google.cloud.edgenetwork.v1.ListNetworksResponse>;

                    /**
                     * Calls GetNetwork.
                     * @param request GetNetworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Network
                     */
                    public getNetwork(request: google.cloud.edgenetwork.v1.IGetNetworkRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.GetNetworkCallback): void;

                    /**
                     * Calls GetNetwork.
                     * @param request GetNetworkRequest message or plain object
                     * @returns Promise
                     */
                    public getNetwork(request: google.cloud.edgenetwork.v1.IGetNetworkRequest): Promise<google.cloud.edgenetwork.v1.Network>;

                    /**
                     * Calls DiagnoseNetwork.
                     * @param request DiagnoseNetworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DiagnoseNetworkResponse
                     */
                    public diagnoseNetwork(request: google.cloud.edgenetwork.v1.IDiagnoseNetworkRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.DiagnoseNetworkCallback): void;

                    /**
                     * Calls DiagnoseNetwork.
                     * @param request DiagnoseNetworkRequest message or plain object
                     * @returns Promise
                     */
                    public diagnoseNetwork(request: google.cloud.edgenetwork.v1.IDiagnoseNetworkRequest): Promise<google.cloud.edgenetwork.v1.DiagnoseNetworkResponse>;

                    /**
                     * Calls CreateNetwork.
                     * @param request CreateNetworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createNetwork(request: google.cloud.edgenetwork.v1.ICreateNetworkRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.CreateNetworkCallback): void;

                    /**
                     * Calls CreateNetwork.
                     * @param request CreateNetworkRequest message or plain object
                     * @returns Promise
                     */
                    public createNetwork(request: google.cloud.edgenetwork.v1.ICreateNetworkRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteNetwork.
                     * @param request DeleteNetworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteNetwork(request: google.cloud.edgenetwork.v1.IDeleteNetworkRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.DeleteNetworkCallback): void;

                    /**
                     * Calls DeleteNetwork.
                     * @param request DeleteNetworkRequest message or plain object
                     * @returns Promise
                     */
                    public deleteNetwork(request: google.cloud.edgenetwork.v1.IDeleteNetworkRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListSubnets.
                     * @param request ListSubnetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSubnetsResponse
                     */
                    public listSubnets(request: google.cloud.edgenetwork.v1.IListSubnetsRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.ListSubnetsCallback): void;

                    /**
                     * Calls ListSubnets.
                     * @param request ListSubnetsRequest message or plain object
                     * @returns Promise
                     */
                    public listSubnets(request: google.cloud.edgenetwork.v1.IListSubnetsRequest): Promise<google.cloud.edgenetwork.v1.ListSubnetsResponse>;

                    /**
                     * Calls GetSubnet.
                     * @param request GetSubnetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Subnet
                     */
                    public getSubnet(request: google.cloud.edgenetwork.v1.IGetSubnetRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.GetSubnetCallback): void;

                    /**
                     * Calls GetSubnet.
                     * @param request GetSubnetRequest message or plain object
                     * @returns Promise
                     */
                    public getSubnet(request: google.cloud.edgenetwork.v1.IGetSubnetRequest): Promise<google.cloud.edgenetwork.v1.Subnet>;

                    /**
                     * Calls CreateSubnet.
                     * @param request CreateSubnetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createSubnet(request: google.cloud.edgenetwork.v1.ICreateSubnetRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.CreateSubnetCallback): void;

                    /**
                     * Calls CreateSubnet.
                     * @param request CreateSubnetRequest message or plain object
                     * @returns Promise
                     */
                    public createSubnet(request: google.cloud.edgenetwork.v1.ICreateSubnetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateSubnet.
                     * @param request UpdateSubnetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateSubnet(request: google.cloud.edgenetwork.v1.IUpdateSubnetRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.UpdateSubnetCallback): void;

                    /**
                     * Calls UpdateSubnet.
                     * @param request UpdateSubnetRequest message or plain object
                     * @returns Promise
                     */
                    public updateSubnet(request: google.cloud.edgenetwork.v1.IUpdateSubnetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteSubnet.
                     * @param request DeleteSubnetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteSubnet(request: google.cloud.edgenetwork.v1.IDeleteSubnetRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.DeleteSubnetCallback): void;

                    /**
                     * Calls DeleteSubnet.
                     * @param request DeleteSubnetRequest message or plain object
                     * @returns Promise
                     */
                    public deleteSubnet(request: google.cloud.edgenetwork.v1.IDeleteSubnetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListInterconnects.
                     * @param request ListInterconnectsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInterconnectsResponse
                     */
                    public listInterconnects(request: google.cloud.edgenetwork.v1.IListInterconnectsRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.ListInterconnectsCallback): void;

                    /**
                     * Calls ListInterconnects.
                     * @param request ListInterconnectsRequest message or plain object
                     * @returns Promise
                     */
                    public listInterconnects(request: google.cloud.edgenetwork.v1.IListInterconnectsRequest): Promise<google.cloud.edgenetwork.v1.ListInterconnectsResponse>;

                    /**
                     * Calls GetInterconnect.
                     * @param request GetInterconnectRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Interconnect
                     */
                    public getInterconnect(request: google.cloud.edgenetwork.v1.IGetInterconnectRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.GetInterconnectCallback): void;

                    /**
                     * Calls GetInterconnect.
                     * @param request GetInterconnectRequest message or plain object
                     * @returns Promise
                     */
                    public getInterconnect(request: google.cloud.edgenetwork.v1.IGetInterconnectRequest): Promise<google.cloud.edgenetwork.v1.Interconnect>;

                    /**
                     * Calls DiagnoseInterconnect.
                     * @param request DiagnoseInterconnectRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DiagnoseInterconnectResponse
                     */
                    public diagnoseInterconnect(request: google.cloud.edgenetwork.v1.IDiagnoseInterconnectRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.DiagnoseInterconnectCallback): void;

                    /**
                     * Calls DiagnoseInterconnect.
                     * @param request DiagnoseInterconnectRequest message or plain object
                     * @returns Promise
                     */
                    public diagnoseInterconnect(request: google.cloud.edgenetwork.v1.IDiagnoseInterconnectRequest): Promise<google.cloud.edgenetwork.v1.DiagnoseInterconnectResponse>;

                    /**
                     * Calls ListInterconnectAttachments.
                     * @param request ListInterconnectAttachmentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInterconnectAttachmentsResponse
                     */
                    public listInterconnectAttachments(request: google.cloud.edgenetwork.v1.IListInterconnectAttachmentsRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.ListInterconnectAttachmentsCallback): void;

                    /**
                     * Calls ListInterconnectAttachments.
                     * @param request ListInterconnectAttachmentsRequest message or plain object
                     * @returns Promise
                     */
                    public listInterconnectAttachments(request: google.cloud.edgenetwork.v1.IListInterconnectAttachmentsRequest): Promise<google.cloud.edgenetwork.v1.ListInterconnectAttachmentsResponse>;

                    /**
                     * Calls GetInterconnectAttachment.
                     * @param request GetInterconnectAttachmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and InterconnectAttachment
                     */
                    public getInterconnectAttachment(request: google.cloud.edgenetwork.v1.IGetInterconnectAttachmentRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.GetInterconnectAttachmentCallback): void;

                    /**
                     * Calls GetInterconnectAttachment.
                     * @param request GetInterconnectAttachmentRequest message or plain object
                     * @returns Promise
                     */
                    public getInterconnectAttachment(request: google.cloud.edgenetwork.v1.IGetInterconnectAttachmentRequest): Promise<google.cloud.edgenetwork.v1.InterconnectAttachment>;

                    /**
                     * Calls CreateInterconnectAttachment.
                     * @param request CreateInterconnectAttachmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createInterconnectAttachment(request: google.cloud.edgenetwork.v1.ICreateInterconnectAttachmentRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.CreateInterconnectAttachmentCallback): void;

                    /**
                     * Calls CreateInterconnectAttachment.
                     * @param request CreateInterconnectAttachmentRequest message or plain object
                     * @returns Promise
                     */
                    public createInterconnectAttachment(request: google.cloud.edgenetwork.v1.ICreateInterconnectAttachmentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteInterconnectAttachment.
                     * @param request DeleteInterconnectAttachmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteInterconnectAttachment(request: google.cloud.edgenetwork.v1.IDeleteInterconnectAttachmentRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.DeleteInterconnectAttachmentCallback): void;

                    /**
                     * Calls DeleteInterconnectAttachment.
                     * @param request DeleteInterconnectAttachmentRequest message or plain object
                     * @returns Promise
                     */
                    public deleteInterconnectAttachment(request: google.cloud.edgenetwork.v1.IDeleteInterconnectAttachmentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListRouters.
                     * @param request ListRoutersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRoutersResponse
                     */
                    public listRouters(request: google.cloud.edgenetwork.v1.IListRoutersRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.ListRoutersCallback): void;

                    /**
                     * Calls ListRouters.
                     * @param request ListRoutersRequest message or plain object
                     * @returns Promise
                     */
                    public listRouters(request: google.cloud.edgenetwork.v1.IListRoutersRequest): Promise<google.cloud.edgenetwork.v1.ListRoutersResponse>;

                    /**
                     * Calls GetRouter.
                     * @param request GetRouterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Router
                     */
                    public getRouter(request: google.cloud.edgenetwork.v1.IGetRouterRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.GetRouterCallback): void;

                    /**
                     * Calls GetRouter.
                     * @param request GetRouterRequest message or plain object
                     * @returns Promise
                     */
                    public getRouter(request: google.cloud.edgenetwork.v1.IGetRouterRequest): Promise<google.cloud.edgenetwork.v1.Router>;

                    /**
                     * Calls DiagnoseRouter.
                     * @param request DiagnoseRouterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DiagnoseRouterResponse
                     */
                    public diagnoseRouter(request: google.cloud.edgenetwork.v1.IDiagnoseRouterRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.DiagnoseRouterCallback): void;

                    /**
                     * Calls DiagnoseRouter.
                     * @param request DiagnoseRouterRequest message or plain object
                     * @returns Promise
                     */
                    public diagnoseRouter(request: google.cloud.edgenetwork.v1.IDiagnoseRouterRequest): Promise<google.cloud.edgenetwork.v1.DiagnoseRouterResponse>;

                    /**
                     * Calls CreateRouter.
                     * @param request CreateRouterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createRouter(request: google.cloud.edgenetwork.v1.ICreateRouterRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.CreateRouterCallback): void;

                    /**
                     * Calls CreateRouter.
                     * @param request CreateRouterRequest message or plain object
                     * @returns Promise
                     */
                    public createRouter(request: google.cloud.edgenetwork.v1.ICreateRouterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateRouter.
                     * @param request UpdateRouterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateRouter(request: google.cloud.edgenetwork.v1.IUpdateRouterRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.UpdateRouterCallback): void;

                    /**
                     * Calls UpdateRouter.
                     * @param request UpdateRouterRequest message or plain object
                     * @returns Promise
                     */
                    public updateRouter(request: google.cloud.edgenetwork.v1.IUpdateRouterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteRouter.
                     * @param request DeleteRouterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteRouter(request: google.cloud.edgenetwork.v1.IDeleteRouterRequest, callback: google.cloud.edgenetwork.v1.EdgeNetwork.DeleteRouterCallback): void;

                    /**
                     * Calls DeleteRouter.
                     * @param request DeleteRouterRequest message or plain object
                     * @returns Promise
                     */
                    public deleteRouter(request: google.cloud.edgenetwork.v1.IDeleteRouterRequest): Promise<google.longrunning.Operation>;
                }

                namespace EdgeNetwork {

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|initializeZone}.
                     * @param error Error, if any
                     * @param [response] InitializeZoneResponse
                     */
                    type InitializeZoneCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.InitializeZoneResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|listZones}.
                     * @param error Error, if any
                     * @param [response] ListZonesResponse
                     */
                    type ListZonesCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.ListZonesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|getZone}.
                     * @param error Error, if any
                     * @param [response] Zone
                     */
                    type GetZoneCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.Zone) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|listNetworks}.
                     * @param error Error, if any
                     * @param [response] ListNetworksResponse
                     */
                    type ListNetworksCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.ListNetworksResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|getNetwork}.
                     * @param error Error, if any
                     * @param [response] Network
                     */
                    type GetNetworkCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.Network) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|diagnoseNetwork}.
                     * @param error Error, if any
                     * @param [response] DiagnoseNetworkResponse
                     */
                    type DiagnoseNetworkCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.DiagnoseNetworkResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|createNetwork}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateNetworkCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|deleteNetwork}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteNetworkCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|listSubnets}.
                     * @param error Error, if any
                     * @param [response] ListSubnetsResponse
                     */
                    type ListSubnetsCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.ListSubnetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|getSubnet}.
                     * @param error Error, if any
                     * @param [response] Subnet
                     */
                    type GetSubnetCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.Subnet) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|createSubnet}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateSubnetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|updateSubnet}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateSubnetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|deleteSubnet}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteSubnetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|listInterconnects}.
                     * @param error Error, if any
                     * @param [response] ListInterconnectsResponse
                     */
                    type ListInterconnectsCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.ListInterconnectsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|getInterconnect}.
                     * @param error Error, if any
                     * @param [response] Interconnect
                     */
                    type GetInterconnectCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.Interconnect) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|diagnoseInterconnect}.
                     * @param error Error, if any
                     * @param [response] DiagnoseInterconnectResponse
                     */
                    type DiagnoseInterconnectCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.DiagnoseInterconnectResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|listInterconnectAttachments}.
                     * @param error Error, if any
                     * @param [response] ListInterconnectAttachmentsResponse
                     */
                    type ListInterconnectAttachmentsCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.ListInterconnectAttachmentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|getInterconnectAttachment}.
                     * @param error Error, if any
                     * @param [response] InterconnectAttachment
                     */
                    type GetInterconnectAttachmentCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.InterconnectAttachment) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|createInterconnectAttachment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateInterconnectAttachmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|deleteInterconnectAttachment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteInterconnectAttachmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|listRouters}.
                     * @param error Error, if any
                     * @param [response] ListRoutersResponse
                     */
                    type ListRoutersCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.ListRoutersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|getRouter}.
                     * @param error Error, if any
                     * @param [response] Router
                     */
                    type GetRouterCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.Router) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|diagnoseRouter}.
                     * @param error Error, if any
                     * @param [response] DiagnoseRouterResponse
                     */
                    type DiagnoseRouterCallback = (error: (Error|null), response?: google.cloud.edgenetwork.v1.DiagnoseRouterResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|createRouter}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateRouterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|updateRouter}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateRouterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.edgenetwork.v1.EdgeNetwork|deleteRouter}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteRouterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
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
                    constructor(properties?: google.cloud.edgenetwork.v1.IListZonesRequest);

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
                    public static create(properties?: google.cloud.edgenetwork.v1.IListZonesRequest): google.cloud.edgenetwork.v1.ListZonesRequest;

                    /**
                     * Encodes the specified ListZonesRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.ListZonesRequest.verify|verify} messages.
                     * @param message ListZonesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IListZonesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListZonesRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.ListZonesRequest.verify|verify} messages.
                     * @param message ListZonesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IListZonesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListZonesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListZonesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.ListZonesRequest;

                    /**
                     * Decodes a ListZonesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListZonesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.ListZonesRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.ListZonesRequest;

                    /**
                     * Creates a plain object from a ListZonesRequest message. Also converts values to other types if specified.
                     * @param message ListZonesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.ListZonesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListZonesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListZonesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListZonesResponse. */
                interface IListZonesResponse {

                    /** ListZonesResponse zones */
                    zones?: (google.cloud.edgenetwork.v1.IZone[]|null);

                    /** ListZonesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListZonesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListZonesResponse. */
                class ListZonesResponse implements IListZonesResponse {

                    /**
                     * Constructs a new ListZonesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IListZonesResponse);

                    /** ListZonesResponse zones. */
                    public zones: google.cloud.edgenetwork.v1.IZone[];

                    /** ListZonesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListZonesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListZonesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListZonesResponse instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IListZonesResponse): google.cloud.edgenetwork.v1.ListZonesResponse;

                    /**
                     * Encodes the specified ListZonesResponse message. Does not implicitly {@link google.cloud.edgenetwork.v1.ListZonesResponse.verify|verify} messages.
                     * @param message ListZonesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IListZonesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListZonesResponse message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.ListZonesResponse.verify|verify} messages.
                     * @param message ListZonesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IListZonesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListZonesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListZonesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.ListZonesResponse;

                    /**
                     * Decodes a ListZonesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListZonesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.ListZonesResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.ListZonesResponse;

                    /**
                     * Creates a plain object from a ListZonesResponse message. Also converts values to other types if specified.
                     * @param message ListZonesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.ListZonesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListZonesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListZonesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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
                    constructor(properties?: google.cloud.edgenetwork.v1.IGetZoneRequest);

                    /** GetZoneRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetZoneRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetZoneRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IGetZoneRequest): google.cloud.edgenetwork.v1.GetZoneRequest;

                    /**
                     * Encodes the specified GetZoneRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.GetZoneRequest.verify|verify} messages.
                     * @param message GetZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IGetZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetZoneRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.GetZoneRequest.verify|verify} messages.
                     * @param message GetZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IGetZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetZoneRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.GetZoneRequest;

                    /**
                     * Decodes a GetZoneRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.GetZoneRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.GetZoneRequest;

                    /**
                     * Creates a plain object from a GetZoneRequest message. Also converts values to other types if specified.
                     * @param message GetZoneRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.GetZoneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetZoneRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetZoneRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNetworksRequest. */
                interface IListNetworksRequest {

                    /** ListNetworksRequest parent */
                    parent?: (string|null);

                    /** ListNetworksRequest pageSize */
                    pageSize?: (number|null);

                    /** ListNetworksRequest pageToken */
                    pageToken?: (string|null);

                    /** ListNetworksRequest filter */
                    filter?: (string|null);

                    /** ListNetworksRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListNetworksRequest. */
                class ListNetworksRequest implements IListNetworksRequest {

                    /**
                     * Constructs a new ListNetworksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IListNetworksRequest);

                    /** ListNetworksRequest parent. */
                    public parent: string;

                    /** ListNetworksRequest pageSize. */
                    public pageSize: number;

                    /** ListNetworksRequest pageToken. */
                    public pageToken: string;

                    /** ListNetworksRequest filter. */
                    public filter: string;

                    /** ListNetworksRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListNetworksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNetworksRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IListNetworksRequest): google.cloud.edgenetwork.v1.ListNetworksRequest;

                    /**
                     * Encodes the specified ListNetworksRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.ListNetworksRequest.verify|verify} messages.
                     * @param message ListNetworksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IListNetworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNetworksRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.ListNetworksRequest.verify|verify} messages.
                     * @param message ListNetworksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IListNetworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNetworksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNetworksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.ListNetworksRequest;

                    /**
                     * Decodes a ListNetworksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNetworksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.ListNetworksRequest;

                    /**
                     * Verifies a ListNetworksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNetworksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNetworksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.ListNetworksRequest;

                    /**
                     * Creates a plain object from a ListNetworksRequest message. Also converts values to other types if specified.
                     * @param message ListNetworksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.ListNetworksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNetworksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNetworksRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNetworksResponse. */
                interface IListNetworksResponse {

                    /** ListNetworksResponse networks */
                    networks?: (google.cloud.edgenetwork.v1.INetwork[]|null);

                    /** ListNetworksResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListNetworksResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListNetworksResponse. */
                class ListNetworksResponse implements IListNetworksResponse {

                    /**
                     * Constructs a new ListNetworksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IListNetworksResponse);

                    /** ListNetworksResponse networks. */
                    public networks: google.cloud.edgenetwork.v1.INetwork[];

                    /** ListNetworksResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListNetworksResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListNetworksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNetworksResponse instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IListNetworksResponse): google.cloud.edgenetwork.v1.ListNetworksResponse;

                    /**
                     * Encodes the specified ListNetworksResponse message. Does not implicitly {@link google.cloud.edgenetwork.v1.ListNetworksResponse.verify|verify} messages.
                     * @param message ListNetworksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IListNetworksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNetworksResponse message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.ListNetworksResponse.verify|verify} messages.
                     * @param message ListNetworksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IListNetworksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNetworksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNetworksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.ListNetworksResponse;

                    /**
                     * Decodes a ListNetworksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNetworksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.ListNetworksResponse;

                    /**
                     * Verifies a ListNetworksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNetworksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNetworksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.ListNetworksResponse;

                    /**
                     * Creates a plain object from a ListNetworksResponse message. Also converts values to other types if specified.
                     * @param message ListNetworksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.ListNetworksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNetworksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNetworksResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetNetworkRequest. */
                interface IGetNetworkRequest {

                    /** GetNetworkRequest name */
                    name?: (string|null);
                }

                /** Represents a GetNetworkRequest. */
                class GetNetworkRequest implements IGetNetworkRequest {

                    /**
                     * Constructs a new GetNetworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IGetNetworkRequest);

                    /** GetNetworkRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetNetworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetNetworkRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IGetNetworkRequest): google.cloud.edgenetwork.v1.GetNetworkRequest;

                    /**
                     * Encodes the specified GetNetworkRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.GetNetworkRequest.verify|verify} messages.
                     * @param message GetNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IGetNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetNetworkRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.GetNetworkRequest.verify|verify} messages.
                     * @param message GetNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IGetNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetNetworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.GetNetworkRequest;

                    /**
                     * Decodes a GetNetworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.GetNetworkRequest;

                    /**
                     * Verifies a GetNetworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetNetworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetNetworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.GetNetworkRequest;

                    /**
                     * Creates a plain object from a GetNetworkRequest message. Also converts values to other types if specified.
                     * @param message GetNetworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.GetNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetNetworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetNetworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateNetworkRequest. */
                interface ICreateNetworkRequest {

                    /** CreateNetworkRequest parent */
                    parent?: (string|null);

                    /** CreateNetworkRequest networkId */
                    networkId?: (string|null);

                    /** CreateNetworkRequest network */
                    network?: (google.cloud.edgenetwork.v1.INetwork|null);

                    /** CreateNetworkRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateNetworkRequest. */
                class CreateNetworkRequest implements ICreateNetworkRequest {

                    /**
                     * Constructs a new CreateNetworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.ICreateNetworkRequest);

                    /** CreateNetworkRequest parent. */
                    public parent: string;

                    /** CreateNetworkRequest networkId. */
                    public networkId: string;

                    /** CreateNetworkRequest network. */
                    public network?: (google.cloud.edgenetwork.v1.INetwork|null);

                    /** CreateNetworkRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateNetworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateNetworkRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.ICreateNetworkRequest): google.cloud.edgenetwork.v1.CreateNetworkRequest;

                    /**
                     * Encodes the specified CreateNetworkRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.CreateNetworkRequest.verify|verify} messages.
                     * @param message CreateNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.ICreateNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateNetworkRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.CreateNetworkRequest.verify|verify} messages.
                     * @param message CreateNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.ICreateNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateNetworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.CreateNetworkRequest;

                    /**
                     * Decodes a CreateNetworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.CreateNetworkRequest;

                    /**
                     * Verifies a CreateNetworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateNetworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateNetworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.CreateNetworkRequest;

                    /**
                     * Creates a plain object from a CreateNetworkRequest message. Also converts values to other types if specified.
                     * @param message CreateNetworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.CreateNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateNetworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateNetworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteNetworkRequest. */
                interface IDeleteNetworkRequest {

                    /** DeleteNetworkRequest name */
                    name?: (string|null);

                    /** DeleteNetworkRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteNetworkRequest. */
                class DeleteNetworkRequest implements IDeleteNetworkRequest {

                    /**
                     * Constructs a new DeleteNetworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IDeleteNetworkRequest);

                    /** DeleteNetworkRequest name. */
                    public name: string;

                    /** DeleteNetworkRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteNetworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteNetworkRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IDeleteNetworkRequest): google.cloud.edgenetwork.v1.DeleteNetworkRequest;

                    /**
                     * Encodes the specified DeleteNetworkRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.DeleteNetworkRequest.verify|verify} messages.
                     * @param message DeleteNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IDeleteNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteNetworkRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.DeleteNetworkRequest.verify|verify} messages.
                     * @param message DeleteNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IDeleteNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteNetworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.DeleteNetworkRequest;

                    /**
                     * Decodes a DeleteNetworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.DeleteNetworkRequest;

                    /**
                     * Verifies a DeleteNetworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteNetworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteNetworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.DeleteNetworkRequest;

                    /**
                     * Creates a plain object from a DeleteNetworkRequest message. Also converts values to other types if specified.
                     * @param message DeleteNetworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.DeleteNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteNetworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteNetworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSubnetsRequest. */
                interface IListSubnetsRequest {

                    /** ListSubnetsRequest parent */
                    parent?: (string|null);

                    /** ListSubnetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSubnetsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSubnetsRequest filter */
                    filter?: (string|null);

                    /** ListSubnetsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListSubnetsRequest. */
                class ListSubnetsRequest implements IListSubnetsRequest {

                    /**
                     * Constructs a new ListSubnetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IListSubnetsRequest);

                    /** ListSubnetsRequest parent. */
                    public parent: string;

                    /** ListSubnetsRequest pageSize. */
                    public pageSize: number;

                    /** ListSubnetsRequest pageToken. */
                    public pageToken: string;

                    /** ListSubnetsRequest filter. */
                    public filter: string;

                    /** ListSubnetsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListSubnetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSubnetsRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IListSubnetsRequest): google.cloud.edgenetwork.v1.ListSubnetsRequest;

                    /**
                     * Encodes the specified ListSubnetsRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.ListSubnetsRequest.verify|verify} messages.
                     * @param message ListSubnetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IListSubnetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSubnetsRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.ListSubnetsRequest.verify|verify} messages.
                     * @param message ListSubnetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IListSubnetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSubnetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSubnetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.ListSubnetsRequest;

                    /**
                     * Decodes a ListSubnetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSubnetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.ListSubnetsRequest;

                    /**
                     * Verifies a ListSubnetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSubnetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSubnetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.ListSubnetsRequest;

                    /**
                     * Creates a plain object from a ListSubnetsRequest message. Also converts values to other types if specified.
                     * @param message ListSubnetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.ListSubnetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSubnetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSubnetsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSubnetsResponse. */
                interface IListSubnetsResponse {

                    /** ListSubnetsResponse subnets */
                    subnets?: (google.cloud.edgenetwork.v1.ISubnet[]|null);

                    /** ListSubnetsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListSubnetsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListSubnetsResponse. */
                class ListSubnetsResponse implements IListSubnetsResponse {

                    /**
                     * Constructs a new ListSubnetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IListSubnetsResponse);

                    /** ListSubnetsResponse subnets. */
                    public subnets: google.cloud.edgenetwork.v1.ISubnet[];

                    /** ListSubnetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListSubnetsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListSubnetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSubnetsResponse instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IListSubnetsResponse): google.cloud.edgenetwork.v1.ListSubnetsResponse;

                    /**
                     * Encodes the specified ListSubnetsResponse message. Does not implicitly {@link google.cloud.edgenetwork.v1.ListSubnetsResponse.verify|verify} messages.
                     * @param message ListSubnetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IListSubnetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSubnetsResponse message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.ListSubnetsResponse.verify|verify} messages.
                     * @param message ListSubnetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IListSubnetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSubnetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSubnetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.ListSubnetsResponse;

                    /**
                     * Decodes a ListSubnetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSubnetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.ListSubnetsResponse;

                    /**
                     * Verifies a ListSubnetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSubnetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSubnetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.ListSubnetsResponse;

                    /**
                     * Creates a plain object from a ListSubnetsResponse message. Also converts values to other types if specified.
                     * @param message ListSubnetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.ListSubnetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSubnetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSubnetsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSubnetRequest. */
                interface IGetSubnetRequest {

                    /** GetSubnetRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSubnetRequest. */
                class GetSubnetRequest implements IGetSubnetRequest {

                    /**
                     * Constructs a new GetSubnetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IGetSubnetRequest);

                    /** GetSubnetRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSubnetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSubnetRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IGetSubnetRequest): google.cloud.edgenetwork.v1.GetSubnetRequest;

                    /**
                     * Encodes the specified GetSubnetRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.GetSubnetRequest.verify|verify} messages.
                     * @param message GetSubnetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IGetSubnetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSubnetRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.GetSubnetRequest.verify|verify} messages.
                     * @param message GetSubnetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IGetSubnetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSubnetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSubnetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.GetSubnetRequest;

                    /**
                     * Decodes a GetSubnetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSubnetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.GetSubnetRequest;

                    /**
                     * Verifies a GetSubnetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSubnetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSubnetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.GetSubnetRequest;

                    /**
                     * Creates a plain object from a GetSubnetRequest message. Also converts values to other types if specified.
                     * @param message GetSubnetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.GetSubnetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSubnetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSubnetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateSubnetRequest. */
                interface ICreateSubnetRequest {

                    /** CreateSubnetRequest parent */
                    parent?: (string|null);

                    /** CreateSubnetRequest subnetId */
                    subnetId?: (string|null);

                    /** CreateSubnetRequest subnet */
                    subnet?: (google.cloud.edgenetwork.v1.ISubnet|null);

                    /** CreateSubnetRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateSubnetRequest. */
                class CreateSubnetRequest implements ICreateSubnetRequest {

                    /**
                     * Constructs a new CreateSubnetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.ICreateSubnetRequest);

                    /** CreateSubnetRequest parent. */
                    public parent: string;

                    /** CreateSubnetRequest subnetId. */
                    public subnetId: string;

                    /** CreateSubnetRequest subnet. */
                    public subnet?: (google.cloud.edgenetwork.v1.ISubnet|null);

                    /** CreateSubnetRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateSubnetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSubnetRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.ICreateSubnetRequest): google.cloud.edgenetwork.v1.CreateSubnetRequest;

                    /**
                     * Encodes the specified CreateSubnetRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.CreateSubnetRequest.verify|verify} messages.
                     * @param message CreateSubnetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.ICreateSubnetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSubnetRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.CreateSubnetRequest.verify|verify} messages.
                     * @param message CreateSubnetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.ICreateSubnetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSubnetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSubnetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.CreateSubnetRequest;

                    /**
                     * Decodes a CreateSubnetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSubnetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.CreateSubnetRequest;

                    /**
                     * Verifies a CreateSubnetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSubnetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSubnetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.CreateSubnetRequest;

                    /**
                     * Creates a plain object from a CreateSubnetRequest message. Also converts values to other types if specified.
                     * @param message CreateSubnetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.CreateSubnetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSubnetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateSubnetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateSubnetRequest. */
                interface IUpdateSubnetRequest {

                    /** UpdateSubnetRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSubnetRequest subnet */
                    subnet?: (google.cloud.edgenetwork.v1.ISubnet|null);

                    /** UpdateSubnetRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateSubnetRequest. */
                class UpdateSubnetRequest implements IUpdateSubnetRequest {

                    /**
                     * Constructs a new UpdateSubnetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IUpdateSubnetRequest);

                    /** UpdateSubnetRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSubnetRequest subnet. */
                    public subnet?: (google.cloud.edgenetwork.v1.ISubnet|null);

                    /** UpdateSubnetRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateSubnetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSubnetRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IUpdateSubnetRequest): google.cloud.edgenetwork.v1.UpdateSubnetRequest;

                    /**
                     * Encodes the specified UpdateSubnetRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.UpdateSubnetRequest.verify|verify} messages.
                     * @param message UpdateSubnetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IUpdateSubnetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSubnetRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.UpdateSubnetRequest.verify|verify} messages.
                     * @param message UpdateSubnetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IUpdateSubnetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSubnetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSubnetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.UpdateSubnetRequest;

                    /**
                     * Decodes an UpdateSubnetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSubnetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.UpdateSubnetRequest;

                    /**
                     * Verifies an UpdateSubnetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSubnetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSubnetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.UpdateSubnetRequest;

                    /**
                     * Creates a plain object from an UpdateSubnetRequest message. Also converts values to other types if specified.
                     * @param message UpdateSubnetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.UpdateSubnetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSubnetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateSubnetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteSubnetRequest. */
                interface IDeleteSubnetRequest {

                    /** DeleteSubnetRequest name */
                    name?: (string|null);

                    /** DeleteSubnetRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteSubnetRequest. */
                class DeleteSubnetRequest implements IDeleteSubnetRequest {

                    /**
                     * Constructs a new DeleteSubnetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IDeleteSubnetRequest);

                    /** DeleteSubnetRequest name. */
                    public name: string;

                    /** DeleteSubnetRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteSubnetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteSubnetRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IDeleteSubnetRequest): google.cloud.edgenetwork.v1.DeleteSubnetRequest;

                    /**
                     * Encodes the specified DeleteSubnetRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.DeleteSubnetRequest.verify|verify} messages.
                     * @param message DeleteSubnetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IDeleteSubnetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteSubnetRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.DeleteSubnetRequest.verify|verify} messages.
                     * @param message DeleteSubnetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IDeleteSubnetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteSubnetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteSubnetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.DeleteSubnetRequest;

                    /**
                     * Decodes a DeleteSubnetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteSubnetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.DeleteSubnetRequest;

                    /**
                     * Verifies a DeleteSubnetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteSubnetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteSubnetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.DeleteSubnetRequest;

                    /**
                     * Creates a plain object from a DeleteSubnetRequest message. Also converts values to other types if specified.
                     * @param message DeleteSubnetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.DeleteSubnetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteSubnetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteSubnetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInterconnectsRequest. */
                interface IListInterconnectsRequest {

                    /** ListInterconnectsRequest parent */
                    parent?: (string|null);

                    /** ListInterconnectsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInterconnectsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListInterconnectsRequest filter */
                    filter?: (string|null);

                    /** ListInterconnectsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListInterconnectsRequest. */
                class ListInterconnectsRequest implements IListInterconnectsRequest {

                    /**
                     * Constructs a new ListInterconnectsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IListInterconnectsRequest);

                    /** ListInterconnectsRequest parent. */
                    public parent: string;

                    /** ListInterconnectsRequest pageSize. */
                    public pageSize: number;

                    /** ListInterconnectsRequest pageToken. */
                    public pageToken: string;

                    /** ListInterconnectsRequest filter. */
                    public filter: string;

                    /** ListInterconnectsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListInterconnectsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInterconnectsRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IListInterconnectsRequest): google.cloud.edgenetwork.v1.ListInterconnectsRequest;

                    /**
                     * Encodes the specified ListInterconnectsRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.ListInterconnectsRequest.verify|verify} messages.
                     * @param message ListInterconnectsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IListInterconnectsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInterconnectsRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.ListInterconnectsRequest.verify|verify} messages.
                     * @param message ListInterconnectsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IListInterconnectsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInterconnectsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInterconnectsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.ListInterconnectsRequest;

                    /**
                     * Decodes a ListInterconnectsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInterconnectsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.ListInterconnectsRequest;

                    /**
                     * Verifies a ListInterconnectsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInterconnectsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInterconnectsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.ListInterconnectsRequest;

                    /**
                     * Creates a plain object from a ListInterconnectsRequest message. Also converts values to other types if specified.
                     * @param message ListInterconnectsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.ListInterconnectsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInterconnectsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInterconnectsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInterconnectsResponse. */
                interface IListInterconnectsResponse {

                    /** ListInterconnectsResponse interconnects */
                    interconnects?: (google.cloud.edgenetwork.v1.IInterconnect[]|null);

                    /** ListInterconnectsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListInterconnectsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListInterconnectsResponse. */
                class ListInterconnectsResponse implements IListInterconnectsResponse {

                    /**
                     * Constructs a new ListInterconnectsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IListInterconnectsResponse);

                    /** ListInterconnectsResponse interconnects. */
                    public interconnects: google.cloud.edgenetwork.v1.IInterconnect[];

                    /** ListInterconnectsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListInterconnectsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListInterconnectsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInterconnectsResponse instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IListInterconnectsResponse): google.cloud.edgenetwork.v1.ListInterconnectsResponse;

                    /**
                     * Encodes the specified ListInterconnectsResponse message. Does not implicitly {@link google.cloud.edgenetwork.v1.ListInterconnectsResponse.verify|verify} messages.
                     * @param message ListInterconnectsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IListInterconnectsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInterconnectsResponse message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.ListInterconnectsResponse.verify|verify} messages.
                     * @param message ListInterconnectsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IListInterconnectsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInterconnectsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInterconnectsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.ListInterconnectsResponse;

                    /**
                     * Decodes a ListInterconnectsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInterconnectsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.ListInterconnectsResponse;

                    /**
                     * Verifies a ListInterconnectsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInterconnectsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInterconnectsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.ListInterconnectsResponse;

                    /**
                     * Creates a plain object from a ListInterconnectsResponse message. Also converts values to other types if specified.
                     * @param message ListInterconnectsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.ListInterconnectsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInterconnectsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInterconnectsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetInterconnectRequest. */
                interface IGetInterconnectRequest {

                    /** GetInterconnectRequest name */
                    name?: (string|null);
                }

                /** Represents a GetInterconnectRequest. */
                class GetInterconnectRequest implements IGetInterconnectRequest {

                    /**
                     * Constructs a new GetInterconnectRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IGetInterconnectRequest);

                    /** GetInterconnectRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInterconnectRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInterconnectRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IGetInterconnectRequest): google.cloud.edgenetwork.v1.GetInterconnectRequest;

                    /**
                     * Encodes the specified GetInterconnectRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.GetInterconnectRequest.verify|verify} messages.
                     * @param message GetInterconnectRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IGetInterconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInterconnectRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.GetInterconnectRequest.verify|verify} messages.
                     * @param message GetInterconnectRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IGetInterconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInterconnectRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInterconnectRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.GetInterconnectRequest;

                    /**
                     * Decodes a GetInterconnectRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInterconnectRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.GetInterconnectRequest;

                    /**
                     * Verifies a GetInterconnectRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInterconnectRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInterconnectRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.GetInterconnectRequest;

                    /**
                     * Creates a plain object from a GetInterconnectRequest message. Also converts values to other types if specified.
                     * @param message GetInterconnectRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.GetInterconnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInterconnectRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetInterconnectRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInterconnectAttachmentsRequest. */
                interface IListInterconnectAttachmentsRequest {

                    /** ListInterconnectAttachmentsRequest parent */
                    parent?: (string|null);

                    /** ListInterconnectAttachmentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInterconnectAttachmentsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListInterconnectAttachmentsRequest filter */
                    filter?: (string|null);

                    /** ListInterconnectAttachmentsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListInterconnectAttachmentsRequest. */
                class ListInterconnectAttachmentsRequest implements IListInterconnectAttachmentsRequest {

                    /**
                     * Constructs a new ListInterconnectAttachmentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IListInterconnectAttachmentsRequest);

                    /** ListInterconnectAttachmentsRequest parent. */
                    public parent: string;

                    /** ListInterconnectAttachmentsRequest pageSize. */
                    public pageSize: number;

                    /** ListInterconnectAttachmentsRequest pageToken. */
                    public pageToken: string;

                    /** ListInterconnectAttachmentsRequest filter. */
                    public filter: string;

                    /** ListInterconnectAttachmentsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListInterconnectAttachmentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInterconnectAttachmentsRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IListInterconnectAttachmentsRequest): google.cloud.edgenetwork.v1.ListInterconnectAttachmentsRequest;

                    /**
                     * Encodes the specified ListInterconnectAttachmentsRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.ListInterconnectAttachmentsRequest.verify|verify} messages.
                     * @param message ListInterconnectAttachmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IListInterconnectAttachmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInterconnectAttachmentsRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.ListInterconnectAttachmentsRequest.verify|verify} messages.
                     * @param message ListInterconnectAttachmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IListInterconnectAttachmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInterconnectAttachmentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInterconnectAttachmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.ListInterconnectAttachmentsRequest;

                    /**
                     * Decodes a ListInterconnectAttachmentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInterconnectAttachmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.ListInterconnectAttachmentsRequest;

                    /**
                     * Verifies a ListInterconnectAttachmentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInterconnectAttachmentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInterconnectAttachmentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.ListInterconnectAttachmentsRequest;

                    /**
                     * Creates a plain object from a ListInterconnectAttachmentsRequest message. Also converts values to other types if specified.
                     * @param message ListInterconnectAttachmentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.ListInterconnectAttachmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInterconnectAttachmentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInterconnectAttachmentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInterconnectAttachmentsResponse. */
                interface IListInterconnectAttachmentsResponse {

                    /** ListInterconnectAttachmentsResponse interconnectAttachments */
                    interconnectAttachments?: (google.cloud.edgenetwork.v1.IInterconnectAttachment[]|null);

                    /** ListInterconnectAttachmentsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListInterconnectAttachmentsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListInterconnectAttachmentsResponse. */
                class ListInterconnectAttachmentsResponse implements IListInterconnectAttachmentsResponse {

                    /**
                     * Constructs a new ListInterconnectAttachmentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IListInterconnectAttachmentsResponse);

                    /** ListInterconnectAttachmentsResponse interconnectAttachments. */
                    public interconnectAttachments: google.cloud.edgenetwork.v1.IInterconnectAttachment[];

                    /** ListInterconnectAttachmentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListInterconnectAttachmentsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListInterconnectAttachmentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInterconnectAttachmentsResponse instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IListInterconnectAttachmentsResponse): google.cloud.edgenetwork.v1.ListInterconnectAttachmentsResponse;

                    /**
                     * Encodes the specified ListInterconnectAttachmentsResponse message. Does not implicitly {@link google.cloud.edgenetwork.v1.ListInterconnectAttachmentsResponse.verify|verify} messages.
                     * @param message ListInterconnectAttachmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IListInterconnectAttachmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInterconnectAttachmentsResponse message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.ListInterconnectAttachmentsResponse.verify|verify} messages.
                     * @param message ListInterconnectAttachmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IListInterconnectAttachmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInterconnectAttachmentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInterconnectAttachmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.ListInterconnectAttachmentsResponse;

                    /**
                     * Decodes a ListInterconnectAttachmentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInterconnectAttachmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.ListInterconnectAttachmentsResponse;

                    /**
                     * Verifies a ListInterconnectAttachmentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInterconnectAttachmentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInterconnectAttachmentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.ListInterconnectAttachmentsResponse;

                    /**
                     * Creates a plain object from a ListInterconnectAttachmentsResponse message. Also converts values to other types if specified.
                     * @param message ListInterconnectAttachmentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.ListInterconnectAttachmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInterconnectAttachmentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInterconnectAttachmentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetInterconnectAttachmentRequest. */
                interface IGetInterconnectAttachmentRequest {

                    /** GetInterconnectAttachmentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetInterconnectAttachmentRequest. */
                class GetInterconnectAttachmentRequest implements IGetInterconnectAttachmentRequest {

                    /**
                     * Constructs a new GetInterconnectAttachmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IGetInterconnectAttachmentRequest);

                    /** GetInterconnectAttachmentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInterconnectAttachmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInterconnectAttachmentRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IGetInterconnectAttachmentRequest): google.cloud.edgenetwork.v1.GetInterconnectAttachmentRequest;

                    /**
                     * Encodes the specified GetInterconnectAttachmentRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.GetInterconnectAttachmentRequest.verify|verify} messages.
                     * @param message GetInterconnectAttachmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IGetInterconnectAttachmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInterconnectAttachmentRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.GetInterconnectAttachmentRequest.verify|verify} messages.
                     * @param message GetInterconnectAttachmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IGetInterconnectAttachmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInterconnectAttachmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInterconnectAttachmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.GetInterconnectAttachmentRequest;

                    /**
                     * Decodes a GetInterconnectAttachmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInterconnectAttachmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.GetInterconnectAttachmentRequest;

                    /**
                     * Verifies a GetInterconnectAttachmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInterconnectAttachmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInterconnectAttachmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.GetInterconnectAttachmentRequest;

                    /**
                     * Creates a plain object from a GetInterconnectAttachmentRequest message. Also converts values to other types if specified.
                     * @param message GetInterconnectAttachmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.GetInterconnectAttachmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInterconnectAttachmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetInterconnectAttachmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateInterconnectAttachmentRequest. */
                interface ICreateInterconnectAttachmentRequest {

                    /** CreateInterconnectAttachmentRequest parent */
                    parent?: (string|null);

                    /** CreateInterconnectAttachmentRequest interconnectAttachmentId */
                    interconnectAttachmentId?: (string|null);

                    /** CreateInterconnectAttachmentRequest interconnectAttachment */
                    interconnectAttachment?: (google.cloud.edgenetwork.v1.IInterconnectAttachment|null);

                    /** CreateInterconnectAttachmentRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateInterconnectAttachmentRequest. */
                class CreateInterconnectAttachmentRequest implements ICreateInterconnectAttachmentRequest {

                    /**
                     * Constructs a new CreateInterconnectAttachmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.ICreateInterconnectAttachmentRequest);

                    /** CreateInterconnectAttachmentRequest parent. */
                    public parent: string;

                    /** CreateInterconnectAttachmentRequest interconnectAttachmentId. */
                    public interconnectAttachmentId: string;

                    /** CreateInterconnectAttachmentRequest interconnectAttachment. */
                    public interconnectAttachment?: (google.cloud.edgenetwork.v1.IInterconnectAttachment|null);

                    /** CreateInterconnectAttachmentRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateInterconnectAttachmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateInterconnectAttachmentRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.ICreateInterconnectAttachmentRequest): google.cloud.edgenetwork.v1.CreateInterconnectAttachmentRequest;

                    /**
                     * Encodes the specified CreateInterconnectAttachmentRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.CreateInterconnectAttachmentRequest.verify|verify} messages.
                     * @param message CreateInterconnectAttachmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.ICreateInterconnectAttachmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateInterconnectAttachmentRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.CreateInterconnectAttachmentRequest.verify|verify} messages.
                     * @param message CreateInterconnectAttachmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.ICreateInterconnectAttachmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateInterconnectAttachmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateInterconnectAttachmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.CreateInterconnectAttachmentRequest;

                    /**
                     * Decodes a CreateInterconnectAttachmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateInterconnectAttachmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.CreateInterconnectAttachmentRequest;

                    /**
                     * Verifies a CreateInterconnectAttachmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateInterconnectAttachmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateInterconnectAttachmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.CreateInterconnectAttachmentRequest;

                    /**
                     * Creates a plain object from a CreateInterconnectAttachmentRequest message. Also converts values to other types if specified.
                     * @param message CreateInterconnectAttachmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.CreateInterconnectAttachmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateInterconnectAttachmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateInterconnectAttachmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteInterconnectAttachmentRequest. */
                interface IDeleteInterconnectAttachmentRequest {

                    /** DeleteInterconnectAttachmentRequest name */
                    name?: (string|null);

                    /** DeleteInterconnectAttachmentRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteInterconnectAttachmentRequest. */
                class DeleteInterconnectAttachmentRequest implements IDeleteInterconnectAttachmentRequest {

                    /**
                     * Constructs a new DeleteInterconnectAttachmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IDeleteInterconnectAttachmentRequest);

                    /** DeleteInterconnectAttachmentRequest name. */
                    public name: string;

                    /** DeleteInterconnectAttachmentRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteInterconnectAttachmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteInterconnectAttachmentRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IDeleteInterconnectAttachmentRequest): google.cloud.edgenetwork.v1.DeleteInterconnectAttachmentRequest;

                    /**
                     * Encodes the specified DeleteInterconnectAttachmentRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.DeleteInterconnectAttachmentRequest.verify|verify} messages.
                     * @param message DeleteInterconnectAttachmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IDeleteInterconnectAttachmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteInterconnectAttachmentRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.DeleteInterconnectAttachmentRequest.verify|verify} messages.
                     * @param message DeleteInterconnectAttachmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IDeleteInterconnectAttachmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteInterconnectAttachmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteInterconnectAttachmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.DeleteInterconnectAttachmentRequest;

                    /**
                     * Decodes a DeleteInterconnectAttachmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteInterconnectAttachmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.DeleteInterconnectAttachmentRequest;

                    /**
                     * Verifies a DeleteInterconnectAttachmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteInterconnectAttachmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteInterconnectAttachmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.DeleteInterconnectAttachmentRequest;

                    /**
                     * Creates a plain object from a DeleteInterconnectAttachmentRequest message. Also converts values to other types if specified.
                     * @param message DeleteInterconnectAttachmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.DeleteInterconnectAttachmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteInterconnectAttachmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteInterconnectAttachmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRoutersRequest. */
                interface IListRoutersRequest {

                    /** ListRoutersRequest parent */
                    parent?: (string|null);

                    /** ListRoutersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRoutersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRoutersRequest filter */
                    filter?: (string|null);

                    /** ListRoutersRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListRoutersRequest. */
                class ListRoutersRequest implements IListRoutersRequest {

                    /**
                     * Constructs a new ListRoutersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IListRoutersRequest);

                    /** ListRoutersRequest parent. */
                    public parent: string;

                    /** ListRoutersRequest pageSize. */
                    public pageSize: number;

                    /** ListRoutersRequest pageToken. */
                    public pageToken: string;

                    /** ListRoutersRequest filter. */
                    public filter: string;

                    /** ListRoutersRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListRoutersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRoutersRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IListRoutersRequest): google.cloud.edgenetwork.v1.ListRoutersRequest;

                    /**
                     * Encodes the specified ListRoutersRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.ListRoutersRequest.verify|verify} messages.
                     * @param message ListRoutersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IListRoutersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRoutersRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.ListRoutersRequest.verify|verify} messages.
                     * @param message ListRoutersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IListRoutersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRoutersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRoutersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.ListRoutersRequest;

                    /**
                     * Decodes a ListRoutersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRoutersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.ListRoutersRequest;

                    /**
                     * Verifies a ListRoutersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRoutersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRoutersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.ListRoutersRequest;

                    /**
                     * Creates a plain object from a ListRoutersRequest message. Also converts values to other types if specified.
                     * @param message ListRoutersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.ListRoutersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRoutersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRoutersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRoutersResponse. */
                interface IListRoutersResponse {

                    /** ListRoutersResponse routers */
                    routers?: (google.cloud.edgenetwork.v1.IRouter[]|null);

                    /** ListRoutersResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListRoutersResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListRoutersResponse. */
                class ListRoutersResponse implements IListRoutersResponse {

                    /**
                     * Constructs a new ListRoutersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IListRoutersResponse);

                    /** ListRoutersResponse routers. */
                    public routers: google.cloud.edgenetwork.v1.IRouter[];

                    /** ListRoutersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListRoutersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListRoutersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRoutersResponse instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IListRoutersResponse): google.cloud.edgenetwork.v1.ListRoutersResponse;

                    /**
                     * Encodes the specified ListRoutersResponse message. Does not implicitly {@link google.cloud.edgenetwork.v1.ListRoutersResponse.verify|verify} messages.
                     * @param message ListRoutersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IListRoutersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRoutersResponse message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.ListRoutersResponse.verify|verify} messages.
                     * @param message ListRoutersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IListRoutersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRoutersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRoutersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.ListRoutersResponse;

                    /**
                     * Decodes a ListRoutersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRoutersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.ListRoutersResponse;

                    /**
                     * Verifies a ListRoutersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRoutersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRoutersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.ListRoutersResponse;

                    /**
                     * Creates a plain object from a ListRoutersResponse message. Also converts values to other types if specified.
                     * @param message ListRoutersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.ListRoutersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRoutersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRoutersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRouterRequest. */
                interface IGetRouterRequest {

                    /** GetRouterRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRouterRequest. */
                class GetRouterRequest implements IGetRouterRequest {

                    /**
                     * Constructs a new GetRouterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IGetRouterRequest);

                    /** GetRouterRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRouterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRouterRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IGetRouterRequest): google.cloud.edgenetwork.v1.GetRouterRequest;

                    /**
                     * Encodes the specified GetRouterRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.GetRouterRequest.verify|verify} messages.
                     * @param message GetRouterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IGetRouterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRouterRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.GetRouterRequest.verify|verify} messages.
                     * @param message GetRouterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IGetRouterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRouterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRouterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.GetRouterRequest;

                    /**
                     * Decodes a GetRouterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRouterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.GetRouterRequest;

                    /**
                     * Verifies a GetRouterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRouterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRouterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.GetRouterRequest;

                    /**
                     * Creates a plain object from a GetRouterRequest message. Also converts values to other types if specified.
                     * @param message GetRouterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.GetRouterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRouterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRouterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateRouterRequest. */
                interface ICreateRouterRequest {

                    /** CreateRouterRequest parent */
                    parent?: (string|null);

                    /** CreateRouterRequest routerId */
                    routerId?: (string|null);

                    /** CreateRouterRequest router */
                    router?: (google.cloud.edgenetwork.v1.IRouter|null);

                    /** CreateRouterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateRouterRequest. */
                class CreateRouterRequest implements ICreateRouterRequest {

                    /**
                     * Constructs a new CreateRouterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.ICreateRouterRequest);

                    /** CreateRouterRequest parent. */
                    public parent: string;

                    /** CreateRouterRequest routerId. */
                    public routerId: string;

                    /** CreateRouterRequest router. */
                    public router?: (google.cloud.edgenetwork.v1.IRouter|null);

                    /** CreateRouterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateRouterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRouterRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.ICreateRouterRequest): google.cloud.edgenetwork.v1.CreateRouterRequest;

                    /**
                     * Encodes the specified CreateRouterRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.CreateRouterRequest.verify|verify} messages.
                     * @param message CreateRouterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.ICreateRouterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRouterRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.CreateRouterRequest.verify|verify} messages.
                     * @param message CreateRouterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.ICreateRouterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRouterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRouterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.CreateRouterRequest;

                    /**
                     * Decodes a CreateRouterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRouterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.CreateRouterRequest;

                    /**
                     * Verifies a CreateRouterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRouterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRouterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.CreateRouterRequest;

                    /**
                     * Creates a plain object from a CreateRouterRequest message. Also converts values to other types if specified.
                     * @param message CreateRouterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.CreateRouterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRouterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateRouterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateRouterRequest. */
                interface IUpdateRouterRequest {

                    /** UpdateRouterRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRouterRequest router */
                    router?: (google.cloud.edgenetwork.v1.IRouter|null);

                    /** UpdateRouterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateRouterRequest. */
                class UpdateRouterRequest implements IUpdateRouterRequest {

                    /**
                     * Constructs a new UpdateRouterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IUpdateRouterRequest);

                    /** UpdateRouterRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRouterRequest router. */
                    public router?: (google.cloud.edgenetwork.v1.IRouter|null);

                    /** UpdateRouterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateRouterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRouterRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IUpdateRouterRequest): google.cloud.edgenetwork.v1.UpdateRouterRequest;

                    /**
                     * Encodes the specified UpdateRouterRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.UpdateRouterRequest.verify|verify} messages.
                     * @param message UpdateRouterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IUpdateRouterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRouterRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.UpdateRouterRequest.verify|verify} messages.
                     * @param message UpdateRouterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IUpdateRouterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRouterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRouterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.UpdateRouterRequest;

                    /**
                     * Decodes an UpdateRouterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRouterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.UpdateRouterRequest;

                    /**
                     * Verifies an UpdateRouterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRouterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRouterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.UpdateRouterRequest;

                    /**
                     * Creates a plain object from an UpdateRouterRequest message. Also converts values to other types if specified.
                     * @param message UpdateRouterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.UpdateRouterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRouterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateRouterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteRouterRequest. */
                interface IDeleteRouterRequest {

                    /** DeleteRouterRequest name */
                    name?: (string|null);

                    /** DeleteRouterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteRouterRequest. */
                class DeleteRouterRequest implements IDeleteRouterRequest {

                    /**
                     * Constructs a new DeleteRouterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IDeleteRouterRequest);

                    /** DeleteRouterRequest name. */
                    public name: string;

                    /** DeleteRouterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteRouterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRouterRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IDeleteRouterRequest): google.cloud.edgenetwork.v1.DeleteRouterRequest;

                    /**
                     * Encodes the specified DeleteRouterRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.DeleteRouterRequest.verify|verify} messages.
                     * @param message DeleteRouterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IDeleteRouterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRouterRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.DeleteRouterRequest.verify|verify} messages.
                     * @param message DeleteRouterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IDeleteRouterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRouterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRouterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.DeleteRouterRequest;

                    /**
                     * Decodes a DeleteRouterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRouterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.DeleteRouterRequest;

                    /**
                     * Verifies a DeleteRouterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRouterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRouterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.DeleteRouterRequest;

                    /**
                     * Creates a plain object from a DeleteRouterRequest message. Also converts values to other types if specified.
                     * @param message DeleteRouterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.DeleteRouterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRouterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteRouterRequest
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
                    constructor(properties?: google.cloud.edgenetwork.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.edgenetwork.v1.IOperationMetadata): google.cloud.edgenetwork.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.edgenetwork.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a DiagnoseNetworkRequest. */
                interface IDiagnoseNetworkRequest {

                    /** DiagnoseNetworkRequest name */
                    name?: (string|null);
                }

                /** Represents a DiagnoseNetworkRequest. */
                class DiagnoseNetworkRequest implements IDiagnoseNetworkRequest {

                    /**
                     * Constructs a new DiagnoseNetworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IDiagnoseNetworkRequest);

                    /** DiagnoseNetworkRequest name. */
                    public name: string;

                    /**
                     * Creates a new DiagnoseNetworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiagnoseNetworkRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IDiagnoseNetworkRequest): google.cloud.edgenetwork.v1.DiagnoseNetworkRequest;

                    /**
                     * Encodes the specified DiagnoseNetworkRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseNetworkRequest.verify|verify} messages.
                     * @param message DiagnoseNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IDiagnoseNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiagnoseNetworkRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseNetworkRequest.verify|verify} messages.
                     * @param message DiagnoseNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IDiagnoseNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiagnoseNetworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiagnoseNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.DiagnoseNetworkRequest;

                    /**
                     * Decodes a DiagnoseNetworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiagnoseNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.DiagnoseNetworkRequest;

                    /**
                     * Verifies a DiagnoseNetworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiagnoseNetworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiagnoseNetworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.DiagnoseNetworkRequest;

                    /**
                     * Creates a plain object from a DiagnoseNetworkRequest message. Also converts values to other types if specified.
                     * @param message DiagnoseNetworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.DiagnoseNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiagnoseNetworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DiagnoseNetworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DiagnoseNetworkResponse. */
                interface IDiagnoseNetworkResponse {

                    /** DiagnoseNetworkResponse updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** DiagnoseNetworkResponse result */
                    result?: (google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.INetworkStatus|null);
                }

                /** Represents a DiagnoseNetworkResponse. */
                class DiagnoseNetworkResponse implements IDiagnoseNetworkResponse {

                    /**
                     * Constructs a new DiagnoseNetworkResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IDiagnoseNetworkResponse);

                    /** DiagnoseNetworkResponse updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** DiagnoseNetworkResponse result. */
                    public result?: (google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.INetworkStatus|null);

                    /**
                     * Creates a new DiagnoseNetworkResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiagnoseNetworkResponse instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IDiagnoseNetworkResponse): google.cloud.edgenetwork.v1.DiagnoseNetworkResponse;

                    /**
                     * Encodes the specified DiagnoseNetworkResponse message. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.verify|verify} messages.
                     * @param message DiagnoseNetworkResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IDiagnoseNetworkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiagnoseNetworkResponse message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.verify|verify} messages.
                     * @param message DiagnoseNetworkResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IDiagnoseNetworkResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiagnoseNetworkResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiagnoseNetworkResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.DiagnoseNetworkResponse;

                    /**
                     * Decodes a DiagnoseNetworkResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiagnoseNetworkResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.DiagnoseNetworkResponse;

                    /**
                     * Verifies a DiagnoseNetworkResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiagnoseNetworkResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiagnoseNetworkResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.DiagnoseNetworkResponse;

                    /**
                     * Creates a plain object from a DiagnoseNetworkResponse message. Also converts values to other types if specified.
                     * @param message DiagnoseNetworkResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.DiagnoseNetworkResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiagnoseNetworkResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DiagnoseNetworkResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace DiagnoseNetworkResponse {

                    /** Properties of a NetworkStatus. */
                    interface INetworkStatus {

                        /** NetworkStatus subnetStatus */
                        subnetStatus?: (google.cloud.edgenetwork.v1.ISubnetStatus[]|null);

                        /** NetworkStatus macsecStatusInternalLinks */
                        macsecStatusInternalLinks?: (google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.NetworkStatus.MacsecStatus|keyof typeof google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.NetworkStatus.MacsecStatus|null);
                    }

                    /** Represents a NetworkStatus. */
                    class NetworkStatus implements INetworkStatus {

                        /**
                         * Constructs a new NetworkStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.INetworkStatus);

                        /** NetworkStatus subnetStatus. */
                        public subnetStatus: google.cloud.edgenetwork.v1.ISubnetStatus[];

                        /** NetworkStatus macsecStatusInternalLinks. */
                        public macsecStatusInternalLinks: (google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.NetworkStatus.MacsecStatus|keyof typeof google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.NetworkStatus.MacsecStatus);

                        /**
                         * Creates a new NetworkStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NetworkStatus instance
                         */
                        public static create(properties?: google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.INetworkStatus): google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.NetworkStatus;

                        /**
                         * Encodes the specified NetworkStatus message. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.NetworkStatus.verify|verify} messages.
                         * @param message NetworkStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.INetworkStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NetworkStatus message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.NetworkStatus.verify|verify} messages.
                         * @param message NetworkStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.INetworkStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NetworkStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NetworkStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.NetworkStatus;

                        /**
                         * Decodes a NetworkStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NetworkStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.NetworkStatus;

                        /**
                         * Verifies a NetworkStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NetworkStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NetworkStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.NetworkStatus;

                        /**
                         * Creates a plain object from a NetworkStatus message. Also converts values to other types if specified.
                         * @param message NetworkStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.edgenetwork.v1.DiagnoseNetworkResponse.NetworkStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NetworkStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NetworkStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace NetworkStatus {

                        /** MacsecStatus enum. */
                        enum MacsecStatus {
                            MACSEC_STATUS_UNSPECIFIED = 0,
                            SECURE = 1,
                            UNSECURE = 2
                        }
                    }
                }

                /** Properties of a DiagnoseInterconnectRequest. */
                interface IDiagnoseInterconnectRequest {

                    /** DiagnoseInterconnectRequest name */
                    name?: (string|null);
                }

                /** Represents a DiagnoseInterconnectRequest. */
                class DiagnoseInterconnectRequest implements IDiagnoseInterconnectRequest {

                    /**
                     * Constructs a new DiagnoseInterconnectRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IDiagnoseInterconnectRequest);

                    /** DiagnoseInterconnectRequest name. */
                    public name: string;

                    /**
                     * Creates a new DiagnoseInterconnectRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiagnoseInterconnectRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IDiagnoseInterconnectRequest): google.cloud.edgenetwork.v1.DiagnoseInterconnectRequest;

                    /**
                     * Encodes the specified DiagnoseInterconnectRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseInterconnectRequest.verify|verify} messages.
                     * @param message DiagnoseInterconnectRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IDiagnoseInterconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiagnoseInterconnectRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseInterconnectRequest.verify|verify} messages.
                     * @param message DiagnoseInterconnectRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IDiagnoseInterconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiagnoseInterconnectRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiagnoseInterconnectRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.DiagnoseInterconnectRequest;

                    /**
                     * Decodes a DiagnoseInterconnectRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiagnoseInterconnectRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.DiagnoseInterconnectRequest;

                    /**
                     * Verifies a DiagnoseInterconnectRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiagnoseInterconnectRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiagnoseInterconnectRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.DiagnoseInterconnectRequest;

                    /**
                     * Creates a plain object from a DiagnoseInterconnectRequest message. Also converts values to other types if specified.
                     * @param message DiagnoseInterconnectRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.DiagnoseInterconnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiagnoseInterconnectRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DiagnoseInterconnectRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DiagnoseInterconnectResponse. */
                interface IDiagnoseInterconnectResponse {

                    /** DiagnoseInterconnectResponse updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** DiagnoseInterconnectResponse result */
                    result?: (google.cloud.edgenetwork.v1.IInterconnectDiagnostics|null);
                }

                /** Represents a DiagnoseInterconnectResponse. */
                class DiagnoseInterconnectResponse implements IDiagnoseInterconnectResponse {

                    /**
                     * Constructs a new DiagnoseInterconnectResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IDiagnoseInterconnectResponse);

                    /** DiagnoseInterconnectResponse updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** DiagnoseInterconnectResponse result. */
                    public result?: (google.cloud.edgenetwork.v1.IInterconnectDiagnostics|null);

                    /**
                     * Creates a new DiagnoseInterconnectResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiagnoseInterconnectResponse instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IDiagnoseInterconnectResponse): google.cloud.edgenetwork.v1.DiagnoseInterconnectResponse;

                    /**
                     * Encodes the specified DiagnoseInterconnectResponse message. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseInterconnectResponse.verify|verify} messages.
                     * @param message DiagnoseInterconnectResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IDiagnoseInterconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiagnoseInterconnectResponse message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseInterconnectResponse.verify|verify} messages.
                     * @param message DiagnoseInterconnectResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IDiagnoseInterconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiagnoseInterconnectResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiagnoseInterconnectResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.DiagnoseInterconnectResponse;

                    /**
                     * Decodes a DiagnoseInterconnectResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiagnoseInterconnectResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.DiagnoseInterconnectResponse;

                    /**
                     * Verifies a DiagnoseInterconnectResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiagnoseInterconnectResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiagnoseInterconnectResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.DiagnoseInterconnectResponse;

                    /**
                     * Creates a plain object from a DiagnoseInterconnectResponse message. Also converts values to other types if specified.
                     * @param message DiagnoseInterconnectResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.DiagnoseInterconnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiagnoseInterconnectResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DiagnoseInterconnectResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DiagnoseRouterRequest. */
                interface IDiagnoseRouterRequest {

                    /** DiagnoseRouterRequest name */
                    name?: (string|null);
                }

                /** Represents a DiagnoseRouterRequest. */
                class DiagnoseRouterRequest implements IDiagnoseRouterRequest {

                    /**
                     * Constructs a new DiagnoseRouterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IDiagnoseRouterRequest);

                    /** DiagnoseRouterRequest name. */
                    public name: string;

                    /**
                     * Creates a new DiagnoseRouterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiagnoseRouterRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IDiagnoseRouterRequest): google.cloud.edgenetwork.v1.DiagnoseRouterRequest;

                    /**
                     * Encodes the specified DiagnoseRouterRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseRouterRequest.verify|verify} messages.
                     * @param message DiagnoseRouterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IDiagnoseRouterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiagnoseRouterRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseRouterRequest.verify|verify} messages.
                     * @param message DiagnoseRouterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IDiagnoseRouterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiagnoseRouterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiagnoseRouterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.DiagnoseRouterRequest;

                    /**
                     * Decodes a DiagnoseRouterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiagnoseRouterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.DiagnoseRouterRequest;

                    /**
                     * Verifies a DiagnoseRouterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiagnoseRouterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiagnoseRouterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.DiagnoseRouterRequest;

                    /**
                     * Creates a plain object from a DiagnoseRouterRequest message. Also converts values to other types if specified.
                     * @param message DiagnoseRouterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.DiagnoseRouterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiagnoseRouterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DiagnoseRouterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DiagnoseRouterResponse. */
                interface IDiagnoseRouterResponse {

                    /** DiagnoseRouterResponse updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** DiagnoseRouterResponse result */
                    result?: (google.cloud.edgenetwork.v1.IRouterStatus|null);
                }

                /** Represents a DiagnoseRouterResponse. */
                class DiagnoseRouterResponse implements IDiagnoseRouterResponse {

                    /**
                     * Constructs a new DiagnoseRouterResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IDiagnoseRouterResponse);

                    /** DiagnoseRouterResponse updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** DiagnoseRouterResponse result. */
                    public result?: (google.cloud.edgenetwork.v1.IRouterStatus|null);

                    /**
                     * Creates a new DiagnoseRouterResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DiagnoseRouterResponse instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IDiagnoseRouterResponse): google.cloud.edgenetwork.v1.DiagnoseRouterResponse;

                    /**
                     * Encodes the specified DiagnoseRouterResponse message. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseRouterResponse.verify|verify} messages.
                     * @param message DiagnoseRouterResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IDiagnoseRouterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DiagnoseRouterResponse message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.DiagnoseRouterResponse.verify|verify} messages.
                     * @param message DiagnoseRouterResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IDiagnoseRouterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DiagnoseRouterResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DiagnoseRouterResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.DiagnoseRouterResponse;

                    /**
                     * Decodes a DiagnoseRouterResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DiagnoseRouterResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.DiagnoseRouterResponse;

                    /**
                     * Verifies a DiagnoseRouterResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DiagnoseRouterResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DiagnoseRouterResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.DiagnoseRouterResponse;

                    /**
                     * Creates a plain object from a DiagnoseRouterResponse message. Also converts values to other types if specified.
                     * @param message DiagnoseRouterResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.DiagnoseRouterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DiagnoseRouterResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DiagnoseRouterResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InitializeZoneRequest. */
                interface IInitializeZoneRequest {

                    /** InitializeZoneRequest name */
                    name?: (string|null);
                }

                /** Represents an InitializeZoneRequest. */
                class InitializeZoneRequest implements IInitializeZoneRequest {

                    /**
                     * Constructs a new InitializeZoneRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IInitializeZoneRequest);

                    /** InitializeZoneRequest name. */
                    public name: string;

                    /**
                     * Creates a new InitializeZoneRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InitializeZoneRequest instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IInitializeZoneRequest): google.cloud.edgenetwork.v1.InitializeZoneRequest;

                    /**
                     * Encodes the specified InitializeZoneRequest message. Does not implicitly {@link google.cloud.edgenetwork.v1.InitializeZoneRequest.verify|verify} messages.
                     * @param message InitializeZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IInitializeZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InitializeZoneRequest message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.InitializeZoneRequest.verify|verify} messages.
                     * @param message InitializeZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IInitializeZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InitializeZoneRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InitializeZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.InitializeZoneRequest;

                    /**
                     * Decodes an InitializeZoneRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InitializeZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.InitializeZoneRequest;

                    /**
                     * Verifies an InitializeZoneRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InitializeZoneRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InitializeZoneRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.InitializeZoneRequest;

                    /**
                     * Creates a plain object from an InitializeZoneRequest message. Also converts values to other types if specified.
                     * @param message InitializeZoneRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.InitializeZoneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InitializeZoneRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InitializeZoneRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InitializeZoneResponse. */
                interface IInitializeZoneResponse {
                }

                /** Represents an InitializeZoneResponse. */
                class InitializeZoneResponse implements IInitializeZoneResponse {

                    /**
                     * Constructs a new InitializeZoneResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.edgenetwork.v1.IInitializeZoneResponse);

                    /**
                     * Creates a new InitializeZoneResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InitializeZoneResponse instance
                     */
                    public static create(properties?: google.cloud.edgenetwork.v1.IInitializeZoneResponse): google.cloud.edgenetwork.v1.InitializeZoneResponse;

                    /**
                     * Encodes the specified InitializeZoneResponse message. Does not implicitly {@link google.cloud.edgenetwork.v1.InitializeZoneResponse.verify|verify} messages.
                     * @param message InitializeZoneResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.edgenetwork.v1.IInitializeZoneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InitializeZoneResponse message, length delimited. Does not implicitly {@link google.cloud.edgenetwork.v1.InitializeZoneResponse.verify|verify} messages.
                     * @param message InitializeZoneResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.edgenetwork.v1.IInitializeZoneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InitializeZoneResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InitializeZoneResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.edgenetwork.v1.InitializeZoneResponse;

                    /**
                     * Decodes an InitializeZoneResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InitializeZoneResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.edgenetwork.v1.InitializeZoneResponse;

                    /**
                     * Verifies an InitializeZoneResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InitializeZoneResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InitializeZoneResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.edgenetwork.v1.InitializeZoneResponse;

                    /**
                     * Creates a plain object from an InitializeZoneResponse message. Also converts values to other types if specified.
                     * @param message InitializeZoneResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.edgenetwork.v1.InitializeZoneResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InitializeZoneResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InitializeZoneResponse
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
