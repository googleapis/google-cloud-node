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

import Long = require("long");
import {protobuf as $protobuf} from "google-gax";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace gkemulticloud. */
        namespace gkemulticloud {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an AwsCluster. */
                interface IAwsCluster {

                    /** AwsCluster name */
                    name?: (string|null);

                    /** AwsCluster description */
                    description?: (string|null);

                    /** AwsCluster networking */
                    networking?: (google.cloud.gkemulticloud.v1.IAwsClusterNetworking|null);

                    /** AwsCluster awsRegion */
                    awsRegion?: (string|null);

                    /** AwsCluster controlPlane */
                    controlPlane?: (google.cloud.gkemulticloud.v1.IAwsControlPlane|null);

                    /** AwsCluster authorization */
                    authorization?: (google.cloud.gkemulticloud.v1.IAwsAuthorization|null);

                    /** AwsCluster state */
                    state?: (google.cloud.gkemulticloud.v1.AwsCluster.State|keyof typeof google.cloud.gkemulticloud.v1.AwsCluster.State|null);

                    /** AwsCluster endpoint */
                    endpoint?: (string|null);

                    /** AwsCluster uid */
                    uid?: (string|null);

                    /** AwsCluster reconciling */
                    reconciling?: (boolean|null);

                    /** AwsCluster createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** AwsCluster updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** AwsCluster etag */
                    etag?: (string|null);

                    /** AwsCluster annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** AwsCluster workloadIdentityConfig */
                    workloadIdentityConfig?: (google.cloud.gkemulticloud.v1.IWorkloadIdentityConfig|null);

                    /** AwsCluster clusterCaCertificate */
                    clusterCaCertificate?: (string|null);

                    /** AwsCluster fleet */
                    fleet?: (google.cloud.gkemulticloud.v1.IFleet|null);

                    /** AwsCluster loggingConfig */
                    loggingConfig?: (google.cloud.gkemulticloud.v1.ILoggingConfig|null);
                }

                /** Represents an AwsCluster. */
                class AwsCluster implements IAwsCluster {

                    /**
                     * Constructs a new AwsCluster.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsCluster);

                    /** AwsCluster name. */
                    public name: string;

                    /** AwsCluster description. */
                    public description: string;

                    /** AwsCluster networking. */
                    public networking?: (google.cloud.gkemulticloud.v1.IAwsClusterNetworking|null);

                    /** AwsCluster awsRegion. */
                    public awsRegion: string;

                    /** AwsCluster controlPlane. */
                    public controlPlane?: (google.cloud.gkemulticloud.v1.IAwsControlPlane|null);

                    /** AwsCluster authorization. */
                    public authorization?: (google.cloud.gkemulticloud.v1.IAwsAuthorization|null);

                    /** AwsCluster state. */
                    public state: (google.cloud.gkemulticloud.v1.AwsCluster.State|keyof typeof google.cloud.gkemulticloud.v1.AwsCluster.State);

                    /** AwsCluster endpoint. */
                    public endpoint: string;

                    /** AwsCluster uid. */
                    public uid: string;

                    /** AwsCluster reconciling. */
                    public reconciling: boolean;

                    /** AwsCluster createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** AwsCluster updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** AwsCluster etag. */
                    public etag: string;

                    /** AwsCluster annotations. */
                    public annotations: { [k: string]: string };

                    /** AwsCluster workloadIdentityConfig. */
                    public workloadIdentityConfig?: (google.cloud.gkemulticloud.v1.IWorkloadIdentityConfig|null);

                    /** AwsCluster clusterCaCertificate. */
                    public clusterCaCertificate: string;

                    /** AwsCluster fleet. */
                    public fleet?: (google.cloud.gkemulticloud.v1.IFleet|null);

                    /** AwsCluster loggingConfig. */
                    public loggingConfig?: (google.cloud.gkemulticloud.v1.ILoggingConfig|null);

                    /**
                     * Creates a new AwsCluster instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsCluster instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsCluster): google.cloud.gkemulticloud.v1.AwsCluster;

                    /**
                     * Encodes the specified AwsCluster message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsCluster.verify|verify} messages.
                     * @param message AwsCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsCluster message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsCluster.verify|verify} messages.
                     * @param message AwsCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsCluster message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsCluster;

                    /**
                     * Decodes an AwsCluster message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsCluster;

                    /**
                     * Verifies an AwsCluster message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsCluster message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsCluster
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsCluster;

                    /**
                     * Creates a plain object from an AwsCluster message. Also converts values to other types if specified.
                     * @param message AwsCluster
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsCluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsCluster to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsCluster
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AwsCluster {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PROVISIONING = 1,
                        RUNNING = 2,
                        RECONCILING = 3,
                        STOPPING = 4,
                        ERROR = 5,
                        DEGRADED = 6
                    }
                }

                /** Properties of an AwsControlPlane. */
                interface IAwsControlPlane {

                    /** AwsControlPlane version */
                    version?: (string|null);

                    /** AwsControlPlane instanceType */
                    instanceType?: (string|null);

                    /** AwsControlPlane sshConfig */
                    sshConfig?: (google.cloud.gkemulticloud.v1.IAwsSshConfig|null);

                    /** AwsControlPlane subnetIds */
                    subnetIds?: (string[]|null);

                    /** AwsControlPlane securityGroupIds */
                    securityGroupIds?: (string[]|null);

                    /** AwsControlPlane iamInstanceProfile */
                    iamInstanceProfile?: (string|null);

                    /** AwsControlPlane rootVolume */
                    rootVolume?: (google.cloud.gkemulticloud.v1.IAwsVolumeTemplate|null);

                    /** AwsControlPlane mainVolume */
                    mainVolume?: (google.cloud.gkemulticloud.v1.IAwsVolumeTemplate|null);

                    /** AwsControlPlane databaseEncryption */
                    databaseEncryption?: (google.cloud.gkemulticloud.v1.IAwsDatabaseEncryption|null);

                    /** AwsControlPlane tags */
                    tags?: ({ [k: string]: string }|null);

                    /** AwsControlPlane awsServicesAuthentication */
                    awsServicesAuthentication?: (google.cloud.gkemulticloud.v1.IAwsServicesAuthentication|null);

                    /** AwsControlPlane proxyConfig */
                    proxyConfig?: (google.cloud.gkemulticloud.v1.IAwsProxyConfig|null);

                    /** AwsControlPlane configEncryption */
                    configEncryption?: (google.cloud.gkemulticloud.v1.IAwsConfigEncryption|null);

                    /** AwsControlPlane instancePlacement */
                    instancePlacement?: (google.cloud.gkemulticloud.v1.IAwsInstancePlacement|null);
                }

                /** Represents an AwsControlPlane. */
                class AwsControlPlane implements IAwsControlPlane {

                    /**
                     * Constructs a new AwsControlPlane.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsControlPlane);

                    /** AwsControlPlane version. */
                    public version: string;

                    /** AwsControlPlane instanceType. */
                    public instanceType: string;

                    /** AwsControlPlane sshConfig. */
                    public sshConfig?: (google.cloud.gkemulticloud.v1.IAwsSshConfig|null);

                    /** AwsControlPlane subnetIds. */
                    public subnetIds: string[];

                    /** AwsControlPlane securityGroupIds. */
                    public securityGroupIds: string[];

                    /** AwsControlPlane iamInstanceProfile. */
                    public iamInstanceProfile: string;

                    /** AwsControlPlane rootVolume. */
                    public rootVolume?: (google.cloud.gkemulticloud.v1.IAwsVolumeTemplate|null);

                    /** AwsControlPlane mainVolume. */
                    public mainVolume?: (google.cloud.gkemulticloud.v1.IAwsVolumeTemplate|null);

                    /** AwsControlPlane databaseEncryption. */
                    public databaseEncryption?: (google.cloud.gkemulticloud.v1.IAwsDatabaseEncryption|null);

                    /** AwsControlPlane tags. */
                    public tags: { [k: string]: string };

                    /** AwsControlPlane awsServicesAuthentication. */
                    public awsServicesAuthentication?: (google.cloud.gkemulticloud.v1.IAwsServicesAuthentication|null);

                    /** AwsControlPlane proxyConfig. */
                    public proxyConfig?: (google.cloud.gkemulticloud.v1.IAwsProxyConfig|null);

                    /** AwsControlPlane configEncryption. */
                    public configEncryption?: (google.cloud.gkemulticloud.v1.IAwsConfigEncryption|null);

                    /** AwsControlPlane instancePlacement. */
                    public instancePlacement?: (google.cloud.gkemulticloud.v1.IAwsInstancePlacement|null);

                    /**
                     * Creates a new AwsControlPlane instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsControlPlane instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsControlPlane): google.cloud.gkemulticloud.v1.AwsControlPlane;

                    /**
                     * Encodes the specified AwsControlPlane message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsControlPlane.verify|verify} messages.
                     * @param message AwsControlPlane message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsControlPlane, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsControlPlane message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsControlPlane.verify|verify} messages.
                     * @param message AwsControlPlane message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsControlPlane, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsControlPlane message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsControlPlane
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsControlPlane;

                    /**
                     * Decodes an AwsControlPlane message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsControlPlane
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsControlPlane;

                    /**
                     * Verifies an AwsControlPlane message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsControlPlane message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsControlPlane
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsControlPlane;

                    /**
                     * Creates a plain object from an AwsControlPlane message. Also converts values to other types if specified.
                     * @param message AwsControlPlane
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsControlPlane, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsControlPlane to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsControlPlane
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AwsServicesAuthentication. */
                interface IAwsServicesAuthentication {

                    /** AwsServicesAuthentication roleArn */
                    roleArn?: (string|null);

                    /** AwsServicesAuthentication roleSessionName */
                    roleSessionName?: (string|null);
                }

                /** Represents an AwsServicesAuthentication. */
                class AwsServicesAuthentication implements IAwsServicesAuthentication {

                    /**
                     * Constructs a new AwsServicesAuthentication.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsServicesAuthentication);

                    /** AwsServicesAuthentication roleArn. */
                    public roleArn: string;

                    /** AwsServicesAuthentication roleSessionName. */
                    public roleSessionName: string;

                    /**
                     * Creates a new AwsServicesAuthentication instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsServicesAuthentication instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsServicesAuthentication): google.cloud.gkemulticloud.v1.AwsServicesAuthentication;

                    /**
                     * Encodes the specified AwsServicesAuthentication message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsServicesAuthentication.verify|verify} messages.
                     * @param message AwsServicesAuthentication message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsServicesAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsServicesAuthentication message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsServicesAuthentication.verify|verify} messages.
                     * @param message AwsServicesAuthentication message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsServicesAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsServicesAuthentication message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsServicesAuthentication
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsServicesAuthentication;

                    /**
                     * Decodes an AwsServicesAuthentication message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsServicesAuthentication
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsServicesAuthentication;

                    /**
                     * Verifies an AwsServicesAuthentication message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsServicesAuthentication message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsServicesAuthentication
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsServicesAuthentication;

                    /**
                     * Creates a plain object from an AwsServicesAuthentication message. Also converts values to other types if specified.
                     * @param message AwsServicesAuthentication
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsServicesAuthentication, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsServicesAuthentication to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsServicesAuthentication
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AwsAuthorization. */
                interface IAwsAuthorization {

                    /** AwsAuthorization adminUsers */
                    adminUsers?: (google.cloud.gkemulticloud.v1.IAwsClusterUser[]|null);
                }

                /** Represents an AwsAuthorization. */
                class AwsAuthorization implements IAwsAuthorization {

                    /**
                     * Constructs a new AwsAuthorization.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsAuthorization);

                    /** AwsAuthorization adminUsers. */
                    public adminUsers: google.cloud.gkemulticloud.v1.IAwsClusterUser[];

                    /**
                     * Creates a new AwsAuthorization instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsAuthorization instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsAuthorization): google.cloud.gkemulticloud.v1.AwsAuthorization;

                    /**
                     * Encodes the specified AwsAuthorization message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsAuthorization.verify|verify} messages.
                     * @param message AwsAuthorization message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsAuthorization message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsAuthorization.verify|verify} messages.
                     * @param message AwsAuthorization message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsAuthorization message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsAuthorization
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsAuthorization;

                    /**
                     * Decodes an AwsAuthorization message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsAuthorization
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsAuthorization;

                    /**
                     * Verifies an AwsAuthorization message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsAuthorization message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsAuthorization
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsAuthorization;

                    /**
                     * Creates a plain object from an AwsAuthorization message. Also converts values to other types if specified.
                     * @param message AwsAuthorization
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsAuthorization, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsAuthorization to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsAuthorization
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AwsClusterUser. */
                interface IAwsClusterUser {

                    /** AwsClusterUser username */
                    username?: (string|null);
                }

                /** Represents an AwsClusterUser. */
                class AwsClusterUser implements IAwsClusterUser {

                    /**
                     * Constructs a new AwsClusterUser.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsClusterUser);

                    /** AwsClusterUser username. */
                    public username: string;

                    /**
                     * Creates a new AwsClusterUser instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsClusterUser instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsClusterUser): google.cloud.gkemulticloud.v1.AwsClusterUser;

                    /**
                     * Encodes the specified AwsClusterUser message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsClusterUser.verify|verify} messages.
                     * @param message AwsClusterUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsClusterUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsClusterUser message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsClusterUser.verify|verify} messages.
                     * @param message AwsClusterUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsClusterUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsClusterUser message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsClusterUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsClusterUser;

                    /**
                     * Decodes an AwsClusterUser message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsClusterUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsClusterUser;

                    /**
                     * Verifies an AwsClusterUser message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsClusterUser message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsClusterUser
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsClusterUser;

                    /**
                     * Creates a plain object from an AwsClusterUser message. Also converts values to other types if specified.
                     * @param message AwsClusterUser
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsClusterUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsClusterUser to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsClusterUser
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AwsDatabaseEncryption. */
                interface IAwsDatabaseEncryption {

                    /** AwsDatabaseEncryption kmsKeyArn */
                    kmsKeyArn?: (string|null);
                }

                /** Represents an AwsDatabaseEncryption. */
                class AwsDatabaseEncryption implements IAwsDatabaseEncryption {

                    /**
                     * Constructs a new AwsDatabaseEncryption.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsDatabaseEncryption);

                    /** AwsDatabaseEncryption kmsKeyArn. */
                    public kmsKeyArn: string;

                    /**
                     * Creates a new AwsDatabaseEncryption instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsDatabaseEncryption instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsDatabaseEncryption): google.cloud.gkemulticloud.v1.AwsDatabaseEncryption;

                    /**
                     * Encodes the specified AwsDatabaseEncryption message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsDatabaseEncryption.verify|verify} messages.
                     * @param message AwsDatabaseEncryption message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsDatabaseEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsDatabaseEncryption message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsDatabaseEncryption.verify|verify} messages.
                     * @param message AwsDatabaseEncryption message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsDatabaseEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsDatabaseEncryption message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsDatabaseEncryption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsDatabaseEncryption;

                    /**
                     * Decodes an AwsDatabaseEncryption message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsDatabaseEncryption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsDatabaseEncryption;

                    /**
                     * Verifies an AwsDatabaseEncryption message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsDatabaseEncryption message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsDatabaseEncryption
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsDatabaseEncryption;

                    /**
                     * Creates a plain object from an AwsDatabaseEncryption message. Also converts values to other types if specified.
                     * @param message AwsDatabaseEncryption
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsDatabaseEncryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsDatabaseEncryption to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsDatabaseEncryption
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AwsVolumeTemplate. */
                interface IAwsVolumeTemplate {

                    /** AwsVolumeTemplate sizeGib */
                    sizeGib?: (number|null);

                    /** AwsVolumeTemplate volumeType */
                    volumeType?: (google.cloud.gkemulticloud.v1.AwsVolumeTemplate.VolumeType|keyof typeof google.cloud.gkemulticloud.v1.AwsVolumeTemplate.VolumeType|null);

                    /** AwsVolumeTemplate iops */
                    iops?: (number|null);

                    /** AwsVolumeTemplate kmsKeyArn */
                    kmsKeyArn?: (string|null);
                }

                /** Represents an AwsVolumeTemplate. */
                class AwsVolumeTemplate implements IAwsVolumeTemplate {

                    /**
                     * Constructs a new AwsVolumeTemplate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsVolumeTemplate);

                    /** AwsVolumeTemplate sizeGib. */
                    public sizeGib: number;

                    /** AwsVolumeTemplate volumeType. */
                    public volumeType: (google.cloud.gkemulticloud.v1.AwsVolumeTemplate.VolumeType|keyof typeof google.cloud.gkemulticloud.v1.AwsVolumeTemplate.VolumeType);

                    /** AwsVolumeTemplate iops. */
                    public iops: number;

                    /** AwsVolumeTemplate kmsKeyArn. */
                    public kmsKeyArn: string;

                    /**
                     * Creates a new AwsVolumeTemplate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsVolumeTemplate instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsVolumeTemplate): google.cloud.gkemulticloud.v1.AwsVolumeTemplate;

                    /**
                     * Encodes the specified AwsVolumeTemplate message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsVolumeTemplate.verify|verify} messages.
                     * @param message AwsVolumeTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsVolumeTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsVolumeTemplate message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsVolumeTemplate.verify|verify} messages.
                     * @param message AwsVolumeTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsVolumeTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsVolumeTemplate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsVolumeTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsVolumeTemplate;

                    /**
                     * Decodes an AwsVolumeTemplate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsVolumeTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsVolumeTemplate;

                    /**
                     * Verifies an AwsVolumeTemplate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsVolumeTemplate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsVolumeTemplate
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsVolumeTemplate;

                    /**
                     * Creates a plain object from an AwsVolumeTemplate message. Also converts values to other types if specified.
                     * @param message AwsVolumeTemplate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsVolumeTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsVolumeTemplate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsVolumeTemplate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AwsVolumeTemplate {

                    /** VolumeType enum. */
                    enum VolumeType {
                        VOLUME_TYPE_UNSPECIFIED = 0,
                        GP2 = 1,
                        GP3 = 2
                    }
                }

                /** Properties of an AwsClusterNetworking. */
                interface IAwsClusterNetworking {

                    /** AwsClusterNetworking vpcId */
                    vpcId?: (string|null);

                    /** AwsClusterNetworking podAddressCidrBlocks */
                    podAddressCidrBlocks?: (string[]|null);

                    /** AwsClusterNetworking serviceAddressCidrBlocks */
                    serviceAddressCidrBlocks?: (string[]|null);
                }

                /** Represents an AwsClusterNetworking. */
                class AwsClusterNetworking implements IAwsClusterNetworking {

                    /**
                     * Constructs a new AwsClusterNetworking.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsClusterNetworking);

                    /** AwsClusterNetworking vpcId. */
                    public vpcId: string;

                    /** AwsClusterNetworking podAddressCidrBlocks. */
                    public podAddressCidrBlocks: string[];

                    /** AwsClusterNetworking serviceAddressCidrBlocks. */
                    public serviceAddressCidrBlocks: string[];

                    /**
                     * Creates a new AwsClusterNetworking instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsClusterNetworking instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsClusterNetworking): google.cloud.gkemulticloud.v1.AwsClusterNetworking;

                    /**
                     * Encodes the specified AwsClusterNetworking message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsClusterNetworking.verify|verify} messages.
                     * @param message AwsClusterNetworking message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsClusterNetworking, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsClusterNetworking message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsClusterNetworking.verify|verify} messages.
                     * @param message AwsClusterNetworking message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsClusterNetworking, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsClusterNetworking message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsClusterNetworking
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsClusterNetworking;

                    /**
                     * Decodes an AwsClusterNetworking message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsClusterNetworking
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsClusterNetworking;

                    /**
                     * Verifies an AwsClusterNetworking message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsClusterNetworking message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsClusterNetworking
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsClusterNetworking;

                    /**
                     * Creates a plain object from an AwsClusterNetworking message. Also converts values to other types if specified.
                     * @param message AwsClusterNetworking
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsClusterNetworking, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsClusterNetworking to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsClusterNetworking
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AwsNodePool. */
                interface IAwsNodePool {

                    /** AwsNodePool name */
                    name?: (string|null);

                    /** AwsNodePool version */
                    version?: (string|null);

                    /** AwsNodePool config */
                    config?: (google.cloud.gkemulticloud.v1.IAwsNodeConfig|null);

                    /** AwsNodePool autoscaling */
                    autoscaling?: (google.cloud.gkemulticloud.v1.IAwsNodePoolAutoscaling|null);

                    /** AwsNodePool subnetId */
                    subnetId?: (string|null);

                    /** AwsNodePool state */
                    state?: (google.cloud.gkemulticloud.v1.AwsNodePool.State|keyof typeof google.cloud.gkemulticloud.v1.AwsNodePool.State|null);

                    /** AwsNodePool uid */
                    uid?: (string|null);

                    /** AwsNodePool reconciling */
                    reconciling?: (boolean|null);

                    /** AwsNodePool createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** AwsNodePool updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** AwsNodePool etag */
                    etag?: (string|null);

                    /** AwsNodePool annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** AwsNodePool maxPodsConstraint */
                    maxPodsConstraint?: (google.cloud.gkemulticloud.v1.IMaxPodsConstraint|null);
                }

                /** Represents an AwsNodePool. */
                class AwsNodePool implements IAwsNodePool {

                    /**
                     * Constructs a new AwsNodePool.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsNodePool);

                    /** AwsNodePool name. */
                    public name: string;

                    /** AwsNodePool version. */
                    public version: string;

                    /** AwsNodePool config. */
                    public config?: (google.cloud.gkemulticloud.v1.IAwsNodeConfig|null);

                    /** AwsNodePool autoscaling. */
                    public autoscaling?: (google.cloud.gkemulticloud.v1.IAwsNodePoolAutoscaling|null);

                    /** AwsNodePool subnetId. */
                    public subnetId: string;

                    /** AwsNodePool state. */
                    public state: (google.cloud.gkemulticloud.v1.AwsNodePool.State|keyof typeof google.cloud.gkemulticloud.v1.AwsNodePool.State);

                    /** AwsNodePool uid. */
                    public uid: string;

                    /** AwsNodePool reconciling. */
                    public reconciling: boolean;

                    /** AwsNodePool createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** AwsNodePool updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** AwsNodePool etag. */
                    public etag: string;

                    /** AwsNodePool annotations. */
                    public annotations: { [k: string]: string };

                    /** AwsNodePool maxPodsConstraint. */
                    public maxPodsConstraint?: (google.cloud.gkemulticloud.v1.IMaxPodsConstraint|null);

                    /**
                     * Creates a new AwsNodePool instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsNodePool instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsNodePool): google.cloud.gkemulticloud.v1.AwsNodePool;

                    /**
                     * Encodes the specified AwsNodePool message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsNodePool.verify|verify} messages.
                     * @param message AwsNodePool message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsNodePool, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsNodePool message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsNodePool.verify|verify} messages.
                     * @param message AwsNodePool message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsNodePool, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsNodePool message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsNodePool
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsNodePool;

                    /**
                     * Decodes an AwsNodePool message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsNodePool
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsNodePool;

                    /**
                     * Verifies an AwsNodePool message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsNodePool message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsNodePool
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsNodePool;

                    /**
                     * Creates a plain object from an AwsNodePool message. Also converts values to other types if specified.
                     * @param message AwsNodePool
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsNodePool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsNodePool to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsNodePool
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AwsNodePool {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PROVISIONING = 1,
                        RUNNING = 2,
                        RECONCILING = 3,
                        STOPPING = 4,
                        ERROR = 5,
                        DEGRADED = 6
                    }
                }

                /** Properties of an AwsNodeConfig. */
                interface IAwsNodeConfig {

                    /** AwsNodeConfig instanceType */
                    instanceType?: (string|null);

                    /** AwsNodeConfig rootVolume */
                    rootVolume?: (google.cloud.gkemulticloud.v1.IAwsVolumeTemplate|null);

                    /** AwsNodeConfig taints */
                    taints?: (google.cloud.gkemulticloud.v1.INodeTaint[]|null);

                    /** AwsNodeConfig labels */
                    labels?: ({ [k: string]: string }|null);

                    /** AwsNodeConfig tags */
                    tags?: ({ [k: string]: string }|null);

                    /** AwsNodeConfig iamInstanceProfile */
                    iamInstanceProfile?: (string|null);

                    /** AwsNodeConfig imageType */
                    imageType?: (string|null);

                    /** AwsNodeConfig sshConfig */
                    sshConfig?: (google.cloud.gkemulticloud.v1.IAwsSshConfig|null);

                    /** AwsNodeConfig securityGroupIds */
                    securityGroupIds?: (string[]|null);

                    /** AwsNodeConfig proxyConfig */
                    proxyConfig?: (google.cloud.gkemulticloud.v1.IAwsProxyConfig|null);

                    /** AwsNodeConfig configEncryption */
                    configEncryption?: (google.cloud.gkemulticloud.v1.IAwsConfigEncryption|null);

                    /** AwsNodeConfig instancePlacement */
                    instancePlacement?: (google.cloud.gkemulticloud.v1.IAwsInstancePlacement|null);
                }

                /** Represents an AwsNodeConfig. */
                class AwsNodeConfig implements IAwsNodeConfig {

                    /**
                     * Constructs a new AwsNodeConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsNodeConfig);

                    /** AwsNodeConfig instanceType. */
                    public instanceType: string;

                    /** AwsNodeConfig rootVolume. */
                    public rootVolume?: (google.cloud.gkemulticloud.v1.IAwsVolumeTemplate|null);

                    /** AwsNodeConfig taints. */
                    public taints: google.cloud.gkemulticloud.v1.INodeTaint[];

                    /** AwsNodeConfig labels. */
                    public labels: { [k: string]: string };

                    /** AwsNodeConfig tags. */
                    public tags: { [k: string]: string };

                    /** AwsNodeConfig iamInstanceProfile. */
                    public iamInstanceProfile: string;

                    /** AwsNodeConfig imageType. */
                    public imageType: string;

                    /** AwsNodeConfig sshConfig. */
                    public sshConfig?: (google.cloud.gkemulticloud.v1.IAwsSshConfig|null);

                    /** AwsNodeConfig securityGroupIds. */
                    public securityGroupIds: string[];

                    /** AwsNodeConfig proxyConfig. */
                    public proxyConfig?: (google.cloud.gkemulticloud.v1.IAwsProxyConfig|null);

                    /** AwsNodeConfig configEncryption. */
                    public configEncryption?: (google.cloud.gkemulticloud.v1.IAwsConfigEncryption|null);

                    /** AwsNodeConfig instancePlacement. */
                    public instancePlacement?: (google.cloud.gkemulticloud.v1.IAwsInstancePlacement|null);

                    /**
                     * Creates a new AwsNodeConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsNodeConfig instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsNodeConfig): google.cloud.gkemulticloud.v1.AwsNodeConfig;

                    /**
                     * Encodes the specified AwsNodeConfig message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsNodeConfig.verify|verify} messages.
                     * @param message AwsNodeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsNodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsNodeConfig message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsNodeConfig.verify|verify} messages.
                     * @param message AwsNodeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsNodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsNodeConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsNodeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsNodeConfig;

                    /**
                     * Decodes an AwsNodeConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsNodeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsNodeConfig;

                    /**
                     * Verifies an AwsNodeConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsNodeConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsNodeConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsNodeConfig;

                    /**
                     * Creates a plain object from an AwsNodeConfig message. Also converts values to other types if specified.
                     * @param message AwsNodeConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsNodeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsNodeConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsNodeConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AwsNodePoolAutoscaling. */
                interface IAwsNodePoolAutoscaling {

                    /** AwsNodePoolAutoscaling minNodeCount */
                    minNodeCount?: (number|null);

                    /** AwsNodePoolAutoscaling maxNodeCount */
                    maxNodeCount?: (number|null);
                }

                /** Represents an AwsNodePoolAutoscaling. */
                class AwsNodePoolAutoscaling implements IAwsNodePoolAutoscaling {

                    /**
                     * Constructs a new AwsNodePoolAutoscaling.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsNodePoolAutoscaling);

                    /** AwsNodePoolAutoscaling minNodeCount. */
                    public minNodeCount: number;

                    /** AwsNodePoolAutoscaling maxNodeCount. */
                    public maxNodeCount: number;

                    /**
                     * Creates a new AwsNodePoolAutoscaling instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsNodePoolAutoscaling instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsNodePoolAutoscaling): google.cloud.gkemulticloud.v1.AwsNodePoolAutoscaling;

                    /**
                     * Encodes the specified AwsNodePoolAutoscaling message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsNodePoolAutoscaling.verify|verify} messages.
                     * @param message AwsNodePoolAutoscaling message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsNodePoolAutoscaling, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsNodePoolAutoscaling message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsNodePoolAutoscaling.verify|verify} messages.
                     * @param message AwsNodePoolAutoscaling message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsNodePoolAutoscaling, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsNodePoolAutoscaling message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsNodePoolAutoscaling
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsNodePoolAutoscaling;

                    /**
                     * Decodes an AwsNodePoolAutoscaling message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsNodePoolAutoscaling
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsNodePoolAutoscaling;

                    /**
                     * Verifies an AwsNodePoolAutoscaling message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsNodePoolAutoscaling message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsNodePoolAutoscaling
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsNodePoolAutoscaling;

                    /**
                     * Creates a plain object from an AwsNodePoolAutoscaling message. Also converts values to other types if specified.
                     * @param message AwsNodePoolAutoscaling
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsNodePoolAutoscaling, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsNodePoolAutoscaling to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsNodePoolAutoscaling
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AwsServerConfig. */
                interface IAwsServerConfig {

                    /** AwsServerConfig name */
                    name?: (string|null);

                    /** AwsServerConfig validVersions */
                    validVersions?: (google.cloud.gkemulticloud.v1.IAwsK8sVersionInfo[]|null);

                    /** AwsServerConfig supportedAwsRegions */
                    supportedAwsRegions?: (string[]|null);
                }

                /** Represents an AwsServerConfig. */
                class AwsServerConfig implements IAwsServerConfig {

                    /**
                     * Constructs a new AwsServerConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsServerConfig);

                    /** AwsServerConfig name. */
                    public name: string;

                    /** AwsServerConfig validVersions. */
                    public validVersions: google.cloud.gkemulticloud.v1.IAwsK8sVersionInfo[];

                    /** AwsServerConfig supportedAwsRegions. */
                    public supportedAwsRegions: string[];

                    /**
                     * Creates a new AwsServerConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsServerConfig instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsServerConfig): google.cloud.gkemulticloud.v1.AwsServerConfig;

                    /**
                     * Encodes the specified AwsServerConfig message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsServerConfig.verify|verify} messages.
                     * @param message AwsServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsServerConfig message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsServerConfig.verify|verify} messages.
                     * @param message AwsServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsServerConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsServerConfig;

                    /**
                     * Decodes an AwsServerConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsServerConfig;

                    /**
                     * Verifies an AwsServerConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsServerConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsServerConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsServerConfig;

                    /**
                     * Creates a plain object from an AwsServerConfig message. Also converts values to other types if specified.
                     * @param message AwsServerConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsServerConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsServerConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AwsK8sVersionInfo. */
                interface IAwsK8sVersionInfo {

                    /** AwsK8sVersionInfo version */
                    version?: (string|null);
                }

                /** Represents an AwsK8sVersionInfo. */
                class AwsK8sVersionInfo implements IAwsK8sVersionInfo {

                    /**
                     * Constructs a new AwsK8sVersionInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsK8sVersionInfo);

                    /** AwsK8sVersionInfo version. */
                    public version: string;

                    /**
                     * Creates a new AwsK8sVersionInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsK8sVersionInfo instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsK8sVersionInfo): google.cloud.gkemulticloud.v1.AwsK8sVersionInfo;

                    /**
                     * Encodes the specified AwsK8sVersionInfo message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsK8sVersionInfo.verify|verify} messages.
                     * @param message AwsK8sVersionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsK8sVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsK8sVersionInfo message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsK8sVersionInfo.verify|verify} messages.
                     * @param message AwsK8sVersionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsK8sVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsK8sVersionInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsK8sVersionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsK8sVersionInfo;

                    /**
                     * Decodes an AwsK8sVersionInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsK8sVersionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsK8sVersionInfo;

                    /**
                     * Verifies an AwsK8sVersionInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsK8sVersionInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsK8sVersionInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsK8sVersionInfo;

                    /**
                     * Creates a plain object from an AwsK8sVersionInfo message. Also converts values to other types if specified.
                     * @param message AwsK8sVersionInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsK8sVersionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsK8sVersionInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsK8sVersionInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AwsSshConfig. */
                interface IAwsSshConfig {

                    /** AwsSshConfig ec2KeyPair */
                    ec2KeyPair?: (string|null);
                }

                /** Represents an AwsSshConfig. */
                class AwsSshConfig implements IAwsSshConfig {

                    /**
                     * Constructs a new AwsSshConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsSshConfig);

                    /** AwsSshConfig ec2KeyPair. */
                    public ec2KeyPair: string;

                    /**
                     * Creates a new AwsSshConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsSshConfig instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsSshConfig): google.cloud.gkemulticloud.v1.AwsSshConfig;

                    /**
                     * Encodes the specified AwsSshConfig message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsSshConfig.verify|verify} messages.
                     * @param message AwsSshConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsSshConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsSshConfig message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsSshConfig.verify|verify} messages.
                     * @param message AwsSshConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsSshConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsSshConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsSshConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsSshConfig;

                    /**
                     * Decodes an AwsSshConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsSshConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsSshConfig;

                    /**
                     * Verifies an AwsSshConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsSshConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsSshConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsSshConfig;

                    /**
                     * Creates a plain object from an AwsSshConfig message. Also converts values to other types if specified.
                     * @param message AwsSshConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsSshConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsSshConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsSshConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AwsProxyConfig. */
                interface IAwsProxyConfig {

                    /** AwsProxyConfig secretArn */
                    secretArn?: (string|null);

                    /** AwsProxyConfig secretVersion */
                    secretVersion?: (string|null);
                }

                /** Represents an AwsProxyConfig. */
                class AwsProxyConfig implements IAwsProxyConfig {

                    /**
                     * Constructs a new AwsProxyConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsProxyConfig);

                    /** AwsProxyConfig secretArn. */
                    public secretArn: string;

                    /** AwsProxyConfig secretVersion. */
                    public secretVersion: string;

                    /**
                     * Creates a new AwsProxyConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsProxyConfig instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsProxyConfig): google.cloud.gkemulticloud.v1.AwsProxyConfig;

                    /**
                     * Encodes the specified AwsProxyConfig message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsProxyConfig.verify|verify} messages.
                     * @param message AwsProxyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsProxyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsProxyConfig message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsProxyConfig.verify|verify} messages.
                     * @param message AwsProxyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsProxyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsProxyConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsProxyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsProxyConfig;

                    /**
                     * Decodes an AwsProxyConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsProxyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsProxyConfig;

                    /**
                     * Verifies an AwsProxyConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsProxyConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsProxyConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsProxyConfig;

                    /**
                     * Creates a plain object from an AwsProxyConfig message. Also converts values to other types if specified.
                     * @param message AwsProxyConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsProxyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsProxyConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsProxyConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AwsConfigEncryption. */
                interface IAwsConfigEncryption {

                    /** AwsConfigEncryption kmsKeyArn */
                    kmsKeyArn?: (string|null);
                }

                /** Represents an AwsConfigEncryption. */
                class AwsConfigEncryption implements IAwsConfigEncryption {

                    /**
                     * Constructs a new AwsConfigEncryption.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsConfigEncryption);

                    /** AwsConfigEncryption kmsKeyArn. */
                    public kmsKeyArn: string;

                    /**
                     * Creates a new AwsConfigEncryption instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsConfigEncryption instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsConfigEncryption): google.cloud.gkemulticloud.v1.AwsConfigEncryption;

                    /**
                     * Encodes the specified AwsConfigEncryption message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsConfigEncryption.verify|verify} messages.
                     * @param message AwsConfigEncryption message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsConfigEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsConfigEncryption message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsConfigEncryption.verify|verify} messages.
                     * @param message AwsConfigEncryption message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsConfigEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsConfigEncryption message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsConfigEncryption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsConfigEncryption;

                    /**
                     * Decodes an AwsConfigEncryption message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsConfigEncryption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsConfigEncryption;

                    /**
                     * Verifies an AwsConfigEncryption message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsConfigEncryption message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsConfigEncryption
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsConfigEncryption;

                    /**
                     * Creates a plain object from an AwsConfigEncryption message. Also converts values to other types if specified.
                     * @param message AwsConfigEncryption
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsConfigEncryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsConfigEncryption to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsConfigEncryption
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AwsInstancePlacement. */
                interface IAwsInstancePlacement {

                    /** AwsInstancePlacement tenancy */
                    tenancy?: (google.cloud.gkemulticloud.v1.AwsInstancePlacement.Tenancy|keyof typeof google.cloud.gkemulticloud.v1.AwsInstancePlacement.Tenancy|null);
                }

                /** Represents an AwsInstancePlacement. */
                class AwsInstancePlacement implements IAwsInstancePlacement {

                    /**
                     * Constructs a new AwsInstancePlacement.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAwsInstancePlacement);

                    /** AwsInstancePlacement tenancy. */
                    public tenancy: (google.cloud.gkemulticloud.v1.AwsInstancePlacement.Tenancy|keyof typeof google.cloud.gkemulticloud.v1.AwsInstancePlacement.Tenancy);

                    /**
                     * Creates a new AwsInstancePlacement instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AwsInstancePlacement instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAwsInstancePlacement): google.cloud.gkemulticloud.v1.AwsInstancePlacement;

                    /**
                     * Encodes the specified AwsInstancePlacement message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsInstancePlacement.verify|verify} messages.
                     * @param message AwsInstancePlacement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAwsInstancePlacement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AwsInstancePlacement message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AwsInstancePlacement.verify|verify} messages.
                     * @param message AwsInstancePlacement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAwsInstancePlacement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AwsInstancePlacement message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AwsInstancePlacement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AwsInstancePlacement;

                    /**
                     * Decodes an AwsInstancePlacement message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AwsInstancePlacement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AwsInstancePlacement;

                    /**
                     * Verifies an AwsInstancePlacement message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AwsInstancePlacement message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AwsInstancePlacement
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AwsInstancePlacement;

                    /**
                     * Creates a plain object from an AwsInstancePlacement message. Also converts values to other types if specified.
                     * @param message AwsInstancePlacement
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AwsInstancePlacement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AwsInstancePlacement to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AwsInstancePlacement
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AwsInstancePlacement {

                    /** Tenancy enum. */
                    enum Tenancy {
                        TENANCY_UNSPECIFIED = 0,
                        DEFAULT = 1,
                        DEDICATED = 2,
                        HOST = 3
                    }
                }

                /** Properties of a WorkloadIdentityConfig. */
                interface IWorkloadIdentityConfig {

                    /** WorkloadIdentityConfig issuerUri */
                    issuerUri?: (string|null);

                    /** WorkloadIdentityConfig workloadPool */
                    workloadPool?: (string|null);

                    /** WorkloadIdentityConfig identityProvider */
                    identityProvider?: (string|null);
                }

                /** Represents a WorkloadIdentityConfig. */
                class WorkloadIdentityConfig implements IWorkloadIdentityConfig {

                    /**
                     * Constructs a new WorkloadIdentityConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IWorkloadIdentityConfig);

                    /** WorkloadIdentityConfig issuerUri. */
                    public issuerUri: string;

                    /** WorkloadIdentityConfig workloadPool. */
                    public workloadPool: string;

                    /** WorkloadIdentityConfig identityProvider. */
                    public identityProvider: string;

                    /**
                     * Creates a new WorkloadIdentityConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkloadIdentityConfig instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IWorkloadIdentityConfig): google.cloud.gkemulticloud.v1.WorkloadIdentityConfig;

                    /**
                     * Encodes the specified WorkloadIdentityConfig message. Does not implicitly {@link google.cloud.gkemulticloud.v1.WorkloadIdentityConfig.verify|verify} messages.
                     * @param message WorkloadIdentityConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IWorkloadIdentityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkloadIdentityConfig message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.WorkloadIdentityConfig.verify|verify} messages.
                     * @param message WorkloadIdentityConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IWorkloadIdentityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkloadIdentityConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkloadIdentityConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.WorkloadIdentityConfig;

                    /**
                     * Decodes a WorkloadIdentityConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkloadIdentityConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.WorkloadIdentityConfig;

                    /**
                     * Verifies a WorkloadIdentityConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkloadIdentityConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkloadIdentityConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.WorkloadIdentityConfig;

                    /**
                     * Creates a plain object from a WorkloadIdentityConfig message. Also converts values to other types if specified.
                     * @param message WorkloadIdentityConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.WorkloadIdentityConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkloadIdentityConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WorkloadIdentityConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MaxPodsConstraint. */
                interface IMaxPodsConstraint {

                    /** MaxPodsConstraint maxPodsPerNode */
                    maxPodsPerNode?: (number|Long|string|null);
                }

                /** Represents a MaxPodsConstraint. */
                class MaxPodsConstraint implements IMaxPodsConstraint {

                    /**
                     * Constructs a new MaxPodsConstraint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IMaxPodsConstraint);

                    /** MaxPodsConstraint maxPodsPerNode. */
                    public maxPodsPerNode: (number|Long|string);

                    /**
                     * Creates a new MaxPodsConstraint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MaxPodsConstraint instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IMaxPodsConstraint): google.cloud.gkemulticloud.v1.MaxPodsConstraint;

                    /**
                     * Encodes the specified MaxPodsConstraint message. Does not implicitly {@link google.cloud.gkemulticloud.v1.MaxPodsConstraint.verify|verify} messages.
                     * @param message MaxPodsConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IMaxPodsConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MaxPodsConstraint message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.MaxPodsConstraint.verify|verify} messages.
                     * @param message MaxPodsConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IMaxPodsConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MaxPodsConstraint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MaxPodsConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.MaxPodsConstraint;

                    /**
                     * Decodes a MaxPodsConstraint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MaxPodsConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.MaxPodsConstraint;

                    /**
                     * Verifies a MaxPodsConstraint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MaxPodsConstraint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MaxPodsConstraint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.MaxPodsConstraint;

                    /**
                     * Creates a plain object from a MaxPodsConstraint message. Also converts values to other types if specified.
                     * @param message MaxPodsConstraint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.MaxPodsConstraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MaxPodsConstraint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MaxPodsConstraint
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

                    /** OperationMetadata statusDetail */
                    statusDetail?: (string|null);

                    /** OperationMetadata errorDetail */
                    errorDetail?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata statusDetail. */
                    public statusDetail: string;

                    /** OperationMetadata errorDetail. */
                    public errorDetail: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IOperationMetadata): google.cloud.gkemulticloud.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.gkemulticloud.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a NodeTaint. */
                interface INodeTaint {

                    /** NodeTaint key */
                    key?: (string|null);

                    /** NodeTaint value */
                    value?: (string|null);

                    /** NodeTaint effect */
                    effect?: (google.cloud.gkemulticloud.v1.NodeTaint.Effect|keyof typeof google.cloud.gkemulticloud.v1.NodeTaint.Effect|null);
                }

                /** Represents a NodeTaint. */
                class NodeTaint implements INodeTaint {

                    /**
                     * Constructs a new NodeTaint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.INodeTaint);

                    /** NodeTaint key. */
                    public key: string;

                    /** NodeTaint value. */
                    public value: string;

                    /** NodeTaint effect. */
                    public effect: (google.cloud.gkemulticloud.v1.NodeTaint.Effect|keyof typeof google.cloud.gkemulticloud.v1.NodeTaint.Effect);

                    /**
                     * Creates a new NodeTaint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NodeTaint instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.INodeTaint): google.cloud.gkemulticloud.v1.NodeTaint;

                    /**
                     * Encodes the specified NodeTaint message. Does not implicitly {@link google.cloud.gkemulticloud.v1.NodeTaint.verify|verify} messages.
                     * @param message NodeTaint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.INodeTaint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NodeTaint message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.NodeTaint.verify|verify} messages.
                     * @param message NodeTaint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.INodeTaint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NodeTaint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NodeTaint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.NodeTaint;

                    /**
                     * Decodes a NodeTaint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NodeTaint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.NodeTaint;

                    /**
                     * Verifies a NodeTaint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NodeTaint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NodeTaint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.NodeTaint;

                    /**
                     * Creates a plain object from a NodeTaint message. Also converts values to other types if specified.
                     * @param message NodeTaint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.NodeTaint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NodeTaint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NodeTaint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace NodeTaint {

                    /** Effect enum. */
                    enum Effect {
                        EFFECT_UNSPECIFIED = 0,
                        NO_SCHEDULE = 1,
                        PREFER_NO_SCHEDULE = 2,
                        NO_EXECUTE = 3
                    }
                }

                /** Properties of a Fleet. */
                interface IFleet {

                    /** Fleet project */
                    project?: (string|null);

                    /** Fleet membership */
                    membership?: (string|null);
                }

                /** Represents a Fleet. */
                class Fleet implements IFleet {

                    /**
                     * Constructs a new Fleet.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IFleet);

                    /** Fleet project. */
                    public project: string;

                    /** Fleet membership. */
                    public membership: string;

                    /**
                     * Creates a new Fleet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Fleet instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IFleet): google.cloud.gkemulticloud.v1.Fleet;

                    /**
                     * Encodes the specified Fleet message. Does not implicitly {@link google.cloud.gkemulticloud.v1.Fleet.verify|verify} messages.
                     * @param message Fleet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IFleet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Fleet message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.Fleet.verify|verify} messages.
                     * @param message Fleet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IFleet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Fleet message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Fleet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.Fleet;

                    /**
                     * Decodes a Fleet message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Fleet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.Fleet;

                    /**
                     * Verifies a Fleet message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Fleet message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Fleet
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.Fleet;

                    /**
                     * Creates a plain object from a Fleet message. Also converts values to other types if specified.
                     * @param message Fleet
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.Fleet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Fleet to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Fleet
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LoggingConfig. */
                interface ILoggingConfig {

                    /** LoggingConfig componentConfig */
                    componentConfig?: (google.cloud.gkemulticloud.v1.ILoggingComponentConfig|null);
                }

                /** Represents a LoggingConfig. */
                class LoggingConfig implements ILoggingConfig {

                    /**
                     * Constructs a new LoggingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.ILoggingConfig);

                    /** LoggingConfig componentConfig. */
                    public componentConfig?: (google.cloud.gkemulticloud.v1.ILoggingComponentConfig|null);

                    /**
                     * Creates a new LoggingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoggingConfig instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.ILoggingConfig): google.cloud.gkemulticloud.v1.LoggingConfig;

                    /**
                     * Encodes the specified LoggingConfig message. Does not implicitly {@link google.cloud.gkemulticloud.v1.LoggingConfig.verify|verify} messages.
                     * @param message LoggingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.ILoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoggingConfig message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.LoggingConfig.verify|verify} messages.
                     * @param message LoggingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.ILoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoggingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoggingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.LoggingConfig;

                    /**
                     * Decodes a LoggingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoggingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.LoggingConfig;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.LoggingConfig;

                    /**
                     * Creates a plain object from a LoggingConfig message. Also converts values to other types if specified.
                     * @param message LoggingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.LoggingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a LoggingComponentConfig. */
                interface ILoggingComponentConfig {

                    /** LoggingComponentConfig enableComponents */
                    enableComponents?: (google.cloud.gkemulticloud.v1.LoggingComponentConfig.Component[]|null);
                }

                /** Represents a LoggingComponentConfig. */
                class LoggingComponentConfig implements ILoggingComponentConfig {

                    /**
                     * Constructs a new LoggingComponentConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.ILoggingComponentConfig);

                    /** LoggingComponentConfig enableComponents. */
                    public enableComponents: google.cloud.gkemulticloud.v1.LoggingComponentConfig.Component[];

                    /**
                     * Creates a new LoggingComponentConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoggingComponentConfig instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.ILoggingComponentConfig): google.cloud.gkemulticloud.v1.LoggingComponentConfig;

                    /**
                     * Encodes the specified LoggingComponentConfig message. Does not implicitly {@link google.cloud.gkemulticloud.v1.LoggingComponentConfig.verify|verify} messages.
                     * @param message LoggingComponentConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.ILoggingComponentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoggingComponentConfig message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.LoggingComponentConfig.verify|verify} messages.
                     * @param message LoggingComponentConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.ILoggingComponentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoggingComponentConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoggingComponentConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.LoggingComponentConfig;

                    /**
                     * Decodes a LoggingComponentConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoggingComponentConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.LoggingComponentConfig;

                    /**
                     * Verifies a LoggingComponentConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoggingComponentConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoggingComponentConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.LoggingComponentConfig;

                    /**
                     * Creates a plain object from a LoggingComponentConfig message. Also converts values to other types if specified.
                     * @param message LoggingComponentConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.LoggingComponentConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoggingComponentConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LoggingComponentConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace LoggingComponentConfig {

                    /** Component enum. */
                    enum Component {
                        COMPONENT_UNSPECIFIED = 0,
                        SYSTEM_COMPONENTS = 1,
                        WORKLOADS = 2
                    }
                }

                /** Represents an AwsClusters */
                class AwsClusters extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AwsClusters service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AwsClusters service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AwsClusters;

                    /**
                     * Calls CreateAwsCluster.
                     * @param request CreateAwsClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAwsCluster(request: google.cloud.gkemulticloud.v1.ICreateAwsClusterRequest, callback: google.cloud.gkemulticloud.v1.AwsClusters.CreateAwsClusterCallback): void;

                    /**
                     * Calls CreateAwsCluster.
                     * @param request CreateAwsClusterRequest message or plain object
                     * @returns Promise
                     */
                    public createAwsCluster(request: google.cloud.gkemulticloud.v1.ICreateAwsClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateAwsCluster.
                     * @param request UpdateAwsClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateAwsCluster(request: google.cloud.gkemulticloud.v1.IUpdateAwsClusterRequest, callback: google.cloud.gkemulticloud.v1.AwsClusters.UpdateAwsClusterCallback): void;

                    /**
                     * Calls UpdateAwsCluster.
                     * @param request UpdateAwsClusterRequest message or plain object
                     * @returns Promise
                     */
                    public updateAwsCluster(request: google.cloud.gkemulticloud.v1.IUpdateAwsClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetAwsCluster.
                     * @param request GetAwsClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AwsCluster
                     */
                    public getAwsCluster(request: google.cloud.gkemulticloud.v1.IGetAwsClusterRequest, callback: google.cloud.gkemulticloud.v1.AwsClusters.GetAwsClusterCallback): void;

                    /**
                     * Calls GetAwsCluster.
                     * @param request GetAwsClusterRequest message or plain object
                     * @returns Promise
                     */
                    public getAwsCluster(request: google.cloud.gkemulticloud.v1.IGetAwsClusterRequest): Promise<google.cloud.gkemulticloud.v1.AwsCluster>;

                    /**
                     * Calls ListAwsClusters.
                     * @param request ListAwsClustersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAwsClustersResponse
                     */
                    public listAwsClusters(request: google.cloud.gkemulticloud.v1.IListAwsClustersRequest, callback: google.cloud.gkemulticloud.v1.AwsClusters.ListAwsClustersCallback): void;

                    /**
                     * Calls ListAwsClusters.
                     * @param request ListAwsClustersRequest message or plain object
                     * @returns Promise
                     */
                    public listAwsClusters(request: google.cloud.gkemulticloud.v1.IListAwsClustersRequest): Promise<google.cloud.gkemulticloud.v1.ListAwsClustersResponse>;

                    /**
                     * Calls DeleteAwsCluster.
                     * @param request DeleteAwsClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAwsCluster(request: google.cloud.gkemulticloud.v1.IDeleteAwsClusterRequest, callback: google.cloud.gkemulticloud.v1.AwsClusters.DeleteAwsClusterCallback): void;

                    /**
                     * Calls DeleteAwsCluster.
                     * @param request DeleteAwsClusterRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAwsCluster(request: google.cloud.gkemulticloud.v1.IDeleteAwsClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GenerateAwsAccessToken.
                     * @param request GenerateAwsAccessTokenRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateAwsAccessTokenResponse
                     */
                    public generateAwsAccessToken(request: google.cloud.gkemulticloud.v1.IGenerateAwsAccessTokenRequest, callback: google.cloud.gkemulticloud.v1.AwsClusters.GenerateAwsAccessTokenCallback): void;

                    /**
                     * Calls GenerateAwsAccessToken.
                     * @param request GenerateAwsAccessTokenRequest message or plain object
                     * @returns Promise
                     */
                    public generateAwsAccessToken(request: google.cloud.gkemulticloud.v1.IGenerateAwsAccessTokenRequest): Promise<google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenResponse>;

                    /**
                     * Calls CreateAwsNodePool.
                     * @param request CreateAwsNodePoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAwsNodePool(request: google.cloud.gkemulticloud.v1.ICreateAwsNodePoolRequest, callback: google.cloud.gkemulticloud.v1.AwsClusters.CreateAwsNodePoolCallback): void;

                    /**
                     * Calls CreateAwsNodePool.
                     * @param request CreateAwsNodePoolRequest message or plain object
                     * @returns Promise
                     */
                    public createAwsNodePool(request: google.cloud.gkemulticloud.v1.ICreateAwsNodePoolRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateAwsNodePool.
                     * @param request UpdateAwsNodePoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateAwsNodePool(request: google.cloud.gkemulticloud.v1.IUpdateAwsNodePoolRequest, callback: google.cloud.gkemulticloud.v1.AwsClusters.UpdateAwsNodePoolCallback): void;

                    /**
                     * Calls UpdateAwsNodePool.
                     * @param request UpdateAwsNodePoolRequest message or plain object
                     * @returns Promise
                     */
                    public updateAwsNodePool(request: google.cloud.gkemulticloud.v1.IUpdateAwsNodePoolRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetAwsNodePool.
                     * @param request GetAwsNodePoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AwsNodePool
                     */
                    public getAwsNodePool(request: google.cloud.gkemulticloud.v1.IGetAwsNodePoolRequest, callback: google.cloud.gkemulticloud.v1.AwsClusters.GetAwsNodePoolCallback): void;

                    /**
                     * Calls GetAwsNodePool.
                     * @param request GetAwsNodePoolRequest message or plain object
                     * @returns Promise
                     */
                    public getAwsNodePool(request: google.cloud.gkemulticloud.v1.IGetAwsNodePoolRequest): Promise<google.cloud.gkemulticloud.v1.AwsNodePool>;

                    /**
                     * Calls ListAwsNodePools.
                     * @param request ListAwsNodePoolsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAwsNodePoolsResponse
                     */
                    public listAwsNodePools(request: google.cloud.gkemulticloud.v1.IListAwsNodePoolsRequest, callback: google.cloud.gkemulticloud.v1.AwsClusters.ListAwsNodePoolsCallback): void;

                    /**
                     * Calls ListAwsNodePools.
                     * @param request ListAwsNodePoolsRequest message or plain object
                     * @returns Promise
                     */
                    public listAwsNodePools(request: google.cloud.gkemulticloud.v1.IListAwsNodePoolsRequest): Promise<google.cloud.gkemulticloud.v1.ListAwsNodePoolsResponse>;

                    /**
                     * Calls DeleteAwsNodePool.
                     * @param request DeleteAwsNodePoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAwsNodePool(request: google.cloud.gkemulticloud.v1.IDeleteAwsNodePoolRequest, callback: google.cloud.gkemulticloud.v1.AwsClusters.DeleteAwsNodePoolCallback): void;

                    /**
                     * Calls DeleteAwsNodePool.
                     * @param request DeleteAwsNodePoolRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAwsNodePool(request: google.cloud.gkemulticloud.v1.IDeleteAwsNodePoolRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetAwsServerConfig.
                     * @param request GetAwsServerConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AwsServerConfig
                     */
                    public getAwsServerConfig(request: google.cloud.gkemulticloud.v1.IGetAwsServerConfigRequest, callback: google.cloud.gkemulticloud.v1.AwsClusters.GetAwsServerConfigCallback): void;

                    /**
                     * Calls GetAwsServerConfig.
                     * @param request GetAwsServerConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getAwsServerConfig(request: google.cloud.gkemulticloud.v1.IGetAwsServerConfigRequest): Promise<google.cloud.gkemulticloud.v1.AwsServerConfig>;
                }

                namespace AwsClusters {

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AwsClusters|createAwsCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAwsClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AwsClusters|updateAwsCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateAwsClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AwsClusters|getAwsCluster}.
                     * @param error Error, if any
                     * @param [response] AwsCluster
                     */
                    type GetAwsClusterCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.AwsCluster) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AwsClusters|listAwsClusters}.
                     * @param error Error, if any
                     * @param [response] ListAwsClustersResponse
                     */
                    type ListAwsClustersCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.ListAwsClustersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AwsClusters|deleteAwsCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAwsClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AwsClusters|generateAwsAccessToken}.
                     * @param error Error, if any
                     * @param [response] GenerateAwsAccessTokenResponse
                     */
                    type GenerateAwsAccessTokenCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AwsClusters|createAwsNodePool}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAwsNodePoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AwsClusters|updateAwsNodePool}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateAwsNodePoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AwsClusters|getAwsNodePool}.
                     * @param error Error, if any
                     * @param [response] AwsNodePool
                     */
                    type GetAwsNodePoolCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.AwsNodePool) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AwsClusters|listAwsNodePools}.
                     * @param error Error, if any
                     * @param [response] ListAwsNodePoolsResponse
                     */
                    type ListAwsNodePoolsCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.ListAwsNodePoolsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AwsClusters|deleteAwsNodePool}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAwsNodePoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AwsClusters|getAwsServerConfig}.
                     * @param error Error, if any
                     * @param [response] AwsServerConfig
                     */
                    type GetAwsServerConfigCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.AwsServerConfig) => void;
                }

                /** Properties of a CreateAwsClusterRequest. */
                interface ICreateAwsClusterRequest {

                    /** CreateAwsClusterRequest parent */
                    parent?: (string|null);

                    /** CreateAwsClusterRequest awsCluster */
                    awsCluster?: (google.cloud.gkemulticloud.v1.IAwsCluster|null);

                    /** CreateAwsClusterRequest awsClusterId */
                    awsClusterId?: (string|null);

                    /** CreateAwsClusterRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateAwsClusterRequest. */
                class CreateAwsClusterRequest implements ICreateAwsClusterRequest {

                    /**
                     * Constructs a new CreateAwsClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.ICreateAwsClusterRequest);

                    /** CreateAwsClusterRequest parent. */
                    public parent: string;

                    /** CreateAwsClusterRequest awsCluster. */
                    public awsCluster?: (google.cloud.gkemulticloud.v1.IAwsCluster|null);

                    /** CreateAwsClusterRequest awsClusterId. */
                    public awsClusterId: string;

                    /** CreateAwsClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateAwsClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAwsClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.ICreateAwsClusterRequest): google.cloud.gkemulticloud.v1.CreateAwsClusterRequest;

                    /**
                     * Encodes the specified CreateAwsClusterRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.CreateAwsClusterRequest.verify|verify} messages.
                     * @param message CreateAwsClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.ICreateAwsClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAwsClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.CreateAwsClusterRequest.verify|verify} messages.
                     * @param message CreateAwsClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.ICreateAwsClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAwsClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAwsClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.CreateAwsClusterRequest;

                    /**
                     * Decodes a CreateAwsClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAwsClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.CreateAwsClusterRequest;

                    /**
                     * Verifies a CreateAwsClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAwsClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAwsClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.CreateAwsClusterRequest;

                    /**
                     * Creates a plain object from a CreateAwsClusterRequest message. Also converts values to other types if specified.
                     * @param message CreateAwsClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.CreateAwsClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAwsClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAwsClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateAwsClusterRequest. */
                interface IUpdateAwsClusterRequest {

                    /** UpdateAwsClusterRequest awsCluster */
                    awsCluster?: (google.cloud.gkemulticloud.v1.IAwsCluster|null);

                    /** UpdateAwsClusterRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UpdateAwsClusterRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateAwsClusterRequest. */
                class UpdateAwsClusterRequest implements IUpdateAwsClusterRequest {

                    /**
                     * Constructs a new UpdateAwsClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IUpdateAwsClusterRequest);

                    /** UpdateAwsClusterRequest awsCluster. */
                    public awsCluster?: (google.cloud.gkemulticloud.v1.IAwsCluster|null);

                    /** UpdateAwsClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UpdateAwsClusterRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateAwsClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAwsClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IUpdateAwsClusterRequest): google.cloud.gkemulticloud.v1.UpdateAwsClusterRequest;

                    /**
                     * Encodes the specified UpdateAwsClusterRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.UpdateAwsClusterRequest.verify|verify} messages.
                     * @param message UpdateAwsClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IUpdateAwsClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAwsClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.UpdateAwsClusterRequest.verify|verify} messages.
                     * @param message UpdateAwsClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IUpdateAwsClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAwsClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAwsClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.UpdateAwsClusterRequest;

                    /**
                     * Decodes an UpdateAwsClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAwsClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.UpdateAwsClusterRequest;

                    /**
                     * Verifies an UpdateAwsClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAwsClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAwsClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.UpdateAwsClusterRequest;

                    /**
                     * Creates a plain object from an UpdateAwsClusterRequest message. Also converts values to other types if specified.
                     * @param message UpdateAwsClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.UpdateAwsClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAwsClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateAwsClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAwsClusterRequest. */
                interface IGetAwsClusterRequest {

                    /** GetAwsClusterRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAwsClusterRequest. */
                class GetAwsClusterRequest implements IGetAwsClusterRequest {

                    /**
                     * Constructs a new GetAwsClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IGetAwsClusterRequest);

                    /** GetAwsClusterRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAwsClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAwsClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IGetAwsClusterRequest): google.cloud.gkemulticloud.v1.GetAwsClusterRequest;

                    /**
                     * Encodes the specified GetAwsClusterRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAwsClusterRequest.verify|verify} messages.
                     * @param message GetAwsClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IGetAwsClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAwsClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAwsClusterRequest.verify|verify} messages.
                     * @param message GetAwsClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IGetAwsClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAwsClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAwsClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.GetAwsClusterRequest;

                    /**
                     * Decodes a GetAwsClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAwsClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.GetAwsClusterRequest;

                    /**
                     * Verifies a GetAwsClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAwsClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAwsClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.GetAwsClusterRequest;

                    /**
                     * Creates a plain object from a GetAwsClusterRequest message. Also converts values to other types if specified.
                     * @param message GetAwsClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.GetAwsClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAwsClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAwsClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAwsClustersRequest. */
                interface IListAwsClustersRequest {

                    /** ListAwsClustersRequest parent */
                    parent?: (string|null);

                    /** ListAwsClustersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAwsClustersRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAwsClustersRequest. */
                class ListAwsClustersRequest implements IListAwsClustersRequest {

                    /**
                     * Constructs a new ListAwsClustersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IListAwsClustersRequest);

                    /** ListAwsClustersRequest parent. */
                    public parent: string;

                    /** ListAwsClustersRequest pageSize. */
                    public pageSize: number;

                    /** ListAwsClustersRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAwsClustersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAwsClustersRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IListAwsClustersRequest): google.cloud.gkemulticloud.v1.ListAwsClustersRequest;

                    /**
                     * Encodes the specified ListAwsClustersRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAwsClustersRequest.verify|verify} messages.
                     * @param message ListAwsClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IListAwsClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAwsClustersRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAwsClustersRequest.verify|verify} messages.
                     * @param message ListAwsClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IListAwsClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAwsClustersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAwsClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.ListAwsClustersRequest;

                    /**
                     * Decodes a ListAwsClustersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAwsClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.ListAwsClustersRequest;

                    /**
                     * Verifies a ListAwsClustersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAwsClustersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAwsClustersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.ListAwsClustersRequest;

                    /**
                     * Creates a plain object from a ListAwsClustersRequest message. Also converts values to other types if specified.
                     * @param message ListAwsClustersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.ListAwsClustersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAwsClustersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAwsClustersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAwsClustersResponse. */
                interface IListAwsClustersResponse {

                    /** ListAwsClustersResponse awsClusters */
                    awsClusters?: (google.cloud.gkemulticloud.v1.IAwsCluster[]|null);

                    /** ListAwsClustersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAwsClustersResponse. */
                class ListAwsClustersResponse implements IListAwsClustersResponse {

                    /**
                     * Constructs a new ListAwsClustersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IListAwsClustersResponse);

                    /** ListAwsClustersResponse awsClusters. */
                    public awsClusters: google.cloud.gkemulticloud.v1.IAwsCluster[];

                    /** ListAwsClustersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAwsClustersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAwsClustersResponse instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IListAwsClustersResponse): google.cloud.gkemulticloud.v1.ListAwsClustersResponse;

                    /**
                     * Encodes the specified ListAwsClustersResponse message. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAwsClustersResponse.verify|verify} messages.
                     * @param message ListAwsClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IListAwsClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAwsClustersResponse message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAwsClustersResponse.verify|verify} messages.
                     * @param message ListAwsClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IListAwsClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAwsClustersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAwsClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.ListAwsClustersResponse;

                    /**
                     * Decodes a ListAwsClustersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAwsClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.ListAwsClustersResponse;

                    /**
                     * Verifies a ListAwsClustersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAwsClustersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAwsClustersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.ListAwsClustersResponse;

                    /**
                     * Creates a plain object from a ListAwsClustersResponse message. Also converts values to other types if specified.
                     * @param message ListAwsClustersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.ListAwsClustersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAwsClustersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAwsClustersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteAwsClusterRequest. */
                interface IDeleteAwsClusterRequest {

                    /** DeleteAwsClusterRequest name */
                    name?: (string|null);

                    /** DeleteAwsClusterRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteAwsClusterRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteAwsClusterRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteAwsClusterRequest. */
                class DeleteAwsClusterRequest implements IDeleteAwsClusterRequest {

                    /**
                     * Constructs a new DeleteAwsClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IDeleteAwsClusterRequest);

                    /** DeleteAwsClusterRequest name. */
                    public name: string;

                    /** DeleteAwsClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteAwsClusterRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteAwsClusterRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteAwsClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAwsClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IDeleteAwsClusterRequest): google.cloud.gkemulticloud.v1.DeleteAwsClusterRequest;

                    /**
                     * Encodes the specified DeleteAwsClusterRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.DeleteAwsClusterRequest.verify|verify} messages.
                     * @param message DeleteAwsClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IDeleteAwsClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAwsClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.DeleteAwsClusterRequest.verify|verify} messages.
                     * @param message DeleteAwsClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IDeleteAwsClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAwsClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAwsClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.DeleteAwsClusterRequest;

                    /**
                     * Decodes a DeleteAwsClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAwsClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.DeleteAwsClusterRequest;

                    /**
                     * Verifies a DeleteAwsClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAwsClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAwsClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.DeleteAwsClusterRequest;

                    /**
                     * Creates a plain object from a DeleteAwsClusterRequest message. Also converts values to other types if specified.
                     * @param message DeleteAwsClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.DeleteAwsClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAwsClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteAwsClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateAwsNodePoolRequest. */
                interface ICreateAwsNodePoolRequest {

                    /** CreateAwsNodePoolRequest parent */
                    parent?: (string|null);

                    /** CreateAwsNodePoolRequest awsNodePool */
                    awsNodePool?: (google.cloud.gkemulticloud.v1.IAwsNodePool|null);

                    /** CreateAwsNodePoolRequest awsNodePoolId */
                    awsNodePoolId?: (string|null);

                    /** CreateAwsNodePoolRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateAwsNodePoolRequest. */
                class CreateAwsNodePoolRequest implements ICreateAwsNodePoolRequest {

                    /**
                     * Constructs a new CreateAwsNodePoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.ICreateAwsNodePoolRequest);

                    /** CreateAwsNodePoolRequest parent. */
                    public parent: string;

                    /** CreateAwsNodePoolRequest awsNodePool. */
                    public awsNodePool?: (google.cloud.gkemulticloud.v1.IAwsNodePool|null);

                    /** CreateAwsNodePoolRequest awsNodePoolId. */
                    public awsNodePoolId: string;

                    /** CreateAwsNodePoolRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateAwsNodePoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAwsNodePoolRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.ICreateAwsNodePoolRequest): google.cloud.gkemulticloud.v1.CreateAwsNodePoolRequest;

                    /**
                     * Encodes the specified CreateAwsNodePoolRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.CreateAwsNodePoolRequest.verify|verify} messages.
                     * @param message CreateAwsNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.ICreateAwsNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAwsNodePoolRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.CreateAwsNodePoolRequest.verify|verify} messages.
                     * @param message CreateAwsNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.ICreateAwsNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAwsNodePoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAwsNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.CreateAwsNodePoolRequest;

                    /**
                     * Decodes a CreateAwsNodePoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAwsNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.CreateAwsNodePoolRequest;

                    /**
                     * Verifies a CreateAwsNodePoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAwsNodePoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAwsNodePoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.CreateAwsNodePoolRequest;

                    /**
                     * Creates a plain object from a CreateAwsNodePoolRequest message. Also converts values to other types if specified.
                     * @param message CreateAwsNodePoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.CreateAwsNodePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAwsNodePoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAwsNodePoolRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateAwsNodePoolRequest. */
                interface IUpdateAwsNodePoolRequest {

                    /** UpdateAwsNodePoolRequest awsNodePool */
                    awsNodePool?: (google.cloud.gkemulticloud.v1.IAwsNodePool|null);

                    /** UpdateAwsNodePoolRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UpdateAwsNodePoolRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateAwsNodePoolRequest. */
                class UpdateAwsNodePoolRequest implements IUpdateAwsNodePoolRequest {

                    /**
                     * Constructs a new UpdateAwsNodePoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IUpdateAwsNodePoolRequest);

                    /** UpdateAwsNodePoolRequest awsNodePool. */
                    public awsNodePool?: (google.cloud.gkemulticloud.v1.IAwsNodePool|null);

                    /** UpdateAwsNodePoolRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UpdateAwsNodePoolRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateAwsNodePoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAwsNodePoolRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IUpdateAwsNodePoolRequest): google.cloud.gkemulticloud.v1.UpdateAwsNodePoolRequest;

                    /**
                     * Encodes the specified UpdateAwsNodePoolRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.UpdateAwsNodePoolRequest.verify|verify} messages.
                     * @param message UpdateAwsNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IUpdateAwsNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAwsNodePoolRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.UpdateAwsNodePoolRequest.verify|verify} messages.
                     * @param message UpdateAwsNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IUpdateAwsNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAwsNodePoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAwsNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.UpdateAwsNodePoolRequest;

                    /**
                     * Decodes an UpdateAwsNodePoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAwsNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.UpdateAwsNodePoolRequest;

                    /**
                     * Verifies an UpdateAwsNodePoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAwsNodePoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAwsNodePoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.UpdateAwsNodePoolRequest;

                    /**
                     * Creates a plain object from an UpdateAwsNodePoolRequest message. Also converts values to other types if specified.
                     * @param message UpdateAwsNodePoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.UpdateAwsNodePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAwsNodePoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateAwsNodePoolRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAwsNodePoolRequest. */
                interface IGetAwsNodePoolRequest {

                    /** GetAwsNodePoolRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAwsNodePoolRequest. */
                class GetAwsNodePoolRequest implements IGetAwsNodePoolRequest {

                    /**
                     * Constructs a new GetAwsNodePoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IGetAwsNodePoolRequest);

                    /** GetAwsNodePoolRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAwsNodePoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAwsNodePoolRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IGetAwsNodePoolRequest): google.cloud.gkemulticloud.v1.GetAwsNodePoolRequest;

                    /**
                     * Encodes the specified GetAwsNodePoolRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAwsNodePoolRequest.verify|verify} messages.
                     * @param message GetAwsNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IGetAwsNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAwsNodePoolRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAwsNodePoolRequest.verify|verify} messages.
                     * @param message GetAwsNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IGetAwsNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAwsNodePoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAwsNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.GetAwsNodePoolRequest;

                    /**
                     * Decodes a GetAwsNodePoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAwsNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.GetAwsNodePoolRequest;

                    /**
                     * Verifies a GetAwsNodePoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAwsNodePoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAwsNodePoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.GetAwsNodePoolRequest;

                    /**
                     * Creates a plain object from a GetAwsNodePoolRequest message. Also converts values to other types if specified.
                     * @param message GetAwsNodePoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.GetAwsNodePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAwsNodePoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAwsNodePoolRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAwsNodePoolsRequest. */
                interface IListAwsNodePoolsRequest {

                    /** ListAwsNodePoolsRequest parent */
                    parent?: (string|null);

                    /** ListAwsNodePoolsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAwsNodePoolsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAwsNodePoolsRequest. */
                class ListAwsNodePoolsRequest implements IListAwsNodePoolsRequest {

                    /**
                     * Constructs a new ListAwsNodePoolsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IListAwsNodePoolsRequest);

                    /** ListAwsNodePoolsRequest parent. */
                    public parent: string;

                    /** ListAwsNodePoolsRequest pageSize. */
                    public pageSize: number;

                    /** ListAwsNodePoolsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAwsNodePoolsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAwsNodePoolsRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IListAwsNodePoolsRequest): google.cloud.gkemulticloud.v1.ListAwsNodePoolsRequest;

                    /**
                     * Encodes the specified ListAwsNodePoolsRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAwsNodePoolsRequest.verify|verify} messages.
                     * @param message ListAwsNodePoolsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IListAwsNodePoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAwsNodePoolsRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAwsNodePoolsRequest.verify|verify} messages.
                     * @param message ListAwsNodePoolsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IListAwsNodePoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAwsNodePoolsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAwsNodePoolsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.ListAwsNodePoolsRequest;

                    /**
                     * Decodes a ListAwsNodePoolsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAwsNodePoolsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.ListAwsNodePoolsRequest;

                    /**
                     * Verifies a ListAwsNodePoolsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAwsNodePoolsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAwsNodePoolsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.ListAwsNodePoolsRequest;

                    /**
                     * Creates a plain object from a ListAwsNodePoolsRequest message. Also converts values to other types if specified.
                     * @param message ListAwsNodePoolsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.ListAwsNodePoolsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAwsNodePoolsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAwsNodePoolsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAwsNodePoolsResponse. */
                interface IListAwsNodePoolsResponse {

                    /** ListAwsNodePoolsResponse awsNodePools */
                    awsNodePools?: (google.cloud.gkemulticloud.v1.IAwsNodePool[]|null);

                    /** ListAwsNodePoolsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAwsNodePoolsResponse. */
                class ListAwsNodePoolsResponse implements IListAwsNodePoolsResponse {

                    /**
                     * Constructs a new ListAwsNodePoolsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IListAwsNodePoolsResponse);

                    /** ListAwsNodePoolsResponse awsNodePools. */
                    public awsNodePools: google.cloud.gkemulticloud.v1.IAwsNodePool[];

                    /** ListAwsNodePoolsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAwsNodePoolsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAwsNodePoolsResponse instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IListAwsNodePoolsResponse): google.cloud.gkemulticloud.v1.ListAwsNodePoolsResponse;

                    /**
                     * Encodes the specified ListAwsNodePoolsResponse message. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAwsNodePoolsResponse.verify|verify} messages.
                     * @param message ListAwsNodePoolsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IListAwsNodePoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAwsNodePoolsResponse message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAwsNodePoolsResponse.verify|verify} messages.
                     * @param message ListAwsNodePoolsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IListAwsNodePoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAwsNodePoolsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAwsNodePoolsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.ListAwsNodePoolsResponse;

                    /**
                     * Decodes a ListAwsNodePoolsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAwsNodePoolsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.ListAwsNodePoolsResponse;

                    /**
                     * Verifies a ListAwsNodePoolsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAwsNodePoolsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAwsNodePoolsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.ListAwsNodePoolsResponse;

                    /**
                     * Creates a plain object from a ListAwsNodePoolsResponse message. Also converts values to other types if specified.
                     * @param message ListAwsNodePoolsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.ListAwsNodePoolsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAwsNodePoolsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAwsNodePoolsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteAwsNodePoolRequest. */
                interface IDeleteAwsNodePoolRequest {

                    /** DeleteAwsNodePoolRequest name */
                    name?: (string|null);

                    /** DeleteAwsNodePoolRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteAwsNodePoolRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteAwsNodePoolRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteAwsNodePoolRequest. */
                class DeleteAwsNodePoolRequest implements IDeleteAwsNodePoolRequest {

                    /**
                     * Constructs a new DeleteAwsNodePoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IDeleteAwsNodePoolRequest);

                    /** DeleteAwsNodePoolRequest name. */
                    public name: string;

                    /** DeleteAwsNodePoolRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteAwsNodePoolRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteAwsNodePoolRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteAwsNodePoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAwsNodePoolRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IDeleteAwsNodePoolRequest): google.cloud.gkemulticloud.v1.DeleteAwsNodePoolRequest;

                    /**
                     * Encodes the specified DeleteAwsNodePoolRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.DeleteAwsNodePoolRequest.verify|verify} messages.
                     * @param message DeleteAwsNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IDeleteAwsNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAwsNodePoolRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.DeleteAwsNodePoolRequest.verify|verify} messages.
                     * @param message DeleteAwsNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IDeleteAwsNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAwsNodePoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAwsNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.DeleteAwsNodePoolRequest;

                    /**
                     * Decodes a DeleteAwsNodePoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAwsNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.DeleteAwsNodePoolRequest;

                    /**
                     * Verifies a DeleteAwsNodePoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAwsNodePoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAwsNodePoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.DeleteAwsNodePoolRequest;

                    /**
                     * Creates a plain object from a DeleteAwsNodePoolRequest message. Also converts values to other types if specified.
                     * @param message DeleteAwsNodePoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.DeleteAwsNodePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAwsNodePoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteAwsNodePoolRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAwsServerConfigRequest. */
                interface IGetAwsServerConfigRequest {

                    /** GetAwsServerConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAwsServerConfigRequest. */
                class GetAwsServerConfigRequest implements IGetAwsServerConfigRequest {

                    /**
                     * Constructs a new GetAwsServerConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IGetAwsServerConfigRequest);

                    /** GetAwsServerConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAwsServerConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAwsServerConfigRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IGetAwsServerConfigRequest): google.cloud.gkemulticloud.v1.GetAwsServerConfigRequest;

                    /**
                     * Encodes the specified GetAwsServerConfigRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAwsServerConfigRequest.verify|verify} messages.
                     * @param message GetAwsServerConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IGetAwsServerConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAwsServerConfigRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAwsServerConfigRequest.verify|verify} messages.
                     * @param message GetAwsServerConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IGetAwsServerConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAwsServerConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAwsServerConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.GetAwsServerConfigRequest;

                    /**
                     * Decodes a GetAwsServerConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAwsServerConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.GetAwsServerConfigRequest;

                    /**
                     * Verifies a GetAwsServerConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAwsServerConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAwsServerConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.GetAwsServerConfigRequest;

                    /**
                     * Creates a plain object from a GetAwsServerConfigRequest message. Also converts values to other types if specified.
                     * @param message GetAwsServerConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.GetAwsServerConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAwsServerConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAwsServerConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateAwsAccessTokenRequest. */
                interface IGenerateAwsAccessTokenRequest {

                    /** GenerateAwsAccessTokenRequest awsCluster */
                    awsCluster?: (string|null);
                }

                /** Represents a GenerateAwsAccessTokenRequest. */
                class GenerateAwsAccessTokenRequest implements IGenerateAwsAccessTokenRequest {

                    /**
                     * Constructs a new GenerateAwsAccessTokenRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IGenerateAwsAccessTokenRequest);

                    /** GenerateAwsAccessTokenRequest awsCluster. */
                    public awsCluster: string;

                    /**
                     * Creates a new GenerateAwsAccessTokenRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateAwsAccessTokenRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IGenerateAwsAccessTokenRequest): google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenRequest;

                    /**
                     * Encodes the specified GenerateAwsAccessTokenRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenRequest.verify|verify} messages.
                     * @param message GenerateAwsAccessTokenRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IGenerateAwsAccessTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateAwsAccessTokenRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenRequest.verify|verify} messages.
                     * @param message GenerateAwsAccessTokenRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IGenerateAwsAccessTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateAwsAccessTokenRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateAwsAccessTokenRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenRequest;

                    /**
                     * Decodes a GenerateAwsAccessTokenRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateAwsAccessTokenRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenRequest;

                    /**
                     * Verifies a GenerateAwsAccessTokenRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateAwsAccessTokenRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateAwsAccessTokenRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenRequest;

                    /**
                     * Creates a plain object from a GenerateAwsAccessTokenRequest message. Also converts values to other types if specified.
                     * @param message GenerateAwsAccessTokenRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateAwsAccessTokenRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateAwsAccessTokenRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateAwsAccessTokenResponse. */
                interface IGenerateAwsAccessTokenResponse {

                    /** GenerateAwsAccessTokenResponse accessToken */
                    accessToken?: (string|null);

                    /** GenerateAwsAccessTokenResponse expirationTime */
                    expirationTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a GenerateAwsAccessTokenResponse. */
                class GenerateAwsAccessTokenResponse implements IGenerateAwsAccessTokenResponse {

                    /**
                     * Constructs a new GenerateAwsAccessTokenResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IGenerateAwsAccessTokenResponse);

                    /** GenerateAwsAccessTokenResponse accessToken. */
                    public accessToken: string;

                    /** GenerateAwsAccessTokenResponse expirationTime. */
                    public expirationTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new GenerateAwsAccessTokenResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateAwsAccessTokenResponse instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IGenerateAwsAccessTokenResponse): google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenResponse;

                    /**
                     * Encodes the specified GenerateAwsAccessTokenResponse message. Does not implicitly {@link google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenResponse.verify|verify} messages.
                     * @param message GenerateAwsAccessTokenResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IGenerateAwsAccessTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateAwsAccessTokenResponse message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenResponse.verify|verify} messages.
                     * @param message GenerateAwsAccessTokenResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IGenerateAwsAccessTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateAwsAccessTokenResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateAwsAccessTokenResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenResponse;

                    /**
                     * Decodes a GenerateAwsAccessTokenResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateAwsAccessTokenResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenResponse;

                    /**
                     * Verifies a GenerateAwsAccessTokenResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateAwsAccessTokenResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateAwsAccessTokenResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenResponse;

                    /**
                     * Creates a plain object from a GenerateAwsAccessTokenResponse message. Also converts values to other types if specified.
                     * @param message GenerateAwsAccessTokenResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.GenerateAwsAccessTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateAwsAccessTokenResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateAwsAccessTokenResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureCluster. */
                interface IAzureCluster {

                    /** AzureCluster name */
                    name?: (string|null);

                    /** AzureCluster description */
                    description?: (string|null);

                    /** AzureCluster azureRegion */
                    azureRegion?: (string|null);

                    /** AzureCluster resourceGroupId */
                    resourceGroupId?: (string|null);

                    /** AzureCluster azureClient */
                    azureClient?: (string|null);

                    /** AzureCluster networking */
                    networking?: (google.cloud.gkemulticloud.v1.IAzureClusterNetworking|null);

                    /** AzureCluster controlPlane */
                    controlPlane?: (google.cloud.gkemulticloud.v1.IAzureControlPlane|null);

                    /** AzureCluster authorization */
                    authorization?: (google.cloud.gkemulticloud.v1.IAzureAuthorization|null);

                    /** AzureCluster state */
                    state?: (google.cloud.gkemulticloud.v1.AzureCluster.State|keyof typeof google.cloud.gkemulticloud.v1.AzureCluster.State|null);

                    /** AzureCluster endpoint */
                    endpoint?: (string|null);

                    /** AzureCluster uid */
                    uid?: (string|null);

                    /** AzureCluster reconciling */
                    reconciling?: (boolean|null);

                    /** AzureCluster createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** AzureCluster updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** AzureCluster etag */
                    etag?: (string|null);

                    /** AzureCluster annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** AzureCluster workloadIdentityConfig */
                    workloadIdentityConfig?: (google.cloud.gkemulticloud.v1.IWorkloadIdentityConfig|null);

                    /** AzureCluster clusterCaCertificate */
                    clusterCaCertificate?: (string|null);

                    /** AzureCluster fleet */
                    fleet?: (google.cloud.gkemulticloud.v1.IFleet|null);

                    /** AzureCluster managedResources */
                    managedResources?: (google.cloud.gkemulticloud.v1.IAzureClusterResources|null);

                    /** AzureCluster loggingConfig */
                    loggingConfig?: (google.cloud.gkemulticloud.v1.ILoggingConfig|null);
                }

                /** Represents an AzureCluster. */
                class AzureCluster implements IAzureCluster {

                    /**
                     * Constructs a new AzureCluster.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureCluster);

                    /** AzureCluster name. */
                    public name: string;

                    /** AzureCluster description. */
                    public description: string;

                    /** AzureCluster azureRegion. */
                    public azureRegion: string;

                    /** AzureCluster resourceGroupId. */
                    public resourceGroupId: string;

                    /** AzureCluster azureClient. */
                    public azureClient: string;

                    /** AzureCluster networking. */
                    public networking?: (google.cloud.gkemulticloud.v1.IAzureClusterNetworking|null);

                    /** AzureCluster controlPlane. */
                    public controlPlane?: (google.cloud.gkemulticloud.v1.IAzureControlPlane|null);

                    /** AzureCluster authorization. */
                    public authorization?: (google.cloud.gkemulticloud.v1.IAzureAuthorization|null);

                    /** AzureCluster state. */
                    public state: (google.cloud.gkemulticloud.v1.AzureCluster.State|keyof typeof google.cloud.gkemulticloud.v1.AzureCluster.State);

                    /** AzureCluster endpoint. */
                    public endpoint: string;

                    /** AzureCluster uid. */
                    public uid: string;

                    /** AzureCluster reconciling. */
                    public reconciling: boolean;

                    /** AzureCluster createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** AzureCluster updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** AzureCluster etag. */
                    public etag: string;

                    /** AzureCluster annotations. */
                    public annotations: { [k: string]: string };

                    /** AzureCluster workloadIdentityConfig. */
                    public workloadIdentityConfig?: (google.cloud.gkemulticloud.v1.IWorkloadIdentityConfig|null);

                    /** AzureCluster clusterCaCertificate. */
                    public clusterCaCertificate: string;

                    /** AzureCluster fleet. */
                    public fleet?: (google.cloud.gkemulticloud.v1.IFleet|null);

                    /** AzureCluster managedResources. */
                    public managedResources?: (google.cloud.gkemulticloud.v1.IAzureClusterResources|null);

                    /** AzureCluster loggingConfig. */
                    public loggingConfig?: (google.cloud.gkemulticloud.v1.ILoggingConfig|null);

                    /**
                     * Creates a new AzureCluster instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureCluster instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureCluster): google.cloud.gkemulticloud.v1.AzureCluster;

                    /**
                     * Encodes the specified AzureCluster message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureCluster.verify|verify} messages.
                     * @param message AzureCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureCluster message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureCluster.verify|verify} messages.
                     * @param message AzureCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureCluster message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureCluster;

                    /**
                     * Decodes an AzureCluster message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureCluster;

                    /**
                     * Verifies an AzureCluster message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureCluster message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureCluster
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureCluster;

                    /**
                     * Creates a plain object from an AzureCluster message. Also converts values to other types if specified.
                     * @param message AzureCluster
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureCluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureCluster to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureCluster
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AzureCluster {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PROVISIONING = 1,
                        RUNNING = 2,
                        RECONCILING = 3,
                        STOPPING = 4,
                        ERROR = 5,
                        DEGRADED = 6
                    }
                }

                /** Properties of an AzureClusterNetworking. */
                interface IAzureClusterNetworking {

                    /** AzureClusterNetworking virtualNetworkId */
                    virtualNetworkId?: (string|null);

                    /** AzureClusterNetworking podAddressCidrBlocks */
                    podAddressCidrBlocks?: (string[]|null);

                    /** AzureClusterNetworking serviceAddressCidrBlocks */
                    serviceAddressCidrBlocks?: (string[]|null);

                    /** AzureClusterNetworking serviceLoadBalancerSubnetId */
                    serviceLoadBalancerSubnetId?: (string|null);
                }

                /** Represents an AzureClusterNetworking. */
                class AzureClusterNetworking implements IAzureClusterNetworking {

                    /**
                     * Constructs a new AzureClusterNetworking.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureClusterNetworking);

                    /** AzureClusterNetworking virtualNetworkId. */
                    public virtualNetworkId: string;

                    /** AzureClusterNetworking podAddressCidrBlocks. */
                    public podAddressCidrBlocks: string[];

                    /** AzureClusterNetworking serviceAddressCidrBlocks. */
                    public serviceAddressCidrBlocks: string[];

                    /** AzureClusterNetworking serviceLoadBalancerSubnetId. */
                    public serviceLoadBalancerSubnetId: string;

                    /**
                     * Creates a new AzureClusterNetworking instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureClusterNetworking instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureClusterNetworking): google.cloud.gkemulticloud.v1.AzureClusterNetworking;

                    /**
                     * Encodes the specified AzureClusterNetworking message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureClusterNetworking.verify|verify} messages.
                     * @param message AzureClusterNetworking message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureClusterNetworking, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureClusterNetworking message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureClusterNetworking.verify|verify} messages.
                     * @param message AzureClusterNetworking message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureClusterNetworking, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureClusterNetworking message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureClusterNetworking
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureClusterNetworking;

                    /**
                     * Decodes an AzureClusterNetworking message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureClusterNetworking
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureClusterNetworking;

                    /**
                     * Verifies an AzureClusterNetworking message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureClusterNetworking message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureClusterNetworking
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureClusterNetworking;

                    /**
                     * Creates a plain object from an AzureClusterNetworking message. Also converts values to other types if specified.
                     * @param message AzureClusterNetworking
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureClusterNetworking, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureClusterNetworking to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureClusterNetworking
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureControlPlane. */
                interface IAzureControlPlane {

                    /** AzureControlPlane version */
                    version?: (string|null);

                    /** AzureControlPlane subnetId */
                    subnetId?: (string|null);

                    /** AzureControlPlane vmSize */
                    vmSize?: (string|null);

                    /** AzureControlPlane sshConfig */
                    sshConfig?: (google.cloud.gkemulticloud.v1.IAzureSshConfig|null);

                    /** AzureControlPlane rootVolume */
                    rootVolume?: (google.cloud.gkemulticloud.v1.IAzureDiskTemplate|null);

                    /** AzureControlPlane mainVolume */
                    mainVolume?: (google.cloud.gkemulticloud.v1.IAzureDiskTemplate|null);

                    /** AzureControlPlane databaseEncryption */
                    databaseEncryption?: (google.cloud.gkemulticloud.v1.IAzureDatabaseEncryption|null);

                    /** AzureControlPlane proxyConfig */
                    proxyConfig?: (google.cloud.gkemulticloud.v1.IAzureProxyConfig|null);

                    /** AzureControlPlane configEncryption */
                    configEncryption?: (google.cloud.gkemulticloud.v1.IAzureConfigEncryption|null);

                    /** AzureControlPlane tags */
                    tags?: ({ [k: string]: string }|null);

                    /** AzureControlPlane replicaPlacements */
                    replicaPlacements?: (google.cloud.gkemulticloud.v1.IReplicaPlacement[]|null);

                    /** AzureControlPlane endpointSubnetId */
                    endpointSubnetId?: (string|null);
                }

                /** Represents an AzureControlPlane. */
                class AzureControlPlane implements IAzureControlPlane {

                    /**
                     * Constructs a new AzureControlPlane.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureControlPlane);

                    /** AzureControlPlane version. */
                    public version: string;

                    /** AzureControlPlane subnetId. */
                    public subnetId: string;

                    /** AzureControlPlane vmSize. */
                    public vmSize: string;

                    /** AzureControlPlane sshConfig. */
                    public sshConfig?: (google.cloud.gkemulticloud.v1.IAzureSshConfig|null);

                    /** AzureControlPlane rootVolume. */
                    public rootVolume?: (google.cloud.gkemulticloud.v1.IAzureDiskTemplate|null);

                    /** AzureControlPlane mainVolume. */
                    public mainVolume?: (google.cloud.gkemulticloud.v1.IAzureDiskTemplate|null);

                    /** AzureControlPlane databaseEncryption. */
                    public databaseEncryption?: (google.cloud.gkemulticloud.v1.IAzureDatabaseEncryption|null);

                    /** AzureControlPlane proxyConfig. */
                    public proxyConfig?: (google.cloud.gkemulticloud.v1.IAzureProxyConfig|null);

                    /** AzureControlPlane configEncryption. */
                    public configEncryption?: (google.cloud.gkemulticloud.v1.IAzureConfigEncryption|null);

                    /** AzureControlPlane tags. */
                    public tags: { [k: string]: string };

                    /** AzureControlPlane replicaPlacements. */
                    public replicaPlacements: google.cloud.gkemulticloud.v1.IReplicaPlacement[];

                    /** AzureControlPlane endpointSubnetId. */
                    public endpointSubnetId: string;

                    /**
                     * Creates a new AzureControlPlane instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureControlPlane instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureControlPlane): google.cloud.gkemulticloud.v1.AzureControlPlane;

                    /**
                     * Encodes the specified AzureControlPlane message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureControlPlane.verify|verify} messages.
                     * @param message AzureControlPlane message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureControlPlane, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureControlPlane message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureControlPlane.verify|verify} messages.
                     * @param message AzureControlPlane message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureControlPlane, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureControlPlane message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureControlPlane
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureControlPlane;

                    /**
                     * Decodes an AzureControlPlane message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureControlPlane
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureControlPlane;

                    /**
                     * Verifies an AzureControlPlane message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureControlPlane message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureControlPlane
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureControlPlane;

                    /**
                     * Creates a plain object from an AzureControlPlane message. Also converts values to other types if specified.
                     * @param message AzureControlPlane
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureControlPlane, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureControlPlane to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureControlPlane
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReplicaPlacement. */
                interface IReplicaPlacement {

                    /** ReplicaPlacement subnetId */
                    subnetId?: (string|null);

                    /** ReplicaPlacement azureAvailabilityZone */
                    azureAvailabilityZone?: (string|null);
                }

                /** Represents a ReplicaPlacement. */
                class ReplicaPlacement implements IReplicaPlacement {

                    /**
                     * Constructs a new ReplicaPlacement.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IReplicaPlacement);

                    /** ReplicaPlacement subnetId. */
                    public subnetId: string;

                    /** ReplicaPlacement azureAvailabilityZone. */
                    public azureAvailabilityZone: string;

                    /**
                     * Creates a new ReplicaPlacement instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplicaPlacement instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IReplicaPlacement): google.cloud.gkemulticloud.v1.ReplicaPlacement;

                    /**
                     * Encodes the specified ReplicaPlacement message. Does not implicitly {@link google.cloud.gkemulticloud.v1.ReplicaPlacement.verify|verify} messages.
                     * @param message ReplicaPlacement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IReplicaPlacement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplicaPlacement message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.ReplicaPlacement.verify|verify} messages.
                     * @param message ReplicaPlacement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IReplicaPlacement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplicaPlacement message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplicaPlacement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.ReplicaPlacement;

                    /**
                     * Decodes a ReplicaPlacement message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplicaPlacement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.ReplicaPlacement;

                    /**
                     * Verifies a ReplicaPlacement message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplicaPlacement message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplicaPlacement
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.ReplicaPlacement;

                    /**
                     * Creates a plain object from a ReplicaPlacement message. Also converts values to other types if specified.
                     * @param message ReplicaPlacement
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.ReplicaPlacement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplicaPlacement to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReplicaPlacement
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureProxyConfig. */
                interface IAzureProxyConfig {

                    /** AzureProxyConfig resourceGroupId */
                    resourceGroupId?: (string|null);

                    /** AzureProxyConfig secretId */
                    secretId?: (string|null);
                }

                /** Represents an AzureProxyConfig. */
                class AzureProxyConfig implements IAzureProxyConfig {

                    /**
                     * Constructs a new AzureProxyConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureProxyConfig);

                    /** AzureProxyConfig resourceGroupId. */
                    public resourceGroupId: string;

                    /** AzureProxyConfig secretId. */
                    public secretId: string;

                    /**
                     * Creates a new AzureProxyConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureProxyConfig instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureProxyConfig): google.cloud.gkemulticloud.v1.AzureProxyConfig;

                    /**
                     * Encodes the specified AzureProxyConfig message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureProxyConfig.verify|verify} messages.
                     * @param message AzureProxyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureProxyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureProxyConfig message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureProxyConfig.verify|verify} messages.
                     * @param message AzureProxyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureProxyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureProxyConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureProxyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureProxyConfig;

                    /**
                     * Decodes an AzureProxyConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureProxyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureProxyConfig;

                    /**
                     * Verifies an AzureProxyConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureProxyConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureProxyConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureProxyConfig;

                    /**
                     * Creates a plain object from an AzureProxyConfig message. Also converts values to other types if specified.
                     * @param message AzureProxyConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureProxyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureProxyConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureProxyConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureDatabaseEncryption. */
                interface IAzureDatabaseEncryption {

                    /** AzureDatabaseEncryption keyId */
                    keyId?: (string|null);
                }

                /** Represents an AzureDatabaseEncryption. */
                class AzureDatabaseEncryption implements IAzureDatabaseEncryption {

                    /**
                     * Constructs a new AzureDatabaseEncryption.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureDatabaseEncryption);

                    /** AzureDatabaseEncryption keyId. */
                    public keyId: string;

                    /**
                     * Creates a new AzureDatabaseEncryption instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureDatabaseEncryption instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureDatabaseEncryption): google.cloud.gkemulticloud.v1.AzureDatabaseEncryption;

                    /**
                     * Encodes the specified AzureDatabaseEncryption message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureDatabaseEncryption.verify|verify} messages.
                     * @param message AzureDatabaseEncryption message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureDatabaseEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureDatabaseEncryption message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureDatabaseEncryption.verify|verify} messages.
                     * @param message AzureDatabaseEncryption message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureDatabaseEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureDatabaseEncryption message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureDatabaseEncryption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureDatabaseEncryption;

                    /**
                     * Decodes an AzureDatabaseEncryption message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureDatabaseEncryption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureDatabaseEncryption;

                    /**
                     * Verifies an AzureDatabaseEncryption message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureDatabaseEncryption message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureDatabaseEncryption
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureDatabaseEncryption;

                    /**
                     * Creates a plain object from an AzureDatabaseEncryption message. Also converts values to other types if specified.
                     * @param message AzureDatabaseEncryption
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureDatabaseEncryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureDatabaseEncryption to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureDatabaseEncryption
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureConfigEncryption. */
                interface IAzureConfigEncryption {

                    /** AzureConfigEncryption keyId */
                    keyId?: (string|null);

                    /** AzureConfigEncryption publicKey */
                    publicKey?: (string|null);
                }

                /** Represents an AzureConfigEncryption. */
                class AzureConfigEncryption implements IAzureConfigEncryption {

                    /**
                     * Constructs a new AzureConfigEncryption.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureConfigEncryption);

                    /** AzureConfigEncryption keyId. */
                    public keyId: string;

                    /** AzureConfigEncryption publicKey. */
                    public publicKey: string;

                    /**
                     * Creates a new AzureConfigEncryption instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureConfigEncryption instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureConfigEncryption): google.cloud.gkemulticloud.v1.AzureConfigEncryption;

                    /**
                     * Encodes the specified AzureConfigEncryption message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureConfigEncryption.verify|verify} messages.
                     * @param message AzureConfigEncryption message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureConfigEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureConfigEncryption message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureConfigEncryption.verify|verify} messages.
                     * @param message AzureConfigEncryption message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureConfigEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureConfigEncryption message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureConfigEncryption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureConfigEncryption;

                    /**
                     * Decodes an AzureConfigEncryption message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureConfigEncryption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureConfigEncryption;

                    /**
                     * Verifies an AzureConfigEncryption message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureConfigEncryption message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureConfigEncryption
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureConfigEncryption;

                    /**
                     * Creates a plain object from an AzureConfigEncryption message. Also converts values to other types if specified.
                     * @param message AzureConfigEncryption
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureConfigEncryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureConfigEncryption to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureConfigEncryption
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureDiskTemplate. */
                interface IAzureDiskTemplate {

                    /** AzureDiskTemplate sizeGib */
                    sizeGib?: (number|null);
                }

                /** Represents an AzureDiskTemplate. */
                class AzureDiskTemplate implements IAzureDiskTemplate {

                    /**
                     * Constructs a new AzureDiskTemplate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureDiskTemplate);

                    /** AzureDiskTemplate sizeGib. */
                    public sizeGib: number;

                    /**
                     * Creates a new AzureDiskTemplate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureDiskTemplate instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureDiskTemplate): google.cloud.gkemulticloud.v1.AzureDiskTemplate;

                    /**
                     * Encodes the specified AzureDiskTemplate message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureDiskTemplate.verify|verify} messages.
                     * @param message AzureDiskTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureDiskTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureDiskTemplate message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureDiskTemplate.verify|verify} messages.
                     * @param message AzureDiskTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureDiskTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureDiskTemplate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureDiskTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureDiskTemplate;

                    /**
                     * Decodes an AzureDiskTemplate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureDiskTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureDiskTemplate;

                    /**
                     * Verifies an AzureDiskTemplate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureDiskTemplate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureDiskTemplate
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureDiskTemplate;

                    /**
                     * Creates a plain object from an AzureDiskTemplate message. Also converts values to other types if specified.
                     * @param message AzureDiskTemplate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureDiskTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureDiskTemplate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureDiskTemplate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureClient. */
                interface IAzureClient {

                    /** AzureClient name */
                    name?: (string|null);

                    /** AzureClient tenantId */
                    tenantId?: (string|null);

                    /** AzureClient applicationId */
                    applicationId?: (string|null);

                    /** AzureClient annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** AzureClient pemCertificate */
                    pemCertificate?: (string|null);

                    /** AzureClient uid */
                    uid?: (string|null);

                    /** AzureClient createTime */
                    createTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an AzureClient. */
                class AzureClient implements IAzureClient {

                    /**
                     * Constructs a new AzureClient.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureClient);

                    /** AzureClient name. */
                    public name: string;

                    /** AzureClient tenantId. */
                    public tenantId: string;

                    /** AzureClient applicationId. */
                    public applicationId: string;

                    /** AzureClient annotations. */
                    public annotations: { [k: string]: string };

                    /** AzureClient pemCertificate. */
                    public pemCertificate: string;

                    /** AzureClient uid. */
                    public uid: string;

                    /** AzureClient createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new AzureClient instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureClient instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureClient): google.cloud.gkemulticloud.v1.AzureClient;

                    /**
                     * Encodes the specified AzureClient message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureClient.verify|verify} messages.
                     * @param message AzureClient message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureClient, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureClient message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureClient.verify|verify} messages.
                     * @param message AzureClient message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureClient, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureClient message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureClient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureClient;

                    /**
                     * Decodes an AzureClient message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureClient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureClient;

                    /**
                     * Verifies an AzureClient message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureClient message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureClient
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureClient;

                    /**
                     * Creates a plain object from an AzureClient message. Also converts values to other types if specified.
                     * @param message AzureClient
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureClient to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureClient
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureAuthorization. */
                interface IAzureAuthorization {

                    /** AzureAuthorization adminUsers */
                    adminUsers?: (google.cloud.gkemulticloud.v1.IAzureClusterUser[]|null);
                }

                /** Represents an AzureAuthorization. */
                class AzureAuthorization implements IAzureAuthorization {

                    /**
                     * Constructs a new AzureAuthorization.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureAuthorization);

                    /** AzureAuthorization adminUsers. */
                    public adminUsers: google.cloud.gkemulticloud.v1.IAzureClusterUser[];

                    /**
                     * Creates a new AzureAuthorization instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureAuthorization instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureAuthorization): google.cloud.gkemulticloud.v1.AzureAuthorization;

                    /**
                     * Encodes the specified AzureAuthorization message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureAuthorization.verify|verify} messages.
                     * @param message AzureAuthorization message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureAuthorization message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureAuthorization.verify|verify} messages.
                     * @param message AzureAuthorization message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureAuthorization message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureAuthorization
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureAuthorization;

                    /**
                     * Decodes an AzureAuthorization message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureAuthorization
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureAuthorization;

                    /**
                     * Verifies an AzureAuthorization message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureAuthorization message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureAuthorization
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureAuthorization;

                    /**
                     * Creates a plain object from an AzureAuthorization message. Also converts values to other types if specified.
                     * @param message AzureAuthorization
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureAuthorization, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureAuthorization to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureAuthorization
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureClusterUser. */
                interface IAzureClusterUser {

                    /** AzureClusterUser username */
                    username?: (string|null);
                }

                /** Represents an AzureClusterUser. */
                class AzureClusterUser implements IAzureClusterUser {

                    /**
                     * Constructs a new AzureClusterUser.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureClusterUser);

                    /** AzureClusterUser username. */
                    public username: string;

                    /**
                     * Creates a new AzureClusterUser instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureClusterUser instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureClusterUser): google.cloud.gkemulticloud.v1.AzureClusterUser;

                    /**
                     * Encodes the specified AzureClusterUser message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureClusterUser.verify|verify} messages.
                     * @param message AzureClusterUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureClusterUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureClusterUser message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureClusterUser.verify|verify} messages.
                     * @param message AzureClusterUser message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureClusterUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureClusterUser message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureClusterUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureClusterUser;

                    /**
                     * Decodes an AzureClusterUser message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureClusterUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureClusterUser;

                    /**
                     * Verifies an AzureClusterUser message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureClusterUser message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureClusterUser
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureClusterUser;

                    /**
                     * Creates a plain object from an AzureClusterUser message. Also converts values to other types if specified.
                     * @param message AzureClusterUser
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureClusterUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureClusterUser to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureClusterUser
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureNodePool. */
                interface IAzureNodePool {

                    /** AzureNodePool name */
                    name?: (string|null);

                    /** AzureNodePool version */
                    version?: (string|null);

                    /** AzureNodePool config */
                    config?: (google.cloud.gkemulticloud.v1.IAzureNodeConfig|null);

                    /** AzureNodePool subnetId */
                    subnetId?: (string|null);

                    /** AzureNodePool autoscaling */
                    autoscaling?: (google.cloud.gkemulticloud.v1.IAzureNodePoolAutoscaling|null);

                    /** AzureNodePool state */
                    state?: (google.cloud.gkemulticloud.v1.AzureNodePool.State|keyof typeof google.cloud.gkemulticloud.v1.AzureNodePool.State|null);

                    /** AzureNodePool uid */
                    uid?: (string|null);

                    /** AzureNodePool reconciling */
                    reconciling?: (boolean|null);

                    /** AzureNodePool createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** AzureNodePool updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** AzureNodePool etag */
                    etag?: (string|null);

                    /** AzureNodePool annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** AzureNodePool maxPodsConstraint */
                    maxPodsConstraint?: (google.cloud.gkemulticloud.v1.IMaxPodsConstraint|null);

                    /** AzureNodePool azureAvailabilityZone */
                    azureAvailabilityZone?: (string|null);
                }

                /** Represents an AzureNodePool. */
                class AzureNodePool implements IAzureNodePool {

                    /**
                     * Constructs a new AzureNodePool.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureNodePool);

                    /** AzureNodePool name. */
                    public name: string;

                    /** AzureNodePool version. */
                    public version: string;

                    /** AzureNodePool config. */
                    public config?: (google.cloud.gkemulticloud.v1.IAzureNodeConfig|null);

                    /** AzureNodePool subnetId. */
                    public subnetId: string;

                    /** AzureNodePool autoscaling. */
                    public autoscaling?: (google.cloud.gkemulticloud.v1.IAzureNodePoolAutoscaling|null);

                    /** AzureNodePool state. */
                    public state: (google.cloud.gkemulticloud.v1.AzureNodePool.State|keyof typeof google.cloud.gkemulticloud.v1.AzureNodePool.State);

                    /** AzureNodePool uid. */
                    public uid: string;

                    /** AzureNodePool reconciling. */
                    public reconciling: boolean;

                    /** AzureNodePool createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** AzureNodePool updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** AzureNodePool etag. */
                    public etag: string;

                    /** AzureNodePool annotations. */
                    public annotations: { [k: string]: string };

                    /** AzureNodePool maxPodsConstraint. */
                    public maxPodsConstraint?: (google.cloud.gkemulticloud.v1.IMaxPodsConstraint|null);

                    /** AzureNodePool azureAvailabilityZone. */
                    public azureAvailabilityZone: string;

                    /**
                     * Creates a new AzureNodePool instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureNodePool instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureNodePool): google.cloud.gkemulticloud.v1.AzureNodePool;

                    /**
                     * Encodes the specified AzureNodePool message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureNodePool.verify|verify} messages.
                     * @param message AzureNodePool message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureNodePool, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureNodePool message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureNodePool.verify|verify} messages.
                     * @param message AzureNodePool message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureNodePool, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureNodePool message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureNodePool
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureNodePool;

                    /**
                     * Decodes an AzureNodePool message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureNodePool
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureNodePool;

                    /**
                     * Verifies an AzureNodePool message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureNodePool message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureNodePool
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureNodePool;

                    /**
                     * Creates a plain object from an AzureNodePool message. Also converts values to other types if specified.
                     * @param message AzureNodePool
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureNodePool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureNodePool to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureNodePool
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AzureNodePool {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PROVISIONING = 1,
                        RUNNING = 2,
                        RECONCILING = 3,
                        STOPPING = 4,
                        ERROR = 5,
                        DEGRADED = 6
                    }
                }

                /** Properties of an AzureNodeConfig. */
                interface IAzureNodeConfig {

                    /** AzureNodeConfig vmSize */
                    vmSize?: (string|null);

                    /** AzureNodeConfig rootVolume */
                    rootVolume?: (google.cloud.gkemulticloud.v1.IAzureDiskTemplate|null);

                    /** AzureNodeConfig tags */
                    tags?: ({ [k: string]: string }|null);

                    /** AzureNodeConfig imageType */
                    imageType?: (string|null);

                    /** AzureNodeConfig sshConfig */
                    sshConfig?: (google.cloud.gkemulticloud.v1.IAzureSshConfig|null);

                    /** AzureNodeConfig proxyConfig */
                    proxyConfig?: (google.cloud.gkemulticloud.v1.IAzureProxyConfig|null);

                    /** AzureNodeConfig configEncryption */
                    configEncryption?: (google.cloud.gkemulticloud.v1.IAzureConfigEncryption|null);

                    /** AzureNodeConfig taints */
                    taints?: (google.cloud.gkemulticloud.v1.INodeTaint[]|null);

                    /** AzureNodeConfig labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents an AzureNodeConfig. */
                class AzureNodeConfig implements IAzureNodeConfig {

                    /**
                     * Constructs a new AzureNodeConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureNodeConfig);

                    /** AzureNodeConfig vmSize. */
                    public vmSize: string;

                    /** AzureNodeConfig rootVolume. */
                    public rootVolume?: (google.cloud.gkemulticloud.v1.IAzureDiskTemplate|null);

                    /** AzureNodeConfig tags. */
                    public tags: { [k: string]: string };

                    /** AzureNodeConfig imageType. */
                    public imageType: string;

                    /** AzureNodeConfig sshConfig. */
                    public sshConfig?: (google.cloud.gkemulticloud.v1.IAzureSshConfig|null);

                    /** AzureNodeConfig proxyConfig. */
                    public proxyConfig?: (google.cloud.gkemulticloud.v1.IAzureProxyConfig|null);

                    /** AzureNodeConfig configEncryption. */
                    public configEncryption?: (google.cloud.gkemulticloud.v1.IAzureConfigEncryption|null);

                    /** AzureNodeConfig taints. */
                    public taints: google.cloud.gkemulticloud.v1.INodeTaint[];

                    /** AzureNodeConfig labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new AzureNodeConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureNodeConfig instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureNodeConfig): google.cloud.gkemulticloud.v1.AzureNodeConfig;

                    /**
                     * Encodes the specified AzureNodeConfig message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureNodeConfig.verify|verify} messages.
                     * @param message AzureNodeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureNodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureNodeConfig message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureNodeConfig.verify|verify} messages.
                     * @param message AzureNodeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureNodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureNodeConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureNodeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureNodeConfig;

                    /**
                     * Decodes an AzureNodeConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureNodeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureNodeConfig;

                    /**
                     * Verifies an AzureNodeConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureNodeConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureNodeConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureNodeConfig;

                    /**
                     * Creates a plain object from an AzureNodeConfig message. Also converts values to other types if specified.
                     * @param message AzureNodeConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureNodeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureNodeConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureNodeConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureNodePoolAutoscaling. */
                interface IAzureNodePoolAutoscaling {

                    /** AzureNodePoolAutoscaling minNodeCount */
                    minNodeCount?: (number|null);

                    /** AzureNodePoolAutoscaling maxNodeCount */
                    maxNodeCount?: (number|null);
                }

                /** Represents an AzureNodePoolAutoscaling. */
                class AzureNodePoolAutoscaling implements IAzureNodePoolAutoscaling {

                    /**
                     * Constructs a new AzureNodePoolAutoscaling.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureNodePoolAutoscaling);

                    /** AzureNodePoolAutoscaling minNodeCount. */
                    public minNodeCount: number;

                    /** AzureNodePoolAutoscaling maxNodeCount. */
                    public maxNodeCount: number;

                    /**
                     * Creates a new AzureNodePoolAutoscaling instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureNodePoolAutoscaling instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureNodePoolAutoscaling): google.cloud.gkemulticloud.v1.AzureNodePoolAutoscaling;

                    /**
                     * Encodes the specified AzureNodePoolAutoscaling message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureNodePoolAutoscaling.verify|verify} messages.
                     * @param message AzureNodePoolAutoscaling message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureNodePoolAutoscaling, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureNodePoolAutoscaling message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureNodePoolAutoscaling.verify|verify} messages.
                     * @param message AzureNodePoolAutoscaling message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureNodePoolAutoscaling, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureNodePoolAutoscaling message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureNodePoolAutoscaling
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureNodePoolAutoscaling;

                    /**
                     * Decodes an AzureNodePoolAutoscaling message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureNodePoolAutoscaling
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureNodePoolAutoscaling;

                    /**
                     * Verifies an AzureNodePoolAutoscaling message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureNodePoolAutoscaling message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureNodePoolAutoscaling
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureNodePoolAutoscaling;

                    /**
                     * Creates a plain object from an AzureNodePoolAutoscaling message. Also converts values to other types if specified.
                     * @param message AzureNodePoolAutoscaling
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureNodePoolAutoscaling, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureNodePoolAutoscaling to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureNodePoolAutoscaling
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureServerConfig. */
                interface IAzureServerConfig {

                    /** AzureServerConfig name */
                    name?: (string|null);

                    /** AzureServerConfig validVersions */
                    validVersions?: (google.cloud.gkemulticloud.v1.IAzureK8sVersionInfo[]|null);

                    /** AzureServerConfig supportedAzureRegions */
                    supportedAzureRegions?: (string[]|null);
                }

                /** Represents an AzureServerConfig. */
                class AzureServerConfig implements IAzureServerConfig {

                    /**
                     * Constructs a new AzureServerConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureServerConfig);

                    /** AzureServerConfig name. */
                    public name: string;

                    /** AzureServerConfig validVersions. */
                    public validVersions: google.cloud.gkemulticloud.v1.IAzureK8sVersionInfo[];

                    /** AzureServerConfig supportedAzureRegions. */
                    public supportedAzureRegions: string[];

                    /**
                     * Creates a new AzureServerConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureServerConfig instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureServerConfig): google.cloud.gkemulticloud.v1.AzureServerConfig;

                    /**
                     * Encodes the specified AzureServerConfig message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureServerConfig.verify|verify} messages.
                     * @param message AzureServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureServerConfig message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureServerConfig.verify|verify} messages.
                     * @param message AzureServerConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureServerConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureServerConfig;

                    /**
                     * Decodes an AzureServerConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureServerConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureServerConfig;

                    /**
                     * Verifies an AzureServerConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureServerConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureServerConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureServerConfig;

                    /**
                     * Creates a plain object from an AzureServerConfig message. Also converts values to other types if specified.
                     * @param message AzureServerConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureServerConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureServerConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureK8sVersionInfo. */
                interface IAzureK8sVersionInfo {

                    /** AzureK8sVersionInfo version */
                    version?: (string|null);
                }

                /** Represents an AzureK8sVersionInfo. */
                class AzureK8sVersionInfo implements IAzureK8sVersionInfo {

                    /**
                     * Constructs a new AzureK8sVersionInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureK8sVersionInfo);

                    /** AzureK8sVersionInfo version. */
                    public version: string;

                    /**
                     * Creates a new AzureK8sVersionInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureK8sVersionInfo instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureK8sVersionInfo): google.cloud.gkemulticloud.v1.AzureK8sVersionInfo;

                    /**
                     * Encodes the specified AzureK8sVersionInfo message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureK8sVersionInfo.verify|verify} messages.
                     * @param message AzureK8sVersionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureK8sVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureK8sVersionInfo message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureK8sVersionInfo.verify|verify} messages.
                     * @param message AzureK8sVersionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureK8sVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureK8sVersionInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureK8sVersionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureK8sVersionInfo;

                    /**
                     * Decodes an AzureK8sVersionInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureK8sVersionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureK8sVersionInfo;

                    /**
                     * Verifies an AzureK8sVersionInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureK8sVersionInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureK8sVersionInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureK8sVersionInfo;

                    /**
                     * Creates a plain object from an AzureK8sVersionInfo message. Also converts values to other types if specified.
                     * @param message AzureK8sVersionInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureK8sVersionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureK8sVersionInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureK8sVersionInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureSshConfig. */
                interface IAzureSshConfig {

                    /** AzureSshConfig authorizedKey */
                    authorizedKey?: (string|null);
                }

                /** Represents an AzureSshConfig. */
                class AzureSshConfig implements IAzureSshConfig {

                    /**
                     * Constructs a new AzureSshConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureSshConfig);

                    /** AzureSshConfig authorizedKey. */
                    public authorizedKey: string;

                    /**
                     * Creates a new AzureSshConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureSshConfig instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureSshConfig): google.cloud.gkemulticloud.v1.AzureSshConfig;

                    /**
                     * Encodes the specified AzureSshConfig message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureSshConfig.verify|verify} messages.
                     * @param message AzureSshConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureSshConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureSshConfig message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureSshConfig.verify|verify} messages.
                     * @param message AzureSshConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureSshConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureSshConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureSshConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureSshConfig;

                    /**
                     * Decodes an AzureSshConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureSshConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureSshConfig;

                    /**
                     * Verifies an AzureSshConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureSshConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureSshConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureSshConfig;

                    /**
                     * Creates a plain object from an AzureSshConfig message. Also converts values to other types if specified.
                     * @param message AzureSshConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureSshConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureSshConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureSshConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AzureClusterResources. */
                interface IAzureClusterResources {

                    /** AzureClusterResources networkSecurityGroupId */
                    networkSecurityGroupId?: (string|null);

                    /** AzureClusterResources controlPlaneApplicationSecurityGroupId */
                    controlPlaneApplicationSecurityGroupId?: (string|null);
                }

                /** Represents an AzureClusterResources. */
                class AzureClusterResources implements IAzureClusterResources {

                    /**
                     * Constructs a new AzureClusterResources.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IAzureClusterResources);

                    /** AzureClusterResources networkSecurityGroupId. */
                    public networkSecurityGroupId: string;

                    /** AzureClusterResources controlPlaneApplicationSecurityGroupId. */
                    public controlPlaneApplicationSecurityGroupId: string;

                    /**
                     * Creates a new AzureClusterResources instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AzureClusterResources instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IAzureClusterResources): google.cloud.gkemulticloud.v1.AzureClusterResources;

                    /**
                     * Encodes the specified AzureClusterResources message. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureClusterResources.verify|verify} messages.
                     * @param message AzureClusterResources message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IAzureClusterResources, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AzureClusterResources message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.AzureClusterResources.verify|verify} messages.
                     * @param message AzureClusterResources message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IAzureClusterResources, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AzureClusterResources message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AzureClusterResources
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.AzureClusterResources;

                    /**
                     * Decodes an AzureClusterResources message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AzureClusterResources
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.AzureClusterResources;

                    /**
                     * Verifies an AzureClusterResources message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AzureClusterResources message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AzureClusterResources
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.AzureClusterResources;

                    /**
                     * Creates a plain object from an AzureClusterResources message. Also converts values to other types if specified.
                     * @param message AzureClusterResources
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.AzureClusterResources, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AzureClusterResources to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AzureClusterResources
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents an AzureClusters */
                class AzureClusters extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AzureClusters service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AzureClusters service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AzureClusters;

                    /**
                     * Calls CreateAzureClient.
                     * @param request CreateAzureClientRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAzureClient(request: google.cloud.gkemulticloud.v1.ICreateAzureClientRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.CreateAzureClientCallback): void;

                    /**
                     * Calls CreateAzureClient.
                     * @param request CreateAzureClientRequest message or plain object
                     * @returns Promise
                     */
                    public createAzureClient(request: google.cloud.gkemulticloud.v1.ICreateAzureClientRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetAzureClient.
                     * @param request GetAzureClientRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AzureClient
                     */
                    public getAzureClient(request: google.cloud.gkemulticloud.v1.IGetAzureClientRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.GetAzureClientCallback): void;

                    /**
                     * Calls GetAzureClient.
                     * @param request GetAzureClientRequest message or plain object
                     * @returns Promise
                     */
                    public getAzureClient(request: google.cloud.gkemulticloud.v1.IGetAzureClientRequest): Promise<google.cloud.gkemulticloud.v1.AzureClient>;

                    /**
                     * Calls ListAzureClients.
                     * @param request ListAzureClientsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAzureClientsResponse
                     */
                    public listAzureClients(request: google.cloud.gkemulticloud.v1.IListAzureClientsRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.ListAzureClientsCallback): void;

                    /**
                     * Calls ListAzureClients.
                     * @param request ListAzureClientsRequest message or plain object
                     * @returns Promise
                     */
                    public listAzureClients(request: google.cloud.gkemulticloud.v1.IListAzureClientsRequest): Promise<google.cloud.gkemulticloud.v1.ListAzureClientsResponse>;

                    /**
                     * Calls DeleteAzureClient.
                     * @param request DeleteAzureClientRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAzureClient(request: google.cloud.gkemulticloud.v1.IDeleteAzureClientRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.DeleteAzureClientCallback): void;

                    /**
                     * Calls DeleteAzureClient.
                     * @param request DeleteAzureClientRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAzureClient(request: google.cloud.gkemulticloud.v1.IDeleteAzureClientRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateAzureCluster.
                     * @param request CreateAzureClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAzureCluster(request: google.cloud.gkemulticloud.v1.ICreateAzureClusterRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.CreateAzureClusterCallback): void;

                    /**
                     * Calls CreateAzureCluster.
                     * @param request CreateAzureClusterRequest message or plain object
                     * @returns Promise
                     */
                    public createAzureCluster(request: google.cloud.gkemulticloud.v1.ICreateAzureClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateAzureCluster.
                     * @param request UpdateAzureClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateAzureCluster(request: google.cloud.gkemulticloud.v1.IUpdateAzureClusterRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.UpdateAzureClusterCallback): void;

                    /**
                     * Calls UpdateAzureCluster.
                     * @param request UpdateAzureClusterRequest message or plain object
                     * @returns Promise
                     */
                    public updateAzureCluster(request: google.cloud.gkemulticloud.v1.IUpdateAzureClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetAzureCluster.
                     * @param request GetAzureClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AzureCluster
                     */
                    public getAzureCluster(request: google.cloud.gkemulticloud.v1.IGetAzureClusterRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.GetAzureClusterCallback): void;

                    /**
                     * Calls GetAzureCluster.
                     * @param request GetAzureClusterRequest message or plain object
                     * @returns Promise
                     */
                    public getAzureCluster(request: google.cloud.gkemulticloud.v1.IGetAzureClusterRequest): Promise<google.cloud.gkemulticloud.v1.AzureCluster>;

                    /**
                     * Calls ListAzureClusters.
                     * @param request ListAzureClustersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAzureClustersResponse
                     */
                    public listAzureClusters(request: google.cloud.gkemulticloud.v1.IListAzureClustersRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.ListAzureClustersCallback): void;

                    /**
                     * Calls ListAzureClusters.
                     * @param request ListAzureClustersRequest message or plain object
                     * @returns Promise
                     */
                    public listAzureClusters(request: google.cloud.gkemulticloud.v1.IListAzureClustersRequest): Promise<google.cloud.gkemulticloud.v1.ListAzureClustersResponse>;

                    /**
                     * Calls DeleteAzureCluster.
                     * @param request DeleteAzureClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAzureCluster(request: google.cloud.gkemulticloud.v1.IDeleteAzureClusterRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.DeleteAzureClusterCallback): void;

                    /**
                     * Calls DeleteAzureCluster.
                     * @param request DeleteAzureClusterRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAzureCluster(request: google.cloud.gkemulticloud.v1.IDeleteAzureClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GenerateAzureAccessToken.
                     * @param request GenerateAzureAccessTokenRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateAzureAccessTokenResponse
                     */
                    public generateAzureAccessToken(request: google.cloud.gkemulticloud.v1.IGenerateAzureAccessTokenRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.GenerateAzureAccessTokenCallback): void;

                    /**
                     * Calls GenerateAzureAccessToken.
                     * @param request GenerateAzureAccessTokenRequest message or plain object
                     * @returns Promise
                     */
                    public generateAzureAccessToken(request: google.cloud.gkemulticloud.v1.IGenerateAzureAccessTokenRequest): Promise<google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenResponse>;

                    /**
                     * Calls CreateAzureNodePool.
                     * @param request CreateAzureNodePoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAzureNodePool(request: google.cloud.gkemulticloud.v1.ICreateAzureNodePoolRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.CreateAzureNodePoolCallback): void;

                    /**
                     * Calls CreateAzureNodePool.
                     * @param request CreateAzureNodePoolRequest message or plain object
                     * @returns Promise
                     */
                    public createAzureNodePool(request: google.cloud.gkemulticloud.v1.ICreateAzureNodePoolRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateAzureNodePool.
                     * @param request UpdateAzureNodePoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateAzureNodePool(request: google.cloud.gkemulticloud.v1.IUpdateAzureNodePoolRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.UpdateAzureNodePoolCallback): void;

                    /**
                     * Calls UpdateAzureNodePool.
                     * @param request UpdateAzureNodePoolRequest message or plain object
                     * @returns Promise
                     */
                    public updateAzureNodePool(request: google.cloud.gkemulticloud.v1.IUpdateAzureNodePoolRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetAzureNodePool.
                     * @param request GetAzureNodePoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AzureNodePool
                     */
                    public getAzureNodePool(request: google.cloud.gkemulticloud.v1.IGetAzureNodePoolRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.GetAzureNodePoolCallback): void;

                    /**
                     * Calls GetAzureNodePool.
                     * @param request GetAzureNodePoolRequest message or plain object
                     * @returns Promise
                     */
                    public getAzureNodePool(request: google.cloud.gkemulticloud.v1.IGetAzureNodePoolRequest): Promise<google.cloud.gkemulticloud.v1.AzureNodePool>;

                    /**
                     * Calls ListAzureNodePools.
                     * @param request ListAzureNodePoolsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAzureNodePoolsResponse
                     */
                    public listAzureNodePools(request: google.cloud.gkemulticloud.v1.IListAzureNodePoolsRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.ListAzureNodePoolsCallback): void;

                    /**
                     * Calls ListAzureNodePools.
                     * @param request ListAzureNodePoolsRequest message or plain object
                     * @returns Promise
                     */
                    public listAzureNodePools(request: google.cloud.gkemulticloud.v1.IListAzureNodePoolsRequest): Promise<google.cloud.gkemulticloud.v1.ListAzureNodePoolsResponse>;

                    /**
                     * Calls DeleteAzureNodePool.
                     * @param request DeleteAzureNodePoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAzureNodePool(request: google.cloud.gkemulticloud.v1.IDeleteAzureNodePoolRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.DeleteAzureNodePoolCallback): void;

                    /**
                     * Calls DeleteAzureNodePool.
                     * @param request DeleteAzureNodePoolRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAzureNodePool(request: google.cloud.gkemulticloud.v1.IDeleteAzureNodePoolRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetAzureServerConfig.
                     * @param request GetAzureServerConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AzureServerConfig
                     */
                    public getAzureServerConfig(request: google.cloud.gkemulticloud.v1.IGetAzureServerConfigRequest, callback: google.cloud.gkemulticloud.v1.AzureClusters.GetAzureServerConfigCallback): void;

                    /**
                     * Calls GetAzureServerConfig.
                     * @param request GetAzureServerConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getAzureServerConfig(request: google.cloud.gkemulticloud.v1.IGetAzureServerConfigRequest): Promise<google.cloud.gkemulticloud.v1.AzureServerConfig>;
                }

                namespace AzureClusters {

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|createAzureClient}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAzureClientCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|getAzureClient}.
                     * @param error Error, if any
                     * @param [response] AzureClient
                     */
                    type GetAzureClientCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.AzureClient) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|listAzureClients}.
                     * @param error Error, if any
                     * @param [response] ListAzureClientsResponse
                     */
                    type ListAzureClientsCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.ListAzureClientsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|deleteAzureClient}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAzureClientCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|createAzureCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAzureClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|updateAzureCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateAzureClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|getAzureCluster}.
                     * @param error Error, if any
                     * @param [response] AzureCluster
                     */
                    type GetAzureClusterCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.AzureCluster) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|listAzureClusters}.
                     * @param error Error, if any
                     * @param [response] ListAzureClustersResponse
                     */
                    type ListAzureClustersCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.ListAzureClustersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|deleteAzureCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAzureClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|generateAzureAccessToken}.
                     * @param error Error, if any
                     * @param [response] GenerateAzureAccessTokenResponse
                     */
                    type GenerateAzureAccessTokenCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|createAzureNodePool}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAzureNodePoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|updateAzureNodePool}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateAzureNodePoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|getAzureNodePool}.
                     * @param error Error, if any
                     * @param [response] AzureNodePool
                     */
                    type GetAzureNodePoolCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.AzureNodePool) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|listAzureNodePools}.
                     * @param error Error, if any
                     * @param [response] ListAzureNodePoolsResponse
                     */
                    type ListAzureNodePoolsCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.ListAzureNodePoolsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|deleteAzureNodePool}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAzureNodePoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkemulticloud.v1.AzureClusters|getAzureServerConfig}.
                     * @param error Error, if any
                     * @param [response] AzureServerConfig
                     */
                    type GetAzureServerConfigCallback = (error: (Error|null), response?: google.cloud.gkemulticloud.v1.AzureServerConfig) => void;
                }

                /** Properties of a CreateAzureClusterRequest. */
                interface ICreateAzureClusterRequest {

                    /** CreateAzureClusterRequest parent */
                    parent?: (string|null);

                    /** CreateAzureClusterRequest azureCluster */
                    azureCluster?: (google.cloud.gkemulticloud.v1.IAzureCluster|null);

                    /** CreateAzureClusterRequest azureClusterId */
                    azureClusterId?: (string|null);

                    /** CreateAzureClusterRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateAzureClusterRequest. */
                class CreateAzureClusterRequest implements ICreateAzureClusterRequest {

                    /**
                     * Constructs a new CreateAzureClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.ICreateAzureClusterRequest);

                    /** CreateAzureClusterRequest parent. */
                    public parent: string;

                    /** CreateAzureClusterRequest azureCluster. */
                    public azureCluster?: (google.cloud.gkemulticloud.v1.IAzureCluster|null);

                    /** CreateAzureClusterRequest azureClusterId. */
                    public azureClusterId: string;

                    /** CreateAzureClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateAzureClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAzureClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.ICreateAzureClusterRequest): google.cloud.gkemulticloud.v1.CreateAzureClusterRequest;

                    /**
                     * Encodes the specified CreateAzureClusterRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.CreateAzureClusterRequest.verify|verify} messages.
                     * @param message CreateAzureClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.ICreateAzureClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAzureClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.CreateAzureClusterRequest.verify|verify} messages.
                     * @param message CreateAzureClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.ICreateAzureClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAzureClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAzureClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.CreateAzureClusterRequest;

                    /**
                     * Decodes a CreateAzureClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAzureClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.CreateAzureClusterRequest;

                    /**
                     * Verifies a CreateAzureClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAzureClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAzureClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.CreateAzureClusterRequest;

                    /**
                     * Creates a plain object from a CreateAzureClusterRequest message. Also converts values to other types if specified.
                     * @param message CreateAzureClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.CreateAzureClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAzureClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAzureClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateAzureClusterRequest. */
                interface IUpdateAzureClusterRequest {

                    /** UpdateAzureClusterRequest azureCluster */
                    azureCluster?: (google.cloud.gkemulticloud.v1.IAzureCluster|null);

                    /** UpdateAzureClusterRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UpdateAzureClusterRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateAzureClusterRequest. */
                class UpdateAzureClusterRequest implements IUpdateAzureClusterRequest {

                    /**
                     * Constructs a new UpdateAzureClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IUpdateAzureClusterRequest);

                    /** UpdateAzureClusterRequest azureCluster. */
                    public azureCluster?: (google.cloud.gkemulticloud.v1.IAzureCluster|null);

                    /** UpdateAzureClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UpdateAzureClusterRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateAzureClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAzureClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IUpdateAzureClusterRequest): google.cloud.gkemulticloud.v1.UpdateAzureClusterRequest;

                    /**
                     * Encodes the specified UpdateAzureClusterRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.UpdateAzureClusterRequest.verify|verify} messages.
                     * @param message UpdateAzureClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IUpdateAzureClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAzureClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.UpdateAzureClusterRequest.verify|verify} messages.
                     * @param message UpdateAzureClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IUpdateAzureClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAzureClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAzureClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.UpdateAzureClusterRequest;

                    /**
                     * Decodes an UpdateAzureClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAzureClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.UpdateAzureClusterRequest;

                    /**
                     * Verifies an UpdateAzureClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAzureClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAzureClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.UpdateAzureClusterRequest;

                    /**
                     * Creates a plain object from an UpdateAzureClusterRequest message. Also converts values to other types if specified.
                     * @param message UpdateAzureClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.UpdateAzureClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAzureClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateAzureClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAzureClusterRequest. */
                interface IGetAzureClusterRequest {

                    /** GetAzureClusterRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAzureClusterRequest. */
                class GetAzureClusterRequest implements IGetAzureClusterRequest {

                    /**
                     * Constructs a new GetAzureClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IGetAzureClusterRequest);

                    /** GetAzureClusterRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAzureClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAzureClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IGetAzureClusterRequest): google.cloud.gkemulticloud.v1.GetAzureClusterRequest;

                    /**
                     * Encodes the specified GetAzureClusterRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAzureClusterRequest.verify|verify} messages.
                     * @param message GetAzureClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IGetAzureClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAzureClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAzureClusterRequest.verify|verify} messages.
                     * @param message GetAzureClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IGetAzureClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAzureClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAzureClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.GetAzureClusterRequest;

                    /**
                     * Decodes a GetAzureClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAzureClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.GetAzureClusterRequest;

                    /**
                     * Verifies a GetAzureClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAzureClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAzureClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.GetAzureClusterRequest;

                    /**
                     * Creates a plain object from a GetAzureClusterRequest message. Also converts values to other types if specified.
                     * @param message GetAzureClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.GetAzureClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAzureClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAzureClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAzureClustersRequest. */
                interface IListAzureClustersRequest {

                    /** ListAzureClustersRequest parent */
                    parent?: (string|null);

                    /** ListAzureClustersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAzureClustersRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAzureClustersRequest. */
                class ListAzureClustersRequest implements IListAzureClustersRequest {

                    /**
                     * Constructs a new ListAzureClustersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IListAzureClustersRequest);

                    /** ListAzureClustersRequest parent. */
                    public parent: string;

                    /** ListAzureClustersRequest pageSize. */
                    public pageSize: number;

                    /** ListAzureClustersRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAzureClustersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAzureClustersRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IListAzureClustersRequest): google.cloud.gkemulticloud.v1.ListAzureClustersRequest;

                    /**
                     * Encodes the specified ListAzureClustersRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAzureClustersRequest.verify|verify} messages.
                     * @param message ListAzureClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IListAzureClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAzureClustersRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAzureClustersRequest.verify|verify} messages.
                     * @param message ListAzureClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IListAzureClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAzureClustersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAzureClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.ListAzureClustersRequest;

                    /**
                     * Decodes a ListAzureClustersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAzureClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.ListAzureClustersRequest;

                    /**
                     * Verifies a ListAzureClustersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAzureClustersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAzureClustersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.ListAzureClustersRequest;

                    /**
                     * Creates a plain object from a ListAzureClustersRequest message. Also converts values to other types if specified.
                     * @param message ListAzureClustersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.ListAzureClustersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAzureClustersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAzureClustersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAzureClustersResponse. */
                interface IListAzureClustersResponse {

                    /** ListAzureClustersResponse azureClusters */
                    azureClusters?: (google.cloud.gkemulticloud.v1.IAzureCluster[]|null);

                    /** ListAzureClustersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAzureClustersResponse. */
                class ListAzureClustersResponse implements IListAzureClustersResponse {

                    /**
                     * Constructs a new ListAzureClustersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IListAzureClustersResponse);

                    /** ListAzureClustersResponse azureClusters. */
                    public azureClusters: google.cloud.gkemulticloud.v1.IAzureCluster[];

                    /** ListAzureClustersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAzureClustersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAzureClustersResponse instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IListAzureClustersResponse): google.cloud.gkemulticloud.v1.ListAzureClustersResponse;

                    /**
                     * Encodes the specified ListAzureClustersResponse message. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAzureClustersResponse.verify|verify} messages.
                     * @param message ListAzureClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IListAzureClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAzureClustersResponse message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAzureClustersResponse.verify|verify} messages.
                     * @param message ListAzureClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IListAzureClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAzureClustersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAzureClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.ListAzureClustersResponse;

                    /**
                     * Decodes a ListAzureClustersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAzureClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.ListAzureClustersResponse;

                    /**
                     * Verifies a ListAzureClustersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAzureClustersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAzureClustersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.ListAzureClustersResponse;

                    /**
                     * Creates a plain object from a ListAzureClustersResponse message. Also converts values to other types if specified.
                     * @param message ListAzureClustersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.ListAzureClustersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAzureClustersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAzureClustersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteAzureClusterRequest. */
                interface IDeleteAzureClusterRequest {

                    /** DeleteAzureClusterRequest name */
                    name?: (string|null);

                    /** DeleteAzureClusterRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteAzureClusterRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteAzureClusterRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteAzureClusterRequest. */
                class DeleteAzureClusterRequest implements IDeleteAzureClusterRequest {

                    /**
                     * Constructs a new DeleteAzureClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IDeleteAzureClusterRequest);

                    /** DeleteAzureClusterRequest name. */
                    public name: string;

                    /** DeleteAzureClusterRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteAzureClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteAzureClusterRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteAzureClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAzureClusterRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IDeleteAzureClusterRequest): google.cloud.gkemulticloud.v1.DeleteAzureClusterRequest;

                    /**
                     * Encodes the specified DeleteAzureClusterRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.DeleteAzureClusterRequest.verify|verify} messages.
                     * @param message DeleteAzureClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IDeleteAzureClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAzureClusterRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.DeleteAzureClusterRequest.verify|verify} messages.
                     * @param message DeleteAzureClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IDeleteAzureClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAzureClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAzureClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.DeleteAzureClusterRequest;

                    /**
                     * Decodes a DeleteAzureClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAzureClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.DeleteAzureClusterRequest;

                    /**
                     * Verifies a DeleteAzureClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAzureClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAzureClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.DeleteAzureClusterRequest;

                    /**
                     * Creates a plain object from a DeleteAzureClusterRequest message. Also converts values to other types if specified.
                     * @param message DeleteAzureClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.DeleteAzureClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAzureClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteAzureClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateAzureNodePoolRequest. */
                interface ICreateAzureNodePoolRequest {

                    /** CreateAzureNodePoolRequest parent */
                    parent?: (string|null);

                    /** CreateAzureNodePoolRequest azureNodePool */
                    azureNodePool?: (google.cloud.gkemulticloud.v1.IAzureNodePool|null);

                    /** CreateAzureNodePoolRequest azureNodePoolId */
                    azureNodePoolId?: (string|null);

                    /** CreateAzureNodePoolRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateAzureNodePoolRequest. */
                class CreateAzureNodePoolRequest implements ICreateAzureNodePoolRequest {

                    /**
                     * Constructs a new CreateAzureNodePoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.ICreateAzureNodePoolRequest);

                    /** CreateAzureNodePoolRequest parent. */
                    public parent: string;

                    /** CreateAzureNodePoolRequest azureNodePool. */
                    public azureNodePool?: (google.cloud.gkemulticloud.v1.IAzureNodePool|null);

                    /** CreateAzureNodePoolRequest azureNodePoolId. */
                    public azureNodePoolId: string;

                    /** CreateAzureNodePoolRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateAzureNodePoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAzureNodePoolRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.ICreateAzureNodePoolRequest): google.cloud.gkemulticloud.v1.CreateAzureNodePoolRequest;

                    /**
                     * Encodes the specified CreateAzureNodePoolRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.CreateAzureNodePoolRequest.verify|verify} messages.
                     * @param message CreateAzureNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.ICreateAzureNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAzureNodePoolRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.CreateAzureNodePoolRequest.verify|verify} messages.
                     * @param message CreateAzureNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.ICreateAzureNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAzureNodePoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAzureNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.CreateAzureNodePoolRequest;

                    /**
                     * Decodes a CreateAzureNodePoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAzureNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.CreateAzureNodePoolRequest;

                    /**
                     * Verifies a CreateAzureNodePoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAzureNodePoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAzureNodePoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.CreateAzureNodePoolRequest;

                    /**
                     * Creates a plain object from a CreateAzureNodePoolRequest message. Also converts values to other types if specified.
                     * @param message CreateAzureNodePoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.CreateAzureNodePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAzureNodePoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAzureNodePoolRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateAzureNodePoolRequest. */
                interface IUpdateAzureNodePoolRequest {

                    /** UpdateAzureNodePoolRequest azureNodePool */
                    azureNodePool?: (google.cloud.gkemulticloud.v1.IAzureNodePool|null);

                    /** UpdateAzureNodePoolRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UpdateAzureNodePoolRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateAzureNodePoolRequest. */
                class UpdateAzureNodePoolRequest implements IUpdateAzureNodePoolRequest {

                    /**
                     * Constructs a new UpdateAzureNodePoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IUpdateAzureNodePoolRequest);

                    /** UpdateAzureNodePoolRequest azureNodePool. */
                    public azureNodePool?: (google.cloud.gkemulticloud.v1.IAzureNodePool|null);

                    /** UpdateAzureNodePoolRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UpdateAzureNodePoolRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateAzureNodePoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAzureNodePoolRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IUpdateAzureNodePoolRequest): google.cloud.gkemulticloud.v1.UpdateAzureNodePoolRequest;

                    /**
                     * Encodes the specified UpdateAzureNodePoolRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.UpdateAzureNodePoolRequest.verify|verify} messages.
                     * @param message UpdateAzureNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IUpdateAzureNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAzureNodePoolRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.UpdateAzureNodePoolRequest.verify|verify} messages.
                     * @param message UpdateAzureNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IUpdateAzureNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAzureNodePoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAzureNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.UpdateAzureNodePoolRequest;

                    /**
                     * Decodes an UpdateAzureNodePoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAzureNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.UpdateAzureNodePoolRequest;

                    /**
                     * Verifies an UpdateAzureNodePoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAzureNodePoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAzureNodePoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.UpdateAzureNodePoolRequest;

                    /**
                     * Creates a plain object from an UpdateAzureNodePoolRequest message. Also converts values to other types if specified.
                     * @param message UpdateAzureNodePoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.UpdateAzureNodePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAzureNodePoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateAzureNodePoolRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAzureNodePoolRequest. */
                interface IGetAzureNodePoolRequest {

                    /** GetAzureNodePoolRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAzureNodePoolRequest. */
                class GetAzureNodePoolRequest implements IGetAzureNodePoolRequest {

                    /**
                     * Constructs a new GetAzureNodePoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IGetAzureNodePoolRequest);

                    /** GetAzureNodePoolRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAzureNodePoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAzureNodePoolRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IGetAzureNodePoolRequest): google.cloud.gkemulticloud.v1.GetAzureNodePoolRequest;

                    /**
                     * Encodes the specified GetAzureNodePoolRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAzureNodePoolRequest.verify|verify} messages.
                     * @param message GetAzureNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IGetAzureNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAzureNodePoolRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAzureNodePoolRequest.verify|verify} messages.
                     * @param message GetAzureNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IGetAzureNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAzureNodePoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAzureNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.GetAzureNodePoolRequest;

                    /**
                     * Decodes a GetAzureNodePoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAzureNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.GetAzureNodePoolRequest;

                    /**
                     * Verifies a GetAzureNodePoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAzureNodePoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAzureNodePoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.GetAzureNodePoolRequest;

                    /**
                     * Creates a plain object from a GetAzureNodePoolRequest message. Also converts values to other types if specified.
                     * @param message GetAzureNodePoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.GetAzureNodePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAzureNodePoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAzureNodePoolRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAzureNodePoolsRequest. */
                interface IListAzureNodePoolsRequest {

                    /** ListAzureNodePoolsRequest parent */
                    parent?: (string|null);

                    /** ListAzureNodePoolsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAzureNodePoolsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAzureNodePoolsRequest. */
                class ListAzureNodePoolsRequest implements IListAzureNodePoolsRequest {

                    /**
                     * Constructs a new ListAzureNodePoolsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IListAzureNodePoolsRequest);

                    /** ListAzureNodePoolsRequest parent. */
                    public parent: string;

                    /** ListAzureNodePoolsRequest pageSize. */
                    public pageSize: number;

                    /** ListAzureNodePoolsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAzureNodePoolsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAzureNodePoolsRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IListAzureNodePoolsRequest): google.cloud.gkemulticloud.v1.ListAzureNodePoolsRequest;

                    /**
                     * Encodes the specified ListAzureNodePoolsRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAzureNodePoolsRequest.verify|verify} messages.
                     * @param message ListAzureNodePoolsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IListAzureNodePoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAzureNodePoolsRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAzureNodePoolsRequest.verify|verify} messages.
                     * @param message ListAzureNodePoolsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IListAzureNodePoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAzureNodePoolsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAzureNodePoolsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.ListAzureNodePoolsRequest;

                    /**
                     * Decodes a ListAzureNodePoolsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAzureNodePoolsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.ListAzureNodePoolsRequest;

                    /**
                     * Verifies a ListAzureNodePoolsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAzureNodePoolsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAzureNodePoolsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.ListAzureNodePoolsRequest;

                    /**
                     * Creates a plain object from a ListAzureNodePoolsRequest message. Also converts values to other types if specified.
                     * @param message ListAzureNodePoolsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.ListAzureNodePoolsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAzureNodePoolsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAzureNodePoolsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAzureNodePoolsResponse. */
                interface IListAzureNodePoolsResponse {

                    /** ListAzureNodePoolsResponse azureNodePools */
                    azureNodePools?: (google.cloud.gkemulticloud.v1.IAzureNodePool[]|null);

                    /** ListAzureNodePoolsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAzureNodePoolsResponse. */
                class ListAzureNodePoolsResponse implements IListAzureNodePoolsResponse {

                    /**
                     * Constructs a new ListAzureNodePoolsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IListAzureNodePoolsResponse);

                    /** ListAzureNodePoolsResponse azureNodePools. */
                    public azureNodePools: google.cloud.gkemulticloud.v1.IAzureNodePool[];

                    /** ListAzureNodePoolsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAzureNodePoolsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAzureNodePoolsResponse instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IListAzureNodePoolsResponse): google.cloud.gkemulticloud.v1.ListAzureNodePoolsResponse;

                    /**
                     * Encodes the specified ListAzureNodePoolsResponse message. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAzureNodePoolsResponse.verify|verify} messages.
                     * @param message ListAzureNodePoolsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IListAzureNodePoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAzureNodePoolsResponse message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAzureNodePoolsResponse.verify|verify} messages.
                     * @param message ListAzureNodePoolsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IListAzureNodePoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAzureNodePoolsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAzureNodePoolsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.ListAzureNodePoolsResponse;

                    /**
                     * Decodes a ListAzureNodePoolsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAzureNodePoolsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.ListAzureNodePoolsResponse;

                    /**
                     * Verifies a ListAzureNodePoolsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAzureNodePoolsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAzureNodePoolsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.ListAzureNodePoolsResponse;

                    /**
                     * Creates a plain object from a ListAzureNodePoolsResponse message. Also converts values to other types if specified.
                     * @param message ListAzureNodePoolsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.ListAzureNodePoolsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAzureNodePoolsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAzureNodePoolsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteAzureNodePoolRequest. */
                interface IDeleteAzureNodePoolRequest {

                    /** DeleteAzureNodePoolRequest name */
                    name?: (string|null);

                    /** DeleteAzureNodePoolRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteAzureNodePoolRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteAzureNodePoolRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteAzureNodePoolRequest. */
                class DeleteAzureNodePoolRequest implements IDeleteAzureNodePoolRequest {

                    /**
                     * Constructs a new DeleteAzureNodePoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IDeleteAzureNodePoolRequest);

                    /** DeleteAzureNodePoolRequest name. */
                    public name: string;

                    /** DeleteAzureNodePoolRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteAzureNodePoolRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteAzureNodePoolRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteAzureNodePoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAzureNodePoolRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IDeleteAzureNodePoolRequest): google.cloud.gkemulticloud.v1.DeleteAzureNodePoolRequest;

                    /**
                     * Encodes the specified DeleteAzureNodePoolRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.DeleteAzureNodePoolRequest.verify|verify} messages.
                     * @param message DeleteAzureNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IDeleteAzureNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAzureNodePoolRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.DeleteAzureNodePoolRequest.verify|verify} messages.
                     * @param message DeleteAzureNodePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IDeleteAzureNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAzureNodePoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAzureNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.DeleteAzureNodePoolRequest;

                    /**
                     * Decodes a DeleteAzureNodePoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAzureNodePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.DeleteAzureNodePoolRequest;

                    /**
                     * Verifies a DeleteAzureNodePoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAzureNodePoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAzureNodePoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.DeleteAzureNodePoolRequest;

                    /**
                     * Creates a plain object from a DeleteAzureNodePoolRequest message. Also converts values to other types if specified.
                     * @param message DeleteAzureNodePoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.DeleteAzureNodePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAzureNodePoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteAzureNodePoolRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAzureServerConfigRequest. */
                interface IGetAzureServerConfigRequest {

                    /** GetAzureServerConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAzureServerConfigRequest. */
                class GetAzureServerConfigRequest implements IGetAzureServerConfigRequest {

                    /**
                     * Constructs a new GetAzureServerConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IGetAzureServerConfigRequest);

                    /** GetAzureServerConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAzureServerConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAzureServerConfigRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IGetAzureServerConfigRequest): google.cloud.gkemulticloud.v1.GetAzureServerConfigRequest;

                    /**
                     * Encodes the specified GetAzureServerConfigRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAzureServerConfigRequest.verify|verify} messages.
                     * @param message GetAzureServerConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IGetAzureServerConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAzureServerConfigRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAzureServerConfigRequest.verify|verify} messages.
                     * @param message GetAzureServerConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IGetAzureServerConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAzureServerConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAzureServerConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.GetAzureServerConfigRequest;

                    /**
                     * Decodes a GetAzureServerConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAzureServerConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.GetAzureServerConfigRequest;

                    /**
                     * Verifies a GetAzureServerConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAzureServerConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAzureServerConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.GetAzureServerConfigRequest;

                    /**
                     * Creates a plain object from a GetAzureServerConfigRequest message. Also converts values to other types if specified.
                     * @param message GetAzureServerConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.GetAzureServerConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAzureServerConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAzureServerConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateAzureClientRequest. */
                interface ICreateAzureClientRequest {

                    /** CreateAzureClientRequest parent */
                    parent?: (string|null);

                    /** CreateAzureClientRequest azureClient */
                    azureClient?: (google.cloud.gkemulticloud.v1.IAzureClient|null);

                    /** CreateAzureClientRequest azureClientId */
                    azureClientId?: (string|null);

                    /** CreateAzureClientRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateAzureClientRequest. */
                class CreateAzureClientRequest implements ICreateAzureClientRequest {

                    /**
                     * Constructs a new CreateAzureClientRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.ICreateAzureClientRequest);

                    /** CreateAzureClientRequest parent. */
                    public parent: string;

                    /** CreateAzureClientRequest azureClient. */
                    public azureClient?: (google.cloud.gkemulticloud.v1.IAzureClient|null);

                    /** CreateAzureClientRequest azureClientId. */
                    public azureClientId: string;

                    /** CreateAzureClientRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateAzureClientRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAzureClientRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.ICreateAzureClientRequest): google.cloud.gkemulticloud.v1.CreateAzureClientRequest;

                    /**
                     * Encodes the specified CreateAzureClientRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.CreateAzureClientRequest.verify|verify} messages.
                     * @param message CreateAzureClientRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.ICreateAzureClientRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAzureClientRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.CreateAzureClientRequest.verify|verify} messages.
                     * @param message CreateAzureClientRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.ICreateAzureClientRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAzureClientRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAzureClientRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.CreateAzureClientRequest;

                    /**
                     * Decodes a CreateAzureClientRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAzureClientRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.CreateAzureClientRequest;

                    /**
                     * Verifies a CreateAzureClientRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAzureClientRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAzureClientRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.CreateAzureClientRequest;

                    /**
                     * Creates a plain object from a CreateAzureClientRequest message. Also converts values to other types if specified.
                     * @param message CreateAzureClientRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.CreateAzureClientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAzureClientRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAzureClientRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAzureClientRequest. */
                interface IGetAzureClientRequest {

                    /** GetAzureClientRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAzureClientRequest. */
                class GetAzureClientRequest implements IGetAzureClientRequest {

                    /**
                     * Constructs a new GetAzureClientRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IGetAzureClientRequest);

                    /** GetAzureClientRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAzureClientRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAzureClientRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IGetAzureClientRequest): google.cloud.gkemulticloud.v1.GetAzureClientRequest;

                    /**
                     * Encodes the specified GetAzureClientRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAzureClientRequest.verify|verify} messages.
                     * @param message GetAzureClientRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IGetAzureClientRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAzureClientRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.GetAzureClientRequest.verify|verify} messages.
                     * @param message GetAzureClientRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IGetAzureClientRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAzureClientRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAzureClientRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.GetAzureClientRequest;

                    /**
                     * Decodes a GetAzureClientRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAzureClientRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.GetAzureClientRequest;

                    /**
                     * Verifies a GetAzureClientRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAzureClientRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAzureClientRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.GetAzureClientRequest;

                    /**
                     * Creates a plain object from a GetAzureClientRequest message. Also converts values to other types if specified.
                     * @param message GetAzureClientRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.GetAzureClientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAzureClientRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAzureClientRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAzureClientsRequest. */
                interface IListAzureClientsRequest {

                    /** ListAzureClientsRequest parent */
                    parent?: (string|null);

                    /** ListAzureClientsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAzureClientsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAzureClientsRequest. */
                class ListAzureClientsRequest implements IListAzureClientsRequest {

                    /**
                     * Constructs a new ListAzureClientsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IListAzureClientsRequest);

                    /** ListAzureClientsRequest parent. */
                    public parent: string;

                    /** ListAzureClientsRequest pageSize. */
                    public pageSize: number;

                    /** ListAzureClientsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAzureClientsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAzureClientsRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IListAzureClientsRequest): google.cloud.gkemulticloud.v1.ListAzureClientsRequest;

                    /**
                     * Encodes the specified ListAzureClientsRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAzureClientsRequest.verify|verify} messages.
                     * @param message ListAzureClientsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IListAzureClientsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAzureClientsRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAzureClientsRequest.verify|verify} messages.
                     * @param message ListAzureClientsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IListAzureClientsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAzureClientsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAzureClientsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.ListAzureClientsRequest;

                    /**
                     * Decodes a ListAzureClientsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAzureClientsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.ListAzureClientsRequest;

                    /**
                     * Verifies a ListAzureClientsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAzureClientsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAzureClientsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.ListAzureClientsRequest;

                    /**
                     * Creates a plain object from a ListAzureClientsRequest message. Also converts values to other types if specified.
                     * @param message ListAzureClientsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.ListAzureClientsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAzureClientsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAzureClientsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAzureClientsResponse. */
                interface IListAzureClientsResponse {

                    /** ListAzureClientsResponse azureClients */
                    azureClients?: (google.cloud.gkemulticloud.v1.IAzureClient[]|null);

                    /** ListAzureClientsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAzureClientsResponse. */
                class ListAzureClientsResponse implements IListAzureClientsResponse {

                    /**
                     * Constructs a new ListAzureClientsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IListAzureClientsResponse);

                    /** ListAzureClientsResponse azureClients. */
                    public azureClients: google.cloud.gkemulticloud.v1.IAzureClient[];

                    /** ListAzureClientsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAzureClientsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAzureClientsResponse instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IListAzureClientsResponse): google.cloud.gkemulticloud.v1.ListAzureClientsResponse;

                    /**
                     * Encodes the specified ListAzureClientsResponse message. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAzureClientsResponse.verify|verify} messages.
                     * @param message ListAzureClientsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IListAzureClientsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAzureClientsResponse message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.ListAzureClientsResponse.verify|verify} messages.
                     * @param message ListAzureClientsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IListAzureClientsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAzureClientsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAzureClientsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.ListAzureClientsResponse;

                    /**
                     * Decodes a ListAzureClientsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAzureClientsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.ListAzureClientsResponse;

                    /**
                     * Verifies a ListAzureClientsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAzureClientsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAzureClientsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.ListAzureClientsResponse;

                    /**
                     * Creates a plain object from a ListAzureClientsResponse message. Also converts values to other types if specified.
                     * @param message ListAzureClientsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.ListAzureClientsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAzureClientsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAzureClientsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteAzureClientRequest. */
                interface IDeleteAzureClientRequest {

                    /** DeleteAzureClientRequest name */
                    name?: (string|null);

                    /** DeleteAzureClientRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteAzureClientRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a DeleteAzureClientRequest. */
                class DeleteAzureClientRequest implements IDeleteAzureClientRequest {

                    /**
                     * Constructs a new DeleteAzureClientRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IDeleteAzureClientRequest);

                    /** DeleteAzureClientRequest name. */
                    public name: string;

                    /** DeleteAzureClientRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteAzureClientRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new DeleteAzureClientRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAzureClientRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IDeleteAzureClientRequest): google.cloud.gkemulticloud.v1.DeleteAzureClientRequest;

                    /**
                     * Encodes the specified DeleteAzureClientRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.DeleteAzureClientRequest.verify|verify} messages.
                     * @param message DeleteAzureClientRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IDeleteAzureClientRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAzureClientRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.DeleteAzureClientRequest.verify|verify} messages.
                     * @param message DeleteAzureClientRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IDeleteAzureClientRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAzureClientRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAzureClientRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.DeleteAzureClientRequest;

                    /**
                     * Decodes a DeleteAzureClientRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAzureClientRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.DeleteAzureClientRequest;

                    /**
                     * Verifies a DeleteAzureClientRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAzureClientRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAzureClientRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.DeleteAzureClientRequest;

                    /**
                     * Creates a plain object from a DeleteAzureClientRequest message. Also converts values to other types if specified.
                     * @param message DeleteAzureClientRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.DeleteAzureClientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAzureClientRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteAzureClientRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateAzureAccessTokenRequest. */
                interface IGenerateAzureAccessTokenRequest {

                    /** GenerateAzureAccessTokenRequest azureCluster */
                    azureCluster?: (string|null);
                }

                /** Represents a GenerateAzureAccessTokenRequest. */
                class GenerateAzureAccessTokenRequest implements IGenerateAzureAccessTokenRequest {

                    /**
                     * Constructs a new GenerateAzureAccessTokenRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IGenerateAzureAccessTokenRequest);

                    /** GenerateAzureAccessTokenRequest azureCluster. */
                    public azureCluster: string;

                    /**
                     * Creates a new GenerateAzureAccessTokenRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateAzureAccessTokenRequest instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IGenerateAzureAccessTokenRequest): google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenRequest;

                    /**
                     * Encodes the specified GenerateAzureAccessTokenRequest message. Does not implicitly {@link google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenRequest.verify|verify} messages.
                     * @param message GenerateAzureAccessTokenRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IGenerateAzureAccessTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateAzureAccessTokenRequest message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenRequest.verify|verify} messages.
                     * @param message GenerateAzureAccessTokenRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IGenerateAzureAccessTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateAzureAccessTokenRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateAzureAccessTokenRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenRequest;

                    /**
                     * Decodes a GenerateAzureAccessTokenRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateAzureAccessTokenRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenRequest;

                    /**
                     * Verifies a GenerateAzureAccessTokenRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateAzureAccessTokenRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateAzureAccessTokenRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenRequest;

                    /**
                     * Creates a plain object from a GenerateAzureAccessTokenRequest message. Also converts values to other types if specified.
                     * @param message GenerateAzureAccessTokenRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateAzureAccessTokenRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateAzureAccessTokenRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateAzureAccessTokenResponse. */
                interface IGenerateAzureAccessTokenResponse {

                    /** GenerateAzureAccessTokenResponse accessToken */
                    accessToken?: (string|null);

                    /** GenerateAzureAccessTokenResponse expirationTime */
                    expirationTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a GenerateAzureAccessTokenResponse. */
                class GenerateAzureAccessTokenResponse implements IGenerateAzureAccessTokenResponse {

                    /**
                     * Constructs a new GenerateAzureAccessTokenResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkemulticloud.v1.IGenerateAzureAccessTokenResponse);

                    /** GenerateAzureAccessTokenResponse accessToken. */
                    public accessToken: string;

                    /** GenerateAzureAccessTokenResponse expirationTime. */
                    public expirationTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new GenerateAzureAccessTokenResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateAzureAccessTokenResponse instance
                     */
                    public static create(properties?: google.cloud.gkemulticloud.v1.IGenerateAzureAccessTokenResponse): google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenResponse;

                    /**
                     * Encodes the specified GenerateAzureAccessTokenResponse message. Does not implicitly {@link google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenResponse.verify|verify} messages.
                     * @param message GenerateAzureAccessTokenResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkemulticloud.v1.IGenerateAzureAccessTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateAzureAccessTokenResponse message, length delimited. Does not implicitly {@link google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenResponse.verify|verify} messages.
                     * @param message GenerateAzureAccessTokenResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkemulticloud.v1.IGenerateAzureAccessTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateAzureAccessTokenResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateAzureAccessTokenResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenResponse;

                    /**
                     * Decodes a GenerateAzureAccessTokenResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateAzureAccessTokenResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenResponse;

                    /**
                     * Verifies a GenerateAzureAccessTokenResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateAzureAccessTokenResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateAzureAccessTokenResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenResponse;

                    /**
                     * Creates a plain object from a GenerateAzureAccessTokenResponse message. Also converts values to other types if specified.
                     * @param message GenerateAzureAccessTokenResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkemulticloud.v1.GenerateAzureAccessTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateAzureAccessTokenResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateAzureAccessTokenResponse
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
            edition?: (string|null);
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
            public edition: string;

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

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Any
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
