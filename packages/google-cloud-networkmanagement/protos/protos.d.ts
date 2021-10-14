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

        /** Namespace networkmanagement. */
        namespace networkmanagement {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a ConnectivityTest. */
                interface IConnectivityTest {

                    /** ConnectivityTest name */
                    name?: (string|null);

                    /** ConnectivityTest description */
                    description?: (string|null);

                    /** ConnectivityTest source */
                    source?: (google.cloud.networkmanagement.v1.IEndpoint|null);

                    /** ConnectivityTest destination */
                    destination?: (google.cloud.networkmanagement.v1.IEndpoint|null);

                    /** ConnectivityTest protocol */
                    protocol?: (string|null);

                    /** ConnectivityTest relatedProjects */
                    relatedProjects?: (string[]|null);

                    /** ConnectivityTest displayName */
                    displayName?: (string|null);

                    /** ConnectivityTest labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ConnectivityTest createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectivityTest updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectivityTest reachabilityDetails */
                    reachabilityDetails?: (google.cloud.networkmanagement.v1.IReachabilityDetails|null);
                }

                /** Represents a ConnectivityTest. */
                class ConnectivityTest implements IConnectivityTest {

                    /**
                     * Constructs a new ConnectivityTest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IConnectivityTest);

                    /** ConnectivityTest name. */
                    public name: string;

                    /** ConnectivityTest description. */
                    public description: string;

                    /** ConnectivityTest source. */
                    public source?: (google.cloud.networkmanagement.v1.IEndpoint|null);

                    /** ConnectivityTest destination. */
                    public destination?: (google.cloud.networkmanagement.v1.IEndpoint|null);

                    /** ConnectivityTest protocol. */
                    public protocol: string;

                    /** ConnectivityTest relatedProjects. */
                    public relatedProjects: string[];

                    /** ConnectivityTest displayName. */
                    public displayName: string;

                    /** ConnectivityTest labels. */
                    public labels: { [k: string]: string };

                    /** ConnectivityTest createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectivityTest updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectivityTest reachabilityDetails. */
                    public reachabilityDetails?: (google.cloud.networkmanagement.v1.IReachabilityDetails|null);

                    /**
                     * Creates a new ConnectivityTest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectivityTest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IConnectivityTest): google.cloud.networkmanagement.v1.ConnectivityTest;

                    /**
                     * Encodes the specified ConnectivityTest message. Does not implicitly {@link google.cloud.networkmanagement.v1.ConnectivityTest.verify|verify} messages.
                     * @param message ConnectivityTest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IConnectivityTest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConnectivityTest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.ConnectivityTest.verify|verify} messages.
                     * @param message ConnectivityTest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IConnectivityTest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConnectivityTest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConnectivityTest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.ConnectivityTest;

                    /**
                     * Decodes a ConnectivityTest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConnectivityTest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.ConnectivityTest;

                    /**
                     * Verifies a ConnectivityTest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConnectivityTest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConnectivityTest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.ConnectivityTest;

                    /**
                     * Creates a plain object from a ConnectivityTest message. Also converts values to other types if specified.
                     * @param message ConnectivityTest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.ConnectivityTest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConnectivityTest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Endpoint. */
                interface IEndpoint {

                    /** Endpoint ipAddress */
                    ipAddress?: (string|null);

                    /** Endpoint port */
                    port?: (number|null);

                    /** Endpoint instance */
                    instance?: (string|null);

                    /** Endpoint gkeMasterCluster */
                    gkeMasterCluster?: (string|null);

                    /** Endpoint cloudSqlInstance */
                    cloudSqlInstance?: (string|null);

                    /** Endpoint network */
                    network?: (string|null);

                    /** Endpoint networkType */
                    networkType?: (google.cloud.networkmanagement.v1.Endpoint.NetworkType|keyof typeof google.cloud.networkmanagement.v1.Endpoint.NetworkType|null);

                    /** Endpoint projectId */
                    projectId?: (string|null);
                }

                /** Represents an Endpoint. */
                class Endpoint implements IEndpoint {

                    /**
                     * Constructs a new Endpoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IEndpoint);

                    /** Endpoint ipAddress. */
                    public ipAddress: string;

                    /** Endpoint port. */
                    public port: number;

                    /** Endpoint instance. */
                    public instance: string;

                    /** Endpoint gkeMasterCluster. */
                    public gkeMasterCluster: string;

                    /** Endpoint cloudSqlInstance. */
                    public cloudSqlInstance: string;

                    /** Endpoint network. */
                    public network: string;

                    /** Endpoint networkType. */
                    public networkType: (google.cloud.networkmanagement.v1.Endpoint.NetworkType|keyof typeof google.cloud.networkmanagement.v1.Endpoint.NetworkType);

                    /** Endpoint projectId. */
                    public projectId: string;

                    /**
                     * Creates a new Endpoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Endpoint instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IEndpoint): google.cloud.networkmanagement.v1.Endpoint;

                    /**
                     * Encodes the specified Endpoint message. Does not implicitly {@link google.cloud.networkmanagement.v1.Endpoint.verify|verify} messages.
                     * @param message Endpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Endpoint message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.Endpoint.verify|verify} messages.
                     * @param message Endpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Endpoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Endpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.Endpoint;

                    /**
                     * Decodes an Endpoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Endpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.Endpoint;

                    /**
                     * Verifies an Endpoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Endpoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Endpoint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.Endpoint;

                    /**
                     * Creates a plain object from an Endpoint message. Also converts values to other types if specified.
                     * @param message Endpoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.Endpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Endpoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Endpoint {

                    /** NetworkType enum. */
                    enum NetworkType {
                        NETWORK_TYPE_UNSPECIFIED = 0,
                        GCP_NETWORK = 1,
                        NON_GCP_NETWORK = 2
                    }
                }

                /** Properties of a ReachabilityDetails. */
                interface IReachabilityDetails {

                    /** ReachabilityDetails result */
                    result?: (google.cloud.networkmanagement.v1.ReachabilityDetails.Result|keyof typeof google.cloud.networkmanagement.v1.ReachabilityDetails.Result|null);

                    /** ReachabilityDetails verifyTime */
                    verifyTime?: (google.protobuf.ITimestamp|null);

                    /** ReachabilityDetails error */
                    error?: (google.rpc.IStatus|null);

                    /** ReachabilityDetails traces */
                    traces?: (google.cloud.networkmanagement.v1.ITrace[]|null);
                }

                /** Represents a ReachabilityDetails. */
                class ReachabilityDetails implements IReachabilityDetails {

                    /**
                     * Constructs a new ReachabilityDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IReachabilityDetails);

                    /** ReachabilityDetails result. */
                    public result: (google.cloud.networkmanagement.v1.ReachabilityDetails.Result|keyof typeof google.cloud.networkmanagement.v1.ReachabilityDetails.Result);

                    /** ReachabilityDetails verifyTime. */
                    public verifyTime?: (google.protobuf.ITimestamp|null);

                    /** ReachabilityDetails error. */
                    public error?: (google.rpc.IStatus|null);

                    /** ReachabilityDetails traces. */
                    public traces: google.cloud.networkmanagement.v1.ITrace[];

                    /**
                     * Creates a new ReachabilityDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReachabilityDetails instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IReachabilityDetails): google.cloud.networkmanagement.v1.ReachabilityDetails;

                    /**
                     * Encodes the specified ReachabilityDetails message. Does not implicitly {@link google.cloud.networkmanagement.v1.ReachabilityDetails.verify|verify} messages.
                     * @param message ReachabilityDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IReachabilityDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReachabilityDetails message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.ReachabilityDetails.verify|verify} messages.
                     * @param message ReachabilityDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IReachabilityDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReachabilityDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReachabilityDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.ReachabilityDetails;

                    /**
                     * Decodes a ReachabilityDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReachabilityDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.ReachabilityDetails;

                    /**
                     * Verifies a ReachabilityDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReachabilityDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReachabilityDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.ReachabilityDetails;

                    /**
                     * Creates a plain object from a ReachabilityDetails message. Also converts values to other types if specified.
                     * @param message ReachabilityDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.ReachabilityDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReachabilityDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ReachabilityDetails {

                    /** Result enum. */
                    enum Result {
                        RESULT_UNSPECIFIED = 0,
                        REACHABLE = 1,
                        UNREACHABLE = 2,
                        AMBIGUOUS = 4,
                        UNDETERMINED = 5
                    }
                }

                /** Properties of a Trace. */
                interface ITrace {

                    /** Trace endpointInfo */
                    endpointInfo?: (google.cloud.networkmanagement.v1.IEndpointInfo|null);

                    /** Trace steps */
                    steps?: (google.cloud.networkmanagement.v1.IStep[]|null);
                }

                /** Represents a Trace. */
                class Trace implements ITrace {

                    /**
                     * Constructs a new Trace.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.ITrace);

                    /** Trace endpointInfo. */
                    public endpointInfo?: (google.cloud.networkmanagement.v1.IEndpointInfo|null);

                    /** Trace steps. */
                    public steps: google.cloud.networkmanagement.v1.IStep[];

                    /**
                     * Creates a new Trace instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Trace instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.ITrace): google.cloud.networkmanagement.v1.Trace;

                    /**
                     * Encodes the specified Trace message. Does not implicitly {@link google.cloud.networkmanagement.v1.Trace.verify|verify} messages.
                     * @param message Trace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.ITrace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Trace message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.Trace.verify|verify} messages.
                     * @param message Trace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.ITrace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Trace message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Trace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.Trace;

                    /**
                     * Decodes a Trace message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Trace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.Trace;

                    /**
                     * Verifies a Trace message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Trace message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Trace
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.Trace;

                    /**
                     * Creates a plain object from a Trace message. Also converts values to other types if specified.
                     * @param message Trace
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.Trace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Trace to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Step. */
                interface IStep {

                    /** Step description */
                    description?: (string|null);

                    /** Step state */
                    state?: (google.cloud.networkmanagement.v1.Step.State|keyof typeof google.cloud.networkmanagement.v1.Step.State|null);

                    /** Step causesDrop */
                    causesDrop?: (boolean|null);

                    /** Step projectId */
                    projectId?: (string|null);

                    /** Step instance */
                    instance?: (google.cloud.networkmanagement.v1.IInstanceInfo|null);

                    /** Step firewall */
                    firewall?: (google.cloud.networkmanagement.v1.IFirewallInfo|null);

                    /** Step route */
                    route?: (google.cloud.networkmanagement.v1.IRouteInfo|null);

                    /** Step endpoint */
                    endpoint?: (google.cloud.networkmanagement.v1.IEndpointInfo|null);

                    /** Step forwardingRule */
                    forwardingRule?: (google.cloud.networkmanagement.v1.IForwardingRuleInfo|null);

                    /** Step vpnGateway */
                    vpnGateway?: (google.cloud.networkmanagement.v1.IVpnGatewayInfo|null);

                    /** Step vpnTunnel */
                    vpnTunnel?: (google.cloud.networkmanagement.v1.IVpnTunnelInfo|null);

                    /** Step deliver */
                    deliver?: (google.cloud.networkmanagement.v1.IDeliverInfo|null);

                    /** Step forward */
                    forward?: (google.cloud.networkmanagement.v1.IForwardInfo|null);

                    /** Step abort */
                    abort?: (google.cloud.networkmanagement.v1.IAbortInfo|null);

                    /** Step drop */
                    drop?: (google.cloud.networkmanagement.v1.IDropInfo|null);

                    /** Step loadBalancer */
                    loadBalancer?: (google.cloud.networkmanagement.v1.ILoadBalancerInfo|null);

                    /** Step network */
                    network?: (google.cloud.networkmanagement.v1.INetworkInfo|null);

                    /** Step gkeMaster */
                    gkeMaster?: (google.cloud.networkmanagement.v1.IGKEMasterInfo|null);

                    /** Step cloudSqlInstance */
                    cloudSqlInstance?: (google.cloud.networkmanagement.v1.ICloudSQLInstanceInfo|null);
                }

                /** Represents a Step. */
                class Step implements IStep {

                    /**
                     * Constructs a new Step.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IStep);

                    /** Step description. */
                    public description: string;

                    /** Step state. */
                    public state: (google.cloud.networkmanagement.v1.Step.State|keyof typeof google.cloud.networkmanagement.v1.Step.State);

                    /** Step causesDrop. */
                    public causesDrop: boolean;

                    /** Step projectId. */
                    public projectId: string;

                    /** Step instance. */
                    public instance?: (google.cloud.networkmanagement.v1.IInstanceInfo|null);

                    /** Step firewall. */
                    public firewall?: (google.cloud.networkmanagement.v1.IFirewallInfo|null);

                    /** Step route. */
                    public route?: (google.cloud.networkmanagement.v1.IRouteInfo|null);

                    /** Step endpoint. */
                    public endpoint?: (google.cloud.networkmanagement.v1.IEndpointInfo|null);

                    /** Step forwardingRule. */
                    public forwardingRule?: (google.cloud.networkmanagement.v1.IForwardingRuleInfo|null);

                    /** Step vpnGateway. */
                    public vpnGateway?: (google.cloud.networkmanagement.v1.IVpnGatewayInfo|null);

                    /** Step vpnTunnel. */
                    public vpnTunnel?: (google.cloud.networkmanagement.v1.IVpnTunnelInfo|null);

                    /** Step deliver. */
                    public deliver?: (google.cloud.networkmanagement.v1.IDeliverInfo|null);

                    /** Step forward. */
                    public forward?: (google.cloud.networkmanagement.v1.IForwardInfo|null);

                    /** Step abort. */
                    public abort?: (google.cloud.networkmanagement.v1.IAbortInfo|null);

                    /** Step drop. */
                    public drop?: (google.cloud.networkmanagement.v1.IDropInfo|null);

                    /** Step loadBalancer. */
                    public loadBalancer?: (google.cloud.networkmanagement.v1.ILoadBalancerInfo|null);

                    /** Step network. */
                    public network?: (google.cloud.networkmanagement.v1.INetworkInfo|null);

                    /** Step gkeMaster. */
                    public gkeMaster?: (google.cloud.networkmanagement.v1.IGKEMasterInfo|null);

                    /** Step cloudSqlInstance. */
                    public cloudSqlInstance?: (google.cloud.networkmanagement.v1.ICloudSQLInstanceInfo|null);

                    /** Step stepInfo. */
                    public stepInfo?: ("instance"|"firewall"|"route"|"endpoint"|"forwardingRule"|"vpnGateway"|"vpnTunnel"|"deliver"|"forward"|"abort"|"drop"|"loadBalancer"|"network"|"gkeMaster"|"cloudSqlInstance");

                    /**
                     * Creates a new Step instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Step instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IStep): google.cloud.networkmanagement.v1.Step;

                    /**
                     * Encodes the specified Step message. Does not implicitly {@link google.cloud.networkmanagement.v1.Step.verify|verify} messages.
                     * @param message Step message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Step message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.Step.verify|verify} messages.
                     * @param message Step message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Step message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Step
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.Step;

                    /**
                     * Decodes a Step message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Step
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.Step;

                    /**
                     * Verifies a Step message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Step message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Step
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.Step;

                    /**
                     * Creates a plain object from a Step message. Also converts values to other types if specified.
                     * @param message Step
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.Step, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Step to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Step {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        START_FROM_INSTANCE = 1,
                        START_FROM_INTERNET = 2,
                        START_FROM_PRIVATE_NETWORK = 3,
                        START_FROM_GKE_MASTER = 21,
                        START_FROM_CLOUD_SQL_INSTANCE = 22,
                        APPLY_INGRESS_FIREWALL_RULE = 4,
                        APPLY_EGRESS_FIREWALL_RULE = 5,
                        APPLY_ROUTE = 6,
                        APPLY_FORWARDING_RULE = 7,
                        SPOOFING_APPROVED = 8,
                        ARRIVE_AT_INSTANCE = 9,
                        ARRIVE_AT_INTERNAL_LOAD_BALANCER = 10,
                        ARRIVE_AT_EXTERNAL_LOAD_BALANCER = 11,
                        ARRIVE_AT_VPN_GATEWAY = 12,
                        ARRIVE_AT_VPN_TUNNEL = 13,
                        NAT = 14,
                        PROXY_CONNECTION = 15,
                        DELIVER = 16,
                        DROP = 17,
                        FORWARD = 18,
                        ABORT = 19,
                        VIEWER_PERMISSION_MISSING = 20
                    }
                }

                /** Properties of an InstanceInfo. */
                interface IInstanceInfo {

                    /** InstanceInfo displayName */
                    displayName?: (string|null);

                    /** InstanceInfo uri */
                    uri?: (string|null);

                    /** InstanceInfo interface */
                    "interface"?: (string|null);

                    /** InstanceInfo networkUri */
                    networkUri?: (string|null);

                    /** InstanceInfo internalIp */
                    internalIp?: (string|null);

                    /** InstanceInfo externalIp */
                    externalIp?: (string|null);

                    /** InstanceInfo networkTags */
                    networkTags?: (string[]|null);

                    /** InstanceInfo serviceAccount */
                    serviceAccount?: (string|null);
                }

                /** Represents an InstanceInfo. */
                class InstanceInfo implements IInstanceInfo {

                    /**
                     * Constructs a new InstanceInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IInstanceInfo);

                    /** InstanceInfo displayName. */
                    public displayName: string;

                    /** InstanceInfo uri. */
                    public uri: string;

                    /** InstanceInfo interface. */
                    public interface: string;

                    /** InstanceInfo networkUri. */
                    public networkUri: string;

                    /** InstanceInfo internalIp. */
                    public internalIp: string;

                    /** InstanceInfo externalIp. */
                    public externalIp: string;

                    /** InstanceInfo networkTags. */
                    public networkTags: string[];

                    /** InstanceInfo serviceAccount. */
                    public serviceAccount: string;

                    /**
                     * Creates a new InstanceInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstanceInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IInstanceInfo): google.cloud.networkmanagement.v1.InstanceInfo;

                    /**
                     * Encodes the specified InstanceInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.InstanceInfo.verify|verify} messages.
                     * @param message InstanceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IInstanceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstanceInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.InstanceInfo.verify|verify} messages.
                     * @param message InstanceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IInstanceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstanceInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstanceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.InstanceInfo;

                    /**
                     * Decodes an InstanceInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstanceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.InstanceInfo;

                    /**
                     * Verifies an InstanceInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstanceInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstanceInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.InstanceInfo;

                    /**
                     * Creates a plain object from an InstanceInfo message. Also converts values to other types if specified.
                     * @param message InstanceInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.InstanceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstanceInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NetworkInfo. */
                interface INetworkInfo {

                    /** NetworkInfo displayName */
                    displayName?: (string|null);

                    /** NetworkInfo uri */
                    uri?: (string|null);

                    /** NetworkInfo matchedIpRange */
                    matchedIpRange?: (string|null);
                }

                /** Represents a NetworkInfo. */
                class NetworkInfo implements INetworkInfo {

                    /**
                     * Constructs a new NetworkInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.INetworkInfo);

                    /** NetworkInfo displayName. */
                    public displayName: string;

                    /** NetworkInfo uri. */
                    public uri: string;

                    /** NetworkInfo matchedIpRange. */
                    public matchedIpRange: string;

                    /**
                     * Creates a new NetworkInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.INetworkInfo): google.cloud.networkmanagement.v1.NetworkInfo;

                    /**
                     * Encodes the specified NetworkInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.NetworkInfo.verify|verify} messages.
                     * @param message NetworkInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.INetworkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.NetworkInfo.verify|verify} messages.
                     * @param message NetworkInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.INetworkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.NetworkInfo;

                    /**
                     * Decodes a NetworkInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.NetworkInfo;

                    /**
                     * Verifies a NetworkInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.NetworkInfo;

                    /**
                     * Creates a plain object from a NetworkInfo message. Also converts values to other types if specified.
                     * @param message NetworkInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.NetworkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FirewallInfo. */
                interface IFirewallInfo {

                    /** FirewallInfo displayName */
                    displayName?: (string|null);

                    /** FirewallInfo uri */
                    uri?: (string|null);

                    /** FirewallInfo direction */
                    direction?: (string|null);

                    /** FirewallInfo action */
                    action?: (string|null);

                    /** FirewallInfo priority */
                    priority?: (number|null);

                    /** FirewallInfo networkUri */
                    networkUri?: (string|null);

                    /** FirewallInfo targetTags */
                    targetTags?: (string[]|null);

                    /** FirewallInfo targetServiceAccounts */
                    targetServiceAccounts?: (string[]|null);

                    /** FirewallInfo policy */
                    policy?: (string|null);

                    /** FirewallInfo firewallRuleType */
                    firewallRuleType?: (google.cloud.networkmanagement.v1.FirewallInfo.FirewallRuleType|keyof typeof google.cloud.networkmanagement.v1.FirewallInfo.FirewallRuleType|null);
                }

                /** Represents a FirewallInfo. */
                class FirewallInfo implements IFirewallInfo {

                    /**
                     * Constructs a new FirewallInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IFirewallInfo);

                    /** FirewallInfo displayName. */
                    public displayName: string;

                    /** FirewallInfo uri. */
                    public uri: string;

                    /** FirewallInfo direction. */
                    public direction: string;

                    /** FirewallInfo action. */
                    public action: string;

                    /** FirewallInfo priority. */
                    public priority: number;

                    /** FirewallInfo networkUri. */
                    public networkUri: string;

                    /** FirewallInfo targetTags. */
                    public targetTags: string[];

                    /** FirewallInfo targetServiceAccounts. */
                    public targetServiceAccounts: string[];

                    /** FirewallInfo policy. */
                    public policy: string;

                    /** FirewallInfo firewallRuleType. */
                    public firewallRuleType: (google.cloud.networkmanagement.v1.FirewallInfo.FirewallRuleType|keyof typeof google.cloud.networkmanagement.v1.FirewallInfo.FirewallRuleType);

                    /**
                     * Creates a new FirewallInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FirewallInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IFirewallInfo): google.cloud.networkmanagement.v1.FirewallInfo;

                    /**
                     * Encodes the specified FirewallInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.FirewallInfo.verify|verify} messages.
                     * @param message FirewallInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IFirewallInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FirewallInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.FirewallInfo.verify|verify} messages.
                     * @param message FirewallInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IFirewallInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FirewallInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FirewallInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.FirewallInfo;

                    /**
                     * Decodes a FirewallInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FirewallInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.FirewallInfo;

                    /**
                     * Verifies a FirewallInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FirewallInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FirewallInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.FirewallInfo;

                    /**
                     * Creates a plain object from a FirewallInfo message. Also converts values to other types if specified.
                     * @param message FirewallInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.FirewallInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FirewallInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace FirewallInfo {

                    /** FirewallRuleType enum. */
                    enum FirewallRuleType {
                        FIREWALL_RULE_TYPE_UNSPECIFIED = 0,
                        HIERARCHICAL_FIREWALL_POLICY_RULE = 1,
                        VPC_FIREWALL_RULE = 2,
                        IMPLIED_VPC_FIREWALL_RULE = 3
                    }
                }

                /** Properties of a RouteInfo. */
                interface IRouteInfo {

                    /** RouteInfo routeType */
                    routeType?: (google.cloud.networkmanagement.v1.RouteInfo.RouteType|keyof typeof google.cloud.networkmanagement.v1.RouteInfo.RouteType|null);

                    /** RouteInfo nextHopType */
                    nextHopType?: (google.cloud.networkmanagement.v1.RouteInfo.NextHopType|keyof typeof google.cloud.networkmanagement.v1.RouteInfo.NextHopType|null);

                    /** RouteInfo displayName */
                    displayName?: (string|null);

                    /** RouteInfo uri */
                    uri?: (string|null);

                    /** RouteInfo destIpRange */
                    destIpRange?: (string|null);

                    /** RouteInfo nextHop */
                    nextHop?: (string|null);

                    /** RouteInfo networkUri */
                    networkUri?: (string|null);

                    /** RouteInfo priority */
                    priority?: (number|null);

                    /** RouteInfo instanceTags */
                    instanceTags?: (string[]|null);
                }

                /** Represents a RouteInfo. */
                class RouteInfo implements IRouteInfo {

                    /**
                     * Constructs a new RouteInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IRouteInfo);

                    /** RouteInfo routeType. */
                    public routeType: (google.cloud.networkmanagement.v1.RouteInfo.RouteType|keyof typeof google.cloud.networkmanagement.v1.RouteInfo.RouteType);

                    /** RouteInfo nextHopType. */
                    public nextHopType: (google.cloud.networkmanagement.v1.RouteInfo.NextHopType|keyof typeof google.cloud.networkmanagement.v1.RouteInfo.NextHopType);

                    /** RouteInfo displayName. */
                    public displayName: string;

                    /** RouteInfo uri. */
                    public uri: string;

                    /** RouteInfo destIpRange. */
                    public destIpRange: string;

                    /** RouteInfo nextHop. */
                    public nextHop: string;

                    /** RouteInfo networkUri. */
                    public networkUri: string;

                    /** RouteInfo priority. */
                    public priority: number;

                    /** RouteInfo instanceTags. */
                    public instanceTags: string[];

                    /**
                     * Creates a new RouteInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IRouteInfo): google.cloud.networkmanagement.v1.RouteInfo;

                    /**
                     * Encodes the specified RouteInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.RouteInfo.verify|verify} messages.
                     * @param message RouteInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IRouteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.RouteInfo.verify|verify} messages.
                     * @param message RouteInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IRouteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.RouteInfo;

                    /**
                     * Decodes a RouteInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.RouteInfo;

                    /**
                     * Verifies a RouteInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.RouteInfo;

                    /**
                     * Creates a plain object from a RouteInfo message. Also converts values to other types if specified.
                     * @param message RouteInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.RouteInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace RouteInfo {

                    /** RouteType enum. */
                    enum RouteType {
                        ROUTE_TYPE_UNSPECIFIED = 0,
                        SUBNET = 1,
                        STATIC = 2,
                        DYNAMIC = 3,
                        PEERING_SUBNET = 4,
                        PEERING_STATIC = 5,
                        PEERING_DYNAMIC = 6
                    }

                    /** NextHopType enum. */
                    enum NextHopType {
                        NEXT_HOP_TYPE_UNSPECIFIED = 0,
                        NEXT_HOP_IP = 1,
                        NEXT_HOP_INSTANCE = 2,
                        NEXT_HOP_NETWORK = 3,
                        NEXT_HOP_PEERING = 4,
                        NEXT_HOP_INTERCONNECT = 5,
                        NEXT_HOP_VPN_TUNNEL = 6,
                        NEXT_HOP_VPN_GATEWAY = 7,
                        NEXT_HOP_INTERNET_GATEWAY = 8,
                        NEXT_HOP_BLACKHOLE = 9,
                        NEXT_HOP_ILB = 10
                    }
                }

                /** Properties of a ForwardingRuleInfo. */
                interface IForwardingRuleInfo {

                    /** ForwardingRuleInfo displayName */
                    displayName?: (string|null);

                    /** ForwardingRuleInfo uri */
                    uri?: (string|null);

                    /** ForwardingRuleInfo matchedProtocol */
                    matchedProtocol?: (string|null);

                    /** ForwardingRuleInfo matchedPortRange */
                    matchedPortRange?: (string|null);

                    /** ForwardingRuleInfo vip */
                    vip?: (string|null);

                    /** ForwardingRuleInfo target */
                    target?: (string|null);

                    /** ForwardingRuleInfo networkUri */
                    networkUri?: (string|null);
                }

                /** Represents a ForwardingRuleInfo. */
                class ForwardingRuleInfo implements IForwardingRuleInfo {

                    /**
                     * Constructs a new ForwardingRuleInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IForwardingRuleInfo);

                    /** ForwardingRuleInfo displayName. */
                    public displayName: string;

                    /** ForwardingRuleInfo uri. */
                    public uri: string;

                    /** ForwardingRuleInfo matchedProtocol. */
                    public matchedProtocol: string;

                    /** ForwardingRuleInfo matchedPortRange. */
                    public matchedPortRange: string;

                    /** ForwardingRuleInfo vip. */
                    public vip: string;

                    /** ForwardingRuleInfo target. */
                    public target: string;

                    /** ForwardingRuleInfo networkUri. */
                    public networkUri: string;

                    /**
                     * Creates a new ForwardingRuleInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ForwardingRuleInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IForwardingRuleInfo): google.cloud.networkmanagement.v1.ForwardingRuleInfo;

                    /**
                     * Encodes the specified ForwardingRuleInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.ForwardingRuleInfo.verify|verify} messages.
                     * @param message ForwardingRuleInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IForwardingRuleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ForwardingRuleInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.ForwardingRuleInfo.verify|verify} messages.
                     * @param message ForwardingRuleInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IForwardingRuleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ForwardingRuleInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ForwardingRuleInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.ForwardingRuleInfo;

                    /**
                     * Decodes a ForwardingRuleInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ForwardingRuleInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.ForwardingRuleInfo;

                    /**
                     * Verifies a ForwardingRuleInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ForwardingRuleInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ForwardingRuleInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.ForwardingRuleInfo;

                    /**
                     * Creates a plain object from a ForwardingRuleInfo message. Also converts values to other types if specified.
                     * @param message ForwardingRuleInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.ForwardingRuleInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ForwardingRuleInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LoadBalancerInfo. */
                interface ILoadBalancerInfo {

                    /** LoadBalancerInfo loadBalancerType */
                    loadBalancerType?: (google.cloud.networkmanagement.v1.LoadBalancerInfo.LoadBalancerType|keyof typeof google.cloud.networkmanagement.v1.LoadBalancerInfo.LoadBalancerType|null);

                    /** LoadBalancerInfo healthCheckUri */
                    healthCheckUri?: (string|null);

                    /** LoadBalancerInfo backends */
                    backends?: (google.cloud.networkmanagement.v1.ILoadBalancerBackend[]|null);

                    /** LoadBalancerInfo backendType */
                    backendType?: (google.cloud.networkmanagement.v1.LoadBalancerInfo.BackendType|keyof typeof google.cloud.networkmanagement.v1.LoadBalancerInfo.BackendType|null);

                    /** LoadBalancerInfo backendUri */
                    backendUri?: (string|null);
                }

                /** Represents a LoadBalancerInfo. */
                class LoadBalancerInfo implements ILoadBalancerInfo {

                    /**
                     * Constructs a new LoadBalancerInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.ILoadBalancerInfo);

                    /** LoadBalancerInfo loadBalancerType. */
                    public loadBalancerType: (google.cloud.networkmanagement.v1.LoadBalancerInfo.LoadBalancerType|keyof typeof google.cloud.networkmanagement.v1.LoadBalancerInfo.LoadBalancerType);

                    /** LoadBalancerInfo healthCheckUri. */
                    public healthCheckUri: string;

                    /** LoadBalancerInfo backends. */
                    public backends: google.cloud.networkmanagement.v1.ILoadBalancerBackend[];

                    /** LoadBalancerInfo backendType. */
                    public backendType: (google.cloud.networkmanagement.v1.LoadBalancerInfo.BackendType|keyof typeof google.cloud.networkmanagement.v1.LoadBalancerInfo.BackendType);

                    /** LoadBalancerInfo backendUri. */
                    public backendUri: string;

                    /**
                     * Creates a new LoadBalancerInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoadBalancerInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.ILoadBalancerInfo): google.cloud.networkmanagement.v1.LoadBalancerInfo;

                    /**
                     * Encodes the specified LoadBalancerInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.LoadBalancerInfo.verify|verify} messages.
                     * @param message LoadBalancerInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.ILoadBalancerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoadBalancerInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.LoadBalancerInfo.verify|verify} messages.
                     * @param message LoadBalancerInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.ILoadBalancerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoadBalancerInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoadBalancerInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.LoadBalancerInfo;

                    /**
                     * Decodes a LoadBalancerInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoadBalancerInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.LoadBalancerInfo;

                    /**
                     * Verifies a LoadBalancerInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoadBalancerInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoadBalancerInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.LoadBalancerInfo;

                    /**
                     * Creates a plain object from a LoadBalancerInfo message. Also converts values to other types if specified.
                     * @param message LoadBalancerInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.LoadBalancerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoadBalancerInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LoadBalancerInfo {

                    /** LoadBalancerType enum. */
                    enum LoadBalancerType {
                        LOAD_BALANCER_TYPE_UNSPECIFIED = 0,
                        INTERNAL_TCP_UDP = 1,
                        NETWORK_TCP_UDP = 2,
                        HTTP_PROXY = 3,
                        TCP_PROXY = 4,
                        SSL_PROXY = 5
                    }

                    /** BackendType enum. */
                    enum BackendType {
                        BACKEND_TYPE_UNSPECIFIED = 0,
                        BACKEND_SERVICE = 1,
                        TARGET_POOL = 2
                    }
                }

                /** Properties of a LoadBalancerBackend. */
                interface ILoadBalancerBackend {

                    /** LoadBalancerBackend displayName */
                    displayName?: (string|null);

                    /** LoadBalancerBackend uri */
                    uri?: (string|null);

                    /** LoadBalancerBackend healthCheckFirewallState */
                    healthCheckFirewallState?: (google.cloud.networkmanagement.v1.LoadBalancerBackend.HealthCheckFirewallState|keyof typeof google.cloud.networkmanagement.v1.LoadBalancerBackend.HealthCheckFirewallState|null);

                    /** LoadBalancerBackend healthCheckAllowingFirewallRules */
                    healthCheckAllowingFirewallRules?: (string[]|null);

                    /** LoadBalancerBackend healthCheckBlockingFirewallRules */
                    healthCheckBlockingFirewallRules?: (string[]|null);
                }

                /** Represents a LoadBalancerBackend. */
                class LoadBalancerBackend implements ILoadBalancerBackend {

                    /**
                     * Constructs a new LoadBalancerBackend.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.ILoadBalancerBackend);

                    /** LoadBalancerBackend displayName. */
                    public displayName: string;

                    /** LoadBalancerBackend uri. */
                    public uri: string;

                    /** LoadBalancerBackend healthCheckFirewallState. */
                    public healthCheckFirewallState: (google.cloud.networkmanagement.v1.LoadBalancerBackend.HealthCheckFirewallState|keyof typeof google.cloud.networkmanagement.v1.LoadBalancerBackend.HealthCheckFirewallState);

                    /** LoadBalancerBackend healthCheckAllowingFirewallRules. */
                    public healthCheckAllowingFirewallRules: string[];

                    /** LoadBalancerBackend healthCheckBlockingFirewallRules. */
                    public healthCheckBlockingFirewallRules: string[];

                    /**
                     * Creates a new LoadBalancerBackend instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoadBalancerBackend instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.ILoadBalancerBackend): google.cloud.networkmanagement.v1.LoadBalancerBackend;

                    /**
                     * Encodes the specified LoadBalancerBackend message. Does not implicitly {@link google.cloud.networkmanagement.v1.LoadBalancerBackend.verify|verify} messages.
                     * @param message LoadBalancerBackend message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.ILoadBalancerBackend, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoadBalancerBackend message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.LoadBalancerBackend.verify|verify} messages.
                     * @param message LoadBalancerBackend message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.ILoadBalancerBackend, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoadBalancerBackend message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoadBalancerBackend
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.LoadBalancerBackend;

                    /**
                     * Decodes a LoadBalancerBackend message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoadBalancerBackend
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.LoadBalancerBackend;

                    /**
                     * Verifies a LoadBalancerBackend message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoadBalancerBackend message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoadBalancerBackend
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.LoadBalancerBackend;

                    /**
                     * Creates a plain object from a LoadBalancerBackend message. Also converts values to other types if specified.
                     * @param message LoadBalancerBackend
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.LoadBalancerBackend, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoadBalancerBackend to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LoadBalancerBackend {

                    /** HealthCheckFirewallState enum. */
                    enum HealthCheckFirewallState {
                        HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED = 0,
                        CONFIGURED = 1,
                        MISCONFIGURED = 2
                    }
                }

                /** Properties of a VpnGatewayInfo. */
                interface IVpnGatewayInfo {

                    /** VpnGatewayInfo displayName */
                    displayName?: (string|null);

                    /** VpnGatewayInfo uri */
                    uri?: (string|null);

                    /** VpnGatewayInfo networkUri */
                    networkUri?: (string|null);

                    /** VpnGatewayInfo ipAddress */
                    ipAddress?: (string|null);

                    /** VpnGatewayInfo vpnTunnelUri */
                    vpnTunnelUri?: (string|null);

                    /** VpnGatewayInfo region */
                    region?: (string|null);
                }

                /** Represents a VpnGatewayInfo. */
                class VpnGatewayInfo implements IVpnGatewayInfo {

                    /**
                     * Constructs a new VpnGatewayInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IVpnGatewayInfo);

                    /** VpnGatewayInfo displayName. */
                    public displayName: string;

                    /** VpnGatewayInfo uri. */
                    public uri: string;

                    /** VpnGatewayInfo networkUri. */
                    public networkUri: string;

                    /** VpnGatewayInfo ipAddress. */
                    public ipAddress: string;

                    /** VpnGatewayInfo vpnTunnelUri. */
                    public vpnTunnelUri: string;

                    /** VpnGatewayInfo region. */
                    public region: string;

                    /**
                     * Creates a new VpnGatewayInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VpnGatewayInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IVpnGatewayInfo): google.cloud.networkmanagement.v1.VpnGatewayInfo;

                    /**
                     * Encodes the specified VpnGatewayInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.VpnGatewayInfo.verify|verify} messages.
                     * @param message VpnGatewayInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IVpnGatewayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VpnGatewayInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.VpnGatewayInfo.verify|verify} messages.
                     * @param message VpnGatewayInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IVpnGatewayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VpnGatewayInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VpnGatewayInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.VpnGatewayInfo;

                    /**
                     * Decodes a VpnGatewayInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VpnGatewayInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.VpnGatewayInfo;

                    /**
                     * Verifies a VpnGatewayInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VpnGatewayInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VpnGatewayInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.VpnGatewayInfo;

                    /**
                     * Creates a plain object from a VpnGatewayInfo message. Also converts values to other types if specified.
                     * @param message VpnGatewayInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.VpnGatewayInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VpnGatewayInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VpnTunnelInfo. */
                interface IVpnTunnelInfo {

                    /** VpnTunnelInfo displayName */
                    displayName?: (string|null);

                    /** VpnTunnelInfo uri */
                    uri?: (string|null);

                    /** VpnTunnelInfo sourceGateway */
                    sourceGateway?: (string|null);

                    /** VpnTunnelInfo remoteGateway */
                    remoteGateway?: (string|null);

                    /** VpnTunnelInfo remoteGatewayIp */
                    remoteGatewayIp?: (string|null);

                    /** VpnTunnelInfo sourceGatewayIp */
                    sourceGatewayIp?: (string|null);

                    /** VpnTunnelInfo networkUri */
                    networkUri?: (string|null);

                    /** VpnTunnelInfo region */
                    region?: (string|null);

                    /** VpnTunnelInfo routingType */
                    routingType?: (google.cloud.networkmanagement.v1.VpnTunnelInfo.RoutingType|keyof typeof google.cloud.networkmanagement.v1.VpnTunnelInfo.RoutingType|null);
                }

                /** Represents a VpnTunnelInfo. */
                class VpnTunnelInfo implements IVpnTunnelInfo {

                    /**
                     * Constructs a new VpnTunnelInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IVpnTunnelInfo);

                    /** VpnTunnelInfo displayName. */
                    public displayName: string;

                    /** VpnTunnelInfo uri. */
                    public uri: string;

                    /** VpnTunnelInfo sourceGateway. */
                    public sourceGateway: string;

                    /** VpnTunnelInfo remoteGateway. */
                    public remoteGateway: string;

                    /** VpnTunnelInfo remoteGatewayIp. */
                    public remoteGatewayIp: string;

                    /** VpnTunnelInfo sourceGatewayIp. */
                    public sourceGatewayIp: string;

                    /** VpnTunnelInfo networkUri. */
                    public networkUri: string;

                    /** VpnTunnelInfo region. */
                    public region: string;

                    /** VpnTunnelInfo routingType. */
                    public routingType: (google.cloud.networkmanagement.v1.VpnTunnelInfo.RoutingType|keyof typeof google.cloud.networkmanagement.v1.VpnTunnelInfo.RoutingType);

                    /**
                     * Creates a new VpnTunnelInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VpnTunnelInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IVpnTunnelInfo): google.cloud.networkmanagement.v1.VpnTunnelInfo;

                    /**
                     * Encodes the specified VpnTunnelInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.VpnTunnelInfo.verify|verify} messages.
                     * @param message VpnTunnelInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IVpnTunnelInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VpnTunnelInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.VpnTunnelInfo.verify|verify} messages.
                     * @param message VpnTunnelInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IVpnTunnelInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VpnTunnelInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VpnTunnelInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.VpnTunnelInfo;

                    /**
                     * Decodes a VpnTunnelInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VpnTunnelInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.VpnTunnelInfo;

                    /**
                     * Verifies a VpnTunnelInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VpnTunnelInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VpnTunnelInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.VpnTunnelInfo;

                    /**
                     * Creates a plain object from a VpnTunnelInfo message. Also converts values to other types if specified.
                     * @param message VpnTunnelInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.VpnTunnelInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VpnTunnelInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace VpnTunnelInfo {

                    /** RoutingType enum. */
                    enum RoutingType {
                        ROUTING_TYPE_UNSPECIFIED = 0,
                        ROUTE_BASED = 1,
                        POLICY_BASED = 2,
                        DYNAMIC = 3
                    }
                }

                /** Properties of an EndpointInfo. */
                interface IEndpointInfo {

                    /** EndpointInfo sourceIp */
                    sourceIp?: (string|null);

                    /** EndpointInfo destinationIp */
                    destinationIp?: (string|null);

                    /** EndpointInfo protocol */
                    protocol?: (string|null);

                    /** EndpointInfo sourcePort */
                    sourcePort?: (number|null);

                    /** EndpointInfo destinationPort */
                    destinationPort?: (number|null);

                    /** EndpointInfo sourceNetworkUri */
                    sourceNetworkUri?: (string|null);

                    /** EndpointInfo destinationNetworkUri */
                    destinationNetworkUri?: (string|null);
                }

                /** Represents an EndpointInfo. */
                class EndpointInfo implements IEndpointInfo {

                    /**
                     * Constructs a new EndpointInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IEndpointInfo);

                    /** EndpointInfo sourceIp. */
                    public sourceIp: string;

                    /** EndpointInfo destinationIp. */
                    public destinationIp: string;

                    /** EndpointInfo protocol. */
                    public protocol: string;

                    /** EndpointInfo sourcePort. */
                    public sourcePort: number;

                    /** EndpointInfo destinationPort. */
                    public destinationPort: number;

                    /** EndpointInfo sourceNetworkUri. */
                    public sourceNetworkUri: string;

                    /** EndpointInfo destinationNetworkUri. */
                    public destinationNetworkUri: string;

                    /**
                     * Creates a new EndpointInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EndpointInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IEndpointInfo): google.cloud.networkmanagement.v1.EndpointInfo;

                    /**
                     * Encodes the specified EndpointInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.EndpointInfo.verify|verify} messages.
                     * @param message EndpointInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IEndpointInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EndpointInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.EndpointInfo.verify|verify} messages.
                     * @param message EndpointInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IEndpointInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EndpointInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EndpointInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.EndpointInfo;

                    /**
                     * Decodes an EndpointInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EndpointInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.EndpointInfo;

                    /**
                     * Verifies an EndpointInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EndpointInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EndpointInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.EndpointInfo;

                    /**
                     * Creates a plain object from an EndpointInfo message. Also converts values to other types if specified.
                     * @param message EndpointInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.EndpointInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EndpointInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeliverInfo. */
                interface IDeliverInfo {

                    /** DeliverInfo target */
                    target?: (google.cloud.networkmanagement.v1.DeliverInfo.Target|keyof typeof google.cloud.networkmanagement.v1.DeliverInfo.Target|null);

                    /** DeliverInfo resourceUri */
                    resourceUri?: (string|null);
                }

                /** Represents a DeliverInfo. */
                class DeliverInfo implements IDeliverInfo {

                    /**
                     * Constructs a new DeliverInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IDeliverInfo);

                    /** DeliverInfo target. */
                    public target: (google.cloud.networkmanagement.v1.DeliverInfo.Target|keyof typeof google.cloud.networkmanagement.v1.DeliverInfo.Target);

                    /** DeliverInfo resourceUri. */
                    public resourceUri: string;

                    /**
                     * Creates a new DeliverInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeliverInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IDeliverInfo): google.cloud.networkmanagement.v1.DeliverInfo;

                    /**
                     * Encodes the specified DeliverInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.DeliverInfo.verify|verify} messages.
                     * @param message DeliverInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IDeliverInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeliverInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.DeliverInfo.verify|verify} messages.
                     * @param message DeliverInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IDeliverInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeliverInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeliverInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.DeliverInfo;

                    /**
                     * Decodes a DeliverInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeliverInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.DeliverInfo;

                    /**
                     * Verifies a DeliverInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeliverInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeliverInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.DeliverInfo;

                    /**
                     * Creates a plain object from a DeliverInfo message. Also converts values to other types if specified.
                     * @param message DeliverInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.DeliverInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeliverInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DeliverInfo {

                    /** Target enum. */
                    enum Target {
                        TARGET_UNSPECIFIED = 0,
                        INSTANCE = 1,
                        INTERNET = 2,
                        GOOGLE_API = 3,
                        GKE_MASTER = 4,
                        CLOUD_SQL_INSTANCE = 5
                    }
                }

                /** Properties of a ForwardInfo. */
                interface IForwardInfo {

                    /** ForwardInfo target */
                    target?: (google.cloud.networkmanagement.v1.ForwardInfo.Target|keyof typeof google.cloud.networkmanagement.v1.ForwardInfo.Target|null);

                    /** ForwardInfo resourceUri */
                    resourceUri?: (string|null);
                }

                /** Represents a ForwardInfo. */
                class ForwardInfo implements IForwardInfo {

                    /**
                     * Constructs a new ForwardInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IForwardInfo);

                    /** ForwardInfo target. */
                    public target: (google.cloud.networkmanagement.v1.ForwardInfo.Target|keyof typeof google.cloud.networkmanagement.v1.ForwardInfo.Target);

                    /** ForwardInfo resourceUri. */
                    public resourceUri: string;

                    /**
                     * Creates a new ForwardInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ForwardInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IForwardInfo): google.cloud.networkmanagement.v1.ForwardInfo;

                    /**
                     * Encodes the specified ForwardInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.ForwardInfo.verify|verify} messages.
                     * @param message ForwardInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IForwardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ForwardInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.ForwardInfo.verify|verify} messages.
                     * @param message ForwardInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IForwardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ForwardInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ForwardInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.ForwardInfo;

                    /**
                     * Decodes a ForwardInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ForwardInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.ForwardInfo;

                    /**
                     * Verifies a ForwardInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ForwardInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ForwardInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.ForwardInfo;

                    /**
                     * Creates a plain object from a ForwardInfo message. Also converts values to other types if specified.
                     * @param message ForwardInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.ForwardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ForwardInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ForwardInfo {

                    /** Target enum. */
                    enum Target {
                        TARGET_UNSPECIFIED = 0,
                        PEERING_VPC = 1,
                        VPN_GATEWAY = 2,
                        INTERCONNECT = 3,
                        GKE_MASTER = 4,
                        IMPORTED_CUSTOM_ROUTE_NEXT_HOP = 5,
                        CLOUD_SQL_INSTANCE = 6
                    }
                }

                /** Properties of an AbortInfo. */
                interface IAbortInfo {

                    /** AbortInfo cause */
                    cause?: (google.cloud.networkmanagement.v1.AbortInfo.Cause|keyof typeof google.cloud.networkmanagement.v1.AbortInfo.Cause|null);

                    /** AbortInfo resourceUri */
                    resourceUri?: (string|null);
                }

                /** Represents an AbortInfo. */
                class AbortInfo implements IAbortInfo {

                    /**
                     * Constructs a new AbortInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IAbortInfo);

                    /** AbortInfo cause. */
                    public cause: (google.cloud.networkmanagement.v1.AbortInfo.Cause|keyof typeof google.cloud.networkmanagement.v1.AbortInfo.Cause);

                    /** AbortInfo resourceUri. */
                    public resourceUri: string;

                    /**
                     * Creates a new AbortInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AbortInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IAbortInfo): google.cloud.networkmanagement.v1.AbortInfo;

                    /**
                     * Encodes the specified AbortInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.AbortInfo.verify|verify} messages.
                     * @param message AbortInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IAbortInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AbortInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.AbortInfo.verify|verify} messages.
                     * @param message AbortInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IAbortInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AbortInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AbortInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.AbortInfo;

                    /**
                     * Decodes an AbortInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AbortInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.AbortInfo;

                    /**
                     * Verifies an AbortInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AbortInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AbortInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.AbortInfo;

                    /**
                     * Creates a plain object from an AbortInfo message. Also converts values to other types if specified.
                     * @param message AbortInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.AbortInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AbortInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AbortInfo {

                    /** Cause enum. */
                    enum Cause {
                        CAUSE_UNSPECIFIED = 0,
                        UNKNOWN_NETWORK = 1,
                        UNKNOWN_IP = 2,
                        UNKNOWN_PROJECT = 3,
                        PERMISSION_DENIED = 4,
                        NO_SOURCE_LOCATION = 5,
                        INVALID_ARGUMENT = 6,
                        NO_EXTERNAL_IP = 7,
                        UNINTENDED_DESTINATION = 8,
                        TRACE_TOO_LONG = 9,
                        INTERNAL_ERROR = 10,
                        SOURCE_ENDPOINT_NOT_FOUND = 11,
                        MISMATCHED_SOURCE_NETWORK = 12,
                        DESTINATION_ENDPOINT_NOT_FOUND = 13,
                        MISMATCHED_DESTINATION_NETWORK = 14
                    }
                }

                /** Properties of a DropInfo. */
                interface IDropInfo {

                    /** DropInfo cause */
                    cause?: (google.cloud.networkmanagement.v1.DropInfo.Cause|keyof typeof google.cloud.networkmanagement.v1.DropInfo.Cause|null);

                    /** DropInfo resourceUri */
                    resourceUri?: (string|null);
                }

                /** Represents a DropInfo. */
                class DropInfo implements IDropInfo {

                    /**
                     * Constructs a new DropInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IDropInfo);

                    /** DropInfo cause. */
                    public cause: (google.cloud.networkmanagement.v1.DropInfo.Cause|keyof typeof google.cloud.networkmanagement.v1.DropInfo.Cause);

                    /** DropInfo resourceUri. */
                    public resourceUri: string;

                    /**
                     * Creates a new DropInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DropInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IDropInfo): google.cloud.networkmanagement.v1.DropInfo;

                    /**
                     * Encodes the specified DropInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.DropInfo.verify|verify} messages.
                     * @param message DropInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IDropInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DropInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.DropInfo.verify|verify} messages.
                     * @param message DropInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IDropInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DropInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DropInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.DropInfo;

                    /**
                     * Decodes a DropInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DropInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.DropInfo;

                    /**
                     * Verifies a DropInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DropInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DropInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.DropInfo;

                    /**
                     * Creates a plain object from a DropInfo message. Also converts values to other types if specified.
                     * @param message DropInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.DropInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DropInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DropInfo {

                    /** Cause enum. */
                    enum Cause {
                        CAUSE_UNSPECIFIED = 0,
                        UNKNOWN_EXTERNAL_ADDRESS = 1,
                        FOREIGN_IP_DISALLOWED = 2,
                        FIREWALL_RULE = 3,
                        NO_ROUTE = 4,
                        ROUTE_BLACKHOLE = 5,
                        ROUTE_WRONG_NETWORK = 6,
                        PRIVATE_TRAFFIC_TO_INTERNET = 7,
                        PRIVATE_GOOGLE_ACCESS_DISALLOWED = 8,
                        NO_EXTERNAL_ADDRESS = 9,
                        UNKNOWN_INTERNAL_ADDRESS = 10,
                        FORWARDING_RULE_MISMATCH = 11,
                        FORWARDING_RULE_NO_INSTANCES = 12,
                        FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK = 13,
                        INSTANCE_NOT_RUNNING = 14,
                        TRAFFIC_TYPE_BLOCKED = 15,
                        GKE_MASTER_UNAUTHORIZED_ACCESS = 16,
                        CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS = 17,
                        DROPPED_INSIDE_GKE_SERVICE = 18,
                        DROPPED_INSIDE_CLOUD_SQL_SERVICE = 19,
                        GOOGLE_MANAGED_SERVICE_NO_PEERING = 20,
                        CLOUD_SQL_INSTANCE_NO_IP_ADDRESS = 21
                    }
                }

                /** Properties of a GKEMasterInfo. */
                interface IGKEMasterInfo {

                    /** GKEMasterInfo clusterUri */
                    clusterUri?: (string|null);

                    /** GKEMasterInfo clusterNetworkUri */
                    clusterNetworkUri?: (string|null);

                    /** GKEMasterInfo internalIp */
                    internalIp?: (string|null);

                    /** GKEMasterInfo externalIp */
                    externalIp?: (string|null);
                }

                /** Represents a GKEMasterInfo. */
                class GKEMasterInfo implements IGKEMasterInfo {

                    /**
                     * Constructs a new GKEMasterInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IGKEMasterInfo);

                    /** GKEMasterInfo clusterUri. */
                    public clusterUri: string;

                    /** GKEMasterInfo clusterNetworkUri. */
                    public clusterNetworkUri: string;

                    /** GKEMasterInfo internalIp. */
                    public internalIp: string;

                    /** GKEMasterInfo externalIp. */
                    public externalIp: string;

                    /**
                     * Creates a new GKEMasterInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GKEMasterInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IGKEMasterInfo): google.cloud.networkmanagement.v1.GKEMasterInfo;

                    /**
                     * Encodes the specified GKEMasterInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.GKEMasterInfo.verify|verify} messages.
                     * @param message GKEMasterInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IGKEMasterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GKEMasterInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.GKEMasterInfo.verify|verify} messages.
                     * @param message GKEMasterInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IGKEMasterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GKEMasterInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GKEMasterInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.GKEMasterInfo;

                    /**
                     * Decodes a GKEMasterInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GKEMasterInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.GKEMasterInfo;

                    /**
                     * Verifies a GKEMasterInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GKEMasterInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GKEMasterInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.GKEMasterInfo;

                    /**
                     * Creates a plain object from a GKEMasterInfo message. Also converts values to other types if specified.
                     * @param message GKEMasterInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.GKEMasterInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GKEMasterInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CloudSQLInstanceInfo. */
                interface ICloudSQLInstanceInfo {

                    /** CloudSQLInstanceInfo displayName */
                    displayName?: (string|null);

                    /** CloudSQLInstanceInfo uri */
                    uri?: (string|null);

                    /** CloudSQLInstanceInfo networkUri */
                    networkUri?: (string|null);

                    /** CloudSQLInstanceInfo internalIp */
                    internalIp?: (string|null);

                    /** CloudSQLInstanceInfo externalIp */
                    externalIp?: (string|null);

                    /** CloudSQLInstanceInfo region */
                    region?: (string|null);
                }

                /** Represents a CloudSQLInstanceInfo. */
                class CloudSQLInstanceInfo implements ICloudSQLInstanceInfo {

                    /**
                     * Constructs a new CloudSQLInstanceInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.ICloudSQLInstanceInfo);

                    /** CloudSQLInstanceInfo displayName. */
                    public displayName: string;

                    /** CloudSQLInstanceInfo uri. */
                    public uri: string;

                    /** CloudSQLInstanceInfo networkUri. */
                    public networkUri: string;

                    /** CloudSQLInstanceInfo internalIp. */
                    public internalIp: string;

                    /** CloudSQLInstanceInfo externalIp. */
                    public externalIp: string;

                    /** CloudSQLInstanceInfo region. */
                    public region: string;

                    /**
                     * Creates a new CloudSQLInstanceInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudSQLInstanceInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.ICloudSQLInstanceInfo): google.cloud.networkmanagement.v1.CloudSQLInstanceInfo;

                    /**
                     * Encodes the specified CloudSQLInstanceInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1.CloudSQLInstanceInfo.verify|verify} messages.
                     * @param message CloudSQLInstanceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.ICloudSQLInstanceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudSQLInstanceInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.CloudSQLInstanceInfo.verify|verify} messages.
                     * @param message CloudSQLInstanceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.ICloudSQLInstanceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudSQLInstanceInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudSQLInstanceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.CloudSQLInstanceInfo;

                    /**
                     * Decodes a CloudSQLInstanceInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudSQLInstanceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.CloudSQLInstanceInfo;

                    /**
                     * Verifies a CloudSQLInstanceInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudSQLInstanceInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudSQLInstanceInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.CloudSQLInstanceInfo;

                    /**
                     * Creates a plain object from a CloudSQLInstanceInfo message. Also converts values to other types if specified.
                     * @param message CloudSQLInstanceInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.CloudSQLInstanceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudSQLInstanceInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a ReachabilityService */
                class ReachabilityService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ReachabilityService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ReachabilityService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ReachabilityService;

                    /**
                     * Calls ListConnectivityTests.
                     * @param request ListConnectivityTestsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConnectivityTestsResponse
                     */
                    public listConnectivityTests(request: google.cloud.networkmanagement.v1.IListConnectivityTestsRequest, callback: google.cloud.networkmanagement.v1.ReachabilityService.ListConnectivityTestsCallback): void;

                    /**
                     * Calls ListConnectivityTests.
                     * @param request ListConnectivityTestsRequest message or plain object
                     * @returns Promise
                     */
                    public listConnectivityTests(request: google.cloud.networkmanagement.v1.IListConnectivityTestsRequest): Promise<google.cloud.networkmanagement.v1.ListConnectivityTestsResponse>;

                    /**
                     * Calls GetConnectivityTest.
                     * @param request GetConnectivityTestRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConnectivityTest
                     */
                    public getConnectivityTest(request: google.cloud.networkmanagement.v1.IGetConnectivityTestRequest, callback: google.cloud.networkmanagement.v1.ReachabilityService.GetConnectivityTestCallback): void;

                    /**
                     * Calls GetConnectivityTest.
                     * @param request GetConnectivityTestRequest message or plain object
                     * @returns Promise
                     */
                    public getConnectivityTest(request: google.cloud.networkmanagement.v1.IGetConnectivityTestRequest): Promise<google.cloud.networkmanagement.v1.ConnectivityTest>;

                    /**
                     * Calls CreateConnectivityTest.
                     * @param request CreateConnectivityTestRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createConnectivityTest(request: google.cloud.networkmanagement.v1.ICreateConnectivityTestRequest, callback: google.cloud.networkmanagement.v1.ReachabilityService.CreateConnectivityTestCallback): void;

                    /**
                     * Calls CreateConnectivityTest.
                     * @param request CreateConnectivityTestRequest message or plain object
                     * @returns Promise
                     */
                    public createConnectivityTest(request: google.cloud.networkmanagement.v1.ICreateConnectivityTestRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateConnectivityTest.
                     * @param request UpdateConnectivityTestRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateConnectivityTest(request: google.cloud.networkmanagement.v1.IUpdateConnectivityTestRequest, callback: google.cloud.networkmanagement.v1.ReachabilityService.UpdateConnectivityTestCallback): void;

                    /**
                     * Calls UpdateConnectivityTest.
                     * @param request UpdateConnectivityTestRequest message or plain object
                     * @returns Promise
                     */
                    public updateConnectivityTest(request: google.cloud.networkmanagement.v1.IUpdateConnectivityTestRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RerunConnectivityTest.
                     * @param request RerunConnectivityTestRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public rerunConnectivityTest(request: google.cloud.networkmanagement.v1.IRerunConnectivityTestRequest, callback: google.cloud.networkmanagement.v1.ReachabilityService.RerunConnectivityTestCallback): void;

                    /**
                     * Calls RerunConnectivityTest.
                     * @param request RerunConnectivityTestRequest message or plain object
                     * @returns Promise
                     */
                    public rerunConnectivityTest(request: google.cloud.networkmanagement.v1.IRerunConnectivityTestRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteConnectivityTest.
                     * @param request DeleteConnectivityTestRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteConnectivityTest(request: google.cloud.networkmanagement.v1.IDeleteConnectivityTestRequest, callback: google.cloud.networkmanagement.v1.ReachabilityService.DeleteConnectivityTestCallback): void;

                    /**
                     * Calls DeleteConnectivityTest.
                     * @param request DeleteConnectivityTestRequest message or plain object
                     * @returns Promise
                     */
                    public deleteConnectivityTest(request: google.cloud.networkmanagement.v1.IDeleteConnectivityTestRequest): Promise<google.longrunning.Operation>;
                }

                namespace ReachabilityService {

                    /**
                     * Callback as used by {@link google.cloud.networkmanagement.v1.ReachabilityService#listConnectivityTests}.
                     * @param error Error, if any
                     * @param [response] ListConnectivityTestsResponse
                     */
                    type ListConnectivityTestsCallback = (error: (Error|null), response?: google.cloud.networkmanagement.v1.ListConnectivityTestsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkmanagement.v1.ReachabilityService#getConnectivityTest}.
                     * @param error Error, if any
                     * @param [response] ConnectivityTest
                     */
                    type GetConnectivityTestCallback = (error: (Error|null), response?: google.cloud.networkmanagement.v1.ConnectivityTest) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkmanagement.v1.ReachabilityService#createConnectivityTest}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateConnectivityTestCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkmanagement.v1.ReachabilityService#updateConnectivityTest}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateConnectivityTestCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkmanagement.v1.ReachabilityService#rerunConnectivityTest}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RerunConnectivityTestCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkmanagement.v1.ReachabilityService#deleteConnectivityTest}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteConnectivityTestCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ListConnectivityTestsRequest. */
                interface IListConnectivityTestsRequest {

                    /** ListConnectivityTestsRequest parent */
                    parent?: (string|null);

                    /** ListConnectivityTestsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConnectivityTestsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListConnectivityTestsRequest filter */
                    filter?: (string|null);

                    /** ListConnectivityTestsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListConnectivityTestsRequest. */
                class ListConnectivityTestsRequest implements IListConnectivityTestsRequest {

                    /**
                     * Constructs a new ListConnectivityTestsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IListConnectivityTestsRequest);

                    /** ListConnectivityTestsRequest parent. */
                    public parent: string;

                    /** ListConnectivityTestsRequest pageSize. */
                    public pageSize: number;

                    /** ListConnectivityTestsRequest pageToken. */
                    public pageToken: string;

                    /** ListConnectivityTestsRequest filter. */
                    public filter: string;

                    /** ListConnectivityTestsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListConnectivityTestsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectivityTestsRequest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IListConnectivityTestsRequest): google.cloud.networkmanagement.v1.ListConnectivityTestsRequest;

                    /**
                     * Encodes the specified ListConnectivityTestsRequest message. Does not implicitly {@link google.cloud.networkmanagement.v1.ListConnectivityTestsRequest.verify|verify} messages.
                     * @param message ListConnectivityTestsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IListConnectivityTestsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectivityTestsRequest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.ListConnectivityTestsRequest.verify|verify} messages.
                     * @param message ListConnectivityTestsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IListConnectivityTestsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectivityTestsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectivityTestsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.ListConnectivityTestsRequest;

                    /**
                     * Decodes a ListConnectivityTestsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectivityTestsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.ListConnectivityTestsRequest;

                    /**
                     * Verifies a ListConnectivityTestsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectivityTestsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectivityTestsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.ListConnectivityTestsRequest;

                    /**
                     * Creates a plain object from a ListConnectivityTestsRequest message. Also converts values to other types if specified.
                     * @param message ListConnectivityTestsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.ListConnectivityTestsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectivityTestsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListConnectivityTestsResponse. */
                interface IListConnectivityTestsResponse {

                    /** ListConnectivityTestsResponse resources */
                    resources?: (google.cloud.networkmanagement.v1.IConnectivityTest[]|null);

                    /** ListConnectivityTestsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListConnectivityTestsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListConnectivityTestsResponse. */
                class ListConnectivityTestsResponse implements IListConnectivityTestsResponse {

                    /**
                     * Constructs a new ListConnectivityTestsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IListConnectivityTestsResponse);

                    /** ListConnectivityTestsResponse resources. */
                    public resources: google.cloud.networkmanagement.v1.IConnectivityTest[];

                    /** ListConnectivityTestsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListConnectivityTestsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListConnectivityTestsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectivityTestsResponse instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IListConnectivityTestsResponse): google.cloud.networkmanagement.v1.ListConnectivityTestsResponse;

                    /**
                     * Encodes the specified ListConnectivityTestsResponse message. Does not implicitly {@link google.cloud.networkmanagement.v1.ListConnectivityTestsResponse.verify|verify} messages.
                     * @param message ListConnectivityTestsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IListConnectivityTestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectivityTestsResponse message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.ListConnectivityTestsResponse.verify|verify} messages.
                     * @param message ListConnectivityTestsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IListConnectivityTestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectivityTestsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectivityTestsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.ListConnectivityTestsResponse;

                    /**
                     * Decodes a ListConnectivityTestsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectivityTestsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.ListConnectivityTestsResponse;

                    /**
                     * Verifies a ListConnectivityTestsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectivityTestsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectivityTestsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.ListConnectivityTestsResponse;

                    /**
                     * Creates a plain object from a ListConnectivityTestsResponse message. Also converts values to other types if specified.
                     * @param message ListConnectivityTestsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.ListConnectivityTestsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectivityTestsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetConnectivityTestRequest. */
                interface IGetConnectivityTestRequest {

                    /** GetConnectivityTestRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConnectivityTestRequest. */
                class GetConnectivityTestRequest implements IGetConnectivityTestRequest {

                    /**
                     * Constructs a new GetConnectivityTestRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IGetConnectivityTestRequest);

                    /** GetConnectivityTestRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConnectivityTestRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConnectivityTestRequest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IGetConnectivityTestRequest): google.cloud.networkmanagement.v1.GetConnectivityTestRequest;

                    /**
                     * Encodes the specified GetConnectivityTestRequest message. Does not implicitly {@link google.cloud.networkmanagement.v1.GetConnectivityTestRequest.verify|verify} messages.
                     * @param message GetConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IGetConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConnectivityTestRequest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.GetConnectivityTestRequest.verify|verify} messages.
                     * @param message GetConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IGetConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConnectivityTestRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.GetConnectivityTestRequest;

                    /**
                     * Decodes a GetConnectivityTestRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.GetConnectivityTestRequest;

                    /**
                     * Verifies a GetConnectivityTestRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConnectivityTestRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConnectivityTestRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.GetConnectivityTestRequest;

                    /**
                     * Creates a plain object from a GetConnectivityTestRequest message. Also converts values to other types if specified.
                     * @param message GetConnectivityTestRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.GetConnectivityTestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConnectivityTestRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateConnectivityTestRequest. */
                interface ICreateConnectivityTestRequest {

                    /** CreateConnectivityTestRequest parent */
                    parent?: (string|null);

                    /** CreateConnectivityTestRequest testId */
                    testId?: (string|null);

                    /** CreateConnectivityTestRequest resource */
                    resource?: (google.cloud.networkmanagement.v1.IConnectivityTest|null);
                }

                /** Represents a CreateConnectivityTestRequest. */
                class CreateConnectivityTestRequest implements ICreateConnectivityTestRequest {

                    /**
                     * Constructs a new CreateConnectivityTestRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.ICreateConnectivityTestRequest);

                    /** CreateConnectivityTestRequest parent. */
                    public parent: string;

                    /** CreateConnectivityTestRequest testId. */
                    public testId: string;

                    /** CreateConnectivityTestRequest resource. */
                    public resource?: (google.cloud.networkmanagement.v1.IConnectivityTest|null);

                    /**
                     * Creates a new CreateConnectivityTestRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateConnectivityTestRequest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.ICreateConnectivityTestRequest): google.cloud.networkmanagement.v1.CreateConnectivityTestRequest;

                    /**
                     * Encodes the specified CreateConnectivityTestRequest message. Does not implicitly {@link google.cloud.networkmanagement.v1.CreateConnectivityTestRequest.verify|verify} messages.
                     * @param message CreateConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.ICreateConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateConnectivityTestRequest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.CreateConnectivityTestRequest.verify|verify} messages.
                     * @param message CreateConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.ICreateConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateConnectivityTestRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.CreateConnectivityTestRequest;

                    /**
                     * Decodes a CreateConnectivityTestRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.CreateConnectivityTestRequest;

                    /**
                     * Verifies a CreateConnectivityTestRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateConnectivityTestRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateConnectivityTestRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.CreateConnectivityTestRequest;

                    /**
                     * Creates a plain object from a CreateConnectivityTestRequest message. Also converts values to other types if specified.
                     * @param message CreateConnectivityTestRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.CreateConnectivityTestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateConnectivityTestRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateConnectivityTestRequest. */
                interface IUpdateConnectivityTestRequest {

                    /** UpdateConnectivityTestRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConnectivityTestRequest resource */
                    resource?: (google.cloud.networkmanagement.v1.IConnectivityTest|null);
                }

                /** Represents an UpdateConnectivityTestRequest. */
                class UpdateConnectivityTestRequest implements IUpdateConnectivityTestRequest {

                    /**
                     * Constructs a new UpdateConnectivityTestRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IUpdateConnectivityTestRequest);

                    /** UpdateConnectivityTestRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConnectivityTestRequest resource. */
                    public resource?: (google.cloud.networkmanagement.v1.IConnectivityTest|null);

                    /**
                     * Creates a new UpdateConnectivityTestRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateConnectivityTestRequest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IUpdateConnectivityTestRequest): google.cloud.networkmanagement.v1.UpdateConnectivityTestRequest;

                    /**
                     * Encodes the specified UpdateConnectivityTestRequest message. Does not implicitly {@link google.cloud.networkmanagement.v1.UpdateConnectivityTestRequest.verify|verify} messages.
                     * @param message UpdateConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IUpdateConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateConnectivityTestRequest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.UpdateConnectivityTestRequest.verify|verify} messages.
                     * @param message UpdateConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IUpdateConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateConnectivityTestRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.UpdateConnectivityTestRequest;

                    /**
                     * Decodes an UpdateConnectivityTestRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.UpdateConnectivityTestRequest;

                    /**
                     * Verifies an UpdateConnectivityTestRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateConnectivityTestRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateConnectivityTestRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.UpdateConnectivityTestRequest;

                    /**
                     * Creates a plain object from an UpdateConnectivityTestRequest message. Also converts values to other types if specified.
                     * @param message UpdateConnectivityTestRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.UpdateConnectivityTestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateConnectivityTestRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteConnectivityTestRequest. */
                interface IDeleteConnectivityTestRequest {

                    /** DeleteConnectivityTestRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteConnectivityTestRequest. */
                class DeleteConnectivityTestRequest implements IDeleteConnectivityTestRequest {

                    /**
                     * Constructs a new DeleteConnectivityTestRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IDeleteConnectivityTestRequest);

                    /** DeleteConnectivityTestRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteConnectivityTestRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteConnectivityTestRequest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IDeleteConnectivityTestRequest): google.cloud.networkmanagement.v1.DeleteConnectivityTestRequest;

                    /**
                     * Encodes the specified DeleteConnectivityTestRequest message. Does not implicitly {@link google.cloud.networkmanagement.v1.DeleteConnectivityTestRequest.verify|verify} messages.
                     * @param message DeleteConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IDeleteConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteConnectivityTestRequest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.DeleteConnectivityTestRequest.verify|verify} messages.
                     * @param message DeleteConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IDeleteConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteConnectivityTestRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.DeleteConnectivityTestRequest;

                    /**
                     * Decodes a DeleteConnectivityTestRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.DeleteConnectivityTestRequest;

                    /**
                     * Verifies a DeleteConnectivityTestRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteConnectivityTestRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteConnectivityTestRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.DeleteConnectivityTestRequest;

                    /**
                     * Creates a plain object from a DeleteConnectivityTestRequest message. Also converts values to other types if specified.
                     * @param message DeleteConnectivityTestRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.DeleteConnectivityTestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteConnectivityTestRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RerunConnectivityTestRequest. */
                interface IRerunConnectivityTestRequest {

                    /** RerunConnectivityTestRequest name */
                    name?: (string|null);
                }

                /** Represents a RerunConnectivityTestRequest. */
                class RerunConnectivityTestRequest implements IRerunConnectivityTestRequest {

                    /**
                     * Constructs a new RerunConnectivityTestRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IRerunConnectivityTestRequest);

                    /** RerunConnectivityTestRequest name. */
                    public name: string;

                    /**
                     * Creates a new RerunConnectivityTestRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RerunConnectivityTestRequest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IRerunConnectivityTestRequest): google.cloud.networkmanagement.v1.RerunConnectivityTestRequest;

                    /**
                     * Encodes the specified RerunConnectivityTestRequest message. Does not implicitly {@link google.cloud.networkmanagement.v1.RerunConnectivityTestRequest.verify|verify} messages.
                     * @param message RerunConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IRerunConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RerunConnectivityTestRequest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.RerunConnectivityTestRequest.verify|verify} messages.
                     * @param message RerunConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IRerunConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RerunConnectivityTestRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RerunConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.RerunConnectivityTestRequest;

                    /**
                     * Decodes a RerunConnectivityTestRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RerunConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.RerunConnectivityTestRequest;

                    /**
                     * Verifies a RerunConnectivityTestRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RerunConnectivityTestRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RerunConnectivityTestRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.RerunConnectivityTestRequest;

                    /**
                     * Creates a plain object from a RerunConnectivityTestRequest message. Also converts values to other types if specified.
                     * @param message RerunConnectivityTestRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.RerunConnectivityTestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RerunConnectivityTestRequest to JSON.
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

                    /** OperationMetadata statusDetail */
                    statusDetail?: (string|null);

                    /** OperationMetadata cancelRequested */
                    cancelRequested?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusDetail. */
                    public statusDetail: string;

                    /** OperationMetadata cancelRequested. */
                    public cancelRequested: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1.IOperationMetadata): google.cloud.networkmanagement.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.networkmanagement.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Properties of a ConnectivityTest. */
                interface IConnectivityTest {

                    /** ConnectivityTest name */
                    name?: (string|null);

                    /** ConnectivityTest description */
                    description?: (string|null);

                    /** ConnectivityTest source */
                    source?: (google.cloud.networkmanagement.v1beta1.IEndpoint|null);

                    /** ConnectivityTest destination */
                    destination?: (google.cloud.networkmanagement.v1beta1.IEndpoint|null);

                    /** ConnectivityTest protocol */
                    protocol?: (string|null);

                    /** ConnectivityTest relatedProjects */
                    relatedProjects?: (string[]|null);

                    /** ConnectivityTest displayName */
                    displayName?: (string|null);

                    /** ConnectivityTest labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ConnectivityTest createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectivityTest updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectivityTest reachabilityDetails */
                    reachabilityDetails?: (google.cloud.networkmanagement.v1beta1.IReachabilityDetails|null);

                    /** ConnectivityTest probingDetails */
                    probingDetails?: (google.cloud.networkmanagement.v1beta1.IProbingDetails|null);
                }

                /** Represents a ConnectivityTest. */
                class ConnectivityTest implements IConnectivityTest {

                    /**
                     * Constructs a new ConnectivityTest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IConnectivityTest);

                    /** ConnectivityTest name. */
                    public name: string;

                    /** ConnectivityTest description. */
                    public description: string;

                    /** ConnectivityTest source. */
                    public source?: (google.cloud.networkmanagement.v1beta1.IEndpoint|null);

                    /** ConnectivityTest destination. */
                    public destination?: (google.cloud.networkmanagement.v1beta1.IEndpoint|null);

                    /** ConnectivityTest protocol. */
                    public protocol: string;

                    /** ConnectivityTest relatedProjects. */
                    public relatedProjects: string[];

                    /** ConnectivityTest displayName. */
                    public displayName: string;

                    /** ConnectivityTest labels. */
                    public labels: { [k: string]: string };

                    /** ConnectivityTest createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectivityTest updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectivityTest reachabilityDetails. */
                    public reachabilityDetails?: (google.cloud.networkmanagement.v1beta1.IReachabilityDetails|null);

                    /** ConnectivityTest probingDetails. */
                    public probingDetails?: (google.cloud.networkmanagement.v1beta1.IProbingDetails|null);

                    /**
                     * Creates a new ConnectivityTest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectivityTest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IConnectivityTest): google.cloud.networkmanagement.v1beta1.ConnectivityTest;

                    /**
                     * Encodes the specified ConnectivityTest message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ConnectivityTest.verify|verify} messages.
                     * @param message ConnectivityTest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IConnectivityTest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConnectivityTest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ConnectivityTest.verify|verify} messages.
                     * @param message ConnectivityTest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IConnectivityTest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConnectivityTest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConnectivityTest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.ConnectivityTest;

                    /**
                     * Decodes a ConnectivityTest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConnectivityTest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.ConnectivityTest;

                    /**
                     * Verifies a ConnectivityTest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConnectivityTest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConnectivityTest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.ConnectivityTest;

                    /**
                     * Creates a plain object from a ConnectivityTest message. Also converts values to other types if specified.
                     * @param message ConnectivityTest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.ConnectivityTest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConnectivityTest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Endpoint. */
                interface IEndpoint {

                    /** Endpoint ipAddress */
                    ipAddress?: (string|null);

                    /** Endpoint port */
                    port?: (number|null);

                    /** Endpoint instance */
                    instance?: (string|null);

                    /** Endpoint gkeMasterCluster */
                    gkeMasterCluster?: (string|null);

                    /** Endpoint cloudSqlInstance */
                    cloudSqlInstance?: (string|null);

                    /** Endpoint network */
                    network?: (string|null);

                    /** Endpoint networkType */
                    networkType?: (google.cloud.networkmanagement.v1beta1.Endpoint.NetworkType|keyof typeof google.cloud.networkmanagement.v1beta1.Endpoint.NetworkType|null);

                    /** Endpoint projectId */
                    projectId?: (string|null);
                }

                /** Represents an Endpoint. */
                class Endpoint implements IEndpoint {

                    /**
                     * Constructs a new Endpoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IEndpoint);

                    /** Endpoint ipAddress. */
                    public ipAddress: string;

                    /** Endpoint port. */
                    public port: number;

                    /** Endpoint instance. */
                    public instance: string;

                    /** Endpoint gkeMasterCluster. */
                    public gkeMasterCluster: string;

                    /** Endpoint cloudSqlInstance. */
                    public cloudSqlInstance: string;

                    /** Endpoint network. */
                    public network: string;

                    /** Endpoint networkType. */
                    public networkType: (google.cloud.networkmanagement.v1beta1.Endpoint.NetworkType|keyof typeof google.cloud.networkmanagement.v1beta1.Endpoint.NetworkType);

                    /** Endpoint projectId. */
                    public projectId: string;

                    /**
                     * Creates a new Endpoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Endpoint instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IEndpoint): google.cloud.networkmanagement.v1beta1.Endpoint;

                    /**
                     * Encodes the specified Endpoint message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.Endpoint.verify|verify} messages.
                     * @param message Endpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Endpoint message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.Endpoint.verify|verify} messages.
                     * @param message Endpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Endpoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Endpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.Endpoint;

                    /**
                     * Decodes an Endpoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Endpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.Endpoint;

                    /**
                     * Verifies an Endpoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Endpoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Endpoint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.Endpoint;

                    /**
                     * Creates a plain object from an Endpoint message. Also converts values to other types if specified.
                     * @param message Endpoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.Endpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Endpoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Endpoint {

                    /** NetworkType enum. */
                    enum NetworkType {
                        NETWORK_TYPE_UNSPECIFIED = 0,
                        GCP_NETWORK = 1,
                        NON_GCP_NETWORK = 2
                    }
                }

                /** Properties of a ReachabilityDetails. */
                interface IReachabilityDetails {

                    /** ReachabilityDetails result */
                    result?: (google.cloud.networkmanagement.v1beta1.ReachabilityDetails.Result|keyof typeof google.cloud.networkmanagement.v1beta1.ReachabilityDetails.Result|null);

                    /** ReachabilityDetails verifyTime */
                    verifyTime?: (google.protobuf.ITimestamp|null);

                    /** ReachabilityDetails error */
                    error?: (google.rpc.IStatus|null);

                    /** ReachabilityDetails traces */
                    traces?: (google.cloud.networkmanagement.v1beta1.ITrace[]|null);
                }

                /** Represents a ReachabilityDetails. */
                class ReachabilityDetails implements IReachabilityDetails {

                    /**
                     * Constructs a new ReachabilityDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IReachabilityDetails);

                    /** ReachabilityDetails result. */
                    public result: (google.cloud.networkmanagement.v1beta1.ReachabilityDetails.Result|keyof typeof google.cloud.networkmanagement.v1beta1.ReachabilityDetails.Result);

                    /** ReachabilityDetails verifyTime. */
                    public verifyTime?: (google.protobuf.ITimestamp|null);

                    /** ReachabilityDetails error. */
                    public error?: (google.rpc.IStatus|null);

                    /** ReachabilityDetails traces. */
                    public traces: google.cloud.networkmanagement.v1beta1.ITrace[];

                    /**
                     * Creates a new ReachabilityDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReachabilityDetails instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IReachabilityDetails): google.cloud.networkmanagement.v1beta1.ReachabilityDetails;

                    /**
                     * Encodes the specified ReachabilityDetails message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ReachabilityDetails.verify|verify} messages.
                     * @param message ReachabilityDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IReachabilityDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReachabilityDetails message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ReachabilityDetails.verify|verify} messages.
                     * @param message ReachabilityDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IReachabilityDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReachabilityDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReachabilityDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.ReachabilityDetails;

                    /**
                     * Decodes a ReachabilityDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReachabilityDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.ReachabilityDetails;

                    /**
                     * Verifies a ReachabilityDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReachabilityDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReachabilityDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.ReachabilityDetails;

                    /**
                     * Creates a plain object from a ReachabilityDetails message. Also converts values to other types if specified.
                     * @param message ReachabilityDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.ReachabilityDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReachabilityDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ReachabilityDetails {

                    /** Result enum. */
                    enum Result {
                        RESULT_UNSPECIFIED = 0,
                        REACHABLE = 1,
                        UNREACHABLE = 2,
                        AMBIGUOUS = 4,
                        UNDETERMINED = 5
                    }
                }

                /** Properties of a LatencyPercentile. */
                interface ILatencyPercentile {

                    /** LatencyPercentile percent */
                    percent?: (number|null);

                    /** LatencyPercentile latencyMicros */
                    latencyMicros?: (number|Long|string|null);
                }

                /** Represents a LatencyPercentile. */
                class LatencyPercentile implements ILatencyPercentile {

                    /**
                     * Constructs a new LatencyPercentile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.ILatencyPercentile);

                    /** LatencyPercentile percent. */
                    public percent: number;

                    /** LatencyPercentile latencyMicros. */
                    public latencyMicros: (number|Long|string);

                    /**
                     * Creates a new LatencyPercentile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LatencyPercentile instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.ILatencyPercentile): google.cloud.networkmanagement.v1beta1.LatencyPercentile;

                    /**
                     * Encodes the specified LatencyPercentile message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.LatencyPercentile.verify|verify} messages.
                     * @param message LatencyPercentile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.ILatencyPercentile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LatencyPercentile message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.LatencyPercentile.verify|verify} messages.
                     * @param message LatencyPercentile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.ILatencyPercentile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LatencyPercentile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LatencyPercentile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.LatencyPercentile;

                    /**
                     * Decodes a LatencyPercentile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LatencyPercentile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.LatencyPercentile;

                    /**
                     * Verifies a LatencyPercentile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LatencyPercentile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LatencyPercentile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.LatencyPercentile;

                    /**
                     * Creates a plain object from a LatencyPercentile message. Also converts values to other types if specified.
                     * @param message LatencyPercentile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.LatencyPercentile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LatencyPercentile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LatencyDistribution. */
                interface ILatencyDistribution {

                    /** LatencyDistribution latencyPercentiles */
                    latencyPercentiles?: (google.cloud.networkmanagement.v1beta1.ILatencyPercentile[]|null);
                }

                /** Represents a LatencyDistribution. */
                class LatencyDistribution implements ILatencyDistribution {

                    /**
                     * Constructs a new LatencyDistribution.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.ILatencyDistribution);

                    /** LatencyDistribution latencyPercentiles. */
                    public latencyPercentiles: google.cloud.networkmanagement.v1beta1.ILatencyPercentile[];

                    /**
                     * Creates a new LatencyDistribution instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LatencyDistribution instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.ILatencyDistribution): google.cloud.networkmanagement.v1beta1.LatencyDistribution;

                    /**
                     * Encodes the specified LatencyDistribution message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.LatencyDistribution.verify|verify} messages.
                     * @param message LatencyDistribution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.ILatencyDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LatencyDistribution message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.LatencyDistribution.verify|verify} messages.
                     * @param message LatencyDistribution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.ILatencyDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LatencyDistribution message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LatencyDistribution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.LatencyDistribution;

                    /**
                     * Decodes a LatencyDistribution message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LatencyDistribution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.LatencyDistribution;

                    /**
                     * Verifies a LatencyDistribution message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LatencyDistribution message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LatencyDistribution
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.LatencyDistribution;

                    /**
                     * Creates a plain object from a LatencyDistribution message. Also converts values to other types if specified.
                     * @param message LatencyDistribution
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.LatencyDistribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LatencyDistribution to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ProbingDetails. */
                interface IProbingDetails {

                    /** ProbingDetails result */
                    result?: (google.cloud.networkmanagement.v1beta1.ProbingDetails.ProbingResult|keyof typeof google.cloud.networkmanagement.v1beta1.ProbingDetails.ProbingResult|null);

                    /** ProbingDetails verifyTime */
                    verifyTime?: (google.protobuf.ITimestamp|null);

                    /** ProbingDetails error */
                    error?: (google.rpc.IStatus|null);

                    /** ProbingDetails abortCause */
                    abortCause?: (google.cloud.networkmanagement.v1beta1.ProbingDetails.ProbingAbortCause|keyof typeof google.cloud.networkmanagement.v1beta1.ProbingDetails.ProbingAbortCause|null);

                    /** ProbingDetails sentProbeCount */
                    sentProbeCount?: (number|null);

                    /** ProbingDetails successfulProbeCount */
                    successfulProbeCount?: (number|null);

                    /** ProbingDetails endpointInfo */
                    endpointInfo?: (google.cloud.networkmanagement.v1beta1.IEndpointInfo|null);

                    /** ProbingDetails probingLatency */
                    probingLatency?: (google.cloud.networkmanagement.v1beta1.ILatencyDistribution|null);
                }

                /** Represents a ProbingDetails. */
                class ProbingDetails implements IProbingDetails {

                    /**
                     * Constructs a new ProbingDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IProbingDetails);

                    /** ProbingDetails result. */
                    public result: (google.cloud.networkmanagement.v1beta1.ProbingDetails.ProbingResult|keyof typeof google.cloud.networkmanagement.v1beta1.ProbingDetails.ProbingResult);

                    /** ProbingDetails verifyTime. */
                    public verifyTime?: (google.protobuf.ITimestamp|null);

                    /** ProbingDetails error. */
                    public error?: (google.rpc.IStatus|null);

                    /** ProbingDetails abortCause. */
                    public abortCause: (google.cloud.networkmanagement.v1beta1.ProbingDetails.ProbingAbortCause|keyof typeof google.cloud.networkmanagement.v1beta1.ProbingDetails.ProbingAbortCause);

                    /** ProbingDetails sentProbeCount. */
                    public sentProbeCount: number;

                    /** ProbingDetails successfulProbeCount. */
                    public successfulProbeCount: number;

                    /** ProbingDetails endpointInfo. */
                    public endpointInfo?: (google.cloud.networkmanagement.v1beta1.IEndpointInfo|null);

                    /** ProbingDetails probingLatency. */
                    public probingLatency?: (google.cloud.networkmanagement.v1beta1.ILatencyDistribution|null);

                    /**
                     * Creates a new ProbingDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProbingDetails instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IProbingDetails): google.cloud.networkmanagement.v1beta1.ProbingDetails;

                    /**
                     * Encodes the specified ProbingDetails message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ProbingDetails.verify|verify} messages.
                     * @param message ProbingDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IProbingDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProbingDetails message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ProbingDetails.verify|verify} messages.
                     * @param message ProbingDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IProbingDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProbingDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProbingDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.ProbingDetails;

                    /**
                     * Decodes a ProbingDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProbingDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.ProbingDetails;

                    /**
                     * Verifies a ProbingDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProbingDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProbingDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.ProbingDetails;

                    /**
                     * Creates a plain object from a ProbingDetails message. Also converts values to other types if specified.
                     * @param message ProbingDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.ProbingDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProbingDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ProbingDetails {

                    /** ProbingResult enum. */
                    enum ProbingResult {
                        PROBING_RESULT_UNSPECIFIED = 0,
                        REACHABLE = 1,
                        UNREACHABLE = 2,
                        REACHABILITY_INCONSISTENT = 3,
                        UNDETERMINED = 4
                    }

                    /** ProbingAbortCause enum. */
                    enum ProbingAbortCause {
                        PROBING_ABORT_CAUSE_UNSPECIFIED = 0,
                        PERMISSION_DENIED = 1,
                        NO_SOURCE_LOCATION = 2
                    }
                }

                /** Properties of a Trace. */
                interface ITrace {

                    /** Trace endpointInfo */
                    endpointInfo?: (google.cloud.networkmanagement.v1beta1.IEndpointInfo|null);

                    /** Trace steps */
                    steps?: (google.cloud.networkmanagement.v1beta1.IStep[]|null);
                }

                /** Represents a Trace. */
                class Trace implements ITrace {

                    /**
                     * Constructs a new Trace.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.ITrace);

                    /** Trace endpointInfo. */
                    public endpointInfo?: (google.cloud.networkmanagement.v1beta1.IEndpointInfo|null);

                    /** Trace steps. */
                    public steps: google.cloud.networkmanagement.v1beta1.IStep[];

                    /**
                     * Creates a new Trace instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Trace instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.ITrace): google.cloud.networkmanagement.v1beta1.Trace;

                    /**
                     * Encodes the specified Trace message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.Trace.verify|verify} messages.
                     * @param message Trace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.ITrace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Trace message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.Trace.verify|verify} messages.
                     * @param message Trace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.ITrace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Trace message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Trace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.Trace;

                    /**
                     * Decodes a Trace message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Trace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.Trace;

                    /**
                     * Verifies a Trace message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Trace message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Trace
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.Trace;

                    /**
                     * Creates a plain object from a Trace message. Also converts values to other types if specified.
                     * @param message Trace
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.Trace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Trace to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Step. */
                interface IStep {

                    /** Step description */
                    description?: (string|null);

                    /** Step state */
                    state?: (google.cloud.networkmanagement.v1beta1.Step.State|keyof typeof google.cloud.networkmanagement.v1beta1.Step.State|null);

                    /** Step causesDrop */
                    causesDrop?: (boolean|null);

                    /** Step projectId */
                    projectId?: (string|null);

                    /** Step instance */
                    instance?: (google.cloud.networkmanagement.v1beta1.IInstanceInfo|null);

                    /** Step firewall */
                    firewall?: (google.cloud.networkmanagement.v1beta1.IFirewallInfo|null);

                    /** Step route */
                    route?: (google.cloud.networkmanagement.v1beta1.IRouteInfo|null);

                    /** Step endpoint */
                    endpoint?: (google.cloud.networkmanagement.v1beta1.IEndpointInfo|null);

                    /** Step forwardingRule */
                    forwardingRule?: (google.cloud.networkmanagement.v1beta1.IForwardingRuleInfo|null);

                    /** Step vpnGateway */
                    vpnGateway?: (google.cloud.networkmanagement.v1beta1.IVpnGatewayInfo|null);

                    /** Step vpnTunnel */
                    vpnTunnel?: (google.cloud.networkmanagement.v1beta1.IVpnTunnelInfo|null);

                    /** Step deliver */
                    deliver?: (google.cloud.networkmanagement.v1beta1.IDeliverInfo|null);

                    /** Step forward */
                    forward?: (google.cloud.networkmanagement.v1beta1.IForwardInfo|null);

                    /** Step abort */
                    abort?: (google.cloud.networkmanagement.v1beta1.IAbortInfo|null);

                    /** Step drop */
                    drop?: (google.cloud.networkmanagement.v1beta1.IDropInfo|null);

                    /** Step loadBalancer */
                    loadBalancer?: (google.cloud.networkmanagement.v1beta1.ILoadBalancerInfo|null);

                    /** Step network */
                    network?: (google.cloud.networkmanagement.v1beta1.INetworkInfo|null);

                    /** Step gkeMaster */
                    gkeMaster?: (google.cloud.networkmanagement.v1beta1.IGKEMasterInfo|null);

                    /** Step cloudSqlInstance */
                    cloudSqlInstance?: (google.cloud.networkmanagement.v1beta1.ICloudSQLInstanceInfo|null);
                }

                /** Represents a Step. */
                class Step implements IStep {

                    /**
                     * Constructs a new Step.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IStep);

                    /** Step description. */
                    public description: string;

                    /** Step state. */
                    public state: (google.cloud.networkmanagement.v1beta1.Step.State|keyof typeof google.cloud.networkmanagement.v1beta1.Step.State);

                    /** Step causesDrop. */
                    public causesDrop: boolean;

                    /** Step projectId. */
                    public projectId: string;

                    /** Step instance. */
                    public instance?: (google.cloud.networkmanagement.v1beta1.IInstanceInfo|null);

                    /** Step firewall. */
                    public firewall?: (google.cloud.networkmanagement.v1beta1.IFirewallInfo|null);

                    /** Step route. */
                    public route?: (google.cloud.networkmanagement.v1beta1.IRouteInfo|null);

                    /** Step endpoint. */
                    public endpoint?: (google.cloud.networkmanagement.v1beta1.IEndpointInfo|null);

                    /** Step forwardingRule. */
                    public forwardingRule?: (google.cloud.networkmanagement.v1beta1.IForwardingRuleInfo|null);

                    /** Step vpnGateway. */
                    public vpnGateway?: (google.cloud.networkmanagement.v1beta1.IVpnGatewayInfo|null);

                    /** Step vpnTunnel. */
                    public vpnTunnel?: (google.cloud.networkmanagement.v1beta1.IVpnTunnelInfo|null);

                    /** Step deliver. */
                    public deliver?: (google.cloud.networkmanagement.v1beta1.IDeliverInfo|null);

                    /** Step forward. */
                    public forward?: (google.cloud.networkmanagement.v1beta1.IForwardInfo|null);

                    /** Step abort. */
                    public abort?: (google.cloud.networkmanagement.v1beta1.IAbortInfo|null);

                    /** Step drop. */
                    public drop?: (google.cloud.networkmanagement.v1beta1.IDropInfo|null);

                    /** Step loadBalancer. */
                    public loadBalancer?: (google.cloud.networkmanagement.v1beta1.ILoadBalancerInfo|null);

                    /** Step network. */
                    public network?: (google.cloud.networkmanagement.v1beta1.INetworkInfo|null);

                    /** Step gkeMaster. */
                    public gkeMaster?: (google.cloud.networkmanagement.v1beta1.IGKEMasterInfo|null);

                    /** Step cloudSqlInstance. */
                    public cloudSqlInstance?: (google.cloud.networkmanagement.v1beta1.ICloudSQLInstanceInfo|null);

                    /** Step stepInfo. */
                    public stepInfo?: ("instance"|"firewall"|"route"|"endpoint"|"forwardingRule"|"vpnGateway"|"vpnTunnel"|"deliver"|"forward"|"abort"|"drop"|"loadBalancer"|"network"|"gkeMaster"|"cloudSqlInstance");

                    /**
                     * Creates a new Step instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Step instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IStep): google.cloud.networkmanagement.v1beta1.Step;

                    /**
                     * Encodes the specified Step message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.Step.verify|verify} messages.
                     * @param message Step message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Step message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.Step.verify|verify} messages.
                     * @param message Step message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Step message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Step
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.Step;

                    /**
                     * Decodes a Step message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Step
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.Step;

                    /**
                     * Verifies a Step message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Step message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Step
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.Step;

                    /**
                     * Creates a plain object from a Step message. Also converts values to other types if specified.
                     * @param message Step
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.Step, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Step to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Step {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        START_FROM_INSTANCE = 1,
                        START_FROM_INTERNET = 2,
                        START_FROM_PRIVATE_NETWORK = 3,
                        START_FROM_GKE_MASTER = 21,
                        START_FROM_CLOUD_SQL_INSTANCE = 22,
                        APPLY_INGRESS_FIREWALL_RULE = 4,
                        APPLY_EGRESS_FIREWALL_RULE = 5,
                        APPLY_ROUTE = 6,
                        APPLY_FORWARDING_RULE = 7,
                        SPOOFING_APPROVED = 8,
                        ARRIVE_AT_INSTANCE = 9,
                        ARRIVE_AT_INTERNAL_LOAD_BALANCER = 10,
                        ARRIVE_AT_EXTERNAL_LOAD_BALANCER = 11,
                        ARRIVE_AT_VPN_GATEWAY = 12,
                        ARRIVE_AT_VPN_TUNNEL = 13,
                        NAT = 14,
                        PROXY_CONNECTION = 15,
                        DELIVER = 16,
                        DROP = 17,
                        FORWARD = 18,
                        ABORT = 19,
                        VIEWER_PERMISSION_MISSING = 20
                    }
                }

                /** Properties of an InstanceInfo. */
                interface IInstanceInfo {

                    /** InstanceInfo displayName */
                    displayName?: (string|null);

                    /** InstanceInfo uri */
                    uri?: (string|null);

                    /** InstanceInfo interface */
                    "interface"?: (string|null);

                    /** InstanceInfo networkUri */
                    networkUri?: (string|null);

                    /** InstanceInfo internalIp */
                    internalIp?: (string|null);

                    /** InstanceInfo externalIp */
                    externalIp?: (string|null);

                    /** InstanceInfo networkTags */
                    networkTags?: (string[]|null);

                    /** InstanceInfo serviceAccount */
                    serviceAccount?: (string|null);
                }

                /** Represents an InstanceInfo. */
                class InstanceInfo implements IInstanceInfo {

                    /**
                     * Constructs a new InstanceInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IInstanceInfo);

                    /** InstanceInfo displayName. */
                    public displayName: string;

                    /** InstanceInfo uri. */
                    public uri: string;

                    /** InstanceInfo interface. */
                    public interface: string;

                    /** InstanceInfo networkUri. */
                    public networkUri: string;

                    /** InstanceInfo internalIp. */
                    public internalIp: string;

                    /** InstanceInfo externalIp. */
                    public externalIp: string;

                    /** InstanceInfo networkTags. */
                    public networkTags: string[];

                    /** InstanceInfo serviceAccount. */
                    public serviceAccount: string;

                    /**
                     * Creates a new InstanceInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstanceInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IInstanceInfo): google.cloud.networkmanagement.v1beta1.InstanceInfo;

                    /**
                     * Encodes the specified InstanceInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.InstanceInfo.verify|verify} messages.
                     * @param message InstanceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IInstanceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstanceInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.InstanceInfo.verify|verify} messages.
                     * @param message InstanceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IInstanceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstanceInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstanceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.InstanceInfo;

                    /**
                     * Decodes an InstanceInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstanceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.InstanceInfo;

                    /**
                     * Verifies an InstanceInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstanceInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstanceInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.InstanceInfo;

                    /**
                     * Creates a plain object from an InstanceInfo message. Also converts values to other types if specified.
                     * @param message InstanceInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.InstanceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstanceInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NetworkInfo. */
                interface INetworkInfo {

                    /** NetworkInfo displayName */
                    displayName?: (string|null);

                    /** NetworkInfo uri */
                    uri?: (string|null);

                    /** NetworkInfo matchedIpRange */
                    matchedIpRange?: (string|null);
                }

                /** Represents a NetworkInfo. */
                class NetworkInfo implements INetworkInfo {

                    /**
                     * Constructs a new NetworkInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.INetworkInfo);

                    /** NetworkInfo displayName. */
                    public displayName: string;

                    /** NetworkInfo uri. */
                    public uri: string;

                    /** NetworkInfo matchedIpRange. */
                    public matchedIpRange: string;

                    /**
                     * Creates a new NetworkInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.INetworkInfo): google.cloud.networkmanagement.v1beta1.NetworkInfo;

                    /**
                     * Encodes the specified NetworkInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.NetworkInfo.verify|verify} messages.
                     * @param message NetworkInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.INetworkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.NetworkInfo.verify|verify} messages.
                     * @param message NetworkInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.INetworkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.NetworkInfo;

                    /**
                     * Decodes a NetworkInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.NetworkInfo;

                    /**
                     * Verifies a NetworkInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.NetworkInfo;

                    /**
                     * Creates a plain object from a NetworkInfo message. Also converts values to other types if specified.
                     * @param message NetworkInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.NetworkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FirewallInfo. */
                interface IFirewallInfo {

                    /** FirewallInfo displayName */
                    displayName?: (string|null);

                    /** FirewallInfo uri */
                    uri?: (string|null);

                    /** FirewallInfo direction */
                    direction?: (string|null);

                    /** FirewallInfo action */
                    action?: (string|null);

                    /** FirewallInfo priority */
                    priority?: (number|null);

                    /** FirewallInfo networkUri */
                    networkUri?: (string|null);

                    /** FirewallInfo targetTags */
                    targetTags?: (string[]|null);

                    /** FirewallInfo targetServiceAccounts */
                    targetServiceAccounts?: (string[]|null);

                    /** FirewallInfo policy */
                    policy?: (string|null);

                    /** FirewallInfo firewallRuleType */
                    firewallRuleType?: (google.cloud.networkmanagement.v1beta1.FirewallInfo.FirewallRuleType|keyof typeof google.cloud.networkmanagement.v1beta1.FirewallInfo.FirewallRuleType|null);
                }

                /** Represents a FirewallInfo. */
                class FirewallInfo implements IFirewallInfo {

                    /**
                     * Constructs a new FirewallInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IFirewallInfo);

                    /** FirewallInfo displayName. */
                    public displayName: string;

                    /** FirewallInfo uri. */
                    public uri: string;

                    /** FirewallInfo direction. */
                    public direction: string;

                    /** FirewallInfo action. */
                    public action: string;

                    /** FirewallInfo priority. */
                    public priority: number;

                    /** FirewallInfo networkUri. */
                    public networkUri: string;

                    /** FirewallInfo targetTags. */
                    public targetTags: string[];

                    /** FirewallInfo targetServiceAccounts. */
                    public targetServiceAccounts: string[];

                    /** FirewallInfo policy. */
                    public policy: string;

                    /** FirewallInfo firewallRuleType. */
                    public firewallRuleType: (google.cloud.networkmanagement.v1beta1.FirewallInfo.FirewallRuleType|keyof typeof google.cloud.networkmanagement.v1beta1.FirewallInfo.FirewallRuleType);

                    /**
                     * Creates a new FirewallInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FirewallInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IFirewallInfo): google.cloud.networkmanagement.v1beta1.FirewallInfo;

                    /**
                     * Encodes the specified FirewallInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.FirewallInfo.verify|verify} messages.
                     * @param message FirewallInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IFirewallInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FirewallInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.FirewallInfo.verify|verify} messages.
                     * @param message FirewallInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IFirewallInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FirewallInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FirewallInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.FirewallInfo;

                    /**
                     * Decodes a FirewallInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FirewallInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.FirewallInfo;

                    /**
                     * Verifies a FirewallInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FirewallInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FirewallInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.FirewallInfo;

                    /**
                     * Creates a plain object from a FirewallInfo message. Also converts values to other types if specified.
                     * @param message FirewallInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.FirewallInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FirewallInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace FirewallInfo {

                    /** FirewallRuleType enum. */
                    enum FirewallRuleType {
                        FIREWALL_RULE_TYPE_UNSPECIFIED = 0,
                        HIERARCHICAL_FIREWALL_POLICY_RULE = 1,
                        VPC_FIREWALL_RULE = 2,
                        IMPLIED_VPC_FIREWALL_RULE = 3
                    }
                }

                /** Properties of a RouteInfo. */
                interface IRouteInfo {

                    /** RouteInfo routeType */
                    routeType?: (google.cloud.networkmanagement.v1beta1.RouteInfo.RouteType|keyof typeof google.cloud.networkmanagement.v1beta1.RouteInfo.RouteType|null);

                    /** RouteInfo nextHopType */
                    nextHopType?: (google.cloud.networkmanagement.v1beta1.RouteInfo.NextHopType|keyof typeof google.cloud.networkmanagement.v1beta1.RouteInfo.NextHopType|null);

                    /** RouteInfo displayName */
                    displayName?: (string|null);

                    /** RouteInfo uri */
                    uri?: (string|null);

                    /** RouteInfo destIpRange */
                    destIpRange?: (string|null);

                    /** RouteInfo nextHop */
                    nextHop?: (string|null);

                    /** RouteInfo networkUri */
                    networkUri?: (string|null);

                    /** RouteInfo priority */
                    priority?: (number|null);

                    /** RouteInfo instanceTags */
                    instanceTags?: (string[]|null);
                }

                /** Represents a RouteInfo. */
                class RouteInfo implements IRouteInfo {

                    /**
                     * Constructs a new RouteInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IRouteInfo);

                    /** RouteInfo routeType. */
                    public routeType: (google.cloud.networkmanagement.v1beta1.RouteInfo.RouteType|keyof typeof google.cloud.networkmanagement.v1beta1.RouteInfo.RouteType);

                    /** RouteInfo nextHopType. */
                    public nextHopType: (google.cloud.networkmanagement.v1beta1.RouteInfo.NextHopType|keyof typeof google.cloud.networkmanagement.v1beta1.RouteInfo.NextHopType);

                    /** RouteInfo displayName. */
                    public displayName: string;

                    /** RouteInfo uri. */
                    public uri: string;

                    /** RouteInfo destIpRange. */
                    public destIpRange: string;

                    /** RouteInfo nextHop. */
                    public nextHop: string;

                    /** RouteInfo networkUri. */
                    public networkUri: string;

                    /** RouteInfo priority. */
                    public priority: number;

                    /** RouteInfo instanceTags. */
                    public instanceTags: string[];

                    /**
                     * Creates a new RouteInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IRouteInfo): google.cloud.networkmanagement.v1beta1.RouteInfo;

                    /**
                     * Encodes the specified RouteInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.RouteInfo.verify|verify} messages.
                     * @param message RouteInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IRouteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.RouteInfo.verify|verify} messages.
                     * @param message RouteInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IRouteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.RouteInfo;

                    /**
                     * Decodes a RouteInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.RouteInfo;

                    /**
                     * Verifies a RouteInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.RouteInfo;

                    /**
                     * Creates a plain object from a RouteInfo message. Also converts values to other types if specified.
                     * @param message RouteInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.RouteInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace RouteInfo {

                    /** RouteType enum. */
                    enum RouteType {
                        ROUTE_TYPE_UNSPECIFIED = 0,
                        SUBNET = 1,
                        STATIC = 2,
                        DYNAMIC = 3,
                        PEERING_SUBNET = 4,
                        PEERING_STATIC = 5,
                        PEERING_DYNAMIC = 6
                    }

                    /** NextHopType enum. */
                    enum NextHopType {
                        NEXT_HOP_TYPE_UNSPECIFIED = 0,
                        NEXT_HOP_IP = 1,
                        NEXT_HOP_INSTANCE = 2,
                        NEXT_HOP_NETWORK = 3,
                        NEXT_HOP_PEERING = 4,
                        NEXT_HOP_INTERCONNECT = 5,
                        NEXT_HOP_VPN_TUNNEL = 6,
                        NEXT_HOP_VPN_GATEWAY = 7,
                        NEXT_HOP_INTERNET_GATEWAY = 8,
                        NEXT_HOP_BLACKHOLE = 9,
                        NEXT_HOP_ILB = 10
                    }
                }

                /** Properties of a ForwardingRuleInfo. */
                interface IForwardingRuleInfo {

                    /** ForwardingRuleInfo displayName */
                    displayName?: (string|null);

                    /** ForwardingRuleInfo uri */
                    uri?: (string|null);

                    /** ForwardingRuleInfo matchedProtocol */
                    matchedProtocol?: (string|null);

                    /** ForwardingRuleInfo matchedPortRange */
                    matchedPortRange?: (string|null);

                    /** ForwardingRuleInfo vip */
                    vip?: (string|null);

                    /** ForwardingRuleInfo target */
                    target?: (string|null);

                    /** ForwardingRuleInfo networkUri */
                    networkUri?: (string|null);
                }

                /** Represents a ForwardingRuleInfo. */
                class ForwardingRuleInfo implements IForwardingRuleInfo {

                    /**
                     * Constructs a new ForwardingRuleInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IForwardingRuleInfo);

                    /** ForwardingRuleInfo displayName. */
                    public displayName: string;

                    /** ForwardingRuleInfo uri. */
                    public uri: string;

                    /** ForwardingRuleInfo matchedProtocol. */
                    public matchedProtocol: string;

                    /** ForwardingRuleInfo matchedPortRange. */
                    public matchedPortRange: string;

                    /** ForwardingRuleInfo vip. */
                    public vip: string;

                    /** ForwardingRuleInfo target. */
                    public target: string;

                    /** ForwardingRuleInfo networkUri. */
                    public networkUri: string;

                    /**
                     * Creates a new ForwardingRuleInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ForwardingRuleInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IForwardingRuleInfo): google.cloud.networkmanagement.v1beta1.ForwardingRuleInfo;

                    /**
                     * Encodes the specified ForwardingRuleInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ForwardingRuleInfo.verify|verify} messages.
                     * @param message ForwardingRuleInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IForwardingRuleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ForwardingRuleInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ForwardingRuleInfo.verify|verify} messages.
                     * @param message ForwardingRuleInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IForwardingRuleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ForwardingRuleInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ForwardingRuleInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.ForwardingRuleInfo;

                    /**
                     * Decodes a ForwardingRuleInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ForwardingRuleInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.ForwardingRuleInfo;

                    /**
                     * Verifies a ForwardingRuleInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ForwardingRuleInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ForwardingRuleInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.ForwardingRuleInfo;

                    /**
                     * Creates a plain object from a ForwardingRuleInfo message. Also converts values to other types if specified.
                     * @param message ForwardingRuleInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.ForwardingRuleInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ForwardingRuleInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LoadBalancerInfo. */
                interface ILoadBalancerInfo {

                    /** LoadBalancerInfo loadBalancerType */
                    loadBalancerType?: (google.cloud.networkmanagement.v1beta1.LoadBalancerInfo.LoadBalancerType|keyof typeof google.cloud.networkmanagement.v1beta1.LoadBalancerInfo.LoadBalancerType|null);

                    /** LoadBalancerInfo healthCheckUri */
                    healthCheckUri?: (string|null);

                    /** LoadBalancerInfo backends */
                    backends?: (google.cloud.networkmanagement.v1beta1.ILoadBalancerBackend[]|null);

                    /** LoadBalancerInfo backendType */
                    backendType?: (google.cloud.networkmanagement.v1beta1.LoadBalancerInfo.BackendType|keyof typeof google.cloud.networkmanagement.v1beta1.LoadBalancerInfo.BackendType|null);

                    /** LoadBalancerInfo backendUri */
                    backendUri?: (string|null);
                }

                /** Represents a LoadBalancerInfo. */
                class LoadBalancerInfo implements ILoadBalancerInfo {

                    /**
                     * Constructs a new LoadBalancerInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.ILoadBalancerInfo);

                    /** LoadBalancerInfo loadBalancerType. */
                    public loadBalancerType: (google.cloud.networkmanagement.v1beta1.LoadBalancerInfo.LoadBalancerType|keyof typeof google.cloud.networkmanagement.v1beta1.LoadBalancerInfo.LoadBalancerType);

                    /** LoadBalancerInfo healthCheckUri. */
                    public healthCheckUri: string;

                    /** LoadBalancerInfo backends. */
                    public backends: google.cloud.networkmanagement.v1beta1.ILoadBalancerBackend[];

                    /** LoadBalancerInfo backendType. */
                    public backendType: (google.cloud.networkmanagement.v1beta1.LoadBalancerInfo.BackendType|keyof typeof google.cloud.networkmanagement.v1beta1.LoadBalancerInfo.BackendType);

                    /** LoadBalancerInfo backendUri. */
                    public backendUri: string;

                    /**
                     * Creates a new LoadBalancerInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoadBalancerInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.ILoadBalancerInfo): google.cloud.networkmanagement.v1beta1.LoadBalancerInfo;

                    /**
                     * Encodes the specified LoadBalancerInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.LoadBalancerInfo.verify|verify} messages.
                     * @param message LoadBalancerInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.ILoadBalancerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoadBalancerInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.LoadBalancerInfo.verify|verify} messages.
                     * @param message LoadBalancerInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.ILoadBalancerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoadBalancerInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoadBalancerInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.LoadBalancerInfo;

                    /**
                     * Decodes a LoadBalancerInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoadBalancerInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.LoadBalancerInfo;

                    /**
                     * Verifies a LoadBalancerInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoadBalancerInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoadBalancerInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.LoadBalancerInfo;

                    /**
                     * Creates a plain object from a LoadBalancerInfo message. Also converts values to other types if specified.
                     * @param message LoadBalancerInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.LoadBalancerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoadBalancerInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LoadBalancerInfo {

                    /** LoadBalancerType enum. */
                    enum LoadBalancerType {
                        LOAD_BALANCER_TYPE_UNSPECIFIED = 0,
                        INTERNAL_TCP_UDP = 1,
                        NETWORK_TCP_UDP = 2,
                        HTTP_PROXY = 3,
                        TCP_PROXY = 4,
                        SSL_PROXY = 5
                    }

                    /** BackendType enum. */
                    enum BackendType {
                        BACKEND_TYPE_UNSPECIFIED = 0,
                        BACKEND_SERVICE = 1,
                        TARGET_POOL = 2
                    }
                }

                /** Properties of a LoadBalancerBackend. */
                interface ILoadBalancerBackend {

                    /** LoadBalancerBackend displayName */
                    displayName?: (string|null);

                    /** LoadBalancerBackend uri */
                    uri?: (string|null);

                    /** LoadBalancerBackend healthCheckFirewallState */
                    healthCheckFirewallState?: (google.cloud.networkmanagement.v1beta1.LoadBalancerBackend.HealthCheckFirewallState|keyof typeof google.cloud.networkmanagement.v1beta1.LoadBalancerBackend.HealthCheckFirewallState|null);

                    /** LoadBalancerBackend healthCheckAllowingFirewallRules */
                    healthCheckAllowingFirewallRules?: (string[]|null);

                    /** LoadBalancerBackend healthCheckBlockingFirewallRules */
                    healthCheckBlockingFirewallRules?: (string[]|null);
                }

                /** Represents a LoadBalancerBackend. */
                class LoadBalancerBackend implements ILoadBalancerBackend {

                    /**
                     * Constructs a new LoadBalancerBackend.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.ILoadBalancerBackend);

                    /** LoadBalancerBackend displayName. */
                    public displayName: string;

                    /** LoadBalancerBackend uri. */
                    public uri: string;

                    /** LoadBalancerBackend healthCheckFirewallState. */
                    public healthCheckFirewallState: (google.cloud.networkmanagement.v1beta1.LoadBalancerBackend.HealthCheckFirewallState|keyof typeof google.cloud.networkmanagement.v1beta1.LoadBalancerBackend.HealthCheckFirewallState);

                    /** LoadBalancerBackend healthCheckAllowingFirewallRules. */
                    public healthCheckAllowingFirewallRules: string[];

                    /** LoadBalancerBackend healthCheckBlockingFirewallRules. */
                    public healthCheckBlockingFirewallRules: string[];

                    /**
                     * Creates a new LoadBalancerBackend instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoadBalancerBackend instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.ILoadBalancerBackend): google.cloud.networkmanagement.v1beta1.LoadBalancerBackend;

                    /**
                     * Encodes the specified LoadBalancerBackend message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.LoadBalancerBackend.verify|verify} messages.
                     * @param message LoadBalancerBackend message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.ILoadBalancerBackend, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoadBalancerBackend message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.LoadBalancerBackend.verify|verify} messages.
                     * @param message LoadBalancerBackend message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.ILoadBalancerBackend, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoadBalancerBackend message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoadBalancerBackend
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.LoadBalancerBackend;

                    /**
                     * Decodes a LoadBalancerBackend message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoadBalancerBackend
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.LoadBalancerBackend;

                    /**
                     * Verifies a LoadBalancerBackend message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoadBalancerBackend message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoadBalancerBackend
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.LoadBalancerBackend;

                    /**
                     * Creates a plain object from a LoadBalancerBackend message. Also converts values to other types if specified.
                     * @param message LoadBalancerBackend
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.LoadBalancerBackend, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoadBalancerBackend to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LoadBalancerBackend {

                    /** HealthCheckFirewallState enum. */
                    enum HealthCheckFirewallState {
                        HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED = 0,
                        CONFIGURED = 1,
                        MISCONFIGURED = 2
                    }
                }

                /** Properties of a VpnGatewayInfo. */
                interface IVpnGatewayInfo {

                    /** VpnGatewayInfo displayName */
                    displayName?: (string|null);

                    /** VpnGatewayInfo uri */
                    uri?: (string|null);

                    /** VpnGatewayInfo networkUri */
                    networkUri?: (string|null);

                    /** VpnGatewayInfo ipAddress */
                    ipAddress?: (string|null);

                    /** VpnGatewayInfo vpnTunnelUri */
                    vpnTunnelUri?: (string|null);

                    /** VpnGatewayInfo region */
                    region?: (string|null);
                }

                /** Represents a VpnGatewayInfo. */
                class VpnGatewayInfo implements IVpnGatewayInfo {

                    /**
                     * Constructs a new VpnGatewayInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IVpnGatewayInfo);

                    /** VpnGatewayInfo displayName. */
                    public displayName: string;

                    /** VpnGatewayInfo uri. */
                    public uri: string;

                    /** VpnGatewayInfo networkUri. */
                    public networkUri: string;

                    /** VpnGatewayInfo ipAddress. */
                    public ipAddress: string;

                    /** VpnGatewayInfo vpnTunnelUri. */
                    public vpnTunnelUri: string;

                    /** VpnGatewayInfo region. */
                    public region: string;

                    /**
                     * Creates a new VpnGatewayInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VpnGatewayInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IVpnGatewayInfo): google.cloud.networkmanagement.v1beta1.VpnGatewayInfo;

                    /**
                     * Encodes the specified VpnGatewayInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.VpnGatewayInfo.verify|verify} messages.
                     * @param message VpnGatewayInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IVpnGatewayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VpnGatewayInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.VpnGatewayInfo.verify|verify} messages.
                     * @param message VpnGatewayInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IVpnGatewayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VpnGatewayInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VpnGatewayInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.VpnGatewayInfo;

                    /**
                     * Decodes a VpnGatewayInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VpnGatewayInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.VpnGatewayInfo;

                    /**
                     * Verifies a VpnGatewayInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VpnGatewayInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VpnGatewayInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.VpnGatewayInfo;

                    /**
                     * Creates a plain object from a VpnGatewayInfo message. Also converts values to other types if specified.
                     * @param message VpnGatewayInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.VpnGatewayInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VpnGatewayInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VpnTunnelInfo. */
                interface IVpnTunnelInfo {

                    /** VpnTunnelInfo displayName */
                    displayName?: (string|null);

                    /** VpnTunnelInfo uri */
                    uri?: (string|null);

                    /** VpnTunnelInfo sourceGateway */
                    sourceGateway?: (string|null);

                    /** VpnTunnelInfo remoteGateway */
                    remoteGateway?: (string|null);

                    /** VpnTunnelInfo remoteGatewayIp */
                    remoteGatewayIp?: (string|null);

                    /** VpnTunnelInfo sourceGatewayIp */
                    sourceGatewayIp?: (string|null);

                    /** VpnTunnelInfo networkUri */
                    networkUri?: (string|null);

                    /** VpnTunnelInfo region */
                    region?: (string|null);

                    /** VpnTunnelInfo routingType */
                    routingType?: (google.cloud.networkmanagement.v1beta1.VpnTunnelInfo.RoutingType|keyof typeof google.cloud.networkmanagement.v1beta1.VpnTunnelInfo.RoutingType|null);
                }

                /** Represents a VpnTunnelInfo. */
                class VpnTunnelInfo implements IVpnTunnelInfo {

                    /**
                     * Constructs a new VpnTunnelInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IVpnTunnelInfo);

                    /** VpnTunnelInfo displayName. */
                    public displayName: string;

                    /** VpnTunnelInfo uri. */
                    public uri: string;

                    /** VpnTunnelInfo sourceGateway. */
                    public sourceGateway: string;

                    /** VpnTunnelInfo remoteGateway. */
                    public remoteGateway: string;

                    /** VpnTunnelInfo remoteGatewayIp. */
                    public remoteGatewayIp: string;

                    /** VpnTunnelInfo sourceGatewayIp. */
                    public sourceGatewayIp: string;

                    /** VpnTunnelInfo networkUri. */
                    public networkUri: string;

                    /** VpnTunnelInfo region. */
                    public region: string;

                    /** VpnTunnelInfo routingType. */
                    public routingType: (google.cloud.networkmanagement.v1beta1.VpnTunnelInfo.RoutingType|keyof typeof google.cloud.networkmanagement.v1beta1.VpnTunnelInfo.RoutingType);

                    /**
                     * Creates a new VpnTunnelInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VpnTunnelInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IVpnTunnelInfo): google.cloud.networkmanagement.v1beta1.VpnTunnelInfo;

                    /**
                     * Encodes the specified VpnTunnelInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.VpnTunnelInfo.verify|verify} messages.
                     * @param message VpnTunnelInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IVpnTunnelInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VpnTunnelInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.VpnTunnelInfo.verify|verify} messages.
                     * @param message VpnTunnelInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IVpnTunnelInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VpnTunnelInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VpnTunnelInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.VpnTunnelInfo;

                    /**
                     * Decodes a VpnTunnelInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VpnTunnelInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.VpnTunnelInfo;

                    /**
                     * Verifies a VpnTunnelInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VpnTunnelInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VpnTunnelInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.VpnTunnelInfo;

                    /**
                     * Creates a plain object from a VpnTunnelInfo message. Also converts values to other types if specified.
                     * @param message VpnTunnelInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.VpnTunnelInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VpnTunnelInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace VpnTunnelInfo {

                    /** RoutingType enum. */
                    enum RoutingType {
                        ROUTING_TYPE_UNSPECIFIED = 0,
                        ROUTE_BASED = 1,
                        POLICY_BASED = 2,
                        DYNAMIC = 3
                    }
                }

                /** Properties of an EndpointInfo. */
                interface IEndpointInfo {

                    /** EndpointInfo sourceIp */
                    sourceIp?: (string|null);

                    /** EndpointInfo destinationIp */
                    destinationIp?: (string|null);

                    /** EndpointInfo protocol */
                    protocol?: (string|null);

                    /** EndpointInfo sourcePort */
                    sourcePort?: (number|null);

                    /** EndpointInfo destinationPort */
                    destinationPort?: (number|null);

                    /** EndpointInfo sourceNetworkUri */
                    sourceNetworkUri?: (string|null);

                    /** EndpointInfo destinationNetworkUri */
                    destinationNetworkUri?: (string|null);
                }

                /** Represents an EndpointInfo. */
                class EndpointInfo implements IEndpointInfo {

                    /**
                     * Constructs a new EndpointInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IEndpointInfo);

                    /** EndpointInfo sourceIp. */
                    public sourceIp: string;

                    /** EndpointInfo destinationIp. */
                    public destinationIp: string;

                    /** EndpointInfo protocol. */
                    public protocol: string;

                    /** EndpointInfo sourcePort. */
                    public sourcePort: number;

                    /** EndpointInfo destinationPort. */
                    public destinationPort: number;

                    /** EndpointInfo sourceNetworkUri. */
                    public sourceNetworkUri: string;

                    /** EndpointInfo destinationNetworkUri. */
                    public destinationNetworkUri: string;

                    /**
                     * Creates a new EndpointInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EndpointInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IEndpointInfo): google.cloud.networkmanagement.v1beta1.EndpointInfo;

                    /**
                     * Encodes the specified EndpointInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.EndpointInfo.verify|verify} messages.
                     * @param message EndpointInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IEndpointInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EndpointInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.EndpointInfo.verify|verify} messages.
                     * @param message EndpointInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IEndpointInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EndpointInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EndpointInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.EndpointInfo;

                    /**
                     * Decodes an EndpointInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EndpointInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.EndpointInfo;

                    /**
                     * Verifies an EndpointInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EndpointInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EndpointInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.EndpointInfo;

                    /**
                     * Creates a plain object from an EndpointInfo message. Also converts values to other types if specified.
                     * @param message EndpointInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.EndpointInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EndpointInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeliverInfo. */
                interface IDeliverInfo {

                    /** DeliverInfo target */
                    target?: (google.cloud.networkmanagement.v1beta1.DeliverInfo.Target|keyof typeof google.cloud.networkmanagement.v1beta1.DeliverInfo.Target|null);

                    /** DeliverInfo resourceUri */
                    resourceUri?: (string|null);
                }

                /** Represents a DeliverInfo. */
                class DeliverInfo implements IDeliverInfo {

                    /**
                     * Constructs a new DeliverInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IDeliverInfo);

                    /** DeliverInfo target. */
                    public target: (google.cloud.networkmanagement.v1beta1.DeliverInfo.Target|keyof typeof google.cloud.networkmanagement.v1beta1.DeliverInfo.Target);

                    /** DeliverInfo resourceUri. */
                    public resourceUri: string;

                    /**
                     * Creates a new DeliverInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeliverInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IDeliverInfo): google.cloud.networkmanagement.v1beta1.DeliverInfo;

                    /**
                     * Encodes the specified DeliverInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.DeliverInfo.verify|verify} messages.
                     * @param message DeliverInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IDeliverInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeliverInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.DeliverInfo.verify|verify} messages.
                     * @param message DeliverInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IDeliverInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeliverInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeliverInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.DeliverInfo;

                    /**
                     * Decodes a DeliverInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeliverInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.DeliverInfo;

                    /**
                     * Verifies a DeliverInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeliverInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeliverInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.DeliverInfo;

                    /**
                     * Creates a plain object from a DeliverInfo message. Also converts values to other types if specified.
                     * @param message DeliverInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.DeliverInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeliverInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DeliverInfo {

                    /** Target enum. */
                    enum Target {
                        TARGET_UNSPECIFIED = 0,
                        INSTANCE = 1,
                        INTERNET = 2,
                        GOOGLE_API = 3,
                        GKE_MASTER = 4,
                        CLOUD_SQL_INSTANCE = 5
                    }
                }

                /** Properties of a ForwardInfo. */
                interface IForwardInfo {

                    /** ForwardInfo target */
                    target?: (google.cloud.networkmanagement.v1beta1.ForwardInfo.Target|keyof typeof google.cloud.networkmanagement.v1beta1.ForwardInfo.Target|null);

                    /** ForwardInfo resourceUri */
                    resourceUri?: (string|null);
                }

                /** Represents a ForwardInfo. */
                class ForwardInfo implements IForwardInfo {

                    /**
                     * Constructs a new ForwardInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IForwardInfo);

                    /** ForwardInfo target. */
                    public target: (google.cloud.networkmanagement.v1beta1.ForwardInfo.Target|keyof typeof google.cloud.networkmanagement.v1beta1.ForwardInfo.Target);

                    /** ForwardInfo resourceUri. */
                    public resourceUri: string;

                    /**
                     * Creates a new ForwardInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ForwardInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IForwardInfo): google.cloud.networkmanagement.v1beta1.ForwardInfo;

                    /**
                     * Encodes the specified ForwardInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ForwardInfo.verify|verify} messages.
                     * @param message ForwardInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IForwardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ForwardInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ForwardInfo.verify|verify} messages.
                     * @param message ForwardInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IForwardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ForwardInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ForwardInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.ForwardInfo;

                    /**
                     * Decodes a ForwardInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ForwardInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.ForwardInfo;

                    /**
                     * Verifies a ForwardInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ForwardInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ForwardInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.ForwardInfo;

                    /**
                     * Creates a plain object from a ForwardInfo message. Also converts values to other types if specified.
                     * @param message ForwardInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.ForwardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ForwardInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ForwardInfo {

                    /** Target enum. */
                    enum Target {
                        TARGET_UNSPECIFIED = 0,
                        PEERING_VPC = 1,
                        VPN_GATEWAY = 2,
                        INTERCONNECT = 3,
                        GKE_MASTER = 4,
                        IMPORTED_CUSTOM_ROUTE_NEXT_HOP = 5,
                        CLOUD_SQL_INSTANCE = 6
                    }
                }

                /** Properties of an AbortInfo. */
                interface IAbortInfo {

                    /** AbortInfo cause */
                    cause?: (google.cloud.networkmanagement.v1beta1.AbortInfo.Cause|keyof typeof google.cloud.networkmanagement.v1beta1.AbortInfo.Cause|null);

                    /** AbortInfo resourceUri */
                    resourceUri?: (string|null);
                }

                /** Represents an AbortInfo. */
                class AbortInfo implements IAbortInfo {

                    /**
                     * Constructs a new AbortInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IAbortInfo);

                    /** AbortInfo cause. */
                    public cause: (google.cloud.networkmanagement.v1beta1.AbortInfo.Cause|keyof typeof google.cloud.networkmanagement.v1beta1.AbortInfo.Cause);

                    /** AbortInfo resourceUri. */
                    public resourceUri: string;

                    /**
                     * Creates a new AbortInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AbortInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IAbortInfo): google.cloud.networkmanagement.v1beta1.AbortInfo;

                    /**
                     * Encodes the specified AbortInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.AbortInfo.verify|verify} messages.
                     * @param message AbortInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IAbortInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AbortInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.AbortInfo.verify|verify} messages.
                     * @param message AbortInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IAbortInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AbortInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AbortInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.AbortInfo;

                    /**
                     * Decodes an AbortInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AbortInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.AbortInfo;

                    /**
                     * Verifies an AbortInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AbortInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AbortInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.AbortInfo;

                    /**
                     * Creates a plain object from an AbortInfo message. Also converts values to other types if specified.
                     * @param message AbortInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.AbortInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AbortInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AbortInfo {

                    /** Cause enum. */
                    enum Cause {
                        CAUSE_UNSPECIFIED = 0,
                        UNKNOWN_NETWORK = 1,
                        UNKNOWN_IP = 2,
                        UNKNOWN_PROJECT = 3,
                        PERMISSION_DENIED = 4,
                        NO_SOURCE_LOCATION = 5,
                        INVALID_ARGUMENT = 6,
                        NO_EXTERNAL_IP = 7,
                        UNINTENDED_DESTINATION = 8,
                        TRACE_TOO_LONG = 9,
                        INTERNAL_ERROR = 10,
                        SOURCE_ENDPOINT_NOT_FOUND = 11,
                        MISMATCHED_SOURCE_NETWORK = 12,
                        DESTINATION_ENDPOINT_NOT_FOUND = 13,
                        MISMATCHED_DESTINATION_NETWORK = 14
                    }
                }

                /** Properties of a DropInfo. */
                interface IDropInfo {

                    /** DropInfo cause */
                    cause?: (google.cloud.networkmanagement.v1beta1.DropInfo.Cause|keyof typeof google.cloud.networkmanagement.v1beta1.DropInfo.Cause|null);

                    /** DropInfo resourceUri */
                    resourceUri?: (string|null);
                }

                /** Represents a DropInfo. */
                class DropInfo implements IDropInfo {

                    /**
                     * Constructs a new DropInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IDropInfo);

                    /** DropInfo cause. */
                    public cause: (google.cloud.networkmanagement.v1beta1.DropInfo.Cause|keyof typeof google.cloud.networkmanagement.v1beta1.DropInfo.Cause);

                    /** DropInfo resourceUri. */
                    public resourceUri: string;

                    /**
                     * Creates a new DropInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DropInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IDropInfo): google.cloud.networkmanagement.v1beta1.DropInfo;

                    /**
                     * Encodes the specified DropInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.DropInfo.verify|verify} messages.
                     * @param message DropInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IDropInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DropInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.DropInfo.verify|verify} messages.
                     * @param message DropInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IDropInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DropInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DropInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.DropInfo;

                    /**
                     * Decodes a DropInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DropInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.DropInfo;

                    /**
                     * Verifies a DropInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DropInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DropInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.DropInfo;

                    /**
                     * Creates a plain object from a DropInfo message. Also converts values to other types if specified.
                     * @param message DropInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.DropInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DropInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DropInfo {

                    /** Cause enum. */
                    enum Cause {
                        CAUSE_UNSPECIFIED = 0,
                        UNKNOWN_EXTERNAL_ADDRESS = 1,
                        FOREIGN_IP_DISALLOWED = 2,
                        FIREWALL_RULE = 3,
                        NO_ROUTE = 4,
                        ROUTE_BLACKHOLE = 5,
                        ROUTE_WRONG_NETWORK = 6,
                        PRIVATE_TRAFFIC_TO_INTERNET = 7,
                        PRIVATE_GOOGLE_ACCESS_DISALLOWED = 8,
                        NO_EXTERNAL_ADDRESS = 9,
                        UNKNOWN_INTERNAL_ADDRESS = 10,
                        FORWARDING_RULE_MISMATCH = 11,
                        FORWARDING_RULE_NO_INSTANCES = 12,
                        FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK = 13,
                        INSTANCE_NOT_RUNNING = 14,
                        TRAFFIC_TYPE_BLOCKED = 15,
                        GKE_MASTER_UNAUTHORIZED_ACCESS = 16,
                        CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS = 17,
                        DROPPED_INSIDE_GKE_SERVICE = 18,
                        DROPPED_INSIDE_CLOUD_SQL_SERVICE = 19,
                        GOOGLE_MANAGED_SERVICE_NO_PEERING = 20,
                        CLOUD_SQL_INSTANCE_NO_IP_ADDRESS = 21
                    }
                }

                /** Properties of a GKEMasterInfo. */
                interface IGKEMasterInfo {

                    /** GKEMasterInfo clusterUri */
                    clusterUri?: (string|null);

                    /** GKEMasterInfo clusterNetworkUri */
                    clusterNetworkUri?: (string|null);

                    /** GKEMasterInfo internalIp */
                    internalIp?: (string|null);

                    /** GKEMasterInfo externalIp */
                    externalIp?: (string|null);
                }

                /** Represents a GKEMasterInfo. */
                class GKEMasterInfo implements IGKEMasterInfo {

                    /**
                     * Constructs a new GKEMasterInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IGKEMasterInfo);

                    /** GKEMasterInfo clusterUri. */
                    public clusterUri: string;

                    /** GKEMasterInfo clusterNetworkUri. */
                    public clusterNetworkUri: string;

                    /** GKEMasterInfo internalIp. */
                    public internalIp: string;

                    /** GKEMasterInfo externalIp. */
                    public externalIp: string;

                    /**
                     * Creates a new GKEMasterInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GKEMasterInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IGKEMasterInfo): google.cloud.networkmanagement.v1beta1.GKEMasterInfo;

                    /**
                     * Encodes the specified GKEMasterInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.GKEMasterInfo.verify|verify} messages.
                     * @param message GKEMasterInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IGKEMasterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GKEMasterInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.GKEMasterInfo.verify|verify} messages.
                     * @param message GKEMasterInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IGKEMasterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GKEMasterInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GKEMasterInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.GKEMasterInfo;

                    /**
                     * Decodes a GKEMasterInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GKEMasterInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.GKEMasterInfo;

                    /**
                     * Verifies a GKEMasterInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GKEMasterInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GKEMasterInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.GKEMasterInfo;

                    /**
                     * Creates a plain object from a GKEMasterInfo message. Also converts values to other types if specified.
                     * @param message GKEMasterInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.GKEMasterInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GKEMasterInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CloudSQLInstanceInfo. */
                interface ICloudSQLInstanceInfo {

                    /** CloudSQLInstanceInfo displayName */
                    displayName?: (string|null);

                    /** CloudSQLInstanceInfo uri */
                    uri?: (string|null);

                    /** CloudSQLInstanceInfo networkUri */
                    networkUri?: (string|null);

                    /** CloudSQLInstanceInfo internalIp */
                    internalIp?: (string|null);

                    /** CloudSQLInstanceInfo externalIp */
                    externalIp?: (string|null);

                    /** CloudSQLInstanceInfo region */
                    region?: (string|null);
                }

                /** Represents a CloudSQLInstanceInfo. */
                class CloudSQLInstanceInfo implements ICloudSQLInstanceInfo {

                    /**
                     * Constructs a new CloudSQLInstanceInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.ICloudSQLInstanceInfo);

                    /** CloudSQLInstanceInfo displayName. */
                    public displayName: string;

                    /** CloudSQLInstanceInfo uri. */
                    public uri: string;

                    /** CloudSQLInstanceInfo networkUri. */
                    public networkUri: string;

                    /** CloudSQLInstanceInfo internalIp. */
                    public internalIp: string;

                    /** CloudSQLInstanceInfo externalIp. */
                    public externalIp: string;

                    /** CloudSQLInstanceInfo region. */
                    public region: string;

                    /**
                     * Creates a new CloudSQLInstanceInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudSQLInstanceInfo instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.ICloudSQLInstanceInfo): google.cloud.networkmanagement.v1beta1.CloudSQLInstanceInfo;

                    /**
                     * Encodes the specified CloudSQLInstanceInfo message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.CloudSQLInstanceInfo.verify|verify} messages.
                     * @param message CloudSQLInstanceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.ICloudSQLInstanceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudSQLInstanceInfo message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.CloudSQLInstanceInfo.verify|verify} messages.
                     * @param message CloudSQLInstanceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.ICloudSQLInstanceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudSQLInstanceInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudSQLInstanceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.CloudSQLInstanceInfo;

                    /**
                     * Decodes a CloudSQLInstanceInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudSQLInstanceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.CloudSQLInstanceInfo;

                    /**
                     * Verifies a CloudSQLInstanceInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudSQLInstanceInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudSQLInstanceInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.CloudSQLInstanceInfo;

                    /**
                     * Creates a plain object from a CloudSQLInstanceInfo message. Also converts values to other types if specified.
                     * @param message CloudSQLInstanceInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.CloudSQLInstanceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudSQLInstanceInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a ReachabilityService */
                class ReachabilityService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ReachabilityService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ReachabilityService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ReachabilityService;

                    /**
                     * Calls ListConnectivityTests.
                     * @param request ListConnectivityTestsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConnectivityTestsResponse
                     */
                    public listConnectivityTests(request: google.cloud.networkmanagement.v1beta1.IListConnectivityTestsRequest, callback: google.cloud.networkmanagement.v1beta1.ReachabilityService.ListConnectivityTestsCallback): void;

                    /**
                     * Calls ListConnectivityTests.
                     * @param request ListConnectivityTestsRequest message or plain object
                     * @returns Promise
                     */
                    public listConnectivityTests(request: google.cloud.networkmanagement.v1beta1.IListConnectivityTestsRequest): Promise<google.cloud.networkmanagement.v1beta1.ListConnectivityTestsResponse>;

                    /**
                     * Calls GetConnectivityTest.
                     * @param request GetConnectivityTestRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConnectivityTest
                     */
                    public getConnectivityTest(request: google.cloud.networkmanagement.v1beta1.IGetConnectivityTestRequest, callback: google.cloud.networkmanagement.v1beta1.ReachabilityService.GetConnectivityTestCallback): void;

                    /**
                     * Calls GetConnectivityTest.
                     * @param request GetConnectivityTestRequest message or plain object
                     * @returns Promise
                     */
                    public getConnectivityTest(request: google.cloud.networkmanagement.v1beta1.IGetConnectivityTestRequest): Promise<google.cloud.networkmanagement.v1beta1.ConnectivityTest>;

                    /**
                     * Calls CreateConnectivityTest.
                     * @param request CreateConnectivityTestRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createConnectivityTest(request: google.cloud.networkmanagement.v1beta1.ICreateConnectivityTestRequest, callback: google.cloud.networkmanagement.v1beta1.ReachabilityService.CreateConnectivityTestCallback): void;

                    /**
                     * Calls CreateConnectivityTest.
                     * @param request CreateConnectivityTestRequest message or plain object
                     * @returns Promise
                     */
                    public createConnectivityTest(request: google.cloud.networkmanagement.v1beta1.ICreateConnectivityTestRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateConnectivityTest.
                     * @param request UpdateConnectivityTestRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateConnectivityTest(request: google.cloud.networkmanagement.v1beta1.IUpdateConnectivityTestRequest, callback: google.cloud.networkmanagement.v1beta1.ReachabilityService.UpdateConnectivityTestCallback): void;

                    /**
                     * Calls UpdateConnectivityTest.
                     * @param request UpdateConnectivityTestRequest message or plain object
                     * @returns Promise
                     */
                    public updateConnectivityTest(request: google.cloud.networkmanagement.v1beta1.IUpdateConnectivityTestRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RerunConnectivityTest.
                     * @param request RerunConnectivityTestRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public rerunConnectivityTest(request: google.cloud.networkmanagement.v1beta1.IRerunConnectivityTestRequest, callback: google.cloud.networkmanagement.v1beta1.ReachabilityService.RerunConnectivityTestCallback): void;

                    /**
                     * Calls RerunConnectivityTest.
                     * @param request RerunConnectivityTestRequest message or plain object
                     * @returns Promise
                     */
                    public rerunConnectivityTest(request: google.cloud.networkmanagement.v1beta1.IRerunConnectivityTestRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteConnectivityTest.
                     * @param request DeleteConnectivityTestRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteConnectivityTest(request: google.cloud.networkmanagement.v1beta1.IDeleteConnectivityTestRequest, callback: google.cloud.networkmanagement.v1beta1.ReachabilityService.DeleteConnectivityTestCallback): void;

                    /**
                     * Calls DeleteConnectivityTest.
                     * @param request DeleteConnectivityTestRequest message or plain object
                     * @returns Promise
                     */
                    public deleteConnectivityTest(request: google.cloud.networkmanagement.v1beta1.IDeleteConnectivityTestRequest): Promise<google.longrunning.Operation>;
                }

                namespace ReachabilityService {

                    /**
                     * Callback as used by {@link google.cloud.networkmanagement.v1beta1.ReachabilityService#listConnectivityTests}.
                     * @param error Error, if any
                     * @param [response] ListConnectivityTestsResponse
                     */
                    type ListConnectivityTestsCallback = (error: (Error|null), response?: google.cloud.networkmanagement.v1beta1.ListConnectivityTestsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkmanagement.v1beta1.ReachabilityService#getConnectivityTest}.
                     * @param error Error, if any
                     * @param [response] ConnectivityTest
                     */
                    type GetConnectivityTestCallback = (error: (Error|null), response?: google.cloud.networkmanagement.v1beta1.ConnectivityTest) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkmanagement.v1beta1.ReachabilityService#createConnectivityTest}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateConnectivityTestCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkmanagement.v1beta1.ReachabilityService#updateConnectivityTest}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateConnectivityTestCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkmanagement.v1beta1.ReachabilityService#rerunConnectivityTest}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RerunConnectivityTestCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkmanagement.v1beta1.ReachabilityService#deleteConnectivityTest}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteConnectivityTestCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ListConnectivityTestsRequest. */
                interface IListConnectivityTestsRequest {

                    /** ListConnectivityTestsRequest parent */
                    parent?: (string|null);

                    /** ListConnectivityTestsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConnectivityTestsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListConnectivityTestsRequest filter */
                    filter?: (string|null);

                    /** ListConnectivityTestsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListConnectivityTestsRequest. */
                class ListConnectivityTestsRequest implements IListConnectivityTestsRequest {

                    /**
                     * Constructs a new ListConnectivityTestsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IListConnectivityTestsRequest);

                    /** ListConnectivityTestsRequest parent. */
                    public parent: string;

                    /** ListConnectivityTestsRequest pageSize. */
                    public pageSize: number;

                    /** ListConnectivityTestsRequest pageToken. */
                    public pageToken: string;

                    /** ListConnectivityTestsRequest filter. */
                    public filter: string;

                    /** ListConnectivityTestsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListConnectivityTestsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectivityTestsRequest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IListConnectivityTestsRequest): google.cloud.networkmanagement.v1beta1.ListConnectivityTestsRequest;

                    /**
                     * Encodes the specified ListConnectivityTestsRequest message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ListConnectivityTestsRequest.verify|verify} messages.
                     * @param message ListConnectivityTestsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IListConnectivityTestsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectivityTestsRequest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ListConnectivityTestsRequest.verify|verify} messages.
                     * @param message ListConnectivityTestsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IListConnectivityTestsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectivityTestsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectivityTestsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.ListConnectivityTestsRequest;

                    /**
                     * Decodes a ListConnectivityTestsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectivityTestsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.ListConnectivityTestsRequest;

                    /**
                     * Verifies a ListConnectivityTestsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectivityTestsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectivityTestsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.ListConnectivityTestsRequest;

                    /**
                     * Creates a plain object from a ListConnectivityTestsRequest message. Also converts values to other types if specified.
                     * @param message ListConnectivityTestsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.ListConnectivityTestsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectivityTestsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListConnectivityTestsResponse. */
                interface IListConnectivityTestsResponse {

                    /** ListConnectivityTestsResponse resources */
                    resources?: (google.cloud.networkmanagement.v1beta1.IConnectivityTest[]|null);

                    /** ListConnectivityTestsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListConnectivityTestsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListConnectivityTestsResponse. */
                class ListConnectivityTestsResponse implements IListConnectivityTestsResponse {

                    /**
                     * Constructs a new ListConnectivityTestsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IListConnectivityTestsResponse);

                    /** ListConnectivityTestsResponse resources. */
                    public resources: google.cloud.networkmanagement.v1beta1.IConnectivityTest[];

                    /** ListConnectivityTestsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListConnectivityTestsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListConnectivityTestsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectivityTestsResponse instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IListConnectivityTestsResponse): google.cloud.networkmanagement.v1beta1.ListConnectivityTestsResponse;

                    /**
                     * Encodes the specified ListConnectivityTestsResponse message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ListConnectivityTestsResponse.verify|verify} messages.
                     * @param message ListConnectivityTestsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IListConnectivityTestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectivityTestsResponse message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.ListConnectivityTestsResponse.verify|verify} messages.
                     * @param message ListConnectivityTestsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IListConnectivityTestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectivityTestsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectivityTestsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.ListConnectivityTestsResponse;

                    /**
                     * Decodes a ListConnectivityTestsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectivityTestsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.ListConnectivityTestsResponse;

                    /**
                     * Verifies a ListConnectivityTestsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectivityTestsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectivityTestsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.ListConnectivityTestsResponse;

                    /**
                     * Creates a plain object from a ListConnectivityTestsResponse message. Also converts values to other types if specified.
                     * @param message ListConnectivityTestsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.ListConnectivityTestsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectivityTestsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetConnectivityTestRequest. */
                interface IGetConnectivityTestRequest {

                    /** GetConnectivityTestRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConnectivityTestRequest. */
                class GetConnectivityTestRequest implements IGetConnectivityTestRequest {

                    /**
                     * Constructs a new GetConnectivityTestRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IGetConnectivityTestRequest);

                    /** GetConnectivityTestRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConnectivityTestRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConnectivityTestRequest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IGetConnectivityTestRequest): google.cloud.networkmanagement.v1beta1.GetConnectivityTestRequest;

                    /**
                     * Encodes the specified GetConnectivityTestRequest message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.GetConnectivityTestRequest.verify|verify} messages.
                     * @param message GetConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IGetConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConnectivityTestRequest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.GetConnectivityTestRequest.verify|verify} messages.
                     * @param message GetConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IGetConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConnectivityTestRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.GetConnectivityTestRequest;

                    /**
                     * Decodes a GetConnectivityTestRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.GetConnectivityTestRequest;

                    /**
                     * Verifies a GetConnectivityTestRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConnectivityTestRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConnectivityTestRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.GetConnectivityTestRequest;

                    /**
                     * Creates a plain object from a GetConnectivityTestRequest message. Also converts values to other types if specified.
                     * @param message GetConnectivityTestRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.GetConnectivityTestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConnectivityTestRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateConnectivityTestRequest. */
                interface ICreateConnectivityTestRequest {

                    /** CreateConnectivityTestRequest parent */
                    parent?: (string|null);

                    /** CreateConnectivityTestRequest testId */
                    testId?: (string|null);

                    /** CreateConnectivityTestRequest resource */
                    resource?: (google.cloud.networkmanagement.v1beta1.IConnectivityTest|null);
                }

                /** Represents a CreateConnectivityTestRequest. */
                class CreateConnectivityTestRequest implements ICreateConnectivityTestRequest {

                    /**
                     * Constructs a new CreateConnectivityTestRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.ICreateConnectivityTestRequest);

                    /** CreateConnectivityTestRequest parent. */
                    public parent: string;

                    /** CreateConnectivityTestRequest testId. */
                    public testId: string;

                    /** CreateConnectivityTestRequest resource. */
                    public resource?: (google.cloud.networkmanagement.v1beta1.IConnectivityTest|null);

                    /**
                     * Creates a new CreateConnectivityTestRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateConnectivityTestRequest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.ICreateConnectivityTestRequest): google.cloud.networkmanagement.v1beta1.CreateConnectivityTestRequest;

                    /**
                     * Encodes the specified CreateConnectivityTestRequest message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.CreateConnectivityTestRequest.verify|verify} messages.
                     * @param message CreateConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.ICreateConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateConnectivityTestRequest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.CreateConnectivityTestRequest.verify|verify} messages.
                     * @param message CreateConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.ICreateConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateConnectivityTestRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.CreateConnectivityTestRequest;

                    /**
                     * Decodes a CreateConnectivityTestRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.CreateConnectivityTestRequest;

                    /**
                     * Verifies a CreateConnectivityTestRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateConnectivityTestRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateConnectivityTestRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.CreateConnectivityTestRequest;

                    /**
                     * Creates a plain object from a CreateConnectivityTestRequest message. Also converts values to other types if specified.
                     * @param message CreateConnectivityTestRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.CreateConnectivityTestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateConnectivityTestRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateConnectivityTestRequest. */
                interface IUpdateConnectivityTestRequest {

                    /** UpdateConnectivityTestRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConnectivityTestRequest resource */
                    resource?: (google.cloud.networkmanagement.v1beta1.IConnectivityTest|null);
                }

                /** Represents an UpdateConnectivityTestRequest. */
                class UpdateConnectivityTestRequest implements IUpdateConnectivityTestRequest {

                    /**
                     * Constructs a new UpdateConnectivityTestRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IUpdateConnectivityTestRequest);

                    /** UpdateConnectivityTestRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConnectivityTestRequest resource. */
                    public resource?: (google.cloud.networkmanagement.v1beta1.IConnectivityTest|null);

                    /**
                     * Creates a new UpdateConnectivityTestRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateConnectivityTestRequest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IUpdateConnectivityTestRequest): google.cloud.networkmanagement.v1beta1.UpdateConnectivityTestRequest;

                    /**
                     * Encodes the specified UpdateConnectivityTestRequest message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.UpdateConnectivityTestRequest.verify|verify} messages.
                     * @param message UpdateConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IUpdateConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateConnectivityTestRequest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.UpdateConnectivityTestRequest.verify|verify} messages.
                     * @param message UpdateConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IUpdateConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateConnectivityTestRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.UpdateConnectivityTestRequest;

                    /**
                     * Decodes an UpdateConnectivityTestRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.UpdateConnectivityTestRequest;

                    /**
                     * Verifies an UpdateConnectivityTestRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateConnectivityTestRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateConnectivityTestRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.UpdateConnectivityTestRequest;

                    /**
                     * Creates a plain object from an UpdateConnectivityTestRequest message. Also converts values to other types if specified.
                     * @param message UpdateConnectivityTestRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.UpdateConnectivityTestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateConnectivityTestRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteConnectivityTestRequest. */
                interface IDeleteConnectivityTestRequest {

                    /** DeleteConnectivityTestRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteConnectivityTestRequest. */
                class DeleteConnectivityTestRequest implements IDeleteConnectivityTestRequest {

                    /**
                     * Constructs a new DeleteConnectivityTestRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IDeleteConnectivityTestRequest);

                    /** DeleteConnectivityTestRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteConnectivityTestRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteConnectivityTestRequest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IDeleteConnectivityTestRequest): google.cloud.networkmanagement.v1beta1.DeleteConnectivityTestRequest;

                    /**
                     * Encodes the specified DeleteConnectivityTestRequest message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.DeleteConnectivityTestRequest.verify|verify} messages.
                     * @param message DeleteConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IDeleteConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteConnectivityTestRequest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.DeleteConnectivityTestRequest.verify|verify} messages.
                     * @param message DeleteConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IDeleteConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteConnectivityTestRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.DeleteConnectivityTestRequest;

                    /**
                     * Decodes a DeleteConnectivityTestRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.DeleteConnectivityTestRequest;

                    /**
                     * Verifies a DeleteConnectivityTestRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteConnectivityTestRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteConnectivityTestRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.DeleteConnectivityTestRequest;

                    /**
                     * Creates a plain object from a DeleteConnectivityTestRequest message. Also converts values to other types if specified.
                     * @param message DeleteConnectivityTestRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.DeleteConnectivityTestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteConnectivityTestRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RerunConnectivityTestRequest. */
                interface IRerunConnectivityTestRequest {

                    /** RerunConnectivityTestRequest name */
                    name?: (string|null);
                }

                /** Represents a RerunConnectivityTestRequest. */
                class RerunConnectivityTestRequest implements IRerunConnectivityTestRequest {

                    /**
                     * Constructs a new RerunConnectivityTestRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IRerunConnectivityTestRequest);

                    /** RerunConnectivityTestRequest name. */
                    public name: string;

                    /**
                     * Creates a new RerunConnectivityTestRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RerunConnectivityTestRequest instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IRerunConnectivityTestRequest): google.cloud.networkmanagement.v1beta1.RerunConnectivityTestRequest;

                    /**
                     * Encodes the specified RerunConnectivityTestRequest message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.RerunConnectivityTestRequest.verify|verify} messages.
                     * @param message RerunConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IRerunConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RerunConnectivityTestRequest message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.RerunConnectivityTestRequest.verify|verify} messages.
                     * @param message RerunConnectivityTestRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IRerunConnectivityTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RerunConnectivityTestRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RerunConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.RerunConnectivityTestRequest;

                    /**
                     * Decodes a RerunConnectivityTestRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RerunConnectivityTestRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.RerunConnectivityTestRequest;

                    /**
                     * Verifies a RerunConnectivityTestRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RerunConnectivityTestRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RerunConnectivityTestRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.RerunConnectivityTestRequest;

                    /**
                     * Creates a plain object from a RerunConnectivityTestRequest message. Also converts values to other types if specified.
                     * @param message RerunConnectivityTestRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.RerunConnectivityTestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RerunConnectivityTestRequest to JSON.
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

                    /** OperationMetadata statusDetail */
                    statusDetail?: (string|null);

                    /** OperationMetadata cancelRequested */
                    cancelRequested?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkmanagement.v1beta1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusDetail. */
                    public statusDetail: string;

                    /** OperationMetadata cancelRequested. */
                    public cancelRequested: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.networkmanagement.v1beta1.IOperationMetadata): google.cloud.networkmanagement.v1beta1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkmanagement.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.networkmanagement.v1beta1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkmanagement.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkmanagement.v1beta1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkmanagement.v1beta1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkmanagement.v1beta1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkmanagement.v1beta1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
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
}
