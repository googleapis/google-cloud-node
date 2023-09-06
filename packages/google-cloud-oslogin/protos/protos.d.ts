// Copyright 2023 Google LLC
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

        /** Namespace oslogin. */
        namespace oslogin {

            /** Namespace common. */
            namespace common {

                /** OperatingSystemType enum. */
                enum OperatingSystemType {
                    OPERATING_SYSTEM_TYPE_UNSPECIFIED = 0,
                    LINUX = 1,
                    WINDOWS = 2
                }

                /** Properties of a PosixAccount. */
                interface IPosixAccount {

                    /** PosixAccount primary */
                    primary?: (boolean|null);

                    /** PosixAccount username */
                    username?: (string|null);

                    /** PosixAccount uid */
                    uid?: (number|Long|string|null);

                    /** PosixAccount gid */
                    gid?: (number|Long|string|null);

                    /** PosixAccount homeDirectory */
                    homeDirectory?: (string|null);

                    /** PosixAccount shell */
                    shell?: (string|null);

                    /** PosixAccount gecos */
                    gecos?: (string|null);

                    /** PosixAccount systemId */
                    systemId?: (string|null);

                    /** PosixAccount accountId */
                    accountId?: (string|null);

                    /** PosixAccount operatingSystemType */
                    operatingSystemType?: (google.cloud.oslogin.common.OperatingSystemType|keyof typeof google.cloud.oslogin.common.OperatingSystemType|null);

                    /** PosixAccount name */
                    name?: (string|null);
                }

                /** Represents a PosixAccount. */
                class PosixAccount implements IPosixAccount {

                    /**
                     * Constructs a new PosixAccount.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.common.IPosixAccount);

                    /** PosixAccount primary. */
                    public primary: boolean;

                    /** PosixAccount username. */
                    public username: string;

                    /** PosixAccount uid. */
                    public uid: (number|Long|string);

                    /** PosixAccount gid. */
                    public gid: (number|Long|string);

                    /** PosixAccount homeDirectory. */
                    public homeDirectory: string;

                    /** PosixAccount shell. */
                    public shell: string;

                    /** PosixAccount gecos. */
                    public gecos: string;

                    /** PosixAccount systemId. */
                    public systemId: string;

                    /** PosixAccount accountId. */
                    public accountId: string;

                    /** PosixAccount operatingSystemType. */
                    public operatingSystemType: (google.cloud.oslogin.common.OperatingSystemType|keyof typeof google.cloud.oslogin.common.OperatingSystemType);

                    /** PosixAccount name. */
                    public name: string;

                    /**
                     * Creates a new PosixAccount instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PosixAccount instance
                     */
                    public static create(properties?: google.cloud.oslogin.common.IPosixAccount): google.cloud.oslogin.common.PosixAccount;

                    /**
                     * Encodes the specified PosixAccount message. Does not implicitly {@link google.cloud.oslogin.common.PosixAccount.verify|verify} messages.
                     * @param message PosixAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.common.IPosixAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PosixAccount message, length delimited. Does not implicitly {@link google.cloud.oslogin.common.PosixAccount.verify|verify} messages.
                     * @param message PosixAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.common.IPosixAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PosixAccount message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PosixAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.common.PosixAccount;

                    /**
                     * Decodes a PosixAccount message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PosixAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.common.PosixAccount;

                    /**
                     * Verifies a PosixAccount message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PosixAccount message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PosixAccount
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.common.PosixAccount;

                    /**
                     * Creates a plain object from a PosixAccount message. Also converts values to other types if specified.
                     * @param message PosixAccount
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.common.PosixAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PosixAccount to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PosixAccount
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SshPublicKey. */
                interface ISshPublicKey {

                    /** SshPublicKey key */
                    key?: (string|null);

                    /** SshPublicKey expirationTimeUsec */
                    expirationTimeUsec?: (number|Long|string|null);

                    /** SshPublicKey fingerprint */
                    fingerprint?: (string|null);

                    /** SshPublicKey name */
                    name?: (string|null);
                }

                /** Represents a SshPublicKey. */
                class SshPublicKey implements ISshPublicKey {

                    /**
                     * Constructs a new SshPublicKey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.common.ISshPublicKey);

                    /** SshPublicKey key. */
                    public key: string;

                    /** SshPublicKey expirationTimeUsec. */
                    public expirationTimeUsec: (number|Long|string);

                    /** SshPublicKey fingerprint. */
                    public fingerprint: string;

                    /** SshPublicKey name. */
                    public name: string;

                    /**
                     * Creates a new SshPublicKey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SshPublicKey instance
                     */
                    public static create(properties?: google.cloud.oslogin.common.ISshPublicKey): google.cloud.oslogin.common.SshPublicKey;

                    /**
                     * Encodes the specified SshPublicKey message. Does not implicitly {@link google.cloud.oslogin.common.SshPublicKey.verify|verify} messages.
                     * @param message SshPublicKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.common.ISshPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SshPublicKey message, length delimited. Does not implicitly {@link google.cloud.oslogin.common.SshPublicKey.verify|verify} messages.
                     * @param message SshPublicKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.common.ISshPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SshPublicKey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SshPublicKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.common.SshPublicKey;

                    /**
                     * Decodes a SshPublicKey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SshPublicKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.common.SshPublicKey;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.common.SshPublicKey;

                    /**
                     * Creates a plain object from a SshPublicKey message. Also converts values to other types if specified.
                     * @param message SshPublicKey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.common.SshPublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Namespace v1. */
            namespace v1 {

                /** Represents an OsLoginService */
                class OsLoginService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new OsLoginService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new OsLoginService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): OsLoginService;

                    /**
                     * Calls CreateSshPublicKey.
                     * @param request CreateSshPublicKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SshPublicKey
                     */
                    public createSshPublicKey(request: google.cloud.oslogin.v1.ICreateSshPublicKeyRequest, callback: google.cloud.oslogin.v1.OsLoginService.CreateSshPublicKeyCallback): void;

                    /**
                     * Calls CreateSshPublicKey.
                     * @param request CreateSshPublicKeyRequest message or plain object
                     * @returns Promise
                     */
                    public createSshPublicKey(request: google.cloud.oslogin.v1.ICreateSshPublicKeyRequest): Promise<google.cloud.oslogin.common.SshPublicKey>;

                    /**
                     * Calls DeletePosixAccount.
                     * @param request DeletePosixAccountRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deletePosixAccount(request: google.cloud.oslogin.v1.IDeletePosixAccountRequest, callback: google.cloud.oslogin.v1.OsLoginService.DeletePosixAccountCallback): void;

                    /**
                     * Calls DeletePosixAccount.
                     * @param request DeletePosixAccountRequest message or plain object
                     * @returns Promise
                     */
                    public deletePosixAccount(request: google.cloud.oslogin.v1.IDeletePosixAccountRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls DeleteSshPublicKey.
                     * @param request DeleteSshPublicKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteSshPublicKey(request: google.cloud.oslogin.v1.IDeleteSshPublicKeyRequest, callback: google.cloud.oslogin.v1.OsLoginService.DeleteSshPublicKeyCallback): void;

                    /**
                     * Calls DeleteSshPublicKey.
                     * @param request DeleteSshPublicKeyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteSshPublicKey(request: google.cloud.oslogin.v1.IDeleteSshPublicKeyRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetLoginProfile.
                     * @param request GetLoginProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and LoginProfile
                     */
                    public getLoginProfile(request: google.cloud.oslogin.v1.IGetLoginProfileRequest, callback: google.cloud.oslogin.v1.OsLoginService.GetLoginProfileCallback): void;

                    /**
                     * Calls GetLoginProfile.
                     * @param request GetLoginProfileRequest message or plain object
                     * @returns Promise
                     */
                    public getLoginProfile(request: google.cloud.oslogin.v1.IGetLoginProfileRequest): Promise<google.cloud.oslogin.v1.LoginProfile>;

                    /**
                     * Calls GetSshPublicKey.
                     * @param request GetSshPublicKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SshPublicKey
                     */
                    public getSshPublicKey(request: google.cloud.oslogin.v1.IGetSshPublicKeyRequest, callback: google.cloud.oslogin.v1.OsLoginService.GetSshPublicKeyCallback): void;

                    /**
                     * Calls GetSshPublicKey.
                     * @param request GetSshPublicKeyRequest message or plain object
                     * @returns Promise
                     */
                    public getSshPublicKey(request: google.cloud.oslogin.v1.IGetSshPublicKeyRequest): Promise<google.cloud.oslogin.common.SshPublicKey>;

                    /**
                     * Calls ImportSshPublicKey.
                     * @param request ImportSshPublicKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ImportSshPublicKeyResponse
                     */
                    public importSshPublicKey(request: google.cloud.oslogin.v1.IImportSshPublicKeyRequest, callback: google.cloud.oslogin.v1.OsLoginService.ImportSshPublicKeyCallback): void;

                    /**
                     * Calls ImportSshPublicKey.
                     * @param request ImportSshPublicKeyRequest message or plain object
                     * @returns Promise
                     */
                    public importSshPublicKey(request: google.cloud.oslogin.v1.IImportSshPublicKeyRequest): Promise<google.cloud.oslogin.v1.ImportSshPublicKeyResponse>;

                    /**
                     * Calls UpdateSshPublicKey.
                     * @param request UpdateSshPublicKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SshPublicKey
                     */
                    public updateSshPublicKey(request: google.cloud.oslogin.v1.IUpdateSshPublicKeyRequest, callback: google.cloud.oslogin.v1.OsLoginService.UpdateSshPublicKeyCallback): void;

                    /**
                     * Calls UpdateSshPublicKey.
                     * @param request UpdateSshPublicKeyRequest message or plain object
                     * @returns Promise
                     */
                    public updateSshPublicKey(request: google.cloud.oslogin.v1.IUpdateSshPublicKeyRequest): Promise<google.cloud.oslogin.common.SshPublicKey>;
                }

                namespace OsLoginService {

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1.OsLoginService|createSshPublicKey}.
                     * @param error Error, if any
                     * @param [response] SshPublicKey
                     */
                    type CreateSshPublicKeyCallback = (error: (Error|null), response?: google.cloud.oslogin.common.SshPublicKey) => void;

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1.OsLoginService|deletePosixAccount}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeletePosixAccountCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1.OsLoginService|deleteSshPublicKey}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteSshPublicKeyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1.OsLoginService|getLoginProfile}.
                     * @param error Error, if any
                     * @param [response] LoginProfile
                     */
                    type GetLoginProfileCallback = (error: (Error|null), response?: google.cloud.oslogin.v1.LoginProfile) => void;

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1.OsLoginService|getSshPublicKey}.
                     * @param error Error, if any
                     * @param [response] SshPublicKey
                     */
                    type GetSshPublicKeyCallback = (error: (Error|null), response?: google.cloud.oslogin.common.SshPublicKey) => void;

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1.OsLoginService|importSshPublicKey}.
                     * @param error Error, if any
                     * @param [response] ImportSshPublicKeyResponse
                     */
                    type ImportSshPublicKeyCallback = (error: (Error|null), response?: google.cloud.oslogin.v1.ImportSshPublicKeyResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1.OsLoginService|updateSshPublicKey}.
                     * @param error Error, if any
                     * @param [response] SshPublicKey
                     */
                    type UpdateSshPublicKeyCallback = (error: (Error|null), response?: google.cloud.oslogin.common.SshPublicKey) => void;
                }

                /** Properties of a LoginProfile. */
                interface ILoginProfile {

                    /** LoginProfile name */
                    name?: (string|null);

                    /** LoginProfile posixAccounts */
                    posixAccounts?: (google.cloud.oslogin.common.IPosixAccount[]|null);

                    /** LoginProfile sshPublicKeys */
                    sshPublicKeys?: ({ [k: string]: google.cloud.oslogin.common.ISshPublicKey }|null);
                }

                /** Represents a LoginProfile. */
                class LoginProfile implements ILoginProfile {

                    /**
                     * Constructs a new LoginProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1.ILoginProfile);

                    /** LoginProfile name. */
                    public name: string;

                    /** LoginProfile posixAccounts. */
                    public posixAccounts: google.cloud.oslogin.common.IPosixAccount[];

                    /** LoginProfile sshPublicKeys. */
                    public sshPublicKeys: { [k: string]: google.cloud.oslogin.common.ISshPublicKey };

                    /**
                     * Creates a new LoginProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoginProfile instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1.ILoginProfile): google.cloud.oslogin.v1.LoginProfile;

                    /**
                     * Encodes the specified LoginProfile message. Does not implicitly {@link google.cloud.oslogin.v1.LoginProfile.verify|verify} messages.
                     * @param message LoginProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1.ILoginProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoginProfile message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1.LoginProfile.verify|verify} messages.
                     * @param message LoginProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1.ILoginProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoginProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoginProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1.LoginProfile;

                    /**
                     * Decodes a LoginProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoginProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1.LoginProfile;

                    /**
                     * Verifies a LoginProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoginProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoginProfile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1.LoginProfile;

                    /**
                     * Creates a plain object from a LoginProfile message. Also converts values to other types if specified.
                     * @param message LoginProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1.LoginProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoginProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LoginProfile
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateSshPublicKeyRequest. */
                interface ICreateSshPublicKeyRequest {

                    /** CreateSshPublicKeyRequest parent */
                    parent?: (string|null);

                    /** CreateSshPublicKeyRequest sshPublicKey */
                    sshPublicKey?: (google.cloud.oslogin.common.ISshPublicKey|null);
                }

                /** Represents a CreateSshPublicKeyRequest. */
                class CreateSshPublicKeyRequest implements ICreateSshPublicKeyRequest {

                    /**
                     * Constructs a new CreateSshPublicKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1.ICreateSshPublicKeyRequest);

                    /** CreateSshPublicKeyRequest parent. */
                    public parent: string;

                    /** CreateSshPublicKeyRequest sshPublicKey. */
                    public sshPublicKey?: (google.cloud.oslogin.common.ISshPublicKey|null);

                    /**
                     * Creates a new CreateSshPublicKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSshPublicKeyRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1.ICreateSshPublicKeyRequest): google.cloud.oslogin.v1.CreateSshPublicKeyRequest;

                    /**
                     * Encodes the specified CreateSshPublicKeyRequest message. Does not implicitly {@link google.cloud.oslogin.v1.CreateSshPublicKeyRequest.verify|verify} messages.
                     * @param message CreateSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1.ICreateSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSshPublicKeyRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1.CreateSshPublicKeyRequest.verify|verify} messages.
                     * @param message CreateSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1.ICreateSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSshPublicKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1.CreateSshPublicKeyRequest;

                    /**
                     * Decodes a CreateSshPublicKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1.CreateSshPublicKeyRequest;

                    /**
                     * Verifies a CreateSshPublicKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSshPublicKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSshPublicKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1.CreateSshPublicKeyRequest;

                    /**
                     * Creates a plain object from a CreateSshPublicKeyRequest message. Also converts values to other types if specified.
                     * @param message CreateSshPublicKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1.CreateSshPublicKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSshPublicKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateSshPublicKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePosixAccountRequest. */
                interface IDeletePosixAccountRequest {

                    /** DeletePosixAccountRequest name */
                    name?: (string|null);
                }

                /** Represents a DeletePosixAccountRequest. */
                class DeletePosixAccountRequest implements IDeletePosixAccountRequest {

                    /**
                     * Constructs a new DeletePosixAccountRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1.IDeletePosixAccountRequest);

                    /** DeletePosixAccountRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeletePosixAccountRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePosixAccountRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1.IDeletePosixAccountRequest): google.cloud.oslogin.v1.DeletePosixAccountRequest;

                    /**
                     * Encodes the specified DeletePosixAccountRequest message. Does not implicitly {@link google.cloud.oslogin.v1.DeletePosixAccountRequest.verify|verify} messages.
                     * @param message DeletePosixAccountRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1.IDeletePosixAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePosixAccountRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1.DeletePosixAccountRequest.verify|verify} messages.
                     * @param message DeletePosixAccountRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1.IDeletePosixAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePosixAccountRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePosixAccountRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1.DeletePosixAccountRequest;

                    /**
                     * Decodes a DeletePosixAccountRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePosixAccountRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1.DeletePosixAccountRequest;

                    /**
                     * Verifies a DeletePosixAccountRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePosixAccountRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePosixAccountRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1.DeletePosixAccountRequest;

                    /**
                     * Creates a plain object from a DeletePosixAccountRequest message. Also converts values to other types if specified.
                     * @param message DeletePosixAccountRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1.DeletePosixAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePosixAccountRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePosixAccountRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteSshPublicKeyRequest. */
                interface IDeleteSshPublicKeyRequest {

                    /** DeleteSshPublicKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteSshPublicKeyRequest. */
                class DeleteSshPublicKeyRequest implements IDeleteSshPublicKeyRequest {

                    /**
                     * Constructs a new DeleteSshPublicKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1.IDeleteSshPublicKeyRequest);

                    /** DeleteSshPublicKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteSshPublicKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteSshPublicKeyRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1.IDeleteSshPublicKeyRequest): google.cloud.oslogin.v1.DeleteSshPublicKeyRequest;

                    /**
                     * Encodes the specified DeleteSshPublicKeyRequest message. Does not implicitly {@link google.cloud.oslogin.v1.DeleteSshPublicKeyRequest.verify|verify} messages.
                     * @param message DeleteSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1.IDeleteSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteSshPublicKeyRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1.DeleteSshPublicKeyRequest.verify|verify} messages.
                     * @param message DeleteSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1.IDeleteSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteSshPublicKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1.DeleteSshPublicKeyRequest;

                    /**
                     * Decodes a DeleteSshPublicKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1.DeleteSshPublicKeyRequest;

                    /**
                     * Verifies a DeleteSshPublicKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteSshPublicKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteSshPublicKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1.DeleteSshPublicKeyRequest;

                    /**
                     * Creates a plain object from a DeleteSshPublicKeyRequest message. Also converts values to other types if specified.
                     * @param message DeleteSshPublicKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1.DeleteSshPublicKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteSshPublicKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteSshPublicKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetLoginProfileRequest. */
                interface IGetLoginProfileRequest {

                    /** GetLoginProfileRequest name */
                    name?: (string|null);

                    /** GetLoginProfileRequest projectId */
                    projectId?: (string|null);

                    /** GetLoginProfileRequest systemId */
                    systemId?: (string|null);
                }

                /** Represents a GetLoginProfileRequest. */
                class GetLoginProfileRequest implements IGetLoginProfileRequest {

                    /**
                     * Constructs a new GetLoginProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1.IGetLoginProfileRequest);

                    /** GetLoginProfileRequest name. */
                    public name: string;

                    /** GetLoginProfileRequest projectId. */
                    public projectId: string;

                    /** GetLoginProfileRequest systemId. */
                    public systemId: string;

                    /**
                     * Creates a new GetLoginProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetLoginProfileRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1.IGetLoginProfileRequest): google.cloud.oslogin.v1.GetLoginProfileRequest;

                    /**
                     * Encodes the specified GetLoginProfileRequest message. Does not implicitly {@link google.cloud.oslogin.v1.GetLoginProfileRequest.verify|verify} messages.
                     * @param message GetLoginProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1.IGetLoginProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetLoginProfileRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1.GetLoginProfileRequest.verify|verify} messages.
                     * @param message GetLoginProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1.IGetLoginProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetLoginProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetLoginProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1.GetLoginProfileRequest;

                    /**
                     * Decodes a GetLoginProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetLoginProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1.GetLoginProfileRequest;

                    /**
                     * Verifies a GetLoginProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetLoginProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetLoginProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1.GetLoginProfileRequest;

                    /**
                     * Creates a plain object from a GetLoginProfileRequest message. Also converts values to other types if specified.
                     * @param message GetLoginProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1.GetLoginProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetLoginProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetLoginProfileRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSshPublicKeyRequest. */
                interface IGetSshPublicKeyRequest {

                    /** GetSshPublicKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSshPublicKeyRequest. */
                class GetSshPublicKeyRequest implements IGetSshPublicKeyRequest {

                    /**
                     * Constructs a new GetSshPublicKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1.IGetSshPublicKeyRequest);

                    /** GetSshPublicKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSshPublicKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSshPublicKeyRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1.IGetSshPublicKeyRequest): google.cloud.oslogin.v1.GetSshPublicKeyRequest;

                    /**
                     * Encodes the specified GetSshPublicKeyRequest message. Does not implicitly {@link google.cloud.oslogin.v1.GetSshPublicKeyRequest.verify|verify} messages.
                     * @param message GetSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1.IGetSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSshPublicKeyRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1.GetSshPublicKeyRequest.verify|verify} messages.
                     * @param message GetSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1.IGetSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSshPublicKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1.GetSshPublicKeyRequest;

                    /**
                     * Decodes a GetSshPublicKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1.GetSshPublicKeyRequest;

                    /**
                     * Verifies a GetSshPublicKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSshPublicKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSshPublicKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1.GetSshPublicKeyRequest;

                    /**
                     * Creates a plain object from a GetSshPublicKeyRequest message. Also converts values to other types if specified.
                     * @param message GetSshPublicKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1.GetSshPublicKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSshPublicKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSshPublicKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportSshPublicKeyRequest. */
                interface IImportSshPublicKeyRequest {

                    /** ImportSshPublicKeyRequest parent */
                    parent?: (string|null);

                    /** ImportSshPublicKeyRequest sshPublicKey */
                    sshPublicKey?: (google.cloud.oslogin.common.ISshPublicKey|null);

                    /** ImportSshPublicKeyRequest projectId */
                    projectId?: (string|null);
                }

                /** Represents an ImportSshPublicKeyRequest. */
                class ImportSshPublicKeyRequest implements IImportSshPublicKeyRequest {

                    /**
                     * Constructs a new ImportSshPublicKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1.IImportSshPublicKeyRequest);

                    /** ImportSshPublicKeyRequest parent. */
                    public parent: string;

                    /** ImportSshPublicKeyRequest sshPublicKey. */
                    public sshPublicKey?: (google.cloud.oslogin.common.ISshPublicKey|null);

                    /** ImportSshPublicKeyRequest projectId. */
                    public projectId: string;

                    /**
                     * Creates a new ImportSshPublicKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportSshPublicKeyRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1.IImportSshPublicKeyRequest): google.cloud.oslogin.v1.ImportSshPublicKeyRequest;

                    /**
                     * Encodes the specified ImportSshPublicKeyRequest message. Does not implicitly {@link google.cloud.oslogin.v1.ImportSshPublicKeyRequest.verify|verify} messages.
                     * @param message ImportSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1.IImportSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportSshPublicKeyRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1.ImportSshPublicKeyRequest.verify|verify} messages.
                     * @param message ImportSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1.IImportSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportSshPublicKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1.ImportSshPublicKeyRequest;

                    /**
                     * Decodes an ImportSshPublicKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1.ImportSshPublicKeyRequest;

                    /**
                     * Verifies an ImportSshPublicKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportSshPublicKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportSshPublicKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1.ImportSshPublicKeyRequest;

                    /**
                     * Creates a plain object from an ImportSshPublicKeyRequest message. Also converts values to other types if specified.
                     * @param message ImportSshPublicKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1.ImportSshPublicKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportSshPublicKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportSshPublicKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportSshPublicKeyResponse. */
                interface IImportSshPublicKeyResponse {

                    /** ImportSshPublicKeyResponse loginProfile */
                    loginProfile?: (google.cloud.oslogin.v1.ILoginProfile|null);

                    /** ImportSshPublicKeyResponse details */
                    details?: (string|null);
                }

                /** Represents an ImportSshPublicKeyResponse. */
                class ImportSshPublicKeyResponse implements IImportSshPublicKeyResponse {

                    /**
                     * Constructs a new ImportSshPublicKeyResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1.IImportSshPublicKeyResponse);

                    /** ImportSshPublicKeyResponse loginProfile. */
                    public loginProfile?: (google.cloud.oslogin.v1.ILoginProfile|null);

                    /** ImportSshPublicKeyResponse details. */
                    public details: string;

                    /**
                     * Creates a new ImportSshPublicKeyResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportSshPublicKeyResponse instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1.IImportSshPublicKeyResponse): google.cloud.oslogin.v1.ImportSshPublicKeyResponse;

                    /**
                     * Encodes the specified ImportSshPublicKeyResponse message. Does not implicitly {@link google.cloud.oslogin.v1.ImportSshPublicKeyResponse.verify|verify} messages.
                     * @param message ImportSshPublicKeyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1.IImportSshPublicKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportSshPublicKeyResponse message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1.ImportSshPublicKeyResponse.verify|verify} messages.
                     * @param message ImportSshPublicKeyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1.IImportSshPublicKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportSshPublicKeyResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportSshPublicKeyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1.ImportSshPublicKeyResponse;

                    /**
                     * Decodes an ImportSshPublicKeyResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportSshPublicKeyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1.ImportSshPublicKeyResponse;

                    /**
                     * Verifies an ImportSshPublicKeyResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportSshPublicKeyResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportSshPublicKeyResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1.ImportSshPublicKeyResponse;

                    /**
                     * Creates a plain object from an ImportSshPublicKeyResponse message. Also converts values to other types if specified.
                     * @param message ImportSshPublicKeyResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1.ImportSshPublicKeyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportSshPublicKeyResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportSshPublicKeyResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateSshPublicKeyRequest. */
                interface IUpdateSshPublicKeyRequest {

                    /** UpdateSshPublicKeyRequest name */
                    name?: (string|null);

                    /** UpdateSshPublicKeyRequest sshPublicKey */
                    sshPublicKey?: (google.cloud.oslogin.common.ISshPublicKey|null);

                    /** UpdateSshPublicKeyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateSshPublicKeyRequest. */
                class UpdateSshPublicKeyRequest implements IUpdateSshPublicKeyRequest {

                    /**
                     * Constructs a new UpdateSshPublicKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1.IUpdateSshPublicKeyRequest);

                    /** UpdateSshPublicKeyRequest name. */
                    public name: string;

                    /** UpdateSshPublicKeyRequest sshPublicKey. */
                    public sshPublicKey?: (google.cloud.oslogin.common.ISshPublicKey|null);

                    /** UpdateSshPublicKeyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateSshPublicKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSshPublicKeyRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1.IUpdateSshPublicKeyRequest): google.cloud.oslogin.v1.UpdateSshPublicKeyRequest;

                    /**
                     * Encodes the specified UpdateSshPublicKeyRequest message. Does not implicitly {@link google.cloud.oslogin.v1.UpdateSshPublicKeyRequest.verify|verify} messages.
                     * @param message UpdateSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1.IUpdateSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSshPublicKeyRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1.UpdateSshPublicKeyRequest.verify|verify} messages.
                     * @param message UpdateSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1.IUpdateSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSshPublicKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1.UpdateSshPublicKeyRequest;

                    /**
                     * Decodes an UpdateSshPublicKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1.UpdateSshPublicKeyRequest;

                    /**
                     * Verifies an UpdateSshPublicKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSshPublicKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSshPublicKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1.UpdateSshPublicKeyRequest;

                    /**
                     * Creates a plain object from an UpdateSshPublicKeyRequest message. Also converts values to other types if specified.
                     * @param message UpdateSshPublicKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1.UpdateSshPublicKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSshPublicKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateSshPublicKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Namespace v1beta. */
            namespace v1beta {

                /** Represents an OsLoginService */
                class OsLoginService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new OsLoginService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new OsLoginService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): OsLoginService;

                    /**
                     * Calls CreateSshPublicKey.
                     * @param request CreateSshPublicKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SshPublicKey
                     */
                    public createSshPublicKey(request: google.cloud.oslogin.v1beta.ICreateSshPublicKeyRequest, callback: google.cloud.oslogin.v1beta.OsLoginService.CreateSshPublicKeyCallback): void;

                    /**
                     * Calls CreateSshPublicKey.
                     * @param request CreateSshPublicKeyRequest message or plain object
                     * @returns Promise
                     */
                    public createSshPublicKey(request: google.cloud.oslogin.v1beta.ICreateSshPublicKeyRequest): Promise<google.cloud.oslogin.common.SshPublicKey>;

                    /**
                     * Calls DeletePosixAccount.
                     * @param request DeletePosixAccountRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deletePosixAccount(request: google.cloud.oslogin.v1beta.IDeletePosixAccountRequest, callback: google.cloud.oslogin.v1beta.OsLoginService.DeletePosixAccountCallback): void;

                    /**
                     * Calls DeletePosixAccount.
                     * @param request DeletePosixAccountRequest message or plain object
                     * @returns Promise
                     */
                    public deletePosixAccount(request: google.cloud.oslogin.v1beta.IDeletePosixAccountRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls DeleteSshPublicKey.
                     * @param request DeleteSshPublicKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteSshPublicKey(request: google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest, callback: google.cloud.oslogin.v1beta.OsLoginService.DeleteSshPublicKeyCallback): void;

                    /**
                     * Calls DeleteSshPublicKey.
                     * @param request DeleteSshPublicKeyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteSshPublicKey(request: google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetLoginProfile.
                     * @param request GetLoginProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and LoginProfile
                     */
                    public getLoginProfile(request: google.cloud.oslogin.v1beta.IGetLoginProfileRequest, callback: google.cloud.oslogin.v1beta.OsLoginService.GetLoginProfileCallback): void;

                    /**
                     * Calls GetLoginProfile.
                     * @param request GetLoginProfileRequest message or plain object
                     * @returns Promise
                     */
                    public getLoginProfile(request: google.cloud.oslogin.v1beta.IGetLoginProfileRequest): Promise<google.cloud.oslogin.v1beta.LoginProfile>;

                    /**
                     * Calls GetSshPublicKey.
                     * @param request GetSshPublicKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SshPublicKey
                     */
                    public getSshPublicKey(request: google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest, callback: google.cloud.oslogin.v1beta.OsLoginService.GetSshPublicKeyCallback): void;

                    /**
                     * Calls GetSshPublicKey.
                     * @param request GetSshPublicKeyRequest message or plain object
                     * @returns Promise
                     */
                    public getSshPublicKey(request: google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest): Promise<google.cloud.oslogin.common.SshPublicKey>;

                    /**
                     * Calls ImportSshPublicKey.
                     * @param request ImportSshPublicKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ImportSshPublicKeyResponse
                     */
                    public importSshPublicKey(request: google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest, callback: google.cloud.oslogin.v1beta.OsLoginService.ImportSshPublicKeyCallback): void;

                    /**
                     * Calls ImportSshPublicKey.
                     * @param request ImportSshPublicKeyRequest message or plain object
                     * @returns Promise
                     */
                    public importSshPublicKey(request: google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest): Promise<google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse>;

                    /**
                     * Calls UpdateSshPublicKey.
                     * @param request UpdateSshPublicKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SshPublicKey
                     */
                    public updateSshPublicKey(request: google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest, callback: google.cloud.oslogin.v1beta.OsLoginService.UpdateSshPublicKeyCallback): void;

                    /**
                     * Calls UpdateSshPublicKey.
                     * @param request UpdateSshPublicKeyRequest message or plain object
                     * @returns Promise
                     */
                    public updateSshPublicKey(request: google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest): Promise<google.cloud.oslogin.common.SshPublicKey>;

                    /**
                     * Calls SignSshPublicKey.
                     * @param request SignSshPublicKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SignSshPublicKeyResponse
                     */
                    public signSshPublicKey(request: google.cloud.oslogin.v1beta.ISignSshPublicKeyRequest, callback: google.cloud.oslogin.v1beta.OsLoginService.SignSshPublicKeyCallback): void;

                    /**
                     * Calls SignSshPublicKey.
                     * @param request SignSshPublicKeyRequest message or plain object
                     * @returns Promise
                     */
                    public signSshPublicKey(request: google.cloud.oslogin.v1beta.ISignSshPublicKeyRequest): Promise<google.cloud.oslogin.v1beta.SignSshPublicKeyResponse>;
                }

                namespace OsLoginService {

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1beta.OsLoginService|createSshPublicKey}.
                     * @param error Error, if any
                     * @param [response] SshPublicKey
                     */
                    type CreateSshPublicKeyCallback = (error: (Error|null), response?: google.cloud.oslogin.common.SshPublicKey) => void;

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1beta.OsLoginService|deletePosixAccount}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeletePosixAccountCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1beta.OsLoginService|deleteSshPublicKey}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteSshPublicKeyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1beta.OsLoginService|getLoginProfile}.
                     * @param error Error, if any
                     * @param [response] LoginProfile
                     */
                    type GetLoginProfileCallback = (error: (Error|null), response?: google.cloud.oslogin.v1beta.LoginProfile) => void;

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1beta.OsLoginService|getSshPublicKey}.
                     * @param error Error, if any
                     * @param [response] SshPublicKey
                     */
                    type GetSshPublicKeyCallback = (error: (Error|null), response?: google.cloud.oslogin.common.SshPublicKey) => void;

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1beta.OsLoginService|importSshPublicKey}.
                     * @param error Error, if any
                     * @param [response] ImportSshPublicKeyResponse
                     */
                    type ImportSshPublicKeyCallback = (error: (Error|null), response?: google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1beta.OsLoginService|updateSshPublicKey}.
                     * @param error Error, if any
                     * @param [response] SshPublicKey
                     */
                    type UpdateSshPublicKeyCallback = (error: (Error|null), response?: google.cloud.oslogin.common.SshPublicKey) => void;

                    /**
                     * Callback as used by {@link google.cloud.oslogin.v1beta.OsLoginService|signSshPublicKey}.
                     * @param error Error, if any
                     * @param [response] SignSshPublicKeyResponse
                     */
                    type SignSshPublicKeyCallback = (error: (Error|null), response?: google.cloud.oslogin.v1beta.SignSshPublicKeyResponse) => void;
                }

                /** Properties of a LoginProfile. */
                interface ILoginProfile {

                    /** LoginProfile name */
                    name?: (string|null);

                    /** LoginProfile posixAccounts */
                    posixAccounts?: (google.cloud.oslogin.common.IPosixAccount[]|null);

                    /** LoginProfile sshPublicKeys */
                    sshPublicKeys?: ({ [k: string]: google.cloud.oslogin.common.ISshPublicKey }|null);

                    /** LoginProfile securityKeys */
                    securityKeys?: (google.cloud.oslogin.v1beta.ISecurityKey[]|null);
                }

                /** Represents a LoginProfile. */
                class LoginProfile implements ILoginProfile {

                    /**
                     * Constructs a new LoginProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.ILoginProfile);

                    /** LoginProfile name. */
                    public name: string;

                    /** LoginProfile posixAccounts. */
                    public posixAccounts: google.cloud.oslogin.common.IPosixAccount[];

                    /** LoginProfile sshPublicKeys. */
                    public sshPublicKeys: { [k: string]: google.cloud.oslogin.common.ISshPublicKey };

                    /** LoginProfile securityKeys. */
                    public securityKeys: google.cloud.oslogin.v1beta.ISecurityKey[];

                    /**
                     * Creates a new LoginProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoginProfile instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.ILoginProfile): google.cloud.oslogin.v1beta.LoginProfile;

                    /**
                     * Encodes the specified LoginProfile message. Does not implicitly {@link google.cloud.oslogin.v1beta.LoginProfile.verify|verify} messages.
                     * @param message LoginProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.ILoginProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoginProfile message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.LoginProfile.verify|verify} messages.
                     * @param message LoginProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.ILoginProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoginProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoginProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.LoginProfile;

                    /**
                     * Decodes a LoginProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoginProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.LoginProfile;

                    /**
                     * Verifies a LoginProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoginProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoginProfile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.LoginProfile;

                    /**
                     * Creates a plain object from a LoginProfile message. Also converts values to other types if specified.
                     * @param message LoginProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.LoginProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoginProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LoginProfile
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateSshPublicKeyRequest. */
                interface ICreateSshPublicKeyRequest {

                    /** CreateSshPublicKeyRequest parent */
                    parent?: (string|null);

                    /** CreateSshPublicKeyRequest sshPublicKey */
                    sshPublicKey?: (google.cloud.oslogin.common.ISshPublicKey|null);
                }

                /** Represents a CreateSshPublicKeyRequest. */
                class CreateSshPublicKeyRequest implements ICreateSshPublicKeyRequest {

                    /**
                     * Constructs a new CreateSshPublicKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.ICreateSshPublicKeyRequest);

                    /** CreateSshPublicKeyRequest parent. */
                    public parent: string;

                    /** CreateSshPublicKeyRequest sshPublicKey. */
                    public sshPublicKey?: (google.cloud.oslogin.common.ISshPublicKey|null);

                    /**
                     * Creates a new CreateSshPublicKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSshPublicKeyRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.ICreateSshPublicKeyRequest): google.cloud.oslogin.v1beta.CreateSshPublicKeyRequest;

                    /**
                     * Encodes the specified CreateSshPublicKeyRequest message. Does not implicitly {@link google.cloud.oslogin.v1beta.CreateSshPublicKeyRequest.verify|verify} messages.
                     * @param message CreateSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.ICreateSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSshPublicKeyRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.CreateSshPublicKeyRequest.verify|verify} messages.
                     * @param message CreateSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.ICreateSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSshPublicKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.CreateSshPublicKeyRequest;

                    /**
                     * Decodes a CreateSshPublicKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.CreateSshPublicKeyRequest;

                    /**
                     * Verifies a CreateSshPublicKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSshPublicKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSshPublicKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.CreateSshPublicKeyRequest;

                    /**
                     * Creates a plain object from a CreateSshPublicKeyRequest message. Also converts values to other types if specified.
                     * @param message CreateSshPublicKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.CreateSshPublicKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSshPublicKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateSshPublicKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePosixAccountRequest. */
                interface IDeletePosixAccountRequest {

                    /** DeletePosixAccountRequest name */
                    name?: (string|null);
                }

                /** Represents a DeletePosixAccountRequest. */
                class DeletePosixAccountRequest implements IDeletePosixAccountRequest {

                    /**
                     * Constructs a new DeletePosixAccountRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.IDeletePosixAccountRequest);

                    /** DeletePosixAccountRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeletePosixAccountRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePosixAccountRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.IDeletePosixAccountRequest): google.cloud.oslogin.v1beta.DeletePosixAccountRequest;

                    /**
                     * Encodes the specified DeletePosixAccountRequest message. Does not implicitly {@link google.cloud.oslogin.v1beta.DeletePosixAccountRequest.verify|verify} messages.
                     * @param message DeletePosixAccountRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.IDeletePosixAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePosixAccountRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.DeletePosixAccountRequest.verify|verify} messages.
                     * @param message DeletePosixAccountRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.IDeletePosixAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePosixAccountRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePosixAccountRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.DeletePosixAccountRequest;

                    /**
                     * Decodes a DeletePosixAccountRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePosixAccountRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.DeletePosixAccountRequest;

                    /**
                     * Verifies a DeletePosixAccountRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePosixAccountRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePosixAccountRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.DeletePosixAccountRequest;

                    /**
                     * Creates a plain object from a DeletePosixAccountRequest message. Also converts values to other types if specified.
                     * @param message DeletePosixAccountRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.DeletePosixAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePosixAccountRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePosixAccountRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteSshPublicKeyRequest. */
                interface IDeleteSshPublicKeyRequest {

                    /** DeleteSshPublicKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteSshPublicKeyRequest. */
                class DeleteSshPublicKeyRequest implements IDeleteSshPublicKeyRequest {

                    /**
                     * Constructs a new DeleteSshPublicKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest);

                    /** DeleteSshPublicKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteSshPublicKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteSshPublicKeyRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest): google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest;

                    /**
                     * Encodes the specified DeleteSshPublicKeyRequest message. Does not implicitly {@link google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest.verify|verify} messages.
                     * @param message DeleteSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteSshPublicKeyRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest.verify|verify} messages.
                     * @param message DeleteSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteSshPublicKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest;

                    /**
                     * Decodes a DeleteSshPublicKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest;

                    /**
                     * Verifies a DeleteSshPublicKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteSshPublicKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteSshPublicKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest;

                    /**
                     * Creates a plain object from a DeleteSshPublicKeyRequest message. Also converts values to other types if specified.
                     * @param message DeleteSshPublicKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.DeleteSshPublicKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteSshPublicKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteSshPublicKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetLoginProfileRequest. */
                interface IGetLoginProfileRequest {

                    /** GetLoginProfileRequest name */
                    name?: (string|null);

                    /** GetLoginProfileRequest projectId */
                    projectId?: (string|null);

                    /** GetLoginProfileRequest systemId */
                    systemId?: (string|null);

                    /** GetLoginProfileRequest view */
                    view?: (google.cloud.oslogin.v1beta.LoginProfileView|keyof typeof google.cloud.oslogin.v1beta.LoginProfileView|null);
                }

                /** Represents a GetLoginProfileRequest. */
                class GetLoginProfileRequest implements IGetLoginProfileRequest {

                    /**
                     * Constructs a new GetLoginProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.IGetLoginProfileRequest);

                    /** GetLoginProfileRequest name. */
                    public name: string;

                    /** GetLoginProfileRequest projectId. */
                    public projectId: string;

                    /** GetLoginProfileRequest systemId. */
                    public systemId: string;

                    /** GetLoginProfileRequest view. */
                    public view: (google.cloud.oslogin.v1beta.LoginProfileView|keyof typeof google.cloud.oslogin.v1beta.LoginProfileView);

                    /**
                     * Creates a new GetLoginProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetLoginProfileRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.IGetLoginProfileRequest): google.cloud.oslogin.v1beta.GetLoginProfileRequest;

                    /**
                     * Encodes the specified GetLoginProfileRequest message. Does not implicitly {@link google.cloud.oslogin.v1beta.GetLoginProfileRequest.verify|verify} messages.
                     * @param message GetLoginProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.IGetLoginProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetLoginProfileRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.GetLoginProfileRequest.verify|verify} messages.
                     * @param message GetLoginProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.IGetLoginProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetLoginProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetLoginProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.GetLoginProfileRequest;

                    /**
                     * Decodes a GetLoginProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetLoginProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.GetLoginProfileRequest;

                    /**
                     * Verifies a GetLoginProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetLoginProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetLoginProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.GetLoginProfileRequest;

                    /**
                     * Creates a plain object from a GetLoginProfileRequest message. Also converts values to other types if specified.
                     * @param message GetLoginProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.GetLoginProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetLoginProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetLoginProfileRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSshPublicKeyRequest. */
                interface IGetSshPublicKeyRequest {

                    /** GetSshPublicKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSshPublicKeyRequest. */
                class GetSshPublicKeyRequest implements IGetSshPublicKeyRequest {

                    /**
                     * Constructs a new GetSshPublicKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest);

                    /** GetSshPublicKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSshPublicKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSshPublicKeyRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest): google.cloud.oslogin.v1beta.GetSshPublicKeyRequest;

                    /**
                     * Encodes the specified GetSshPublicKeyRequest message. Does not implicitly {@link google.cloud.oslogin.v1beta.GetSshPublicKeyRequest.verify|verify} messages.
                     * @param message GetSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSshPublicKeyRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.GetSshPublicKeyRequest.verify|verify} messages.
                     * @param message GetSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSshPublicKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.GetSshPublicKeyRequest;

                    /**
                     * Decodes a GetSshPublicKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.GetSshPublicKeyRequest;

                    /**
                     * Verifies a GetSshPublicKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSshPublicKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSshPublicKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.GetSshPublicKeyRequest;

                    /**
                     * Creates a plain object from a GetSshPublicKeyRequest message. Also converts values to other types if specified.
                     * @param message GetSshPublicKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.GetSshPublicKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSshPublicKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSshPublicKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportSshPublicKeyRequest. */
                interface IImportSshPublicKeyRequest {

                    /** ImportSshPublicKeyRequest parent */
                    parent?: (string|null);

                    /** ImportSshPublicKeyRequest sshPublicKey */
                    sshPublicKey?: (google.cloud.oslogin.common.ISshPublicKey|null);

                    /** ImportSshPublicKeyRequest projectId */
                    projectId?: (string|null);

                    /** ImportSshPublicKeyRequest view */
                    view?: (google.cloud.oslogin.v1beta.LoginProfileView|keyof typeof google.cloud.oslogin.v1beta.LoginProfileView|null);
                }

                /** Represents an ImportSshPublicKeyRequest. */
                class ImportSshPublicKeyRequest implements IImportSshPublicKeyRequest {

                    /**
                     * Constructs a new ImportSshPublicKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest);

                    /** ImportSshPublicKeyRequest parent. */
                    public parent: string;

                    /** ImportSshPublicKeyRequest sshPublicKey. */
                    public sshPublicKey?: (google.cloud.oslogin.common.ISshPublicKey|null);

                    /** ImportSshPublicKeyRequest projectId. */
                    public projectId: string;

                    /** ImportSshPublicKeyRequest view. */
                    public view: (google.cloud.oslogin.v1beta.LoginProfileView|keyof typeof google.cloud.oslogin.v1beta.LoginProfileView);

                    /**
                     * Creates a new ImportSshPublicKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportSshPublicKeyRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest): google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest;

                    /**
                     * Encodes the specified ImportSshPublicKeyRequest message. Does not implicitly {@link google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest.verify|verify} messages.
                     * @param message ImportSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportSshPublicKeyRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest.verify|verify} messages.
                     * @param message ImportSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportSshPublicKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest;

                    /**
                     * Decodes an ImportSshPublicKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest;

                    /**
                     * Verifies an ImportSshPublicKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportSshPublicKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportSshPublicKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest;

                    /**
                     * Creates a plain object from an ImportSshPublicKeyRequest message. Also converts values to other types if specified.
                     * @param message ImportSshPublicKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.ImportSshPublicKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportSshPublicKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportSshPublicKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportSshPublicKeyResponse. */
                interface IImportSshPublicKeyResponse {

                    /** ImportSshPublicKeyResponse loginProfile */
                    loginProfile?: (google.cloud.oslogin.v1beta.ILoginProfile|null);

                    /** ImportSshPublicKeyResponse details */
                    details?: (string|null);
                }

                /** Represents an ImportSshPublicKeyResponse. */
                class ImportSshPublicKeyResponse implements IImportSshPublicKeyResponse {

                    /**
                     * Constructs a new ImportSshPublicKeyResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse);

                    /** ImportSshPublicKeyResponse loginProfile. */
                    public loginProfile?: (google.cloud.oslogin.v1beta.ILoginProfile|null);

                    /** ImportSshPublicKeyResponse details. */
                    public details: string;

                    /**
                     * Creates a new ImportSshPublicKeyResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportSshPublicKeyResponse instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse): google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse;

                    /**
                     * Encodes the specified ImportSshPublicKeyResponse message. Does not implicitly {@link google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse.verify|verify} messages.
                     * @param message ImportSshPublicKeyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportSshPublicKeyResponse message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse.verify|verify} messages.
                     * @param message ImportSshPublicKeyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportSshPublicKeyResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportSshPublicKeyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse;

                    /**
                     * Decodes an ImportSshPublicKeyResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportSshPublicKeyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse;

                    /**
                     * Verifies an ImportSshPublicKeyResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportSshPublicKeyResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportSshPublicKeyResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse;

                    /**
                     * Creates a plain object from an ImportSshPublicKeyResponse message. Also converts values to other types if specified.
                     * @param message ImportSshPublicKeyResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportSshPublicKeyResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportSshPublicKeyResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateSshPublicKeyRequest. */
                interface IUpdateSshPublicKeyRequest {

                    /** UpdateSshPublicKeyRequest name */
                    name?: (string|null);

                    /** UpdateSshPublicKeyRequest sshPublicKey */
                    sshPublicKey?: (google.cloud.oslogin.common.ISshPublicKey|null);

                    /** UpdateSshPublicKeyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateSshPublicKeyRequest. */
                class UpdateSshPublicKeyRequest implements IUpdateSshPublicKeyRequest {

                    /**
                     * Constructs a new UpdateSshPublicKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest);

                    /** UpdateSshPublicKeyRequest name. */
                    public name: string;

                    /** UpdateSshPublicKeyRequest sshPublicKey. */
                    public sshPublicKey?: (google.cloud.oslogin.common.ISshPublicKey|null);

                    /** UpdateSshPublicKeyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateSshPublicKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSshPublicKeyRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest): google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest;

                    /**
                     * Encodes the specified UpdateSshPublicKeyRequest message. Does not implicitly {@link google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest.verify|verify} messages.
                     * @param message UpdateSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSshPublicKeyRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest.verify|verify} messages.
                     * @param message UpdateSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSshPublicKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest;

                    /**
                     * Decodes an UpdateSshPublicKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest;

                    /**
                     * Verifies an UpdateSshPublicKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSshPublicKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSshPublicKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest;

                    /**
                     * Creates a plain object from an UpdateSshPublicKeyRequest message. Also converts values to other types if specified.
                     * @param message UpdateSshPublicKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.UpdateSshPublicKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSshPublicKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateSshPublicKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SecurityKey. */
                interface ISecurityKey {

                    /** SecurityKey publicKey */
                    publicKey?: (string|null);

                    /** SecurityKey privateKey */
                    privateKey?: (string|null);

                    /** SecurityKey universalTwoFactor */
                    universalTwoFactor?: (google.cloud.oslogin.v1beta.IUniversalTwoFactor|null);

                    /** SecurityKey webAuthn */
                    webAuthn?: (google.cloud.oslogin.v1beta.IWebAuthn|null);
                }

                /** Represents a SecurityKey. */
                class SecurityKey implements ISecurityKey {

                    /**
                     * Constructs a new SecurityKey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.ISecurityKey);

                    /** SecurityKey publicKey. */
                    public publicKey: string;

                    /** SecurityKey privateKey. */
                    public privateKey: string;

                    /** SecurityKey universalTwoFactor. */
                    public universalTwoFactor?: (google.cloud.oslogin.v1beta.IUniversalTwoFactor|null);

                    /** SecurityKey webAuthn. */
                    public webAuthn?: (google.cloud.oslogin.v1beta.IWebAuthn|null);

                    /** SecurityKey protocolType. */
                    public protocolType?: ("universalTwoFactor"|"webAuthn");

                    /**
                     * Creates a new SecurityKey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecurityKey instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.ISecurityKey): google.cloud.oslogin.v1beta.SecurityKey;

                    /**
                     * Encodes the specified SecurityKey message. Does not implicitly {@link google.cloud.oslogin.v1beta.SecurityKey.verify|verify} messages.
                     * @param message SecurityKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.ISecurityKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecurityKey message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.SecurityKey.verify|verify} messages.
                     * @param message SecurityKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.ISecurityKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecurityKey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecurityKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.SecurityKey;

                    /**
                     * Decodes a SecurityKey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecurityKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.SecurityKey;

                    /**
                     * Verifies a SecurityKey message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecurityKey message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecurityKey
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.SecurityKey;

                    /**
                     * Creates a plain object from a SecurityKey message. Also converts values to other types if specified.
                     * @param message SecurityKey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.SecurityKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecurityKey to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SecurityKey
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UniversalTwoFactor. */
                interface IUniversalTwoFactor {

                    /** UniversalTwoFactor appId */
                    appId?: (string|null);
                }

                /** Represents an UniversalTwoFactor. */
                class UniversalTwoFactor implements IUniversalTwoFactor {

                    /**
                     * Constructs a new UniversalTwoFactor.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.IUniversalTwoFactor);

                    /** UniversalTwoFactor appId. */
                    public appId: string;

                    /**
                     * Creates a new UniversalTwoFactor instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UniversalTwoFactor instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.IUniversalTwoFactor): google.cloud.oslogin.v1beta.UniversalTwoFactor;

                    /**
                     * Encodes the specified UniversalTwoFactor message. Does not implicitly {@link google.cloud.oslogin.v1beta.UniversalTwoFactor.verify|verify} messages.
                     * @param message UniversalTwoFactor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.IUniversalTwoFactor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UniversalTwoFactor message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.UniversalTwoFactor.verify|verify} messages.
                     * @param message UniversalTwoFactor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.IUniversalTwoFactor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UniversalTwoFactor message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UniversalTwoFactor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.UniversalTwoFactor;

                    /**
                     * Decodes an UniversalTwoFactor message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UniversalTwoFactor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.UniversalTwoFactor;

                    /**
                     * Verifies an UniversalTwoFactor message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UniversalTwoFactor message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UniversalTwoFactor
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.UniversalTwoFactor;

                    /**
                     * Creates a plain object from an UniversalTwoFactor message. Also converts values to other types if specified.
                     * @param message UniversalTwoFactor
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.UniversalTwoFactor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UniversalTwoFactor to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UniversalTwoFactor
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WebAuthn. */
                interface IWebAuthn {

                    /** WebAuthn rpId */
                    rpId?: (string|null);
                }

                /** Represents a WebAuthn. */
                class WebAuthn implements IWebAuthn {

                    /**
                     * Constructs a new WebAuthn.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.IWebAuthn);

                    /** WebAuthn rpId. */
                    public rpId: string;

                    /**
                     * Creates a new WebAuthn instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WebAuthn instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.IWebAuthn): google.cloud.oslogin.v1beta.WebAuthn;

                    /**
                     * Encodes the specified WebAuthn message. Does not implicitly {@link google.cloud.oslogin.v1beta.WebAuthn.verify|verify} messages.
                     * @param message WebAuthn message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.IWebAuthn, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WebAuthn message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.WebAuthn.verify|verify} messages.
                     * @param message WebAuthn message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.IWebAuthn, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WebAuthn message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WebAuthn
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.WebAuthn;

                    /**
                     * Decodes a WebAuthn message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WebAuthn
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.WebAuthn;

                    /**
                     * Verifies a WebAuthn message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WebAuthn message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WebAuthn
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.WebAuthn;

                    /**
                     * Creates a plain object from a WebAuthn message. Also converts values to other types if specified.
                     * @param message WebAuthn
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.WebAuthn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WebAuthn to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WebAuthn
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SignSshPublicKeyRequest. */
                interface ISignSshPublicKeyRequest {

                    /** SignSshPublicKeyRequest sshPublicKey */
                    sshPublicKey?: (string|null);

                    /** SignSshPublicKeyRequest parent */
                    parent?: (string|null);
                }

                /** Represents a SignSshPublicKeyRequest. */
                class SignSshPublicKeyRequest implements ISignSshPublicKeyRequest {

                    /**
                     * Constructs a new SignSshPublicKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.ISignSshPublicKeyRequest);

                    /** SignSshPublicKeyRequest sshPublicKey. */
                    public sshPublicKey: string;

                    /** SignSshPublicKeyRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new SignSshPublicKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignSshPublicKeyRequest instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.ISignSshPublicKeyRequest): google.cloud.oslogin.v1beta.SignSshPublicKeyRequest;

                    /**
                     * Encodes the specified SignSshPublicKeyRequest message. Does not implicitly {@link google.cloud.oslogin.v1beta.SignSshPublicKeyRequest.verify|verify} messages.
                     * @param message SignSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.ISignSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SignSshPublicKeyRequest message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.SignSshPublicKeyRequest.verify|verify} messages.
                     * @param message SignSshPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.ISignSshPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignSshPublicKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.SignSshPublicKeyRequest;

                    /**
                     * Decodes a SignSshPublicKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SignSshPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.SignSshPublicKeyRequest;

                    /**
                     * Verifies a SignSshPublicKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SignSshPublicKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SignSshPublicKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.SignSshPublicKeyRequest;

                    /**
                     * Creates a plain object from a SignSshPublicKeyRequest message. Also converts values to other types if specified.
                     * @param message SignSshPublicKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.SignSshPublicKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SignSshPublicKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SignSshPublicKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SignSshPublicKeyResponse. */
                interface ISignSshPublicKeyResponse {

                    /** SignSshPublicKeyResponse signedSshPublicKey */
                    signedSshPublicKey?: (string|null);
                }

                /** Represents a SignSshPublicKeyResponse. */
                class SignSshPublicKeyResponse implements ISignSshPublicKeyResponse {

                    /**
                     * Constructs a new SignSshPublicKeyResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oslogin.v1beta.ISignSshPublicKeyResponse);

                    /** SignSshPublicKeyResponse signedSshPublicKey. */
                    public signedSshPublicKey: string;

                    /**
                     * Creates a new SignSshPublicKeyResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SignSshPublicKeyResponse instance
                     */
                    public static create(properties?: google.cloud.oslogin.v1beta.ISignSshPublicKeyResponse): google.cloud.oslogin.v1beta.SignSshPublicKeyResponse;

                    /**
                     * Encodes the specified SignSshPublicKeyResponse message. Does not implicitly {@link google.cloud.oslogin.v1beta.SignSshPublicKeyResponse.verify|verify} messages.
                     * @param message SignSshPublicKeyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oslogin.v1beta.ISignSshPublicKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SignSshPublicKeyResponse message, length delimited. Does not implicitly {@link google.cloud.oslogin.v1beta.SignSshPublicKeyResponse.verify|verify} messages.
                     * @param message SignSshPublicKeyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oslogin.v1beta.ISignSshPublicKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SignSshPublicKeyResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SignSshPublicKeyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oslogin.v1beta.SignSshPublicKeyResponse;

                    /**
                     * Decodes a SignSshPublicKeyResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SignSshPublicKeyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oslogin.v1beta.SignSshPublicKeyResponse;

                    /**
                     * Verifies a SignSshPublicKeyResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SignSshPublicKeyResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SignSshPublicKeyResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oslogin.v1beta.SignSshPublicKeyResponse;

                    /**
                     * Creates a plain object from a SignSshPublicKeyResponse message. Also converts values to other types if specified.
                     * @param message SignSshPublicKeyResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oslogin.v1beta.SignSshPublicKeyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SignSshPublicKeyResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SignSshPublicKeyResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** LoginProfileView enum. */
                enum LoginProfileView {
                    LOGIN_PROFILE_VIEW_UNSPECIFIED = 0,
                    BASIC = 1,
                    SECURITY_KEY = 2
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
            STREET_VIEW = 4
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

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

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

            /** FieldOptions target */
            target?: (google.protobuf.FieldOptions.OptionTargetType|keyof typeof google.protobuf.FieldOptions.OptionTargetType|null);

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

            /** FieldOptions target. */
            public target: (google.protobuf.FieldOptions.OptionTargetType|keyof typeof google.protobuf.FieldOptions.OptionTargetType);

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

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

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
