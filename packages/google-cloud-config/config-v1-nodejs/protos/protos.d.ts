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

        /** Namespace config. */
        namespace config {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a Config */
                class Config extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Config service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Config service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Config;

                    /**
                     * Calls ListDeployments.
                     * @param request ListDeploymentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDeploymentsResponse
                     */
                    public listDeployments(request: google.cloud.config.v1.IListDeploymentsRequest, callback: google.cloud.config.v1.Config.ListDeploymentsCallback): void;

                    /**
                     * Calls ListDeployments.
                     * @param request ListDeploymentsRequest message or plain object
                     * @returns Promise
                     */
                    public listDeployments(request: google.cloud.config.v1.IListDeploymentsRequest): Promise<google.cloud.config.v1.ListDeploymentsResponse>;

                    /**
                     * Calls GetDeployment.
                     * @param request GetDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Deployment
                     */
                    public getDeployment(request: google.cloud.config.v1.IGetDeploymentRequest, callback: google.cloud.config.v1.Config.GetDeploymentCallback): void;

                    /**
                     * Calls GetDeployment.
                     * @param request GetDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public getDeployment(request: google.cloud.config.v1.IGetDeploymentRequest): Promise<google.cloud.config.v1.Deployment>;

                    /**
                     * Calls CreateDeployment.
                     * @param request CreateDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createDeployment(request: google.cloud.config.v1.ICreateDeploymentRequest, callback: google.cloud.config.v1.Config.CreateDeploymentCallback): void;

                    /**
                     * Calls CreateDeployment.
                     * @param request CreateDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public createDeployment(request: google.cloud.config.v1.ICreateDeploymentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateDeployment.
                     * @param request UpdateDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateDeployment(request: google.cloud.config.v1.IUpdateDeploymentRequest, callback: google.cloud.config.v1.Config.UpdateDeploymentCallback): void;

                    /**
                     * Calls UpdateDeployment.
                     * @param request UpdateDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public updateDeployment(request: google.cloud.config.v1.IUpdateDeploymentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteDeployment.
                     * @param request DeleteDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteDeployment(request: google.cloud.config.v1.IDeleteDeploymentRequest, callback: google.cloud.config.v1.Config.DeleteDeploymentCallback): void;

                    /**
                     * Calls DeleteDeployment.
                     * @param request DeleteDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public deleteDeployment(request: google.cloud.config.v1.IDeleteDeploymentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListRevisions.
                     * @param request ListRevisionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRevisionsResponse
                     */
                    public listRevisions(request: google.cloud.config.v1.IListRevisionsRequest, callback: google.cloud.config.v1.Config.ListRevisionsCallback): void;

                    /**
                     * Calls ListRevisions.
                     * @param request ListRevisionsRequest message or plain object
                     * @returns Promise
                     */
                    public listRevisions(request: google.cloud.config.v1.IListRevisionsRequest): Promise<google.cloud.config.v1.ListRevisionsResponse>;

                    /**
                     * Calls GetRevision.
                     * @param request GetRevisionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Revision
                     */
                    public getRevision(request: google.cloud.config.v1.IGetRevisionRequest, callback: google.cloud.config.v1.Config.GetRevisionCallback): void;

                    /**
                     * Calls GetRevision.
                     * @param request GetRevisionRequest message or plain object
                     * @returns Promise
                     */
                    public getRevision(request: google.cloud.config.v1.IGetRevisionRequest): Promise<google.cloud.config.v1.Revision>;

                    /**
                     * Calls GetResource.
                     * @param request GetResourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Resource
                     */
                    public getResource(request: google.cloud.config.v1.IGetResourceRequest, callback: google.cloud.config.v1.Config.GetResourceCallback): void;

                    /**
                     * Calls GetResource.
                     * @param request GetResourceRequest message or plain object
                     * @returns Promise
                     */
                    public getResource(request: google.cloud.config.v1.IGetResourceRequest): Promise<google.cloud.config.v1.Resource>;

                    /**
                     * Calls ListResources.
                     * @param request ListResourcesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListResourcesResponse
                     */
                    public listResources(request: google.cloud.config.v1.IListResourcesRequest, callback: google.cloud.config.v1.Config.ListResourcesCallback): void;

                    /**
                     * Calls ListResources.
                     * @param request ListResourcesRequest message or plain object
                     * @returns Promise
                     */
                    public listResources(request: google.cloud.config.v1.IListResourcesRequest): Promise<google.cloud.config.v1.ListResourcesResponse>;

                    /**
                     * Calls ExportDeploymentStatefile.
                     * @param request ExportDeploymentStatefileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Statefile
                     */
                    public exportDeploymentStatefile(request: google.cloud.config.v1.IExportDeploymentStatefileRequest, callback: google.cloud.config.v1.Config.ExportDeploymentStatefileCallback): void;

                    /**
                     * Calls ExportDeploymentStatefile.
                     * @param request ExportDeploymentStatefileRequest message or plain object
                     * @returns Promise
                     */
                    public exportDeploymentStatefile(request: google.cloud.config.v1.IExportDeploymentStatefileRequest): Promise<google.cloud.config.v1.Statefile>;

                    /**
                     * Calls ExportRevisionStatefile.
                     * @param request ExportRevisionStatefileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Statefile
                     */
                    public exportRevisionStatefile(request: google.cloud.config.v1.IExportRevisionStatefileRequest, callback: google.cloud.config.v1.Config.ExportRevisionStatefileCallback): void;

                    /**
                     * Calls ExportRevisionStatefile.
                     * @param request ExportRevisionStatefileRequest message or plain object
                     * @returns Promise
                     */
                    public exportRevisionStatefile(request: google.cloud.config.v1.IExportRevisionStatefileRequest): Promise<google.cloud.config.v1.Statefile>;

                    /**
                     * Calls ImportStatefile.
                     * @param request ImportStatefileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Statefile
                     */
                    public importStatefile(request: google.cloud.config.v1.IImportStatefileRequest, callback: google.cloud.config.v1.Config.ImportStatefileCallback): void;

                    /**
                     * Calls ImportStatefile.
                     * @param request ImportStatefileRequest message or plain object
                     * @returns Promise
                     */
                    public importStatefile(request: google.cloud.config.v1.IImportStatefileRequest): Promise<google.cloud.config.v1.Statefile>;

                    /**
                     * Calls DeleteStatefile.
                     * @param request DeleteStatefileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteStatefile(request: google.cloud.config.v1.IDeleteStatefileRequest, callback: google.cloud.config.v1.Config.DeleteStatefileCallback): void;

                    /**
                     * Calls DeleteStatefile.
                     * @param request DeleteStatefileRequest message or plain object
                     * @returns Promise
                     */
                    public deleteStatefile(request: google.cloud.config.v1.IDeleteStatefileRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls LockDeployment.
                     * @param request LockDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public lockDeployment(request: google.cloud.config.v1.ILockDeploymentRequest, callback: google.cloud.config.v1.Config.LockDeploymentCallback): void;

                    /**
                     * Calls LockDeployment.
                     * @param request LockDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public lockDeployment(request: google.cloud.config.v1.ILockDeploymentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UnlockDeployment.
                     * @param request UnlockDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public unlockDeployment(request: google.cloud.config.v1.IUnlockDeploymentRequest, callback: google.cloud.config.v1.Config.UnlockDeploymentCallback): void;

                    /**
                     * Calls UnlockDeployment.
                     * @param request UnlockDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public unlockDeployment(request: google.cloud.config.v1.IUnlockDeploymentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportLockInfo.
                     * @param request ExportLockInfoRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and LockInfo
                     */
                    public exportLockInfo(request: google.cloud.config.v1.IExportLockInfoRequest, callback: google.cloud.config.v1.Config.ExportLockInfoCallback): void;

                    /**
                     * Calls ExportLockInfo.
                     * @param request ExportLockInfoRequest message or plain object
                     * @returns Promise
                     */
                    public exportLockInfo(request: google.cloud.config.v1.IExportLockInfoRequest): Promise<google.cloud.config.v1.LockInfo>;

                    /**
                     * Calls CreatePreview.
                     * @param request CreatePreviewRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createPreview(request: google.cloud.config.v1.ICreatePreviewRequest, callback: google.cloud.config.v1.Config.CreatePreviewCallback): void;

                    /**
                     * Calls CreatePreview.
                     * @param request CreatePreviewRequest message or plain object
                     * @returns Promise
                     */
                    public createPreview(request: google.cloud.config.v1.ICreatePreviewRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetPreview.
                     * @param request GetPreviewRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Preview
                     */
                    public getPreview(request: google.cloud.config.v1.IGetPreviewRequest, callback: google.cloud.config.v1.Config.GetPreviewCallback): void;

                    /**
                     * Calls GetPreview.
                     * @param request GetPreviewRequest message or plain object
                     * @returns Promise
                     */
                    public getPreview(request: google.cloud.config.v1.IGetPreviewRequest): Promise<google.cloud.config.v1.Preview>;

                    /**
                     * Calls ListPreviews.
                     * @param request ListPreviewsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPreviewsResponse
                     */
                    public listPreviews(request: google.cloud.config.v1.IListPreviewsRequest, callback: google.cloud.config.v1.Config.ListPreviewsCallback): void;

                    /**
                     * Calls ListPreviews.
                     * @param request ListPreviewsRequest message or plain object
                     * @returns Promise
                     */
                    public listPreviews(request: google.cloud.config.v1.IListPreviewsRequest): Promise<google.cloud.config.v1.ListPreviewsResponse>;

                    /**
                     * Calls DeletePreview.
                     * @param request DeletePreviewRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deletePreview(request: google.cloud.config.v1.IDeletePreviewRequest, callback: google.cloud.config.v1.Config.DeletePreviewCallback): void;

                    /**
                     * Calls DeletePreview.
                     * @param request DeletePreviewRequest message or plain object
                     * @returns Promise
                     */
                    public deletePreview(request: google.cloud.config.v1.IDeletePreviewRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportPreviewResult.
                     * @param request ExportPreviewResultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ExportPreviewResultResponse
                     */
                    public exportPreviewResult(request: google.cloud.config.v1.IExportPreviewResultRequest, callback: google.cloud.config.v1.Config.ExportPreviewResultCallback): void;

                    /**
                     * Calls ExportPreviewResult.
                     * @param request ExportPreviewResultRequest message or plain object
                     * @returns Promise
                     */
                    public exportPreviewResult(request: google.cloud.config.v1.IExportPreviewResultRequest): Promise<google.cloud.config.v1.ExportPreviewResultResponse>;

                    /**
                     * Calls ListTerraformVersions.
                     * @param request ListTerraformVersionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTerraformVersionsResponse
                     */
                    public listTerraformVersions(request: google.cloud.config.v1.IListTerraformVersionsRequest, callback: google.cloud.config.v1.Config.ListTerraformVersionsCallback): void;

                    /**
                     * Calls ListTerraformVersions.
                     * @param request ListTerraformVersionsRequest message or plain object
                     * @returns Promise
                     */
                    public listTerraformVersions(request: google.cloud.config.v1.IListTerraformVersionsRequest): Promise<google.cloud.config.v1.ListTerraformVersionsResponse>;

                    /**
                     * Calls GetTerraformVersion.
                     * @param request GetTerraformVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TerraformVersion
                     */
                    public getTerraformVersion(request: google.cloud.config.v1.IGetTerraformVersionRequest, callback: google.cloud.config.v1.Config.GetTerraformVersionCallback): void;

                    /**
                     * Calls GetTerraformVersion.
                     * @param request GetTerraformVersionRequest message or plain object
                     * @returns Promise
                     */
                    public getTerraformVersion(request: google.cloud.config.v1.IGetTerraformVersionRequest): Promise<google.cloud.config.v1.TerraformVersion>;

                    /**
                     * Calls ListResourceChanges.
                     * @param request ListResourceChangesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListResourceChangesResponse
                     */
                    public listResourceChanges(request: google.cloud.config.v1.IListResourceChangesRequest, callback: google.cloud.config.v1.Config.ListResourceChangesCallback): void;

                    /**
                     * Calls ListResourceChanges.
                     * @param request ListResourceChangesRequest message or plain object
                     * @returns Promise
                     */
                    public listResourceChanges(request: google.cloud.config.v1.IListResourceChangesRequest): Promise<google.cloud.config.v1.ListResourceChangesResponse>;

                    /**
                     * Calls GetResourceChange.
                     * @param request GetResourceChangeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ResourceChange
                     */
                    public getResourceChange(request: google.cloud.config.v1.IGetResourceChangeRequest, callback: google.cloud.config.v1.Config.GetResourceChangeCallback): void;

                    /**
                     * Calls GetResourceChange.
                     * @param request GetResourceChangeRequest message or plain object
                     * @returns Promise
                     */
                    public getResourceChange(request: google.cloud.config.v1.IGetResourceChangeRequest): Promise<google.cloud.config.v1.ResourceChange>;

                    /**
                     * Calls ListResourceDrifts.
                     * @param request ListResourceDriftsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListResourceDriftsResponse
                     */
                    public listResourceDrifts(request: google.cloud.config.v1.IListResourceDriftsRequest, callback: google.cloud.config.v1.Config.ListResourceDriftsCallback): void;

                    /**
                     * Calls ListResourceDrifts.
                     * @param request ListResourceDriftsRequest message or plain object
                     * @returns Promise
                     */
                    public listResourceDrifts(request: google.cloud.config.v1.IListResourceDriftsRequest): Promise<google.cloud.config.v1.ListResourceDriftsResponse>;

                    /**
                     * Calls GetResourceDrift.
                     * @param request GetResourceDriftRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ResourceDrift
                     */
                    public getResourceDrift(request: google.cloud.config.v1.IGetResourceDriftRequest, callback: google.cloud.config.v1.Config.GetResourceDriftCallback): void;

                    /**
                     * Calls GetResourceDrift.
                     * @param request GetResourceDriftRequest message or plain object
                     * @returns Promise
                     */
                    public getResourceDrift(request: google.cloud.config.v1.IGetResourceDriftRequest): Promise<google.cloud.config.v1.ResourceDrift>;
                }

                namespace Config {

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|listDeployments}.
                     * @param error Error, if any
                     * @param [response] ListDeploymentsResponse
                     */
                    type ListDeploymentsCallback = (error: (Error|null), response?: google.cloud.config.v1.ListDeploymentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|getDeployment}.
                     * @param error Error, if any
                     * @param [response] Deployment
                     */
                    type GetDeploymentCallback = (error: (Error|null), response?: google.cloud.config.v1.Deployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|createDeployment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateDeploymentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|updateDeployment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateDeploymentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|deleteDeployment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteDeploymentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|listRevisions}.
                     * @param error Error, if any
                     * @param [response] ListRevisionsResponse
                     */
                    type ListRevisionsCallback = (error: (Error|null), response?: google.cloud.config.v1.ListRevisionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|getRevision}.
                     * @param error Error, if any
                     * @param [response] Revision
                     */
                    type GetRevisionCallback = (error: (Error|null), response?: google.cloud.config.v1.Revision) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|getResource}.
                     * @param error Error, if any
                     * @param [response] Resource
                     */
                    type GetResourceCallback = (error: (Error|null), response?: google.cloud.config.v1.Resource) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|listResources}.
                     * @param error Error, if any
                     * @param [response] ListResourcesResponse
                     */
                    type ListResourcesCallback = (error: (Error|null), response?: google.cloud.config.v1.ListResourcesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|exportDeploymentStatefile}.
                     * @param error Error, if any
                     * @param [response] Statefile
                     */
                    type ExportDeploymentStatefileCallback = (error: (Error|null), response?: google.cloud.config.v1.Statefile) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|exportRevisionStatefile}.
                     * @param error Error, if any
                     * @param [response] Statefile
                     */
                    type ExportRevisionStatefileCallback = (error: (Error|null), response?: google.cloud.config.v1.Statefile) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|importStatefile}.
                     * @param error Error, if any
                     * @param [response] Statefile
                     */
                    type ImportStatefileCallback = (error: (Error|null), response?: google.cloud.config.v1.Statefile) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|deleteStatefile}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteStatefileCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|lockDeployment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type LockDeploymentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|unlockDeployment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UnlockDeploymentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|exportLockInfo}.
                     * @param error Error, if any
                     * @param [response] LockInfo
                     */
                    type ExportLockInfoCallback = (error: (Error|null), response?: google.cloud.config.v1.LockInfo) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|createPreview}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreatePreviewCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|getPreview}.
                     * @param error Error, if any
                     * @param [response] Preview
                     */
                    type GetPreviewCallback = (error: (Error|null), response?: google.cloud.config.v1.Preview) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|listPreviews}.
                     * @param error Error, if any
                     * @param [response] ListPreviewsResponse
                     */
                    type ListPreviewsCallback = (error: (Error|null), response?: google.cloud.config.v1.ListPreviewsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|deletePreview}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeletePreviewCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|exportPreviewResult}.
                     * @param error Error, if any
                     * @param [response] ExportPreviewResultResponse
                     */
                    type ExportPreviewResultCallback = (error: (Error|null), response?: google.cloud.config.v1.ExportPreviewResultResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|listTerraformVersions}.
                     * @param error Error, if any
                     * @param [response] ListTerraformVersionsResponse
                     */
                    type ListTerraformVersionsCallback = (error: (Error|null), response?: google.cloud.config.v1.ListTerraformVersionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|getTerraformVersion}.
                     * @param error Error, if any
                     * @param [response] TerraformVersion
                     */
                    type GetTerraformVersionCallback = (error: (Error|null), response?: google.cloud.config.v1.TerraformVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|listResourceChanges}.
                     * @param error Error, if any
                     * @param [response] ListResourceChangesResponse
                     */
                    type ListResourceChangesCallback = (error: (Error|null), response?: google.cloud.config.v1.ListResourceChangesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|getResourceChange}.
                     * @param error Error, if any
                     * @param [response] ResourceChange
                     */
                    type GetResourceChangeCallback = (error: (Error|null), response?: google.cloud.config.v1.ResourceChange) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|listResourceDrifts}.
                     * @param error Error, if any
                     * @param [response] ListResourceDriftsResponse
                     */
                    type ListResourceDriftsCallback = (error: (Error|null), response?: google.cloud.config.v1.ListResourceDriftsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.config.v1.Config|getResourceDrift}.
                     * @param error Error, if any
                     * @param [response] ResourceDrift
                     */
                    type GetResourceDriftCallback = (error: (Error|null), response?: google.cloud.config.v1.ResourceDrift) => void;
                }

                /** QuotaValidation enum. */
                enum QuotaValidation {
                    QUOTA_VALIDATION_UNSPECIFIED = 0,
                    ENABLED = 1,
                    ENFORCED = 2
                }

                /** Properties of a Deployment. */
                interface IDeployment {

                    /** Deployment terraformBlueprint */
                    terraformBlueprint?: (google.cloud.config.v1.ITerraformBlueprint|null);

                    /** Deployment name */
                    name?: (string|null);

                    /** Deployment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Deployment updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Deployment labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Deployment state */
                    state?: (google.cloud.config.v1.Deployment.State|keyof typeof google.cloud.config.v1.Deployment.State|null);

                    /** Deployment latestRevision */
                    latestRevision?: (string|null);

                    /** Deployment stateDetail */
                    stateDetail?: (string|null);

                    /** Deployment errorCode */
                    errorCode?: (google.cloud.config.v1.Deployment.ErrorCode|keyof typeof google.cloud.config.v1.Deployment.ErrorCode|null);

                    /** Deployment deleteResults */
                    deleteResults?: (google.cloud.config.v1.IApplyResults|null);

                    /** Deployment deleteBuild */
                    deleteBuild?: (string|null);

                    /** Deployment deleteLogs */
                    deleteLogs?: (string|null);

                    /** Deployment tfErrors */
                    tfErrors?: (google.cloud.config.v1.ITerraformError[]|null);

                    /** Deployment errorLogs */
                    errorLogs?: (string|null);

                    /** Deployment artifactsGcsBucket */
                    artifactsGcsBucket?: (string|null);

                    /** Deployment serviceAccount */
                    serviceAccount?: (string|null);

                    /** Deployment importExistingResources */
                    importExistingResources?: (boolean|null);

                    /** Deployment workerPool */
                    workerPool?: (string|null);

                    /** Deployment lockState */
                    lockState?: (google.cloud.config.v1.Deployment.LockState|keyof typeof google.cloud.config.v1.Deployment.LockState|null);

                    /** Deployment tfVersionConstraint */
                    tfVersionConstraint?: (string|null);

                    /** Deployment tfVersion */
                    tfVersion?: (string|null);

                    /** Deployment quotaValidation */
                    quotaValidation?: (google.cloud.config.v1.QuotaValidation|keyof typeof google.cloud.config.v1.QuotaValidation|null);

                    /** Deployment annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** Deployment providerConfig */
                    providerConfig?: (google.cloud.config.v1.IProviderConfig|null);
                }

                /** Represents a Deployment. */
                class Deployment implements IDeployment {

                    /**
                     * Constructs a new Deployment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IDeployment);

                    /** Deployment terraformBlueprint. */
                    public terraformBlueprint?: (google.cloud.config.v1.ITerraformBlueprint|null);

                    /** Deployment name. */
                    public name: string;

                    /** Deployment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Deployment updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Deployment labels. */
                    public labels: { [k: string]: string };

                    /** Deployment state. */
                    public state: (google.cloud.config.v1.Deployment.State|keyof typeof google.cloud.config.v1.Deployment.State);

                    /** Deployment latestRevision. */
                    public latestRevision: string;

                    /** Deployment stateDetail. */
                    public stateDetail: string;

                    /** Deployment errorCode. */
                    public errorCode: (google.cloud.config.v1.Deployment.ErrorCode|keyof typeof google.cloud.config.v1.Deployment.ErrorCode);

                    /** Deployment deleteResults. */
                    public deleteResults?: (google.cloud.config.v1.IApplyResults|null);

                    /** Deployment deleteBuild. */
                    public deleteBuild: string;

                    /** Deployment deleteLogs. */
                    public deleteLogs: string;

                    /** Deployment tfErrors. */
                    public tfErrors: google.cloud.config.v1.ITerraformError[];

                    /** Deployment errorLogs. */
                    public errorLogs: string;

                    /** Deployment artifactsGcsBucket. */
                    public artifactsGcsBucket?: (string|null);

                    /** Deployment serviceAccount. */
                    public serviceAccount?: (string|null);

                    /** Deployment importExistingResources. */
                    public importExistingResources?: (boolean|null);

                    /** Deployment workerPool. */
                    public workerPool?: (string|null);

                    /** Deployment lockState. */
                    public lockState: (google.cloud.config.v1.Deployment.LockState|keyof typeof google.cloud.config.v1.Deployment.LockState);

                    /** Deployment tfVersionConstraint. */
                    public tfVersionConstraint?: (string|null);

                    /** Deployment tfVersion. */
                    public tfVersion: string;

                    /** Deployment quotaValidation. */
                    public quotaValidation: (google.cloud.config.v1.QuotaValidation|keyof typeof google.cloud.config.v1.QuotaValidation);

                    /** Deployment annotations. */
                    public annotations: { [k: string]: string };

                    /** Deployment providerConfig. */
                    public providerConfig?: (google.cloud.config.v1.IProviderConfig|null);

                    /** Deployment blueprint. */
                    public blueprint?: "terraformBlueprint";

                    /**
                     * Creates a new Deployment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Deployment instance
                     */
                    public static create(properties?: google.cloud.config.v1.IDeployment): google.cloud.config.v1.Deployment;

                    /**
                     * Encodes the specified Deployment message. Does not implicitly {@link google.cloud.config.v1.Deployment.verify|verify} messages.
                     * @param message Deployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Deployment message, length delimited. Does not implicitly {@link google.cloud.config.v1.Deployment.verify|verify} messages.
                     * @param message Deployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Deployment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Deployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.Deployment;

                    /**
                     * Decodes a Deployment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Deployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.Deployment;

                    /**
                     * Verifies a Deployment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Deployment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Deployment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.Deployment;

                    /**
                     * Creates a plain object from a Deployment message. Also converts values to other types if specified.
                     * @param message Deployment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.Deployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Deployment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Deployment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Deployment {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        UPDATING = 3,
                        DELETING = 4,
                        FAILED = 5,
                        SUSPENDED = 6,
                        DELETED = 7
                    }

                    /** ErrorCode enum. */
                    enum ErrorCode {
                        ERROR_CODE_UNSPECIFIED = 0,
                        REVISION_FAILED = 1,
                        CLOUD_BUILD_PERMISSION_DENIED = 3,
                        DELETE_BUILD_API_FAILED = 5,
                        DELETE_BUILD_RUN_FAILED = 6,
                        BUCKET_CREATION_PERMISSION_DENIED = 7,
                        BUCKET_CREATION_FAILED = 8
                    }

                    /** LockState enum. */
                    enum LockState {
                        LOCK_STATE_UNSPECIFIED = 0,
                        LOCKED = 1,
                        UNLOCKED = 2,
                        LOCKING = 3,
                        UNLOCKING = 4,
                        LOCK_FAILED = 5,
                        UNLOCK_FAILED = 6
                    }
                }

                /** Properties of a TerraformBlueprint. */
                interface ITerraformBlueprint {

                    /** TerraformBlueprint gcsSource */
                    gcsSource?: (string|null);

                    /** TerraformBlueprint gitSource */
                    gitSource?: (google.cloud.config.v1.IGitSource|null);

                    /** TerraformBlueprint inputValues */
                    inputValues?: ({ [k: string]: google.cloud.config.v1.ITerraformVariable }|null);
                }

                /** Represents a TerraformBlueprint. */
                class TerraformBlueprint implements ITerraformBlueprint {

                    /**
                     * Constructs a new TerraformBlueprint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.ITerraformBlueprint);

                    /** TerraformBlueprint gcsSource. */
                    public gcsSource?: (string|null);

                    /** TerraformBlueprint gitSource. */
                    public gitSource?: (google.cloud.config.v1.IGitSource|null);

                    /** TerraformBlueprint inputValues. */
                    public inputValues: { [k: string]: google.cloud.config.v1.ITerraformVariable };

                    /** TerraformBlueprint source. */
                    public source?: ("gcsSource"|"gitSource");

                    /**
                     * Creates a new TerraformBlueprint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TerraformBlueprint instance
                     */
                    public static create(properties?: google.cloud.config.v1.ITerraformBlueprint): google.cloud.config.v1.TerraformBlueprint;

                    /**
                     * Encodes the specified TerraformBlueprint message. Does not implicitly {@link google.cloud.config.v1.TerraformBlueprint.verify|verify} messages.
                     * @param message TerraformBlueprint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.ITerraformBlueprint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TerraformBlueprint message, length delimited. Does not implicitly {@link google.cloud.config.v1.TerraformBlueprint.verify|verify} messages.
                     * @param message TerraformBlueprint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.ITerraformBlueprint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TerraformBlueprint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TerraformBlueprint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.TerraformBlueprint;

                    /**
                     * Decodes a TerraformBlueprint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TerraformBlueprint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.TerraformBlueprint;

                    /**
                     * Verifies a TerraformBlueprint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TerraformBlueprint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TerraformBlueprint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.TerraformBlueprint;

                    /**
                     * Creates a plain object from a TerraformBlueprint message. Also converts values to other types if specified.
                     * @param message TerraformBlueprint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.TerraformBlueprint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TerraformBlueprint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TerraformBlueprint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TerraformVariable. */
                interface ITerraformVariable {

                    /** TerraformVariable inputValue */
                    inputValue?: (google.protobuf.IValue|null);
                }

                /** Represents a TerraformVariable. */
                class TerraformVariable implements ITerraformVariable {

                    /**
                     * Constructs a new TerraformVariable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.ITerraformVariable);

                    /** TerraformVariable inputValue. */
                    public inputValue?: (google.protobuf.IValue|null);

                    /**
                     * Creates a new TerraformVariable instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TerraformVariable instance
                     */
                    public static create(properties?: google.cloud.config.v1.ITerraformVariable): google.cloud.config.v1.TerraformVariable;

                    /**
                     * Encodes the specified TerraformVariable message. Does not implicitly {@link google.cloud.config.v1.TerraformVariable.verify|verify} messages.
                     * @param message TerraformVariable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.ITerraformVariable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TerraformVariable message, length delimited. Does not implicitly {@link google.cloud.config.v1.TerraformVariable.verify|verify} messages.
                     * @param message TerraformVariable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.ITerraformVariable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TerraformVariable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TerraformVariable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.TerraformVariable;

                    /**
                     * Decodes a TerraformVariable message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TerraformVariable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.TerraformVariable;

                    /**
                     * Verifies a TerraformVariable message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TerraformVariable message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TerraformVariable
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.TerraformVariable;

                    /**
                     * Creates a plain object from a TerraformVariable message. Also converts values to other types if specified.
                     * @param message TerraformVariable
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.TerraformVariable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TerraformVariable to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TerraformVariable
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ApplyResults. */
                interface IApplyResults {

                    /** ApplyResults content */
                    content?: (string|null);

                    /** ApplyResults artifacts */
                    artifacts?: (string|null);

                    /** ApplyResults outputs */
                    outputs?: ({ [k: string]: google.cloud.config.v1.ITerraformOutput }|null);
                }

                /** Represents an ApplyResults. */
                class ApplyResults implements IApplyResults {

                    /**
                     * Constructs a new ApplyResults.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IApplyResults);

                    /** ApplyResults content. */
                    public content: string;

                    /** ApplyResults artifacts. */
                    public artifacts: string;

                    /** ApplyResults outputs. */
                    public outputs: { [k: string]: google.cloud.config.v1.ITerraformOutput };

                    /**
                     * Creates a new ApplyResults instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApplyResults instance
                     */
                    public static create(properties?: google.cloud.config.v1.IApplyResults): google.cloud.config.v1.ApplyResults;

                    /**
                     * Encodes the specified ApplyResults message. Does not implicitly {@link google.cloud.config.v1.ApplyResults.verify|verify} messages.
                     * @param message ApplyResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IApplyResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApplyResults message, length delimited. Does not implicitly {@link google.cloud.config.v1.ApplyResults.verify|verify} messages.
                     * @param message ApplyResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IApplyResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApplyResults message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApplyResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ApplyResults;

                    /**
                     * Decodes an ApplyResults message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApplyResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ApplyResults;

                    /**
                     * Verifies an ApplyResults message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApplyResults message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApplyResults
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ApplyResults;

                    /**
                     * Creates a plain object from an ApplyResults message. Also converts values to other types if specified.
                     * @param message ApplyResults
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ApplyResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApplyResults to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ApplyResults
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TerraformOutput. */
                interface ITerraformOutput {

                    /** TerraformOutput sensitive */
                    sensitive?: (boolean|null);

                    /** TerraformOutput value */
                    value?: (google.protobuf.IValue|null);
                }

                /** Represents a TerraformOutput. */
                class TerraformOutput implements ITerraformOutput {

                    /**
                     * Constructs a new TerraformOutput.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.ITerraformOutput);

                    /** TerraformOutput sensitive. */
                    public sensitive: boolean;

                    /** TerraformOutput value. */
                    public value?: (google.protobuf.IValue|null);

                    /**
                     * Creates a new TerraformOutput instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TerraformOutput instance
                     */
                    public static create(properties?: google.cloud.config.v1.ITerraformOutput): google.cloud.config.v1.TerraformOutput;

                    /**
                     * Encodes the specified TerraformOutput message. Does not implicitly {@link google.cloud.config.v1.TerraformOutput.verify|verify} messages.
                     * @param message TerraformOutput message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.ITerraformOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TerraformOutput message, length delimited. Does not implicitly {@link google.cloud.config.v1.TerraformOutput.verify|verify} messages.
                     * @param message TerraformOutput message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.ITerraformOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TerraformOutput message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TerraformOutput
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.TerraformOutput;

                    /**
                     * Decodes a TerraformOutput message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TerraformOutput
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.TerraformOutput;

                    /**
                     * Verifies a TerraformOutput message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TerraformOutput message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TerraformOutput
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.TerraformOutput;

                    /**
                     * Creates a plain object from a TerraformOutput message. Also converts values to other types if specified.
                     * @param message TerraformOutput
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.TerraformOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TerraformOutput to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TerraformOutput
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDeploymentsRequest. */
                interface IListDeploymentsRequest {

                    /** ListDeploymentsRequest parent */
                    parent?: (string|null);

                    /** ListDeploymentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDeploymentsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListDeploymentsRequest filter */
                    filter?: (string|null);

                    /** ListDeploymentsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListDeploymentsRequest. */
                class ListDeploymentsRequest implements IListDeploymentsRequest {

                    /**
                     * Constructs a new ListDeploymentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListDeploymentsRequest);

                    /** ListDeploymentsRequest parent. */
                    public parent: string;

                    /** ListDeploymentsRequest pageSize. */
                    public pageSize: number;

                    /** ListDeploymentsRequest pageToken. */
                    public pageToken: string;

                    /** ListDeploymentsRequest filter. */
                    public filter: string;

                    /** ListDeploymentsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListDeploymentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDeploymentsRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListDeploymentsRequest): google.cloud.config.v1.ListDeploymentsRequest;

                    /**
                     * Encodes the specified ListDeploymentsRequest message. Does not implicitly {@link google.cloud.config.v1.ListDeploymentsRequest.verify|verify} messages.
                     * @param message ListDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDeploymentsRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListDeploymentsRequest.verify|verify} messages.
                     * @param message ListDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDeploymentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListDeploymentsRequest;

                    /**
                     * Decodes a ListDeploymentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListDeploymentsRequest;

                    /**
                     * Verifies a ListDeploymentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDeploymentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDeploymentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListDeploymentsRequest;

                    /**
                     * Creates a plain object from a ListDeploymentsRequest message. Also converts values to other types if specified.
                     * @param message ListDeploymentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListDeploymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDeploymentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDeploymentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDeploymentsResponse. */
                interface IListDeploymentsResponse {

                    /** ListDeploymentsResponse deployments */
                    deployments?: (google.cloud.config.v1.IDeployment[]|null);

                    /** ListDeploymentsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListDeploymentsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListDeploymentsResponse. */
                class ListDeploymentsResponse implements IListDeploymentsResponse {

                    /**
                     * Constructs a new ListDeploymentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListDeploymentsResponse);

                    /** ListDeploymentsResponse deployments. */
                    public deployments: google.cloud.config.v1.IDeployment[];

                    /** ListDeploymentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListDeploymentsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListDeploymentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDeploymentsResponse instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListDeploymentsResponse): google.cloud.config.v1.ListDeploymentsResponse;

                    /**
                     * Encodes the specified ListDeploymentsResponse message. Does not implicitly {@link google.cloud.config.v1.ListDeploymentsResponse.verify|verify} messages.
                     * @param message ListDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDeploymentsResponse message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListDeploymentsResponse.verify|verify} messages.
                     * @param message ListDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDeploymentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListDeploymentsResponse;

                    /**
                     * Decodes a ListDeploymentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListDeploymentsResponse;

                    /**
                     * Verifies a ListDeploymentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDeploymentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDeploymentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListDeploymentsResponse;

                    /**
                     * Creates a plain object from a ListDeploymentsResponse message. Also converts values to other types if specified.
                     * @param message ListDeploymentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListDeploymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDeploymentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDeploymentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetDeploymentRequest. */
                interface IGetDeploymentRequest {

                    /** GetDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetDeploymentRequest. */
                class GetDeploymentRequest implements IGetDeploymentRequest {

                    /**
                     * Constructs a new GetDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IGetDeploymentRequest);

                    /** GetDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IGetDeploymentRequest): google.cloud.config.v1.GetDeploymentRequest;

                    /**
                     * Encodes the specified GetDeploymentRequest message. Does not implicitly {@link google.cloud.config.v1.GetDeploymentRequest.verify|verify} messages.
                     * @param message GetDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IGetDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.GetDeploymentRequest.verify|verify} messages.
                     * @param message GetDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IGetDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.GetDeploymentRequest;

                    /**
                     * Decodes a GetDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.GetDeploymentRequest;

                    /**
                     * Verifies a GetDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.GetDeploymentRequest;

                    /**
                     * Creates a plain object from a GetDeploymentRequest message. Also converts values to other types if specified.
                     * @param message GetDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.GetDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRevisionsRequest. */
                interface IListRevisionsRequest {

                    /** ListRevisionsRequest parent */
                    parent?: (string|null);

                    /** ListRevisionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRevisionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRevisionsRequest filter */
                    filter?: (string|null);

                    /** ListRevisionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListRevisionsRequest. */
                class ListRevisionsRequest implements IListRevisionsRequest {

                    /**
                     * Constructs a new ListRevisionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListRevisionsRequest);

                    /** ListRevisionsRequest parent. */
                    public parent: string;

                    /** ListRevisionsRequest pageSize. */
                    public pageSize: number;

                    /** ListRevisionsRequest pageToken. */
                    public pageToken: string;

                    /** ListRevisionsRequest filter. */
                    public filter: string;

                    /** ListRevisionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListRevisionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRevisionsRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListRevisionsRequest): google.cloud.config.v1.ListRevisionsRequest;

                    /**
                     * Encodes the specified ListRevisionsRequest message. Does not implicitly {@link google.cloud.config.v1.ListRevisionsRequest.verify|verify} messages.
                     * @param message ListRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRevisionsRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListRevisionsRequest.verify|verify} messages.
                     * @param message ListRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRevisionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListRevisionsRequest;

                    /**
                     * Decodes a ListRevisionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListRevisionsRequest;

                    /**
                     * Verifies a ListRevisionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRevisionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRevisionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListRevisionsRequest;

                    /**
                     * Creates a plain object from a ListRevisionsRequest message. Also converts values to other types if specified.
                     * @param message ListRevisionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListRevisionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRevisionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRevisionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRevisionsResponse. */
                interface IListRevisionsResponse {

                    /** ListRevisionsResponse revisions */
                    revisions?: (google.cloud.config.v1.IRevision[]|null);

                    /** ListRevisionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListRevisionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListRevisionsResponse. */
                class ListRevisionsResponse implements IListRevisionsResponse {

                    /**
                     * Constructs a new ListRevisionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListRevisionsResponse);

                    /** ListRevisionsResponse revisions. */
                    public revisions: google.cloud.config.v1.IRevision[];

                    /** ListRevisionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListRevisionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListRevisionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRevisionsResponse instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListRevisionsResponse): google.cloud.config.v1.ListRevisionsResponse;

                    /**
                     * Encodes the specified ListRevisionsResponse message. Does not implicitly {@link google.cloud.config.v1.ListRevisionsResponse.verify|verify} messages.
                     * @param message ListRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRevisionsResponse message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListRevisionsResponse.verify|verify} messages.
                     * @param message ListRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRevisionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListRevisionsResponse;

                    /**
                     * Decodes a ListRevisionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListRevisionsResponse;

                    /**
                     * Verifies a ListRevisionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRevisionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRevisionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListRevisionsResponse;

                    /**
                     * Creates a plain object from a ListRevisionsResponse message. Also converts values to other types if specified.
                     * @param message ListRevisionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListRevisionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRevisionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRevisionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRevisionRequest. */
                interface IGetRevisionRequest {

                    /** GetRevisionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRevisionRequest. */
                class GetRevisionRequest implements IGetRevisionRequest {

                    /**
                     * Constructs a new GetRevisionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IGetRevisionRequest);

                    /** GetRevisionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRevisionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRevisionRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IGetRevisionRequest): google.cloud.config.v1.GetRevisionRequest;

                    /**
                     * Encodes the specified GetRevisionRequest message. Does not implicitly {@link google.cloud.config.v1.GetRevisionRequest.verify|verify} messages.
                     * @param message GetRevisionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IGetRevisionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRevisionRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.GetRevisionRequest.verify|verify} messages.
                     * @param message GetRevisionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IGetRevisionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRevisionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRevisionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.GetRevisionRequest;

                    /**
                     * Decodes a GetRevisionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRevisionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.GetRevisionRequest;

                    /**
                     * Verifies a GetRevisionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRevisionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRevisionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.GetRevisionRequest;

                    /**
                     * Creates a plain object from a GetRevisionRequest message. Also converts values to other types if specified.
                     * @param message GetRevisionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.GetRevisionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRevisionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRevisionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateDeploymentRequest. */
                interface ICreateDeploymentRequest {

                    /** CreateDeploymentRequest parent */
                    parent?: (string|null);

                    /** CreateDeploymentRequest deploymentId */
                    deploymentId?: (string|null);

                    /** CreateDeploymentRequest deployment */
                    deployment?: (google.cloud.config.v1.IDeployment|null);

                    /** CreateDeploymentRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateDeploymentRequest. */
                class CreateDeploymentRequest implements ICreateDeploymentRequest {

                    /**
                     * Constructs a new CreateDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.ICreateDeploymentRequest);

                    /** CreateDeploymentRequest parent. */
                    public parent: string;

                    /** CreateDeploymentRequest deploymentId. */
                    public deploymentId: string;

                    /** CreateDeploymentRequest deployment. */
                    public deployment?: (google.cloud.config.v1.IDeployment|null);

                    /** CreateDeploymentRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.ICreateDeploymentRequest): google.cloud.config.v1.CreateDeploymentRequest;

                    /**
                     * Encodes the specified CreateDeploymentRequest message. Does not implicitly {@link google.cloud.config.v1.CreateDeploymentRequest.verify|verify} messages.
                     * @param message CreateDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.ICreateDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.CreateDeploymentRequest.verify|verify} messages.
                     * @param message CreateDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.ICreateDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.CreateDeploymentRequest;

                    /**
                     * Decodes a CreateDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.CreateDeploymentRequest;

                    /**
                     * Verifies a CreateDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.CreateDeploymentRequest;

                    /**
                     * Creates a plain object from a CreateDeploymentRequest message. Also converts values to other types if specified.
                     * @param message CreateDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.CreateDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateDeploymentRequest. */
                interface IUpdateDeploymentRequest {

                    /** UpdateDeploymentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateDeploymentRequest deployment */
                    deployment?: (google.cloud.config.v1.IDeployment|null);

                    /** UpdateDeploymentRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateDeploymentRequest. */
                class UpdateDeploymentRequest implements IUpdateDeploymentRequest {

                    /**
                     * Constructs a new UpdateDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IUpdateDeploymentRequest);

                    /** UpdateDeploymentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateDeploymentRequest deployment. */
                    public deployment?: (google.cloud.config.v1.IDeployment|null);

                    /** UpdateDeploymentRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IUpdateDeploymentRequest): google.cloud.config.v1.UpdateDeploymentRequest;

                    /**
                     * Encodes the specified UpdateDeploymentRequest message. Does not implicitly {@link google.cloud.config.v1.UpdateDeploymentRequest.verify|verify} messages.
                     * @param message UpdateDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IUpdateDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.UpdateDeploymentRequest.verify|verify} messages.
                     * @param message UpdateDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IUpdateDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.UpdateDeploymentRequest;

                    /**
                     * Decodes an UpdateDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.UpdateDeploymentRequest;

                    /**
                     * Verifies an UpdateDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.UpdateDeploymentRequest;

                    /**
                     * Creates a plain object from an UpdateDeploymentRequest message. Also converts values to other types if specified.
                     * @param message UpdateDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.UpdateDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteDeploymentRequest. */
                interface IDeleteDeploymentRequest {

                    /** DeleteDeploymentRequest name */
                    name?: (string|null);

                    /** DeleteDeploymentRequest requestId */
                    requestId?: (string|null);

                    /** DeleteDeploymentRequest force */
                    force?: (boolean|null);

                    /** DeleteDeploymentRequest deletePolicy */
                    deletePolicy?: (google.cloud.config.v1.DeleteDeploymentRequest.DeletePolicy|keyof typeof google.cloud.config.v1.DeleteDeploymentRequest.DeletePolicy|null);
                }

                /** Represents a DeleteDeploymentRequest. */
                class DeleteDeploymentRequest implements IDeleteDeploymentRequest {

                    /**
                     * Constructs a new DeleteDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IDeleteDeploymentRequest);

                    /** DeleteDeploymentRequest name. */
                    public name: string;

                    /** DeleteDeploymentRequest requestId. */
                    public requestId: string;

                    /** DeleteDeploymentRequest force. */
                    public force: boolean;

                    /** DeleteDeploymentRequest deletePolicy. */
                    public deletePolicy: (google.cloud.config.v1.DeleteDeploymentRequest.DeletePolicy|keyof typeof google.cloud.config.v1.DeleteDeploymentRequest.DeletePolicy);

                    /**
                     * Creates a new DeleteDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IDeleteDeploymentRequest): google.cloud.config.v1.DeleteDeploymentRequest;

                    /**
                     * Encodes the specified DeleteDeploymentRequest message. Does not implicitly {@link google.cloud.config.v1.DeleteDeploymentRequest.verify|verify} messages.
                     * @param message DeleteDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IDeleteDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.DeleteDeploymentRequest.verify|verify} messages.
                     * @param message DeleteDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IDeleteDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.DeleteDeploymentRequest;

                    /**
                     * Decodes a DeleteDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.DeleteDeploymentRequest;

                    /**
                     * Verifies a DeleteDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.DeleteDeploymentRequest;

                    /**
                     * Creates a plain object from a DeleteDeploymentRequest message. Also converts values to other types if specified.
                     * @param message DeleteDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.DeleteDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace DeleteDeploymentRequest {

                    /** DeletePolicy enum. */
                    enum DeletePolicy {
                        DELETE_POLICY_UNSPECIFIED = 0,
                        DELETE = 1,
                        ABANDON = 2
                    }
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata deploymentMetadata */
                    deploymentMetadata?: (google.cloud.config.v1.IDeploymentOperationMetadata|null);

                    /** OperationMetadata previewMetadata */
                    previewMetadata?: (google.cloud.config.v1.IPreviewOperationMetadata|null);

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
                    constructor(properties?: google.cloud.config.v1.IOperationMetadata);

                    /** OperationMetadata deploymentMetadata. */
                    public deploymentMetadata?: (google.cloud.config.v1.IDeploymentOperationMetadata|null);

                    /** OperationMetadata previewMetadata. */
                    public previewMetadata?: (google.cloud.config.v1.IPreviewOperationMetadata|null);

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

                    /** OperationMetadata resourceMetadata. */
                    public resourceMetadata?: ("deploymentMetadata"|"previewMetadata");

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.config.v1.IOperationMetadata): google.cloud.config.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.config.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.config.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Revision. */
                interface IRevision {

                    /** Revision terraformBlueprint */
                    terraformBlueprint?: (google.cloud.config.v1.ITerraformBlueprint|null);

                    /** Revision name */
                    name?: (string|null);

                    /** Revision createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Revision updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Revision action */
                    action?: (google.cloud.config.v1.Revision.Action|keyof typeof google.cloud.config.v1.Revision.Action|null);

                    /** Revision state */
                    state?: (google.cloud.config.v1.Revision.State|keyof typeof google.cloud.config.v1.Revision.State|null);

                    /** Revision applyResults */
                    applyResults?: (google.cloud.config.v1.IApplyResults|null);

                    /** Revision stateDetail */
                    stateDetail?: (string|null);

                    /** Revision errorCode */
                    errorCode?: (google.cloud.config.v1.Revision.ErrorCode|keyof typeof google.cloud.config.v1.Revision.ErrorCode|null);

                    /** Revision build */
                    build?: (string|null);

                    /** Revision logs */
                    logs?: (string|null);

                    /** Revision tfErrors */
                    tfErrors?: (google.cloud.config.v1.ITerraformError[]|null);

                    /** Revision errorLogs */
                    errorLogs?: (string|null);

                    /** Revision serviceAccount */
                    serviceAccount?: (string|null);

                    /** Revision importExistingResources */
                    importExistingResources?: (boolean|null);

                    /** Revision workerPool */
                    workerPool?: (string|null);

                    /** Revision tfVersionConstraint */
                    tfVersionConstraint?: (string|null);

                    /** Revision tfVersion */
                    tfVersion?: (string|null);

                    /** Revision quotaValidationResults */
                    quotaValidationResults?: (string|null);

                    /** Revision quotaValidation */
                    quotaValidation?: (google.cloud.config.v1.QuotaValidation|keyof typeof google.cloud.config.v1.QuotaValidation|null);

                    /** Revision providerConfig */
                    providerConfig?: (google.cloud.config.v1.IProviderConfig|null);
                }

                /** Represents a Revision. */
                class Revision implements IRevision {

                    /**
                     * Constructs a new Revision.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IRevision);

                    /** Revision terraformBlueprint. */
                    public terraformBlueprint?: (google.cloud.config.v1.ITerraformBlueprint|null);

                    /** Revision name. */
                    public name: string;

                    /** Revision createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Revision updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Revision action. */
                    public action: (google.cloud.config.v1.Revision.Action|keyof typeof google.cloud.config.v1.Revision.Action);

                    /** Revision state. */
                    public state: (google.cloud.config.v1.Revision.State|keyof typeof google.cloud.config.v1.Revision.State);

                    /** Revision applyResults. */
                    public applyResults?: (google.cloud.config.v1.IApplyResults|null);

                    /** Revision stateDetail. */
                    public stateDetail: string;

                    /** Revision errorCode. */
                    public errorCode: (google.cloud.config.v1.Revision.ErrorCode|keyof typeof google.cloud.config.v1.Revision.ErrorCode);

                    /** Revision build. */
                    public build: string;

                    /** Revision logs. */
                    public logs: string;

                    /** Revision tfErrors. */
                    public tfErrors: google.cloud.config.v1.ITerraformError[];

                    /** Revision errorLogs. */
                    public errorLogs: string;

                    /** Revision serviceAccount. */
                    public serviceAccount: string;

                    /** Revision importExistingResources. */
                    public importExistingResources: boolean;

                    /** Revision workerPool. */
                    public workerPool: string;

                    /** Revision tfVersionConstraint. */
                    public tfVersionConstraint: string;

                    /** Revision tfVersion. */
                    public tfVersion: string;

                    /** Revision quotaValidationResults. */
                    public quotaValidationResults: string;

                    /** Revision quotaValidation. */
                    public quotaValidation: (google.cloud.config.v1.QuotaValidation|keyof typeof google.cloud.config.v1.QuotaValidation);

                    /** Revision providerConfig. */
                    public providerConfig?: (google.cloud.config.v1.IProviderConfig|null);

                    /** Revision blueprint. */
                    public blueprint?: "terraformBlueprint";

                    /**
                     * Creates a new Revision instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Revision instance
                     */
                    public static create(properties?: google.cloud.config.v1.IRevision): google.cloud.config.v1.Revision;

                    /**
                     * Encodes the specified Revision message. Does not implicitly {@link google.cloud.config.v1.Revision.verify|verify} messages.
                     * @param message Revision message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IRevision, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Revision message, length delimited. Does not implicitly {@link google.cloud.config.v1.Revision.verify|verify} messages.
                     * @param message Revision message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IRevision, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Revision message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Revision
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.Revision;

                    /**
                     * Decodes a Revision message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Revision
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.Revision;

                    /**
                     * Verifies a Revision message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Revision message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Revision
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.Revision;

                    /**
                     * Creates a plain object from a Revision message. Also converts values to other types if specified.
                     * @param message Revision
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.Revision, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Revision to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Revision
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Revision {

                    /** Action enum. */
                    enum Action {
                        ACTION_UNSPECIFIED = 0,
                        CREATE = 1,
                        UPDATE = 2,
                        DELETE = 3
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        APPLYING = 1,
                        APPLIED = 2,
                        FAILED = 3
                    }

                    /** ErrorCode enum. */
                    enum ErrorCode {
                        ERROR_CODE_UNSPECIFIED = 0,
                        CLOUD_BUILD_PERMISSION_DENIED = 1,
                        APPLY_BUILD_API_FAILED = 4,
                        APPLY_BUILD_RUN_FAILED = 5,
                        QUOTA_VALIDATION_FAILED = 7
                    }
                }

                /** Properties of a TerraformError. */
                interface ITerraformError {

                    /** TerraformError resourceAddress */
                    resourceAddress?: (string|null);

                    /** TerraformError httpResponseCode */
                    httpResponseCode?: (number|null);

                    /** TerraformError errorDescription */
                    errorDescription?: (string|null);

                    /** TerraformError error */
                    error?: (google.rpc.IStatus|null);
                }

                /** Represents a TerraformError. */
                class TerraformError implements ITerraformError {

                    /**
                     * Constructs a new TerraformError.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.ITerraformError);

                    /** TerraformError resourceAddress. */
                    public resourceAddress: string;

                    /** TerraformError httpResponseCode. */
                    public httpResponseCode: number;

                    /** TerraformError errorDescription. */
                    public errorDescription: string;

                    /** TerraformError error. */
                    public error?: (google.rpc.IStatus|null);

                    /**
                     * Creates a new TerraformError instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TerraformError instance
                     */
                    public static create(properties?: google.cloud.config.v1.ITerraformError): google.cloud.config.v1.TerraformError;

                    /**
                     * Encodes the specified TerraformError message. Does not implicitly {@link google.cloud.config.v1.TerraformError.verify|verify} messages.
                     * @param message TerraformError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.ITerraformError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TerraformError message, length delimited. Does not implicitly {@link google.cloud.config.v1.TerraformError.verify|verify} messages.
                     * @param message TerraformError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.ITerraformError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TerraformError message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TerraformError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.TerraformError;

                    /**
                     * Decodes a TerraformError message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TerraformError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.TerraformError;

                    /**
                     * Verifies a TerraformError message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TerraformError message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TerraformError
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.TerraformError;

                    /**
                     * Creates a plain object from a TerraformError message. Also converts values to other types if specified.
                     * @param message TerraformError
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.TerraformError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TerraformError to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TerraformError
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GitSource. */
                interface IGitSource {

                    /** GitSource repo */
                    repo?: (string|null);

                    /** GitSource directory */
                    directory?: (string|null);

                    /** GitSource ref */
                    ref?: (string|null);
                }

                /** Represents a GitSource. */
                class GitSource implements IGitSource {

                    /**
                     * Constructs a new GitSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IGitSource);

                    /** GitSource repo. */
                    public repo?: (string|null);

                    /** GitSource directory. */
                    public directory?: (string|null);

                    /** GitSource ref. */
                    public ref?: (string|null);

                    /**
                     * Creates a new GitSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GitSource instance
                     */
                    public static create(properties?: google.cloud.config.v1.IGitSource): google.cloud.config.v1.GitSource;

                    /**
                     * Encodes the specified GitSource message. Does not implicitly {@link google.cloud.config.v1.GitSource.verify|verify} messages.
                     * @param message GitSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IGitSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GitSource message, length delimited. Does not implicitly {@link google.cloud.config.v1.GitSource.verify|verify} messages.
                     * @param message GitSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IGitSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GitSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GitSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.GitSource;

                    /**
                     * Decodes a GitSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GitSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.GitSource;

                    /**
                     * Verifies a GitSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GitSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GitSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.GitSource;

                    /**
                     * Creates a plain object from a GitSource message. Also converts values to other types if specified.
                     * @param message GitSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.GitSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GitSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GitSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeploymentOperationMetadata. */
                interface IDeploymentOperationMetadata {

                    /** DeploymentOperationMetadata step */
                    step?: (google.cloud.config.v1.DeploymentOperationMetadata.DeploymentStep|keyof typeof google.cloud.config.v1.DeploymentOperationMetadata.DeploymentStep|null);

                    /** DeploymentOperationMetadata applyResults */
                    applyResults?: (google.cloud.config.v1.IApplyResults|null);

                    /** DeploymentOperationMetadata build */
                    build?: (string|null);

                    /** DeploymentOperationMetadata logs */
                    logs?: (string|null);
                }

                /** Represents a DeploymentOperationMetadata. */
                class DeploymentOperationMetadata implements IDeploymentOperationMetadata {

                    /**
                     * Constructs a new DeploymentOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IDeploymentOperationMetadata);

                    /** DeploymentOperationMetadata step. */
                    public step: (google.cloud.config.v1.DeploymentOperationMetadata.DeploymentStep|keyof typeof google.cloud.config.v1.DeploymentOperationMetadata.DeploymentStep);

                    /** DeploymentOperationMetadata applyResults. */
                    public applyResults?: (google.cloud.config.v1.IApplyResults|null);

                    /** DeploymentOperationMetadata build. */
                    public build: string;

                    /** DeploymentOperationMetadata logs. */
                    public logs: string;

                    /**
                     * Creates a new DeploymentOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeploymentOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.config.v1.IDeploymentOperationMetadata): google.cloud.config.v1.DeploymentOperationMetadata;

                    /**
                     * Encodes the specified DeploymentOperationMetadata message. Does not implicitly {@link google.cloud.config.v1.DeploymentOperationMetadata.verify|verify} messages.
                     * @param message DeploymentOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IDeploymentOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeploymentOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.config.v1.DeploymentOperationMetadata.verify|verify} messages.
                     * @param message DeploymentOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IDeploymentOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeploymentOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeploymentOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.DeploymentOperationMetadata;

                    /**
                     * Decodes a DeploymentOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeploymentOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.DeploymentOperationMetadata;

                    /**
                     * Verifies a DeploymentOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeploymentOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeploymentOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.DeploymentOperationMetadata;

                    /**
                     * Creates a plain object from a DeploymentOperationMetadata message. Also converts values to other types if specified.
                     * @param message DeploymentOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.DeploymentOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeploymentOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeploymentOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace DeploymentOperationMetadata {

                    /** DeploymentStep enum. */
                    enum DeploymentStep {
                        DEPLOYMENT_STEP_UNSPECIFIED = 0,
                        PREPARING_STORAGE_BUCKET = 1,
                        DOWNLOADING_BLUEPRINT = 2,
                        RUNNING_TF_INIT = 3,
                        RUNNING_TF_PLAN = 4,
                        RUNNING_TF_APPLY = 5,
                        RUNNING_TF_DESTROY = 6,
                        RUNNING_TF_VALIDATE = 7,
                        UNLOCKING_DEPLOYMENT = 8,
                        SUCCEEDED = 9,
                        FAILED = 10,
                        VALIDATING_REPOSITORY = 11,
                        RUNNING_QUOTA_VALIDATION = 12
                    }
                }

                /** Properties of a Resource. */
                interface IResource {

                    /** Resource name */
                    name?: (string|null);

                    /** Resource terraformInfo */
                    terraformInfo?: (google.cloud.config.v1.IResourceTerraformInfo|null);

                    /** Resource caiAssets */
                    caiAssets?: ({ [k: string]: google.cloud.config.v1.IResourceCAIInfo }|null);

                    /** Resource intent */
                    intent?: (google.cloud.config.v1.Resource.Intent|keyof typeof google.cloud.config.v1.Resource.Intent|null);

                    /** Resource state */
                    state?: (google.cloud.config.v1.Resource.State|keyof typeof google.cloud.config.v1.Resource.State|null);
                }

                /** Represents a Resource. */
                class Resource implements IResource {

                    /**
                     * Constructs a new Resource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IResource);

                    /** Resource name. */
                    public name: string;

                    /** Resource terraformInfo. */
                    public terraformInfo?: (google.cloud.config.v1.IResourceTerraformInfo|null);

                    /** Resource caiAssets. */
                    public caiAssets: { [k: string]: google.cloud.config.v1.IResourceCAIInfo };

                    /** Resource intent. */
                    public intent: (google.cloud.config.v1.Resource.Intent|keyof typeof google.cloud.config.v1.Resource.Intent);

                    /** Resource state. */
                    public state: (google.cloud.config.v1.Resource.State|keyof typeof google.cloud.config.v1.Resource.State);

                    /**
                     * Creates a new Resource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Resource instance
                     */
                    public static create(properties?: google.cloud.config.v1.IResource): google.cloud.config.v1.Resource;

                    /**
                     * Encodes the specified Resource message. Does not implicitly {@link google.cloud.config.v1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Resource message, length delimited. Does not implicitly {@link google.cloud.config.v1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Resource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.Resource;

                    /**
                     * Decodes a Resource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.Resource;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.Resource;

                    /**
                     * Creates a plain object from a Resource message. Also converts values to other types if specified.
                     * @param message Resource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Intent enum. */
                    enum Intent {
                        INTENT_UNSPECIFIED = 0,
                        CREATE = 1,
                        UPDATE = 2,
                        DELETE = 3,
                        RECREATE = 4,
                        UNCHANGED = 5
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PLANNED = 1,
                        IN_PROGRESS = 2,
                        RECONCILED = 3,
                        FAILED = 4
                    }
                }

                /** Properties of a ResourceTerraformInfo. */
                interface IResourceTerraformInfo {

                    /** ResourceTerraformInfo address */
                    address?: (string|null);

                    /** ResourceTerraformInfo type */
                    type?: (string|null);

                    /** ResourceTerraformInfo id */
                    id?: (string|null);
                }

                /** Represents a ResourceTerraformInfo. */
                class ResourceTerraformInfo implements IResourceTerraformInfo {

                    /**
                     * Constructs a new ResourceTerraformInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IResourceTerraformInfo);

                    /** ResourceTerraformInfo address. */
                    public address: string;

                    /** ResourceTerraformInfo type. */
                    public type: string;

                    /** ResourceTerraformInfo id. */
                    public id: string;

                    /**
                     * Creates a new ResourceTerraformInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceTerraformInfo instance
                     */
                    public static create(properties?: google.cloud.config.v1.IResourceTerraformInfo): google.cloud.config.v1.ResourceTerraformInfo;

                    /**
                     * Encodes the specified ResourceTerraformInfo message. Does not implicitly {@link google.cloud.config.v1.ResourceTerraformInfo.verify|verify} messages.
                     * @param message ResourceTerraformInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IResourceTerraformInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceTerraformInfo message, length delimited. Does not implicitly {@link google.cloud.config.v1.ResourceTerraformInfo.verify|verify} messages.
                     * @param message ResourceTerraformInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IResourceTerraformInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceTerraformInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceTerraformInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ResourceTerraformInfo;

                    /**
                     * Decodes a ResourceTerraformInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceTerraformInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ResourceTerraformInfo;

                    /**
                     * Verifies a ResourceTerraformInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceTerraformInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceTerraformInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ResourceTerraformInfo;

                    /**
                     * Creates a plain object from a ResourceTerraformInfo message. Also converts values to other types if specified.
                     * @param message ResourceTerraformInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ResourceTerraformInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceTerraformInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceTerraformInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceCAIInfo. */
                interface IResourceCAIInfo {

                    /** ResourceCAIInfo fullResourceName */
                    fullResourceName?: (string|null);
                }

                /** Represents a ResourceCAIInfo. */
                class ResourceCAIInfo implements IResourceCAIInfo {

                    /**
                     * Constructs a new ResourceCAIInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IResourceCAIInfo);

                    /** ResourceCAIInfo fullResourceName. */
                    public fullResourceName: string;

                    /**
                     * Creates a new ResourceCAIInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceCAIInfo instance
                     */
                    public static create(properties?: google.cloud.config.v1.IResourceCAIInfo): google.cloud.config.v1.ResourceCAIInfo;

                    /**
                     * Encodes the specified ResourceCAIInfo message. Does not implicitly {@link google.cloud.config.v1.ResourceCAIInfo.verify|verify} messages.
                     * @param message ResourceCAIInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IResourceCAIInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceCAIInfo message, length delimited. Does not implicitly {@link google.cloud.config.v1.ResourceCAIInfo.verify|verify} messages.
                     * @param message ResourceCAIInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IResourceCAIInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceCAIInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceCAIInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ResourceCAIInfo;

                    /**
                     * Decodes a ResourceCAIInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceCAIInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ResourceCAIInfo;

                    /**
                     * Verifies a ResourceCAIInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceCAIInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceCAIInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ResourceCAIInfo;

                    /**
                     * Creates a plain object from a ResourceCAIInfo message. Also converts values to other types if specified.
                     * @param message ResourceCAIInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ResourceCAIInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceCAIInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceCAIInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetResourceRequest. */
                interface IGetResourceRequest {

                    /** GetResourceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetResourceRequest. */
                class GetResourceRequest implements IGetResourceRequest {

                    /**
                     * Constructs a new GetResourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IGetResourceRequest);

                    /** GetResourceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetResourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetResourceRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IGetResourceRequest): google.cloud.config.v1.GetResourceRequest;

                    /**
                     * Encodes the specified GetResourceRequest message. Does not implicitly {@link google.cloud.config.v1.GetResourceRequest.verify|verify} messages.
                     * @param message GetResourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IGetResourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetResourceRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.GetResourceRequest.verify|verify} messages.
                     * @param message GetResourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IGetResourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetResourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetResourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.GetResourceRequest;

                    /**
                     * Decodes a GetResourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetResourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.GetResourceRequest;

                    /**
                     * Verifies a GetResourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetResourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetResourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.GetResourceRequest;

                    /**
                     * Creates a plain object from a GetResourceRequest message. Also converts values to other types if specified.
                     * @param message GetResourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.GetResourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetResourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetResourceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListResourcesRequest. */
                interface IListResourcesRequest {

                    /** ListResourcesRequest parent */
                    parent?: (string|null);

                    /** ListResourcesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListResourcesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListResourcesRequest filter */
                    filter?: (string|null);

                    /** ListResourcesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListResourcesRequest. */
                class ListResourcesRequest implements IListResourcesRequest {

                    /**
                     * Constructs a new ListResourcesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListResourcesRequest);

                    /** ListResourcesRequest parent. */
                    public parent: string;

                    /** ListResourcesRequest pageSize. */
                    public pageSize: number;

                    /** ListResourcesRequest pageToken. */
                    public pageToken: string;

                    /** ListResourcesRequest filter. */
                    public filter: string;

                    /** ListResourcesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListResourcesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListResourcesRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListResourcesRequest): google.cloud.config.v1.ListResourcesRequest;

                    /**
                     * Encodes the specified ListResourcesRequest message. Does not implicitly {@link google.cloud.config.v1.ListResourcesRequest.verify|verify} messages.
                     * @param message ListResourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListResourcesRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListResourcesRequest.verify|verify} messages.
                     * @param message ListResourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListResourcesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListResourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListResourcesRequest;

                    /**
                     * Decodes a ListResourcesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListResourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListResourcesRequest;

                    /**
                     * Verifies a ListResourcesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListResourcesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListResourcesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListResourcesRequest;

                    /**
                     * Creates a plain object from a ListResourcesRequest message. Also converts values to other types if specified.
                     * @param message ListResourcesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListResourcesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListResourcesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListResourcesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListResourcesResponse. */
                interface IListResourcesResponse {

                    /** ListResourcesResponse resources */
                    resources?: (google.cloud.config.v1.IResource[]|null);

                    /** ListResourcesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListResourcesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListResourcesResponse. */
                class ListResourcesResponse implements IListResourcesResponse {

                    /**
                     * Constructs a new ListResourcesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListResourcesResponse);

                    /** ListResourcesResponse resources. */
                    public resources: google.cloud.config.v1.IResource[];

                    /** ListResourcesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListResourcesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListResourcesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListResourcesResponse instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListResourcesResponse): google.cloud.config.v1.ListResourcesResponse;

                    /**
                     * Encodes the specified ListResourcesResponse message. Does not implicitly {@link google.cloud.config.v1.ListResourcesResponse.verify|verify} messages.
                     * @param message ListResourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListResourcesResponse message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListResourcesResponse.verify|verify} messages.
                     * @param message ListResourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListResourcesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListResourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListResourcesResponse;

                    /**
                     * Decodes a ListResourcesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListResourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListResourcesResponse;

                    /**
                     * Verifies a ListResourcesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListResourcesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListResourcesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListResourcesResponse;

                    /**
                     * Creates a plain object from a ListResourcesResponse message. Also converts values to other types if specified.
                     * @param message ListResourcesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListResourcesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListResourcesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListResourcesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Statefile. */
                interface IStatefile {

                    /** Statefile signedUri */
                    signedUri?: (string|null);
                }

                /** Represents a Statefile. */
                class Statefile implements IStatefile {

                    /**
                     * Constructs a new Statefile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IStatefile);

                    /** Statefile signedUri. */
                    public signedUri: string;

                    /**
                     * Creates a new Statefile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Statefile instance
                     */
                    public static create(properties?: google.cloud.config.v1.IStatefile): google.cloud.config.v1.Statefile;

                    /**
                     * Encodes the specified Statefile message. Does not implicitly {@link google.cloud.config.v1.Statefile.verify|verify} messages.
                     * @param message Statefile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IStatefile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Statefile message, length delimited. Does not implicitly {@link google.cloud.config.v1.Statefile.verify|verify} messages.
                     * @param message Statefile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IStatefile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Statefile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Statefile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.Statefile;

                    /**
                     * Decodes a Statefile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Statefile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.Statefile;

                    /**
                     * Verifies a Statefile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Statefile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Statefile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.Statefile;

                    /**
                     * Creates a plain object from a Statefile message. Also converts values to other types if specified.
                     * @param message Statefile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.Statefile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Statefile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Statefile
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportDeploymentStatefileRequest. */
                interface IExportDeploymentStatefileRequest {

                    /** ExportDeploymentStatefileRequest parent */
                    parent?: (string|null);

                    /** ExportDeploymentStatefileRequest draft */
                    draft?: (boolean|null);
                }

                /** Represents an ExportDeploymentStatefileRequest. */
                class ExportDeploymentStatefileRequest implements IExportDeploymentStatefileRequest {

                    /**
                     * Constructs a new ExportDeploymentStatefileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IExportDeploymentStatefileRequest);

                    /** ExportDeploymentStatefileRequest parent. */
                    public parent: string;

                    /** ExportDeploymentStatefileRequest draft. */
                    public draft: boolean;

                    /**
                     * Creates a new ExportDeploymentStatefileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportDeploymentStatefileRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IExportDeploymentStatefileRequest): google.cloud.config.v1.ExportDeploymentStatefileRequest;

                    /**
                     * Encodes the specified ExportDeploymentStatefileRequest message. Does not implicitly {@link google.cloud.config.v1.ExportDeploymentStatefileRequest.verify|verify} messages.
                     * @param message ExportDeploymentStatefileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IExportDeploymentStatefileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportDeploymentStatefileRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.ExportDeploymentStatefileRequest.verify|verify} messages.
                     * @param message ExportDeploymentStatefileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IExportDeploymentStatefileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportDeploymentStatefileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportDeploymentStatefileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ExportDeploymentStatefileRequest;

                    /**
                     * Decodes an ExportDeploymentStatefileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportDeploymentStatefileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ExportDeploymentStatefileRequest;

                    /**
                     * Verifies an ExportDeploymentStatefileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportDeploymentStatefileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportDeploymentStatefileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ExportDeploymentStatefileRequest;

                    /**
                     * Creates a plain object from an ExportDeploymentStatefileRequest message. Also converts values to other types if specified.
                     * @param message ExportDeploymentStatefileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ExportDeploymentStatefileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportDeploymentStatefileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportDeploymentStatefileRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportRevisionStatefileRequest. */
                interface IExportRevisionStatefileRequest {

                    /** ExportRevisionStatefileRequest parent */
                    parent?: (string|null);
                }

                /** Represents an ExportRevisionStatefileRequest. */
                class ExportRevisionStatefileRequest implements IExportRevisionStatefileRequest {

                    /**
                     * Constructs a new ExportRevisionStatefileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IExportRevisionStatefileRequest);

                    /** ExportRevisionStatefileRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new ExportRevisionStatefileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportRevisionStatefileRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IExportRevisionStatefileRequest): google.cloud.config.v1.ExportRevisionStatefileRequest;

                    /**
                     * Encodes the specified ExportRevisionStatefileRequest message. Does not implicitly {@link google.cloud.config.v1.ExportRevisionStatefileRequest.verify|verify} messages.
                     * @param message ExportRevisionStatefileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IExportRevisionStatefileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportRevisionStatefileRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.ExportRevisionStatefileRequest.verify|verify} messages.
                     * @param message ExportRevisionStatefileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IExportRevisionStatefileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportRevisionStatefileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportRevisionStatefileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ExportRevisionStatefileRequest;

                    /**
                     * Decodes an ExportRevisionStatefileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportRevisionStatefileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ExportRevisionStatefileRequest;

                    /**
                     * Verifies an ExportRevisionStatefileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportRevisionStatefileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportRevisionStatefileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ExportRevisionStatefileRequest;

                    /**
                     * Creates a plain object from an ExportRevisionStatefileRequest message. Also converts values to other types if specified.
                     * @param message ExportRevisionStatefileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ExportRevisionStatefileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportRevisionStatefileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportRevisionStatefileRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportStatefileRequest. */
                interface IImportStatefileRequest {

                    /** ImportStatefileRequest parent */
                    parent?: (string|null);

                    /** ImportStatefileRequest lockId */
                    lockId?: (number|Long|string|null);

                    /** ImportStatefileRequest skipDraft */
                    skipDraft?: (boolean|null);
                }

                /** Represents an ImportStatefileRequest. */
                class ImportStatefileRequest implements IImportStatefileRequest {

                    /**
                     * Constructs a new ImportStatefileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IImportStatefileRequest);

                    /** ImportStatefileRequest parent. */
                    public parent: string;

                    /** ImportStatefileRequest lockId. */
                    public lockId: (number|Long|string);

                    /** ImportStatefileRequest skipDraft. */
                    public skipDraft: boolean;

                    /**
                     * Creates a new ImportStatefileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportStatefileRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IImportStatefileRequest): google.cloud.config.v1.ImportStatefileRequest;

                    /**
                     * Encodes the specified ImportStatefileRequest message. Does not implicitly {@link google.cloud.config.v1.ImportStatefileRequest.verify|verify} messages.
                     * @param message ImportStatefileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IImportStatefileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportStatefileRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.ImportStatefileRequest.verify|verify} messages.
                     * @param message ImportStatefileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IImportStatefileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportStatefileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportStatefileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ImportStatefileRequest;

                    /**
                     * Decodes an ImportStatefileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportStatefileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ImportStatefileRequest;

                    /**
                     * Verifies an ImportStatefileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportStatefileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportStatefileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ImportStatefileRequest;

                    /**
                     * Creates a plain object from an ImportStatefileRequest message. Also converts values to other types if specified.
                     * @param message ImportStatefileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ImportStatefileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportStatefileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportStatefileRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteStatefileRequest. */
                interface IDeleteStatefileRequest {

                    /** DeleteStatefileRequest name */
                    name?: (string|null);

                    /** DeleteStatefileRequest lockId */
                    lockId?: (number|Long|string|null);
                }

                /** Represents a DeleteStatefileRequest. */
                class DeleteStatefileRequest implements IDeleteStatefileRequest {

                    /**
                     * Constructs a new DeleteStatefileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IDeleteStatefileRequest);

                    /** DeleteStatefileRequest name. */
                    public name: string;

                    /** DeleteStatefileRequest lockId. */
                    public lockId: (number|Long|string);

                    /**
                     * Creates a new DeleteStatefileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteStatefileRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IDeleteStatefileRequest): google.cloud.config.v1.DeleteStatefileRequest;

                    /**
                     * Encodes the specified DeleteStatefileRequest message. Does not implicitly {@link google.cloud.config.v1.DeleteStatefileRequest.verify|verify} messages.
                     * @param message DeleteStatefileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IDeleteStatefileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteStatefileRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.DeleteStatefileRequest.verify|verify} messages.
                     * @param message DeleteStatefileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IDeleteStatefileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteStatefileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteStatefileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.DeleteStatefileRequest;

                    /**
                     * Decodes a DeleteStatefileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteStatefileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.DeleteStatefileRequest;

                    /**
                     * Verifies a DeleteStatefileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteStatefileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteStatefileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.DeleteStatefileRequest;

                    /**
                     * Creates a plain object from a DeleteStatefileRequest message. Also converts values to other types if specified.
                     * @param message DeleteStatefileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.DeleteStatefileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteStatefileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteStatefileRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LockDeploymentRequest. */
                interface ILockDeploymentRequest {

                    /** LockDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a LockDeploymentRequest. */
                class LockDeploymentRequest implements ILockDeploymentRequest {

                    /**
                     * Constructs a new LockDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.ILockDeploymentRequest);

                    /** LockDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new LockDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LockDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.ILockDeploymentRequest): google.cloud.config.v1.LockDeploymentRequest;

                    /**
                     * Encodes the specified LockDeploymentRequest message. Does not implicitly {@link google.cloud.config.v1.LockDeploymentRequest.verify|verify} messages.
                     * @param message LockDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.ILockDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LockDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.LockDeploymentRequest.verify|verify} messages.
                     * @param message LockDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.ILockDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LockDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LockDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.LockDeploymentRequest;

                    /**
                     * Decodes a LockDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LockDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.LockDeploymentRequest;

                    /**
                     * Verifies a LockDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LockDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LockDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.LockDeploymentRequest;

                    /**
                     * Creates a plain object from a LockDeploymentRequest message. Also converts values to other types if specified.
                     * @param message LockDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.LockDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LockDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LockDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UnlockDeploymentRequest. */
                interface IUnlockDeploymentRequest {

                    /** UnlockDeploymentRequest name */
                    name?: (string|null);

                    /** UnlockDeploymentRequest lockId */
                    lockId?: (number|Long|string|null);
                }

                /** Represents an UnlockDeploymentRequest. */
                class UnlockDeploymentRequest implements IUnlockDeploymentRequest {

                    /**
                     * Constructs a new UnlockDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IUnlockDeploymentRequest);

                    /** UnlockDeploymentRequest name. */
                    public name: string;

                    /** UnlockDeploymentRequest lockId. */
                    public lockId: (number|Long|string);

                    /**
                     * Creates a new UnlockDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UnlockDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IUnlockDeploymentRequest): google.cloud.config.v1.UnlockDeploymentRequest;

                    /**
                     * Encodes the specified UnlockDeploymentRequest message. Does not implicitly {@link google.cloud.config.v1.UnlockDeploymentRequest.verify|verify} messages.
                     * @param message UnlockDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IUnlockDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UnlockDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.UnlockDeploymentRequest.verify|verify} messages.
                     * @param message UnlockDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IUnlockDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UnlockDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UnlockDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.UnlockDeploymentRequest;

                    /**
                     * Decodes an UnlockDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UnlockDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.UnlockDeploymentRequest;

                    /**
                     * Verifies an UnlockDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UnlockDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UnlockDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.UnlockDeploymentRequest;

                    /**
                     * Creates a plain object from an UnlockDeploymentRequest message. Also converts values to other types if specified.
                     * @param message UnlockDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.UnlockDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UnlockDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UnlockDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportLockInfoRequest. */
                interface IExportLockInfoRequest {

                    /** ExportLockInfoRequest name */
                    name?: (string|null);
                }

                /** Represents an ExportLockInfoRequest. */
                class ExportLockInfoRequest implements IExportLockInfoRequest {

                    /**
                     * Constructs a new ExportLockInfoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IExportLockInfoRequest);

                    /** ExportLockInfoRequest name. */
                    public name: string;

                    /**
                     * Creates a new ExportLockInfoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportLockInfoRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IExportLockInfoRequest): google.cloud.config.v1.ExportLockInfoRequest;

                    /**
                     * Encodes the specified ExportLockInfoRequest message. Does not implicitly {@link google.cloud.config.v1.ExportLockInfoRequest.verify|verify} messages.
                     * @param message ExportLockInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IExportLockInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportLockInfoRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.ExportLockInfoRequest.verify|verify} messages.
                     * @param message ExportLockInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IExportLockInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportLockInfoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportLockInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ExportLockInfoRequest;

                    /**
                     * Decodes an ExportLockInfoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportLockInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ExportLockInfoRequest;

                    /**
                     * Verifies an ExportLockInfoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportLockInfoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportLockInfoRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ExportLockInfoRequest;

                    /**
                     * Creates a plain object from an ExportLockInfoRequest message. Also converts values to other types if specified.
                     * @param message ExportLockInfoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ExportLockInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportLockInfoRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportLockInfoRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LockInfo. */
                interface ILockInfo {

                    /** LockInfo lockId */
                    lockId?: (number|Long|string|null);

                    /** LockInfo operation */
                    operation?: (string|null);

                    /** LockInfo info */
                    info?: (string|null);

                    /** LockInfo who */
                    who?: (string|null);

                    /** LockInfo version */
                    version?: (string|null);

                    /** LockInfo createTime */
                    createTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a LockInfo. */
                class LockInfo implements ILockInfo {

                    /**
                     * Constructs a new LockInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.ILockInfo);

                    /** LockInfo lockId. */
                    public lockId: (number|Long|string);

                    /** LockInfo operation. */
                    public operation: string;

                    /** LockInfo info. */
                    public info: string;

                    /** LockInfo who. */
                    public who: string;

                    /** LockInfo version. */
                    public version: string;

                    /** LockInfo createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new LockInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LockInfo instance
                     */
                    public static create(properties?: google.cloud.config.v1.ILockInfo): google.cloud.config.v1.LockInfo;

                    /**
                     * Encodes the specified LockInfo message. Does not implicitly {@link google.cloud.config.v1.LockInfo.verify|verify} messages.
                     * @param message LockInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.ILockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LockInfo message, length delimited. Does not implicitly {@link google.cloud.config.v1.LockInfo.verify|verify} messages.
                     * @param message LockInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.ILockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LockInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LockInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.LockInfo;

                    /**
                     * Decodes a LockInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LockInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.LockInfo;

                    /**
                     * Verifies a LockInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LockInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LockInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.LockInfo;

                    /**
                     * Creates a plain object from a LockInfo message. Also converts values to other types if specified.
                     * @param message LockInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.LockInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LockInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LockInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Preview. */
                interface IPreview {

                    /** Preview terraformBlueprint */
                    terraformBlueprint?: (google.cloud.config.v1.ITerraformBlueprint|null);

                    /** Preview name */
                    name?: (string|null);

                    /** Preview createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Preview labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Preview state */
                    state?: (google.cloud.config.v1.Preview.State|keyof typeof google.cloud.config.v1.Preview.State|null);

                    /** Preview deployment */
                    deployment?: (string|null);

                    /** Preview previewMode */
                    previewMode?: (google.cloud.config.v1.Preview.PreviewMode|keyof typeof google.cloud.config.v1.Preview.PreviewMode|null);

                    /** Preview serviceAccount */
                    serviceAccount?: (string|null);

                    /** Preview artifactsGcsBucket */
                    artifactsGcsBucket?: (string|null);

                    /** Preview workerPool */
                    workerPool?: (string|null);

                    /** Preview errorCode */
                    errorCode?: (google.cloud.config.v1.Preview.ErrorCode|keyof typeof google.cloud.config.v1.Preview.ErrorCode|null);

                    /** Preview errorStatus */
                    errorStatus?: (google.rpc.IStatus|null);

                    /** Preview build */
                    build?: (string|null);

                    /** Preview tfErrors */
                    tfErrors?: (google.cloud.config.v1.ITerraformError[]|null);

                    /** Preview errorLogs */
                    errorLogs?: (string|null);

                    /** Preview previewArtifacts */
                    previewArtifacts?: (google.cloud.config.v1.IPreviewArtifacts|null);

                    /** Preview logs */
                    logs?: (string|null);

                    /** Preview tfVersion */
                    tfVersion?: (string|null);

                    /** Preview tfVersionConstraint */
                    tfVersionConstraint?: (string|null);

                    /** Preview annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** Preview providerConfig */
                    providerConfig?: (google.cloud.config.v1.IProviderConfig|null);
                }

                /** Represents a Preview. */
                class Preview implements IPreview {

                    /**
                     * Constructs a new Preview.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IPreview);

                    /** Preview terraformBlueprint. */
                    public terraformBlueprint?: (google.cloud.config.v1.ITerraformBlueprint|null);

                    /** Preview name. */
                    public name: string;

                    /** Preview createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Preview labels. */
                    public labels: { [k: string]: string };

                    /** Preview state. */
                    public state: (google.cloud.config.v1.Preview.State|keyof typeof google.cloud.config.v1.Preview.State);

                    /** Preview deployment. */
                    public deployment: string;

                    /** Preview previewMode. */
                    public previewMode: (google.cloud.config.v1.Preview.PreviewMode|keyof typeof google.cloud.config.v1.Preview.PreviewMode);

                    /** Preview serviceAccount. */
                    public serviceAccount: string;

                    /** Preview artifactsGcsBucket. */
                    public artifactsGcsBucket?: (string|null);

                    /** Preview workerPool. */
                    public workerPool?: (string|null);

                    /** Preview errorCode. */
                    public errorCode: (google.cloud.config.v1.Preview.ErrorCode|keyof typeof google.cloud.config.v1.Preview.ErrorCode);

                    /** Preview errorStatus. */
                    public errorStatus?: (google.rpc.IStatus|null);

                    /** Preview build. */
                    public build: string;

                    /** Preview tfErrors. */
                    public tfErrors: google.cloud.config.v1.ITerraformError[];

                    /** Preview errorLogs. */
                    public errorLogs: string;

                    /** Preview previewArtifacts. */
                    public previewArtifacts?: (google.cloud.config.v1.IPreviewArtifacts|null);

                    /** Preview logs. */
                    public logs: string;

                    /** Preview tfVersion. */
                    public tfVersion: string;

                    /** Preview tfVersionConstraint. */
                    public tfVersionConstraint?: (string|null);

                    /** Preview annotations. */
                    public annotations: { [k: string]: string };

                    /** Preview providerConfig. */
                    public providerConfig?: (google.cloud.config.v1.IProviderConfig|null);

                    /** Preview blueprint. */
                    public blueprint?: "terraformBlueprint";

                    /**
                     * Creates a new Preview instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Preview instance
                     */
                    public static create(properties?: google.cloud.config.v1.IPreview): google.cloud.config.v1.Preview;

                    /**
                     * Encodes the specified Preview message. Does not implicitly {@link google.cloud.config.v1.Preview.verify|verify} messages.
                     * @param message Preview message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IPreview, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Preview message, length delimited. Does not implicitly {@link google.cloud.config.v1.Preview.verify|verify} messages.
                     * @param message Preview message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IPreview, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Preview message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Preview
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.Preview;

                    /**
                     * Decodes a Preview message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Preview
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.Preview;

                    /**
                     * Verifies a Preview message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Preview message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Preview
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.Preview;

                    /**
                     * Creates a plain object from a Preview message. Also converts values to other types if specified.
                     * @param message Preview
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.Preview, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Preview to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Preview
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Preview {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        SUCCEEDED = 2,
                        APPLYING = 3,
                        STALE = 4,
                        DELETING = 5,
                        FAILED = 6,
                        DELETED = 7
                    }

                    /** PreviewMode enum. */
                    enum PreviewMode {
                        PREVIEW_MODE_UNSPECIFIED = 0,
                        DEFAULT = 1,
                        DELETE = 2
                    }

                    /** ErrorCode enum. */
                    enum ErrorCode {
                        ERROR_CODE_UNSPECIFIED = 0,
                        CLOUD_BUILD_PERMISSION_DENIED = 1,
                        BUCKET_CREATION_PERMISSION_DENIED = 2,
                        BUCKET_CREATION_FAILED = 3,
                        DEPLOYMENT_LOCK_ACQUIRE_FAILED = 4,
                        PREVIEW_BUILD_API_FAILED = 5,
                        PREVIEW_BUILD_RUN_FAILED = 6
                    }
                }

                /** Properties of a PreviewOperationMetadata. */
                interface IPreviewOperationMetadata {

                    /** PreviewOperationMetadata step */
                    step?: (google.cloud.config.v1.PreviewOperationMetadata.PreviewStep|keyof typeof google.cloud.config.v1.PreviewOperationMetadata.PreviewStep|null);

                    /** PreviewOperationMetadata previewArtifacts */
                    previewArtifacts?: (google.cloud.config.v1.IPreviewArtifacts|null);

                    /** PreviewOperationMetadata logs */
                    logs?: (string|null);

                    /** PreviewOperationMetadata build */
                    build?: (string|null);
                }

                /** Represents a PreviewOperationMetadata. */
                class PreviewOperationMetadata implements IPreviewOperationMetadata {

                    /**
                     * Constructs a new PreviewOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IPreviewOperationMetadata);

                    /** PreviewOperationMetadata step. */
                    public step: (google.cloud.config.v1.PreviewOperationMetadata.PreviewStep|keyof typeof google.cloud.config.v1.PreviewOperationMetadata.PreviewStep);

                    /** PreviewOperationMetadata previewArtifacts. */
                    public previewArtifacts?: (google.cloud.config.v1.IPreviewArtifacts|null);

                    /** PreviewOperationMetadata logs. */
                    public logs: string;

                    /** PreviewOperationMetadata build. */
                    public build: string;

                    /**
                     * Creates a new PreviewOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreviewOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.config.v1.IPreviewOperationMetadata): google.cloud.config.v1.PreviewOperationMetadata;

                    /**
                     * Encodes the specified PreviewOperationMetadata message. Does not implicitly {@link google.cloud.config.v1.PreviewOperationMetadata.verify|verify} messages.
                     * @param message PreviewOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IPreviewOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreviewOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.config.v1.PreviewOperationMetadata.verify|verify} messages.
                     * @param message PreviewOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IPreviewOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreviewOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreviewOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.PreviewOperationMetadata;

                    /**
                     * Decodes a PreviewOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreviewOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.PreviewOperationMetadata;

                    /**
                     * Verifies a PreviewOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreviewOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreviewOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.PreviewOperationMetadata;

                    /**
                     * Creates a plain object from a PreviewOperationMetadata message. Also converts values to other types if specified.
                     * @param message PreviewOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.PreviewOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreviewOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PreviewOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PreviewOperationMetadata {

                    /** PreviewStep enum. */
                    enum PreviewStep {
                        PREVIEW_STEP_UNSPECIFIED = 0,
                        PREPARING_STORAGE_BUCKET = 1,
                        DOWNLOADING_BLUEPRINT = 2,
                        RUNNING_TF_INIT = 3,
                        RUNNING_TF_PLAN = 4,
                        FETCHING_DEPLOYMENT = 5,
                        LOCKING_DEPLOYMENT = 6,
                        UNLOCKING_DEPLOYMENT = 7,
                        SUCCEEDED = 8,
                        FAILED = 9,
                        VALIDATING_REPOSITORY = 10
                    }
                }

                /** Properties of a PreviewArtifacts. */
                interface IPreviewArtifacts {

                    /** PreviewArtifacts content */
                    content?: (string|null);

                    /** PreviewArtifacts artifacts */
                    artifacts?: (string|null);
                }

                /** Represents a PreviewArtifacts. */
                class PreviewArtifacts implements IPreviewArtifacts {

                    /**
                     * Constructs a new PreviewArtifacts.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IPreviewArtifacts);

                    /** PreviewArtifacts content. */
                    public content: string;

                    /** PreviewArtifacts artifacts. */
                    public artifacts: string;

                    /**
                     * Creates a new PreviewArtifacts instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreviewArtifacts instance
                     */
                    public static create(properties?: google.cloud.config.v1.IPreviewArtifacts): google.cloud.config.v1.PreviewArtifacts;

                    /**
                     * Encodes the specified PreviewArtifacts message. Does not implicitly {@link google.cloud.config.v1.PreviewArtifacts.verify|verify} messages.
                     * @param message PreviewArtifacts message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IPreviewArtifacts, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreviewArtifacts message, length delimited. Does not implicitly {@link google.cloud.config.v1.PreviewArtifacts.verify|verify} messages.
                     * @param message PreviewArtifacts message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IPreviewArtifacts, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreviewArtifacts message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreviewArtifacts
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.PreviewArtifacts;

                    /**
                     * Decodes a PreviewArtifacts message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreviewArtifacts
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.PreviewArtifacts;

                    /**
                     * Verifies a PreviewArtifacts message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreviewArtifacts message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreviewArtifacts
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.PreviewArtifacts;

                    /**
                     * Creates a plain object from a PreviewArtifacts message. Also converts values to other types if specified.
                     * @param message PreviewArtifacts
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.PreviewArtifacts, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreviewArtifacts to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PreviewArtifacts
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePreviewRequest. */
                interface ICreatePreviewRequest {

                    /** CreatePreviewRequest parent */
                    parent?: (string|null);

                    /** CreatePreviewRequest previewId */
                    previewId?: (string|null);

                    /** CreatePreviewRequest preview */
                    preview?: (google.cloud.config.v1.IPreview|null);

                    /** CreatePreviewRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreatePreviewRequest. */
                class CreatePreviewRequest implements ICreatePreviewRequest {

                    /**
                     * Constructs a new CreatePreviewRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.ICreatePreviewRequest);

                    /** CreatePreviewRequest parent. */
                    public parent: string;

                    /** CreatePreviewRequest previewId. */
                    public previewId: string;

                    /** CreatePreviewRequest preview. */
                    public preview?: (google.cloud.config.v1.IPreview|null);

                    /** CreatePreviewRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreatePreviewRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePreviewRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.ICreatePreviewRequest): google.cloud.config.v1.CreatePreviewRequest;

                    /**
                     * Encodes the specified CreatePreviewRequest message. Does not implicitly {@link google.cloud.config.v1.CreatePreviewRequest.verify|verify} messages.
                     * @param message CreatePreviewRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.ICreatePreviewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePreviewRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.CreatePreviewRequest.verify|verify} messages.
                     * @param message CreatePreviewRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.ICreatePreviewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePreviewRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePreviewRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.CreatePreviewRequest;

                    /**
                     * Decodes a CreatePreviewRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePreviewRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.CreatePreviewRequest;

                    /**
                     * Verifies a CreatePreviewRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePreviewRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePreviewRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.CreatePreviewRequest;

                    /**
                     * Creates a plain object from a CreatePreviewRequest message. Also converts values to other types if specified.
                     * @param message CreatePreviewRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.CreatePreviewRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePreviewRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePreviewRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPreviewRequest. */
                interface IGetPreviewRequest {

                    /** GetPreviewRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPreviewRequest. */
                class GetPreviewRequest implements IGetPreviewRequest {

                    /**
                     * Constructs a new GetPreviewRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IGetPreviewRequest);

                    /** GetPreviewRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPreviewRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPreviewRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IGetPreviewRequest): google.cloud.config.v1.GetPreviewRequest;

                    /**
                     * Encodes the specified GetPreviewRequest message. Does not implicitly {@link google.cloud.config.v1.GetPreviewRequest.verify|verify} messages.
                     * @param message GetPreviewRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IGetPreviewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPreviewRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.GetPreviewRequest.verify|verify} messages.
                     * @param message GetPreviewRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IGetPreviewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPreviewRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPreviewRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.GetPreviewRequest;

                    /**
                     * Decodes a GetPreviewRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPreviewRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.GetPreviewRequest;

                    /**
                     * Verifies a GetPreviewRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPreviewRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPreviewRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.GetPreviewRequest;

                    /**
                     * Creates a plain object from a GetPreviewRequest message. Also converts values to other types if specified.
                     * @param message GetPreviewRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.GetPreviewRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPreviewRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPreviewRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPreviewsRequest. */
                interface IListPreviewsRequest {

                    /** ListPreviewsRequest parent */
                    parent?: (string|null);

                    /** ListPreviewsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPreviewsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPreviewsRequest filter */
                    filter?: (string|null);

                    /** ListPreviewsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListPreviewsRequest. */
                class ListPreviewsRequest implements IListPreviewsRequest {

                    /**
                     * Constructs a new ListPreviewsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListPreviewsRequest);

                    /** ListPreviewsRequest parent. */
                    public parent: string;

                    /** ListPreviewsRequest pageSize. */
                    public pageSize: number;

                    /** ListPreviewsRequest pageToken. */
                    public pageToken: string;

                    /** ListPreviewsRequest filter. */
                    public filter: string;

                    /** ListPreviewsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListPreviewsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPreviewsRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListPreviewsRequest): google.cloud.config.v1.ListPreviewsRequest;

                    /**
                     * Encodes the specified ListPreviewsRequest message. Does not implicitly {@link google.cloud.config.v1.ListPreviewsRequest.verify|verify} messages.
                     * @param message ListPreviewsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListPreviewsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPreviewsRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListPreviewsRequest.verify|verify} messages.
                     * @param message ListPreviewsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListPreviewsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPreviewsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPreviewsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListPreviewsRequest;

                    /**
                     * Decodes a ListPreviewsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPreviewsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListPreviewsRequest;

                    /**
                     * Verifies a ListPreviewsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPreviewsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPreviewsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListPreviewsRequest;

                    /**
                     * Creates a plain object from a ListPreviewsRequest message. Also converts values to other types if specified.
                     * @param message ListPreviewsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListPreviewsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPreviewsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPreviewsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPreviewsResponse. */
                interface IListPreviewsResponse {

                    /** ListPreviewsResponse previews */
                    previews?: (google.cloud.config.v1.IPreview[]|null);

                    /** ListPreviewsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListPreviewsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListPreviewsResponse. */
                class ListPreviewsResponse implements IListPreviewsResponse {

                    /**
                     * Constructs a new ListPreviewsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListPreviewsResponse);

                    /** ListPreviewsResponse previews. */
                    public previews: google.cloud.config.v1.IPreview[];

                    /** ListPreviewsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListPreviewsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListPreviewsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPreviewsResponse instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListPreviewsResponse): google.cloud.config.v1.ListPreviewsResponse;

                    /**
                     * Encodes the specified ListPreviewsResponse message. Does not implicitly {@link google.cloud.config.v1.ListPreviewsResponse.verify|verify} messages.
                     * @param message ListPreviewsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListPreviewsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPreviewsResponse message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListPreviewsResponse.verify|verify} messages.
                     * @param message ListPreviewsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListPreviewsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPreviewsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPreviewsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListPreviewsResponse;

                    /**
                     * Decodes a ListPreviewsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPreviewsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListPreviewsResponse;

                    /**
                     * Verifies a ListPreviewsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPreviewsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPreviewsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListPreviewsResponse;

                    /**
                     * Creates a plain object from a ListPreviewsResponse message. Also converts values to other types if specified.
                     * @param message ListPreviewsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListPreviewsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPreviewsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPreviewsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePreviewRequest. */
                interface IDeletePreviewRequest {

                    /** DeletePreviewRequest name */
                    name?: (string|null);

                    /** DeletePreviewRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeletePreviewRequest. */
                class DeletePreviewRequest implements IDeletePreviewRequest {

                    /**
                     * Constructs a new DeletePreviewRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IDeletePreviewRequest);

                    /** DeletePreviewRequest name. */
                    public name: string;

                    /** DeletePreviewRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeletePreviewRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePreviewRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IDeletePreviewRequest): google.cloud.config.v1.DeletePreviewRequest;

                    /**
                     * Encodes the specified DeletePreviewRequest message. Does not implicitly {@link google.cloud.config.v1.DeletePreviewRequest.verify|verify} messages.
                     * @param message DeletePreviewRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IDeletePreviewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePreviewRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.DeletePreviewRequest.verify|verify} messages.
                     * @param message DeletePreviewRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IDeletePreviewRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePreviewRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePreviewRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.DeletePreviewRequest;

                    /**
                     * Decodes a DeletePreviewRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePreviewRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.DeletePreviewRequest;

                    /**
                     * Verifies a DeletePreviewRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePreviewRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePreviewRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.DeletePreviewRequest;

                    /**
                     * Creates a plain object from a DeletePreviewRequest message. Also converts values to other types if specified.
                     * @param message DeletePreviewRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.DeletePreviewRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePreviewRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePreviewRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportPreviewResultRequest. */
                interface IExportPreviewResultRequest {

                    /** ExportPreviewResultRequest parent */
                    parent?: (string|null);
                }

                /** Represents an ExportPreviewResultRequest. */
                class ExportPreviewResultRequest implements IExportPreviewResultRequest {

                    /**
                     * Constructs a new ExportPreviewResultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IExportPreviewResultRequest);

                    /** ExportPreviewResultRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new ExportPreviewResultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportPreviewResultRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IExportPreviewResultRequest): google.cloud.config.v1.ExportPreviewResultRequest;

                    /**
                     * Encodes the specified ExportPreviewResultRequest message. Does not implicitly {@link google.cloud.config.v1.ExportPreviewResultRequest.verify|verify} messages.
                     * @param message ExportPreviewResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IExportPreviewResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportPreviewResultRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.ExportPreviewResultRequest.verify|verify} messages.
                     * @param message ExportPreviewResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IExportPreviewResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportPreviewResultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportPreviewResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ExportPreviewResultRequest;

                    /**
                     * Decodes an ExportPreviewResultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportPreviewResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ExportPreviewResultRequest;

                    /**
                     * Verifies an ExportPreviewResultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportPreviewResultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportPreviewResultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ExportPreviewResultRequest;

                    /**
                     * Creates a plain object from an ExportPreviewResultRequest message. Also converts values to other types if specified.
                     * @param message ExportPreviewResultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ExportPreviewResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportPreviewResultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportPreviewResultRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportPreviewResultResponse. */
                interface IExportPreviewResultResponse {

                    /** ExportPreviewResultResponse result */
                    result?: (google.cloud.config.v1.IPreviewResult|null);
                }

                /** Represents an ExportPreviewResultResponse. */
                class ExportPreviewResultResponse implements IExportPreviewResultResponse {

                    /**
                     * Constructs a new ExportPreviewResultResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IExportPreviewResultResponse);

                    /** ExportPreviewResultResponse result. */
                    public result?: (google.cloud.config.v1.IPreviewResult|null);

                    /**
                     * Creates a new ExportPreviewResultResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportPreviewResultResponse instance
                     */
                    public static create(properties?: google.cloud.config.v1.IExportPreviewResultResponse): google.cloud.config.v1.ExportPreviewResultResponse;

                    /**
                     * Encodes the specified ExportPreviewResultResponse message. Does not implicitly {@link google.cloud.config.v1.ExportPreviewResultResponse.verify|verify} messages.
                     * @param message ExportPreviewResultResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IExportPreviewResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportPreviewResultResponse message, length delimited. Does not implicitly {@link google.cloud.config.v1.ExportPreviewResultResponse.verify|verify} messages.
                     * @param message ExportPreviewResultResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IExportPreviewResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportPreviewResultResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportPreviewResultResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ExportPreviewResultResponse;

                    /**
                     * Decodes an ExportPreviewResultResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportPreviewResultResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ExportPreviewResultResponse;

                    /**
                     * Verifies an ExportPreviewResultResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportPreviewResultResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportPreviewResultResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ExportPreviewResultResponse;

                    /**
                     * Creates a plain object from an ExportPreviewResultResponse message. Also converts values to other types if specified.
                     * @param message ExportPreviewResultResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ExportPreviewResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportPreviewResultResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportPreviewResultResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PreviewResult. */
                interface IPreviewResult {

                    /** PreviewResult binarySignedUri */
                    binarySignedUri?: (string|null);

                    /** PreviewResult jsonSignedUri */
                    jsonSignedUri?: (string|null);
                }

                /** Represents a PreviewResult. */
                class PreviewResult implements IPreviewResult {

                    /**
                     * Constructs a new PreviewResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IPreviewResult);

                    /** PreviewResult binarySignedUri. */
                    public binarySignedUri: string;

                    /** PreviewResult jsonSignedUri. */
                    public jsonSignedUri: string;

                    /**
                     * Creates a new PreviewResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreviewResult instance
                     */
                    public static create(properties?: google.cloud.config.v1.IPreviewResult): google.cloud.config.v1.PreviewResult;

                    /**
                     * Encodes the specified PreviewResult message. Does not implicitly {@link google.cloud.config.v1.PreviewResult.verify|verify} messages.
                     * @param message PreviewResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IPreviewResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreviewResult message, length delimited. Does not implicitly {@link google.cloud.config.v1.PreviewResult.verify|verify} messages.
                     * @param message PreviewResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IPreviewResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreviewResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreviewResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.PreviewResult;

                    /**
                     * Decodes a PreviewResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreviewResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.PreviewResult;

                    /**
                     * Verifies a PreviewResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreviewResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreviewResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.PreviewResult;

                    /**
                     * Creates a plain object from a PreviewResult message. Also converts values to other types if specified.
                     * @param message PreviewResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.PreviewResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreviewResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PreviewResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTerraformVersionRequest. */
                interface IGetTerraformVersionRequest {

                    /** GetTerraformVersionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTerraformVersionRequest. */
                class GetTerraformVersionRequest implements IGetTerraformVersionRequest {

                    /**
                     * Constructs a new GetTerraformVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IGetTerraformVersionRequest);

                    /** GetTerraformVersionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTerraformVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTerraformVersionRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IGetTerraformVersionRequest): google.cloud.config.v1.GetTerraformVersionRequest;

                    /**
                     * Encodes the specified GetTerraformVersionRequest message. Does not implicitly {@link google.cloud.config.v1.GetTerraformVersionRequest.verify|verify} messages.
                     * @param message GetTerraformVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IGetTerraformVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTerraformVersionRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.GetTerraformVersionRequest.verify|verify} messages.
                     * @param message GetTerraformVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IGetTerraformVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTerraformVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTerraformVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.GetTerraformVersionRequest;

                    /**
                     * Decodes a GetTerraformVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTerraformVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.GetTerraformVersionRequest;

                    /**
                     * Verifies a GetTerraformVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTerraformVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTerraformVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.GetTerraformVersionRequest;

                    /**
                     * Creates a plain object from a GetTerraformVersionRequest message. Also converts values to other types if specified.
                     * @param message GetTerraformVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.GetTerraformVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTerraformVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTerraformVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTerraformVersionsRequest. */
                interface IListTerraformVersionsRequest {

                    /** ListTerraformVersionsRequest parent */
                    parent?: (string|null);

                    /** ListTerraformVersionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTerraformVersionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListTerraformVersionsRequest filter */
                    filter?: (string|null);

                    /** ListTerraformVersionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListTerraformVersionsRequest. */
                class ListTerraformVersionsRequest implements IListTerraformVersionsRequest {

                    /**
                     * Constructs a new ListTerraformVersionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListTerraformVersionsRequest);

                    /** ListTerraformVersionsRequest parent. */
                    public parent: string;

                    /** ListTerraformVersionsRequest pageSize. */
                    public pageSize: number;

                    /** ListTerraformVersionsRequest pageToken. */
                    public pageToken: string;

                    /** ListTerraformVersionsRequest filter. */
                    public filter: string;

                    /** ListTerraformVersionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListTerraformVersionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTerraformVersionsRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListTerraformVersionsRequest): google.cloud.config.v1.ListTerraformVersionsRequest;

                    /**
                     * Encodes the specified ListTerraformVersionsRequest message. Does not implicitly {@link google.cloud.config.v1.ListTerraformVersionsRequest.verify|verify} messages.
                     * @param message ListTerraformVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListTerraformVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTerraformVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListTerraformVersionsRequest.verify|verify} messages.
                     * @param message ListTerraformVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListTerraformVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTerraformVersionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTerraformVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListTerraformVersionsRequest;

                    /**
                     * Decodes a ListTerraformVersionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTerraformVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListTerraformVersionsRequest;

                    /**
                     * Verifies a ListTerraformVersionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTerraformVersionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTerraformVersionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListTerraformVersionsRequest;

                    /**
                     * Creates a plain object from a ListTerraformVersionsRequest message. Also converts values to other types if specified.
                     * @param message ListTerraformVersionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListTerraformVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTerraformVersionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTerraformVersionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTerraformVersionsResponse. */
                interface IListTerraformVersionsResponse {

                    /** ListTerraformVersionsResponse terraformVersions */
                    terraformVersions?: (google.cloud.config.v1.ITerraformVersion[]|null);

                    /** ListTerraformVersionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListTerraformVersionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListTerraformVersionsResponse. */
                class ListTerraformVersionsResponse implements IListTerraformVersionsResponse {

                    /**
                     * Constructs a new ListTerraformVersionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListTerraformVersionsResponse);

                    /** ListTerraformVersionsResponse terraformVersions. */
                    public terraformVersions: google.cloud.config.v1.ITerraformVersion[];

                    /** ListTerraformVersionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListTerraformVersionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListTerraformVersionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTerraformVersionsResponse instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListTerraformVersionsResponse): google.cloud.config.v1.ListTerraformVersionsResponse;

                    /**
                     * Encodes the specified ListTerraformVersionsResponse message. Does not implicitly {@link google.cloud.config.v1.ListTerraformVersionsResponse.verify|verify} messages.
                     * @param message ListTerraformVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListTerraformVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTerraformVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListTerraformVersionsResponse.verify|verify} messages.
                     * @param message ListTerraformVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListTerraformVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTerraformVersionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTerraformVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListTerraformVersionsResponse;

                    /**
                     * Decodes a ListTerraformVersionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTerraformVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListTerraformVersionsResponse;

                    /**
                     * Verifies a ListTerraformVersionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTerraformVersionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTerraformVersionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListTerraformVersionsResponse;

                    /**
                     * Creates a plain object from a ListTerraformVersionsResponse message. Also converts values to other types if specified.
                     * @param message ListTerraformVersionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListTerraformVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTerraformVersionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTerraformVersionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TerraformVersion. */
                interface ITerraformVersion {

                    /** TerraformVersion name */
                    name?: (string|null);

                    /** TerraformVersion state */
                    state?: (google.cloud.config.v1.TerraformVersion.State|keyof typeof google.cloud.config.v1.TerraformVersion.State|null);

                    /** TerraformVersion supportTime */
                    supportTime?: (google.protobuf.ITimestamp|null);

                    /** TerraformVersion deprecateTime */
                    deprecateTime?: (google.protobuf.ITimestamp|null);

                    /** TerraformVersion obsoleteTime */
                    obsoleteTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TerraformVersion. */
                class TerraformVersion implements ITerraformVersion {

                    /**
                     * Constructs a new TerraformVersion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.ITerraformVersion);

                    /** TerraformVersion name. */
                    public name: string;

                    /** TerraformVersion state. */
                    public state: (google.cloud.config.v1.TerraformVersion.State|keyof typeof google.cloud.config.v1.TerraformVersion.State);

                    /** TerraformVersion supportTime. */
                    public supportTime?: (google.protobuf.ITimestamp|null);

                    /** TerraformVersion deprecateTime. */
                    public deprecateTime?: (google.protobuf.ITimestamp|null);

                    /** TerraformVersion obsoleteTime. */
                    public obsoleteTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TerraformVersion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TerraformVersion instance
                     */
                    public static create(properties?: google.cloud.config.v1.ITerraformVersion): google.cloud.config.v1.TerraformVersion;

                    /**
                     * Encodes the specified TerraformVersion message. Does not implicitly {@link google.cloud.config.v1.TerraformVersion.verify|verify} messages.
                     * @param message TerraformVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.ITerraformVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TerraformVersion message, length delimited. Does not implicitly {@link google.cloud.config.v1.TerraformVersion.verify|verify} messages.
                     * @param message TerraformVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.ITerraformVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TerraformVersion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TerraformVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.TerraformVersion;

                    /**
                     * Decodes a TerraformVersion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TerraformVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.TerraformVersion;

                    /**
                     * Verifies a TerraformVersion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TerraformVersion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TerraformVersion
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.TerraformVersion;

                    /**
                     * Creates a plain object from a TerraformVersion message. Also converts values to other types if specified.
                     * @param message TerraformVersion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.TerraformVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TerraformVersion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TerraformVersion
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TerraformVersion {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        DEPRECATED = 2,
                        OBSOLETE = 3
                    }
                }

                /** Properties of a ResourceChangeTerraformInfo. */
                interface IResourceChangeTerraformInfo {

                    /** ResourceChangeTerraformInfo address */
                    address?: (string|null);

                    /** ResourceChangeTerraformInfo type */
                    type?: (string|null);

                    /** ResourceChangeTerraformInfo resourceName */
                    resourceName?: (string|null);

                    /** ResourceChangeTerraformInfo provider */
                    provider?: (string|null);

                    /** ResourceChangeTerraformInfo actions */
                    actions?: (string[]|null);
                }

                /** Represents a ResourceChangeTerraformInfo. */
                class ResourceChangeTerraformInfo implements IResourceChangeTerraformInfo {

                    /**
                     * Constructs a new ResourceChangeTerraformInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IResourceChangeTerraformInfo);

                    /** ResourceChangeTerraformInfo address. */
                    public address: string;

                    /** ResourceChangeTerraformInfo type. */
                    public type: string;

                    /** ResourceChangeTerraformInfo resourceName. */
                    public resourceName: string;

                    /** ResourceChangeTerraformInfo provider. */
                    public provider: string;

                    /** ResourceChangeTerraformInfo actions. */
                    public actions: string[];

                    /**
                     * Creates a new ResourceChangeTerraformInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceChangeTerraformInfo instance
                     */
                    public static create(properties?: google.cloud.config.v1.IResourceChangeTerraformInfo): google.cloud.config.v1.ResourceChangeTerraformInfo;

                    /**
                     * Encodes the specified ResourceChangeTerraformInfo message. Does not implicitly {@link google.cloud.config.v1.ResourceChangeTerraformInfo.verify|verify} messages.
                     * @param message ResourceChangeTerraformInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IResourceChangeTerraformInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceChangeTerraformInfo message, length delimited. Does not implicitly {@link google.cloud.config.v1.ResourceChangeTerraformInfo.verify|verify} messages.
                     * @param message ResourceChangeTerraformInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IResourceChangeTerraformInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceChangeTerraformInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceChangeTerraformInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ResourceChangeTerraformInfo;

                    /**
                     * Decodes a ResourceChangeTerraformInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceChangeTerraformInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ResourceChangeTerraformInfo;

                    /**
                     * Verifies a ResourceChangeTerraformInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceChangeTerraformInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceChangeTerraformInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ResourceChangeTerraformInfo;

                    /**
                     * Creates a plain object from a ResourceChangeTerraformInfo message. Also converts values to other types if specified.
                     * @param message ResourceChangeTerraformInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ResourceChangeTerraformInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceChangeTerraformInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceChangeTerraformInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceChange. */
                interface IResourceChange {

                    /** ResourceChange name */
                    name?: (string|null);

                    /** ResourceChange terraformInfo */
                    terraformInfo?: (google.cloud.config.v1.IResourceChangeTerraformInfo|null);

                    /** ResourceChange intent */
                    intent?: (google.cloud.config.v1.ResourceChange.Intent|keyof typeof google.cloud.config.v1.ResourceChange.Intent|null);

                    /** ResourceChange propertyChanges */
                    propertyChanges?: (google.cloud.config.v1.IPropertyChange[]|null);
                }

                /** Represents a ResourceChange. */
                class ResourceChange implements IResourceChange {

                    /**
                     * Constructs a new ResourceChange.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IResourceChange);

                    /** ResourceChange name. */
                    public name: string;

                    /** ResourceChange terraformInfo. */
                    public terraformInfo?: (google.cloud.config.v1.IResourceChangeTerraformInfo|null);

                    /** ResourceChange intent. */
                    public intent: (google.cloud.config.v1.ResourceChange.Intent|keyof typeof google.cloud.config.v1.ResourceChange.Intent);

                    /** ResourceChange propertyChanges. */
                    public propertyChanges: google.cloud.config.v1.IPropertyChange[];

                    /**
                     * Creates a new ResourceChange instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceChange instance
                     */
                    public static create(properties?: google.cloud.config.v1.IResourceChange): google.cloud.config.v1.ResourceChange;

                    /**
                     * Encodes the specified ResourceChange message. Does not implicitly {@link google.cloud.config.v1.ResourceChange.verify|verify} messages.
                     * @param message ResourceChange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IResourceChange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceChange message, length delimited. Does not implicitly {@link google.cloud.config.v1.ResourceChange.verify|verify} messages.
                     * @param message ResourceChange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IResourceChange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceChange message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceChange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ResourceChange;

                    /**
                     * Decodes a ResourceChange message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceChange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ResourceChange;

                    /**
                     * Verifies a ResourceChange message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceChange message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceChange
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ResourceChange;

                    /**
                     * Creates a plain object from a ResourceChange message. Also converts values to other types if specified.
                     * @param message ResourceChange
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ResourceChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceChange to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceChange
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ResourceChange {

                    /** Intent enum. */
                    enum Intent {
                        INTENT_UNSPECIFIED = 0,
                        CREATE = 1,
                        UPDATE = 2,
                        DELETE = 3,
                        RECREATE = 4,
                        UNCHANGED = 5
                    }
                }

                /** Properties of a PropertyChange. */
                interface IPropertyChange {

                    /** PropertyChange path */
                    path?: (string|null);

                    /** PropertyChange beforeSensitivePaths */
                    beforeSensitivePaths?: (string[]|null);

                    /** PropertyChange before */
                    before?: (google.protobuf.IValue|null);

                    /** PropertyChange afterSensitivePaths */
                    afterSensitivePaths?: (string[]|null);

                    /** PropertyChange after */
                    after?: (google.protobuf.IValue|null);
                }

                /** Represents a PropertyChange. */
                class PropertyChange implements IPropertyChange {

                    /**
                     * Constructs a new PropertyChange.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IPropertyChange);

                    /** PropertyChange path. */
                    public path: string;

                    /** PropertyChange beforeSensitivePaths. */
                    public beforeSensitivePaths: string[];

                    /** PropertyChange before. */
                    public before?: (google.protobuf.IValue|null);

                    /** PropertyChange afterSensitivePaths. */
                    public afterSensitivePaths: string[];

                    /** PropertyChange after. */
                    public after?: (google.protobuf.IValue|null);

                    /**
                     * Creates a new PropertyChange instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PropertyChange instance
                     */
                    public static create(properties?: google.cloud.config.v1.IPropertyChange): google.cloud.config.v1.PropertyChange;

                    /**
                     * Encodes the specified PropertyChange message. Does not implicitly {@link google.cloud.config.v1.PropertyChange.verify|verify} messages.
                     * @param message PropertyChange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IPropertyChange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PropertyChange message, length delimited. Does not implicitly {@link google.cloud.config.v1.PropertyChange.verify|verify} messages.
                     * @param message PropertyChange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IPropertyChange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PropertyChange message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PropertyChange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.PropertyChange;

                    /**
                     * Decodes a PropertyChange message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PropertyChange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.PropertyChange;

                    /**
                     * Verifies a PropertyChange message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PropertyChange message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PropertyChange
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.PropertyChange;

                    /**
                     * Creates a plain object from a PropertyChange message. Also converts values to other types if specified.
                     * @param message PropertyChange
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.PropertyChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PropertyChange to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PropertyChange
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListResourceChangesRequest. */
                interface IListResourceChangesRequest {

                    /** ListResourceChangesRequest parent */
                    parent?: (string|null);

                    /** ListResourceChangesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListResourceChangesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListResourceChangesRequest filter */
                    filter?: (string|null);

                    /** ListResourceChangesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListResourceChangesRequest. */
                class ListResourceChangesRequest implements IListResourceChangesRequest {

                    /**
                     * Constructs a new ListResourceChangesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListResourceChangesRequest);

                    /** ListResourceChangesRequest parent. */
                    public parent: string;

                    /** ListResourceChangesRequest pageSize. */
                    public pageSize: number;

                    /** ListResourceChangesRequest pageToken. */
                    public pageToken: string;

                    /** ListResourceChangesRequest filter. */
                    public filter: string;

                    /** ListResourceChangesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListResourceChangesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListResourceChangesRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListResourceChangesRequest): google.cloud.config.v1.ListResourceChangesRequest;

                    /**
                     * Encodes the specified ListResourceChangesRequest message. Does not implicitly {@link google.cloud.config.v1.ListResourceChangesRequest.verify|verify} messages.
                     * @param message ListResourceChangesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListResourceChangesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListResourceChangesRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListResourceChangesRequest.verify|verify} messages.
                     * @param message ListResourceChangesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListResourceChangesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListResourceChangesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListResourceChangesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListResourceChangesRequest;

                    /**
                     * Decodes a ListResourceChangesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListResourceChangesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListResourceChangesRequest;

                    /**
                     * Verifies a ListResourceChangesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListResourceChangesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListResourceChangesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListResourceChangesRequest;

                    /**
                     * Creates a plain object from a ListResourceChangesRequest message. Also converts values to other types if specified.
                     * @param message ListResourceChangesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListResourceChangesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListResourceChangesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListResourceChangesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListResourceChangesResponse. */
                interface IListResourceChangesResponse {

                    /** ListResourceChangesResponse resourceChanges */
                    resourceChanges?: (google.cloud.config.v1.IResourceChange[]|null);

                    /** ListResourceChangesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListResourceChangesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListResourceChangesResponse. */
                class ListResourceChangesResponse implements IListResourceChangesResponse {

                    /**
                     * Constructs a new ListResourceChangesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListResourceChangesResponse);

                    /** ListResourceChangesResponse resourceChanges. */
                    public resourceChanges: google.cloud.config.v1.IResourceChange[];

                    /** ListResourceChangesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListResourceChangesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListResourceChangesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListResourceChangesResponse instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListResourceChangesResponse): google.cloud.config.v1.ListResourceChangesResponse;

                    /**
                     * Encodes the specified ListResourceChangesResponse message. Does not implicitly {@link google.cloud.config.v1.ListResourceChangesResponse.verify|verify} messages.
                     * @param message ListResourceChangesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListResourceChangesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListResourceChangesResponse message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListResourceChangesResponse.verify|verify} messages.
                     * @param message ListResourceChangesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListResourceChangesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListResourceChangesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListResourceChangesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListResourceChangesResponse;

                    /**
                     * Decodes a ListResourceChangesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListResourceChangesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListResourceChangesResponse;

                    /**
                     * Verifies a ListResourceChangesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListResourceChangesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListResourceChangesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListResourceChangesResponse;

                    /**
                     * Creates a plain object from a ListResourceChangesResponse message. Also converts values to other types if specified.
                     * @param message ListResourceChangesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListResourceChangesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListResourceChangesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListResourceChangesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetResourceChangeRequest. */
                interface IGetResourceChangeRequest {

                    /** GetResourceChangeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetResourceChangeRequest. */
                class GetResourceChangeRequest implements IGetResourceChangeRequest {

                    /**
                     * Constructs a new GetResourceChangeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IGetResourceChangeRequest);

                    /** GetResourceChangeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetResourceChangeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetResourceChangeRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IGetResourceChangeRequest): google.cloud.config.v1.GetResourceChangeRequest;

                    /**
                     * Encodes the specified GetResourceChangeRequest message. Does not implicitly {@link google.cloud.config.v1.GetResourceChangeRequest.verify|verify} messages.
                     * @param message GetResourceChangeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IGetResourceChangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetResourceChangeRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.GetResourceChangeRequest.verify|verify} messages.
                     * @param message GetResourceChangeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IGetResourceChangeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetResourceChangeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetResourceChangeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.GetResourceChangeRequest;

                    /**
                     * Decodes a GetResourceChangeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetResourceChangeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.GetResourceChangeRequest;

                    /**
                     * Verifies a GetResourceChangeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetResourceChangeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetResourceChangeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.GetResourceChangeRequest;

                    /**
                     * Creates a plain object from a GetResourceChangeRequest message. Also converts values to other types if specified.
                     * @param message GetResourceChangeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.GetResourceChangeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetResourceChangeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetResourceChangeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceDriftTerraformInfo. */
                interface IResourceDriftTerraformInfo {

                    /** ResourceDriftTerraformInfo address */
                    address?: (string|null);

                    /** ResourceDriftTerraformInfo type */
                    type?: (string|null);

                    /** ResourceDriftTerraformInfo resourceName */
                    resourceName?: (string|null);

                    /** ResourceDriftTerraformInfo provider */
                    provider?: (string|null);
                }

                /** Represents a ResourceDriftTerraformInfo. */
                class ResourceDriftTerraformInfo implements IResourceDriftTerraformInfo {

                    /**
                     * Constructs a new ResourceDriftTerraformInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IResourceDriftTerraformInfo);

                    /** ResourceDriftTerraformInfo address. */
                    public address: string;

                    /** ResourceDriftTerraformInfo type. */
                    public type: string;

                    /** ResourceDriftTerraformInfo resourceName. */
                    public resourceName: string;

                    /** ResourceDriftTerraformInfo provider. */
                    public provider: string;

                    /**
                     * Creates a new ResourceDriftTerraformInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceDriftTerraformInfo instance
                     */
                    public static create(properties?: google.cloud.config.v1.IResourceDriftTerraformInfo): google.cloud.config.v1.ResourceDriftTerraformInfo;

                    /**
                     * Encodes the specified ResourceDriftTerraformInfo message. Does not implicitly {@link google.cloud.config.v1.ResourceDriftTerraformInfo.verify|verify} messages.
                     * @param message ResourceDriftTerraformInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IResourceDriftTerraformInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceDriftTerraformInfo message, length delimited. Does not implicitly {@link google.cloud.config.v1.ResourceDriftTerraformInfo.verify|verify} messages.
                     * @param message ResourceDriftTerraformInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IResourceDriftTerraformInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceDriftTerraformInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceDriftTerraformInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ResourceDriftTerraformInfo;

                    /**
                     * Decodes a ResourceDriftTerraformInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceDriftTerraformInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ResourceDriftTerraformInfo;

                    /**
                     * Verifies a ResourceDriftTerraformInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceDriftTerraformInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceDriftTerraformInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ResourceDriftTerraformInfo;

                    /**
                     * Creates a plain object from a ResourceDriftTerraformInfo message. Also converts values to other types if specified.
                     * @param message ResourceDriftTerraformInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ResourceDriftTerraformInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceDriftTerraformInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceDriftTerraformInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResourceDrift. */
                interface IResourceDrift {

                    /** ResourceDrift name */
                    name?: (string|null);

                    /** ResourceDrift terraformInfo */
                    terraformInfo?: (google.cloud.config.v1.IResourceDriftTerraformInfo|null);

                    /** ResourceDrift propertyDrifts */
                    propertyDrifts?: (google.cloud.config.v1.IPropertyDrift[]|null);
                }

                /** Represents a ResourceDrift. */
                class ResourceDrift implements IResourceDrift {

                    /**
                     * Constructs a new ResourceDrift.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IResourceDrift);

                    /** ResourceDrift name. */
                    public name: string;

                    /** ResourceDrift terraformInfo. */
                    public terraformInfo?: (google.cloud.config.v1.IResourceDriftTerraformInfo|null);

                    /** ResourceDrift propertyDrifts. */
                    public propertyDrifts: google.cloud.config.v1.IPropertyDrift[];

                    /**
                     * Creates a new ResourceDrift instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceDrift instance
                     */
                    public static create(properties?: google.cloud.config.v1.IResourceDrift): google.cloud.config.v1.ResourceDrift;

                    /**
                     * Encodes the specified ResourceDrift message. Does not implicitly {@link google.cloud.config.v1.ResourceDrift.verify|verify} messages.
                     * @param message ResourceDrift message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IResourceDrift, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceDrift message, length delimited. Does not implicitly {@link google.cloud.config.v1.ResourceDrift.verify|verify} messages.
                     * @param message ResourceDrift message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IResourceDrift, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceDrift message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceDrift
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ResourceDrift;

                    /**
                     * Decodes a ResourceDrift message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceDrift
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ResourceDrift;

                    /**
                     * Verifies a ResourceDrift message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceDrift message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceDrift
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ResourceDrift;

                    /**
                     * Creates a plain object from a ResourceDrift message. Also converts values to other types if specified.
                     * @param message ResourceDrift
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ResourceDrift, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceDrift to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceDrift
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PropertyDrift. */
                interface IPropertyDrift {

                    /** PropertyDrift path */
                    path?: (string|null);

                    /** PropertyDrift beforeSensitivePaths */
                    beforeSensitivePaths?: (string[]|null);

                    /** PropertyDrift before */
                    before?: (google.protobuf.IValue|null);

                    /** PropertyDrift afterSensitivePaths */
                    afterSensitivePaths?: (string[]|null);

                    /** PropertyDrift after */
                    after?: (google.protobuf.IValue|null);
                }

                /** Represents a PropertyDrift. */
                class PropertyDrift implements IPropertyDrift {

                    /**
                     * Constructs a new PropertyDrift.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IPropertyDrift);

                    /** PropertyDrift path. */
                    public path: string;

                    /** PropertyDrift beforeSensitivePaths. */
                    public beforeSensitivePaths: string[];

                    /** PropertyDrift before. */
                    public before?: (google.protobuf.IValue|null);

                    /** PropertyDrift afterSensitivePaths. */
                    public afterSensitivePaths: string[];

                    /** PropertyDrift after. */
                    public after?: (google.protobuf.IValue|null);

                    /**
                     * Creates a new PropertyDrift instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PropertyDrift instance
                     */
                    public static create(properties?: google.cloud.config.v1.IPropertyDrift): google.cloud.config.v1.PropertyDrift;

                    /**
                     * Encodes the specified PropertyDrift message. Does not implicitly {@link google.cloud.config.v1.PropertyDrift.verify|verify} messages.
                     * @param message PropertyDrift message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IPropertyDrift, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PropertyDrift message, length delimited. Does not implicitly {@link google.cloud.config.v1.PropertyDrift.verify|verify} messages.
                     * @param message PropertyDrift message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IPropertyDrift, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PropertyDrift message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PropertyDrift
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.PropertyDrift;

                    /**
                     * Decodes a PropertyDrift message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PropertyDrift
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.PropertyDrift;

                    /**
                     * Verifies a PropertyDrift message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PropertyDrift message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PropertyDrift
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.PropertyDrift;

                    /**
                     * Creates a plain object from a PropertyDrift message. Also converts values to other types if specified.
                     * @param message PropertyDrift
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.PropertyDrift, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PropertyDrift to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PropertyDrift
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListResourceDriftsRequest. */
                interface IListResourceDriftsRequest {

                    /** ListResourceDriftsRequest parent */
                    parent?: (string|null);

                    /** ListResourceDriftsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListResourceDriftsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListResourceDriftsRequest filter */
                    filter?: (string|null);

                    /** ListResourceDriftsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListResourceDriftsRequest. */
                class ListResourceDriftsRequest implements IListResourceDriftsRequest {

                    /**
                     * Constructs a new ListResourceDriftsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListResourceDriftsRequest);

                    /** ListResourceDriftsRequest parent. */
                    public parent: string;

                    /** ListResourceDriftsRequest pageSize. */
                    public pageSize: number;

                    /** ListResourceDriftsRequest pageToken. */
                    public pageToken: string;

                    /** ListResourceDriftsRequest filter. */
                    public filter: string;

                    /** ListResourceDriftsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListResourceDriftsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListResourceDriftsRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListResourceDriftsRequest): google.cloud.config.v1.ListResourceDriftsRequest;

                    /**
                     * Encodes the specified ListResourceDriftsRequest message. Does not implicitly {@link google.cloud.config.v1.ListResourceDriftsRequest.verify|verify} messages.
                     * @param message ListResourceDriftsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListResourceDriftsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListResourceDriftsRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListResourceDriftsRequest.verify|verify} messages.
                     * @param message ListResourceDriftsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListResourceDriftsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListResourceDriftsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListResourceDriftsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListResourceDriftsRequest;

                    /**
                     * Decodes a ListResourceDriftsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListResourceDriftsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListResourceDriftsRequest;

                    /**
                     * Verifies a ListResourceDriftsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListResourceDriftsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListResourceDriftsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListResourceDriftsRequest;

                    /**
                     * Creates a plain object from a ListResourceDriftsRequest message. Also converts values to other types if specified.
                     * @param message ListResourceDriftsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListResourceDriftsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListResourceDriftsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListResourceDriftsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListResourceDriftsResponse. */
                interface IListResourceDriftsResponse {

                    /** ListResourceDriftsResponse resourceDrifts */
                    resourceDrifts?: (google.cloud.config.v1.IResourceDrift[]|null);

                    /** ListResourceDriftsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListResourceDriftsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListResourceDriftsResponse. */
                class ListResourceDriftsResponse implements IListResourceDriftsResponse {

                    /**
                     * Constructs a new ListResourceDriftsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IListResourceDriftsResponse);

                    /** ListResourceDriftsResponse resourceDrifts. */
                    public resourceDrifts: google.cloud.config.v1.IResourceDrift[];

                    /** ListResourceDriftsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListResourceDriftsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListResourceDriftsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListResourceDriftsResponse instance
                     */
                    public static create(properties?: google.cloud.config.v1.IListResourceDriftsResponse): google.cloud.config.v1.ListResourceDriftsResponse;

                    /**
                     * Encodes the specified ListResourceDriftsResponse message. Does not implicitly {@link google.cloud.config.v1.ListResourceDriftsResponse.verify|verify} messages.
                     * @param message ListResourceDriftsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IListResourceDriftsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListResourceDriftsResponse message, length delimited. Does not implicitly {@link google.cloud.config.v1.ListResourceDriftsResponse.verify|verify} messages.
                     * @param message ListResourceDriftsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IListResourceDriftsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListResourceDriftsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListResourceDriftsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ListResourceDriftsResponse;

                    /**
                     * Decodes a ListResourceDriftsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListResourceDriftsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ListResourceDriftsResponse;

                    /**
                     * Verifies a ListResourceDriftsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListResourceDriftsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListResourceDriftsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ListResourceDriftsResponse;

                    /**
                     * Creates a plain object from a ListResourceDriftsResponse message. Also converts values to other types if specified.
                     * @param message ListResourceDriftsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ListResourceDriftsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListResourceDriftsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListResourceDriftsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetResourceDriftRequest. */
                interface IGetResourceDriftRequest {

                    /** GetResourceDriftRequest name */
                    name?: (string|null);
                }

                /** Represents a GetResourceDriftRequest. */
                class GetResourceDriftRequest implements IGetResourceDriftRequest {

                    /**
                     * Constructs a new GetResourceDriftRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IGetResourceDriftRequest);

                    /** GetResourceDriftRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetResourceDriftRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetResourceDriftRequest instance
                     */
                    public static create(properties?: google.cloud.config.v1.IGetResourceDriftRequest): google.cloud.config.v1.GetResourceDriftRequest;

                    /**
                     * Encodes the specified GetResourceDriftRequest message. Does not implicitly {@link google.cloud.config.v1.GetResourceDriftRequest.verify|verify} messages.
                     * @param message GetResourceDriftRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IGetResourceDriftRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetResourceDriftRequest message, length delimited. Does not implicitly {@link google.cloud.config.v1.GetResourceDriftRequest.verify|verify} messages.
                     * @param message GetResourceDriftRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IGetResourceDriftRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetResourceDriftRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetResourceDriftRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.GetResourceDriftRequest;

                    /**
                     * Decodes a GetResourceDriftRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetResourceDriftRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.GetResourceDriftRequest;

                    /**
                     * Verifies a GetResourceDriftRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetResourceDriftRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetResourceDriftRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.GetResourceDriftRequest;

                    /**
                     * Creates a plain object from a GetResourceDriftRequest message. Also converts values to other types if specified.
                     * @param message GetResourceDriftRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.GetResourceDriftRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetResourceDriftRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetResourceDriftRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ProviderConfig. */
                interface IProviderConfig {

                    /** ProviderConfig sourceType */
                    sourceType?: (google.cloud.config.v1.ProviderConfig.ProviderSource|keyof typeof google.cloud.config.v1.ProviderConfig.ProviderSource|null);
                }

                /** Represents a ProviderConfig. */
                class ProviderConfig implements IProviderConfig {

                    /**
                     * Constructs a new ProviderConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.config.v1.IProviderConfig);

                    /** ProviderConfig sourceType. */
                    public sourceType?: (google.cloud.config.v1.ProviderConfig.ProviderSource|keyof typeof google.cloud.config.v1.ProviderConfig.ProviderSource|null);

                    /**
                     * Creates a new ProviderConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProviderConfig instance
                     */
                    public static create(properties?: google.cloud.config.v1.IProviderConfig): google.cloud.config.v1.ProviderConfig;

                    /**
                     * Encodes the specified ProviderConfig message. Does not implicitly {@link google.cloud.config.v1.ProviderConfig.verify|verify} messages.
                     * @param message ProviderConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.config.v1.IProviderConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProviderConfig message, length delimited. Does not implicitly {@link google.cloud.config.v1.ProviderConfig.verify|verify} messages.
                     * @param message ProviderConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.config.v1.IProviderConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProviderConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProviderConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.config.v1.ProviderConfig;

                    /**
                     * Decodes a ProviderConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProviderConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.config.v1.ProviderConfig;

                    /**
                     * Verifies a ProviderConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProviderConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProviderConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.config.v1.ProviderConfig;

                    /**
                     * Creates a plain object from a ProviderConfig message. Also converts values to other types if specified.
                     * @param message ProviderConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.config.v1.ProviderConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProviderConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ProviderConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ProviderConfig {

                    /** ProviderSource enum. */
                    enum ProviderSource {
                        PROVIDER_SOURCE_UNSPECIFIED = 0,
                        SERVICE_MAINTAINED = 1
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
