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

    /** Namespace analytics. */
    namespace analytics {

        /** Namespace admin. */
        namespace admin {

            /** Namespace v1alpha. */
            namespace v1alpha {

                /** Represents an AnalyticsAdminService */
                class AnalyticsAdminService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AnalyticsAdminService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AnalyticsAdminService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AnalyticsAdminService;

                    /**
                     * Calls GetAccount.
                     * @param request GetAccountRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Account
                     */
                    public getAccount(request: google.analytics.admin.v1alpha.IGetAccountRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.GetAccountCallback): void;

                    /**
                     * Calls GetAccount.
                     * @param request GetAccountRequest message or plain object
                     * @returns Promise
                     */
                    public getAccount(request: google.analytics.admin.v1alpha.IGetAccountRequest): Promise<google.analytics.admin.v1alpha.Account>;

                    /**
                     * Calls ListAccounts.
                     * @param request ListAccountsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAccountsResponse
                     */
                    public listAccounts(request: google.analytics.admin.v1alpha.IListAccountsRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.ListAccountsCallback): void;

                    /**
                     * Calls ListAccounts.
                     * @param request ListAccountsRequest message or plain object
                     * @returns Promise
                     */
                    public listAccounts(request: google.analytics.admin.v1alpha.IListAccountsRequest): Promise<google.analytics.admin.v1alpha.ListAccountsResponse>;

                    /**
                     * Calls DeleteAccount.
                     * @param request DeleteAccountRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteAccount(request: google.analytics.admin.v1alpha.IDeleteAccountRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.DeleteAccountCallback): void;

                    /**
                     * Calls DeleteAccount.
                     * @param request DeleteAccountRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAccount(request: google.analytics.admin.v1alpha.IDeleteAccountRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls UpdateAccount.
                     * @param request UpdateAccountRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Account
                     */
                    public updateAccount(request: google.analytics.admin.v1alpha.IUpdateAccountRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.UpdateAccountCallback): void;

                    /**
                     * Calls UpdateAccount.
                     * @param request UpdateAccountRequest message or plain object
                     * @returns Promise
                     */
                    public updateAccount(request: google.analytics.admin.v1alpha.IUpdateAccountRequest): Promise<google.analytics.admin.v1alpha.Account>;

                    /**
                     * Calls ProvisionAccountTicket.
                     * @param request ProvisionAccountTicketRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ProvisionAccountTicketResponse
                     */
                    public provisionAccountTicket(request: google.analytics.admin.v1alpha.IProvisionAccountTicketRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.ProvisionAccountTicketCallback): void;

                    /**
                     * Calls ProvisionAccountTicket.
                     * @param request ProvisionAccountTicketRequest message or plain object
                     * @returns Promise
                     */
                    public provisionAccountTicket(request: google.analytics.admin.v1alpha.IProvisionAccountTicketRequest): Promise<google.analytics.admin.v1alpha.ProvisionAccountTicketResponse>;

                    /**
                     * Calls ListAccountSummaries.
                     * @param request ListAccountSummariesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAccountSummariesResponse
                     */
                    public listAccountSummaries(request: google.analytics.admin.v1alpha.IListAccountSummariesRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.ListAccountSummariesCallback): void;

                    /**
                     * Calls ListAccountSummaries.
                     * @param request ListAccountSummariesRequest message or plain object
                     * @returns Promise
                     */
                    public listAccountSummaries(request: google.analytics.admin.v1alpha.IListAccountSummariesRequest): Promise<google.analytics.admin.v1alpha.ListAccountSummariesResponse>;

                    /**
                     * Calls GetProperty.
                     * @param request GetPropertyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Property
                     */
                    public getProperty(request: google.analytics.admin.v1alpha.IGetPropertyRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.GetPropertyCallback): void;

                    /**
                     * Calls GetProperty.
                     * @param request GetPropertyRequest message or plain object
                     * @returns Promise
                     */
                    public getProperty(request: google.analytics.admin.v1alpha.IGetPropertyRequest): Promise<google.analytics.admin.v1alpha.Property>;

                    /**
                     * Calls ListProperties.
                     * @param request ListPropertiesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPropertiesResponse
                     */
                    public listProperties(request: google.analytics.admin.v1alpha.IListPropertiesRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.ListPropertiesCallback): void;

                    /**
                     * Calls ListProperties.
                     * @param request ListPropertiesRequest message or plain object
                     * @returns Promise
                     */
                    public listProperties(request: google.analytics.admin.v1alpha.IListPropertiesRequest): Promise<google.analytics.admin.v1alpha.ListPropertiesResponse>;

                    /**
                     * Calls CreateProperty.
                     * @param request CreatePropertyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Property
                     */
                    public createProperty(request: google.analytics.admin.v1alpha.ICreatePropertyRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.CreatePropertyCallback): void;

                    /**
                     * Calls CreateProperty.
                     * @param request CreatePropertyRequest message or plain object
                     * @returns Promise
                     */
                    public createProperty(request: google.analytics.admin.v1alpha.ICreatePropertyRequest): Promise<google.analytics.admin.v1alpha.Property>;

                    /**
                     * Calls DeleteProperty.
                     * @param request DeletePropertyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Property
                     */
                    public deleteProperty(request: google.analytics.admin.v1alpha.IDeletePropertyRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.DeletePropertyCallback): void;

                    /**
                     * Calls DeleteProperty.
                     * @param request DeletePropertyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteProperty(request: google.analytics.admin.v1alpha.IDeletePropertyRequest): Promise<google.analytics.admin.v1alpha.Property>;

                    /**
                     * Calls UpdateProperty.
                     * @param request UpdatePropertyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Property
                     */
                    public updateProperty(request: google.analytics.admin.v1alpha.IUpdatePropertyRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.UpdatePropertyCallback): void;

                    /**
                     * Calls UpdateProperty.
                     * @param request UpdatePropertyRequest message or plain object
                     * @returns Promise
                     */
                    public updateProperty(request: google.analytics.admin.v1alpha.IUpdatePropertyRequest): Promise<google.analytics.admin.v1alpha.Property>;

                    /**
                     * Calls GetUserLink.
                     * @param request GetUserLinkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UserLink
                     */
                    public getUserLink(request: google.analytics.admin.v1alpha.IGetUserLinkRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.GetUserLinkCallback): void;

                    /**
                     * Calls GetUserLink.
                     * @param request GetUserLinkRequest message or plain object
                     * @returns Promise
                     */
                    public getUserLink(request: google.analytics.admin.v1alpha.IGetUserLinkRequest): Promise<google.analytics.admin.v1alpha.UserLink>;

                    /**
                     * Calls BatchGetUserLinks.
                     * @param request BatchGetUserLinksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchGetUserLinksResponse
                     */
                    public batchGetUserLinks(request: google.analytics.admin.v1alpha.IBatchGetUserLinksRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.BatchGetUserLinksCallback): void;

                    /**
                     * Calls BatchGetUserLinks.
                     * @param request BatchGetUserLinksRequest message or plain object
                     * @returns Promise
                     */
                    public batchGetUserLinks(request: google.analytics.admin.v1alpha.IBatchGetUserLinksRequest): Promise<google.analytics.admin.v1alpha.BatchGetUserLinksResponse>;

                    /**
                     * Calls ListUserLinks.
                     * @param request ListUserLinksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListUserLinksResponse
                     */
                    public listUserLinks(request: google.analytics.admin.v1alpha.IListUserLinksRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.ListUserLinksCallback): void;

                    /**
                     * Calls ListUserLinks.
                     * @param request ListUserLinksRequest message or plain object
                     * @returns Promise
                     */
                    public listUserLinks(request: google.analytics.admin.v1alpha.IListUserLinksRequest): Promise<google.analytics.admin.v1alpha.ListUserLinksResponse>;

                    /**
                     * Calls AuditUserLinks.
                     * @param request AuditUserLinksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AuditUserLinksResponse
                     */
                    public auditUserLinks(request: google.analytics.admin.v1alpha.IAuditUserLinksRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.AuditUserLinksCallback): void;

                    /**
                     * Calls AuditUserLinks.
                     * @param request AuditUserLinksRequest message or plain object
                     * @returns Promise
                     */
                    public auditUserLinks(request: google.analytics.admin.v1alpha.IAuditUserLinksRequest): Promise<google.analytics.admin.v1alpha.AuditUserLinksResponse>;

                    /**
                     * Calls CreateUserLink.
                     * @param request CreateUserLinkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UserLink
                     */
                    public createUserLink(request: google.analytics.admin.v1alpha.ICreateUserLinkRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.CreateUserLinkCallback): void;

                    /**
                     * Calls CreateUserLink.
                     * @param request CreateUserLinkRequest message or plain object
                     * @returns Promise
                     */
                    public createUserLink(request: google.analytics.admin.v1alpha.ICreateUserLinkRequest): Promise<google.analytics.admin.v1alpha.UserLink>;

                    /**
                     * Calls BatchCreateUserLinks.
                     * @param request BatchCreateUserLinksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchCreateUserLinksResponse
                     */
                    public batchCreateUserLinks(request: google.analytics.admin.v1alpha.IBatchCreateUserLinksRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.BatchCreateUserLinksCallback): void;

                    /**
                     * Calls BatchCreateUserLinks.
                     * @param request BatchCreateUserLinksRequest message or plain object
                     * @returns Promise
                     */
                    public batchCreateUserLinks(request: google.analytics.admin.v1alpha.IBatchCreateUserLinksRequest): Promise<google.analytics.admin.v1alpha.BatchCreateUserLinksResponse>;

                    /**
                     * Calls UpdateUserLink.
                     * @param request UpdateUserLinkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UserLink
                     */
                    public updateUserLink(request: google.analytics.admin.v1alpha.IUpdateUserLinkRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.UpdateUserLinkCallback): void;

                    /**
                     * Calls UpdateUserLink.
                     * @param request UpdateUserLinkRequest message or plain object
                     * @returns Promise
                     */
                    public updateUserLink(request: google.analytics.admin.v1alpha.IUpdateUserLinkRequest): Promise<google.analytics.admin.v1alpha.UserLink>;

                    /**
                     * Calls BatchUpdateUserLinks.
                     * @param request BatchUpdateUserLinksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchUpdateUserLinksResponse
                     */
                    public batchUpdateUserLinks(request: google.analytics.admin.v1alpha.IBatchUpdateUserLinksRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.BatchUpdateUserLinksCallback): void;

                    /**
                     * Calls BatchUpdateUserLinks.
                     * @param request BatchUpdateUserLinksRequest message or plain object
                     * @returns Promise
                     */
                    public batchUpdateUserLinks(request: google.analytics.admin.v1alpha.IBatchUpdateUserLinksRequest): Promise<google.analytics.admin.v1alpha.BatchUpdateUserLinksResponse>;

                    /**
                     * Calls DeleteUserLink.
                     * @param request DeleteUserLinkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteUserLink(request: google.analytics.admin.v1alpha.IDeleteUserLinkRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.DeleteUserLinkCallback): void;

                    /**
                     * Calls DeleteUserLink.
                     * @param request DeleteUserLinkRequest message or plain object
                     * @returns Promise
                     */
                    public deleteUserLink(request: google.analytics.admin.v1alpha.IDeleteUserLinkRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls BatchDeleteUserLinks.
                     * @param request BatchDeleteUserLinksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public batchDeleteUserLinks(request: google.analytics.admin.v1alpha.IBatchDeleteUserLinksRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.BatchDeleteUserLinksCallback): void;

                    /**
                     * Calls BatchDeleteUserLinks.
                     * @param request BatchDeleteUserLinksRequest message or plain object
                     * @returns Promise
                     */
                    public batchDeleteUserLinks(request: google.analytics.admin.v1alpha.IBatchDeleteUserLinksRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetWebDataStream.
                     * @param request GetWebDataStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WebDataStream
                     */
                    public getWebDataStream(request: google.analytics.admin.v1alpha.IGetWebDataStreamRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.GetWebDataStreamCallback): void;

                    /**
                     * Calls GetWebDataStream.
                     * @param request GetWebDataStreamRequest message or plain object
                     * @returns Promise
                     */
                    public getWebDataStream(request: google.analytics.admin.v1alpha.IGetWebDataStreamRequest): Promise<google.analytics.admin.v1alpha.WebDataStream>;

                    /**
                     * Calls DeleteWebDataStream.
                     * @param request DeleteWebDataStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteWebDataStream(request: google.analytics.admin.v1alpha.IDeleteWebDataStreamRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.DeleteWebDataStreamCallback): void;

                    /**
                     * Calls DeleteWebDataStream.
                     * @param request DeleteWebDataStreamRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWebDataStream(request: google.analytics.admin.v1alpha.IDeleteWebDataStreamRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls UpdateWebDataStream.
                     * @param request UpdateWebDataStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WebDataStream
                     */
                    public updateWebDataStream(request: google.analytics.admin.v1alpha.IUpdateWebDataStreamRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.UpdateWebDataStreamCallback): void;

                    /**
                     * Calls UpdateWebDataStream.
                     * @param request UpdateWebDataStreamRequest message or plain object
                     * @returns Promise
                     */
                    public updateWebDataStream(request: google.analytics.admin.v1alpha.IUpdateWebDataStreamRequest): Promise<google.analytics.admin.v1alpha.WebDataStream>;

                    /**
                     * Calls CreateWebDataStream.
                     * @param request CreateWebDataStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WebDataStream
                     */
                    public createWebDataStream(request: google.analytics.admin.v1alpha.ICreateWebDataStreamRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.CreateWebDataStreamCallback): void;

                    /**
                     * Calls CreateWebDataStream.
                     * @param request CreateWebDataStreamRequest message or plain object
                     * @returns Promise
                     */
                    public createWebDataStream(request: google.analytics.admin.v1alpha.ICreateWebDataStreamRequest): Promise<google.analytics.admin.v1alpha.WebDataStream>;

                    /**
                     * Calls ListWebDataStreams.
                     * @param request ListWebDataStreamsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWebDataStreamsResponse
                     */
                    public listWebDataStreams(request: google.analytics.admin.v1alpha.IListWebDataStreamsRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.ListWebDataStreamsCallback): void;

                    /**
                     * Calls ListWebDataStreams.
                     * @param request ListWebDataStreamsRequest message or plain object
                     * @returns Promise
                     */
                    public listWebDataStreams(request: google.analytics.admin.v1alpha.IListWebDataStreamsRequest): Promise<google.analytics.admin.v1alpha.ListWebDataStreamsResponse>;

                    /**
                     * Calls GetIosAppDataStream.
                     * @param request GetIosAppDataStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IosAppDataStream
                     */
                    public getIosAppDataStream(request: google.analytics.admin.v1alpha.IGetIosAppDataStreamRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.GetIosAppDataStreamCallback): void;

                    /**
                     * Calls GetIosAppDataStream.
                     * @param request GetIosAppDataStreamRequest message or plain object
                     * @returns Promise
                     */
                    public getIosAppDataStream(request: google.analytics.admin.v1alpha.IGetIosAppDataStreamRequest): Promise<google.analytics.admin.v1alpha.IosAppDataStream>;

                    /**
                     * Calls DeleteIosAppDataStream.
                     * @param request DeleteIosAppDataStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteIosAppDataStream(request: google.analytics.admin.v1alpha.IDeleteIosAppDataStreamRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.DeleteIosAppDataStreamCallback): void;

                    /**
                     * Calls DeleteIosAppDataStream.
                     * @param request DeleteIosAppDataStreamRequest message or plain object
                     * @returns Promise
                     */
                    public deleteIosAppDataStream(request: google.analytics.admin.v1alpha.IDeleteIosAppDataStreamRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls UpdateIosAppDataStream.
                     * @param request UpdateIosAppDataStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IosAppDataStream
                     */
                    public updateIosAppDataStream(request: google.analytics.admin.v1alpha.IUpdateIosAppDataStreamRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.UpdateIosAppDataStreamCallback): void;

                    /**
                     * Calls UpdateIosAppDataStream.
                     * @param request UpdateIosAppDataStreamRequest message or plain object
                     * @returns Promise
                     */
                    public updateIosAppDataStream(request: google.analytics.admin.v1alpha.IUpdateIosAppDataStreamRequest): Promise<google.analytics.admin.v1alpha.IosAppDataStream>;

                    /**
                     * Calls ListIosAppDataStreams.
                     * @param request ListIosAppDataStreamsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListIosAppDataStreamsResponse
                     */
                    public listIosAppDataStreams(request: google.analytics.admin.v1alpha.IListIosAppDataStreamsRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.ListIosAppDataStreamsCallback): void;

                    /**
                     * Calls ListIosAppDataStreams.
                     * @param request ListIosAppDataStreamsRequest message or plain object
                     * @returns Promise
                     */
                    public listIosAppDataStreams(request: google.analytics.admin.v1alpha.IListIosAppDataStreamsRequest): Promise<google.analytics.admin.v1alpha.ListIosAppDataStreamsResponse>;

                    /**
                     * Calls GetAndroidAppDataStream.
                     * @param request GetAndroidAppDataStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AndroidAppDataStream
                     */
                    public getAndroidAppDataStream(request: google.analytics.admin.v1alpha.IGetAndroidAppDataStreamRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.GetAndroidAppDataStreamCallback): void;

                    /**
                     * Calls GetAndroidAppDataStream.
                     * @param request GetAndroidAppDataStreamRequest message or plain object
                     * @returns Promise
                     */
                    public getAndroidAppDataStream(request: google.analytics.admin.v1alpha.IGetAndroidAppDataStreamRequest): Promise<google.analytics.admin.v1alpha.AndroidAppDataStream>;

                    /**
                     * Calls DeleteAndroidAppDataStream.
                     * @param request DeleteAndroidAppDataStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteAndroidAppDataStream(request: google.analytics.admin.v1alpha.IDeleteAndroidAppDataStreamRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.DeleteAndroidAppDataStreamCallback): void;

                    /**
                     * Calls DeleteAndroidAppDataStream.
                     * @param request DeleteAndroidAppDataStreamRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAndroidAppDataStream(request: google.analytics.admin.v1alpha.IDeleteAndroidAppDataStreamRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls UpdateAndroidAppDataStream.
                     * @param request UpdateAndroidAppDataStreamRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AndroidAppDataStream
                     */
                    public updateAndroidAppDataStream(request: google.analytics.admin.v1alpha.IUpdateAndroidAppDataStreamRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.UpdateAndroidAppDataStreamCallback): void;

                    /**
                     * Calls UpdateAndroidAppDataStream.
                     * @param request UpdateAndroidAppDataStreamRequest message or plain object
                     * @returns Promise
                     */
                    public updateAndroidAppDataStream(request: google.analytics.admin.v1alpha.IUpdateAndroidAppDataStreamRequest): Promise<google.analytics.admin.v1alpha.AndroidAppDataStream>;

                    /**
                     * Calls ListAndroidAppDataStreams.
                     * @param request ListAndroidAppDataStreamsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAndroidAppDataStreamsResponse
                     */
                    public listAndroidAppDataStreams(request: google.analytics.admin.v1alpha.IListAndroidAppDataStreamsRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.ListAndroidAppDataStreamsCallback): void;

                    /**
                     * Calls ListAndroidAppDataStreams.
                     * @param request ListAndroidAppDataStreamsRequest message or plain object
                     * @returns Promise
                     */
                    public listAndroidAppDataStreams(request: google.analytics.admin.v1alpha.IListAndroidAppDataStreamsRequest): Promise<google.analytics.admin.v1alpha.ListAndroidAppDataStreamsResponse>;

                    /**
                     * Calls GetEnhancedMeasurementSettings.
                     * @param request GetEnhancedMeasurementSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EnhancedMeasurementSettings
                     */
                    public getEnhancedMeasurementSettings(request: google.analytics.admin.v1alpha.IGetEnhancedMeasurementSettingsRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.GetEnhancedMeasurementSettingsCallback): void;

                    /**
                     * Calls GetEnhancedMeasurementSettings.
                     * @param request GetEnhancedMeasurementSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public getEnhancedMeasurementSettings(request: google.analytics.admin.v1alpha.IGetEnhancedMeasurementSettingsRequest): Promise<google.analytics.admin.v1alpha.EnhancedMeasurementSettings>;

                    /**
                     * Calls UpdateEnhancedMeasurementSettings.
                     * @param request UpdateEnhancedMeasurementSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EnhancedMeasurementSettings
                     */
                    public updateEnhancedMeasurementSettings(request: google.analytics.admin.v1alpha.IUpdateEnhancedMeasurementSettingsRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.UpdateEnhancedMeasurementSettingsCallback): void;

                    /**
                     * Calls UpdateEnhancedMeasurementSettings.
                     * @param request UpdateEnhancedMeasurementSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public updateEnhancedMeasurementSettings(request: google.analytics.admin.v1alpha.IUpdateEnhancedMeasurementSettingsRequest): Promise<google.analytics.admin.v1alpha.EnhancedMeasurementSettings>;

                    /**
                     * Calls CreateFirebaseLink.
                     * @param request CreateFirebaseLinkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FirebaseLink
                     */
                    public createFirebaseLink(request: google.analytics.admin.v1alpha.ICreateFirebaseLinkRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.CreateFirebaseLinkCallback): void;

                    /**
                     * Calls CreateFirebaseLink.
                     * @param request CreateFirebaseLinkRequest message or plain object
                     * @returns Promise
                     */
                    public createFirebaseLink(request: google.analytics.admin.v1alpha.ICreateFirebaseLinkRequest): Promise<google.analytics.admin.v1alpha.FirebaseLink>;

                    /**
                     * Calls UpdateFirebaseLink.
                     * @param request UpdateFirebaseLinkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FirebaseLink
                     */
                    public updateFirebaseLink(request: google.analytics.admin.v1alpha.IUpdateFirebaseLinkRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.UpdateFirebaseLinkCallback): void;

                    /**
                     * Calls UpdateFirebaseLink.
                     * @param request UpdateFirebaseLinkRequest message or plain object
                     * @returns Promise
                     */
                    public updateFirebaseLink(request: google.analytics.admin.v1alpha.IUpdateFirebaseLinkRequest): Promise<google.analytics.admin.v1alpha.FirebaseLink>;

                    /**
                     * Calls DeleteFirebaseLink.
                     * @param request DeleteFirebaseLinkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteFirebaseLink(request: google.analytics.admin.v1alpha.IDeleteFirebaseLinkRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.DeleteFirebaseLinkCallback): void;

                    /**
                     * Calls DeleteFirebaseLink.
                     * @param request DeleteFirebaseLinkRequest message or plain object
                     * @returns Promise
                     */
                    public deleteFirebaseLink(request: google.analytics.admin.v1alpha.IDeleteFirebaseLinkRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListFirebaseLinks.
                     * @param request ListFirebaseLinksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFirebaseLinksResponse
                     */
                    public listFirebaseLinks(request: google.analytics.admin.v1alpha.IListFirebaseLinksRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.ListFirebaseLinksCallback): void;

                    /**
                     * Calls ListFirebaseLinks.
                     * @param request ListFirebaseLinksRequest message or plain object
                     * @returns Promise
                     */
                    public listFirebaseLinks(request: google.analytics.admin.v1alpha.IListFirebaseLinksRequest): Promise<google.analytics.admin.v1alpha.ListFirebaseLinksResponse>;

                    /**
                     * Calls GetGlobalSiteTag.
                     * @param request GetGlobalSiteTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GlobalSiteTag
                     */
                    public getGlobalSiteTag(request: google.analytics.admin.v1alpha.IGetGlobalSiteTagRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.GetGlobalSiteTagCallback): void;

                    /**
                     * Calls GetGlobalSiteTag.
                     * @param request GetGlobalSiteTagRequest message or plain object
                     * @returns Promise
                     */
                    public getGlobalSiteTag(request: google.analytics.admin.v1alpha.IGetGlobalSiteTagRequest): Promise<google.analytics.admin.v1alpha.GlobalSiteTag>;

                    /**
                     * Calls CreateGoogleAdsLink.
                     * @param request CreateGoogleAdsLinkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GoogleAdsLink
                     */
                    public createGoogleAdsLink(request: google.analytics.admin.v1alpha.ICreateGoogleAdsLinkRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.CreateGoogleAdsLinkCallback): void;

                    /**
                     * Calls CreateGoogleAdsLink.
                     * @param request CreateGoogleAdsLinkRequest message or plain object
                     * @returns Promise
                     */
                    public createGoogleAdsLink(request: google.analytics.admin.v1alpha.ICreateGoogleAdsLinkRequest): Promise<google.analytics.admin.v1alpha.GoogleAdsLink>;

                    /**
                     * Calls UpdateGoogleAdsLink.
                     * @param request UpdateGoogleAdsLinkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GoogleAdsLink
                     */
                    public updateGoogleAdsLink(request: google.analytics.admin.v1alpha.IUpdateGoogleAdsLinkRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.UpdateGoogleAdsLinkCallback): void;

                    /**
                     * Calls UpdateGoogleAdsLink.
                     * @param request UpdateGoogleAdsLinkRequest message or plain object
                     * @returns Promise
                     */
                    public updateGoogleAdsLink(request: google.analytics.admin.v1alpha.IUpdateGoogleAdsLinkRequest): Promise<google.analytics.admin.v1alpha.GoogleAdsLink>;

                    /**
                     * Calls DeleteGoogleAdsLink.
                     * @param request DeleteGoogleAdsLinkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteGoogleAdsLink(request: google.analytics.admin.v1alpha.IDeleteGoogleAdsLinkRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.DeleteGoogleAdsLinkCallback): void;

                    /**
                     * Calls DeleteGoogleAdsLink.
                     * @param request DeleteGoogleAdsLinkRequest message or plain object
                     * @returns Promise
                     */
                    public deleteGoogleAdsLink(request: google.analytics.admin.v1alpha.IDeleteGoogleAdsLinkRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListGoogleAdsLinks.
                     * @param request ListGoogleAdsLinksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGoogleAdsLinksResponse
                     */
                    public listGoogleAdsLinks(request: google.analytics.admin.v1alpha.IListGoogleAdsLinksRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.ListGoogleAdsLinksCallback): void;

                    /**
                     * Calls ListGoogleAdsLinks.
                     * @param request ListGoogleAdsLinksRequest message or plain object
                     * @returns Promise
                     */
                    public listGoogleAdsLinks(request: google.analytics.admin.v1alpha.IListGoogleAdsLinksRequest): Promise<google.analytics.admin.v1alpha.ListGoogleAdsLinksResponse>;

                    /**
                     * Calls GetDataSharingSettings.
                     * @param request GetDataSharingSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DataSharingSettings
                     */
                    public getDataSharingSettings(request: google.analytics.admin.v1alpha.IGetDataSharingSettingsRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.GetDataSharingSettingsCallback): void;

                    /**
                     * Calls GetDataSharingSettings.
                     * @param request GetDataSharingSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public getDataSharingSettings(request: google.analytics.admin.v1alpha.IGetDataSharingSettingsRequest): Promise<google.analytics.admin.v1alpha.DataSharingSettings>;

                    /**
                     * Calls SearchChangeHistoryEvents.
                     * @param request SearchChangeHistoryEventsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchChangeHistoryEventsResponse
                     */
                    public searchChangeHistoryEvents(request: google.analytics.admin.v1alpha.ISearchChangeHistoryEventsRequest, callback: google.analytics.admin.v1alpha.AnalyticsAdminService.SearchChangeHistoryEventsCallback): void;

                    /**
                     * Calls SearchChangeHistoryEvents.
                     * @param request SearchChangeHistoryEventsRequest message or plain object
                     * @returns Promise
                     */
                    public searchChangeHistoryEvents(request: google.analytics.admin.v1alpha.ISearchChangeHistoryEventsRequest): Promise<google.analytics.admin.v1alpha.SearchChangeHistoryEventsResponse>;
                }

                namespace AnalyticsAdminService {

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#getAccount}.
                     * @param error Error, if any
                     * @param [response] Account
                     */
                    type GetAccountCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.Account) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#listAccounts}.
                     * @param error Error, if any
                     * @param [response] ListAccountsResponse
                     */
                    type ListAccountsCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.ListAccountsResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#deleteAccount}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteAccountCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#updateAccount}.
                     * @param error Error, if any
                     * @param [response] Account
                     */
                    type UpdateAccountCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.Account) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#provisionAccountTicket}.
                     * @param error Error, if any
                     * @param [response] ProvisionAccountTicketResponse
                     */
                    type ProvisionAccountTicketCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.ProvisionAccountTicketResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#listAccountSummaries}.
                     * @param error Error, if any
                     * @param [response] ListAccountSummariesResponse
                     */
                    type ListAccountSummariesCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.ListAccountSummariesResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#getProperty}.
                     * @param error Error, if any
                     * @param [response] Property
                     */
                    type GetPropertyCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.Property) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#listProperties}.
                     * @param error Error, if any
                     * @param [response] ListPropertiesResponse
                     */
                    type ListPropertiesCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.ListPropertiesResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#createProperty}.
                     * @param error Error, if any
                     * @param [response] Property
                     */
                    type CreatePropertyCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.Property) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#deleteProperty}.
                     * @param error Error, if any
                     * @param [response] Property
                     */
                    type DeletePropertyCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.Property) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#updateProperty}.
                     * @param error Error, if any
                     * @param [response] Property
                     */
                    type UpdatePropertyCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.Property) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#getUserLink}.
                     * @param error Error, if any
                     * @param [response] UserLink
                     */
                    type GetUserLinkCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.UserLink) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#batchGetUserLinks}.
                     * @param error Error, if any
                     * @param [response] BatchGetUserLinksResponse
                     */
                    type BatchGetUserLinksCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.BatchGetUserLinksResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#listUserLinks}.
                     * @param error Error, if any
                     * @param [response] ListUserLinksResponse
                     */
                    type ListUserLinksCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.ListUserLinksResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#auditUserLinks}.
                     * @param error Error, if any
                     * @param [response] AuditUserLinksResponse
                     */
                    type AuditUserLinksCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.AuditUserLinksResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#createUserLink}.
                     * @param error Error, if any
                     * @param [response] UserLink
                     */
                    type CreateUserLinkCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.UserLink) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#batchCreateUserLinks}.
                     * @param error Error, if any
                     * @param [response] BatchCreateUserLinksResponse
                     */
                    type BatchCreateUserLinksCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.BatchCreateUserLinksResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#updateUserLink}.
                     * @param error Error, if any
                     * @param [response] UserLink
                     */
                    type UpdateUserLinkCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.UserLink) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#batchUpdateUserLinks}.
                     * @param error Error, if any
                     * @param [response] BatchUpdateUserLinksResponse
                     */
                    type BatchUpdateUserLinksCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.BatchUpdateUserLinksResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#deleteUserLink}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteUserLinkCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#batchDeleteUserLinks}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type BatchDeleteUserLinksCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#getWebDataStream}.
                     * @param error Error, if any
                     * @param [response] WebDataStream
                     */
                    type GetWebDataStreamCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.WebDataStream) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#deleteWebDataStream}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteWebDataStreamCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#updateWebDataStream}.
                     * @param error Error, if any
                     * @param [response] WebDataStream
                     */
                    type UpdateWebDataStreamCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.WebDataStream) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#createWebDataStream}.
                     * @param error Error, if any
                     * @param [response] WebDataStream
                     */
                    type CreateWebDataStreamCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.WebDataStream) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#listWebDataStreams}.
                     * @param error Error, if any
                     * @param [response] ListWebDataStreamsResponse
                     */
                    type ListWebDataStreamsCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.ListWebDataStreamsResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#getIosAppDataStream}.
                     * @param error Error, if any
                     * @param [response] IosAppDataStream
                     */
                    type GetIosAppDataStreamCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.IosAppDataStream) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#deleteIosAppDataStream}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteIosAppDataStreamCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#updateIosAppDataStream}.
                     * @param error Error, if any
                     * @param [response] IosAppDataStream
                     */
                    type UpdateIosAppDataStreamCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.IosAppDataStream) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#listIosAppDataStreams}.
                     * @param error Error, if any
                     * @param [response] ListIosAppDataStreamsResponse
                     */
                    type ListIosAppDataStreamsCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.ListIosAppDataStreamsResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#getAndroidAppDataStream}.
                     * @param error Error, if any
                     * @param [response] AndroidAppDataStream
                     */
                    type GetAndroidAppDataStreamCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.AndroidAppDataStream) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#deleteAndroidAppDataStream}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteAndroidAppDataStreamCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#updateAndroidAppDataStream}.
                     * @param error Error, if any
                     * @param [response] AndroidAppDataStream
                     */
                    type UpdateAndroidAppDataStreamCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.AndroidAppDataStream) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#listAndroidAppDataStreams}.
                     * @param error Error, if any
                     * @param [response] ListAndroidAppDataStreamsResponse
                     */
                    type ListAndroidAppDataStreamsCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.ListAndroidAppDataStreamsResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#getEnhancedMeasurementSettings}.
                     * @param error Error, if any
                     * @param [response] EnhancedMeasurementSettings
                     */
                    type GetEnhancedMeasurementSettingsCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.EnhancedMeasurementSettings) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#updateEnhancedMeasurementSettings}.
                     * @param error Error, if any
                     * @param [response] EnhancedMeasurementSettings
                     */
                    type UpdateEnhancedMeasurementSettingsCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.EnhancedMeasurementSettings) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#createFirebaseLink}.
                     * @param error Error, if any
                     * @param [response] FirebaseLink
                     */
                    type CreateFirebaseLinkCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.FirebaseLink) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#updateFirebaseLink}.
                     * @param error Error, if any
                     * @param [response] FirebaseLink
                     */
                    type UpdateFirebaseLinkCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.FirebaseLink) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#deleteFirebaseLink}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteFirebaseLinkCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#listFirebaseLinks}.
                     * @param error Error, if any
                     * @param [response] ListFirebaseLinksResponse
                     */
                    type ListFirebaseLinksCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.ListFirebaseLinksResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#getGlobalSiteTag}.
                     * @param error Error, if any
                     * @param [response] GlobalSiteTag
                     */
                    type GetGlobalSiteTagCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.GlobalSiteTag) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#createGoogleAdsLink}.
                     * @param error Error, if any
                     * @param [response] GoogleAdsLink
                     */
                    type CreateGoogleAdsLinkCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.GoogleAdsLink) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#updateGoogleAdsLink}.
                     * @param error Error, if any
                     * @param [response] GoogleAdsLink
                     */
                    type UpdateGoogleAdsLinkCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.GoogleAdsLink) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#deleteGoogleAdsLink}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteGoogleAdsLinkCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#listGoogleAdsLinks}.
                     * @param error Error, if any
                     * @param [response] ListGoogleAdsLinksResponse
                     */
                    type ListGoogleAdsLinksCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.ListGoogleAdsLinksResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#getDataSharingSettings}.
                     * @param error Error, if any
                     * @param [response] DataSharingSettings
                     */
                    type GetDataSharingSettingsCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.DataSharingSettings) => void;

                    /**
                     * Callback as used by {@link google.analytics.admin.v1alpha.AnalyticsAdminService#searchChangeHistoryEvents}.
                     * @param error Error, if any
                     * @param [response] SearchChangeHistoryEventsResponse
                     */
                    type SearchChangeHistoryEventsCallback = (error: (Error|null), response?: google.analytics.admin.v1alpha.SearchChangeHistoryEventsResponse) => void;
                }

                /** Properties of a GetAccountRequest. */
                interface IGetAccountRequest {

                    /** GetAccountRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAccountRequest. */
                class GetAccountRequest implements IGetAccountRequest {

                    /**
                     * Constructs a new GetAccountRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IGetAccountRequest);

                    /** GetAccountRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAccountRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAccountRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IGetAccountRequest): google.analytics.admin.v1alpha.GetAccountRequest;

                    /**
                     * Encodes the specified GetAccountRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.GetAccountRequest.verify|verify} messages.
                     * @param message GetAccountRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IGetAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAccountRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.GetAccountRequest.verify|verify} messages.
                     * @param message GetAccountRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IGetAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAccountRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAccountRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.GetAccountRequest;

                    /**
                     * Decodes a GetAccountRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAccountRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.GetAccountRequest;

                    /**
                     * Verifies a GetAccountRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAccountRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAccountRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.GetAccountRequest;

                    /**
                     * Creates a plain object from a GetAccountRequest message. Also converts values to other types if specified.
                     * @param message GetAccountRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.GetAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAccountRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAccountsRequest. */
                interface IListAccountsRequest {

                    /** ListAccountsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAccountsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAccountsRequest showDeleted */
                    showDeleted?: (boolean|null);
                }

                /** Represents a ListAccountsRequest. */
                class ListAccountsRequest implements IListAccountsRequest {

                    /**
                     * Constructs a new ListAccountsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListAccountsRequest);

                    /** ListAccountsRequest pageSize. */
                    public pageSize: number;

                    /** ListAccountsRequest pageToken. */
                    public pageToken: string;

                    /** ListAccountsRequest showDeleted. */
                    public showDeleted: boolean;

                    /**
                     * Creates a new ListAccountsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAccountsRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListAccountsRequest): google.analytics.admin.v1alpha.ListAccountsRequest;

                    /**
                     * Encodes the specified ListAccountsRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.ListAccountsRequest.verify|verify} messages.
                     * @param message ListAccountsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListAccountsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAccountsRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListAccountsRequest.verify|verify} messages.
                     * @param message ListAccountsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListAccountsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAccountsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAccountsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListAccountsRequest;

                    /**
                     * Decodes a ListAccountsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAccountsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListAccountsRequest;

                    /**
                     * Verifies a ListAccountsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAccountsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAccountsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListAccountsRequest;

                    /**
                     * Creates a plain object from a ListAccountsRequest message. Also converts values to other types if specified.
                     * @param message ListAccountsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListAccountsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAccountsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAccountsResponse. */
                interface IListAccountsResponse {

                    /** ListAccountsResponse accounts */
                    accounts?: (google.analytics.admin.v1alpha.IAccount[]|null);

                    /** ListAccountsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAccountsResponse. */
                class ListAccountsResponse implements IListAccountsResponse {

                    /**
                     * Constructs a new ListAccountsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListAccountsResponse);

                    /** ListAccountsResponse accounts. */
                    public accounts: google.analytics.admin.v1alpha.IAccount[];

                    /** ListAccountsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAccountsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAccountsResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListAccountsResponse): google.analytics.admin.v1alpha.ListAccountsResponse;

                    /**
                     * Encodes the specified ListAccountsResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.ListAccountsResponse.verify|verify} messages.
                     * @param message ListAccountsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListAccountsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAccountsResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListAccountsResponse.verify|verify} messages.
                     * @param message ListAccountsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListAccountsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAccountsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAccountsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListAccountsResponse;

                    /**
                     * Decodes a ListAccountsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAccountsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListAccountsResponse;

                    /**
                     * Verifies a ListAccountsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAccountsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAccountsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListAccountsResponse;

                    /**
                     * Creates a plain object from a ListAccountsResponse message. Also converts values to other types if specified.
                     * @param message ListAccountsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListAccountsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAccountsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteAccountRequest. */
                interface IDeleteAccountRequest {

                    /** DeleteAccountRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAccountRequest. */
                class DeleteAccountRequest implements IDeleteAccountRequest {

                    /**
                     * Constructs a new DeleteAccountRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IDeleteAccountRequest);

                    /** DeleteAccountRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAccountRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAccountRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IDeleteAccountRequest): google.analytics.admin.v1alpha.DeleteAccountRequest;

                    /**
                     * Encodes the specified DeleteAccountRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteAccountRequest.verify|verify} messages.
                     * @param message DeleteAccountRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IDeleteAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAccountRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteAccountRequest.verify|verify} messages.
                     * @param message DeleteAccountRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IDeleteAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAccountRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAccountRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.DeleteAccountRequest;

                    /**
                     * Decodes a DeleteAccountRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAccountRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.DeleteAccountRequest;

                    /**
                     * Verifies a DeleteAccountRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAccountRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAccountRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.DeleteAccountRequest;

                    /**
                     * Creates a plain object from a DeleteAccountRequest message. Also converts values to other types if specified.
                     * @param message DeleteAccountRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.DeleteAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAccountRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateAccountRequest. */
                interface IUpdateAccountRequest {

                    /** UpdateAccountRequest account */
                    account?: (google.analytics.admin.v1alpha.IAccount|null);

                    /** UpdateAccountRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateAccountRequest. */
                class UpdateAccountRequest implements IUpdateAccountRequest {

                    /**
                     * Constructs a new UpdateAccountRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IUpdateAccountRequest);

                    /** UpdateAccountRequest account. */
                    public account?: (google.analytics.admin.v1alpha.IAccount|null);

                    /** UpdateAccountRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateAccountRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAccountRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IUpdateAccountRequest): google.analytics.admin.v1alpha.UpdateAccountRequest;

                    /**
                     * Encodes the specified UpdateAccountRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateAccountRequest.verify|verify} messages.
                     * @param message UpdateAccountRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IUpdateAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAccountRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateAccountRequest.verify|verify} messages.
                     * @param message UpdateAccountRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IUpdateAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAccountRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAccountRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.UpdateAccountRequest;

                    /**
                     * Decodes an UpdateAccountRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAccountRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.UpdateAccountRequest;

                    /**
                     * Verifies an UpdateAccountRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAccountRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAccountRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.UpdateAccountRequest;

                    /**
                     * Creates a plain object from an UpdateAccountRequest message. Also converts values to other types if specified.
                     * @param message UpdateAccountRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.UpdateAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAccountRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ProvisionAccountTicketRequest. */
                interface IProvisionAccountTicketRequest {

                    /** ProvisionAccountTicketRequest account */
                    account?: (google.analytics.admin.v1alpha.IAccount|null);

                    /** ProvisionAccountTicketRequest redirectUri */
                    redirectUri?: (string|null);
                }

                /** Represents a ProvisionAccountTicketRequest. */
                class ProvisionAccountTicketRequest implements IProvisionAccountTicketRequest {

                    /**
                     * Constructs a new ProvisionAccountTicketRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IProvisionAccountTicketRequest);

                    /** ProvisionAccountTicketRequest account. */
                    public account?: (google.analytics.admin.v1alpha.IAccount|null);

                    /** ProvisionAccountTicketRequest redirectUri. */
                    public redirectUri: string;

                    /**
                     * Creates a new ProvisionAccountTicketRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProvisionAccountTicketRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IProvisionAccountTicketRequest): google.analytics.admin.v1alpha.ProvisionAccountTicketRequest;

                    /**
                     * Encodes the specified ProvisionAccountTicketRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.ProvisionAccountTicketRequest.verify|verify} messages.
                     * @param message ProvisionAccountTicketRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IProvisionAccountTicketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProvisionAccountTicketRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ProvisionAccountTicketRequest.verify|verify} messages.
                     * @param message ProvisionAccountTicketRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IProvisionAccountTicketRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProvisionAccountTicketRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProvisionAccountTicketRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ProvisionAccountTicketRequest;

                    /**
                     * Decodes a ProvisionAccountTicketRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProvisionAccountTicketRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ProvisionAccountTicketRequest;

                    /**
                     * Verifies a ProvisionAccountTicketRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProvisionAccountTicketRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProvisionAccountTicketRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ProvisionAccountTicketRequest;

                    /**
                     * Creates a plain object from a ProvisionAccountTicketRequest message. Also converts values to other types if specified.
                     * @param message ProvisionAccountTicketRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ProvisionAccountTicketRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProvisionAccountTicketRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ProvisionAccountTicketResponse. */
                interface IProvisionAccountTicketResponse {

                    /** ProvisionAccountTicketResponse accountTicketId */
                    accountTicketId?: (string|null);
                }

                /** Represents a ProvisionAccountTicketResponse. */
                class ProvisionAccountTicketResponse implements IProvisionAccountTicketResponse {

                    /**
                     * Constructs a new ProvisionAccountTicketResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IProvisionAccountTicketResponse);

                    /** ProvisionAccountTicketResponse accountTicketId. */
                    public accountTicketId: string;

                    /**
                     * Creates a new ProvisionAccountTicketResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProvisionAccountTicketResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IProvisionAccountTicketResponse): google.analytics.admin.v1alpha.ProvisionAccountTicketResponse;

                    /**
                     * Encodes the specified ProvisionAccountTicketResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.ProvisionAccountTicketResponse.verify|verify} messages.
                     * @param message ProvisionAccountTicketResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IProvisionAccountTicketResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProvisionAccountTicketResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ProvisionAccountTicketResponse.verify|verify} messages.
                     * @param message ProvisionAccountTicketResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IProvisionAccountTicketResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProvisionAccountTicketResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProvisionAccountTicketResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ProvisionAccountTicketResponse;

                    /**
                     * Decodes a ProvisionAccountTicketResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProvisionAccountTicketResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ProvisionAccountTicketResponse;

                    /**
                     * Verifies a ProvisionAccountTicketResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProvisionAccountTicketResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProvisionAccountTicketResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ProvisionAccountTicketResponse;

                    /**
                     * Creates a plain object from a ProvisionAccountTicketResponse message. Also converts values to other types if specified.
                     * @param message ProvisionAccountTicketResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ProvisionAccountTicketResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProvisionAccountTicketResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetPropertyRequest. */
                interface IGetPropertyRequest {

                    /** GetPropertyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPropertyRequest. */
                class GetPropertyRequest implements IGetPropertyRequest {

                    /**
                     * Constructs a new GetPropertyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IGetPropertyRequest);

                    /** GetPropertyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPropertyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPropertyRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IGetPropertyRequest): google.analytics.admin.v1alpha.GetPropertyRequest;

                    /**
                     * Encodes the specified GetPropertyRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.GetPropertyRequest.verify|verify} messages.
                     * @param message GetPropertyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IGetPropertyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPropertyRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.GetPropertyRequest.verify|verify} messages.
                     * @param message GetPropertyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IGetPropertyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPropertyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPropertyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.GetPropertyRequest;

                    /**
                     * Decodes a GetPropertyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPropertyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.GetPropertyRequest;

                    /**
                     * Verifies a GetPropertyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPropertyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPropertyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.GetPropertyRequest;

                    /**
                     * Creates a plain object from a GetPropertyRequest message. Also converts values to other types if specified.
                     * @param message GetPropertyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.GetPropertyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPropertyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPropertiesRequest. */
                interface IListPropertiesRequest {

                    /** ListPropertiesRequest filter */
                    filter?: (string|null);

                    /** ListPropertiesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPropertiesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPropertiesRequest showDeleted */
                    showDeleted?: (boolean|null);
                }

                /** Represents a ListPropertiesRequest. */
                class ListPropertiesRequest implements IListPropertiesRequest {

                    /**
                     * Constructs a new ListPropertiesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListPropertiesRequest);

                    /** ListPropertiesRequest filter. */
                    public filter: string;

                    /** ListPropertiesRequest pageSize. */
                    public pageSize: number;

                    /** ListPropertiesRequest pageToken. */
                    public pageToken: string;

                    /** ListPropertiesRequest showDeleted. */
                    public showDeleted: boolean;

                    /**
                     * Creates a new ListPropertiesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPropertiesRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListPropertiesRequest): google.analytics.admin.v1alpha.ListPropertiesRequest;

                    /**
                     * Encodes the specified ListPropertiesRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.ListPropertiesRequest.verify|verify} messages.
                     * @param message ListPropertiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListPropertiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPropertiesRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListPropertiesRequest.verify|verify} messages.
                     * @param message ListPropertiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListPropertiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPropertiesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPropertiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListPropertiesRequest;

                    /**
                     * Decodes a ListPropertiesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPropertiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListPropertiesRequest;

                    /**
                     * Verifies a ListPropertiesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPropertiesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPropertiesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListPropertiesRequest;

                    /**
                     * Creates a plain object from a ListPropertiesRequest message. Also converts values to other types if specified.
                     * @param message ListPropertiesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListPropertiesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPropertiesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPropertiesResponse. */
                interface IListPropertiesResponse {

                    /** ListPropertiesResponse properties */
                    properties?: (google.analytics.admin.v1alpha.IProperty[]|null);

                    /** ListPropertiesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPropertiesResponse. */
                class ListPropertiesResponse implements IListPropertiesResponse {

                    /**
                     * Constructs a new ListPropertiesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListPropertiesResponse);

                    /** ListPropertiesResponse properties. */
                    public properties: google.analytics.admin.v1alpha.IProperty[];

                    /** ListPropertiesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPropertiesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPropertiesResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListPropertiesResponse): google.analytics.admin.v1alpha.ListPropertiesResponse;

                    /**
                     * Encodes the specified ListPropertiesResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.ListPropertiesResponse.verify|verify} messages.
                     * @param message ListPropertiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListPropertiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPropertiesResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListPropertiesResponse.verify|verify} messages.
                     * @param message ListPropertiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListPropertiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPropertiesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPropertiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListPropertiesResponse;

                    /**
                     * Decodes a ListPropertiesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPropertiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListPropertiesResponse;

                    /**
                     * Verifies a ListPropertiesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPropertiesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPropertiesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListPropertiesResponse;

                    /**
                     * Creates a plain object from a ListPropertiesResponse message. Also converts values to other types if specified.
                     * @param message ListPropertiesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListPropertiesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPropertiesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdatePropertyRequest. */
                interface IUpdatePropertyRequest {

                    /** UpdatePropertyRequest property */
                    property?: (google.analytics.admin.v1alpha.IProperty|null);

                    /** UpdatePropertyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdatePropertyRequest. */
                class UpdatePropertyRequest implements IUpdatePropertyRequest {

                    /**
                     * Constructs a new UpdatePropertyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IUpdatePropertyRequest);

                    /** UpdatePropertyRequest property. */
                    public property?: (google.analytics.admin.v1alpha.IProperty|null);

                    /** UpdatePropertyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdatePropertyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePropertyRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IUpdatePropertyRequest): google.analytics.admin.v1alpha.UpdatePropertyRequest;

                    /**
                     * Encodes the specified UpdatePropertyRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.UpdatePropertyRequest.verify|verify} messages.
                     * @param message UpdatePropertyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IUpdatePropertyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePropertyRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.UpdatePropertyRequest.verify|verify} messages.
                     * @param message UpdatePropertyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IUpdatePropertyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePropertyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePropertyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.UpdatePropertyRequest;

                    /**
                     * Decodes an UpdatePropertyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePropertyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.UpdatePropertyRequest;

                    /**
                     * Verifies an UpdatePropertyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePropertyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePropertyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.UpdatePropertyRequest;

                    /**
                     * Creates a plain object from an UpdatePropertyRequest message. Also converts values to other types if specified.
                     * @param message UpdatePropertyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.UpdatePropertyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePropertyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreatePropertyRequest. */
                interface ICreatePropertyRequest {

                    /** CreatePropertyRequest property */
                    property?: (google.analytics.admin.v1alpha.IProperty|null);
                }

                /** Represents a CreatePropertyRequest. */
                class CreatePropertyRequest implements ICreatePropertyRequest {

                    /**
                     * Constructs a new CreatePropertyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.ICreatePropertyRequest);

                    /** CreatePropertyRequest property. */
                    public property?: (google.analytics.admin.v1alpha.IProperty|null);

                    /**
                     * Creates a new CreatePropertyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePropertyRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.ICreatePropertyRequest): google.analytics.admin.v1alpha.CreatePropertyRequest;

                    /**
                     * Encodes the specified CreatePropertyRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.CreatePropertyRequest.verify|verify} messages.
                     * @param message CreatePropertyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.ICreatePropertyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePropertyRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.CreatePropertyRequest.verify|verify} messages.
                     * @param message CreatePropertyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.ICreatePropertyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePropertyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePropertyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.CreatePropertyRequest;

                    /**
                     * Decodes a CreatePropertyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePropertyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.CreatePropertyRequest;

                    /**
                     * Verifies a CreatePropertyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePropertyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePropertyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.CreatePropertyRequest;

                    /**
                     * Creates a plain object from a CreatePropertyRequest message. Also converts values to other types if specified.
                     * @param message CreatePropertyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.CreatePropertyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePropertyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeletePropertyRequest. */
                interface IDeletePropertyRequest {

                    /** DeletePropertyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeletePropertyRequest. */
                class DeletePropertyRequest implements IDeletePropertyRequest {

                    /**
                     * Constructs a new DeletePropertyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IDeletePropertyRequest);

                    /** DeletePropertyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeletePropertyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePropertyRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IDeletePropertyRequest): google.analytics.admin.v1alpha.DeletePropertyRequest;

                    /**
                     * Encodes the specified DeletePropertyRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.DeletePropertyRequest.verify|verify} messages.
                     * @param message DeletePropertyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IDeletePropertyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePropertyRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.DeletePropertyRequest.verify|verify} messages.
                     * @param message DeletePropertyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IDeletePropertyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePropertyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePropertyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.DeletePropertyRequest;

                    /**
                     * Decodes a DeletePropertyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePropertyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.DeletePropertyRequest;

                    /**
                     * Verifies a DeletePropertyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePropertyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePropertyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.DeletePropertyRequest;

                    /**
                     * Creates a plain object from a DeletePropertyRequest message. Also converts values to other types if specified.
                     * @param message DeletePropertyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.DeletePropertyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePropertyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetUserLinkRequest. */
                interface IGetUserLinkRequest {

                    /** GetUserLinkRequest name */
                    name?: (string|null);
                }

                /** Represents a GetUserLinkRequest. */
                class GetUserLinkRequest implements IGetUserLinkRequest {

                    /**
                     * Constructs a new GetUserLinkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IGetUserLinkRequest);

                    /** GetUserLinkRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetUserLinkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetUserLinkRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IGetUserLinkRequest): google.analytics.admin.v1alpha.GetUserLinkRequest;

                    /**
                     * Encodes the specified GetUserLinkRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.GetUserLinkRequest.verify|verify} messages.
                     * @param message GetUserLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IGetUserLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetUserLinkRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.GetUserLinkRequest.verify|verify} messages.
                     * @param message GetUserLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IGetUserLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetUserLinkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetUserLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.GetUserLinkRequest;

                    /**
                     * Decodes a GetUserLinkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetUserLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.GetUserLinkRequest;

                    /**
                     * Verifies a GetUserLinkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetUserLinkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetUserLinkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.GetUserLinkRequest;

                    /**
                     * Creates a plain object from a GetUserLinkRequest message. Also converts values to other types if specified.
                     * @param message GetUserLinkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.GetUserLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetUserLinkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchGetUserLinksRequest. */
                interface IBatchGetUserLinksRequest {

                    /** BatchGetUserLinksRequest parent */
                    parent?: (string|null);

                    /** BatchGetUserLinksRequest names */
                    names?: (string[]|null);
                }

                /** Represents a BatchGetUserLinksRequest. */
                class BatchGetUserLinksRequest implements IBatchGetUserLinksRequest {

                    /**
                     * Constructs a new BatchGetUserLinksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IBatchGetUserLinksRequest);

                    /** BatchGetUserLinksRequest parent. */
                    public parent: string;

                    /** BatchGetUserLinksRequest names. */
                    public names: string[];

                    /**
                     * Creates a new BatchGetUserLinksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchGetUserLinksRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IBatchGetUserLinksRequest): google.analytics.admin.v1alpha.BatchGetUserLinksRequest;

                    /**
                     * Encodes the specified BatchGetUserLinksRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.BatchGetUserLinksRequest.verify|verify} messages.
                     * @param message BatchGetUserLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IBatchGetUserLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchGetUserLinksRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.BatchGetUserLinksRequest.verify|verify} messages.
                     * @param message BatchGetUserLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IBatchGetUserLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchGetUserLinksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchGetUserLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.BatchGetUserLinksRequest;

                    /**
                     * Decodes a BatchGetUserLinksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchGetUserLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.BatchGetUserLinksRequest;

                    /**
                     * Verifies a BatchGetUserLinksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchGetUserLinksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchGetUserLinksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.BatchGetUserLinksRequest;

                    /**
                     * Creates a plain object from a BatchGetUserLinksRequest message. Also converts values to other types if specified.
                     * @param message BatchGetUserLinksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.BatchGetUserLinksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchGetUserLinksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchGetUserLinksResponse. */
                interface IBatchGetUserLinksResponse {

                    /** BatchGetUserLinksResponse userLinks */
                    userLinks?: (google.analytics.admin.v1alpha.IUserLink[]|null);
                }

                /** Represents a BatchGetUserLinksResponse. */
                class BatchGetUserLinksResponse implements IBatchGetUserLinksResponse {

                    /**
                     * Constructs a new BatchGetUserLinksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IBatchGetUserLinksResponse);

                    /** BatchGetUserLinksResponse userLinks. */
                    public userLinks: google.analytics.admin.v1alpha.IUserLink[];

                    /**
                     * Creates a new BatchGetUserLinksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchGetUserLinksResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IBatchGetUserLinksResponse): google.analytics.admin.v1alpha.BatchGetUserLinksResponse;

                    /**
                     * Encodes the specified BatchGetUserLinksResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.BatchGetUserLinksResponse.verify|verify} messages.
                     * @param message BatchGetUserLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IBatchGetUserLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchGetUserLinksResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.BatchGetUserLinksResponse.verify|verify} messages.
                     * @param message BatchGetUserLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IBatchGetUserLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchGetUserLinksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchGetUserLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.BatchGetUserLinksResponse;

                    /**
                     * Decodes a BatchGetUserLinksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchGetUserLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.BatchGetUserLinksResponse;

                    /**
                     * Verifies a BatchGetUserLinksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchGetUserLinksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchGetUserLinksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.BatchGetUserLinksResponse;

                    /**
                     * Creates a plain object from a BatchGetUserLinksResponse message. Also converts values to other types if specified.
                     * @param message BatchGetUserLinksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.BatchGetUserLinksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchGetUserLinksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListUserLinksRequest. */
                interface IListUserLinksRequest {

                    /** ListUserLinksRequest parent */
                    parent?: (string|null);

                    /** ListUserLinksRequest pageSize */
                    pageSize?: (number|null);

                    /** ListUserLinksRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListUserLinksRequest. */
                class ListUserLinksRequest implements IListUserLinksRequest {

                    /**
                     * Constructs a new ListUserLinksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListUserLinksRequest);

                    /** ListUserLinksRequest parent. */
                    public parent: string;

                    /** ListUserLinksRequest pageSize. */
                    public pageSize: number;

                    /** ListUserLinksRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListUserLinksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUserLinksRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListUserLinksRequest): google.analytics.admin.v1alpha.ListUserLinksRequest;

                    /**
                     * Encodes the specified ListUserLinksRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.ListUserLinksRequest.verify|verify} messages.
                     * @param message ListUserLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListUserLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUserLinksRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListUserLinksRequest.verify|verify} messages.
                     * @param message ListUserLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListUserLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUserLinksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUserLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListUserLinksRequest;

                    /**
                     * Decodes a ListUserLinksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUserLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListUserLinksRequest;

                    /**
                     * Verifies a ListUserLinksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUserLinksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUserLinksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListUserLinksRequest;

                    /**
                     * Creates a plain object from a ListUserLinksRequest message. Also converts values to other types if specified.
                     * @param message ListUserLinksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListUserLinksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUserLinksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListUserLinksResponse. */
                interface IListUserLinksResponse {

                    /** ListUserLinksResponse userLinks */
                    userLinks?: (google.analytics.admin.v1alpha.IUserLink[]|null);

                    /** ListUserLinksResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListUserLinksResponse. */
                class ListUserLinksResponse implements IListUserLinksResponse {

                    /**
                     * Constructs a new ListUserLinksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListUserLinksResponse);

                    /** ListUserLinksResponse userLinks. */
                    public userLinks: google.analytics.admin.v1alpha.IUserLink[];

                    /** ListUserLinksResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListUserLinksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUserLinksResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListUserLinksResponse): google.analytics.admin.v1alpha.ListUserLinksResponse;

                    /**
                     * Encodes the specified ListUserLinksResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.ListUserLinksResponse.verify|verify} messages.
                     * @param message ListUserLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListUserLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUserLinksResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListUserLinksResponse.verify|verify} messages.
                     * @param message ListUserLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListUserLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUserLinksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUserLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListUserLinksResponse;

                    /**
                     * Decodes a ListUserLinksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUserLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListUserLinksResponse;

                    /**
                     * Verifies a ListUserLinksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUserLinksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUserLinksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListUserLinksResponse;

                    /**
                     * Creates a plain object from a ListUserLinksResponse message. Also converts values to other types if specified.
                     * @param message ListUserLinksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListUserLinksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUserLinksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AuditUserLinksRequest. */
                interface IAuditUserLinksRequest {

                    /** AuditUserLinksRequest parent */
                    parent?: (string|null);

                    /** AuditUserLinksRequest pageSize */
                    pageSize?: (number|null);

                    /** AuditUserLinksRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents an AuditUserLinksRequest. */
                class AuditUserLinksRequest implements IAuditUserLinksRequest {

                    /**
                     * Constructs a new AuditUserLinksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IAuditUserLinksRequest);

                    /** AuditUserLinksRequest parent. */
                    public parent: string;

                    /** AuditUserLinksRequest pageSize. */
                    public pageSize: number;

                    /** AuditUserLinksRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new AuditUserLinksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuditUserLinksRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IAuditUserLinksRequest): google.analytics.admin.v1alpha.AuditUserLinksRequest;

                    /**
                     * Encodes the specified AuditUserLinksRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.AuditUserLinksRequest.verify|verify} messages.
                     * @param message AuditUserLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IAuditUserLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AuditUserLinksRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.AuditUserLinksRequest.verify|verify} messages.
                     * @param message AuditUserLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IAuditUserLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuditUserLinksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuditUserLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.AuditUserLinksRequest;

                    /**
                     * Decodes an AuditUserLinksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AuditUserLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.AuditUserLinksRequest;

                    /**
                     * Verifies an AuditUserLinksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AuditUserLinksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AuditUserLinksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.AuditUserLinksRequest;

                    /**
                     * Creates a plain object from an AuditUserLinksRequest message. Also converts values to other types if specified.
                     * @param message AuditUserLinksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.AuditUserLinksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AuditUserLinksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AuditUserLinksResponse. */
                interface IAuditUserLinksResponse {

                    /** AuditUserLinksResponse userLinks */
                    userLinks?: (google.analytics.admin.v1alpha.IAuditUserLink[]|null);

                    /** AuditUserLinksResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents an AuditUserLinksResponse. */
                class AuditUserLinksResponse implements IAuditUserLinksResponse {

                    /**
                     * Constructs a new AuditUserLinksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IAuditUserLinksResponse);

                    /** AuditUserLinksResponse userLinks. */
                    public userLinks: google.analytics.admin.v1alpha.IAuditUserLink[];

                    /** AuditUserLinksResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new AuditUserLinksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuditUserLinksResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IAuditUserLinksResponse): google.analytics.admin.v1alpha.AuditUserLinksResponse;

                    /**
                     * Encodes the specified AuditUserLinksResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.AuditUserLinksResponse.verify|verify} messages.
                     * @param message AuditUserLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IAuditUserLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AuditUserLinksResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.AuditUserLinksResponse.verify|verify} messages.
                     * @param message AuditUserLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IAuditUserLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuditUserLinksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuditUserLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.AuditUserLinksResponse;

                    /**
                     * Decodes an AuditUserLinksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AuditUserLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.AuditUserLinksResponse;

                    /**
                     * Verifies an AuditUserLinksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AuditUserLinksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AuditUserLinksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.AuditUserLinksResponse;

                    /**
                     * Creates a plain object from an AuditUserLinksResponse message. Also converts values to other types if specified.
                     * @param message AuditUserLinksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.AuditUserLinksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AuditUserLinksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateUserLinkRequest. */
                interface ICreateUserLinkRequest {

                    /** CreateUserLinkRequest parent */
                    parent?: (string|null);

                    /** CreateUserLinkRequest notifyNewUser */
                    notifyNewUser?: (boolean|null);

                    /** CreateUserLinkRequest userLink */
                    userLink?: (google.analytics.admin.v1alpha.IUserLink|null);
                }

                /** Represents a CreateUserLinkRequest. */
                class CreateUserLinkRequest implements ICreateUserLinkRequest {

                    /**
                     * Constructs a new CreateUserLinkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.ICreateUserLinkRequest);

                    /** CreateUserLinkRequest parent. */
                    public parent: string;

                    /** CreateUserLinkRequest notifyNewUser. */
                    public notifyNewUser: boolean;

                    /** CreateUserLinkRequest userLink. */
                    public userLink?: (google.analytics.admin.v1alpha.IUserLink|null);

                    /**
                     * Creates a new CreateUserLinkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateUserLinkRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.ICreateUserLinkRequest): google.analytics.admin.v1alpha.CreateUserLinkRequest;

                    /**
                     * Encodes the specified CreateUserLinkRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.CreateUserLinkRequest.verify|verify} messages.
                     * @param message CreateUserLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.ICreateUserLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateUserLinkRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.CreateUserLinkRequest.verify|verify} messages.
                     * @param message CreateUserLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.ICreateUserLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateUserLinkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateUserLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.CreateUserLinkRequest;

                    /**
                     * Decodes a CreateUserLinkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateUserLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.CreateUserLinkRequest;

                    /**
                     * Verifies a CreateUserLinkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateUserLinkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateUserLinkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.CreateUserLinkRequest;

                    /**
                     * Creates a plain object from a CreateUserLinkRequest message. Also converts values to other types if specified.
                     * @param message CreateUserLinkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.CreateUserLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateUserLinkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchCreateUserLinksRequest. */
                interface IBatchCreateUserLinksRequest {

                    /** BatchCreateUserLinksRequest parent */
                    parent?: (string|null);

                    /** BatchCreateUserLinksRequest notifyNewUsers */
                    notifyNewUsers?: (boolean|null);

                    /** BatchCreateUserLinksRequest requests */
                    requests?: (google.analytics.admin.v1alpha.ICreateUserLinkRequest[]|null);
                }

                /** Represents a BatchCreateUserLinksRequest. */
                class BatchCreateUserLinksRequest implements IBatchCreateUserLinksRequest {

                    /**
                     * Constructs a new BatchCreateUserLinksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IBatchCreateUserLinksRequest);

                    /** BatchCreateUserLinksRequest parent. */
                    public parent: string;

                    /** BatchCreateUserLinksRequest notifyNewUsers. */
                    public notifyNewUsers: boolean;

                    /** BatchCreateUserLinksRequest requests. */
                    public requests: google.analytics.admin.v1alpha.ICreateUserLinkRequest[];

                    /**
                     * Creates a new BatchCreateUserLinksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchCreateUserLinksRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IBatchCreateUserLinksRequest): google.analytics.admin.v1alpha.BatchCreateUserLinksRequest;

                    /**
                     * Encodes the specified BatchCreateUserLinksRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.BatchCreateUserLinksRequest.verify|verify} messages.
                     * @param message BatchCreateUserLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IBatchCreateUserLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchCreateUserLinksRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.BatchCreateUserLinksRequest.verify|verify} messages.
                     * @param message BatchCreateUserLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IBatchCreateUserLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchCreateUserLinksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchCreateUserLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.BatchCreateUserLinksRequest;

                    /**
                     * Decodes a BatchCreateUserLinksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchCreateUserLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.BatchCreateUserLinksRequest;

                    /**
                     * Verifies a BatchCreateUserLinksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchCreateUserLinksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchCreateUserLinksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.BatchCreateUserLinksRequest;

                    /**
                     * Creates a plain object from a BatchCreateUserLinksRequest message. Also converts values to other types if specified.
                     * @param message BatchCreateUserLinksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.BatchCreateUserLinksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchCreateUserLinksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchCreateUserLinksResponse. */
                interface IBatchCreateUserLinksResponse {

                    /** BatchCreateUserLinksResponse userLinks */
                    userLinks?: (google.analytics.admin.v1alpha.IUserLink[]|null);
                }

                /** Represents a BatchCreateUserLinksResponse. */
                class BatchCreateUserLinksResponse implements IBatchCreateUserLinksResponse {

                    /**
                     * Constructs a new BatchCreateUserLinksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IBatchCreateUserLinksResponse);

                    /** BatchCreateUserLinksResponse userLinks. */
                    public userLinks: google.analytics.admin.v1alpha.IUserLink[];

                    /**
                     * Creates a new BatchCreateUserLinksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchCreateUserLinksResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IBatchCreateUserLinksResponse): google.analytics.admin.v1alpha.BatchCreateUserLinksResponse;

                    /**
                     * Encodes the specified BatchCreateUserLinksResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.BatchCreateUserLinksResponse.verify|verify} messages.
                     * @param message BatchCreateUserLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IBatchCreateUserLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchCreateUserLinksResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.BatchCreateUserLinksResponse.verify|verify} messages.
                     * @param message BatchCreateUserLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IBatchCreateUserLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchCreateUserLinksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchCreateUserLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.BatchCreateUserLinksResponse;

                    /**
                     * Decodes a BatchCreateUserLinksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchCreateUserLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.BatchCreateUserLinksResponse;

                    /**
                     * Verifies a BatchCreateUserLinksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchCreateUserLinksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchCreateUserLinksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.BatchCreateUserLinksResponse;

                    /**
                     * Creates a plain object from a BatchCreateUserLinksResponse message. Also converts values to other types if specified.
                     * @param message BatchCreateUserLinksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.BatchCreateUserLinksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchCreateUserLinksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateUserLinkRequest. */
                interface IUpdateUserLinkRequest {

                    /** UpdateUserLinkRequest userLink */
                    userLink?: (google.analytics.admin.v1alpha.IUserLink|null);
                }

                /** Represents an UpdateUserLinkRequest. */
                class UpdateUserLinkRequest implements IUpdateUserLinkRequest {

                    /**
                     * Constructs a new UpdateUserLinkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IUpdateUserLinkRequest);

                    /** UpdateUserLinkRequest userLink. */
                    public userLink?: (google.analytics.admin.v1alpha.IUserLink|null);

                    /**
                     * Creates a new UpdateUserLinkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateUserLinkRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IUpdateUserLinkRequest): google.analytics.admin.v1alpha.UpdateUserLinkRequest;

                    /**
                     * Encodes the specified UpdateUserLinkRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateUserLinkRequest.verify|verify} messages.
                     * @param message UpdateUserLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IUpdateUserLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateUserLinkRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateUserLinkRequest.verify|verify} messages.
                     * @param message UpdateUserLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IUpdateUserLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateUserLinkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateUserLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.UpdateUserLinkRequest;

                    /**
                     * Decodes an UpdateUserLinkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateUserLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.UpdateUserLinkRequest;

                    /**
                     * Verifies an UpdateUserLinkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateUserLinkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateUserLinkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.UpdateUserLinkRequest;

                    /**
                     * Creates a plain object from an UpdateUserLinkRequest message. Also converts values to other types if specified.
                     * @param message UpdateUserLinkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.UpdateUserLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateUserLinkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchUpdateUserLinksRequest. */
                interface IBatchUpdateUserLinksRequest {

                    /** BatchUpdateUserLinksRequest parent */
                    parent?: (string|null);

                    /** BatchUpdateUserLinksRequest requests */
                    requests?: (google.analytics.admin.v1alpha.IUpdateUserLinkRequest[]|null);
                }

                /** Represents a BatchUpdateUserLinksRequest. */
                class BatchUpdateUserLinksRequest implements IBatchUpdateUserLinksRequest {

                    /**
                     * Constructs a new BatchUpdateUserLinksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IBatchUpdateUserLinksRequest);

                    /** BatchUpdateUserLinksRequest parent. */
                    public parent: string;

                    /** BatchUpdateUserLinksRequest requests. */
                    public requests: google.analytics.admin.v1alpha.IUpdateUserLinkRequest[];

                    /**
                     * Creates a new BatchUpdateUserLinksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchUpdateUserLinksRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IBatchUpdateUserLinksRequest): google.analytics.admin.v1alpha.BatchUpdateUserLinksRequest;

                    /**
                     * Encodes the specified BatchUpdateUserLinksRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.BatchUpdateUserLinksRequest.verify|verify} messages.
                     * @param message BatchUpdateUserLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IBatchUpdateUserLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchUpdateUserLinksRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.BatchUpdateUserLinksRequest.verify|verify} messages.
                     * @param message BatchUpdateUserLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IBatchUpdateUserLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchUpdateUserLinksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchUpdateUserLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.BatchUpdateUserLinksRequest;

                    /**
                     * Decodes a BatchUpdateUserLinksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchUpdateUserLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.BatchUpdateUserLinksRequest;

                    /**
                     * Verifies a BatchUpdateUserLinksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchUpdateUserLinksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchUpdateUserLinksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.BatchUpdateUserLinksRequest;

                    /**
                     * Creates a plain object from a BatchUpdateUserLinksRequest message. Also converts values to other types if specified.
                     * @param message BatchUpdateUserLinksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.BatchUpdateUserLinksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchUpdateUserLinksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchUpdateUserLinksResponse. */
                interface IBatchUpdateUserLinksResponse {

                    /** BatchUpdateUserLinksResponse userLinks */
                    userLinks?: (google.analytics.admin.v1alpha.IUserLink[]|null);
                }

                /** Represents a BatchUpdateUserLinksResponse. */
                class BatchUpdateUserLinksResponse implements IBatchUpdateUserLinksResponse {

                    /**
                     * Constructs a new BatchUpdateUserLinksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IBatchUpdateUserLinksResponse);

                    /** BatchUpdateUserLinksResponse userLinks. */
                    public userLinks: google.analytics.admin.v1alpha.IUserLink[];

                    /**
                     * Creates a new BatchUpdateUserLinksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchUpdateUserLinksResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IBatchUpdateUserLinksResponse): google.analytics.admin.v1alpha.BatchUpdateUserLinksResponse;

                    /**
                     * Encodes the specified BatchUpdateUserLinksResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.BatchUpdateUserLinksResponse.verify|verify} messages.
                     * @param message BatchUpdateUserLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IBatchUpdateUserLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchUpdateUserLinksResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.BatchUpdateUserLinksResponse.verify|verify} messages.
                     * @param message BatchUpdateUserLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IBatchUpdateUserLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchUpdateUserLinksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchUpdateUserLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.BatchUpdateUserLinksResponse;

                    /**
                     * Decodes a BatchUpdateUserLinksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchUpdateUserLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.BatchUpdateUserLinksResponse;

                    /**
                     * Verifies a BatchUpdateUserLinksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchUpdateUserLinksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchUpdateUserLinksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.BatchUpdateUserLinksResponse;

                    /**
                     * Creates a plain object from a BatchUpdateUserLinksResponse message. Also converts values to other types if specified.
                     * @param message BatchUpdateUserLinksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.BatchUpdateUserLinksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchUpdateUserLinksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteUserLinkRequest. */
                interface IDeleteUserLinkRequest {

                    /** DeleteUserLinkRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteUserLinkRequest. */
                class DeleteUserLinkRequest implements IDeleteUserLinkRequest {

                    /**
                     * Constructs a new DeleteUserLinkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IDeleteUserLinkRequest);

                    /** DeleteUserLinkRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteUserLinkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteUserLinkRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IDeleteUserLinkRequest): google.analytics.admin.v1alpha.DeleteUserLinkRequest;

                    /**
                     * Encodes the specified DeleteUserLinkRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteUserLinkRequest.verify|verify} messages.
                     * @param message DeleteUserLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IDeleteUserLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteUserLinkRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteUserLinkRequest.verify|verify} messages.
                     * @param message DeleteUserLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IDeleteUserLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteUserLinkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteUserLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.DeleteUserLinkRequest;

                    /**
                     * Decodes a DeleteUserLinkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteUserLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.DeleteUserLinkRequest;

                    /**
                     * Verifies a DeleteUserLinkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteUserLinkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteUserLinkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.DeleteUserLinkRequest;

                    /**
                     * Creates a plain object from a DeleteUserLinkRequest message. Also converts values to other types if specified.
                     * @param message DeleteUserLinkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.DeleteUserLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteUserLinkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchDeleteUserLinksRequest. */
                interface IBatchDeleteUserLinksRequest {

                    /** BatchDeleteUserLinksRequest parent */
                    parent?: (string|null);

                    /** BatchDeleteUserLinksRequest requests */
                    requests?: (google.analytics.admin.v1alpha.IDeleteUserLinkRequest[]|null);
                }

                /** Represents a BatchDeleteUserLinksRequest. */
                class BatchDeleteUserLinksRequest implements IBatchDeleteUserLinksRequest {

                    /**
                     * Constructs a new BatchDeleteUserLinksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IBatchDeleteUserLinksRequest);

                    /** BatchDeleteUserLinksRequest parent. */
                    public parent: string;

                    /** BatchDeleteUserLinksRequest requests. */
                    public requests: google.analytics.admin.v1alpha.IDeleteUserLinkRequest[];

                    /**
                     * Creates a new BatchDeleteUserLinksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchDeleteUserLinksRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IBatchDeleteUserLinksRequest): google.analytics.admin.v1alpha.BatchDeleteUserLinksRequest;

                    /**
                     * Encodes the specified BatchDeleteUserLinksRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.BatchDeleteUserLinksRequest.verify|verify} messages.
                     * @param message BatchDeleteUserLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IBatchDeleteUserLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchDeleteUserLinksRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.BatchDeleteUserLinksRequest.verify|verify} messages.
                     * @param message BatchDeleteUserLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IBatchDeleteUserLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchDeleteUserLinksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchDeleteUserLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.BatchDeleteUserLinksRequest;

                    /**
                     * Decodes a BatchDeleteUserLinksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchDeleteUserLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.BatchDeleteUserLinksRequest;

                    /**
                     * Verifies a BatchDeleteUserLinksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchDeleteUserLinksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchDeleteUserLinksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.BatchDeleteUserLinksRequest;

                    /**
                     * Creates a plain object from a BatchDeleteUserLinksRequest message. Also converts values to other types if specified.
                     * @param message BatchDeleteUserLinksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.BatchDeleteUserLinksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchDeleteUserLinksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetWebDataStreamRequest. */
                interface IGetWebDataStreamRequest {

                    /** GetWebDataStreamRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWebDataStreamRequest. */
                class GetWebDataStreamRequest implements IGetWebDataStreamRequest {

                    /**
                     * Constructs a new GetWebDataStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IGetWebDataStreamRequest);

                    /** GetWebDataStreamRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWebDataStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWebDataStreamRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IGetWebDataStreamRequest): google.analytics.admin.v1alpha.GetWebDataStreamRequest;

                    /**
                     * Encodes the specified GetWebDataStreamRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.GetWebDataStreamRequest.verify|verify} messages.
                     * @param message GetWebDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IGetWebDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWebDataStreamRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.GetWebDataStreamRequest.verify|verify} messages.
                     * @param message GetWebDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IGetWebDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWebDataStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWebDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.GetWebDataStreamRequest;

                    /**
                     * Decodes a GetWebDataStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWebDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.GetWebDataStreamRequest;

                    /**
                     * Verifies a GetWebDataStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWebDataStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWebDataStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.GetWebDataStreamRequest;

                    /**
                     * Creates a plain object from a GetWebDataStreamRequest message. Also converts values to other types if specified.
                     * @param message GetWebDataStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.GetWebDataStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWebDataStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteWebDataStreamRequest. */
                interface IDeleteWebDataStreamRequest {

                    /** DeleteWebDataStreamRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteWebDataStreamRequest. */
                class DeleteWebDataStreamRequest implements IDeleteWebDataStreamRequest {

                    /**
                     * Constructs a new DeleteWebDataStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IDeleteWebDataStreamRequest);

                    /** DeleteWebDataStreamRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteWebDataStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWebDataStreamRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IDeleteWebDataStreamRequest): google.analytics.admin.v1alpha.DeleteWebDataStreamRequest;

                    /**
                     * Encodes the specified DeleteWebDataStreamRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteWebDataStreamRequest.verify|verify} messages.
                     * @param message DeleteWebDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IDeleteWebDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWebDataStreamRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteWebDataStreamRequest.verify|verify} messages.
                     * @param message DeleteWebDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IDeleteWebDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWebDataStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWebDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.DeleteWebDataStreamRequest;

                    /**
                     * Decodes a DeleteWebDataStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWebDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.DeleteWebDataStreamRequest;

                    /**
                     * Verifies a DeleteWebDataStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWebDataStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWebDataStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.DeleteWebDataStreamRequest;

                    /**
                     * Creates a plain object from a DeleteWebDataStreamRequest message. Also converts values to other types if specified.
                     * @param message DeleteWebDataStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.DeleteWebDataStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWebDataStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateWebDataStreamRequest. */
                interface IUpdateWebDataStreamRequest {

                    /** UpdateWebDataStreamRequest webDataStream */
                    webDataStream?: (google.analytics.admin.v1alpha.IWebDataStream|null);

                    /** UpdateWebDataStreamRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateWebDataStreamRequest. */
                class UpdateWebDataStreamRequest implements IUpdateWebDataStreamRequest {

                    /**
                     * Constructs a new UpdateWebDataStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IUpdateWebDataStreamRequest);

                    /** UpdateWebDataStreamRequest webDataStream. */
                    public webDataStream?: (google.analytics.admin.v1alpha.IWebDataStream|null);

                    /** UpdateWebDataStreamRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateWebDataStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateWebDataStreamRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IUpdateWebDataStreamRequest): google.analytics.admin.v1alpha.UpdateWebDataStreamRequest;

                    /**
                     * Encodes the specified UpdateWebDataStreamRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateWebDataStreamRequest.verify|verify} messages.
                     * @param message UpdateWebDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IUpdateWebDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateWebDataStreamRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateWebDataStreamRequest.verify|verify} messages.
                     * @param message UpdateWebDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IUpdateWebDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateWebDataStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateWebDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.UpdateWebDataStreamRequest;

                    /**
                     * Decodes an UpdateWebDataStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateWebDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.UpdateWebDataStreamRequest;

                    /**
                     * Verifies an UpdateWebDataStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateWebDataStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateWebDataStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.UpdateWebDataStreamRequest;

                    /**
                     * Creates a plain object from an UpdateWebDataStreamRequest message. Also converts values to other types if specified.
                     * @param message UpdateWebDataStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.UpdateWebDataStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateWebDataStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateWebDataStreamRequest. */
                interface ICreateWebDataStreamRequest {

                    /** CreateWebDataStreamRequest webDataStream */
                    webDataStream?: (google.analytics.admin.v1alpha.IWebDataStream|null);

                    /** CreateWebDataStreamRequest parent */
                    parent?: (string|null);
                }

                /** Represents a CreateWebDataStreamRequest. */
                class CreateWebDataStreamRequest implements ICreateWebDataStreamRequest {

                    /**
                     * Constructs a new CreateWebDataStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.ICreateWebDataStreamRequest);

                    /** CreateWebDataStreamRequest webDataStream. */
                    public webDataStream?: (google.analytics.admin.v1alpha.IWebDataStream|null);

                    /** CreateWebDataStreamRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new CreateWebDataStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWebDataStreamRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.ICreateWebDataStreamRequest): google.analytics.admin.v1alpha.CreateWebDataStreamRequest;

                    /**
                     * Encodes the specified CreateWebDataStreamRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.CreateWebDataStreamRequest.verify|verify} messages.
                     * @param message CreateWebDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.ICreateWebDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWebDataStreamRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.CreateWebDataStreamRequest.verify|verify} messages.
                     * @param message CreateWebDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.ICreateWebDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWebDataStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWebDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.CreateWebDataStreamRequest;

                    /**
                     * Decodes a CreateWebDataStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWebDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.CreateWebDataStreamRequest;

                    /**
                     * Verifies a CreateWebDataStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWebDataStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWebDataStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.CreateWebDataStreamRequest;

                    /**
                     * Creates a plain object from a CreateWebDataStreamRequest message. Also converts values to other types if specified.
                     * @param message CreateWebDataStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.CreateWebDataStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWebDataStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListWebDataStreamsRequest. */
                interface IListWebDataStreamsRequest {

                    /** ListWebDataStreamsRequest parent */
                    parent?: (string|null);

                    /** ListWebDataStreamsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWebDataStreamsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListWebDataStreamsRequest. */
                class ListWebDataStreamsRequest implements IListWebDataStreamsRequest {

                    /**
                     * Constructs a new ListWebDataStreamsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListWebDataStreamsRequest);

                    /** ListWebDataStreamsRequest parent. */
                    public parent: string;

                    /** ListWebDataStreamsRequest pageSize. */
                    public pageSize: number;

                    /** ListWebDataStreamsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListWebDataStreamsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWebDataStreamsRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListWebDataStreamsRequest): google.analytics.admin.v1alpha.ListWebDataStreamsRequest;

                    /**
                     * Encodes the specified ListWebDataStreamsRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.ListWebDataStreamsRequest.verify|verify} messages.
                     * @param message ListWebDataStreamsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListWebDataStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWebDataStreamsRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListWebDataStreamsRequest.verify|verify} messages.
                     * @param message ListWebDataStreamsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListWebDataStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWebDataStreamsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWebDataStreamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListWebDataStreamsRequest;

                    /**
                     * Decodes a ListWebDataStreamsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWebDataStreamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListWebDataStreamsRequest;

                    /**
                     * Verifies a ListWebDataStreamsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWebDataStreamsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWebDataStreamsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListWebDataStreamsRequest;

                    /**
                     * Creates a plain object from a ListWebDataStreamsRequest message. Also converts values to other types if specified.
                     * @param message ListWebDataStreamsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListWebDataStreamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWebDataStreamsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListWebDataStreamsResponse. */
                interface IListWebDataStreamsResponse {

                    /** ListWebDataStreamsResponse webDataStreams */
                    webDataStreams?: (google.analytics.admin.v1alpha.IWebDataStream[]|null);

                    /** ListWebDataStreamsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListWebDataStreamsResponse. */
                class ListWebDataStreamsResponse implements IListWebDataStreamsResponse {

                    /**
                     * Constructs a new ListWebDataStreamsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListWebDataStreamsResponse);

                    /** ListWebDataStreamsResponse webDataStreams. */
                    public webDataStreams: google.analytics.admin.v1alpha.IWebDataStream[];

                    /** ListWebDataStreamsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListWebDataStreamsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWebDataStreamsResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListWebDataStreamsResponse): google.analytics.admin.v1alpha.ListWebDataStreamsResponse;

                    /**
                     * Encodes the specified ListWebDataStreamsResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.ListWebDataStreamsResponse.verify|verify} messages.
                     * @param message ListWebDataStreamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListWebDataStreamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWebDataStreamsResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListWebDataStreamsResponse.verify|verify} messages.
                     * @param message ListWebDataStreamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListWebDataStreamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWebDataStreamsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWebDataStreamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListWebDataStreamsResponse;

                    /**
                     * Decodes a ListWebDataStreamsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWebDataStreamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListWebDataStreamsResponse;

                    /**
                     * Verifies a ListWebDataStreamsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWebDataStreamsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWebDataStreamsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListWebDataStreamsResponse;

                    /**
                     * Creates a plain object from a ListWebDataStreamsResponse message. Also converts values to other types if specified.
                     * @param message ListWebDataStreamsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListWebDataStreamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWebDataStreamsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetIosAppDataStreamRequest. */
                interface IGetIosAppDataStreamRequest {

                    /** GetIosAppDataStreamRequest name */
                    name?: (string|null);
                }

                /** Represents a GetIosAppDataStreamRequest. */
                class GetIosAppDataStreamRequest implements IGetIosAppDataStreamRequest {

                    /**
                     * Constructs a new GetIosAppDataStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IGetIosAppDataStreamRequest);

                    /** GetIosAppDataStreamRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetIosAppDataStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetIosAppDataStreamRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IGetIosAppDataStreamRequest): google.analytics.admin.v1alpha.GetIosAppDataStreamRequest;

                    /**
                     * Encodes the specified GetIosAppDataStreamRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.GetIosAppDataStreamRequest.verify|verify} messages.
                     * @param message GetIosAppDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IGetIosAppDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetIosAppDataStreamRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.GetIosAppDataStreamRequest.verify|verify} messages.
                     * @param message GetIosAppDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IGetIosAppDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetIosAppDataStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetIosAppDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.GetIosAppDataStreamRequest;

                    /**
                     * Decodes a GetIosAppDataStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetIosAppDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.GetIosAppDataStreamRequest;

                    /**
                     * Verifies a GetIosAppDataStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetIosAppDataStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetIosAppDataStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.GetIosAppDataStreamRequest;

                    /**
                     * Creates a plain object from a GetIosAppDataStreamRequest message. Also converts values to other types if specified.
                     * @param message GetIosAppDataStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.GetIosAppDataStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetIosAppDataStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteIosAppDataStreamRequest. */
                interface IDeleteIosAppDataStreamRequest {

                    /** DeleteIosAppDataStreamRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteIosAppDataStreamRequest. */
                class DeleteIosAppDataStreamRequest implements IDeleteIosAppDataStreamRequest {

                    /**
                     * Constructs a new DeleteIosAppDataStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IDeleteIosAppDataStreamRequest);

                    /** DeleteIosAppDataStreamRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteIosAppDataStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteIosAppDataStreamRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IDeleteIosAppDataStreamRequest): google.analytics.admin.v1alpha.DeleteIosAppDataStreamRequest;

                    /**
                     * Encodes the specified DeleteIosAppDataStreamRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteIosAppDataStreamRequest.verify|verify} messages.
                     * @param message DeleteIosAppDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IDeleteIosAppDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteIosAppDataStreamRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteIosAppDataStreamRequest.verify|verify} messages.
                     * @param message DeleteIosAppDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IDeleteIosAppDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteIosAppDataStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteIosAppDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.DeleteIosAppDataStreamRequest;

                    /**
                     * Decodes a DeleteIosAppDataStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteIosAppDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.DeleteIosAppDataStreamRequest;

                    /**
                     * Verifies a DeleteIosAppDataStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteIosAppDataStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteIosAppDataStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.DeleteIosAppDataStreamRequest;

                    /**
                     * Creates a plain object from a DeleteIosAppDataStreamRequest message. Also converts values to other types if specified.
                     * @param message DeleteIosAppDataStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.DeleteIosAppDataStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteIosAppDataStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateIosAppDataStreamRequest. */
                interface IUpdateIosAppDataStreamRequest {

                    /** UpdateIosAppDataStreamRequest iosAppDataStream */
                    iosAppDataStream?: (google.analytics.admin.v1alpha.IIosAppDataStream|null);

                    /** UpdateIosAppDataStreamRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateIosAppDataStreamRequest. */
                class UpdateIosAppDataStreamRequest implements IUpdateIosAppDataStreamRequest {

                    /**
                     * Constructs a new UpdateIosAppDataStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IUpdateIosAppDataStreamRequest);

                    /** UpdateIosAppDataStreamRequest iosAppDataStream. */
                    public iosAppDataStream?: (google.analytics.admin.v1alpha.IIosAppDataStream|null);

                    /** UpdateIosAppDataStreamRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateIosAppDataStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateIosAppDataStreamRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IUpdateIosAppDataStreamRequest): google.analytics.admin.v1alpha.UpdateIosAppDataStreamRequest;

                    /**
                     * Encodes the specified UpdateIosAppDataStreamRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateIosAppDataStreamRequest.verify|verify} messages.
                     * @param message UpdateIosAppDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IUpdateIosAppDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateIosAppDataStreamRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateIosAppDataStreamRequest.verify|verify} messages.
                     * @param message UpdateIosAppDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IUpdateIosAppDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateIosAppDataStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateIosAppDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.UpdateIosAppDataStreamRequest;

                    /**
                     * Decodes an UpdateIosAppDataStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateIosAppDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.UpdateIosAppDataStreamRequest;

                    /**
                     * Verifies an UpdateIosAppDataStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateIosAppDataStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateIosAppDataStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.UpdateIosAppDataStreamRequest;

                    /**
                     * Creates a plain object from an UpdateIosAppDataStreamRequest message. Also converts values to other types if specified.
                     * @param message UpdateIosAppDataStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.UpdateIosAppDataStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateIosAppDataStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListIosAppDataStreamsRequest. */
                interface IListIosAppDataStreamsRequest {

                    /** ListIosAppDataStreamsRequest parent */
                    parent?: (string|null);

                    /** ListIosAppDataStreamsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListIosAppDataStreamsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListIosAppDataStreamsRequest. */
                class ListIosAppDataStreamsRequest implements IListIosAppDataStreamsRequest {

                    /**
                     * Constructs a new ListIosAppDataStreamsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListIosAppDataStreamsRequest);

                    /** ListIosAppDataStreamsRequest parent. */
                    public parent: string;

                    /** ListIosAppDataStreamsRequest pageSize. */
                    public pageSize: number;

                    /** ListIosAppDataStreamsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListIosAppDataStreamsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListIosAppDataStreamsRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListIosAppDataStreamsRequest): google.analytics.admin.v1alpha.ListIosAppDataStreamsRequest;

                    /**
                     * Encodes the specified ListIosAppDataStreamsRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.ListIosAppDataStreamsRequest.verify|verify} messages.
                     * @param message ListIosAppDataStreamsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListIosAppDataStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListIosAppDataStreamsRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListIosAppDataStreamsRequest.verify|verify} messages.
                     * @param message ListIosAppDataStreamsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListIosAppDataStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListIosAppDataStreamsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListIosAppDataStreamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListIosAppDataStreamsRequest;

                    /**
                     * Decodes a ListIosAppDataStreamsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListIosAppDataStreamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListIosAppDataStreamsRequest;

                    /**
                     * Verifies a ListIosAppDataStreamsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListIosAppDataStreamsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListIosAppDataStreamsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListIosAppDataStreamsRequest;

                    /**
                     * Creates a plain object from a ListIosAppDataStreamsRequest message. Also converts values to other types if specified.
                     * @param message ListIosAppDataStreamsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListIosAppDataStreamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListIosAppDataStreamsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListIosAppDataStreamsResponse. */
                interface IListIosAppDataStreamsResponse {

                    /** ListIosAppDataStreamsResponse iosAppDataStreams */
                    iosAppDataStreams?: (google.analytics.admin.v1alpha.IIosAppDataStream[]|null);

                    /** ListIosAppDataStreamsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListIosAppDataStreamsResponse. */
                class ListIosAppDataStreamsResponse implements IListIosAppDataStreamsResponse {

                    /**
                     * Constructs a new ListIosAppDataStreamsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListIosAppDataStreamsResponse);

                    /** ListIosAppDataStreamsResponse iosAppDataStreams. */
                    public iosAppDataStreams: google.analytics.admin.v1alpha.IIosAppDataStream[];

                    /** ListIosAppDataStreamsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListIosAppDataStreamsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListIosAppDataStreamsResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListIosAppDataStreamsResponse): google.analytics.admin.v1alpha.ListIosAppDataStreamsResponse;

                    /**
                     * Encodes the specified ListIosAppDataStreamsResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.ListIosAppDataStreamsResponse.verify|verify} messages.
                     * @param message ListIosAppDataStreamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListIosAppDataStreamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListIosAppDataStreamsResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListIosAppDataStreamsResponse.verify|verify} messages.
                     * @param message ListIosAppDataStreamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListIosAppDataStreamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListIosAppDataStreamsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListIosAppDataStreamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListIosAppDataStreamsResponse;

                    /**
                     * Decodes a ListIosAppDataStreamsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListIosAppDataStreamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListIosAppDataStreamsResponse;

                    /**
                     * Verifies a ListIosAppDataStreamsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListIosAppDataStreamsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListIosAppDataStreamsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListIosAppDataStreamsResponse;

                    /**
                     * Creates a plain object from a ListIosAppDataStreamsResponse message. Also converts values to other types if specified.
                     * @param message ListIosAppDataStreamsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListIosAppDataStreamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListIosAppDataStreamsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetAndroidAppDataStreamRequest. */
                interface IGetAndroidAppDataStreamRequest {

                    /** GetAndroidAppDataStreamRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAndroidAppDataStreamRequest. */
                class GetAndroidAppDataStreamRequest implements IGetAndroidAppDataStreamRequest {

                    /**
                     * Constructs a new GetAndroidAppDataStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IGetAndroidAppDataStreamRequest);

                    /** GetAndroidAppDataStreamRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAndroidAppDataStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAndroidAppDataStreamRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IGetAndroidAppDataStreamRequest): google.analytics.admin.v1alpha.GetAndroidAppDataStreamRequest;

                    /**
                     * Encodes the specified GetAndroidAppDataStreamRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.GetAndroidAppDataStreamRequest.verify|verify} messages.
                     * @param message GetAndroidAppDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IGetAndroidAppDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAndroidAppDataStreamRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.GetAndroidAppDataStreamRequest.verify|verify} messages.
                     * @param message GetAndroidAppDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IGetAndroidAppDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAndroidAppDataStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAndroidAppDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.GetAndroidAppDataStreamRequest;

                    /**
                     * Decodes a GetAndroidAppDataStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAndroidAppDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.GetAndroidAppDataStreamRequest;

                    /**
                     * Verifies a GetAndroidAppDataStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAndroidAppDataStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAndroidAppDataStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.GetAndroidAppDataStreamRequest;

                    /**
                     * Creates a plain object from a GetAndroidAppDataStreamRequest message. Also converts values to other types if specified.
                     * @param message GetAndroidAppDataStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.GetAndroidAppDataStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAndroidAppDataStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteAndroidAppDataStreamRequest. */
                interface IDeleteAndroidAppDataStreamRequest {

                    /** DeleteAndroidAppDataStreamRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAndroidAppDataStreamRequest. */
                class DeleteAndroidAppDataStreamRequest implements IDeleteAndroidAppDataStreamRequest {

                    /**
                     * Constructs a new DeleteAndroidAppDataStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IDeleteAndroidAppDataStreamRequest);

                    /** DeleteAndroidAppDataStreamRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAndroidAppDataStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAndroidAppDataStreamRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IDeleteAndroidAppDataStreamRequest): google.analytics.admin.v1alpha.DeleteAndroidAppDataStreamRequest;

                    /**
                     * Encodes the specified DeleteAndroidAppDataStreamRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteAndroidAppDataStreamRequest.verify|verify} messages.
                     * @param message DeleteAndroidAppDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IDeleteAndroidAppDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAndroidAppDataStreamRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteAndroidAppDataStreamRequest.verify|verify} messages.
                     * @param message DeleteAndroidAppDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IDeleteAndroidAppDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAndroidAppDataStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAndroidAppDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.DeleteAndroidAppDataStreamRequest;

                    /**
                     * Decodes a DeleteAndroidAppDataStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAndroidAppDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.DeleteAndroidAppDataStreamRequest;

                    /**
                     * Verifies a DeleteAndroidAppDataStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAndroidAppDataStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAndroidAppDataStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.DeleteAndroidAppDataStreamRequest;

                    /**
                     * Creates a plain object from a DeleteAndroidAppDataStreamRequest message. Also converts values to other types if specified.
                     * @param message DeleteAndroidAppDataStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.DeleteAndroidAppDataStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAndroidAppDataStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateAndroidAppDataStreamRequest. */
                interface IUpdateAndroidAppDataStreamRequest {

                    /** UpdateAndroidAppDataStreamRequest androidAppDataStream */
                    androidAppDataStream?: (google.analytics.admin.v1alpha.IAndroidAppDataStream|null);

                    /** UpdateAndroidAppDataStreamRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateAndroidAppDataStreamRequest. */
                class UpdateAndroidAppDataStreamRequest implements IUpdateAndroidAppDataStreamRequest {

                    /**
                     * Constructs a new UpdateAndroidAppDataStreamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IUpdateAndroidAppDataStreamRequest);

                    /** UpdateAndroidAppDataStreamRequest androidAppDataStream. */
                    public androidAppDataStream?: (google.analytics.admin.v1alpha.IAndroidAppDataStream|null);

                    /** UpdateAndroidAppDataStreamRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateAndroidAppDataStreamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAndroidAppDataStreamRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IUpdateAndroidAppDataStreamRequest): google.analytics.admin.v1alpha.UpdateAndroidAppDataStreamRequest;

                    /**
                     * Encodes the specified UpdateAndroidAppDataStreamRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateAndroidAppDataStreamRequest.verify|verify} messages.
                     * @param message UpdateAndroidAppDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IUpdateAndroidAppDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAndroidAppDataStreamRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateAndroidAppDataStreamRequest.verify|verify} messages.
                     * @param message UpdateAndroidAppDataStreamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IUpdateAndroidAppDataStreamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAndroidAppDataStreamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAndroidAppDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.UpdateAndroidAppDataStreamRequest;

                    /**
                     * Decodes an UpdateAndroidAppDataStreamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAndroidAppDataStreamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.UpdateAndroidAppDataStreamRequest;

                    /**
                     * Verifies an UpdateAndroidAppDataStreamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAndroidAppDataStreamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAndroidAppDataStreamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.UpdateAndroidAppDataStreamRequest;

                    /**
                     * Creates a plain object from an UpdateAndroidAppDataStreamRequest message. Also converts values to other types if specified.
                     * @param message UpdateAndroidAppDataStreamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.UpdateAndroidAppDataStreamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAndroidAppDataStreamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAndroidAppDataStreamsRequest. */
                interface IListAndroidAppDataStreamsRequest {

                    /** ListAndroidAppDataStreamsRequest parent */
                    parent?: (string|null);

                    /** ListAndroidAppDataStreamsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAndroidAppDataStreamsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAndroidAppDataStreamsRequest. */
                class ListAndroidAppDataStreamsRequest implements IListAndroidAppDataStreamsRequest {

                    /**
                     * Constructs a new ListAndroidAppDataStreamsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListAndroidAppDataStreamsRequest);

                    /** ListAndroidAppDataStreamsRequest parent. */
                    public parent: string;

                    /** ListAndroidAppDataStreamsRequest pageSize. */
                    public pageSize: number;

                    /** ListAndroidAppDataStreamsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAndroidAppDataStreamsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAndroidAppDataStreamsRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListAndroidAppDataStreamsRequest): google.analytics.admin.v1alpha.ListAndroidAppDataStreamsRequest;

                    /**
                     * Encodes the specified ListAndroidAppDataStreamsRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.ListAndroidAppDataStreamsRequest.verify|verify} messages.
                     * @param message ListAndroidAppDataStreamsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListAndroidAppDataStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAndroidAppDataStreamsRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListAndroidAppDataStreamsRequest.verify|verify} messages.
                     * @param message ListAndroidAppDataStreamsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListAndroidAppDataStreamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAndroidAppDataStreamsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAndroidAppDataStreamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListAndroidAppDataStreamsRequest;

                    /**
                     * Decodes a ListAndroidAppDataStreamsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAndroidAppDataStreamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListAndroidAppDataStreamsRequest;

                    /**
                     * Verifies a ListAndroidAppDataStreamsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAndroidAppDataStreamsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAndroidAppDataStreamsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListAndroidAppDataStreamsRequest;

                    /**
                     * Creates a plain object from a ListAndroidAppDataStreamsRequest message. Also converts values to other types if specified.
                     * @param message ListAndroidAppDataStreamsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListAndroidAppDataStreamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAndroidAppDataStreamsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAndroidAppDataStreamsResponse. */
                interface IListAndroidAppDataStreamsResponse {

                    /** ListAndroidAppDataStreamsResponse androidAppDataStreams */
                    androidAppDataStreams?: (google.analytics.admin.v1alpha.IAndroidAppDataStream[]|null);

                    /** ListAndroidAppDataStreamsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAndroidAppDataStreamsResponse. */
                class ListAndroidAppDataStreamsResponse implements IListAndroidAppDataStreamsResponse {

                    /**
                     * Constructs a new ListAndroidAppDataStreamsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListAndroidAppDataStreamsResponse);

                    /** ListAndroidAppDataStreamsResponse androidAppDataStreams. */
                    public androidAppDataStreams: google.analytics.admin.v1alpha.IAndroidAppDataStream[];

                    /** ListAndroidAppDataStreamsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAndroidAppDataStreamsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAndroidAppDataStreamsResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListAndroidAppDataStreamsResponse): google.analytics.admin.v1alpha.ListAndroidAppDataStreamsResponse;

                    /**
                     * Encodes the specified ListAndroidAppDataStreamsResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.ListAndroidAppDataStreamsResponse.verify|verify} messages.
                     * @param message ListAndroidAppDataStreamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListAndroidAppDataStreamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAndroidAppDataStreamsResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListAndroidAppDataStreamsResponse.verify|verify} messages.
                     * @param message ListAndroidAppDataStreamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListAndroidAppDataStreamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAndroidAppDataStreamsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAndroidAppDataStreamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListAndroidAppDataStreamsResponse;

                    /**
                     * Decodes a ListAndroidAppDataStreamsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAndroidAppDataStreamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListAndroidAppDataStreamsResponse;

                    /**
                     * Verifies a ListAndroidAppDataStreamsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAndroidAppDataStreamsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAndroidAppDataStreamsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListAndroidAppDataStreamsResponse;

                    /**
                     * Creates a plain object from a ListAndroidAppDataStreamsResponse message. Also converts values to other types if specified.
                     * @param message ListAndroidAppDataStreamsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListAndroidAppDataStreamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAndroidAppDataStreamsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetEnhancedMeasurementSettingsRequest. */
                interface IGetEnhancedMeasurementSettingsRequest {

                    /** GetEnhancedMeasurementSettingsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEnhancedMeasurementSettingsRequest. */
                class GetEnhancedMeasurementSettingsRequest implements IGetEnhancedMeasurementSettingsRequest {

                    /**
                     * Constructs a new GetEnhancedMeasurementSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IGetEnhancedMeasurementSettingsRequest);

                    /** GetEnhancedMeasurementSettingsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEnhancedMeasurementSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEnhancedMeasurementSettingsRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IGetEnhancedMeasurementSettingsRequest): google.analytics.admin.v1alpha.GetEnhancedMeasurementSettingsRequest;

                    /**
                     * Encodes the specified GetEnhancedMeasurementSettingsRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.GetEnhancedMeasurementSettingsRequest.verify|verify} messages.
                     * @param message GetEnhancedMeasurementSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IGetEnhancedMeasurementSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEnhancedMeasurementSettingsRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.GetEnhancedMeasurementSettingsRequest.verify|verify} messages.
                     * @param message GetEnhancedMeasurementSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IGetEnhancedMeasurementSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEnhancedMeasurementSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEnhancedMeasurementSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.GetEnhancedMeasurementSettingsRequest;

                    /**
                     * Decodes a GetEnhancedMeasurementSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEnhancedMeasurementSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.GetEnhancedMeasurementSettingsRequest;

                    /**
                     * Verifies a GetEnhancedMeasurementSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEnhancedMeasurementSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEnhancedMeasurementSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.GetEnhancedMeasurementSettingsRequest;

                    /**
                     * Creates a plain object from a GetEnhancedMeasurementSettingsRequest message. Also converts values to other types if specified.
                     * @param message GetEnhancedMeasurementSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.GetEnhancedMeasurementSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEnhancedMeasurementSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateEnhancedMeasurementSettingsRequest. */
                interface IUpdateEnhancedMeasurementSettingsRequest {

                    /** UpdateEnhancedMeasurementSettingsRequest enhancedMeasurementSettings */
                    enhancedMeasurementSettings?: (google.analytics.admin.v1alpha.IEnhancedMeasurementSettings|null);

                    /** UpdateEnhancedMeasurementSettingsRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateEnhancedMeasurementSettingsRequest. */
                class UpdateEnhancedMeasurementSettingsRequest implements IUpdateEnhancedMeasurementSettingsRequest {

                    /**
                     * Constructs a new UpdateEnhancedMeasurementSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IUpdateEnhancedMeasurementSettingsRequest);

                    /** UpdateEnhancedMeasurementSettingsRequest enhancedMeasurementSettings. */
                    public enhancedMeasurementSettings?: (google.analytics.admin.v1alpha.IEnhancedMeasurementSettings|null);

                    /** UpdateEnhancedMeasurementSettingsRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateEnhancedMeasurementSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateEnhancedMeasurementSettingsRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IUpdateEnhancedMeasurementSettingsRequest): google.analytics.admin.v1alpha.UpdateEnhancedMeasurementSettingsRequest;

                    /**
                     * Encodes the specified UpdateEnhancedMeasurementSettingsRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateEnhancedMeasurementSettingsRequest.verify|verify} messages.
                     * @param message UpdateEnhancedMeasurementSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IUpdateEnhancedMeasurementSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateEnhancedMeasurementSettingsRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateEnhancedMeasurementSettingsRequest.verify|verify} messages.
                     * @param message UpdateEnhancedMeasurementSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IUpdateEnhancedMeasurementSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateEnhancedMeasurementSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateEnhancedMeasurementSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.UpdateEnhancedMeasurementSettingsRequest;

                    /**
                     * Decodes an UpdateEnhancedMeasurementSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateEnhancedMeasurementSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.UpdateEnhancedMeasurementSettingsRequest;

                    /**
                     * Verifies an UpdateEnhancedMeasurementSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateEnhancedMeasurementSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateEnhancedMeasurementSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.UpdateEnhancedMeasurementSettingsRequest;

                    /**
                     * Creates a plain object from an UpdateEnhancedMeasurementSettingsRequest message. Also converts values to other types if specified.
                     * @param message UpdateEnhancedMeasurementSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.UpdateEnhancedMeasurementSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateEnhancedMeasurementSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateFirebaseLinkRequest. */
                interface ICreateFirebaseLinkRequest {

                    /** CreateFirebaseLinkRequest parent */
                    parent?: (string|null);

                    /** CreateFirebaseLinkRequest firebaseLink */
                    firebaseLink?: (google.analytics.admin.v1alpha.IFirebaseLink|null);
                }

                /** Represents a CreateFirebaseLinkRequest. */
                class CreateFirebaseLinkRequest implements ICreateFirebaseLinkRequest {

                    /**
                     * Constructs a new CreateFirebaseLinkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.ICreateFirebaseLinkRequest);

                    /** CreateFirebaseLinkRequest parent. */
                    public parent: string;

                    /** CreateFirebaseLinkRequest firebaseLink. */
                    public firebaseLink?: (google.analytics.admin.v1alpha.IFirebaseLink|null);

                    /**
                     * Creates a new CreateFirebaseLinkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateFirebaseLinkRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.ICreateFirebaseLinkRequest): google.analytics.admin.v1alpha.CreateFirebaseLinkRequest;

                    /**
                     * Encodes the specified CreateFirebaseLinkRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.CreateFirebaseLinkRequest.verify|verify} messages.
                     * @param message CreateFirebaseLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.ICreateFirebaseLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateFirebaseLinkRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.CreateFirebaseLinkRequest.verify|verify} messages.
                     * @param message CreateFirebaseLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.ICreateFirebaseLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateFirebaseLinkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateFirebaseLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.CreateFirebaseLinkRequest;

                    /**
                     * Decodes a CreateFirebaseLinkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateFirebaseLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.CreateFirebaseLinkRequest;

                    /**
                     * Verifies a CreateFirebaseLinkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateFirebaseLinkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateFirebaseLinkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.CreateFirebaseLinkRequest;

                    /**
                     * Creates a plain object from a CreateFirebaseLinkRequest message. Also converts values to other types if specified.
                     * @param message CreateFirebaseLinkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.CreateFirebaseLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateFirebaseLinkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateFirebaseLinkRequest. */
                interface IUpdateFirebaseLinkRequest {

                    /** UpdateFirebaseLinkRequest firebaseLink */
                    firebaseLink?: (google.analytics.admin.v1alpha.IFirebaseLink|null);

                    /** UpdateFirebaseLinkRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateFirebaseLinkRequest. */
                class UpdateFirebaseLinkRequest implements IUpdateFirebaseLinkRequest {

                    /**
                     * Constructs a new UpdateFirebaseLinkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IUpdateFirebaseLinkRequest);

                    /** UpdateFirebaseLinkRequest firebaseLink. */
                    public firebaseLink?: (google.analytics.admin.v1alpha.IFirebaseLink|null);

                    /** UpdateFirebaseLinkRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateFirebaseLinkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFirebaseLinkRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IUpdateFirebaseLinkRequest): google.analytics.admin.v1alpha.UpdateFirebaseLinkRequest;

                    /**
                     * Encodes the specified UpdateFirebaseLinkRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateFirebaseLinkRequest.verify|verify} messages.
                     * @param message UpdateFirebaseLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IUpdateFirebaseLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFirebaseLinkRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateFirebaseLinkRequest.verify|verify} messages.
                     * @param message UpdateFirebaseLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IUpdateFirebaseLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFirebaseLinkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFirebaseLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.UpdateFirebaseLinkRequest;

                    /**
                     * Decodes an UpdateFirebaseLinkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFirebaseLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.UpdateFirebaseLinkRequest;

                    /**
                     * Verifies an UpdateFirebaseLinkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFirebaseLinkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFirebaseLinkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.UpdateFirebaseLinkRequest;

                    /**
                     * Creates a plain object from an UpdateFirebaseLinkRequest message. Also converts values to other types if specified.
                     * @param message UpdateFirebaseLinkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.UpdateFirebaseLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFirebaseLinkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteFirebaseLinkRequest. */
                interface IDeleteFirebaseLinkRequest {

                    /** DeleteFirebaseLinkRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteFirebaseLinkRequest. */
                class DeleteFirebaseLinkRequest implements IDeleteFirebaseLinkRequest {

                    /**
                     * Constructs a new DeleteFirebaseLinkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IDeleteFirebaseLinkRequest);

                    /** DeleteFirebaseLinkRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteFirebaseLinkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteFirebaseLinkRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IDeleteFirebaseLinkRequest): google.analytics.admin.v1alpha.DeleteFirebaseLinkRequest;

                    /**
                     * Encodes the specified DeleteFirebaseLinkRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteFirebaseLinkRequest.verify|verify} messages.
                     * @param message DeleteFirebaseLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IDeleteFirebaseLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteFirebaseLinkRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteFirebaseLinkRequest.verify|verify} messages.
                     * @param message DeleteFirebaseLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IDeleteFirebaseLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteFirebaseLinkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteFirebaseLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.DeleteFirebaseLinkRequest;

                    /**
                     * Decodes a DeleteFirebaseLinkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteFirebaseLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.DeleteFirebaseLinkRequest;

                    /**
                     * Verifies a DeleteFirebaseLinkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteFirebaseLinkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteFirebaseLinkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.DeleteFirebaseLinkRequest;

                    /**
                     * Creates a plain object from a DeleteFirebaseLinkRequest message. Also converts values to other types if specified.
                     * @param message DeleteFirebaseLinkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.DeleteFirebaseLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteFirebaseLinkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFirebaseLinksRequest. */
                interface IListFirebaseLinksRequest {

                    /** ListFirebaseLinksRequest parent */
                    parent?: (string|null);

                    /** ListFirebaseLinksRequest pageSize */
                    pageSize?: (number|null);

                    /** ListFirebaseLinksRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListFirebaseLinksRequest. */
                class ListFirebaseLinksRequest implements IListFirebaseLinksRequest {

                    /**
                     * Constructs a new ListFirebaseLinksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListFirebaseLinksRequest);

                    /** ListFirebaseLinksRequest parent. */
                    public parent: string;

                    /** ListFirebaseLinksRequest pageSize. */
                    public pageSize: number;

                    /** ListFirebaseLinksRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListFirebaseLinksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFirebaseLinksRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListFirebaseLinksRequest): google.analytics.admin.v1alpha.ListFirebaseLinksRequest;

                    /**
                     * Encodes the specified ListFirebaseLinksRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.ListFirebaseLinksRequest.verify|verify} messages.
                     * @param message ListFirebaseLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListFirebaseLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFirebaseLinksRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListFirebaseLinksRequest.verify|verify} messages.
                     * @param message ListFirebaseLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListFirebaseLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFirebaseLinksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFirebaseLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListFirebaseLinksRequest;

                    /**
                     * Decodes a ListFirebaseLinksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFirebaseLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListFirebaseLinksRequest;

                    /**
                     * Verifies a ListFirebaseLinksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFirebaseLinksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFirebaseLinksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListFirebaseLinksRequest;

                    /**
                     * Creates a plain object from a ListFirebaseLinksRequest message. Also converts values to other types if specified.
                     * @param message ListFirebaseLinksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListFirebaseLinksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFirebaseLinksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFirebaseLinksResponse. */
                interface IListFirebaseLinksResponse {

                    /** ListFirebaseLinksResponse firebaseLinks */
                    firebaseLinks?: (google.analytics.admin.v1alpha.IFirebaseLink[]|null);

                    /** ListFirebaseLinksResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListFirebaseLinksResponse. */
                class ListFirebaseLinksResponse implements IListFirebaseLinksResponse {

                    /**
                     * Constructs a new ListFirebaseLinksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListFirebaseLinksResponse);

                    /** ListFirebaseLinksResponse firebaseLinks. */
                    public firebaseLinks: google.analytics.admin.v1alpha.IFirebaseLink[];

                    /** ListFirebaseLinksResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListFirebaseLinksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFirebaseLinksResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListFirebaseLinksResponse): google.analytics.admin.v1alpha.ListFirebaseLinksResponse;

                    /**
                     * Encodes the specified ListFirebaseLinksResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.ListFirebaseLinksResponse.verify|verify} messages.
                     * @param message ListFirebaseLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListFirebaseLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFirebaseLinksResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListFirebaseLinksResponse.verify|verify} messages.
                     * @param message ListFirebaseLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListFirebaseLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFirebaseLinksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFirebaseLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListFirebaseLinksResponse;

                    /**
                     * Decodes a ListFirebaseLinksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFirebaseLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListFirebaseLinksResponse;

                    /**
                     * Verifies a ListFirebaseLinksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFirebaseLinksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFirebaseLinksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListFirebaseLinksResponse;

                    /**
                     * Creates a plain object from a ListFirebaseLinksResponse message. Also converts values to other types if specified.
                     * @param message ListFirebaseLinksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListFirebaseLinksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFirebaseLinksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetGlobalSiteTagRequest. */
                interface IGetGlobalSiteTagRequest {

                    /** GetGlobalSiteTagRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGlobalSiteTagRequest. */
                class GetGlobalSiteTagRequest implements IGetGlobalSiteTagRequest {

                    /**
                     * Constructs a new GetGlobalSiteTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IGetGlobalSiteTagRequest);

                    /** GetGlobalSiteTagRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGlobalSiteTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGlobalSiteTagRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IGetGlobalSiteTagRequest): google.analytics.admin.v1alpha.GetGlobalSiteTagRequest;

                    /**
                     * Encodes the specified GetGlobalSiteTagRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.GetGlobalSiteTagRequest.verify|verify} messages.
                     * @param message GetGlobalSiteTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IGetGlobalSiteTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGlobalSiteTagRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.GetGlobalSiteTagRequest.verify|verify} messages.
                     * @param message GetGlobalSiteTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IGetGlobalSiteTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGlobalSiteTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGlobalSiteTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.GetGlobalSiteTagRequest;

                    /**
                     * Decodes a GetGlobalSiteTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGlobalSiteTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.GetGlobalSiteTagRequest;

                    /**
                     * Verifies a GetGlobalSiteTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGlobalSiteTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGlobalSiteTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.GetGlobalSiteTagRequest;

                    /**
                     * Creates a plain object from a GetGlobalSiteTagRequest message. Also converts values to other types if specified.
                     * @param message GetGlobalSiteTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.GetGlobalSiteTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGlobalSiteTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateGoogleAdsLinkRequest. */
                interface ICreateGoogleAdsLinkRequest {

                    /** CreateGoogleAdsLinkRequest parent */
                    parent?: (string|null);

                    /** CreateGoogleAdsLinkRequest googleAdsLink */
                    googleAdsLink?: (google.analytics.admin.v1alpha.IGoogleAdsLink|null);
                }

                /** Represents a CreateGoogleAdsLinkRequest. */
                class CreateGoogleAdsLinkRequest implements ICreateGoogleAdsLinkRequest {

                    /**
                     * Constructs a new CreateGoogleAdsLinkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.ICreateGoogleAdsLinkRequest);

                    /** CreateGoogleAdsLinkRequest parent. */
                    public parent: string;

                    /** CreateGoogleAdsLinkRequest googleAdsLink. */
                    public googleAdsLink?: (google.analytics.admin.v1alpha.IGoogleAdsLink|null);

                    /**
                     * Creates a new CreateGoogleAdsLinkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGoogleAdsLinkRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.ICreateGoogleAdsLinkRequest): google.analytics.admin.v1alpha.CreateGoogleAdsLinkRequest;

                    /**
                     * Encodes the specified CreateGoogleAdsLinkRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.CreateGoogleAdsLinkRequest.verify|verify} messages.
                     * @param message CreateGoogleAdsLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.ICreateGoogleAdsLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGoogleAdsLinkRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.CreateGoogleAdsLinkRequest.verify|verify} messages.
                     * @param message CreateGoogleAdsLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.ICreateGoogleAdsLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGoogleAdsLinkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGoogleAdsLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.CreateGoogleAdsLinkRequest;

                    /**
                     * Decodes a CreateGoogleAdsLinkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGoogleAdsLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.CreateGoogleAdsLinkRequest;

                    /**
                     * Verifies a CreateGoogleAdsLinkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGoogleAdsLinkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGoogleAdsLinkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.CreateGoogleAdsLinkRequest;

                    /**
                     * Creates a plain object from a CreateGoogleAdsLinkRequest message. Also converts values to other types if specified.
                     * @param message CreateGoogleAdsLinkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.CreateGoogleAdsLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGoogleAdsLinkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateGoogleAdsLinkRequest. */
                interface IUpdateGoogleAdsLinkRequest {

                    /** UpdateGoogleAdsLinkRequest googleAdsLink */
                    googleAdsLink?: (google.analytics.admin.v1alpha.IGoogleAdsLink|null);

                    /** UpdateGoogleAdsLinkRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateGoogleAdsLinkRequest. */
                class UpdateGoogleAdsLinkRequest implements IUpdateGoogleAdsLinkRequest {

                    /**
                     * Constructs a new UpdateGoogleAdsLinkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IUpdateGoogleAdsLinkRequest);

                    /** UpdateGoogleAdsLinkRequest googleAdsLink. */
                    public googleAdsLink?: (google.analytics.admin.v1alpha.IGoogleAdsLink|null);

                    /** UpdateGoogleAdsLinkRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateGoogleAdsLinkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateGoogleAdsLinkRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IUpdateGoogleAdsLinkRequest): google.analytics.admin.v1alpha.UpdateGoogleAdsLinkRequest;

                    /**
                     * Encodes the specified UpdateGoogleAdsLinkRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateGoogleAdsLinkRequest.verify|verify} messages.
                     * @param message UpdateGoogleAdsLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IUpdateGoogleAdsLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateGoogleAdsLinkRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.UpdateGoogleAdsLinkRequest.verify|verify} messages.
                     * @param message UpdateGoogleAdsLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IUpdateGoogleAdsLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateGoogleAdsLinkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateGoogleAdsLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.UpdateGoogleAdsLinkRequest;

                    /**
                     * Decodes an UpdateGoogleAdsLinkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateGoogleAdsLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.UpdateGoogleAdsLinkRequest;

                    /**
                     * Verifies an UpdateGoogleAdsLinkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateGoogleAdsLinkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateGoogleAdsLinkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.UpdateGoogleAdsLinkRequest;

                    /**
                     * Creates a plain object from an UpdateGoogleAdsLinkRequest message. Also converts values to other types if specified.
                     * @param message UpdateGoogleAdsLinkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.UpdateGoogleAdsLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateGoogleAdsLinkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteGoogleAdsLinkRequest. */
                interface IDeleteGoogleAdsLinkRequest {

                    /** DeleteGoogleAdsLinkRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteGoogleAdsLinkRequest. */
                class DeleteGoogleAdsLinkRequest implements IDeleteGoogleAdsLinkRequest {

                    /**
                     * Constructs a new DeleteGoogleAdsLinkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IDeleteGoogleAdsLinkRequest);

                    /** DeleteGoogleAdsLinkRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteGoogleAdsLinkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGoogleAdsLinkRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IDeleteGoogleAdsLinkRequest): google.analytics.admin.v1alpha.DeleteGoogleAdsLinkRequest;

                    /**
                     * Encodes the specified DeleteGoogleAdsLinkRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteGoogleAdsLinkRequest.verify|verify} messages.
                     * @param message DeleteGoogleAdsLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IDeleteGoogleAdsLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGoogleAdsLinkRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.DeleteGoogleAdsLinkRequest.verify|verify} messages.
                     * @param message DeleteGoogleAdsLinkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IDeleteGoogleAdsLinkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGoogleAdsLinkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGoogleAdsLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.DeleteGoogleAdsLinkRequest;

                    /**
                     * Decodes a DeleteGoogleAdsLinkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGoogleAdsLinkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.DeleteGoogleAdsLinkRequest;

                    /**
                     * Verifies a DeleteGoogleAdsLinkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGoogleAdsLinkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGoogleAdsLinkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.DeleteGoogleAdsLinkRequest;

                    /**
                     * Creates a plain object from a DeleteGoogleAdsLinkRequest message. Also converts values to other types if specified.
                     * @param message DeleteGoogleAdsLinkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.DeleteGoogleAdsLinkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGoogleAdsLinkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListGoogleAdsLinksRequest. */
                interface IListGoogleAdsLinksRequest {

                    /** ListGoogleAdsLinksRequest parent */
                    parent?: (string|null);

                    /** ListGoogleAdsLinksRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGoogleAdsLinksRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListGoogleAdsLinksRequest. */
                class ListGoogleAdsLinksRequest implements IListGoogleAdsLinksRequest {

                    /**
                     * Constructs a new ListGoogleAdsLinksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListGoogleAdsLinksRequest);

                    /** ListGoogleAdsLinksRequest parent. */
                    public parent: string;

                    /** ListGoogleAdsLinksRequest pageSize. */
                    public pageSize: number;

                    /** ListGoogleAdsLinksRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListGoogleAdsLinksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGoogleAdsLinksRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListGoogleAdsLinksRequest): google.analytics.admin.v1alpha.ListGoogleAdsLinksRequest;

                    /**
                     * Encodes the specified ListGoogleAdsLinksRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.ListGoogleAdsLinksRequest.verify|verify} messages.
                     * @param message ListGoogleAdsLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListGoogleAdsLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGoogleAdsLinksRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListGoogleAdsLinksRequest.verify|verify} messages.
                     * @param message ListGoogleAdsLinksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListGoogleAdsLinksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGoogleAdsLinksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGoogleAdsLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListGoogleAdsLinksRequest;

                    /**
                     * Decodes a ListGoogleAdsLinksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGoogleAdsLinksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListGoogleAdsLinksRequest;

                    /**
                     * Verifies a ListGoogleAdsLinksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGoogleAdsLinksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGoogleAdsLinksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListGoogleAdsLinksRequest;

                    /**
                     * Creates a plain object from a ListGoogleAdsLinksRequest message. Also converts values to other types if specified.
                     * @param message ListGoogleAdsLinksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListGoogleAdsLinksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGoogleAdsLinksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListGoogleAdsLinksResponse. */
                interface IListGoogleAdsLinksResponse {

                    /** ListGoogleAdsLinksResponse googleAdsLinks */
                    googleAdsLinks?: (google.analytics.admin.v1alpha.IGoogleAdsLink[]|null);

                    /** ListGoogleAdsLinksResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListGoogleAdsLinksResponse. */
                class ListGoogleAdsLinksResponse implements IListGoogleAdsLinksResponse {

                    /**
                     * Constructs a new ListGoogleAdsLinksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListGoogleAdsLinksResponse);

                    /** ListGoogleAdsLinksResponse googleAdsLinks. */
                    public googleAdsLinks: google.analytics.admin.v1alpha.IGoogleAdsLink[];

                    /** ListGoogleAdsLinksResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListGoogleAdsLinksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGoogleAdsLinksResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListGoogleAdsLinksResponse): google.analytics.admin.v1alpha.ListGoogleAdsLinksResponse;

                    /**
                     * Encodes the specified ListGoogleAdsLinksResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.ListGoogleAdsLinksResponse.verify|verify} messages.
                     * @param message ListGoogleAdsLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListGoogleAdsLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGoogleAdsLinksResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListGoogleAdsLinksResponse.verify|verify} messages.
                     * @param message ListGoogleAdsLinksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListGoogleAdsLinksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGoogleAdsLinksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGoogleAdsLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListGoogleAdsLinksResponse;

                    /**
                     * Decodes a ListGoogleAdsLinksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGoogleAdsLinksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListGoogleAdsLinksResponse;

                    /**
                     * Verifies a ListGoogleAdsLinksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGoogleAdsLinksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGoogleAdsLinksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListGoogleAdsLinksResponse;

                    /**
                     * Creates a plain object from a ListGoogleAdsLinksResponse message. Also converts values to other types if specified.
                     * @param message ListGoogleAdsLinksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListGoogleAdsLinksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGoogleAdsLinksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetDataSharingSettingsRequest. */
                interface IGetDataSharingSettingsRequest {

                    /** GetDataSharingSettingsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetDataSharingSettingsRequest. */
                class GetDataSharingSettingsRequest implements IGetDataSharingSettingsRequest {

                    /**
                     * Constructs a new GetDataSharingSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IGetDataSharingSettingsRequest);

                    /** GetDataSharingSettingsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetDataSharingSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDataSharingSettingsRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IGetDataSharingSettingsRequest): google.analytics.admin.v1alpha.GetDataSharingSettingsRequest;

                    /**
                     * Encodes the specified GetDataSharingSettingsRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.GetDataSharingSettingsRequest.verify|verify} messages.
                     * @param message GetDataSharingSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IGetDataSharingSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDataSharingSettingsRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.GetDataSharingSettingsRequest.verify|verify} messages.
                     * @param message GetDataSharingSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IGetDataSharingSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDataSharingSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDataSharingSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.GetDataSharingSettingsRequest;

                    /**
                     * Decodes a GetDataSharingSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDataSharingSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.GetDataSharingSettingsRequest;

                    /**
                     * Verifies a GetDataSharingSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDataSharingSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDataSharingSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.GetDataSharingSettingsRequest;

                    /**
                     * Creates a plain object from a GetDataSharingSettingsRequest message. Also converts values to other types if specified.
                     * @param message GetDataSharingSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.GetDataSharingSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDataSharingSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAccountSummariesRequest. */
                interface IListAccountSummariesRequest {

                    /** ListAccountSummariesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAccountSummariesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAccountSummariesRequest. */
                class ListAccountSummariesRequest implements IListAccountSummariesRequest {

                    /**
                     * Constructs a new ListAccountSummariesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListAccountSummariesRequest);

                    /** ListAccountSummariesRequest pageSize. */
                    public pageSize: number;

                    /** ListAccountSummariesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAccountSummariesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAccountSummariesRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListAccountSummariesRequest): google.analytics.admin.v1alpha.ListAccountSummariesRequest;

                    /**
                     * Encodes the specified ListAccountSummariesRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.ListAccountSummariesRequest.verify|verify} messages.
                     * @param message ListAccountSummariesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListAccountSummariesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAccountSummariesRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListAccountSummariesRequest.verify|verify} messages.
                     * @param message ListAccountSummariesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListAccountSummariesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAccountSummariesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAccountSummariesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListAccountSummariesRequest;

                    /**
                     * Decodes a ListAccountSummariesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAccountSummariesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListAccountSummariesRequest;

                    /**
                     * Verifies a ListAccountSummariesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAccountSummariesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAccountSummariesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListAccountSummariesRequest;

                    /**
                     * Creates a plain object from a ListAccountSummariesRequest message. Also converts values to other types if specified.
                     * @param message ListAccountSummariesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListAccountSummariesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAccountSummariesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAccountSummariesResponse. */
                interface IListAccountSummariesResponse {

                    /** ListAccountSummariesResponse accountSummaries */
                    accountSummaries?: (google.analytics.admin.v1alpha.IAccountSummary[]|null);

                    /** ListAccountSummariesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAccountSummariesResponse. */
                class ListAccountSummariesResponse implements IListAccountSummariesResponse {

                    /**
                     * Constructs a new ListAccountSummariesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IListAccountSummariesResponse);

                    /** ListAccountSummariesResponse accountSummaries. */
                    public accountSummaries: google.analytics.admin.v1alpha.IAccountSummary[];

                    /** ListAccountSummariesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAccountSummariesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAccountSummariesResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IListAccountSummariesResponse): google.analytics.admin.v1alpha.ListAccountSummariesResponse;

                    /**
                     * Encodes the specified ListAccountSummariesResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.ListAccountSummariesResponse.verify|verify} messages.
                     * @param message ListAccountSummariesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IListAccountSummariesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAccountSummariesResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ListAccountSummariesResponse.verify|verify} messages.
                     * @param message ListAccountSummariesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IListAccountSummariesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAccountSummariesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAccountSummariesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ListAccountSummariesResponse;

                    /**
                     * Decodes a ListAccountSummariesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAccountSummariesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ListAccountSummariesResponse;

                    /**
                     * Verifies a ListAccountSummariesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAccountSummariesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAccountSummariesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ListAccountSummariesResponse;

                    /**
                     * Creates a plain object from a ListAccountSummariesResponse message. Also converts values to other types if specified.
                     * @param message ListAccountSummariesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ListAccountSummariesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAccountSummariesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchChangeHistoryEventsRequest. */
                interface ISearchChangeHistoryEventsRequest {

                    /** SearchChangeHistoryEventsRequest account */
                    account?: (string|null);

                    /** SearchChangeHistoryEventsRequest property */
                    property?: (string|null);

                    /** SearchChangeHistoryEventsRequest resourceType */
                    resourceType?: (google.analytics.admin.v1alpha.ChangeHistoryResourceType[]|null);

                    /** SearchChangeHistoryEventsRequest action */
                    action?: (google.analytics.admin.v1alpha.ActionType[]|null);

                    /** SearchChangeHistoryEventsRequest actorEmail */
                    actorEmail?: (string[]|null);

                    /** SearchChangeHistoryEventsRequest earliestChangeTime */
                    earliestChangeTime?: (google.protobuf.ITimestamp|null);

                    /** SearchChangeHistoryEventsRequest latestChangeTime */
                    latestChangeTime?: (google.protobuf.ITimestamp|null);

                    /** SearchChangeHistoryEventsRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchChangeHistoryEventsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a SearchChangeHistoryEventsRequest. */
                class SearchChangeHistoryEventsRequest implements ISearchChangeHistoryEventsRequest {

                    /**
                     * Constructs a new SearchChangeHistoryEventsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.ISearchChangeHistoryEventsRequest);

                    /** SearchChangeHistoryEventsRequest account. */
                    public account: string;

                    /** SearchChangeHistoryEventsRequest property. */
                    public property: string;

                    /** SearchChangeHistoryEventsRequest resourceType. */
                    public resourceType: google.analytics.admin.v1alpha.ChangeHistoryResourceType[];

                    /** SearchChangeHistoryEventsRequest action. */
                    public action: google.analytics.admin.v1alpha.ActionType[];

                    /** SearchChangeHistoryEventsRequest actorEmail. */
                    public actorEmail: string[];

                    /** SearchChangeHistoryEventsRequest earliestChangeTime. */
                    public earliestChangeTime?: (google.protobuf.ITimestamp|null);

                    /** SearchChangeHistoryEventsRequest latestChangeTime. */
                    public latestChangeTime?: (google.protobuf.ITimestamp|null);

                    /** SearchChangeHistoryEventsRequest pageSize. */
                    public pageSize: number;

                    /** SearchChangeHistoryEventsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new SearchChangeHistoryEventsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchChangeHistoryEventsRequest instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.ISearchChangeHistoryEventsRequest): google.analytics.admin.v1alpha.SearchChangeHistoryEventsRequest;

                    /**
                     * Encodes the specified SearchChangeHistoryEventsRequest message. Does not implicitly {@link google.analytics.admin.v1alpha.SearchChangeHistoryEventsRequest.verify|verify} messages.
                     * @param message SearchChangeHistoryEventsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.ISearchChangeHistoryEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchChangeHistoryEventsRequest message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.SearchChangeHistoryEventsRequest.verify|verify} messages.
                     * @param message SearchChangeHistoryEventsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.ISearchChangeHistoryEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchChangeHistoryEventsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchChangeHistoryEventsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.SearchChangeHistoryEventsRequest;

                    /**
                     * Decodes a SearchChangeHistoryEventsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchChangeHistoryEventsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.SearchChangeHistoryEventsRequest;

                    /**
                     * Verifies a SearchChangeHistoryEventsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchChangeHistoryEventsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchChangeHistoryEventsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.SearchChangeHistoryEventsRequest;

                    /**
                     * Creates a plain object from a SearchChangeHistoryEventsRequest message. Also converts values to other types if specified.
                     * @param message SearchChangeHistoryEventsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.SearchChangeHistoryEventsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchChangeHistoryEventsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchChangeHistoryEventsResponse. */
                interface ISearchChangeHistoryEventsResponse {

                    /** SearchChangeHistoryEventsResponse changeHistoryEvents */
                    changeHistoryEvents?: (google.analytics.admin.v1alpha.IChangeHistoryEvent[]|null);

                    /** SearchChangeHistoryEventsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a SearchChangeHistoryEventsResponse. */
                class SearchChangeHistoryEventsResponse implements ISearchChangeHistoryEventsResponse {

                    /**
                     * Constructs a new SearchChangeHistoryEventsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.ISearchChangeHistoryEventsResponse);

                    /** SearchChangeHistoryEventsResponse changeHistoryEvents. */
                    public changeHistoryEvents: google.analytics.admin.v1alpha.IChangeHistoryEvent[];

                    /** SearchChangeHistoryEventsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new SearchChangeHistoryEventsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchChangeHistoryEventsResponse instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.ISearchChangeHistoryEventsResponse): google.analytics.admin.v1alpha.SearchChangeHistoryEventsResponse;

                    /**
                     * Encodes the specified SearchChangeHistoryEventsResponse message. Does not implicitly {@link google.analytics.admin.v1alpha.SearchChangeHistoryEventsResponse.verify|verify} messages.
                     * @param message SearchChangeHistoryEventsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.ISearchChangeHistoryEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchChangeHistoryEventsResponse message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.SearchChangeHistoryEventsResponse.verify|verify} messages.
                     * @param message SearchChangeHistoryEventsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.ISearchChangeHistoryEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchChangeHistoryEventsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchChangeHistoryEventsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.SearchChangeHistoryEventsResponse;

                    /**
                     * Decodes a SearchChangeHistoryEventsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchChangeHistoryEventsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.SearchChangeHistoryEventsResponse;

                    /**
                     * Verifies a SearchChangeHistoryEventsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchChangeHistoryEventsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchChangeHistoryEventsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.SearchChangeHistoryEventsResponse;

                    /**
                     * Creates a plain object from a SearchChangeHistoryEventsResponse message. Also converts values to other types if specified.
                     * @param message SearchChangeHistoryEventsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.SearchChangeHistoryEventsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchChangeHistoryEventsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** MaximumUserAccess enum. */
                enum MaximumUserAccess {
                    MAXIMUM_USER_ACCESS_UNSPECIFIED = 0,
                    NO_ACCESS = 1,
                    READ_AND_ANALYZE = 2,
                    EDITOR_WITHOUT_LINK_MANAGEMENT = 3,
                    EDITOR_INCLUDING_LINK_MANAGEMENT = 4
                }

                /** IndustryCategory enum. */
                enum IndustryCategory {
                    INDUSTRY_CATEGORY_UNSPECIFIED = 0,
                    AUTOMOTIVE = 1,
                    BUSINESS_AND_INDUSTRIAL_MARKETS = 2,
                    FINANCE = 3,
                    HEALTHCARE = 4,
                    TECHNOLOGY = 5,
                    TRAVEL = 6,
                    OTHER = 7,
                    ARTS_AND_ENTERTAINMENT = 8,
                    BEAUTY_AND_FITNESS = 9,
                    BOOKS_AND_LITERATURE = 10,
                    FOOD_AND_DRINK = 11,
                    GAMES = 12,
                    HOBBIES_AND_LEISURE = 13,
                    HOME_AND_GARDEN = 14,
                    INTERNET_AND_TELECOM = 15,
                    LAW_AND_GOVERNMENT = 16,
                    NEWS = 17,
                    ONLINE_COMMUNITIES = 18,
                    PEOPLE_AND_SOCIETY = 19,
                    PETS_AND_ANIMALS = 20,
                    REAL_ESTATE = 21,
                    REFERENCE = 22,
                    SCIENCE = 23,
                    SPORTS = 24,
                    JOBS_AND_EDUCATION = 25,
                    SHOPPING = 26
                }

                /** ActorType enum. */
                enum ActorType {
                    ACTOR_TYPE_UNSPECIFIED = 0,
                    USER = 1,
                    SYSTEM = 2,
                    SUPPORT = 3
                }

                /** ActionType enum. */
                enum ActionType {
                    ACTION_TYPE_UNSPECIFIED = 0,
                    CREATED = 1,
                    UPDATED = 2,
                    DELETED = 3
                }

                /** ChangeHistoryResourceType enum. */
                enum ChangeHistoryResourceType {
                    CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED = 0,
                    ACCOUNT = 1,
                    PROPERTY = 2,
                    WEB_DATA_STREAM = 3,
                    ANDROID_APP_DATA_STREAM = 4,
                    IOS_APP_DATA_STREAM = 5,
                    FIREBASE_LINK = 6,
                    GOOGLE_ADS_LINK = 7
                }

                /** Properties of an Account. */
                interface IAccount {

                    /** Account name */
                    name?: (string|null);

                    /** Account createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Account updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Account displayName */
                    displayName?: (string|null);

                    /** Account regionCode */
                    regionCode?: (string|null);

                    /** Account deleted */
                    deleted?: (boolean|null);
                }

                /** Represents an Account. */
                class Account implements IAccount {

                    /**
                     * Constructs a new Account.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IAccount);

                    /** Account name. */
                    public name: string;

                    /** Account createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Account updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Account displayName. */
                    public displayName: string;

                    /** Account regionCode. */
                    public regionCode: string;

                    /** Account deleted. */
                    public deleted: boolean;

                    /**
                     * Creates a new Account instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Account instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IAccount): google.analytics.admin.v1alpha.Account;

                    /**
                     * Encodes the specified Account message. Does not implicitly {@link google.analytics.admin.v1alpha.Account.verify|verify} messages.
                     * @param message Account message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Account message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.Account.verify|verify} messages.
                     * @param message Account message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Account message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Account
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.Account;

                    /**
                     * Decodes an Account message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Account
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.Account;

                    /**
                     * Verifies an Account message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Account message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Account
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.Account;

                    /**
                     * Creates a plain object from an Account message. Also converts values to other types if specified.
                     * @param message Account
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Account to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Property. */
                interface IProperty {

                    /** Property name */
                    name?: (string|null);

                    /** Property createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Property updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Property parent */
                    parent?: (string|null);

                    /** Property displayName */
                    displayName?: (string|null);

                    /** Property industryCategory */
                    industryCategory?: (google.analytics.admin.v1alpha.IndustryCategory|keyof typeof google.analytics.admin.v1alpha.IndustryCategory|null);

                    /** Property timeZone */
                    timeZone?: (string|null);

                    /** Property currencyCode */
                    currencyCode?: (string|null);

                    /** Property deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** Property expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Property. */
                class Property implements IProperty {

                    /**
                     * Constructs a new Property.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IProperty);

                    /** Property name. */
                    public name: string;

                    /** Property createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Property updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Property parent. */
                    public parent: string;

                    /** Property displayName. */
                    public displayName: string;

                    /** Property industryCategory. */
                    public industryCategory: (google.analytics.admin.v1alpha.IndustryCategory|keyof typeof google.analytics.admin.v1alpha.IndustryCategory);

                    /** Property timeZone. */
                    public timeZone: string;

                    /** Property currencyCode. */
                    public currencyCode: string;

                    /** Property deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** Property expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Property instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Property instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IProperty): google.analytics.admin.v1alpha.Property;

                    /**
                     * Encodes the specified Property message. Does not implicitly {@link google.analytics.admin.v1alpha.Property.verify|verify} messages.
                     * @param message Property message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Property message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.Property.verify|verify} messages.
                     * @param message Property message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Property message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Property
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.Property;

                    /**
                     * Decodes a Property message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Property
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.Property;

                    /**
                     * Verifies a Property message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Property message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Property
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.Property;

                    /**
                     * Creates a plain object from a Property message. Also converts values to other types if specified.
                     * @param message Property
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.Property, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Property to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AndroidAppDataStream. */
                interface IAndroidAppDataStream {

                    /** AndroidAppDataStream name */
                    name?: (string|null);

                    /** AndroidAppDataStream firebaseAppId */
                    firebaseAppId?: (string|null);

                    /** AndroidAppDataStream createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** AndroidAppDataStream updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** AndroidAppDataStream packageName */
                    packageName?: (string|null);

                    /** AndroidAppDataStream displayName */
                    displayName?: (string|null);
                }

                /** Represents an AndroidAppDataStream. */
                class AndroidAppDataStream implements IAndroidAppDataStream {

                    /**
                     * Constructs a new AndroidAppDataStream.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IAndroidAppDataStream);

                    /** AndroidAppDataStream name. */
                    public name: string;

                    /** AndroidAppDataStream firebaseAppId. */
                    public firebaseAppId: string;

                    /** AndroidAppDataStream createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** AndroidAppDataStream updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** AndroidAppDataStream packageName. */
                    public packageName: string;

                    /** AndroidAppDataStream displayName. */
                    public displayName: string;

                    /**
                     * Creates a new AndroidAppDataStream instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AndroidAppDataStream instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IAndroidAppDataStream): google.analytics.admin.v1alpha.AndroidAppDataStream;

                    /**
                     * Encodes the specified AndroidAppDataStream message. Does not implicitly {@link google.analytics.admin.v1alpha.AndroidAppDataStream.verify|verify} messages.
                     * @param message AndroidAppDataStream message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IAndroidAppDataStream, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AndroidAppDataStream message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.AndroidAppDataStream.verify|verify} messages.
                     * @param message AndroidAppDataStream message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IAndroidAppDataStream, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AndroidAppDataStream message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AndroidAppDataStream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.AndroidAppDataStream;

                    /**
                     * Decodes an AndroidAppDataStream message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AndroidAppDataStream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.AndroidAppDataStream;

                    /**
                     * Verifies an AndroidAppDataStream message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AndroidAppDataStream message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AndroidAppDataStream
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.AndroidAppDataStream;

                    /**
                     * Creates a plain object from an AndroidAppDataStream message. Also converts values to other types if specified.
                     * @param message AndroidAppDataStream
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.AndroidAppDataStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AndroidAppDataStream to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IosAppDataStream. */
                interface IIosAppDataStream {

                    /** IosAppDataStream name */
                    name?: (string|null);

                    /** IosAppDataStream firebaseAppId */
                    firebaseAppId?: (string|null);

                    /** IosAppDataStream createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** IosAppDataStream updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** IosAppDataStream bundleId */
                    bundleId?: (string|null);

                    /** IosAppDataStream displayName */
                    displayName?: (string|null);
                }

                /** Represents an IosAppDataStream. */
                class IosAppDataStream implements IIosAppDataStream {

                    /**
                     * Constructs a new IosAppDataStream.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IIosAppDataStream);

                    /** IosAppDataStream name. */
                    public name: string;

                    /** IosAppDataStream firebaseAppId. */
                    public firebaseAppId: string;

                    /** IosAppDataStream createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** IosAppDataStream updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** IosAppDataStream bundleId. */
                    public bundleId: string;

                    /** IosAppDataStream displayName. */
                    public displayName: string;

                    /**
                     * Creates a new IosAppDataStream instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IosAppDataStream instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IIosAppDataStream): google.analytics.admin.v1alpha.IosAppDataStream;

                    /**
                     * Encodes the specified IosAppDataStream message. Does not implicitly {@link google.analytics.admin.v1alpha.IosAppDataStream.verify|verify} messages.
                     * @param message IosAppDataStream message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IIosAppDataStream, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IosAppDataStream message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.IosAppDataStream.verify|verify} messages.
                     * @param message IosAppDataStream message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IIosAppDataStream, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IosAppDataStream message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IosAppDataStream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.IosAppDataStream;

                    /**
                     * Decodes an IosAppDataStream message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IosAppDataStream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.IosAppDataStream;

                    /**
                     * Verifies an IosAppDataStream message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IosAppDataStream message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IosAppDataStream
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.IosAppDataStream;

                    /**
                     * Creates a plain object from an IosAppDataStream message. Also converts values to other types if specified.
                     * @param message IosAppDataStream
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.IosAppDataStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IosAppDataStream to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WebDataStream. */
                interface IWebDataStream {

                    /** WebDataStream name */
                    name?: (string|null);

                    /** WebDataStream measurementId */
                    measurementId?: (string|null);

                    /** WebDataStream firebaseAppId */
                    firebaseAppId?: (string|null);

                    /** WebDataStream createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** WebDataStream updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** WebDataStream defaultUri */
                    defaultUri?: (string|null);

                    /** WebDataStream displayName */
                    displayName?: (string|null);
                }

                /** Represents a WebDataStream. */
                class WebDataStream implements IWebDataStream {

                    /**
                     * Constructs a new WebDataStream.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IWebDataStream);

                    /** WebDataStream name. */
                    public name: string;

                    /** WebDataStream measurementId. */
                    public measurementId: string;

                    /** WebDataStream firebaseAppId. */
                    public firebaseAppId: string;

                    /** WebDataStream createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** WebDataStream updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** WebDataStream defaultUri. */
                    public defaultUri: string;

                    /** WebDataStream displayName. */
                    public displayName: string;

                    /**
                     * Creates a new WebDataStream instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WebDataStream instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IWebDataStream): google.analytics.admin.v1alpha.WebDataStream;

                    /**
                     * Encodes the specified WebDataStream message. Does not implicitly {@link google.analytics.admin.v1alpha.WebDataStream.verify|verify} messages.
                     * @param message WebDataStream message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IWebDataStream, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WebDataStream message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.WebDataStream.verify|verify} messages.
                     * @param message WebDataStream message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IWebDataStream, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WebDataStream message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WebDataStream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.WebDataStream;

                    /**
                     * Decodes a WebDataStream message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WebDataStream
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.WebDataStream;

                    /**
                     * Verifies a WebDataStream message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WebDataStream message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WebDataStream
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.WebDataStream;

                    /**
                     * Creates a plain object from a WebDataStream message. Also converts values to other types if specified.
                     * @param message WebDataStream
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.WebDataStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WebDataStream to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a UserLink. */
                interface IUserLink {

                    /** UserLink name */
                    name?: (string|null);

                    /** UserLink emailAddress */
                    emailAddress?: (string|null);

                    /** UserLink directRoles */
                    directRoles?: (string[]|null);
                }

                /** Represents a UserLink. */
                class UserLink implements IUserLink {

                    /**
                     * Constructs a new UserLink.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IUserLink);

                    /** UserLink name. */
                    public name: string;

                    /** UserLink emailAddress. */
                    public emailAddress: string;

                    /** UserLink directRoles. */
                    public directRoles: string[];

                    /**
                     * Creates a new UserLink instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserLink instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IUserLink): google.analytics.admin.v1alpha.UserLink;

                    /**
                     * Encodes the specified UserLink message. Does not implicitly {@link google.analytics.admin.v1alpha.UserLink.verify|verify} messages.
                     * @param message UserLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IUserLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserLink message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.UserLink.verify|verify} messages.
                     * @param message UserLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IUserLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserLink message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.UserLink;

                    /**
                     * Decodes a UserLink message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.UserLink;

                    /**
                     * Verifies a UserLink message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserLink message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserLink
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.UserLink;

                    /**
                     * Creates a plain object from a UserLink message. Also converts values to other types if specified.
                     * @param message UserLink
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.UserLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserLink to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AuditUserLink. */
                interface IAuditUserLink {

                    /** AuditUserLink name */
                    name?: (string|null);

                    /** AuditUserLink emailAddress */
                    emailAddress?: (string|null);

                    /** AuditUserLink directRoles */
                    directRoles?: (string[]|null);

                    /** AuditUserLink effectiveRoles */
                    effectiveRoles?: (string[]|null);
                }

                /** Represents an AuditUserLink. */
                class AuditUserLink implements IAuditUserLink {

                    /**
                     * Constructs a new AuditUserLink.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IAuditUserLink);

                    /** AuditUserLink name. */
                    public name: string;

                    /** AuditUserLink emailAddress. */
                    public emailAddress: string;

                    /** AuditUserLink directRoles. */
                    public directRoles: string[];

                    /** AuditUserLink effectiveRoles. */
                    public effectiveRoles: string[];

                    /**
                     * Creates a new AuditUserLink instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuditUserLink instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IAuditUserLink): google.analytics.admin.v1alpha.AuditUserLink;

                    /**
                     * Encodes the specified AuditUserLink message. Does not implicitly {@link google.analytics.admin.v1alpha.AuditUserLink.verify|verify} messages.
                     * @param message AuditUserLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IAuditUserLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AuditUserLink message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.AuditUserLink.verify|verify} messages.
                     * @param message AuditUserLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IAuditUserLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuditUserLink message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuditUserLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.AuditUserLink;

                    /**
                     * Decodes an AuditUserLink message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AuditUserLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.AuditUserLink;

                    /**
                     * Verifies an AuditUserLink message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AuditUserLink message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AuditUserLink
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.AuditUserLink;

                    /**
                     * Creates a plain object from an AuditUserLink message. Also converts values to other types if specified.
                     * @param message AuditUserLink
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.AuditUserLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AuditUserLink to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EnhancedMeasurementSettings. */
                interface IEnhancedMeasurementSettings {

                    /** EnhancedMeasurementSettings name */
                    name?: (string|null);

                    /** EnhancedMeasurementSettings streamEnabled */
                    streamEnabled?: (boolean|null);

                    /** EnhancedMeasurementSettings pageViewsEnabled */
                    pageViewsEnabled?: (boolean|null);

                    /** EnhancedMeasurementSettings scrollsEnabled */
                    scrollsEnabled?: (boolean|null);

                    /** EnhancedMeasurementSettings outboundClicksEnabled */
                    outboundClicksEnabled?: (boolean|null);

                    /** EnhancedMeasurementSettings siteSearchEnabled */
                    siteSearchEnabled?: (boolean|null);

                    /** EnhancedMeasurementSettings videoEngagementEnabled */
                    videoEngagementEnabled?: (boolean|null);

                    /** EnhancedMeasurementSettings fileDownloadsEnabled */
                    fileDownloadsEnabled?: (boolean|null);

                    /** EnhancedMeasurementSettings pageLoadsEnabled */
                    pageLoadsEnabled?: (boolean|null);

                    /** EnhancedMeasurementSettings pageChangesEnabled */
                    pageChangesEnabled?: (boolean|null);

                    /** EnhancedMeasurementSettings searchQueryParameter */
                    searchQueryParameter?: (string|null);

                    /** EnhancedMeasurementSettings uriQueryParameter */
                    uriQueryParameter?: (string|null);
                }

                /** Represents an EnhancedMeasurementSettings. */
                class EnhancedMeasurementSettings implements IEnhancedMeasurementSettings {

                    /**
                     * Constructs a new EnhancedMeasurementSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IEnhancedMeasurementSettings);

                    /** EnhancedMeasurementSettings name. */
                    public name: string;

                    /** EnhancedMeasurementSettings streamEnabled. */
                    public streamEnabled: boolean;

                    /** EnhancedMeasurementSettings pageViewsEnabled. */
                    public pageViewsEnabled: boolean;

                    /** EnhancedMeasurementSettings scrollsEnabled. */
                    public scrollsEnabled: boolean;

                    /** EnhancedMeasurementSettings outboundClicksEnabled. */
                    public outboundClicksEnabled: boolean;

                    /** EnhancedMeasurementSettings siteSearchEnabled. */
                    public siteSearchEnabled: boolean;

                    /** EnhancedMeasurementSettings videoEngagementEnabled. */
                    public videoEngagementEnabled: boolean;

                    /** EnhancedMeasurementSettings fileDownloadsEnabled. */
                    public fileDownloadsEnabled: boolean;

                    /** EnhancedMeasurementSettings pageLoadsEnabled. */
                    public pageLoadsEnabled: boolean;

                    /** EnhancedMeasurementSettings pageChangesEnabled. */
                    public pageChangesEnabled: boolean;

                    /** EnhancedMeasurementSettings searchQueryParameter. */
                    public searchQueryParameter: string;

                    /** EnhancedMeasurementSettings uriQueryParameter. */
                    public uriQueryParameter: string;

                    /**
                     * Creates a new EnhancedMeasurementSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnhancedMeasurementSettings instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IEnhancedMeasurementSettings): google.analytics.admin.v1alpha.EnhancedMeasurementSettings;

                    /**
                     * Encodes the specified EnhancedMeasurementSettings message. Does not implicitly {@link google.analytics.admin.v1alpha.EnhancedMeasurementSettings.verify|verify} messages.
                     * @param message EnhancedMeasurementSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IEnhancedMeasurementSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnhancedMeasurementSettings message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.EnhancedMeasurementSettings.verify|verify} messages.
                     * @param message EnhancedMeasurementSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IEnhancedMeasurementSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnhancedMeasurementSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnhancedMeasurementSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.EnhancedMeasurementSettings;

                    /**
                     * Decodes an EnhancedMeasurementSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnhancedMeasurementSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.EnhancedMeasurementSettings;

                    /**
                     * Verifies an EnhancedMeasurementSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EnhancedMeasurementSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EnhancedMeasurementSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.EnhancedMeasurementSettings;

                    /**
                     * Creates a plain object from an EnhancedMeasurementSettings message. Also converts values to other types if specified.
                     * @param message EnhancedMeasurementSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.EnhancedMeasurementSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnhancedMeasurementSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FirebaseLink. */
                interface IFirebaseLink {

                    /** FirebaseLink name */
                    name?: (string|null);

                    /** FirebaseLink project */
                    project?: (string|null);

                    /** FirebaseLink createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** FirebaseLink maximumUserAccess */
                    maximumUserAccess?: (google.analytics.admin.v1alpha.MaximumUserAccess|keyof typeof google.analytics.admin.v1alpha.MaximumUserAccess|null);
                }

                /** Represents a FirebaseLink. */
                class FirebaseLink implements IFirebaseLink {

                    /**
                     * Constructs a new FirebaseLink.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IFirebaseLink);

                    /** FirebaseLink name. */
                    public name: string;

                    /** FirebaseLink project. */
                    public project: string;

                    /** FirebaseLink createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** FirebaseLink maximumUserAccess. */
                    public maximumUserAccess: (google.analytics.admin.v1alpha.MaximumUserAccess|keyof typeof google.analytics.admin.v1alpha.MaximumUserAccess);

                    /**
                     * Creates a new FirebaseLink instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FirebaseLink instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IFirebaseLink): google.analytics.admin.v1alpha.FirebaseLink;

                    /**
                     * Encodes the specified FirebaseLink message. Does not implicitly {@link google.analytics.admin.v1alpha.FirebaseLink.verify|verify} messages.
                     * @param message FirebaseLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IFirebaseLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FirebaseLink message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.FirebaseLink.verify|verify} messages.
                     * @param message FirebaseLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IFirebaseLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FirebaseLink message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FirebaseLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.FirebaseLink;

                    /**
                     * Decodes a FirebaseLink message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FirebaseLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.FirebaseLink;

                    /**
                     * Verifies a FirebaseLink message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FirebaseLink message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FirebaseLink
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.FirebaseLink;

                    /**
                     * Creates a plain object from a FirebaseLink message. Also converts values to other types if specified.
                     * @param message FirebaseLink
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.FirebaseLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FirebaseLink to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GlobalSiteTag. */
                interface IGlobalSiteTag {

                    /** GlobalSiteTag name */
                    name?: (string|null);

                    /** GlobalSiteTag snippet */
                    snippet?: (string|null);
                }

                /** Represents a GlobalSiteTag. */
                class GlobalSiteTag implements IGlobalSiteTag {

                    /**
                     * Constructs a new GlobalSiteTag.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IGlobalSiteTag);

                    /** GlobalSiteTag name. */
                    public name: string;

                    /** GlobalSiteTag snippet. */
                    public snippet: string;

                    /**
                     * Creates a new GlobalSiteTag instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GlobalSiteTag instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IGlobalSiteTag): google.analytics.admin.v1alpha.GlobalSiteTag;

                    /**
                     * Encodes the specified GlobalSiteTag message. Does not implicitly {@link google.analytics.admin.v1alpha.GlobalSiteTag.verify|verify} messages.
                     * @param message GlobalSiteTag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IGlobalSiteTag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GlobalSiteTag message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.GlobalSiteTag.verify|verify} messages.
                     * @param message GlobalSiteTag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IGlobalSiteTag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GlobalSiteTag message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GlobalSiteTag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.GlobalSiteTag;

                    /**
                     * Decodes a GlobalSiteTag message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GlobalSiteTag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.GlobalSiteTag;

                    /**
                     * Verifies a GlobalSiteTag message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GlobalSiteTag message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GlobalSiteTag
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.GlobalSiteTag;

                    /**
                     * Creates a plain object from a GlobalSiteTag message. Also converts values to other types if specified.
                     * @param message GlobalSiteTag
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.GlobalSiteTag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GlobalSiteTag to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GoogleAdsLink. */
                interface IGoogleAdsLink {

                    /** GoogleAdsLink name */
                    name?: (string|null);

                    /** GoogleAdsLink customerId */
                    customerId?: (string|null);

                    /** GoogleAdsLink canManageClients */
                    canManageClients?: (boolean|null);

                    /** GoogleAdsLink adsPersonalizationEnabled */
                    adsPersonalizationEnabled?: (google.protobuf.IBoolValue|null);

                    /** GoogleAdsLink emailAddress */
                    emailAddress?: (string|null);

                    /** GoogleAdsLink createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** GoogleAdsLink updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a GoogleAdsLink. */
                class GoogleAdsLink implements IGoogleAdsLink {

                    /**
                     * Constructs a new GoogleAdsLink.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IGoogleAdsLink);

                    /** GoogleAdsLink name. */
                    public name: string;

                    /** GoogleAdsLink customerId. */
                    public customerId: string;

                    /** GoogleAdsLink canManageClients. */
                    public canManageClients: boolean;

                    /** GoogleAdsLink adsPersonalizationEnabled. */
                    public adsPersonalizationEnabled?: (google.protobuf.IBoolValue|null);

                    /** GoogleAdsLink emailAddress. */
                    public emailAddress: string;

                    /** GoogleAdsLink createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** GoogleAdsLink updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new GoogleAdsLink instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GoogleAdsLink instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IGoogleAdsLink): google.analytics.admin.v1alpha.GoogleAdsLink;

                    /**
                     * Encodes the specified GoogleAdsLink message. Does not implicitly {@link google.analytics.admin.v1alpha.GoogleAdsLink.verify|verify} messages.
                     * @param message GoogleAdsLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IGoogleAdsLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GoogleAdsLink message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.GoogleAdsLink.verify|verify} messages.
                     * @param message GoogleAdsLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IGoogleAdsLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GoogleAdsLink message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GoogleAdsLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.GoogleAdsLink;

                    /**
                     * Decodes a GoogleAdsLink message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GoogleAdsLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.GoogleAdsLink;

                    /**
                     * Verifies a GoogleAdsLink message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GoogleAdsLink message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GoogleAdsLink
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.GoogleAdsLink;

                    /**
                     * Creates a plain object from a GoogleAdsLink message. Also converts values to other types if specified.
                     * @param message GoogleAdsLink
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.GoogleAdsLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GoogleAdsLink to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DataSharingSettings. */
                interface IDataSharingSettings {

                    /** DataSharingSettings name */
                    name?: (string|null);

                    /** DataSharingSettings sharingWithGoogleSupportEnabled */
                    sharingWithGoogleSupportEnabled?: (boolean|null);

                    /** DataSharingSettings sharingWithGoogleAssignedSalesEnabled */
                    sharingWithGoogleAssignedSalesEnabled?: (boolean|null);

                    /** DataSharingSettings sharingWithGoogleAnySalesEnabled */
                    sharingWithGoogleAnySalesEnabled?: (boolean|null);

                    /** DataSharingSettings sharingWithGoogleProductsEnabled */
                    sharingWithGoogleProductsEnabled?: (boolean|null);

                    /** DataSharingSettings sharingWithOthersEnabled */
                    sharingWithOthersEnabled?: (boolean|null);
                }

                /** Represents a DataSharingSettings. */
                class DataSharingSettings implements IDataSharingSettings {

                    /**
                     * Constructs a new DataSharingSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IDataSharingSettings);

                    /** DataSharingSettings name. */
                    public name: string;

                    /** DataSharingSettings sharingWithGoogleSupportEnabled. */
                    public sharingWithGoogleSupportEnabled: boolean;

                    /** DataSharingSettings sharingWithGoogleAssignedSalesEnabled. */
                    public sharingWithGoogleAssignedSalesEnabled: boolean;

                    /** DataSharingSettings sharingWithGoogleAnySalesEnabled. */
                    public sharingWithGoogleAnySalesEnabled: boolean;

                    /** DataSharingSettings sharingWithGoogleProductsEnabled. */
                    public sharingWithGoogleProductsEnabled: boolean;

                    /** DataSharingSettings sharingWithOthersEnabled. */
                    public sharingWithOthersEnabled: boolean;

                    /**
                     * Creates a new DataSharingSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DataSharingSettings instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IDataSharingSettings): google.analytics.admin.v1alpha.DataSharingSettings;

                    /**
                     * Encodes the specified DataSharingSettings message. Does not implicitly {@link google.analytics.admin.v1alpha.DataSharingSettings.verify|verify} messages.
                     * @param message DataSharingSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IDataSharingSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DataSharingSettings message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.DataSharingSettings.verify|verify} messages.
                     * @param message DataSharingSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IDataSharingSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DataSharingSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DataSharingSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.DataSharingSettings;

                    /**
                     * Decodes a DataSharingSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DataSharingSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.DataSharingSettings;

                    /**
                     * Verifies a DataSharingSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DataSharingSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DataSharingSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.DataSharingSettings;

                    /**
                     * Creates a plain object from a DataSharingSettings message. Also converts values to other types if specified.
                     * @param message DataSharingSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.DataSharingSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DataSharingSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AccountSummary. */
                interface IAccountSummary {

                    /** AccountSummary name */
                    name?: (string|null);

                    /** AccountSummary account */
                    account?: (string|null);

                    /** AccountSummary displayName */
                    displayName?: (string|null);

                    /** AccountSummary propertySummaries */
                    propertySummaries?: (google.analytics.admin.v1alpha.IPropertySummary[]|null);
                }

                /** Represents an AccountSummary. */
                class AccountSummary implements IAccountSummary {

                    /**
                     * Constructs a new AccountSummary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IAccountSummary);

                    /** AccountSummary name. */
                    public name: string;

                    /** AccountSummary account. */
                    public account: string;

                    /** AccountSummary displayName. */
                    public displayName: string;

                    /** AccountSummary propertySummaries. */
                    public propertySummaries: google.analytics.admin.v1alpha.IPropertySummary[];

                    /**
                     * Creates a new AccountSummary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccountSummary instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IAccountSummary): google.analytics.admin.v1alpha.AccountSummary;

                    /**
                     * Encodes the specified AccountSummary message. Does not implicitly {@link google.analytics.admin.v1alpha.AccountSummary.verify|verify} messages.
                     * @param message AccountSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IAccountSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccountSummary message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.AccountSummary.verify|verify} messages.
                     * @param message AccountSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IAccountSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccountSummary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccountSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.AccountSummary;

                    /**
                     * Decodes an AccountSummary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccountSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.AccountSummary;

                    /**
                     * Verifies an AccountSummary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccountSummary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccountSummary
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.AccountSummary;

                    /**
                     * Creates a plain object from an AccountSummary message. Also converts values to other types if specified.
                     * @param message AccountSummary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.AccountSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccountSummary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PropertySummary. */
                interface IPropertySummary {

                    /** PropertySummary property */
                    property?: (string|null);

                    /** PropertySummary displayName */
                    displayName?: (string|null);
                }

                /** Represents a PropertySummary. */
                class PropertySummary implements IPropertySummary {

                    /**
                     * Constructs a new PropertySummary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IPropertySummary);

                    /** PropertySummary property. */
                    public property: string;

                    /** PropertySummary displayName. */
                    public displayName: string;

                    /**
                     * Creates a new PropertySummary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PropertySummary instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IPropertySummary): google.analytics.admin.v1alpha.PropertySummary;

                    /**
                     * Encodes the specified PropertySummary message. Does not implicitly {@link google.analytics.admin.v1alpha.PropertySummary.verify|verify} messages.
                     * @param message PropertySummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IPropertySummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PropertySummary message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.PropertySummary.verify|verify} messages.
                     * @param message PropertySummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IPropertySummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PropertySummary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PropertySummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.PropertySummary;

                    /**
                     * Decodes a PropertySummary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PropertySummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.PropertySummary;

                    /**
                     * Verifies a PropertySummary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PropertySummary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PropertySummary
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.PropertySummary;

                    /**
                     * Creates a plain object from a PropertySummary message. Also converts values to other types if specified.
                     * @param message PropertySummary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.PropertySummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PropertySummary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ChangeHistoryEvent. */
                interface IChangeHistoryEvent {

                    /** ChangeHistoryEvent id */
                    id?: (string|null);

                    /** ChangeHistoryEvent changeTime */
                    changeTime?: (google.protobuf.ITimestamp|null);

                    /** ChangeHistoryEvent actorType */
                    actorType?: (google.analytics.admin.v1alpha.ActorType|keyof typeof google.analytics.admin.v1alpha.ActorType|null);

                    /** ChangeHistoryEvent userActorEmail */
                    userActorEmail?: (string|null);

                    /** ChangeHistoryEvent changesFiltered */
                    changesFiltered?: (boolean|null);

                    /** ChangeHistoryEvent changes */
                    changes?: (google.analytics.admin.v1alpha.IChangeHistoryChange[]|null);
                }

                /** Represents a ChangeHistoryEvent. */
                class ChangeHistoryEvent implements IChangeHistoryEvent {

                    /**
                     * Constructs a new ChangeHistoryEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IChangeHistoryEvent);

                    /** ChangeHistoryEvent id. */
                    public id: string;

                    /** ChangeHistoryEvent changeTime. */
                    public changeTime?: (google.protobuf.ITimestamp|null);

                    /** ChangeHistoryEvent actorType. */
                    public actorType: (google.analytics.admin.v1alpha.ActorType|keyof typeof google.analytics.admin.v1alpha.ActorType);

                    /** ChangeHistoryEvent userActorEmail. */
                    public userActorEmail: string;

                    /** ChangeHistoryEvent changesFiltered. */
                    public changesFiltered: boolean;

                    /** ChangeHistoryEvent changes. */
                    public changes: google.analytics.admin.v1alpha.IChangeHistoryChange[];

                    /**
                     * Creates a new ChangeHistoryEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChangeHistoryEvent instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IChangeHistoryEvent): google.analytics.admin.v1alpha.ChangeHistoryEvent;

                    /**
                     * Encodes the specified ChangeHistoryEvent message. Does not implicitly {@link google.analytics.admin.v1alpha.ChangeHistoryEvent.verify|verify} messages.
                     * @param message ChangeHistoryEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IChangeHistoryEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChangeHistoryEvent message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ChangeHistoryEvent.verify|verify} messages.
                     * @param message ChangeHistoryEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IChangeHistoryEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChangeHistoryEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChangeHistoryEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ChangeHistoryEvent;

                    /**
                     * Decodes a ChangeHistoryEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChangeHistoryEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ChangeHistoryEvent;

                    /**
                     * Verifies a ChangeHistoryEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChangeHistoryEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChangeHistoryEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ChangeHistoryEvent;

                    /**
                     * Creates a plain object from a ChangeHistoryEvent message. Also converts values to other types if specified.
                     * @param message ChangeHistoryEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ChangeHistoryEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChangeHistoryEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ChangeHistoryChange. */
                interface IChangeHistoryChange {

                    /** ChangeHistoryChange resource */
                    resource?: (string|null);

                    /** ChangeHistoryChange action */
                    action?: (google.analytics.admin.v1alpha.ActionType|keyof typeof google.analytics.admin.v1alpha.ActionType|null);

                    /** ChangeHistoryChange resourceBeforeChange */
                    resourceBeforeChange?: (google.analytics.admin.v1alpha.ChangeHistoryChange.IChangeHistoryResource|null);

                    /** ChangeHistoryChange resourceAfterChange */
                    resourceAfterChange?: (google.analytics.admin.v1alpha.ChangeHistoryChange.IChangeHistoryResource|null);
                }

                /** Represents a ChangeHistoryChange. */
                class ChangeHistoryChange implements IChangeHistoryChange {

                    /**
                     * Constructs a new ChangeHistoryChange.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.admin.v1alpha.IChangeHistoryChange);

                    /** ChangeHistoryChange resource. */
                    public resource: string;

                    /** ChangeHistoryChange action. */
                    public action: (google.analytics.admin.v1alpha.ActionType|keyof typeof google.analytics.admin.v1alpha.ActionType);

                    /** ChangeHistoryChange resourceBeforeChange. */
                    public resourceBeforeChange?: (google.analytics.admin.v1alpha.ChangeHistoryChange.IChangeHistoryResource|null);

                    /** ChangeHistoryChange resourceAfterChange. */
                    public resourceAfterChange?: (google.analytics.admin.v1alpha.ChangeHistoryChange.IChangeHistoryResource|null);

                    /**
                     * Creates a new ChangeHistoryChange instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChangeHistoryChange instance
                     */
                    public static create(properties?: google.analytics.admin.v1alpha.IChangeHistoryChange): google.analytics.admin.v1alpha.ChangeHistoryChange;

                    /**
                     * Encodes the specified ChangeHistoryChange message. Does not implicitly {@link google.analytics.admin.v1alpha.ChangeHistoryChange.verify|verify} messages.
                     * @param message ChangeHistoryChange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.admin.v1alpha.IChangeHistoryChange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChangeHistoryChange message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ChangeHistoryChange.verify|verify} messages.
                     * @param message ChangeHistoryChange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.admin.v1alpha.IChangeHistoryChange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChangeHistoryChange message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChangeHistoryChange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ChangeHistoryChange;

                    /**
                     * Decodes a ChangeHistoryChange message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChangeHistoryChange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ChangeHistoryChange;

                    /**
                     * Verifies a ChangeHistoryChange message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChangeHistoryChange message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChangeHistoryChange
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ChangeHistoryChange;

                    /**
                     * Creates a plain object from a ChangeHistoryChange message. Also converts values to other types if specified.
                     * @param message ChangeHistoryChange
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.admin.v1alpha.ChangeHistoryChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChangeHistoryChange to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ChangeHistoryChange {

                    /** Properties of a ChangeHistoryResource. */
                    interface IChangeHistoryResource {

                        /** ChangeHistoryResource account */
                        account?: (google.analytics.admin.v1alpha.IAccount|null);

                        /** ChangeHistoryResource property */
                        property?: (google.analytics.admin.v1alpha.IProperty|null);

                        /** ChangeHistoryResource webDataStream */
                        webDataStream?: (google.analytics.admin.v1alpha.IWebDataStream|null);

                        /** ChangeHistoryResource androidAppDataStream */
                        androidAppDataStream?: (google.analytics.admin.v1alpha.IAndroidAppDataStream|null);

                        /** ChangeHistoryResource iosAppDataStream */
                        iosAppDataStream?: (google.analytics.admin.v1alpha.IIosAppDataStream|null);

                        /** ChangeHistoryResource firebaseLink */
                        firebaseLink?: (google.analytics.admin.v1alpha.IFirebaseLink|null);

                        /** ChangeHistoryResource googleAdsLink */
                        googleAdsLink?: (google.analytics.admin.v1alpha.IGoogleAdsLink|null);
                    }

                    /** Represents a ChangeHistoryResource. */
                    class ChangeHistoryResource implements IChangeHistoryResource {

                        /**
                         * Constructs a new ChangeHistoryResource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.admin.v1alpha.ChangeHistoryChange.IChangeHistoryResource);

                        /** ChangeHistoryResource account. */
                        public account?: (google.analytics.admin.v1alpha.IAccount|null);

                        /** ChangeHistoryResource property. */
                        public property?: (google.analytics.admin.v1alpha.IProperty|null);

                        /** ChangeHistoryResource webDataStream. */
                        public webDataStream?: (google.analytics.admin.v1alpha.IWebDataStream|null);

                        /** ChangeHistoryResource androidAppDataStream. */
                        public androidAppDataStream?: (google.analytics.admin.v1alpha.IAndroidAppDataStream|null);

                        /** ChangeHistoryResource iosAppDataStream. */
                        public iosAppDataStream?: (google.analytics.admin.v1alpha.IIosAppDataStream|null);

                        /** ChangeHistoryResource firebaseLink. */
                        public firebaseLink?: (google.analytics.admin.v1alpha.IFirebaseLink|null);

                        /** ChangeHistoryResource googleAdsLink. */
                        public googleAdsLink?: (google.analytics.admin.v1alpha.IGoogleAdsLink|null);

                        /** ChangeHistoryResource resource. */
                        public resource?: ("account"|"property"|"webDataStream"|"androidAppDataStream"|"iosAppDataStream"|"firebaseLink"|"googleAdsLink");

                        /**
                         * Creates a new ChangeHistoryResource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ChangeHistoryResource instance
                         */
                        public static create(properties?: google.analytics.admin.v1alpha.ChangeHistoryChange.IChangeHistoryResource): google.analytics.admin.v1alpha.ChangeHistoryChange.ChangeHistoryResource;

                        /**
                         * Encodes the specified ChangeHistoryResource message. Does not implicitly {@link google.analytics.admin.v1alpha.ChangeHistoryChange.ChangeHistoryResource.verify|verify} messages.
                         * @param message ChangeHistoryResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.admin.v1alpha.ChangeHistoryChange.IChangeHistoryResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ChangeHistoryResource message, length delimited. Does not implicitly {@link google.analytics.admin.v1alpha.ChangeHistoryChange.ChangeHistoryResource.verify|verify} messages.
                         * @param message ChangeHistoryResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.admin.v1alpha.ChangeHistoryChange.IChangeHistoryResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ChangeHistoryResource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ChangeHistoryResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.admin.v1alpha.ChangeHistoryChange.ChangeHistoryResource;

                        /**
                         * Decodes a ChangeHistoryResource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ChangeHistoryResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.admin.v1alpha.ChangeHistoryChange.ChangeHistoryResource;

                        /**
                         * Verifies a ChangeHistoryResource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ChangeHistoryResource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ChangeHistoryResource
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.admin.v1alpha.ChangeHistoryChange.ChangeHistoryResource;

                        /**
                         * Creates a plain object from a ChangeHistoryResource message. Also converts values to other types if specified.
                         * @param message ChangeHistoryResource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.admin.v1alpha.ChangeHistoryChange.ChangeHistoryResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ChangeHistoryResource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
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
}
