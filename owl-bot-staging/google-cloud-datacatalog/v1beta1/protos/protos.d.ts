// Copyright 2024 Google LLC
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

        /** Namespace datacatalog. */
        namespace datacatalog {

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** IntegratedSystem enum. */
                enum IntegratedSystem {
                    INTEGRATED_SYSTEM_UNSPECIFIED = 0,
                    BIGQUERY = 1,
                    CLOUD_PUBSUB = 2
                }

                /** ManagingSystem enum. */
                enum ManagingSystem {
                    MANAGING_SYSTEM_UNSPECIFIED = 0,
                    MANAGING_SYSTEM_DATAPLEX = 1,
                    MANAGING_SYSTEM_OTHER = 2
                }

                /** Represents a DataCatalog */
                class DataCatalog extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DataCatalog service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DataCatalog service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DataCatalog;

                    /**
                     * Calls SearchCatalog.
                     * @param request SearchCatalogRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchCatalogResponse
                     */
                    public searchCatalog(request: google.cloud.datacatalog.v1beta1.ISearchCatalogRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.SearchCatalogCallback): void;

                    /**
                     * Calls SearchCatalog.
                     * @param request SearchCatalogRequest message or plain object
                     * @returns Promise
                     */
                    public searchCatalog(request: google.cloud.datacatalog.v1beta1.ISearchCatalogRequest): Promise<google.cloud.datacatalog.v1beta1.SearchCatalogResponse>;

                    /**
                     * Calls CreateEntryGroup.
                     * @param request CreateEntryGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EntryGroup
                     */
                    public createEntryGroup(request: google.cloud.datacatalog.v1beta1.ICreateEntryGroupRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.CreateEntryGroupCallback): void;

                    /**
                     * Calls CreateEntryGroup.
                     * @param request CreateEntryGroupRequest message or plain object
                     * @returns Promise
                     */
                    public createEntryGroup(request: google.cloud.datacatalog.v1beta1.ICreateEntryGroupRequest): Promise<google.cloud.datacatalog.v1beta1.EntryGroup>;

                    /**
                     * Calls UpdateEntryGroup.
                     * @param request UpdateEntryGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EntryGroup
                     */
                    public updateEntryGroup(request: google.cloud.datacatalog.v1beta1.IUpdateEntryGroupRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.UpdateEntryGroupCallback): void;

                    /**
                     * Calls UpdateEntryGroup.
                     * @param request UpdateEntryGroupRequest message or plain object
                     * @returns Promise
                     */
                    public updateEntryGroup(request: google.cloud.datacatalog.v1beta1.IUpdateEntryGroupRequest): Promise<google.cloud.datacatalog.v1beta1.EntryGroup>;

                    /**
                     * Calls GetEntryGroup.
                     * @param request GetEntryGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EntryGroup
                     */
                    public getEntryGroup(request: google.cloud.datacatalog.v1beta1.IGetEntryGroupRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.GetEntryGroupCallback): void;

                    /**
                     * Calls GetEntryGroup.
                     * @param request GetEntryGroupRequest message or plain object
                     * @returns Promise
                     */
                    public getEntryGroup(request: google.cloud.datacatalog.v1beta1.IGetEntryGroupRequest): Promise<google.cloud.datacatalog.v1beta1.EntryGroup>;

                    /**
                     * Calls DeleteEntryGroup.
                     * @param request DeleteEntryGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteEntryGroup(request: google.cloud.datacatalog.v1beta1.IDeleteEntryGroupRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.DeleteEntryGroupCallback): void;

                    /**
                     * Calls DeleteEntryGroup.
                     * @param request DeleteEntryGroupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteEntryGroup(request: google.cloud.datacatalog.v1beta1.IDeleteEntryGroupRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListEntryGroups.
                     * @param request ListEntryGroupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEntryGroupsResponse
                     */
                    public listEntryGroups(request: google.cloud.datacatalog.v1beta1.IListEntryGroupsRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.ListEntryGroupsCallback): void;

                    /**
                     * Calls ListEntryGroups.
                     * @param request ListEntryGroupsRequest message or plain object
                     * @returns Promise
                     */
                    public listEntryGroups(request: google.cloud.datacatalog.v1beta1.IListEntryGroupsRequest): Promise<google.cloud.datacatalog.v1beta1.ListEntryGroupsResponse>;

                    /**
                     * Calls CreateEntry.
                     * @param request CreateEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Entry
                     */
                    public createEntry(request: google.cloud.datacatalog.v1beta1.ICreateEntryRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.CreateEntryCallback): void;

                    /**
                     * Calls CreateEntry.
                     * @param request CreateEntryRequest message or plain object
                     * @returns Promise
                     */
                    public createEntry(request: google.cloud.datacatalog.v1beta1.ICreateEntryRequest): Promise<google.cloud.datacatalog.v1beta1.Entry>;

                    /**
                     * Calls UpdateEntry.
                     * @param request UpdateEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Entry
                     */
                    public updateEntry(request: google.cloud.datacatalog.v1beta1.IUpdateEntryRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.UpdateEntryCallback): void;

                    /**
                     * Calls UpdateEntry.
                     * @param request UpdateEntryRequest message or plain object
                     * @returns Promise
                     */
                    public updateEntry(request: google.cloud.datacatalog.v1beta1.IUpdateEntryRequest): Promise<google.cloud.datacatalog.v1beta1.Entry>;

                    /**
                     * Calls DeleteEntry.
                     * @param request DeleteEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteEntry(request: google.cloud.datacatalog.v1beta1.IDeleteEntryRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.DeleteEntryCallback): void;

                    /**
                     * Calls DeleteEntry.
                     * @param request DeleteEntryRequest message or plain object
                     * @returns Promise
                     */
                    public deleteEntry(request: google.cloud.datacatalog.v1beta1.IDeleteEntryRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetEntry.
                     * @param request GetEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Entry
                     */
                    public getEntry(request: google.cloud.datacatalog.v1beta1.IGetEntryRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.GetEntryCallback): void;

                    /**
                     * Calls GetEntry.
                     * @param request GetEntryRequest message or plain object
                     * @returns Promise
                     */
                    public getEntry(request: google.cloud.datacatalog.v1beta1.IGetEntryRequest): Promise<google.cloud.datacatalog.v1beta1.Entry>;

                    /**
                     * Calls LookupEntry.
                     * @param request LookupEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Entry
                     */
                    public lookupEntry(request: google.cloud.datacatalog.v1beta1.ILookupEntryRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.LookupEntryCallback): void;

                    /**
                     * Calls LookupEntry.
                     * @param request LookupEntryRequest message or plain object
                     * @returns Promise
                     */
                    public lookupEntry(request: google.cloud.datacatalog.v1beta1.ILookupEntryRequest): Promise<google.cloud.datacatalog.v1beta1.Entry>;

                    /**
                     * Calls ListEntries.
                     * @param request ListEntriesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEntriesResponse
                     */
                    public listEntries(request: google.cloud.datacatalog.v1beta1.IListEntriesRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.ListEntriesCallback): void;

                    /**
                     * Calls ListEntries.
                     * @param request ListEntriesRequest message or plain object
                     * @returns Promise
                     */
                    public listEntries(request: google.cloud.datacatalog.v1beta1.IListEntriesRequest): Promise<google.cloud.datacatalog.v1beta1.ListEntriesResponse>;

                    /**
                     * Calls CreateTagTemplate.
                     * @param request CreateTagTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TagTemplate
                     */
                    public createTagTemplate(request: google.cloud.datacatalog.v1beta1.ICreateTagTemplateRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.CreateTagTemplateCallback): void;

                    /**
                     * Calls CreateTagTemplate.
                     * @param request CreateTagTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public createTagTemplate(request: google.cloud.datacatalog.v1beta1.ICreateTagTemplateRequest): Promise<google.cloud.datacatalog.v1beta1.TagTemplate>;

                    /**
                     * Calls GetTagTemplate.
                     * @param request GetTagTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TagTemplate
                     */
                    public getTagTemplate(request: google.cloud.datacatalog.v1beta1.IGetTagTemplateRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.GetTagTemplateCallback): void;

                    /**
                     * Calls GetTagTemplate.
                     * @param request GetTagTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public getTagTemplate(request: google.cloud.datacatalog.v1beta1.IGetTagTemplateRequest): Promise<google.cloud.datacatalog.v1beta1.TagTemplate>;

                    /**
                     * Calls UpdateTagTemplate.
                     * @param request UpdateTagTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TagTemplate
                     */
                    public updateTagTemplate(request: google.cloud.datacatalog.v1beta1.IUpdateTagTemplateRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.UpdateTagTemplateCallback): void;

                    /**
                     * Calls UpdateTagTemplate.
                     * @param request UpdateTagTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public updateTagTemplate(request: google.cloud.datacatalog.v1beta1.IUpdateTagTemplateRequest): Promise<google.cloud.datacatalog.v1beta1.TagTemplate>;

                    /**
                     * Calls DeleteTagTemplate.
                     * @param request DeleteTagTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTagTemplate(request: google.cloud.datacatalog.v1beta1.IDeleteTagTemplateRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.DeleteTagTemplateCallback): void;

                    /**
                     * Calls DeleteTagTemplate.
                     * @param request DeleteTagTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTagTemplate(request: google.cloud.datacatalog.v1beta1.IDeleteTagTemplateRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls CreateTagTemplateField.
                     * @param request CreateTagTemplateFieldRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TagTemplateField
                     */
                    public createTagTemplateField(request: google.cloud.datacatalog.v1beta1.ICreateTagTemplateFieldRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.CreateTagTemplateFieldCallback): void;

                    /**
                     * Calls CreateTagTemplateField.
                     * @param request CreateTagTemplateFieldRequest message or plain object
                     * @returns Promise
                     */
                    public createTagTemplateField(request: google.cloud.datacatalog.v1beta1.ICreateTagTemplateFieldRequest): Promise<google.cloud.datacatalog.v1beta1.TagTemplateField>;

                    /**
                     * Calls UpdateTagTemplateField.
                     * @param request UpdateTagTemplateFieldRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TagTemplateField
                     */
                    public updateTagTemplateField(request: google.cloud.datacatalog.v1beta1.IUpdateTagTemplateFieldRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.UpdateTagTemplateFieldCallback): void;

                    /**
                     * Calls UpdateTagTemplateField.
                     * @param request UpdateTagTemplateFieldRequest message or plain object
                     * @returns Promise
                     */
                    public updateTagTemplateField(request: google.cloud.datacatalog.v1beta1.IUpdateTagTemplateFieldRequest): Promise<google.cloud.datacatalog.v1beta1.TagTemplateField>;

                    /**
                     * Calls RenameTagTemplateField.
                     * @param request RenameTagTemplateFieldRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TagTemplateField
                     */
                    public renameTagTemplateField(request: google.cloud.datacatalog.v1beta1.IRenameTagTemplateFieldRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.RenameTagTemplateFieldCallback): void;

                    /**
                     * Calls RenameTagTemplateField.
                     * @param request RenameTagTemplateFieldRequest message or plain object
                     * @returns Promise
                     */
                    public renameTagTemplateField(request: google.cloud.datacatalog.v1beta1.IRenameTagTemplateFieldRequest): Promise<google.cloud.datacatalog.v1beta1.TagTemplateField>;

                    /**
                     * Calls RenameTagTemplateFieldEnumValue.
                     * @param request RenameTagTemplateFieldEnumValueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TagTemplateField
                     */
                    public renameTagTemplateFieldEnumValue(request: google.cloud.datacatalog.v1beta1.IRenameTagTemplateFieldEnumValueRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.RenameTagTemplateFieldEnumValueCallback): void;

                    /**
                     * Calls RenameTagTemplateFieldEnumValue.
                     * @param request RenameTagTemplateFieldEnumValueRequest message or plain object
                     * @returns Promise
                     */
                    public renameTagTemplateFieldEnumValue(request: google.cloud.datacatalog.v1beta1.IRenameTagTemplateFieldEnumValueRequest): Promise<google.cloud.datacatalog.v1beta1.TagTemplateField>;

                    /**
                     * Calls DeleteTagTemplateField.
                     * @param request DeleteTagTemplateFieldRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTagTemplateField(request: google.cloud.datacatalog.v1beta1.IDeleteTagTemplateFieldRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.DeleteTagTemplateFieldCallback): void;

                    /**
                     * Calls DeleteTagTemplateField.
                     * @param request DeleteTagTemplateFieldRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTagTemplateField(request: google.cloud.datacatalog.v1beta1.IDeleteTagTemplateFieldRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls CreateTag.
                     * @param request CreateTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Tag
                     */
                    public createTag(request: google.cloud.datacatalog.v1beta1.ICreateTagRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.CreateTagCallback): void;

                    /**
                     * Calls CreateTag.
                     * @param request CreateTagRequest message or plain object
                     * @returns Promise
                     */
                    public createTag(request: google.cloud.datacatalog.v1beta1.ICreateTagRequest): Promise<google.cloud.datacatalog.v1beta1.Tag>;

                    /**
                     * Calls UpdateTag.
                     * @param request UpdateTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Tag
                     */
                    public updateTag(request: google.cloud.datacatalog.v1beta1.IUpdateTagRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.UpdateTagCallback): void;

                    /**
                     * Calls UpdateTag.
                     * @param request UpdateTagRequest message or plain object
                     * @returns Promise
                     */
                    public updateTag(request: google.cloud.datacatalog.v1beta1.IUpdateTagRequest): Promise<google.cloud.datacatalog.v1beta1.Tag>;

                    /**
                     * Calls DeleteTag.
                     * @param request DeleteTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTag(request: google.cloud.datacatalog.v1beta1.IDeleteTagRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.DeleteTagCallback): void;

                    /**
                     * Calls DeleteTag.
                     * @param request DeleteTagRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTag(request: google.cloud.datacatalog.v1beta1.IDeleteTagRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListTags.
                     * @param request ListTagsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTagsResponse
                     */
                    public listTags(request: google.cloud.datacatalog.v1beta1.IListTagsRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.ListTagsCallback): void;

                    /**
                     * Calls ListTags.
                     * @param request ListTagsRequest message or plain object
                     * @returns Promise
                     */
                    public listTags(request: google.cloud.datacatalog.v1beta1.IListTagsRequest): Promise<google.cloud.datacatalog.v1beta1.ListTagsResponse>;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.SetIamPolicyCallback): void;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.GetIamPolicyCallback): void;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.cloud.datacatalog.v1beta1.DataCatalog.TestIamPermissionsCallback): void;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;
                }

                namespace DataCatalog {

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|searchCatalog}.
                     * @param error Error, if any
                     * @param [response] SearchCatalogResponse
                     */
                    type SearchCatalogCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.SearchCatalogResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|createEntryGroup}.
                     * @param error Error, if any
                     * @param [response] EntryGroup
                     */
                    type CreateEntryGroupCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.EntryGroup) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|updateEntryGroup}.
                     * @param error Error, if any
                     * @param [response] EntryGroup
                     */
                    type UpdateEntryGroupCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.EntryGroup) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|getEntryGroup}.
                     * @param error Error, if any
                     * @param [response] EntryGroup
                     */
                    type GetEntryGroupCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.EntryGroup) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|deleteEntryGroup}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteEntryGroupCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|listEntryGroups}.
                     * @param error Error, if any
                     * @param [response] ListEntryGroupsResponse
                     */
                    type ListEntryGroupsCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.ListEntryGroupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|createEntry}.
                     * @param error Error, if any
                     * @param [response] Entry
                     */
                    type CreateEntryCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Entry) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|updateEntry}.
                     * @param error Error, if any
                     * @param [response] Entry
                     */
                    type UpdateEntryCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Entry) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|deleteEntry}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteEntryCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|getEntry}.
                     * @param error Error, if any
                     * @param [response] Entry
                     */
                    type GetEntryCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Entry) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|lookupEntry}.
                     * @param error Error, if any
                     * @param [response] Entry
                     */
                    type LookupEntryCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Entry) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|listEntries}.
                     * @param error Error, if any
                     * @param [response] ListEntriesResponse
                     */
                    type ListEntriesCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.ListEntriesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|createTagTemplate}.
                     * @param error Error, if any
                     * @param [response] TagTemplate
                     */
                    type CreateTagTemplateCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.TagTemplate) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|getTagTemplate}.
                     * @param error Error, if any
                     * @param [response] TagTemplate
                     */
                    type GetTagTemplateCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.TagTemplate) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|updateTagTemplate}.
                     * @param error Error, if any
                     * @param [response] TagTemplate
                     */
                    type UpdateTagTemplateCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.TagTemplate) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|deleteTagTemplate}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTagTemplateCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|createTagTemplateField}.
                     * @param error Error, if any
                     * @param [response] TagTemplateField
                     */
                    type CreateTagTemplateFieldCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.TagTemplateField) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|updateTagTemplateField}.
                     * @param error Error, if any
                     * @param [response] TagTemplateField
                     */
                    type UpdateTagTemplateFieldCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.TagTemplateField) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|renameTagTemplateField}.
                     * @param error Error, if any
                     * @param [response] TagTemplateField
                     */
                    type RenameTagTemplateFieldCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.TagTemplateField) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|renameTagTemplateFieldEnumValue}.
                     * @param error Error, if any
                     * @param [response] TagTemplateField
                     */
                    type RenameTagTemplateFieldEnumValueCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.TagTemplateField) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|deleteTagTemplateField}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTagTemplateFieldCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|createTag}.
                     * @param error Error, if any
                     * @param [response] Tag
                     */
                    type CreateTagCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Tag) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|updateTag}.
                     * @param error Error, if any
                     * @param [response] Tag
                     */
                    type UpdateTagCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Tag) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|deleteTag}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTagCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|listTags}.
                     * @param error Error, if any
                     * @param [response] ListTagsResponse
                     */
                    type ListTagsCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.ListTagsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|setIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|getIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog|testIamPermissions}.
                     * @param error Error, if any
                     * @param [response] TestIamPermissionsResponse
                     */
                    type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;
                }

                /** Properties of a SearchCatalogRequest. */
                interface ISearchCatalogRequest {

                    /** SearchCatalogRequest scope */
                    scope?: (google.cloud.datacatalog.v1beta1.SearchCatalogRequest.IScope|null);

                    /** SearchCatalogRequest query */
                    query?: (string|null);

                    /** SearchCatalogRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchCatalogRequest pageToken */
                    pageToken?: (string|null);

                    /** SearchCatalogRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a SearchCatalogRequest. */
                class SearchCatalogRequest implements ISearchCatalogRequest {

                    /**
                     * Constructs a new SearchCatalogRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ISearchCatalogRequest);

                    /** SearchCatalogRequest scope. */
                    public scope?: (google.cloud.datacatalog.v1beta1.SearchCatalogRequest.IScope|null);

                    /** SearchCatalogRequest query. */
                    public query: string;

                    /** SearchCatalogRequest pageSize. */
                    public pageSize: number;

                    /** SearchCatalogRequest pageToken. */
                    public pageToken: string;

                    /** SearchCatalogRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new SearchCatalogRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchCatalogRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ISearchCatalogRequest): google.cloud.datacatalog.v1beta1.SearchCatalogRequest;

                    /**
                     * Encodes the specified SearchCatalogRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SearchCatalogRequest.verify|verify} messages.
                     * @param message SearchCatalogRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ISearchCatalogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchCatalogRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SearchCatalogRequest.verify|verify} messages.
                     * @param message SearchCatalogRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ISearchCatalogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchCatalogRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchCatalogRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.SearchCatalogRequest;

                    /**
                     * Decodes a SearchCatalogRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchCatalogRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.SearchCatalogRequest;

                    /**
                     * Verifies a SearchCatalogRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchCatalogRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchCatalogRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.SearchCatalogRequest;

                    /**
                     * Creates a plain object from a SearchCatalogRequest message. Also converts values to other types if specified.
                     * @param message SearchCatalogRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.SearchCatalogRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchCatalogRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SearchCatalogRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SearchCatalogRequest {

                    /** Properties of a Scope. */
                    interface IScope {

                        /** Scope includeOrgIds */
                        includeOrgIds?: (string[]|null);

                        /** Scope includeProjectIds */
                        includeProjectIds?: (string[]|null);

                        /** Scope includeGcpPublicDatasets */
                        includeGcpPublicDatasets?: (boolean|null);

                        /** Scope restrictedLocations */
                        restrictedLocations?: (string[]|null);
                    }

                    /** Represents a Scope. */
                    class Scope implements IScope {

                        /**
                         * Constructs a new Scope.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.datacatalog.v1beta1.SearchCatalogRequest.IScope);

                        /** Scope includeOrgIds. */
                        public includeOrgIds: string[];

                        /** Scope includeProjectIds. */
                        public includeProjectIds: string[];

                        /** Scope includeGcpPublicDatasets. */
                        public includeGcpPublicDatasets: boolean;

                        /** Scope restrictedLocations. */
                        public restrictedLocations: string[];

                        /**
                         * Creates a new Scope instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Scope instance
                         */
                        public static create(properties?: google.cloud.datacatalog.v1beta1.SearchCatalogRequest.IScope): google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope;

                        /**
                         * Encodes the specified Scope message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.verify|verify} messages.
                         * @param message Scope message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.datacatalog.v1beta1.SearchCatalogRequest.IScope, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Scope message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope.verify|verify} messages.
                         * @param message Scope message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.SearchCatalogRequest.IScope, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Scope message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Scope
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope;

                        /**
                         * Decodes a Scope message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Scope
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope;

                        /**
                         * Verifies a Scope message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Scope message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Scope
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope;

                        /**
                         * Creates a plain object from a Scope message. Also converts values to other types if specified.
                         * @param message Scope
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Scope to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Scope
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a SearchCatalogResponse. */
                interface ISearchCatalogResponse {

                    /** SearchCatalogResponse results */
                    results?: (google.cloud.datacatalog.v1beta1.ISearchCatalogResult[]|null);

                    /** SearchCatalogResponse totalSize */
                    totalSize?: (number|null);

                    /** SearchCatalogResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** SearchCatalogResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a SearchCatalogResponse. */
                class SearchCatalogResponse implements ISearchCatalogResponse {

                    /**
                     * Constructs a new SearchCatalogResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ISearchCatalogResponse);

                    /** SearchCatalogResponse results. */
                    public results: google.cloud.datacatalog.v1beta1.ISearchCatalogResult[];

                    /** SearchCatalogResponse totalSize. */
                    public totalSize: number;

                    /** SearchCatalogResponse nextPageToken. */
                    public nextPageToken: string;

                    /** SearchCatalogResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new SearchCatalogResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchCatalogResponse instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ISearchCatalogResponse): google.cloud.datacatalog.v1beta1.SearchCatalogResponse;

                    /**
                     * Encodes the specified SearchCatalogResponse message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SearchCatalogResponse.verify|verify} messages.
                     * @param message SearchCatalogResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ISearchCatalogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchCatalogResponse message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SearchCatalogResponse.verify|verify} messages.
                     * @param message SearchCatalogResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ISearchCatalogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchCatalogResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchCatalogResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.SearchCatalogResponse;

                    /**
                     * Decodes a SearchCatalogResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchCatalogResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.SearchCatalogResponse;

                    /**
                     * Verifies a SearchCatalogResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchCatalogResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchCatalogResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.SearchCatalogResponse;

                    /**
                     * Creates a plain object from a SearchCatalogResponse message. Also converts values to other types if specified.
                     * @param message SearchCatalogResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.SearchCatalogResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchCatalogResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SearchCatalogResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateEntryGroupRequest. */
                interface ICreateEntryGroupRequest {

                    /** CreateEntryGroupRequest parent */
                    parent?: (string|null);

                    /** CreateEntryGroupRequest entryGroupId */
                    entryGroupId?: (string|null);

                    /** CreateEntryGroupRequest entryGroup */
                    entryGroup?: (google.cloud.datacatalog.v1beta1.IEntryGroup|null);
                }

                /** Represents a CreateEntryGroupRequest. */
                class CreateEntryGroupRequest implements ICreateEntryGroupRequest {

                    /**
                     * Constructs a new CreateEntryGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ICreateEntryGroupRequest);

                    /** CreateEntryGroupRequest parent. */
                    public parent: string;

                    /** CreateEntryGroupRequest entryGroupId. */
                    public entryGroupId: string;

                    /** CreateEntryGroupRequest entryGroup. */
                    public entryGroup?: (google.cloud.datacatalog.v1beta1.IEntryGroup|null);

                    /**
                     * Creates a new CreateEntryGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateEntryGroupRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ICreateEntryGroupRequest): google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest;

                    /**
                     * Encodes the specified CreateEntryGroupRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.verify|verify} messages.
                     * @param message CreateEntryGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ICreateEntryGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateEntryGroupRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest.verify|verify} messages.
                     * @param message CreateEntryGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ICreateEntryGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateEntryGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateEntryGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest;

                    /**
                     * Decodes a CreateEntryGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateEntryGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest;

                    /**
                     * Verifies a CreateEntryGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateEntryGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateEntryGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest;

                    /**
                     * Creates a plain object from a CreateEntryGroupRequest message. Also converts values to other types if specified.
                     * @param message CreateEntryGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.CreateEntryGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateEntryGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateEntryGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateEntryGroupRequest. */
                interface IUpdateEntryGroupRequest {

                    /** UpdateEntryGroupRequest entryGroup */
                    entryGroup?: (google.cloud.datacatalog.v1beta1.IEntryGroup|null);

                    /** UpdateEntryGroupRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateEntryGroupRequest. */
                class UpdateEntryGroupRequest implements IUpdateEntryGroupRequest {

                    /**
                     * Constructs a new UpdateEntryGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IUpdateEntryGroupRequest);

                    /** UpdateEntryGroupRequest entryGroup. */
                    public entryGroup?: (google.cloud.datacatalog.v1beta1.IEntryGroup|null);

                    /** UpdateEntryGroupRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateEntryGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateEntryGroupRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IUpdateEntryGroupRequest): google.cloud.datacatalog.v1beta1.UpdateEntryGroupRequest;

                    /**
                     * Encodes the specified UpdateEntryGroupRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdateEntryGroupRequest.verify|verify} messages.
                     * @param message UpdateEntryGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IUpdateEntryGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateEntryGroupRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdateEntryGroupRequest.verify|verify} messages.
                     * @param message UpdateEntryGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IUpdateEntryGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateEntryGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateEntryGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.UpdateEntryGroupRequest;

                    /**
                     * Decodes an UpdateEntryGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateEntryGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.UpdateEntryGroupRequest;

                    /**
                     * Verifies an UpdateEntryGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateEntryGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateEntryGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.UpdateEntryGroupRequest;

                    /**
                     * Creates a plain object from an UpdateEntryGroupRequest message. Also converts values to other types if specified.
                     * @param message UpdateEntryGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.UpdateEntryGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateEntryGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateEntryGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEntryGroupRequest. */
                interface IGetEntryGroupRequest {

                    /** GetEntryGroupRequest name */
                    name?: (string|null);

                    /** GetEntryGroupRequest readMask */
                    readMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a GetEntryGroupRequest. */
                class GetEntryGroupRequest implements IGetEntryGroupRequest {

                    /**
                     * Constructs a new GetEntryGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IGetEntryGroupRequest);

                    /** GetEntryGroupRequest name. */
                    public name: string;

                    /** GetEntryGroupRequest readMask. */
                    public readMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new GetEntryGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEntryGroupRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IGetEntryGroupRequest): google.cloud.datacatalog.v1beta1.GetEntryGroupRequest;

                    /**
                     * Encodes the specified GetEntryGroupRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.verify|verify} messages.
                     * @param message GetEntryGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IGetEntryGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEntryGroupRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GetEntryGroupRequest.verify|verify} messages.
                     * @param message GetEntryGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IGetEntryGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEntryGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEntryGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.GetEntryGroupRequest;

                    /**
                     * Decodes a GetEntryGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEntryGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.GetEntryGroupRequest;

                    /**
                     * Verifies a GetEntryGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEntryGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEntryGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.GetEntryGroupRequest;

                    /**
                     * Creates a plain object from a GetEntryGroupRequest message. Also converts values to other types if specified.
                     * @param message GetEntryGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.GetEntryGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEntryGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEntryGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteEntryGroupRequest. */
                interface IDeleteEntryGroupRequest {

                    /** DeleteEntryGroupRequest name */
                    name?: (string|null);

                    /** DeleteEntryGroupRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteEntryGroupRequest. */
                class DeleteEntryGroupRequest implements IDeleteEntryGroupRequest {

                    /**
                     * Constructs a new DeleteEntryGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IDeleteEntryGroupRequest);

                    /** DeleteEntryGroupRequest name. */
                    public name: string;

                    /** DeleteEntryGroupRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteEntryGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteEntryGroupRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IDeleteEntryGroupRequest): google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest;

                    /**
                     * Encodes the specified DeleteEntryGroupRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.verify|verify} messages.
                     * @param message DeleteEntryGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IDeleteEntryGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteEntryGroupRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest.verify|verify} messages.
                     * @param message DeleteEntryGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IDeleteEntryGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteEntryGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteEntryGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest;

                    /**
                     * Decodes a DeleteEntryGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteEntryGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest;

                    /**
                     * Verifies a DeleteEntryGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteEntryGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteEntryGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest;

                    /**
                     * Creates a plain object from a DeleteEntryGroupRequest message. Also converts values to other types if specified.
                     * @param message DeleteEntryGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.DeleteEntryGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteEntryGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteEntryGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEntryGroupsRequest. */
                interface IListEntryGroupsRequest {

                    /** ListEntryGroupsRequest parent */
                    parent?: (string|null);

                    /** ListEntryGroupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEntryGroupsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListEntryGroupsRequest. */
                class ListEntryGroupsRequest implements IListEntryGroupsRequest {

                    /**
                     * Constructs a new ListEntryGroupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IListEntryGroupsRequest);

                    /** ListEntryGroupsRequest parent. */
                    public parent: string;

                    /** ListEntryGroupsRequest pageSize. */
                    public pageSize: number;

                    /** ListEntryGroupsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListEntryGroupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEntryGroupsRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IListEntryGroupsRequest): google.cloud.datacatalog.v1beta1.ListEntryGroupsRequest;

                    /**
                     * Encodes the specified ListEntryGroupsRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListEntryGroupsRequest.verify|verify} messages.
                     * @param message ListEntryGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IListEntryGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEntryGroupsRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListEntryGroupsRequest.verify|verify} messages.
                     * @param message ListEntryGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IListEntryGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEntryGroupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEntryGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ListEntryGroupsRequest;

                    /**
                     * Decodes a ListEntryGroupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEntryGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ListEntryGroupsRequest;

                    /**
                     * Verifies a ListEntryGroupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEntryGroupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEntryGroupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ListEntryGroupsRequest;

                    /**
                     * Creates a plain object from a ListEntryGroupsRequest message. Also converts values to other types if specified.
                     * @param message ListEntryGroupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ListEntryGroupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEntryGroupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEntryGroupsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEntryGroupsResponse. */
                interface IListEntryGroupsResponse {

                    /** ListEntryGroupsResponse entryGroups */
                    entryGroups?: (google.cloud.datacatalog.v1beta1.IEntryGroup[]|null);

                    /** ListEntryGroupsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListEntryGroupsResponse. */
                class ListEntryGroupsResponse implements IListEntryGroupsResponse {

                    /**
                     * Constructs a new ListEntryGroupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IListEntryGroupsResponse);

                    /** ListEntryGroupsResponse entryGroups. */
                    public entryGroups: google.cloud.datacatalog.v1beta1.IEntryGroup[];

                    /** ListEntryGroupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListEntryGroupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEntryGroupsResponse instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IListEntryGroupsResponse): google.cloud.datacatalog.v1beta1.ListEntryGroupsResponse;

                    /**
                     * Encodes the specified ListEntryGroupsResponse message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListEntryGroupsResponse.verify|verify} messages.
                     * @param message ListEntryGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IListEntryGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEntryGroupsResponse message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListEntryGroupsResponse.verify|verify} messages.
                     * @param message ListEntryGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IListEntryGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEntryGroupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEntryGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ListEntryGroupsResponse;

                    /**
                     * Decodes a ListEntryGroupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEntryGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ListEntryGroupsResponse;

                    /**
                     * Verifies a ListEntryGroupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEntryGroupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEntryGroupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ListEntryGroupsResponse;

                    /**
                     * Creates a plain object from a ListEntryGroupsResponse message. Also converts values to other types if specified.
                     * @param message ListEntryGroupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ListEntryGroupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEntryGroupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEntryGroupsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateEntryRequest. */
                interface ICreateEntryRequest {

                    /** CreateEntryRequest parent */
                    parent?: (string|null);

                    /** CreateEntryRequest entryId */
                    entryId?: (string|null);

                    /** CreateEntryRequest entry */
                    entry?: (google.cloud.datacatalog.v1beta1.IEntry|null);
                }

                /** Represents a CreateEntryRequest. */
                class CreateEntryRequest implements ICreateEntryRequest {

                    /**
                     * Constructs a new CreateEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ICreateEntryRequest);

                    /** CreateEntryRequest parent. */
                    public parent: string;

                    /** CreateEntryRequest entryId. */
                    public entryId: string;

                    /** CreateEntryRequest entry. */
                    public entry?: (google.cloud.datacatalog.v1beta1.IEntry|null);

                    /**
                     * Creates a new CreateEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateEntryRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ICreateEntryRequest): google.cloud.datacatalog.v1beta1.CreateEntryRequest;

                    /**
                     * Encodes the specified CreateEntryRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreateEntryRequest.verify|verify} messages.
                     * @param message CreateEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ICreateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateEntryRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreateEntryRequest.verify|verify} messages.
                     * @param message CreateEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ICreateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.CreateEntryRequest;

                    /**
                     * Decodes a CreateEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.CreateEntryRequest;

                    /**
                     * Verifies a CreateEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.CreateEntryRequest;

                    /**
                     * Creates a plain object from a CreateEntryRequest message. Also converts values to other types if specified.
                     * @param message CreateEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.CreateEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateEntryRequest. */
                interface IUpdateEntryRequest {

                    /** UpdateEntryRequest entry */
                    entry?: (google.cloud.datacatalog.v1beta1.IEntry|null);

                    /** UpdateEntryRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateEntryRequest. */
                class UpdateEntryRequest implements IUpdateEntryRequest {

                    /**
                     * Constructs a new UpdateEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IUpdateEntryRequest);

                    /** UpdateEntryRequest entry. */
                    public entry?: (google.cloud.datacatalog.v1beta1.IEntry|null);

                    /** UpdateEntryRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateEntryRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IUpdateEntryRequest): google.cloud.datacatalog.v1beta1.UpdateEntryRequest;

                    /**
                     * Encodes the specified UpdateEntryRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdateEntryRequest.verify|verify} messages.
                     * @param message UpdateEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IUpdateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateEntryRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdateEntryRequest.verify|verify} messages.
                     * @param message UpdateEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IUpdateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.UpdateEntryRequest;

                    /**
                     * Decodes an UpdateEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.UpdateEntryRequest;

                    /**
                     * Verifies an UpdateEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.UpdateEntryRequest;

                    /**
                     * Creates a plain object from an UpdateEntryRequest message. Also converts values to other types if specified.
                     * @param message UpdateEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.UpdateEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteEntryRequest. */
                interface IDeleteEntryRequest {

                    /** DeleteEntryRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteEntryRequest. */
                class DeleteEntryRequest implements IDeleteEntryRequest {

                    /**
                     * Constructs a new DeleteEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IDeleteEntryRequest);

                    /** DeleteEntryRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteEntryRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IDeleteEntryRequest): google.cloud.datacatalog.v1beta1.DeleteEntryRequest;

                    /**
                     * Encodes the specified DeleteEntryRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeleteEntryRequest.verify|verify} messages.
                     * @param message DeleteEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IDeleteEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteEntryRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeleteEntryRequest.verify|verify} messages.
                     * @param message DeleteEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IDeleteEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.DeleteEntryRequest;

                    /**
                     * Decodes a DeleteEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.DeleteEntryRequest;

                    /**
                     * Verifies a DeleteEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.DeleteEntryRequest;

                    /**
                     * Creates a plain object from a DeleteEntryRequest message. Also converts values to other types if specified.
                     * @param message DeleteEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.DeleteEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEntryRequest. */
                interface IGetEntryRequest {

                    /** GetEntryRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEntryRequest. */
                class GetEntryRequest implements IGetEntryRequest {

                    /**
                     * Constructs a new GetEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IGetEntryRequest);

                    /** GetEntryRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEntryRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IGetEntryRequest): google.cloud.datacatalog.v1beta1.GetEntryRequest;

                    /**
                     * Encodes the specified GetEntryRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GetEntryRequest.verify|verify} messages.
                     * @param message GetEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IGetEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEntryRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GetEntryRequest.verify|verify} messages.
                     * @param message GetEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IGetEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.GetEntryRequest;

                    /**
                     * Decodes a GetEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.GetEntryRequest;

                    /**
                     * Verifies a GetEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.GetEntryRequest;

                    /**
                     * Creates a plain object from a GetEntryRequest message. Also converts values to other types if specified.
                     * @param message GetEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.GetEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LookupEntryRequest. */
                interface ILookupEntryRequest {

                    /** LookupEntryRequest linkedResource */
                    linkedResource?: (string|null);

                    /** LookupEntryRequest sqlResource */
                    sqlResource?: (string|null);
                }

                /** Represents a LookupEntryRequest. */
                class LookupEntryRequest implements ILookupEntryRequest {

                    /**
                     * Constructs a new LookupEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ILookupEntryRequest);

                    /** LookupEntryRequest linkedResource. */
                    public linkedResource?: (string|null);

                    /** LookupEntryRequest sqlResource. */
                    public sqlResource?: (string|null);

                    /** LookupEntryRequest targetName. */
                    public targetName?: ("linkedResource"|"sqlResource");

                    /**
                     * Creates a new LookupEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LookupEntryRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ILookupEntryRequest): google.cloud.datacatalog.v1beta1.LookupEntryRequest;

                    /**
                     * Encodes the specified LookupEntryRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.LookupEntryRequest.verify|verify} messages.
                     * @param message LookupEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ILookupEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LookupEntryRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.LookupEntryRequest.verify|verify} messages.
                     * @param message LookupEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ILookupEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LookupEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LookupEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.LookupEntryRequest;

                    /**
                     * Decodes a LookupEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LookupEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.LookupEntryRequest;

                    /**
                     * Verifies a LookupEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LookupEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LookupEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.LookupEntryRequest;

                    /**
                     * Creates a plain object from a LookupEntryRequest message. Also converts values to other types if specified.
                     * @param message LookupEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.LookupEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LookupEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LookupEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Entry. */
                interface IEntry {

                    /** Entry name */
                    name?: (string|null);

                    /** Entry linkedResource */
                    linkedResource?: (string|null);

                    /** Entry type */
                    type?: (google.cloud.datacatalog.v1beta1.EntryType|keyof typeof google.cloud.datacatalog.v1beta1.EntryType|null);

                    /** Entry userSpecifiedType */
                    userSpecifiedType?: (string|null);

                    /** Entry integratedSystem */
                    integratedSystem?: (google.cloud.datacatalog.v1beta1.IntegratedSystem|keyof typeof google.cloud.datacatalog.v1beta1.IntegratedSystem|null);

                    /** Entry userSpecifiedSystem */
                    userSpecifiedSystem?: (string|null);

                    /** Entry gcsFilesetSpec */
                    gcsFilesetSpec?: (google.cloud.datacatalog.v1beta1.IGcsFilesetSpec|null);

                    /** Entry bigqueryTableSpec */
                    bigqueryTableSpec?: (google.cloud.datacatalog.v1beta1.IBigQueryTableSpec|null);

                    /** Entry bigqueryDateShardedSpec */
                    bigqueryDateShardedSpec?: (google.cloud.datacatalog.v1beta1.IBigQueryDateShardedSpec|null);

                    /** Entry displayName */
                    displayName?: (string|null);

                    /** Entry description */
                    description?: (string|null);

                    /** Entry schema */
                    schema?: (google.cloud.datacatalog.v1beta1.ISchema|null);

                    /** Entry sourceSystemTimestamps */
                    sourceSystemTimestamps?: (google.cloud.datacatalog.v1beta1.ISystemTimestamps|null);

                    /** Entry usageSignal */
                    usageSignal?: (google.cloud.datacatalog.v1beta1.IUsageSignal|null);
                }

                /** Represents an Entry. */
                class Entry implements IEntry {

                    /**
                     * Constructs a new Entry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IEntry);

                    /** Entry name. */
                    public name: string;

                    /** Entry linkedResource. */
                    public linkedResource: string;

                    /** Entry type. */
                    public type?: (google.cloud.datacatalog.v1beta1.EntryType|keyof typeof google.cloud.datacatalog.v1beta1.EntryType|null);

                    /** Entry userSpecifiedType. */
                    public userSpecifiedType?: (string|null);

                    /** Entry integratedSystem. */
                    public integratedSystem?: (google.cloud.datacatalog.v1beta1.IntegratedSystem|keyof typeof google.cloud.datacatalog.v1beta1.IntegratedSystem|null);

                    /** Entry userSpecifiedSystem. */
                    public userSpecifiedSystem?: (string|null);

                    /** Entry gcsFilesetSpec. */
                    public gcsFilesetSpec?: (google.cloud.datacatalog.v1beta1.IGcsFilesetSpec|null);

                    /** Entry bigqueryTableSpec. */
                    public bigqueryTableSpec?: (google.cloud.datacatalog.v1beta1.IBigQueryTableSpec|null);

                    /** Entry bigqueryDateShardedSpec. */
                    public bigqueryDateShardedSpec?: (google.cloud.datacatalog.v1beta1.IBigQueryDateShardedSpec|null);

                    /** Entry displayName. */
                    public displayName: string;

                    /** Entry description. */
                    public description: string;

                    /** Entry schema. */
                    public schema?: (google.cloud.datacatalog.v1beta1.ISchema|null);

                    /** Entry sourceSystemTimestamps. */
                    public sourceSystemTimestamps?: (google.cloud.datacatalog.v1beta1.ISystemTimestamps|null);

                    /** Entry usageSignal. */
                    public usageSignal?: (google.cloud.datacatalog.v1beta1.IUsageSignal|null);

                    /** Entry entryType. */
                    public entryType?: ("type"|"userSpecifiedType");

                    /** Entry system. */
                    public system?: ("integratedSystem"|"userSpecifiedSystem");

                    /** Entry typeSpec. */
                    public typeSpec?: ("gcsFilesetSpec"|"bigqueryTableSpec"|"bigqueryDateShardedSpec");

                    /**
                     * Creates a new Entry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Entry instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IEntry): google.cloud.datacatalog.v1beta1.Entry;

                    /**
                     * Encodes the specified Entry message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.Entry.verify|verify} messages.
                     * @param message Entry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Entry message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.Entry.verify|verify} messages.
                     * @param message Entry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Entry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Entry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.Entry;

                    /**
                     * Decodes an Entry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Entry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.Entry;

                    /**
                     * Verifies an Entry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Entry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Entry
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.Entry;

                    /**
                     * Creates a plain object from an Entry message. Also converts values to other types if specified.
                     * @param message Entry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Entry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Entry
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EntryGroup. */
                interface IEntryGroup {

                    /** EntryGroup name */
                    name?: (string|null);

                    /** EntryGroup displayName */
                    displayName?: (string|null);

                    /** EntryGroup description */
                    description?: (string|null);

                    /** EntryGroup dataCatalogTimestamps */
                    dataCatalogTimestamps?: (google.cloud.datacatalog.v1beta1.ISystemTimestamps|null);
                }

                /** Represents an EntryGroup. */
                class EntryGroup implements IEntryGroup {

                    /**
                     * Constructs a new EntryGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IEntryGroup);

                    /** EntryGroup name. */
                    public name: string;

                    /** EntryGroup displayName. */
                    public displayName: string;

                    /** EntryGroup description. */
                    public description: string;

                    /** EntryGroup dataCatalogTimestamps. */
                    public dataCatalogTimestamps?: (google.cloud.datacatalog.v1beta1.ISystemTimestamps|null);

                    /**
                     * Creates a new EntryGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EntryGroup instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IEntryGroup): google.cloud.datacatalog.v1beta1.EntryGroup;

                    /**
                     * Encodes the specified EntryGroup message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.EntryGroup.verify|verify} messages.
                     * @param message EntryGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IEntryGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EntryGroup message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.EntryGroup.verify|verify} messages.
                     * @param message EntryGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IEntryGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EntryGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EntryGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.EntryGroup;

                    /**
                     * Decodes an EntryGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EntryGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.EntryGroup;

                    /**
                     * Verifies an EntryGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EntryGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EntryGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.EntryGroup;

                    /**
                     * Creates a plain object from an EntryGroup message. Also converts values to other types if specified.
                     * @param message EntryGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.EntryGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EntryGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EntryGroup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTagTemplateRequest. */
                interface ICreateTagTemplateRequest {

                    /** CreateTagTemplateRequest parent */
                    parent?: (string|null);

                    /** CreateTagTemplateRequest tagTemplateId */
                    tagTemplateId?: (string|null);

                    /** CreateTagTemplateRequest tagTemplate */
                    tagTemplate?: (google.cloud.datacatalog.v1beta1.ITagTemplate|null);
                }

                /** Represents a CreateTagTemplateRequest. */
                class CreateTagTemplateRequest implements ICreateTagTemplateRequest {

                    /**
                     * Constructs a new CreateTagTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ICreateTagTemplateRequest);

                    /** CreateTagTemplateRequest parent. */
                    public parent: string;

                    /** CreateTagTemplateRequest tagTemplateId. */
                    public tagTemplateId: string;

                    /** CreateTagTemplateRequest tagTemplate. */
                    public tagTemplate?: (google.cloud.datacatalog.v1beta1.ITagTemplate|null);

                    /**
                     * Creates a new CreateTagTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTagTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ICreateTagTemplateRequest): google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest;

                    /**
                     * Encodes the specified CreateTagTemplateRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.verify|verify} messages.
                     * @param message CreateTagTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ICreateTagTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTagTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest.verify|verify} messages.
                     * @param message CreateTagTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ICreateTagTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTagTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTagTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest;

                    /**
                     * Decodes a CreateTagTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTagTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest;

                    /**
                     * Verifies a CreateTagTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTagTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTagTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest;

                    /**
                     * Creates a plain object from a CreateTagTemplateRequest message. Also converts values to other types if specified.
                     * @param message CreateTagTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTagTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTagTemplateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTagTemplateRequest. */
                interface IGetTagTemplateRequest {

                    /** GetTagTemplateRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTagTemplateRequest. */
                class GetTagTemplateRequest implements IGetTagTemplateRequest {

                    /**
                     * Constructs a new GetTagTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IGetTagTemplateRequest);

                    /** GetTagTemplateRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTagTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTagTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IGetTagTemplateRequest): google.cloud.datacatalog.v1beta1.GetTagTemplateRequest;

                    /**
                     * Encodes the specified GetTagTemplateRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.verify|verify} messages.
                     * @param message GetTagTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IGetTagTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTagTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GetTagTemplateRequest.verify|verify} messages.
                     * @param message GetTagTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IGetTagTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTagTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTagTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.GetTagTemplateRequest;

                    /**
                     * Decodes a GetTagTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTagTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.GetTagTemplateRequest;

                    /**
                     * Verifies a GetTagTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTagTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTagTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.GetTagTemplateRequest;

                    /**
                     * Creates a plain object from a GetTagTemplateRequest message. Also converts values to other types if specified.
                     * @param message GetTagTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.GetTagTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTagTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTagTemplateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateTagTemplateRequest. */
                interface IUpdateTagTemplateRequest {

                    /** UpdateTagTemplateRequest tagTemplate */
                    tagTemplate?: (google.cloud.datacatalog.v1beta1.ITagTemplate|null);

                    /** UpdateTagTemplateRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateTagTemplateRequest. */
                class UpdateTagTemplateRequest implements IUpdateTagTemplateRequest {

                    /**
                     * Constructs a new UpdateTagTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IUpdateTagTemplateRequest);

                    /** UpdateTagTemplateRequest tagTemplate. */
                    public tagTemplate?: (google.cloud.datacatalog.v1beta1.ITagTemplate|null);

                    /** UpdateTagTemplateRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateTagTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTagTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IUpdateTagTemplateRequest): google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest;

                    /**
                     * Encodes the specified UpdateTagTemplateRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.verify|verify} messages.
                     * @param message UpdateTagTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IUpdateTagTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTagTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest.verify|verify} messages.
                     * @param message UpdateTagTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IUpdateTagTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTagTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTagTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest;

                    /**
                     * Decodes an UpdateTagTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTagTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest;

                    /**
                     * Verifies an UpdateTagTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTagTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTagTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest;

                    /**
                     * Creates a plain object from an UpdateTagTemplateRequest message. Also converts values to other types if specified.
                     * @param message UpdateTagTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTagTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateTagTemplateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTagTemplateRequest. */
                interface IDeleteTagTemplateRequest {

                    /** DeleteTagTemplateRequest name */
                    name?: (string|null);

                    /** DeleteTagTemplateRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteTagTemplateRequest. */
                class DeleteTagTemplateRequest implements IDeleteTagTemplateRequest {

                    /**
                     * Constructs a new DeleteTagTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IDeleteTagTemplateRequest);

                    /** DeleteTagTemplateRequest name. */
                    public name: string;

                    /** DeleteTagTemplateRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteTagTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTagTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IDeleteTagTemplateRequest): google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest;

                    /**
                     * Encodes the specified DeleteTagTemplateRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.verify|verify} messages.
                     * @param message DeleteTagTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IDeleteTagTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTagTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest.verify|verify} messages.
                     * @param message DeleteTagTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IDeleteTagTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTagTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTagTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest;

                    /**
                     * Decodes a DeleteTagTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTagTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest;

                    /**
                     * Verifies a DeleteTagTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTagTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTagTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest;

                    /**
                     * Creates a plain object from a DeleteTagTemplateRequest message. Also converts values to other types if specified.
                     * @param message DeleteTagTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTagTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTagTemplateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTagRequest. */
                interface ICreateTagRequest {

                    /** CreateTagRequest parent */
                    parent?: (string|null);

                    /** CreateTagRequest tag */
                    tag?: (google.cloud.datacatalog.v1beta1.ITag|null);
                }

                /** Represents a CreateTagRequest. */
                class CreateTagRequest implements ICreateTagRequest {

                    /**
                     * Constructs a new CreateTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ICreateTagRequest);

                    /** CreateTagRequest parent. */
                    public parent: string;

                    /** CreateTagRequest tag. */
                    public tag?: (google.cloud.datacatalog.v1beta1.ITag|null);

                    /**
                     * Creates a new CreateTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTagRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ICreateTagRequest): google.cloud.datacatalog.v1beta1.CreateTagRequest;

                    /**
                     * Encodes the specified CreateTagRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreateTagRequest.verify|verify} messages.
                     * @param message CreateTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ICreateTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTagRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreateTagRequest.verify|verify} messages.
                     * @param message CreateTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ICreateTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.CreateTagRequest;

                    /**
                     * Decodes a CreateTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.CreateTagRequest;

                    /**
                     * Verifies a CreateTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.CreateTagRequest;

                    /**
                     * Creates a plain object from a CreateTagRequest message. Also converts values to other types if specified.
                     * @param message CreateTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.CreateTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTagRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateTagRequest. */
                interface IUpdateTagRequest {

                    /** UpdateTagRequest tag */
                    tag?: (google.cloud.datacatalog.v1beta1.ITag|null);

                    /** UpdateTagRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateTagRequest. */
                class UpdateTagRequest implements IUpdateTagRequest {

                    /**
                     * Constructs a new UpdateTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IUpdateTagRequest);

                    /** UpdateTagRequest tag. */
                    public tag?: (google.cloud.datacatalog.v1beta1.ITag|null);

                    /** UpdateTagRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTagRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IUpdateTagRequest): google.cloud.datacatalog.v1beta1.UpdateTagRequest;

                    /**
                     * Encodes the specified UpdateTagRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdateTagRequest.verify|verify} messages.
                     * @param message UpdateTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IUpdateTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTagRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdateTagRequest.verify|verify} messages.
                     * @param message UpdateTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IUpdateTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.UpdateTagRequest;

                    /**
                     * Decodes an UpdateTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.UpdateTagRequest;

                    /**
                     * Verifies an UpdateTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.UpdateTagRequest;

                    /**
                     * Creates a plain object from an UpdateTagRequest message. Also converts values to other types if specified.
                     * @param message UpdateTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.UpdateTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateTagRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTagRequest. */
                interface IDeleteTagRequest {

                    /** DeleteTagRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTagRequest. */
                class DeleteTagRequest implements IDeleteTagRequest {

                    /**
                     * Constructs a new DeleteTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IDeleteTagRequest);

                    /** DeleteTagRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTagRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IDeleteTagRequest): google.cloud.datacatalog.v1beta1.DeleteTagRequest;

                    /**
                     * Encodes the specified DeleteTagRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeleteTagRequest.verify|verify} messages.
                     * @param message DeleteTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IDeleteTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTagRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeleteTagRequest.verify|verify} messages.
                     * @param message DeleteTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IDeleteTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.DeleteTagRequest;

                    /**
                     * Decodes a DeleteTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.DeleteTagRequest;

                    /**
                     * Verifies a DeleteTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.DeleteTagRequest;

                    /**
                     * Creates a plain object from a DeleteTagRequest message. Also converts values to other types if specified.
                     * @param message DeleteTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.DeleteTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTagRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTagTemplateFieldRequest. */
                interface ICreateTagTemplateFieldRequest {

                    /** CreateTagTemplateFieldRequest parent */
                    parent?: (string|null);

                    /** CreateTagTemplateFieldRequest tagTemplateFieldId */
                    tagTemplateFieldId?: (string|null);

                    /** CreateTagTemplateFieldRequest tagTemplateField */
                    tagTemplateField?: (google.cloud.datacatalog.v1beta1.ITagTemplateField|null);
                }

                /** Represents a CreateTagTemplateFieldRequest. */
                class CreateTagTemplateFieldRequest implements ICreateTagTemplateFieldRequest {

                    /**
                     * Constructs a new CreateTagTemplateFieldRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ICreateTagTemplateFieldRequest);

                    /** CreateTagTemplateFieldRequest parent. */
                    public parent: string;

                    /** CreateTagTemplateFieldRequest tagTemplateFieldId. */
                    public tagTemplateFieldId: string;

                    /** CreateTagTemplateFieldRequest tagTemplateField. */
                    public tagTemplateField?: (google.cloud.datacatalog.v1beta1.ITagTemplateField|null);

                    /**
                     * Creates a new CreateTagTemplateFieldRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTagTemplateFieldRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ICreateTagTemplateFieldRequest): google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest;

                    /**
                     * Encodes the specified CreateTagTemplateFieldRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.verify|verify} messages.
                     * @param message CreateTagTemplateFieldRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ICreateTagTemplateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTagTemplateFieldRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest.verify|verify} messages.
                     * @param message CreateTagTemplateFieldRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ICreateTagTemplateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTagTemplateFieldRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTagTemplateFieldRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest;

                    /**
                     * Decodes a CreateTagTemplateFieldRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTagTemplateFieldRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest;

                    /**
                     * Verifies a CreateTagTemplateFieldRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTagTemplateFieldRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTagTemplateFieldRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest;

                    /**
                     * Creates a plain object from a CreateTagTemplateFieldRequest message. Also converts values to other types if specified.
                     * @param message CreateTagTemplateFieldRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTagTemplateFieldRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTagTemplateFieldRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateTagTemplateFieldRequest. */
                interface IUpdateTagTemplateFieldRequest {

                    /** UpdateTagTemplateFieldRequest name */
                    name?: (string|null);

                    /** UpdateTagTemplateFieldRequest tagTemplateField */
                    tagTemplateField?: (google.cloud.datacatalog.v1beta1.ITagTemplateField|null);

                    /** UpdateTagTemplateFieldRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateTagTemplateFieldRequest. */
                class UpdateTagTemplateFieldRequest implements IUpdateTagTemplateFieldRequest {

                    /**
                     * Constructs a new UpdateTagTemplateFieldRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IUpdateTagTemplateFieldRequest);

                    /** UpdateTagTemplateFieldRequest name. */
                    public name: string;

                    /** UpdateTagTemplateFieldRequest tagTemplateField. */
                    public tagTemplateField?: (google.cloud.datacatalog.v1beta1.ITagTemplateField|null);

                    /** UpdateTagTemplateFieldRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateTagTemplateFieldRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTagTemplateFieldRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IUpdateTagTemplateFieldRequest): google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest;

                    /**
                     * Encodes the specified UpdateTagTemplateFieldRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.verify|verify} messages.
                     * @param message UpdateTagTemplateFieldRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IUpdateTagTemplateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTagTemplateFieldRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest.verify|verify} messages.
                     * @param message UpdateTagTemplateFieldRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IUpdateTagTemplateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTagTemplateFieldRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTagTemplateFieldRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest;

                    /**
                     * Decodes an UpdateTagTemplateFieldRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTagTemplateFieldRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest;

                    /**
                     * Verifies an UpdateTagTemplateFieldRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTagTemplateFieldRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTagTemplateFieldRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest;

                    /**
                     * Creates a plain object from an UpdateTagTemplateFieldRequest message. Also converts values to other types if specified.
                     * @param message UpdateTagTemplateFieldRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTagTemplateFieldRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateTagTemplateFieldRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RenameTagTemplateFieldRequest. */
                interface IRenameTagTemplateFieldRequest {

                    /** RenameTagTemplateFieldRequest name */
                    name?: (string|null);

                    /** RenameTagTemplateFieldRequest newTagTemplateFieldId */
                    newTagTemplateFieldId?: (string|null);
                }

                /** Represents a RenameTagTemplateFieldRequest. */
                class RenameTagTemplateFieldRequest implements IRenameTagTemplateFieldRequest {

                    /**
                     * Constructs a new RenameTagTemplateFieldRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IRenameTagTemplateFieldRequest);

                    /** RenameTagTemplateFieldRequest name. */
                    public name: string;

                    /** RenameTagTemplateFieldRequest newTagTemplateFieldId. */
                    public newTagTemplateFieldId: string;

                    /**
                     * Creates a new RenameTagTemplateFieldRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RenameTagTemplateFieldRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IRenameTagTemplateFieldRequest): google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest;

                    /**
                     * Encodes the specified RenameTagTemplateFieldRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.verify|verify} messages.
                     * @param message RenameTagTemplateFieldRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IRenameTagTemplateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RenameTagTemplateFieldRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest.verify|verify} messages.
                     * @param message RenameTagTemplateFieldRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IRenameTagTemplateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RenameTagTemplateFieldRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RenameTagTemplateFieldRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest;

                    /**
                     * Decodes a RenameTagTemplateFieldRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RenameTagTemplateFieldRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest;

                    /**
                     * Verifies a RenameTagTemplateFieldRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RenameTagTemplateFieldRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RenameTagTemplateFieldRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest;

                    /**
                     * Creates a plain object from a RenameTagTemplateFieldRequest message. Also converts values to other types if specified.
                     * @param message RenameTagTemplateFieldRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RenameTagTemplateFieldRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RenameTagTemplateFieldRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RenameTagTemplateFieldEnumValueRequest. */
                interface IRenameTagTemplateFieldEnumValueRequest {

                    /** RenameTagTemplateFieldEnumValueRequest name */
                    name?: (string|null);

                    /** RenameTagTemplateFieldEnumValueRequest newEnumValueDisplayName */
                    newEnumValueDisplayName?: (string|null);
                }

                /** Represents a RenameTagTemplateFieldEnumValueRequest. */
                class RenameTagTemplateFieldEnumValueRequest implements IRenameTagTemplateFieldEnumValueRequest {

                    /**
                     * Constructs a new RenameTagTemplateFieldEnumValueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IRenameTagTemplateFieldEnumValueRequest);

                    /** RenameTagTemplateFieldEnumValueRequest name. */
                    public name: string;

                    /** RenameTagTemplateFieldEnumValueRequest newEnumValueDisplayName. */
                    public newEnumValueDisplayName: string;

                    /**
                     * Creates a new RenameTagTemplateFieldEnumValueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RenameTagTemplateFieldEnumValueRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IRenameTagTemplateFieldEnumValueRequest): google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldEnumValueRequest;

                    /**
                     * Encodes the specified RenameTagTemplateFieldEnumValueRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldEnumValueRequest.verify|verify} messages.
                     * @param message RenameTagTemplateFieldEnumValueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IRenameTagTemplateFieldEnumValueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RenameTagTemplateFieldEnumValueRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldEnumValueRequest.verify|verify} messages.
                     * @param message RenameTagTemplateFieldEnumValueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IRenameTagTemplateFieldEnumValueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RenameTagTemplateFieldEnumValueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RenameTagTemplateFieldEnumValueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldEnumValueRequest;

                    /**
                     * Decodes a RenameTagTemplateFieldEnumValueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RenameTagTemplateFieldEnumValueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldEnumValueRequest;

                    /**
                     * Verifies a RenameTagTemplateFieldEnumValueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RenameTagTemplateFieldEnumValueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RenameTagTemplateFieldEnumValueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldEnumValueRequest;

                    /**
                     * Creates a plain object from a RenameTagTemplateFieldEnumValueRequest message. Also converts values to other types if specified.
                     * @param message RenameTagTemplateFieldEnumValueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldEnumValueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RenameTagTemplateFieldEnumValueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RenameTagTemplateFieldEnumValueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTagTemplateFieldRequest. */
                interface IDeleteTagTemplateFieldRequest {

                    /** DeleteTagTemplateFieldRequest name */
                    name?: (string|null);

                    /** DeleteTagTemplateFieldRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteTagTemplateFieldRequest. */
                class DeleteTagTemplateFieldRequest implements IDeleteTagTemplateFieldRequest {

                    /**
                     * Constructs a new DeleteTagTemplateFieldRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IDeleteTagTemplateFieldRequest);

                    /** DeleteTagTemplateFieldRequest name. */
                    public name: string;

                    /** DeleteTagTemplateFieldRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteTagTemplateFieldRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTagTemplateFieldRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IDeleteTagTemplateFieldRequest): google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest;

                    /**
                     * Encodes the specified DeleteTagTemplateFieldRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.verify|verify} messages.
                     * @param message DeleteTagTemplateFieldRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IDeleteTagTemplateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTagTemplateFieldRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest.verify|verify} messages.
                     * @param message DeleteTagTemplateFieldRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IDeleteTagTemplateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTagTemplateFieldRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTagTemplateFieldRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest;

                    /**
                     * Decodes a DeleteTagTemplateFieldRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTagTemplateFieldRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest;

                    /**
                     * Verifies a DeleteTagTemplateFieldRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTagTemplateFieldRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTagTemplateFieldRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest;

                    /**
                     * Creates a plain object from a DeleteTagTemplateFieldRequest message. Also converts values to other types if specified.
                     * @param message DeleteTagTemplateFieldRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTagTemplateFieldRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTagTemplateFieldRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTagsRequest. */
                interface IListTagsRequest {

                    /** ListTagsRequest parent */
                    parent?: (string|null);

                    /** ListTagsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTagsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTagsRequest. */
                class ListTagsRequest implements IListTagsRequest {

                    /**
                     * Constructs a new ListTagsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IListTagsRequest);

                    /** ListTagsRequest parent. */
                    public parent: string;

                    /** ListTagsRequest pageSize. */
                    public pageSize: number;

                    /** ListTagsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTagsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTagsRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IListTagsRequest): google.cloud.datacatalog.v1beta1.ListTagsRequest;

                    /**
                     * Encodes the specified ListTagsRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListTagsRequest.verify|verify} messages.
                     * @param message ListTagsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IListTagsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTagsRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListTagsRequest.verify|verify} messages.
                     * @param message ListTagsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IListTagsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTagsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTagsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ListTagsRequest;

                    /**
                     * Decodes a ListTagsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTagsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ListTagsRequest;

                    /**
                     * Verifies a ListTagsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTagsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTagsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ListTagsRequest;

                    /**
                     * Creates a plain object from a ListTagsRequest message. Also converts values to other types if specified.
                     * @param message ListTagsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ListTagsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTagsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTagsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTagsResponse. */
                interface IListTagsResponse {

                    /** ListTagsResponse tags */
                    tags?: (google.cloud.datacatalog.v1beta1.ITag[]|null);

                    /** ListTagsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTagsResponse. */
                class ListTagsResponse implements IListTagsResponse {

                    /**
                     * Constructs a new ListTagsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IListTagsResponse);

                    /** ListTagsResponse tags. */
                    public tags: google.cloud.datacatalog.v1beta1.ITag[];

                    /** ListTagsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTagsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTagsResponse instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IListTagsResponse): google.cloud.datacatalog.v1beta1.ListTagsResponse;

                    /**
                     * Encodes the specified ListTagsResponse message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListTagsResponse.verify|verify} messages.
                     * @param message ListTagsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IListTagsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTagsResponse message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListTagsResponse.verify|verify} messages.
                     * @param message ListTagsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IListTagsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTagsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTagsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ListTagsResponse;

                    /**
                     * Decodes a ListTagsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTagsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ListTagsResponse;

                    /**
                     * Verifies a ListTagsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTagsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTagsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ListTagsResponse;

                    /**
                     * Creates a plain object from a ListTagsResponse message. Also converts values to other types if specified.
                     * @param message ListTagsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ListTagsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTagsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTagsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEntriesRequest. */
                interface IListEntriesRequest {

                    /** ListEntriesRequest parent */
                    parent?: (string|null);

                    /** ListEntriesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEntriesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListEntriesRequest readMask */
                    readMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a ListEntriesRequest. */
                class ListEntriesRequest implements IListEntriesRequest {

                    /**
                     * Constructs a new ListEntriesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IListEntriesRequest);

                    /** ListEntriesRequest parent. */
                    public parent: string;

                    /** ListEntriesRequest pageSize. */
                    public pageSize: number;

                    /** ListEntriesRequest pageToken. */
                    public pageToken: string;

                    /** ListEntriesRequest readMask. */
                    public readMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new ListEntriesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEntriesRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IListEntriesRequest): google.cloud.datacatalog.v1beta1.ListEntriesRequest;

                    /**
                     * Encodes the specified ListEntriesRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListEntriesRequest.verify|verify} messages.
                     * @param message ListEntriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IListEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEntriesRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListEntriesRequest.verify|verify} messages.
                     * @param message ListEntriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IListEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEntriesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEntriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ListEntriesRequest;

                    /**
                     * Decodes a ListEntriesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEntriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ListEntriesRequest;

                    /**
                     * Verifies a ListEntriesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEntriesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEntriesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ListEntriesRequest;

                    /**
                     * Creates a plain object from a ListEntriesRequest message. Also converts values to other types if specified.
                     * @param message ListEntriesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ListEntriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEntriesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEntriesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEntriesResponse. */
                interface IListEntriesResponse {

                    /** ListEntriesResponse entries */
                    entries?: (google.cloud.datacatalog.v1beta1.IEntry[]|null);

                    /** ListEntriesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListEntriesResponse. */
                class ListEntriesResponse implements IListEntriesResponse {

                    /**
                     * Constructs a new ListEntriesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IListEntriesResponse);

                    /** ListEntriesResponse entries. */
                    public entries: google.cloud.datacatalog.v1beta1.IEntry[];

                    /** ListEntriesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListEntriesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEntriesResponse instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IListEntriesResponse): google.cloud.datacatalog.v1beta1.ListEntriesResponse;

                    /**
                     * Encodes the specified ListEntriesResponse message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListEntriesResponse.verify|verify} messages.
                     * @param message ListEntriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IListEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEntriesResponse message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListEntriesResponse.verify|verify} messages.
                     * @param message ListEntriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IListEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEntriesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEntriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ListEntriesResponse;

                    /**
                     * Decodes a ListEntriesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEntriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ListEntriesResponse;

                    /**
                     * Verifies a ListEntriesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEntriesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEntriesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ListEntriesResponse;

                    /**
                     * Creates a plain object from a ListEntriesResponse message. Also converts values to other types if specified.
                     * @param message ListEntriesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ListEntriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEntriesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEntriesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** EntryType enum. */
                enum EntryType {
                    ENTRY_TYPE_UNSPECIFIED = 0,
                    TABLE = 2,
                    MODEL = 5,
                    DATA_STREAM = 3,
                    FILESET = 4
                }

                /** Properties of a GcsFilesetSpec. */
                interface IGcsFilesetSpec {

                    /** GcsFilesetSpec filePatterns */
                    filePatterns?: (string[]|null);

                    /** GcsFilesetSpec sampleGcsFileSpecs */
                    sampleGcsFileSpecs?: (google.cloud.datacatalog.v1beta1.IGcsFileSpec[]|null);
                }

                /** Represents a GcsFilesetSpec. */
                class GcsFilesetSpec implements IGcsFilesetSpec {

                    /**
                     * Constructs a new GcsFilesetSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IGcsFilesetSpec);

                    /** GcsFilesetSpec filePatterns. */
                    public filePatterns: string[];

                    /** GcsFilesetSpec sampleGcsFileSpecs. */
                    public sampleGcsFileSpecs: google.cloud.datacatalog.v1beta1.IGcsFileSpec[];

                    /**
                     * Creates a new GcsFilesetSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsFilesetSpec instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IGcsFilesetSpec): google.cloud.datacatalog.v1beta1.GcsFilesetSpec;

                    /**
                     * Encodes the specified GcsFilesetSpec message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GcsFilesetSpec.verify|verify} messages.
                     * @param message GcsFilesetSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IGcsFilesetSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsFilesetSpec message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GcsFilesetSpec.verify|verify} messages.
                     * @param message GcsFilesetSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IGcsFilesetSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsFilesetSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsFilesetSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.GcsFilesetSpec;

                    /**
                     * Decodes a GcsFilesetSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsFilesetSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.GcsFilesetSpec;

                    /**
                     * Verifies a GcsFilesetSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsFilesetSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsFilesetSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.GcsFilesetSpec;

                    /**
                     * Creates a plain object from a GcsFilesetSpec message. Also converts values to other types if specified.
                     * @param message GcsFilesetSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.GcsFilesetSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsFilesetSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcsFilesetSpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GcsFileSpec. */
                interface IGcsFileSpec {

                    /** GcsFileSpec filePath */
                    filePath?: (string|null);

                    /** GcsFileSpec gcsTimestamps */
                    gcsTimestamps?: (google.cloud.datacatalog.v1beta1.ISystemTimestamps|null);

                    /** GcsFileSpec sizeBytes */
                    sizeBytes?: (number|Long|string|null);
                }

                /** Represents a GcsFileSpec. */
                class GcsFileSpec implements IGcsFileSpec {

                    /**
                     * Constructs a new GcsFileSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IGcsFileSpec);

                    /** GcsFileSpec filePath. */
                    public filePath: string;

                    /** GcsFileSpec gcsTimestamps. */
                    public gcsTimestamps?: (google.cloud.datacatalog.v1beta1.ISystemTimestamps|null);

                    /** GcsFileSpec sizeBytes. */
                    public sizeBytes: (number|Long|string);

                    /**
                     * Creates a new GcsFileSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsFileSpec instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IGcsFileSpec): google.cloud.datacatalog.v1beta1.GcsFileSpec;

                    /**
                     * Encodes the specified GcsFileSpec message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GcsFileSpec.verify|verify} messages.
                     * @param message GcsFileSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IGcsFileSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsFileSpec message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GcsFileSpec.verify|verify} messages.
                     * @param message GcsFileSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IGcsFileSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsFileSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsFileSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.GcsFileSpec;

                    /**
                     * Decodes a GcsFileSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsFileSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.GcsFileSpec;

                    /**
                     * Verifies a GcsFileSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsFileSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsFileSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.GcsFileSpec;

                    /**
                     * Creates a plain object from a GcsFileSpec message. Also converts values to other types if specified.
                     * @param message GcsFileSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.GcsFileSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsFileSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcsFileSpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SystemTimestamps. */
                interface ISystemTimestamps {

                    /** SystemTimestamps createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** SystemTimestamps updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** SystemTimestamps expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a SystemTimestamps. */
                class SystemTimestamps implements ISystemTimestamps {

                    /**
                     * Constructs a new SystemTimestamps.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ISystemTimestamps);

                    /** SystemTimestamps createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** SystemTimestamps updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** SystemTimestamps expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new SystemTimestamps instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SystemTimestamps instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ISystemTimestamps): google.cloud.datacatalog.v1beta1.SystemTimestamps;

                    /**
                     * Encodes the specified SystemTimestamps message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SystemTimestamps.verify|verify} messages.
                     * @param message SystemTimestamps message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ISystemTimestamps, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SystemTimestamps message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SystemTimestamps.verify|verify} messages.
                     * @param message SystemTimestamps message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ISystemTimestamps, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SystemTimestamps message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SystemTimestamps
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.SystemTimestamps;

                    /**
                     * Decodes a SystemTimestamps message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SystemTimestamps
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.SystemTimestamps;

                    /**
                     * Verifies a SystemTimestamps message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SystemTimestamps message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SystemTimestamps
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.SystemTimestamps;

                    /**
                     * Creates a plain object from a SystemTimestamps message. Also converts values to other types if specified.
                     * @param message SystemTimestamps
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.SystemTimestamps, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SystemTimestamps to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SystemTimestamps
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Schema. */
                interface ISchema {

                    /** Schema columns */
                    columns?: (google.cloud.datacatalog.v1beta1.IColumnSchema[]|null);
                }

                /** Represents a Schema. */
                class Schema implements ISchema {

                    /**
                     * Constructs a new Schema.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ISchema);

                    /** Schema columns. */
                    public columns: google.cloud.datacatalog.v1beta1.IColumnSchema[];

                    /**
                     * Creates a new Schema instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Schema instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ISchema): google.cloud.datacatalog.v1beta1.Schema;

                    /**
                     * Encodes the specified Schema message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.Schema.verify|verify} messages.
                     * @param message Schema message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ISchema, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Schema message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.Schema.verify|verify} messages.
                     * @param message Schema message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ISchema, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Schema message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Schema
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.Schema;

                    /**
                     * Decodes a Schema message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Schema
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.Schema;

                    /**
                     * Verifies a Schema message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Schema message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Schema
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.Schema;

                    /**
                     * Creates a plain object from a Schema message. Also converts values to other types if specified.
                     * @param message Schema
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.Schema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Schema to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Schema
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ColumnSchema. */
                interface IColumnSchema {

                    /** ColumnSchema column */
                    column?: (string|null);

                    /** ColumnSchema type */
                    type?: (string|null);

                    /** ColumnSchema description */
                    description?: (string|null);

                    /** ColumnSchema mode */
                    mode?: (string|null);

                    /** ColumnSchema subcolumns */
                    subcolumns?: (google.cloud.datacatalog.v1beta1.IColumnSchema[]|null);
                }

                /** Represents a ColumnSchema. */
                class ColumnSchema implements IColumnSchema {

                    /**
                     * Constructs a new ColumnSchema.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IColumnSchema);

                    /** ColumnSchema column. */
                    public column: string;

                    /** ColumnSchema type. */
                    public type: string;

                    /** ColumnSchema description. */
                    public description: string;

                    /** ColumnSchema mode. */
                    public mode: string;

                    /** ColumnSchema subcolumns. */
                    public subcolumns: google.cloud.datacatalog.v1beta1.IColumnSchema[];

                    /**
                     * Creates a new ColumnSchema instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ColumnSchema instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IColumnSchema): google.cloud.datacatalog.v1beta1.ColumnSchema;

                    /**
                     * Encodes the specified ColumnSchema message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ColumnSchema.verify|verify} messages.
                     * @param message ColumnSchema message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IColumnSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ColumnSchema message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ColumnSchema.verify|verify} messages.
                     * @param message ColumnSchema message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IColumnSchema, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ColumnSchema message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ColumnSchema
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ColumnSchema;

                    /**
                     * Decodes a ColumnSchema message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ColumnSchema
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ColumnSchema;

                    /**
                     * Verifies a ColumnSchema message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ColumnSchema message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ColumnSchema
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ColumnSchema;

                    /**
                     * Creates a plain object from a ColumnSchema message. Also converts values to other types if specified.
                     * @param message ColumnSchema
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ColumnSchema, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ColumnSchema to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ColumnSchema
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SearchCatalogResult. */
                interface ISearchCatalogResult {

                    /** SearchCatalogResult searchResultType */
                    searchResultType?: (google.cloud.datacatalog.v1beta1.SearchResultType|keyof typeof google.cloud.datacatalog.v1beta1.SearchResultType|null);

                    /** SearchCatalogResult searchResultSubtype */
                    searchResultSubtype?: (string|null);

                    /** SearchCatalogResult relativeResourceName */
                    relativeResourceName?: (string|null);

                    /** SearchCatalogResult linkedResource */
                    linkedResource?: (string|null);

                    /** SearchCatalogResult modifyTime */
                    modifyTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a SearchCatalogResult. */
                class SearchCatalogResult implements ISearchCatalogResult {

                    /**
                     * Constructs a new SearchCatalogResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ISearchCatalogResult);

                    /** SearchCatalogResult searchResultType. */
                    public searchResultType: (google.cloud.datacatalog.v1beta1.SearchResultType|keyof typeof google.cloud.datacatalog.v1beta1.SearchResultType);

                    /** SearchCatalogResult searchResultSubtype. */
                    public searchResultSubtype: string;

                    /** SearchCatalogResult relativeResourceName. */
                    public relativeResourceName: string;

                    /** SearchCatalogResult linkedResource. */
                    public linkedResource: string;

                    /** SearchCatalogResult modifyTime. */
                    public modifyTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new SearchCatalogResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchCatalogResult instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ISearchCatalogResult): google.cloud.datacatalog.v1beta1.SearchCatalogResult;

                    /**
                     * Encodes the specified SearchCatalogResult message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SearchCatalogResult.verify|verify} messages.
                     * @param message SearchCatalogResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ISearchCatalogResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchCatalogResult message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SearchCatalogResult.verify|verify} messages.
                     * @param message SearchCatalogResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ISearchCatalogResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchCatalogResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchCatalogResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.SearchCatalogResult;

                    /**
                     * Decodes a SearchCatalogResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchCatalogResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.SearchCatalogResult;

                    /**
                     * Verifies a SearchCatalogResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchCatalogResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchCatalogResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.SearchCatalogResult;

                    /**
                     * Creates a plain object from a SearchCatalogResult message. Also converts values to other types if specified.
                     * @param message SearchCatalogResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.SearchCatalogResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchCatalogResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SearchCatalogResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** SearchResultType enum. */
                enum SearchResultType {
                    SEARCH_RESULT_TYPE_UNSPECIFIED = 0,
                    ENTRY = 1,
                    TAG_TEMPLATE = 2,
                    ENTRY_GROUP = 3
                }

                /** Properties of a BigQueryTableSpec. */
                interface IBigQueryTableSpec {

                    /** BigQueryTableSpec tableSourceType */
                    tableSourceType?: (google.cloud.datacatalog.v1beta1.TableSourceType|keyof typeof google.cloud.datacatalog.v1beta1.TableSourceType|null);

                    /** BigQueryTableSpec viewSpec */
                    viewSpec?: (google.cloud.datacatalog.v1beta1.IViewSpec|null);

                    /** BigQueryTableSpec tableSpec */
                    tableSpec?: (google.cloud.datacatalog.v1beta1.ITableSpec|null);
                }

                /** Represents a BigQueryTableSpec. */
                class BigQueryTableSpec implements IBigQueryTableSpec {

                    /**
                     * Constructs a new BigQueryTableSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IBigQueryTableSpec);

                    /** BigQueryTableSpec tableSourceType. */
                    public tableSourceType: (google.cloud.datacatalog.v1beta1.TableSourceType|keyof typeof google.cloud.datacatalog.v1beta1.TableSourceType);

                    /** BigQueryTableSpec viewSpec. */
                    public viewSpec?: (google.cloud.datacatalog.v1beta1.IViewSpec|null);

                    /** BigQueryTableSpec tableSpec. */
                    public tableSpec?: (google.cloud.datacatalog.v1beta1.ITableSpec|null);

                    /** BigQueryTableSpec typeSpec. */
                    public typeSpec?: ("viewSpec"|"tableSpec");

                    /**
                     * Creates a new BigQueryTableSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BigQueryTableSpec instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IBigQueryTableSpec): google.cloud.datacatalog.v1beta1.BigQueryTableSpec;

                    /**
                     * Encodes the specified BigQueryTableSpec message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.BigQueryTableSpec.verify|verify} messages.
                     * @param message BigQueryTableSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IBigQueryTableSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BigQueryTableSpec message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.BigQueryTableSpec.verify|verify} messages.
                     * @param message BigQueryTableSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IBigQueryTableSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BigQueryTableSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BigQueryTableSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.BigQueryTableSpec;

                    /**
                     * Decodes a BigQueryTableSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BigQueryTableSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.BigQueryTableSpec;

                    /**
                     * Verifies a BigQueryTableSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BigQueryTableSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BigQueryTableSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.BigQueryTableSpec;

                    /**
                     * Creates a plain object from a BigQueryTableSpec message. Also converts values to other types if specified.
                     * @param message BigQueryTableSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.BigQueryTableSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BigQueryTableSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BigQueryTableSpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** TableSourceType enum. */
                enum TableSourceType {
                    TABLE_SOURCE_TYPE_UNSPECIFIED = 0,
                    BIGQUERY_VIEW = 2,
                    BIGQUERY_TABLE = 5,
                    BIGQUERY_MATERIALIZED_VIEW = 7
                }

                /** Properties of a ViewSpec. */
                interface IViewSpec {

                    /** ViewSpec viewQuery */
                    viewQuery?: (string|null);
                }

                /** Represents a ViewSpec. */
                class ViewSpec implements IViewSpec {

                    /**
                     * Constructs a new ViewSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IViewSpec);

                    /** ViewSpec viewQuery. */
                    public viewQuery: string;

                    /**
                     * Creates a new ViewSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ViewSpec instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IViewSpec): google.cloud.datacatalog.v1beta1.ViewSpec;

                    /**
                     * Encodes the specified ViewSpec message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ViewSpec.verify|verify} messages.
                     * @param message ViewSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IViewSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ViewSpec message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ViewSpec.verify|verify} messages.
                     * @param message ViewSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IViewSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ViewSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ViewSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ViewSpec;

                    /**
                     * Decodes a ViewSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ViewSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ViewSpec;

                    /**
                     * Verifies a ViewSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ViewSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ViewSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ViewSpec;

                    /**
                     * Creates a plain object from a ViewSpec message. Also converts values to other types if specified.
                     * @param message ViewSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ViewSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ViewSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ViewSpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TableSpec. */
                interface ITableSpec {

                    /** TableSpec groupedEntry */
                    groupedEntry?: (string|null);
                }

                /** Represents a TableSpec. */
                class TableSpec implements ITableSpec {

                    /**
                     * Constructs a new TableSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ITableSpec);

                    /** TableSpec groupedEntry. */
                    public groupedEntry: string;

                    /**
                     * Creates a new TableSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TableSpec instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ITableSpec): google.cloud.datacatalog.v1beta1.TableSpec;

                    /**
                     * Encodes the specified TableSpec message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.TableSpec.verify|verify} messages.
                     * @param message TableSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ITableSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TableSpec message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.TableSpec.verify|verify} messages.
                     * @param message TableSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ITableSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TableSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TableSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.TableSpec;

                    /**
                     * Decodes a TableSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TableSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.TableSpec;

                    /**
                     * Verifies a TableSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TableSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TableSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.TableSpec;

                    /**
                     * Creates a plain object from a TableSpec message. Also converts values to other types if specified.
                     * @param message TableSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.TableSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TableSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TableSpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BigQueryDateShardedSpec. */
                interface IBigQueryDateShardedSpec {

                    /** BigQueryDateShardedSpec dataset */
                    dataset?: (string|null);

                    /** BigQueryDateShardedSpec tablePrefix */
                    tablePrefix?: (string|null);

                    /** BigQueryDateShardedSpec shardCount */
                    shardCount?: (number|Long|string|null);
                }

                /** Represents a BigQueryDateShardedSpec. */
                class BigQueryDateShardedSpec implements IBigQueryDateShardedSpec {

                    /**
                     * Constructs a new BigQueryDateShardedSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IBigQueryDateShardedSpec);

                    /** BigQueryDateShardedSpec dataset. */
                    public dataset: string;

                    /** BigQueryDateShardedSpec tablePrefix. */
                    public tablePrefix: string;

                    /** BigQueryDateShardedSpec shardCount. */
                    public shardCount: (number|Long|string);

                    /**
                     * Creates a new BigQueryDateShardedSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BigQueryDateShardedSpec instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IBigQueryDateShardedSpec): google.cloud.datacatalog.v1beta1.BigQueryDateShardedSpec;

                    /**
                     * Encodes the specified BigQueryDateShardedSpec message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.BigQueryDateShardedSpec.verify|verify} messages.
                     * @param message BigQueryDateShardedSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IBigQueryDateShardedSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BigQueryDateShardedSpec message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.BigQueryDateShardedSpec.verify|verify} messages.
                     * @param message BigQueryDateShardedSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IBigQueryDateShardedSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BigQueryDateShardedSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BigQueryDateShardedSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.BigQueryDateShardedSpec;

                    /**
                     * Decodes a BigQueryDateShardedSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BigQueryDateShardedSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.BigQueryDateShardedSpec;

                    /**
                     * Verifies a BigQueryDateShardedSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BigQueryDateShardedSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BigQueryDateShardedSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.BigQueryDateShardedSpec;

                    /**
                     * Creates a plain object from a BigQueryDateShardedSpec message. Also converts values to other types if specified.
                     * @param message BigQueryDateShardedSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.BigQueryDateShardedSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BigQueryDateShardedSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BigQueryDateShardedSpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Tag. */
                interface ITag {

                    /** Tag name */
                    name?: (string|null);

                    /** Tag template */
                    template?: (string|null);

                    /** Tag templateDisplayName */
                    templateDisplayName?: (string|null);

                    /** Tag column */
                    column?: (string|null);

                    /** Tag fields */
                    fields?: ({ [k: string]: google.cloud.datacatalog.v1beta1.ITagField }|null);
                }

                /** Represents a Tag. */
                class Tag implements ITag {

                    /**
                     * Constructs a new Tag.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ITag);

                    /** Tag name. */
                    public name: string;

                    /** Tag template. */
                    public template: string;

                    /** Tag templateDisplayName. */
                    public templateDisplayName: string;

                    /** Tag column. */
                    public column?: (string|null);

                    /** Tag fields. */
                    public fields: { [k: string]: google.cloud.datacatalog.v1beta1.ITagField };

                    /** Tag scope. */
                    public scope?: "column";

                    /**
                     * Creates a new Tag instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Tag instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ITag): google.cloud.datacatalog.v1beta1.Tag;

                    /**
                     * Encodes the specified Tag message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.Tag.verify|verify} messages.
                     * @param message Tag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Tag message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.Tag.verify|verify} messages.
                     * @param message Tag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Tag message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Tag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.Tag;

                    /**
                     * Decodes a Tag message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Tag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.Tag;

                    /**
                     * Verifies a Tag message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Tag message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Tag
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.Tag;

                    /**
                     * Creates a plain object from a Tag message. Also converts values to other types if specified.
                     * @param message Tag
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.Tag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Tag to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Tag
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TagField. */
                interface ITagField {

                    /** TagField displayName */
                    displayName?: (string|null);

                    /** TagField doubleValue */
                    doubleValue?: (number|null);

                    /** TagField stringValue */
                    stringValue?: (string|null);

                    /** TagField boolValue */
                    boolValue?: (boolean|null);

                    /** TagField timestampValue */
                    timestampValue?: (google.protobuf.ITimestamp|null);

                    /** TagField enumValue */
                    enumValue?: (google.cloud.datacatalog.v1beta1.TagField.IEnumValue|null);

                    /** TagField order */
                    order?: (number|null);
                }

                /** Represents a TagField. */
                class TagField implements ITagField {

                    /**
                     * Constructs a new TagField.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ITagField);

                    /** TagField displayName. */
                    public displayName: string;

                    /** TagField doubleValue. */
                    public doubleValue?: (number|null);

                    /** TagField stringValue. */
                    public stringValue?: (string|null);

                    /** TagField boolValue. */
                    public boolValue?: (boolean|null);

                    /** TagField timestampValue. */
                    public timestampValue?: (google.protobuf.ITimestamp|null);

                    /** TagField enumValue. */
                    public enumValue?: (google.cloud.datacatalog.v1beta1.TagField.IEnumValue|null);

                    /** TagField order. */
                    public order: number;

                    /** TagField kind. */
                    public kind?: ("doubleValue"|"stringValue"|"boolValue"|"timestampValue"|"enumValue");

                    /**
                     * Creates a new TagField instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TagField instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ITagField): google.cloud.datacatalog.v1beta1.TagField;

                    /**
                     * Encodes the specified TagField message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.TagField.verify|verify} messages.
                     * @param message TagField message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ITagField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TagField message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.TagField.verify|verify} messages.
                     * @param message TagField message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ITagField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TagField message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TagField
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.TagField;

                    /**
                     * Decodes a TagField message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TagField
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.TagField;

                    /**
                     * Verifies a TagField message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TagField message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TagField
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.TagField;

                    /**
                     * Creates a plain object from a TagField message. Also converts values to other types if specified.
                     * @param message TagField
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.TagField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TagField to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TagField
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TagField {

                    /** Properties of an EnumValue. */
                    interface IEnumValue {

                        /** EnumValue displayName */
                        displayName?: (string|null);
                    }

                    /** Represents an EnumValue. */
                    class EnumValue implements IEnumValue {

                        /**
                         * Constructs a new EnumValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.datacatalog.v1beta1.TagField.IEnumValue);

                        /** EnumValue displayName. */
                        public displayName: string;

                        /**
                         * Creates a new EnumValue instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EnumValue instance
                         */
                        public static create(properties?: google.cloud.datacatalog.v1beta1.TagField.IEnumValue): google.cloud.datacatalog.v1beta1.TagField.EnumValue;

                        /**
                         * Encodes the specified EnumValue message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.TagField.EnumValue.verify|verify} messages.
                         * @param message EnumValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.datacatalog.v1beta1.TagField.IEnumValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EnumValue message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.TagField.EnumValue.verify|verify} messages.
                         * @param message EnumValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.TagField.IEnumValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EnumValue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EnumValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.TagField.EnumValue;

                        /**
                         * Decodes an EnumValue message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EnumValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.TagField.EnumValue;

                        /**
                         * Verifies an EnumValue message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EnumValue message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EnumValue
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.TagField.EnumValue;

                        /**
                         * Creates a plain object from an EnumValue message. Also converts values to other types if specified.
                         * @param message EnumValue
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.datacatalog.v1beta1.TagField.EnumValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EnumValue to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EnumValue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a TagTemplate. */
                interface ITagTemplate {

                    /** TagTemplate name */
                    name?: (string|null);

                    /** TagTemplate displayName */
                    displayName?: (string|null);

                    /** TagTemplate fields */
                    fields?: ({ [k: string]: google.cloud.datacatalog.v1beta1.ITagTemplateField }|null);
                }

                /** Represents a TagTemplate. */
                class TagTemplate implements ITagTemplate {

                    /**
                     * Constructs a new TagTemplate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ITagTemplate);

                    /** TagTemplate name. */
                    public name: string;

                    /** TagTemplate displayName. */
                    public displayName: string;

                    /** TagTemplate fields. */
                    public fields: { [k: string]: google.cloud.datacatalog.v1beta1.ITagTemplateField };

                    /**
                     * Creates a new TagTemplate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TagTemplate instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ITagTemplate): google.cloud.datacatalog.v1beta1.TagTemplate;

                    /**
                     * Encodes the specified TagTemplate message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.TagTemplate.verify|verify} messages.
                     * @param message TagTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ITagTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TagTemplate message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.TagTemplate.verify|verify} messages.
                     * @param message TagTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ITagTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TagTemplate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TagTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.TagTemplate;

                    /**
                     * Decodes a TagTemplate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TagTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.TagTemplate;

                    /**
                     * Verifies a TagTemplate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TagTemplate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TagTemplate
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.TagTemplate;

                    /**
                     * Creates a plain object from a TagTemplate message. Also converts values to other types if specified.
                     * @param message TagTemplate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.TagTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TagTemplate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TagTemplate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TagTemplateField. */
                interface ITagTemplateField {

                    /** TagTemplateField name */
                    name?: (string|null);

                    /** TagTemplateField displayName */
                    displayName?: (string|null);

                    /** TagTemplateField type */
                    type?: (google.cloud.datacatalog.v1beta1.IFieldType|null);

                    /** TagTemplateField isRequired */
                    isRequired?: (boolean|null);

                    /** TagTemplateField description */
                    description?: (string|null);

                    /** TagTemplateField order */
                    order?: (number|null);
                }

                /** Represents a TagTemplateField. */
                class TagTemplateField implements ITagTemplateField {

                    /**
                     * Constructs a new TagTemplateField.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ITagTemplateField);

                    /** TagTemplateField name. */
                    public name: string;

                    /** TagTemplateField displayName. */
                    public displayName: string;

                    /** TagTemplateField type. */
                    public type?: (google.cloud.datacatalog.v1beta1.IFieldType|null);

                    /** TagTemplateField isRequired. */
                    public isRequired: boolean;

                    /** TagTemplateField description. */
                    public description: string;

                    /** TagTemplateField order. */
                    public order: number;

                    /**
                     * Creates a new TagTemplateField instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TagTemplateField instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ITagTemplateField): google.cloud.datacatalog.v1beta1.TagTemplateField;

                    /**
                     * Encodes the specified TagTemplateField message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.TagTemplateField.verify|verify} messages.
                     * @param message TagTemplateField message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ITagTemplateField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TagTemplateField message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.TagTemplateField.verify|verify} messages.
                     * @param message TagTemplateField message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ITagTemplateField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TagTemplateField message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TagTemplateField
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.TagTemplateField;

                    /**
                     * Decodes a TagTemplateField message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TagTemplateField
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.TagTemplateField;

                    /**
                     * Verifies a TagTemplateField message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TagTemplateField message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TagTemplateField
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.TagTemplateField;

                    /**
                     * Creates a plain object from a TagTemplateField message. Also converts values to other types if specified.
                     * @param message TagTemplateField
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.TagTemplateField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TagTemplateField to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TagTemplateField
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FieldType. */
                interface IFieldType {

                    /** FieldType primitiveType */
                    primitiveType?: (google.cloud.datacatalog.v1beta1.FieldType.PrimitiveType|keyof typeof google.cloud.datacatalog.v1beta1.FieldType.PrimitiveType|null);

                    /** FieldType enumType */
                    enumType?: (google.cloud.datacatalog.v1beta1.FieldType.IEnumType|null);
                }

                /** Represents a FieldType. */
                class FieldType implements IFieldType {

                    /**
                     * Constructs a new FieldType.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IFieldType);

                    /** FieldType primitiveType. */
                    public primitiveType?: (google.cloud.datacatalog.v1beta1.FieldType.PrimitiveType|keyof typeof google.cloud.datacatalog.v1beta1.FieldType.PrimitiveType|null);

                    /** FieldType enumType. */
                    public enumType?: (google.cloud.datacatalog.v1beta1.FieldType.IEnumType|null);

                    /** FieldType typeDecl. */
                    public typeDecl?: ("primitiveType"|"enumType");

                    /**
                     * Creates a new FieldType instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FieldType instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IFieldType): google.cloud.datacatalog.v1beta1.FieldType;

                    /**
                     * Encodes the specified FieldType message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.FieldType.verify|verify} messages.
                     * @param message FieldType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IFieldType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FieldType message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.FieldType.verify|verify} messages.
                     * @param message FieldType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IFieldType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FieldType message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FieldType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.FieldType;

                    /**
                     * Decodes a FieldType message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FieldType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.FieldType;

                    /**
                     * Verifies a FieldType message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FieldType message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FieldType
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.FieldType;

                    /**
                     * Creates a plain object from a FieldType message. Also converts values to other types if specified.
                     * @param message FieldType
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.FieldType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FieldType to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FieldType
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FieldType {

                    /** PrimitiveType enum. */
                    enum PrimitiveType {
                        PRIMITIVE_TYPE_UNSPECIFIED = 0,
                        DOUBLE = 1,
                        STRING = 2,
                        BOOL = 3,
                        TIMESTAMP = 4
                    }

                    /** Properties of an EnumType. */
                    interface IEnumType {

                        /** EnumType allowedValues */
                        allowedValues?: (google.cloud.datacatalog.v1beta1.FieldType.EnumType.IEnumValue[]|null);
                    }

                    /** Represents an EnumType. */
                    class EnumType implements IEnumType {

                        /**
                         * Constructs a new EnumType.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.datacatalog.v1beta1.FieldType.IEnumType);

                        /** EnumType allowedValues. */
                        public allowedValues: google.cloud.datacatalog.v1beta1.FieldType.EnumType.IEnumValue[];

                        /**
                         * Creates a new EnumType instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EnumType instance
                         */
                        public static create(properties?: google.cloud.datacatalog.v1beta1.FieldType.IEnumType): google.cloud.datacatalog.v1beta1.FieldType.EnumType;

                        /**
                         * Encodes the specified EnumType message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.FieldType.EnumType.verify|verify} messages.
                         * @param message EnumType message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.datacatalog.v1beta1.FieldType.IEnumType, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EnumType message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.FieldType.EnumType.verify|verify} messages.
                         * @param message EnumType message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.FieldType.IEnumType, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EnumType message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EnumType
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.FieldType.EnumType;

                        /**
                         * Decodes an EnumType message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EnumType
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.FieldType.EnumType;

                        /**
                         * Verifies an EnumType message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EnumType message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EnumType
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.FieldType.EnumType;

                        /**
                         * Creates a plain object from an EnumType message. Also converts values to other types if specified.
                         * @param message EnumType
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.datacatalog.v1beta1.FieldType.EnumType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EnumType to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EnumType
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace EnumType {

                        /** Properties of an EnumValue. */
                        interface IEnumValue {

                            /** EnumValue displayName */
                            displayName?: (string|null);
                        }

                        /** Represents an EnumValue. */
                        class EnumValue implements IEnumValue {

                            /**
                             * Constructs a new EnumValue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.datacatalog.v1beta1.FieldType.EnumType.IEnumValue);

                            /** EnumValue displayName. */
                            public displayName: string;

                            /**
                             * Creates a new EnumValue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns EnumValue instance
                             */
                            public static create(properties?: google.cloud.datacatalog.v1beta1.FieldType.EnumType.IEnumValue): google.cloud.datacatalog.v1beta1.FieldType.EnumType.EnumValue;

                            /**
                             * Encodes the specified EnumValue message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.FieldType.EnumType.EnumValue.verify|verify} messages.
                             * @param message EnumValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.datacatalog.v1beta1.FieldType.EnumType.IEnumValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified EnumValue message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.FieldType.EnumType.EnumValue.verify|verify} messages.
                             * @param message EnumValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.FieldType.EnumType.IEnumValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an EnumValue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns EnumValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.FieldType.EnumType.EnumValue;

                            /**
                             * Decodes an EnumValue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns EnumValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.FieldType.EnumType.EnumValue;

                            /**
                             * Verifies an EnumValue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an EnumValue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns EnumValue
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.FieldType.EnumType.EnumValue;

                            /**
                             * Creates a plain object from an EnumValue message. Also converts values to other types if specified.
                             * @param message EnumValue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.datacatalog.v1beta1.FieldType.EnumType.EnumValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this EnumValue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for EnumValue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }

                /** Properties of a UsageStats. */
                interface IUsageStats {

                    /** UsageStats totalCompletions */
                    totalCompletions?: (number|null);

                    /** UsageStats totalFailures */
                    totalFailures?: (number|null);

                    /** UsageStats totalCancellations */
                    totalCancellations?: (number|null);

                    /** UsageStats totalExecutionTimeForCompletionsMillis */
                    totalExecutionTimeForCompletionsMillis?: (number|null);
                }

                /** Represents a UsageStats. */
                class UsageStats implements IUsageStats {

                    /**
                     * Constructs a new UsageStats.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IUsageStats);

                    /** UsageStats totalCompletions. */
                    public totalCompletions: number;

                    /** UsageStats totalFailures. */
                    public totalFailures: number;

                    /** UsageStats totalCancellations. */
                    public totalCancellations: number;

                    /** UsageStats totalExecutionTimeForCompletionsMillis. */
                    public totalExecutionTimeForCompletionsMillis: number;

                    /**
                     * Creates a new UsageStats instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UsageStats instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IUsageStats): google.cloud.datacatalog.v1beta1.UsageStats;

                    /**
                     * Encodes the specified UsageStats message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UsageStats.verify|verify} messages.
                     * @param message UsageStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IUsageStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UsageStats message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UsageStats.verify|verify} messages.
                     * @param message UsageStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IUsageStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UsageStats message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UsageStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.UsageStats;

                    /**
                     * Decodes a UsageStats message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UsageStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.UsageStats;

                    /**
                     * Verifies a UsageStats message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UsageStats message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UsageStats
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.UsageStats;

                    /**
                     * Creates a plain object from a UsageStats message. Also converts values to other types if specified.
                     * @param message UsageStats
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.UsageStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UsageStats to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UsageStats
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a UsageSignal. */
                interface IUsageSignal {

                    /** UsageSignal updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** UsageSignal usageWithinTimeRange */
                    usageWithinTimeRange?: ({ [k: string]: google.cloud.datacatalog.v1beta1.IUsageStats }|null);
                }

                /** Represents a UsageSignal. */
                class UsageSignal implements IUsageSignal {

                    /**
                     * Constructs a new UsageSignal.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IUsageSignal);

                    /** UsageSignal updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** UsageSignal usageWithinTimeRange. */
                    public usageWithinTimeRange: { [k: string]: google.cloud.datacatalog.v1beta1.IUsageStats };

                    /**
                     * Creates a new UsageSignal instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UsageSignal instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IUsageSignal): google.cloud.datacatalog.v1beta1.UsageSignal;

                    /**
                     * Encodes the specified UsageSignal message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UsageSignal.verify|verify} messages.
                     * @param message UsageSignal message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IUsageSignal, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UsageSignal message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UsageSignal.verify|verify} messages.
                     * @param message UsageSignal message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IUsageSignal, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UsageSignal message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UsageSignal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.UsageSignal;

                    /**
                     * Decodes a UsageSignal message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UsageSignal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.UsageSignal;

                    /**
                     * Verifies a UsageSignal message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UsageSignal message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UsageSignal
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.UsageSignal;

                    /**
                     * Creates a plain object from a UsageSignal message. Also converts values to other types if specified.
                     * @param message UsageSignal
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.UsageSignal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UsageSignal to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UsageSignal
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a PolicyTagManager */
                class PolicyTagManager extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new PolicyTagManager service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new PolicyTagManager service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PolicyTagManager;

                    /**
                     * Calls CreateTaxonomy.
                     * @param request CreateTaxonomyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Taxonomy
                     */
                    public createTaxonomy(request: google.cloud.datacatalog.v1beta1.ICreateTaxonomyRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManager.CreateTaxonomyCallback): void;

                    /**
                     * Calls CreateTaxonomy.
                     * @param request CreateTaxonomyRequest message or plain object
                     * @returns Promise
                     */
                    public createTaxonomy(request: google.cloud.datacatalog.v1beta1.ICreateTaxonomyRequest): Promise<google.cloud.datacatalog.v1beta1.Taxonomy>;

                    /**
                     * Calls DeleteTaxonomy.
                     * @param request DeleteTaxonomyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTaxonomy(request: google.cloud.datacatalog.v1beta1.IDeleteTaxonomyRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManager.DeleteTaxonomyCallback): void;

                    /**
                     * Calls DeleteTaxonomy.
                     * @param request DeleteTaxonomyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTaxonomy(request: google.cloud.datacatalog.v1beta1.IDeleteTaxonomyRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls UpdateTaxonomy.
                     * @param request UpdateTaxonomyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Taxonomy
                     */
                    public updateTaxonomy(request: google.cloud.datacatalog.v1beta1.IUpdateTaxonomyRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManager.UpdateTaxonomyCallback): void;

                    /**
                     * Calls UpdateTaxonomy.
                     * @param request UpdateTaxonomyRequest message or plain object
                     * @returns Promise
                     */
                    public updateTaxonomy(request: google.cloud.datacatalog.v1beta1.IUpdateTaxonomyRequest): Promise<google.cloud.datacatalog.v1beta1.Taxonomy>;

                    /**
                     * Calls ListTaxonomies.
                     * @param request ListTaxonomiesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTaxonomiesResponse
                     */
                    public listTaxonomies(request: google.cloud.datacatalog.v1beta1.IListTaxonomiesRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManager.ListTaxonomiesCallback): void;

                    /**
                     * Calls ListTaxonomies.
                     * @param request ListTaxonomiesRequest message or plain object
                     * @returns Promise
                     */
                    public listTaxonomies(request: google.cloud.datacatalog.v1beta1.IListTaxonomiesRequest): Promise<google.cloud.datacatalog.v1beta1.ListTaxonomiesResponse>;

                    /**
                     * Calls GetTaxonomy.
                     * @param request GetTaxonomyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Taxonomy
                     */
                    public getTaxonomy(request: google.cloud.datacatalog.v1beta1.IGetTaxonomyRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManager.GetTaxonomyCallback): void;

                    /**
                     * Calls GetTaxonomy.
                     * @param request GetTaxonomyRequest message or plain object
                     * @returns Promise
                     */
                    public getTaxonomy(request: google.cloud.datacatalog.v1beta1.IGetTaxonomyRequest): Promise<google.cloud.datacatalog.v1beta1.Taxonomy>;

                    /**
                     * Calls CreatePolicyTag.
                     * @param request CreatePolicyTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PolicyTag
                     */
                    public createPolicyTag(request: google.cloud.datacatalog.v1beta1.ICreatePolicyTagRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManager.CreatePolicyTagCallback): void;

                    /**
                     * Calls CreatePolicyTag.
                     * @param request CreatePolicyTagRequest message or plain object
                     * @returns Promise
                     */
                    public createPolicyTag(request: google.cloud.datacatalog.v1beta1.ICreatePolicyTagRequest): Promise<google.cloud.datacatalog.v1beta1.PolicyTag>;

                    /**
                     * Calls DeletePolicyTag.
                     * @param request DeletePolicyTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deletePolicyTag(request: google.cloud.datacatalog.v1beta1.IDeletePolicyTagRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManager.DeletePolicyTagCallback): void;

                    /**
                     * Calls DeletePolicyTag.
                     * @param request DeletePolicyTagRequest message or plain object
                     * @returns Promise
                     */
                    public deletePolicyTag(request: google.cloud.datacatalog.v1beta1.IDeletePolicyTagRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls UpdatePolicyTag.
                     * @param request UpdatePolicyTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PolicyTag
                     */
                    public updatePolicyTag(request: google.cloud.datacatalog.v1beta1.IUpdatePolicyTagRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManager.UpdatePolicyTagCallback): void;

                    /**
                     * Calls UpdatePolicyTag.
                     * @param request UpdatePolicyTagRequest message or plain object
                     * @returns Promise
                     */
                    public updatePolicyTag(request: google.cloud.datacatalog.v1beta1.IUpdatePolicyTagRequest): Promise<google.cloud.datacatalog.v1beta1.PolicyTag>;

                    /**
                     * Calls ListPolicyTags.
                     * @param request ListPolicyTagsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPolicyTagsResponse
                     */
                    public listPolicyTags(request: google.cloud.datacatalog.v1beta1.IListPolicyTagsRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManager.ListPolicyTagsCallback): void;

                    /**
                     * Calls ListPolicyTags.
                     * @param request ListPolicyTagsRequest message or plain object
                     * @returns Promise
                     */
                    public listPolicyTags(request: google.cloud.datacatalog.v1beta1.IListPolicyTagsRequest): Promise<google.cloud.datacatalog.v1beta1.ListPolicyTagsResponse>;

                    /**
                     * Calls GetPolicyTag.
                     * @param request GetPolicyTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PolicyTag
                     */
                    public getPolicyTag(request: google.cloud.datacatalog.v1beta1.IGetPolicyTagRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManager.GetPolicyTagCallback): void;

                    /**
                     * Calls GetPolicyTag.
                     * @param request GetPolicyTagRequest message or plain object
                     * @returns Promise
                     */
                    public getPolicyTag(request: google.cloud.datacatalog.v1beta1.IGetPolicyTagRequest): Promise<google.cloud.datacatalog.v1beta1.PolicyTag>;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManager.GetIamPolicyCallback): void;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManager.SetIamPolicyCallback): void;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManager.TestIamPermissionsCallback): void;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;
                }

                namespace PolicyTagManager {

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManager|createTaxonomy}.
                     * @param error Error, if any
                     * @param [response] Taxonomy
                     */
                    type CreateTaxonomyCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Taxonomy) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManager|deleteTaxonomy}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTaxonomyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManager|updateTaxonomy}.
                     * @param error Error, if any
                     * @param [response] Taxonomy
                     */
                    type UpdateTaxonomyCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Taxonomy) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManager|listTaxonomies}.
                     * @param error Error, if any
                     * @param [response] ListTaxonomiesResponse
                     */
                    type ListTaxonomiesCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.ListTaxonomiesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManager|getTaxonomy}.
                     * @param error Error, if any
                     * @param [response] Taxonomy
                     */
                    type GetTaxonomyCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Taxonomy) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManager|createPolicyTag}.
                     * @param error Error, if any
                     * @param [response] PolicyTag
                     */
                    type CreatePolicyTagCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.PolicyTag) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManager|deletePolicyTag}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeletePolicyTagCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManager|updatePolicyTag}.
                     * @param error Error, if any
                     * @param [response] PolicyTag
                     */
                    type UpdatePolicyTagCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.PolicyTag) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManager|listPolicyTags}.
                     * @param error Error, if any
                     * @param [response] ListPolicyTagsResponse
                     */
                    type ListPolicyTagsCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.ListPolicyTagsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManager|getPolicyTag}.
                     * @param error Error, if any
                     * @param [response] PolicyTag
                     */
                    type GetPolicyTagCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.PolicyTag) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManager|getIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManager|setIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManager|testIamPermissions}.
                     * @param error Error, if any
                     * @param [response] TestIamPermissionsResponse
                     */
                    type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;
                }

                /** Properties of a Taxonomy. */
                interface ITaxonomy {

                    /** Taxonomy name */
                    name?: (string|null);

                    /** Taxonomy displayName */
                    displayName?: (string|null);

                    /** Taxonomy description */
                    description?: (string|null);

                    /** Taxonomy policyTagCount */
                    policyTagCount?: (number|null);

                    /** Taxonomy taxonomyTimestamps */
                    taxonomyTimestamps?: (google.cloud.datacatalog.v1beta1.ISystemTimestamps|null);

                    /** Taxonomy activatedPolicyTypes */
                    activatedPolicyTypes?: (google.cloud.datacatalog.v1beta1.Taxonomy.PolicyType[]|null);

                    /** Taxonomy service */
                    service?: (google.cloud.datacatalog.v1beta1.Taxonomy.IService|null);
                }

                /** Represents a Taxonomy. */
                class Taxonomy implements ITaxonomy {

                    /**
                     * Constructs a new Taxonomy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ITaxonomy);

                    /** Taxonomy name. */
                    public name: string;

                    /** Taxonomy displayName. */
                    public displayName: string;

                    /** Taxonomy description. */
                    public description: string;

                    /** Taxonomy policyTagCount. */
                    public policyTagCount: number;

                    /** Taxonomy taxonomyTimestamps. */
                    public taxonomyTimestamps?: (google.cloud.datacatalog.v1beta1.ISystemTimestamps|null);

                    /** Taxonomy activatedPolicyTypes. */
                    public activatedPolicyTypes: google.cloud.datacatalog.v1beta1.Taxonomy.PolicyType[];

                    /** Taxonomy service. */
                    public service?: (google.cloud.datacatalog.v1beta1.Taxonomy.IService|null);

                    /**
                     * Creates a new Taxonomy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Taxonomy instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ITaxonomy): google.cloud.datacatalog.v1beta1.Taxonomy;

                    /**
                     * Encodes the specified Taxonomy message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.Taxonomy.verify|verify} messages.
                     * @param message Taxonomy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ITaxonomy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Taxonomy message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.Taxonomy.verify|verify} messages.
                     * @param message Taxonomy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ITaxonomy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Taxonomy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Taxonomy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.Taxonomy;

                    /**
                     * Decodes a Taxonomy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Taxonomy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.Taxonomy;

                    /**
                     * Verifies a Taxonomy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Taxonomy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Taxonomy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.Taxonomy;

                    /**
                     * Creates a plain object from a Taxonomy message. Also converts values to other types if specified.
                     * @param message Taxonomy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.Taxonomy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Taxonomy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Taxonomy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Taxonomy {

                    /** PolicyType enum. */
                    enum PolicyType {
                        POLICY_TYPE_UNSPECIFIED = 0,
                        FINE_GRAINED_ACCESS_CONTROL = 1
                    }

                    /** Properties of a Service. */
                    interface IService {

                        /** Service name */
                        name?: (google.cloud.datacatalog.v1beta1.ManagingSystem|keyof typeof google.cloud.datacatalog.v1beta1.ManagingSystem|null);

                        /** Service identity */
                        identity?: (string|null);
                    }

                    /** Represents a Service. */
                    class Service implements IService {

                        /**
                         * Constructs a new Service.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.datacatalog.v1beta1.Taxonomy.IService);

                        /** Service name. */
                        public name: (google.cloud.datacatalog.v1beta1.ManagingSystem|keyof typeof google.cloud.datacatalog.v1beta1.ManagingSystem);

                        /** Service identity. */
                        public identity: string;

                        /**
                         * Creates a new Service instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Service instance
                         */
                        public static create(properties?: google.cloud.datacatalog.v1beta1.Taxonomy.IService): google.cloud.datacatalog.v1beta1.Taxonomy.Service;

                        /**
                         * Encodes the specified Service message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.Taxonomy.Service.verify|verify} messages.
                         * @param message Service message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.datacatalog.v1beta1.Taxonomy.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Service message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.Taxonomy.Service.verify|verify} messages.
                         * @param message Service message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.Taxonomy.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Service message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Service
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.Taxonomy.Service;

                        /**
                         * Decodes a Service message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Service
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.Taxonomy.Service;

                        /**
                         * Verifies a Service message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Service message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Service
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.Taxonomy.Service;

                        /**
                         * Creates a plain object from a Service message. Also converts values to other types if specified.
                         * @param message Service
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.datacatalog.v1beta1.Taxonomy.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Service to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Service
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a PolicyTag. */
                interface IPolicyTag {

                    /** PolicyTag name */
                    name?: (string|null);

                    /** PolicyTag displayName */
                    displayName?: (string|null);

                    /** PolicyTag description */
                    description?: (string|null);

                    /** PolicyTag parentPolicyTag */
                    parentPolicyTag?: (string|null);

                    /** PolicyTag childPolicyTags */
                    childPolicyTags?: (string[]|null);
                }

                /** Represents a PolicyTag. */
                class PolicyTag implements IPolicyTag {

                    /**
                     * Constructs a new PolicyTag.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IPolicyTag);

                    /** PolicyTag name. */
                    public name: string;

                    /** PolicyTag displayName. */
                    public displayName: string;

                    /** PolicyTag description. */
                    public description: string;

                    /** PolicyTag parentPolicyTag. */
                    public parentPolicyTag: string;

                    /** PolicyTag childPolicyTags. */
                    public childPolicyTags: string[];

                    /**
                     * Creates a new PolicyTag instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PolicyTag instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IPolicyTag): google.cloud.datacatalog.v1beta1.PolicyTag;

                    /**
                     * Encodes the specified PolicyTag message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.PolicyTag.verify|verify} messages.
                     * @param message PolicyTag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IPolicyTag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PolicyTag message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.PolicyTag.verify|verify} messages.
                     * @param message PolicyTag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IPolicyTag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PolicyTag message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PolicyTag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.PolicyTag;

                    /**
                     * Decodes a PolicyTag message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PolicyTag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.PolicyTag;

                    /**
                     * Verifies a PolicyTag message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PolicyTag message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PolicyTag
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.PolicyTag;

                    /**
                     * Creates a plain object from a PolicyTag message. Also converts values to other types if specified.
                     * @param message PolicyTag
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.PolicyTag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PolicyTag to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PolicyTag
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTaxonomyRequest. */
                interface ICreateTaxonomyRequest {

                    /** CreateTaxonomyRequest parent */
                    parent?: (string|null);

                    /** CreateTaxonomyRequest taxonomy */
                    taxonomy?: (google.cloud.datacatalog.v1beta1.ITaxonomy|null);
                }

                /** Represents a CreateTaxonomyRequest. */
                class CreateTaxonomyRequest implements ICreateTaxonomyRequest {

                    /**
                     * Constructs a new CreateTaxonomyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ICreateTaxonomyRequest);

                    /** CreateTaxonomyRequest parent. */
                    public parent: string;

                    /** CreateTaxonomyRequest taxonomy. */
                    public taxonomy?: (google.cloud.datacatalog.v1beta1.ITaxonomy|null);

                    /**
                     * Creates a new CreateTaxonomyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTaxonomyRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ICreateTaxonomyRequest): google.cloud.datacatalog.v1beta1.CreateTaxonomyRequest;

                    /**
                     * Encodes the specified CreateTaxonomyRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreateTaxonomyRequest.verify|verify} messages.
                     * @param message CreateTaxonomyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ICreateTaxonomyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTaxonomyRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreateTaxonomyRequest.verify|verify} messages.
                     * @param message CreateTaxonomyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ICreateTaxonomyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTaxonomyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTaxonomyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.CreateTaxonomyRequest;

                    /**
                     * Decodes a CreateTaxonomyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTaxonomyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.CreateTaxonomyRequest;

                    /**
                     * Verifies a CreateTaxonomyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTaxonomyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTaxonomyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.CreateTaxonomyRequest;

                    /**
                     * Creates a plain object from a CreateTaxonomyRequest message. Also converts values to other types if specified.
                     * @param message CreateTaxonomyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.CreateTaxonomyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTaxonomyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTaxonomyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTaxonomyRequest. */
                interface IDeleteTaxonomyRequest {

                    /** DeleteTaxonomyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTaxonomyRequest. */
                class DeleteTaxonomyRequest implements IDeleteTaxonomyRequest {

                    /**
                     * Constructs a new DeleteTaxonomyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IDeleteTaxonomyRequest);

                    /** DeleteTaxonomyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTaxonomyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTaxonomyRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IDeleteTaxonomyRequest): google.cloud.datacatalog.v1beta1.DeleteTaxonomyRequest;

                    /**
                     * Encodes the specified DeleteTaxonomyRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeleteTaxonomyRequest.verify|verify} messages.
                     * @param message DeleteTaxonomyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IDeleteTaxonomyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTaxonomyRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeleteTaxonomyRequest.verify|verify} messages.
                     * @param message DeleteTaxonomyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IDeleteTaxonomyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTaxonomyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTaxonomyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.DeleteTaxonomyRequest;

                    /**
                     * Decodes a DeleteTaxonomyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTaxonomyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.DeleteTaxonomyRequest;

                    /**
                     * Verifies a DeleteTaxonomyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTaxonomyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTaxonomyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.DeleteTaxonomyRequest;

                    /**
                     * Creates a plain object from a DeleteTaxonomyRequest message. Also converts values to other types if specified.
                     * @param message DeleteTaxonomyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.DeleteTaxonomyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTaxonomyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTaxonomyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateTaxonomyRequest. */
                interface IUpdateTaxonomyRequest {

                    /** UpdateTaxonomyRequest taxonomy */
                    taxonomy?: (google.cloud.datacatalog.v1beta1.ITaxonomy|null);

                    /** UpdateTaxonomyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateTaxonomyRequest. */
                class UpdateTaxonomyRequest implements IUpdateTaxonomyRequest {

                    /**
                     * Constructs a new UpdateTaxonomyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IUpdateTaxonomyRequest);

                    /** UpdateTaxonomyRequest taxonomy. */
                    public taxonomy?: (google.cloud.datacatalog.v1beta1.ITaxonomy|null);

                    /** UpdateTaxonomyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateTaxonomyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTaxonomyRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IUpdateTaxonomyRequest): google.cloud.datacatalog.v1beta1.UpdateTaxonomyRequest;

                    /**
                     * Encodes the specified UpdateTaxonomyRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdateTaxonomyRequest.verify|verify} messages.
                     * @param message UpdateTaxonomyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IUpdateTaxonomyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTaxonomyRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdateTaxonomyRequest.verify|verify} messages.
                     * @param message UpdateTaxonomyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IUpdateTaxonomyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTaxonomyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTaxonomyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.UpdateTaxonomyRequest;

                    /**
                     * Decodes an UpdateTaxonomyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTaxonomyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.UpdateTaxonomyRequest;

                    /**
                     * Verifies an UpdateTaxonomyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTaxonomyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTaxonomyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.UpdateTaxonomyRequest;

                    /**
                     * Creates a plain object from an UpdateTaxonomyRequest message. Also converts values to other types if specified.
                     * @param message UpdateTaxonomyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.UpdateTaxonomyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTaxonomyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateTaxonomyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTaxonomiesRequest. */
                interface IListTaxonomiesRequest {

                    /** ListTaxonomiesRequest parent */
                    parent?: (string|null);

                    /** ListTaxonomiesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTaxonomiesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListTaxonomiesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListTaxonomiesRequest. */
                class ListTaxonomiesRequest implements IListTaxonomiesRequest {

                    /**
                     * Constructs a new ListTaxonomiesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IListTaxonomiesRequest);

                    /** ListTaxonomiesRequest parent. */
                    public parent: string;

                    /** ListTaxonomiesRequest pageSize. */
                    public pageSize: number;

                    /** ListTaxonomiesRequest pageToken. */
                    public pageToken: string;

                    /** ListTaxonomiesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListTaxonomiesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTaxonomiesRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IListTaxonomiesRequest): google.cloud.datacatalog.v1beta1.ListTaxonomiesRequest;

                    /**
                     * Encodes the specified ListTaxonomiesRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListTaxonomiesRequest.verify|verify} messages.
                     * @param message ListTaxonomiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IListTaxonomiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTaxonomiesRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListTaxonomiesRequest.verify|verify} messages.
                     * @param message ListTaxonomiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IListTaxonomiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTaxonomiesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTaxonomiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ListTaxonomiesRequest;

                    /**
                     * Decodes a ListTaxonomiesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTaxonomiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ListTaxonomiesRequest;

                    /**
                     * Verifies a ListTaxonomiesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTaxonomiesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTaxonomiesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ListTaxonomiesRequest;

                    /**
                     * Creates a plain object from a ListTaxonomiesRequest message. Also converts values to other types if specified.
                     * @param message ListTaxonomiesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ListTaxonomiesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTaxonomiesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTaxonomiesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTaxonomiesResponse. */
                interface IListTaxonomiesResponse {

                    /** ListTaxonomiesResponse taxonomies */
                    taxonomies?: (google.cloud.datacatalog.v1beta1.ITaxonomy[]|null);

                    /** ListTaxonomiesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTaxonomiesResponse. */
                class ListTaxonomiesResponse implements IListTaxonomiesResponse {

                    /**
                     * Constructs a new ListTaxonomiesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IListTaxonomiesResponse);

                    /** ListTaxonomiesResponse taxonomies. */
                    public taxonomies: google.cloud.datacatalog.v1beta1.ITaxonomy[];

                    /** ListTaxonomiesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTaxonomiesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTaxonomiesResponse instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IListTaxonomiesResponse): google.cloud.datacatalog.v1beta1.ListTaxonomiesResponse;

                    /**
                     * Encodes the specified ListTaxonomiesResponse message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListTaxonomiesResponse.verify|verify} messages.
                     * @param message ListTaxonomiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IListTaxonomiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTaxonomiesResponse message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListTaxonomiesResponse.verify|verify} messages.
                     * @param message ListTaxonomiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IListTaxonomiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTaxonomiesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTaxonomiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ListTaxonomiesResponse;

                    /**
                     * Decodes a ListTaxonomiesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTaxonomiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ListTaxonomiesResponse;

                    /**
                     * Verifies a ListTaxonomiesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTaxonomiesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTaxonomiesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ListTaxonomiesResponse;

                    /**
                     * Creates a plain object from a ListTaxonomiesResponse message. Also converts values to other types if specified.
                     * @param message ListTaxonomiesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ListTaxonomiesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTaxonomiesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTaxonomiesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTaxonomyRequest. */
                interface IGetTaxonomyRequest {

                    /** GetTaxonomyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTaxonomyRequest. */
                class GetTaxonomyRequest implements IGetTaxonomyRequest {

                    /**
                     * Constructs a new GetTaxonomyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IGetTaxonomyRequest);

                    /** GetTaxonomyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTaxonomyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTaxonomyRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IGetTaxonomyRequest): google.cloud.datacatalog.v1beta1.GetTaxonomyRequest;

                    /**
                     * Encodes the specified GetTaxonomyRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GetTaxonomyRequest.verify|verify} messages.
                     * @param message GetTaxonomyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IGetTaxonomyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTaxonomyRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GetTaxonomyRequest.verify|verify} messages.
                     * @param message GetTaxonomyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IGetTaxonomyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTaxonomyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTaxonomyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.GetTaxonomyRequest;

                    /**
                     * Decodes a GetTaxonomyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTaxonomyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.GetTaxonomyRequest;

                    /**
                     * Verifies a GetTaxonomyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTaxonomyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTaxonomyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.GetTaxonomyRequest;

                    /**
                     * Creates a plain object from a GetTaxonomyRequest message. Also converts values to other types if specified.
                     * @param message GetTaxonomyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.GetTaxonomyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTaxonomyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTaxonomyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePolicyTagRequest. */
                interface ICreatePolicyTagRequest {

                    /** CreatePolicyTagRequest parent */
                    parent?: (string|null);

                    /** CreatePolicyTagRequest policyTag */
                    policyTag?: (google.cloud.datacatalog.v1beta1.IPolicyTag|null);
                }

                /** Represents a CreatePolicyTagRequest. */
                class CreatePolicyTagRequest implements ICreatePolicyTagRequest {

                    /**
                     * Constructs a new CreatePolicyTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ICreatePolicyTagRequest);

                    /** CreatePolicyTagRequest parent. */
                    public parent: string;

                    /** CreatePolicyTagRequest policyTag. */
                    public policyTag?: (google.cloud.datacatalog.v1beta1.IPolicyTag|null);

                    /**
                     * Creates a new CreatePolicyTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePolicyTagRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ICreatePolicyTagRequest): google.cloud.datacatalog.v1beta1.CreatePolicyTagRequest;

                    /**
                     * Encodes the specified CreatePolicyTagRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreatePolicyTagRequest.verify|verify} messages.
                     * @param message CreatePolicyTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ICreatePolicyTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePolicyTagRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.CreatePolicyTagRequest.verify|verify} messages.
                     * @param message CreatePolicyTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ICreatePolicyTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePolicyTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePolicyTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.CreatePolicyTagRequest;

                    /**
                     * Decodes a CreatePolicyTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePolicyTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.CreatePolicyTagRequest;

                    /**
                     * Verifies a CreatePolicyTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePolicyTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePolicyTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.CreatePolicyTagRequest;

                    /**
                     * Creates a plain object from a CreatePolicyTagRequest message. Also converts values to other types if specified.
                     * @param message CreatePolicyTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.CreatePolicyTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePolicyTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePolicyTagRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePolicyTagRequest. */
                interface IDeletePolicyTagRequest {

                    /** DeletePolicyTagRequest name */
                    name?: (string|null);
                }

                /** Represents a DeletePolicyTagRequest. */
                class DeletePolicyTagRequest implements IDeletePolicyTagRequest {

                    /**
                     * Constructs a new DeletePolicyTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IDeletePolicyTagRequest);

                    /** DeletePolicyTagRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeletePolicyTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePolicyTagRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IDeletePolicyTagRequest): google.cloud.datacatalog.v1beta1.DeletePolicyTagRequest;

                    /**
                     * Encodes the specified DeletePolicyTagRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeletePolicyTagRequest.verify|verify} messages.
                     * @param message DeletePolicyTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IDeletePolicyTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePolicyTagRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.DeletePolicyTagRequest.verify|verify} messages.
                     * @param message DeletePolicyTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IDeletePolicyTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePolicyTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePolicyTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.DeletePolicyTagRequest;

                    /**
                     * Decodes a DeletePolicyTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePolicyTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.DeletePolicyTagRequest;

                    /**
                     * Verifies a DeletePolicyTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePolicyTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePolicyTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.DeletePolicyTagRequest;

                    /**
                     * Creates a plain object from a DeletePolicyTagRequest message. Also converts values to other types if specified.
                     * @param message DeletePolicyTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.DeletePolicyTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePolicyTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePolicyTagRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePolicyTagRequest. */
                interface IUpdatePolicyTagRequest {

                    /** UpdatePolicyTagRequest policyTag */
                    policyTag?: (google.cloud.datacatalog.v1beta1.IPolicyTag|null);

                    /** UpdatePolicyTagRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdatePolicyTagRequest. */
                class UpdatePolicyTagRequest implements IUpdatePolicyTagRequest {

                    /**
                     * Constructs a new UpdatePolicyTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IUpdatePolicyTagRequest);

                    /** UpdatePolicyTagRequest policyTag. */
                    public policyTag?: (google.cloud.datacatalog.v1beta1.IPolicyTag|null);

                    /** UpdatePolicyTagRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdatePolicyTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePolicyTagRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IUpdatePolicyTagRequest): google.cloud.datacatalog.v1beta1.UpdatePolicyTagRequest;

                    /**
                     * Encodes the specified UpdatePolicyTagRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdatePolicyTagRequest.verify|verify} messages.
                     * @param message UpdatePolicyTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IUpdatePolicyTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePolicyTagRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.UpdatePolicyTagRequest.verify|verify} messages.
                     * @param message UpdatePolicyTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IUpdatePolicyTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePolicyTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePolicyTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.UpdatePolicyTagRequest;

                    /**
                     * Decodes an UpdatePolicyTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePolicyTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.UpdatePolicyTagRequest;

                    /**
                     * Verifies an UpdatePolicyTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePolicyTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePolicyTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.UpdatePolicyTagRequest;

                    /**
                     * Creates a plain object from an UpdatePolicyTagRequest message. Also converts values to other types if specified.
                     * @param message UpdatePolicyTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.UpdatePolicyTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePolicyTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePolicyTagRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPolicyTagsRequest. */
                interface IListPolicyTagsRequest {

                    /** ListPolicyTagsRequest parent */
                    parent?: (string|null);

                    /** ListPolicyTagsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPolicyTagsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListPolicyTagsRequest. */
                class ListPolicyTagsRequest implements IListPolicyTagsRequest {

                    /**
                     * Constructs a new ListPolicyTagsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IListPolicyTagsRequest);

                    /** ListPolicyTagsRequest parent. */
                    public parent: string;

                    /** ListPolicyTagsRequest pageSize. */
                    public pageSize: number;

                    /** ListPolicyTagsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListPolicyTagsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPolicyTagsRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IListPolicyTagsRequest): google.cloud.datacatalog.v1beta1.ListPolicyTagsRequest;

                    /**
                     * Encodes the specified ListPolicyTagsRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListPolicyTagsRequest.verify|verify} messages.
                     * @param message ListPolicyTagsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IListPolicyTagsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPolicyTagsRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListPolicyTagsRequest.verify|verify} messages.
                     * @param message ListPolicyTagsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IListPolicyTagsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPolicyTagsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPolicyTagsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ListPolicyTagsRequest;

                    /**
                     * Decodes a ListPolicyTagsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPolicyTagsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ListPolicyTagsRequest;

                    /**
                     * Verifies a ListPolicyTagsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPolicyTagsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPolicyTagsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ListPolicyTagsRequest;

                    /**
                     * Creates a plain object from a ListPolicyTagsRequest message. Also converts values to other types if specified.
                     * @param message ListPolicyTagsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ListPolicyTagsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPolicyTagsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPolicyTagsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPolicyTagsResponse. */
                interface IListPolicyTagsResponse {

                    /** ListPolicyTagsResponse policyTags */
                    policyTags?: (google.cloud.datacatalog.v1beta1.IPolicyTag[]|null);

                    /** ListPolicyTagsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPolicyTagsResponse. */
                class ListPolicyTagsResponse implements IListPolicyTagsResponse {

                    /**
                     * Constructs a new ListPolicyTagsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IListPolicyTagsResponse);

                    /** ListPolicyTagsResponse policyTags. */
                    public policyTags: google.cloud.datacatalog.v1beta1.IPolicyTag[];

                    /** ListPolicyTagsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPolicyTagsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPolicyTagsResponse instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IListPolicyTagsResponse): google.cloud.datacatalog.v1beta1.ListPolicyTagsResponse;

                    /**
                     * Encodes the specified ListPolicyTagsResponse message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListPolicyTagsResponse.verify|verify} messages.
                     * @param message ListPolicyTagsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IListPolicyTagsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPolicyTagsResponse message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ListPolicyTagsResponse.verify|verify} messages.
                     * @param message ListPolicyTagsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IListPolicyTagsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPolicyTagsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPolicyTagsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ListPolicyTagsResponse;

                    /**
                     * Decodes a ListPolicyTagsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPolicyTagsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ListPolicyTagsResponse;

                    /**
                     * Verifies a ListPolicyTagsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPolicyTagsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPolicyTagsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ListPolicyTagsResponse;

                    /**
                     * Creates a plain object from a ListPolicyTagsResponse message. Also converts values to other types if specified.
                     * @param message ListPolicyTagsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ListPolicyTagsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPolicyTagsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPolicyTagsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPolicyTagRequest. */
                interface IGetPolicyTagRequest {

                    /** GetPolicyTagRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPolicyTagRequest. */
                class GetPolicyTagRequest implements IGetPolicyTagRequest {

                    /**
                     * Constructs a new GetPolicyTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IGetPolicyTagRequest);

                    /** GetPolicyTagRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPolicyTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPolicyTagRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IGetPolicyTagRequest): google.cloud.datacatalog.v1beta1.GetPolicyTagRequest;

                    /**
                     * Encodes the specified GetPolicyTagRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GetPolicyTagRequest.verify|verify} messages.
                     * @param message GetPolicyTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IGetPolicyTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPolicyTagRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.GetPolicyTagRequest.verify|verify} messages.
                     * @param message GetPolicyTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IGetPolicyTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPolicyTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPolicyTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.GetPolicyTagRequest;

                    /**
                     * Decodes a GetPolicyTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPolicyTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.GetPolicyTagRequest;

                    /**
                     * Verifies a GetPolicyTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPolicyTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPolicyTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.GetPolicyTagRequest;

                    /**
                     * Creates a plain object from a GetPolicyTagRequest message. Also converts values to other types if specified.
                     * @param message GetPolicyTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.GetPolicyTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPolicyTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPolicyTagRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a PolicyTagManagerSerialization */
                class PolicyTagManagerSerialization extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new PolicyTagManagerSerialization service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new PolicyTagManagerSerialization service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PolicyTagManagerSerialization;

                    /**
                     * Calls ImportTaxonomies.
                     * @param request ImportTaxonomiesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ImportTaxonomiesResponse
                     */
                    public importTaxonomies(request: google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization.ImportTaxonomiesCallback): void;

                    /**
                     * Calls ImportTaxonomies.
                     * @param request ImportTaxonomiesRequest message or plain object
                     * @returns Promise
                     */
                    public importTaxonomies(request: google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest): Promise<google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse>;

                    /**
                     * Calls ExportTaxonomies.
                     * @param request ExportTaxonomiesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ExportTaxonomiesResponse
                     */
                    public exportTaxonomies(request: google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest, callback: google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization.ExportTaxonomiesCallback): void;

                    /**
                     * Calls ExportTaxonomies.
                     * @param request ExportTaxonomiesRequest message or plain object
                     * @returns Promise
                     */
                    public exportTaxonomies(request: google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest): Promise<google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse>;
                }

                namespace PolicyTagManagerSerialization {

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization|importTaxonomies}.
                     * @param error Error, if any
                     * @param [response] ImportTaxonomiesResponse
                     */
                    type ImportTaxonomiesCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization|exportTaxonomies}.
                     * @param error Error, if any
                     * @param [response] ExportTaxonomiesResponse
                     */
                    type ExportTaxonomiesCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse) => void;
                }

                /** Properties of a SerializedTaxonomy. */
                interface ISerializedTaxonomy {

                    /** SerializedTaxonomy displayName */
                    displayName?: (string|null);

                    /** SerializedTaxonomy description */
                    description?: (string|null);

                    /** SerializedTaxonomy policyTags */
                    policyTags?: (google.cloud.datacatalog.v1beta1.ISerializedPolicyTag[]|null);

                    /** SerializedTaxonomy activatedPolicyTypes */
                    activatedPolicyTypes?: (google.cloud.datacatalog.v1beta1.Taxonomy.PolicyType[]|null);
                }

                /** Represents a SerializedTaxonomy. */
                class SerializedTaxonomy implements ISerializedTaxonomy {

                    /**
                     * Constructs a new SerializedTaxonomy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ISerializedTaxonomy);

                    /** SerializedTaxonomy displayName. */
                    public displayName: string;

                    /** SerializedTaxonomy description. */
                    public description: string;

                    /** SerializedTaxonomy policyTags. */
                    public policyTags: google.cloud.datacatalog.v1beta1.ISerializedPolicyTag[];

                    /** SerializedTaxonomy activatedPolicyTypes. */
                    public activatedPolicyTypes: google.cloud.datacatalog.v1beta1.Taxonomy.PolicyType[];

                    /**
                     * Creates a new SerializedTaxonomy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SerializedTaxonomy instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ISerializedTaxonomy): google.cloud.datacatalog.v1beta1.SerializedTaxonomy;

                    /**
                     * Encodes the specified SerializedTaxonomy message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SerializedTaxonomy.verify|verify} messages.
                     * @param message SerializedTaxonomy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ISerializedTaxonomy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SerializedTaxonomy message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SerializedTaxonomy.verify|verify} messages.
                     * @param message SerializedTaxonomy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ISerializedTaxonomy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SerializedTaxonomy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SerializedTaxonomy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.SerializedTaxonomy;

                    /**
                     * Decodes a SerializedTaxonomy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SerializedTaxonomy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.SerializedTaxonomy;

                    /**
                     * Verifies a SerializedTaxonomy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SerializedTaxonomy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SerializedTaxonomy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.SerializedTaxonomy;

                    /**
                     * Creates a plain object from a SerializedTaxonomy message. Also converts values to other types if specified.
                     * @param message SerializedTaxonomy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.SerializedTaxonomy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SerializedTaxonomy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SerializedTaxonomy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SerializedPolicyTag. */
                interface ISerializedPolicyTag {

                    /** SerializedPolicyTag policyTag */
                    policyTag?: (string|null);

                    /** SerializedPolicyTag displayName */
                    displayName?: (string|null);

                    /** SerializedPolicyTag description */
                    description?: (string|null);

                    /** SerializedPolicyTag childPolicyTags */
                    childPolicyTags?: (google.cloud.datacatalog.v1beta1.ISerializedPolicyTag[]|null);
                }

                /** Represents a SerializedPolicyTag. */
                class SerializedPolicyTag implements ISerializedPolicyTag {

                    /**
                     * Constructs a new SerializedPolicyTag.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ISerializedPolicyTag);

                    /** SerializedPolicyTag policyTag. */
                    public policyTag: string;

                    /** SerializedPolicyTag displayName. */
                    public displayName: string;

                    /** SerializedPolicyTag description. */
                    public description: string;

                    /** SerializedPolicyTag childPolicyTags. */
                    public childPolicyTags: google.cloud.datacatalog.v1beta1.ISerializedPolicyTag[];

                    /**
                     * Creates a new SerializedPolicyTag instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SerializedPolicyTag instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.ISerializedPolicyTag): google.cloud.datacatalog.v1beta1.SerializedPolicyTag;

                    /**
                     * Encodes the specified SerializedPolicyTag message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SerializedPolicyTag.verify|verify} messages.
                     * @param message SerializedPolicyTag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.ISerializedPolicyTag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SerializedPolicyTag message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.SerializedPolicyTag.verify|verify} messages.
                     * @param message SerializedPolicyTag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.ISerializedPolicyTag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SerializedPolicyTag message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SerializedPolicyTag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.SerializedPolicyTag;

                    /**
                     * Decodes a SerializedPolicyTag message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SerializedPolicyTag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.SerializedPolicyTag;

                    /**
                     * Verifies a SerializedPolicyTag message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SerializedPolicyTag message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SerializedPolicyTag
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.SerializedPolicyTag;

                    /**
                     * Creates a plain object from a SerializedPolicyTag message. Also converts values to other types if specified.
                     * @param message SerializedPolicyTag
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.SerializedPolicyTag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SerializedPolicyTag to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SerializedPolicyTag
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportTaxonomiesRequest. */
                interface IImportTaxonomiesRequest {

                    /** ImportTaxonomiesRequest parent */
                    parent?: (string|null);

                    /** ImportTaxonomiesRequest inlineSource */
                    inlineSource?: (google.cloud.datacatalog.v1beta1.IInlineSource|null);
                }

                /** Represents an ImportTaxonomiesRequest. */
                class ImportTaxonomiesRequest implements IImportTaxonomiesRequest {

                    /**
                     * Constructs a new ImportTaxonomiesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest);

                    /** ImportTaxonomiesRequest parent. */
                    public parent: string;

                    /** ImportTaxonomiesRequest inlineSource. */
                    public inlineSource?: (google.cloud.datacatalog.v1beta1.IInlineSource|null);

                    /** ImportTaxonomiesRequest source. */
                    public source?: "inlineSource";

                    /**
                     * Creates a new ImportTaxonomiesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportTaxonomiesRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest): google.cloud.datacatalog.v1beta1.ImportTaxonomiesRequest;

                    /**
                     * Encodes the specified ImportTaxonomiesRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ImportTaxonomiesRequest.verify|verify} messages.
                     * @param message ImportTaxonomiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportTaxonomiesRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ImportTaxonomiesRequest.verify|verify} messages.
                     * @param message ImportTaxonomiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportTaxonomiesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportTaxonomiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ImportTaxonomiesRequest;

                    /**
                     * Decodes an ImportTaxonomiesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportTaxonomiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ImportTaxonomiesRequest;

                    /**
                     * Verifies an ImportTaxonomiesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportTaxonomiesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportTaxonomiesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ImportTaxonomiesRequest;

                    /**
                     * Creates a plain object from an ImportTaxonomiesRequest message. Also converts values to other types if specified.
                     * @param message ImportTaxonomiesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ImportTaxonomiesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportTaxonomiesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportTaxonomiesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InlineSource. */
                interface IInlineSource {

                    /** InlineSource taxonomies */
                    taxonomies?: (google.cloud.datacatalog.v1beta1.ISerializedTaxonomy[]|null);
                }

                /** Represents an InlineSource. */
                class InlineSource implements IInlineSource {

                    /**
                     * Constructs a new InlineSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IInlineSource);

                    /** InlineSource taxonomies. */
                    public taxonomies: google.cloud.datacatalog.v1beta1.ISerializedTaxonomy[];

                    /**
                     * Creates a new InlineSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InlineSource instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IInlineSource): google.cloud.datacatalog.v1beta1.InlineSource;

                    /**
                     * Encodes the specified InlineSource message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.InlineSource.verify|verify} messages.
                     * @param message InlineSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IInlineSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InlineSource message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.InlineSource.verify|verify} messages.
                     * @param message InlineSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IInlineSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InlineSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InlineSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.InlineSource;

                    /**
                     * Decodes an InlineSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InlineSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.InlineSource;

                    /**
                     * Verifies an InlineSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InlineSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InlineSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.InlineSource;

                    /**
                     * Creates a plain object from an InlineSource message. Also converts values to other types if specified.
                     * @param message InlineSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.InlineSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InlineSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InlineSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportTaxonomiesResponse. */
                interface IImportTaxonomiesResponse {

                    /** ImportTaxonomiesResponse taxonomies */
                    taxonomies?: (google.cloud.datacatalog.v1beta1.ITaxonomy[]|null);
                }

                /** Represents an ImportTaxonomiesResponse. */
                class ImportTaxonomiesResponse implements IImportTaxonomiesResponse {

                    /**
                     * Constructs a new ImportTaxonomiesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse);

                    /** ImportTaxonomiesResponse taxonomies. */
                    public taxonomies: google.cloud.datacatalog.v1beta1.ITaxonomy[];

                    /**
                     * Creates a new ImportTaxonomiesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportTaxonomiesResponse instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse): google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse;

                    /**
                     * Encodes the specified ImportTaxonomiesResponse message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse.verify|verify} messages.
                     * @param message ImportTaxonomiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportTaxonomiesResponse message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse.verify|verify} messages.
                     * @param message ImportTaxonomiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportTaxonomiesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportTaxonomiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse;

                    /**
                     * Decodes an ImportTaxonomiesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportTaxonomiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse;

                    /**
                     * Verifies an ImportTaxonomiesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportTaxonomiesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportTaxonomiesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse;

                    /**
                     * Creates a plain object from an ImportTaxonomiesResponse message. Also converts values to other types if specified.
                     * @param message ImportTaxonomiesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportTaxonomiesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportTaxonomiesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportTaxonomiesRequest. */
                interface IExportTaxonomiesRequest {

                    /** ExportTaxonomiesRequest parent */
                    parent?: (string|null);

                    /** ExportTaxonomiesRequest taxonomies */
                    taxonomies?: (string[]|null);

                    /** ExportTaxonomiesRequest serializedTaxonomies */
                    serializedTaxonomies?: (boolean|null);
                }

                /** Represents an ExportTaxonomiesRequest. */
                class ExportTaxonomiesRequest implements IExportTaxonomiesRequest {

                    /**
                     * Constructs a new ExportTaxonomiesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest);

                    /** ExportTaxonomiesRequest parent. */
                    public parent: string;

                    /** ExportTaxonomiesRequest taxonomies. */
                    public taxonomies: string[];

                    /** ExportTaxonomiesRequest serializedTaxonomies. */
                    public serializedTaxonomies?: (boolean|null);

                    /** ExportTaxonomiesRequest destination. */
                    public destination?: "serializedTaxonomies";

                    /**
                     * Creates a new ExportTaxonomiesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportTaxonomiesRequest instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest): google.cloud.datacatalog.v1beta1.ExportTaxonomiesRequest;

                    /**
                     * Encodes the specified ExportTaxonomiesRequest message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ExportTaxonomiesRequest.verify|verify} messages.
                     * @param message ExportTaxonomiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportTaxonomiesRequest message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ExportTaxonomiesRequest.verify|verify} messages.
                     * @param message ExportTaxonomiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportTaxonomiesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportTaxonomiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ExportTaxonomiesRequest;

                    /**
                     * Decodes an ExportTaxonomiesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportTaxonomiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ExportTaxonomiesRequest;

                    /**
                     * Verifies an ExportTaxonomiesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportTaxonomiesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportTaxonomiesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ExportTaxonomiesRequest;

                    /**
                     * Creates a plain object from an ExportTaxonomiesRequest message. Also converts values to other types if specified.
                     * @param message ExportTaxonomiesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ExportTaxonomiesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportTaxonomiesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportTaxonomiesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportTaxonomiesResponse. */
                interface IExportTaxonomiesResponse {

                    /** ExportTaxonomiesResponse taxonomies */
                    taxonomies?: (google.cloud.datacatalog.v1beta1.ISerializedTaxonomy[]|null);
                }

                /** Represents an ExportTaxonomiesResponse. */
                class ExportTaxonomiesResponse implements IExportTaxonomiesResponse {

                    /**
                     * Constructs a new ExportTaxonomiesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse);

                    /** ExportTaxonomiesResponse taxonomies. */
                    public taxonomies: google.cloud.datacatalog.v1beta1.ISerializedTaxonomy[];

                    /**
                     * Creates a new ExportTaxonomiesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportTaxonomiesResponse instance
                     */
                    public static create(properties?: google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse): google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse;

                    /**
                     * Encodes the specified ExportTaxonomiesResponse message. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse.verify|verify} messages.
                     * @param message ExportTaxonomiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportTaxonomiesResponse message, length delimited. Does not implicitly {@link google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse.verify|verify} messages.
                     * @param message ExportTaxonomiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportTaxonomiesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportTaxonomiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse;

                    /**
                     * Decodes an ExportTaxonomiesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportTaxonomiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse;

                    /**
                     * Verifies an ExportTaxonomiesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportTaxonomiesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportTaxonomiesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse;

                    /**
                     * Creates a plain object from an ExportTaxonomiesResponse message. Also converts values to other types if specified.
                     * @param message ExportTaxonomiesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportTaxonomiesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportTaxonomiesResponse
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

    /** Namespace iam. */
    namespace iam {

        /** Namespace v1. */
        namespace v1 {

            /** Represents a IAMPolicy */
            class IAMPolicy extends $protobuf.rpc.Service {

                /**
                 * Constructs a new IAMPolicy service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new IAMPolicy service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IAMPolicy;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.SetIamPolicyCallback): void;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.GetIamPolicyCallback): void;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.iam.v1.IAMPolicy.TestIamPermissionsCallback): void;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @returns Promise
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;
            }

            namespace IAMPolicy {

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|setIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|getIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|testIamPermissions}.
                 * @param error Error, if any
                 * @param [response] TestIamPermissionsResponse
                 */
                type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;
            }

            /** Properties of a SetIamPolicyRequest. */
            interface ISetIamPolicyRequest {

                /** SetIamPolicyRequest resource */
                resource?: (string|null);

                /** SetIamPolicyRequest policy */
                policy?: (google.iam.v1.IPolicy|null);

                /** SetIamPolicyRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents a SetIamPolicyRequest. */
            class SetIamPolicyRequest implements ISetIamPolicyRequest {

                /**
                 * Constructs a new SetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ISetIamPolicyRequest);

                /** SetIamPolicyRequest resource. */
                public resource: string;

                /** SetIamPolicyRequest policy. */
                public policy?: (google.iam.v1.IPolicy|null);

                /** SetIamPolicyRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new SetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.ISetIamPolicyRequest): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Encodes the specified SetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Verifies a SetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Creates a plain object from a SetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message SetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.SetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SetIamPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetIamPolicyRequest. */
            interface IGetIamPolicyRequest {

                /** GetIamPolicyRequest resource */
                resource?: (string|null);

                /** GetIamPolicyRequest options */
                options?: (google.iam.v1.IGetPolicyOptions|null);
            }

            /** Represents a GetIamPolicyRequest. */
            class GetIamPolicyRequest implements IGetIamPolicyRequest {

                /**
                 * Constructs a new GetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetIamPolicyRequest);

                /** GetIamPolicyRequest resource. */
                public resource: string;

                /** GetIamPolicyRequest options. */
                public options?: (google.iam.v1.IGetPolicyOptions|null);

                /**
                 * Creates a new GetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.IGetIamPolicyRequest): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Encodes the specified GetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Verifies a GetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Creates a plain object from a GetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetIamPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TestIamPermissionsRequest. */
            interface ITestIamPermissionsRequest {

                /** TestIamPermissionsRequest resource */
                resource?: (string|null);

                /** TestIamPermissionsRequest permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsRequest. */
            class TestIamPermissionsRequest implements ITestIamPermissionsRequest {

                /**
                 * Constructs a new TestIamPermissionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsRequest);

                /** TestIamPermissionsRequest resource. */
                public resource: string;

                /** TestIamPermissionsRequest permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsRequest instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsRequest): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Encodes the specified TestIamPermissionsRequest message. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsRequest message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Verifies a TestIamPermissionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Creates a plain object from a TestIamPermissionsRequest message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TestIamPermissionsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TestIamPermissionsResponse. */
            interface ITestIamPermissionsResponse {

                /** TestIamPermissionsResponse permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsResponse. */
            class TestIamPermissionsResponse implements ITestIamPermissionsResponse {

                /**
                 * Constructs a new TestIamPermissionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsResponse);

                /** TestIamPermissionsResponse permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsResponse instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsResponse): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Encodes the specified TestIamPermissionsResponse message. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsResponse message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Verifies a TestIamPermissionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Creates a plain object from a TestIamPermissionsResponse message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TestIamPermissionsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetPolicyOptions. */
            interface IGetPolicyOptions {

                /** GetPolicyOptions requestedPolicyVersion */
                requestedPolicyVersion?: (number|null);
            }

            /** Represents a GetPolicyOptions. */
            class GetPolicyOptions implements IGetPolicyOptions {

                /**
                 * Constructs a new GetPolicyOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetPolicyOptions);

                /** GetPolicyOptions requestedPolicyVersion. */
                public requestedPolicyVersion: number;

                /**
                 * Creates a new GetPolicyOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPolicyOptions instance
                 */
                public static create(properties?: google.iam.v1.IGetPolicyOptions): google.iam.v1.GetPolicyOptions;

                /**
                 * Encodes the specified GetPolicyOptions message. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPolicyOptions message, length delimited. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetPolicyOptions;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetPolicyOptions;

                /**
                 * Verifies a GetPolicyOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPolicyOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPolicyOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetPolicyOptions;

                /**
                 * Creates a plain object from a GetPolicyOptions message. Also converts values to other types if specified.
                 * @param message GetPolicyOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetPolicyOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPolicyOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetPolicyOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy version */
                version?: (number|null);

                /** Policy bindings */
                bindings?: (google.iam.v1.IBinding[]|null);

                /** Policy auditConfigs */
                auditConfigs?: (google.iam.v1.IAuditConfig[]|null);

                /** Policy etag */
                etag?: (Uint8Array|string|null);
            }

            /** Represents a Policy. */
            class Policy implements IPolicy {

                /**
                 * Constructs a new Policy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicy);

                /** Policy version. */
                public version: number;

                /** Policy bindings. */
                public bindings: google.iam.v1.IBinding[];

                /** Policy auditConfigs. */
                public auditConfigs: google.iam.v1.IAuditConfig[];

                /** Policy etag. */
                public etag: (Uint8Array|string);

                /**
                 * Creates a new Policy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Policy instance
                 */
                public static create(properties?: google.iam.v1.IPolicy): google.iam.v1.Policy;

                /**
                 * Encodes the specified Policy message. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Policy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Policy;

                /**
                 * Decodes a Policy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Policy;

                /**
                 * Verifies a Policy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Policy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Policy
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Policy;

                /**
                 * Creates a plain object from a Policy message. Also converts values to other types if specified.
                 * @param message Policy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Policy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Policy
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Binding. */
            interface IBinding {

                /** Binding role */
                role?: (string|null);

                /** Binding members */
                members?: (string[]|null);

                /** Binding condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a Binding. */
            class Binding implements IBinding {

                /**
                 * Constructs a new Binding.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBinding);

                /** Binding role. */
                public role: string;

                /** Binding members. */
                public members: string[];

                /** Binding condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new Binding instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Binding instance
                 */
                public static create(properties?: google.iam.v1.IBinding): google.iam.v1.Binding;

                /**
                 * Encodes the specified Binding message. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Binding message, length delimited. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Binding message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Binding;

                /**
                 * Decodes a Binding message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Binding;

                /**
                 * Verifies a Binding message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Binding message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Binding
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Binding;

                /**
                 * Creates a plain object from a Binding message. Also converts values to other types if specified.
                 * @param message Binding
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Binding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Binding to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Binding
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AuditConfig. */
            interface IAuditConfig {

                /** AuditConfig service */
                service?: (string|null);

                /** AuditConfig auditLogConfigs */
                auditLogConfigs?: (google.iam.v1.IAuditLogConfig[]|null);
            }

            /** Represents an AuditConfig. */
            class AuditConfig implements IAuditConfig {

                /**
                 * Constructs a new AuditConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfig);

                /** AuditConfig service. */
                public service: string;

                /** AuditConfig auditLogConfigs. */
                public auditLogConfigs: google.iam.v1.IAuditLogConfig[];

                /**
                 * Creates a new AuditConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfig instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfig): google.iam.v1.AuditConfig;

                /**
                 * Encodes the specified AuditConfig message. Does not implicitly {@link google.iam.v1.AuditConfig.verify|verify} messages.
                 * @param message AuditConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfig message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfig.verify|verify} messages.
                 * @param message AuditConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfig;

                /**
                 * Decodes an AuditConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfig;

                /**
                 * Verifies an AuditConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfig;

                /**
                 * Creates a plain object from an AuditConfig message. Also converts values to other types if specified.
                 * @param message AuditConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AuditLogConfig. */
            interface IAuditLogConfig {

                /** AuditLogConfig logType */
                logType?: (google.iam.v1.AuditLogConfig.LogType|keyof typeof google.iam.v1.AuditLogConfig.LogType|null);

                /** AuditLogConfig exemptedMembers */
                exemptedMembers?: (string[]|null);
            }

            /** Represents an AuditLogConfig. */
            class AuditLogConfig implements IAuditLogConfig {

                /**
                 * Constructs a new AuditLogConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditLogConfig);

                /** AuditLogConfig logType. */
                public logType: (google.iam.v1.AuditLogConfig.LogType|keyof typeof google.iam.v1.AuditLogConfig.LogType);

                /** AuditLogConfig exemptedMembers. */
                public exemptedMembers: string[];

                /**
                 * Creates a new AuditLogConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditLogConfig instance
                 */
                public static create(properties?: google.iam.v1.IAuditLogConfig): google.iam.v1.AuditLogConfig;

                /**
                 * Encodes the specified AuditLogConfig message. Does not implicitly {@link google.iam.v1.AuditLogConfig.verify|verify} messages.
                 * @param message AuditLogConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditLogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditLogConfig message, length delimited. Does not implicitly {@link google.iam.v1.AuditLogConfig.verify|verify} messages.
                 * @param message AuditLogConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditLogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditLogConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditLogConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditLogConfig;

                /**
                 * Decodes an AuditLogConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditLogConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditLogConfig;

                /**
                 * Verifies an AuditLogConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditLogConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditLogConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditLogConfig;

                /**
                 * Creates a plain object from an AuditLogConfig message. Also converts values to other types if specified.
                 * @param message AuditLogConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditLogConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditLogConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditLogConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AuditLogConfig {

                /** LogType enum. */
                enum LogType {
                    LOG_TYPE_UNSPECIFIED = 0,
                    ADMIN_READ = 1,
                    DATA_WRITE = 2,
                    DATA_READ = 3
                }
            }

            /** Properties of a PolicyDelta. */
            interface IPolicyDelta {

                /** PolicyDelta bindingDeltas */
                bindingDeltas?: (google.iam.v1.IBindingDelta[]|null);

                /** PolicyDelta auditConfigDeltas */
                auditConfigDeltas?: (google.iam.v1.IAuditConfigDelta[]|null);
            }

            /** Represents a PolicyDelta. */
            class PolicyDelta implements IPolicyDelta {

                /**
                 * Constructs a new PolicyDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicyDelta);

                /** PolicyDelta bindingDeltas. */
                public bindingDeltas: google.iam.v1.IBindingDelta[];

                /** PolicyDelta auditConfigDeltas. */
                public auditConfigDeltas: google.iam.v1.IAuditConfigDelta[];

                /**
                 * Creates a new PolicyDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyDelta instance
                 */
                public static create(properties?: google.iam.v1.IPolicyDelta): google.iam.v1.PolicyDelta;

                /**
                 * Encodes the specified PolicyDelta message. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyDelta message, length delimited. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.PolicyDelta;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.PolicyDelta;

                /**
                 * Verifies a PolicyDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.PolicyDelta;

                /**
                 * Creates a plain object from a PolicyDelta message. Also converts values to other types if specified.
                 * @param message PolicyDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.PolicyDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PolicyDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BindingDelta. */
            interface IBindingDelta {

                /** BindingDelta action */
                action?: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action|null);

                /** BindingDelta role */
                role?: (string|null);

                /** BindingDelta member */
                member?: (string|null);

                /** BindingDelta condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a BindingDelta. */
            class BindingDelta implements IBindingDelta {

                /**
                 * Constructs a new BindingDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBindingDelta);

                /** BindingDelta action. */
                public action: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action);

                /** BindingDelta role. */
                public role: string;

                /** BindingDelta member. */
                public member: string;

                /** BindingDelta condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new BindingDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BindingDelta instance
                 */
                public static create(properties?: google.iam.v1.IBindingDelta): google.iam.v1.BindingDelta;

                /**
                 * Encodes the specified BindingDelta message. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BindingDelta message, length delimited. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.BindingDelta;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.BindingDelta;

                /**
                 * Verifies a BindingDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BindingDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BindingDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.BindingDelta;

                /**
                 * Creates a plain object from a BindingDelta message. Also converts values to other types if specified.
                 * @param message BindingDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.BindingDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BindingDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BindingDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace BindingDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }

            /** Properties of an AuditConfigDelta. */
            interface IAuditConfigDelta {

                /** AuditConfigDelta action */
                action?: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action|null);

                /** AuditConfigDelta service */
                service?: (string|null);

                /** AuditConfigDelta exemptedMember */
                exemptedMember?: (string|null);

                /** AuditConfigDelta logType */
                logType?: (string|null);
            }

            /** Represents an AuditConfigDelta. */
            class AuditConfigDelta implements IAuditConfigDelta {

                /**
                 * Constructs a new AuditConfigDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfigDelta);

                /** AuditConfigDelta action. */
                public action: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action);

                /** AuditConfigDelta service. */
                public service: string;

                /** AuditConfigDelta exemptedMember. */
                public exemptedMember: string;

                /** AuditConfigDelta logType. */
                public logType: string;

                /**
                 * Creates a new AuditConfigDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfigDelta instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfigDelta): google.iam.v1.AuditConfigDelta;

                /**
                 * Encodes the specified AuditConfigDelta message. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfigDelta message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfigDelta;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfigDelta;

                /**
                 * Verifies an AuditConfigDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfigDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfigDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfigDelta;

                /**
                 * Creates a plain object from an AuditConfigDelta message. Also converts values to other types if specified.
                 * @param message AuditConfigDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfigDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfigDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditConfigDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AuditConfigDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of an Expr. */
        interface IExpr {

            /** Expr expression */
            expression?: (string|null);

            /** Expr title */
            title?: (string|null);

            /** Expr description */
            description?: (string|null);

            /** Expr location */
            location?: (string|null);
        }

        /** Represents an Expr. */
        class Expr implements IExpr {

            /**
             * Constructs a new Expr.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IExpr);

            /** Expr expression. */
            public expression: string;

            /** Expr title. */
            public title: string;

            /** Expr description. */
            public description: string;

            /** Expr location. */
            public location: string;

            /**
             * Creates a new Expr instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Expr instance
             */
            public static create(properties?: google.type.IExpr): google.type.Expr;

            /**
             * Encodes the specified Expr message. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Expr message, length delimited. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Expr message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Expr;

            /**
             * Decodes an Expr message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Expr;

            /**
             * Verifies an Expr message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Expr message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Expr
             */
            public static fromObject(object: { [k: string]: any }): google.type.Expr;

            /**
             * Creates a plain object from an Expr message. Also converts values to other types if specified.
             * @param message Expr
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Expr, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Expr to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Expr
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
