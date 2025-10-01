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

        /** Namespace connectors. */
        namespace connectors {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an AuthConfig. */
                interface IAuthConfig {

                    /** AuthConfig authType */
                    authType?: (google.cloud.connectors.v1.AuthType|keyof typeof google.cloud.connectors.v1.AuthType|null);

                    /** AuthConfig userPassword */
                    userPassword?: (google.cloud.connectors.v1.AuthConfig.IUserPassword|null);

                    /** AuthConfig oauth2JwtBearer */
                    oauth2JwtBearer?: (google.cloud.connectors.v1.AuthConfig.IOauth2JwtBearer|null);

                    /** AuthConfig oauth2ClientCredentials */
                    oauth2ClientCredentials?: (google.cloud.connectors.v1.AuthConfig.IOauth2ClientCredentials|null);

                    /** AuthConfig sshPublicKey */
                    sshPublicKey?: (google.cloud.connectors.v1.AuthConfig.ISshPublicKey|null);

                    /** AuthConfig additionalVariables */
                    additionalVariables?: (google.cloud.connectors.v1.IConfigVariable[]|null);
                }

                /** Represents an AuthConfig. */
                class AuthConfig implements IAuthConfig {

                    /**
                     * Constructs a new AuthConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IAuthConfig);

                    /** AuthConfig authType. */
                    public authType: (google.cloud.connectors.v1.AuthType|keyof typeof google.cloud.connectors.v1.AuthType);

                    /** AuthConfig userPassword. */
                    public userPassword?: (google.cloud.connectors.v1.AuthConfig.IUserPassword|null);

                    /** AuthConfig oauth2JwtBearer. */
                    public oauth2JwtBearer?: (google.cloud.connectors.v1.AuthConfig.IOauth2JwtBearer|null);

                    /** AuthConfig oauth2ClientCredentials. */
                    public oauth2ClientCredentials?: (google.cloud.connectors.v1.AuthConfig.IOauth2ClientCredentials|null);

                    /** AuthConfig sshPublicKey. */
                    public sshPublicKey?: (google.cloud.connectors.v1.AuthConfig.ISshPublicKey|null);

                    /** AuthConfig additionalVariables. */
                    public additionalVariables: google.cloud.connectors.v1.IConfigVariable[];

                    /** AuthConfig type. */
                    public type?: ("userPassword"|"oauth2JwtBearer"|"oauth2ClientCredentials"|"sshPublicKey");

                    /**
                     * Creates a new AuthConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuthConfig instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IAuthConfig): google.cloud.connectors.v1.AuthConfig;

                    /**
                     * Encodes the specified AuthConfig message. Does not implicitly {@link google.cloud.connectors.v1.AuthConfig.verify|verify} messages.
                     * @param message AuthConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IAuthConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AuthConfig message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.AuthConfig.verify|verify} messages.
                     * @param message AuthConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IAuthConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuthConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuthConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.AuthConfig;

                    /**
                     * Decodes an AuthConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AuthConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.AuthConfig;

                    /**
                     * Verifies an AuthConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AuthConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AuthConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.AuthConfig;

                    /**
                     * Creates a plain object from an AuthConfig message. Also converts values to other types if specified.
                     * @param message AuthConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.AuthConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AuthConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AuthConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AuthConfig {

                    /** Properties of a UserPassword. */
                    interface IUserPassword {

                        /** UserPassword username */
                        username?: (string|null);

                        /** UserPassword password */
                        password?: (google.cloud.connectors.v1.ISecret|null);
                    }

                    /** Represents a UserPassword. */
                    class UserPassword implements IUserPassword {

                        /**
                         * Constructs a new UserPassword.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.connectors.v1.AuthConfig.IUserPassword);

                        /** UserPassword username. */
                        public username: string;

                        /** UserPassword password. */
                        public password?: (google.cloud.connectors.v1.ISecret|null);

                        /**
                         * Creates a new UserPassword instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UserPassword instance
                         */
                        public static create(properties?: google.cloud.connectors.v1.AuthConfig.IUserPassword): google.cloud.connectors.v1.AuthConfig.UserPassword;

                        /**
                         * Encodes the specified UserPassword message. Does not implicitly {@link google.cloud.connectors.v1.AuthConfig.UserPassword.verify|verify} messages.
                         * @param message UserPassword message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.connectors.v1.AuthConfig.IUserPassword, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UserPassword message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.AuthConfig.UserPassword.verify|verify} messages.
                         * @param message UserPassword message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.connectors.v1.AuthConfig.IUserPassword, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a UserPassword message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UserPassword
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.AuthConfig.UserPassword;

                        /**
                         * Decodes a UserPassword message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UserPassword
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.AuthConfig.UserPassword;

                        /**
                         * Verifies a UserPassword message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a UserPassword message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UserPassword
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.AuthConfig.UserPassword;

                        /**
                         * Creates a plain object from a UserPassword message. Also converts values to other types if specified.
                         * @param message UserPassword
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.connectors.v1.AuthConfig.UserPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UserPassword to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UserPassword
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Oauth2JwtBearer. */
                    interface IOauth2JwtBearer {

                        /** Oauth2JwtBearer clientKey */
                        clientKey?: (google.cloud.connectors.v1.ISecret|null);

                        /** Oauth2JwtBearer jwtClaims */
                        jwtClaims?: (google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.IJwtClaims|null);
                    }

                    /** Represents an Oauth2JwtBearer. */
                    class Oauth2JwtBearer implements IOauth2JwtBearer {

                        /**
                         * Constructs a new Oauth2JwtBearer.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.connectors.v1.AuthConfig.IOauth2JwtBearer);

                        /** Oauth2JwtBearer clientKey. */
                        public clientKey?: (google.cloud.connectors.v1.ISecret|null);

                        /** Oauth2JwtBearer jwtClaims. */
                        public jwtClaims?: (google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.IJwtClaims|null);

                        /**
                         * Creates a new Oauth2JwtBearer instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Oauth2JwtBearer instance
                         */
                        public static create(properties?: google.cloud.connectors.v1.AuthConfig.IOauth2JwtBearer): google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer;

                        /**
                         * Encodes the specified Oauth2JwtBearer message. Does not implicitly {@link google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.verify|verify} messages.
                         * @param message Oauth2JwtBearer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.connectors.v1.AuthConfig.IOauth2JwtBearer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Oauth2JwtBearer message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.verify|verify} messages.
                         * @param message Oauth2JwtBearer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.connectors.v1.AuthConfig.IOauth2JwtBearer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Oauth2JwtBearer message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Oauth2JwtBearer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer;

                        /**
                         * Decodes an Oauth2JwtBearer message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Oauth2JwtBearer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer;

                        /**
                         * Verifies an Oauth2JwtBearer message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Oauth2JwtBearer message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Oauth2JwtBearer
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer;

                        /**
                         * Creates a plain object from an Oauth2JwtBearer message. Also converts values to other types if specified.
                         * @param message Oauth2JwtBearer
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Oauth2JwtBearer to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Oauth2JwtBearer
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Oauth2JwtBearer {

                        /** Properties of a JwtClaims. */
                        interface IJwtClaims {

                            /** JwtClaims issuer */
                            issuer?: (string|null);

                            /** JwtClaims subject */
                            subject?: (string|null);

                            /** JwtClaims audience */
                            audience?: (string|null);
                        }

                        /** Represents a JwtClaims. */
                        class JwtClaims implements IJwtClaims {

                            /**
                             * Constructs a new JwtClaims.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.IJwtClaims);

                            /** JwtClaims issuer. */
                            public issuer: string;

                            /** JwtClaims subject. */
                            public subject: string;

                            /** JwtClaims audience. */
                            public audience: string;

                            /**
                             * Creates a new JwtClaims instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns JwtClaims instance
                             */
                            public static create(properties?: google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.IJwtClaims): google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.JwtClaims;

                            /**
                             * Encodes the specified JwtClaims message. Does not implicitly {@link google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.JwtClaims.verify|verify} messages.
                             * @param message JwtClaims message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.IJwtClaims, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified JwtClaims message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.JwtClaims.verify|verify} messages.
                             * @param message JwtClaims message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.IJwtClaims, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a JwtClaims message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns JwtClaims
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.JwtClaims;

                            /**
                             * Decodes a JwtClaims message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns JwtClaims
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.JwtClaims;

                            /**
                             * Verifies a JwtClaims message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a JwtClaims message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns JwtClaims
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.JwtClaims;

                            /**
                             * Creates a plain object from a JwtClaims message. Also converts values to other types if specified.
                             * @param message JwtClaims
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.connectors.v1.AuthConfig.Oauth2JwtBearer.JwtClaims, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this JwtClaims to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for JwtClaims
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of an Oauth2ClientCredentials. */
                    interface IOauth2ClientCredentials {

                        /** Oauth2ClientCredentials clientId */
                        clientId?: (string|null);

                        /** Oauth2ClientCredentials clientSecret */
                        clientSecret?: (google.cloud.connectors.v1.ISecret|null);
                    }

                    /** Represents an Oauth2ClientCredentials. */
                    class Oauth2ClientCredentials implements IOauth2ClientCredentials {

                        /**
                         * Constructs a new Oauth2ClientCredentials.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.connectors.v1.AuthConfig.IOauth2ClientCredentials);

                        /** Oauth2ClientCredentials clientId. */
                        public clientId: string;

                        /** Oauth2ClientCredentials clientSecret. */
                        public clientSecret?: (google.cloud.connectors.v1.ISecret|null);

                        /**
                         * Creates a new Oauth2ClientCredentials instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Oauth2ClientCredentials instance
                         */
                        public static create(properties?: google.cloud.connectors.v1.AuthConfig.IOauth2ClientCredentials): google.cloud.connectors.v1.AuthConfig.Oauth2ClientCredentials;

                        /**
                         * Encodes the specified Oauth2ClientCredentials message. Does not implicitly {@link google.cloud.connectors.v1.AuthConfig.Oauth2ClientCredentials.verify|verify} messages.
                         * @param message Oauth2ClientCredentials message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.connectors.v1.AuthConfig.IOauth2ClientCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Oauth2ClientCredentials message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.AuthConfig.Oauth2ClientCredentials.verify|verify} messages.
                         * @param message Oauth2ClientCredentials message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.connectors.v1.AuthConfig.IOauth2ClientCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Oauth2ClientCredentials message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Oauth2ClientCredentials
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.AuthConfig.Oauth2ClientCredentials;

                        /**
                         * Decodes an Oauth2ClientCredentials message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Oauth2ClientCredentials
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.AuthConfig.Oauth2ClientCredentials;

                        /**
                         * Verifies an Oauth2ClientCredentials message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Oauth2ClientCredentials message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Oauth2ClientCredentials
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.AuthConfig.Oauth2ClientCredentials;

                        /**
                         * Creates a plain object from an Oauth2ClientCredentials message. Also converts values to other types if specified.
                         * @param message Oauth2ClientCredentials
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.connectors.v1.AuthConfig.Oauth2ClientCredentials, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Oauth2ClientCredentials to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Oauth2ClientCredentials
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SshPublicKey. */
                    interface ISshPublicKey {

                        /** SshPublicKey username */
                        username?: (string|null);

                        /** SshPublicKey sshClientCert */
                        sshClientCert?: (google.cloud.connectors.v1.ISecret|null);

                        /** SshPublicKey certType */
                        certType?: (string|null);

                        /** SshPublicKey sshClientCertPass */
                        sshClientCertPass?: (google.cloud.connectors.v1.ISecret|null);
                    }

                    /** Represents a SshPublicKey. */
                    class SshPublicKey implements ISshPublicKey {

                        /**
                         * Constructs a new SshPublicKey.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.connectors.v1.AuthConfig.ISshPublicKey);

                        /** SshPublicKey username. */
                        public username: string;

                        /** SshPublicKey sshClientCert. */
                        public sshClientCert?: (google.cloud.connectors.v1.ISecret|null);

                        /** SshPublicKey certType. */
                        public certType: string;

                        /** SshPublicKey sshClientCertPass. */
                        public sshClientCertPass?: (google.cloud.connectors.v1.ISecret|null);

                        /**
                         * Creates a new SshPublicKey instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SshPublicKey instance
                         */
                        public static create(properties?: google.cloud.connectors.v1.AuthConfig.ISshPublicKey): google.cloud.connectors.v1.AuthConfig.SshPublicKey;

                        /**
                         * Encodes the specified SshPublicKey message. Does not implicitly {@link google.cloud.connectors.v1.AuthConfig.SshPublicKey.verify|verify} messages.
                         * @param message SshPublicKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.connectors.v1.AuthConfig.ISshPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SshPublicKey message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.AuthConfig.SshPublicKey.verify|verify} messages.
                         * @param message SshPublicKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.connectors.v1.AuthConfig.ISshPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SshPublicKey message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SshPublicKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.AuthConfig.SshPublicKey;

                        /**
                         * Decodes a SshPublicKey message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SshPublicKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.AuthConfig.SshPublicKey;

                        /**
                         * Verifies a SshPublicKey message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SshPublicKey message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SshPublicKey
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.AuthConfig.SshPublicKey;

                        /**
                         * Creates a plain object from a SshPublicKey message. Also converts values to other types if specified.
                         * @param message SshPublicKey
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.connectors.v1.AuthConfig.SshPublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SshPublicKey to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SshPublicKey
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an AuthConfigTemplate. */
                interface IAuthConfigTemplate {

                    /** AuthConfigTemplate authType */
                    authType?: (google.cloud.connectors.v1.AuthType|keyof typeof google.cloud.connectors.v1.AuthType|null);

                    /** AuthConfigTemplate configVariableTemplates */
                    configVariableTemplates?: (google.cloud.connectors.v1.IConfigVariableTemplate[]|null);

                    /** AuthConfigTemplate displayName */
                    displayName?: (string|null);

                    /** AuthConfigTemplate description */
                    description?: (string|null);
                }

                /** Represents an AuthConfigTemplate. */
                class AuthConfigTemplate implements IAuthConfigTemplate {

                    /**
                     * Constructs a new AuthConfigTemplate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IAuthConfigTemplate);

                    /** AuthConfigTemplate authType. */
                    public authType: (google.cloud.connectors.v1.AuthType|keyof typeof google.cloud.connectors.v1.AuthType);

                    /** AuthConfigTemplate configVariableTemplates. */
                    public configVariableTemplates: google.cloud.connectors.v1.IConfigVariableTemplate[];

                    /** AuthConfigTemplate displayName. */
                    public displayName: string;

                    /** AuthConfigTemplate description. */
                    public description: string;

                    /**
                     * Creates a new AuthConfigTemplate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuthConfigTemplate instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IAuthConfigTemplate): google.cloud.connectors.v1.AuthConfigTemplate;

                    /**
                     * Encodes the specified AuthConfigTemplate message. Does not implicitly {@link google.cloud.connectors.v1.AuthConfigTemplate.verify|verify} messages.
                     * @param message AuthConfigTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IAuthConfigTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AuthConfigTemplate message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.AuthConfigTemplate.verify|verify} messages.
                     * @param message AuthConfigTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IAuthConfigTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuthConfigTemplate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuthConfigTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.AuthConfigTemplate;

                    /**
                     * Decodes an AuthConfigTemplate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AuthConfigTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.AuthConfigTemplate;

                    /**
                     * Verifies an AuthConfigTemplate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AuthConfigTemplate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AuthConfigTemplate
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.AuthConfigTemplate;

                    /**
                     * Creates a plain object from an AuthConfigTemplate message. Also converts values to other types if specified.
                     * @param message AuthConfigTemplate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.AuthConfigTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AuthConfigTemplate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AuthConfigTemplate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** AuthType enum. */
                enum AuthType {
                    AUTH_TYPE_UNSPECIFIED = 0,
                    USER_PASSWORD = 1,
                    OAUTH2_JWT_BEARER = 2,
                    OAUTH2_CLIENT_CREDENTIALS = 3,
                    SSH_PUBLIC_KEY = 4,
                    OAUTH2_AUTH_CODE_FLOW = 5
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
                    constructor(properties?: google.cloud.connectors.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.connectors.v1.IOperationMetadata): google.cloud.connectors.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.connectors.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ConfigVariableTemplate. */
                interface IConfigVariableTemplate {

                    /** ConfigVariableTemplate key */
                    key?: (string|null);

                    /** ConfigVariableTemplate valueType */
                    valueType?: (google.cloud.connectors.v1.ConfigVariableTemplate.ValueType|keyof typeof google.cloud.connectors.v1.ConfigVariableTemplate.ValueType|null);

                    /** ConfigVariableTemplate displayName */
                    displayName?: (string|null);

                    /** ConfigVariableTemplate description */
                    description?: (string|null);

                    /** ConfigVariableTemplate validationRegex */
                    validationRegex?: (string|null);

                    /** ConfigVariableTemplate required */
                    required?: (boolean|null);

                    /** ConfigVariableTemplate roleGrant */
                    roleGrant?: (google.cloud.connectors.v1.IRoleGrant|null);

                    /** ConfigVariableTemplate enumOptions */
                    enumOptions?: (google.cloud.connectors.v1.IEnumOption[]|null);

                    /** ConfigVariableTemplate authorizationCodeLink */
                    authorizationCodeLink?: (google.cloud.connectors.v1.IAuthorizationCodeLink|null);

                    /** ConfigVariableTemplate state */
                    state?: (google.cloud.connectors.v1.ConfigVariableTemplate.State|keyof typeof google.cloud.connectors.v1.ConfigVariableTemplate.State|null);

                    /** ConfigVariableTemplate isAdvanced */
                    isAdvanced?: (boolean|null);
                }

                /** Represents a ConfigVariableTemplate. */
                class ConfigVariableTemplate implements IConfigVariableTemplate {

                    /**
                     * Constructs a new ConfigVariableTemplate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IConfigVariableTemplate);

                    /** ConfigVariableTemplate key. */
                    public key: string;

                    /** ConfigVariableTemplate valueType. */
                    public valueType: (google.cloud.connectors.v1.ConfigVariableTemplate.ValueType|keyof typeof google.cloud.connectors.v1.ConfigVariableTemplate.ValueType);

                    /** ConfigVariableTemplate displayName. */
                    public displayName: string;

                    /** ConfigVariableTemplate description. */
                    public description: string;

                    /** ConfigVariableTemplate validationRegex. */
                    public validationRegex: string;

                    /** ConfigVariableTemplate required. */
                    public required: boolean;

                    /** ConfigVariableTemplate roleGrant. */
                    public roleGrant?: (google.cloud.connectors.v1.IRoleGrant|null);

                    /** ConfigVariableTemplate enumOptions. */
                    public enumOptions: google.cloud.connectors.v1.IEnumOption[];

                    /** ConfigVariableTemplate authorizationCodeLink. */
                    public authorizationCodeLink?: (google.cloud.connectors.v1.IAuthorizationCodeLink|null);

                    /** ConfigVariableTemplate state. */
                    public state: (google.cloud.connectors.v1.ConfigVariableTemplate.State|keyof typeof google.cloud.connectors.v1.ConfigVariableTemplate.State);

                    /** ConfigVariableTemplate isAdvanced. */
                    public isAdvanced: boolean;

                    /**
                     * Creates a new ConfigVariableTemplate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfigVariableTemplate instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IConfigVariableTemplate): google.cloud.connectors.v1.ConfigVariableTemplate;

                    /**
                     * Encodes the specified ConfigVariableTemplate message. Does not implicitly {@link google.cloud.connectors.v1.ConfigVariableTemplate.verify|verify} messages.
                     * @param message ConfigVariableTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IConfigVariableTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfigVariableTemplate message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ConfigVariableTemplate.verify|verify} messages.
                     * @param message ConfigVariableTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IConfigVariableTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfigVariableTemplate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfigVariableTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ConfigVariableTemplate;

                    /**
                     * Decodes a ConfigVariableTemplate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfigVariableTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ConfigVariableTemplate;

                    /**
                     * Verifies a ConfigVariableTemplate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfigVariableTemplate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfigVariableTemplate
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ConfigVariableTemplate;

                    /**
                     * Creates a plain object from a ConfigVariableTemplate message. Also converts values to other types if specified.
                     * @param message ConfigVariableTemplate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ConfigVariableTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfigVariableTemplate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConfigVariableTemplate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ConfigVariableTemplate {

                    /** ValueType enum. */
                    enum ValueType {
                        VALUE_TYPE_UNSPECIFIED = 0,
                        STRING = 1,
                        INT = 2,
                        BOOL = 3,
                        SECRET = 4,
                        ENUM = 5,
                        AUTHORIZATION_CODE = 6
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        DEPRECATED = 2
                    }
                }

                /** Properties of a Secret. */
                interface ISecret {

                    /** Secret secretVersion */
                    secretVersion?: (string|null);
                }

                /** Represents a Secret. */
                class Secret implements ISecret {

                    /**
                     * Constructs a new Secret.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.ISecret);

                    /** Secret secretVersion. */
                    public secretVersion: string;

                    /**
                     * Creates a new Secret instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Secret instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.ISecret): google.cloud.connectors.v1.Secret;

                    /**
                     * Encodes the specified Secret message. Does not implicitly {@link google.cloud.connectors.v1.Secret.verify|verify} messages.
                     * @param message Secret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.ISecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Secret message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.Secret.verify|verify} messages.
                     * @param message Secret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.ISecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Secret message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Secret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.Secret;

                    /**
                     * Decodes a Secret message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Secret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.Secret;

                    /**
                     * Verifies a Secret message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Secret message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Secret
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.Secret;

                    /**
                     * Creates a plain object from a Secret message. Also converts values to other types if specified.
                     * @param message Secret
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.Secret, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Secret to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Secret
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EnumOption. */
                interface IEnumOption {

                    /** EnumOption id */
                    id?: (string|null);

                    /** EnumOption displayName */
                    displayName?: (string|null);
                }

                /** Represents an EnumOption. */
                class EnumOption implements IEnumOption {

                    /**
                     * Constructs a new EnumOption.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IEnumOption);

                    /** EnumOption id. */
                    public id: string;

                    /** EnumOption displayName. */
                    public displayName: string;

                    /**
                     * Creates a new EnumOption instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnumOption instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IEnumOption): google.cloud.connectors.v1.EnumOption;

                    /**
                     * Encodes the specified EnumOption message. Does not implicitly {@link google.cloud.connectors.v1.EnumOption.verify|verify} messages.
                     * @param message EnumOption message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IEnumOption, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnumOption message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.EnumOption.verify|verify} messages.
                     * @param message EnumOption message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IEnumOption, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnumOption message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnumOption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.EnumOption;

                    /**
                     * Decodes an EnumOption message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnumOption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.EnumOption;

                    /**
                     * Verifies an EnumOption message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EnumOption message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EnumOption
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.EnumOption;

                    /**
                     * Creates a plain object from an EnumOption message. Also converts values to other types if specified.
                     * @param message EnumOption
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.EnumOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnumOption to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EnumOption
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ConfigVariable. */
                interface IConfigVariable {

                    /** ConfigVariable key */
                    key?: (string|null);

                    /** ConfigVariable intValue */
                    intValue?: (number|Long|string|null);

                    /** ConfigVariable boolValue */
                    boolValue?: (boolean|null);

                    /** ConfigVariable stringValue */
                    stringValue?: (string|null);

                    /** ConfigVariable secretValue */
                    secretValue?: (google.cloud.connectors.v1.ISecret|null);
                }

                /** Represents a ConfigVariable. */
                class ConfigVariable implements IConfigVariable {

                    /**
                     * Constructs a new ConfigVariable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IConfigVariable);

                    /** ConfigVariable key. */
                    public key: string;

                    /** ConfigVariable intValue. */
                    public intValue?: (number|Long|string|null);

                    /** ConfigVariable boolValue. */
                    public boolValue?: (boolean|null);

                    /** ConfigVariable stringValue. */
                    public stringValue?: (string|null);

                    /** ConfigVariable secretValue. */
                    public secretValue?: (google.cloud.connectors.v1.ISecret|null);

                    /** ConfigVariable value. */
                    public value?: ("intValue"|"boolValue"|"stringValue"|"secretValue");

                    /**
                     * Creates a new ConfigVariable instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfigVariable instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IConfigVariable): google.cloud.connectors.v1.ConfigVariable;

                    /**
                     * Encodes the specified ConfigVariable message. Does not implicitly {@link google.cloud.connectors.v1.ConfigVariable.verify|verify} messages.
                     * @param message ConfigVariable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IConfigVariable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfigVariable message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ConfigVariable.verify|verify} messages.
                     * @param message ConfigVariable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IConfigVariable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfigVariable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfigVariable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ConfigVariable;

                    /**
                     * Decodes a ConfigVariable message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfigVariable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ConfigVariable;

                    /**
                     * Verifies a ConfigVariable message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfigVariable message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfigVariable
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ConfigVariable;

                    /**
                     * Creates a plain object from a ConfigVariable message. Also converts values to other types if specified.
                     * @param message ConfigVariable
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ConfigVariable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfigVariable to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConfigVariable
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RoleGrant. */
                interface IRoleGrant {

                    /** RoleGrant principal */
                    principal?: (google.cloud.connectors.v1.RoleGrant.Principal|keyof typeof google.cloud.connectors.v1.RoleGrant.Principal|null);

                    /** RoleGrant roles */
                    roles?: (string[]|null);

                    /** RoleGrant resource */
                    resource?: (google.cloud.connectors.v1.RoleGrant.IResource|null);

                    /** RoleGrant helperTextTemplate */
                    helperTextTemplate?: (string|null);
                }

                /** Represents a RoleGrant. */
                class RoleGrant implements IRoleGrant {

                    /**
                     * Constructs a new RoleGrant.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IRoleGrant);

                    /** RoleGrant principal. */
                    public principal: (google.cloud.connectors.v1.RoleGrant.Principal|keyof typeof google.cloud.connectors.v1.RoleGrant.Principal);

                    /** RoleGrant roles. */
                    public roles: string[];

                    /** RoleGrant resource. */
                    public resource?: (google.cloud.connectors.v1.RoleGrant.IResource|null);

                    /** RoleGrant helperTextTemplate. */
                    public helperTextTemplate: string;

                    /**
                     * Creates a new RoleGrant instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoleGrant instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IRoleGrant): google.cloud.connectors.v1.RoleGrant;

                    /**
                     * Encodes the specified RoleGrant message. Does not implicitly {@link google.cloud.connectors.v1.RoleGrant.verify|verify} messages.
                     * @param message RoleGrant message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IRoleGrant, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoleGrant message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.RoleGrant.verify|verify} messages.
                     * @param message RoleGrant message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IRoleGrant, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoleGrant message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RoleGrant
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.RoleGrant;

                    /**
                     * Decodes a RoleGrant message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RoleGrant
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.RoleGrant;

                    /**
                     * Verifies a RoleGrant message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoleGrant message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoleGrant
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.RoleGrant;

                    /**
                     * Creates a plain object from a RoleGrant message. Also converts values to other types if specified.
                     * @param message RoleGrant
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.RoleGrant, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoleGrant to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RoleGrant
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RoleGrant {

                    /** Principal enum. */
                    enum Principal {
                        PRINCIPAL_UNSPECIFIED = 0,
                        CONNECTOR_SA = 1
                    }

                    /** Properties of a Resource. */
                    interface IResource {

                        /** Resource type */
                        type?: (google.cloud.connectors.v1.RoleGrant.Resource.Type|keyof typeof google.cloud.connectors.v1.RoleGrant.Resource.Type|null);

                        /** Resource pathTemplate */
                        pathTemplate?: (string|null);
                    }

                    /** Represents a Resource. */
                    class Resource implements IResource {

                        /**
                         * Constructs a new Resource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.connectors.v1.RoleGrant.IResource);

                        /** Resource type. */
                        public type: (google.cloud.connectors.v1.RoleGrant.Resource.Type|keyof typeof google.cloud.connectors.v1.RoleGrant.Resource.Type);

                        /** Resource pathTemplate. */
                        public pathTemplate: string;

                        /**
                         * Creates a new Resource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Resource instance
                         */
                        public static create(properties?: google.cloud.connectors.v1.RoleGrant.IResource): google.cloud.connectors.v1.RoleGrant.Resource;

                        /**
                         * Encodes the specified Resource message. Does not implicitly {@link google.cloud.connectors.v1.RoleGrant.Resource.verify|verify} messages.
                         * @param message Resource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.connectors.v1.RoleGrant.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Resource message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.RoleGrant.Resource.verify|verify} messages.
                         * @param message Resource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.connectors.v1.RoleGrant.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Resource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Resource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.RoleGrant.Resource;

                        /**
                         * Decodes a Resource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Resource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.RoleGrant.Resource;

                        /**
                         * Verifies a Resource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Resource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Resource
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.RoleGrant.Resource;

                        /**
                         * Creates a plain object from a Resource message. Also converts values to other types if specified.
                         * @param message Resource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.connectors.v1.RoleGrant.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Resource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Resource
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Resource {

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            GCP_PROJECT = 1,
                            GCP_RESOURCE = 2,
                            GCP_SECRETMANAGER_SECRET = 3,
                            GCP_SECRETMANAGER_SECRET_VERSION = 4
                        }
                    }
                }

                /** Properties of an AuthorizationCodeLink. */
                interface IAuthorizationCodeLink {

                    /** AuthorizationCodeLink uri */
                    uri?: (string|null);

                    /** AuthorizationCodeLink scopes */
                    scopes?: (string[]|null);

                    /** AuthorizationCodeLink clientId */
                    clientId?: (string|null);

                    /** AuthorizationCodeLink enablePkce */
                    enablePkce?: (boolean|null);
                }

                /** Represents an AuthorizationCodeLink. */
                class AuthorizationCodeLink implements IAuthorizationCodeLink {

                    /**
                     * Constructs a new AuthorizationCodeLink.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IAuthorizationCodeLink);

                    /** AuthorizationCodeLink uri. */
                    public uri: string;

                    /** AuthorizationCodeLink scopes. */
                    public scopes: string[];

                    /** AuthorizationCodeLink clientId. */
                    public clientId: string;

                    /** AuthorizationCodeLink enablePkce. */
                    public enablePkce: boolean;

                    /**
                     * Creates a new AuthorizationCodeLink instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuthorizationCodeLink instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IAuthorizationCodeLink): google.cloud.connectors.v1.AuthorizationCodeLink;

                    /**
                     * Encodes the specified AuthorizationCodeLink message. Does not implicitly {@link google.cloud.connectors.v1.AuthorizationCodeLink.verify|verify} messages.
                     * @param message AuthorizationCodeLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IAuthorizationCodeLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AuthorizationCodeLink message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.AuthorizationCodeLink.verify|verify} messages.
                     * @param message AuthorizationCodeLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IAuthorizationCodeLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuthorizationCodeLink message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuthorizationCodeLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.AuthorizationCodeLink;

                    /**
                     * Decodes an AuthorizationCodeLink message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AuthorizationCodeLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.AuthorizationCodeLink;

                    /**
                     * Verifies an AuthorizationCodeLink message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AuthorizationCodeLink message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AuthorizationCodeLink
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.AuthorizationCodeLink;

                    /**
                     * Creates a plain object from an AuthorizationCodeLink message. Also converts values to other types if specified.
                     * @param message AuthorizationCodeLink
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.AuthorizationCodeLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AuthorizationCodeLink to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AuthorizationCodeLink
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** LaunchStage enum. */
                enum LaunchStage {
                    LAUNCH_STAGE_UNSPECIFIED = 0,
                    PREVIEW = 1,
                    GA = 2,
                    DEPRECATED = 3,
                    PRIVATE_PREVIEW = 5
                }

                /** Properties of a Connection. */
                interface IConnection {

                    /** Connection name */
                    name?: (string|null);

                    /** Connection createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Connection updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Connection labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Connection description */
                    description?: (string|null);

                    /** Connection connectorVersion */
                    connectorVersion?: (string|null);

                    /** Connection status */
                    status?: (google.cloud.connectors.v1.IConnectionStatus|null);

                    /** Connection configVariables */
                    configVariables?: (google.cloud.connectors.v1.IConfigVariable[]|null);

                    /** Connection authConfig */
                    authConfig?: (google.cloud.connectors.v1.IAuthConfig|null);

                    /** Connection lockConfig */
                    lockConfig?: (google.cloud.connectors.v1.ILockConfig|null);

                    /** Connection destinationConfigs */
                    destinationConfigs?: (google.cloud.connectors.v1.IDestinationConfig[]|null);

                    /** Connection imageLocation */
                    imageLocation?: (string|null);

                    /** Connection serviceAccount */
                    serviceAccount?: (string|null);

                    /** Connection serviceDirectory */
                    serviceDirectory?: (string|null);

                    /** Connection envoyImageLocation */
                    envoyImageLocation?: (string|null);

                    /** Connection suspended */
                    suspended?: (boolean|null);

                    /** Connection nodeConfig */
                    nodeConfig?: (google.cloud.connectors.v1.INodeConfig|null);

                    /** Connection sslConfig */
                    sslConfig?: (google.cloud.connectors.v1.ISslConfig|null);
                }

                /** Represents a Connection. */
                class Connection implements IConnection {

                    /**
                     * Constructs a new Connection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IConnection);

                    /** Connection name. */
                    public name: string;

                    /** Connection createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Connection updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Connection labels. */
                    public labels: { [k: string]: string };

                    /** Connection description. */
                    public description: string;

                    /** Connection connectorVersion. */
                    public connectorVersion: string;

                    /** Connection status. */
                    public status?: (google.cloud.connectors.v1.IConnectionStatus|null);

                    /** Connection configVariables. */
                    public configVariables: google.cloud.connectors.v1.IConfigVariable[];

                    /** Connection authConfig. */
                    public authConfig?: (google.cloud.connectors.v1.IAuthConfig|null);

                    /** Connection lockConfig. */
                    public lockConfig?: (google.cloud.connectors.v1.ILockConfig|null);

                    /** Connection destinationConfigs. */
                    public destinationConfigs: google.cloud.connectors.v1.IDestinationConfig[];

                    /** Connection imageLocation. */
                    public imageLocation: string;

                    /** Connection serviceAccount. */
                    public serviceAccount: string;

                    /** Connection serviceDirectory. */
                    public serviceDirectory: string;

                    /** Connection envoyImageLocation. */
                    public envoyImageLocation: string;

                    /** Connection suspended. */
                    public suspended: boolean;

                    /** Connection nodeConfig. */
                    public nodeConfig?: (google.cloud.connectors.v1.INodeConfig|null);

                    /** Connection sslConfig. */
                    public sslConfig?: (google.cloud.connectors.v1.ISslConfig|null);

                    /**
                     * Creates a new Connection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Connection instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IConnection): google.cloud.connectors.v1.Connection;

                    /**
                     * Encodes the specified Connection message. Does not implicitly {@link google.cloud.connectors.v1.Connection.verify|verify} messages.
                     * @param message Connection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Connection message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.Connection.verify|verify} messages.
                     * @param message Connection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Connection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Connection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.Connection;

                    /**
                     * Decodes a Connection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Connection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.Connection;

                    /**
                     * Verifies a Connection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Connection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Connection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.Connection;

                    /**
                     * Creates a plain object from a Connection message. Also converts values to other types if specified.
                     * @param message Connection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.Connection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Connection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Connection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NodeConfig. */
                interface INodeConfig {

                    /** NodeConfig minNodeCount */
                    minNodeCount?: (number|null);

                    /** NodeConfig maxNodeCount */
                    maxNodeCount?: (number|null);
                }

                /** Represents a NodeConfig. */
                class NodeConfig implements INodeConfig {

                    /**
                     * Constructs a new NodeConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.INodeConfig);

                    /** NodeConfig minNodeCount. */
                    public minNodeCount: number;

                    /** NodeConfig maxNodeCount. */
                    public maxNodeCount: number;

                    /**
                     * Creates a new NodeConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NodeConfig instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.INodeConfig): google.cloud.connectors.v1.NodeConfig;

                    /**
                     * Encodes the specified NodeConfig message. Does not implicitly {@link google.cloud.connectors.v1.NodeConfig.verify|verify} messages.
                     * @param message NodeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.INodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NodeConfig message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.NodeConfig.verify|verify} messages.
                     * @param message NodeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.INodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NodeConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NodeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.NodeConfig;

                    /**
                     * Decodes a NodeConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NodeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.NodeConfig;

                    /**
                     * Verifies a NodeConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NodeConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NodeConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.NodeConfig;

                    /**
                     * Creates a plain object from a NodeConfig message. Also converts values to other types if specified.
                     * @param message NodeConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.NodeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NodeConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NodeConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ConnectionSchemaMetadata. */
                interface IConnectionSchemaMetadata {

                    /** ConnectionSchemaMetadata entities */
                    entities?: (string[]|null);

                    /** ConnectionSchemaMetadata actions */
                    actions?: (string[]|null);

                    /** ConnectionSchemaMetadata name */
                    name?: (string|null);

                    /** ConnectionSchemaMetadata updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectionSchemaMetadata refreshTime */
                    refreshTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectionSchemaMetadata state */
                    state?: (google.cloud.connectors.v1.ConnectionSchemaMetadata.State|keyof typeof google.cloud.connectors.v1.ConnectionSchemaMetadata.State|null);
                }

                /** Represents a ConnectionSchemaMetadata. */
                class ConnectionSchemaMetadata implements IConnectionSchemaMetadata {

                    /**
                     * Constructs a new ConnectionSchemaMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IConnectionSchemaMetadata);

                    /** ConnectionSchemaMetadata entities. */
                    public entities: string[];

                    /** ConnectionSchemaMetadata actions. */
                    public actions: string[];

                    /** ConnectionSchemaMetadata name. */
                    public name: string;

                    /** ConnectionSchemaMetadata updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectionSchemaMetadata refreshTime. */
                    public refreshTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectionSchemaMetadata state. */
                    public state: (google.cloud.connectors.v1.ConnectionSchemaMetadata.State|keyof typeof google.cloud.connectors.v1.ConnectionSchemaMetadata.State);

                    /**
                     * Creates a new ConnectionSchemaMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectionSchemaMetadata instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IConnectionSchemaMetadata): google.cloud.connectors.v1.ConnectionSchemaMetadata;

                    /**
                     * Encodes the specified ConnectionSchemaMetadata message. Does not implicitly {@link google.cloud.connectors.v1.ConnectionSchemaMetadata.verify|verify} messages.
                     * @param message ConnectionSchemaMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IConnectionSchemaMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConnectionSchemaMetadata message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ConnectionSchemaMetadata.verify|verify} messages.
                     * @param message ConnectionSchemaMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IConnectionSchemaMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConnectionSchemaMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConnectionSchemaMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ConnectionSchemaMetadata;

                    /**
                     * Decodes a ConnectionSchemaMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConnectionSchemaMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ConnectionSchemaMetadata;

                    /**
                     * Verifies a ConnectionSchemaMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConnectionSchemaMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConnectionSchemaMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ConnectionSchemaMetadata;

                    /**
                     * Creates a plain object from a ConnectionSchemaMetadata message. Also converts values to other types if specified.
                     * @param message ConnectionSchemaMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ConnectionSchemaMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConnectionSchemaMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConnectionSchemaMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ConnectionSchemaMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        REFRESHING = 1,
                        UPDATED = 2
                    }
                }

                /** Properties of a RuntimeEntitySchema. */
                interface IRuntimeEntitySchema {

                    /** RuntimeEntitySchema entity */
                    entity?: (string|null);

                    /** RuntimeEntitySchema fields */
                    fields?: (google.cloud.connectors.v1.RuntimeEntitySchema.IField[]|null);
                }

                /** Represents a RuntimeEntitySchema. */
                class RuntimeEntitySchema implements IRuntimeEntitySchema {

                    /**
                     * Constructs a new RuntimeEntitySchema.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IRuntimeEntitySchema);

                    /** RuntimeEntitySchema entity. */
                    public entity: string;

                    /** RuntimeEntitySchema fields. */
                    public fields: google.cloud.connectors.v1.RuntimeEntitySchema.IField[];

                    /**
                     * Creates a new RuntimeEntitySchema instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuntimeEntitySchema instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IRuntimeEntitySchema): google.cloud.connectors.v1.RuntimeEntitySchema;

                    /**
                     * Encodes the specified RuntimeEntitySchema message. Does not implicitly {@link google.cloud.connectors.v1.RuntimeEntitySchema.verify|verify} messages.
                     * @param message RuntimeEntitySchema message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IRuntimeEntitySchema, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuntimeEntitySchema message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.RuntimeEntitySchema.verify|verify} messages.
                     * @param message RuntimeEntitySchema message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IRuntimeEntitySchema, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuntimeEntitySchema message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuntimeEntitySchema
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.RuntimeEntitySchema;

                    /**
                     * Decodes a RuntimeEntitySchema message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuntimeEntitySchema
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.RuntimeEntitySchema;

                    /**
                     * Verifies a RuntimeEntitySchema message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuntimeEntitySchema message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuntimeEntitySchema
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.RuntimeEntitySchema;

                    /**
                     * Creates a plain object from a RuntimeEntitySchema message. Also converts values to other types if specified.
                     * @param message RuntimeEntitySchema
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.RuntimeEntitySchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuntimeEntitySchema to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RuntimeEntitySchema
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RuntimeEntitySchema {

                    /** Properties of a Field. */
                    interface IField {

                        /** Field field */
                        field?: (string|null);

                        /** Field description */
                        description?: (string|null);

                        /** Field dataType */
                        dataType?: (google.cloud.connectors.v1.DataType|keyof typeof google.cloud.connectors.v1.DataType|null);

                        /** Field key */
                        key?: (boolean|null);

                        /** Field readonly */
                        readonly?: (boolean|null);

                        /** Field nullable */
                        nullable?: (boolean|null);

                        /** Field defaultValue */
                        defaultValue?: (google.protobuf.IValue|null);

                        /** Field additionalDetails */
                        additionalDetails?: (google.protobuf.IStruct|null);
                    }

                    /** Represents a Field. */
                    class Field implements IField {

                        /**
                         * Constructs a new Field.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.connectors.v1.RuntimeEntitySchema.IField);

                        /** Field field. */
                        public field: string;

                        /** Field description. */
                        public description: string;

                        /** Field dataType. */
                        public dataType: (google.cloud.connectors.v1.DataType|keyof typeof google.cloud.connectors.v1.DataType);

                        /** Field key. */
                        public key: boolean;

                        /** Field readonly. */
                        public readonly: boolean;

                        /** Field nullable. */
                        public nullable: boolean;

                        /** Field defaultValue. */
                        public defaultValue?: (google.protobuf.IValue|null);

                        /** Field additionalDetails. */
                        public additionalDetails?: (google.protobuf.IStruct|null);

                        /**
                         * Creates a new Field instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Field instance
                         */
                        public static create(properties?: google.cloud.connectors.v1.RuntimeEntitySchema.IField): google.cloud.connectors.v1.RuntimeEntitySchema.Field;

                        /**
                         * Encodes the specified Field message. Does not implicitly {@link google.cloud.connectors.v1.RuntimeEntitySchema.Field.verify|verify} messages.
                         * @param message Field message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.connectors.v1.RuntimeEntitySchema.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Field message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.RuntimeEntitySchema.Field.verify|verify} messages.
                         * @param message Field message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.connectors.v1.RuntimeEntitySchema.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Field message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Field
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.RuntimeEntitySchema.Field;

                        /**
                         * Decodes a Field message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Field
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.RuntimeEntitySchema.Field;

                        /**
                         * Verifies a Field message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Field message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Field
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.RuntimeEntitySchema.Field;

                        /**
                         * Creates a plain object from a Field message. Also converts values to other types if specified.
                         * @param message Field
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.connectors.v1.RuntimeEntitySchema.Field, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Field to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Field
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a RuntimeActionSchema. */
                interface IRuntimeActionSchema {

                    /** RuntimeActionSchema action */
                    action?: (string|null);

                    /** RuntimeActionSchema inputParameters */
                    inputParameters?: (google.cloud.connectors.v1.RuntimeActionSchema.IInputParameter[]|null);

                    /** RuntimeActionSchema resultMetadata */
                    resultMetadata?: (google.cloud.connectors.v1.RuntimeActionSchema.IResultMetadata[]|null);
                }

                /** Represents a RuntimeActionSchema. */
                class RuntimeActionSchema implements IRuntimeActionSchema {

                    /**
                     * Constructs a new RuntimeActionSchema.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IRuntimeActionSchema);

                    /** RuntimeActionSchema action. */
                    public action: string;

                    /** RuntimeActionSchema inputParameters. */
                    public inputParameters: google.cloud.connectors.v1.RuntimeActionSchema.IInputParameter[];

                    /** RuntimeActionSchema resultMetadata. */
                    public resultMetadata: google.cloud.connectors.v1.RuntimeActionSchema.IResultMetadata[];

                    /**
                     * Creates a new RuntimeActionSchema instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuntimeActionSchema instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IRuntimeActionSchema): google.cloud.connectors.v1.RuntimeActionSchema;

                    /**
                     * Encodes the specified RuntimeActionSchema message. Does not implicitly {@link google.cloud.connectors.v1.RuntimeActionSchema.verify|verify} messages.
                     * @param message RuntimeActionSchema message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IRuntimeActionSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuntimeActionSchema message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.RuntimeActionSchema.verify|verify} messages.
                     * @param message RuntimeActionSchema message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IRuntimeActionSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuntimeActionSchema message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuntimeActionSchema
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.RuntimeActionSchema;

                    /**
                     * Decodes a RuntimeActionSchema message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuntimeActionSchema
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.RuntimeActionSchema;

                    /**
                     * Verifies a RuntimeActionSchema message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuntimeActionSchema message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuntimeActionSchema
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.RuntimeActionSchema;

                    /**
                     * Creates a plain object from a RuntimeActionSchema message. Also converts values to other types if specified.
                     * @param message RuntimeActionSchema
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.RuntimeActionSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuntimeActionSchema to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RuntimeActionSchema
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RuntimeActionSchema {

                    /** Properties of an InputParameter. */
                    interface IInputParameter {

                        /** InputParameter parameter */
                        parameter?: (string|null);

                        /** InputParameter description */
                        description?: (string|null);

                        /** InputParameter dataType */
                        dataType?: (google.cloud.connectors.v1.DataType|keyof typeof google.cloud.connectors.v1.DataType|null);

                        /** InputParameter nullable */
                        nullable?: (boolean|null);

                        /** InputParameter defaultValue */
                        defaultValue?: (google.protobuf.IValue|null);
                    }

                    /** Represents an InputParameter. */
                    class InputParameter implements IInputParameter {

                        /**
                         * Constructs a new InputParameter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.connectors.v1.RuntimeActionSchema.IInputParameter);

                        /** InputParameter parameter. */
                        public parameter: string;

                        /** InputParameter description. */
                        public description: string;

                        /** InputParameter dataType. */
                        public dataType: (google.cloud.connectors.v1.DataType|keyof typeof google.cloud.connectors.v1.DataType);

                        /** InputParameter nullable. */
                        public nullable: boolean;

                        /** InputParameter defaultValue. */
                        public defaultValue?: (google.protobuf.IValue|null);

                        /**
                         * Creates a new InputParameter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InputParameter instance
                         */
                        public static create(properties?: google.cloud.connectors.v1.RuntimeActionSchema.IInputParameter): google.cloud.connectors.v1.RuntimeActionSchema.InputParameter;

                        /**
                         * Encodes the specified InputParameter message. Does not implicitly {@link google.cloud.connectors.v1.RuntimeActionSchema.InputParameter.verify|verify} messages.
                         * @param message InputParameter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.connectors.v1.RuntimeActionSchema.IInputParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InputParameter message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.RuntimeActionSchema.InputParameter.verify|verify} messages.
                         * @param message InputParameter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.connectors.v1.RuntimeActionSchema.IInputParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InputParameter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InputParameter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.RuntimeActionSchema.InputParameter;

                        /**
                         * Decodes an InputParameter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InputParameter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.RuntimeActionSchema.InputParameter;

                        /**
                         * Verifies an InputParameter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InputParameter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InputParameter
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.RuntimeActionSchema.InputParameter;

                        /**
                         * Creates a plain object from an InputParameter message. Also converts values to other types if specified.
                         * @param message InputParameter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.connectors.v1.RuntimeActionSchema.InputParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InputParameter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InputParameter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ResultMetadata. */
                    interface IResultMetadata {

                        /** ResultMetadata field */
                        field?: (string|null);

                        /** ResultMetadata description */
                        description?: (string|null);

                        /** ResultMetadata dataType */
                        dataType?: (google.cloud.connectors.v1.DataType|keyof typeof google.cloud.connectors.v1.DataType|null);
                    }

                    /** Represents a ResultMetadata. */
                    class ResultMetadata implements IResultMetadata {

                        /**
                         * Constructs a new ResultMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.connectors.v1.RuntimeActionSchema.IResultMetadata);

                        /** ResultMetadata field. */
                        public field: string;

                        /** ResultMetadata description. */
                        public description: string;

                        /** ResultMetadata dataType. */
                        public dataType: (google.cloud.connectors.v1.DataType|keyof typeof google.cloud.connectors.v1.DataType);

                        /**
                         * Creates a new ResultMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResultMetadata instance
                         */
                        public static create(properties?: google.cloud.connectors.v1.RuntimeActionSchema.IResultMetadata): google.cloud.connectors.v1.RuntimeActionSchema.ResultMetadata;

                        /**
                         * Encodes the specified ResultMetadata message. Does not implicitly {@link google.cloud.connectors.v1.RuntimeActionSchema.ResultMetadata.verify|verify} messages.
                         * @param message ResultMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.connectors.v1.RuntimeActionSchema.IResultMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResultMetadata message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.RuntimeActionSchema.ResultMetadata.verify|verify} messages.
                         * @param message ResultMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.connectors.v1.RuntimeActionSchema.IResultMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResultMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResultMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.RuntimeActionSchema.ResultMetadata;

                        /**
                         * Decodes a ResultMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResultMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.RuntimeActionSchema.ResultMetadata;

                        /**
                         * Verifies a ResultMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResultMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResultMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.RuntimeActionSchema.ResultMetadata;

                        /**
                         * Creates a plain object from a ResultMetadata message. Also converts values to other types if specified.
                         * @param message ResultMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.connectors.v1.RuntimeActionSchema.ResultMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResultMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResultMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a LockConfig. */
                interface ILockConfig {

                    /** LockConfig locked */
                    locked?: (boolean|null);

                    /** LockConfig reason */
                    reason?: (string|null);
                }

                /** Represents a LockConfig. */
                class LockConfig implements ILockConfig {

                    /**
                     * Constructs a new LockConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.ILockConfig);

                    /** LockConfig locked. */
                    public locked: boolean;

                    /** LockConfig reason. */
                    public reason: string;

                    /**
                     * Creates a new LockConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LockConfig instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.ILockConfig): google.cloud.connectors.v1.LockConfig;

                    /**
                     * Encodes the specified LockConfig message. Does not implicitly {@link google.cloud.connectors.v1.LockConfig.verify|verify} messages.
                     * @param message LockConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.ILockConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LockConfig message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.LockConfig.verify|verify} messages.
                     * @param message LockConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.ILockConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LockConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LockConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.LockConfig;

                    /**
                     * Decodes a LockConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LockConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.LockConfig;

                    /**
                     * Verifies a LockConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LockConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LockConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.LockConfig;

                    /**
                     * Creates a plain object from a LockConfig message. Also converts values to other types if specified.
                     * @param message LockConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.LockConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LockConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LockConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConnectionsRequest. */
                interface IListConnectionsRequest {

                    /** ListConnectionsRequest parent */
                    parent?: (string|null);

                    /** ListConnectionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConnectionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListConnectionsRequest filter */
                    filter?: (string|null);

                    /** ListConnectionsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListConnectionsRequest view */
                    view?: (google.cloud.connectors.v1.ConnectionView|keyof typeof google.cloud.connectors.v1.ConnectionView|null);
                }

                /** Represents a ListConnectionsRequest. */
                class ListConnectionsRequest implements IListConnectionsRequest {

                    /**
                     * Constructs a new ListConnectionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IListConnectionsRequest);

                    /** ListConnectionsRequest parent. */
                    public parent: string;

                    /** ListConnectionsRequest pageSize. */
                    public pageSize: number;

                    /** ListConnectionsRequest pageToken. */
                    public pageToken: string;

                    /** ListConnectionsRequest filter. */
                    public filter: string;

                    /** ListConnectionsRequest orderBy. */
                    public orderBy: string;

                    /** ListConnectionsRequest view. */
                    public view: (google.cloud.connectors.v1.ConnectionView|keyof typeof google.cloud.connectors.v1.ConnectionView);

                    /**
                     * Creates a new ListConnectionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectionsRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IListConnectionsRequest): google.cloud.connectors.v1.ListConnectionsRequest;

                    /**
                     * Encodes the specified ListConnectionsRequest message. Does not implicitly {@link google.cloud.connectors.v1.ListConnectionsRequest.verify|verify} messages.
                     * @param message ListConnectionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IListConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectionsRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ListConnectionsRequest.verify|verify} messages.
                     * @param message ListConnectionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IListConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ListConnectionsRequest;

                    /**
                     * Decodes a ListConnectionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ListConnectionsRequest;

                    /**
                     * Verifies a ListConnectionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ListConnectionsRequest;

                    /**
                     * Creates a plain object from a ListConnectionsRequest message. Also converts values to other types if specified.
                     * @param message ListConnectionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ListConnectionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConnectionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConnectionsResponse. */
                interface IListConnectionsResponse {

                    /** ListConnectionsResponse connections */
                    connections?: (google.cloud.connectors.v1.IConnection[]|null);

                    /** ListConnectionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListConnectionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListConnectionsResponse. */
                class ListConnectionsResponse implements IListConnectionsResponse {

                    /**
                     * Constructs a new ListConnectionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IListConnectionsResponse);

                    /** ListConnectionsResponse connections. */
                    public connections: google.cloud.connectors.v1.IConnection[];

                    /** ListConnectionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListConnectionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListConnectionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectionsResponse instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IListConnectionsResponse): google.cloud.connectors.v1.ListConnectionsResponse;

                    /**
                     * Encodes the specified ListConnectionsResponse message. Does not implicitly {@link google.cloud.connectors.v1.ListConnectionsResponse.verify|verify} messages.
                     * @param message ListConnectionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IListConnectionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectionsResponse message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ListConnectionsResponse.verify|verify} messages.
                     * @param message ListConnectionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IListConnectionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ListConnectionsResponse;

                    /**
                     * Decodes a ListConnectionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ListConnectionsResponse;

                    /**
                     * Verifies a ListConnectionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ListConnectionsResponse;

                    /**
                     * Creates a plain object from a ListConnectionsResponse message. Also converts values to other types if specified.
                     * @param message ListConnectionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ListConnectionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConnectionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetConnectionRequest. */
                interface IGetConnectionRequest {

                    /** GetConnectionRequest name */
                    name?: (string|null);

                    /** GetConnectionRequest view */
                    view?: (google.cloud.connectors.v1.ConnectionView|keyof typeof google.cloud.connectors.v1.ConnectionView|null);
                }

                /** Represents a GetConnectionRequest. */
                class GetConnectionRequest implements IGetConnectionRequest {

                    /**
                     * Constructs a new GetConnectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IGetConnectionRequest);

                    /** GetConnectionRequest name. */
                    public name: string;

                    /** GetConnectionRequest view. */
                    public view: (google.cloud.connectors.v1.ConnectionView|keyof typeof google.cloud.connectors.v1.ConnectionView);

                    /**
                     * Creates a new GetConnectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConnectionRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IGetConnectionRequest): google.cloud.connectors.v1.GetConnectionRequest;

                    /**
                     * Encodes the specified GetConnectionRequest message. Does not implicitly {@link google.cloud.connectors.v1.GetConnectionRequest.verify|verify} messages.
                     * @param message GetConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IGetConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.GetConnectionRequest.verify|verify} messages.
                     * @param message GetConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IGetConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConnectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.GetConnectionRequest;

                    /**
                     * Decodes a GetConnectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.GetConnectionRequest;

                    /**
                     * Verifies a GetConnectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConnectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConnectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.GetConnectionRequest;

                    /**
                     * Creates a plain object from a GetConnectionRequest message. Also converts values to other types if specified.
                     * @param message GetConnectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.GetConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConnectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetConnectionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateConnectionRequest. */
                interface ICreateConnectionRequest {

                    /** CreateConnectionRequest parent */
                    parent?: (string|null);

                    /** CreateConnectionRequest connectionId */
                    connectionId?: (string|null);

                    /** CreateConnectionRequest connection */
                    connection?: (google.cloud.connectors.v1.IConnection|null);
                }

                /** Represents a CreateConnectionRequest. */
                class CreateConnectionRequest implements ICreateConnectionRequest {

                    /**
                     * Constructs a new CreateConnectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.ICreateConnectionRequest);

                    /** CreateConnectionRequest parent. */
                    public parent: string;

                    /** CreateConnectionRequest connectionId. */
                    public connectionId: string;

                    /** CreateConnectionRequest connection. */
                    public connection?: (google.cloud.connectors.v1.IConnection|null);

                    /**
                     * Creates a new CreateConnectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateConnectionRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.ICreateConnectionRequest): google.cloud.connectors.v1.CreateConnectionRequest;

                    /**
                     * Encodes the specified CreateConnectionRequest message. Does not implicitly {@link google.cloud.connectors.v1.CreateConnectionRequest.verify|verify} messages.
                     * @param message CreateConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.ICreateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.CreateConnectionRequest.verify|verify} messages.
                     * @param message CreateConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.ICreateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateConnectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.CreateConnectionRequest;

                    /**
                     * Decodes a CreateConnectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.CreateConnectionRequest;

                    /**
                     * Verifies a CreateConnectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateConnectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateConnectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.CreateConnectionRequest;

                    /**
                     * Creates a plain object from a CreateConnectionRequest message. Also converts values to other types if specified.
                     * @param message CreateConnectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.CreateConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateConnectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateConnectionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateConnectionRequest. */
                interface IUpdateConnectionRequest {

                    /** UpdateConnectionRequest connection */
                    connection?: (google.cloud.connectors.v1.IConnection|null);

                    /** UpdateConnectionRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateConnectionRequest. */
                class UpdateConnectionRequest implements IUpdateConnectionRequest {

                    /**
                     * Constructs a new UpdateConnectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IUpdateConnectionRequest);

                    /** UpdateConnectionRequest connection. */
                    public connection?: (google.cloud.connectors.v1.IConnection|null);

                    /** UpdateConnectionRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateConnectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateConnectionRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IUpdateConnectionRequest): google.cloud.connectors.v1.UpdateConnectionRequest;

                    /**
                     * Encodes the specified UpdateConnectionRequest message. Does not implicitly {@link google.cloud.connectors.v1.UpdateConnectionRequest.verify|verify} messages.
                     * @param message UpdateConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IUpdateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.UpdateConnectionRequest.verify|verify} messages.
                     * @param message UpdateConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IUpdateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateConnectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.UpdateConnectionRequest;

                    /**
                     * Decodes an UpdateConnectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.UpdateConnectionRequest;

                    /**
                     * Verifies an UpdateConnectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateConnectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateConnectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.UpdateConnectionRequest;

                    /**
                     * Creates a plain object from an UpdateConnectionRequest message. Also converts values to other types if specified.
                     * @param message UpdateConnectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.UpdateConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateConnectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateConnectionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteConnectionRequest. */
                interface IDeleteConnectionRequest {

                    /** DeleteConnectionRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteConnectionRequest. */
                class DeleteConnectionRequest implements IDeleteConnectionRequest {

                    /**
                     * Constructs a new DeleteConnectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IDeleteConnectionRequest);

                    /** DeleteConnectionRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteConnectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteConnectionRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IDeleteConnectionRequest): google.cloud.connectors.v1.DeleteConnectionRequest;

                    /**
                     * Encodes the specified DeleteConnectionRequest message. Does not implicitly {@link google.cloud.connectors.v1.DeleteConnectionRequest.verify|verify} messages.
                     * @param message DeleteConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IDeleteConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.DeleteConnectionRequest.verify|verify} messages.
                     * @param message DeleteConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IDeleteConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteConnectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.DeleteConnectionRequest;

                    /**
                     * Decodes a DeleteConnectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.DeleteConnectionRequest;

                    /**
                     * Verifies a DeleteConnectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteConnectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteConnectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.DeleteConnectionRequest;

                    /**
                     * Creates a plain object from a DeleteConnectionRequest message. Also converts values to other types if specified.
                     * @param message DeleteConnectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.DeleteConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteConnectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteConnectionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetConnectionSchemaMetadataRequest. */
                interface IGetConnectionSchemaMetadataRequest {

                    /** GetConnectionSchemaMetadataRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConnectionSchemaMetadataRequest. */
                class GetConnectionSchemaMetadataRequest implements IGetConnectionSchemaMetadataRequest {

                    /**
                     * Constructs a new GetConnectionSchemaMetadataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IGetConnectionSchemaMetadataRequest);

                    /** GetConnectionSchemaMetadataRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConnectionSchemaMetadataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConnectionSchemaMetadataRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IGetConnectionSchemaMetadataRequest): google.cloud.connectors.v1.GetConnectionSchemaMetadataRequest;

                    /**
                     * Encodes the specified GetConnectionSchemaMetadataRequest message. Does not implicitly {@link google.cloud.connectors.v1.GetConnectionSchemaMetadataRequest.verify|verify} messages.
                     * @param message GetConnectionSchemaMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IGetConnectionSchemaMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConnectionSchemaMetadataRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.GetConnectionSchemaMetadataRequest.verify|verify} messages.
                     * @param message GetConnectionSchemaMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IGetConnectionSchemaMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConnectionSchemaMetadataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConnectionSchemaMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.GetConnectionSchemaMetadataRequest;

                    /**
                     * Decodes a GetConnectionSchemaMetadataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConnectionSchemaMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.GetConnectionSchemaMetadataRequest;

                    /**
                     * Verifies a GetConnectionSchemaMetadataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConnectionSchemaMetadataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConnectionSchemaMetadataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.GetConnectionSchemaMetadataRequest;

                    /**
                     * Creates a plain object from a GetConnectionSchemaMetadataRequest message. Also converts values to other types if specified.
                     * @param message GetConnectionSchemaMetadataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.GetConnectionSchemaMetadataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConnectionSchemaMetadataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetConnectionSchemaMetadataRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RefreshConnectionSchemaMetadataRequest. */
                interface IRefreshConnectionSchemaMetadataRequest {

                    /** RefreshConnectionSchemaMetadataRequest name */
                    name?: (string|null);
                }

                /** Represents a RefreshConnectionSchemaMetadataRequest. */
                class RefreshConnectionSchemaMetadataRequest implements IRefreshConnectionSchemaMetadataRequest {

                    /**
                     * Constructs a new RefreshConnectionSchemaMetadataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IRefreshConnectionSchemaMetadataRequest);

                    /** RefreshConnectionSchemaMetadataRequest name. */
                    public name: string;

                    /**
                     * Creates a new RefreshConnectionSchemaMetadataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RefreshConnectionSchemaMetadataRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IRefreshConnectionSchemaMetadataRequest): google.cloud.connectors.v1.RefreshConnectionSchemaMetadataRequest;

                    /**
                     * Encodes the specified RefreshConnectionSchemaMetadataRequest message. Does not implicitly {@link google.cloud.connectors.v1.RefreshConnectionSchemaMetadataRequest.verify|verify} messages.
                     * @param message RefreshConnectionSchemaMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IRefreshConnectionSchemaMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RefreshConnectionSchemaMetadataRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.RefreshConnectionSchemaMetadataRequest.verify|verify} messages.
                     * @param message RefreshConnectionSchemaMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IRefreshConnectionSchemaMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RefreshConnectionSchemaMetadataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RefreshConnectionSchemaMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.RefreshConnectionSchemaMetadataRequest;

                    /**
                     * Decodes a RefreshConnectionSchemaMetadataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RefreshConnectionSchemaMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.RefreshConnectionSchemaMetadataRequest;

                    /**
                     * Verifies a RefreshConnectionSchemaMetadataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RefreshConnectionSchemaMetadataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RefreshConnectionSchemaMetadataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.RefreshConnectionSchemaMetadataRequest;

                    /**
                     * Creates a plain object from a RefreshConnectionSchemaMetadataRequest message. Also converts values to other types if specified.
                     * @param message RefreshConnectionSchemaMetadataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.RefreshConnectionSchemaMetadataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RefreshConnectionSchemaMetadataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RefreshConnectionSchemaMetadataRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRuntimeEntitySchemasRequest. */
                interface IListRuntimeEntitySchemasRequest {

                    /** ListRuntimeEntitySchemasRequest parent */
                    parent?: (string|null);

                    /** ListRuntimeEntitySchemasRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRuntimeEntitySchemasRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRuntimeEntitySchemasRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListRuntimeEntitySchemasRequest. */
                class ListRuntimeEntitySchemasRequest implements IListRuntimeEntitySchemasRequest {

                    /**
                     * Constructs a new ListRuntimeEntitySchemasRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IListRuntimeEntitySchemasRequest);

                    /** ListRuntimeEntitySchemasRequest parent. */
                    public parent: string;

                    /** ListRuntimeEntitySchemasRequest pageSize. */
                    public pageSize: number;

                    /** ListRuntimeEntitySchemasRequest pageToken. */
                    public pageToken: string;

                    /** ListRuntimeEntitySchemasRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListRuntimeEntitySchemasRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimeEntitySchemasRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IListRuntimeEntitySchemasRequest): google.cloud.connectors.v1.ListRuntimeEntitySchemasRequest;

                    /**
                     * Encodes the specified ListRuntimeEntitySchemasRequest message. Does not implicitly {@link google.cloud.connectors.v1.ListRuntimeEntitySchemasRequest.verify|verify} messages.
                     * @param message ListRuntimeEntitySchemasRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IListRuntimeEntitySchemasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimeEntitySchemasRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ListRuntimeEntitySchemasRequest.verify|verify} messages.
                     * @param message ListRuntimeEntitySchemasRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IListRuntimeEntitySchemasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimeEntitySchemasRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimeEntitySchemasRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ListRuntimeEntitySchemasRequest;

                    /**
                     * Decodes a ListRuntimeEntitySchemasRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimeEntitySchemasRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ListRuntimeEntitySchemasRequest;

                    /**
                     * Verifies a ListRuntimeEntitySchemasRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimeEntitySchemasRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimeEntitySchemasRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ListRuntimeEntitySchemasRequest;

                    /**
                     * Creates a plain object from a ListRuntimeEntitySchemasRequest message. Also converts values to other types if specified.
                     * @param message ListRuntimeEntitySchemasRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ListRuntimeEntitySchemasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimeEntitySchemasRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRuntimeEntitySchemasRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRuntimeEntitySchemasResponse. */
                interface IListRuntimeEntitySchemasResponse {

                    /** ListRuntimeEntitySchemasResponse runtimeEntitySchemas */
                    runtimeEntitySchemas?: (google.cloud.connectors.v1.IRuntimeEntitySchema[]|null);

                    /** ListRuntimeEntitySchemasResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRuntimeEntitySchemasResponse. */
                class ListRuntimeEntitySchemasResponse implements IListRuntimeEntitySchemasResponse {

                    /**
                     * Constructs a new ListRuntimeEntitySchemasResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IListRuntimeEntitySchemasResponse);

                    /** ListRuntimeEntitySchemasResponse runtimeEntitySchemas. */
                    public runtimeEntitySchemas: google.cloud.connectors.v1.IRuntimeEntitySchema[];

                    /** ListRuntimeEntitySchemasResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRuntimeEntitySchemasResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimeEntitySchemasResponse instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IListRuntimeEntitySchemasResponse): google.cloud.connectors.v1.ListRuntimeEntitySchemasResponse;

                    /**
                     * Encodes the specified ListRuntimeEntitySchemasResponse message. Does not implicitly {@link google.cloud.connectors.v1.ListRuntimeEntitySchemasResponse.verify|verify} messages.
                     * @param message ListRuntimeEntitySchemasResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IListRuntimeEntitySchemasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimeEntitySchemasResponse message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ListRuntimeEntitySchemasResponse.verify|verify} messages.
                     * @param message ListRuntimeEntitySchemasResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IListRuntimeEntitySchemasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimeEntitySchemasResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimeEntitySchemasResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ListRuntimeEntitySchemasResponse;

                    /**
                     * Decodes a ListRuntimeEntitySchemasResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimeEntitySchemasResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ListRuntimeEntitySchemasResponse;

                    /**
                     * Verifies a ListRuntimeEntitySchemasResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimeEntitySchemasResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimeEntitySchemasResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ListRuntimeEntitySchemasResponse;

                    /**
                     * Creates a plain object from a ListRuntimeEntitySchemasResponse message. Also converts values to other types if specified.
                     * @param message ListRuntimeEntitySchemasResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ListRuntimeEntitySchemasResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimeEntitySchemasResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRuntimeEntitySchemasResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRuntimeActionSchemasRequest. */
                interface IListRuntimeActionSchemasRequest {

                    /** ListRuntimeActionSchemasRequest parent */
                    parent?: (string|null);

                    /** ListRuntimeActionSchemasRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRuntimeActionSchemasRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRuntimeActionSchemasRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListRuntimeActionSchemasRequest. */
                class ListRuntimeActionSchemasRequest implements IListRuntimeActionSchemasRequest {

                    /**
                     * Constructs a new ListRuntimeActionSchemasRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IListRuntimeActionSchemasRequest);

                    /** ListRuntimeActionSchemasRequest parent. */
                    public parent: string;

                    /** ListRuntimeActionSchemasRequest pageSize. */
                    public pageSize: number;

                    /** ListRuntimeActionSchemasRequest pageToken. */
                    public pageToken: string;

                    /** ListRuntimeActionSchemasRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListRuntimeActionSchemasRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimeActionSchemasRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IListRuntimeActionSchemasRequest): google.cloud.connectors.v1.ListRuntimeActionSchemasRequest;

                    /**
                     * Encodes the specified ListRuntimeActionSchemasRequest message. Does not implicitly {@link google.cloud.connectors.v1.ListRuntimeActionSchemasRequest.verify|verify} messages.
                     * @param message ListRuntimeActionSchemasRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IListRuntimeActionSchemasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimeActionSchemasRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ListRuntimeActionSchemasRequest.verify|verify} messages.
                     * @param message ListRuntimeActionSchemasRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IListRuntimeActionSchemasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimeActionSchemasRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimeActionSchemasRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ListRuntimeActionSchemasRequest;

                    /**
                     * Decodes a ListRuntimeActionSchemasRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimeActionSchemasRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ListRuntimeActionSchemasRequest;

                    /**
                     * Verifies a ListRuntimeActionSchemasRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimeActionSchemasRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimeActionSchemasRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ListRuntimeActionSchemasRequest;

                    /**
                     * Creates a plain object from a ListRuntimeActionSchemasRequest message. Also converts values to other types if specified.
                     * @param message ListRuntimeActionSchemasRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ListRuntimeActionSchemasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimeActionSchemasRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRuntimeActionSchemasRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRuntimeActionSchemasResponse. */
                interface IListRuntimeActionSchemasResponse {

                    /** ListRuntimeActionSchemasResponse runtimeActionSchemas */
                    runtimeActionSchemas?: (google.cloud.connectors.v1.IRuntimeActionSchema[]|null);

                    /** ListRuntimeActionSchemasResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRuntimeActionSchemasResponse. */
                class ListRuntimeActionSchemasResponse implements IListRuntimeActionSchemasResponse {

                    /**
                     * Constructs a new ListRuntimeActionSchemasResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IListRuntimeActionSchemasResponse);

                    /** ListRuntimeActionSchemasResponse runtimeActionSchemas. */
                    public runtimeActionSchemas: google.cloud.connectors.v1.IRuntimeActionSchema[];

                    /** ListRuntimeActionSchemasResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRuntimeActionSchemasResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimeActionSchemasResponse instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IListRuntimeActionSchemasResponse): google.cloud.connectors.v1.ListRuntimeActionSchemasResponse;

                    /**
                     * Encodes the specified ListRuntimeActionSchemasResponse message. Does not implicitly {@link google.cloud.connectors.v1.ListRuntimeActionSchemasResponse.verify|verify} messages.
                     * @param message ListRuntimeActionSchemasResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IListRuntimeActionSchemasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimeActionSchemasResponse message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ListRuntimeActionSchemasResponse.verify|verify} messages.
                     * @param message ListRuntimeActionSchemasResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IListRuntimeActionSchemasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimeActionSchemasResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimeActionSchemasResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ListRuntimeActionSchemasResponse;

                    /**
                     * Decodes a ListRuntimeActionSchemasResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimeActionSchemasResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ListRuntimeActionSchemasResponse;

                    /**
                     * Verifies a ListRuntimeActionSchemasResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimeActionSchemasResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimeActionSchemasResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ListRuntimeActionSchemasResponse;

                    /**
                     * Creates a plain object from a ListRuntimeActionSchemasResponse message. Also converts values to other types if specified.
                     * @param message ListRuntimeActionSchemasResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ListRuntimeActionSchemasResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimeActionSchemasResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRuntimeActionSchemasResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ConnectionStatus. */
                interface IConnectionStatus {

                    /** ConnectionStatus state */
                    state?: (google.cloud.connectors.v1.ConnectionStatus.State|keyof typeof google.cloud.connectors.v1.ConnectionStatus.State|null);

                    /** ConnectionStatus description */
                    description?: (string|null);

                    /** ConnectionStatus status */
                    status?: (string|null);
                }

                /** Represents a ConnectionStatus. */
                class ConnectionStatus implements IConnectionStatus {

                    /**
                     * Constructs a new ConnectionStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IConnectionStatus);

                    /** ConnectionStatus state. */
                    public state: (google.cloud.connectors.v1.ConnectionStatus.State|keyof typeof google.cloud.connectors.v1.ConnectionStatus.State);

                    /** ConnectionStatus description. */
                    public description: string;

                    /** ConnectionStatus status. */
                    public status: string;

                    /**
                     * Creates a new ConnectionStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectionStatus instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IConnectionStatus): google.cloud.connectors.v1.ConnectionStatus;

                    /**
                     * Encodes the specified ConnectionStatus message. Does not implicitly {@link google.cloud.connectors.v1.ConnectionStatus.verify|verify} messages.
                     * @param message ConnectionStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IConnectionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConnectionStatus message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ConnectionStatus.verify|verify} messages.
                     * @param message ConnectionStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IConnectionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConnectionStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConnectionStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ConnectionStatus;

                    /**
                     * Decodes a ConnectionStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConnectionStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ConnectionStatus;

                    /**
                     * Verifies a ConnectionStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConnectionStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConnectionStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ConnectionStatus;

                    /**
                     * Creates a plain object from a ConnectionStatus message. Also converts values to other types if specified.
                     * @param message ConnectionStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ConnectionStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConnectionStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConnectionStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ConnectionStatus {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        INACTIVE = 3,
                        DELETING = 4,
                        UPDATING = 5,
                        ERROR = 6,
                        AUTHORIZATION_REQUIRED = 7
                    }
                }

                /** DataType enum. */
                enum DataType {
                    DATA_TYPE_UNSPECIFIED = 0,
                    DATA_TYPE_INT = 1,
                    DATA_TYPE_SMALLINT = 2,
                    DATA_TYPE_DOUBLE = 3,
                    DATA_TYPE_DATE = 4,
                    DATA_TYPE_DATETIME = 5,
                    DATA_TYPE_TIME = 6,
                    DATA_TYPE_STRING = 7,
                    DATA_TYPE_LONG = 8,
                    DATA_TYPE_BOOLEAN = 9,
                    DATA_TYPE_DECIMAL = 10,
                    DATA_TYPE_UUID = 11,
                    DATA_TYPE_BLOB = 12,
                    DATA_TYPE_BIT = 13,
                    DATA_TYPE_TINYINT = 14,
                    DATA_TYPE_INTEGER = 15,
                    DATA_TYPE_BIGINT = 16,
                    DATA_TYPE_FLOAT = 17,
                    DATA_TYPE_REAL = 18,
                    DATA_TYPE_NUMERIC = 19,
                    DATA_TYPE_CHAR = 20,
                    DATA_TYPE_VARCHAR = 21,
                    DATA_TYPE_LONGVARCHAR = 22,
                    DATA_TYPE_TIMESTAMP = 23,
                    DATA_TYPE_NCHAR = 24,
                    DATA_TYPE_NVARCHAR = 25,
                    DATA_TYPE_LONGNVARCHAR = 26,
                    DATA_TYPE_NULL = 27,
                    DATA_TYPE_OTHER = 28,
                    DATA_TYPE_JAVA_OBJECT = 29,
                    DATA_TYPE_DISTINCT = 30,
                    DATA_TYPE_STRUCT = 31,
                    DATA_TYPE_ARRAY = 32,
                    DATA_TYPE_CLOB = 33,
                    DATA_TYPE_REF = 34,
                    DATA_TYPE_DATALINK = 35,
                    DATA_TYPE_ROWID = 36,
                    DATA_TYPE_BINARY = 37,
                    DATA_TYPE_VARBINARY = 38,
                    DATA_TYPE_LONGVARBINARY = 39,
                    DATA_TYPE_NCLOB = 40,
                    DATA_TYPE_SQLXML = 41,
                    DATA_TYPE_REF_CURSOR = 42,
                    DATA_TYPE_TIME_WITH_TIMEZONE = 43,
                    DATA_TYPE_TIMESTAMP_WITH_TIMEZONE = 44
                }

                /** ConnectionView enum. */
                enum ConnectionView {
                    CONNECTION_VIEW_UNSPECIFIED = 0,
                    BASIC = 1,
                    FULL = 2
                }

                /** Properties of a DestinationConfig. */
                interface IDestinationConfig {

                    /** DestinationConfig key */
                    key?: (string|null);

                    /** DestinationConfig destinations */
                    destinations?: (google.cloud.connectors.v1.IDestination[]|null);
                }

                /** Represents a DestinationConfig. */
                class DestinationConfig implements IDestinationConfig {

                    /**
                     * Constructs a new DestinationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IDestinationConfig);

                    /** DestinationConfig key. */
                    public key: string;

                    /** DestinationConfig destinations. */
                    public destinations: google.cloud.connectors.v1.IDestination[];

                    /**
                     * Creates a new DestinationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DestinationConfig instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IDestinationConfig): google.cloud.connectors.v1.DestinationConfig;

                    /**
                     * Encodes the specified DestinationConfig message. Does not implicitly {@link google.cloud.connectors.v1.DestinationConfig.verify|verify} messages.
                     * @param message DestinationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IDestinationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DestinationConfig message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.DestinationConfig.verify|verify} messages.
                     * @param message DestinationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IDestinationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DestinationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DestinationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.DestinationConfig;

                    /**
                     * Decodes a DestinationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DestinationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.DestinationConfig;

                    /**
                     * Verifies a DestinationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DestinationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DestinationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.DestinationConfig;

                    /**
                     * Creates a plain object from a DestinationConfig message. Also converts values to other types if specified.
                     * @param message DestinationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.DestinationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DestinationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DestinationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Destination. */
                interface IDestination {

                    /** Destination serviceAttachment */
                    serviceAttachment?: (string|null);

                    /** Destination host */
                    host?: (string|null);

                    /** Destination port */
                    port?: (number|null);
                }

                /** Represents a Destination. */
                class Destination implements IDestination {

                    /**
                     * Constructs a new Destination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IDestination);

                    /** Destination serviceAttachment. */
                    public serviceAttachment?: (string|null);

                    /** Destination host. */
                    public host?: (string|null);

                    /** Destination port. */
                    public port: number;

                    /** Destination destination. */
                    public destination?: ("serviceAttachment"|"host");

                    /**
                     * Creates a new Destination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Destination instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IDestination): google.cloud.connectors.v1.Destination;

                    /**
                     * Encodes the specified Destination message. Does not implicitly {@link google.cloud.connectors.v1.Destination.verify|verify} messages.
                     * @param message Destination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Destination message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.Destination.verify|verify} messages.
                     * @param message Destination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Destination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Destination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.Destination;

                    /**
                     * Decodes a Destination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Destination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.Destination;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.Destination;

                    /**
                     * Creates a plain object from a Destination message. Also converts values to other types if specified.
                     * @param message Destination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.Destination, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a SslConfigTemplate. */
                interface ISslConfigTemplate {

                    /** SslConfigTemplate sslType */
                    sslType?: (google.cloud.connectors.v1.SslType|keyof typeof google.cloud.connectors.v1.SslType|null);

                    /** SslConfigTemplate isTlsMandatory */
                    isTlsMandatory?: (boolean|null);

                    /** SslConfigTemplate serverCertType */
                    serverCertType?: (google.cloud.connectors.v1.CertType[]|null);

                    /** SslConfigTemplate clientCertType */
                    clientCertType?: (google.cloud.connectors.v1.CertType[]|null);

                    /** SslConfigTemplate additionalVariables */
                    additionalVariables?: (google.cloud.connectors.v1.IConfigVariableTemplate[]|null);
                }

                /** Represents a SslConfigTemplate. */
                class SslConfigTemplate implements ISslConfigTemplate {

                    /**
                     * Constructs a new SslConfigTemplate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.ISslConfigTemplate);

                    /** SslConfigTemplate sslType. */
                    public sslType: (google.cloud.connectors.v1.SslType|keyof typeof google.cloud.connectors.v1.SslType);

                    /** SslConfigTemplate isTlsMandatory. */
                    public isTlsMandatory: boolean;

                    /** SslConfigTemplate serverCertType. */
                    public serverCertType: google.cloud.connectors.v1.CertType[];

                    /** SslConfigTemplate clientCertType. */
                    public clientCertType: google.cloud.connectors.v1.CertType[];

                    /** SslConfigTemplate additionalVariables. */
                    public additionalVariables: google.cloud.connectors.v1.IConfigVariableTemplate[];

                    /**
                     * Creates a new SslConfigTemplate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SslConfigTemplate instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.ISslConfigTemplate): google.cloud.connectors.v1.SslConfigTemplate;

                    /**
                     * Encodes the specified SslConfigTemplate message. Does not implicitly {@link google.cloud.connectors.v1.SslConfigTemplate.verify|verify} messages.
                     * @param message SslConfigTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.ISslConfigTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SslConfigTemplate message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.SslConfigTemplate.verify|verify} messages.
                     * @param message SslConfigTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.ISslConfigTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SslConfigTemplate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SslConfigTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.SslConfigTemplate;

                    /**
                     * Decodes a SslConfigTemplate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SslConfigTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.SslConfigTemplate;

                    /**
                     * Verifies a SslConfigTemplate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SslConfigTemplate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SslConfigTemplate
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.SslConfigTemplate;

                    /**
                     * Creates a plain object from a SslConfigTemplate message. Also converts values to other types if specified.
                     * @param message SslConfigTemplate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.SslConfigTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SslConfigTemplate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SslConfigTemplate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SslConfig. */
                interface ISslConfig {

                    /** SslConfig type */
                    type?: (google.cloud.connectors.v1.SslType|keyof typeof google.cloud.connectors.v1.SslType|null);

                    /** SslConfig trustModel */
                    trustModel?: (google.cloud.connectors.v1.SslConfig.TrustModel|keyof typeof google.cloud.connectors.v1.SslConfig.TrustModel|null);

                    /** SslConfig privateServerCertificate */
                    privateServerCertificate?: (google.cloud.connectors.v1.ISecret|null);

                    /** SslConfig clientCertificate */
                    clientCertificate?: (google.cloud.connectors.v1.ISecret|null);

                    /** SslConfig clientPrivateKey */
                    clientPrivateKey?: (google.cloud.connectors.v1.ISecret|null);

                    /** SslConfig clientPrivateKeyPass */
                    clientPrivateKeyPass?: (google.cloud.connectors.v1.ISecret|null);

                    /** SslConfig serverCertType */
                    serverCertType?: (google.cloud.connectors.v1.CertType|keyof typeof google.cloud.connectors.v1.CertType|null);

                    /** SslConfig clientCertType */
                    clientCertType?: (google.cloud.connectors.v1.CertType|keyof typeof google.cloud.connectors.v1.CertType|null);

                    /** SslConfig useSsl */
                    useSsl?: (boolean|null);

                    /** SslConfig additionalVariables */
                    additionalVariables?: (google.cloud.connectors.v1.IConfigVariable[]|null);
                }

                /** Represents a SslConfig. */
                class SslConfig implements ISslConfig {

                    /**
                     * Constructs a new SslConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.ISslConfig);

                    /** SslConfig type. */
                    public type: (google.cloud.connectors.v1.SslType|keyof typeof google.cloud.connectors.v1.SslType);

                    /** SslConfig trustModel. */
                    public trustModel: (google.cloud.connectors.v1.SslConfig.TrustModel|keyof typeof google.cloud.connectors.v1.SslConfig.TrustModel);

                    /** SslConfig privateServerCertificate. */
                    public privateServerCertificate?: (google.cloud.connectors.v1.ISecret|null);

                    /** SslConfig clientCertificate. */
                    public clientCertificate?: (google.cloud.connectors.v1.ISecret|null);

                    /** SslConfig clientPrivateKey. */
                    public clientPrivateKey?: (google.cloud.connectors.v1.ISecret|null);

                    /** SslConfig clientPrivateKeyPass. */
                    public clientPrivateKeyPass?: (google.cloud.connectors.v1.ISecret|null);

                    /** SslConfig serverCertType. */
                    public serverCertType: (google.cloud.connectors.v1.CertType|keyof typeof google.cloud.connectors.v1.CertType);

                    /** SslConfig clientCertType. */
                    public clientCertType: (google.cloud.connectors.v1.CertType|keyof typeof google.cloud.connectors.v1.CertType);

                    /** SslConfig useSsl. */
                    public useSsl: boolean;

                    /** SslConfig additionalVariables. */
                    public additionalVariables: google.cloud.connectors.v1.IConfigVariable[];

                    /**
                     * Creates a new SslConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SslConfig instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.ISslConfig): google.cloud.connectors.v1.SslConfig;

                    /**
                     * Encodes the specified SslConfig message. Does not implicitly {@link google.cloud.connectors.v1.SslConfig.verify|verify} messages.
                     * @param message SslConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.ISslConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SslConfig message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.SslConfig.verify|verify} messages.
                     * @param message SslConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.ISslConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SslConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SslConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.SslConfig;

                    /**
                     * Decodes a SslConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SslConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.SslConfig;

                    /**
                     * Verifies a SslConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SslConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SslConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.SslConfig;

                    /**
                     * Creates a plain object from a SslConfig message. Also converts values to other types if specified.
                     * @param message SslConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.SslConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SslConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SslConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SslConfig {

                    /** TrustModel enum. */
                    enum TrustModel {
                        PUBLIC = 0,
                        PRIVATE = 1,
                        INSECURE = 2
                    }
                }

                /** SslType enum. */
                enum SslType {
                    SSL_TYPE_UNSPECIFIED = 0,
                    TLS = 1,
                    MTLS = 2
                }

                /** CertType enum. */
                enum CertType {
                    CERT_TYPE_UNSPECIFIED = 0,
                    PEM = 1
                }

                /** Properties of a Connector. */
                interface IConnector {

                    /** Connector name */
                    name?: (string|null);

                    /** Connector createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Connector updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Connector labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Connector documentationUri */
                    documentationUri?: (string|null);

                    /** Connector externalUri */
                    externalUri?: (string|null);

                    /** Connector description */
                    description?: (string|null);

                    /** Connector webAssetsLocation */
                    webAssetsLocation?: (string|null);

                    /** Connector displayName */
                    displayName?: (string|null);

                    /** Connector launchStage */
                    launchStage?: (google.cloud.connectors.v1.LaunchStage|keyof typeof google.cloud.connectors.v1.LaunchStage|null);
                }

                /** Represents a Connector. */
                class Connector implements IConnector {

                    /**
                     * Constructs a new Connector.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IConnector);

                    /** Connector name. */
                    public name: string;

                    /** Connector createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Connector updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Connector labels. */
                    public labels: { [k: string]: string };

                    /** Connector documentationUri. */
                    public documentationUri: string;

                    /** Connector externalUri. */
                    public externalUri: string;

                    /** Connector description. */
                    public description: string;

                    /** Connector webAssetsLocation. */
                    public webAssetsLocation: string;

                    /** Connector displayName. */
                    public displayName: string;

                    /** Connector launchStage. */
                    public launchStage: (google.cloud.connectors.v1.LaunchStage|keyof typeof google.cloud.connectors.v1.LaunchStage);

                    /**
                     * Creates a new Connector instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Connector instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IConnector): google.cloud.connectors.v1.Connector;

                    /**
                     * Encodes the specified Connector message. Does not implicitly {@link google.cloud.connectors.v1.Connector.verify|verify} messages.
                     * @param message Connector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IConnector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Connector message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.Connector.verify|verify} messages.
                     * @param message Connector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IConnector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Connector message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Connector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.Connector;

                    /**
                     * Decodes a Connector message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Connector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.Connector;

                    /**
                     * Verifies a Connector message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Connector message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Connector
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.Connector;

                    /**
                     * Creates a plain object from a Connector message. Also converts values to other types if specified.
                     * @param message Connector
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.Connector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Connector to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Connector
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetConnectorRequest. */
                interface IGetConnectorRequest {

                    /** GetConnectorRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConnectorRequest. */
                class GetConnectorRequest implements IGetConnectorRequest {

                    /**
                     * Constructs a new GetConnectorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IGetConnectorRequest);

                    /** GetConnectorRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConnectorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConnectorRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IGetConnectorRequest): google.cloud.connectors.v1.GetConnectorRequest;

                    /**
                     * Encodes the specified GetConnectorRequest message. Does not implicitly {@link google.cloud.connectors.v1.GetConnectorRequest.verify|verify} messages.
                     * @param message GetConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IGetConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConnectorRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.GetConnectorRequest.verify|verify} messages.
                     * @param message GetConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IGetConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConnectorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.GetConnectorRequest;

                    /**
                     * Decodes a GetConnectorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.GetConnectorRequest;

                    /**
                     * Verifies a GetConnectorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConnectorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConnectorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.GetConnectorRequest;

                    /**
                     * Creates a plain object from a GetConnectorRequest message. Also converts values to other types if specified.
                     * @param message GetConnectorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.GetConnectorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConnectorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetConnectorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConnectorsRequest. */
                interface IListConnectorsRequest {

                    /** ListConnectorsRequest parent */
                    parent?: (string|null);

                    /** ListConnectorsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConnectorsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListConnectorsRequest. */
                class ListConnectorsRequest implements IListConnectorsRequest {

                    /**
                     * Constructs a new ListConnectorsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IListConnectorsRequest);

                    /** ListConnectorsRequest parent. */
                    public parent: string;

                    /** ListConnectorsRequest pageSize. */
                    public pageSize: number;

                    /** ListConnectorsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListConnectorsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectorsRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IListConnectorsRequest): google.cloud.connectors.v1.ListConnectorsRequest;

                    /**
                     * Encodes the specified ListConnectorsRequest message. Does not implicitly {@link google.cloud.connectors.v1.ListConnectorsRequest.verify|verify} messages.
                     * @param message ListConnectorsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IListConnectorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectorsRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ListConnectorsRequest.verify|verify} messages.
                     * @param message ListConnectorsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IListConnectorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectorsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectorsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ListConnectorsRequest;

                    /**
                     * Decodes a ListConnectorsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectorsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ListConnectorsRequest;

                    /**
                     * Verifies a ListConnectorsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectorsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectorsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ListConnectorsRequest;

                    /**
                     * Creates a plain object from a ListConnectorsRequest message. Also converts values to other types if specified.
                     * @param message ListConnectorsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ListConnectorsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectorsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConnectorsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConnectorsResponse. */
                interface IListConnectorsResponse {

                    /** ListConnectorsResponse connectors */
                    connectors?: (google.cloud.connectors.v1.IConnector[]|null);

                    /** ListConnectorsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListConnectorsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListConnectorsResponse. */
                class ListConnectorsResponse implements IListConnectorsResponse {

                    /**
                     * Constructs a new ListConnectorsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IListConnectorsResponse);

                    /** ListConnectorsResponse connectors. */
                    public connectors: google.cloud.connectors.v1.IConnector[];

                    /** ListConnectorsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListConnectorsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListConnectorsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectorsResponse instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IListConnectorsResponse): google.cloud.connectors.v1.ListConnectorsResponse;

                    /**
                     * Encodes the specified ListConnectorsResponse message. Does not implicitly {@link google.cloud.connectors.v1.ListConnectorsResponse.verify|verify} messages.
                     * @param message ListConnectorsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IListConnectorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectorsResponse message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ListConnectorsResponse.verify|verify} messages.
                     * @param message ListConnectorsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IListConnectorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectorsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectorsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ListConnectorsResponse;

                    /**
                     * Decodes a ListConnectorsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectorsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ListConnectorsResponse;

                    /**
                     * Verifies a ListConnectorsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectorsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectorsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ListConnectorsResponse;

                    /**
                     * Creates a plain object from a ListConnectorsResponse message. Also converts values to other types if specified.
                     * @param message ListConnectorsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ListConnectorsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectorsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConnectorsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ConnectorVersion. */
                interface IConnectorVersion {

                    /** ConnectorVersion name */
                    name?: (string|null);

                    /** ConnectorVersion createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectorVersion updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectorVersion labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ConnectorVersion launchStage */
                    launchStage?: (google.cloud.connectors.v1.LaunchStage|keyof typeof google.cloud.connectors.v1.LaunchStage|null);

                    /** ConnectorVersion releaseVersion */
                    releaseVersion?: (string|null);

                    /** ConnectorVersion authConfigTemplates */
                    authConfigTemplates?: (google.cloud.connectors.v1.IAuthConfigTemplate[]|null);

                    /** ConnectorVersion configVariableTemplates */
                    configVariableTemplates?: (google.cloud.connectors.v1.IConfigVariableTemplate[]|null);

                    /** ConnectorVersion supportedRuntimeFeatures */
                    supportedRuntimeFeatures?: (google.cloud.connectors.v1.ISupportedRuntimeFeatures|null);

                    /** ConnectorVersion displayName */
                    displayName?: (string|null);

                    /** ConnectorVersion egressControlConfig */
                    egressControlConfig?: (google.cloud.connectors.v1.IEgressControlConfig|null);

                    /** ConnectorVersion roleGrants */
                    roleGrants?: (google.cloud.connectors.v1.IRoleGrant[]|null);

                    /** ConnectorVersion roleGrant */
                    roleGrant?: (google.cloud.connectors.v1.IRoleGrant|null);

                    /** ConnectorVersion sslConfigTemplate */
                    sslConfigTemplate?: (google.cloud.connectors.v1.ISslConfigTemplate|null);
                }

                /** Represents a ConnectorVersion. */
                class ConnectorVersion implements IConnectorVersion {

                    /**
                     * Constructs a new ConnectorVersion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IConnectorVersion);

                    /** ConnectorVersion name. */
                    public name: string;

                    /** ConnectorVersion createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectorVersion updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectorVersion labels. */
                    public labels: { [k: string]: string };

                    /** ConnectorVersion launchStage. */
                    public launchStage: (google.cloud.connectors.v1.LaunchStage|keyof typeof google.cloud.connectors.v1.LaunchStage);

                    /** ConnectorVersion releaseVersion. */
                    public releaseVersion: string;

                    /** ConnectorVersion authConfigTemplates. */
                    public authConfigTemplates: google.cloud.connectors.v1.IAuthConfigTemplate[];

                    /** ConnectorVersion configVariableTemplates. */
                    public configVariableTemplates: google.cloud.connectors.v1.IConfigVariableTemplate[];

                    /** ConnectorVersion supportedRuntimeFeatures. */
                    public supportedRuntimeFeatures?: (google.cloud.connectors.v1.ISupportedRuntimeFeatures|null);

                    /** ConnectorVersion displayName. */
                    public displayName: string;

                    /** ConnectorVersion egressControlConfig. */
                    public egressControlConfig?: (google.cloud.connectors.v1.IEgressControlConfig|null);

                    /** ConnectorVersion roleGrants. */
                    public roleGrants: google.cloud.connectors.v1.IRoleGrant[];

                    /** ConnectorVersion roleGrant. */
                    public roleGrant?: (google.cloud.connectors.v1.IRoleGrant|null);

                    /** ConnectorVersion sslConfigTemplate. */
                    public sslConfigTemplate?: (google.cloud.connectors.v1.ISslConfigTemplate|null);

                    /**
                     * Creates a new ConnectorVersion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectorVersion instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IConnectorVersion): google.cloud.connectors.v1.ConnectorVersion;

                    /**
                     * Encodes the specified ConnectorVersion message. Does not implicitly {@link google.cloud.connectors.v1.ConnectorVersion.verify|verify} messages.
                     * @param message ConnectorVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IConnectorVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConnectorVersion message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ConnectorVersion.verify|verify} messages.
                     * @param message ConnectorVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IConnectorVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConnectorVersion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConnectorVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ConnectorVersion;

                    /**
                     * Decodes a ConnectorVersion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConnectorVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ConnectorVersion;

                    /**
                     * Verifies a ConnectorVersion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConnectorVersion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConnectorVersion
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ConnectorVersion;

                    /**
                     * Creates a plain object from a ConnectorVersion message. Also converts values to other types if specified.
                     * @param message ConnectorVersion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ConnectorVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConnectorVersion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConnectorVersion
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetConnectorVersionRequest. */
                interface IGetConnectorVersionRequest {

                    /** GetConnectorVersionRequest name */
                    name?: (string|null);

                    /** GetConnectorVersionRequest view */
                    view?: (google.cloud.connectors.v1.ConnectorVersionView|keyof typeof google.cloud.connectors.v1.ConnectorVersionView|null);
                }

                /** Represents a GetConnectorVersionRequest. */
                class GetConnectorVersionRequest implements IGetConnectorVersionRequest {

                    /**
                     * Constructs a new GetConnectorVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IGetConnectorVersionRequest);

                    /** GetConnectorVersionRequest name. */
                    public name: string;

                    /** GetConnectorVersionRequest view. */
                    public view: (google.cloud.connectors.v1.ConnectorVersionView|keyof typeof google.cloud.connectors.v1.ConnectorVersionView);

                    /**
                     * Creates a new GetConnectorVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConnectorVersionRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IGetConnectorVersionRequest): google.cloud.connectors.v1.GetConnectorVersionRequest;

                    /**
                     * Encodes the specified GetConnectorVersionRequest message. Does not implicitly {@link google.cloud.connectors.v1.GetConnectorVersionRequest.verify|verify} messages.
                     * @param message GetConnectorVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IGetConnectorVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConnectorVersionRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.GetConnectorVersionRequest.verify|verify} messages.
                     * @param message GetConnectorVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IGetConnectorVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConnectorVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConnectorVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.GetConnectorVersionRequest;

                    /**
                     * Decodes a GetConnectorVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConnectorVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.GetConnectorVersionRequest;

                    /**
                     * Verifies a GetConnectorVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConnectorVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConnectorVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.GetConnectorVersionRequest;

                    /**
                     * Creates a plain object from a GetConnectorVersionRequest message. Also converts values to other types if specified.
                     * @param message GetConnectorVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.GetConnectorVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConnectorVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetConnectorVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConnectorVersionsRequest. */
                interface IListConnectorVersionsRequest {

                    /** ListConnectorVersionsRequest parent */
                    parent?: (string|null);

                    /** ListConnectorVersionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConnectorVersionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListConnectorVersionsRequest view */
                    view?: (google.cloud.connectors.v1.ConnectorVersionView|keyof typeof google.cloud.connectors.v1.ConnectorVersionView|null);
                }

                /** Represents a ListConnectorVersionsRequest. */
                class ListConnectorVersionsRequest implements IListConnectorVersionsRequest {

                    /**
                     * Constructs a new ListConnectorVersionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IListConnectorVersionsRequest);

                    /** ListConnectorVersionsRequest parent. */
                    public parent: string;

                    /** ListConnectorVersionsRequest pageSize. */
                    public pageSize: number;

                    /** ListConnectorVersionsRequest pageToken. */
                    public pageToken: string;

                    /** ListConnectorVersionsRequest view. */
                    public view: (google.cloud.connectors.v1.ConnectorVersionView|keyof typeof google.cloud.connectors.v1.ConnectorVersionView);

                    /**
                     * Creates a new ListConnectorVersionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectorVersionsRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IListConnectorVersionsRequest): google.cloud.connectors.v1.ListConnectorVersionsRequest;

                    /**
                     * Encodes the specified ListConnectorVersionsRequest message. Does not implicitly {@link google.cloud.connectors.v1.ListConnectorVersionsRequest.verify|verify} messages.
                     * @param message ListConnectorVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IListConnectorVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectorVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ListConnectorVersionsRequest.verify|verify} messages.
                     * @param message ListConnectorVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IListConnectorVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectorVersionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectorVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ListConnectorVersionsRequest;

                    /**
                     * Decodes a ListConnectorVersionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectorVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ListConnectorVersionsRequest;

                    /**
                     * Verifies a ListConnectorVersionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectorVersionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectorVersionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ListConnectorVersionsRequest;

                    /**
                     * Creates a plain object from a ListConnectorVersionsRequest message. Also converts values to other types if specified.
                     * @param message ListConnectorVersionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ListConnectorVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectorVersionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConnectorVersionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConnectorVersionsResponse. */
                interface IListConnectorVersionsResponse {

                    /** ListConnectorVersionsResponse connectorVersions */
                    connectorVersions?: (google.cloud.connectors.v1.IConnectorVersion[]|null);

                    /** ListConnectorVersionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListConnectorVersionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListConnectorVersionsResponse. */
                class ListConnectorVersionsResponse implements IListConnectorVersionsResponse {

                    /**
                     * Constructs a new ListConnectorVersionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IListConnectorVersionsResponse);

                    /** ListConnectorVersionsResponse connectorVersions. */
                    public connectorVersions: google.cloud.connectors.v1.IConnectorVersion[];

                    /** ListConnectorVersionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListConnectorVersionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListConnectorVersionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectorVersionsResponse instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IListConnectorVersionsResponse): google.cloud.connectors.v1.ListConnectorVersionsResponse;

                    /**
                     * Encodes the specified ListConnectorVersionsResponse message. Does not implicitly {@link google.cloud.connectors.v1.ListConnectorVersionsResponse.verify|verify} messages.
                     * @param message ListConnectorVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IListConnectorVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectorVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ListConnectorVersionsResponse.verify|verify} messages.
                     * @param message ListConnectorVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IListConnectorVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectorVersionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectorVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ListConnectorVersionsResponse;

                    /**
                     * Decodes a ListConnectorVersionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectorVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ListConnectorVersionsResponse;

                    /**
                     * Verifies a ListConnectorVersionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectorVersionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectorVersionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ListConnectorVersionsResponse;

                    /**
                     * Creates a plain object from a ListConnectorVersionsResponse message. Also converts values to other types if specified.
                     * @param message ListConnectorVersionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ListConnectorVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectorVersionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConnectorVersionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SupportedRuntimeFeatures. */
                interface ISupportedRuntimeFeatures {

                    /** SupportedRuntimeFeatures entityApis */
                    entityApis?: (boolean|null);

                    /** SupportedRuntimeFeatures actionApis */
                    actionApis?: (boolean|null);

                    /** SupportedRuntimeFeatures sqlQuery */
                    sqlQuery?: (boolean|null);
                }

                /** Represents a SupportedRuntimeFeatures. */
                class SupportedRuntimeFeatures implements ISupportedRuntimeFeatures {

                    /**
                     * Constructs a new SupportedRuntimeFeatures.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.ISupportedRuntimeFeatures);

                    /** SupportedRuntimeFeatures entityApis. */
                    public entityApis: boolean;

                    /** SupportedRuntimeFeatures actionApis. */
                    public actionApis: boolean;

                    /** SupportedRuntimeFeatures sqlQuery. */
                    public sqlQuery: boolean;

                    /**
                     * Creates a new SupportedRuntimeFeatures instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SupportedRuntimeFeatures instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.ISupportedRuntimeFeatures): google.cloud.connectors.v1.SupportedRuntimeFeatures;

                    /**
                     * Encodes the specified SupportedRuntimeFeatures message. Does not implicitly {@link google.cloud.connectors.v1.SupportedRuntimeFeatures.verify|verify} messages.
                     * @param message SupportedRuntimeFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.ISupportedRuntimeFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SupportedRuntimeFeatures message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.SupportedRuntimeFeatures.verify|verify} messages.
                     * @param message SupportedRuntimeFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.ISupportedRuntimeFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SupportedRuntimeFeatures message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SupportedRuntimeFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.SupportedRuntimeFeatures;

                    /**
                     * Decodes a SupportedRuntimeFeatures message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SupportedRuntimeFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.SupportedRuntimeFeatures;

                    /**
                     * Verifies a SupportedRuntimeFeatures message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SupportedRuntimeFeatures message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SupportedRuntimeFeatures
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.SupportedRuntimeFeatures;

                    /**
                     * Creates a plain object from a SupportedRuntimeFeatures message. Also converts values to other types if specified.
                     * @param message SupportedRuntimeFeatures
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.SupportedRuntimeFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SupportedRuntimeFeatures to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SupportedRuntimeFeatures
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EgressControlConfig. */
                interface IEgressControlConfig {

                    /** EgressControlConfig backends */
                    backends?: (string|null);

                    /** EgressControlConfig extractionRules */
                    extractionRules?: (google.cloud.connectors.v1.IExtractionRules|null);
                }

                /** Represents an EgressControlConfig. */
                class EgressControlConfig implements IEgressControlConfig {

                    /**
                     * Constructs a new EgressControlConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IEgressControlConfig);

                    /** EgressControlConfig backends. */
                    public backends?: (string|null);

                    /** EgressControlConfig extractionRules. */
                    public extractionRules?: (google.cloud.connectors.v1.IExtractionRules|null);

                    /** EgressControlConfig oneofBackends. */
                    public oneofBackends?: ("backends"|"extractionRules");

                    /**
                     * Creates a new EgressControlConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EgressControlConfig instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IEgressControlConfig): google.cloud.connectors.v1.EgressControlConfig;

                    /**
                     * Encodes the specified EgressControlConfig message. Does not implicitly {@link google.cloud.connectors.v1.EgressControlConfig.verify|verify} messages.
                     * @param message EgressControlConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IEgressControlConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EgressControlConfig message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.EgressControlConfig.verify|verify} messages.
                     * @param message EgressControlConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IEgressControlConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EgressControlConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EgressControlConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.EgressControlConfig;

                    /**
                     * Decodes an EgressControlConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EgressControlConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.EgressControlConfig;

                    /**
                     * Verifies an EgressControlConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EgressControlConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EgressControlConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.EgressControlConfig;

                    /**
                     * Creates a plain object from an EgressControlConfig message. Also converts values to other types if specified.
                     * @param message EgressControlConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.EgressControlConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EgressControlConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EgressControlConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExtractionRules. */
                interface IExtractionRules {

                    /** ExtractionRules extractionRule */
                    extractionRule?: (google.cloud.connectors.v1.IExtractionRule[]|null);
                }

                /** Represents an ExtractionRules. */
                class ExtractionRules implements IExtractionRules {

                    /**
                     * Constructs a new ExtractionRules.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IExtractionRules);

                    /** ExtractionRules extractionRule. */
                    public extractionRule: google.cloud.connectors.v1.IExtractionRule[];

                    /**
                     * Creates a new ExtractionRules instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExtractionRules instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IExtractionRules): google.cloud.connectors.v1.ExtractionRules;

                    /**
                     * Encodes the specified ExtractionRules message. Does not implicitly {@link google.cloud.connectors.v1.ExtractionRules.verify|verify} messages.
                     * @param message ExtractionRules message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IExtractionRules, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExtractionRules message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ExtractionRules.verify|verify} messages.
                     * @param message ExtractionRules message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IExtractionRules, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExtractionRules message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExtractionRules
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ExtractionRules;

                    /**
                     * Decodes an ExtractionRules message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExtractionRules
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ExtractionRules;

                    /**
                     * Verifies an ExtractionRules message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExtractionRules message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExtractionRules
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ExtractionRules;

                    /**
                     * Creates a plain object from an ExtractionRules message. Also converts values to other types if specified.
                     * @param message ExtractionRules
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ExtractionRules, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExtractionRules to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExtractionRules
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExtractionRule. */
                interface IExtractionRule {

                    /** ExtractionRule source */
                    source?: (google.cloud.connectors.v1.ExtractionRule.ISource|null);

                    /** ExtractionRule extractionRegex */
                    extractionRegex?: (string|null);
                }

                /** Represents an ExtractionRule. */
                class ExtractionRule implements IExtractionRule {

                    /**
                     * Constructs a new ExtractionRule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IExtractionRule);

                    /** ExtractionRule source. */
                    public source?: (google.cloud.connectors.v1.ExtractionRule.ISource|null);

                    /** ExtractionRule extractionRegex. */
                    public extractionRegex: string;

                    /**
                     * Creates a new ExtractionRule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExtractionRule instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IExtractionRule): google.cloud.connectors.v1.ExtractionRule;

                    /**
                     * Encodes the specified ExtractionRule message. Does not implicitly {@link google.cloud.connectors.v1.ExtractionRule.verify|verify} messages.
                     * @param message ExtractionRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IExtractionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExtractionRule message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ExtractionRule.verify|verify} messages.
                     * @param message ExtractionRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IExtractionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExtractionRule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExtractionRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ExtractionRule;

                    /**
                     * Decodes an ExtractionRule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExtractionRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ExtractionRule;

                    /**
                     * Verifies an ExtractionRule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExtractionRule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExtractionRule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ExtractionRule;

                    /**
                     * Creates a plain object from an ExtractionRule message. Also converts values to other types if specified.
                     * @param message ExtractionRule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ExtractionRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExtractionRule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExtractionRule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ExtractionRule {

                    /** Properties of a Source. */
                    interface ISource {

                        /** Source sourceType */
                        sourceType?: (google.cloud.connectors.v1.ExtractionRule.SourceType|keyof typeof google.cloud.connectors.v1.ExtractionRule.SourceType|null);

                        /** Source fieldId */
                        fieldId?: (string|null);
                    }

                    /** Represents a Source. */
                    class Source implements ISource {

                        /**
                         * Constructs a new Source.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.connectors.v1.ExtractionRule.ISource);

                        /** Source sourceType. */
                        public sourceType: (google.cloud.connectors.v1.ExtractionRule.SourceType|keyof typeof google.cloud.connectors.v1.ExtractionRule.SourceType);

                        /** Source fieldId. */
                        public fieldId: string;

                        /**
                         * Creates a new Source instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Source instance
                         */
                        public static create(properties?: google.cloud.connectors.v1.ExtractionRule.ISource): google.cloud.connectors.v1.ExtractionRule.Source;

                        /**
                         * Encodes the specified Source message. Does not implicitly {@link google.cloud.connectors.v1.ExtractionRule.Source.verify|verify} messages.
                         * @param message Source message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.connectors.v1.ExtractionRule.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Source message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ExtractionRule.Source.verify|verify} messages.
                         * @param message Source message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.connectors.v1.ExtractionRule.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Source message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Source
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ExtractionRule.Source;

                        /**
                         * Decodes a Source message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Source
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ExtractionRule.Source;

                        /**
                         * Verifies a Source message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Source message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Source
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ExtractionRule.Source;

                        /**
                         * Creates a plain object from a Source message. Also converts values to other types if specified.
                         * @param message Source
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.connectors.v1.ExtractionRule.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Source to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Source
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** SourceType enum. */
                    enum SourceType {
                        SOURCE_TYPE_UNSPECIFIED = 0,
                        CONFIG_VARIABLE = 1
                    }
                }

                /** ConnectorVersionView enum. */
                enum ConnectorVersionView {
                    CONNECTOR_VERSION_VIEW_UNSPECIFIED = 0,
                    CONNECTOR_VERSION_VIEW_BASIC = 1,
                    CONNECTOR_VERSION_VIEW_FULL = 2
                }

                /** Represents a Connectors */
                class Connectors extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Connectors service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Connectors service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Connectors;

                    /**
                     * Calls ListConnections.
                     * @param request ListConnectionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConnectionsResponse
                     */
                    public listConnections(request: google.cloud.connectors.v1.IListConnectionsRequest, callback: google.cloud.connectors.v1.Connectors.ListConnectionsCallback): void;

                    /**
                     * Calls ListConnections.
                     * @param request ListConnectionsRequest message or plain object
                     * @returns Promise
                     */
                    public listConnections(request: google.cloud.connectors.v1.IListConnectionsRequest): Promise<google.cloud.connectors.v1.ListConnectionsResponse>;

                    /**
                     * Calls GetConnection.
                     * @param request GetConnectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Connection
                     */
                    public getConnection(request: google.cloud.connectors.v1.IGetConnectionRequest, callback: google.cloud.connectors.v1.Connectors.GetConnectionCallback): void;

                    /**
                     * Calls GetConnection.
                     * @param request GetConnectionRequest message or plain object
                     * @returns Promise
                     */
                    public getConnection(request: google.cloud.connectors.v1.IGetConnectionRequest): Promise<google.cloud.connectors.v1.Connection>;

                    /**
                     * Calls CreateConnection.
                     * @param request CreateConnectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createConnection(request: google.cloud.connectors.v1.ICreateConnectionRequest, callback: google.cloud.connectors.v1.Connectors.CreateConnectionCallback): void;

                    /**
                     * Calls CreateConnection.
                     * @param request CreateConnectionRequest message or plain object
                     * @returns Promise
                     */
                    public createConnection(request: google.cloud.connectors.v1.ICreateConnectionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateConnection.
                     * @param request UpdateConnectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateConnection(request: google.cloud.connectors.v1.IUpdateConnectionRequest, callback: google.cloud.connectors.v1.Connectors.UpdateConnectionCallback): void;

                    /**
                     * Calls UpdateConnection.
                     * @param request UpdateConnectionRequest message or plain object
                     * @returns Promise
                     */
                    public updateConnection(request: google.cloud.connectors.v1.IUpdateConnectionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteConnection.
                     * @param request DeleteConnectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteConnection(request: google.cloud.connectors.v1.IDeleteConnectionRequest, callback: google.cloud.connectors.v1.Connectors.DeleteConnectionCallback): void;

                    /**
                     * Calls DeleteConnection.
                     * @param request DeleteConnectionRequest message or plain object
                     * @returns Promise
                     */
                    public deleteConnection(request: google.cloud.connectors.v1.IDeleteConnectionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListProviders.
                     * @param request ListProvidersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListProvidersResponse
                     */
                    public listProviders(request: google.cloud.connectors.v1.IListProvidersRequest, callback: google.cloud.connectors.v1.Connectors.ListProvidersCallback): void;

                    /**
                     * Calls ListProviders.
                     * @param request ListProvidersRequest message or plain object
                     * @returns Promise
                     */
                    public listProviders(request: google.cloud.connectors.v1.IListProvidersRequest): Promise<google.cloud.connectors.v1.ListProvidersResponse>;

                    /**
                     * Calls GetProvider.
                     * @param request GetProviderRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Provider
                     */
                    public getProvider(request: google.cloud.connectors.v1.IGetProviderRequest, callback: google.cloud.connectors.v1.Connectors.GetProviderCallback): void;

                    /**
                     * Calls GetProvider.
                     * @param request GetProviderRequest message or plain object
                     * @returns Promise
                     */
                    public getProvider(request: google.cloud.connectors.v1.IGetProviderRequest): Promise<google.cloud.connectors.v1.Provider>;

                    /**
                     * Calls ListConnectors.
                     * @param request ListConnectorsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConnectorsResponse
                     */
                    public listConnectors(request: google.cloud.connectors.v1.IListConnectorsRequest, callback: google.cloud.connectors.v1.Connectors.ListConnectorsCallback): void;

                    /**
                     * Calls ListConnectors.
                     * @param request ListConnectorsRequest message or plain object
                     * @returns Promise
                     */
                    public listConnectors(request: google.cloud.connectors.v1.IListConnectorsRequest): Promise<google.cloud.connectors.v1.ListConnectorsResponse>;

                    /**
                     * Calls GetConnector.
                     * @param request GetConnectorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Connector
                     */
                    public getConnector(request: google.cloud.connectors.v1.IGetConnectorRequest, callback: google.cloud.connectors.v1.Connectors.GetConnectorCallback): void;

                    /**
                     * Calls GetConnector.
                     * @param request GetConnectorRequest message or plain object
                     * @returns Promise
                     */
                    public getConnector(request: google.cloud.connectors.v1.IGetConnectorRequest): Promise<google.cloud.connectors.v1.Connector>;

                    /**
                     * Calls ListConnectorVersions.
                     * @param request ListConnectorVersionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConnectorVersionsResponse
                     */
                    public listConnectorVersions(request: google.cloud.connectors.v1.IListConnectorVersionsRequest, callback: google.cloud.connectors.v1.Connectors.ListConnectorVersionsCallback): void;

                    /**
                     * Calls ListConnectorVersions.
                     * @param request ListConnectorVersionsRequest message or plain object
                     * @returns Promise
                     */
                    public listConnectorVersions(request: google.cloud.connectors.v1.IListConnectorVersionsRequest): Promise<google.cloud.connectors.v1.ListConnectorVersionsResponse>;

                    /**
                     * Calls GetConnectorVersion.
                     * @param request GetConnectorVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConnectorVersion
                     */
                    public getConnectorVersion(request: google.cloud.connectors.v1.IGetConnectorVersionRequest, callback: google.cloud.connectors.v1.Connectors.GetConnectorVersionCallback): void;

                    /**
                     * Calls GetConnectorVersion.
                     * @param request GetConnectorVersionRequest message or plain object
                     * @returns Promise
                     */
                    public getConnectorVersion(request: google.cloud.connectors.v1.IGetConnectorVersionRequest): Promise<google.cloud.connectors.v1.ConnectorVersion>;

                    /**
                     * Calls GetConnectionSchemaMetadata.
                     * @param request GetConnectionSchemaMetadataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConnectionSchemaMetadata
                     */
                    public getConnectionSchemaMetadata(request: google.cloud.connectors.v1.IGetConnectionSchemaMetadataRequest, callback: google.cloud.connectors.v1.Connectors.GetConnectionSchemaMetadataCallback): void;

                    /**
                     * Calls GetConnectionSchemaMetadata.
                     * @param request GetConnectionSchemaMetadataRequest message or plain object
                     * @returns Promise
                     */
                    public getConnectionSchemaMetadata(request: google.cloud.connectors.v1.IGetConnectionSchemaMetadataRequest): Promise<google.cloud.connectors.v1.ConnectionSchemaMetadata>;

                    /**
                     * Calls RefreshConnectionSchemaMetadata.
                     * @param request RefreshConnectionSchemaMetadataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public refreshConnectionSchemaMetadata(request: google.cloud.connectors.v1.IRefreshConnectionSchemaMetadataRequest, callback: google.cloud.connectors.v1.Connectors.RefreshConnectionSchemaMetadataCallback): void;

                    /**
                     * Calls RefreshConnectionSchemaMetadata.
                     * @param request RefreshConnectionSchemaMetadataRequest message or plain object
                     * @returns Promise
                     */
                    public refreshConnectionSchemaMetadata(request: google.cloud.connectors.v1.IRefreshConnectionSchemaMetadataRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListRuntimeEntitySchemas.
                     * @param request ListRuntimeEntitySchemasRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRuntimeEntitySchemasResponse
                     */
                    public listRuntimeEntitySchemas(request: google.cloud.connectors.v1.IListRuntimeEntitySchemasRequest, callback: google.cloud.connectors.v1.Connectors.ListRuntimeEntitySchemasCallback): void;

                    /**
                     * Calls ListRuntimeEntitySchemas.
                     * @param request ListRuntimeEntitySchemasRequest message or plain object
                     * @returns Promise
                     */
                    public listRuntimeEntitySchemas(request: google.cloud.connectors.v1.IListRuntimeEntitySchemasRequest): Promise<google.cloud.connectors.v1.ListRuntimeEntitySchemasResponse>;

                    /**
                     * Calls ListRuntimeActionSchemas.
                     * @param request ListRuntimeActionSchemasRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRuntimeActionSchemasResponse
                     */
                    public listRuntimeActionSchemas(request: google.cloud.connectors.v1.IListRuntimeActionSchemasRequest, callback: google.cloud.connectors.v1.Connectors.ListRuntimeActionSchemasCallback): void;

                    /**
                     * Calls ListRuntimeActionSchemas.
                     * @param request ListRuntimeActionSchemasRequest message or plain object
                     * @returns Promise
                     */
                    public listRuntimeActionSchemas(request: google.cloud.connectors.v1.IListRuntimeActionSchemasRequest): Promise<google.cloud.connectors.v1.ListRuntimeActionSchemasResponse>;

                    /**
                     * Calls GetRuntimeConfig.
                     * @param request GetRuntimeConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RuntimeConfig
                     */
                    public getRuntimeConfig(request: google.cloud.connectors.v1.IGetRuntimeConfigRequest, callback: google.cloud.connectors.v1.Connectors.GetRuntimeConfigCallback): void;

                    /**
                     * Calls GetRuntimeConfig.
                     * @param request GetRuntimeConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getRuntimeConfig(request: google.cloud.connectors.v1.IGetRuntimeConfigRequest): Promise<google.cloud.connectors.v1.RuntimeConfig>;

                    /**
                     * Calls GetGlobalSettings.
                     * @param request GetGlobalSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Settings
                     */
                    public getGlobalSettings(request: google.cloud.connectors.v1.IGetGlobalSettingsRequest, callback: google.cloud.connectors.v1.Connectors.GetGlobalSettingsCallback): void;

                    /**
                     * Calls GetGlobalSettings.
                     * @param request GetGlobalSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public getGlobalSettings(request: google.cloud.connectors.v1.IGetGlobalSettingsRequest): Promise<google.cloud.connectors.v1.Settings>;
                }

                namespace Connectors {

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|listConnections}.
                     * @param error Error, if any
                     * @param [response] ListConnectionsResponse
                     */
                    type ListConnectionsCallback = (error: (Error|null), response?: google.cloud.connectors.v1.ListConnectionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|getConnection}.
                     * @param error Error, if any
                     * @param [response] Connection
                     */
                    type GetConnectionCallback = (error: (Error|null), response?: google.cloud.connectors.v1.Connection) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|createConnection}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateConnectionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|updateConnection}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateConnectionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|deleteConnection}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteConnectionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|listProviders}.
                     * @param error Error, if any
                     * @param [response] ListProvidersResponse
                     */
                    type ListProvidersCallback = (error: (Error|null), response?: google.cloud.connectors.v1.ListProvidersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|getProvider}.
                     * @param error Error, if any
                     * @param [response] Provider
                     */
                    type GetProviderCallback = (error: (Error|null), response?: google.cloud.connectors.v1.Provider) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|listConnectors}.
                     * @param error Error, if any
                     * @param [response] ListConnectorsResponse
                     */
                    type ListConnectorsCallback = (error: (Error|null), response?: google.cloud.connectors.v1.ListConnectorsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|getConnector}.
                     * @param error Error, if any
                     * @param [response] Connector
                     */
                    type GetConnectorCallback = (error: (Error|null), response?: google.cloud.connectors.v1.Connector) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|listConnectorVersions}.
                     * @param error Error, if any
                     * @param [response] ListConnectorVersionsResponse
                     */
                    type ListConnectorVersionsCallback = (error: (Error|null), response?: google.cloud.connectors.v1.ListConnectorVersionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|getConnectorVersion}.
                     * @param error Error, if any
                     * @param [response] ConnectorVersion
                     */
                    type GetConnectorVersionCallback = (error: (Error|null), response?: google.cloud.connectors.v1.ConnectorVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|getConnectionSchemaMetadata}.
                     * @param error Error, if any
                     * @param [response] ConnectionSchemaMetadata
                     */
                    type GetConnectionSchemaMetadataCallback = (error: (Error|null), response?: google.cloud.connectors.v1.ConnectionSchemaMetadata) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|refreshConnectionSchemaMetadata}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RefreshConnectionSchemaMetadataCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|listRuntimeEntitySchemas}.
                     * @param error Error, if any
                     * @param [response] ListRuntimeEntitySchemasResponse
                     */
                    type ListRuntimeEntitySchemasCallback = (error: (Error|null), response?: google.cloud.connectors.v1.ListRuntimeEntitySchemasResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|listRuntimeActionSchemas}.
                     * @param error Error, if any
                     * @param [response] ListRuntimeActionSchemasResponse
                     */
                    type ListRuntimeActionSchemasCallback = (error: (Error|null), response?: google.cloud.connectors.v1.ListRuntimeActionSchemasResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|getRuntimeConfig}.
                     * @param error Error, if any
                     * @param [response] RuntimeConfig
                     */
                    type GetRuntimeConfigCallback = (error: (Error|null), response?: google.cloud.connectors.v1.RuntimeConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.connectors.v1.Connectors|getGlobalSettings}.
                     * @param error Error, if any
                     * @param [response] Settings
                     */
                    type GetGlobalSettingsCallback = (error: (Error|null), response?: google.cloud.connectors.v1.Settings) => void;
                }

                /** Properties of a Provider. */
                interface IProvider {

                    /** Provider name */
                    name?: (string|null);

                    /** Provider createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Provider updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Provider labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Provider documentationUri */
                    documentationUri?: (string|null);

                    /** Provider externalUri */
                    externalUri?: (string|null);

                    /** Provider description */
                    description?: (string|null);

                    /** Provider webAssetsLocation */
                    webAssetsLocation?: (string|null);

                    /** Provider displayName */
                    displayName?: (string|null);

                    /** Provider launchStage */
                    launchStage?: (google.cloud.connectors.v1.LaunchStage|keyof typeof google.cloud.connectors.v1.LaunchStage|null);
                }

                /** Represents a Provider. */
                class Provider implements IProvider {

                    /**
                     * Constructs a new Provider.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IProvider);

                    /** Provider name. */
                    public name: string;

                    /** Provider createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Provider updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Provider labels. */
                    public labels: { [k: string]: string };

                    /** Provider documentationUri. */
                    public documentationUri: string;

                    /** Provider externalUri. */
                    public externalUri: string;

                    /** Provider description. */
                    public description: string;

                    /** Provider webAssetsLocation. */
                    public webAssetsLocation: string;

                    /** Provider displayName. */
                    public displayName: string;

                    /** Provider launchStage. */
                    public launchStage: (google.cloud.connectors.v1.LaunchStage|keyof typeof google.cloud.connectors.v1.LaunchStage);

                    /**
                     * Creates a new Provider instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Provider instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IProvider): google.cloud.connectors.v1.Provider;

                    /**
                     * Encodes the specified Provider message. Does not implicitly {@link google.cloud.connectors.v1.Provider.verify|verify} messages.
                     * @param message Provider message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IProvider, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Provider message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.Provider.verify|verify} messages.
                     * @param message Provider message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IProvider, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Provider message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Provider
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.Provider;

                    /**
                     * Decodes a Provider message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Provider
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.Provider;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.Provider;

                    /**
                     * Creates a plain object from a Provider message. Also converts values to other types if specified.
                     * @param message Provider
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.Provider, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.connectors.v1.IGetProviderRequest);

                    /** GetProviderRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetProviderRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetProviderRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IGetProviderRequest): google.cloud.connectors.v1.GetProviderRequest;

                    /**
                     * Encodes the specified GetProviderRequest message. Does not implicitly {@link google.cloud.connectors.v1.GetProviderRequest.verify|verify} messages.
                     * @param message GetProviderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IGetProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetProviderRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.GetProviderRequest.verify|verify} messages.
                     * @param message GetProviderRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IGetProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetProviderRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetProviderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.GetProviderRequest;

                    /**
                     * Decodes a GetProviderRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetProviderRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.GetProviderRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.GetProviderRequest;

                    /**
                     * Creates a plain object from a GetProviderRequest message. Also converts values to other types if specified.
                     * @param message GetProviderRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.GetProviderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                }

                /** Represents a ListProvidersRequest. */
                class ListProvidersRequest implements IListProvidersRequest {

                    /**
                     * Constructs a new ListProvidersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IListProvidersRequest);

                    /** ListProvidersRequest parent. */
                    public parent: string;

                    /** ListProvidersRequest pageSize. */
                    public pageSize: number;

                    /** ListProvidersRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListProvidersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProvidersRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IListProvidersRequest): google.cloud.connectors.v1.ListProvidersRequest;

                    /**
                     * Encodes the specified ListProvidersRequest message. Does not implicitly {@link google.cloud.connectors.v1.ListProvidersRequest.verify|verify} messages.
                     * @param message ListProvidersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IListProvidersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProvidersRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ListProvidersRequest.verify|verify} messages.
                     * @param message ListProvidersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IListProvidersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProvidersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProvidersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ListProvidersRequest;

                    /**
                     * Decodes a ListProvidersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProvidersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ListProvidersRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ListProvidersRequest;

                    /**
                     * Creates a plain object from a ListProvidersRequest message. Also converts values to other types if specified.
                     * @param message ListProvidersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ListProvidersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    providers?: (google.cloud.connectors.v1.IProvider[]|null);

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
                    constructor(properties?: google.cloud.connectors.v1.IListProvidersResponse);

                    /** ListProvidersResponse providers. */
                    public providers: google.cloud.connectors.v1.IProvider[];

                    /** ListProvidersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListProvidersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListProvidersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProvidersResponse instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IListProvidersResponse): google.cloud.connectors.v1.ListProvidersResponse;

                    /**
                     * Encodes the specified ListProvidersResponse message. Does not implicitly {@link google.cloud.connectors.v1.ListProvidersResponse.verify|verify} messages.
                     * @param message ListProvidersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IListProvidersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProvidersResponse message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.ListProvidersResponse.verify|verify} messages.
                     * @param message ListProvidersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IListProvidersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProvidersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProvidersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.ListProvidersResponse;

                    /**
                     * Decodes a ListProvidersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProvidersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.ListProvidersResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.ListProvidersResponse;

                    /**
                     * Creates a plain object from a ListProvidersResponse message. Also converts values to other types if specified.
                     * @param message ListProvidersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.ListProvidersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a GetRuntimeConfigRequest. */
                interface IGetRuntimeConfigRequest {

                    /** GetRuntimeConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRuntimeConfigRequest. */
                class GetRuntimeConfigRequest implements IGetRuntimeConfigRequest {

                    /**
                     * Constructs a new GetRuntimeConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IGetRuntimeConfigRequest);

                    /** GetRuntimeConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRuntimeConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRuntimeConfigRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IGetRuntimeConfigRequest): google.cloud.connectors.v1.GetRuntimeConfigRequest;

                    /**
                     * Encodes the specified GetRuntimeConfigRequest message. Does not implicitly {@link google.cloud.connectors.v1.GetRuntimeConfigRequest.verify|verify} messages.
                     * @param message GetRuntimeConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IGetRuntimeConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRuntimeConfigRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.GetRuntimeConfigRequest.verify|verify} messages.
                     * @param message GetRuntimeConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IGetRuntimeConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRuntimeConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRuntimeConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.GetRuntimeConfigRequest;

                    /**
                     * Decodes a GetRuntimeConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRuntimeConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.GetRuntimeConfigRequest;

                    /**
                     * Verifies a GetRuntimeConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRuntimeConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRuntimeConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.GetRuntimeConfigRequest;

                    /**
                     * Creates a plain object from a GetRuntimeConfigRequest message. Also converts values to other types if specified.
                     * @param message GetRuntimeConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.GetRuntimeConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRuntimeConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRuntimeConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RuntimeConfig. */
                interface IRuntimeConfig {

                    /** RuntimeConfig locationId */
                    locationId?: (string|null);

                    /** RuntimeConfig conndTopic */
                    conndTopic?: (string|null);

                    /** RuntimeConfig conndSubscription */
                    conndSubscription?: (string|null);

                    /** RuntimeConfig controlPlaneTopic */
                    controlPlaneTopic?: (string|null);

                    /** RuntimeConfig controlPlaneSubscription */
                    controlPlaneSubscription?: (string|null);

                    /** RuntimeConfig runtimeEndpoint */
                    runtimeEndpoint?: (string|null);

                    /** RuntimeConfig state */
                    state?: (google.cloud.connectors.v1.RuntimeConfig.State|keyof typeof google.cloud.connectors.v1.RuntimeConfig.State|null);

                    /** RuntimeConfig schemaGcsBucket */
                    schemaGcsBucket?: (string|null);

                    /** RuntimeConfig serviceDirectory */
                    serviceDirectory?: (string|null);

                    /** RuntimeConfig name */
                    name?: (string|null);
                }

                /** Represents a RuntimeConfig. */
                class RuntimeConfig implements IRuntimeConfig {

                    /**
                     * Constructs a new RuntimeConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IRuntimeConfig);

                    /** RuntimeConfig locationId. */
                    public locationId: string;

                    /** RuntimeConfig conndTopic. */
                    public conndTopic: string;

                    /** RuntimeConfig conndSubscription. */
                    public conndSubscription: string;

                    /** RuntimeConfig controlPlaneTopic. */
                    public controlPlaneTopic: string;

                    /** RuntimeConfig controlPlaneSubscription. */
                    public controlPlaneSubscription: string;

                    /** RuntimeConfig runtimeEndpoint. */
                    public runtimeEndpoint: string;

                    /** RuntimeConfig state. */
                    public state: (google.cloud.connectors.v1.RuntimeConfig.State|keyof typeof google.cloud.connectors.v1.RuntimeConfig.State);

                    /** RuntimeConfig schemaGcsBucket. */
                    public schemaGcsBucket: string;

                    /** RuntimeConfig serviceDirectory. */
                    public serviceDirectory: string;

                    /** RuntimeConfig name. */
                    public name: string;

                    /**
                     * Creates a new RuntimeConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuntimeConfig instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IRuntimeConfig): google.cloud.connectors.v1.RuntimeConfig;

                    /**
                     * Encodes the specified RuntimeConfig message. Does not implicitly {@link google.cloud.connectors.v1.RuntimeConfig.verify|verify} messages.
                     * @param message RuntimeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IRuntimeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuntimeConfig message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.RuntimeConfig.verify|verify} messages.
                     * @param message RuntimeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IRuntimeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuntimeConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuntimeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.RuntimeConfig;

                    /**
                     * Decodes a RuntimeConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuntimeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.RuntimeConfig;

                    /**
                     * Verifies a RuntimeConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuntimeConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuntimeConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.RuntimeConfig;

                    /**
                     * Creates a plain object from a RuntimeConfig message. Also converts values to other types if specified.
                     * @param message RuntimeConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.RuntimeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuntimeConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RuntimeConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RuntimeConfig {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        INACTIVE = 1,
                        ACTIVATING = 2,
                        ACTIVE = 3,
                        CREATING = 4,
                        DELETING = 5,
                        UPDATING = 6
                    }
                }

                /** Properties of a GetGlobalSettingsRequest. */
                interface IGetGlobalSettingsRequest {

                    /** GetGlobalSettingsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGlobalSettingsRequest. */
                class GetGlobalSettingsRequest implements IGetGlobalSettingsRequest {

                    /**
                     * Constructs a new GetGlobalSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.IGetGlobalSettingsRequest);

                    /** GetGlobalSettingsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGlobalSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGlobalSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.IGetGlobalSettingsRequest): google.cloud.connectors.v1.GetGlobalSettingsRequest;

                    /**
                     * Encodes the specified GetGlobalSettingsRequest message. Does not implicitly {@link google.cloud.connectors.v1.GetGlobalSettingsRequest.verify|verify} messages.
                     * @param message GetGlobalSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.IGetGlobalSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGlobalSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.GetGlobalSettingsRequest.verify|verify} messages.
                     * @param message GetGlobalSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.IGetGlobalSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGlobalSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGlobalSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.GetGlobalSettingsRequest;

                    /**
                     * Decodes a GetGlobalSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGlobalSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.GetGlobalSettingsRequest;

                    /**
                     * Verifies a GetGlobalSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGlobalSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGlobalSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.GetGlobalSettingsRequest;

                    /**
                     * Creates a plain object from a GetGlobalSettingsRequest message. Also converts values to other types if specified.
                     * @param message GetGlobalSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.GetGlobalSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGlobalSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetGlobalSettingsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Settings. */
                interface ISettings {

                    /** Settings name */
                    name?: (string|null);

                    /** Settings vpcsc */
                    vpcsc?: (boolean|null);

                    /** Settings payg */
                    payg?: (boolean|null);
                }

                /** Represents a Settings. */
                class Settings implements ISettings {

                    /**
                     * Constructs a new Settings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.connectors.v1.ISettings);

                    /** Settings name. */
                    public name: string;

                    /** Settings vpcsc. */
                    public vpcsc: boolean;

                    /** Settings payg. */
                    public payg: boolean;

                    /**
                     * Creates a new Settings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Settings instance
                     */
                    public static create(properties?: google.cloud.connectors.v1.ISettings): google.cloud.connectors.v1.Settings;

                    /**
                     * Encodes the specified Settings message. Does not implicitly {@link google.cloud.connectors.v1.Settings.verify|verify} messages.
                     * @param message Settings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.connectors.v1.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Settings message, length delimited. Does not implicitly {@link google.cloud.connectors.v1.Settings.verify|verify} messages.
                     * @param message Settings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.connectors.v1.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Settings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Settings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.connectors.v1.Settings;

                    /**
                     * Decodes a Settings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Settings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.connectors.v1.Settings;

                    /**
                     * Verifies a Settings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Settings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Settings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.connectors.v1.Settings;

                    /**
                     * Creates a plain object from a Settings message. Also converts values to other types if specified.
                     * @param message Settings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.connectors.v1.Settings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Settings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Settings
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

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Struct
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue. */
            public numberValue?: (number|null);

            /** Value stringValue. */
            public stringValue?: (string|null);

            /** Value boolValue. */
            public boolValue?: (boolean|null);

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

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
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListValue
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
