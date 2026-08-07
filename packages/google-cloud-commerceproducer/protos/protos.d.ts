// Copyright 2026 Google LLC
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

        /** Namespace commerceproducer. */
        namespace commerceproducer {

            /** Namespace v1beta. */
            namespace v1beta {

                /** Represents a CommerceTransaction */
                class CommerceTransaction extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CommerceTransaction service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CommerceTransaction service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CommerceTransaction;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListServicesResponse
                     */
                    public listServices(request: google.cloud.commerceproducer.v1beta.IListServicesRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.ListServicesCallback): void;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @returns Promise
                     */
                    public listServices(request: google.cloud.commerceproducer.v1beta.IListServicesRequest): Promise<google.cloud.commerceproducer.v1beta.ListServicesResponse>;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Service
                     */
                    public getService(request: google.cloud.commerceproducer.v1beta.IGetServiceRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.GetServiceCallback): void;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @returns Promise
                     */
                    public getService(request: google.cloud.commerceproducer.v1beta.IGetServiceRequest): Promise<google.cloud.commerceproducer.v1beta.Service>;

                    /**
                     * Calls ListPrivateOffers.
                     * @param request ListPrivateOffersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPrivateOffersResponse
                     */
                    public listPrivateOffers(request: google.cloud.commerceproducer.v1beta.IListPrivateOffersRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.ListPrivateOffersCallback): void;

                    /**
                     * Calls ListPrivateOffers.
                     * @param request ListPrivateOffersRequest message or plain object
                     * @returns Promise
                     */
                    public listPrivateOffers(request: google.cloud.commerceproducer.v1beta.IListPrivateOffersRequest): Promise<google.cloud.commerceproducer.v1beta.ListPrivateOffersResponse>;

                    /**
                     * Calls GetPrivateOffer.
                     * @param request GetPrivateOfferRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PrivateOffer
                     */
                    public getPrivateOffer(request: google.cloud.commerceproducer.v1beta.IGetPrivateOfferRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.GetPrivateOfferCallback): void;

                    /**
                     * Calls GetPrivateOffer.
                     * @param request GetPrivateOfferRequest message or plain object
                     * @returns Promise
                     */
                    public getPrivateOffer(request: google.cloud.commerceproducer.v1beta.IGetPrivateOfferRequest): Promise<google.cloud.commerceproducer.v1beta.PrivateOffer>;

                    /**
                     * Calls ResolveAmendmentTarget.
                     * @param request ResolveAmendmentTargetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ResolveAmendmentTargetResponse
                     */
                    public resolveAmendmentTarget(request: google.cloud.commerceproducer.v1beta.IResolveAmendmentTargetRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.ResolveAmendmentTargetCallback): void;

                    /**
                     * Calls ResolveAmendmentTarget.
                     * @param request ResolveAmendmentTargetRequest message or plain object
                     * @returns Promise
                     */
                    public resolveAmendmentTarget(request: google.cloud.commerceproducer.v1beta.IResolveAmendmentTargetRequest): Promise<google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse>;

                    /**
                     * Calls CreatePrivateOffer.
                     * @param request CreatePrivateOfferRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PrivateOffer
                     */
                    public createPrivateOffer(request: google.cloud.commerceproducer.v1beta.ICreatePrivateOfferRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.CreatePrivateOfferCallback): void;

                    /**
                     * Calls CreatePrivateOffer.
                     * @param request CreatePrivateOfferRequest message or plain object
                     * @returns Promise
                     */
                    public createPrivateOffer(request: google.cloud.commerceproducer.v1beta.ICreatePrivateOfferRequest): Promise<google.cloud.commerceproducer.v1beta.PrivateOffer>;

                    /**
                     * Calls UpdatePrivateOffer.
                     * @param request UpdatePrivateOfferRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PrivateOffer
                     */
                    public updatePrivateOffer(request: google.cloud.commerceproducer.v1beta.IUpdatePrivateOfferRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.UpdatePrivateOfferCallback): void;

                    /**
                     * Calls UpdatePrivateOffer.
                     * @param request UpdatePrivateOfferRequest message or plain object
                     * @returns Promise
                     */
                    public updatePrivateOffer(request: google.cloud.commerceproducer.v1beta.IUpdatePrivateOfferRequest): Promise<google.cloud.commerceproducer.v1beta.PrivateOffer>;

                    /**
                     * Calls PublishPrivateOffer.
                     * @param request PublishPrivateOfferRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PrivateOffer
                     */
                    public publishPrivateOffer(request: google.cloud.commerceproducer.v1beta.IPublishPrivateOfferRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.PublishPrivateOfferCallback): void;

                    /**
                     * Calls PublishPrivateOffer.
                     * @param request PublishPrivateOfferRequest message or plain object
                     * @returns Promise
                     */
                    public publishPrivateOffer(request: google.cloud.commerceproducer.v1beta.IPublishPrivateOfferRequest): Promise<google.cloud.commerceproducer.v1beta.PrivateOffer>;

                    /**
                     * Calls CancelPrivateOffer.
                     * @param request CancelPrivateOfferRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PrivateOffer
                     */
                    public cancelPrivateOffer(request: google.cloud.commerceproducer.v1beta.ICancelPrivateOfferRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.CancelPrivateOfferCallback): void;

                    /**
                     * Calls CancelPrivateOffer.
                     * @param request CancelPrivateOfferRequest message or plain object
                     * @returns Promise
                     */
                    public cancelPrivateOffer(request: google.cloud.commerceproducer.v1beta.ICancelPrivateOfferRequest): Promise<google.cloud.commerceproducer.v1beta.PrivateOffer>;

                    /**
                     * Calls DeletePrivateOffer.
                     * @param request DeletePrivateOfferRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deletePrivateOffer(request: google.cloud.commerceproducer.v1beta.IDeletePrivateOfferRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.DeletePrivateOfferCallback): void;

                    /**
                     * Calls DeletePrivateOffer.
                     * @param request DeletePrivateOfferRequest message or plain object
                     * @returns Promise
                     */
                    public deletePrivateOffer(request: google.cloud.commerceproducer.v1beta.IDeletePrivateOfferRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListPrivateOfferDocuments.
                     * @param request ListPrivateOfferDocumentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPrivateOfferDocumentsResponse
                     */
                    public listPrivateOfferDocuments(request: google.cloud.commerceproducer.v1beta.IListPrivateOfferDocumentsRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.ListPrivateOfferDocumentsCallback): void;

                    /**
                     * Calls ListPrivateOfferDocuments.
                     * @param request ListPrivateOfferDocumentsRequest message or plain object
                     * @returns Promise
                     */
                    public listPrivateOfferDocuments(request: google.cloud.commerceproducer.v1beta.IListPrivateOfferDocumentsRequest): Promise<google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsResponse>;

                    /**
                     * Calls GetPrivateOfferDocument.
                     * @param request GetPrivateOfferDocumentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PrivateOfferDocument
                     */
                    public getPrivateOfferDocument(request: google.cloud.commerceproducer.v1beta.IGetPrivateOfferDocumentRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.GetPrivateOfferDocumentCallback): void;

                    /**
                     * Calls GetPrivateOfferDocument.
                     * @param request GetPrivateOfferDocumentRequest message or plain object
                     * @returns Promise
                     */
                    public getPrivateOfferDocument(request: google.cloud.commerceproducer.v1beta.IGetPrivateOfferDocumentRequest): Promise<google.cloud.commerceproducer.v1beta.PrivateOfferDocument>;

                    /**
                     * Calls CreatePrivateOfferDocument.
                     * @param request CreatePrivateOfferDocumentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PrivateOfferDocument
                     */
                    public createPrivateOfferDocument(request: google.cloud.commerceproducer.v1beta.ICreatePrivateOfferDocumentRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.CreatePrivateOfferDocumentCallback): void;

                    /**
                     * Calls CreatePrivateOfferDocument.
                     * @param request CreatePrivateOfferDocumentRequest message or plain object
                     * @returns Promise
                     */
                    public createPrivateOfferDocument(request: google.cloud.commerceproducer.v1beta.ICreatePrivateOfferDocumentRequest): Promise<google.cloud.commerceproducer.v1beta.PrivateOfferDocument>;

                    /**
                     * Calls UpdatePrivateOfferDocument.
                     * @param request UpdatePrivateOfferDocumentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PrivateOfferDocument
                     */
                    public updatePrivateOfferDocument(request: google.cloud.commerceproducer.v1beta.IUpdatePrivateOfferDocumentRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.UpdatePrivateOfferDocumentCallback): void;

                    /**
                     * Calls UpdatePrivateOfferDocument.
                     * @param request UpdatePrivateOfferDocumentRequest message or plain object
                     * @returns Promise
                     */
                    public updatePrivateOfferDocument(request: google.cloud.commerceproducer.v1beta.IUpdatePrivateOfferDocumentRequest): Promise<google.cloud.commerceproducer.v1beta.PrivateOfferDocument>;

                    /**
                     * Calls DeletePrivateOfferDocument.
                     * @param request DeletePrivateOfferDocumentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deletePrivateOfferDocument(request: google.cloud.commerceproducer.v1beta.IDeletePrivateOfferDocumentRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.DeletePrivateOfferDocumentCallback): void;

                    /**
                     * Calls DeletePrivateOfferDocument.
                     * @param request DeletePrivateOfferDocumentRequest message or plain object
                     * @returns Promise
                     */
                    public deletePrivateOfferDocument(request: google.cloud.commerceproducer.v1beta.IDeletePrivateOfferDocumentRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListStandardOffers.
                     * @param request ListStandardOffersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListStandardOffersResponse
                     */
                    public listStandardOffers(request: google.cloud.commerceproducer.v1beta.IListStandardOffersRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.ListStandardOffersCallback): void;

                    /**
                     * Calls ListStandardOffers.
                     * @param request ListStandardOffersRequest message or plain object
                     * @returns Promise
                     */
                    public listStandardOffers(request: google.cloud.commerceproducer.v1beta.IListStandardOffersRequest): Promise<google.cloud.commerceproducer.v1beta.ListStandardOffersResponse>;

                    /**
                     * Calls GetStandardOffer.
                     * @param request GetStandardOfferRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and StandardOffer
                     */
                    public getStandardOffer(request: google.cloud.commerceproducer.v1beta.IGetStandardOfferRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.GetStandardOfferCallback): void;

                    /**
                     * Calls GetStandardOffer.
                     * @param request GetStandardOfferRequest message or plain object
                     * @returns Promise
                     */
                    public getStandardOffer(request: google.cloud.commerceproducer.v1beta.IGetStandardOfferRequest): Promise<google.cloud.commerceproducer.v1beta.StandardOffer>;

                    /**
                     * Calls GetSku.
                     * @param request GetSkuRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Sku
                     */
                    public getSku(request: google.cloud.commerceproducer.v1beta.IGetSkuRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.GetSkuCallback): void;

                    /**
                     * Calls GetSku.
                     * @param request GetSkuRequest message or plain object
                     * @returns Promise
                     */
                    public getSku(request: google.cloud.commerceproducer.v1beta.IGetSkuRequest): Promise<google.cloud.commerceproducer.v1beta.Sku>;

                    /**
                     * Calls ListSkus.
                     * @param request ListSkusRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSkusResponse
                     */
                    public listSkus(request: google.cloud.commerceproducer.v1beta.IListSkusRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.ListSkusCallback): void;

                    /**
                     * Calls ListSkus.
                     * @param request ListSkusRequest message or plain object
                     * @returns Promise
                     */
                    public listSkus(request: google.cloud.commerceproducer.v1beta.IListSkusRequest): Promise<google.cloud.commerceproducer.v1beta.ListSkusResponse>;

                    /**
                     * Calls GetSkuGroup.
                     * @param request GetSkuGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SkuGroup
                     */
                    public getSkuGroup(request: google.cloud.commerceproducer.v1beta.IGetSkuGroupRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.GetSkuGroupCallback): void;

                    /**
                     * Calls GetSkuGroup.
                     * @param request GetSkuGroupRequest message or plain object
                     * @returns Promise
                     */
                    public getSkuGroup(request: google.cloud.commerceproducer.v1beta.IGetSkuGroupRequest): Promise<google.cloud.commerceproducer.v1beta.SkuGroup>;

                    /**
                     * Calls ListSkuGroups.
                     * @param request ListSkuGroupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSkuGroupsResponse
                     */
                    public listSkuGroups(request: google.cloud.commerceproducer.v1beta.IListSkuGroupsRequest, callback: google.cloud.commerceproducer.v1beta.CommerceTransaction.ListSkuGroupsCallback): void;

                    /**
                     * Calls ListSkuGroups.
                     * @param request ListSkuGroupsRequest message or plain object
                     * @returns Promise
                     */
                    public listSkuGroups(request: google.cloud.commerceproducer.v1beta.IListSkuGroupsRequest): Promise<google.cloud.commerceproducer.v1beta.ListSkuGroupsResponse>;
                }

                namespace CommerceTransaction {

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|listServices}.
                     * @param error Error, if any
                     * @param [response] ListServicesResponse
                     */
                    type ListServicesCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.ListServicesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|getService}.
                     * @param error Error, if any
                     * @param [response] Service
                     */
                    type GetServiceCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.Service) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|listPrivateOffers}.
                     * @param error Error, if any
                     * @param [response] ListPrivateOffersResponse
                     */
                    type ListPrivateOffersCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.ListPrivateOffersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|getPrivateOffer}.
                     * @param error Error, if any
                     * @param [response] PrivateOffer
                     */
                    type GetPrivateOfferCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.PrivateOffer) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|resolveAmendmentTarget}.
                     * @param error Error, if any
                     * @param [response] ResolveAmendmentTargetResponse
                     */
                    type ResolveAmendmentTargetCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|createPrivateOffer}.
                     * @param error Error, if any
                     * @param [response] PrivateOffer
                     */
                    type CreatePrivateOfferCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.PrivateOffer) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|updatePrivateOffer}.
                     * @param error Error, if any
                     * @param [response] PrivateOffer
                     */
                    type UpdatePrivateOfferCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.PrivateOffer) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|publishPrivateOffer}.
                     * @param error Error, if any
                     * @param [response] PrivateOffer
                     */
                    type PublishPrivateOfferCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.PrivateOffer) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|cancelPrivateOffer}.
                     * @param error Error, if any
                     * @param [response] PrivateOffer
                     */
                    type CancelPrivateOfferCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.PrivateOffer) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|deletePrivateOffer}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeletePrivateOfferCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|listPrivateOfferDocuments}.
                     * @param error Error, if any
                     * @param [response] ListPrivateOfferDocumentsResponse
                     */
                    type ListPrivateOfferDocumentsCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|getPrivateOfferDocument}.
                     * @param error Error, if any
                     * @param [response] PrivateOfferDocument
                     */
                    type GetPrivateOfferDocumentCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.PrivateOfferDocument) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|createPrivateOfferDocument}.
                     * @param error Error, if any
                     * @param [response] PrivateOfferDocument
                     */
                    type CreatePrivateOfferDocumentCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.PrivateOfferDocument) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|updatePrivateOfferDocument}.
                     * @param error Error, if any
                     * @param [response] PrivateOfferDocument
                     */
                    type UpdatePrivateOfferDocumentCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.PrivateOfferDocument) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|deletePrivateOfferDocument}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeletePrivateOfferDocumentCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|listStandardOffers}.
                     * @param error Error, if any
                     * @param [response] ListStandardOffersResponse
                     */
                    type ListStandardOffersCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.ListStandardOffersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|getStandardOffer}.
                     * @param error Error, if any
                     * @param [response] StandardOffer
                     */
                    type GetStandardOfferCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.StandardOffer) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|getSku}.
                     * @param error Error, if any
                     * @param [response] Sku
                     */
                    type GetSkuCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.Sku) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|listSkus}.
                     * @param error Error, if any
                     * @param [response] ListSkusResponse
                     */
                    type ListSkusCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.ListSkusResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|getSkuGroup}.
                     * @param error Error, if any
                     * @param [response] SkuGroup
                     */
                    type GetSkuGroupCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.SkuGroup) => void;

                    /**
                     * Callback as used by {@link google.cloud.commerceproducer.v1beta.CommerceTransaction|listSkuGroups}.
                     * @param error Error, if any
                     * @param [response] ListSkuGroupsResponse
                     */
                    type ListSkuGroupsCallback = (error: (Error|null), response?: google.cloud.commerceproducer.v1beta.ListSkuGroupsResponse) => void;
                }

                /** PrivateOfferView enum. */
                enum PrivateOfferView {
                    PRIVATE_OFFER_VIEW_UNSPECIFIED = 0,
                    PRIVATE_OFFER_VIEW_BASIC = 1,
                    PRIVATE_OFFER_VIEW_FULL = 2
                }

                /** StandardOfferView enum. */
                enum StandardOfferView {
                    STANDARD_OFFER_VIEW_UNSPECIFIED = 0,
                    STANDARD_OFFER_VIEW_BASIC = 1,
                    STANDARD_OFFER_VIEW_FULL = 2
                }

                /** ServiceView enum. */
                enum ServiceView {
                    SERVICE_VIEW_UNSPECIFIED = 0,
                    SERVICE_VIEW_BASIC = 1,
                    SERVICE_VIEW_FULL = 2
                }

                /** Properties of a ListPrivateOffersRequest. */
                interface IListPrivateOffersRequest {

                    /** ListPrivateOffersRequest parent */
                    parent?: (string|null);

                    /** ListPrivateOffersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPrivateOffersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPrivateOffersRequest filter */
                    filter?: (string|null);

                    /** ListPrivateOffersRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListPrivateOffersRequest. */
                class ListPrivateOffersRequest implements IListPrivateOffersRequest {

                    /**
                     * Constructs a new ListPrivateOffersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IListPrivateOffersRequest);

                    /** ListPrivateOffersRequest parent. */
                    public parent: string;

                    /** ListPrivateOffersRequest pageSize. */
                    public pageSize: number;

                    /** ListPrivateOffersRequest pageToken. */
                    public pageToken: string;

                    /** ListPrivateOffersRequest filter. */
                    public filter: string;

                    /** ListPrivateOffersRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListPrivateOffersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPrivateOffersRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IListPrivateOffersRequest): google.cloud.commerceproducer.v1beta.ListPrivateOffersRequest;

                    /**
                     * Encodes the specified ListPrivateOffersRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListPrivateOffersRequest.verify|verify} messages.
                     * @param message ListPrivateOffersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IListPrivateOffersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPrivateOffersRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListPrivateOffersRequest.verify|verify} messages.
                     * @param message ListPrivateOffersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IListPrivateOffersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPrivateOffersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPrivateOffersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ListPrivateOffersRequest;

                    /**
                     * Decodes a ListPrivateOffersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPrivateOffersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ListPrivateOffersRequest;

                    /**
                     * Verifies a ListPrivateOffersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPrivateOffersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPrivateOffersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ListPrivateOffersRequest;

                    /**
                     * Creates a plain object from a ListPrivateOffersRequest message. Also converts values to other types if specified.
                     * @param message ListPrivateOffersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ListPrivateOffersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPrivateOffersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPrivateOffersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPrivateOffersResponse. */
                interface IListPrivateOffersResponse {

                    /** ListPrivateOffersResponse privateOffers */
                    privateOffers?: (google.cloud.commerceproducer.v1beta.IPrivateOffer[]|null);

                    /** ListPrivateOffersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPrivateOffersResponse. */
                class ListPrivateOffersResponse implements IListPrivateOffersResponse {

                    /**
                     * Constructs a new ListPrivateOffersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IListPrivateOffersResponse);

                    /** ListPrivateOffersResponse privateOffers. */
                    public privateOffers: google.cloud.commerceproducer.v1beta.IPrivateOffer[];

                    /** ListPrivateOffersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPrivateOffersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPrivateOffersResponse instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IListPrivateOffersResponse): google.cloud.commerceproducer.v1beta.ListPrivateOffersResponse;

                    /**
                     * Encodes the specified ListPrivateOffersResponse message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListPrivateOffersResponse.verify|verify} messages.
                     * @param message ListPrivateOffersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IListPrivateOffersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPrivateOffersResponse message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListPrivateOffersResponse.verify|verify} messages.
                     * @param message ListPrivateOffersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IListPrivateOffersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPrivateOffersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPrivateOffersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ListPrivateOffersResponse;

                    /**
                     * Decodes a ListPrivateOffersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPrivateOffersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ListPrivateOffersResponse;

                    /**
                     * Verifies a ListPrivateOffersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPrivateOffersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPrivateOffersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ListPrivateOffersResponse;

                    /**
                     * Creates a plain object from a ListPrivateOffersResponse message. Also converts values to other types if specified.
                     * @param message ListPrivateOffersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ListPrivateOffersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPrivateOffersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPrivateOffersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPrivateOfferRequest. */
                interface IGetPrivateOfferRequest {

                    /** GetPrivateOfferRequest name */
                    name?: (string|null);

                    /** GetPrivateOfferRequest view */
                    view?: (google.cloud.commerceproducer.v1beta.PrivateOfferView|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOfferView|null);
                }

                /** Represents a GetPrivateOfferRequest. */
                class GetPrivateOfferRequest implements IGetPrivateOfferRequest {

                    /**
                     * Constructs a new GetPrivateOfferRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IGetPrivateOfferRequest);

                    /** GetPrivateOfferRequest name. */
                    public name: string;

                    /** GetPrivateOfferRequest view. */
                    public view: (google.cloud.commerceproducer.v1beta.PrivateOfferView|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOfferView);

                    /**
                     * Creates a new GetPrivateOfferRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPrivateOfferRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IGetPrivateOfferRequest): google.cloud.commerceproducer.v1beta.GetPrivateOfferRequest;

                    /**
                     * Encodes the specified GetPrivateOfferRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.GetPrivateOfferRequest.verify|verify} messages.
                     * @param message GetPrivateOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IGetPrivateOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPrivateOfferRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.GetPrivateOfferRequest.verify|verify} messages.
                     * @param message GetPrivateOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IGetPrivateOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPrivateOfferRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPrivateOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.GetPrivateOfferRequest;

                    /**
                     * Decodes a GetPrivateOfferRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPrivateOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.GetPrivateOfferRequest;

                    /**
                     * Verifies a GetPrivateOfferRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPrivateOfferRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPrivateOfferRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.GetPrivateOfferRequest;

                    /**
                     * Creates a plain object from a GetPrivateOfferRequest message. Also converts values to other types if specified.
                     * @param message GetPrivateOfferRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.GetPrivateOfferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPrivateOfferRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPrivateOfferRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResolveAmendmentTargetRequest. */
                interface IResolveAmendmentTargetRequest {

                    /** ResolveAmendmentTargetRequest parent */
                    parent?: (string|null);

                    /** ResolveAmendmentTargetRequest targetBillingAccount */
                    targetBillingAccount?: (string|null);

                    /** ResolveAmendmentTargetRequest baseStandardOffer */
                    baseStandardOffer?: (string|null);
                }

                /** Represents a ResolveAmendmentTargetRequest. */
                class ResolveAmendmentTargetRequest implements IResolveAmendmentTargetRequest {

                    /**
                     * Constructs a new ResolveAmendmentTargetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IResolveAmendmentTargetRequest);

                    /** ResolveAmendmentTargetRequest parent. */
                    public parent: string;

                    /** ResolveAmendmentTargetRequest targetBillingAccount. */
                    public targetBillingAccount: string;

                    /** ResolveAmendmentTargetRequest baseStandardOffer. */
                    public baseStandardOffer: string;

                    /**
                     * Creates a new ResolveAmendmentTargetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResolveAmendmentTargetRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IResolveAmendmentTargetRequest): google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetRequest;

                    /**
                     * Encodes the specified ResolveAmendmentTargetRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetRequest.verify|verify} messages.
                     * @param message ResolveAmendmentTargetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IResolveAmendmentTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResolveAmendmentTargetRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetRequest.verify|verify} messages.
                     * @param message ResolveAmendmentTargetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IResolveAmendmentTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResolveAmendmentTargetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResolveAmendmentTargetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetRequest;

                    /**
                     * Decodes a ResolveAmendmentTargetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResolveAmendmentTargetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetRequest;

                    /**
                     * Verifies a ResolveAmendmentTargetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResolveAmendmentTargetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResolveAmendmentTargetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetRequest;

                    /**
                     * Creates a plain object from a ResolveAmendmentTargetRequest message. Also converts values to other types if specified.
                     * @param message ResolveAmendmentTargetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResolveAmendmentTargetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResolveAmendmentTargetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResolveAmendmentTargetResponse. */
                interface IResolveAmendmentTargetResponse {

                    /** ResolveAmendmentTargetResponse requiredPrivateOffer */
                    requiredPrivateOffer?: (string|null);

                    /** ResolveAmendmentTargetResponse requiredStandardOffer */
                    requiredStandardOffer?: (string|null);

                    /** ResolveAmendmentTargetResponse optionalOffers */
                    optionalOffers?: (google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.IOptionalOffers|null);
                }

                /** Represents a ResolveAmendmentTargetResponse. */
                class ResolveAmendmentTargetResponse implements IResolveAmendmentTargetResponse {

                    /**
                     * Constructs a new ResolveAmendmentTargetResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IResolveAmendmentTargetResponse);

                    /** ResolveAmendmentTargetResponse requiredPrivateOffer. */
                    public requiredPrivateOffer?: (string|null);

                    /** ResolveAmendmentTargetResponse requiredStandardOffer. */
                    public requiredStandardOffer?: (string|null);

                    /** ResolveAmendmentTargetResponse optionalOffers. */
                    public optionalOffers?: (google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.IOptionalOffers|null);

                    /** ResolveAmendmentTargetResponse amendmentRequirement. */
                    public amendmentRequirement?: ("requiredPrivateOffer"|"requiredStandardOffer"|"optionalOffers");

                    /**
                     * Creates a new ResolveAmendmentTargetResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResolveAmendmentTargetResponse instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IResolveAmendmentTargetResponse): google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse;

                    /**
                     * Encodes the specified ResolveAmendmentTargetResponse message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.verify|verify} messages.
                     * @param message ResolveAmendmentTargetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IResolveAmendmentTargetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResolveAmendmentTargetResponse message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.verify|verify} messages.
                     * @param message ResolveAmendmentTargetResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IResolveAmendmentTargetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResolveAmendmentTargetResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResolveAmendmentTargetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse;

                    /**
                     * Decodes a ResolveAmendmentTargetResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResolveAmendmentTargetResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse;

                    /**
                     * Verifies a ResolveAmendmentTargetResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResolveAmendmentTargetResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResolveAmendmentTargetResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse;

                    /**
                     * Creates a plain object from a ResolveAmendmentTargetResponse message. Also converts values to other types if specified.
                     * @param message ResolveAmendmentTargetResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResolveAmendmentTargetResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResolveAmendmentTargetResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ResolveAmendmentTargetResponse {

                    /** Properties of an OptionalOffers. */
                    interface IOptionalOffers {

                        /** OptionalOffers privateOffers */
                        privateOffers?: (string[]|null);
                    }

                    /** Represents an OptionalOffers. */
                    class OptionalOffers implements IOptionalOffers {

                        /**
                         * Constructs a new OptionalOffers.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.IOptionalOffers);

                        /** OptionalOffers privateOffers. */
                        public privateOffers: string[];

                        /**
                         * Creates a new OptionalOffers instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OptionalOffers instance
                         */
                        public static create(properties?: google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.IOptionalOffers): google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.OptionalOffers;

                        /**
                         * Encodes the specified OptionalOffers message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.OptionalOffers.verify|verify} messages.
                         * @param message OptionalOffers message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.IOptionalOffers, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OptionalOffers message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.OptionalOffers.verify|verify} messages.
                         * @param message OptionalOffers message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.IOptionalOffers, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OptionalOffers message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OptionalOffers
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.OptionalOffers;

                        /**
                         * Decodes an OptionalOffers message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OptionalOffers
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.OptionalOffers;

                        /**
                         * Verifies an OptionalOffers message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OptionalOffers message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OptionalOffers
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.OptionalOffers;

                        /**
                         * Creates a plain object from an OptionalOffers message. Also converts values to other types if specified.
                         * @param message OptionalOffers
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.commerceproducer.v1beta.ResolveAmendmentTargetResponse.OptionalOffers, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OptionalOffers to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OptionalOffers
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a CreatePrivateOfferRequest. */
                interface ICreatePrivateOfferRequest {

                    /** CreatePrivateOfferRequest parent */
                    parent?: (string|null);

                    /** CreatePrivateOfferRequest privateOffer */
                    privateOffer?: (google.cloud.commerceproducer.v1beta.IPrivateOffer|null);
                }

                /** Represents a CreatePrivateOfferRequest. */
                class CreatePrivateOfferRequest implements ICreatePrivateOfferRequest {

                    /**
                     * Constructs a new CreatePrivateOfferRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.ICreatePrivateOfferRequest);

                    /** CreatePrivateOfferRequest parent. */
                    public parent: string;

                    /** CreatePrivateOfferRequest privateOffer. */
                    public privateOffer?: (google.cloud.commerceproducer.v1beta.IPrivateOffer|null);

                    /**
                     * Creates a new CreatePrivateOfferRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePrivateOfferRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.ICreatePrivateOfferRequest): google.cloud.commerceproducer.v1beta.CreatePrivateOfferRequest;

                    /**
                     * Encodes the specified CreatePrivateOfferRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.CreatePrivateOfferRequest.verify|verify} messages.
                     * @param message CreatePrivateOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.ICreatePrivateOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePrivateOfferRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.CreatePrivateOfferRequest.verify|verify} messages.
                     * @param message CreatePrivateOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.ICreatePrivateOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePrivateOfferRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePrivateOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.CreatePrivateOfferRequest;

                    /**
                     * Decodes a CreatePrivateOfferRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePrivateOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.CreatePrivateOfferRequest;

                    /**
                     * Verifies a CreatePrivateOfferRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePrivateOfferRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePrivateOfferRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.CreatePrivateOfferRequest;

                    /**
                     * Creates a plain object from a CreatePrivateOfferRequest message. Also converts values to other types if specified.
                     * @param message CreatePrivateOfferRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.CreatePrivateOfferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePrivateOfferRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePrivateOfferRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePrivateOfferRequest. */
                interface IUpdatePrivateOfferRequest {

                    /** UpdatePrivateOfferRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePrivateOfferRequest privateOffer */
                    privateOffer?: (google.cloud.commerceproducer.v1beta.IPrivateOffer|null);
                }

                /** Represents an UpdatePrivateOfferRequest. */
                class UpdatePrivateOfferRequest implements IUpdatePrivateOfferRequest {

                    /**
                     * Constructs a new UpdatePrivateOfferRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IUpdatePrivateOfferRequest);

                    /** UpdatePrivateOfferRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePrivateOfferRequest privateOffer. */
                    public privateOffer?: (google.cloud.commerceproducer.v1beta.IPrivateOffer|null);

                    /**
                     * Creates a new UpdatePrivateOfferRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePrivateOfferRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IUpdatePrivateOfferRequest): google.cloud.commerceproducer.v1beta.UpdatePrivateOfferRequest;

                    /**
                     * Encodes the specified UpdatePrivateOfferRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.UpdatePrivateOfferRequest.verify|verify} messages.
                     * @param message UpdatePrivateOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IUpdatePrivateOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePrivateOfferRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.UpdatePrivateOfferRequest.verify|verify} messages.
                     * @param message UpdatePrivateOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IUpdatePrivateOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePrivateOfferRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePrivateOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.UpdatePrivateOfferRequest;

                    /**
                     * Decodes an UpdatePrivateOfferRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePrivateOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.UpdatePrivateOfferRequest;

                    /**
                     * Verifies an UpdatePrivateOfferRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePrivateOfferRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePrivateOfferRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.UpdatePrivateOfferRequest;

                    /**
                     * Creates a plain object from an UpdatePrivateOfferRequest message. Also converts values to other types if specified.
                     * @param message UpdatePrivateOfferRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.UpdatePrivateOfferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePrivateOfferRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePrivateOfferRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PublishPrivateOfferRequest. */
                interface IPublishPrivateOfferRequest {

                    /** PublishPrivateOfferRequest name */
                    name?: (string|null);

                    /** PublishPrivateOfferRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a PublishPrivateOfferRequest. */
                class PublishPrivateOfferRequest implements IPublishPrivateOfferRequest {

                    /**
                     * Constructs a new PublishPrivateOfferRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IPublishPrivateOfferRequest);

                    /** PublishPrivateOfferRequest name. */
                    public name: string;

                    /** PublishPrivateOfferRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new PublishPrivateOfferRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PublishPrivateOfferRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IPublishPrivateOfferRequest): google.cloud.commerceproducer.v1beta.PublishPrivateOfferRequest;

                    /**
                     * Encodes the specified PublishPrivateOfferRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PublishPrivateOfferRequest.verify|verify} messages.
                     * @param message PublishPrivateOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IPublishPrivateOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PublishPrivateOfferRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PublishPrivateOfferRequest.verify|verify} messages.
                     * @param message PublishPrivateOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IPublishPrivateOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PublishPrivateOfferRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PublishPrivateOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PublishPrivateOfferRequest;

                    /**
                     * Decodes a PublishPrivateOfferRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PublishPrivateOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PublishPrivateOfferRequest;

                    /**
                     * Verifies a PublishPrivateOfferRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PublishPrivateOfferRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PublishPrivateOfferRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PublishPrivateOfferRequest;

                    /**
                     * Creates a plain object from a PublishPrivateOfferRequest message. Also converts values to other types if specified.
                     * @param message PublishPrivateOfferRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.PublishPrivateOfferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PublishPrivateOfferRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PublishPrivateOfferRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CancelPrivateOfferRequest. */
                interface ICancelPrivateOfferRequest {

                    /** CancelPrivateOfferRequest name */
                    name?: (string|null);

                    /** CancelPrivateOfferRequest cancellationNote */
                    cancellationNote?: (string|null);
                }

                /** Represents a CancelPrivateOfferRequest. */
                class CancelPrivateOfferRequest implements ICancelPrivateOfferRequest {

                    /**
                     * Constructs a new CancelPrivateOfferRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.ICancelPrivateOfferRequest);

                    /** CancelPrivateOfferRequest name. */
                    public name: string;

                    /** CancelPrivateOfferRequest cancellationNote. */
                    public cancellationNote: string;

                    /**
                     * Creates a new CancelPrivateOfferRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelPrivateOfferRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.ICancelPrivateOfferRequest): google.cloud.commerceproducer.v1beta.CancelPrivateOfferRequest;

                    /**
                     * Encodes the specified CancelPrivateOfferRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.CancelPrivateOfferRequest.verify|verify} messages.
                     * @param message CancelPrivateOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.ICancelPrivateOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelPrivateOfferRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.CancelPrivateOfferRequest.verify|verify} messages.
                     * @param message CancelPrivateOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.ICancelPrivateOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelPrivateOfferRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelPrivateOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.CancelPrivateOfferRequest;

                    /**
                     * Decodes a CancelPrivateOfferRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelPrivateOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.CancelPrivateOfferRequest;

                    /**
                     * Verifies a CancelPrivateOfferRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelPrivateOfferRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelPrivateOfferRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.CancelPrivateOfferRequest;

                    /**
                     * Creates a plain object from a CancelPrivateOfferRequest message. Also converts values to other types if specified.
                     * @param message CancelPrivateOfferRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.CancelPrivateOfferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelPrivateOfferRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CancelPrivateOfferRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePrivateOfferRequest. */
                interface IDeletePrivateOfferRequest {

                    /** DeletePrivateOfferRequest name */
                    name?: (string|null);

                    /** DeletePrivateOfferRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeletePrivateOfferRequest. */
                class DeletePrivateOfferRequest implements IDeletePrivateOfferRequest {

                    /**
                     * Constructs a new DeletePrivateOfferRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IDeletePrivateOfferRequest);

                    /** DeletePrivateOfferRequest name. */
                    public name: string;

                    /** DeletePrivateOfferRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeletePrivateOfferRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePrivateOfferRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IDeletePrivateOfferRequest): google.cloud.commerceproducer.v1beta.DeletePrivateOfferRequest;

                    /**
                     * Encodes the specified DeletePrivateOfferRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.DeletePrivateOfferRequest.verify|verify} messages.
                     * @param message DeletePrivateOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IDeletePrivateOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePrivateOfferRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.DeletePrivateOfferRequest.verify|verify} messages.
                     * @param message DeletePrivateOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IDeletePrivateOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePrivateOfferRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePrivateOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.DeletePrivateOfferRequest;

                    /**
                     * Decodes a DeletePrivateOfferRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePrivateOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.DeletePrivateOfferRequest;

                    /**
                     * Verifies a DeletePrivateOfferRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePrivateOfferRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePrivateOfferRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.DeletePrivateOfferRequest;

                    /**
                     * Creates a plain object from a DeletePrivateOfferRequest message. Also converts values to other types if specified.
                     * @param message DeletePrivateOfferRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.DeletePrivateOfferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePrivateOfferRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePrivateOfferRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPrivateOfferDocumentsRequest. */
                interface IListPrivateOfferDocumentsRequest {

                    /** ListPrivateOfferDocumentsRequest parent */
                    parent?: (string|null);

                    /** ListPrivateOfferDocumentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPrivateOfferDocumentsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListPrivateOfferDocumentsRequest. */
                class ListPrivateOfferDocumentsRequest implements IListPrivateOfferDocumentsRequest {

                    /**
                     * Constructs a new ListPrivateOfferDocumentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IListPrivateOfferDocumentsRequest);

                    /** ListPrivateOfferDocumentsRequest parent. */
                    public parent: string;

                    /** ListPrivateOfferDocumentsRequest pageSize. */
                    public pageSize: number;

                    /** ListPrivateOfferDocumentsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListPrivateOfferDocumentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPrivateOfferDocumentsRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IListPrivateOfferDocumentsRequest): google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsRequest;

                    /**
                     * Encodes the specified ListPrivateOfferDocumentsRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsRequest.verify|verify} messages.
                     * @param message ListPrivateOfferDocumentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IListPrivateOfferDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPrivateOfferDocumentsRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsRequest.verify|verify} messages.
                     * @param message ListPrivateOfferDocumentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IListPrivateOfferDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPrivateOfferDocumentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPrivateOfferDocumentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsRequest;

                    /**
                     * Decodes a ListPrivateOfferDocumentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPrivateOfferDocumentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsRequest;

                    /**
                     * Verifies a ListPrivateOfferDocumentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPrivateOfferDocumentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPrivateOfferDocumentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsRequest;

                    /**
                     * Creates a plain object from a ListPrivateOfferDocumentsRequest message. Also converts values to other types if specified.
                     * @param message ListPrivateOfferDocumentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPrivateOfferDocumentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPrivateOfferDocumentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPrivateOfferDocumentsResponse. */
                interface IListPrivateOfferDocumentsResponse {

                    /** ListPrivateOfferDocumentsResponse privateOfferDocuments */
                    privateOfferDocuments?: (google.cloud.commerceproducer.v1beta.IPrivateOfferDocument[]|null);

                    /** ListPrivateOfferDocumentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPrivateOfferDocumentsResponse. */
                class ListPrivateOfferDocumentsResponse implements IListPrivateOfferDocumentsResponse {

                    /**
                     * Constructs a new ListPrivateOfferDocumentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IListPrivateOfferDocumentsResponse);

                    /** ListPrivateOfferDocumentsResponse privateOfferDocuments. */
                    public privateOfferDocuments: google.cloud.commerceproducer.v1beta.IPrivateOfferDocument[];

                    /** ListPrivateOfferDocumentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPrivateOfferDocumentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPrivateOfferDocumentsResponse instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IListPrivateOfferDocumentsResponse): google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsResponse;

                    /**
                     * Encodes the specified ListPrivateOfferDocumentsResponse message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsResponse.verify|verify} messages.
                     * @param message ListPrivateOfferDocumentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IListPrivateOfferDocumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPrivateOfferDocumentsResponse message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsResponse.verify|verify} messages.
                     * @param message ListPrivateOfferDocumentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IListPrivateOfferDocumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPrivateOfferDocumentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPrivateOfferDocumentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsResponse;

                    /**
                     * Decodes a ListPrivateOfferDocumentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPrivateOfferDocumentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsResponse;

                    /**
                     * Verifies a ListPrivateOfferDocumentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPrivateOfferDocumentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPrivateOfferDocumentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsResponse;

                    /**
                     * Creates a plain object from a ListPrivateOfferDocumentsResponse message. Also converts values to other types if specified.
                     * @param message ListPrivateOfferDocumentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ListPrivateOfferDocumentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPrivateOfferDocumentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPrivateOfferDocumentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPrivateOfferDocumentRequest. */
                interface IGetPrivateOfferDocumentRequest {

                    /** GetPrivateOfferDocumentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPrivateOfferDocumentRequest. */
                class GetPrivateOfferDocumentRequest implements IGetPrivateOfferDocumentRequest {

                    /**
                     * Constructs a new GetPrivateOfferDocumentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IGetPrivateOfferDocumentRequest);

                    /** GetPrivateOfferDocumentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPrivateOfferDocumentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPrivateOfferDocumentRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IGetPrivateOfferDocumentRequest): google.cloud.commerceproducer.v1beta.GetPrivateOfferDocumentRequest;

                    /**
                     * Encodes the specified GetPrivateOfferDocumentRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.GetPrivateOfferDocumentRequest.verify|verify} messages.
                     * @param message GetPrivateOfferDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IGetPrivateOfferDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPrivateOfferDocumentRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.GetPrivateOfferDocumentRequest.verify|verify} messages.
                     * @param message GetPrivateOfferDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IGetPrivateOfferDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPrivateOfferDocumentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPrivateOfferDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.GetPrivateOfferDocumentRequest;

                    /**
                     * Decodes a GetPrivateOfferDocumentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPrivateOfferDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.GetPrivateOfferDocumentRequest;

                    /**
                     * Verifies a GetPrivateOfferDocumentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPrivateOfferDocumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPrivateOfferDocumentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.GetPrivateOfferDocumentRequest;

                    /**
                     * Creates a plain object from a GetPrivateOfferDocumentRequest message. Also converts values to other types if specified.
                     * @param message GetPrivateOfferDocumentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.GetPrivateOfferDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPrivateOfferDocumentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPrivateOfferDocumentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePrivateOfferDocumentRequest. */
                interface ICreatePrivateOfferDocumentRequest {

                    /** CreatePrivateOfferDocumentRequest parent */
                    parent?: (string|null);

                    /** CreatePrivateOfferDocumentRequest privateOfferDocument */
                    privateOfferDocument?: (google.cloud.commerceproducer.v1beta.IPrivateOfferDocument|null);
                }

                /** Represents a CreatePrivateOfferDocumentRequest. */
                class CreatePrivateOfferDocumentRequest implements ICreatePrivateOfferDocumentRequest {

                    /**
                     * Constructs a new CreatePrivateOfferDocumentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.ICreatePrivateOfferDocumentRequest);

                    /** CreatePrivateOfferDocumentRequest parent. */
                    public parent: string;

                    /** CreatePrivateOfferDocumentRequest privateOfferDocument. */
                    public privateOfferDocument?: (google.cloud.commerceproducer.v1beta.IPrivateOfferDocument|null);

                    /**
                     * Creates a new CreatePrivateOfferDocumentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePrivateOfferDocumentRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.ICreatePrivateOfferDocumentRequest): google.cloud.commerceproducer.v1beta.CreatePrivateOfferDocumentRequest;

                    /**
                     * Encodes the specified CreatePrivateOfferDocumentRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.CreatePrivateOfferDocumentRequest.verify|verify} messages.
                     * @param message CreatePrivateOfferDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.ICreatePrivateOfferDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePrivateOfferDocumentRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.CreatePrivateOfferDocumentRequest.verify|verify} messages.
                     * @param message CreatePrivateOfferDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.ICreatePrivateOfferDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePrivateOfferDocumentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePrivateOfferDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.CreatePrivateOfferDocumentRequest;

                    /**
                     * Decodes a CreatePrivateOfferDocumentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePrivateOfferDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.CreatePrivateOfferDocumentRequest;

                    /**
                     * Verifies a CreatePrivateOfferDocumentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePrivateOfferDocumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePrivateOfferDocumentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.CreatePrivateOfferDocumentRequest;

                    /**
                     * Creates a plain object from a CreatePrivateOfferDocumentRequest message. Also converts values to other types if specified.
                     * @param message CreatePrivateOfferDocumentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.CreatePrivateOfferDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePrivateOfferDocumentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePrivateOfferDocumentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePrivateOfferDocumentRequest. */
                interface IUpdatePrivateOfferDocumentRequest {

                    /** UpdatePrivateOfferDocumentRequest privateOfferDocument */
                    privateOfferDocument?: (google.cloud.commerceproducer.v1beta.IPrivateOfferDocument|null);

                    /** UpdatePrivateOfferDocumentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdatePrivateOfferDocumentRequest. */
                class UpdatePrivateOfferDocumentRequest implements IUpdatePrivateOfferDocumentRequest {

                    /**
                     * Constructs a new UpdatePrivateOfferDocumentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IUpdatePrivateOfferDocumentRequest);

                    /** UpdatePrivateOfferDocumentRequest privateOfferDocument. */
                    public privateOfferDocument?: (google.cloud.commerceproducer.v1beta.IPrivateOfferDocument|null);

                    /** UpdatePrivateOfferDocumentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdatePrivateOfferDocumentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePrivateOfferDocumentRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IUpdatePrivateOfferDocumentRequest): google.cloud.commerceproducer.v1beta.UpdatePrivateOfferDocumentRequest;

                    /**
                     * Encodes the specified UpdatePrivateOfferDocumentRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.UpdatePrivateOfferDocumentRequest.verify|verify} messages.
                     * @param message UpdatePrivateOfferDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IUpdatePrivateOfferDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePrivateOfferDocumentRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.UpdatePrivateOfferDocumentRequest.verify|verify} messages.
                     * @param message UpdatePrivateOfferDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IUpdatePrivateOfferDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePrivateOfferDocumentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePrivateOfferDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.UpdatePrivateOfferDocumentRequest;

                    /**
                     * Decodes an UpdatePrivateOfferDocumentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePrivateOfferDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.UpdatePrivateOfferDocumentRequest;

                    /**
                     * Verifies an UpdatePrivateOfferDocumentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePrivateOfferDocumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePrivateOfferDocumentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.UpdatePrivateOfferDocumentRequest;

                    /**
                     * Creates a plain object from an UpdatePrivateOfferDocumentRequest message. Also converts values to other types if specified.
                     * @param message UpdatePrivateOfferDocumentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.UpdatePrivateOfferDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePrivateOfferDocumentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePrivateOfferDocumentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePrivateOfferDocumentRequest. */
                interface IDeletePrivateOfferDocumentRequest {

                    /** DeletePrivateOfferDocumentRequest name */
                    name?: (string|null);
                }

                /** Represents a DeletePrivateOfferDocumentRequest. */
                class DeletePrivateOfferDocumentRequest implements IDeletePrivateOfferDocumentRequest {

                    /**
                     * Constructs a new DeletePrivateOfferDocumentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IDeletePrivateOfferDocumentRequest);

                    /** DeletePrivateOfferDocumentRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeletePrivateOfferDocumentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePrivateOfferDocumentRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IDeletePrivateOfferDocumentRequest): google.cloud.commerceproducer.v1beta.DeletePrivateOfferDocumentRequest;

                    /**
                     * Encodes the specified DeletePrivateOfferDocumentRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.DeletePrivateOfferDocumentRequest.verify|verify} messages.
                     * @param message DeletePrivateOfferDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IDeletePrivateOfferDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePrivateOfferDocumentRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.DeletePrivateOfferDocumentRequest.verify|verify} messages.
                     * @param message DeletePrivateOfferDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IDeletePrivateOfferDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePrivateOfferDocumentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePrivateOfferDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.DeletePrivateOfferDocumentRequest;

                    /**
                     * Decodes a DeletePrivateOfferDocumentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePrivateOfferDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.DeletePrivateOfferDocumentRequest;

                    /**
                     * Verifies a DeletePrivateOfferDocumentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePrivateOfferDocumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePrivateOfferDocumentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.DeletePrivateOfferDocumentRequest;

                    /**
                     * Creates a plain object from a DeletePrivateOfferDocumentRequest message. Also converts values to other types if specified.
                     * @param message DeletePrivateOfferDocumentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.DeletePrivateOfferDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePrivateOfferDocumentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePrivateOfferDocumentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListServicesRequest. */
                interface IListServicesRequest {

                    /** ListServicesRequest parent */
                    parent?: (string|null);

                    /** ListServicesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListServicesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListServicesRequest. */
                class ListServicesRequest implements IListServicesRequest {

                    /**
                     * Constructs a new ListServicesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IListServicesRequest);

                    /** ListServicesRequest parent. */
                    public parent: string;

                    /** ListServicesRequest pageSize. */
                    public pageSize: number;

                    /** ListServicesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListServicesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IListServicesRequest): google.cloud.commerceproducer.v1beta.ListServicesRequest;

                    /**
                     * Encodes the specified ListServicesRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ListServicesRequest;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ListServicesRequest;

                    /**
                     * Verifies a ListServicesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServicesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServicesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ListServicesRequest;

                    /**
                     * Creates a plain object from a ListServicesRequest message. Also converts values to other types if specified.
                     * @param message ListServicesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ListServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListServicesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListServicesResponse. */
                interface IListServicesResponse {

                    /** ListServicesResponse services */
                    services?: (google.cloud.commerceproducer.v1beta.IService[]|null);

                    /** ListServicesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListServicesResponse. */
                class ListServicesResponse implements IListServicesResponse {

                    /**
                     * Constructs a new ListServicesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IListServicesResponse);

                    /** ListServicesResponse services. */
                    public services: google.cloud.commerceproducer.v1beta.IService[];

                    /** ListServicesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListServicesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesResponse instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IListServicesResponse): google.cloud.commerceproducer.v1beta.ListServicesResponse;

                    /**
                     * Encodes the specified ListServicesResponse message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesResponse message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ListServicesResponse;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ListServicesResponse;

                    /**
                     * Verifies a ListServicesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServicesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServicesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ListServicesResponse;

                    /**
                     * Creates a plain object from a ListServicesResponse message. Also converts values to other types if specified.
                     * @param message ListServicesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ListServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListServicesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetServiceRequest. */
                interface IGetServiceRequest {

                    /** GetServiceRequest name */
                    name?: (string|null);

                    /** GetServiceRequest view */
                    view?: (google.cloud.commerceproducer.v1beta.ServiceView|keyof typeof google.cloud.commerceproducer.v1beta.ServiceView|null);
                }

                /** Represents a GetServiceRequest. */
                class GetServiceRequest implements IGetServiceRequest {

                    /**
                     * Constructs a new GetServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IGetServiceRequest);

                    /** GetServiceRequest name. */
                    public name: string;

                    /** GetServiceRequest view. */
                    public view: (google.cloud.commerceproducer.v1beta.ServiceView|keyof typeof google.cloud.commerceproducer.v1beta.ServiceView);

                    /**
                     * Creates a new GetServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServiceRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IGetServiceRequest): google.cloud.commerceproducer.v1beta.GetServiceRequest;

                    /**
                     * Encodes the specified GetServiceRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServiceRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.GetServiceRequest;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.GetServiceRequest;

                    /**
                     * Verifies a GetServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.GetServiceRequest;

                    /**
                     * Creates a plain object from a GetServiceRequest message. Also converts values to other types if specified.
                     * @param message GetServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.GetServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetServiceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListStandardOffersRequest. */
                interface IListStandardOffersRequest {

                    /** ListStandardOffersRequest parent */
                    parent?: (string|null);

                    /** ListStandardOffersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListStandardOffersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListStandardOffersRequest filter */
                    filter?: (string|null);

                    /** ListStandardOffersRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListStandardOffersRequest. */
                class ListStandardOffersRequest implements IListStandardOffersRequest {

                    /**
                     * Constructs a new ListStandardOffersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IListStandardOffersRequest);

                    /** ListStandardOffersRequest parent. */
                    public parent: string;

                    /** ListStandardOffersRequest pageSize. */
                    public pageSize: number;

                    /** ListStandardOffersRequest pageToken. */
                    public pageToken: string;

                    /** ListStandardOffersRequest filter. */
                    public filter: string;

                    /** ListStandardOffersRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListStandardOffersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListStandardOffersRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IListStandardOffersRequest): google.cloud.commerceproducer.v1beta.ListStandardOffersRequest;

                    /**
                     * Encodes the specified ListStandardOffersRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListStandardOffersRequest.verify|verify} messages.
                     * @param message ListStandardOffersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IListStandardOffersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListStandardOffersRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListStandardOffersRequest.verify|verify} messages.
                     * @param message ListStandardOffersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IListStandardOffersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListStandardOffersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListStandardOffersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ListStandardOffersRequest;

                    /**
                     * Decodes a ListStandardOffersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListStandardOffersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ListStandardOffersRequest;

                    /**
                     * Verifies a ListStandardOffersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListStandardOffersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListStandardOffersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ListStandardOffersRequest;

                    /**
                     * Creates a plain object from a ListStandardOffersRequest message. Also converts values to other types if specified.
                     * @param message ListStandardOffersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ListStandardOffersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListStandardOffersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListStandardOffersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListStandardOffersResponse. */
                interface IListStandardOffersResponse {

                    /** ListStandardOffersResponse standardOffers */
                    standardOffers?: (google.cloud.commerceproducer.v1beta.IStandardOffer[]|null);

                    /** ListStandardOffersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListStandardOffersResponse. */
                class ListStandardOffersResponse implements IListStandardOffersResponse {

                    /**
                     * Constructs a new ListStandardOffersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IListStandardOffersResponse);

                    /** ListStandardOffersResponse standardOffers. */
                    public standardOffers: google.cloud.commerceproducer.v1beta.IStandardOffer[];

                    /** ListStandardOffersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListStandardOffersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListStandardOffersResponse instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IListStandardOffersResponse): google.cloud.commerceproducer.v1beta.ListStandardOffersResponse;

                    /**
                     * Encodes the specified ListStandardOffersResponse message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListStandardOffersResponse.verify|verify} messages.
                     * @param message ListStandardOffersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IListStandardOffersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListStandardOffersResponse message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListStandardOffersResponse.verify|verify} messages.
                     * @param message ListStandardOffersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IListStandardOffersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListStandardOffersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListStandardOffersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ListStandardOffersResponse;

                    /**
                     * Decodes a ListStandardOffersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListStandardOffersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ListStandardOffersResponse;

                    /**
                     * Verifies a ListStandardOffersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListStandardOffersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListStandardOffersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ListStandardOffersResponse;

                    /**
                     * Creates a plain object from a ListStandardOffersResponse message. Also converts values to other types if specified.
                     * @param message ListStandardOffersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ListStandardOffersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListStandardOffersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListStandardOffersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetStandardOfferRequest. */
                interface IGetStandardOfferRequest {

                    /** GetStandardOfferRequest name */
                    name?: (string|null);

                    /** GetStandardOfferRequest view */
                    view?: (google.cloud.commerceproducer.v1beta.StandardOfferView|keyof typeof google.cloud.commerceproducer.v1beta.StandardOfferView|null);
                }

                /** Represents a GetStandardOfferRequest. */
                class GetStandardOfferRequest implements IGetStandardOfferRequest {

                    /**
                     * Constructs a new GetStandardOfferRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IGetStandardOfferRequest);

                    /** GetStandardOfferRequest name. */
                    public name: string;

                    /** GetStandardOfferRequest view. */
                    public view: (google.cloud.commerceproducer.v1beta.StandardOfferView|keyof typeof google.cloud.commerceproducer.v1beta.StandardOfferView);

                    /**
                     * Creates a new GetStandardOfferRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetStandardOfferRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IGetStandardOfferRequest): google.cloud.commerceproducer.v1beta.GetStandardOfferRequest;

                    /**
                     * Encodes the specified GetStandardOfferRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.GetStandardOfferRequest.verify|verify} messages.
                     * @param message GetStandardOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IGetStandardOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetStandardOfferRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.GetStandardOfferRequest.verify|verify} messages.
                     * @param message GetStandardOfferRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IGetStandardOfferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetStandardOfferRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetStandardOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.GetStandardOfferRequest;

                    /**
                     * Decodes a GetStandardOfferRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetStandardOfferRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.GetStandardOfferRequest;

                    /**
                     * Verifies a GetStandardOfferRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetStandardOfferRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetStandardOfferRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.GetStandardOfferRequest;

                    /**
                     * Creates a plain object from a GetStandardOfferRequest message. Also converts values to other types if specified.
                     * @param message GetStandardOfferRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.GetStandardOfferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetStandardOfferRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetStandardOfferRequest
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
                }

                /** Represents a ListSkusRequest. */
                class ListSkusRequest implements IListSkusRequest {

                    /**
                     * Constructs a new ListSkusRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IListSkusRequest);

                    /** ListSkusRequest parent. */
                    public parent: string;

                    /** ListSkusRequest pageSize. */
                    public pageSize: number;

                    /** ListSkusRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListSkusRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSkusRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IListSkusRequest): google.cloud.commerceproducer.v1beta.ListSkusRequest;

                    /**
                     * Encodes the specified ListSkusRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListSkusRequest.verify|verify} messages.
                     * @param message ListSkusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IListSkusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSkusRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListSkusRequest.verify|verify} messages.
                     * @param message ListSkusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IListSkusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSkusRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSkusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ListSkusRequest;

                    /**
                     * Decodes a ListSkusRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSkusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ListSkusRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ListSkusRequest;

                    /**
                     * Creates a plain object from a ListSkusRequest message. Also converts values to other types if specified.
                     * @param message ListSkusRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ListSkusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    skus?: (google.cloud.commerceproducer.v1beta.ISku[]|null);

                    /** ListSkusResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListSkusResponse. */
                class ListSkusResponse implements IListSkusResponse {

                    /**
                     * Constructs a new ListSkusResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IListSkusResponse);

                    /** ListSkusResponse skus. */
                    public skus: google.cloud.commerceproducer.v1beta.ISku[];

                    /** ListSkusResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListSkusResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSkusResponse instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IListSkusResponse): google.cloud.commerceproducer.v1beta.ListSkusResponse;

                    /**
                     * Encodes the specified ListSkusResponse message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListSkusResponse.verify|verify} messages.
                     * @param message ListSkusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IListSkusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSkusResponse message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListSkusResponse.verify|verify} messages.
                     * @param message ListSkusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IListSkusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSkusResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSkusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ListSkusResponse;

                    /**
                     * Decodes a ListSkusResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSkusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ListSkusResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ListSkusResponse;

                    /**
                     * Creates a plain object from a ListSkusResponse message. Also converts values to other types if specified.
                     * @param message ListSkusResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ListSkusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IGetSkuRequest);

                    /** GetSkuRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSkuRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSkuRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IGetSkuRequest): google.cloud.commerceproducer.v1beta.GetSkuRequest;

                    /**
                     * Encodes the specified GetSkuRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.GetSkuRequest.verify|verify} messages.
                     * @param message GetSkuRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IGetSkuRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSkuRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.GetSkuRequest.verify|verify} messages.
                     * @param message GetSkuRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IGetSkuRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSkuRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSkuRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.GetSkuRequest;

                    /**
                     * Decodes a GetSkuRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSkuRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.GetSkuRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.GetSkuRequest;

                    /**
                     * Creates a plain object from a GetSkuRequest message. Also converts values to other types if specified.
                     * @param message GetSkuRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.GetSkuRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a GetSkuGroupRequest. */
                interface IGetSkuGroupRequest {

                    /** GetSkuGroupRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSkuGroupRequest. */
                class GetSkuGroupRequest implements IGetSkuGroupRequest {

                    /**
                     * Constructs a new GetSkuGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IGetSkuGroupRequest);

                    /** GetSkuGroupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSkuGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSkuGroupRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IGetSkuGroupRequest): google.cloud.commerceproducer.v1beta.GetSkuGroupRequest;

                    /**
                     * Encodes the specified GetSkuGroupRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.GetSkuGroupRequest.verify|verify} messages.
                     * @param message GetSkuGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IGetSkuGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSkuGroupRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.GetSkuGroupRequest.verify|verify} messages.
                     * @param message GetSkuGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IGetSkuGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSkuGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSkuGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.GetSkuGroupRequest;

                    /**
                     * Decodes a GetSkuGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSkuGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.GetSkuGroupRequest;

                    /**
                     * Verifies a GetSkuGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSkuGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSkuGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.GetSkuGroupRequest;

                    /**
                     * Creates a plain object from a GetSkuGroupRequest message. Also converts values to other types if specified.
                     * @param message GetSkuGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.GetSkuGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSkuGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSkuGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSkuGroupsRequest. */
                interface IListSkuGroupsRequest {

                    /** ListSkuGroupsRequest parent */
                    parent?: (string|null);

                    /** ListSkuGroupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSkuGroupsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListSkuGroupsRequest. */
                class ListSkuGroupsRequest implements IListSkuGroupsRequest {

                    /**
                     * Constructs a new ListSkuGroupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IListSkuGroupsRequest);

                    /** ListSkuGroupsRequest parent. */
                    public parent: string;

                    /** ListSkuGroupsRequest pageSize. */
                    public pageSize: number;

                    /** ListSkuGroupsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListSkuGroupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSkuGroupsRequest instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IListSkuGroupsRequest): google.cloud.commerceproducer.v1beta.ListSkuGroupsRequest;

                    /**
                     * Encodes the specified ListSkuGroupsRequest message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListSkuGroupsRequest.verify|verify} messages.
                     * @param message ListSkuGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IListSkuGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSkuGroupsRequest message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListSkuGroupsRequest.verify|verify} messages.
                     * @param message ListSkuGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IListSkuGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSkuGroupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSkuGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ListSkuGroupsRequest;

                    /**
                     * Decodes a ListSkuGroupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSkuGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ListSkuGroupsRequest;

                    /**
                     * Verifies a ListSkuGroupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSkuGroupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSkuGroupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ListSkuGroupsRequest;

                    /**
                     * Creates a plain object from a ListSkuGroupsRequest message. Also converts values to other types if specified.
                     * @param message ListSkuGroupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ListSkuGroupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSkuGroupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSkuGroupsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSkuGroupsResponse. */
                interface IListSkuGroupsResponse {

                    /** ListSkuGroupsResponse skuGroups */
                    skuGroups?: (google.cloud.commerceproducer.v1beta.ISkuGroup[]|null);

                    /** ListSkuGroupsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListSkuGroupsResponse. */
                class ListSkuGroupsResponse implements IListSkuGroupsResponse {

                    /**
                     * Constructs a new ListSkuGroupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IListSkuGroupsResponse);

                    /** ListSkuGroupsResponse skuGroups. */
                    public skuGroups: google.cloud.commerceproducer.v1beta.ISkuGroup[];

                    /** ListSkuGroupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListSkuGroupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSkuGroupsResponse instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IListSkuGroupsResponse): google.cloud.commerceproducer.v1beta.ListSkuGroupsResponse;

                    /**
                     * Encodes the specified ListSkuGroupsResponse message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListSkuGroupsResponse.verify|verify} messages.
                     * @param message ListSkuGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IListSkuGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSkuGroupsResponse message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.ListSkuGroupsResponse.verify|verify} messages.
                     * @param message ListSkuGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IListSkuGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSkuGroupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSkuGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.ListSkuGroupsResponse;

                    /**
                     * Decodes a ListSkuGroupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSkuGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.ListSkuGroupsResponse;

                    /**
                     * Verifies a ListSkuGroupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSkuGroupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSkuGroupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.ListSkuGroupsResponse;

                    /**
                     * Creates a plain object from a ListSkuGroupsResponse message. Also converts values to other types if specified.
                     * @param message ListSkuGroupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.ListSkuGroupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSkuGroupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSkuGroupsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PrivateOffer. */
                interface IPrivateOffer {

                    /** PrivateOffer singleProductOffer */
                    singleProductOffer?: (google.cloud.commerceproducer.v1beta.PrivateOffer.ISingleProductOffer|null);

                    /** PrivateOffer name */
                    name?: (string|null);

                    /** PrivateOffer state */
                    state?: (google.cloud.commerceproducer.v1beta.PrivateOffer.State|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOffer.State|null);

                    /** PrivateOffer publishRequirementGoogleReview */
                    publishRequirementGoogleReview?: (google.cloud.commerceproducer.v1beta.PrivateOffer.IPublishRequirementGoogleReview|null);

                    /** PrivateOffer createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOffer updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOffer publishTime */
                    publishTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOffer acceptTime */
                    acceptTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOffer cancelTime */
                    cancelTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOffer endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOffer cancellationNote */
                    cancellationNote?: (string|null);

                    /** PrivateOffer resellerContact */
                    resellerContact?: (google.cloud.commerceproducer.v1beta.PrivateOffer.IResellerContact|null);

                    /** PrivateOffer internalNote */
                    internalNote?: (string|null);

                    /** PrivateOffer offerDealType */
                    offerDealType?: (google.cloud.commerceproducer.v1beta.PrivateOffer.OfferDealType|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOffer.OfferDealType|null);

                    /** PrivateOffer title */
                    title?: (string|null);

                    /** PrivateOffer customerNote */
                    customerNote?: (string|null);

                    /** PrivateOffer partnerContact */
                    partnerContact?: (google.cloud.commerceproducer.v1beta.PrivateOffer.IPartnerContact|null);

                    /** PrivateOffer customer */
                    customer?: (google.cloud.commerceproducer.v1beta.PrivateOffer.ICustomer|null);

                    /** PrivateOffer acceptDeadlineTime */
                    acceptDeadlineTime?: (google.type.IDateTime|null);

                    /** PrivateOffer term */
                    term?: (google.cloud.commerceproducer.v1beta.PrivateOffer.ITerm|null);
                }

                /** Represents a PrivateOffer. */
                class PrivateOffer implements IPrivateOffer {

                    /**
                     * Constructs a new PrivateOffer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IPrivateOffer);

                    /** PrivateOffer singleProductOffer. */
                    public singleProductOffer?: (google.cloud.commerceproducer.v1beta.PrivateOffer.ISingleProductOffer|null);

                    /** PrivateOffer name. */
                    public name: string;

                    /** PrivateOffer state. */
                    public state: (google.cloud.commerceproducer.v1beta.PrivateOffer.State|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOffer.State);

                    /** PrivateOffer publishRequirementGoogleReview. */
                    public publishRequirementGoogleReview?: (google.cloud.commerceproducer.v1beta.PrivateOffer.IPublishRequirementGoogleReview|null);

                    /** PrivateOffer createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOffer updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOffer publishTime. */
                    public publishTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOffer acceptTime. */
                    public acceptTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOffer cancelTime. */
                    public cancelTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOffer endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOffer cancellationNote. */
                    public cancellationNote: string;

                    /** PrivateOffer resellerContact. */
                    public resellerContact?: (google.cloud.commerceproducer.v1beta.PrivateOffer.IResellerContact|null);

                    /** PrivateOffer internalNote. */
                    public internalNote: string;

                    /** PrivateOffer offerDealType. */
                    public offerDealType: (google.cloud.commerceproducer.v1beta.PrivateOffer.OfferDealType|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOffer.OfferDealType);

                    /** PrivateOffer title. */
                    public title: string;

                    /** PrivateOffer customerNote. */
                    public customerNote: string;

                    /** PrivateOffer partnerContact. */
                    public partnerContact?: (google.cloud.commerceproducer.v1beta.PrivateOffer.IPartnerContact|null);

                    /** PrivateOffer customer. */
                    public customer?: (google.cloud.commerceproducer.v1beta.PrivateOffer.ICustomer|null);

                    /** PrivateOffer acceptDeadlineTime. */
                    public acceptDeadlineTime?: (google.type.IDateTime|null);

                    /** PrivateOffer term. */
                    public term?: (google.cloud.commerceproducer.v1beta.PrivateOffer.ITerm|null);

                    /** PrivateOffer content. */
                    public content?: "singleProductOffer";

                    /**
                     * Creates a new PrivateOffer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PrivateOffer instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IPrivateOffer): google.cloud.commerceproducer.v1beta.PrivateOffer;

                    /**
                     * Encodes the specified PrivateOffer message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.verify|verify} messages.
                     * @param message PrivateOffer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IPrivateOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PrivateOffer message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.verify|verify} messages.
                     * @param message PrivateOffer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IPrivateOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PrivateOffer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PrivateOffer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer;

                    /**
                     * Decodes a PrivateOffer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PrivateOffer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer;

                    /**
                     * Verifies a PrivateOffer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PrivateOffer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PrivateOffer
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer;

                    /**
                     * Creates a plain object from a PrivateOffer message. Also converts values to other types if specified.
                     * @param message PrivateOffer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PrivateOffer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PrivateOffer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PrivateOffer {

                    /** Properties of a PublishRequirementGoogleReview. */
                    interface IPublishRequirementGoogleReview {

                        /** PublishRequirementGoogleReview reviewApproveTime */
                        reviewApproveTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a PublishRequirementGoogleReview. */
                    class PublishRequirementGoogleReview implements IPublishRequirementGoogleReview {

                        /**
                         * Constructs a new PublishRequirementGoogleReview.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.IPublishRequirementGoogleReview);

                        /** PublishRequirementGoogleReview reviewApproveTime. */
                        public reviewApproveTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new PublishRequirementGoogleReview instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PublishRequirementGoogleReview instance
                         */
                        public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.IPublishRequirementGoogleReview): google.cloud.commerceproducer.v1beta.PrivateOffer.PublishRequirementGoogleReview;

                        /**
                         * Encodes the specified PublishRequirementGoogleReview message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.PublishRequirementGoogleReview.verify|verify} messages.
                         * @param message PublishRequirementGoogleReview message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.IPublishRequirementGoogleReview, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PublishRequirementGoogleReview message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.PublishRequirementGoogleReview.verify|verify} messages.
                         * @param message PublishRequirementGoogleReview message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.IPublishRequirementGoogleReview, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PublishRequirementGoogleReview message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PublishRequirementGoogleReview
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.PublishRequirementGoogleReview;

                        /**
                         * Decodes a PublishRequirementGoogleReview message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PublishRequirementGoogleReview
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.PublishRequirementGoogleReview;

                        /**
                         * Verifies a PublishRequirementGoogleReview message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PublishRequirementGoogleReview message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PublishRequirementGoogleReview
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.PublishRequirementGoogleReview;

                        /**
                         * Creates a plain object from a PublishRequirementGoogleReview message. Also converts values to other types if specified.
                         * @param message PublishRequirementGoogleReview
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.PublishRequirementGoogleReview, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PublishRequirementGoogleReview to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PublishRequirementGoogleReview
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ResellerContact. */
                    interface IResellerContact {

                        /** ResellerContact contact */
                        contact?: (string|null);

                        /** ResellerContact email */
                        email?: (string|null);
                    }

                    /** Represents a ResellerContact. */
                    class ResellerContact implements IResellerContact {

                        /**
                         * Constructs a new ResellerContact.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.IResellerContact);

                        /** ResellerContact contact. */
                        public contact: string;

                        /** ResellerContact email. */
                        public email: string;

                        /**
                         * Creates a new ResellerContact instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResellerContact instance
                         */
                        public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.IResellerContact): google.cloud.commerceproducer.v1beta.PrivateOffer.ResellerContact;

                        /**
                         * Encodes the specified ResellerContact message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.ResellerContact.verify|verify} messages.
                         * @param message ResellerContact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.IResellerContact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResellerContact message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.ResellerContact.verify|verify} messages.
                         * @param message ResellerContact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.IResellerContact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResellerContact message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResellerContact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.ResellerContact;

                        /**
                         * Decodes a ResellerContact message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResellerContact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.ResellerContact;

                        /**
                         * Verifies a ResellerContact message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResellerContact message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResellerContact
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.ResellerContact;

                        /**
                         * Creates a plain object from a ResellerContact message. Also converts values to other types if specified.
                         * @param message ResellerContact
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.ResellerContact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResellerContact to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResellerContact
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PartnerContact. */
                    interface IPartnerContact {

                        /** PartnerContact contact */
                        contact?: (string|null);

                        /** PartnerContact email */
                        email?: (string|null);
                    }

                    /** Represents a PartnerContact. */
                    class PartnerContact implements IPartnerContact {

                        /**
                         * Constructs a new PartnerContact.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.IPartnerContact);

                        /** PartnerContact contact. */
                        public contact: string;

                        /** PartnerContact email. */
                        public email: string;

                        /**
                         * Creates a new PartnerContact instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PartnerContact instance
                         */
                        public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.IPartnerContact): google.cloud.commerceproducer.v1beta.PrivateOffer.PartnerContact;

                        /**
                         * Encodes the specified PartnerContact message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.PartnerContact.verify|verify} messages.
                         * @param message PartnerContact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.IPartnerContact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PartnerContact message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.PartnerContact.verify|verify} messages.
                         * @param message PartnerContact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.IPartnerContact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PartnerContact message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PartnerContact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.PartnerContact;

                        /**
                         * Decodes a PartnerContact message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PartnerContact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.PartnerContact;

                        /**
                         * Verifies a PartnerContact message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PartnerContact message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PartnerContact
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.PartnerContact;

                        /**
                         * Creates a plain object from a PartnerContact message. Also converts values to other types if specified.
                         * @param message PartnerContact
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.PartnerContact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PartnerContact to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PartnerContact
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Customer. */
                    interface ICustomer {

                        /** Customer entityTitle */
                        entityTitle?: (string|null);

                        /** Customer contact */
                        contact?: (string|null);

                        /** Customer email */
                        email?: (string|null);

                        /** Customer address */
                        address?: (string|null);

                        /** Customer targetBillingAccount */
                        targetBillingAccount?: (string|null);
                    }

                    /** Represents a Customer. */
                    class Customer implements ICustomer {

                        /**
                         * Constructs a new Customer.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.ICustomer);

                        /** Customer entityTitle. */
                        public entityTitle: string;

                        /** Customer contact. */
                        public contact: string;

                        /** Customer email. */
                        public email: string;

                        /** Customer address. */
                        public address: string;

                        /** Customer targetBillingAccount. */
                        public targetBillingAccount: string;

                        /**
                         * Creates a new Customer instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Customer instance
                         */
                        public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.ICustomer): google.cloud.commerceproducer.v1beta.PrivateOffer.Customer;

                        /**
                         * Encodes the specified Customer message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.Customer.verify|verify} messages.
                         * @param message Customer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Customer message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.Customer.verify|verify} messages.
                         * @param message Customer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Customer message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Customer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.Customer;

                        /**
                         * Decodes a Customer message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Customer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.Customer;

                        /**
                         * Verifies a Customer message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Customer message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Customer
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.Customer;

                        /**
                         * Creates a plain object from a Customer message. Also converts values to other types if specified.
                         * @param message Customer
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.Customer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Customer to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Customer
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Term. */
                    interface ITerm {

                        /** Term durationMonths */
                        durationMonths?: (number|null);

                        /** Term scheduledEndTime */
                        scheduledEndTime?: (google.type.IDateTime|null);

                        /** Term maxRenewalCount */
                        maxRenewalCount?: (number|null);

                        /** Term unlimitedRenewal */
                        unlimitedRenewal?: (boolean|null);

                        /** Term startPolicy */
                        startPolicy?: (google.cloud.commerceproducer.v1beta.PrivateOffer.Term.StartPolicy|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOffer.Term.StartPolicy|null);

                        /** Term scheduledStartTime */
                        scheduledStartTime?: (google.type.IDateTime|null);

                        /** Term endPolicy */
                        endPolicy?: (google.cloud.commerceproducer.v1beta.PrivateOffer.Term.EndPolicy|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOffer.Term.EndPolicy|null);

                        /** Term effectiveTermEndTime */
                        effectiveTermEndTime?: (google.type.IDateTime|null);
                    }

                    /** Represents a Term. */
                    class Term implements ITerm {

                        /**
                         * Constructs a new Term.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.ITerm);

                        /** Term durationMonths. */
                        public durationMonths?: (number|null);

                        /** Term scheduledEndTime. */
                        public scheduledEndTime?: (google.type.IDateTime|null);

                        /** Term maxRenewalCount. */
                        public maxRenewalCount?: (number|null);

                        /** Term unlimitedRenewal. */
                        public unlimitedRenewal?: (boolean|null);

                        /** Term startPolicy. */
                        public startPolicy: (google.cloud.commerceproducer.v1beta.PrivateOffer.Term.StartPolicy|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOffer.Term.StartPolicy);

                        /** Term scheduledStartTime. */
                        public scheduledStartTime?: (google.type.IDateTime|null);

                        /** Term endPolicy. */
                        public endPolicy: (google.cloud.commerceproducer.v1beta.PrivateOffer.Term.EndPolicy|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOffer.Term.EndPolicy);

                        /** Term effectiveTermEndTime. */
                        public effectiveTermEndTime?: (google.type.IDateTime|null);

                        /** Term endPolicyData. */
                        public endPolicyData?: ("durationMonths"|"scheduledEndTime");

                        /** Term renewal. */
                        public renewal?: ("maxRenewalCount"|"unlimitedRenewal");

                        /**
                         * Creates a new Term instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Term instance
                         */
                        public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.ITerm): google.cloud.commerceproducer.v1beta.PrivateOffer.Term;

                        /**
                         * Encodes the specified Term message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.Term.verify|verify} messages.
                         * @param message Term message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.ITerm, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Term message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.Term.verify|verify} messages.
                         * @param message Term message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.ITerm, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Term message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Term
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.Term;

                        /**
                         * Decodes a Term message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Term
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.Term;

                        /**
                         * Verifies a Term message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Term message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Term
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.Term;

                        /**
                         * Creates a plain object from a Term message. Also converts values to other types if specified.
                         * @param message Term
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.Term, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Term to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Term
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Term {

                        /** StartPolicy enum. */
                        enum StartPolicy {
                            START_POLICY_UNSPECIFIED = 0,
                            IMMEDIATE = 1,
                            SCHEDULED_START_TIME = 2
                        }

                        /** EndPolicy enum. */
                        enum EndPolicy {
                            END_POLICY_UNSPECIFIED = 0,
                            AFTER_DURATION = 1,
                            SCHEDULED_END_TIME = 2,
                            MATCH_AMENDED_OFFER = 3
                        }
                    }

                    /** Properties of a SingleProductOffer. */
                    interface ISingleProductOffer {

                        /** SingleProductOffer amendedPrivateOffer */
                        amendedPrivateOffer?: (string|null);

                        /** SingleProductOffer amendedStandardOffer */
                        amendedStandardOffer?: (string|null);

                        /** SingleProductOffer standardIntervalPrice */
                        standardIntervalPrice?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IStandardIntervalPrice|null);

                        /** SingleProductOffer customIntervalPrice */
                        customIntervalPrice?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.ICustomIntervalPrice|null);

                        /** SingleProductOffer baseStandardOffer */
                        baseStandardOffer?: (string|null);

                        /** SingleProductOffer serviceLevel */
                        serviceLevel?: (string|null);

                        /** SingleProductOffer resellerPrivateOfferPlanId */
                        resellerPrivateOfferPlanId?: (string|null);

                        /** SingleProductOffer features */
                        features?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IFeature[]|null);

                        /** SingleProductOffer effectiveInstallmentTimeline */
                        effectiveInstallmentTimeline?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IInstallment[]|null);

                        /** SingleProductOffer contractValue */
                        contractValue?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IContractValue|null);

                        /** SingleProductOffer revenueShare */
                        revenueShare?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IRevenueShare|null);

                        /** SingleProductOffer additionalContractValue */
                        additionalContractValue?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IAdditionalContractValue|null);
                    }

                    /** Represents a SingleProductOffer. */
                    class SingleProductOffer implements ISingleProductOffer {

                        /**
                         * Constructs a new SingleProductOffer.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.ISingleProductOffer);

                        /** SingleProductOffer amendedPrivateOffer. */
                        public amendedPrivateOffer?: (string|null);

                        /** SingleProductOffer amendedStandardOffer. */
                        public amendedStandardOffer?: (string|null);

                        /** SingleProductOffer standardIntervalPrice. */
                        public standardIntervalPrice?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IStandardIntervalPrice|null);

                        /** SingleProductOffer customIntervalPrice. */
                        public customIntervalPrice?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.ICustomIntervalPrice|null);

                        /** SingleProductOffer baseStandardOffer. */
                        public baseStandardOffer: string;

                        /** SingleProductOffer serviceLevel. */
                        public serviceLevel: string;

                        /** SingleProductOffer resellerPrivateOfferPlanId. */
                        public resellerPrivateOfferPlanId: string;

                        /** SingleProductOffer features. */
                        public features: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IFeature[];

                        /** SingleProductOffer effectiveInstallmentTimeline. */
                        public effectiveInstallmentTimeline: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IInstallment[];

                        /** SingleProductOffer contractValue. */
                        public contractValue?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IContractValue|null);

                        /** SingleProductOffer revenueShare. */
                        public revenueShare?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IRevenueShare|null);

                        /** SingleProductOffer additionalContractValue. */
                        public additionalContractValue?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IAdditionalContractValue|null);

                        /** SingleProductOffer amendedOffer. */
                        public amendedOffer?: ("amendedPrivateOffer"|"amendedStandardOffer");

                        /** SingleProductOffer price. */
                        public price?: ("standardIntervalPrice"|"customIntervalPrice");

                        /**
                         * Creates a new SingleProductOffer instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SingleProductOffer instance
                         */
                        public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.ISingleProductOffer): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer;

                        /**
                         * Encodes the specified SingleProductOffer message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.verify|verify} messages.
                         * @param message SingleProductOffer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.ISingleProductOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SingleProductOffer message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.verify|verify} messages.
                         * @param message SingleProductOffer message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.ISingleProductOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SingleProductOffer message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SingleProductOffer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer;

                        /**
                         * Decodes a SingleProductOffer message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SingleProductOffer
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer;

                        /**
                         * Verifies a SingleProductOffer message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SingleProductOffer message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SingleProductOffer
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer;

                        /**
                         * Creates a plain object from a SingleProductOffer message. Also converts values to other types if specified.
                         * @param message SingleProductOffer
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SingleProductOffer to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SingleProductOffer
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SingleProductOffer {

                        /** Properties of a Feature. */
                        interface IFeature {

                            /** Feature displayName */
                            displayName?: (string|null);

                            /** Feature value */
                            value?: (string|null);
                        }

                        /** Represents a Feature. */
                        class Feature implements IFeature {

                            /**
                             * Constructs a new Feature.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IFeature);

                            /** Feature displayName. */
                            public displayName: string;

                            /** Feature value. */
                            public value: string;

                            /**
                             * Creates a new Feature instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Feature instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IFeature): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Feature;

                            /**
                             * Encodes the specified Feature message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Feature.verify|verify} messages.
                             * @param message Feature message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Feature message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Feature.verify|verify} messages.
                             * @param message Feature message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Feature message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Feature
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Feature;

                            /**
                             * Decodes a Feature message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Feature
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Feature;

                            /**
                             * Verifies a Feature message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Feature message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Feature
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Feature;

                            /**
                             * Creates a plain object from a Feature message. Also converts values to other types if specified.
                             * @param message Feature
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Feature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Feature to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Feature
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a PriceModel. */
                        interface IPriceModel {

                            /** PriceModel flatFee */
                            flatFee?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.IFlatFee|null);

                            /** PriceModel commitment */
                            commitment?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.ICommitment|null);

                            /** PriceModel usage */
                            usage?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.IUsage|null);
                        }

                        /** Represents a PriceModel. */
                        class PriceModel implements IPriceModel {

                            /**
                             * Constructs a new PriceModel.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IPriceModel);

                            /** PriceModel flatFee. */
                            public flatFee?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.IFlatFee|null);

                            /** PriceModel commitment. */
                            public commitment?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.ICommitment|null);

                            /** PriceModel usage. */
                            public usage?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.IUsage|null);

                            /** PriceModel subscription. */
                            public subscription?: ("flatFee"|"commitment");

                            /**
                             * Creates a new PriceModel instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PriceModel instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IPriceModel): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel;

                            /**
                             * Encodes the specified PriceModel message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.verify|verify} messages.
                             * @param message PriceModel message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IPriceModel, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PriceModel message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.verify|verify} messages.
                             * @param message PriceModel message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IPriceModel, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PriceModel message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PriceModel
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel;

                            /**
                             * Decodes a PriceModel message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PriceModel
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel;

                            /**
                             * Verifies a PriceModel message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PriceModel message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PriceModel
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel;

                            /**
                             * Creates a plain object from a PriceModel message. Also converts values to other types if specified.
                             * @param message PriceModel
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PriceModel to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for PriceModel
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace PriceModel {

                            /** Properties of a SkuDiscount. */
                            interface ISkuDiscount {

                                /** SkuDiscount sku */
                                sku?: (string|null);

                                /** SkuDiscount cloudBillingSku */
                                cloudBillingSku?: (string|null);

                                /** SkuDiscount discountPercent */
                                discountPercent?: (google.type.IDecimal|null);
                            }

                            /** Represents a SkuDiscount. */
                            class SkuDiscount implements ISkuDiscount {

                                /**
                                 * Constructs a new SkuDiscount.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.ISkuDiscount);

                                /** SkuDiscount sku. */
                                public sku?: (string|null);

                                /** SkuDiscount cloudBillingSku. */
                                public cloudBillingSku?: (string|null);

                                /** SkuDiscount discountPercent. */
                                public discountPercent?: (google.type.IDecimal|null);

                                /** SkuDiscount target. */
                                public target?: ("sku"|"cloudBillingSku");

                                /** SkuDiscount discount. */
                                public discount?: "discountPercent";

                                /**
                                 * Creates a new SkuDiscount instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns SkuDiscount instance
                                 */
                                public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.ISkuDiscount): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.SkuDiscount;

                                /**
                                 * Encodes the specified SkuDiscount message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.SkuDiscount.verify|verify} messages.
                                 * @param message SkuDiscount message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.ISkuDiscount, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified SkuDiscount message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.SkuDiscount.verify|verify} messages.
                                 * @param message SkuDiscount message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.ISkuDiscount, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a SkuDiscount message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns SkuDiscount
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.SkuDiscount;

                                /**
                                 * Decodes a SkuDiscount message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns SkuDiscount
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.SkuDiscount;

                                /**
                                 * Verifies a SkuDiscount message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a SkuDiscount message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns SkuDiscount
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.SkuDiscount;

                                /**
                                 * Creates a plain object from a SkuDiscount message. Also converts values to other types if specified.
                                 * @param message SkuDiscount
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.SkuDiscount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this SkuDiscount to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for SkuDiscount
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a Usage. */
                            interface IUsage {

                                /** Usage defaultDiscountPercent */
                                defaultDiscountPercent?: (google.type.IDecimal|null);

                                /** Usage skuDiscounts */
                                skuDiscounts?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.ISkuDiscount[]|null);
                            }

                            /** Represents a Usage. */
                            class Usage implements IUsage {

                                /**
                                 * Constructs a new Usage.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.IUsage);

                                /** Usage defaultDiscountPercent. */
                                public defaultDiscountPercent?: (google.type.IDecimal|null);

                                /** Usage skuDiscounts. */
                                public skuDiscounts: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.ISkuDiscount[];

                                /**
                                 * Creates a new Usage instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Usage instance
                                 */
                                public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.IUsage): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Usage;

                                /**
                                 * Encodes the specified Usage message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Usage.verify|verify} messages.
                                 * @param message Usage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.IUsage, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Usage message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Usage.verify|verify} messages.
                                 * @param message Usage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.IUsage, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Usage message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Usage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Usage;

                                /**
                                 * Decodes a Usage message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Usage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Usage;

                                /**
                                 * Verifies a Usage message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Usage message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Usage
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Usage;

                                /**
                                 * Creates a plain object from a Usage message. Also converts values to other types if specified.
                                 * @param message Usage
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Usage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Usage to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Usage
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a FlatFee. */
                            interface IFlatFee {

                                /** FlatFee flatFeeOverride */
                                flatFeeOverride?: (google.type.IMoney|null);
                            }

                            /** Represents a FlatFee. */
                            class FlatFee implements IFlatFee {

                                /**
                                 * Constructs a new FlatFee.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.IFlatFee);

                                /** FlatFee flatFeeOverride. */
                                public flatFeeOverride?: (google.type.IMoney|null);

                                /**
                                 * Creates a new FlatFee instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns FlatFee instance
                                 */
                                public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.IFlatFee): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.FlatFee;

                                /**
                                 * Encodes the specified FlatFee message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.FlatFee.verify|verify} messages.
                                 * @param message FlatFee message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.IFlatFee, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified FlatFee message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.FlatFee.verify|verify} messages.
                                 * @param message FlatFee message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.IFlatFee, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a FlatFee message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns FlatFee
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.FlatFee;

                                /**
                                 * Decodes a FlatFee message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns FlatFee
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.FlatFee;

                                /**
                                 * Verifies a FlatFee message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a FlatFee message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns FlatFee
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.FlatFee;

                                /**
                                 * Creates a plain object from a FlatFee message. Also converts values to other types if specified.
                                 * @param message FlatFee
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.FlatFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this FlatFee to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for FlatFee
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a Commitment. */
                            interface ICommitment {

                                /** Commitment commitmentAmount */
                                commitmentAmount?: (google.type.IMoney|null);

                                /** Commitment discountPercent */
                                discountPercent?: (google.type.IDecimal|null);

                                /** Commitment additionalCredit */
                                additionalCredit?: (google.type.IMoney|null);

                                /** Commitment discardPreviousCreditBalance */
                                discardPreviousCreditBalance?: (boolean|null);
                            }

                            /** Represents a Commitment. */
                            class Commitment implements ICommitment {

                                /**
                                 * Constructs a new Commitment.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.ICommitment);

                                /** Commitment commitmentAmount. */
                                public commitmentAmount?: (google.type.IMoney|null);

                                /** Commitment discountPercent. */
                                public discountPercent?: (google.type.IDecimal|null);

                                /** Commitment additionalCredit. */
                                public additionalCredit?: (google.type.IMoney|null);

                                /** Commitment discardPreviousCreditBalance. */
                                public discardPreviousCreditBalance: boolean;

                                /**
                                 * Creates a new Commitment instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Commitment instance
                                 */
                                public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.ICommitment): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Commitment;

                                /**
                                 * Encodes the specified Commitment message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Commitment.verify|verify} messages.
                                 * @param message Commitment message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.ICommitment, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Commitment message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Commitment.verify|verify} messages.
                                 * @param message Commitment message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.ICommitment, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Commitment message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Commitment
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Commitment;

                                /**
                                 * Decodes a Commitment message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Commitment
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Commitment;

                                /**
                                 * Verifies a Commitment message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Commitment message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Commitment
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Commitment;

                                /**
                                 * Creates a plain object from a Commitment message. Also converts values to other types if specified.
                                 * @param message Commitment
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.PriceModel.Commitment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Commitment to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Commitment
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of a StandardIntervalPrice. */
                        interface IStandardIntervalPrice {

                            /** StandardIntervalPrice standardInterval */
                            standardInterval?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.StandardIntervalPrice.StandardInterval|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.StandardIntervalPrice.StandardInterval|null);

                            /** StandardIntervalPrice priceModel */
                            priceModel?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IPriceModel|null);
                        }

                        /** Represents a StandardIntervalPrice. */
                        class StandardIntervalPrice implements IStandardIntervalPrice {

                            /**
                             * Constructs a new StandardIntervalPrice.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IStandardIntervalPrice);

                            /** StandardIntervalPrice standardInterval. */
                            public standardInterval: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.StandardIntervalPrice.StandardInterval|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.StandardIntervalPrice.StandardInterval);

                            /** StandardIntervalPrice priceModel. */
                            public priceModel?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IPriceModel|null);

                            /**
                             * Creates a new StandardIntervalPrice instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns StandardIntervalPrice instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IStandardIntervalPrice): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.StandardIntervalPrice;

                            /**
                             * Encodes the specified StandardIntervalPrice message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.StandardIntervalPrice.verify|verify} messages.
                             * @param message StandardIntervalPrice message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IStandardIntervalPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified StandardIntervalPrice message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.StandardIntervalPrice.verify|verify} messages.
                             * @param message StandardIntervalPrice message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IStandardIntervalPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a StandardIntervalPrice message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns StandardIntervalPrice
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.StandardIntervalPrice;

                            /**
                             * Decodes a StandardIntervalPrice message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns StandardIntervalPrice
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.StandardIntervalPrice;

                            /**
                             * Verifies a StandardIntervalPrice message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a StandardIntervalPrice message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns StandardIntervalPrice
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.StandardIntervalPrice;

                            /**
                             * Creates a plain object from a StandardIntervalPrice message. Also converts values to other types if specified.
                             * @param message StandardIntervalPrice
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.StandardIntervalPrice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this StandardIntervalPrice to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for StandardIntervalPrice
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace StandardIntervalPrice {

                            /** StandardInterval enum. */
                            enum StandardInterval {
                                STANDARD_INTERVAL_UNSPECIFIED = 0,
                                MONTHLY_POSTPAY = 1,
                                MONTHLY_PRORATED = 2,
                                MONTHLY_NOT_PRORATED = 3,
                                QUARTERLY_NOT_PRORATED = 4,
                                YEARLY_NOT_PRORATED = 5
                            }
                        }

                        /** Properties of an Installment. */
                        interface IInstallment {

                            /** Installment startTime */
                            startTime?: (google.type.IDateTime|null);

                            /** Installment priceModel */
                            priceModel?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IPriceModel|null);
                        }

                        /** Represents an Installment. */
                        class Installment implements IInstallment {

                            /**
                             * Constructs a new Installment.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IInstallment);

                            /** Installment startTime. */
                            public startTime?: (google.type.IDateTime|null);

                            /** Installment priceModel. */
                            public priceModel?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IPriceModel|null);

                            /**
                             * Creates a new Installment instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Installment instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IInstallment): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Installment;

                            /**
                             * Encodes the specified Installment message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Installment.verify|verify} messages.
                             * @param message Installment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IInstallment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Installment message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Installment.verify|verify} messages.
                             * @param message Installment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IInstallment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Installment message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Installment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Installment;

                            /**
                             * Decodes an Installment message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Installment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Installment;

                            /**
                             * Verifies an Installment message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Installment message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Installment
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Installment;

                            /**
                             * Creates a plain object from an Installment message. Also converts values to other types if specified.
                             * @param message Installment
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.Installment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Installment to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Installment
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a CustomIntervalPrice. */
                        interface ICustomIntervalPrice {

                            /** CustomIntervalPrice installments */
                            installments?: (google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IInstallment[]|null);
                        }

                        /** Represents a CustomIntervalPrice. */
                        class CustomIntervalPrice implements ICustomIntervalPrice {

                            /**
                             * Constructs a new CustomIntervalPrice.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.ICustomIntervalPrice);

                            /** CustomIntervalPrice installments. */
                            public installments: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IInstallment[];

                            /**
                             * Creates a new CustomIntervalPrice instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CustomIntervalPrice instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.ICustomIntervalPrice): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.CustomIntervalPrice;

                            /**
                             * Encodes the specified CustomIntervalPrice message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.CustomIntervalPrice.verify|verify} messages.
                             * @param message CustomIntervalPrice message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.ICustomIntervalPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CustomIntervalPrice message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.CustomIntervalPrice.verify|verify} messages.
                             * @param message CustomIntervalPrice message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.ICustomIntervalPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CustomIntervalPrice message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CustomIntervalPrice
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.CustomIntervalPrice;

                            /**
                             * Decodes a CustomIntervalPrice message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CustomIntervalPrice
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.CustomIntervalPrice;

                            /**
                             * Verifies a CustomIntervalPrice message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CustomIntervalPrice message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CustomIntervalPrice
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.CustomIntervalPrice;

                            /**
                             * Creates a plain object from a CustomIntervalPrice message. Also converts values to other types if specified.
                             * @param message CustomIntervalPrice
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.CustomIntervalPrice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CustomIntervalPrice to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for CustomIntervalPrice
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ContractValue. */
                        interface IContractValue {

                            /** ContractValue totalContractValue */
                            totalContractValue?: (google.type.IMoney|null);
                        }

                        /** Represents a ContractValue. */
                        class ContractValue implements IContractValue {

                            /**
                             * Constructs a new ContractValue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IContractValue);

                            /** ContractValue totalContractValue. */
                            public totalContractValue?: (google.type.IMoney|null);

                            /**
                             * Creates a new ContractValue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ContractValue instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IContractValue): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.ContractValue;

                            /**
                             * Encodes the specified ContractValue message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.ContractValue.verify|verify} messages.
                             * @param message ContractValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IContractValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ContractValue message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.ContractValue.verify|verify} messages.
                             * @param message ContractValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IContractValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ContractValue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ContractValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.ContractValue;

                            /**
                             * Decodes a ContractValue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ContractValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.ContractValue;

                            /**
                             * Verifies a ContractValue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ContractValue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ContractValue
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.ContractValue;

                            /**
                             * Creates a plain object from a ContractValue message. Also converts values to other types if specified.
                             * @param message ContractValue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.ContractValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ContractValue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ContractValue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a RevenueShare. */
                        interface IRevenueShare {

                            /** RevenueShare currentTermVendorNetRevenuePercent */
                            currentTermVendorNetRevenuePercent?: (google.type.IDecimal|null);

                            /** RevenueShare renewalTermVendorNetRevenuePercent */
                            renewalTermVendorNetRevenuePercent?: (google.type.IDecimal|null);
                        }

                        /** Represents a RevenueShare. */
                        class RevenueShare implements IRevenueShare {

                            /**
                             * Constructs a new RevenueShare.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IRevenueShare);

                            /** RevenueShare currentTermVendorNetRevenuePercent. */
                            public currentTermVendorNetRevenuePercent?: (google.type.IDecimal|null);

                            /** RevenueShare renewalTermVendorNetRevenuePercent. */
                            public renewalTermVendorNetRevenuePercent?: (google.type.IDecimal|null);

                            /**
                             * Creates a new RevenueShare instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns RevenueShare instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IRevenueShare): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.RevenueShare;

                            /**
                             * Encodes the specified RevenueShare message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.RevenueShare.verify|verify} messages.
                             * @param message RevenueShare message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IRevenueShare, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified RevenueShare message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.RevenueShare.verify|verify} messages.
                             * @param message RevenueShare message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IRevenueShare, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a RevenueShare message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns RevenueShare
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.RevenueShare;

                            /**
                             * Decodes a RevenueShare message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns RevenueShare
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.RevenueShare;

                            /**
                             * Verifies a RevenueShare message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a RevenueShare message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns RevenueShare
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.RevenueShare;

                            /**
                             * Creates a plain object from a RevenueShare message. Also converts values to other types if specified.
                             * @param message RevenueShare
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.RevenueShare, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this RevenueShare to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for RevenueShare
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an AdditionalContractValue. */
                        interface IAdditionalContractValue {

                            /** AdditionalContractValue contractValue */
                            contractValue?: (google.type.IMoney|null);

                            /** AdditionalContractValue eligibleSkus */
                            eligibleSkus?: (string[]|null);
                        }

                        /** Represents an AdditionalContractValue. */
                        class AdditionalContractValue implements IAdditionalContractValue {

                            /**
                             * Constructs a new AdditionalContractValue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IAdditionalContractValue);

                            /** AdditionalContractValue contractValue. */
                            public contractValue?: (google.type.IMoney|null);

                            /** AdditionalContractValue eligibleSkus. */
                            public eligibleSkus: string[];

                            /**
                             * Creates a new AdditionalContractValue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AdditionalContractValue instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IAdditionalContractValue): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.AdditionalContractValue;

                            /**
                             * Encodes the specified AdditionalContractValue message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.AdditionalContractValue.verify|verify} messages.
                             * @param message AdditionalContractValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IAdditionalContractValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AdditionalContractValue message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.AdditionalContractValue.verify|verify} messages.
                             * @param message AdditionalContractValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.IAdditionalContractValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AdditionalContractValue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AdditionalContractValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.AdditionalContractValue;

                            /**
                             * Decodes an AdditionalContractValue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AdditionalContractValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.AdditionalContractValue;

                            /**
                             * Verifies an AdditionalContractValue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AdditionalContractValue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AdditionalContractValue
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.AdditionalContractValue;

                            /**
                             * Creates a plain object from an AdditionalContractValue message. Also converts values to other types if specified.
                             * @param message AdditionalContractValue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOffer.SingleProductOffer.AdditionalContractValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AdditionalContractValue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AdditionalContractValue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        DRAFT = 1,
                        PUBLISHING = 2,
                        PUBLISHED = 3,
                        ACCEPTED = 4,
                        CANCELLED = 5,
                        EXPIRED = 6,
                        ENDED = 7
                    }

                    /** OfferDealType enum. */
                    enum OfferDealType {
                        OFFER_DEAL_TYPE_UNSPECIFIED = 0,
                        CHANNEL_SHIFT = 1,
                        MIGRATION = 2,
                        NATIVE_RENEWAL = 3,
                        NEW = 4
                    }
                }

                /** Properties of a PrivateOfferDocument. */
                interface IPrivateOfferDocument {

                    /** PrivateOfferDocument inlineContent */
                    inlineContent?: (Uint8Array|Buffer|string|null);

                    /** PrivateOfferDocument name */
                    name?: (string|null);

                    /** PrivateOfferDocument createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOfferDocument updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOfferDocument documentType */
                    documentType?: (google.cloud.commerceproducer.v1beta.PrivateOfferDocument.DocumentType|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOfferDocument.DocumentType|null);

                    /** PrivateOfferDocument mimeType */
                    mimeType?: (string|null);
                }

                /** Represents a PrivateOfferDocument. */
                class PrivateOfferDocument implements IPrivateOfferDocument {

                    /**
                     * Constructs a new PrivateOfferDocument.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IPrivateOfferDocument);

                    /** PrivateOfferDocument inlineContent. */
                    public inlineContent?: (Uint8Array|Buffer|string|null);

                    /** PrivateOfferDocument name. */
                    public name: string;

                    /** PrivateOfferDocument createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOfferDocument updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateOfferDocument documentType. */
                    public documentType: (google.cloud.commerceproducer.v1beta.PrivateOfferDocument.DocumentType|keyof typeof google.cloud.commerceproducer.v1beta.PrivateOfferDocument.DocumentType);

                    /** PrivateOfferDocument mimeType. */
                    public mimeType: string;

                    /** PrivateOfferDocument content. */
                    public content?: "inlineContent";

                    /**
                     * Creates a new PrivateOfferDocument instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PrivateOfferDocument instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IPrivateOfferDocument): google.cloud.commerceproducer.v1beta.PrivateOfferDocument;

                    /**
                     * Encodes the specified PrivateOfferDocument message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOfferDocument.verify|verify} messages.
                     * @param message PrivateOfferDocument message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IPrivateOfferDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PrivateOfferDocument message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.PrivateOfferDocument.verify|verify} messages.
                     * @param message PrivateOfferDocument message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IPrivateOfferDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PrivateOfferDocument message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PrivateOfferDocument
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.PrivateOfferDocument;

                    /**
                     * Decodes a PrivateOfferDocument message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PrivateOfferDocument
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.PrivateOfferDocument;

                    /**
                     * Verifies a PrivateOfferDocument message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PrivateOfferDocument message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PrivateOfferDocument
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.PrivateOfferDocument;

                    /**
                     * Creates a plain object from a PrivateOfferDocument message. Also converts values to other types if specified.
                     * @param message PrivateOfferDocument
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.PrivateOfferDocument, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PrivateOfferDocument to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PrivateOfferDocument
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PrivateOfferDocument {

                    /** DocumentType enum. */
                    enum DocumentType {
                        DOCUMENT_TYPE_UNSPECIFIED = 0,
                        CUSTOM_END_USER_LICENSE_AGREEMENT = 1,
                        STATEMENT_OF_WORK = 2,
                        STANDARD_END_USER_LICENSE_AGREEMENT_V1 = 3,
                        STANDARD_END_USER_LICENSE_AGREEMENT_V2 = 4
                    }
                }

                /** Properties of a Service. */
                interface IService {

                    /** Service name */
                    name?: (string|null);

                    /** Service title */
                    title?: (string|null);
                }

                /** Represents a Service. */
                class Service implements IService {

                    /**
                     * Constructs a new Service.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IService);

                    /** Service name. */
                    public name: string;

                    /** Service title. */
                    public title: string;

                    /**
                     * Creates a new Service instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Service instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IService): google.cloud.commerceproducer.v1beta.Service;

                    /**
                     * Encodes the specified Service message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Service.verify|verify} messages.
                     * @param message Service message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Service message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Service.verify|verify} messages.
                     * @param message Service message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Service message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Service
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Service;

                    /**
                     * Decodes a Service message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Service
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Service;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Service;

                    /**
                     * Creates a plain object from a Service message. Also converts values to other types if specified.
                     * @param message Service
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Sku. */
                interface ISku {

                    /** Sku name */
                    name?: (string|null);

                    /** Sku description */
                    description?: (string|null);

                    /** Sku skuPriceTimeline */
                    skuPriceTimeline?: (google.cloud.commerceproducer.v1beta.Sku.ISkuPrice[]|null);
                }

                /** Represents a Sku. */
                class Sku implements ISku {

                    /**
                     * Constructs a new Sku.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.ISku);

                    /** Sku name. */
                    public name: string;

                    /** Sku description. */
                    public description: string;

                    /** Sku skuPriceTimeline. */
                    public skuPriceTimeline: google.cloud.commerceproducer.v1beta.Sku.ISkuPrice[];

                    /**
                     * Creates a new Sku instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Sku instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.ISku): google.cloud.commerceproducer.v1beta.Sku;

                    /**
                     * Encodes the specified Sku message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.verify|verify} messages.
                     * @param message Sku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.ISku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Sku message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.verify|verify} messages.
                     * @param message Sku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.ISku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sku message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Sku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku;

                    /**
                     * Decodes a Sku message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Sku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku;

                    /**
                     * Creates a plain object from a Sku message. Also converts values to other types if specified.
                     * @param message Sku
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.Sku, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a SkuPrice. */
                    interface ISkuPrice {

                        /** SkuPrice inactive */
                        inactive?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IInactiveSkuPrice|null);

                        /** SkuPrice managedServiceMetricUsageFee */
                        managedServiceMetricUsageFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IManagedServiceMetricUsageFee|null);

                        /** SkuPrice gceLicenseUsageFee */
                        gceLicenseUsageFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IComputeEngineLicenseUsageFee|null);

                        /** SkuPrice gkePodUsageFee */
                        gkePodUsageFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IKubernetesEnginePodUsageFee|null);

                        /** SkuPrice aiPlatformManagedModelUsageFee */
                        aiPlatformManagedModelUsageFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelUsageFee|null);

                        /** SkuPrice aiPlatformProvisionedThroughputFee */
                        aiPlatformProvisionedThroughputFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformProvisionedThroughputFee|null);

                        /** SkuPrice aiPlatformDeployedModelUsageFee */
                        aiPlatformDeployedModelUsageFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformDeployedModelUsageFee|null);

                        /** SkuPrice flatSubscriptionFee */
                        flatSubscriptionFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IFlatSubscriptionFee|null);

                        /** SkuPrice effectiveTime */
                        effectiveTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a SkuPrice. */
                    class SkuPrice implements ISkuPrice {

                        /**
                         * Constructs a new SkuPrice.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.ISkuPrice);

                        /** SkuPrice inactive. */
                        public inactive?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IInactiveSkuPrice|null);

                        /** SkuPrice managedServiceMetricUsageFee. */
                        public managedServiceMetricUsageFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IManagedServiceMetricUsageFee|null);

                        /** SkuPrice gceLicenseUsageFee. */
                        public gceLicenseUsageFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IComputeEngineLicenseUsageFee|null);

                        /** SkuPrice gkePodUsageFee. */
                        public gkePodUsageFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IKubernetesEnginePodUsageFee|null);

                        /** SkuPrice aiPlatformManagedModelUsageFee. */
                        public aiPlatformManagedModelUsageFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelUsageFee|null);

                        /** SkuPrice aiPlatformProvisionedThroughputFee. */
                        public aiPlatformProvisionedThroughputFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformProvisionedThroughputFee|null);

                        /** SkuPrice aiPlatformDeployedModelUsageFee. */
                        public aiPlatformDeployedModelUsageFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformDeployedModelUsageFee|null);

                        /** SkuPrice flatSubscriptionFee. */
                        public flatSubscriptionFee?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IFlatSubscriptionFee|null);

                        /** SkuPrice effectiveTime. */
                        public effectiveTime?: (google.protobuf.ITimestamp|null);

                        /** SkuPrice skuType. */
                        public skuType?: ("inactive"|"managedServiceMetricUsageFee"|"gceLicenseUsageFee"|"gkePodUsageFee"|"aiPlatformManagedModelUsageFee"|"aiPlatformProvisionedThroughputFee"|"aiPlatformDeployedModelUsageFee"|"flatSubscriptionFee");

                        /**
                         * Creates a new SkuPrice instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SkuPrice instance
                         */
                        public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.ISkuPrice): google.cloud.commerceproducer.v1beta.Sku.SkuPrice;

                        /**
                         * Encodes the specified SkuPrice message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.verify|verify} messages.
                         * @param message SkuPrice message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.commerceproducer.v1beta.Sku.ISkuPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SkuPrice message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.verify|verify} messages.
                         * @param message SkuPrice message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.ISkuPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SkuPrice message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SkuPrice
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice;

                        /**
                         * Decodes a SkuPrice message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SkuPrice
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice;

                        /**
                         * Verifies a SkuPrice message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SkuPrice message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SkuPrice
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice;

                        /**
                         * Creates a plain object from a SkuPrice message. Also converts values to other types if specified.
                         * @param message SkuPrice
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SkuPrice to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SkuPrice
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SkuPrice {

                        /** Properties of an InactiveSkuPrice. */
                        interface IInactiveSkuPrice {
                        }

                        /** Represents an InactiveSkuPrice. */
                        class InactiveSkuPrice implements IInactiveSkuPrice {

                            /**
                             * Constructs a new InactiveSkuPrice.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IInactiveSkuPrice);

                            /**
                             * Creates a new InactiveSkuPrice instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns InactiveSkuPrice instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IInactiveSkuPrice): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.InactiveSkuPrice;

                            /**
                             * Encodes the specified InactiveSkuPrice message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.InactiveSkuPrice.verify|verify} messages.
                             * @param message InactiveSkuPrice message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IInactiveSkuPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified InactiveSkuPrice message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.InactiveSkuPrice.verify|verify} messages.
                             * @param message InactiveSkuPrice message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IInactiveSkuPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an InactiveSkuPrice message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns InactiveSkuPrice
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.InactiveSkuPrice;

                            /**
                             * Decodes an InactiveSkuPrice message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns InactiveSkuPrice
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.InactiveSkuPrice;

                            /**
                             * Verifies an InactiveSkuPrice message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an InactiveSkuPrice message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns InactiveSkuPrice
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.InactiveSkuPrice;

                            /**
                             * Creates a plain object from an InactiveSkuPrice message. Also converts values to other types if specified.
                             * @param message InactiveSkuPrice
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.InactiveSkuPrice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this InactiveSkuPrice to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for InactiveSkuPrice
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ManagedServiceMetricUsageFee. */
                        interface IManagedServiceMetricUsageFee {

                            /** ManagedServiceMetricUsageFee tieredPrice */
                            tieredPrice?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ITieredPrice|null);

                            /** ManagedServiceMetricUsageFee canonicalMetric */
                            canonicalMetric?: (string|null);
                        }

                        /** Represents a ManagedServiceMetricUsageFee. */
                        class ManagedServiceMetricUsageFee implements IManagedServiceMetricUsageFee {

                            /**
                             * Constructs a new ManagedServiceMetricUsageFee.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IManagedServiceMetricUsageFee);

                            /** ManagedServiceMetricUsageFee tieredPrice. */
                            public tieredPrice?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ITieredPrice|null);

                            /** ManagedServiceMetricUsageFee canonicalMetric. */
                            public canonicalMetric: string;

                            /** ManagedServiceMetricUsageFee priceStructure. */
                            public priceStructure?: "tieredPrice";

                            /**
                             * Creates a new ManagedServiceMetricUsageFee instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ManagedServiceMetricUsageFee instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IManagedServiceMetricUsageFee): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ManagedServiceMetricUsageFee;

                            /**
                             * Encodes the specified ManagedServiceMetricUsageFee message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ManagedServiceMetricUsageFee.verify|verify} messages.
                             * @param message ManagedServiceMetricUsageFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IManagedServiceMetricUsageFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ManagedServiceMetricUsageFee message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ManagedServiceMetricUsageFee.verify|verify} messages.
                             * @param message ManagedServiceMetricUsageFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IManagedServiceMetricUsageFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ManagedServiceMetricUsageFee message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ManagedServiceMetricUsageFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ManagedServiceMetricUsageFee;

                            /**
                             * Decodes a ManagedServiceMetricUsageFee message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ManagedServiceMetricUsageFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ManagedServiceMetricUsageFee;

                            /**
                             * Verifies a ManagedServiceMetricUsageFee message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ManagedServiceMetricUsageFee message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ManagedServiceMetricUsageFee
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ManagedServiceMetricUsageFee;

                            /**
                             * Creates a plain object from a ManagedServiceMetricUsageFee message. Also converts values to other types if specified.
                             * @param message ManagedServiceMetricUsageFee
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ManagedServiceMetricUsageFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ManagedServiceMetricUsageFee to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ManagedServiceMetricUsageFee
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ComputeEngineLicenseUsageFee. */
                        interface IComputeEngineLicenseUsageFee {

                            /** ComputeEngineLicenseUsageFee pricePerUnit */
                            pricePerUnit?: (google.type.IMoney|null);

                            /** ComputeEngineLicenseUsageFee licenseCode */
                            licenseCode?: (string|null);

                            /** ComputeEngineLicenseUsageFee machineResource */
                            machineResource?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.MachineResource|keyof typeof google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.MachineResource|null);

                            /** ComputeEngineLicenseUsageFee machineResourceRange */
                            machineResourceRange?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.IMachineResourceRange|null);

                            /** ComputeEngineLicenseUsageFee usageCalculation */
                            usageCalculation?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.UsageCalculation|keyof typeof google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.UsageCalculation|null);

                            /** ComputeEngineLicenseUsageFee unit */
                            unit?: (string|null);
                        }

                        /** Represents a ComputeEngineLicenseUsageFee. */
                        class ComputeEngineLicenseUsageFee implements IComputeEngineLicenseUsageFee {

                            /**
                             * Constructs a new ComputeEngineLicenseUsageFee.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IComputeEngineLicenseUsageFee);

                            /** ComputeEngineLicenseUsageFee pricePerUnit. */
                            public pricePerUnit?: (google.type.IMoney|null);

                            /** ComputeEngineLicenseUsageFee licenseCode. */
                            public licenseCode: string;

                            /** ComputeEngineLicenseUsageFee machineResource. */
                            public machineResource: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.MachineResource|keyof typeof google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.MachineResource);

                            /** ComputeEngineLicenseUsageFee machineResourceRange. */
                            public machineResourceRange?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.IMachineResourceRange|null);

                            /** ComputeEngineLicenseUsageFee usageCalculation. */
                            public usageCalculation: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.UsageCalculation|keyof typeof google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.UsageCalculation);

                            /** ComputeEngineLicenseUsageFee unit. */
                            public unit: string;

                            /** ComputeEngineLicenseUsageFee priceStructure. */
                            public priceStructure?: "pricePerUnit";

                            /**
                             * Creates a new ComputeEngineLicenseUsageFee instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ComputeEngineLicenseUsageFee instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IComputeEngineLicenseUsageFee): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee;

                            /**
                             * Encodes the specified ComputeEngineLicenseUsageFee message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.verify|verify} messages.
                             * @param message ComputeEngineLicenseUsageFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IComputeEngineLicenseUsageFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ComputeEngineLicenseUsageFee message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.verify|verify} messages.
                             * @param message ComputeEngineLicenseUsageFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IComputeEngineLicenseUsageFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ComputeEngineLicenseUsageFee message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ComputeEngineLicenseUsageFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee;

                            /**
                             * Decodes a ComputeEngineLicenseUsageFee message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ComputeEngineLicenseUsageFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee;

                            /**
                             * Verifies a ComputeEngineLicenseUsageFee message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ComputeEngineLicenseUsageFee message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ComputeEngineLicenseUsageFee
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee;

                            /**
                             * Creates a plain object from a ComputeEngineLicenseUsageFee message. Also converts values to other types if specified.
                             * @param message ComputeEngineLicenseUsageFee
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ComputeEngineLicenseUsageFee to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ComputeEngineLicenseUsageFee
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ComputeEngineLicenseUsageFee {

                            /** Properties of a MachineResourceRange. */
                            interface IMachineResourceRange {

                                /** MachineResourceRange startValue */
                                startValue?: (number|Long|string|null);

                                /** MachineResourceRange endValue */
                                endValue?: (number|Long|string|null);
                            }

                            /** Represents a MachineResourceRange. */
                            class MachineResourceRange implements IMachineResourceRange {

                                /**
                                 * Constructs a new MachineResourceRange.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.IMachineResourceRange);

                                /** MachineResourceRange startValue. */
                                public startValue: (number|Long|string);

                                /** MachineResourceRange endValue. */
                                public endValue?: (number|Long|string|null);

                                /**
                                 * Creates a new MachineResourceRange instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns MachineResourceRange instance
                                 */
                                public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.IMachineResourceRange): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.MachineResourceRange;

                                /**
                                 * Encodes the specified MachineResourceRange message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.MachineResourceRange.verify|verify} messages.
                                 * @param message MachineResourceRange message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.IMachineResourceRange, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified MachineResourceRange message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.MachineResourceRange.verify|verify} messages.
                                 * @param message MachineResourceRange message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.IMachineResourceRange, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a MachineResourceRange message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns MachineResourceRange
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.MachineResourceRange;

                                /**
                                 * Decodes a MachineResourceRange message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns MachineResourceRange
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.MachineResourceRange;

                                /**
                                 * Verifies a MachineResourceRange message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a MachineResourceRange message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns MachineResourceRange
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.MachineResourceRange;

                                /**
                                 * Creates a plain object from a MachineResourceRange message. Also converts values to other types if specified.
                                 * @param message MachineResourceRange
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ComputeEngineLicenseUsageFee.MachineResourceRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this MachineResourceRange to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for MachineResourceRange
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** MachineResource enum. */
                            enum MachineResource {
                                MACHINE_RESOURCE_UNSPECIFIED = 0,
                                VCPU_COUNT = 1,
                                MEMORY_BYTES = 2,
                                GPU_COUNT = 3
                            }

                            /** UsageCalculation enum. */
                            enum UsageCalculation {
                                USAGE_CALCULATION_UNSPECIFIED = 0,
                                INSTANCE_RUNTIME = 1,
                                LINEAR_RESOURCE_SCALED_INSTANCE_RUNTIME = 2
                            }
                        }

                        /** Properties of a KubernetesEnginePodUsageFee. */
                        interface IKubernetesEnginePodUsageFee {

                            /** KubernetesEnginePodUsageFee pricePerUnit */
                            pricePerUnit?: (google.type.IMoney|null);

                            /** KubernetesEnginePodUsageFee podResource */
                            podResource?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.PodResource|keyof typeof google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.PodResource|null);

                            /** KubernetesEnginePodUsageFee podResourceRange */
                            podResourceRange?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.IPodResourceRange|null);

                            /** KubernetesEnginePodUsageFee usageCalculation */
                            usageCalculation?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.UsageCalculation|keyof typeof google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.UsageCalculation|null);

                            /** KubernetesEnginePodUsageFee unit */
                            unit?: (string|null);
                        }

                        /** Represents a KubernetesEnginePodUsageFee. */
                        class KubernetesEnginePodUsageFee implements IKubernetesEnginePodUsageFee {

                            /**
                             * Constructs a new KubernetesEnginePodUsageFee.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IKubernetesEnginePodUsageFee);

                            /** KubernetesEnginePodUsageFee pricePerUnit. */
                            public pricePerUnit?: (google.type.IMoney|null);

                            /** KubernetesEnginePodUsageFee podResource. */
                            public podResource: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.PodResource|keyof typeof google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.PodResource);

                            /** KubernetesEnginePodUsageFee podResourceRange. */
                            public podResourceRange?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.IPodResourceRange|null);

                            /** KubernetesEnginePodUsageFee usageCalculation. */
                            public usageCalculation: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.UsageCalculation|keyof typeof google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.UsageCalculation);

                            /** KubernetesEnginePodUsageFee unit. */
                            public unit: string;

                            /** KubernetesEnginePodUsageFee priceStructure. */
                            public priceStructure?: "pricePerUnit";

                            /**
                             * Creates a new KubernetesEnginePodUsageFee instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns KubernetesEnginePodUsageFee instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IKubernetesEnginePodUsageFee): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee;

                            /**
                             * Encodes the specified KubernetesEnginePodUsageFee message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.verify|verify} messages.
                             * @param message KubernetesEnginePodUsageFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IKubernetesEnginePodUsageFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified KubernetesEnginePodUsageFee message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.verify|verify} messages.
                             * @param message KubernetesEnginePodUsageFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IKubernetesEnginePodUsageFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a KubernetesEnginePodUsageFee message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns KubernetesEnginePodUsageFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee;

                            /**
                             * Decodes a KubernetesEnginePodUsageFee message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns KubernetesEnginePodUsageFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee;

                            /**
                             * Verifies a KubernetesEnginePodUsageFee message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a KubernetesEnginePodUsageFee message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns KubernetesEnginePodUsageFee
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee;

                            /**
                             * Creates a plain object from a KubernetesEnginePodUsageFee message. Also converts values to other types if specified.
                             * @param message KubernetesEnginePodUsageFee
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this KubernetesEnginePodUsageFee to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for KubernetesEnginePodUsageFee
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace KubernetesEnginePodUsageFee {

                            /** Properties of a PodResourceRange. */
                            interface IPodResourceRange {

                                /** PodResourceRange startValue */
                                startValue?: (number|Long|string|null);

                                /** PodResourceRange endValue */
                                endValue?: (number|Long|string|null);
                            }

                            /** Represents a PodResourceRange. */
                            class PodResourceRange implements IPodResourceRange {

                                /**
                                 * Constructs a new PodResourceRange.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.IPodResourceRange);

                                /** PodResourceRange startValue. */
                                public startValue: (number|Long|string);

                                /** PodResourceRange endValue. */
                                public endValue?: (number|Long|string|null);

                                /**
                                 * Creates a new PodResourceRange instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PodResourceRange instance
                                 */
                                public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.IPodResourceRange): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.PodResourceRange;

                                /**
                                 * Encodes the specified PodResourceRange message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.PodResourceRange.verify|verify} messages.
                                 * @param message PodResourceRange message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.IPodResourceRange, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified PodResourceRange message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.PodResourceRange.verify|verify} messages.
                                 * @param message PodResourceRange message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.IPodResourceRange, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a PodResourceRange message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PodResourceRange
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.PodResourceRange;

                                /**
                                 * Decodes a PodResourceRange message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PodResourceRange
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.PodResourceRange;

                                /**
                                 * Verifies a PodResourceRange message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PodResourceRange message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PodResourceRange
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.PodResourceRange;

                                /**
                                 * Creates a plain object from a PodResourceRange message. Also converts values to other types if specified.
                                 * @param message PodResourceRange
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.KubernetesEnginePodUsageFee.PodResourceRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PodResourceRange to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for PodResourceRange
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** PodResource enum. */
                            enum PodResource {
                                POD_RESOURCE_UNSPECIFIED = 0,
                                VCPU_COUNT = 1,
                                MEMORY_BYTES = 2,
                                GPU_COUNT = 3,
                                TPU_COUNT = 4
                            }

                            /** UsageCalculation enum. */
                            enum UsageCalculation {
                                USAGE_CALCULATION_UNSPECIFIED = 0,
                                POD_RUNTIME = 1,
                                LINEAR_RESOURCE_SCALED_POD_RUNTIME = 2
                            }
                        }

                        /** Properties of an AiPlatformManagedModelUsageFee. */
                        interface IAiPlatformManagedModelUsageFee {

                            /** AiPlatformManagedModelUsageFee tieredPrice */
                            tieredPrice?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ITieredPrice|null);

                            /** AiPlatformManagedModelUsageFee usageMetric */
                            usageMetric?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.IAiPlatformManagedModelUsageMetric|null);

                            /** AiPlatformManagedModelUsageFee location */
                            location?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelEndpointLocation|null);

                            /** AiPlatformManagedModelUsageFee predictionMode */
                            predictionMode?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.PredictionMode|keyof typeof google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.PredictionMode|null);

                            /** AiPlatformManagedModelUsageFee combinedRequestInputTokensRange */
                            combinedRequestInputTokensRange?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.ICombinedRequestInputTokensRange|null);

                            /** AiPlatformManagedModelUsageFee provisionedThroughputOverage */
                            provisionedThroughputOverage?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.IProvisionedThroughputOverage|null);
                        }

                        /** Represents an AiPlatformManagedModelUsageFee. */
                        class AiPlatformManagedModelUsageFee implements IAiPlatformManagedModelUsageFee {

                            /**
                             * Constructs a new AiPlatformManagedModelUsageFee.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelUsageFee);

                            /** AiPlatformManagedModelUsageFee tieredPrice. */
                            public tieredPrice?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ITieredPrice|null);

                            /** AiPlatformManagedModelUsageFee usageMetric. */
                            public usageMetric?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.IAiPlatformManagedModelUsageMetric|null);

                            /** AiPlatformManagedModelUsageFee location. */
                            public location?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelEndpointLocation|null);

                            /** AiPlatformManagedModelUsageFee predictionMode. */
                            public predictionMode: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.PredictionMode|keyof typeof google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.PredictionMode);

                            /** AiPlatformManagedModelUsageFee combinedRequestInputTokensRange. */
                            public combinedRequestInputTokensRange?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.ICombinedRequestInputTokensRange|null);

                            /** AiPlatformManagedModelUsageFee provisionedThroughputOverage. */
                            public provisionedThroughputOverage?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.IProvisionedThroughputOverage|null);

                            /** AiPlatformManagedModelUsageFee priceStructure. */
                            public priceStructure?: "tieredPrice";

                            /**
                             * Creates a new AiPlatformManagedModelUsageFee instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AiPlatformManagedModelUsageFee instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelUsageFee): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee;

                            /**
                             * Encodes the specified AiPlatformManagedModelUsageFee message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.verify|verify} messages.
                             * @param message AiPlatformManagedModelUsageFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelUsageFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AiPlatformManagedModelUsageFee message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.verify|verify} messages.
                             * @param message AiPlatformManagedModelUsageFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelUsageFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AiPlatformManagedModelUsageFee message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AiPlatformManagedModelUsageFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee;

                            /**
                             * Decodes an AiPlatformManagedModelUsageFee message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AiPlatformManagedModelUsageFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee;

                            /**
                             * Verifies an AiPlatformManagedModelUsageFee message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AiPlatformManagedModelUsageFee message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AiPlatformManagedModelUsageFee
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee;

                            /**
                             * Creates a plain object from an AiPlatformManagedModelUsageFee message. Also converts values to other types if specified.
                             * @param message AiPlatformManagedModelUsageFee
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AiPlatformManagedModelUsageFee to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AiPlatformManagedModelUsageFee
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace AiPlatformManagedModelUsageFee {

                            /** Properties of an AiPlatformManagedModelUsageMetric. */
                            interface IAiPlatformManagedModelUsageMetric {

                                /** AiPlatformManagedModelUsageMetric inputTokensMetric */
                                inputTokensMetric?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IInputTokensMetric|null);

                                /** AiPlatformManagedModelUsageMetric cacheReadInputTokensMetric */
                                cacheReadInputTokensMetric?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.ICacheReadInputTokensMetric|null);

                                /** AiPlatformManagedModelUsageMetric cacheWriteInputTokensMetric */
                                cacheWriteInputTokensMetric?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.ICacheWriteInputTokensMetric|null);

                                /** AiPlatformManagedModelUsageMetric outputTokensMetric */
                                outputTokensMetric?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IOutputTokensMetric|null);

                                /** AiPlatformManagedModelUsageMetric webSearchRequestsMetric */
                                webSearchRequestsMetric?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IWebSearchRequestsMetric|null);
                            }

                            /** Represents an AiPlatformManagedModelUsageMetric. */
                            class AiPlatformManagedModelUsageMetric implements IAiPlatformManagedModelUsageMetric {

                                /**
                                 * Constructs a new AiPlatformManagedModelUsageMetric.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.IAiPlatformManagedModelUsageMetric);

                                /** AiPlatformManagedModelUsageMetric inputTokensMetric. */
                                public inputTokensMetric?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IInputTokensMetric|null);

                                /** AiPlatformManagedModelUsageMetric cacheReadInputTokensMetric. */
                                public cacheReadInputTokensMetric?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.ICacheReadInputTokensMetric|null);

                                /** AiPlatformManagedModelUsageMetric cacheWriteInputTokensMetric. */
                                public cacheWriteInputTokensMetric?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.ICacheWriteInputTokensMetric|null);

                                /** AiPlatformManagedModelUsageMetric outputTokensMetric. */
                                public outputTokensMetric?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IOutputTokensMetric|null);

                                /** AiPlatformManagedModelUsageMetric webSearchRequestsMetric. */
                                public webSearchRequestsMetric?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IWebSearchRequestsMetric|null);

                                /** AiPlatformManagedModelUsageMetric metric. */
                                public metric?: ("inputTokensMetric"|"cacheReadInputTokensMetric"|"cacheWriteInputTokensMetric"|"outputTokensMetric"|"webSearchRequestsMetric");

                                /**
                                 * Creates a new AiPlatformManagedModelUsageMetric instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns AiPlatformManagedModelUsageMetric instance
                                 */
                                public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.IAiPlatformManagedModelUsageMetric): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric;

                                /**
                                 * Encodes the specified AiPlatformManagedModelUsageMetric message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.verify|verify} messages.
                                 * @param message AiPlatformManagedModelUsageMetric message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.IAiPlatformManagedModelUsageMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified AiPlatformManagedModelUsageMetric message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.verify|verify} messages.
                                 * @param message AiPlatformManagedModelUsageMetric message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.IAiPlatformManagedModelUsageMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an AiPlatformManagedModelUsageMetric message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns AiPlatformManagedModelUsageMetric
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric;

                                /**
                                 * Decodes an AiPlatformManagedModelUsageMetric message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns AiPlatformManagedModelUsageMetric
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric;

                                /**
                                 * Verifies an AiPlatformManagedModelUsageMetric message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an AiPlatformManagedModelUsageMetric message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns AiPlatformManagedModelUsageMetric
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric;

                                /**
                                 * Creates a plain object from an AiPlatformManagedModelUsageMetric message. Also converts values to other types if specified.
                                 * @param message AiPlatformManagedModelUsageMetric
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this AiPlatformManagedModelUsageMetric to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for AiPlatformManagedModelUsageMetric
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            namespace AiPlatformManagedModelUsageMetric {

                                /** Properties of an InputTokensMetric. */
                                interface IInputTokensMetric {
                                }

                                /** Represents an InputTokensMetric. */
                                class InputTokensMetric implements IInputTokensMetric {

                                    /**
                                     * Constructs a new InputTokensMetric.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IInputTokensMetric);

                                    /**
                                     * Creates a new InputTokensMetric instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns InputTokensMetric instance
                                     */
                                    public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IInputTokensMetric): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.InputTokensMetric;

                                    /**
                                     * Encodes the specified InputTokensMetric message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.InputTokensMetric.verify|verify} messages.
                                     * @param message InputTokensMetric message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IInputTokensMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified InputTokensMetric message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.InputTokensMetric.verify|verify} messages.
                                     * @param message InputTokensMetric message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IInputTokensMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an InputTokensMetric message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns InputTokensMetric
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.InputTokensMetric;

                                    /**
                                     * Decodes an InputTokensMetric message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns InputTokensMetric
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.InputTokensMetric;

                                    /**
                                     * Verifies an InputTokensMetric message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an InputTokensMetric message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns InputTokensMetric
                                     */
                                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.InputTokensMetric;

                                    /**
                                     * Creates a plain object from an InputTokensMetric message. Also converts values to other types if specified.
                                     * @param message InputTokensMetric
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.InputTokensMetric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this InputTokensMetric to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };

                                    /**
                                     * Gets the default type url for InputTokensMetric
                                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                     * @returns The default type url
                                     */
                                    public static getTypeUrl(typeUrlPrefix?: string): string;
                                }

                                /** Properties of a CacheReadInputTokensMetric. */
                                interface ICacheReadInputTokensMetric {
                                }

                                /** Represents a CacheReadInputTokensMetric. */
                                class CacheReadInputTokensMetric implements ICacheReadInputTokensMetric {

                                    /**
                                     * Constructs a new CacheReadInputTokensMetric.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.ICacheReadInputTokensMetric);

                                    /**
                                     * Creates a new CacheReadInputTokensMetric instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns CacheReadInputTokensMetric instance
                                     */
                                    public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.ICacheReadInputTokensMetric): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheReadInputTokensMetric;

                                    /**
                                     * Encodes the specified CacheReadInputTokensMetric message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheReadInputTokensMetric.verify|verify} messages.
                                     * @param message CacheReadInputTokensMetric message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.ICacheReadInputTokensMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified CacheReadInputTokensMetric message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheReadInputTokensMetric.verify|verify} messages.
                                     * @param message CacheReadInputTokensMetric message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.ICacheReadInputTokensMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a CacheReadInputTokensMetric message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns CacheReadInputTokensMetric
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheReadInputTokensMetric;

                                    /**
                                     * Decodes a CacheReadInputTokensMetric message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns CacheReadInputTokensMetric
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheReadInputTokensMetric;

                                    /**
                                     * Verifies a CacheReadInputTokensMetric message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a CacheReadInputTokensMetric message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns CacheReadInputTokensMetric
                                     */
                                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheReadInputTokensMetric;

                                    /**
                                     * Creates a plain object from a CacheReadInputTokensMetric message. Also converts values to other types if specified.
                                     * @param message CacheReadInputTokensMetric
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheReadInputTokensMetric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this CacheReadInputTokensMetric to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };

                                    /**
                                     * Gets the default type url for CacheReadInputTokensMetric
                                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                     * @returns The default type url
                                     */
                                    public static getTypeUrl(typeUrlPrefix?: string): string;
                                }

                                /** Properties of a CacheWriteInputTokensMetric. */
                                interface ICacheWriteInputTokensMetric {

                                    /** CacheWriteInputTokensMetric ttl */
                                    ttl?: (google.protobuf.IDuration|null);
                                }

                                /** Represents a CacheWriteInputTokensMetric. */
                                class CacheWriteInputTokensMetric implements ICacheWriteInputTokensMetric {

                                    /**
                                     * Constructs a new CacheWriteInputTokensMetric.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.ICacheWriteInputTokensMetric);

                                    /** CacheWriteInputTokensMetric ttl. */
                                    public ttl?: (google.protobuf.IDuration|null);

                                    /**
                                     * Creates a new CacheWriteInputTokensMetric instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns CacheWriteInputTokensMetric instance
                                     */
                                    public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.ICacheWriteInputTokensMetric): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheWriteInputTokensMetric;

                                    /**
                                     * Encodes the specified CacheWriteInputTokensMetric message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheWriteInputTokensMetric.verify|verify} messages.
                                     * @param message CacheWriteInputTokensMetric message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.ICacheWriteInputTokensMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified CacheWriteInputTokensMetric message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheWriteInputTokensMetric.verify|verify} messages.
                                     * @param message CacheWriteInputTokensMetric message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.ICacheWriteInputTokensMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a CacheWriteInputTokensMetric message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns CacheWriteInputTokensMetric
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheWriteInputTokensMetric;

                                    /**
                                     * Decodes a CacheWriteInputTokensMetric message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns CacheWriteInputTokensMetric
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheWriteInputTokensMetric;

                                    /**
                                     * Verifies a CacheWriteInputTokensMetric message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a CacheWriteInputTokensMetric message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns CacheWriteInputTokensMetric
                                     */
                                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheWriteInputTokensMetric;

                                    /**
                                     * Creates a plain object from a CacheWriteInputTokensMetric message. Also converts values to other types if specified.
                                     * @param message CacheWriteInputTokensMetric
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.CacheWriteInputTokensMetric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this CacheWriteInputTokensMetric to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };

                                    /**
                                     * Gets the default type url for CacheWriteInputTokensMetric
                                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                     * @returns The default type url
                                     */
                                    public static getTypeUrl(typeUrlPrefix?: string): string;
                                }

                                /** Properties of an OutputTokensMetric. */
                                interface IOutputTokensMetric {
                                }

                                /** Represents an OutputTokensMetric. */
                                class OutputTokensMetric implements IOutputTokensMetric {

                                    /**
                                     * Constructs a new OutputTokensMetric.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IOutputTokensMetric);

                                    /**
                                     * Creates a new OutputTokensMetric instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns OutputTokensMetric instance
                                     */
                                    public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IOutputTokensMetric): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.OutputTokensMetric;

                                    /**
                                     * Encodes the specified OutputTokensMetric message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.OutputTokensMetric.verify|verify} messages.
                                     * @param message OutputTokensMetric message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IOutputTokensMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified OutputTokensMetric message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.OutputTokensMetric.verify|verify} messages.
                                     * @param message OutputTokensMetric message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IOutputTokensMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an OutputTokensMetric message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns OutputTokensMetric
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.OutputTokensMetric;

                                    /**
                                     * Decodes an OutputTokensMetric message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns OutputTokensMetric
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.OutputTokensMetric;

                                    /**
                                     * Verifies an OutputTokensMetric message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an OutputTokensMetric message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns OutputTokensMetric
                                     */
                                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.OutputTokensMetric;

                                    /**
                                     * Creates a plain object from an OutputTokensMetric message. Also converts values to other types if specified.
                                     * @param message OutputTokensMetric
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.OutputTokensMetric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this OutputTokensMetric to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };

                                    /**
                                     * Gets the default type url for OutputTokensMetric
                                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                     * @returns The default type url
                                     */
                                    public static getTypeUrl(typeUrlPrefix?: string): string;
                                }

                                /** Properties of a WebSearchRequestsMetric. */
                                interface IWebSearchRequestsMetric {
                                }

                                /** Represents a WebSearchRequestsMetric. */
                                class WebSearchRequestsMetric implements IWebSearchRequestsMetric {

                                    /**
                                     * Constructs a new WebSearchRequestsMetric.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IWebSearchRequestsMetric);

                                    /**
                                     * Creates a new WebSearchRequestsMetric instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns WebSearchRequestsMetric instance
                                     */
                                    public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IWebSearchRequestsMetric): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.WebSearchRequestsMetric;

                                    /**
                                     * Encodes the specified WebSearchRequestsMetric message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.WebSearchRequestsMetric.verify|verify} messages.
                                     * @param message WebSearchRequestsMetric message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IWebSearchRequestsMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified WebSearchRequestsMetric message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.WebSearchRequestsMetric.verify|verify} messages.
                                     * @param message WebSearchRequestsMetric message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.IWebSearchRequestsMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes a WebSearchRequestsMetric message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns WebSearchRequestsMetric
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.WebSearchRequestsMetric;

                                    /**
                                     * Decodes a WebSearchRequestsMetric message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns WebSearchRequestsMetric
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.WebSearchRequestsMetric;

                                    /**
                                     * Verifies a WebSearchRequestsMetric message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates a WebSearchRequestsMetric message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns WebSearchRequestsMetric
                                     */
                                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.WebSearchRequestsMetric;

                                    /**
                                     * Creates a plain object from a WebSearchRequestsMetric message. Also converts values to other types if specified.
                                     * @param message WebSearchRequestsMetric
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.AiPlatformManagedModelUsageMetric.WebSearchRequestsMetric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this WebSearchRequestsMetric to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };

                                    /**
                                     * Gets the default type url for WebSearchRequestsMetric
                                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                     * @returns The default type url
                                     */
                                    public static getTypeUrl(typeUrlPrefix?: string): string;
                                }
                            }

                            /** Properties of a CombinedRequestInputTokensRange. */
                            interface ICombinedRequestInputTokensRange {

                                /** CombinedRequestInputTokensRange startValue */
                                startValue?: (number|Long|string|null);

                                /** CombinedRequestInputTokensRange endValue */
                                endValue?: (number|Long|string|null);
                            }

                            /** Represents a CombinedRequestInputTokensRange. */
                            class CombinedRequestInputTokensRange implements ICombinedRequestInputTokensRange {

                                /**
                                 * Constructs a new CombinedRequestInputTokensRange.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.ICombinedRequestInputTokensRange);

                                /** CombinedRequestInputTokensRange startValue. */
                                public startValue: (number|Long|string);

                                /** CombinedRequestInputTokensRange endValue. */
                                public endValue?: (number|Long|string|null);

                                /**
                                 * Creates a new CombinedRequestInputTokensRange instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns CombinedRequestInputTokensRange instance
                                 */
                                public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.ICombinedRequestInputTokensRange): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.CombinedRequestInputTokensRange;

                                /**
                                 * Encodes the specified CombinedRequestInputTokensRange message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.CombinedRequestInputTokensRange.verify|verify} messages.
                                 * @param message CombinedRequestInputTokensRange message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.ICombinedRequestInputTokensRange, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified CombinedRequestInputTokensRange message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.CombinedRequestInputTokensRange.verify|verify} messages.
                                 * @param message CombinedRequestInputTokensRange message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.ICombinedRequestInputTokensRange, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a CombinedRequestInputTokensRange message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns CombinedRequestInputTokensRange
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.CombinedRequestInputTokensRange;

                                /**
                                 * Decodes a CombinedRequestInputTokensRange message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns CombinedRequestInputTokensRange
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.CombinedRequestInputTokensRange;

                                /**
                                 * Verifies a CombinedRequestInputTokensRange message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a CombinedRequestInputTokensRange message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns CombinedRequestInputTokensRange
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.CombinedRequestInputTokensRange;

                                /**
                                 * Creates a plain object from a CombinedRequestInputTokensRange message. Also converts values to other types if specified.
                                 * @param message CombinedRequestInputTokensRange
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.CombinedRequestInputTokensRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this CombinedRequestInputTokensRange to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for CombinedRequestInputTokensRange
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a ProvisionedThroughputOverage. */
                            interface IProvisionedThroughputOverage {

                                /** ProvisionedThroughputOverage service */
                                service?: (string|null);
                            }

                            /** Represents a ProvisionedThroughputOverage. */
                            class ProvisionedThroughputOverage implements IProvisionedThroughputOverage {

                                /**
                                 * Constructs a new ProvisionedThroughputOverage.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.IProvisionedThroughputOverage);

                                /** ProvisionedThroughputOverage service. */
                                public service: string;

                                /**
                                 * Creates a new ProvisionedThroughputOverage instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ProvisionedThroughputOverage instance
                                 */
                                public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.IProvisionedThroughputOverage): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.ProvisionedThroughputOverage;

                                /**
                                 * Encodes the specified ProvisionedThroughputOverage message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.ProvisionedThroughputOverage.verify|verify} messages.
                                 * @param message ProvisionedThroughputOverage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.IProvisionedThroughputOverage, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified ProvisionedThroughputOverage message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.ProvisionedThroughputOverage.verify|verify} messages.
                                 * @param message ProvisionedThroughputOverage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.IProvisionedThroughputOverage, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a ProvisionedThroughputOverage message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ProvisionedThroughputOverage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.ProvisionedThroughputOverage;

                                /**
                                 * Decodes a ProvisionedThroughputOverage message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ProvisionedThroughputOverage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.ProvisionedThroughputOverage;

                                /**
                                 * Verifies a ProvisionedThroughputOverage message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ProvisionedThroughputOverage message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ProvisionedThroughputOverage
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.ProvisionedThroughputOverage;

                                /**
                                 * Creates a plain object from a ProvisionedThroughputOverage message. Also converts values to other types if specified.
                                 * @param message ProvisionedThroughputOverage
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelUsageFee.ProvisionedThroughputOverage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ProvisionedThroughputOverage to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for ProvisionedThroughputOverage
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** PredictionMode enum. */
                            enum PredictionMode {
                                PREDICTION_MODE_UNSPECIFIED = 0,
                                ONLINE_PREDICTION = 1,
                                BATCH_PREDICTION = 2
                            }
                        }

                        /** Properties of an AiPlatformProvisionedThroughputFee. */
                        interface IAiPlatformProvisionedThroughputFee {

                            /** AiPlatformProvisionedThroughputFee termDurationMonths */
                            termDurationMonths?: (number|null);

                            /** AiPlatformProvisionedThroughputFee gsuPricePerUnit */
                            gsuPricePerUnit?: (google.type.IMoney|null);

                            /** AiPlatformProvisionedThroughputFee location */
                            location?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelEndpointLocation|null);

                            /** AiPlatformProvisionedThroughputFee unit */
                            unit?: (string|null);
                        }

                        /** Represents an AiPlatformProvisionedThroughputFee. */
                        class AiPlatformProvisionedThroughputFee implements IAiPlatformProvisionedThroughputFee {

                            /**
                             * Constructs a new AiPlatformProvisionedThroughputFee.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformProvisionedThroughputFee);

                            /** AiPlatformProvisionedThroughputFee termDurationMonths. */
                            public termDurationMonths?: (number|null);

                            /** AiPlatformProvisionedThroughputFee gsuPricePerUnit. */
                            public gsuPricePerUnit?: (google.type.IMoney|null);

                            /** AiPlatformProvisionedThroughputFee location. */
                            public location?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelEndpointLocation|null);

                            /** AiPlatformProvisionedThroughputFee unit. */
                            public unit: string;

                            /** AiPlatformProvisionedThroughputFee term. */
                            public term?: "termDurationMonths";

                            /** AiPlatformProvisionedThroughputFee priceStructure. */
                            public priceStructure?: "gsuPricePerUnit";

                            /**
                             * Creates a new AiPlatformProvisionedThroughputFee instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AiPlatformProvisionedThroughputFee instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformProvisionedThroughputFee): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformProvisionedThroughputFee;

                            /**
                             * Encodes the specified AiPlatformProvisionedThroughputFee message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformProvisionedThroughputFee.verify|verify} messages.
                             * @param message AiPlatformProvisionedThroughputFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformProvisionedThroughputFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AiPlatformProvisionedThroughputFee message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformProvisionedThroughputFee.verify|verify} messages.
                             * @param message AiPlatformProvisionedThroughputFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformProvisionedThroughputFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AiPlatformProvisionedThroughputFee message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AiPlatformProvisionedThroughputFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformProvisionedThroughputFee;

                            /**
                             * Decodes an AiPlatformProvisionedThroughputFee message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AiPlatformProvisionedThroughputFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformProvisionedThroughputFee;

                            /**
                             * Verifies an AiPlatformProvisionedThroughputFee message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AiPlatformProvisionedThroughputFee message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AiPlatformProvisionedThroughputFee
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformProvisionedThroughputFee;

                            /**
                             * Creates a plain object from an AiPlatformProvisionedThroughputFee message. Also converts values to other types if specified.
                             * @param message AiPlatformProvisionedThroughputFee
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformProvisionedThroughputFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AiPlatformProvisionedThroughputFee to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AiPlatformProvisionedThroughputFee
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an AiPlatformDeployedModelUsageFee. */
                        interface IAiPlatformDeployedModelUsageFee {

                            /** AiPlatformDeployedModelUsageFee acceleratorType */
                            acceleratorType?: (string|null);

                            /** AiPlatformDeployedModelUsageFee pricePerUnit */
                            pricePerUnit?: (google.type.IMoney|null);

                            /** AiPlatformDeployedModelUsageFee unit */
                            unit?: (string|null);

                            /** AiPlatformDeployedModelUsageFee usageCalculation */
                            usageCalculation?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformDeployedModelUsageFee.UsageCalculation|keyof typeof google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformDeployedModelUsageFee.UsageCalculation|null);
                        }

                        /** Represents an AiPlatformDeployedModelUsageFee. */
                        class AiPlatformDeployedModelUsageFee implements IAiPlatformDeployedModelUsageFee {

                            /**
                             * Constructs a new AiPlatformDeployedModelUsageFee.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformDeployedModelUsageFee);

                            /** AiPlatformDeployedModelUsageFee acceleratorType. */
                            public acceleratorType?: (string|null);

                            /** AiPlatformDeployedModelUsageFee pricePerUnit. */
                            public pricePerUnit?: (google.type.IMoney|null);

                            /** AiPlatformDeployedModelUsageFee unit. */
                            public unit: string;

                            /** AiPlatformDeployedModelUsageFee usageCalculation. */
                            public usageCalculation: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformDeployedModelUsageFee.UsageCalculation|keyof typeof google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformDeployedModelUsageFee.UsageCalculation);

                            /** AiPlatformDeployedModelUsageFee hardwareResource. */
                            public hardwareResource?: "acceleratorType";

                            /** AiPlatformDeployedModelUsageFee priceStructure. */
                            public priceStructure?: "pricePerUnit";

                            /**
                             * Creates a new AiPlatformDeployedModelUsageFee instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AiPlatformDeployedModelUsageFee instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformDeployedModelUsageFee): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformDeployedModelUsageFee;

                            /**
                             * Encodes the specified AiPlatformDeployedModelUsageFee message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformDeployedModelUsageFee.verify|verify} messages.
                             * @param message AiPlatformDeployedModelUsageFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformDeployedModelUsageFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AiPlatformDeployedModelUsageFee message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformDeployedModelUsageFee.verify|verify} messages.
                             * @param message AiPlatformDeployedModelUsageFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformDeployedModelUsageFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AiPlatformDeployedModelUsageFee message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AiPlatformDeployedModelUsageFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformDeployedModelUsageFee;

                            /**
                             * Decodes an AiPlatformDeployedModelUsageFee message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AiPlatformDeployedModelUsageFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformDeployedModelUsageFee;

                            /**
                             * Verifies an AiPlatformDeployedModelUsageFee message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AiPlatformDeployedModelUsageFee message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AiPlatformDeployedModelUsageFee
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformDeployedModelUsageFee;

                            /**
                             * Creates a plain object from an AiPlatformDeployedModelUsageFee message. Also converts values to other types if specified.
                             * @param message AiPlatformDeployedModelUsageFee
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformDeployedModelUsageFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AiPlatformDeployedModelUsageFee to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AiPlatformDeployedModelUsageFee
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace AiPlatformDeployedModelUsageFee {

                            /** UsageCalculation enum. */
                            enum UsageCalculation {
                                USAGE_CALCULATION_UNSPECIFIED = 0,
                                LINEAR_RESOURCE_SCALED_DEPLOYMENT_RUNTIME = 2
                            }
                        }

                        /** Properties of a FlatSubscriptionFee. */
                        interface IFlatSubscriptionFee {

                            /** FlatSubscriptionFee pricePerUnit */
                            pricePerUnit?: (google.type.IMoney|null);

                            /** FlatSubscriptionFee unit */
                            unit?: (string|null);
                        }

                        /** Represents a FlatSubscriptionFee. */
                        class FlatSubscriptionFee implements IFlatSubscriptionFee {

                            /**
                             * Constructs a new FlatSubscriptionFee.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IFlatSubscriptionFee);

                            /** FlatSubscriptionFee pricePerUnit. */
                            public pricePerUnit?: (google.type.IMoney|null);

                            /** FlatSubscriptionFee unit. */
                            public unit: string;

                            /** FlatSubscriptionFee priceStructure. */
                            public priceStructure?: "pricePerUnit";

                            /**
                             * Creates a new FlatSubscriptionFee instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns FlatSubscriptionFee instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IFlatSubscriptionFee): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.FlatSubscriptionFee;

                            /**
                             * Encodes the specified FlatSubscriptionFee message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.FlatSubscriptionFee.verify|verify} messages.
                             * @param message FlatSubscriptionFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IFlatSubscriptionFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified FlatSubscriptionFee message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.FlatSubscriptionFee.verify|verify} messages.
                             * @param message FlatSubscriptionFee message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IFlatSubscriptionFee, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a FlatSubscriptionFee message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns FlatSubscriptionFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.FlatSubscriptionFee;

                            /**
                             * Decodes a FlatSubscriptionFee message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns FlatSubscriptionFee
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.FlatSubscriptionFee;

                            /**
                             * Verifies a FlatSubscriptionFee message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a FlatSubscriptionFee message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns FlatSubscriptionFee
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.FlatSubscriptionFee;

                            /**
                             * Creates a plain object from a FlatSubscriptionFee message. Also converts values to other types if specified.
                             * @param message FlatSubscriptionFee
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.FlatSubscriptionFee, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this FlatSubscriptionFee to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for FlatSubscriptionFee
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a TieredPrice. */
                        interface ITieredPrice {

                            /** TieredPrice unit */
                            unit?: (string|null);

                            /** TieredPrice unitDescription */
                            unitDescription?: (string|null);

                            /** TieredPrice priceUnitCount */
                            priceUnitCount?: (google.type.IDecimal|null);

                            /** TieredPrice priceTiers */
                            priceTiers?: (google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.IPriceTier[]|null);
                        }

                        /** Represents a TieredPrice. */
                        class TieredPrice implements ITieredPrice {

                            /**
                             * Constructs a new TieredPrice.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ITieredPrice);

                            /** TieredPrice unit. */
                            public unit: string;

                            /** TieredPrice unitDescription. */
                            public unitDescription: string;

                            /** TieredPrice priceUnitCount. */
                            public priceUnitCount?: (google.type.IDecimal|null);

                            /** TieredPrice priceTiers. */
                            public priceTiers: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.IPriceTier[];

                            /**
                             * Creates a new TieredPrice instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TieredPrice instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ITieredPrice): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice;

                            /**
                             * Encodes the specified TieredPrice message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.verify|verify} messages.
                             * @param message TieredPrice message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ITieredPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TieredPrice message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.verify|verify} messages.
                             * @param message TieredPrice message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.ITieredPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TieredPrice message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TieredPrice
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice;

                            /**
                             * Decodes a TieredPrice message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TieredPrice
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice;

                            /**
                             * Verifies a TieredPrice message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TieredPrice message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TieredPrice
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice;

                            /**
                             * Creates a plain object from a TieredPrice message. Also converts values to other types if specified.
                             * @param message TieredPrice
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TieredPrice to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for TieredPrice
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace TieredPrice {

                            /** Properties of a PriceTier. */
                            interface IPriceTier {

                                /** PriceTier startAmount */
                                startAmount?: (google.type.IDecimal|null);

                                /** PriceTier price */
                                price?: (google.type.IMoney|null);
                            }

                            /** Represents a PriceTier. */
                            class PriceTier implements IPriceTier {

                                /**
                                 * Constructs a new PriceTier.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.IPriceTier);

                                /** PriceTier startAmount. */
                                public startAmount?: (google.type.IDecimal|null);

                                /** PriceTier price. */
                                public price?: (google.type.IMoney|null);

                                /**
                                 * Creates a new PriceTier instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PriceTier instance
                                 */
                                public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.IPriceTier): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.PriceTier;

                                /**
                                 * Encodes the specified PriceTier message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.PriceTier.verify|verify} messages.
                                 * @param message PriceTier message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.IPriceTier, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified PriceTier message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.PriceTier.verify|verify} messages.
                                 * @param message PriceTier message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.IPriceTier, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a PriceTier message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PriceTier
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.PriceTier;

                                /**
                                 * Decodes a PriceTier message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PriceTier
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.PriceTier;

                                /**
                                 * Verifies a PriceTier message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PriceTier message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PriceTier
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.PriceTier;

                                /**
                                 * Creates a plain object from a PriceTier message. Also converts values to other types if specified.
                                 * @param message PriceTier
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.TieredPrice.PriceTier, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PriceTier to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for PriceTier
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of an AiPlatformManagedModelEndpointLocation. */
                        interface IAiPlatformManagedModelEndpointLocation {

                            /** AiPlatformManagedModelEndpointLocation regionId */
                            regionId?: (string|null);

                            /** AiPlatformManagedModelEndpointLocation globalEndpoint */
                            globalEndpoint?: (boolean|null);

                            /** AiPlatformManagedModelEndpointLocation multiRegionId */
                            multiRegionId?: (string|null);
                        }

                        /** Represents an AiPlatformManagedModelEndpointLocation. */
                        class AiPlatformManagedModelEndpointLocation implements IAiPlatformManagedModelEndpointLocation {

                            /**
                             * Constructs a new AiPlatformManagedModelEndpointLocation.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelEndpointLocation);

                            /** AiPlatformManagedModelEndpointLocation regionId. */
                            public regionId?: (string|null);

                            /** AiPlatformManagedModelEndpointLocation globalEndpoint. */
                            public globalEndpoint?: (boolean|null);

                            /** AiPlatformManagedModelEndpointLocation multiRegionId. */
                            public multiRegionId?: (string|null);

                            /** AiPlatformManagedModelEndpointLocation location. */
                            public location?: ("regionId"|"globalEndpoint"|"multiRegionId");

                            /**
                             * Creates a new AiPlatformManagedModelEndpointLocation instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AiPlatformManagedModelEndpointLocation instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelEndpointLocation): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelEndpointLocation;

                            /**
                             * Encodes the specified AiPlatformManagedModelEndpointLocation message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelEndpointLocation.verify|verify} messages.
                             * @param message AiPlatformManagedModelEndpointLocation message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelEndpointLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AiPlatformManagedModelEndpointLocation message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelEndpointLocation.verify|verify} messages.
                             * @param message AiPlatformManagedModelEndpointLocation message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.IAiPlatformManagedModelEndpointLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AiPlatformManagedModelEndpointLocation message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AiPlatformManagedModelEndpointLocation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelEndpointLocation;

                            /**
                             * Decodes an AiPlatformManagedModelEndpointLocation message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AiPlatformManagedModelEndpointLocation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelEndpointLocation;

                            /**
                             * Verifies an AiPlatformManagedModelEndpointLocation message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AiPlatformManagedModelEndpointLocation message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AiPlatformManagedModelEndpointLocation
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelEndpointLocation;

                            /**
                             * Creates a plain object from an AiPlatformManagedModelEndpointLocation message. Also converts values to other types if specified.
                             * @param message AiPlatformManagedModelEndpointLocation
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.Sku.SkuPrice.AiPlatformManagedModelEndpointLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AiPlatformManagedModelEndpointLocation to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AiPlatformManagedModelEndpointLocation
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }

                /** Properties of a SkuGroup. */
                interface ISkuGroup {

                    /** SkuGroup name */
                    name?: (string|null);

                    /** SkuGroup skus */
                    skus?: (string[]|null);

                    /** SkuGroup cloudBillingSkus */
                    cloudBillingSkus?: (string[]|null);
                }

                /** Represents a SkuGroup. */
                class SkuGroup implements ISkuGroup {

                    /**
                     * Constructs a new SkuGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.ISkuGroup);

                    /** SkuGroup name. */
                    public name: string;

                    /** SkuGroup skus. */
                    public skus: string[];

                    /** SkuGroup cloudBillingSkus. */
                    public cloudBillingSkus: string[];

                    /**
                     * Creates a new SkuGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SkuGroup instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.ISkuGroup): google.cloud.commerceproducer.v1beta.SkuGroup;

                    /**
                     * Encodes the specified SkuGroup message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.SkuGroup.verify|verify} messages.
                     * @param message SkuGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.ISkuGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SkuGroup message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.SkuGroup.verify|verify} messages.
                     * @param message SkuGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.ISkuGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SkuGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SkuGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.SkuGroup;

                    /**
                     * Decodes a SkuGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SkuGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.SkuGroup;

                    /**
                     * Verifies a SkuGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SkuGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SkuGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.SkuGroup;

                    /**
                     * Creates a plain object from a SkuGroup message. Also converts values to other types if specified.
                     * @param message SkuGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.SkuGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SkuGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SkuGroup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StandardOffer. */
                interface IStandardOffer {

                    /** StandardOffer termDurationMonths */
                    termDurationMonths?: (number|null);

                    /** StandardOffer name */
                    name?: (string|null);

                    /** StandardOffer createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** StandardOffer updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** StandardOffer effectiveTime */
                    effectiveTime?: (google.protobuf.ITimestamp|null);

                    /** StandardOffer expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** StandardOffer serviceLevel */
                    serviceLevel?: (string|null);

                    /** StandardOffer serviceLevelTitle */
                    serviceLevelTitle?: (string|null);

                    /** StandardOffer priceModel */
                    priceModel?: (google.cloud.commerceproducer.v1beta.StandardOffer.IPriceModel|null);
                }

                /** Represents a StandardOffer. */
                class StandardOffer implements IStandardOffer {

                    /**
                     * Constructs a new StandardOffer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.commerceproducer.v1beta.IStandardOffer);

                    /** StandardOffer termDurationMonths. */
                    public termDurationMonths?: (number|null);

                    /** StandardOffer name. */
                    public name: string;

                    /** StandardOffer createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** StandardOffer updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** StandardOffer effectiveTime. */
                    public effectiveTime?: (google.protobuf.ITimestamp|null);

                    /** StandardOffer expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** StandardOffer serviceLevel. */
                    public serviceLevel: string;

                    /** StandardOffer serviceLevelTitle. */
                    public serviceLevelTitle: string;

                    /** StandardOffer priceModel. */
                    public priceModel?: (google.cloud.commerceproducer.v1beta.StandardOffer.IPriceModel|null);

                    /** StandardOffer term. */
                    public term?: "termDurationMonths";

                    /**
                     * Creates a new StandardOffer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StandardOffer instance
                     */
                    public static create(properties?: google.cloud.commerceproducer.v1beta.IStandardOffer): google.cloud.commerceproducer.v1beta.StandardOffer;

                    /**
                     * Encodes the specified StandardOffer message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.StandardOffer.verify|verify} messages.
                     * @param message StandardOffer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.commerceproducer.v1beta.IStandardOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StandardOffer message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.StandardOffer.verify|verify} messages.
                     * @param message StandardOffer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.IStandardOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StandardOffer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StandardOffer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.StandardOffer;

                    /**
                     * Decodes a StandardOffer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StandardOffer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.StandardOffer;

                    /**
                     * Verifies a StandardOffer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StandardOffer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StandardOffer
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.StandardOffer;

                    /**
                     * Creates a plain object from a StandardOffer message. Also converts values to other types if specified.
                     * @param message StandardOffer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.commerceproducer.v1beta.StandardOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StandardOffer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StandardOffer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace StandardOffer {

                    /** Properties of a PriceModel. */
                    interface IPriceModel {

                        /** PriceModel flatFee */
                        flatFee?: (google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.IFlatFeeSubscription|null);

                        /** PriceModel usage */
                        usage?: (google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.IUsage|null);
                    }

                    /** Represents a PriceModel. */
                    class PriceModel implements IPriceModel {

                        /**
                         * Constructs a new PriceModel.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.commerceproducer.v1beta.StandardOffer.IPriceModel);

                        /** PriceModel flatFee. */
                        public flatFee?: (google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.IFlatFeeSubscription|null);

                        /** PriceModel usage. */
                        public usage?: (google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.IUsage|null);

                        /** PriceModel subscription. */
                        public subscription?: "flatFee";

                        /**
                         * Creates a new PriceModel instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PriceModel instance
                         */
                        public static create(properties?: google.cloud.commerceproducer.v1beta.StandardOffer.IPriceModel): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel;

                        /**
                         * Encodes the specified PriceModel message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.verify|verify} messages.
                         * @param message PriceModel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.commerceproducer.v1beta.StandardOffer.IPriceModel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PriceModel message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.verify|verify} messages.
                         * @param message PriceModel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.StandardOffer.IPriceModel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PriceModel message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PriceModel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel;

                        /**
                         * Decodes a PriceModel message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PriceModel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel;

                        /**
                         * Verifies a PriceModel message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PriceModel message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PriceModel
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel;

                        /**
                         * Creates a plain object from a PriceModel message. Also converts values to other types if specified.
                         * @param message PriceModel
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PriceModel to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PriceModel
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace PriceModel {

                        /** Properties of a SkuList. */
                        interface ISkuList {

                            /** SkuList skus */
                            skus?: (string[]|null);
                        }

                        /** Represents a SkuList. */
                        class SkuList implements ISkuList {

                            /**
                             * Constructs a new SkuList.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.ISkuList);

                            /** SkuList skus. */
                            public skus: string[];

                            /**
                             * Creates a new SkuList instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SkuList instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.ISkuList): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuList;

                            /**
                             * Encodes the specified SkuList message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuList.verify|verify} messages.
                             * @param message SkuList message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.ISkuList, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SkuList message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuList.verify|verify} messages.
                             * @param message SkuList message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.ISkuList, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SkuList message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SkuList
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuList;

                            /**
                             * Decodes a SkuList message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SkuList
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuList;

                            /**
                             * Verifies a SkuList message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SkuList message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SkuList
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuList;

                            /**
                             * Creates a plain object from a SkuList message. Also converts values to other types if specified.
                             * @param message SkuList
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SkuList to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SkuList
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a SkuGroupList. */
                        interface ISkuGroupList {

                            /** SkuGroupList skuGroups */
                            skuGroups?: (string[]|null);
                        }

                        /** Represents a SkuGroupList. */
                        class SkuGroupList implements ISkuGroupList {

                            /**
                             * Constructs a new SkuGroupList.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.ISkuGroupList);

                            /** SkuGroupList skuGroups. */
                            public skuGroups: string[];

                            /**
                             * Creates a new SkuGroupList instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SkuGroupList instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.ISkuGroupList): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuGroupList;

                            /**
                             * Encodes the specified SkuGroupList message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuGroupList.verify|verify} messages.
                             * @param message SkuGroupList message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.ISkuGroupList, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SkuGroupList message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuGroupList.verify|verify} messages.
                             * @param message SkuGroupList message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.ISkuGroupList, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SkuGroupList message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SkuGroupList
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuGroupList;

                            /**
                             * Decodes a SkuGroupList message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SkuGroupList
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuGroupList;

                            /**
                             * Verifies a SkuGroupList message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SkuGroupList message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SkuGroupList
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuGroupList;

                            /**
                             * Creates a plain object from a SkuGroupList message. Also converts values to other types if specified.
                             * @param message SkuGroupList
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.SkuGroupList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SkuGroupList to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SkuGroupList
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Usage. */
                        interface IUsage {

                            /** Usage skuList */
                            skuList?: (google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.ISkuList|null);

                            /** Usage skuGroupList */
                            skuGroupList?: (google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.ISkuGroupList|null);
                        }

                        /** Represents a Usage. */
                        class Usage implements IUsage {

                            /**
                             * Constructs a new Usage.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.IUsage);

                            /** Usage skuList. */
                            public skuList?: (google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.ISkuList|null);

                            /** Usage skuGroupList. */
                            public skuGroupList?: (google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.ISkuGroupList|null);

                            /** Usage skus. */
                            public skus?: ("skuList"|"skuGroupList");

                            /**
                             * Creates a new Usage instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Usage instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.IUsage): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.Usage;

                            /**
                             * Encodes the specified Usage message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.Usage.verify|verify} messages.
                             * @param message Usage message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.IUsage, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Usage message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.Usage.verify|verify} messages.
                             * @param message Usage message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.IUsage, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Usage message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Usage
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.Usage;

                            /**
                             * Decodes a Usage message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Usage
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.Usage;

                            /**
                             * Verifies a Usage message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Usage message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Usage
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.Usage;

                            /**
                             * Creates a plain object from a Usage message. Also converts values to other types if specified.
                             * @param message Usage
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.Usage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Usage to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Usage
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a FlatFeeSubscription. */
                        interface IFlatFeeSubscription {

                            /** FlatFeeSubscription sku */
                            sku?: (string|null);
                        }

                        /** Represents a FlatFeeSubscription. */
                        class FlatFeeSubscription implements IFlatFeeSubscription {

                            /**
                             * Constructs a new FlatFeeSubscription.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.IFlatFeeSubscription);

                            /** FlatFeeSubscription sku. */
                            public sku: string;

                            /**
                             * Creates a new FlatFeeSubscription instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns FlatFeeSubscription instance
                             */
                            public static create(properties?: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.IFlatFeeSubscription): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.FlatFeeSubscription;

                            /**
                             * Encodes the specified FlatFeeSubscription message. Does not implicitly {@link google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.FlatFeeSubscription.verify|verify} messages.
                             * @param message FlatFeeSubscription message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.IFlatFeeSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified FlatFeeSubscription message, length delimited. Does not implicitly {@link google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.FlatFeeSubscription.verify|verify} messages.
                             * @param message FlatFeeSubscription message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.IFlatFeeSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a FlatFeeSubscription message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns FlatFeeSubscription
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.FlatFeeSubscription;

                            /**
                             * Decodes a FlatFeeSubscription message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns FlatFeeSubscription
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.FlatFeeSubscription;

                            /**
                             * Verifies a FlatFeeSubscription message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a FlatFeeSubscription message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns FlatFeeSubscription
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.FlatFeeSubscription;

                            /**
                             * Creates a plain object from a FlatFeeSubscription message. Also converts values to other types if specified.
                             * @param message FlatFeeSubscription
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerceproducer.v1beta.StandardOffer.PriceModel.FlatFeeSubscription, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this FlatFeeSubscription to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for FlatFeeSubscription
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
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

            /** CommonLanguageSettings selectiveGapicGeneration */
            selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);
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

            /** CommonLanguageSettings selectiveGapicGeneration. */
            public selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);

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

            /** PhpSettings libraryPackage */
            libraryPackage?: (string|null);
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

            /** PhpSettings libraryPackage. */
            public libraryPackage: string;

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

            /** PythonSettings experimentalFeatures */
            experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);
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

            /** PythonSettings experimentalFeatures. */
            public experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);

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

        namespace PythonSettings {

            /** Properties of an ExperimentalFeatures. */
            interface IExperimentalFeatures {

                /** ExperimentalFeatures restAsyncIoEnabled */
                restAsyncIoEnabled?: (boolean|null);

                /** ExperimentalFeatures protobufPythonicTypesEnabled */
                protobufPythonicTypesEnabled?: (boolean|null);

                /** ExperimentalFeatures unversionedPackageDisabled */
                unversionedPackageDisabled?: (boolean|null);
            }

            /** Represents an ExperimentalFeatures. */
            class ExperimentalFeatures implements IExperimentalFeatures {

                /**
                 * Constructs a new ExperimentalFeatures.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.PythonSettings.IExperimentalFeatures);

                /** ExperimentalFeatures restAsyncIoEnabled. */
                public restAsyncIoEnabled: boolean;

                /** ExperimentalFeatures protobufPythonicTypesEnabled. */
                public protobufPythonicTypesEnabled: boolean;

                /** ExperimentalFeatures unversionedPackageDisabled. */
                public unversionedPackageDisabled: boolean;

                /**
                 * Creates a new ExperimentalFeatures instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExperimentalFeatures instance
                 */
                public static create(properties?: google.api.PythonSettings.IExperimentalFeatures): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Encodes the specified ExperimentalFeatures message. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExperimentalFeatures message, length delimited. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Verifies an ExperimentalFeatures message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExperimentalFeatures message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExperimentalFeatures
                 */
                public static fromObject(object: { [k: string]: any }): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Creates a plain object from an ExperimentalFeatures message. Also converts values to other types if specified.
                 * @param message ExperimentalFeatures
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.PythonSettings.ExperimentalFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExperimentalFeatures to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExperimentalFeatures
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
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

            /** GoSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);
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

            /** GoSettings renamedServices. */
            public renamedServices: { [k: string]: string };

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

            /** MethodSettings batching */
            batching?: (google.api.IBatchingConfigProto|null);
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

            /** MethodSettings batching. */
            public batching?: (google.api.IBatchingConfigProto|null);

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

        /** Properties of a SelectiveGapicGeneration. */
        interface ISelectiveGapicGeneration {

            /** SelectiveGapicGeneration methods */
            methods?: (string[]|null);

            /** SelectiveGapicGeneration generateOmittedAsInternal */
            generateOmittedAsInternal?: (boolean|null);
        }

        /** Represents a SelectiveGapicGeneration. */
        class SelectiveGapicGeneration implements ISelectiveGapicGeneration {

            /**
             * Constructs a new SelectiveGapicGeneration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ISelectiveGapicGeneration);

            /** SelectiveGapicGeneration methods. */
            public methods: string[];

            /** SelectiveGapicGeneration generateOmittedAsInternal. */
            public generateOmittedAsInternal: boolean;

            /**
             * Creates a new SelectiveGapicGeneration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SelectiveGapicGeneration instance
             */
            public static create(properties?: google.api.ISelectiveGapicGeneration): google.api.SelectiveGapicGeneration;

            /**
             * Encodes the specified SelectiveGapicGeneration message. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SelectiveGapicGeneration message, length delimited. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.SelectiveGapicGeneration;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.SelectiveGapicGeneration;

            /**
             * Verifies a SelectiveGapicGeneration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SelectiveGapicGeneration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SelectiveGapicGeneration
             */
            public static fromObject(object: { [k: string]: any }): google.api.SelectiveGapicGeneration;

            /**
             * Creates a plain object from a SelectiveGapicGeneration message. Also converts values to other types if specified.
             * @param message SelectiveGapicGeneration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.SelectiveGapicGeneration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SelectiveGapicGeneration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SelectiveGapicGeneration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BatchingConfigProto. */
        interface IBatchingConfigProto {

            /** BatchingConfigProto thresholds */
            thresholds?: (google.api.IBatchingSettingsProto|null);

            /** BatchingConfigProto batchDescriptor */
            batchDescriptor?: (google.api.IBatchingDescriptorProto|null);
        }

        /** Represents a BatchingConfigProto. */
        class BatchingConfigProto implements IBatchingConfigProto {

            /**
             * Constructs a new BatchingConfigProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IBatchingConfigProto);

            /** BatchingConfigProto thresholds. */
            public thresholds?: (google.api.IBatchingSettingsProto|null);

            /** BatchingConfigProto batchDescriptor. */
            public batchDescriptor?: (google.api.IBatchingDescriptorProto|null);

            /**
             * Creates a new BatchingConfigProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchingConfigProto instance
             */
            public static create(properties?: google.api.IBatchingConfigProto): google.api.BatchingConfigProto;

            /**
             * Encodes the specified BatchingConfigProto message. Does not implicitly {@link google.api.BatchingConfigProto.verify|verify} messages.
             * @param message BatchingConfigProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IBatchingConfigProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchingConfigProto message, length delimited. Does not implicitly {@link google.api.BatchingConfigProto.verify|verify} messages.
             * @param message BatchingConfigProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IBatchingConfigProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchingConfigProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchingConfigProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.BatchingConfigProto;

            /**
             * Decodes a BatchingConfigProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchingConfigProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.BatchingConfigProto;

            /**
             * Verifies a BatchingConfigProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchingConfigProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchingConfigProto
             */
            public static fromObject(object: { [k: string]: any }): google.api.BatchingConfigProto;

            /**
             * Creates a plain object from a BatchingConfigProto message. Also converts values to other types if specified.
             * @param message BatchingConfigProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.BatchingConfigProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchingConfigProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BatchingConfigProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BatchingSettingsProto. */
        interface IBatchingSettingsProto {

            /** BatchingSettingsProto elementCountThreshold */
            elementCountThreshold?: (number|null);

            /** BatchingSettingsProto requestByteThreshold */
            requestByteThreshold?: (number|Long|string|null);

            /** BatchingSettingsProto delayThreshold */
            delayThreshold?: (google.protobuf.IDuration|null);

            /** BatchingSettingsProto elementCountLimit */
            elementCountLimit?: (number|null);

            /** BatchingSettingsProto requestByteLimit */
            requestByteLimit?: (number|null);

            /** BatchingSettingsProto flowControlElementLimit */
            flowControlElementLimit?: (number|null);

            /** BatchingSettingsProto flowControlByteLimit */
            flowControlByteLimit?: (number|null);

            /** BatchingSettingsProto flowControlLimitExceededBehavior */
            flowControlLimitExceededBehavior?: (google.api.FlowControlLimitExceededBehaviorProto|keyof typeof google.api.FlowControlLimitExceededBehaviorProto|null);
        }

        /** Represents a BatchingSettingsProto. */
        class BatchingSettingsProto implements IBatchingSettingsProto {

            /**
             * Constructs a new BatchingSettingsProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IBatchingSettingsProto);

            /** BatchingSettingsProto elementCountThreshold. */
            public elementCountThreshold: number;

            /** BatchingSettingsProto requestByteThreshold. */
            public requestByteThreshold: (number|Long|string);

            /** BatchingSettingsProto delayThreshold. */
            public delayThreshold?: (google.protobuf.IDuration|null);

            /** BatchingSettingsProto elementCountLimit. */
            public elementCountLimit: number;

            /** BatchingSettingsProto requestByteLimit. */
            public requestByteLimit: number;

            /** BatchingSettingsProto flowControlElementLimit. */
            public flowControlElementLimit: number;

            /** BatchingSettingsProto flowControlByteLimit. */
            public flowControlByteLimit: number;

            /** BatchingSettingsProto flowControlLimitExceededBehavior. */
            public flowControlLimitExceededBehavior: (google.api.FlowControlLimitExceededBehaviorProto|keyof typeof google.api.FlowControlLimitExceededBehaviorProto);

            /**
             * Creates a new BatchingSettingsProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchingSettingsProto instance
             */
            public static create(properties?: google.api.IBatchingSettingsProto): google.api.BatchingSettingsProto;

            /**
             * Encodes the specified BatchingSettingsProto message. Does not implicitly {@link google.api.BatchingSettingsProto.verify|verify} messages.
             * @param message BatchingSettingsProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IBatchingSettingsProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchingSettingsProto message, length delimited. Does not implicitly {@link google.api.BatchingSettingsProto.verify|verify} messages.
             * @param message BatchingSettingsProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IBatchingSettingsProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchingSettingsProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchingSettingsProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.BatchingSettingsProto;

            /**
             * Decodes a BatchingSettingsProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchingSettingsProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.BatchingSettingsProto;

            /**
             * Verifies a BatchingSettingsProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchingSettingsProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchingSettingsProto
             */
            public static fromObject(object: { [k: string]: any }): google.api.BatchingSettingsProto;

            /**
             * Creates a plain object from a BatchingSettingsProto message. Also converts values to other types if specified.
             * @param message BatchingSettingsProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.BatchingSettingsProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchingSettingsProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BatchingSettingsProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** FlowControlLimitExceededBehaviorProto enum. */
        enum FlowControlLimitExceededBehaviorProto {
            UNSET_BEHAVIOR = 0,
            THROW_EXCEPTION = 1,
            BLOCK = 2,
            IGNORE = 3
        }

        /** Properties of a BatchingDescriptorProto. */
        interface IBatchingDescriptorProto {

            /** BatchingDescriptorProto batchedField */
            batchedField?: (string|null);

            /** BatchingDescriptorProto discriminatorFields */
            discriminatorFields?: (string[]|null);

            /** BatchingDescriptorProto subresponseField */
            subresponseField?: (string|null);
        }

        /** Represents a BatchingDescriptorProto. */
        class BatchingDescriptorProto implements IBatchingDescriptorProto {

            /**
             * Constructs a new BatchingDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IBatchingDescriptorProto);

            /** BatchingDescriptorProto batchedField. */
            public batchedField: string;

            /** BatchingDescriptorProto discriminatorFields. */
            public discriminatorFields: string[];

            /** BatchingDescriptorProto subresponseField. */
            public subresponseField: string;

            /**
             * Creates a new BatchingDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchingDescriptorProto instance
             */
            public static create(properties?: google.api.IBatchingDescriptorProto): google.api.BatchingDescriptorProto;

            /**
             * Encodes the specified BatchingDescriptorProto message. Does not implicitly {@link google.api.BatchingDescriptorProto.verify|verify} messages.
             * @param message BatchingDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IBatchingDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchingDescriptorProto message, length delimited. Does not implicitly {@link google.api.BatchingDescriptorProto.verify|verify} messages.
             * @param message BatchingDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IBatchingDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchingDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchingDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.BatchingDescriptorProto;

            /**
             * Decodes a BatchingDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchingDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.BatchingDescriptorProto;

            /**
             * Verifies a BatchingDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchingDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchingDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.api.BatchingDescriptorProto;

            /**
             * Creates a plain object from a BatchingDescriptorProto message. Also converts values to other types if specified.
             * @param message BatchingDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.BatchingDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchingDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BatchingDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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
            EDITION_LEGACY = 900,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_2026 = 1002,
            EDITION_UNSTABLE = 9999,
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

            /** FileDescriptorProto optionDependency */
            optionDependency?: (string[]|null);

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

            /** FileDescriptorProto optionDependency. */
            public optionDependency: string[];

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

            /** DescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
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

            /** DescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

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

            /** EnumDescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
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

            /** EnumDescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

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

            /** FieldOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** FieldOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** Properties of a FeatureSupport. */
            interface IFeatureSupport {

                /** FeatureSupport editionIntroduced */
                editionIntroduced?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport editionDeprecated */
                editionDeprecated?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport deprecationWarning */
                deprecationWarning?: (string|null);

                /** FeatureSupport editionRemoved */
                editionRemoved?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport removalError */
                removalError?: (string|null);
            }

            /** Represents a FeatureSupport. */
            class FeatureSupport implements IFeatureSupport {

                /**
                 * Constructs a new FeatureSupport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IFeatureSupport);

                /** FeatureSupport editionIntroduced. */
                public editionIntroduced: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport editionDeprecated. */
                public editionDeprecated: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport deprecationWarning. */
                public deprecationWarning: string;

                /** FeatureSupport editionRemoved. */
                public editionRemoved: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport removalError. */
                public removalError: string;

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSupport instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IFeatureSupport): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Verifies a FeatureSupport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSupport
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @param message FeatureSupport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.FeatureSupport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSupport
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

            /** EnumValueOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** EnumValueOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** FeatureSet enforceNamingStyle */
            enforceNamingStyle?: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle|null);

            /** FeatureSet defaultSymbolVisibility */
            defaultSymbolVisibility?: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|null);

            /** FeatureSet enforceProtoLimits */
            enforceProtoLimits?: (google.protobuf.FeatureSet.ProtoLimitsFeature.EnforceProtoLimits|keyof typeof google.protobuf.FeatureSet.ProtoLimitsFeature.EnforceProtoLimits|null);
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

            /** FeatureSet enforceNamingStyle. */
            public enforceNamingStyle: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle);

            /** FeatureSet defaultSymbolVisibility. */
            public defaultSymbolVisibility: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility);

            /** FeatureSet enforceProtoLimits. */
            public enforceProtoLimits: (google.protobuf.FeatureSet.ProtoLimitsFeature.EnforceProtoLimits|keyof typeof google.protobuf.FeatureSet.ProtoLimitsFeature.EnforceProtoLimits);

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

            /** EnforceNamingStyle enum. */
            enum EnforceNamingStyle {
                ENFORCE_NAMING_STYLE_UNKNOWN = 0,
                STYLE2024 = 1,
                STYLE_LEGACY = 2,
                STYLE2026 = 3
            }

            /** Properties of a VisibilityFeature. */
            interface IVisibilityFeature {
            }

            /** Represents a VisibilityFeature. */
            class VisibilityFeature implements IVisibilityFeature {

                /**
                 * Constructs a new VisibilityFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.IVisibilityFeature);

                /**
                 * Creates a new VisibilityFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VisibilityFeature instance
                 */
                public static create(properties?: google.protobuf.FeatureSet.IVisibilityFeature): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Encodes the specified VisibilityFeature message. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VisibilityFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Verifies a VisibilityFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VisibilityFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VisibilityFeature
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Creates a plain object from a VisibilityFeature message. Also converts values to other types if specified.
                 * @param message VisibilityFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSet.VisibilityFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VisibilityFeature to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VisibilityFeature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VisibilityFeature {

                /** DefaultSymbolVisibility enum. */
                enum DefaultSymbolVisibility {
                    DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0,
                    EXPORT_ALL = 1,
                    EXPORT_TOP_LEVEL = 2,
                    LOCAL_ALL = 3,
                    STRICT = 4
                }
            }

            /** Properties of a ProtoLimitsFeature. */
            interface IProtoLimitsFeature {
            }

            /** Represents a ProtoLimitsFeature. */
            class ProtoLimitsFeature implements IProtoLimitsFeature {

                /**
                 * Constructs a new ProtoLimitsFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.IProtoLimitsFeature);

                /**
                 * Creates a new ProtoLimitsFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProtoLimitsFeature instance
                 */
                public static create(properties?: google.protobuf.FeatureSet.IProtoLimitsFeature): google.protobuf.FeatureSet.ProtoLimitsFeature;

                /**
                 * Encodes the specified ProtoLimitsFeature message. Does not implicitly {@link google.protobuf.FeatureSet.ProtoLimitsFeature.verify|verify} messages.
                 * @param message ProtoLimitsFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSet.IProtoLimitsFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProtoLimitsFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.ProtoLimitsFeature.verify|verify} messages.
                 * @param message ProtoLimitsFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSet.IProtoLimitsFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProtoLimitsFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProtoLimitsFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.ProtoLimitsFeature;

                /**
                 * Decodes a ProtoLimitsFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProtoLimitsFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet.ProtoLimitsFeature;

                /**
                 * Verifies a ProtoLimitsFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProtoLimitsFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProtoLimitsFeature
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.ProtoLimitsFeature;

                /**
                 * Creates a plain object from a ProtoLimitsFeature message. Also converts values to other types if specified.
                 * @param message ProtoLimitsFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSet.ProtoLimitsFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProtoLimitsFeature to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ProtoLimitsFeature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ProtoLimitsFeature {

                /** EnforceProtoLimits enum. */
                enum EnforceProtoLimits {
                    PROTO_LIMITS_UNKNOWN = 0,
                    LEGACY_NO_EXPLICIT_LIMITS = 1,
                    PROTO_LIMITS2026 = 2
                }
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

                /** FeatureSetEditionDefault overridableFeatures */
                overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures */
                fixedFeatures?: (google.protobuf.IFeatureSet|null);
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

                /** FeatureSetEditionDefault overridableFeatures. */
                public overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures. */
                public fixedFeatures?: (google.protobuf.IFeatureSet|null);

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

        /** SymbolVisibility enum. */
        enum SymbolVisibility {
            VISIBILITY_UNSET = 0,
            VISIBILITY_LOCAL = 1,
            VISIBILITY_EXPORT = 2
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

        /** Properties of a Decimal. */
        interface IDecimal {

            /** Decimal value */
            value?: (string|null);
        }

        /** Represents a Decimal. */
        class Decimal implements IDecimal {

            /**
             * Constructs a new Decimal.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDecimal);

            /** Decimal value. */
            public value: string;

            /**
             * Creates a new Decimal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Decimal instance
             */
            public static create(properties?: google.type.IDecimal): google.type.Decimal;

            /**
             * Encodes the specified Decimal message. Does not implicitly {@link google.type.Decimal.verify|verify} messages.
             * @param message Decimal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDecimal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Decimal message, length delimited. Does not implicitly {@link google.type.Decimal.verify|verify} messages.
             * @param message Decimal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDecimal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Decimal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Decimal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Decimal;

            /**
             * Decodes a Decimal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Decimal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Decimal;

            /**
             * Verifies a Decimal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Decimal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Decimal
             */
            public static fromObject(object: { [k: string]: any }): google.type.Decimal;

            /**
             * Creates a plain object from a Decimal message. Also converts values to other types if specified.
             * @param message Decimal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Decimal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Decimal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Decimal
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

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

            /**
             * Gets the default type url for Money
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
