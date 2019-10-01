import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace datacatalog. */
        namespace datacatalog {

            /** Namespace v1beta1. */
            namespace v1beta1 {

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
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#searchCatalog}.
                     * @param error Error, if any
                     * @param [response] SearchCatalogResponse
                     */
                    type SearchCatalogCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.SearchCatalogResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#createEntryGroup}.
                     * @param error Error, if any
                     * @param [response] EntryGroup
                     */
                    type CreateEntryGroupCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.EntryGroup) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#getEntryGroup}.
                     * @param error Error, if any
                     * @param [response] EntryGroup
                     */
                    type GetEntryGroupCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.EntryGroup) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#deleteEntryGroup}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteEntryGroupCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#createEntry}.
                     * @param error Error, if any
                     * @param [response] Entry
                     */
                    type CreateEntryCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Entry) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#updateEntry}.
                     * @param error Error, if any
                     * @param [response] Entry
                     */
                    type UpdateEntryCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Entry) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#deleteEntry}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteEntryCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#getEntry}.
                     * @param error Error, if any
                     * @param [response] Entry
                     */
                    type GetEntryCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Entry) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#lookupEntry}.
                     * @param error Error, if any
                     * @param [response] Entry
                     */
                    type LookupEntryCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Entry) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#createTagTemplate}.
                     * @param error Error, if any
                     * @param [response] TagTemplate
                     */
                    type CreateTagTemplateCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.TagTemplate) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#getTagTemplate}.
                     * @param error Error, if any
                     * @param [response] TagTemplate
                     */
                    type GetTagTemplateCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.TagTemplate) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#updateTagTemplate}.
                     * @param error Error, if any
                     * @param [response] TagTemplate
                     */
                    type UpdateTagTemplateCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.TagTemplate) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#deleteTagTemplate}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTagTemplateCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#createTagTemplateField}.
                     * @param error Error, if any
                     * @param [response] TagTemplateField
                     */
                    type CreateTagTemplateFieldCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.TagTemplateField) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#updateTagTemplateField}.
                     * @param error Error, if any
                     * @param [response] TagTemplateField
                     */
                    type UpdateTagTemplateFieldCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.TagTemplateField) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#renameTagTemplateField}.
                     * @param error Error, if any
                     * @param [response] TagTemplateField
                     */
                    type RenameTagTemplateFieldCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.TagTemplateField) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#deleteTagTemplateField}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTagTemplateFieldCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#createTag}.
                     * @param error Error, if any
                     * @param [response] Tag
                     */
                    type CreateTagCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Tag) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#updateTag}.
                     * @param error Error, if any
                     * @param [response] Tag
                     */
                    type UpdateTagCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.Tag) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#deleteTag}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTagCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#listTags}.
                     * @param error Error, if any
                     * @param [response] ListTagsResponse
                     */
                    type ListTagsCallback = (error: (Error|null), response?: google.cloud.datacatalog.v1beta1.ListTagsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#setIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#getIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.datacatalog.v1beta1.DataCatalog#testIamPermissions}.
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
                    }
                }

                /** Properties of a SearchCatalogResponse. */
                interface ISearchCatalogResponse {

                    /** SearchCatalogResponse results */
                    results?: (google.cloud.datacatalog.v1beta1.ISearchCatalogResult[]|null);

                    /** SearchCatalogResponse nextPageToken */
                    nextPageToken?: (string|null);
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

                    /** SearchCatalogResponse nextPageToken. */
                    public nextPageToken: string;

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
                }

                /** Properties of a DeleteEntryGroupRequest. */
                interface IDeleteEntryGroupRequest {

                    /** DeleteEntryGroupRequest name */
                    name?: (string|null);
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
                    public linkedResource: string;

                    /** LookupEntryRequest sqlResource. */
                    public sqlResource: string;

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
                }

                /** Properties of an Entry. */
                interface IEntry {

                    /** Entry name */
                    name?: (string|null);

                    /** Entry linkedResource */
                    linkedResource?: (string|null);

                    /** Entry type */
                    type?: (google.cloud.datacatalog.v1beta1.EntryType|null);

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
                    public type: google.cloud.datacatalog.v1beta1.EntryType;

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

                    /** Entry entryType. */
                    public entryType?: "type";

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
                }

                /** EntryType enum. */
                enum EntryType {
                    ENTRY_TYPE_UNSPECIFIED = 0,
                    TABLE = 2,
                    DATA_STREAM = 3,
                    FILESET = 4
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
                }

                /** Properties of a GcsFileSpec. */
                interface IGcsFileSpec {

                    /** GcsFileSpec filePath */
                    filePath?: (string|null);

                    /** GcsFileSpec gcsTimestamps */
                    gcsTimestamps?: (google.cloud.datacatalog.v1beta1.ISystemTimestamps|null);

                    /** GcsFileSpec sizeBytes */
                    sizeBytes?: (number|Long|null);
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
                    public sizeBytes: (number|Long);

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
                }

                /** Properties of a SearchCatalogResult. */
                interface ISearchCatalogResult {

                    /** SearchCatalogResult searchResultType */
                    searchResultType?: (google.cloud.datacatalog.v1beta1.SearchResultType|null);

                    /** SearchCatalogResult searchResultSubtype */
                    searchResultSubtype?: (string|null);

                    /** SearchCatalogResult relativeResourceName */
                    relativeResourceName?: (string|null);

                    /** SearchCatalogResult linkedResource */
                    linkedResource?: (string|null);
                }

                /** Represents a SearchCatalogResult. */
                class SearchCatalogResult implements ISearchCatalogResult {

                    /**
                     * Constructs a new SearchCatalogResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datacatalog.v1beta1.ISearchCatalogResult);

                    /** SearchCatalogResult searchResultType. */
                    public searchResultType: google.cloud.datacatalog.v1beta1.SearchResultType;

                    /** SearchCatalogResult searchResultSubtype. */
                    public searchResultSubtype: string;

                    /** SearchCatalogResult relativeResourceName. */
                    public relativeResourceName: string;

                    /** SearchCatalogResult linkedResource. */
                    public linkedResource: string;

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
                    tableSourceType?: (google.cloud.datacatalog.v1beta1.TableSourceType|null);

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
                    public tableSourceType: google.cloud.datacatalog.v1beta1.TableSourceType;

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
                }

                /** TableSourceType enum. */
                enum TableSourceType {
                    TABLE_SOURCE_TYPE_UNSPECIFIED = 0,
                    BIGQUERY_VIEW = 2,
                    BIGQUERY_TABLE = 5
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
                }

                /** Properties of a BigQueryDateShardedSpec. */
                interface IBigQueryDateShardedSpec {

                    /** BigQueryDateShardedSpec dataset */
                    dataset?: (string|null);

                    /** BigQueryDateShardedSpec tablePrefix */
                    tablePrefix?: (string|null);

                    /** BigQueryDateShardedSpec shardCount */
                    shardCount?: (number|Long|null);
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
                    public shardCount: (number|Long);

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
                    public column: string;

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
                    public doubleValue: number;

                    /** TagField stringValue. */
                    public stringValue: string;

                    /** TagField boolValue. */
                    public boolValue: boolean;

                    /** TagField timestampValue. */
                    public timestampValue?: (google.protobuf.ITimestamp|null);

                    /** TagField enumValue. */
                    public enumValue?: (google.cloud.datacatalog.v1beta1.TagField.IEnumValue|null);

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
                }

                /** Properties of a TagTemplateField. */
                interface ITagTemplateField {

                    /** TagTemplateField name */
                    name?: (string|null);

                    /** TagTemplateField displayName */
                    displayName?: (string|null);

                    /** TagTemplateField type */
                    type?: (google.cloud.datacatalog.v1beta1.IFieldType|null);
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
                }

                /** Properties of a FieldType. */
                interface IFieldType {

                    /** FieldType primitiveType */
                    primitiveType?: (google.cloud.datacatalog.v1beta1.FieldType.PrimitiveType|null);

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
                    public primitiveType: google.cloud.datacatalog.v1beta1.FieldType.PrimitiveType;

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
                }

                namespace FieldType {

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
                        }
                    }

                    /** PrimitiveType enum. */
                    enum PrimitiveType {
                        PRIMITIVE_TYPE_UNSPECIFIED = 0,
                        DOUBLE = 1,
                        STRING = 2,
                        BOOL = 3,
                        TIMESTAMP = 4
                    }
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
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

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
            IMMUTABLE = 5
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
            history?: (google.api.ResourceDescriptor.History|null);
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
            public history: google.api.ResourceDescriptor.History;

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
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

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
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

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
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

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
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

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
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

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
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

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
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

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
            public idempotencyLevel: google.protobuf.MethodOptions.IdempotencyLevel;

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
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

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
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

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
            seconds?: (number|Long|null);

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
            public seconds: (number|Long);

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
                 * Callback as used by {@link google.iam.v1.IAMPolicy#setIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy#getIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy#testIamPermissions}.
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
            }

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy version */
                version?: (number|null);

                /** Policy bindings */
                bindings?: (google.iam.v1.IBinding[]|null);

                /** Policy etag */
                etag?: (Uint8Array|null);
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

                /** Policy etag. */
                public etag: Uint8Array;

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
            }

            /** Properties of a BindingDelta. */
            interface IBindingDelta {

                /** BindingDelta action */
                action?: (google.iam.v1.BindingDelta.Action|null);

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
                public action: google.iam.v1.BindingDelta.Action;

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
                action?: (google.iam.v1.AuditConfigDelta.Action|null);

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
                public action: google.iam.v1.AuditConfigDelta.Action;

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
        }
    }
}
