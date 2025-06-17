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

        /** Namespace gdchardwaremanagement. */
        namespace gdchardwaremanagement {

            /** Namespace v1alpha. */
            namespace v1alpha {

                /** PowerSupply enum. */
                enum PowerSupply {
                    POWER_SUPPLY_UNSPECIFIED = 0,
                    POWER_SUPPLY_AC = 1,
                    POWER_SUPPLY_DC = 2
                }

                /** Entity enum. */
                enum Entity {
                    ENTITY_UNSPECIFIED = 0,
                    GOOGLE = 1,
                    CUSTOMER = 2,
                    VENDOR = 3
                }

                /** Properties of an Order. */
                interface IOrder {

                    /** Order name */
                    name?: (string|null);

                    /** Order displayName */
                    displayName?: (string|null);

                    /** Order createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Order updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Order labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Order state */
                    state?: (google.cloud.gdchardwaremanagement.v1alpha.Order.State|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Order.State|null);

                    /** Order organizationContact */
                    organizationContact?: (google.cloud.gdchardwaremanagement.v1alpha.IOrganizationContact|null);

                    /** Order targetWorkloads */
                    targetWorkloads?: (string[]|null);

                    /** Order customerMotivation */
                    customerMotivation?: (string|null);

                    /** Order fulfillmentTime */
                    fulfillmentTime?: (google.protobuf.ITimestamp|null);

                    /** Order regionCode */
                    regionCode?: (string|null);

                    /** Order orderFormUri */
                    orderFormUri?: (string|null);

                    /** Order type */
                    type?: (google.cloud.gdchardwaremanagement.v1alpha.Order.Type|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Order.Type|null);

                    /** Order submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);

                    /** Order billingId */
                    billingId?: (string|null);

                    /** Order existingHardware */
                    existingHardware?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwareLocation[]|null);

                    /** Order deploymentType */
                    deploymentType?: (google.cloud.gdchardwaremanagement.v1alpha.Order.DeploymentType|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Order.DeploymentType|null);

                    /** Order actualInstallationDate */
                    actualInstallationDate?: (google.type.IDate|null);

                    /** Order estimatedInstallationDate */
                    estimatedInstallationDate?: (google.type.IDate|null);
                }

                /** Represents an Order. */
                class Order implements IOrder {

                    /**
                     * Constructs a new Order.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IOrder);

                    /** Order name. */
                    public name: string;

                    /** Order displayName. */
                    public displayName: string;

                    /** Order createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Order updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Order labels. */
                    public labels: { [k: string]: string };

                    /** Order state. */
                    public state: (google.cloud.gdchardwaremanagement.v1alpha.Order.State|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Order.State);

                    /** Order organizationContact. */
                    public organizationContact?: (google.cloud.gdchardwaremanagement.v1alpha.IOrganizationContact|null);

                    /** Order targetWorkloads. */
                    public targetWorkloads: string[];

                    /** Order customerMotivation. */
                    public customerMotivation: string;

                    /** Order fulfillmentTime. */
                    public fulfillmentTime?: (google.protobuf.ITimestamp|null);

                    /** Order regionCode. */
                    public regionCode: string;

                    /** Order orderFormUri. */
                    public orderFormUri: string;

                    /** Order type. */
                    public type: (google.cloud.gdchardwaremanagement.v1alpha.Order.Type|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Order.Type);

                    /** Order submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /** Order billingId. */
                    public billingId: string;

                    /** Order existingHardware. */
                    public existingHardware: google.cloud.gdchardwaremanagement.v1alpha.IHardwareLocation[];

                    /** Order deploymentType. */
                    public deploymentType: (google.cloud.gdchardwaremanagement.v1alpha.Order.DeploymentType|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Order.DeploymentType);

                    /** Order actualInstallationDate. */
                    public actualInstallationDate?: (google.type.IDate|null);

                    /** Order estimatedInstallationDate. */
                    public estimatedInstallationDate?: (google.type.IDate|null);

                    /**
                     * Creates a new Order instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Order instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IOrder): google.cloud.gdchardwaremanagement.v1alpha.Order;

                    /**
                     * Encodes the specified Order message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Order.verify|verify} messages.
                     * @param message Order message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Order message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Order.verify|verify} messages.
                     * @param message Order message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Order message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Order
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.Order;

                    /**
                     * Decodes an Order message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Order
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.Order;

                    /**
                     * Verifies an Order message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Order message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Order
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.Order;

                    /**
                     * Creates a plain object from an Order message. Also converts values to other types if specified.
                     * @param message Order
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Order to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Order
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Order {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        DRAFT = 1,
                        SUBMITTED = 2,
                        INFO_COMPLETE = 12,
                        ACCEPTED = 3,
                        ADDITIONAL_INFO_NEEDED = 4,
                        BUILDING = 5,
                        SHIPPING = 6,
                        INSTALLING = 7,
                        FAILED = 8,
                        PARTIALLY_COMPLETED = 9,
                        COMPLETED = 10,
                        CANCELLED = 11
                    }

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        PAID = 1,
                        POC = 2,
                        UNPAID = 2
                    }

                    /** DeploymentType enum. */
                    enum DeploymentType {
                        DEPLOYMENT_TYPE_UNSPECIFIED = 0,
                        FULL_PRODUCTION = 1,
                        PROOF_OF_CONCEPT = 2,
                        INTERNAL = 3,
                        CUSTOMER_LAB = 4
                    }
                }

                /** Properties of a Site. */
                interface ISite {

                    /** Site name */
                    name?: (string|null);

                    /** Site displayName */
                    displayName?: (string|null);

                    /** Site description */
                    description?: (string|null);

                    /** Site createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Site updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Site labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Site organizationContact */
                    organizationContact?: (google.cloud.gdchardwaremanagement.v1alpha.IOrganizationContact|null);

                    /** Site googleMapsPinUri */
                    googleMapsPinUri?: (string|null);

                    /** Site accessTimes */
                    accessTimes?: (google.cloud.gdchardwaremanagement.v1alpha.ITimePeriod[]|null);

                    /** Site notes */
                    notes?: (string|null);

                    /** Site customerSiteId */
                    customerSiteId?: (string|null);
                }

                /** Represents a Site. */
                class Site implements ISite {

                    /**
                     * Constructs a new Site.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISite);

                    /** Site name. */
                    public name: string;

                    /** Site displayName. */
                    public displayName: string;

                    /** Site description. */
                    public description: string;

                    /** Site createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Site updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Site labels. */
                    public labels: { [k: string]: string };

                    /** Site organizationContact. */
                    public organizationContact?: (google.cloud.gdchardwaremanagement.v1alpha.IOrganizationContact|null);

                    /** Site googleMapsPinUri. */
                    public googleMapsPinUri: string;

                    /** Site accessTimes. */
                    public accessTimes: google.cloud.gdchardwaremanagement.v1alpha.ITimePeriod[];

                    /** Site notes. */
                    public notes: string;

                    /** Site customerSiteId. */
                    public customerSiteId: string;

                    /**
                     * Creates a new Site instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Site instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISite): google.cloud.gdchardwaremanagement.v1alpha.Site;

                    /**
                     * Encodes the specified Site message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Site.verify|verify} messages.
                     * @param message Site message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ISite, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Site message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Site.verify|verify} messages.
                     * @param message Site message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ISite, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Site message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Site
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.Site;

                    /**
                     * Decodes a Site message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Site
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.Site;

                    /**
                     * Verifies a Site message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Site message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Site
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.Site;

                    /**
                     * Creates a plain object from a Site message. Also converts values to other types if specified.
                     * @param message Site
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.Site, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Site to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Site
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a HardwareGroup. */
                interface IHardwareGroup {

                    /** HardwareGroup name */
                    name?: (string|null);

                    /** HardwareGroup createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** HardwareGroup updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** HardwareGroup labels */
                    labels?: ({ [k: string]: string }|null);

                    /** HardwareGroup hardwareCount */
                    hardwareCount?: (number|null);

                    /** HardwareGroup config */
                    config?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwareConfig|null);

                    /** HardwareGroup site */
                    site?: (string|null);

                    /** HardwareGroup state */
                    state?: (google.cloud.gdchardwaremanagement.v1alpha.HardwareGroup.State|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.HardwareGroup.State|null);

                    /** HardwareGroup zone */
                    zone?: (string|null);

                    /** HardwareGroup requestedInstallationDate */
                    requestedInstallationDate?: (google.type.IDate|null);
                }

                /** Represents a HardwareGroup. */
                class HardwareGroup implements IHardwareGroup {

                    /**
                     * Constructs a new HardwareGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IHardwareGroup);

                    /** HardwareGroup name. */
                    public name: string;

                    /** HardwareGroup createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** HardwareGroup updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** HardwareGroup labels. */
                    public labels: { [k: string]: string };

                    /** HardwareGroup hardwareCount. */
                    public hardwareCount: number;

                    /** HardwareGroup config. */
                    public config?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwareConfig|null);

                    /** HardwareGroup site. */
                    public site: string;

                    /** HardwareGroup state. */
                    public state: (google.cloud.gdchardwaremanagement.v1alpha.HardwareGroup.State|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.HardwareGroup.State);

                    /** HardwareGroup zone. */
                    public zone: string;

                    /** HardwareGroup requestedInstallationDate. */
                    public requestedInstallationDate?: (google.type.IDate|null);

                    /**
                     * Creates a new HardwareGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HardwareGroup instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IHardwareGroup): google.cloud.gdchardwaremanagement.v1alpha.HardwareGroup;

                    /**
                     * Encodes the specified HardwareGroup message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.HardwareGroup.verify|verify} messages.
                     * @param message HardwareGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IHardwareGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HardwareGroup message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.HardwareGroup.verify|verify} messages.
                     * @param message HardwareGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IHardwareGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HardwareGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HardwareGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.HardwareGroup;

                    /**
                     * Decodes a HardwareGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HardwareGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.HardwareGroup;

                    /**
                     * Verifies a HardwareGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HardwareGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HardwareGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.HardwareGroup;

                    /**
                     * Creates a plain object from a HardwareGroup message. Also converts values to other types if specified.
                     * @param message HardwareGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.HardwareGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HardwareGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HardwareGroup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace HardwareGroup {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ADDITIONAL_INFO_NEEDED = 1,
                        BUILDING = 2,
                        SHIPPING = 3,
                        INSTALLING = 4,
                        PARTIALLY_INSTALLED = 5,
                        INSTALLED = 6,
                        FAILED = 7
                    }
                }

                /** Properties of a Hardware. */
                interface IHardware {

                    /** Hardware name */
                    name?: (string|null);

                    /** Hardware displayName */
                    displayName?: (string|null);

                    /** Hardware createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Hardware updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Hardware labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Hardware order */
                    order?: (string|null);

                    /** Hardware hardwareGroup */
                    hardwareGroup?: (string|null);

                    /** Hardware site */
                    site?: (string|null);

                    /** Hardware state */
                    state?: (google.cloud.gdchardwaremanagement.v1alpha.Hardware.State|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Hardware.State|null);

                    /** Hardware ciqUri */
                    ciqUri?: (string|null);

                    /** Hardware config */
                    config?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwareConfig|null);

                    /** Hardware estimatedInstallationDate */
                    estimatedInstallationDate?: (google.type.IDate|null);

                    /** Hardware physicalInfo */
                    physicalInfo?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwarePhysicalInfo|null);

                    /** Hardware installationInfo */
                    installationInfo?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwareInstallationInfo|null);

                    /** Hardware zone */
                    zone?: (string|null);

                    /** Hardware requestedInstallationDate */
                    requestedInstallationDate?: (google.type.IDate|null);

                    /** Hardware actualInstallationDate */
                    actualInstallationDate?: (google.type.IDate|null);

                    /** Hardware machineInfos */
                    machineInfos?: (google.cloud.gdchardwaremanagement.v1alpha.Hardware.IMachineInfo[]|null);
                }

                /** Represents a Hardware. */
                class Hardware implements IHardware {

                    /**
                     * Constructs a new Hardware.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IHardware);

                    /** Hardware name. */
                    public name: string;

                    /** Hardware displayName. */
                    public displayName: string;

                    /** Hardware createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Hardware updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Hardware labels. */
                    public labels: { [k: string]: string };

                    /** Hardware order. */
                    public order: string;

                    /** Hardware hardwareGroup. */
                    public hardwareGroup: string;

                    /** Hardware site. */
                    public site: string;

                    /** Hardware state. */
                    public state: (google.cloud.gdchardwaremanagement.v1alpha.Hardware.State|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Hardware.State);

                    /** Hardware ciqUri. */
                    public ciqUri: string;

                    /** Hardware config. */
                    public config?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwareConfig|null);

                    /** Hardware estimatedInstallationDate. */
                    public estimatedInstallationDate?: (google.type.IDate|null);

                    /** Hardware physicalInfo. */
                    public physicalInfo?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwarePhysicalInfo|null);

                    /** Hardware installationInfo. */
                    public installationInfo?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwareInstallationInfo|null);

                    /** Hardware zone. */
                    public zone: string;

                    /** Hardware requestedInstallationDate. */
                    public requestedInstallationDate?: (google.type.IDate|null);

                    /** Hardware actualInstallationDate. */
                    public actualInstallationDate?: (google.type.IDate|null);

                    /** Hardware machineInfos. */
                    public machineInfos: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IMachineInfo[];

                    /**
                     * Creates a new Hardware instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Hardware instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IHardware): google.cloud.gdchardwaremanagement.v1alpha.Hardware;

                    /**
                     * Encodes the specified Hardware message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Hardware.verify|verify} messages.
                     * @param message Hardware message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IHardware, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Hardware message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Hardware.verify|verify} messages.
                     * @param message Hardware message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IHardware, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Hardware message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Hardware
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.Hardware;

                    /**
                     * Decodes a Hardware message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Hardware
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.Hardware;

                    /**
                     * Verifies a Hardware message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Hardware message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Hardware
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.Hardware;

                    /**
                     * Creates a plain object from a Hardware message. Also converts values to other types if specified.
                     * @param message Hardware
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.Hardware, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Hardware to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Hardware
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Hardware {

                    /** Properties of a MacAddress. */
                    interface IMacAddress {

                        /** MacAddress address */
                        address?: (string|null);

                        /** MacAddress type */
                        type?: (google.cloud.gdchardwaremanagement.v1alpha.Hardware.MacAddress.AddressType|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Hardware.MacAddress.AddressType|null);

                        /** MacAddress ipv4Address */
                        ipv4Address?: (string|null);
                    }

                    /** Represents a MacAddress. */
                    class MacAddress implements IMacAddress {

                        /**
                         * Constructs a new MacAddress.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IMacAddress);

                        /** MacAddress address. */
                        public address: string;

                        /** MacAddress type. */
                        public type: (google.cloud.gdchardwaremanagement.v1alpha.Hardware.MacAddress.AddressType|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Hardware.MacAddress.AddressType);

                        /** MacAddress ipv4Address. */
                        public ipv4Address: string;

                        /**
                         * Creates a new MacAddress instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MacAddress instance
                         */
                        public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IMacAddress): google.cloud.gdchardwaremanagement.v1alpha.Hardware.MacAddress;

                        /**
                         * Encodes the specified MacAddress message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Hardware.MacAddress.verify|verify} messages.
                         * @param message MacAddress message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IMacAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MacAddress message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Hardware.MacAddress.verify|verify} messages.
                         * @param message MacAddress message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IMacAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MacAddress message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MacAddress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.Hardware.MacAddress;

                        /**
                         * Decodes a MacAddress message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MacAddress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.Hardware.MacAddress;

                        /**
                         * Verifies a MacAddress message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MacAddress message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MacAddress
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.Hardware.MacAddress;

                        /**
                         * Creates a plain object from a MacAddress message. Also converts values to other types if specified.
                         * @param message MacAddress
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.Hardware.MacAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MacAddress to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MacAddress
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MacAddress {

                        /** AddressType enum. */
                        enum AddressType {
                            ADDRESS_TYPE_UNSPECIFIED = 0,
                            NIC = 1,
                            BMC = 2,
                            VIRTUAL = 3
                        }
                    }

                    /** Properties of a DiskInfo. */
                    interface IDiskInfo {

                        /** DiskInfo manufacturer */
                        manufacturer?: (string|null);

                        /** DiskInfo slot */
                        slot?: (number|null);

                        /** DiskInfo serialNumber */
                        serialNumber?: (string|null);

                        /** DiskInfo psid */
                        psid?: (string|null);

                        /** DiskInfo partNumber */
                        partNumber?: (string|null);

                        /** DiskInfo modelNumber */
                        modelNumber?: (string|null);
                    }

                    /** Represents a DiskInfo. */
                    class DiskInfo implements IDiskInfo {

                        /**
                         * Constructs a new DiskInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IDiskInfo);

                        /** DiskInfo manufacturer. */
                        public manufacturer: string;

                        /** DiskInfo slot. */
                        public slot: number;

                        /** DiskInfo serialNumber. */
                        public serialNumber: string;

                        /** DiskInfo psid. */
                        public psid: string;

                        /** DiskInfo partNumber. */
                        public partNumber: string;

                        /** DiskInfo modelNumber. */
                        public modelNumber: string;

                        /**
                         * Creates a new DiskInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DiskInfo instance
                         */
                        public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IDiskInfo): google.cloud.gdchardwaremanagement.v1alpha.Hardware.DiskInfo;

                        /**
                         * Encodes the specified DiskInfo message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Hardware.DiskInfo.verify|verify} messages.
                         * @param message DiskInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IDiskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DiskInfo message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Hardware.DiskInfo.verify|verify} messages.
                         * @param message DiskInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IDiskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DiskInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DiskInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.Hardware.DiskInfo;

                        /**
                         * Decodes a DiskInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DiskInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.Hardware.DiskInfo;

                        /**
                         * Verifies a DiskInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DiskInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DiskInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.Hardware.DiskInfo;

                        /**
                         * Creates a plain object from a DiskInfo message. Also converts values to other types if specified.
                         * @param message DiskInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.Hardware.DiskInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DiskInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DiskInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MachineInfo. */
                    interface IMachineInfo {

                        /** MachineInfo serviceTag */
                        serviceTag?: (string|null);

                        /** MachineInfo macAddresses */
                        macAddresses?: (google.cloud.gdchardwaremanagement.v1alpha.Hardware.IMacAddress[]|null);

                        /** MachineInfo name */
                        name?: (string|null);

                        /** MachineInfo diskInfos */
                        diskInfos?: (google.cloud.gdchardwaremanagement.v1alpha.Hardware.IDiskInfo[]|null);
                    }

                    /** Represents a MachineInfo. */
                    class MachineInfo implements IMachineInfo {

                        /**
                         * Constructs a new MachineInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IMachineInfo);

                        /** MachineInfo serviceTag. */
                        public serviceTag: string;

                        /** MachineInfo macAddresses. */
                        public macAddresses: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IMacAddress[];

                        /** MachineInfo name. */
                        public name: string;

                        /** MachineInfo diskInfos. */
                        public diskInfos: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IDiskInfo[];

                        /**
                         * Creates a new MachineInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MachineInfo instance
                         */
                        public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IMachineInfo): google.cloud.gdchardwaremanagement.v1alpha.Hardware.MachineInfo;

                        /**
                         * Encodes the specified MachineInfo message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Hardware.MachineInfo.verify|verify} messages.
                         * @param message MachineInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IMachineInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MachineInfo message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Hardware.MachineInfo.verify|verify} messages.
                         * @param message MachineInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.Hardware.IMachineInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MachineInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MachineInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.Hardware.MachineInfo;

                        /**
                         * Decodes a MachineInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MachineInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.Hardware.MachineInfo;

                        /**
                         * Verifies a MachineInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MachineInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MachineInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.Hardware.MachineInfo;

                        /**
                         * Creates a plain object from a MachineInfo message. Also converts values to other types if specified.
                         * @param message MachineInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.Hardware.MachineInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MachineInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MachineInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ADDITIONAL_INFO_NEEDED = 1,
                        BUILDING = 2,
                        SHIPPING = 3,
                        INSTALLING = 4,
                        INSTALLED = 5,
                        FAILED = 6
                    }
                }

                /** Properties of a Comment. */
                interface IComment {

                    /** Comment name */
                    name?: (string|null);

                    /** Comment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Comment labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Comment author */
                    author?: (string|null);

                    /** Comment text */
                    text?: (string|null);

                    /** Comment customerViewedTime */
                    customerViewedTime?: (google.protobuf.ITimestamp|null);

                    /** Comment authorEntity */
                    authorEntity?: (google.cloud.gdchardwaremanagement.v1alpha.Entity|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Entity|null);
                }

                /** Represents a Comment. */
                class Comment implements IComment {

                    /**
                     * Constructs a new Comment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IComment);

                    /** Comment name. */
                    public name: string;

                    /** Comment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Comment labels. */
                    public labels: { [k: string]: string };

                    /** Comment author. */
                    public author: string;

                    /** Comment text. */
                    public text: string;

                    /** Comment customerViewedTime. */
                    public customerViewedTime?: (google.protobuf.ITimestamp|null);

                    /** Comment authorEntity. */
                    public authorEntity: (google.cloud.gdchardwaremanagement.v1alpha.Entity|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Entity);

                    /**
                     * Creates a new Comment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Comment instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IComment): google.cloud.gdchardwaremanagement.v1alpha.Comment;

                    /**
                     * Encodes the specified Comment message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Comment.verify|verify} messages.
                     * @param message Comment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IComment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Comment message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Comment.verify|verify} messages.
                     * @param message Comment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IComment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Comment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Comment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.Comment;

                    /**
                     * Decodes a Comment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Comment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.Comment;

                    /**
                     * Verifies a Comment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Comment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Comment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.Comment;

                    /**
                     * Creates a plain object from a Comment message. Also converts values to other types if specified.
                     * @param message Comment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.Comment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Comment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Comment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ChangeLogEntry. */
                interface IChangeLogEntry {

                    /** ChangeLogEntry name */
                    name?: (string|null);

                    /** ChangeLogEntry createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ChangeLogEntry labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ChangeLogEntry log */
                    log?: (string|null);
                }

                /** Represents a ChangeLogEntry. */
                class ChangeLogEntry implements IChangeLogEntry {

                    /**
                     * Constructs a new ChangeLogEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IChangeLogEntry);

                    /** ChangeLogEntry name. */
                    public name: string;

                    /** ChangeLogEntry createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ChangeLogEntry labels. */
                    public labels: { [k: string]: string };

                    /** ChangeLogEntry log. */
                    public log: string;

                    /**
                     * Creates a new ChangeLogEntry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChangeLogEntry instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IChangeLogEntry): google.cloud.gdchardwaremanagement.v1alpha.ChangeLogEntry;

                    /**
                     * Encodes the specified ChangeLogEntry message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ChangeLogEntry.verify|verify} messages.
                     * @param message ChangeLogEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IChangeLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChangeLogEntry message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ChangeLogEntry.verify|verify} messages.
                     * @param message ChangeLogEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IChangeLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChangeLogEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChangeLogEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ChangeLogEntry;

                    /**
                     * Decodes a ChangeLogEntry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChangeLogEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ChangeLogEntry;

                    /**
                     * Verifies a ChangeLogEntry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChangeLogEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChangeLogEntry
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ChangeLogEntry;

                    /**
                     * Creates a plain object from a ChangeLogEntry message. Also converts values to other types if specified.
                     * @param message ChangeLogEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ChangeLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChangeLogEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ChangeLogEntry
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Sku. */
                interface ISku {

                    /** Sku name */
                    name?: (string|null);

                    /** Sku displayName */
                    displayName?: (string|null);

                    /** Sku createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Sku updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Sku config */
                    config?: (google.cloud.gdchardwaremanagement.v1alpha.ISkuConfig|null);

                    /** Sku instances */
                    instances?: (google.cloud.gdchardwaremanagement.v1alpha.ISkuInstance[]|null);

                    /** Sku description */
                    description?: (string|null);

                    /** Sku revisionId */
                    revisionId?: (string|null);

                    /** Sku isActive */
                    isActive?: (boolean|null);

                    /** Sku type */
                    type?: (google.cloud.gdchardwaremanagement.v1alpha.Sku.Type|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Sku.Type|null);

                    /** Sku vcpuCount */
                    vcpuCount?: (number|null);

                    /** Sku hardwareCountRanges */
                    hardwareCountRanges?: (google.cloud.gdchardwaremanagement.v1alpha.Sku.IRange[]|null);
                }

                /** Represents a Sku. */
                class Sku implements ISku {

                    /**
                     * Constructs a new Sku.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISku);

                    /** Sku name. */
                    public name: string;

                    /** Sku displayName. */
                    public displayName: string;

                    /** Sku createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Sku updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Sku config. */
                    public config?: (google.cloud.gdchardwaremanagement.v1alpha.ISkuConfig|null);

                    /** Sku instances. */
                    public instances: google.cloud.gdchardwaremanagement.v1alpha.ISkuInstance[];

                    /** Sku description. */
                    public description: string;

                    /** Sku revisionId. */
                    public revisionId: string;

                    /** Sku isActive. */
                    public isActive: boolean;

                    /** Sku type. */
                    public type: (google.cloud.gdchardwaremanagement.v1alpha.Sku.Type|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Sku.Type);

                    /** Sku vcpuCount. */
                    public vcpuCount: number;

                    /** Sku hardwareCountRanges. */
                    public hardwareCountRanges: google.cloud.gdchardwaremanagement.v1alpha.Sku.IRange[];

                    /**
                     * Creates a new Sku instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Sku instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISku): google.cloud.gdchardwaremanagement.v1alpha.Sku;

                    /**
                     * Encodes the specified Sku message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Sku.verify|verify} messages.
                     * @param message Sku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ISku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Sku message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Sku.verify|verify} messages.
                     * @param message Sku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ISku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sku message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Sku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.Sku;

                    /**
                     * Decodes a Sku message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Sku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.Sku;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.Sku;

                    /**
                     * Creates a plain object from a Sku message. Also converts values to other types if specified.
                     * @param message Sku
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.Sku, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Sku to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Sku
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Sku {

                    /** Properties of a Range. */
                    interface IRange {

                        /** Range min */
                        min?: (number|null);

                        /** Range max */
                        max?: (number|null);
                    }

                    /** Represents a Range. */
                    class Range implements IRange {

                        /**
                         * Constructs a new Range.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.Sku.IRange);

                        /** Range min. */
                        public min: number;

                        /** Range max. */
                        public max: number;

                        /**
                         * Creates a new Range instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Range instance
                         */
                        public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.Sku.IRange): google.cloud.gdchardwaremanagement.v1alpha.Sku.Range;

                        /**
                         * Encodes the specified Range message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Sku.Range.verify|verify} messages.
                         * @param message Range message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.Sku.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Range message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Sku.Range.verify|verify} messages.
                         * @param message Range message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.Sku.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Range message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Range
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.Sku.Range;

                        /**
                         * Decodes a Range message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Range
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.Sku.Range;

                        /**
                         * Verifies a Range message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Range message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Range
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.Sku.Range;

                        /**
                         * Creates a plain object from a Range message. Also converts values to other types if specified.
                         * @param message Range
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.Sku.Range, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Range to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Range
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        RACK = 1,
                        SERVER = 2
                    }
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

                    /** Zone displayName */
                    displayName?: (string|null);

                    /** Zone state */
                    state?: (google.cloud.gdchardwaremanagement.v1alpha.Zone.State|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Zone.State|null);

                    /** Zone contacts */
                    contacts?: (google.cloud.gdchardwaremanagement.v1alpha.IContact[]|null);

                    /** Zone ciqUri */
                    ciqUri?: (string|null);

                    /** Zone networkConfig */
                    networkConfig?: (google.cloud.gdchardwaremanagement.v1alpha.IZoneNetworkConfig|null);

                    /** Zone globallyUniqueId */
                    globallyUniqueId?: (string|null);

                    /** Zone subscriptionConfigs */
                    subscriptionConfigs?: (google.cloud.gdchardwaremanagement.v1alpha.ISubscriptionConfig[]|null);

                    /** Zone provisioningState */
                    provisioningState?: (google.cloud.gdchardwaremanagement.v1alpha.Zone.ProvisioningState|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Zone.ProvisioningState|null);
                }

                /** Represents a Zone. */
                class Zone implements IZone {

                    /**
                     * Constructs a new Zone.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IZone);

                    /** Zone name. */
                    public name: string;

                    /** Zone createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Zone updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Zone labels. */
                    public labels: { [k: string]: string };

                    /** Zone displayName. */
                    public displayName: string;

                    /** Zone state. */
                    public state: (google.cloud.gdchardwaremanagement.v1alpha.Zone.State|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Zone.State);

                    /** Zone contacts. */
                    public contacts: google.cloud.gdchardwaremanagement.v1alpha.IContact[];

                    /** Zone ciqUri. */
                    public ciqUri: string;

                    /** Zone networkConfig. */
                    public networkConfig?: (google.cloud.gdchardwaremanagement.v1alpha.IZoneNetworkConfig|null);

                    /** Zone globallyUniqueId. */
                    public globallyUniqueId: string;

                    /** Zone subscriptionConfigs. */
                    public subscriptionConfigs: google.cloud.gdchardwaremanagement.v1alpha.ISubscriptionConfig[];

                    /** Zone provisioningState. */
                    public provisioningState: (google.cloud.gdchardwaremanagement.v1alpha.Zone.ProvisioningState|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.Zone.ProvisioningState);

                    /**
                     * Creates a new Zone instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Zone instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IZone): google.cloud.gdchardwaremanagement.v1alpha.Zone;

                    /**
                     * Encodes the specified Zone message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Zone.verify|verify} messages.
                     * @param message Zone message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IZone, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Zone message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Zone.verify|verify} messages.
                     * @param message Zone message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IZone, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Zone message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Zone
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.Zone;

                    /**
                     * Decodes a Zone message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Zone
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.Zone;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.Zone;

                    /**
                     * Creates a plain object from a Zone message. Also converts values to other types if specified.
                     * @param message Zone
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.Zone, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                namespace Zone {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ADDITIONAL_INFO_NEEDED = 1,
                        PREPARING = 2,
                        READY_FOR_CUSTOMER_FACTORY_TURNUP_CHECKS = 5,
                        CUSTOMER_FACTORY_TURNUP_CHECKS_STARTED = 8,
                        READY_FOR_SITE_TURNUP = 6,
                        CUSTOMER_FACTORY_TURNUP_CHECKS_FAILED = 7,
                        ACTIVE = 3,
                        CANCELLED = 4
                    }

                    /** ProvisioningState enum. */
                    enum ProvisioningState {
                        PROVISIONING_STATE_UNSPECIFIED = 0,
                        PROVISIONING_REQUIRED = 1,
                        PROVISIONING_IN_PROGRESS = 2,
                        PROVISIONING_COMPLETE = 3
                    }
                }

                /** Properties of an OrganizationContact. */
                interface IOrganizationContact {

                    /** OrganizationContact address */
                    address?: (google.type.IPostalAddress|null);

                    /** OrganizationContact email */
                    email?: (string|null);

                    /** OrganizationContact phone */
                    phone?: (string|null);

                    /** OrganizationContact contacts */
                    contacts?: (google.cloud.gdchardwaremanagement.v1alpha.IContact[]|null);
                }

                /** Represents an OrganizationContact. */
                class OrganizationContact implements IOrganizationContact {

                    /**
                     * Constructs a new OrganizationContact.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IOrganizationContact);

                    /** OrganizationContact address. */
                    public address?: (google.type.IPostalAddress|null);

                    /** OrganizationContact email. */
                    public email: string;

                    /** OrganizationContact phone. */
                    public phone: string;

                    /** OrganizationContact contacts. */
                    public contacts: google.cloud.gdchardwaremanagement.v1alpha.IContact[];

                    /**
                     * Creates a new OrganizationContact instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OrganizationContact instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IOrganizationContact): google.cloud.gdchardwaremanagement.v1alpha.OrganizationContact;

                    /**
                     * Encodes the specified OrganizationContact message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.OrganizationContact.verify|verify} messages.
                     * @param message OrganizationContact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IOrganizationContact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OrganizationContact message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.OrganizationContact.verify|verify} messages.
                     * @param message OrganizationContact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IOrganizationContact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrganizationContact message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OrganizationContact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.OrganizationContact;

                    /**
                     * Decodes an OrganizationContact message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OrganizationContact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.OrganizationContact;

                    /**
                     * Verifies an OrganizationContact message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OrganizationContact message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OrganizationContact
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.OrganizationContact;

                    /**
                     * Creates a plain object from an OrganizationContact message. Also converts values to other types if specified.
                     * @param message OrganizationContact
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.OrganizationContact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrganizationContact to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OrganizationContact
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Contact. */
                interface IContact {

                    /** Contact givenName */
                    givenName?: (string|null);

                    /** Contact familyName */
                    familyName?: (string|null);

                    /** Contact email */
                    email?: (string|null);

                    /** Contact phone */
                    phone?: (string|null);

                    /** Contact timeZone */
                    timeZone?: (google.type.ITimeZone|null);

                    /** Contact reachableTimes */
                    reachableTimes?: (google.cloud.gdchardwaremanagement.v1alpha.ITimePeriod[]|null);
                }

                /** Represents a Contact. */
                class Contact implements IContact {

                    /**
                     * Constructs a new Contact.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IContact);

                    /** Contact givenName. */
                    public givenName: string;

                    /** Contact familyName. */
                    public familyName: string;

                    /** Contact email. */
                    public email: string;

                    /** Contact phone. */
                    public phone: string;

                    /** Contact timeZone. */
                    public timeZone?: (google.type.ITimeZone|null);

                    /** Contact reachableTimes. */
                    public reachableTimes: google.cloud.gdchardwaremanagement.v1alpha.ITimePeriod[];

                    /**
                     * Creates a new Contact instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Contact instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IContact): google.cloud.gdchardwaremanagement.v1alpha.Contact;

                    /**
                     * Encodes the specified Contact message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Contact.verify|verify} messages.
                     * @param message Contact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Contact message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Contact.verify|verify} messages.
                     * @param message Contact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Contact message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Contact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.Contact;

                    /**
                     * Decodes a Contact message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Contact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.Contact;

                    /**
                     * Verifies a Contact message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Contact message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Contact
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.Contact;

                    /**
                     * Creates a plain object from a Contact message. Also converts values to other types if specified.
                     * @param message Contact
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.Contact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Contact to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Contact
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a HardwareConfig. */
                interface IHardwareConfig {

                    /** HardwareConfig sku */
                    sku?: (string|null);

                    /** HardwareConfig powerSupply */
                    powerSupply?: (google.cloud.gdchardwaremanagement.v1alpha.PowerSupply|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.PowerSupply|null);

                    /** HardwareConfig subscriptionDurationMonths */
                    subscriptionDurationMonths?: (number|null);
                }

                /** Represents a HardwareConfig. */
                class HardwareConfig implements IHardwareConfig {

                    /**
                     * Constructs a new HardwareConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IHardwareConfig);

                    /** HardwareConfig sku. */
                    public sku: string;

                    /** HardwareConfig powerSupply. */
                    public powerSupply: (google.cloud.gdchardwaremanagement.v1alpha.PowerSupply|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.PowerSupply);

                    /** HardwareConfig subscriptionDurationMonths. */
                    public subscriptionDurationMonths: number;

                    /**
                     * Creates a new HardwareConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HardwareConfig instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IHardwareConfig): google.cloud.gdchardwaremanagement.v1alpha.HardwareConfig;

                    /**
                     * Encodes the specified HardwareConfig message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.HardwareConfig.verify|verify} messages.
                     * @param message HardwareConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IHardwareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HardwareConfig message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.HardwareConfig.verify|verify} messages.
                     * @param message HardwareConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IHardwareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HardwareConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HardwareConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.HardwareConfig;

                    /**
                     * Decodes a HardwareConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HardwareConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.HardwareConfig;

                    /**
                     * Verifies a HardwareConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HardwareConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HardwareConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.HardwareConfig;

                    /**
                     * Creates a plain object from a HardwareConfig message. Also converts values to other types if specified.
                     * @param message HardwareConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.HardwareConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HardwareConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HardwareConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SkuConfig. */
                interface ISkuConfig {

                    /** SkuConfig cpu */
                    cpu?: (string|null);

                    /** SkuConfig gpu */
                    gpu?: (string|null);

                    /** SkuConfig ram */
                    ram?: (string|null);

                    /** SkuConfig storage */
                    storage?: (string|null);
                }

                /** Represents a SkuConfig. */
                class SkuConfig implements ISkuConfig {

                    /**
                     * Constructs a new SkuConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISkuConfig);

                    /** SkuConfig cpu. */
                    public cpu: string;

                    /** SkuConfig gpu. */
                    public gpu: string;

                    /** SkuConfig ram. */
                    public ram: string;

                    /** SkuConfig storage. */
                    public storage: string;

                    /**
                     * Creates a new SkuConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SkuConfig instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISkuConfig): google.cloud.gdchardwaremanagement.v1alpha.SkuConfig;

                    /**
                     * Encodes the specified SkuConfig message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.SkuConfig.verify|verify} messages.
                     * @param message SkuConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ISkuConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SkuConfig message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.SkuConfig.verify|verify} messages.
                     * @param message SkuConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ISkuConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SkuConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SkuConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.SkuConfig;

                    /**
                     * Decodes a SkuConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SkuConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.SkuConfig;

                    /**
                     * Verifies a SkuConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SkuConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SkuConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.SkuConfig;

                    /**
                     * Creates a plain object from a SkuConfig message. Also converts values to other types if specified.
                     * @param message SkuConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.SkuConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SkuConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SkuConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SkuInstance. */
                interface ISkuInstance {

                    /** SkuInstance regionCode */
                    regionCode?: (string|null);

                    /** SkuInstance powerSupply */
                    powerSupply?: (google.cloud.gdchardwaremanagement.v1alpha.PowerSupply|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.PowerSupply|null);

                    /** SkuInstance billingSku */
                    billingSku?: (string|null);

                    /** SkuInstance billingSkuPerVcpu */
                    billingSkuPerVcpu?: (string|null);

                    /** SkuInstance subscriptionDurationMonths */
                    subscriptionDurationMonths?: (number|null);
                }

                /** Represents a SkuInstance. */
                class SkuInstance implements ISkuInstance {

                    /**
                     * Constructs a new SkuInstance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISkuInstance);

                    /** SkuInstance regionCode. */
                    public regionCode: string;

                    /** SkuInstance powerSupply. */
                    public powerSupply: (google.cloud.gdchardwaremanagement.v1alpha.PowerSupply|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.PowerSupply);

                    /** SkuInstance billingSku. */
                    public billingSku: string;

                    /** SkuInstance billingSkuPerVcpu. */
                    public billingSkuPerVcpu: string;

                    /** SkuInstance subscriptionDurationMonths. */
                    public subscriptionDurationMonths: number;

                    /**
                     * Creates a new SkuInstance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SkuInstance instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISkuInstance): google.cloud.gdchardwaremanagement.v1alpha.SkuInstance;

                    /**
                     * Encodes the specified SkuInstance message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.SkuInstance.verify|verify} messages.
                     * @param message SkuInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ISkuInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SkuInstance message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.SkuInstance.verify|verify} messages.
                     * @param message SkuInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ISkuInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SkuInstance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SkuInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.SkuInstance;

                    /**
                     * Decodes a SkuInstance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SkuInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.SkuInstance;

                    /**
                     * Verifies a SkuInstance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SkuInstance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SkuInstance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.SkuInstance;

                    /**
                     * Creates a plain object from a SkuInstance message. Also converts values to other types if specified.
                     * @param message SkuInstance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.SkuInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SkuInstance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SkuInstance
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a HardwarePhysicalInfo. */
                interface IHardwarePhysicalInfo {

                    /** HardwarePhysicalInfo powerReceptacle */
                    powerReceptacle?: (google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.PowerReceptacleType|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.PowerReceptacleType|null);

                    /** HardwarePhysicalInfo networkUplink */
                    networkUplink?: (google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.NetworkUplinkType|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.NetworkUplinkType|null);

                    /** HardwarePhysicalInfo voltage */
                    voltage?: (google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.Voltage|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.Voltage|null);

                    /** HardwarePhysicalInfo amperes */
                    amperes?: (google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.Amperes|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.Amperes|null);
                }

                /** Represents a HardwarePhysicalInfo. */
                class HardwarePhysicalInfo implements IHardwarePhysicalInfo {

                    /**
                     * Constructs a new HardwarePhysicalInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IHardwarePhysicalInfo);

                    /** HardwarePhysicalInfo powerReceptacle. */
                    public powerReceptacle: (google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.PowerReceptacleType|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.PowerReceptacleType);

                    /** HardwarePhysicalInfo networkUplink. */
                    public networkUplink: (google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.NetworkUplinkType|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.NetworkUplinkType);

                    /** HardwarePhysicalInfo voltage. */
                    public voltage: (google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.Voltage|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.Voltage);

                    /** HardwarePhysicalInfo amperes. */
                    public amperes: (google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.Amperes|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.Amperes);

                    /**
                     * Creates a new HardwarePhysicalInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HardwarePhysicalInfo instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IHardwarePhysicalInfo): google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo;

                    /**
                     * Encodes the specified HardwarePhysicalInfo message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.verify|verify} messages.
                     * @param message HardwarePhysicalInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IHardwarePhysicalInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HardwarePhysicalInfo message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo.verify|verify} messages.
                     * @param message HardwarePhysicalInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IHardwarePhysicalInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HardwarePhysicalInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HardwarePhysicalInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo;

                    /**
                     * Decodes a HardwarePhysicalInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HardwarePhysicalInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo;

                    /**
                     * Verifies a HardwarePhysicalInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HardwarePhysicalInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HardwarePhysicalInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo;

                    /**
                     * Creates a plain object from a HardwarePhysicalInfo message. Also converts values to other types if specified.
                     * @param message HardwarePhysicalInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.HardwarePhysicalInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HardwarePhysicalInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HardwarePhysicalInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace HardwarePhysicalInfo {

                    /** PowerReceptacleType enum. */
                    enum PowerReceptacleType {
                        POWER_RECEPTACLE_TYPE_UNSPECIFIED = 0,
                        NEMA_5_15 = 1,
                        C_13 = 2,
                        STANDARD_EU = 3
                    }

                    /** NetworkUplinkType enum. */
                    enum NetworkUplinkType {
                        NETWORK_UPLINK_TYPE_UNSPECIFIED = 0,
                        RJ_45 = 1
                    }

                    /** Voltage enum. */
                    enum Voltage {
                        VOLTAGE_UNSPECIFIED = 0,
                        VOLTAGE_110 = 1,
                        VOLTAGE_220 = 3
                    }

                    /** Amperes enum. */
                    enum Amperes {
                        AMPERES_UNSPECIFIED = 0,
                        AMPERES_15 = 1
                    }
                }

                /** Properties of a HardwareInstallationInfo. */
                interface IHardwareInstallationInfo {

                    /** HardwareInstallationInfo rackLocation */
                    rackLocation?: (string|null);

                    /** HardwareInstallationInfo powerDistanceMeters */
                    powerDistanceMeters?: (number|null);

                    /** HardwareInstallationInfo switchDistanceMeters */
                    switchDistanceMeters?: (number|null);

                    /** HardwareInstallationInfo rackUnitDimensions */
                    rackUnitDimensions?: (google.cloud.gdchardwaremanagement.v1alpha.IDimensions|null);

                    /** HardwareInstallationInfo rackSpace */
                    rackSpace?: (google.cloud.gdchardwaremanagement.v1alpha.IRackSpace|null);

                    /** HardwareInstallationInfo rackType */
                    rackType?: (google.cloud.gdchardwaremanagement.v1alpha.HardwareInstallationInfo.RackType|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.HardwareInstallationInfo.RackType|null);
                }

                /** Represents a HardwareInstallationInfo. */
                class HardwareInstallationInfo implements IHardwareInstallationInfo {

                    /**
                     * Constructs a new HardwareInstallationInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IHardwareInstallationInfo);

                    /** HardwareInstallationInfo rackLocation. */
                    public rackLocation: string;

                    /** HardwareInstallationInfo powerDistanceMeters. */
                    public powerDistanceMeters: number;

                    /** HardwareInstallationInfo switchDistanceMeters. */
                    public switchDistanceMeters: number;

                    /** HardwareInstallationInfo rackUnitDimensions. */
                    public rackUnitDimensions?: (google.cloud.gdchardwaremanagement.v1alpha.IDimensions|null);

                    /** HardwareInstallationInfo rackSpace. */
                    public rackSpace?: (google.cloud.gdchardwaremanagement.v1alpha.IRackSpace|null);

                    /** HardwareInstallationInfo rackType. */
                    public rackType: (google.cloud.gdchardwaremanagement.v1alpha.HardwareInstallationInfo.RackType|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.HardwareInstallationInfo.RackType);

                    /**
                     * Creates a new HardwareInstallationInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HardwareInstallationInfo instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IHardwareInstallationInfo): google.cloud.gdchardwaremanagement.v1alpha.HardwareInstallationInfo;

                    /**
                     * Encodes the specified HardwareInstallationInfo message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.HardwareInstallationInfo.verify|verify} messages.
                     * @param message HardwareInstallationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IHardwareInstallationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HardwareInstallationInfo message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.HardwareInstallationInfo.verify|verify} messages.
                     * @param message HardwareInstallationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IHardwareInstallationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HardwareInstallationInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HardwareInstallationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.HardwareInstallationInfo;

                    /**
                     * Decodes a HardwareInstallationInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HardwareInstallationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.HardwareInstallationInfo;

                    /**
                     * Verifies a HardwareInstallationInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HardwareInstallationInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HardwareInstallationInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.HardwareInstallationInfo;

                    /**
                     * Creates a plain object from a HardwareInstallationInfo message. Also converts values to other types if specified.
                     * @param message HardwareInstallationInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.HardwareInstallationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HardwareInstallationInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HardwareInstallationInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace HardwareInstallationInfo {

                    /** RackType enum. */
                    enum RackType {
                        RACK_TYPE_UNSPECIFIED = 0,
                        TWO_POST = 1,
                        FOUR_POST = 2
                    }
                }

                /** Properties of a ZoneNetworkConfig. */
                interface IZoneNetworkConfig {

                    /** ZoneNetworkConfig machineMgmtIpv4Range */
                    machineMgmtIpv4Range?: (string|null);

                    /** ZoneNetworkConfig kubernetesNodeIpv4Range */
                    kubernetesNodeIpv4Range?: (string|null);

                    /** ZoneNetworkConfig kubernetesControlPlaneIpv4Range */
                    kubernetesControlPlaneIpv4Range?: (string|null);

                    /** ZoneNetworkConfig managementIpv4Subnet */
                    managementIpv4Subnet?: (google.cloud.gdchardwaremanagement.v1alpha.ISubnet|null);

                    /** ZoneNetworkConfig kubernetesIpv4Subnet */
                    kubernetesIpv4Subnet?: (google.cloud.gdchardwaremanagement.v1alpha.ISubnet|null);

                    /** ZoneNetworkConfig dnsIpv4Addresses */
                    dnsIpv4Addresses?: (string[]|null);

                    /** ZoneNetworkConfig kubernetesPrimaryVlanId */
                    kubernetesPrimaryVlanId?: (number|null);
                }

                /** Represents a ZoneNetworkConfig. */
                class ZoneNetworkConfig implements IZoneNetworkConfig {

                    /**
                     * Constructs a new ZoneNetworkConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IZoneNetworkConfig);

                    /** ZoneNetworkConfig machineMgmtIpv4Range. */
                    public machineMgmtIpv4Range: string;

                    /** ZoneNetworkConfig kubernetesNodeIpv4Range. */
                    public kubernetesNodeIpv4Range: string;

                    /** ZoneNetworkConfig kubernetesControlPlaneIpv4Range. */
                    public kubernetesControlPlaneIpv4Range: string;

                    /** ZoneNetworkConfig managementIpv4Subnet. */
                    public managementIpv4Subnet?: (google.cloud.gdchardwaremanagement.v1alpha.ISubnet|null);

                    /** ZoneNetworkConfig kubernetesIpv4Subnet. */
                    public kubernetesIpv4Subnet?: (google.cloud.gdchardwaremanagement.v1alpha.ISubnet|null);

                    /** ZoneNetworkConfig dnsIpv4Addresses. */
                    public dnsIpv4Addresses: string[];

                    /** ZoneNetworkConfig kubernetesPrimaryVlanId. */
                    public kubernetesPrimaryVlanId: number;

                    /**
                     * Creates a new ZoneNetworkConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ZoneNetworkConfig instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IZoneNetworkConfig): google.cloud.gdchardwaremanagement.v1alpha.ZoneNetworkConfig;

                    /**
                     * Encodes the specified ZoneNetworkConfig message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ZoneNetworkConfig.verify|verify} messages.
                     * @param message ZoneNetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IZoneNetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ZoneNetworkConfig message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ZoneNetworkConfig.verify|verify} messages.
                     * @param message ZoneNetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IZoneNetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ZoneNetworkConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ZoneNetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ZoneNetworkConfig;

                    /**
                     * Decodes a ZoneNetworkConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ZoneNetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ZoneNetworkConfig;

                    /**
                     * Verifies a ZoneNetworkConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ZoneNetworkConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ZoneNetworkConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ZoneNetworkConfig;

                    /**
                     * Creates a plain object from a ZoneNetworkConfig message. Also converts values to other types if specified.
                     * @param message ZoneNetworkConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ZoneNetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ZoneNetworkConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ZoneNetworkConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Subnet. */
                interface ISubnet {

                    /** Subnet addressRange */
                    addressRange?: (string|null);

                    /** Subnet defaultGatewayIpAddress */
                    defaultGatewayIpAddress?: (string|null);
                }

                /** Represents a Subnet. */
                class Subnet implements ISubnet {

                    /**
                     * Constructs a new Subnet.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISubnet);

                    /** Subnet addressRange. */
                    public addressRange: string;

                    /** Subnet defaultGatewayIpAddress. */
                    public defaultGatewayIpAddress: string;

                    /**
                     * Creates a new Subnet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Subnet instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISubnet): google.cloud.gdchardwaremanagement.v1alpha.Subnet;

                    /**
                     * Encodes the specified Subnet message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Subnet.verify|verify} messages.
                     * @param message Subnet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ISubnet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Subnet message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Subnet.verify|verify} messages.
                     * @param message Subnet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ISubnet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Subnet message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Subnet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.Subnet;

                    /**
                     * Decodes a Subnet message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Subnet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.Subnet;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.Subnet;

                    /**
                     * Creates a plain object from a Subnet message. Also converts values to other types if specified.
                     * @param message Subnet
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.Subnet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a TimePeriod. */
                interface ITimePeriod {

                    /** TimePeriod startTime */
                    startTime?: (google.type.ITimeOfDay|null);

                    /** TimePeriod endTime */
                    endTime?: (google.type.ITimeOfDay|null);

                    /** TimePeriod days */
                    days?: (google.type.DayOfWeek[]|null);
                }

                /** Represents a TimePeriod. */
                class TimePeriod implements ITimePeriod {

                    /**
                     * Constructs a new TimePeriod.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ITimePeriod);

                    /** TimePeriod startTime. */
                    public startTime?: (google.type.ITimeOfDay|null);

                    /** TimePeriod endTime. */
                    public endTime?: (google.type.ITimeOfDay|null);

                    /** TimePeriod days. */
                    public days: google.type.DayOfWeek[];

                    /**
                     * Creates a new TimePeriod instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimePeriod instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ITimePeriod): google.cloud.gdchardwaremanagement.v1alpha.TimePeriod;

                    /**
                     * Encodes the specified TimePeriod message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.TimePeriod.verify|verify} messages.
                     * @param message TimePeriod message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ITimePeriod, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimePeriod message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.TimePeriod.verify|verify} messages.
                     * @param message TimePeriod message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ITimePeriod, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimePeriod message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimePeriod
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.TimePeriod;

                    /**
                     * Decodes a TimePeriod message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimePeriod
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.TimePeriod;

                    /**
                     * Verifies a TimePeriod message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimePeriod message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimePeriod
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.TimePeriod;

                    /**
                     * Creates a plain object from a TimePeriod message. Also converts values to other types if specified.
                     * @param message TimePeriod
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.TimePeriod, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimePeriod to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TimePeriod
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Dimensions. */
                interface IDimensions {

                    /** Dimensions widthInches */
                    widthInches?: (number|null);

                    /** Dimensions heightInches */
                    heightInches?: (number|null);

                    /** Dimensions depthInches */
                    depthInches?: (number|null);
                }

                /** Represents a Dimensions. */
                class Dimensions implements IDimensions {

                    /**
                     * Constructs a new Dimensions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IDimensions);

                    /** Dimensions widthInches. */
                    public widthInches: number;

                    /** Dimensions heightInches. */
                    public heightInches: number;

                    /** Dimensions depthInches. */
                    public depthInches: number;

                    /**
                     * Creates a new Dimensions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Dimensions instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IDimensions): google.cloud.gdchardwaremanagement.v1alpha.Dimensions;

                    /**
                     * Encodes the specified Dimensions message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Dimensions.verify|verify} messages.
                     * @param message Dimensions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IDimensions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Dimensions message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.Dimensions.verify|verify} messages.
                     * @param message Dimensions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IDimensions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Dimensions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Dimensions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.Dimensions;

                    /**
                     * Decodes a Dimensions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Dimensions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.Dimensions;

                    /**
                     * Verifies a Dimensions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Dimensions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Dimensions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.Dimensions;

                    /**
                     * Creates a plain object from a Dimensions message. Also converts values to other types if specified.
                     * @param message Dimensions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.Dimensions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Dimensions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Dimensions
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RackSpace. */
                interface IRackSpace {

                    /** RackSpace startRackUnit */
                    startRackUnit?: (number|null);

                    /** RackSpace endRackUnit */
                    endRackUnit?: (number|null);
                }

                /** Represents a RackSpace. */
                class RackSpace implements IRackSpace {

                    /**
                     * Constructs a new RackSpace.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IRackSpace);

                    /** RackSpace startRackUnit. */
                    public startRackUnit: number;

                    /** RackSpace endRackUnit. */
                    public endRackUnit: number;

                    /**
                     * Creates a new RackSpace instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RackSpace instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IRackSpace): google.cloud.gdchardwaremanagement.v1alpha.RackSpace;

                    /**
                     * Encodes the specified RackSpace message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.RackSpace.verify|verify} messages.
                     * @param message RackSpace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IRackSpace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RackSpace message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.RackSpace.verify|verify} messages.
                     * @param message RackSpace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IRackSpace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RackSpace message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RackSpace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.RackSpace;

                    /**
                     * Decodes a RackSpace message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RackSpace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.RackSpace;

                    /**
                     * Verifies a RackSpace message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RackSpace message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RackSpace
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.RackSpace;

                    /**
                     * Creates a plain object from a RackSpace message. Also converts values to other types if specified.
                     * @param message RackSpace
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.RackSpace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RackSpace to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RackSpace
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a HardwareLocation. */
                interface IHardwareLocation {

                    /** HardwareLocation site */
                    site?: (string|null);

                    /** HardwareLocation rackLocation */
                    rackLocation?: (string|null);

                    /** HardwareLocation rackSpace */
                    rackSpace?: (google.cloud.gdchardwaremanagement.v1alpha.IRackSpace[]|null);
                }

                /** Represents a HardwareLocation. */
                class HardwareLocation implements IHardwareLocation {

                    /**
                     * Constructs a new HardwareLocation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IHardwareLocation);

                    /** HardwareLocation site. */
                    public site: string;

                    /** HardwareLocation rackLocation. */
                    public rackLocation: string;

                    /** HardwareLocation rackSpace. */
                    public rackSpace: google.cloud.gdchardwaremanagement.v1alpha.IRackSpace[];

                    /**
                     * Creates a new HardwareLocation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HardwareLocation instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IHardwareLocation): google.cloud.gdchardwaremanagement.v1alpha.HardwareLocation;

                    /**
                     * Encodes the specified HardwareLocation message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.HardwareLocation.verify|verify} messages.
                     * @param message HardwareLocation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IHardwareLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HardwareLocation message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.HardwareLocation.verify|verify} messages.
                     * @param message HardwareLocation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IHardwareLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HardwareLocation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HardwareLocation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.HardwareLocation;

                    /**
                     * Decodes a HardwareLocation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HardwareLocation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.HardwareLocation;

                    /**
                     * Verifies a HardwareLocation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HardwareLocation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HardwareLocation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.HardwareLocation;

                    /**
                     * Creates a plain object from a HardwareLocation message. Also converts values to other types if specified.
                     * @param message HardwareLocation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.HardwareLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HardwareLocation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HardwareLocation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SubscriptionConfig. */
                interface ISubscriptionConfig {

                    /** SubscriptionConfig subscriptionId */
                    subscriptionId?: (string|null);

                    /** SubscriptionConfig billingId */
                    billingId?: (string|null);

                    /** SubscriptionConfig state */
                    state?: (google.cloud.gdchardwaremanagement.v1alpha.SubscriptionConfig.SubscriptionState|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.SubscriptionConfig.SubscriptionState|null);
                }

                /** Represents a SubscriptionConfig. */
                class SubscriptionConfig implements ISubscriptionConfig {

                    /**
                     * Constructs a new SubscriptionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISubscriptionConfig);

                    /** SubscriptionConfig subscriptionId. */
                    public subscriptionId: string;

                    /** SubscriptionConfig billingId. */
                    public billingId: string;

                    /** SubscriptionConfig state. */
                    public state: (google.cloud.gdchardwaremanagement.v1alpha.SubscriptionConfig.SubscriptionState|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.SubscriptionConfig.SubscriptionState);

                    /**
                     * Creates a new SubscriptionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubscriptionConfig instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISubscriptionConfig): google.cloud.gdchardwaremanagement.v1alpha.SubscriptionConfig;

                    /**
                     * Encodes the specified SubscriptionConfig message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.SubscriptionConfig.verify|verify} messages.
                     * @param message SubscriptionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ISubscriptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubscriptionConfig message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.SubscriptionConfig.verify|verify} messages.
                     * @param message SubscriptionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ISubscriptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubscriptionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubscriptionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.SubscriptionConfig;

                    /**
                     * Decodes a SubscriptionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubscriptionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.SubscriptionConfig;

                    /**
                     * Verifies a SubscriptionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubscriptionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubscriptionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.SubscriptionConfig;

                    /**
                     * Creates a plain object from a SubscriptionConfig message. Also converts values to other types if specified.
                     * @param message SubscriptionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.SubscriptionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubscriptionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SubscriptionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SubscriptionConfig {

                    /** SubscriptionState enum. */
                    enum SubscriptionState {
                        SUBSCRIPTION_STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        INACTIVE = 2,
                        ERROR = 3,
                        FAILED_TO_RETRIEVE = 4,
                        COMPLETED = 5
                    }
                }

                /** Represents a GDCHardwareManagement */
                class GDCHardwareManagement extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new GDCHardwareManagement service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new GDCHardwareManagement service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GDCHardwareManagement;

                    /**
                     * Calls ListOrders.
                     * @param request ListOrdersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListOrdersResponse
                     */
                    public listOrders(request: google.cloud.gdchardwaremanagement.v1alpha.IListOrdersRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.ListOrdersCallback): void;

                    /**
                     * Calls ListOrders.
                     * @param request ListOrdersRequest message or plain object
                     * @returns Promise
                     */
                    public listOrders(request: google.cloud.gdchardwaremanagement.v1alpha.IListOrdersRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.ListOrdersResponse>;

                    /**
                     * Calls GetOrder.
                     * @param request GetOrderRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Order
                     */
                    public getOrder(request: google.cloud.gdchardwaremanagement.v1alpha.IGetOrderRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.GetOrderCallback): void;

                    /**
                     * Calls GetOrder.
                     * @param request GetOrderRequest message or plain object
                     * @returns Promise
                     */
                    public getOrder(request: google.cloud.gdchardwaremanagement.v1alpha.IGetOrderRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.Order>;

                    /**
                     * Calls CreateOrder.
                     * @param request CreateOrderRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createOrder(request: google.cloud.gdchardwaremanagement.v1alpha.ICreateOrderRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.CreateOrderCallback): void;

                    /**
                     * Calls CreateOrder.
                     * @param request CreateOrderRequest message or plain object
                     * @returns Promise
                     */
                    public createOrder(request: google.cloud.gdchardwaremanagement.v1alpha.ICreateOrderRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateOrder.
                     * @param request UpdateOrderRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateOrder(request: google.cloud.gdchardwaremanagement.v1alpha.IUpdateOrderRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.UpdateOrderCallback): void;

                    /**
                     * Calls UpdateOrder.
                     * @param request UpdateOrderRequest message or plain object
                     * @returns Promise
                     */
                    public updateOrder(request: google.cloud.gdchardwaremanagement.v1alpha.IUpdateOrderRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteOrder.
                     * @param request DeleteOrderRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteOrder(request: google.cloud.gdchardwaremanagement.v1alpha.IDeleteOrderRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.DeleteOrderCallback): void;

                    /**
                     * Calls DeleteOrder.
                     * @param request DeleteOrderRequest message or plain object
                     * @returns Promise
                     */
                    public deleteOrder(request: google.cloud.gdchardwaremanagement.v1alpha.IDeleteOrderRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls SubmitOrder.
                     * @param request SubmitOrderRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public submitOrder(request: google.cloud.gdchardwaremanagement.v1alpha.ISubmitOrderRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.SubmitOrderCallback): void;

                    /**
                     * Calls SubmitOrder.
                     * @param request SubmitOrderRequest message or plain object
                     * @returns Promise
                     */
                    public submitOrder(request: google.cloud.gdchardwaremanagement.v1alpha.ISubmitOrderRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListSites.
                     * @param request ListSitesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSitesResponse
                     */
                    public listSites(request: google.cloud.gdchardwaremanagement.v1alpha.IListSitesRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.ListSitesCallback): void;

                    /**
                     * Calls ListSites.
                     * @param request ListSitesRequest message or plain object
                     * @returns Promise
                     */
                    public listSites(request: google.cloud.gdchardwaremanagement.v1alpha.IListSitesRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.ListSitesResponse>;

                    /**
                     * Calls GetSite.
                     * @param request GetSiteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Site
                     */
                    public getSite(request: google.cloud.gdchardwaremanagement.v1alpha.IGetSiteRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.GetSiteCallback): void;

                    /**
                     * Calls GetSite.
                     * @param request GetSiteRequest message or plain object
                     * @returns Promise
                     */
                    public getSite(request: google.cloud.gdchardwaremanagement.v1alpha.IGetSiteRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.Site>;

                    /**
                     * Calls CreateSite.
                     * @param request CreateSiteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createSite(request: google.cloud.gdchardwaremanagement.v1alpha.ICreateSiteRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.CreateSiteCallback): void;

                    /**
                     * Calls CreateSite.
                     * @param request CreateSiteRequest message or plain object
                     * @returns Promise
                     */
                    public createSite(request: google.cloud.gdchardwaremanagement.v1alpha.ICreateSiteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateSite.
                     * @param request UpdateSiteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateSite(request: google.cloud.gdchardwaremanagement.v1alpha.IUpdateSiteRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.UpdateSiteCallback): void;

                    /**
                     * Calls UpdateSite.
                     * @param request UpdateSiteRequest message or plain object
                     * @returns Promise
                     */
                    public updateSite(request: google.cloud.gdchardwaremanagement.v1alpha.IUpdateSiteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteSite.
                     * @param request DeleteSiteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteSite(request: google.cloud.gdchardwaremanagement.v1alpha.IDeleteSiteRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.DeleteSiteCallback): void;

                    /**
                     * Calls DeleteSite.
                     * @param request DeleteSiteRequest message or plain object
                     * @returns Promise
                     */
                    public deleteSite(request: google.cloud.gdchardwaremanagement.v1alpha.IDeleteSiteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListHardwareGroups.
                     * @param request ListHardwareGroupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListHardwareGroupsResponse
                     */
                    public listHardwareGroups(request: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareGroupsRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.ListHardwareGroupsCallback): void;

                    /**
                     * Calls ListHardwareGroups.
                     * @param request ListHardwareGroupsRequest message or plain object
                     * @returns Promise
                     */
                    public listHardwareGroups(request: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareGroupsRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsResponse>;

                    /**
                     * Calls GetHardwareGroup.
                     * @param request GetHardwareGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and HardwareGroup
                     */
                    public getHardwareGroup(request: google.cloud.gdchardwaremanagement.v1alpha.IGetHardwareGroupRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.GetHardwareGroupCallback): void;

                    /**
                     * Calls GetHardwareGroup.
                     * @param request GetHardwareGroupRequest message or plain object
                     * @returns Promise
                     */
                    public getHardwareGroup(request: google.cloud.gdchardwaremanagement.v1alpha.IGetHardwareGroupRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.HardwareGroup>;

                    /**
                     * Calls CreateHardwareGroup.
                     * @param request CreateHardwareGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createHardwareGroup(request: google.cloud.gdchardwaremanagement.v1alpha.ICreateHardwareGroupRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.CreateHardwareGroupCallback): void;

                    /**
                     * Calls CreateHardwareGroup.
                     * @param request CreateHardwareGroupRequest message or plain object
                     * @returns Promise
                     */
                    public createHardwareGroup(request: google.cloud.gdchardwaremanagement.v1alpha.ICreateHardwareGroupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateHardwareGroup.
                     * @param request UpdateHardwareGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateHardwareGroup(request: google.cloud.gdchardwaremanagement.v1alpha.IUpdateHardwareGroupRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.UpdateHardwareGroupCallback): void;

                    /**
                     * Calls UpdateHardwareGroup.
                     * @param request UpdateHardwareGroupRequest message or plain object
                     * @returns Promise
                     */
                    public updateHardwareGroup(request: google.cloud.gdchardwaremanagement.v1alpha.IUpdateHardwareGroupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteHardwareGroup.
                     * @param request DeleteHardwareGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteHardwareGroup(request: google.cloud.gdchardwaremanagement.v1alpha.IDeleteHardwareGroupRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.DeleteHardwareGroupCallback): void;

                    /**
                     * Calls DeleteHardwareGroup.
                     * @param request DeleteHardwareGroupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteHardwareGroup(request: google.cloud.gdchardwaremanagement.v1alpha.IDeleteHardwareGroupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListHardware.
                     * @param request ListHardwareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListHardwareResponse
                     */
                    public listHardware(request: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.ListHardwareCallback): void;

                    /**
                     * Calls ListHardware.
                     * @param request ListHardwareRequest message or plain object
                     * @returns Promise
                     */
                    public listHardware(request: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.ListHardwareResponse>;

                    /**
                     * Calls GetHardware.
                     * @param request GetHardwareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Hardware
                     */
                    public getHardware(request: google.cloud.gdchardwaremanagement.v1alpha.IGetHardwareRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.GetHardwareCallback): void;

                    /**
                     * Calls GetHardware.
                     * @param request GetHardwareRequest message or plain object
                     * @returns Promise
                     */
                    public getHardware(request: google.cloud.gdchardwaremanagement.v1alpha.IGetHardwareRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.Hardware>;

                    /**
                     * Calls CreateHardware.
                     * @param request CreateHardwareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createHardware(request: google.cloud.gdchardwaremanagement.v1alpha.ICreateHardwareRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.CreateHardwareCallback): void;

                    /**
                     * Calls CreateHardware.
                     * @param request CreateHardwareRequest message or plain object
                     * @returns Promise
                     */
                    public createHardware(request: google.cloud.gdchardwaremanagement.v1alpha.ICreateHardwareRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateHardware.
                     * @param request UpdateHardwareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateHardware(request: google.cloud.gdchardwaremanagement.v1alpha.IUpdateHardwareRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.UpdateHardwareCallback): void;

                    /**
                     * Calls UpdateHardware.
                     * @param request UpdateHardwareRequest message or plain object
                     * @returns Promise
                     */
                    public updateHardware(request: google.cloud.gdchardwaremanagement.v1alpha.IUpdateHardwareRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteHardware.
                     * @param request DeleteHardwareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteHardware(request: google.cloud.gdchardwaremanagement.v1alpha.IDeleteHardwareRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.DeleteHardwareCallback): void;

                    /**
                     * Calls DeleteHardware.
                     * @param request DeleteHardwareRequest message or plain object
                     * @returns Promise
                     */
                    public deleteHardware(request: google.cloud.gdchardwaremanagement.v1alpha.IDeleteHardwareRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListComments.
                     * @param request ListCommentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCommentsResponse
                     */
                    public listComments(request: google.cloud.gdchardwaremanagement.v1alpha.IListCommentsRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.ListCommentsCallback): void;

                    /**
                     * Calls ListComments.
                     * @param request ListCommentsRequest message or plain object
                     * @returns Promise
                     */
                    public listComments(request: google.cloud.gdchardwaremanagement.v1alpha.IListCommentsRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.ListCommentsResponse>;

                    /**
                     * Calls GetComment.
                     * @param request GetCommentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Comment
                     */
                    public getComment(request: google.cloud.gdchardwaremanagement.v1alpha.IGetCommentRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.GetCommentCallback): void;

                    /**
                     * Calls GetComment.
                     * @param request GetCommentRequest message or plain object
                     * @returns Promise
                     */
                    public getComment(request: google.cloud.gdchardwaremanagement.v1alpha.IGetCommentRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.Comment>;

                    /**
                     * Calls CreateComment.
                     * @param request CreateCommentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createComment(request: google.cloud.gdchardwaremanagement.v1alpha.ICreateCommentRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.CreateCommentCallback): void;

                    /**
                     * Calls CreateComment.
                     * @param request CreateCommentRequest message or plain object
                     * @returns Promise
                     */
                    public createComment(request: google.cloud.gdchardwaremanagement.v1alpha.ICreateCommentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RecordActionOnComment.
                     * @param request RecordActionOnCommentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Comment
                     */
                    public recordActionOnComment(request: google.cloud.gdchardwaremanagement.v1alpha.IRecordActionOnCommentRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.RecordActionOnCommentCallback): void;

                    /**
                     * Calls RecordActionOnComment.
                     * @param request RecordActionOnCommentRequest message or plain object
                     * @returns Promise
                     */
                    public recordActionOnComment(request: google.cloud.gdchardwaremanagement.v1alpha.IRecordActionOnCommentRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.Comment>;

                    /**
                     * Calls ListChangeLogEntries.
                     * @param request ListChangeLogEntriesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListChangeLogEntriesResponse
                     */
                    public listChangeLogEntries(request: google.cloud.gdchardwaremanagement.v1alpha.IListChangeLogEntriesRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.ListChangeLogEntriesCallback): void;

                    /**
                     * Calls ListChangeLogEntries.
                     * @param request ListChangeLogEntriesRequest message or plain object
                     * @returns Promise
                     */
                    public listChangeLogEntries(request: google.cloud.gdchardwaremanagement.v1alpha.IListChangeLogEntriesRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesResponse>;

                    /**
                     * Calls GetChangeLogEntry.
                     * @param request GetChangeLogEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ChangeLogEntry
                     */
                    public getChangeLogEntry(request: google.cloud.gdchardwaremanagement.v1alpha.IGetChangeLogEntryRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.GetChangeLogEntryCallback): void;

                    /**
                     * Calls GetChangeLogEntry.
                     * @param request GetChangeLogEntryRequest message or plain object
                     * @returns Promise
                     */
                    public getChangeLogEntry(request: google.cloud.gdchardwaremanagement.v1alpha.IGetChangeLogEntryRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.ChangeLogEntry>;

                    /**
                     * Calls ListSkus.
                     * @param request ListSkusRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSkusResponse
                     */
                    public listSkus(request: google.cloud.gdchardwaremanagement.v1alpha.IListSkusRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.ListSkusCallback): void;

                    /**
                     * Calls ListSkus.
                     * @param request ListSkusRequest message or plain object
                     * @returns Promise
                     */
                    public listSkus(request: google.cloud.gdchardwaremanagement.v1alpha.IListSkusRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.ListSkusResponse>;

                    /**
                     * Calls GetSku.
                     * @param request GetSkuRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Sku
                     */
                    public getSku(request: google.cloud.gdchardwaremanagement.v1alpha.IGetSkuRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.GetSkuCallback): void;

                    /**
                     * Calls GetSku.
                     * @param request GetSkuRequest message or plain object
                     * @returns Promise
                     */
                    public getSku(request: google.cloud.gdchardwaremanagement.v1alpha.IGetSkuRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.Sku>;

                    /**
                     * Calls ListZones.
                     * @param request ListZonesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListZonesResponse
                     */
                    public listZones(request: google.cloud.gdchardwaremanagement.v1alpha.IListZonesRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.ListZonesCallback): void;

                    /**
                     * Calls ListZones.
                     * @param request ListZonesRequest message or plain object
                     * @returns Promise
                     */
                    public listZones(request: google.cloud.gdchardwaremanagement.v1alpha.IListZonesRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.ListZonesResponse>;

                    /**
                     * Calls GetZone.
                     * @param request GetZoneRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Zone
                     */
                    public getZone(request: google.cloud.gdchardwaremanagement.v1alpha.IGetZoneRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.GetZoneCallback): void;

                    /**
                     * Calls GetZone.
                     * @param request GetZoneRequest message or plain object
                     * @returns Promise
                     */
                    public getZone(request: google.cloud.gdchardwaremanagement.v1alpha.IGetZoneRequest): Promise<google.cloud.gdchardwaremanagement.v1alpha.Zone>;

                    /**
                     * Calls CreateZone.
                     * @param request CreateZoneRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createZone(request: google.cloud.gdchardwaremanagement.v1alpha.ICreateZoneRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.CreateZoneCallback): void;

                    /**
                     * Calls CreateZone.
                     * @param request CreateZoneRequest message or plain object
                     * @returns Promise
                     */
                    public createZone(request: google.cloud.gdchardwaremanagement.v1alpha.ICreateZoneRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateZone.
                     * @param request UpdateZoneRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateZone(request: google.cloud.gdchardwaremanagement.v1alpha.IUpdateZoneRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.UpdateZoneCallback): void;

                    /**
                     * Calls UpdateZone.
                     * @param request UpdateZoneRequest message or plain object
                     * @returns Promise
                     */
                    public updateZone(request: google.cloud.gdchardwaremanagement.v1alpha.IUpdateZoneRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteZone.
                     * @param request DeleteZoneRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteZone(request: google.cloud.gdchardwaremanagement.v1alpha.IDeleteZoneRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.DeleteZoneCallback): void;

                    /**
                     * Calls DeleteZone.
                     * @param request DeleteZoneRequest message or plain object
                     * @returns Promise
                     */
                    public deleteZone(request: google.cloud.gdchardwaremanagement.v1alpha.IDeleteZoneRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls SignalZoneState.
                     * @param request SignalZoneStateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public signalZoneState(request: google.cloud.gdchardwaremanagement.v1alpha.ISignalZoneStateRequest, callback: google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement.SignalZoneStateCallback): void;

                    /**
                     * Calls SignalZoneState.
                     * @param request SignalZoneStateRequest message or plain object
                     * @returns Promise
                     */
                    public signalZoneState(request: google.cloud.gdchardwaremanagement.v1alpha.ISignalZoneStateRequest): Promise<google.longrunning.Operation>;
                }

                namespace GDCHardwareManagement {

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|listOrders}.
                     * @param error Error, if any
                     * @param [response] ListOrdersResponse
                     */
                    type ListOrdersCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.ListOrdersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|getOrder}.
                     * @param error Error, if any
                     * @param [response] Order
                     */
                    type GetOrderCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.Order) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|createOrder}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateOrderCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|updateOrder}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateOrderCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|deleteOrder}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteOrderCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|submitOrder}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type SubmitOrderCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|listSites}.
                     * @param error Error, if any
                     * @param [response] ListSitesResponse
                     */
                    type ListSitesCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.ListSitesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|getSite}.
                     * @param error Error, if any
                     * @param [response] Site
                     */
                    type GetSiteCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.Site) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|createSite}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateSiteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|updateSite}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateSiteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|deleteSite}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteSiteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|listHardwareGroups}.
                     * @param error Error, if any
                     * @param [response] ListHardwareGroupsResponse
                     */
                    type ListHardwareGroupsCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|getHardwareGroup}.
                     * @param error Error, if any
                     * @param [response] HardwareGroup
                     */
                    type GetHardwareGroupCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.HardwareGroup) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|createHardwareGroup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateHardwareGroupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|updateHardwareGroup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateHardwareGroupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|deleteHardwareGroup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteHardwareGroupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|listHardware}.
                     * @param error Error, if any
                     * @param [response] ListHardwareResponse
                     */
                    type ListHardwareCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.ListHardwareResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|getHardware}.
                     * @param error Error, if any
                     * @param [response] Hardware
                     */
                    type GetHardwareCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.Hardware) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|createHardware}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateHardwareCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|updateHardware}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateHardwareCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|deleteHardware}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteHardwareCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|listComments}.
                     * @param error Error, if any
                     * @param [response] ListCommentsResponse
                     */
                    type ListCommentsCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.ListCommentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|getComment}.
                     * @param error Error, if any
                     * @param [response] Comment
                     */
                    type GetCommentCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.Comment) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|createComment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateCommentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|recordActionOnComment}.
                     * @param error Error, if any
                     * @param [response] Comment
                     */
                    type RecordActionOnCommentCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.Comment) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|listChangeLogEntries}.
                     * @param error Error, if any
                     * @param [response] ListChangeLogEntriesResponse
                     */
                    type ListChangeLogEntriesCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|getChangeLogEntry}.
                     * @param error Error, if any
                     * @param [response] ChangeLogEntry
                     */
                    type GetChangeLogEntryCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.ChangeLogEntry) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|listSkus}.
                     * @param error Error, if any
                     * @param [response] ListSkusResponse
                     */
                    type ListSkusCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.ListSkusResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|getSku}.
                     * @param error Error, if any
                     * @param [response] Sku
                     */
                    type GetSkuCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.Sku) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|listZones}.
                     * @param error Error, if any
                     * @param [response] ListZonesResponse
                     */
                    type ListZonesCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.ListZonesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|getZone}.
                     * @param error Error, if any
                     * @param [response] Zone
                     */
                    type GetZoneCallback = (error: (Error|null), response?: google.cloud.gdchardwaremanagement.v1alpha.Zone) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|createZone}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateZoneCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|updateZone}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateZoneCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|deleteZone}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteZoneCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gdchardwaremanagement.v1alpha.GDCHardwareManagement|signalZoneState}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type SignalZoneStateCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ListOrdersRequest. */
                interface IListOrdersRequest {

                    /** ListOrdersRequest parent */
                    parent?: (string|null);

                    /** ListOrdersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListOrdersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListOrdersRequest filter */
                    filter?: (string|null);

                    /** ListOrdersRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListOrdersRequest. */
                class ListOrdersRequest implements IListOrdersRequest {

                    /**
                     * Constructs a new ListOrdersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListOrdersRequest);

                    /** ListOrdersRequest parent. */
                    public parent: string;

                    /** ListOrdersRequest pageSize. */
                    public pageSize: number;

                    /** ListOrdersRequest pageToken. */
                    public pageToken: string;

                    /** ListOrdersRequest filter. */
                    public filter: string;

                    /** ListOrdersRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListOrdersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOrdersRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListOrdersRequest): google.cloud.gdchardwaremanagement.v1alpha.ListOrdersRequest;

                    /**
                     * Encodes the specified ListOrdersRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListOrdersRequest.verify|verify} messages.
                     * @param message ListOrdersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListOrdersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOrdersRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListOrdersRequest.verify|verify} messages.
                     * @param message ListOrdersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListOrdersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOrdersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOrdersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListOrdersRequest;

                    /**
                     * Decodes a ListOrdersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOrdersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListOrdersRequest;

                    /**
                     * Verifies a ListOrdersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOrdersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOrdersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListOrdersRequest;

                    /**
                     * Creates a plain object from a ListOrdersRequest message. Also converts values to other types if specified.
                     * @param message ListOrdersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListOrdersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOrdersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOrdersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOrdersResponse. */
                interface IListOrdersResponse {

                    /** ListOrdersResponse orders */
                    orders?: (google.cloud.gdchardwaremanagement.v1alpha.IOrder[]|null);

                    /** ListOrdersResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListOrdersResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListOrdersResponse. */
                class ListOrdersResponse implements IListOrdersResponse {

                    /**
                     * Constructs a new ListOrdersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListOrdersResponse);

                    /** ListOrdersResponse orders. */
                    public orders: google.cloud.gdchardwaremanagement.v1alpha.IOrder[];

                    /** ListOrdersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListOrdersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListOrdersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOrdersResponse instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListOrdersResponse): google.cloud.gdchardwaremanagement.v1alpha.ListOrdersResponse;

                    /**
                     * Encodes the specified ListOrdersResponse message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListOrdersResponse.verify|verify} messages.
                     * @param message ListOrdersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListOrdersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOrdersResponse message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListOrdersResponse.verify|verify} messages.
                     * @param message ListOrdersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListOrdersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOrdersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOrdersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListOrdersResponse;

                    /**
                     * Decodes a ListOrdersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOrdersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListOrdersResponse;

                    /**
                     * Verifies a ListOrdersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOrdersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOrdersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListOrdersResponse;

                    /**
                     * Creates a plain object from a ListOrdersResponse message. Also converts values to other types if specified.
                     * @param message ListOrdersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListOrdersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOrdersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOrdersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetOrderRequest. */
                interface IGetOrderRequest {

                    /** GetOrderRequest name */
                    name?: (string|null);
                }

                /** Represents a GetOrderRequest. */
                class GetOrderRequest implements IGetOrderRequest {

                    /**
                     * Constructs a new GetOrderRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetOrderRequest);

                    /** GetOrderRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetOrderRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetOrderRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetOrderRequest): google.cloud.gdchardwaremanagement.v1alpha.GetOrderRequest;

                    /**
                     * Encodes the specified GetOrderRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetOrderRequest.verify|verify} messages.
                     * @param message GetOrderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IGetOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetOrderRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetOrderRequest.verify|verify} messages.
                     * @param message GetOrderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IGetOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetOrderRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetOrderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.GetOrderRequest;

                    /**
                     * Decodes a GetOrderRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetOrderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.GetOrderRequest;

                    /**
                     * Verifies a GetOrderRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetOrderRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetOrderRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.GetOrderRequest;

                    /**
                     * Creates a plain object from a GetOrderRequest message. Also converts values to other types if specified.
                     * @param message GetOrderRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.GetOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetOrderRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetOrderRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateOrderRequest. */
                interface ICreateOrderRequest {

                    /** CreateOrderRequest parent */
                    parent?: (string|null);

                    /** CreateOrderRequest orderId */
                    orderId?: (string|null);

                    /** CreateOrderRequest order */
                    order?: (google.cloud.gdchardwaremanagement.v1alpha.IOrder|null);

                    /** CreateOrderRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateOrderRequest. */
                class CreateOrderRequest implements ICreateOrderRequest {

                    /**
                     * Constructs a new CreateOrderRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ICreateOrderRequest);

                    /** CreateOrderRequest parent. */
                    public parent: string;

                    /** CreateOrderRequest orderId. */
                    public orderId: string;

                    /** CreateOrderRequest order. */
                    public order?: (google.cloud.gdchardwaremanagement.v1alpha.IOrder|null);

                    /** CreateOrderRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateOrderRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateOrderRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ICreateOrderRequest): google.cloud.gdchardwaremanagement.v1alpha.CreateOrderRequest;

                    /**
                     * Encodes the specified CreateOrderRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.CreateOrderRequest.verify|verify} messages.
                     * @param message CreateOrderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ICreateOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateOrderRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.CreateOrderRequest.verify|verify} messages.
                     * @param message CreateOrderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ICreateOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateOrderRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateOrderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.CreateOrderRequest;

                    /**
                     * Decodes a CreateOrderRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateOrderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.CreateOrderRequest;

                    /**
                     * Verifies a CreateOrderRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateOrderRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateOrderRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.CreateOrderRequest;

                    /**
                     * Creates a plain object from a CreateOrderRequest message. Also converts values to other types if specified.
                     * @param message CreateOrderRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.CreateOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateOrderRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateOrderRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateOrderRequest. */
                interface IUpdateOrderRequest {

                    /** UpdateOrderRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateOrderRequest order */
                    order?: (google.cloud.gdchardwaremanagement.v1alpha.IOrder|null);

                    /** UpdateOrderRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateOrderRequest. */
                class UpdateOrderRequest implements IUpdateOrderRequest {

                    /**
                     * Constructs a new UpdateOrderRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IUpdateOrderRequest);

                    /** UpdateOrderRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateOrderRequest order. */
                    public order?: (google.cloud.gdchardwaremanagement.v1alpha.IOrder|null);

                    /** UpdateOrderRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateOrderRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateOrderRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IUpdateOrderRequest): google.cloud.gdchardwaremanagement.v1alpha.UpdateOrderRequest;

                    /**
                     * Encodes the specified UpdateOrderRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.UpdateOrderRequest.verify|verify} messages.
                     * @param message UpdateOrderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IUpdateOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateOrderRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.UpdateOrderRequest.verify|verify} messages.
                     * @param message UpdateOrderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IUpdateOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateOrderRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateOrderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.UpdateOrderRequest;

                    /**
                     * Decodes an UpdateOrderRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateOrderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.UpdateOrderRequest;

                    /**
                     * Verifies an UpdateOrderRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateOrderRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateOrderRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.UpdateOrderRequest;

                    /**
                     * Creates a plain object from an UpdateOrderRequest message. Also converts values to other types if specified.
                     * @param message UpdateOrderRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.UpdateOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateOrderRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateOrderRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteOrderRequest. */
                interface IDeleteOrderRequest {

                    /** DeleteOrderRequest name */
                    name?: (string|null);

                    /** DeleteOrderRequest requestId */
                    requestId?: (string|null);

                    /** DeleteOrderRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteOrderRequest. */
                class DeleteOrderRequest implements IDeleteOrderRequest {

                    /**
                     * Constructs a new DeleteOrderRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IDeleteOrderRequest);

                    /** DeleteOrderRequest name. */
                    public name: string;

                    /** DeleteOrderRequest requestId. */
                    public requestId: string;

                    /** DeleteOrderRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteOrderRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteOrderRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IDeleteOrderRequest): google.cloud.gdchardwaremanagement.v1alpha.DeleteOrderRequest;

                    /**
                     * Encodes the specified DeleteOrderRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.DeleteOrderRequest.verify|verify} messages.
                     * @param message DeleteOrderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IDeleteOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteOrderRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.DeleteOrderRequest.verify|verify} messages.
                     * @param message DeleteOrderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IDeleteOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteOrderRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteOrderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.DeleteOrderRequest;

                    /**
                     * Decodes a DeleteOrderRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteOrderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.DeleteOrderRequest;

                    /**
                     * Verifies a DeleteOrderRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteOrderRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteOrderRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.DeleteOrderRequest;

                    /**
                     * Creates a plain object from a DeleteOrderRequest message. Also converts values to other types if specified.
                     * @param message DeleteOrderRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.DeleteOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteOrderRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteOrderRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SubmitOrderRequest. */
                interface ISubmitOrderRequest {

                    /** SubmitOrderRequest name */
                    name?: (string|null);

                    /** SubmitOrderRequest requestId */
                    requestId?: (string|null);

                    /** SubmitOrderRequest type */
                    type?: (google.cloud.gdchardwaremanagement.v1alpha.SubmitOrderRequest.Type|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.SubmitOrderRequest.Type|null);
                }

                /** Represents a SubmitOrderRequest. */
                class SubmitOrderRequest implements ISubmitOrderRequest {

                    /**
                     * Constructs a new SubmitOrderRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISubmitOrderRequest);

                    /** SubmitOrderRequest name. */
                    public name: string;

                    /** SubmitOrderRequest requestId. */
                    public requestId: string;

                    /** SubmitOrderRequest type. */
                    public type: (google.cloud.gdchardwaremanagement.v1alpha.SubmitOrderRequest.Type|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.SubmitOrderRequest.Type);

                    /**
                     * Creates a new SubmitOrderRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubmitOrderRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISubmitOrderRequest): google.cloud.gdchardwaremanagement.v1alpha.SubmitOrderRequest;

                    /**
                     * Encodes the specified SubmitOrderRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.SubmitOrderRequest.verify|verify} messages.
                     * @param message SubmitOrderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ISubmitOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubmitOrderRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.SubmitOrderRequest.verify|verify} messages.
                     * @param message SubmitOrderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ISubmitOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubmitOrderRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubmitOrderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.SubmitOrderRequest;

                    /**
                     * Decodes a SubmitOrderRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubmitOrderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.SubmitOrderRequest;

                    /**
                     * Verifies a SubmitOrderRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubmitOrderRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubmitOrderRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.SubmitOrderRequest;

                    /**
                     * Creates a plain object from a SubmitOrderRequest message. Also converts values to other types if specified.
                     * @param message SubmitOrderRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.SubmitOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubmitOrderRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SubmitOrderRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SubmitOrderRequest {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        INFO_PENDING = 1,
                        INFO_COMPLETE = 2
                    }
                }

                /** Properties of a ListSitesRequest. */
                interface IListSitesRequest {

                    /** ListSitesRequest parent */
                    parent?: (string|null);

                    /** ListSitesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSitesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSitesRequest filter */
                    filter?: (string|null);

                    /** ListSitesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListSitesRequest. */
                class ListSitesRequest implements IListSitesRequest {

                    /**
                     * Constructs a new ListSitesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListSitesRequest);

                    /** ListSitesRequest parent. */
                    public parent: string;

                    /** ListSitesRequest pageSize. */
                    public pageSize: number;

                    /** ListSitesRequest pageToken. */
                    public pageToken: string;

                    /** ListSitesRequest filter. */
                    public filter: string;

                    /** ListSitesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListSitesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSitesRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListSitesRequest): google.cloud.gdchardwaremanagement.v1alpha.ListSitesRequest;

                    /**
                     * Encodes the specified ListSitesRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListSitesRequest.verify|verify} messages.
                     * @param message ListSitesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListSitesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSitesRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListSitesRequest.verify|verify} messages.
                     * @param message ListSitesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListSitesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSitesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSitesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListSitesRequest;

                    /**
                     * Decodes a ListSitesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSitesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListSitesRequest;

                    /**
                     * Verifies a ListSitesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSitesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSitesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListSitesRequest;

                    /**
                     * Creates a plain object from a ListSitesRequest message. Also converts values to other types if specified.
                     * @param message ListSitesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListSitesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSitesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSitesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSitesResponse. */
                interface IListSitesResponse {

                    /** ListSitesResponse sites */
                    sites?: (google.cloud.gdchardwaremanagement.v1alpha.ISite[]|null);

                    /** ListSitesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListSitesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListSitesResponse. */
                class ListSitesResponse implements IListSitesResponse {

                    /**
                     * Constructs a new ListSitesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListSitesResponse);

                    /** ListSitesResponse sites. */
                    public sites: google.cloud.gdchardwaremanagement.v1alpha.ISite[];

                    /** ListSitesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListSitesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListSitesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSitesResponse instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListSitesResponse): google.cloud.gdchardwaremanagement.v1alpha.ListSitesResponse;

                    /**
                     * Encodes the specified ListSitesResponse message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListSitesResponse.verify|verify} messages.
                     * @param message ListSitesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListSitesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSitesResponse message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListSitesResponse.verify|verify} messages.
                     * @param message ListSitesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListSitesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSitesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSitesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListSitesResponse;

                    /**
                     * Decodes a ListSitesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSitesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListSitesResponse;

                    /**
                     * Verifies a ListSitesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSitesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSitesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListSitesResponse;

                    /**
                     * Creates a plain object from a ListSitesResponse message. Also converts values to other types if specified.
                     * @param message ListSitesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListSitesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSitesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSitesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSiteRequest. */
                interface IGetSiteRequest {

                    /** GetSiteRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSiteRequest. */
                class GetSiteRequest implements IGetSiteRequest {

                    /**
                     * Constructs a new GetSiteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetSiteRequest);

                    /** GetSiteRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSiteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSiteRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetSiteRequest): google.cloud.gdchardwaremanagement.v1alpha.GetSiteRequest;

                    /**
                     * Encodes the specified GetSiteRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetSiteRequest.verify|verify} messages.
                     * @param message GetSiteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IGetSiteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSiteRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetSiteRequest.verify|verify} messages.
                     * @param message GetSiteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IGetSiteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSiteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSiteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.GetSiteRequest;

                    /**
                     * Decodes a GetSiteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSiteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.GetSiteRequest;

                    /**
                     * Verifies a GetSiteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSiteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSiteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.GetSiteRequest;

                    /**
                     * Creates a plain object from a GetSiteRequest message. Also converts values to other types if specified.
                     * @param message GetSiteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.GetSiteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSiteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSiteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateSiteRequest. */
                interface ICreateSiteRequest {

                    /** CreateSiteRequest parent */
                    parent?: (string|null);

                    /** CreateSiteRequest siteId */
                    siteId?: (string|null);

                    /** CreateSiteRequest site */
                    site?: (google.cloud.gdchardwaremanagement.v1alpha.ISite|null);

                    /** CreateSiteRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateSiteRequest. */
                class CreateSiteRequest implements ICreateSiteRequest {

                    /**
                     * Constructs a new CreateSiteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ICreateSiteRequest);

                    /** CreateSiteRequest parent. */
                    public parent: string;

                    /** CreateSiteRequest siteId. */
                    public siteId: string;

                    /** CreateSiteRequest site. */
                    public site?: (google.cloud.gdchardwaremanagement.v1alpha.ISite|null);

                    /** CreateSiteRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateSiteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSiteRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ICreateSiteRequest): google.cloud.gdchardwaremanagement.v1alpha.CreateSiteRequest;

                    /**
                     * Encodes the specified CreateSiteRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.CreateSiteRequest.verify|verify} messages.
                     * @param message CreateSiteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ICreateSiteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSiteRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.CreateSiteRequest.verify|verify} messages.
                     * @param message CreateSiteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ICreateSiteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSiteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSiteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.CreateSiteRequest;

                    /**
                     * Decodes a CreateSiteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSiteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.CreateSiteRequest;

                    /**
                     * Verifies a CreateSiteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSiteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSiteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.CreateSiteRequest;

                    /**
                     * Creates a plain object from a CreateSiteRequest message. Also converts values to other types if specified.
                     * @param message CreateSiteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.CreateSiteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSiteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateSiteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateSiteRequest. */
                interface IUpdateSiteRequest {

                    /** UpdateSiteRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSiteRequest site */
                    site?: (google.cloud.gdchardwaremanagement.v1alpha.ISite|null);

                    /** UpdateSiteRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateSiteRequest. */
                class UpdateSiteRequest implements IUpdateSiteRequest {

                    /**
                     * Constructs a new UpdateSiteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IUpdateSiteRequest);

                    /** UpdateSiteRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSiteRequest site. */
                    public site?: (google.cloud.gdchardwaremanagement.v1alpha.ISite|null);

                    /** UpdateSiteRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateSiteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSiteRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IUpdateSiteRequest): google.cloud.gdchardwaremanagement.v1alpha.UpdateSiteRequest;

                    /**
                     * Encodes the specified UpdateSiteRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.UpdateSiteRequest.verify|verify} messages.
                     * @param message UpdateSiteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IUpdateSiteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSiteRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.UpdateSiteRequest.verify|verify} messages.
                     * @param message UpdateSiteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IUpdateSiteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSiteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSiteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.UpdateSiteRequest;

                    /**
                     * Decodes an UpdateSiteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSiteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.UpdateSiteRequest;

                    /**
                     * Verifies an UpdateSiteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSiteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSiteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.UpdateSiteRequest;

                    /**
                     * Creates a plain object from an UpdateSiteRequest message. Also converts values to other types if specified.
                     * @param message UpdateSiteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.UpdateSiteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSiteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateSiteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteSiteRequest. */
                interface IDeleteSiteRequest {

                    /** DeleteSiteRequest name */
                    name?: (string|null);

                    /** DeleteSiteRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteSiteRequest. */
                class DeleteSiteRequest implements IDeleteSiteRequest {

                    /**
                     * Constructs a new DeleteSiteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IDeleteSiteRequest);

                    /** DeleteSiteRequest name. */
                    public name: string;

                    /** DeleteSiteRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteSiteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteSiteRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IDeleteSiteRequest): google.cloud.gdchardwaremanagement.v1alpha.DeleteSiteRequest;

                    /**
                     * Encodes the specified DeleteSiteRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.DeleteSiteRequest.verify|verify} messages.
                     * @param message DeleteSiteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IDeleteSiteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteSiteRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.DeleteSiteRequest.verify|verify} messages.
                     * @param message DeleteSiteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IDeleteSiteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteSiteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteSiteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.DeleteSiteRequest;

                    /**
                     * Decodes a DeleteSiteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteSiteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.DeleteSiteRequest;

                    /**
                     * Verifies a DeleteSiteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteSiteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteSiteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.DeleteSiteRequest;

                    /**
                     * Creates a plain object from a DeleteSiteRequest message. Also converts values to other types if specified.
                     * @param message DeleteSiteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.DeleteSiteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteSiteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteSiteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListHardwareGroupsRequest. */
                interface IListHardwareGroupsRequest {

                    /** ListHardwareGroupsRequest parent */
                    parent?: (string|null);

                    /** ListHardwareGroupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListHardwareGroupsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListHardwareGroupsRequest filter */
                    filter?: (string|null);

                    /** ListHardwareGroupsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListHardwareGroupsRequest. */
                class ListHardwareGroupsRequest implements IListHardwareGroupsRequest {

                    /**
                     * Constructs a new ListHardwareGroupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareGroupsRequest);

                    /** ListHardwareGroupsRequest parent. */
                    public parent: string;

                    /** ListHardwareGroupsRequest pageSize. */
                    public pageSize: number;

                    /** ListHardwareGroupsRequest pageToken. */
                    public pageToken: string;

                    /** ListHardwareGroupsRequest filter. */
                    public filter: string;

                    /** ListHardwareGroupsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListHardwareGroupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHardwareGroupsRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareGroupsRequest): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsRequest;

                    /**
                     * Encodes the specified ListHardwareGroupsRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsRequest.verify|verify} messages.
                     * @param message ListHardwareGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHardwareGroupsRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsRequest.verify|verify} messages.
                     * @param message ListHardwareGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHardwareGroupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHardwareGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsRequest;

                    /**
                     * Decodes a ListHardwareGroupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHardwareGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsRequest;

                    /**
                     * Verifies a ListHardwareGroupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHardwareGroupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHardwareGroupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsRequest;

                    /**
                     * Creates a plain object from a ListHardwareGroupsRequest message. Also converts values to other types if specified.
                     * @param message ListHardwareGroupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHardwareGroupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHardwareGroupsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListHardwareGroupsResponse. */
                interface IListHardwareGroupsResponse {

                    /** ListHardwareGroupsResponse hardwareGroups */
                    hardwareGroups?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwareGroup[]|null);

                    /** ListHardwareGroupsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListHardwareGroupsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListHardwareGroupsResponse. */
                class ListHardwareGroupsResponse implements IListHardwareGroupsResponse {

                    /**
                     * Constructs a new ListHardwareGroupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareGroupsResponse);

                    /** ListHardwareGroupsResponse hardwareGroups. */
                    public hardwareGroups: google.cloud.gdchardwaremanagement.v1alpha.IHardwareGroup[];

                    /** ListHardwareGroupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListHardwareGroupsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListHardwareGroupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHardwareGroupsResponse instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareGroupsResponse): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsResponse;

                    /**
                     * Encodes the specified ListHardwareGroupsResponse message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsResponse.verify|verify} messages.
                     * @param message ListHardwareGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHardwareGroupsResponse message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsResponse.verify|verify} messages.
                     * @param message ListHardwareGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHardwareGroupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHardwareGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsResponse;

                    /**
                     * Decodes a ListHardwareGroupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHardwareGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsResponse;

                    /**
                     * Verifies a ListHardwareGroupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHardwareGroupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHardwareGroupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsResponse;

                    /**
                     * Creates a plain object from a ListHardwareGroupsResponse message. Also converts values to other types if specified.
                     * @param message ListHardwareGroupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListHardwareGroupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHardwareGroupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHardwareGroupsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetHardwareGroupRequest. */
                interface IGetHardwareGroupRequest {

                    /** GetHardwareGroupRequest name */
                    name?: (string|null);
                }

                /** Represents a GetHardwareGroupRequest. */
                class GetHardwareGroupRequest implements IGetHardwareGroupRequest {

                    /**
                     * Constructs a new GetHardwareGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetHardwareGroupRequest);

                    /** GetHardwareGroupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetHardwareGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetHardwareGroupRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetHardwareGroupRequest): google.cloud.gdchardwaremanagement.v1alpha.GetHardwareGroupRequest;

                    /**
                     * Encodes the specified GetHardwareGroupRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetHardwareGroupRequest.verify|verify} messages.
                     * @param message GetHardwareGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IGetHardwareGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetHardwareGroupRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetHardwareGroupRequest.verify|verify} messages.
                     * @param message GetHardwareGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IGetHardwareGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetHardwareGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetHardwareGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.GetHardwareGroupRequest;

                    /**
                     * Decodes a GetHardwareGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetHardwareGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.GetHardwareGroupRequest;

                    /**
                     * Verifies a GetHardwareGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetHardwareGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetHardwareGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.GetHardwareGroupRequest;

                    /**
                     * Creates a plain object from a GetHardwareGroupRequest message. Also converts values to other types if specified.
                     * @param message GetHardwareGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.GetHardwareGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetHardwareGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetHardwareGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateHardwareGroupRequest. */
                interface ICreateHardwareGroupRequest {

                    /** CreateHardwareGroupRequest parent */
                    parent?: (string|null);

                    /** CreateHardwareGroupRequest hardwareGroupId */
                    hardwareGroupId?: (string|null);

                    /** CreateHardwareGroupRequest hardwareGroup */
                    hardwareGroup?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwareGroup|null);

                    /** CreateHardwareGroupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateHardwareGroupRequest. */
                class CreateHardwareGroupRequest implements ICreateHardwareGroupRequest {

                    /**
                     * Constructs a new CreateHardwareGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ICreateHardwareGroupRequest);

                    /** CreateHardwareGroupRequest parent. */
                    public parent: string;

                    /** CreateHardwareGroupRequest hardwareGroupId. */
                    public hardwareGroupId: string;

                    /** CreateHardwareGroupRequest hardwareGroup. */
                    public hardwareGroup?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwareGroup|null);

                    /** CreateHardwareGroupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateHardwareGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateHardwareGroupRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ICreateHardwareGroupRequest): google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareGroupRequest;

                    /**
                     * Encodes the specified CreateHardwareGroupRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareGroupRequest.verify|verify} messages.
                     * @param message CreateHardwareGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ICreateHardwareGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateHardwareGroupRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareGroupRequest.verify|verify} messages.
                     * @param message CreateHardwareGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ICreateHardwareGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateHardwareGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateHardwareGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareGroupRequest;

                    /**
                     * Decodes a CreateHardwareGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateHardwareGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareGroupRequest;

                    /**
                     * Verifies a CreateHardwareGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateHardwareGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateHardwareGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareGroupRequest;

                    /**
                     * Creates a plain object from a CreateHardwareGroupRequest message. Also converts values to other types if specified.
                     * @param message CreateHardwareGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateHardwareGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateHardwareGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateHardwareGroupRequest. */
                interface IUpdateHardwareGroupRequest {

                    /** UpdateHardwareGroupRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateHardwareGroupRequest hardwareGroup */
                    hardwareGroup?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwareGroup|null);

                    /** UpdateHardwareGroupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateHardwareGroupRequest. */
                class UpdateHardwareGroupRequest implements IUpdateHardwareGroupRequest {

                    /**
                     * Constructs a new UpdateHardwareGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IUpdateHardwareGroupRequest);

                    /** UpdateHardwareGroupRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateHardwareGroupRequest hardwareGroup. */
                    public hardwareGroup?: (google.cloud.gdchardwaremanagement.v1alpha.IHardwareGroup|null);

                    /** UpdateHardwareGroupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateHardwareGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateHardwareGroupRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IUpdateHardwareGroupRequest): google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareGroupRequest;

                    /**
                     * Encodes the specified UpdateHardwareGroupRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareGroupRequest.verify|verify} messages.
                     * @param message UpdateHardwareGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IUpdateHardwareGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateHardwareGroupRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareGroupRequest.verify|verify} messages.
                     * @param message UpdateHardwareGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IUpdateHardwareGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateHardwareGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateHardwareGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareGroupRequest;

                    /**
                     * Decodes an UpdateHardwareGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateHardwareGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareGroupRequest;

                    /**
                     * Verifies an UpdateHardwareGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateHardwareGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateHardwareGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareGroupRequest;

                    /**
                     * Creates a plain object from an UpdateHardwareGroupRequest message. Also converts values to other types if specified.
                     * @param message UpdateHardwareGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateHardwareGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateHardwareGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteHardwareGroupRequest. */
                interface IDeleteHardwareGroupRequest {

                    /** DeleteHardwareGroupRequest name */
                    name?: (string|null);

                    /** DeleteHardwareGroupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteHardwareGroupRequest. */
                class DeleteHardwareGroupRequest implements IDeleteHardwareGroupRequest {

                    /**
                     * Constructs a new DeleteHardwareGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IDeleteHardwareGroupRequest);

                    /** DeleteHardwareGroupRequest name. */
                    public name: string;

                    /** DeleteHardwareGroupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteHardwareGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteHardwareGroupRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IDeleteHardwareGroupRequest): google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareGroupRequest;

                    /**
                     * Encodes the specified DeleteHardwareGroupRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareGroupRequest.verify|verify} messages.
                     * @param message DeleteHardwareGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IDeleteHardwareGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteHardwareGroupRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareGroupRequest.verify|verify} messages.
                     * @param message DeleteHardwareGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IDeleteHardwareGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteHardwareGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteHardwareGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareGroupRequest;

                    /**
                     * Decodes a DeleteHardwareGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteHardwareGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareGroupRequest;

                    /**
                     * Verifies a DeleteHardwareGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteHardwareGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteHardwareGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareGroupRequest;

                    /**
                     * Creates a plain object from a DeleteHardwareGroupRequest message. Also converts values to other types if specified.
                     * @param message DeleteHardwareGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteHardwareGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteHardwareGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListHardwareRequest. */
                interface IListHardwareRequest {

                    /** ListHardwareRequest parent */
                    parent?: (string|null);

                    /** ListHardwareRequest pageSize */
                    pageSize?: (number|null);

                    /** ListHardwareRequest pageToken */
                    pageToken?: (string|null);

                    /** ListHardwareRequest filter */
                    filter?: (string|null);

                    /** ListHardwareRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListHardwareRequest. */
                class ListHardwareRequest implements IListHardwareRequest {

                    /**
                     * Constructs a new ListHardwareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareRequest);

                    /** ListHardwareRequest parent. */
                    public parent: string;

                    /** ListHardwareRequest pageSize. */
                    public pageSize: number;

                    /** ListHardwareRequest pageToken. */
                    public pageToken: string;

                    /** ListHardwareRequest filter. */
                    public filter: string;

                    /** ListHardwareRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListHardwareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHardwareRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareRequest): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareRequest;

                    /**
                     * Encodes the specified ListHardwareRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListHardwareRequest.verify|verify} messages.
                     * @param message ListHardwareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHardwareRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListHardwareRequest.verify|verify} messages.
                     * @param message ListHardwareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHardwareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHardwareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareRequest;

                    /**
                     * Decodes a ListHardwareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHardwareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareRequest;

                    /**
                     * Verifies a ListHardwareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHardwareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHardwareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareRequest;

                    /**
                     * Creates a plain object from a ListHardwareRequest message. Also converts values to other types if specified.
                     * @param message ListHardwareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListHardwareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHardwareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHardwareRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListHardwareResponse. */
                interface IListHardwareResponse {

                    /** ListHardwareResponse hardware */
                    hardware?: (google.cloud.gdchardwaremanagement.v1alpha.IHardware[]|null);

                    /** ListHardwareResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListHardwareResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListHardwareResponse. */
                class ListHardwareResponse implements IListHardwareResponse {

                    /**
                     * Constructs a new ListHardwareResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareResponse);

                    /** ListHardwareResponse hardware. */
                    public hardware: google.cloud.gdchardwaremanagement.v1alpha.IHardware[];

                    /** ListHardwareResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListHardwareResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListHardwareResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHardwareResponse instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareResponse): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareResponse;

                    /**
                     * Encodes the specified ListHardwareResponse message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListHardwareResponse.verify|verify} messages.
                     * @param message ListHardwareResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHardwareResponse message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListHardwareResponse.verify|verify} messages.
                     * @param message ListHardwareResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListHardwareResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHardwareResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHardwareResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareResponse;

                    /**
                     * Decodes a ListHardwareResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHardwareResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareResponse;

                    /**
                     * Verifies a ListHardwareResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHardwareResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHardwareResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListHardwareResponse;

                    /**
                     * Creates a plain object from a ListHardwareResponse message. Also converts values to other types if specified.
                     * @param message ListHardwareResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListHardwareResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHardwareResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHardwareResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetHardwareRequest. */
                interface IGetHardwareRequest {

                    /** GetHardwareRequest name */
                    name?: (string|null);
                }

                /** Represents a GetHardwareRequest. */
                class GetHardwareRequest implements IGetHardwareRequest {

                    /**
                     * Constructs a new GetHardwareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetHardwareRequest);

                    /** GetHardwareRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetHardwareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetHardwareRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetHardwareRequest): google.cloud.gdchardwaremanagement.v1alpha.GetHardwareRequest;

                    /**
                     * Encodes the specified GetHardwareRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetHardwareRequest.verify|verify} messages.
                     * @param message GetHardwareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IGetHardwareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetHardwareRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetHardwareRequest.verify|verify} messages.
                     * @param message GetHardwareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IGetHardwareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetHardwareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetHardwareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.GetHardwareRequest;

                    /**
                     * Decodes a GetHardwareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetHardwareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.GetHardwareRequest;

                    /**
                     * Verifies a GetHardwareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetHardwareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetHardwareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.GetHardwareRequest;

                    /**
                     * Creates a plain object from a GetHardwareRequest message. Also converts values to other types if specified.
                     * @param message GetHardwareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.GetHardwareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetHardwareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetHardwareRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateHardwareRequest. */
                interface ICreateHardwareRequest {

                    /** CreateHardwareRequest parent */
                    parent?: (string|null);

                    /** CreateHardwareRequest hardwareId */
                    hardwareId?: (string|null);

                    /** CreateHardwareRequest hardware */
                    hardware?: (google.cloud.gdchardwaremanagement.v1alpha.IHardware|null);
                }

                /** Represents a CreateHardwareRequest. */
                class CreateHardwareRequest implements ICreateHardwareRequest {

                    /**
                     * Constructs a new CreateHardwareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ICreateHardwareRequest);

                    /** CreateHardwareRequest parent. */
                    public parent: string;

                    /** CreateHardwareRequest hardwareId. */
                    public hardwareId: string;

                    /** CreateHardwareRequest hardware. */
                    public hardware?: (google.cloud.gdchardwaremanagement.v1alpha.IHardware|null);

                    /**
                     * Creates a new CreateHardwareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateHardwareRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ICreateHardwareRequest): google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareRequest;

                    /**
                     * Encodes the specified CreateHardwareRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareRequest.verify|verify} messages.
                     * @param message CreateHardwareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ICreateHardwareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateHardwareRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareRequest.verify|verify} messages.
                     * @param message CreateHardwareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ICreateHardwareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateHardwareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateHardwareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareRequest;

                    /**
                     * Decodes a CreateHardwareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateHardwareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareRequest;

                    /**
                     * Verifies a CreateHardwareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateHardwareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateHardwareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareRequest;

                    /**
                     * Creates a plain object from a CreateHardwareRequest message. Also converts values to other types if specified.
                     * @param message CreateHardwareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.CreateHardwareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateHardwareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateHardwareRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateHardwareRequest. */
                interface IUpdateHardwareRequest {

                    /** UpdateHardwareRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateHardwareRequest hardware */
                    hardware?: (google.cloud.gdchardwaremanagement.v1alpha.IHardware|null);

                    /** UpdateHardwareRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateHardwareRequest. */
                class UpdateHardwareRequest implements IUpdateHardwareRequest {

                    /**
                     * Constructs a new UpdateHardwareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IUpdateHardwareRequest);

                    /** UpdateHardwareRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateHardwareRequest hardware. */
                    public hardware?: (google.cloud.gdchardwaremanagement.v1alpha.IHardware|null);

                    /** UpdateHardwareRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateHardwareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateHardwareRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IUpdateHardwareRequest): google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareRequest;

                    /**
                     * Encodes the specified UpdateHardwareRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareRequest.verify|verify} messages.
                     * @param message UpdateHardwareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IUpdateHardwareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateHardwareRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareRequest.verify|verify} messages.
                     * @param message UpdateHardwareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IUpdateHardwareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateHardwareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateHardwareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareRequest;

                    /**
                     * Decodes an UpdateHardwareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateHardwareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareRequest;

                    /**
                     * Verifies an UpdateHardwareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateHardwareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateHardwareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareRequest;

                    /**
                     * Creates a plain object from an UpdateHardwareRequest message. Also converts values to other types if specified.
                     * @param message UpdateHardwareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.UpdateHardwareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateHardwareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateHardwareRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteHardwareRequest. */
                interface IDeleteHardwareRequest {

                    /** DeleteHardwareRequest name */
                    name?: (string|null);

                    /** DeleteHardwareRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteHardwareRequest. */
                class DeleteHardwareRequest implements IDeleteHardwareRequest {

                    /**
                     * Constructs a new DeleteHardwareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IDeleteHardwareRequest);

                    /** DeleteHardwareRequest name. */
                    public name: string;

                    /** DeleteHardwareRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteHardwareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteHardwareRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IDeleteHardwareRequest): google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareRequest;

                    /**
                     * Encodes the specified DeleteHardwareRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareRequest.verify|verify} messages.
                     * @param message DeleteHardwareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IDeleteHardwareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteHardwareRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareRequest.verify|verify} messages.
                     * @param message DeleteHardwareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IDeleteHardwareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteHardwareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteHardwareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareRequest;

                    /**
                     * Decodes a DeleteHardwareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteHardwareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareRequest;

                    /**
                     * Verifies a DeleteHardwareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteHardwareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteHardwareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareRequest;

                    /**
                     * Creates a plain object from a DeleteHardwareRequest message. Also converts values to other types if specified.
                     * @param message DeleteHardwareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.DeleteHardwareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteHardwareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteHardwareRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCommentsRequest. */
                interface IListCommentsRequest {

                    /** ListCommentsRequest parent */
                    parent?: (string|null);

                    /** ListCommentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCommentsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCommentsRequest filter */
                    filter?: (string|null);

                    /** ListCommentsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListCommentsRequest. */
                class ListCommentsRequest implements IListCommentsRequest {

                    /**
                     * Constructs a new ListCommentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListCommentsRequest);

                    /** ListCommentsRequest parent. */
                    public parent: string;

                    /** ListCommentsRequest pageSize. */
                    public pageSize: number;

                    /** ListCommentsRequest pageToken. */
                    public pageToken: string;

                    /** ListCommentsRequest filter. */
                    public filter: string;

                    /** ListCommentsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListCommentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCommentsRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListCommentsRequest): google.cloud.gdchardwaremanagement.v1alpha.ListCommentsRequest;

                    /**
                     * Encodes the specified ListCommentsRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListCommentsRequest.verify|verify} messages.
                     * @param message ListCommentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListCommentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCommentsRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListCommentsRequest.verify|verify} messages.
                     * @param message ListCommentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListCommentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCommentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCommentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListCommentsRequest;

                    /**
                     * Decodes a ListCommentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCommentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListCommentsRequest;

                    /**
                     * Verifies a ListCommentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCommentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCommentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListCommentsRequest;

                    /**
                     * Creates a plain object from a ListCommentsRequest message. Also converts values to other types if specified.
                     * @param message ListCommentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListCommentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCommentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCommentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCommentsResponse. */
                interface IListCommentsResponse {

                    /** ListCommentsResponse comments */
                    comments?: (google.cloud.gdchardwaremanagement.v1alpha.IComment[]|null);

                    /** ListCommentsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListCommentsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListCommentsResponse. */
                class ListCommentsResponse implements IListCommentsResponse {

                    /**
                     * Constructs a new ListCommentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListCommentsResponse);

                    /** ListCommentsResponse comments. */
                    public comments: google.cloud.gdchardwaremanagement.v1alpha.IComment[];

                    /** ListCommentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListCommentsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListCommentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCommentsResponse instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListCommentsResponse): google.cloud.gdchardwaremanagement.v1alpha.ListCommentsResponse;

                    /**
                     * Encodes the specified ListCommentsResponse message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListCommentsResponse.verify|verify} messages.
                     * @param message ListCommentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListCommentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCommentsResponse message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListCommentsResponse.verify|verify} messages.
                     * @param message ListCommentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListCommentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCommentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCommentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListCommentsResponse;

                    /**
                     * Decodes a ListCommentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCommentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListCommentsResponse;

                    /**
                     * Verifies a ListCommentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCommentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCommentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListCommentsResponse;

                    /**
                     * Creates a plain object from a ListCommentsResponse message. Also converts values to other types if specified.
                     * @param message ListCommentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListCommentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCommentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCommentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCommentRequest. */
                interface IGetCommentRequest {

                    /** GetCommentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCommentRequest. */
                class GetCommentRequest implements IGetCommentRequest {

                    /**
                     * Constructs a new GetCommentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetCommentRequest);

                    /** GetCommentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCommentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCommentRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetCommentRequest): google.cloud.gdchardwaremanagement.v1alpha.GetCommentRequest;

                    /**
                     * Encodes the specified GetCommentRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetCommentRequest.verify|verify} messages.
                     * @param message GetCommentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IGetCommentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCommentRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetCommentRequest.verify|verify} messages.
                     * @param message GetCommentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IGetCommentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCommentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCommentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.GetCommentRequest;

                    /**
                     * Decodes a GetCommentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCommentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.GetCommentRequest;

                    /**
                     * Verifies a GetCommentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCommentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCommentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.GetCommentRequest;

                    /**
                     * Creates a plain object from a GetCommentRequest message. Also converts values to other types if specified.
                     * @param message GetCommentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.GetCommentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCommentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCommentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateCommentRequest. */
                interface ICreateCommentRequest {

                    /** CreateCommentRequest parent */
                    parent?: (string|null);

                    /** CreateCommentRequest commentId */
                    commentId?: (string|null);

                    /** CreateCommentRequest comment */
                    comment?: (google.cloud.gdchardwaremanagement.v1alpha.IComment|null);

                    /** CreateCommentRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateCommentRequest. */
                class CreateCommentRequest implements ICreateCommentRequest {

                    /**
                     * Constructs a new CreateCommentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ICreateCommentRequest);

                    /** CreateCommentRequest parent. */
                    public parent: string;

                    /** CreateCommentRequest commentId. */
                    public commentId: string;

                    /** CreateCommentRequest comment. */
                    public comment?: (google.cloud.gdchardwaremanagement.v1alpha.IComment|null);

                    /** CreateCommentRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateCommentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCommentRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ICreateCommentRequest): google.cloud.gdchardwaremanagement.v1alpha.CreateCommentRequest;

                    /**
                     * Encodes the specified CreateCommentRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.CreateCommentRequest.verify|verify} messages.
                     * @param message CreateCommentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ICreateCommentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCommentRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.CreateCommentRequest.verify|verify} messages.
                     * @param message CreateCommentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ICreateCommentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCommentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCommentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.CreateCommentRequest;

                    /**
                     * Decodes a CreateCommentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCommentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.CreateCommentRequest;

                    /**
                     * Verifies a CreateCommentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCommentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCommentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.CreateCommentRequest;

                    /**
                     * Creates a plain object from a CreateCommentRequest message. Also converts values to other types if specified.
                     * @param message CreateCommentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.CreateCommentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCommentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCommentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecordActionOnCommentRequest. */
                interface IRecordActionOnCommentRequest {

                    /** RecordActionOnCommentRequest name */
                    name?: (string|null);

                    /** RecordActionOnCommentRequest actionType */
                    actionType?: (google.cloud.gdchardwaremanagement.v1alpha.RecordActionOnCommentRequest.ActionType|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.RecordActionOnCommentRequest.ActionType|null);
                }

                /** Represents a RecordActionOnCommentRequest. */
                class RecordActionOnCommentRequest implements IRecordActionOnCommentRequest {

                    /**
                     * Constructs a new RecordActionOnCommentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IRecordActionOnCommentRequest);

                    /** RecordActionOnCommentRequest name. */
                    public name: string;

                    /** RecordActionOnCommentRequest actionType. */
                    public actionType: (google.cloud.gdchardwaremanagement.v1alpha.RecordActionOnCommentRequest.ActionType|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.RecordActionOnCommentRequest.ActionType);

                    /**
                     * Creates a new RecordActionOnCommentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecordActionOnCommentRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IRecordActionOnCommentRequest): google.cloud.gdchardwaremanagement.v1alpha.RecordActionOnCommentRequest;

                    /**
                     * Encodes the specified RecordActionOnCommentRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.RecordActionOnCommentRequest.verify|verify} messages.
                     * @param message RecordActionOnCommentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IRecordActionOnCommentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecordActionOnCommentRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.RecordActionOnCommentRequest.verify|verify} messages.
                     * @param message RecordActionOnCommentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IRecordActionOnCommentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecordActionOnCommentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecordActionOnCommentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.RecordActionOnCommentRequest;

                    /**
                     * Decodes a RecordActionOnCommentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecordActionOnCommentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.RecordActionOnCommentRequest;

                    /**
                     * Verifies a RecordActionOnCommentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecordActionOnCommentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecordActionOnCommentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.RecordActionOnCommentRequest;

                    /**
                     * Creates a plain object from a RecordActionOnCommentRequest message. Also converts values to other types if specified.
                     * @param message RecordActionOnCommentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.RecordActionOnCommentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecordActionOnCommentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecordActionOnCommentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RecordActionOnCommentRequest {

                    /** ActionType enum. */
                    enum ActionType {
                        ACTION_TYPE_UNSPECIFIED = 0,
                        READ = 1,
                        UNREAD = 2
                    }
                }

                /** Properties of a ListChangeLogEntriesRequest. */
                interface IListChangeLogEntriesRequest {

                    /** ListChangeLogEntriesRequest parent */
                    parent?: (string|null);

                    /** ListChangeLogEntriesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListChangeLogEntriesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListChangeLogEntriesRequest filter */
                    filter?: (string|null);

                    /** ListChangeLogEntriesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListChangeLogEntriesRequest. */
                class ListChangeLogEntriesRequest implements IListChangeLogEntriesRequest {

                    /**
                     * Constructs a new ListChangeLogEntriesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListChangeLogEntriesRequest);

                    /** ListChangeLogEntriesRequest parent. */
                    public parent: string;

                    /** ListChangeLogEntriesRequest pageSize. */
                    public pageSize: number;

                    /** ListChangeLogEntriesRequest pageToken. */
                    public pageToken: string;

                    /** ListChangeLogEntriesRequest filter. */
                    public filter: string;

                    /** ListChangeLogEntriesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListChangeLogEntriesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListChangeLogEntriesRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListChangeLogEntriesRequest): google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesRequest;

                    /**
                     * Encodes the specified ListChangeLogEntriesRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesRequest.verify|verify} messages.
                     * @param message ListChangeLogEntriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListChangeLogEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListChangeLogEntriesRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesRequest.verify|verify} messages.
                     * @param message ListChangeLogEntriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListChangeLogEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListChangeLogEntriesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListChangeLogEntriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesRequest;

                    /**
                     * Decodes a ListChangeLogEntriesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListChangeLogEntriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesRequest;

                    /**
                     * Verifies a ListChangeLogEntriesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListChangeLogEntriesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListChangeLogEntriesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesRequest;

                    /**
                     * Creates a plain object from a ListChangeLogEntriesRequest message. Also converts values to other types if specified.
                     * @param message ListChangeLogEntriesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListChangeLogEntriesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListChangeLogEntriesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListChangeLogEntriesResponse. */
                interface IListChangeLogEntriesResponse {

                    /** ListChangeLogEntriesResponse changeLogEntries */
                    changeLogEntries?: (google.cloud.gdchardwaremanagement.v1alpha.IChangeLogEntry[]|null);

                    /** ListChangeLogEntriesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListChangeLogEntriesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListChangeLogEntriesResponse. */
                class ListChangeLogEntriesResponse implements IListChangeLogEntriesResponse {

                    /**
                     * Constructs a new ListChangeLogEntriesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListChangeLogEntriesResponse);

                    /** ListChangeLogEntriesResponse changeLogEntries. */
                    public changeLogEntries: google.cloud.gdchardwaremanagement.v1alpha.IChangeLogEntry[];

                    /** ListChangeLogEntriesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListChangeLogEntriesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListChangeLogEntriesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListChangeLogEntriesResponse instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListChangeLogEntriesResponse): google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesResponse;

                    /**
                     * Encodes the specified ListChangeLogEntriesResponse message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesResponse.verify|verify} messages.
                     * @param message ListChangeLogEntriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListChangeLogEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListChangeLogEntriesResponse message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesResponse.verify|verify} messages.
                     * @param message ListChangeLogEntriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListChangeLogEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListChangeLogEntriesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListChangeLogEntriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesResponse;

                    /**
                     * Decodes a ListChangeLogEntriesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListChangeLogEntriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesResponse;

                    /**
                     * Verifies a ListChangeLogEntriesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListChangeLogEntriesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListChangeLogEntriesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesResponse;

                    /**
                     * Creates a plain object from a ListChangeLogEntriesResponse message. Also converts values to other types if specified.
                     * @param message ListChangeLogEntriesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListChangeLogEntriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListChangeLogEntriesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListChangeLogEntriesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetChangeLogEntryRequest. */
                interface IGetChangeLogEntryRequest {

                    /** GetChangeLogEntryRequest name */
                    name?: (string|null);
                }

                /** Represents a GetChangeLogEntryRequest. */
                class GetChangeLogEntryRequest implements IGetChangeLogEntryRequest {

                    /**
                     * Constructs a new GetChangeLogEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetChangeLogEntryRequest);

                    /** GetChangeLogEntryRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetChangeLogEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetChangeLogEntryRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetChangeLogEntryRequest): google.cloud.gdchardwaremanagement.v1alpha.GetChangeLogEntryRequest;

                    /**
                     * Encodes the specified GetChangeLogEntryRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetChangeLogEntryRequest.verify|verify} messages.
                     * @param message GetChangeLogEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IGetChangeLogEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetChangeLogEntryRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetChangeLogEntryRequest.verify|verify} messages.
                     * @param message GetChangeLogEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IGetChangeLogEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetChangeLogEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetChangeLogEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.GetChangeLogEntryRequest;

                    /**
                     * Decodes a GetChangeLogEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetChangeLogEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.GetChangeLogEntryRequest;

                    /**
                     * Verifies a GetChangeLogEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetChangeLogEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetChangeLogEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.GetChangeLogEntryRequest;

                    /**
                     * Creates a plain object from a GetChangeLogEntryRequest message. Also converts values to other types if specified.
                     * @param message GetChangeLogEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.GetChangeLogEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetChangeLogEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetChangeLogEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSkusRequest. */
                interface IListSkusRequest {

                    /** ListSkusRequest parent */
                    parent?: (string|null);

                    /** ListSkusRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSkusRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSkusRequest filter */
                    filter?: (string|null);

                    /** ListSkusRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListSkusRequest. */
                class ListSkusRequest implements IListSkusRequest {

                    /**
                     * Constructs a new ListSkusRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListSkusRequest);

                    /** ListSkusRequest parent. */
                    public parent: string;

                    /** ListSkusRequest pageSize. */
                    public pageSize: number;

                    /** ListSkusRequest pageToken. */
                    public pageToken: string;

                    /** ListSkusRequest filter. */
                    public filter: string;

                    /** ListSkusRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListSkusRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSkusRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListSkusRequest): google.cloud.gdchardwaremanagement.v1alpha.ListSkusRequest;

                    /**
                     * Encodes the specified ListSkusRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListSkusRequest.verify|verify} messages.
                     * @param message ListSkusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListSkusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSkusRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListSkusRequest.verify|verify} messages.
                     * @param message ListSkusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListSkusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSkusRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSkusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListSkusRequest;

                    /**
                     * Decodes a ListSkusRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSkusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListSkusRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListSkusRequest;

                    /**
                     * Creates a plain object from a ListSkusRequest message. Also converts values to other types if specified.
                     * @param message ListSkusRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListSkusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSkusRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSkusRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSkusResponse. */
                interface IListSkusResponse {

                    /** ListSkusResponse skus */
                    skus?: (google.cloud.gdchardwaremanagement.v1alpha.ISku[]|null);

                    /** ListSkusResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListSkusResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListSkusResponse. */
                class ListSkusResponse implements IListSkusResponse {

                    /**
                     * Constructs a new ListSkusResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListSkusResponse);

                    /** ListSkusResponse skus. */
                    public skus: google.cloud.gdchardwaremanagement.v1alpha.ISku[];

                    /** ListSkusResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListSkusResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListSkusResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSkusResponse instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListSkusResponse): google.cloud.gdchardwaremanagement.v1alpha.ListSkusResponse;

                    /**
                     * Encodes the specified ListSkusResponse message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListSkusResponse.verify|verify} messages.
                     * @param message ListSkusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListSkusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSkusResponse message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListSkusResponse.verify|verify} messages.
                     * @param message ListSkusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListSkusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSkusResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSkusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListSkusResponse;

                    /**
                     * Decodes a ListSkusResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSkusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListSkusResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListSkusResponse;

                    /**
                     * Creates a plain object from a ListSkusResponse message. Also converts values to other types if specified.
                     * @param message ListSkusResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListSkusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSkusResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSkusResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSkuRequest. */
                interface IGetSkuRequest {

                    /** GetSkuRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSkuRequest. */
                class GetSkuRequest implements IGetSkuRequest {

                    /**
                     * Constructs a new GetSkuRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetSkuRequest);

                    /** GetSkuRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSkuRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSkuRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetSkuRequest): google.cloud.gdchardwaremanagement.v1alpha.GetSkuRequest;

                    /**
                     * Encodes the specified GetSkuRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetSkuRequest.verify|verify} messages.
                     * @param message GetSkuRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IGetSkuRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSkuRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetSkuRequest.verify|verify} messages.
                     * @param message GetSkuRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IGetSkuRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSkuRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSkuRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.GetSkuRequest;

                    /**
                     * Decodes a GetSkuRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSkuRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.GetSkuRequest;

                    /**
                     * Verifies a GetSkuRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSkuRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSkuRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.GetSkuRequest;

                    /**
                     * Creates a plain object from a GetSkuRequest message. Also converts values to other types if specified.
                     * @param message GetSkuRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.GetSkuRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSkuRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSkuRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListZonesRequest);

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
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListZonesRequest): google.cloud.gdchardwaremanagement.v1alpha.ListZonesRequest;

                    /**
                     * Encodes the specified ListZonesRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListZonesRequest.verify|verify} messages.
                     * @param message ListZonesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListZonesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListZonesRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListZonesRequest.verify|verify} messages.
                     * @param message ListZonesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListZonesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListZonesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListZonesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListZonesRequest;

                    /**
                     * Decodes a ListZonesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListZonesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListZonesRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListZonesRequest;

                    /**
                     * Creates a plain object from a ListZonesRequest message. Also converts values to other types if specified.
                     * @param message ListZonesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListZonesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    zones?: (google.cloud.gdchardwaremanagement.v1alpha.IZone[]|null);

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
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListZonesResponse);

                    /** ListZonesResponse zones. */
                    public zones: google.cloud.gdchardwaremanagement.v1alpha.IZone[];

                    /** ListZonesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListZonesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListZonesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListZonesResponse instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IListZonesResponse): google.cloud.gdchardwaremanagement.v1alpha.ListZonesResponse;

                    /**
                     * Encodes the specified ListZonesResponse message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListZonesResponse.verify|verify} messages.
                     * @param message ListZonesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IListZonesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListZonesResponse message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.ListZonesResponse.verify|verify} messages.
                     * @param message ListZonesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IListZonesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListZonesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListZonesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.ListZonesResponse;

                    /**
                     * Decodes a ListZonesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListZonesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.ListZonesResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.ListZonesResponse;

                    /**
                     * Creates a plain object from a ListZonesResponse message. Also converts values to other types if specified.
                     * @param message ListZonesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.ListZonesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetZoneRequest);

                    /** GetZoneRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetZoneRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetZoneRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IGetZoneRequest): google.cloud.gdchardwaremanagement.v1alpha.GetZoneRequest;

                    /**
                     * Encodes the specified GetZoneRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetZoneRequest.verify|verify} messages.
                     * @param message GetZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IGetZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetZoneRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.GetZoneRequest.verify|verify} messages.
                     * @param message GetZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IGetZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetZoneRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.GetZoneRequest;

                    /**
                     * Decodes a GetZoneRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.GetZoneRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.GetZoneRequest;

                    /**
                     * Creates a plain object from a GetZoneRequest message. Also converts values to other types if specified.
                     * @param message GetZoneRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.GetZoneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a CreateZoneRequest. */
                interface ICreateZoneRequest {

                    /** CreateZoneRequest parent */
                    parent?: (string|null);

                    /** CreateZoneRequest zoneId */
                    zoneId?: (string|null);

                    /** CreateZoneRequest zone */
                    zone?: (google.cloud.gdchardwaremanagement.v1alpha.IZone|null);

                    /** CreateZoneRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateZoneRequest. */
                class CreateZoneRequest implements ICreateZoneRequest {

                    /**
                     * Constructs a new CreateZoneRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ICreateZoneRequest);

                    /** CreateZoneRequest parent. */
                    public parent: string;

                    /** CreateZoneRequest zoneId. */
                    public zoneId: string;

                    /** CreateZoneRequest zone. */
                    public zone?: (google.cloud.gdchardwaremanagement.v1alpha.IZone|null);

                    /** CreateZoneRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateZoneRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateZoneRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ICreateZoneRequest): google.cloud.gdchardwaremanagement.v1alpha.CreateZoneRequest;

                    /**
                     * Encodes the specified CreateZoneRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.CreateZoneRequest.verify|verify} messages.
                     * @param message CreateZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ICreateZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateZoneRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.CreateZoneRequest.verify|verify} messages.
                     * @param message CreateZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ICreateZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateZoneRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.CreateZoneRequest;

                    /**
                     * Decodes a CreateZoneRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.CreateZoneRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.CreateZoneRequest;

                    /**
                     * Creates a plain object from a CreateZoneRequest message. Also converts values to other types if specified.
                     * @param message CreateZoneRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.CreateZoneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateZoneRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateZoneRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateZoneRequest. */
                interface IUpdateZoneRequest {

                    /** UpdateZoneRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateZoneRequest zone */
                    zone?: (google.cloud.gdchardwaremanagement.v1alpha.IZone|null);

                    /** UpdateZoneRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateZoneRequest. */
                class UpdateZoneRequest implements IUpdateZoneRequest {

                    /**
                     * Constructs a new UpdateZoneRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IUpdateZoneRequest);

                    /** UpdateZoneRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateZoneRequest zone. */
                    public zone?: (google.cloud.gdchardwaremanagement.v1alpha.IZone|null);

                    /** UpdateZoneRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateZoneRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateZoneRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IUpdateZoneRequest): google.cloud.gdchardwaremanagement.v1alpha.UpdateZoneRequest;

                    /**
                     * Encodes the specified UpdateZoneRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.UpdateZoneRequest.verify|verify} messages.
                     * @param message UpdateZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IUpdateZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateZoneRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.UpdateZoneRequest.verify|verify} messages.
                     * @param message UpdateZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IUpdateZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateZoneRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.UpdateZoneRequest;

                    /**
                     * Decodes an UpdateZoneRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.UpdateZoneRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.UpdateZoneRequest;

                    /**
                     * Creates a plain object from an UpdateZoneRequest message. Also converts values to other types if specified.
                     * @param message UpdateZoneRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.UpdateZoneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateZoneRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateZoneRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteZoneRequest. */
                interface IDeleteZoneRequest {

                    /** DeleteZoneRequest name */
                    name?: (string|null);

                    /** DeleteZoneRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteZoneRequest. */
                class DeleteZoneRequest implements IDeleteZoneRequest {

                    /**
                     * Constructs a new DeleteZoneRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IDeleteZoneRequest);

                    /** DeleteZoneRequest name. */
                    public name: string;

                    /** DeleteZoneRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteZoneRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteZoneRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IDeleteZoneRequest): google.cloud.gdchardwaremanagement.v1alpha.DeleteZoneRequest;

                    /**
                     * Encodes the specified DeleteZoneRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.DeleteZoneRequest.verify|verify} messages.
                     * @param message DeleteZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IDeleteZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteZoneRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.DeleteZoneRequest.verify|verify} messages.
                     * @param message DeleteZoneRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IDeleteZoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteZoneRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.DeleteZoneRequest;

                    /**
                     * Decodes a DeleteZoneRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteZoneRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.DeleteZoneRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.DeleteZoneRequest;

                    /**
                     * Creates a plain object from a DeleteZoneRequest message. Also converts values to other types if specified.
                     * @param message DeleteZoneRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.DeleteZoneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteZoneRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteZoneRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SignalZoneStateRequest. */
                interface ISignalZoneStateRequest {

                    /** SignalZoneStateRequest name */
                    name?: (string|null);

                    /** SignalZoneStateRequest requestId */
                    requestId?: (string|null);

                    /** SignalZoneStateRequest stateSignal */
                    stateSignal?: (google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest.StateSignal|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest.StateSignal|null);

                    /** SignalZoneStateRequest provisioningStateSignal */
                    provisioningStateSignal?: (google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest.ProvisioningStateSignal|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest.ProvisioningStateSignal|null);

                    /** SignalZoneStateRequest step */
                    step?: (string|null);

                    /** SignalZoneStateRequest details */
                    details?: (string|null);
                }

                /** Represents a SignalZoneStateRequest. */
                class SignalZoneStateRequest implements ISignalZoneStateRequest {

                    /**
                     * Constructs a new SignalZoneStateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISignalZoneStateRequest);

                    /** SignalZoneStateRequest name. */
                    public name: string;

                    /** SignalZoneStateRequest requestId. */
                    public requestId: string;

                    /** SignalZoneStateRequest stateSignal. */
                    public stateSignal: (google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest.StateSignal|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest.StateSignal);

                    /** SignalZoneStateRequest provisioningStateSignal. */
                    public provisioningStateSignal: (google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest.ProvisioningStateSignal|keyof typeof google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest.ProvisioningStateSignal);

                    /** SignalZoneStateRequest step. */
                    public step: string;

                    /** SignalZoneStateRequest details. */
                    public details: string;

                    /**
                     * Creates a new SignalZoneStateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignalZoneStateRequest instance
                     */
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.ISignalZoneStateRequest): google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest;

                    /**
                     * Encodes the specified SignalZoneStateRequest message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest.verify|verify} messages.
                     * @param message SignalZoneStateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.ISignalZoneStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SignalZoneStateRequest message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest.verify|verify} messages.
                     * @param message SignalZoneStateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.ISignalZoneStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignalZoneStateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignalZoneStateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest;

                    /**
                     * Decodes a SignalZoneStateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SignalZoneStateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest;

                    /**
                     * Verifies a SignalZoneStateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SignalZoneStateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SignalZoneStateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest;

                    /**
                     * Creates a plain object from a SignalZoneStateRequest message. Also converts values to other types if specified.
                     * @param message SignalZoneStateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.SignalZoneStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SignalZoneStateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SignalZoneStateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SignalZoneStateRequest {

                    /** StateSignal enum. */
                    enum StateSignal {
                        STATE_SIGNAL_UNSPECIFIED = 0,
                        FACTORY_TURNUP_CHECKS_STARTED = 3,
                        FACTORY_TURNUP_CHECKS_PASSED = 1,
                        READY_FOR_SITE_TURNUP = 1,
                        FACTORY_TURNUP_CHECKS_FAILED = 2
                    }

                    /** ProvisioningStateSignal enum. */
                    enum ProvisioningStateSignal {
                        PROVISIONING_STATE_SIGNAL_UNSPECIFIED = 0,
                        PROVISIONING_IN_PROGRESS = 1,
                        PROVISIONING_COMPLETE = 2
                    }
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
                    constructor(properties?: google.cloud.gdchardwaremanagement.v1alpha.IOperationMetadata);

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
                    public static create(properties?: google.cloud.gdchardwaremanagement.v1alpha.IOperationMetadata): google.cloud.gdchardwaremanagement.v1alpha.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gdchardwaremanagement.v1alpha.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.gdchardwaremanagement.v1alpha.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gdchardwaremanagement.v1alpha.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gdchardwaremanagement.v1alpha.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gdchardwaremanagement.v1alpha.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gdchardwaremanagement.v1alpha.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gdchardwaremanagement.v1alpha.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a DateTime. */
        interface IDateTime {

            /** DateTime year */
            year?: (number|null);

            /** DateTime month */
            month?: (number|null);

            /** DateTime day */
            day?: (number|null);

            /** DateTime hours */
            hours?: (number|null);

            /** DateTime minutes */
            minutes?: (number|null);

            /** DateTime seconds */
            seconds?: (number|null);

            /** DateTime nanos */
            nanos?: (number|null);

            /** DateTime utcOffset */
            utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone */
            timeZone?: (google.type.ITimeZone|null);
        }

        /** Represents a DateTime. */
        class DateTime implements IDateTime {

            /**
             * Constructs a new DateTime.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDateTime);

            /** DateTime year. */
            public year: number;

            /** DateTime month. */
            public month: number;

            /** DateTime day. */
            public day: number;

            /** DateTime hours. */
            public hours: number;

            /** DateTime minutes. */
            public minutes: number;

            /** DateTime seconds. */
            public seconds: number;

            /** DateTime nanos. */
            public nanos: number;

            /** DateTime utcOffset. */
            public utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone. */
            public timeZone?: (google.type.ITimeZone|null);

            /** DateTime timeOffset. */
            public timeOffset?: ("utcOffset"|"timeZone");

            /**
             * Creates a new DateTime instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DateTime instance
             */
            public static create(properties?: google.type.IDateTime): google.type.DateTime;

            /**
             * Encodes the specified DateTime message. Does not implicitly {@link google.type.DateTime.verify|verify} messages.
             * @param message DateTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DateTime message, length delimited. Does not implicitly {@link google.type.DateTime.verify|verify} messages.
             * @param message DateTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DateTime message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DateTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.DateTime;

            /**
             * Decodes a DateTime message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DateTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.DateTime;

            /**
             * Verifies a DateTime message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DateTime message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DateTime
             */
            public static fromObject(object: { [k: string]: any }): google.type.DateTime;

            /**
             * Creates a plain object from a DateTime message. Also converts values to other types if specified.
             * @param message DateTime
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.DateTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DateTime to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DateTime
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TimeZone. */
        interface ITimeZone {

            /** TimeZone id */
            id?: (string|null);

            /** TimeZone version */
            version?: (string|null);
        }

        /** Represents a TimeZone. */
        class TimeZone implements ITimeZone {

            /**
             * Constructs a new TimeZone.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ITimeZone);

            /** TimeZone id. */
            public id: string;

            /** TimeZone version. */
            public version: string;

            /**
             * Creates a new TimeZone instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeZone instance
             */
            public static create(properties?: google.type.ITimeZone): google.type.TimeZone;

            /**
             * Encodes the specified TimeZone message. Does not implicitly {@link google.type.TimeZone.verify|verify} messages.
             * @param message TimeZone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeZone message, length delimited. Does not implicitly {@link google.type.TimeZone.verify|verify} messages.
             * @param message TimeZone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeZone message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeZone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.TimeZone;

            /**
             * Decodes a TimeZone message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeZone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.TimeZone;

            /**
             * Verifies a TimeZone message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeZone message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeZone
             */
            public static fromObject(object: { [k: string]: any }): google.type.TimeZone;

            /**
             * Creates a plain object from a TimeZone message. Also converts values to other types if specified.
             * @param message TimeZone
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.TimeZone, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeZone to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TimeZone
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

            /**
             * Gets the default type url for PostalAddress
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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
