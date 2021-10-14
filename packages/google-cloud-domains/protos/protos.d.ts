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

        /** Namespace domains. */
        namespace domains {

            /** Namespace v1alpha2. */
            namespace v1alpha2 {

                /** Represents a Domains */
                class Domains extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Domains service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Domains service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Domains;

                    /**
                     * Calls SearchDomains.
                     * @param request SearchDomainsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchDomainsResponse
                     */
                    public searchDomains(request: google.cloud.domains.v1alpha2.ISearchDomainsRequest, callback: google.cloud.domains.v1alpha2.Domains.SearchDomainsCallback): void;

                    /**
                     * Calls SearchDomains.
                     * @param request SearchDomainsRequest message or plain object
                     * @returns Promise
                     */
                    public searchDomains(request: google.cloud.domains.v1alpha2.ISearchDomainsRequest): Promise<google.cloud.domains.v1alpha2.SearchDomainsResponse>;

                    /**
                     * Calls RetrieveRegisterParameters.
                     * @param request RetrieveRegisterParametersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RetrieveRegisterParametersResponse
                     */
                    public retrieveRegisterParameters(request: google.cloud.domains.v1alpha2.IRetrieveRegisterParametersRequest, callback: google.cloud.domains.v1alpha2.Domains.RetrieveRegisterParametersCallback): void;

                    /**
                     * Calls RetrieveRegisterParameters.
                     * @param request RetrieveRegisterParametersRequest message or plain object
                     * @returns Promise
                     */
                    public retrieveRegisterParameters(request: google.cloud.domains.v1alpha2.IRetrieveRegisterParametersRequest): Promise<google.cloud.domains.v1alpha2.RetrieveRegisterParametersResponse>;

                    /**
                     * Calls RegisterDomain.
                     * @param request RegisterDomainRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public registerDomain(request: google.cloud.domains.v1alpha2.IRegisterDomainRequest, callback: google.cloud.domains.v1alpha2.Domains.RegisterDomainCallback): void;

                    /**
                     * Calls RegisterDomain.
                     * @param request RegisterDomainRequest message or plain object
                     * @returns Promise
                     */
                    public registerDomain(request: google.cloud.domains.v1alpha2.IRegisterDomainRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListRegistrations.
                     * @param request ListRegistrationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRegistrationsResponse
                     */
                    public listRegistrations(request: google.cloud.domains.v1alpha2.IListRegistrationsRequest, callback: google.cloud.domains.v1alpha2.Domains.ListRegistrationsCallback): void;

                    /**
                     * Calls ListRegistrations.
                     * @param request ListRegistrationsRequest message or plain object
                     * @returns Promise
                     */
                    public listRegistrations(request: google.cloud.domains.v1alpha2.IListRegistrationsRequest): Promise<google.cloud.domains.v1alpha2.ListRegistrationsResponse>;

                    /**
                     * Calls GetRegistration.
                     * @param request GetRegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Registration
                     */
                    public getRegistration(request: google.cloud.domains.v1alpha2.IGetRegistrationRequest, callback: google.cloud.domains.v1alpha2.Domains.GetRegistrationCallback): void;

                    /**
                     * Calls GetRegistration.
                     * @param request GetRegistrationRequest message or plain object
                     * @returns Promise
                     */
                    public getRegistration(request: google.cloud.domains.v1alpha2.IGetRegistrationRequest): Promise<google.cloud.domains.v1alpha2.Registration>;

                    /**
                     * Calls UpdateRegistration.
                     * @param request UpdateRegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateRegistration(request: google.cloud.domains.v1alpha2.IUpdateRegistrationRequest, callback: google.cloud.domains.v1alpha2.Domains.UpdateRegistrationCallback): void;

                    /**
                     * Calls UpdateRegistration.
                     * @param request UpdateRegistrationRequest message or plain object
                     * @returns Promise
                     */
                    public updateRegistration(request: google.cloud.domains.v1alpha2.IUpdateRegistrationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ConfigureManagementSettings.
                     * @param request ConfigureManagementSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public configureManagementSettings(request: google.cloud.domains.v1alpha2.IConfigureManagementSettingsRequest, callback: google.cloud.domains.v1alpha2.Domains.ConfigureManagementSettingsCallback): void;

                    /**
                     * Calls ConfigureManagementSettings.
                     * @param request ConfigureManagementSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public configureManagementSettings(request: google.cloud.domains.v1alpha2.IConfigureManagementSettingsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ConfigureDnsSettings.
                     * @param request ConfigureDnsSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public configureDnsSettings(request: google.cloud.domains.v1alpha2.IConfigureDnsSettingsRequest, callback: google.cloud.domains.v1alpha2.Domains.ConfigureDnsSettingsCallback): void;

                    /**
                     * Calls ConfigureDnsSettings.
                     * @param request ConfigureDnsSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public configureDnsSettings(request: google.cloud.domains.v1alpha2.IConfigureDnsSettingsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ConfigureContactSettings.
                     * @param request ConfigureContactSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public configureContactSettings(request: google.cloud.domains.v1alpha2.IConfigureContactSettingsRequest, callback: google.cloud.domains.v1alpha2.Domains.ConfigureContactSettingsCallback): void;

                    /**
                     * Calls ConfigureContactSettings.
                     * @param request ConfigureContactSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public configureContactSettings(request: google.cloud.domains.v1alpha2.IConfigureContactSettingsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportRegistration.
                     * @param request ExportRegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportRegistration(request: google.cloud.domains.v1alpha2.IExportRegistrationRequest, callback: google.cloud.domains.v1alpha2.Domains.ExportRegistrationCallback): void;

                    /**
                     * Calls ExportRegistration.
                     * @param request ExportRegistrationRequest message or plain object
                     * @returns Promise
                     */
                    public exportRegistration(request: google.cloud.domains.v1alpha2.IExportRegistrationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteRegistration.
                     * @param request DeleteRegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteRegistration(request: google.cloud.domains.v1alpha2.IDeleteRegistrationRequest, callback: google.cloud.domains.v1alpha2.Domains.DeleteRegistrationCallback): void;

                    /**
                     * Calls DeleteRegistration.
                     * @param request DeleteRegistrationRequest message or plain object
                     * @returns Promise
                     */
                    public deleteRegistration(request: google.cloud.domains.v1alpha2.IDeleteRegistrationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RetrieveAuthorizationCode.
                     * @param request RetrieveAuthorizationCodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AuthorizationCode
                     */
                    public retrieveAuthorizationCode(request: google.cloud.domains.v1alpha2.IRetrieveAuthorizationCodeRequest, callback: google.cloud.domains.v1alpha2.Domains.RetrieveAuthorizationCodeCallback): void;

                    /**
                     * Calls RetrieveAuthorizationCode.
                     * @param request RetrieveAuthorizationCodeRequest message or plain object
                     * @returns Promise
                     */
                    public retrieveAuthorizationCode(request: google.cloud.domains.v1alpha2.IRetrieveAuthorizationCodeRequest): Promise<google.cloud.domains.v1alpha2.AuthorizationCode>;

                    /**
                     * Calls ResetAuthorizationCode.
                     * @param request ResetAuthorizationCodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AuthorizationCode
                     */
                    public resetAuthorizationCode(request: google.cloud.domains.v1alpha2.IResetAuthorizationCodeRequest, callback: google.cloud.domains.v1alpha2.Domains.ResetAuthorizationCodeCallback): void;

                    /**
                     * Calls ResetAuthorizationCode.
                     * @param request ResetAuthorizationCodeRequest message or plain object
                     * @returns Promise
                     */
                    public resetAuthorizationCode(request: google.cloud.domains.v1alpha2.IResetAuthorizationCodeRequest): Promise<google.cloud.domains.v1alpha2.AuthorizationCode>;
                }

                namespace Domains {

                    /**
                     * Callback as used by {@link google.cloud.domains.v1alpha2.Domains#searchDomains}.
                     * @param error Error, if any
                     * @param [response] SearchDomainsResponse
                     */
                    type SearchDomainsCallback = (error: (Error|null), response?: google.cloud.domains.v1alpha2.SearchDomainsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1alpha2.Domains#retrieveRegisterParameters}.
                     * @param error Error, if any
                     * @param [response] RetrieveRegisterParametersResponse
                     */
                    type RetrieveRegisterParametersCallback = (error: (Error|null), response?: google.cloud.domains.v1alpha2.RetrieveRegisterParametersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1alpha2.Domains#registerDomain}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RegisterDomainCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1alpha2.Domains#listRegistrations}.
                     * @param error Error, if any
                     * @param [response] ListRegistrationsResponse
                     */
                    type ListRegistrationsCallback = (error: (Error|null), response?: google.cloud.domains.v1alpha2.ListRegistrationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1alpha2.Domains#getRegistration}.
                     * @param error Error, if any
                     * @param [response] Registration
                     */
                    type GetRegistrationCallback = (error: (Error|null), response?: google.cloud.domains.v1alpha2.Registration) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1alpha2.Domains#updateRegistration}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateRegistrationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1alpha2.Domains#configureManagementSettings}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ConfigureManagementSettingsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1alpha2.Domains#configureDnsSettings}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ConfigureDnsSettingsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1alpha2.Domains#configureContactSettings}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ConfigureContactSettingsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1alpha2.Domains#exportRegistration}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportRegistrationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1alpha2.Domains#deleteRegistration}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteRegistrationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1alpha2.Domains#retrieveAuthorizationCode}.
                     * @param error Error, if any
                     * @param [response] AuthorizationCode
                     */
                    type RetrieveAuthorizationCodeCallback = (error: (Error|null), response?: google.cloud.domains.v1alpha2.AuthorizationCode) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1alpha2.Domains#resetAuthorizationCode}.
                     * @param error Error, if any
                     * @param [response] AuthorizationCode
                     */
                    type ResetAuthorizationCodeCallback = (error: (Error|null), response?: google.cloud.domains.v1alpha2.AuthorizationCode) => void;
                }

                /** Properties of a Registration. */
                interface IRegistration {

                    /** Registration name */
                    name?: (string|null);

                    /** Registration domainName */
                    domainName?: (string|null);

                    /** Registration createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Registration expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** Registration state */
                    state?: (google.cloud.domains.v1alpha2.Registration.State|keyof typeof google.cloud.domains.v1alpha2.Registration.State|null);

                    /** Registration issues */
                    issues?: (google.cloud.domains.v1alpha2.Registration.Issue[]|null);

                    /** Registration labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Registration managementSettings */
                    managementSettings?: (google.cloud.domains.v1alpha2.IManagementSettings|null);

                    /** Registration dnsSettings */
                    dnsSettings?: (google.cloud.domains.v1alpha2.IDnsSettings|null);

                    /** Registration contactSettings */
                    contactSettings?: (google.cloud.domains.v1alpha2.IContactSettings|null);

                    /** Registration pendingContactSettings */
                    pendingContactSettings?: (google.cloud.domains.v1alpha2.IContactSettings|null);

                    /** Registration supportedPrivacy */
                    supportedPrivacy?: (google.cloud.domains.v1alpha2.ContactPrivacy[]|null);
                }

                /** Represents a Registration. */
                class Registration implements IRegistration {

                    /**
                     * Constructs a new Registration.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IRegistration);

                    /** Registration name. */
                    public name: string;

                    /** Registration domainName. */
                    public domainName: string;

                    /** Registration createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Registration expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** Registration state. */
                    public state: (google.cloud.domains.v1alpha2.Registration.State|keyof typeof google.cloud.domains.v1alpha2.Registration.State);

                    /** Registration issues. */
                    public issues: google.cloud.domains.v1alpha2.Registration.Issue[];

                    /** Registration labels. */
                    public labels: { [k: string]: string };

                    /** Registration managementSettings. */
                    public managementSettings?: (google.cloud.domains.v1alpha2.IManagementSettings|null);

                    /** Registration dnsSettings. */
                    public dnsSettings?: (google.cloud.domains.v1alpha2.IDnsSettings|null);

                    /** Registration contactSettings. */
                    public contactSettings?: (google.cloud.domains.v1alpha2.IContactSettings|null);

                    /** Registration pendingContactSettings. */
                    public pendingContactSettings?: (google.cloud.domains.v1alpha2.IContactSettings|null);

                    /** Registration supportedPrivacy. */
                    public supportedPrivacy: google.cloud.domains.v1alpha2.ContactPrivacy[];

                    /**
                     * Creates a new Registration instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Registration instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IRegistration): google.cloud.domains.v1alpha2.Registration;

                    /**
                     * Encodes the specified Registration message. Does not implicitly {@link google.cloud.domains.v1alpha2.Registration.verify|verify} messages.
                     * @param message Registration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Registration message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.Registration.verify|verify} messages.
                     * @param message Registration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Registration message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Registration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.Registration;

                    /**
                     * Decodes a Registration message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Registration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.Registration;

                    /**
                     * Verifies a Registration message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Registration message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Registration
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.Registration;

                    /**
                     * Creates a plain object from a Registration message. Also converts values to other types if specified.
                     * @param message Registration
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.Registration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Registration to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Registration {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        REGISTRATION_PENDING = 1,
                        REGISTRATION_FAILED = 2,
                        ACTIVE = 6,
                        SUSPENDED = 7,
                        EXPORTED = 8
                    }

                    /** Issue enum. */
                    enum Issue {
                        ISSUE_UNSPECIFIED = 0,
                        CONTACT_SUPPORT = 1,
                        UNVERIFIED_EMAIL = 2
                    }
                }

                /** Properties of a ManagementSettings. */
                interface IManagementSettings {

                    /** ManagementSettings renewalMethod */
                    renewalMethod?: (google.cloud.domains.v1alpha2.ManagementSettings.RenewalMethod|keyof typeof google.cloud.domains.v1alpha2.ManagementSettings.RenewalMethod|null);

                    /** ManagementSettings transferLockState */
                    transferLockState?: (google.cloud.domains.v1alpha2.TransferLockState|keyof typeof google.cloud.domains.v1alpha2.TransferLockState|null);
                }

                /** Represents a ManagementSettings. */
                class ManagementSettings implements IManagementSettings {

                    /**
                     * Constructs a new ManagementSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IManagementSettings);

                    /** ManagementSettings renewalMethod. */
                    public renewalMethod: (google.cloud.domains.v1alpha2.ManagementSettings.RenewalMethod|keyof typeof google.cloud.domains.v1alpha2.ManagementSettings.RenewalMethod);

                    /** ManagementSettings transferLockState. */
                    public transferLockState: (google.cloud.domains.v1alpha2.TransferLockState|keyof typeof google.cloud.domains.v1alpha2.TransferLockState);

                    /**
                     * Creates a new ManagementSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ManagementSettings instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IManagementSettings): google.cloud.domains.v1alpha2.ManagementSettings;

                    /**
                     * Encodes the specified ManagementSettings message. Does not implicitly {@link google.cloud.domains.v1alpha2.ManagementSettings.verify|verify} messages.
                     * @param message ManagementSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IManagementSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ManagementSettings message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.ManagementSettings.verify|verify} messages.
                     * @param message ManagementSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IManagementSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ManagementSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ManagementSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.ManagementSettings;

                    /**
                     * Decodes a ManagementSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ManagementSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.ManagementSettings;

                    /**
                     * Verifies a ManagementSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ManagementSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ManagementSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.ManagementSettings;

                    /**
                     * Creates a plain object from a ManagementSettings message. Also converts values to other types if specified.
                     * @param message ManagementSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.ManagementSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ManagementSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ManagementSettings {

                    /** RenewalMethod enum. */
                    enum RenewalMethod {
                        RENEWAL_METHOD_UNSPECIFIED = 0,
                        AUTOMATIC_RENEWAL = 1,
                        MANUAL_RENEWAL = 2
                    }
                }

                /** Properties of a DnsSettings. */
                interface IDnsSettings {

                    /** DnsSettings customDns */
                    customDns?: (google.cloud.domains.v1alpha2.DnsSettings.ICustomDns|null);

                    /** DnsSettings googleDomainsDns */
                    googleDomainsDns?: (google.cloud.domains.v1alpha2.DnsSettings.IGoogleDomainsDns|null);

                    /** DnsSettings glueRecords */
                    glueRecords?: (google.cloud.domains.v1alpha2.DnsSettings.IGlueRecord[]|null);
                }

                /** Represents a DnsSettings. */
                class DnsSettings implements IDnsSettings {

                    /**
                     * Constructs a new DnsSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IDnsSettings);

                    /** DnsSettings customDns. */
                    public customDns?: (google.cloud.domains.v1alpha2.DnsSettings.ICustomDns|null);

                    /** DnsSettings googleDomainsDns. */
                    public googleDomainsDns?: (google.cloud.domains.v1alpha2.DnsSettings.IGoogleDomainsDns|null);

                    /** DnsSettings glueRecords. */
                    public glueRecords: google.cloud.domains.v1alpha2.DnsSettings.IGlueRecord[];

                    /** DnsSettings dnsProvider. */
                    public dnsProvider?: ("customDns"|"googleDomainsDns");

                    /**
                     * Creates a new DnsSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DnsSettings instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IDnsSettings): google.cloud.domains.v1alpha2.DnsSettings;

                    /**
                     * Encodes the specified DnsSettings message. Does not implicitly {@link google.cloud.domains.v1alpha2.DnsSettings.verify|verify} messages.
                     * @param message DnsSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IDnsSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DnsSettings message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.DnsSettings.verify|verify} messages.
                     * @param message DnsSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IDnsSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DnsSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DnsSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.DnsSettings;

                    /**
                     * Decodes a DnsSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DnsSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.DnsSettings;

                    /**
                     * Verifies a DnsSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DnsSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DnsSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.DnsSettings;

                    /**
                     * Creates a plain object from a DnsSettings message. Also converts values to other types if specified.
                     * @param message DnsSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.DnsSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DnsSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DnsSettings {

                    /** Properties of a CustomDns. */
                    interface ICustomDns {

                        /** CustomDns nameServers */
                        nameServers?: (string[]|null);

                        /** CustomDns dsRecords */
                        dsRecords?: (google.cloud.domains.v1alpha2.DnsSettings.IDsRecord[]|null);
                    }

                    /** Represents a CustomDns. */
                    class CustomDns implements ICustomDns {

                        /**
                         * Constructs a new CustomDns.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.domains.v1alpha2.DnsSettings.ICustomDns);

                        /** CustomDns nameServers. */
                        public nameServers: string[];

                        /** CustomDns dsRecords. */
                        public dsRecords: google.cloud.domains.v1alpha2.DnsSettings.IDsRecord[];

                        /**
                         * Creates a new CustomDns instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CustomDns instance
                         */
                        public static create(properties?: google.cloud.domains.v1alpha2.DnsSettings.ICustomDns): google.cloud.domains.v1alpha2.DnsSettings.CustomDns;

                        /**
                         * Encodes the specified CustomDns message. Does not implicitly {@link google.cloud.domains.v1alpha2.DnsSettings.CustomDns.verify|verify} messages.
                         * @param message CustomDns message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.domains.v1alpha2.DnsSettings.ICustomDns, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CustomDns message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.DnsSettings.CustomDns.verify|verify} messages.
                         * @param message CustomDns message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.domains.v1alpha2.DnsSettings.ICustomDns, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CustomDns message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CustomDns
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.DnsSettings.CustomDns;

                        /**
                         * Decodes a CustomDns message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CustomDns
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.DnsSettings.CustomDns;

                        /**
                         * Verifies a CustomDns message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CustomDns message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CustomDns
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.DnsSettings.CustomDns;

                        /**
                         * Creates a plain object from a CustomDns message. Also converts values to other types if specified.
                         * @param message CustomDns
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.domains.v1alpha2.DnsSettings.CustomDns, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CustomDns to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GoogleDomainsDns. */
                    interface IGoogleDomainsDns {

                        /** GoogleDomainsDns nameServers */
                        nameServers?: (string[]|null);

                        /** GoogleDomainsDns dsState */
                        dsState?: (google.cloud.domains.v1alpha2.DnsSettings.DsState|keyof typeof google.cloud.domains.v1alpha2.DnsSettings.DsState|null);

                        /** GoogleDomainsDns dsRecords */
                        dsRecords?: (google.cloud.domains.v1alpha2.DnsSettings.IDsRecord[]|null);
                    }

                    /** Represents a GoogleDomainsDns. */
                    class GoogleDomainsDns implements IGoogleDomainsDns {

                        /**
                         * Constructs a new GoogleDomainsDns.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.domains.v1alpha2.DnsSettings.IGoogleDomainsDns);

                        /** GoogleDomainsDns nameServers. */
                        public nameServers: string[];

                        /** GoogleDomainsDns dsState. */
                        public dsState: (google.cloud.domains.v1alpha2.DnsSettings.DsState|keyof typeof google.cloud.domains.v1alpha2.DnsSettings.DsState);

                        /** GoogleDomainsDns dsRecords. */
                        public dsRecords: google.cloud.domains.v1alpha2.DnsSettings.IDsRecord[];

                        /**
                         * Creates a new GoogleDomainsDns instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GoogleDomainsDns instance
                         */
                        public static create(properties?: google.cloud.domains.v1alpha2.DnsSettings.IGoogleDomainsDns): google.cloud.domains.v1alpha2.DnsSettings.GoogleDomainsDns;

                        /**
                         * Encodes the specified GoogleDomainsDns message. Does not implicitly {@link google.cloud.domains.v1alpha2.DnsSettings.GoogleDomainsDns.verify|verify} messages.
                         * @param message GoogleDomainsDns message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.domains.v1alpha2.DnsSettings.IGoogleDomainsDns, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GoogleDomainsDns message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.DnsSettings.GoogleDomainsDns.verify|verify} messages.
                         * @param message GoogleDomainsDns message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.domains.v1alpha2.DnsSettings.IGoogleDomainsDns, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GoogleDomainsDns message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GoogleDomainsDns
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.DnsSettings.GoogleDomainsDns;

                        /**
                         * Decodes a GoogleDomainsDns message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GoogleDomainsDns
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.DnsSettings.GoogleDomainsDns;

                        /**
                         * Verifies a GoogleDomainsDns message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GoogleDomainsDns message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GoogleDomainsDns
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.DnsSettings.GoogleDomainsDns;

                        /**
                         * Creates a plain object from a GoogleDomainsDns message. Also converts values to other types if specified.
                         * @param message GoogleDomainsDns
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.domains.v1alpha2.DnsSettings.GoogleDomainsDns, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GoogleDomainsDns to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DsRecord. */
                    interface IDsRecord {

                        /** DsRecord keyTag */
                        keyTag?: (number|null);

                        /** DsRecord algorithm */
                        algorithm?: (google.cloud.domains.v1alpha2.DnsSettings.DsRecord.Algorithm|keyof typeof google.cloud.domains.v1alpha2.DnsSettings.DsRecord.Algorithm|null);

                        /** DsRecord digestType */
                        digestType?: (google.cloud.domains.v1alpha2.DnsSettings.DsRecord.DigestType|keyof typeof google.cloud.domains.v1alpha2.DnsSettings.DsRecord.DigestType|null);

                        /** DsRecord digest */
                        digest?: (string|null);
                    }

                    /** Represents a DsRecord. */
                    class DsRecord implements IDsRecord {

                        /**
                         * Constructs a new DsRecord.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.domains.v1alpha2.DnsSettings.IDsRecord);

                        /** DsRecord keyTag. */
                        public keyTag: number;

                        /** DsRecord algorithm. */
                        public algorithm: (google.cloud.domains.v1alpha2.DnsSettings.DsRecord.Algorithm|keyof typeof google.cloud.domains.v1alpha2.DnsSettings.DsRecord.Algorithm);

                        /** DsRecord digestType. */
                        public digestType: (google.cloud.domains.v1alpha2.DnsSettings.DsRecord.DigestType|keyof typeof google.cloud.domains.v1alpha2.DnsSettings.DsRecord.DigestType);

                        /** DsRecord digest. */
                        public digest: string;

                        /**
                         * Creates a new DsRecord instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DsRecord instance
                         */
                        public static create(properties?: google.cloud.domains.v1alpha2.DnsSettings.IDsRecord): google.cloud.domains.v1alpha2.DnsSettings.DsRecord;

                        /**
                         * Encodes the specified DsRecord message. Does not implicitly {@link google.cloud.domains.v1alpha2.DnsSettings.DsRecord.verify|verify} messages.
                         * @param message DsRecord message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.domains.v1alpha2.DnsSettings.IDsRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DsRecord message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.DnsSettings.DsRecord.verify|verify} messages.
                         * @param message DsRecord message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.domains.v1alpha2.DnsSettings.IDsRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DsRecord message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DsRecord
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.DnsSettings.DsRecord;

                        /**
                         * Decodes a DsRecord message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DsRecord
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.DnsSettings.DsRecord;

                        /**
                         * Verifies a DsRecord message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DsRecord message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DsRecord
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.DnsSettings.DsRecord;

                        /**
                         * Creates a plain object from a DsRecord message. Also converts values to other types if specified.
                         * @param message DsRecord
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.domains.v1alpha2.DnsSettings.DsRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DsRecord to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace DsRecord {

                        /** Algorithm enum. */
                        enum Algorithm {
                            ALGORITHM_UNSPECIFIED = 0,
                            DSA = 3,
                            ECC = 4,
                            RSASHA1 = 5,
                            DSANSEC3SHA1 = 6,
                            RSASHA1NSEC3SHA1 = 7,
                            RSASHA256 = 8,
                            RSASHA512 = 10,
                            ECCGOST = 12,
                            ECDSAP256SHA256 = 13,
                            ECDSAP384SHA384 = 14,
                            ED25519 = 15,
                            ED448 = 16
                        }

                        /** DigestType enum. */
                        enum DigestType {
                            DIGEST_TYPE_UNSPECIFIED = 0,
                            SHA1 = 1,
                            SHA256 = 2,
                            GOST3411 = 3,
                            SHA384 = 4
                        }
                    }

                    /** Properties of a GlueRecord. */
                    interface IGlueRecord {

                        /** GlueRecord hostName */
                        hostName?: (string|null);

                        /** GlueRecord ipv4Addresses */
                        ipv4Addresses?: (string[]|null);

                        /** GlueRecord ipv6Addresses */
                        ipv6Addresses?: (string[]|null);
                    }

                    /** Represents a GlueRecord. */
                    class GlueRecord implements IGlueRecord {

                        /**
                         * Constructs a new GlueRecord.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.domains.v1alpha2.DnsSettings.IGlueRecord);

                        /** GlueRecord hostName. */
                        public hostName: string;

                        /** GlueRecord ipv4Addresses. */
                        public ipv4Addresses: string[];

                        /** GlueRecord ipv6Addresses. */
                        public ipv6Addresses: string[];

                        /**
                         * Creates a new GlueRecord instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GlueRecord instance
                         */
                        public static create(properties?: google.cloud.domains.v1alpha2.DnsSettings.IGlueRecord): google.cloud.domains.v1alpha2.DnsSettings.GlueRecord;

                        /**
                         * Encodes the specified GlueRecord message. Does not implicitly {@link google.cloud.domains.v1alpha2.DnsSettings.GlueRecord.verify|verify} messages.
                         * @param message GlueRecord message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.domains.v1alpha2.DnsSettings.IGlueRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GlueRecord message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.DnsSettings.GlueRecord.verify|verify} messages.
                         * @param message GlueRecord message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.domains.v1alpha2.DnsSettings.IGlueRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GlueRecord message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GlueRecord
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.DnsSettings.GlueRecord;

                        /**
                         * Decodes a GlueRecord message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GlueRecord
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.DnsSettings.GlueRecord;

                        /**
                         * Verifies a GlueRecord message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GlueRecord message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GlueRecord
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.DnsSettings.GlueRecord;

                        /**
                         * Creates a plain object from a GlueRecord message. Also converts values to other types if specified.
                         * @param message GlueRecord
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.domains.v1alpha2.DnsSettings.GlueRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GlueRecord to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** DsState enum. */
                    enum DsState {
                        DS_STATE_UNSPECIFIED = 0,
                        DS_RECORDS_UNPUBLISHED = 1,
                        DS_RECORDS_PUBLISHED = 2
                    }
                }

                /** Properties of a ContactSettings. */
                interface IContactSettings {

                    /** ContactSettings privacy */
                    privacy?: (google.cloud.domains.v1alpha2.ContactPrivacy|keyof typeof google.cloud.domains.v1alpha2.ContactPrivacy|null);

                    /** ContactSettings registrantContact */
                    registrantContact?: (google.cloud.domains.v1alpha2.ContactSettings.IContact|null);

                    /** ContactSettings adminContact */
                    adminContact?: (google.cloud.domains.v1alpha2.ContactSettings.IContact|null);

                    /** ContactSettings technicalContact */
                    technicalContact?: (google.cloud.domains.v1alpha2.ContactSettings.IContact|null);
                }

                /** Represents a ContactSettings. */
                class ContactSettings implements IContactSettings {

                    /**
                     * Constructs a new ContactSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IContactSettings);

                    /** ContactSettings privacy. */
                    public privacy: (google.cloud.domains.v1alpha2.ContactPrivacy|keyof typeof google.cloud.domains.v1alpha2.ContactPrivacy);

                    /** ContactSettings registrantContact. */
                    public registrantContact?: (google.cloud.domains.v1alpha2.ContactSettings.IContact|null);

                    /** ContactSettings adminContact. */
                    public adminContact?: (google.cloud.domains.v1alpha2.ContactSettings.IContact|null);

                    /** ContactSettings technicalContact. */
                    public technicalContact?: (google.cloud.domains.v1alpha2.ContactSettings.IContact|null);

                    /**
                     * Creates a new ContactSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContactSettings instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IContactSettings): google.cloud.domains.v1alpha2.ContactSettings;

                    /**
                     * Encodes the specified ContactSettings message. Does not implicitly {@link google.cloud.domains.v1alpha2.ContactSettings.verify|verify} messages.
                     * @param message ContactSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IContactSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ContactSettings message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.ContactSettings.verify|verify} messages.
                     * @param message ContactSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IContactSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContactSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContactSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.ContactSettings;

                    /**
                     * Decodes a ContactSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ContactSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.ContactSettings;

                    /**
                     * Verifies a ContactSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ContactSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ContactSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.ContactSettings;

                    /**
                     * Creates a plain object from a ContactSettings message. Also converts values to other types if specified.
                     * @param message ContactSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.ContactSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ContactSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ContactSettings {

                    /** Properties of a Contact. */
                    interface IContact {

                        /** Contact postalAddress */
                        postalAddress?: (google.type.IPostalAddress|null);

                        /** Contact email */
                        email?: (string|null);

                        /** Contact phoneNumber */
                        phoneNumber?: (string|null);

                        /** Contact faxNumber */
                        faxNumber?: (string|null);
                    }

                    /** Represents a Contact. */
                    class Contact implements IContact {

                        /**
                         * Constructs a new Contact.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.domains.v1alpha2.ContactSettings.IContact);

                        /** Contact postalAddress. */
                        public postalAddress?: (google.type.IPostalAddress|null);

                        /** Contact email. */
                        public email: string;

                        /** Contact phoneNumber. */
                        public phoneNumber: string;

                        /** Contact faxNumber. */
                        public faxNumber: string;

                        /**
                         * Creates a new Contact instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Contact instance
                         */
                        public static create(properties?: google.cloud.domains.v1alpha2.ContactSettings.IContact): google.cloud.domains.v1alpha2.ContactSettings.Contact;

                        /**
                         * Encodes the specified Contact message. Does not implicitly {@link google.cloud.domains.v1alpha2.ContactSettings.Contact.verify|verify} messages.
                         * @param message Contact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.domains.v1alpha2.ContactSettings.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Contact message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.ContactSettings.Contact.verify|verify} messages.
                         * @param message Contact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.domains.v1alpha2.ContactSettings.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Contact message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Contact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.ContactSettings.Contact;

                        /**
                         * Decodes a Contact message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Contact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.ContactSettings.Contact;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.ContactSettings.Contact;

                        /**
                         * Creates a plain object from a Contact message. Also converts values to other types if specified.
                         * @param message Contact
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.domains.v1alpha2.ContactSettings.Contact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Contact to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a SearchDomainsRequest. */
                interface ISearchDomainsRequest {

                    /** SearchDomainsRequest query */
                    query?: (string|null);

                    /** SearchDomainsRequest location */
                    location?: (string|null);
                }

                /** Represents a SearchDomainsRequest. */
                class SearchDomainsRequest implements ISearchDomainsRequest {

                    /**
                     * Constructs a new SearchDomainsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.ISearchDomainsRequest);

                    /** SearchDomainsRequest query. */
                    public query: string;

                    /** SearchDomainsRequest location. */
                    public location: string;

                    /**
                     * Creates a new SearchDomainsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchDomainsRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.ISearchDomainsRequest): google.cloud.domains.v1alpha2.SearchDomainsRequest;

                    /**
                     * Encodes the specified SearchDomainsRequest message. Does not implicitly {@link google.cloud.domains.v1alpha2.SearchDomainsRequest.verify|verify} messages.
                     * @param message SearchDomainsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.ISearchDomainsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchDomainsRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.SearchDomainsRequest.verify|verify} messages.
                     * @param message SearchDomainsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.ISearchDomainsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchDomainsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchDomainsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.SearchDomainsRequest;

                    /**
                     * Decodes a SearchDomainsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchDomainsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.SearchDomainsRequest;

                    /**
                     * Verifies a SearchDomainsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchDomainsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchDomainsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.SearchDomainsRequest;

                    /**
                     * Creates a plain object from a SearchDomainsRequest message. Also converts values to other types if specified.
                     * @param message SearchDomainsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.SearchDomainsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchDomainsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchDomainsResponse. */
                interface ISearchDomainsResponse {

                    /** SearchDomainsResponse registerParameters */
                    registerParameters?: (google.cloud.domains.v1alpha2.IRegisterParameters[]|null);
                }

                /** Represents a SearchDomainsResponse. */
                class SearchDomainsResponse implements ISearchDomainsResponse {

                    /**
                     * Constructs a new SearchDomainsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.ISearchDomainsResponse);

                    /** SearchDomainsResponse registerParameters. */
                    public registerParameters: google.cloud.domains.v1alpha2.IRegisterParameters[];

                    /**
                     * Creates a new SearchDomainsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchDomainsResponse instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.ISearchDomainsResponse): google.cloud.domains.v1alpha2.SearchDomainsResponse;

                    /**
                     * Encodes the specified SearchDomainsResponse message. Does not implicitly {@link google.cloud.domains.v1alpha2.SearchDomainsResponse.verify|verify} messages.
                     * @param message SearchDomainsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.ISearchDomainsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchDomainsResponse message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.SearchDomainsResponse.verify|verify} messages.
                     * @param message SearchDomainsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.ISearchDomainsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchDomainsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchDomainsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.SearchDomainsResponse;

                    /**
                     * Decodes a SearchDomainsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchDomainsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.SearchDomainsResponse;

                    /**
                     * Verifies a SearchDomainsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchDomainsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchDomainsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.SearchDomainsResponse;

                    /**
                     * Creates a plain object from a SearchDomainsResponse message. Also converts values to other types if specified.
                     * @param message SearchDomainsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.SearchDomainsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchDomainsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RetrieveRegisterParametersRequest. */
                interface IRetrieveRegisterParametersRequest {

                    /** RetrieveRegisterParametersRequest domainName */
                    domainName?: (string|null);

                    /** RetrieveRegisterParametersRequest location */
                    location?: (string|null);
                }

                /** Represents a RetrieveRegisterParametersRequest. */
                class RetrieveRegisterParametersRequest implements IRetrieveRegisterParametersRequest {

                    /**
                     * Constructs a new RetrieveRegisterParametersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IRetrieveRegisterParametersRequest);

                    /** RetrieveRegisterParametersRequest domainName. */
                    public domainName: string;

                    /** RetrieveRegisterParametersRequest location. */
                    public location: string;

                    /**
                     * Creates a new RetrieveRegisterParametersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetrieveRegisterParametersRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IRetrieveRegisterParametersRequest): google.cloud.domains.v1alpha2.RetrieveRegisterParametersRequest;

                    /**
                     * Encodes the specified RetrieveRegisterParametersRequest message. Does not implicitly {@link google.cloud.domains.v1alpha2.RetrieveRegisterParametersRequest.verify|verify} messages.
                     * @param message RetrieveRegisterParametersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IRetrieveRegisterParametersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetrieveRegisterParametersRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.RetrieveRegisterParametersRequest.verify|verify} messages.
                     * @param message RetrieveRegisterParametersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IRetrieveRegisterParametersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetrieveRegisterParametersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetrieveRegisterParametersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.RetrieveRegisterParametersRequest;

                    /**
                     * Decodes a RetrieveRegisterParametersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetrieveRegisterParametersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.RetrieveRegisterParametersRequest;

                    /**
                     * Verifies a RetrieveRegisterParametersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetrieveRegisterParametersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetrieveRegisterParametersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.RetrieveRegisterParametersRequest;

                    /**
                     * Creates a plain object from a RetrieveRegisterParametersRequest message. Also converts values to other types if specified.
                     * @param message RetrieveRegisterParametersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.RetrieveRegisterParametersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetrieveRegisterParametersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RetrieveRegisterParametersResponse. */
                interface IRetrieveRegisterParametersResponse {

                    /** RetrieveRegisterParametersResponse registerParameters */
                    registerParameters?: (google.cloud.domains.v1alpha2.IRegisterParameters|null);
                }

                /** Represents a RetrieveRegisterParametersResponse. */
                class RetrieveRegisterParametersResponse implements IRetrieveRegisterParametersResponse {

                    /**
                     * Constructs a new RetrieveRegisterParametersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IRetrieveRegisterParametersResponse);

                    /** RetrieveRegisterParametersResponse registerParameters. */
                    public registerParameters?: (google.cloud.domains.v1alpha2.IRegisterParameters|null);

                    /**
                     * Creates a new RetrieveRegisterParametersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetrieveRegisterParametersResponse instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IRetrieveRegisterParametersResponse): google.cloud.domains.v1alpha2.RetrieveRegisterParametersResponse;

                    /**
                     * Encodes the specified RetrieveRegisterParametersResponse message. Does not implicitly {@link google.cloud.domains.v1alpha2.RetrieveRegisterParametersResponse.verify|verify} messages.
                     * @param message RetrieveRegisterParametersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IRetrieveRegisterParametersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetrieveRegisterParametersResponse message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.RetrieveRegisterParametersResponse.verify|verify} messages.
                     * @param message RetrieveRegisterParametersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IRetrieveRegisterParametersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetrieveRegisterParametersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetrieveRegisterParametersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.RetrieveRegisterParametersResponse;

                    /**
                     * Decodes a RetrieveRegisterParametersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetrieveRegisterParametersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.RetrieveRegisterParametersResponse;

                    /**
                     * Verifies a RetrieveRegisterParametersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetrieveRegisterParametersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetrieveRegisterParametersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.RetrieveRegisterParametersResponse;

                    /**
                     * Creates a plain object from a RetrieveRegisterParametersResponse message. Also converts values to other types if specified.
                     * @param message RetrieveRegisterParametersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.RetrieveRegisterParametersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetrieveRegisterParametersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RegisterDomainRequest. */
                interface IRegisterDomainRequest {

                    /** RegisterDomainRequest parent */
                    parent?: (string|null);

                    /** RegisterDomainRequest registration */
                    registration?: (google.cloud.domains.v1alpha2.IRegistration|null);

                    /** RegisterDomainRequest domainNotices */
                    domainNotices?: (google.cloud.domains.v1alpha2.DomainNotice[]|null);

                    /** RegisterDomainRequest contactNotices */
                    contactNotices?: (google.cloud.domains.v1alpha2.ContactNotice[]|null);

                    /** RegisterDomainRequest yearlyPrice */
                    yearlyPrice?: (google.type.IMoney|null);

                    /** RegisterDomainRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a RegisterDomainRequest. */
                class RegisterDomainRequest implements IRegisterDomainRequest {

                    /**
                     * Constructs a new RegisterDomainRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IRegisterDomainRequest);

                    /** RegisterDomainRequest parent. */
                    public parent: string;

                    /** RegisterDomainRequest registration. */
                    public registration?: (google.cloud.domains.v1alpha2.IRegistration|null);

                    /** RegisterDomainRequest domainNotices. */
                    public domainNotices: google.cloud.domains.v1alpha2.DomainNotice[];

                    /** RegisterDomainRequest contactNotices. */
                    public contactNotices: google.cloud.domains.v1alpha2.ContactNotice[];

                    /** RegisterDomainRequest yearlyPrice. */
                    public yearlyPrice?: (google.type.IMoney|null);

                    /** RegisterDomainRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new RegisterDomainRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RegisterDomainRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IRegisterDomainRequest): google.cloud.domains.v1alpha2.RegisterDomainRequest;

                    /**
                     * Encodes the specified RegisterDomainRequest message. Does not implicitly {@link google.cloud.domains.v1alpha2.RegisterDomainRequest.verify|verify} messages.
                     * @param message RegisterDomainRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IRegisterDomainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RegisterDomainRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.RegisterDomainRequest.verify|verify} messages.
                     * @param message RegisterDomainRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IRegisterDomainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RegisterDomainRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RegisterDomainRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.RegisterDomainRequest;

                    /**
                     * Decodes a RegisterDomainRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RegisterDomainRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.RegisterDomainRequest;

                    /**
                     * Verifies a RegisterDomainRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RegisterDomainRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RegisterDomainRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.RegisterDomainRequest;

                    /**
                     * Creates a plain object from a RegisterDomainRequest message. Also converts values to other types if specified.
                     * @param message RegisterDomainRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.RegisterDomainRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RegisterDomainRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRegistrationsRequest. */
                interface IListRegistrationsRequest {

                    /** ListRegistrationsRequest parent */
                    parent?: (string|null);

                    /** ListRegistrationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRegistrationsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRegistrationsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListRegistrationsRequest. */
                class ListRegistrationsRequest implements IListRegistrationsRequest {

                    /**
                     * Constructs a new ListRegistrationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IListRegistrationsRequest);

                    /** ListRegistrationsRequest parent. */
                    public parent: string;

                    /** ListRegistrationsRequest pageSize. */
                    public pageSize: number;

                    /** ListRegistrationsRequest pageToken. */
                    public pageToken: string;

                    /** ListRegistrationsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListRegistrationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRegistrationsRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IListRegistrationsRequest): google.cloud.domains.v1alpha2.ListRegistrationsRequest;

                    /**
                     * Encodes the specified ListRegistrationsRequest message. Does not implicitly {@link google.cloud.domains.v1alpha2.ListRegistrationsRequest.verify|verify} messages.
                     * @param message ListRegistrationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IListRegistrationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRegistrationsRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.ListRegistrationsRequest.verify|verify} messages.
                     * @param message ListRegistrationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IListRegistrationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRegistrationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRegistrationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.ListRegistrationsRequest;

                    /**
                     * Decodes a ListRegistrationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRegistrationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.ListRegistrationsRequest;

                    /**
                     * Verifies a ListRegistrationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRegistrationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRegistrationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.ListRegistrationsRequest;

                    /**
                     * Creates a plain object from a ListRegistrationsRequest message. Also converts values to other types if specified.
                     * @param message ListRegistrationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.ListRegistrationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRegistrationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRegistrationsResponse. */
                interface IListRegistrationsResponse {

                    /** ListRegistrationsResponse registrations */
                    registrations?: (google.cloud.domains.v1alpha2.IRegistration[]|null);

                    /** ListRegistrationsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRegistrationsResponse. */
                class ListRegistrationsResponse implements IListRegistrationsResponse {

                    /**
                     * Constructs a new ListRegistrationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IListRegistrationsResponse);

                    /** ListRegistrationsResponse registrations. */
                    public registrations: google.cloud.domains.v1alpha2.IRegistration[];

                    /** ListRegistrationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRegistrationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRegistrationsResponse instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IListRegistrationsResponse): google.cloud.domains.v1alpha2.ListRegistrationsResponse;

                    /**
                     * Encodes the specified ListRegistrationsResponse message. Does not implicitly {@link google.cloud.domains.v1alpha2.ListRegistrationsResponse.verify|verify} messages.
                     * @param message ListRegistrationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IListRegistrationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRegistrationsResponse message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.ListRegistrationsResponse.verify|verify} messages.
                     * @param message ListRegistrationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IListRegistrationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRegistrationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRegistrationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.ListRegistrationsResponse;

                    /**
                     * Decodes a ListRegistrationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRegistrationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.ListRegistrationsResponse;

                    /**
                     * Verifies a ListRegistrationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRegistrationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRegistrationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.ListRegistrationsResponse;

                    /**
                     * Creates a plain object from a ListRegistrationsResponse message. Also converts values to other types if specified.
                     * @param message ListRegistrationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.ListRegistrationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRegistrationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetRegistrationRequest. */
                interface IGetRegistrationRequest {

                    /** GetRegistrationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRegistrationRequest. */
                class GetRegistrationRequest implements IGetRegistrationRequest {

                    /**
                     * Constructs a new GetRegistrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IGetRegistrationRequest);

                    /** GetRegistrationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRegistrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRegistrationRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IGetRegistrationRequest): google.cloud.domains.v1alpha2.GetRegistrationRequest;

                    /**
                     * Encodes the specified GetRegistrationRequest message. Does not implicitly {@link google.cloud.domains.v1alpha2.GetRegistrationRequest.verify|verify} messages.
                     * @param message GetRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IGetRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRegistrationRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.GetRegistrationRequest.verify|verify} messages.
                     * @param message GetRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IGetRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRegistrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.GetRegistrationRequest;

                    /**
                     * Decodes a GetRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.GetRegistrationRequest;

                    /**
                     * Verifies a GetRegistrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRegistrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.GetRegistrationRequest;

                    /**
                     * Creates a plain object from a GetRegistrationRequest message. Also converts values to other types if specified.
                     * @param message GetRegistrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.GetRegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRegistrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateRegistrationRequest. */
                interface IUpdateRegistrationRequest {

                    /** UpdateRegistrationRequest registration */
                    registration?: (google.cloud.domains.v1alpha2.IRegistration|null);

                    /** UpdateRegistrationRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateRegistrationRequest. */
                class UpdateRegistrationRequest implements IUpdateRegistrationRequest {

                    /**
                     * Constructs a new UpdateRegistrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IUpdateRegistrationRequest);

                    /** UpdateRegistrationRequest registration. */
                    public registration?: (google.cloud.domains.v1alpha2.IRegistration|null);

                    /** UpdateRegistrationRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateRegistrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRegistrationRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IUpdateRegistrationRequest): google.cloud.domains.v1alpha2.UpdateRegistrationRequest;

                    /**
                     * Encodes the specified UpdateRegistrationRequest message. Does not implicitly {@link google.cloud.domains.v1alpha2.UpdateRegistrationRequest.verify|verify} messages.
                     * @param message UpdateRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IUpdateRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRegistrationRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.UpdateRegistrationRequest.verify|verify} messages.
                     * @param message UpdateRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IUpdateRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRegistrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.UpdateRegistrationRequest;

                    /**
                     * Decodes an UpdateRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.UpdateRegistrationRequest;

                    /**
                     * Verifies an UpdateRegistrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRegistrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.UpdateRegistrationRequest;

                    /**
                     * Creates a plain object from an UpdateRegistrationRequest message. Also converts values to other types if specified.
                     * @param message UpdateRegistrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.UpdateRegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRegistrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConfigureManagementSettingsRequest. */
                interface IConfigureManagementSettingsRequest {

                    /** ConfigureManagementSettingsRequest registration */
                    registration?: (string|null);

                    /** ConfigureManagementSettingsRequest managementSettings */
                    managementSettings?: (google.cloud.domains.v1alpha2.IManagementSettings|null);

                    /** ConfigureManagementSettingsRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a ConfigureManagementSettingsRequest. */
                class ConfigureManagementSettingsRequest implements IConfigureManagementSettingsRequest {

                    /**
                     * Constructs a new ConfigureManagementSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IConfigureManagementSettingsRequest);

                    /** ConfigureManagementSettingsRequest registration. */
                    public registration: string;

                    /** ConfigureManagementSettingsRequest managementSettings. */
                    public managementSettings?: (google.cloud.domains.v1alpha2.IManagementSettings|null);

                    /** ConfigureManagementSettingsRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new ConfigureManagementSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfigureManagementSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IConfigureManagementSettingsRequest): google.cloud.domains.v1alpha2.ConfigureManagementSettingsRequest;

                    /**
                     * Encodes the specified ConfigureManagementSettingsRequest message. Does not implicitly {@link google.cloud.domains.v1alpha2.ConfigureManagementSettingsRequest.verify|verify} messages.
                     * @param message ConfigureManagementSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IConfigureManagementSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfigureManagementSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.ConfigureManagementSettingsRequest.verify|verify} messages.
                     * @param message ConfigureManagementSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IConfigureManagementSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfigureManagementSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfigureManagementSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.ConfigureManagementSettingsRequest;

                    /**
                     * Decodes a ConfigureManagementSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfigureManagementSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.ConfigureManagementSettingsRequest;

                    /**
                     * Verifies a ConfigureManagementSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfigureManagementSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfigureManagementSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.ConfigureManagementSettingsRequest;

                    /**
                     * Creates a plain object from a ConfigureManagementSettingsRequest message. Also converts values to other types if specified.
                     * @param message ConfigureManagementSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.ConfigureManagementSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfigureManagementSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConfigureDnsSettingsRequest. */
                interface IConfigureDnsSettingsRequest {

                    /** ConfigureDnsSettingsRequest registration */
                    registration?: (string|null);

                    /** ConfigureDnsSettingsRequest dnsSettings */
                    dnsSettings?: (google.cloud.domains.v1alpha2.IDnsSettings|null);

                    /** ConfigureDnsSettingsRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** ConfigureDnsSettingsRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a ConfigureDnsSettingsRequest. */
                class ConfigureDnsSettingsRequest implements IConfigureDnsSettingsRequest {

                    /**
                     * Constructs a new ConfigureDnsSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IConfigureDnsSettingsRequest);

                    /** ConfigureDnsSettingsRequest registration. */
                    public registration: string;

                    /** ConfigureDnsSettingsRequest dnsSettings. */
                    public dnsSettings?: (google.cloud.domains.v1alpha2.IDnsSettings|null);

                    /** ConfigureDnsSettingsRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** ConfigureDnsSettingsRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new ConfigureDnsSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfigureDnsSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IConfigureDnsSettingsRequest): google.cloud.domains.v1alpha2.ConfigureDnsSettingsRequest;

                    /**
                     * Encodes the specified ConfigureDnsSettingsRequest message. Does not implicitly {@link google.cloud.domains.v1alpha2.ConfigureDnsSettingsRequest.verify|verify} messages.
                     * @param message ConfigureDnsSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IConfigureDnsSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfigureDnsSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.ConfigureDnsSettingsRequest.verify|verify} messages.
                     * @param message ConfigureDnsSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IConfigureDnsSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfigureDnsSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfigureDnsSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.ConfigureDnsSettingsRequest;

                    /**
                     * Decodes a ConfigureDnsSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfigureDnsSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.ConfigureDnsSettingsRequest;

                    /**
                     * Verifies a ConfigureDnsSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfigureDnsSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfigureDnsSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.ConfigureDnsSettingsRequest;

                    /**
                     * Creates a plain object from a ConfigureDnsSettingsRequest message. Also converts values to other types if specified.
                     * @param message ConfigureDnsSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.ConfigureDnsSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfigureDnsSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConfigureContactSettingsRequest. */
                interface IConfigureContactSettingsRequest {

                    /** ConfigureContactSettingsRequest registration */
                    registration?: (string|null);

                    /** ConfigureContactSettingsRequest contactSettings */
                    contactSettings?: (google.cloud.domains.v1alpha2.IContactSettings|null);

                    /** ConfigureContactSettingsRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** ConfigureContactSettingsRequest contactNotices */
                    contactNotices?: (google.cloud.domains.v1alpha2.ContactNotice[]|null);

                    /** ConfigureContactSettingsRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a ConfigureContactSettingsRequest. */
                class ConfigureContactSettingsRequest implements IConfigureContactSettingsRequest {

                    /**
                     * Constructs a new ConfigureContactSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IConfigureContactSettingsRequest);

                    /** ConfigureContactSettingsRequest registration. */
                    public registration: string;

                    /** ConfigureContactSettingsRequest contactSettings. */
                    public contactSettings?: (google.cloud.domains.v1alpha2.IContactSettings|null);

                    /** ConfigureContactSettingsRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** ConfigureContactSettingsRequest contactNotices. */
                    public contactNotices: google.cloud.domains.v1alpha2.ContactNotice[];

                    /** ConfigureContactSettingsRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new ConfigureContactSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfigureContactSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IConfigureContactSettingsRequest): google.cloud.domains.v1alpha2.ConfigureContactSettingsRequest;

                    /**
                     * Encodes the specified ConfigureContactSettingsRequest message. Does not implicitly {@link google.cloud.domains.v1alpha2.ConfigureContactSettingsRequest.verify|verify} messages.
                     * @param message ConfigureContactSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IConfigureContactSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfigureContactSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.ConfigureContactSettingsRequest.verify|verify} messages.
                     * @param message ConfigureContactSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IConfigureContactSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfigureContactSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfigureContactSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.ConfigureContactSettingsRequest;

                    /**
                     * Decodes a ConfigureContactSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfigureContactSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.ConfigureContactSettingsRequest;

                    /**
                     * Verifies a ConfigureContactSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfigureContactSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfigureContactSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.ConfigureContactSettingsRequest;

                    /**
                     * Creates a plain object from a ConfigureContactSettingsRequest message. Also converts values to other types if specified.
                     * @param message ConfigureContactSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.ConfigureContactSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfigureContactSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExportRegistrationRequest. */
                interface IExportRegistrationRequest {

                    /** ExportRegistrationRequest name */
                    name?: (string|null);
                }

                /** Represents an ExportRegistrationRequest. */
                class ExportRegistrationRequest implements IExportRegistrationRequest {

                    /**
                     * Constructs a new ExportRegistrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IExportRegistrationRequest);

                    /** ExportRegistrationRequest name. */
                    public name: string;

                    /**
                     * Creates a new ExportRegistrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportRegistrationRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IExportRegistrationRequest): google.cloud.domains.v1alpha2.ExportRegistrationRequest;

                    /**
                     * Encodes the specified ExportRegistrationRequest message. Does not implicitly {@link google.cloud.domains.v1alpha2.ExportRegistrationRequest.verify|verify} messages.
                     * @param message ExportRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IExportRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportRegistrationRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.ExportRegistrationRequest.verify|verify} messages.
                     * @param message ExportRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IExportRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportRegistrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.ExportRegistrationRequest;

                    /**
                     * Decodes an ExportRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.ExportRegistrationRequest;

                    /**
                     * Verifies an ExportRegistrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportRegistrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.ExportRegistrationRequest;

                    /**
                     * Creates a plain object from an ExportRegistrationRequest message. Also converts values to other types if specified.
                     * @param message ExportRegistrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.ExportRegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportRegistrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteRegistrationRequest. */
                interface IDeleteRegistrationRequest {

                    /** DeleteRegistrationRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteRegistrationRequest. */
                class DeleteRegistrationRequest implements IDeleteRegistrationRequest {

                    /**
                     * Constructs a new DeleteRegistrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IDeleteRegistrationRequest);

                    /** DeleteRegistrationRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteRegistrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRegistrationRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IDeleteRegistrationRequest): google.cloud.domains.v1alpha2.DeleteRegistrationRequest;

                    /**
                     * Encodes the specified DeleteRegistrationRequest message. Does not implicitly {@link google.cloud.domains.v1alpha2.DeleteRegistrationRequest.verify|verify} messages.
                     * @param message DeleteRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IDeleteRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRegistrationRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.DeleteRegistrationRequest.verify|verify} messages.
                     * @param message DeleteRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IDeleteRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRegistrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.DeleteRegistrationRequest;

                    /**
                     * Decodes a DeleteRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.DeleteRegistrationRequest;

                    /**
                     * Verifies a DeleteRegistrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRegistrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.DeleteRegistrationRequest;

                    /**
                     * Creates a plain object from a DeleteRegistrationRequest message. Also converts values to other types if specified.
                     * @param message DeleteRegistrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.DeleteRegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRegistrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RetrieveAuthorizationCodeRequest. */
                interface IRetrieveAuthorizationCodeRequest {

                    /** RetrieveAuthorizationCodeRequest registration */
                    registration?: (string|null);
                }

                /** Represents a RetrieveAuthorizationCodeRequest. */
                class RetrieveAuthorizationCodeRequest implements IRetrieveAuthorizationCodeRequest {

                    /**
                     * Constructs a new RetrieveAuthorizationCodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IRetrieveAuthorizationCodeRequest);

                    /** RetrieveAuthorizationCodeRequest registration. */
                    public registration: string;

                    /**
                     * Creates a new RetrieveAuthorizationCodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetrieveAuthorizationCodeRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IRetrieveAuthorizationCodeRequest): google.cloud.domains.v1alpha2.RetrieveAuthorizationCodeRequest;

                    /**
                     * Encodes the specified RetrieveAuthorizationCodeRequest message. Does not implicitly {@link google.cloud.domains.v1alpha2.RetrieveAuthorizationCodeRequest.verify|verify} messages.
                     * @param message RetrieveAuthorizationCodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IRetrieveAuthorizationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetrieveAuthorizationCodeRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.RetrieveAuthorizationCodeRequest.verify|verify} messages.
                     * @param message RetrieveAuthorizationCodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IRetrieveAuthorizationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetrieveAuthorizationCodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetrieveAuthorizationCodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.RetrieveAuthorizationCodeRequest;

                    /**
                     * Decodes a RetrieveAuthorizationCodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetrieveAuthorizationCodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.RetrieveAuthorizationCodeRequest;

                    /**
                     * Verifies a RetrieveAuthorizationCodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetrieveAuthorizationCodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetrieveAuthorizationCodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.RetrieveAuthorizationCodeRequest;

                    /**
                     * Creates a plain object from a RetrieveAuthorizationCodeRequest message. Also converts values to other types if specified.
                     * @param message RetrieveAuthorizationCodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.RetrieveAuthorizationCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetrieveAuthorizationCodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResetAuthorizationCodeRequest. */
                interface IResetAuthorizationCodeRequest {

                    /** ResetAuthorizationCodeRequest registration */
                    registration?: (string|null);
                }

                /** Represents a ResetAuthorizationCodeRequest. */
                class ResetAuthorizationCodeRequest implements IResetAuthorizationCodeRequest {

                    /**
                     * Constructs a new ResetAuthorizationCodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IResetAuthorizationCodeRequest);

                    /** ResetAuthorizationCodeRequest registration. */
                    public registration: string;

                    /**
                     * Creates a new ResetAuthorizationCodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResetAuthorizationCodeRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IResetAuthorizationCodeRequest): google.cloud.domains.v1alpha2.ResetAuthorizationCodeRequest;

                    /**
                     * Encodes the specified ResetAuthorizationCodeRequest message. Does not implicitly {@link google.cloud.domains.v1alpha2.ResetAuthorizationCodeRequest.verify|verify} messages.
                     * @param message ResetAuthorizationCodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IResetAuthorizationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResetAuthorizationCodeRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.ResetAuthorizationCodeRequest.verify|verify} messages.
                     * @param message ResetAuthorizationCodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IResetAuthorizationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResetAuthorizationCodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResetAuthorizationCodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.ResetAuthorizationCodeRequest;

                    /**
                     * Decodes a ResetAuthorizationCodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResetAuthorizationCodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.ResetAuthorizationCodeRequest;

                    /**
                     * Verifies a ResetAuthorizationCodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResetAuthorizationCodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResetAuthorizationCodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.ResetAuthorizationCodeRequest;

                    /**
                     * Creates a plain object from a ResetAuthorizationCodeRequest message. Also converts values to other types if specified.
                     * @param message ResetAuthorizationCodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.ResetAuthorizationCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResetAuthorizationCodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RegisterParameters. */
                interface IRegisterParameters {

                    /** RegisterParameters domainName */
                    domainName?: (string|null);

                    /** RegisterParameters availability */
                    availability?: (google.cloud.domains.v1alpha2.RegisterParameters.Availability|keyof typeof google.cloud.domains.v1alpha2.RegisterParameters.Availability|null);

                    /** RegisterParameters supportedPrivacy */
                    supportedPrivacy?: (google.cloud.domains.v1alpha2.ContactPrivacy[]|null);

                    /** RegisterParameters domainNotices */
                    domainNotices?: (google.cloud.domains.v1alpha2.DomainNotice[]|null);

                    /** RegisterParameters yearlyPrice */
                    yearlyPrice?: (google.type.IMoney|null);
                }

                /** Represents a RegisterParameters. */
                class RegisterParameters implements IRegisterParameters {

                    /**
                     * Constructs a new RegisterParameters.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IRegisterParameters);

                    /** RegisterParameters domainName. */
                    public domainName: string;

                    /** RegisterParameters availability. */
                    public availability: (google.cloud.domains.v1alpha2.RegisterParameters.Availability|keyof typeof google.cloud.domains.v1alpha2.RegisterParameters.Availability);

                    /** RegisterParameters supportedPrivacy. */
                    public supportedPrivacy: google.cloud.domains.v1alpha2.ContactPrivacy[];

                    /** RegisterParameters domainNotices. */
                    public domainNotices: google.cloud.domains.v1alpha2.DomainNotice[];

                    /** RegisterParameters yearlyPrice. */
                    public yearlyPrice?: (google.type.IMoney|null);

                    /**
                     * Creates a new RegisterParameters instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RegisterParameters instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IRegisterParameters): google.cloud.domains.v1alpha2.RegisterParameters;

                    /**
                     * Encodes the specified RegisterParameters message. Does not implicitly {@link google.cloud.domains.v1alpha2.RegisterParameters.verify|verify} messages.
                     * @param message RegisterParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IRegisterParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RegisterParameters message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.RegisterParameters.verify|verify} messages.
                     * @param message RegisterParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IRegisterParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RegisterParameters message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RegisterParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.RegisterParameters;

                    /**
                     * Decodes a RegisterParameters message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RegisterParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.RegisterParameters;

                    /**
                     * Verifies a RegisterParameters message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RegisterParameters message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RegisterParameters
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.RegisterParameters;

                    /**
                     * Creates a plain object from a RegisterParameters message. Also converts values to other types if specified.
                     * @param message RegisterParameters
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.RegisterParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RegisterParameters to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace RegisterParameters {

                    /** Availability enum. */
                    enum Availability {
                        AVAILABILITY_UNSPECIFIED = 0,
                        AVAILABLE = 1,
                        UNAVAILABLE = 2,
                        UNSUPPORTED = 3,
                        UNKNOWN = 4
                    }
                }

                /** Properties of an AuthorizationCode. */
                interface IAuthorizationCode {

                    /** AuthorizationCode code */
                    code?: (string|null);
                }

                /** Represents an AuthorizationCode. */
                class AuthorizationCode implements IAuthorizationCode {

                    /**
                     * Constructs a new AuthorizationCode.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IAuthorizationCode);

                    /** AuthorizationCode code. */
                    public code: string;

                    /**
                     * Creates a new AuthorizationCode instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuthorizationCode instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IAuthorizationCode): google.cloud.domains.v1alpha2.AuthorizationCode;

                    /**
                     * Encodes the specified AuthorizationCode message. Does not implicitly {@link google.cloud.domains.v1alpha2.AuthorizationCode.verify|verify} messages.
                     * @param message AuthorizationCode message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IAuthorizationCode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AuthorizationCode message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.AuthorizationCode.verify|verify} messages.
                     * @param message AuthorizationCode message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IAuthorizationCode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuthorizationCode message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuthorizationCode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.AuthorizationCode;

                    /**
                     * Decodes an AuthorizationCode message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AuthorizationCode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.AuthorizationCode;

                    /**
                     * Verifies an AuthorizationCode message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AuthorizationCode message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AuthorizationCode
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.AuthorizationCode;

                    /**
                     * Creates a plain object from an AuthorizationCode message. Also converts values to other types if specified.
                     * @param message AuthorizationCode
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.AuthorizationCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AuthorizationCode to JSON.
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

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1alpha2.IOperationMetadata);

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

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.domains.v1alpha2.IOperationMetadata): google.cloud.domains.v1alpha2.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.domains.v1alpha2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1alpha2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.domains.v1alpha2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1alpha2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1alpha2.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1alpha2.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1alpha2.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1alpha2.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** ContactPrivacy enum. */
                enum ContactPrivacy {
                    CONTACT_PRIVACY_UNSPECIFIED = 0,
                    PUBLIC_CONTACT_DATA = 1,
                    PRIVATE_CONTACT_DATA = 2,
                    REDACTED_CONTACT_DATA = 3
                }

                /** DomainNotice enum. */
                enum DomainNotice {
                    DOMAIN_NOTICE_UNSPECIFIED = 0,
                    HSTS_PRELOADED = 1
                }

                /** ContactNotice enum. */
                enum ContactNotice {
                    CONTACT_NOTICE_UNSPECIFIED = 0,
                    PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT = 1
                }

                /** TransferLockState enum. */
                enum TransferLockState {
                    TRANSFER_LOCK_STATE_UNSPECIFIED = 0,
                    UNLOCKED = 1,
                    LOCKED = 2
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Represents a Domains */
                class Domains extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Domains service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Domains service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Domains;

                    /**
                     * Calls SearchDomains.
                     * @param request SearchDomainsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchDomainsResponse
                     */
                    public searchDomains(request: google.cloud.domains.v1beta1.ISearchDomainsRequest, callback: google.cloud.domains.v1beta1.Domains.SearchDomainsCallback): void;

                    /**
                     * Calls SearchDomains.
                     * @param request SearchDomainsRequest message or plain object
                     * @returns Promise
                     */
                    public searchDomains(request: google.cloud.domains.v1beta1.ISearchDomainsRequest): Promise<google.cloud.domains.v1beta1.SearchDomainsResponse>;

                    /**
                     * Calls RetrieveRegisterParameters.
                     * @param request RetrieveRegisterParametersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RetrieveRegisterParametersResponse
                     */
                    public retrieveRegisterParameters(request: google.cloud.domains.v1beta1.IRetrieveRegisterParametersRequest, callback: google.cloud.domains.v1beta1.Domains.RetrieveRegisterParametersCallback): void;

                    /**
                     * Calls RetrieveRegisterParameters.
                     * @param request RetrieveRegisterParametersRequest message or plain object
                     * @returns Promise
                     */
                    public retrieveRegisterParameters(request: google.cloud.domains.v1beta1.IRetrieveRegisterParametersRequest): Promise<google.cloud.domains.v1beta1.RetrieveRegisterParametersResponse>;

                    /**
                     * Calls RegisterDomain.
                     * @param request RegisterDomainRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public registerDomain(request: google.cloud.domains.v1beta1.IRegisterDomainRequest, callback: google.cloud.domains.v1beta1.Domains.RegisterDomainCallback): void;

                    /**
                     * Calls RegisterDomain.
                     * @param request RegisterDomainRequest message or plain object
                     * @returns Promise
                     */
                    public registerDomain(request: google.cloud.domains.v1beta1.IRegisterDomainRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListRegistrations.
                     * @param request ListRegistrationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRegistrationsResponse
                     */
                    public listRegistrations(request: google.cloud.domains.v1beta1.IListRegistrationsRequest, callback: google.cloud.domains.v1beta1.Domains.ListRegistrationsCallback): void;

                    /**
                     * Calls ListRegistrations.
                     * @param request ListRegistrationsRequest message or plain object
                     * @returns Promise
                     */
                    public listRegistrations(request: google.cloud.domains.v1beta1.IListRegistrationsRequest): Promise<google.cloud.domains.v1beta1.ListRegistrationsResponse>;

                    /**
                     * Calls GetRegistration.
                     * @param request GetRegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Registration
                     */
                    public getRegistration(request: google.cloud.domains.v1beta1.IGetRegistrationRequest, callback: google.cloud.domains.v1beta1.Domains.GetRegistrationCallback): void;

                    /**
                     * Calls GetRegistration.
                     * @param request GetRegistrationRequest message or plain object
                     * @returns Promise
                     */
                    public getRegistration(request: google.cloud.domains.v1beta1.IGetRegistrationRequest): Promise<google.cloud.domains.v1beta1.Registration>;

                    /**
                     * Calls UpdateRegistration.
                     * @param request UpdateRegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateRegistration(request: google.cloud.domains.v1beta1.IUpdateRegistrationRequest, callback: google.cloud.domains.v1beta1.Domains.UpdateRegistrationCallback): void;

                    /**
                     * Calls UpdateRegistration.
                     * @param request UpdateRegistrationRequest message or plain object
                     * @returns Promise
                     */
                    public updateRegistration(request: google.cloud.domains.v1beta1.IUpdateRegistrationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ConfigureManagementSettings.
                     * @param request ConfigureManagementSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public configureManagementSettings(request: google.cloud.domains.v1beta1.IConfigureManagementSettingsRequest, callback: google.cloud.domains.v1beta1.Domains.ConfigureManagementSettingsCallback): void;

                    /**
                     * Calls ConfigureManagementSettings.
                     * @param request ConfigureManagementSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public configureManagementSettings(request: google.cloud.domains.v1beta1.IConfigureManagementSettingsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ConfigureDnsSettings.
                     * @param request ConfigureDnsSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public configureDnsSettings(request: google.cloud.domains.v1beta1.IConfigureDnsSettingsRequest, callback: google.cloud.domains.v1beta1.Domains.ConfigureDnsSettingsCallback): void;

                    /**
                     * Calls ConfigureDnsSettings.
                     * @param request ConfigureDnsSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public configureDnsSettings(request: google.cloud.domains.v1beta1.IConfigureDnsSettingsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ConfigureContactSettings.
                     * @param request ConfigureContactSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public configureContactSettings(request: google.cloud.domains.v1beta1.IConfigureContactSettingsRequest, callback: google.cloud.domains.v1beta1.Domains.ConfigureContactSettingsCallback): void;

                    /**
                     * Calls ConfigureContactSettings.
                     * @param request ConfigureContactSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public configureContactSettings(request: google.cloud.domains.v1beta1.IConfigureContactSettingsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportRegistration.
                     * @param request ExportRegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportRegistration(request: google.cloud.domains.v1beta1.IExportRegistrationRequest, callback: google.cloud.domains.v1beta1.Domains.ExportRegistrationCallback): void;

                    /**
                     * Calls ExportRegistration.
                     * @param request ExportRegistrationRequest message or plain object
                     * @returns Promise
                     */
                    public exportRegistration(request: google.cloud.domains.v1beta1.IExportRegistrationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteRegistration.
                     * @param request DeleteRegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteRegistration(request: google.cloud.domains.v1beta1.IDeleteRegistrationRequest, callback: google.cloud.domains.v1beta1.Domains.DeleteRegistrationCallback): void;

                    /**
                     * Calls DeleteRegistration.
                     * @param request DeleteRegistrationRequest message or plain object
                     * @returns Promise
                     */
                    public deleteRegistration(request: google.cloud.domains.v1beta1.IDeleteRegistrationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RetrieveAuthorizationCode.
                     * @param request RetrieveAuthorizationCodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AuthorizationCode
                     */
                    public retrieveAuthorizationCode(request: google.cloud.domains.v1beta1.IRetrieveAuthorizationCodeRequest, callback: google.cloud.domains.v1beta1.Domains.RetrieveAuthorizationCodeCallback): void;

                    /**
                     * Calls RetrieveAuthorizationCode.
                     * @param request RetrieveAuthorizationCodeRequest message or plain object
                     * @returns Promise
                     */
                    public retrieveAuthorizationCode(request: google.cloud.domains.v1beta1.IRetrieveAuthorizationCodeRequest): Promise<google.cloud.domains.v1beta1.AuthorizationCode>;

                    /**
                     * Calls ResetAuthorizationCode.
                     * @param request ResetAuthorizationCodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AuthorizationCode
                     */
                    public resetAuthorizationCode(request: google.cloud.domains.v1beta1.IResetAuthorizationCodeRequest, callback: google.cloud.domains.v1beta1.Domains.ResetAuthorizationCodeCallback): void;

                    /**
                     * Calls ResetAuthorizationCode.
                     * @param request ResetAuthorizationCodeRequest message or plain object
                     * @returns Promise
                     */
                    public resetAuthorizationCode(request: google.cloud.domains.v1beta1.IResetAuthorizationCodeRequest): Promise<google.cloud.domains.v1beta1.AuthorizationCode>;
                }

                namespace Domains {

                    /**
                     * Callback as used by {@link google.cloud.domains.v1beta1.Domains#searchDomains}.
                     * @param error Error, if any
                     * @param [response] SearchDomainsResponse
                     */
                    type SearchDomainsCallback = (error: (Error|null), response?: google.cloud.domains.v1beta1.SearchDomainsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1beta1.Domains#retrieveRegisterParameters}.
                     * @param error Error, if any
                     * @param [response] RetrieveRegisterParametersResponse
                     */
                    type RetrieveRegisterParametersCallback = (error: (Error|null), response?: google.cloud.domains.v1beta1.RetrieveRegisterParametersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1beta1.Domains#registerDomain}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RegisterDomainCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1beta1.Domains#listRegistrations}.
                     * @param error Error, if any
                     * @param [response] ListRegistrationsResponse
                     */
                    type ListRegistrationsCallback = (error: (Error|null), response?: google.cloud.domains.v1beta1.ListRegistrationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1beta1.Domains#getRegistration}.
                     * @param error Error, if any
                     * @param [response] Registration
                     */
                    type GetRegistrationCallback = (error: (Error|null), response?: google.cloud.domains.v1beta1.Registration) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1beta1.Domains#updateRegistration}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateRegistrationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1beta1.Domains#configureManagementSettings}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ConfigureManagementSettingsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1beta1.Domains#configureDnsSettings}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ConfigureDnsSettingsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1beta1.Domains#configureContactSettings}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ConfigureContactSettingsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1beta1.Domains#exportRegistration}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportRegistrationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1beta1.Domains#deleteRegistration}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteRegistrationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1beta1.Domains#retrieveAuthorizationCode}.
                     * @param error Error, if any
                     * @param [response] AuthorizationCode
                     */
                    type RetrieveAuthorizationCodeCallback = (error: (Error|null), response?: google.cloud.domains.v1beta1.AuthorizationCode) => void;

                    /**
                     * Callback as used by {@link google.cloud.domains.v1beta1.Domains#resetAuthorizationCode}.
                     * @param error Error, if any
                     * @param [response] AuthorizationCode
                     */
                    type ResetAuthorizationCodeCallback = (error: (Error|null), response?: google.cloud.domains.v1beta1.AuthorizationCode) => void;
                }

                /** Properties of a Registration. */
                interface IRegistration {

                    /** Registration name */
                    name?: (string|null);

                    /** Registration domainName */
                    domainName?: (string|null);

                    /** Registration createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Registration expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** Registration state */
                    state?: (google.cloud.domains.v1beta1.Registration.State|keyof typeof google.cloud.domains.v1beta1.Registration.State|null);

                    /** Registration issues */
                    issues?: (google.cloud.domains.v1beta1.Registration.Issue[]|null);

                    /** Registration labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Registration managementSettings */
                    managementSettings?: (google.cloud.domains.v1beta1.IManagementSettings|null);

                    /** Registration dnsSettings */
                    dnsSettings?: (google.cloud.domains.v1beta1.IDnsSettings|null);

                    /** Registration contactSettings */
                    contactSettings?: (google.cloud.domains.v1beta1.IContactSettings|null);

                    /** Registration pendingContactSettings */
                    pendingContactSettings?: (google.cloud.domains.v1beta1.IContactSettings|null);

                    /** Registration supportedPrivacy */
                    supportedPrivacy?: (google.cloud.domains.v1beta1.ContactPrivacy[]|null);
                }

                /** Represents a Registration. */
                class Registration implements IRegistration {

                    /**
                     * Constructs a new Registration.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IRegistration);

                    /** Registration name. */
                    public name: string;

                    /** Registration domainName. */
                    public domainName: string;

                    /** Registration createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Registration expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** Registration state. */
                    public state: (google.cloud.domains.v1beta1.Registration.State|keyof typeof google.cloud.domains.v1beta1.Registration.State);

                    /** Registration issues. */
                    public issues: google.cloud.domains.v1beta1.Registration.Issue[];

                    /** Registration labels. */
                    public labels: { [k: string]: string };

                    /** Registration managementSettings. */
                    public managementSettings?: (google.cloud.domains.v1beta1.IManagementSettings|null);

                    /** Registration dnsSettings. */
                    public dnsSettings?: (google.cloud.domains.v1beta1.IDnsSettings|null);

                    /** Registration contactSettings. */
                    public contactSettings?: (google.cloud.domains.v1beta1.IContactSettings|null);

                    /** Registration pendingContactSettings. */
                    public pendingContactSettings?: (google.cloud.domains.v1beta1.IContactSettings|null);

                    /** Registration supportedPrivacy. */
                    public supportedPrivacy: google.cloud.domains.v1beta1.ContactPrivacy[];

                    /**
                     * Creates a new Registration instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Registration instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IRegistration): google.cloud.domains.v1beta1.Registration;

                    /**
                     * Encodes the specified Registration message. Does not implicitly {@link google.cloud.domains.v1beta1.Registration.verify|verify} messages.
                     * @param message Registration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Registration message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.Registration.verify|verify} messages.
                     * @param message Registration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Registration message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Registration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.Registration;

                    /**
                     * Decodes a Registration message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Registration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.Registration;

                    /**
                     * Verifies a Registration message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Registration message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Registration
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.Registration;

                    /**
                     * Creates a plain object from a Registration message. Also converts values to other types if specified.
                     * @param message Registration
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.Registration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Registration to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Registration {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        REGISTRATION_PENDING = 1,
                        REGISTRATION_FAILED = 2,
                        ACTIVE = 6,
                        SUSPENDED = 7,
                        EXPORTED = 8
                    }

                    /** Issue enum. */
                    enum Issue {
                        ISSUE_UNSPECIFIED = 0,
                        CONTACT_SUPPORT = 1,
                        UNVERIFIED_EMAIL = 2
                    }
                }

                /** Properties of a ManagementSettings. */
                interface IManagementSettings {

                    /** ManagementSettings renewalMethod */
                    renewalMethod?: (google.cloud.domains.v1beta1.ManagementSettings.RenewalMethod|keyof typeof google.cloud.domains.v1beta1.ManagementSettings.RenewalMethod|null);

                    /** ManagementSettings transferLockState */
                    transferLockState?: (google.cloud.domains.v1beta1.TransferLockState|keyof typeof google.cloud.domains.v1beta1.TransferLockState|null);
                }

                /** Represents a ManagementSettings. */
                class ManagementSettings implements IManagementSettings {

                    /**
                     * Constructs a new ManagementSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IManagementSettings);

                    /** ManagementSettings renewalMethod. */
                    public renewalMethod: (google.cloud.domains.v1beta1.ManagementSettings.RenewalMethod|keyof typeof google.cloud.domains.v1beta1.ManagementSettings.RenewalMethod);

                    /** ManagementSettings transferLockState. */
                    public transferLockState: (google.cloud.domains.v1beta1.TransferLockState|keyof typeof google.cloud.domains.v1beta1.TransferLockState);

                    /**
                     * Creates a new ManagementSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ManagementSettings instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IManagementSettings): google.cloud.domains.v1beta1.ManagementSettings;

                    /**
                     * Encodes the specified ManagementSettings message. Does not implicitly {@link google.cloud.domains.v1beta1.ManagementSettings.verify|verify} messages.
                     * @param message ManagementSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IManagementSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ManagementSettings message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.ManagementSettings.verify|verify} messages.
                     * @param message ManagementSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IManagementSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ManagementSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ManagementSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.ManagementSettings;

                    /**
                     * Decodes a ManagementSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ManagementSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.ManagementSettings;

                    /**
                     * Verifies a ManagementSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ManagementSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ManagementSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.ManagementSettings;

                    /**
                     * Creates a plain object from a ManagementSettings message. Also converts values to other types if specified.
                     * @param message ManagementSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.ManagementSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ManagementSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ManagementSettings {

                    /** RenewalMethod enum. */
                    enum RenewalMethod {
                        RENEWAL_METHOD_UNSPECIFIED = 0,
                        AUTOMATIC_RENEWAL = 1,
                        MANUAL_RENEWAL = 2
                    }
                }

                /** Properties of a DnsSettings. */
                interface IDnsSettings {

                    /** DnsSettings customDns */
                    customDns?: (google.cloud.domains.v1beta1.DnsSettings.ICustomDns|null);

                    /** DnsSettings googleDomainsDns */
                    googleDomainsDns?: (google.cloud.domains.v1beta1.DnsSettings.IGoogleDomainsDns|null);

                    /** DnsSettings glueRecords */
                    glueRecords?: (google.cloud.domains.v1beta1.DnsSettings.IGlueRecord[]|null);
                }

                /** Represents a DnsSettings. */
                class DnsSettings implements IDnsSettings {

                    /**
                     * Constructs a new DnsSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IDnsSettings);

                    /** DnsSettings customDns. */
                    public customDns?: (google.cloud.domains.v1beta1.DnsSettings.ICustomDns|null);

                    /** DnsSettings googleDomainsDns. */
                    public googleDomainsDns?: (google.cloud.domains.v1beta1.DnsSettings.IGoogleDomainsDns|null);

                    /** DnsSettings glueRecords. */
                    public glueRecords: google.cloud.domains.v1beta1.DnsSettings.IGlueRecord[];

                    /** DnsSettings dnsProvider. */
                    public dnsProvider?: ("customDns"|"googleDomainsDns");

                    /**
                     * Creates a new DnsSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DnsSettings instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IDnsSettings): google.cloud.domains.v1beta1.DnsSettings;

                    /**
                     * Encodes the specified DnsSettings message. Does not implicitly {@link google.cloud.domains.v1beta1.DnsSettings.verify|verify} messages.
                     * @param message DnsSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IDnsSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DnsSettings message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.DnsSettings.verify|verify} messages.
                     * @param message DnsSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IDnsSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DnsSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DnsSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.DnsSettings;

                    /**
                     * Decodes a DnsSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DnsSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.DnsSettings;

                    /**
                     * Verifies a DnsSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DnsSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DnsSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.DnsSettings;

                    /**
                     * Creates a plain object from a DnsSettings message. Also converts values to other types if specified.
                     * @param message DnsSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.DnsSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DnsSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DnsSettings {

                    /** Properties of a CustomDns. */
                    interface ICustomDns {

                        /** CustomDns nameServers */
                        nameServers?: (string[]|null);

                        /** CustomDns dsRecords */
                        dsRecords?: (google.cloud.domains.v1beta1.DnsSettings.IDsRecord[]|null);
                    }

                    /** Represents a CustomDns. */
                    class CustomDns implements ICustomDns {

                        /**
                         * Constructs a new CustomDns.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.domains.v1beta1.DnsSettings.ICustomDns);

                        /** CustomDns nameServers. */
                        public nameServers: string[];

                        /** CustomDns dsRecords. */
                        public dsRecords: google.cloud.domains.v1beta1.DnsSettings.IDsRecord[];

                        /**
                         * Creates a new CustomDns instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CustomDns instance
                         */
                        public static create(properties?: google.cloud.domains.v1beta1.DnsSettings.ICustomDns): google.cloud.domains.v1beta1.DnsSettings.CustomDns;

                        /**
                         * Encodes the specified CustomDns message. Does not implicitly {@link google.cloud.domains.v1beta1.DnsSettings.CustomDns.verify|verify} messages.
                         * @param message CustomDns message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.domains.v1beta1.DnsSettings.ICustomDns, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CustomDns message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.DnsSettings.CustomDns.verify|verify} messages.
                         * @param message CustomDns message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.domains.v1beta1.DnsSettings.ICustomDns, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CustomDns message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CustomDns
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.DnsSettings.CustomDns;

                        /**
                         * Decodes a CustomDns message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CustomDns
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.DnsSettings.CustomDns;

                        /**
                         * Verifies a CustomDns message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CustomDns message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CustomDns
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.DnsSettings.CustomDns;

                        /**
                         * Creates a plain object from a CustomDns message. Also converts values to other types if specified.
                         * @param message CustomDns
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.domains.v1beta1.DnsSettings.CustomDns, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CustomDns to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a GoogleDomainsDns. */
                    interface IGoogleDomainsDns {

                        /** GoogleDomainsDns nameServers */
                        nameServers?: (string[]|null);

                        /** GoogleDomainsDns dsState */
                        dsState?: (google.cloud.domains.v1beta1.DnsSettings.DsState|keyof typeof google.cloud.domains.v1beta1.DnsSettings.DsState|null);

                        /** GoogleDomainsDns dsRecords */
                        dsRecords?: (google.cloud.domains.v1beta1.DnsSettings.IDsRecord[]|null);
                    }

                    /** Represents a GoogleDomainsDns. */
                    class GoogleDomainsDns implements IGoogleDomainsDns {

                        /**
                         * Constructs a new GoogleDomainsDns.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.domains.v1beta1.DnsSettings.IGoogleDomainsDns);

                        /** GoogleDomainsDns nameServers. */
                        public nameServers: string[];

                        /** GoogleDomainsDns dsState. */
                        public dsState: (google.cloud.domains.v1beta1.DnsSettings.DsState|keyof typeof google.cloud.domains.v1beta1.DnsSettings.DsState);

                        /** GoogleDomainsDns dsRecords. */
                        public dsRecords: google.cloud.domains.v1beta1.DnsSettings.IDsRecord[];

                        /**
                         * Creates a new GoogleDomainsDns instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GoogleDomainsDns instance
                         */
                        public static create(properties?: google.cloud.domains.v1beta1.DnsSettings.IGoogleDomainsDns): google.cloud.domains.v1beta1.DnsSettings.GoogleDomainsDns;

                        /**
                         * Encodes the specified GoogleDomainsDns message. Does not implicitly {@link google.cloud.domains.v1beta1.DnsSettings.GoogleDomainsDns.verify|verify} messages.
                         * @param message GoogleDomainsDns message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.domains.v1beta1.DnsSettings.IGoogleDomainsDns, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GoogleDomainsDns message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.DnsSettings.GoogleDomainsDns.verify|verify} messages.
                         * @param message GoogleDomainsDns message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.domains.v1beta1.DnsSettings.IGoogleDomainsDns, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GoogleDomainsDns message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GoogleDomainsDns
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.DnsSettings.GoogleDomainsDns;

                        /**
                         * Decodes a GoogleDomainsDns message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GoogleDomainsDns
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.DnsSettings.GoogleDomainsDns;

                        /**
                         * Verifies a GoogleDomainsDns message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GoogleDomainsDns message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GoogleDomainsDns
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.DnsSettings.GoogleDomainsDns;

                        /**
                         * Creates a plain object from a GoogleDomainsDns message. Also converts values to other types if specified.
                         * @param message GoogleDomainsDns
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.domains.v1beta1.DnsSettings.GoogleDomainsDns, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GoogleDomainsDns to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DsRecord. */
                    interface IDsRecord {

                        /** DsRecord keyTag */
                        keyTag?: (number|null);

                        /** DsRecord algorithm */
                        algorithm?: (google.cloud.domains.v1beta1.DnsSettings.DsRecord.Algorithm|keyof typeof google.cloud.domains.v1beta1.DnsSettings.DsRecord.Algorithm|null);

                        /** DsRecord digestType */
                        digestType?: (google.cloud.domains.v1beta1.DnsSettings.DsRecord.DigestType|keyof typeof google.cloud.domains.v1beta1.DnsSettings.DsRecord.DigestType|null);

                        /** DsRecord digest */
                        digest?: (string|null);
                    }

                    /** Represents a DsRecord. */
                    class DsRecord implements IDsRecord {

                        /**
                         * Constructs a new DsRecord.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.domains.v1beta1.DnsSettings.IDsRecord);

                        /** DsRecord keyTag. */
                        public keyTag: number;

                        /** DsRecord algorithm. */
                        public algorithm: (google.cloud.domains.v1beta1.DnsSettings.DsRecord.Algorithm|keyof typeof google.cloud.domains.v1beta1.DnsSettings.DsRecord.Algorithm);

                        /** DsRecord digestType. */
                        public digestType: (google.cloud.domains.v1beta1.DnsSettings.DsRecord.DigestType|keyof typeof google.cloud.domains.v1beta1.DnsSettings.DsRecord.DigestType);

                        /** DsRecord digest. */
                        public digest: string;

                        /**
                         * Creates a new DsRecord instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DsRecord instance
                         */
                        public static create(properties?: google.cloud.domains.v1beta1.DnsSettings.IDsRecord): google.cloud.domains.v1beta1.DnsSettings.DsRecord;

                        /**
                         * Encodes the specified DsRecord message. Does not implicitly {@link google.cloud.domains.v1beta1.DnsSettings.DsRecord.verify|verify} messages.
                         * @param message DsRecord message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.domains.v1beta1.DnsSettings.IDsRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DsRecord message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.DnsSettings.DsRecord.verify|verify} messages.
                         * @param message DsRecord message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.domains.v1beta1.DnsSettings.IDsRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DsRecord message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DsRecord
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.DnsSettings.DsRecord;

                        /**
                         * Decodes a DsRecord message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DsRecord
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.DnsSettings.DsRecord;

                        /**
                         * Verifies a DsRecord message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DsRecord message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DsRecord
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.DnsSettings.DsRecord;

                        /**
                         * Creates a plain object from a DsRecord message. Also converts values to other types if specified.
                         * @param message DsRecord
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.domains.v1beta1.DnsSettings.DsRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DsRecord to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace DsRecord {

                        /** Algorithm enum. */
                        enum Algorithm {
                            ALGORITHM_UNSPECIFIED = 0,
                            DSA = 3,
                            ECC = 4,
                            RSASHA1 = 5,
                            DSANSEC3SHA1 = 6,
                            RSASHA1NSEC3SHA1 = 7,
                            RSASHA256 = 8,
                            RSASHA512 = 10,
                            ECCGOST = 12,
                            ECDSAP256SHA256 = 13,
                            ECDSAP384SHA384 = 14,
                            ED25519 = 15,
                            ED448 = 16
                        }

                        /** DigestType enum. */
                        enum DigestType {
                            DIGEST_TYPE_UNSPECIFIED = 0,
                            SHA1 = 1,
                            SHA256 = 2,
                            GOST3411 = 3,
                            SHA384 = 4
                        }
                    }

                    /** Properties of a GlueRecord. */
                    interface IGlueRecord {

                        /** GlueRecord hostName */
                        hostName?: (string|null);

                        /** GlueRecord ipv4Addresses */
                        ipv4Addresses?: (string[]|null);

                        /** GlueRecord ipv6Addresses */
                        ipv6Addresses?: (string[]|null);
                    }

                    /** Represents a GlueRecord. */
                    class GlueRecord implements IGlueRecord {

                        /**
                         * Constructs a new GlueRecord.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.domains.v1beta1.DnsSettings.IGlueRecord);

                        /** GlueRecord hostName. */
                        public hostName: string;

                        /** GlueRecord ipv4Addresses. */
                        public ipv4Addresses: string[];

                        /** GlueRecord ipv6Addresses. */
                        public ipv6Addresses: string[];

                        /**
                         * Creates a new GlueRecord instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GlueRecord instance
                         */
                        public static create(properties?: google.cloud.domains.v1beta1.DnsSettings.IGlueRecord): google.cloud.domains.v1beta1.DnsSettings.GlueRecord;

                        /**
                         * Encodes the specified GlueRecord message. Does not implicitly {@link google.cloud.domains.v1beta1.DnsSettings.GlueRecord.verify|verify} messages.
                         * @param message GlueRecord message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.domains.v1beta1.DnsSettings.IGlueRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GlueRecord message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.DnsSettings.GlueRecord.verify|verify} messages.
                         * @param message GlueRecord message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.domains.v1beta1.DnsSettings.IGlueRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GlueRecord message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GlueRecord
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.DnsSettings.GlueRecord;

                        /**
                         * Decodes a GlueRecord message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GlueRecord
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.DnsSettings.GlueRecord;

                        /**
                         * Verifies a GlueRecord message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GlueRecord message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GlueRecord
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.DnsSettings.GlueRecord;

                        /**
                         * Creates a plain object from a GlueRecord message. Also converts values to other types if specified.
                         * @param message GlueRecord
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.domains.v1beta1.DnsSettings.GlueRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GlueRecord to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** DsState enum. */
                    enum DsState {
                        DS_STATE_UNSPECIFIED = 0,
                        DS_RECORDS_UNPUBLISHED = 1,
                        DS_RECORDS_PUBLISHED = 2
                    }
                }

                /** Properties of a ContactSettings. */
                interface IContactSettings {

                    /** ContactSettings privacy */
                    privacy?: (google.cloud.domains.v1beta1.ContactPrivacy|keyof typeof google.cloud.domains.v1beta1.ContactPrivacy|null);

                    /** ContactSettings registrantContact */
                    registrantContact?: (google.cloud.domains.v1beta1.ContactSettings.IContact|null);

                    /** ContactSettings adminContact */
                    adminContact?: (google.cloud.domains.v1beta1.ContactSettings.IContact|null);

                    /** ContactSettings technicalContact */
                    technicalContact?: (google.cloud.domains.v1beta1.ContactSettings.IContact|null);
                }

                /** Represents a ContactSettings. */
                class ContactSettings implements IContactSettings {

                    /**
                     * Constructs a new ContactSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IContactSettings);

                    /** ContactSettings privacy. */
                    public privacy: (google.cloud.domains.v1beta1.ContactPrivacy|keyof typeof google.cloud.domains.v1beta1.ContactPrivacy);

                    /** ContactSettings registrantContact. */
                    public registrantContact?: (google.cloud.domains.v1beta1.ContactSettings.IContact|null);

                    /** ContactSettings adminContact. */
                    public adminContact?: (google.cloud.domains.v1beta1.ContactSettings.IContact|null);

                    /** ContactSettings technicalContact. */
                    public technicalContact?: (google.cloud.domains.v1beta1.ContactSettings.IContact|null);

                    /**
                     * Creates a new ContactSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContactSettings instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IContactSettings): google.cloud.domains.v1beta1.ContactSettings;

                    /**
                     * Encodes the specified ContactSettings message. Does not implicitly {@link google.cloud.domains.v1beta1.ContactSettings.verify|verify} messages.
                     * @param message ContactSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IContactSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ContactSettings message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.ContactSettings.verify|verify} messages.
                     * @param message ContactSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IContactSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContactSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContactSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.ContactSettings;

                    /**
                     * Decodes a ContactSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ContactSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.ContactSettings;

                    /**
                     * Verifies a ContactSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ContactSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ContactSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.ContactSettings;

                    /**
                     * Creates a plain object from a ContactSettings message. Also converts values to other types if specified.
                     * @param message ContactSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.ContactSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ContactSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ContactSettings {

                    /** Properties of a Contact. */
                    interface IContact {

                        /** Contact postalAddress */
                        postalAddress?: (google.type.IPostalAddress|null);

                        /** Contact email */
                        email?: (string|null);

                        /** Contact phoneNumber */
                        phoneNumber?: (string|null);

                        /** Contact faxNumber */
                        faxNumber?: (string|null);
                    }

                    /** Represents a Contact. */
                    class Contact implements IContact {

                        /**
                         * Constructs a new Contact.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.domains.v1beta1.ContactSettings.IContact);

                        /** Contact postalAddress. */
                        public postalAddress?: (google.type.IPostalAddress|null);

                        /** Contact email. */
                        public email: string;

                        /** Contact phoneNumber. */
                        public phoneNumber: string;

                        /** Contact faxNumber. */
                        public faxNumber: string;

                        /**
                         * Creates a new Contact instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Contact instance
                         */
                        public static create(properties?: google.cloud.domains.v1beta1.ContactSettings.IContact): google.cloud.domains.v1beta1.ContactSettings.Contact;

                        /**
                         * Encodes the specified Contact message. Does not implicitly {@link google.cloud.domains.v1beta1.ContactSettings.Contact.verify|verify} messages.
                         * @param message Contact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.domains.v1beta1.ContactSettings.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Contact message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.ContactSettings.Contact.verify|verify} messages.
                         * @param message Contact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.domains.v1beta1.ContactSettings.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Contact message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Contact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.ContactSettings.Contact;

                        /**
                         * Decodes a Contact message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Contact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.ContactSettings.Contact;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.ContactSettings.Contact;

                        /**
                         * Creates a plain object from a Contact message. Also converts values to other types if specified.
                         * @param message Contact
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.domains.v1beta1.ContactSettings.Contact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Contact to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a SearchDomainsRequest. */
                interface ISearchDomainsRequest {

                    /** SearchDomainsRequest query */
                    query?: (string|null);

                    /** SearchDomainsRequest location */
                    location?: (string|null);
                }

                /** Represents a SearchDomainsRequest. */
                class SearchDomainsRequest implements ISearchDomainsRequest {

                    /**
                     * Constructs a new SearchDomainsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.ISearchDomainsRequest);

                    /** SearchDomainsRequest query. */
                    public query: string;

                    /** SearchDomainsRequest location. */
                    public location: string;

                    /**
                     * Creates a new SearchDomainsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchDomainsRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.ISearchDomainsRequest): google.cloud.domains.v1beta1.SearchDomainsRequest;

                    /**
                     * Encodes the specified SearchDomainsRequest message. Does not implicitly {@link google.cloud.domains.v1beta1.SearchDomainsRequest.verify|verify} messages.
                     * @param message SearchDomainsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.ISearchDomainsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchDomainsRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.SearchDomainsRequest.verify|verify} messages.
                     * @param message SearchDomainsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.ISearchDomainsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchDomainsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchDomainsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.SearchDomainsRequest;

                    /**
                     * Decodes a SearchDomainsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchDomainsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.SearchDomainsRequest;

                    /**
                     * Verifies a SearchDomainsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchDomainsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchDomainsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.SearchDomainsRequest;

                    /**
                     * Creates a plain object from a SearchDomainsRequest message. Also converts values to other types if specified.
                     * @param message SearchDomainsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.SearchDomainsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchDomainsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchDomainsResponse. */
                interface ISearchDomainsResponse {

                    /** SearchDomainsResponse registerParameters */
                    registerParameters?: (google.cloud.domains.v1beta1.IRegisterParameters[]|null);
                }

                /** Represents a SearchDomainsResponse. */
                class SearchDomainsResponse implements ISearchDomainsResponse {

                    /**
                     * Constructs a new SearchDomainsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.ISearchDomainsResponse);

                    /** SearchDomainsResponse registerParameters. */
                    public registerParameters: google.cloud.domains.v1beta1.IRegisterParameters[];

                    /**
                     * Creates a new SearchDomainsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchDomainsResponse instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.ISearchDomainsResponse): google.cloud.domains.v1beta1.SearchDomainsResponse;

                    /**
                     * Encodes the specified SearchDomainsResponse message. Does not implicitly {@link google.cloud.domains.v1beta1.SearchDomainsResponse.verify|verify} messages.
                     * @param message SearchDomainsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.ISearchDomainsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchDomainsResponse message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.SearchDomainsResponse.verify|verify} messages.
                     * @param message SearchDomainsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.ISearchDomainsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchDomainsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchDomainsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.SearchDomainsResponse;

                    /**
                     * Decodes a SearchDomainsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchDomainsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.SearchDomainsResponse;

                    /**
                     * Verifies a SearchDomainsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchDomainsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchDomainsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.SearchDomainsResponse;

                    /**
                     * Creates a plain object from a SearchDomainsResponse message. Also converts values to other types if specified.
                     * @param message SearchDomainsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.SearchDomainsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchDomainsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RetrieveRegisterParametersRequest. */
                interface IRetrieveRegisterParametersRequest {

                    /** RetrieveRegisterParametersRequest domainName */
                    domainName?: (string|null);

                    /** RetrieveRegisterParametersRequest location */
                    location?: (string|null);
                }

                /** Represents a RetrieveRegisterParametersRequest. */
                class RetrieveRegisterParametersRequest implements IRetrieveRegisterParametersRequest {

                    /**
                     * Constructs a new RetrieveRegisterParametersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IRetrieveRegisterParametersRequest);

                    /** RetrieveRegisterParametersRequest domainName. */
                    public domainName: string;

                    /** RetrieveRegisterParametersRequest location. */
                    public location: string;

                    /**
                     * Creates a new RetrieveRegisterParametersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetrieveRegisterParametersRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IRetrieveRegisterParametersRequest): google.cloud.domains.v1beta1.RetrieveRegisterParametersRequest;

                    /**
                     * Encodes the specified RetrieveRegisterParametersRequest message. Does not implicitly {@link google.cloud.domains.v1beta1.RetrieveRegisterParametersRequest.verify|verify} messages.
                     * @param message RetrieveRegisterParametersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IRetrieveRegisterParametersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetrieveRegisterParametersRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.RetrieveRegisterParametersRequest.verify|verify} messages.
                     * @param message RetrieveRegisterParametersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IRetrieveRegisterParametersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetrieveRegisterParametersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetrieveRegisterParametersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.RetrieveRegisterParametersRequest;

                    /**
                     * Decodes a RetrieveRegisterParametersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetrieveRegisterParametersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.RetrieveRegisterParametersRequest;

                    /**
                     * Verifies a RetrieveRegisterParametersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetrieveRegisterParametersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetrieveRegisterParametersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.RetrieveRegisterParametersRequest;

                    /**
                     * Creates a plain object from a RetrieveRegisterParametersRequest message. Also converts values to other types if specified.
                     * @param message RetrieveRegisterParametersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.RetrieveRegisterParametersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetrieveRegisterParametersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RetrieveRegisterParametersResponse. */
                interface IRetrieveRegisterParametersResponse {

                    /** RetrieveRegisterParametersResponse registerParameters */
                    registerParameters?: (google.cloud.domains.v1beta1.IRegisterParameters|null);
                }

                /** Represents a RetrieveRegisterParametersResponse. */
                class RetrieveRegisterParametersResponse implements IRetrieveRegisterParametersResponse {

                    /**
                     * Constructs a new RetrieveRegisterParametersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IRetrieveRegisterParametersResponse);

                    /** RetrieveRegisterParametersResponse registerParameters. */
                    public registerParameters?: (google.cloud.domains.v1beta1.IRegisterParameters|null);

                    /**
                     * Creates a new RetrieveRegisterParametersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetrieveRegisterParametersResponse instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IRetrieveRegisterParametersResponse): google.cloud.domains.v1beta1.RetrieveRegisterParametersResponse;

                    /**
                     * Encodes the specified RetrieveRegisterParametersResponse message. Does not implicitly {@link google.cloud.domains.v1beta1.RetrieveRegisterParametersResponse.verify|verify} messages.
                     * @param message RetrieveRegisterParametersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IRetrieveRegisterParametersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetrieveRegisterParametersResponse message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.RetrieveRegisterParametersResponse.verify|verify} messages.
                     * @param message RetrieveRegisterParametersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IRetrieveRegisterParametersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetrieveRegisterParametersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetrieveRegisterParametersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.RetrieveRegisterParametersResponse;

                    /**
                     * Decodes a RetrieveRegisterParametersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetrieveRegisterParametersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.RetrieveRegisterParametersResponse;

                    /**
                     * Verifies a RetrieveRegisterParametersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetrieveRegisterParametersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetrieveRegisterParametersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.RetrieveRegisterParametersResponse;

                    /**
                     * Creates a plain object from a RetrieveRegisterParametersResponse message. Also converts values to other types if specified.
                     * @param message RetrieveRegisterParametersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.RetrieveRegisterParametersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetrieveRegisterParametersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RegisterDomainRequest. */
                interface IRegisterDomainRequest {

                    /** RegisterDomainRequest parent */
                    parent?: (string|null);

                    /** RegisterDomainRequest registration */
                    registration?: (google.cloud.domains.v1beta1.IRegistration|null);

                    /** RegisterDomainRequest domainNotices */
                    domainNotices?: (google.cloud.domains.v1beta1.DomainNotice[]|null);

                    /** RegisterDomainRequest contactNotices */
                    contactNotices?: (google.cloud.domains.v1beta1.ContactNotice[]|null);

                    /** RegisterDomainRequest yearlyPrice */
                    yearlyPrice?: (google.type.IMoney|null);

                    /** RegisterDomainRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a RegisterDomainRequest. */
                class RegisterDomainRequest implements IRegisterDomainRequest {

                    /**
                     * Constructs a new RegisterDomainRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IRegisterDomainRequest);

                    /** RegisterDomainRequest parent. */
                    public parent: string;

                    /** RegisterDomainRequest registration. */
                    public registration?: (google.cloud.domains.v1beta1.IRegistration|null);

                    /** RegisterDomainRequest domainNotices. */
                    public domainNotices: google.cloud.domains.v1beta1.DomainNotice[];

                    /** RegisterDomainRequest contactNotices. */
                    public contactNotices: google.cloud.domains.v1beta1.ContactNotice[];

                    /** RegisterDomainRequest yearlyPrice. */
                    public yearlyPrice?: (google.type.IMoney|null);

                    /** RegisterDomainRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new RegisterDomainRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RegisterDomainRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IRegisterDomainRequest): google.cloud.domains.v1beta1.RegisterDomainRequest;

                    /**
                     * Encodes the specified RegisterDomainRequest message. Does not implicitly {@link google.cloud.domains.v1beta1.RegisterDomainRequest.verify|verify} messages.
                     * @param message RegisterDomainRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IRegisterDomainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RegisterDomainRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.RegisterDomainRequest.verify|verify} messages.
                     * @param message RegisterDomainRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IRegisterDomainRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RegisterDomainRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RegisterDomainRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.RegisterDomainRequest;

                    /**
                     * Decodes a RegisterDomainRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RegisterDomainRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.RegisterDomainRequest;

                    /**
                     * Verifies a RegisterDomainRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RegisterDomainRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RegisterDomainRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.RegisterDomainRequest;

                    /**
                     * Creates a plain object from a RegisterDomainRequest message. Also converts values to other types if specified.
                     * @param message RegisterDomainRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.RegisterDomainRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RegisterDomainRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRegistrationsRequest. */
                interface IListRegistrationsRequest {

                    /** ListRegistrationsRequest parent */
                    parent?: (string|null);

                    /** ListRegistrationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRegistrationsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRegistrationsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListRegistrationsRequest. */
                class ListRegistrationsRequest implements IListRegistrationsRequest {

                    /**
                     * Constructs a new ListRegistrationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IListRegistrationsRequest);

                    /** ListRegistrationsRequest parent. */
                    public parent: string;

                    /** ListRegistrationsRequest pageSize. */
                    public pageSize: number;

                    /** ListRegistrationsRequest pageToken. */
                    public pageToken: string;

                    /** ListRegistrationsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListRegistrationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRegistrationsRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IListRegistrationsRequest): google.cloud.domains.v1beta1.ListRegistrationsRequest;

                    /**
                     * Encodes the specified ListRegistrationsRequest message. Does not implicitly {@link google.cloud.domains.v1beta1.ListRegistrationsRequest.verify|verify} messages.
                     * @param message ListRegistrationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IListRegistrationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRegistrationsRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.ListRegistrationsRequest.verify|verify} messages.
                     * @param message ListRegistrationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IListRegistrationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRegistrationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRegistrationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.ListRegistrationsRequest;

                    /**
                     * Decodes a ListRegistrationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRegistrationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.ListRegistrationsRequest;

                    /**
                     * Verifies a ListRegistrationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRegistrationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRegistrationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.ListRegistrationsRequest;

                    /**
                     * Creates a plain object from a ListRegistrationsRequest message. Also converts values to other types if specified.
                     * @param message ListRegistrationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.ListRegistrationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRegistrationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRegistrationsResponse. */
                interface IListRegistrationsResponse {

                    /** ListRegistrationsResponse registrations */
                    registrations?: (google.cloud.domains.v1beta1.IRegistration[]|null);

                    /** ListRegistrationsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRegistrationsResponse. */
                class ListRegistrationsResponse implements IListRegistrationsResponse {

                    /**
                     * Constructs a new ListRegistrationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IListRegistrationsResponse);

                    /** ListRegistrationsResponse registrations. */
                    public registrations: google.cloud.domains.v1beta1.IRegistration[];

                    /** ListRegistrationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRegistrationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRegistrationsResponse instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IListRegistrationsResponse): google.cloud.domains.v1beta1.ListRegistrationsResponse;

                    /**
                     * Encodes the specified ListRegistrationsResponse message. Does not implicitly {@link google.cloud.domains.v1beta1.ListRegistrationsResponse.verify|verify} messages.
                     * @param message ListRegistrationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IListRegistrationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRegistrationsResponse message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.ListRegistrationsResponse.verify|verify} messages.
                     * @param message ListRegistrationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IListRegistrationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRegistrationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRegistrationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.ListRegistrationsResponse;

                    /**
                     * Decodes a ListRegistrationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRegistrationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.ListRegistrationsResponse;

                    /**
                     * Verifies a ListRegistrationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRegistrationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRegistrationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.ListRegistrationsResponse;

                    /**
                     * Creates a plain object from a ListRegistrationsResponse message. Also converts values to other types if specified.
                     * @param message ListRegistrationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.ListRegistrationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRegistrationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetRegistrationRequest. */
                interface IGetRegistrationRequest {

                    /** GetRegistrationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRegistrationRequest. */
                class GetRegistrationRequest implements IGetRegistrationRequest {

                    /**
                     * Constructs a new GetRegistrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IGetRegistrationRequest);

                    /** GetRegistrationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRegistrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRegistrationRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IGetRegistrationRequest): google.cloud.domains.v1beta1.GetRegistrationRequest;

                    /**
                     * Encodes the specified GetRegistrationRequest message. Does not implicitly {@link google.cloud.domains.v1beta1.GetRegistrationRequest.verify|verify} messages.
                     * @param message GetRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IGetRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRegistrationRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.GetRegistrationRequest.verify|verify} messages.
                     * @param message GetRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IGetRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRegistrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.GetRegistrationRequest;

                    /**
                     * Decodes a GetRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.GetRegistrationRequest;

                    /**
                     * Verifies a GetRegistrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRegistrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.GetRegistrationRequest;

                    /**
                     * Creates a plain object from a GetRegistrationRequest message. Also converts values to other types if specified.
                     * @param message GetRegistrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.GetRegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRegistrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateRegistrationRequest. */
                interface IUpdateRegistrationRequest {

                    /** UpdateRegistrationRequest registration */
                    registration?: (google.cloud.domains.v1beta1.IRegistration|null);

                    /** UpdateRegistrationRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateRegistrationRequest. */
                class UpdateRegistrationRequest implements IUpdateRegistrationRequest {

                    /**
                     * Constructs a new UpdateRegistrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IUpdateRegistrationRequest);

                    /** UpdateRegistrationRequest registration. */
                    public registration?: (google.cloud.domains.v1beta1.IRegistration|null);

                    /** UpdateRegistrationRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateRegistrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRegistrationRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IUpdateRegistrationRequest): google.cloud.domains.v1beta1.UpdateRegistrationRequest;

                    /**
                     * Encodes the specified UpdateRegistrationRequest message. Does not implicitly {@link google.cloud.domains.v1beta1.UpdateRegistrationRequest.verify|verify} messages.
                     * @param message UpdateRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IUpdateRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRegistrationRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.UpdateRegistrationRequest.verify|verify} messages.
                     * @param message UpdateRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IUpdateRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRegistrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.UpdateRegistrationRequest;

                    /**
                     * Decodes an UpdateRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.UpdateRegistrationRequest;

                    /**
                     * Verifies an UpdateRegistrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRegistrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.UpdateRegistrationRequest;

                    /**
                     * Creates a plain object from an UpdateRegistrationRequest message. Also converts values to other types if specified.
                     * @param message UpdateRegistrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.UpdateRegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRegistrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConfigureManagementSettingsRequest. */
                interface IConfigureManagementSettingsRequest {

                    /** ConfigureManagementSettingsRequest registration */
                    registration?: (string|null);

                    /** ConfigureManagementSettingsRequest managementSettings */
                    managementSettings?: (google.cloud.domains.v1beta1.IManagementSettings|null);

                    /** ConfigureManagementSettingsRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a ConfigureManagementSettingsRequest. */
                class ConfigureManagementSettingsRequest implements IConfigureManagementSettingsRequest {

                    /**
                     * Constructs a new ConfigureManagementSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IConfigureManagementSettingsRequest);

                    /** ConfigureManagementSettingsRequest registration. */
                    public registration: string;

                    /** ConfigureManagementSettingsRequest managementSettings. */
                    public managementSettings?: (google.cloud.domains.v1beta1.IManagementSettings|null);

                    /** ConfigureManagementSettingsRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new ConfigureManagementSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfigureManagementSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IConfigureManagementSettingsRequest): google.cloud.domains.v1beta1.ConfigureManagementSettingsRequest;

                    /**
                     * Encodes the specified ConfigureManagementSettingsRequest message. Does not implicitly {@link google.cloud.domains.v1beta1.ConfigureManagementSettingsRequest.verify|verify} messages.
                     * @param message ConfigureManagementSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IConfigureManagementSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfigureManagementSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.ConfigureManagementSettingsRequest.verify|verify} messages.
                     * @param message ConfigureManagementSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IConfigureManagementSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfigureManagementSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfigureManagementSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.ConfigureManagementSettingsRequest;

                    /**
                     * Decodes a ConfigureManagementSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfigureManagementSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.ConfigureManagementSettingsRequest;

                    /**
                     * Verifies a ConfigureManagementSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfigureManagementSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfigureManagementSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.ConfigureManagementSettingsRequest;

                    /**
                     * Creates a plain object from a ConfigureManagementSettingsRequest message. Also converts values to other types if specified.
                     * @param message ConfigureManagementSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.ConfigureManagementSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfigureManagementSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConfigureDnsSettingsRequest. */
                interface IConfigureDnsSettingsRequest {

                    /** ConfigureDnsSettingsRequest registration */
                    registration?: (string|null);

                    /** ConfigureDnsSettingsRequest dnsSettings */
                    dnsSettings?: (google.cloud.domains.v1beta1.IDnsSettings|null);

                    /** ConfigureDnsSettingsRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** ConfigureDnsSettingsRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a ConfigureDnsSettingsRequest. */
                class ConfigureDnsSettingsRequest implements IConfigureDnsSettingsRequest {

                    /**
                     * Constructs a new ConfigureDnsSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IConfigureDnsSettingsRequest);

                    /** ConfigureDnsSettingsRequest registration. */
                    public registration: string;

                    /** ConfigureDnsSettingsRequest dnsSettings. */
                    public dnsSettings?: (google.cloud.domains.v1beta1.IDnsSettings|null);

                    /** ConfigureDnsSettingsRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** ConfigureDnsSettingsRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new ConfigureDnsSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfigureDnsSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IConfigureDnsSettingsRequest): google.cloud.domains.v1beta1.ConfigureDnsSettingsRequest;

                    /**
                     * Encodes the specified ConfigureDnsSettingsRequest message. Does not implicitly {@link google.cloud.domains.v1beta1.ConfigureDnsSettingsRequest.verify|verify} messages.
                     * @param message ConfigureDnsSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IConfigureDnsSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfigureDnsSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.ConfigureDnsSettingsRequest.verify|verify} messages.
                     * @param message ConfigureDnsSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IConfigureDnsSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfigureDnsSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfigureDnsSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.ConfigureDnsSettingsRequest;

                    /**
                     * Decodes a ConfigureDnsSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfigureDnsSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.ConfigureDnsSettingsRequest;

                    /**
                     * Verifies a ConfigureDnsSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfigureDnsSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfigureDnsSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.ConfigureDnsSettingsRequest;

                    /**
                     * Creates a plain object from a ConfigureDnsSettingsRequest message. Also converts values to other types if specified.
                     * @param message ConfigureDnsSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.ConfigureDnsSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfigureDnsSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConfigureContactSettingsRequest. */
                interface IConfigureContactSettingsRequest {

                    /** ConfigureContactSettingsRequest registration */
                    registration?: (string|null);

                    /** ConfigureContactSettingsRequest contactSettings */
                    contactSettings?: (google.cloud.domains.v1beta1.IContactSettings|null);

                    /** ConfigureContactSettingsRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** ConfigureContactSettingsRequest contactNotices */
                    contactNotices?: (google.cloud.domains.v1beta1.ContactNotice[]|null);

                    /** ConfigureContactSettingsRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a ConfigureContactSettingsRequest. */
                class ConfigureContactSettingsRequest implements IConfigureContactSettingsRequest {

                    /**
                     * Constructs a new ConfigureContactSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IConfigureContactSettingsRequest);

                    /** ConfigureContactSettingsRequest registration. */
                    public registration: string;

                    /** ConfigureContactSettingsRequest contactSettings. */
                    public contactSettings?: (google.cloud.domains.v1beta1.IContactSettings|null);

                    /** ConfigureContactSettingsRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** ConfigureContactSettingsRequest contactNotices. */
                    public contactNotices: google.cloud.domains.v1beta1.ContactNotice[];

                    /** ConfigureContactSettingsRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new ConfigureContactSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfigureContactSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IConfigureContactSettingsRequest): google.cloud.domains.v1beta1.ConfigureContactSettingsRequest;

                    /**
                     * Encodes the specified ConfigureContactSettingsRequest message. Does not implicitly {@link google.cloud.domains.v1beta1.ConfigureContactSettingsRequest.verify|verify} messages.
                     * @param message ConfigureContactSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IConfigureContactSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfigureContactSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.ConfigureContactSettingsRequest.verify|verify} messages.
                     * @param message ConfigureContactSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IConfigureContactSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfigureContactSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfigureContactSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.ConfigureContactSettingsRequest;

                    /**
                     * Decodes a ConfigureContactSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfigureContactSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.ConfigureContactSettingsRequest;

                    /**
                     * Verifies a ConfigureContactSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfigureContactSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfigureContactSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.ConfigureContactSettingsRequest;

                    /**
                     * Creates a plain object from a ConfigureContactSettingsRequest message. Also converts values to other types if specified.
                     * @param message ConfigureContactSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.ConfigureContactSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfigureContactSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExportRegistrationRequest. */
                interface IExportRegistrationRequest {

                    /** ExportRegistrationRequest name */
                    name?: (string|null);
                }

                /** Represents an ExportRegistrationRequest. */
                class ExportRegistrationRequest implements IExportRegistrationRequest {

                    /**
                     * Constructs a new ExportRegistrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IExportRegistrationRequest);

                    /** ExportRegistrationRequest name. */
                    public name: string;

                    /**
                     * Creates a new ExportRegistrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportRegistrationRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IExportRegistrationRequest): google.cloud.domains.v1beta1.ExportRegistrationRequest;

                    /**
                     * Encodes the specified ExportRegistrationRequest message. Does not implicitly {@link google.cloud.domains.v1beta1.ExportRegistrationRequest.verify|verify} messages.
                     * @param message ExportRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IExportRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportRegistrationRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.ExportRegistrationRequest.verify|verify} messages.
                     * @param message ExportRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IExportRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportRegistrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.ExportRegistrationRequest;

                    /**
                     * Decodes an ExportRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.ExportRegistrationRequest;

                    /**
                     * Verifies an ExportRegistrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportRegistrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.ExportRegistrationRequest;

                    /**
                     * Creates a plain object from an ExportRegistrationRequest message. Also converts values to other types if specified.
                     * @param message ExportRegistrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.ExportRegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportRegistrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteRegistrationRequest. */
                interface IDeleteRegistrationRequest {

                    /** DeleteRegistrationRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteRegistrationRequest. */
                class DeleteRegistrationRequest implements IDeleteRegistrationRequest {

                    /**
                     * Constructs a new DeleteRegistrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IDeleteRegistrationRequest);

                    /** DeleteRegistrationRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteRegistrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRegistrationRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IDeleteRegistrationRequest): google.cloud.domains.v1beta1.DeleteRegistrationRequest;

                    /**
                     * Encodes the specified DeleteRegistrationRequest message. Does not implicitly {@link google.cloud.domains.v1beta1.DeleteRegistrationRequest.verify|verify} messages.
                     * @param message DeleteRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IDeleteRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRegistrationRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.DeleteRegistrationRequest.verify|verify} messages.
                     * @param message DeleteRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IDeleteRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRegistrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.DeleteRegistrationRequest;

                    /**
                     * Decodes a DeleteRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.DeleteRegistrationRequest;

                    /**
                     * Verifies a DeleteRegistrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRegistrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.DeleteRegistrationRequest;

                    /**
                     * Creates a plain object from a DeleteRegistrationRequest message. Also converts values to other types if specified.
                     * @param message DeleteRegistrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.DeleteRegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRegistrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RetrieveAuthorizationCodeRequest. */
                interface IRetrieveAuthorizationCodeRequest {

                    /** RetrieveAuthorizationCodeRequest registration */
                    registration?: (string|null);
                }

                /** Represents a RetrieveAuthorizationCodeRequest. */
                class RetrieveAuthorizationCodeRequest implements IRetrieveAuthorizationCodeRequest {

                    /**
                     * Constructs a new RetrieveAuthorizationCodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IRetrieveAuthorizationCodeRequest);

                    /** RetrieveAuthorizationCodeRequest registration. */
                    public registration: string;

                    /**
                     * Creates a new RetrieveAuthorizationCodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetrieveAuthorizationCodeRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IRetrieveAuthorizationCodeRequest): google.cloud.domains.v1beta1.RetrieveAuthorizationCodeRequest;

                    /**
                     * Encodes the specified RetrieveAuthorizationCodeRequest message. Does not implicitly {@link google.cloud.domains.v1beta1.RetrieveAuthorizationCodeRequest.verify|verify} messages.
                     * @param message RetrieveAuthorizationCodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IRetrieveAuthorizationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetrieveAuthorizationCodeRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.RetrieveAuthorizationCodeRequest.verify|verify} messages.
                     * @param message RetrieveAuthorizationCodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IRetrieveAuthorizationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetrieveAuthorizationCodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetrieveAuthorizationCodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.RetrieveAuthorizationCodeRequest;

                    /**
                     * Decodes a RetrieveAuthorizationCodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetrieveAuthorizationCodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.RetrieveAuthorizationCodeRequest;

                    /**
                     * Verifies a RetrieveAuthorizationCodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetrieveAuthorizationCodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetrieveAuthorizationCodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.RetrieveAuthorizationCodeRequest;

                    /**
                     * Creates a plain object from a RetrieveAuthorizationCodeRequest message. Also converts values to other types if specified.
                     * @param message RetrieveAuthorizationCodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.RetrieveAuthorizationCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetrieveAuthorizationCodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResetAuthorizationCodeRequest. */
                interface IResetAuthorizationCodeRequest {

                    /** ResetAuthorizationCodeRequest registration */
                    registration?: (string|null);
                }

                /** Represents a ResetAuthorizationCodeRequest. */
                class ResetAuthorizationCodeRequest implements IResetAuthorizationCodeRequest {

                    /**
                     * Constructs a new ResetAuthorizationCodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IResetAuthorizationCodeRequest);

                    /** ResetAuthorizationCodeRequest registration. */
                    public registration: string;

                    /**
                     * Creates a new ResetAuthorizationCodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResetAuthorizationCodeRequest instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IResetAuthorizationCodeRequest): google.cloud.domains.v1beta1.ResetAuthorizationCodeRequest;

                    /**
                     * Encodes the specified ResetAuthorizationCodeRequest message. Does not implicitly {@link google.cloud.domains.v1beta1.ResetAuthorizationCodeRequest.verify|verify} messages.
                     * @param message ResetAuthorizationCodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IResetAuthorizationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResetAuthorizationCodeRequest message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.ResetAuthorizationCodeRequest.verify|verify} messages.
                     * @param message ResetAuthorizationCodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IResetAuthorizationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResetAuthorizationCodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResetAuthorizationCodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.ResetAuthorizationCodeRequest;

                    /**
                     * Decodes a ResetAuthorizationCodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResetAuthorizationCodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.ResetAuthorizationCodeRequest;

                    /**
                     * Verifies a ResetAuthorizationCodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResetAuthorizationCodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResetAuthorizationCodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.ResetAuthorizationCodeRequest;

                    /**
                     * Creates a plain object from a ResetAuthorizationCodeRequest message. Also converts values to other types if specified.
                     * @param message ResetAuthorizationCodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.ResetAuthorizationCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResetAuthorizationCodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RegisterParameters. */
                interface IRegisterParameters {

                    /** RegisterParameters domainName */
                    domainName?: (string|null);

                    /** RegisterParameters availability */
                    availability?: (google.cloud.domains.v1beta1.RegisterParameters.Availability|keyof typeof google.cloud.domains.v1beta1.RegisterParameters.Availability|null);

                    /** RegisterParameters supportedPrivacy */
                    supportedPrivacy?: (google.cloud.domains.v1beta1.ContactPrivacy[]|null);

                    /** RegisterParameters domainNotices */
                    domainNotices?: (google.cloud.domains.v1beta1.DomainNotice[]|null);

                    /** RegisterParameters yearlyPrice */
                    yearlyPrice?: (google.type.IMoney|null);
                }

                /** Represents a RegisterParameters. */
                class RegisterParameters implements IRegisterParameters {

                    /**
                     * Constructs a new RegisterParameters.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IRegisterParameters);

                    /** RegisterParameters domainName. */
                    public domainName: string;

                    /** RegisterParameters availability. */
                    public availability: (google.cloud.domains.v1beta1.RegisterParameters.Availability|keyof typeof google.cloud.domains.v1beta1.RegisterParameters.Availability);

                    /** RegisterParameters supportedPrivacy. */
                    public supportedPrivacy: google.cloud.domains.v1beta1.ContactPrivacy[];

                    /** RegisterParameters domainNotices. */
                    public domainNotices: google.cloud.domains.v1beta1.DomainNotice[];

                    /** RegisterParameters yearlyPrice. */
                    public yearlyPrice?: (google.type.IMoney|null);

                    /**
                     * Creates a new RegisterParameters instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RegisterParameters instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IRegisterParameters): google.cloud.domains.v1beta1.RegisterParameters;

                    /**
                     * Encodes the specified RegisterParameters message. Does not implicitly {@link google.cloud.domains.v1beta1.RegisterParameters.verify|verify} messages.
                     * @param message RegisterParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IRegisterParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RegisterParameters message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.RegisterParameters.verify|verify} messages.
                     * @param message RegisterParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IRegisterParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RegisterParameters message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RegisterParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.RegisterParameters;

                    /**
                     * Decodes a RegisterParameters message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RegisterParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.RegisterParameters;

                    /**
                     * Verifies a RegisterParameters message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RegisterParameters message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RegisterParameters
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.RegisterParameters;

                    /**
                     * Creates a plain object from a RegisterParameters message. Also converts values to other types if specified.
                     * @param message RegisterParameters
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.RegisterParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RegisterParameters to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace RegisterParameters {

                    /** Availability enum. */
                    enum Availability {
                        AVAILABILITY_UNSPECIFIED = 0,
                        AVAILABLE = 1,
                        UNAVAILABLE = 2,
                        UNSUPPORTED = 3,
                        UNKNOWN = 4
                    }
                }

                /** Properties of an AuthorizationCode. */
                interface IAuthorizationCode {

                    /** AuthorizationCode code */
                    code?: (string|null);
                }

                /** Represents an AuthorizationCode. */
                class AuthorizationCode implements IAuthorizationCode {

                    /**
                     * Constructs a new AuthorizationCode.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IAuthorizationCode);

                    /** AuthorizationCode code. */
                    public code: string;

                    /**
                     * Creates a new AuthorizationCode instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuthorizationCode instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IAuthorizationCode): google.cloud.domains.v1beta1.AuthorizationCode;

                    /**
                     * Encodes the specified AuthorizationCode message. Does not implicitly {@link google.cloud.domains.v1beta1.AuthorizationCode.verify|verify} messages.
                     * @param message AuthorizationCode message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IAuthorizationCode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AuthorizationCode message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.AuthorizationCode.verify|verify} messages.
                     * @param message AuthorizationCode message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IAuthorizationCode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuthorizationCode message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuthorizationCode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.AuthorizationCode;

                    /**
                     * Decodes an AuthorizationCode message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AuthorizationCode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.AuthorizationCode;

                    /**
                     * Verifies an AuthorizationCode message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AuthorizationCode message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AuthorizationCode
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.AuthorizationCode;

                    /**
                     * Creates a plain object from an AuthorizationCode message. Also converts values to other types if specified.
                     * @param message AuthorizationCode
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.AuthorizationCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AuthorizationCode to JSON.
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

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.domains.v1beta1.IOperationMetadata);

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

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.domains.v1beta1.IOperationMetadata): google.cloud.domains.v1beta1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.domains.v1beta1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.domains.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.domains.v1beta1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.domains.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.domains.v1beta1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.domains.v1beta1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.domains.v1beta1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.domains.v1beta1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** ContactPrivacy enum. */
                enum ContactPrivacy {
                    CONTACT_PRIVACY_UNSPECIFIED = 0,
                    PUBLIC_CONTACT_DATA = 1,
                    PRIVATE_CONTACT_DATA = 2,
                    REDACTED_CONTACT_DATA = 3
                }

                /** DomainNotice enum. */
                enum DomainNotice {
                    DOMAIN_NOTICE_UNSPECIFIED = 0,
                    HSTS_PRELOADED = 1
                }

                /** ContactNotice enum. */
                enum ContactNotice {
                    CONTACT_NOTICE_UNSPECIFIED = 0,
                    PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT = 1
                }

                /** TransferLockState enum. */
                enum TransferLockState {
                    TRANSFER_LOCK_STATE_UNSPECIFIED = 0,
                    UNLOCKED = 1,
                    LOCKED = 2
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

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

    /** Namespace type. */
    namespace type {

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
    }
}
