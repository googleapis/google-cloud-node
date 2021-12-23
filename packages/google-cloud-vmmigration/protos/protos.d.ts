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

        /** Namespace vmmigration. */
        namespace vmmigration {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a VmMigration */
                class VmMigration extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new VmMigration service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new VmMigration service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): VmMigration;

                    /**
                     * Calls ListSources.
                     * @param request ListSourcesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSourcesResponse
                     */
                    public listSources(request: google.cloud.vmmigration.v1.IListSourcesRequest, callback: google.cloud.vmmigration.v1.VmMigration.ListSourcesCallback): void;

                    /**
                     * Calls ListSources.
                     * @param request ListSourcesRequest message or plain object
                     * @returns Promise
                     */
                    public listSources(request: google.cloud.vmmigration.v1.IListSourcesRequest): Promise<google.cloud.vmmigration.v1.ListSourcesResponse>;

                    /**
                     * Calls GetSource.
                     * @param request GetSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Source
                     */
                    public getSource(request: google.cloud.vmmigration.v1.IGetSourceRequest, callback: google.cloud.vmmigration.v1.VmMigration.GetSourceCallback): void;

                    /**
                     * Calls GetSource.
                     * @param request GetSourceRequest message or plain object
                     * @returns Promise
                     */
                    public getSource(request: google.cloud.vmmigration.v1.IGetSourceRequest): Promise<google.cloud.vmmigration.v1.Source>;

                    /**
                     * Calls CreateSource.
                     * @param request CreateSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createSource(request: google.cloud.vmmigration.v1.ICreateSourceRequest, callback: google.cloud.vmmigration.v1.VmMigration.CreateSourceCallback): void;

                    /**
                     * Calls CreateSource.
                     * @param request CreateSourceRequest message or plain object
                     * @returns Promise
                     */
                    public createSource(request: google.cloud.vmmigration.v1.ICreateSourceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateSource.
                     * @param request UpdateSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateSource(request: google.cloud.vmmigration.v1.IUpdateSourceRequest, callback: google.cloud.vmmigration.v1.VmMigration.UpdateSourceCallback): void;

                    /**
                     * Calls UpdateSource.
                     * @param request UpdateSourceRequest message or plain object
                     * @returns Promise
                     */
                    public updateSource(request: google.cloud.vmmigration.v1.IUpdateSourceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteSource.
                     * @param request DeleteSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteSource(request: google.cloud.vmmigration.v1.IDeleteSourceRequest, callback: google.cloud.vmmigration.v1.VmMigration.DeleteSourceCallback): void;

                    /**
                     * Calls DeleteSource.
                     * @param request DeleteSourceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteSource(request: google.cloud.vmmigration.v1.IDeleteSourceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls FetchInventory.
                     * @param request FetchInventoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FetchInventoryResponse
                     */
                    public fetchInventory(request: google.cloud.vmmigration.v1.IFetchInventoryRequest, callback: google.cloud.vmmigration.v1.VmMigration.FetchInventoryCallback): void;

                    /**
                     * Calls FetchInventory.
                     * @param request FetchInventoryRequest message or plain object
                     * @returns Promise
                     */
                    public fetchInventory(request: google.cloud.vmmigration.v1.IFetchInventoryRequest): Promise<google.cloud.vmmigration.v1.FetchInventoryResponse>;

                    /**
                     * Calls ListUtilizationReports.
                     * @param request ListUtilizationReportsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListUtilizationReportsResponse
                     */
                    public listUtilizationReports(request: google.cloud.vmmigration.v1.IListUtilizationReportsRequest, callback: google.cloud.vmmigration.v1.VmMigration.ListUtilizationReportsCallback): void;

                    /**
                     * Calls ListUtilizationReports.
                     * @param request ListUtilizationReportsRequest message or plain object
                     * @returns Promise
                     */
                    public listUtilizationReports(request: google.cloud.vmmigration.v1.IListUtilizationReportsRequest): Promise<google.cloud.vmmigration.v1.ListUtilizationReportsResponse>;

                    /**
                     * Calls GetUtilizationReport.
                     * @param request GetUtilizationReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UtilizationReport
                     */
                    public getUtilizationReport(request: google.cloud.vmmigration.v1.IGetUtilizationReportRequest, callback: google.cloud.vmmigration.v1.VmMigration.GetUtilizationReportCallback): void;

                    /**
                     * Calls GetUtilizationReport.
                     * @param request GetUtilizationReportRequest message or plain object
                     * @returns Promise
                     */
                    public getUtilizationReport(request: google.cloud.vmmigration.v1.IGetUtilizationReportRequest): Promise<google.cloud.vmmigration.v1.UtilizationReport>;

                    /**
                     * Calls CreateUtilizationReport.
                     * @param request CreateUtilizationReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createUtilizationReport(request: google.cloud.vmmigration.v1.ICreateUtilizationReportRequest, callback: google.cloud.vmmigration.v1.VmMigration.CreateUtilizationReportCallback): void;

                    /**
                     * Calls CreateUtilizationReport.
                     * @param request CreateUtilizationReportRequest message or plain object
                     * @returns Promise
                     */
                    public createUtilizationReport(request: google.cloud.vmmigration.v1.ICreateUtilizationReportRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteUtilizationReport.
                     * @param request DeleteUtilizationReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteUtilizationReport(request: google.cloud.vmmigration.v1.IDeleteUtilizationReportRequest, callback: google.cloud.vmmigration.v1.VmMigration.DeleteUtilizationReportCallback): void;

                    /**
                     * Calls DeleteUtilizationReport.
                     * @param request DeleteUtilizationReportRequest message or plain object
                     * @returns Promise
                     */
                    public deleteUtilizationReport(request: google.cloud.vmmigration.v1.IDeleteUtilizationReportRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListDatacenterConnectors.
                     * @param request ListDatacenterConnectorsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDatacenterConnectorsResponse
                     */
                    public listDatacenterConnectors(request: google.cloud.vmmigration.v1.IListDatacenterConnectorsRequest, callback: google.cloud.vmmigration.v1.VmMigration.ListDatacenterConnectorsCallback): void;

                    /**
                     * Calls ListDatacenterConnectors.
                     * @param request ListDatacenterConnectorsRequest message or plain object
                     * @returns Promise
                     */
                    public listDatacenterConnectors(request: google.cloud.vmmigration.v1.IListDatacenterConnectorsRequest): Promise<google.cloud.vmmigration.v1.ListDatacenterConnectorsResponse>;

                    /**
                     * Calls GetDatacenterConnector.
                     * @param request GetDatacenterConnectorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DatacenterConnector
                     */
                    public getDatacenterConnector(request: google.cloud.vmmigration.v1.IGetDatacenterConnectorRequest, callback: google.cloud.vmmigration.v1.VmMigration.GetDatacenterConnectorCallback): void;

                    /**
                     * Calls GetDatacenterConnector.
                     * @param request GetDatacenterConnectorRequest message or plain object
                     * @returns Promise
                     */
                    public getDatacenterConnector(request: google.cloud.vmmigration.v1.IGetDatacenterConnectorRequest): Promise<google.cloud.vmmigration.v1.DatacenterConnector>;

                    /**
                     * Calls CreateDatacenterConnector.
                     * @param request CreateDatacenterConnectorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createDatacenterConnector(request: google.cloud.vmmigration.v1.ICreateDatacenterConnectorRequest, callback: google.cloud.vmmigration.v1.VmMigration.CreateDatacenterConnectorCallback): void;

                    /**
                     * Calls CreateDatacenterConnector.
                     * @param request CreateDatacenterConnectorRequest message or plain object
                     * @returns Promise
                     */
                    public createDatacenterConnector(request: google.cloud.vmmigration.v1.ICreateDatacenterConnectorRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteDatacenterConnector.
                     * @param request DeleteDatacenterConnectorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteDatacenterConnector(request: google.cloud.vmmigration.v1.IDeleteDatacenterConnectorRequest, callback: google.cloud.vmmigration.v1.VmMigration.DeleteDatacenterConnectorCallback): void;

                    /**
                     * Calls DeleteDatacenterConnector.
                     * @param request DeleteDatacenterConnectorRequest message or plain object
                     * @returns Promise
                     */
                    public deleteDatacenterConnector(request: google.cloud.vmmigration.v1.IDeleteDatacenterConnectorRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateMigratingVm.
                     * @param request CreateMigratingVmRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createMigratingVm(request: google.cloud.vmmigration.v1.ICreateMigratingVmRequest, callback: google.cloud.vmmigration.v1.VmMigration.CreateMigratingVmCallback): void;

                    /**
                     * Calls CreateMigratingVm.
                     * @param request CreateMigratingVmRequest message or plain object
                     * @returns Promise
                     */
                    public createMigratingVm(request: google.cloud.vmmigration.v1.ICreateMigratingVmRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListMigratingVms.
                     * @param request ListMigratingVmsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListMigratingVmsResponse
                     */
                    public listMigratingVms(request: google.cloud.vmmigration.v1.IListMigratingVmsRequest, callback: google.cloud.vmmigration.v1.VmMigration.ListMigratingVmsCallback): void;

                    /**
                     * Calls ListMigratingVms.
                     * @param request ListMigratingVmsRequest message or plain object
                     * @returns Promise
                     */
                    public listMigratingVms(request: google.cloud.vmmigration.v1.IListMigratingVmsRequest): Promise<google.cloud.vmmigration.v1.ListMigratingVmsResponse>;

                    /**
                     * Calls GetMigratingVm.
                     * @param request GetMigratingVmRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and MigratingVm
                     */
                    public getMigratingVm(request: google.cloud.vmmigration.v1.IGetMigratingVmRequest, callback: google.cloud.vmmigration.v1.VmMigration.GetMigratingVmCallback): void;

                    /**
                     * Calls GetMigratingVm.
                     * @param request GetMigratingVmRequest message or plain object
                     * @returns Promise
                     */
                    public getMigratingVm(request: google.cloud.vmmigration.v1.IGetMigratingVmRequest): Promise<google.cloud.vmmigration.v1.MigratingVm>;

                    /**
                     * Calls UpdateMigratingVm.
                     * @param request UpdateMigratingVmRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateMigratingVm(request: google.cloud.vmmigration.v1.IUpdateMigratingVmRequest, callback: google.cloud.vmmigration.v1.VmMigration.UpdateMigratingVmCallback): void;

                    /**
                     * Calls UpdateMigratingVm.
                     * @param request UpdateMigratingVmRequest message or plain object
                     * @returns Promise
                     */
                    public updateMigratingVm(request: google.cloud.vmmigration.v1.IUpdateMigratingVmRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteMigratingVm.
                     * @param request DeleteMigratingVmRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteMigratingVm(request: google.cloud.vmmigration.v1.IDeleteMigratingVmRequest, callback: google.cloud.vmmigration.v1.VmMigration.DeleteMigratingVmCallback): void;

                    /**
                     * Calls DeleteMigratingVm.
                     * @param request DeleteMigratingVmRequest message or plain object
                     * @returns Promise
                     */
                    public deleteMigratingVm(request: google.cloud.vmmigration.v1.IDeleteMigratingVmRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartMigration.
                     * @param request StartMigrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startMigration(request: google.cloud.vmmigration.v1.IStartMigrationRequest, callback: google.cloud.vmmigration.v1.VmMigration.StartMigrationCallback): void;

                    /**
                     * Calls StartMigration.
                     * @param request StartMigrationRequest message or plain object
                     * @returns Promise
                     */
                    public startMigration(request: google.cloud.vmmigration.v1.IStartMigrationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ResumeMigration.
                     * @param request ResumeMigrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public resumeMigration(request: google.cloud.vmmigration.v1.IResumeMigrationRequest, callback: google.cloud.vmmigration.v1.VmMigration.ResumeMigrationCallback): void;

                    /**
                     * Calls ResumeMigration.
                     * @param request ResumeMigrationRequest message or plain object
                     * @returns Promise
                     */
                    public resumeMigration(request: google.cloud.vmmigration.v1.IResumeMigrationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls PauseMigration.
                     * @param request PauseMigrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public pauseMigration(request: google.cloud.vmmigration.v1.IPauseMigrationRequest, callback: google.cloud.vmmigration.v1.VmMigration.PauseMigrationCallback): void;

                    /**
                     * Calls PauseMigration.
                     * @param request PauseMigrationRequest message or plain object
                     * @returns Promise
                     */
                    public pauseMigration(request: google.cloud.vmmigration.v1.IPauseMigrationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls FinalizeMigration.
                     * @param request FinalizeMigrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public finalizeMigration(request: google.cloud.vmmigration.v1.IFinalizeMigrationRequest, callback: google.cloud.vmmigration.v1.VmMigration.FinalizeMigrationCallback): void;

                    /**
                     * Calls FinalizeMigration.
                     * @param request FinalizeMigrationRequest message or plain object
                     * @returns Promise
                     */
                    public finalizeMigration(request: google.cloud.vmmigration.v1.IFinalizeMigrationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateCloneJob.
                     * @param request CreateCloneJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createCloneJob(request: google.cloud.vmmigration.v1.ICreateCloneJobRequest, callback: google.cloud.vmmigration.v1.VmMigration.CreateCloneJobCallback): void;

                    /**
                     * Calls CreateCloneJob.
                     * @param request CreateCloneJobRequest message or plain object
                     * @returns Promise
                     */
                    public createCloneJob(request: google.cloud.vmmigration.v1.ICreateCloneJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CancelCloneJob.
                     * @param request CancelCloneJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public cancelCloneJob(request: google.cloud.vmmigration.v1.ICancelCloneJobRequest, callback: google.cloud.vmmigration.v1.VmMigration.CancelCloneJobCallback): void;

                    /**
                     * Calls CancelCloneJob.
                     * @param request CancelCloneJobRequest message or plain object
                     * @returns Promise
                     */
                    public cancelCloneJob(request: google.cloud.vmmigration.v1.ICancelCloneJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListCloneJobs.
                     * @param request ListCloneJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCloneJobsResponse
                     */
                    public listCloneJobs(request: google.cloud.vmmigration.v1.IListCloneJobsRequest, callback: google.cloud.vmmigration.v1.VmMigration.ListCloneJobsCallback): void;

                    /**
                     * Calls ListCloneJobs.
                     * @param request ListCloneJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listCloneJobs(request: google.cloud.vmmigration.v1.IListCloneJobsRequest): Promise<google.cloud.vmmigration.v1.ListCloneJobsResponse>;

                    /**
                     * Calls GetCloneJob.
                     * @param request GetCloneJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CloneJob
                     */
                    public getCloneJob(request: google.cloud.vmmigration.v1.IGetCloneJobRequest, callback: google.cloud.vmmigration.v1.VmMigration.GetCloneJobCallback): void;

                    /**
                     * Calls GetCloneJob.
                     * @param request GetCloneJobRequest message or plain object
                     * @returns Promise
                     */
                    public getCloneJob(request: google.cloud.vmmigration.v1.IGetCloneJobRequest): Promise<google.cloud.vmmigration.v1.CloneJob>;

                    /**
                     * Calls CreateCutoverJob.
                     * @param request CreateCutoverJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createCutoverJob(request: google.cloud.vmmigration.v1.ICreateCutoverJobRequest, callback: google.cloud.vmmigration.v1.VmMigration.CreateCutoverJobCallback): void;

                    /**
                     * Calls CreateCutoverJob.
                     * @param request CreateCutoverJobRequest message or plain object
                     * @returns Promise
                     */
                    public createCutoverJob(request: google.cloud.vmmigration.v1.ICreateCutoverJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CancelCutoverJob.
                     * @param request CancelCutoverJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public cancelCutoverJob(request: google.cloud.vmmigration.v1.ICancelCutoverJobRequest, callback: google.cloud.vmmigration.v1.VmMigration.CancelCutoverJobCallback): void;

                    /**
                     * Calls CancelCutoverJob.
                     * @param request CancelCutoverJobRequest message or plain object
                     * @returns Promise
                     */
                    public cancelCutoverJob(request: google.cloud.vmmigration.v1.ICancelCutoverJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListCutoverJobs.
                     * @param request ListCutoverJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCutoverJobsResponse
                     */
                    public listCutoverJobs(request: google.cloud.vmmigration.v1.IListCutoverJobsRequest, callback: google.cloud.vmmigration.v1.VmMigration.ListCutoverJobsCallback): void;

                    /**
                     * Calls ListCutoverJobs.
                     * @param request ListCutoverJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listCutoverJobs(request: google.cloud.vmmigration.v1.IListCutoverJobsRequest): Promise<google.cloud.vmmigration.v1.ListCutoverJobsResponse>;

                    /**
                     * Calls GetCutoverJob.
                     * @param request GetCutoverJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CutoverJob
                     */
                    public getCutoverJob(request: google.cloud.vmmigration.v1.IGetCutoverJobRequest, callback: google.cloud.vmmigration.v1.VmMigration.GetCutoverJobCallback): void;

                    /**
                     * Calls GetCutoverJob.
                     * @param request GetCutoverJobRequest message or plain object
                     * @returns Promise
                     */
                    public getCutoverJob(request: google.cloud.vmmigration.v1.IGetCutoverJobRequest): Promise<google.cloud.vmmigration.v1.CutoverJob>;

                    /**
                     * Calls ListGroups.
                     * @param request ListGroupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGroupsResponse
                     */
                    public listGroups(request: google.cloud.vmmigration.v1.IListGroupsRequest, callback: google.cloud.vmmigration.v1.VmMigration.ListGroupsCallback): void;

                    /**
                     * Calls ListGroups.
                     * @param request ListGroupsRequest message or plain object
                     * @returns Promise
                     */
                    public listGroups(request: google.cloud.vmmigration.v1.IListGroupsRequest): Promise<google.cloud.vmmigration.v1.ListGroupsResponse>;

                    /**
                     * Calls GetGroup.
                     * @param request GetGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Group
                     */
                    public getGroup(request: google.cloud.vmmigration.v1.IGetGroupRequest, callback: google.cloud.vmmigration.v1.VmMigration.GetGroupCallback): void;

                    /**
                     * Calls GetGroup.
                     * @param request GetGroupRequest message or plain object
                     * @returns Promise
                     */
                    public getGroup(request: google.cloud.vmmigration.v1.IGetGroupRequest): Promise<google.cloud.vmmigration.v1.Group>;

                    /**
                     * Calls CreateGroup.
                     * @param request CreateGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createGroup(request: google.cloud.vmmigration.v1.ICreateGroupRequest, callback: google.cloud.vmmigration.v1.VmMigration.CreateGroupCallback): void;

                    /**
                     * Calls CreateGroup.
                     * @param request CreateGroupRequest message or plain object
                     * @returns Promise
                     */
                    public createGroup(request: google.cloud.vmmigration.v1.ICreateGroupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateGroup.
                     * @param request UpdateGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateGroup(request: google.cloud.vmmigration.v1.IUpdateGroupRequest, callback: google.cloud.vmmigration.v1.VmMigration.UpdateGroupCallback): void;

                    /**
                     * Calls UpdateGroup.
                     * @param request UpdateGroupRequest message or plain object
                     * @returns Promise
                     */
                    public updateGroup(request: google.cloud.vmmigration.v1.IUpdateGroupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteGroup.
                     * @param request DeleteGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteGroup(request: google.cloud.vmmigration.v1.IDeleteGroupRequest, callback: google.cloud.vmmigration.v1.VmMigration.DeleteGroupCallback): void;

                    /**
                     * Calls DeleteGroup.
                     * @param request DeleteGroupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteGroup(request: google.cloud.vmmigration.v1.IDeleteGroupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls AddGroupMigration.
                     * @param request AddGroupMigrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public addGroupMigration(request: google.cloud.vmmigration.v1.IAddGroupMigrationRequest, callback: google.cloud.vmmigration.v1.VmMigration.AddGroupMigrationCallback): void;

                    /**
                     * Calls AddGroupMigration.
                     * @param request AddGroupMigrationRequest message or plain object
                     * @returns Promise
                     */
                    public addGroupMigration(request: google.cloud.vmmigration.v1.IAddGroupMigrationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RemoveGroupMigration.
                     * @param request RemoveGroupMigrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public removeGroupMigration(request: google.cloud.vmmigration.v1.IRemoveGroupMigrationRequest, callback: google.cloud.vmmigration.v1.VmMigration.RemoveGroupMigrationCallback): void;

                    /**
                     * Calls RemoveGroupMigration.
                     * @param request RemoveGroupMigrationRequest message or plain object
                     * @returns Promise
                     */
                    public removeGroupMigration(request: google.cloud.vmmigration.v1.IRemoveGroupMigrationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListTargetProjects.
                     * @param request ListTargetProjectsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTargetProjectsResponse
                     */
                    public listTargetProjects(request: google.cloud.vmmigration.v1.IListTargetProjectsRequest, callback: google.cloud.vmmigration.v1.VmMigration.ListTargetProjectsCallback): void;

                    /**
                     * Calls ListTargetProjects.
                     * @param request ListTargetProjectsRequest message or plain object
                     * @returns Promise
                     */
                    public listTargetProjects(request: google.cloud.vmmigration.v1.IListTargetProjectsRequest): Promise<google.cloud.vmmigration.v1.ListTargetProjectsResponse>;

                    /**
                     * Calls GetTargetProject.
                     * @param request GetTargetProjectRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TargetProject
                     */
                    public getTargetProject(request: google.cloud.vmmigration.v1.IGetTargetProjectRequest, callback: google.cloud.vmmigration.v1.VmMigration.GetTargetProjectCallback): void;

                    /**
                     * Calls GetTargetProject.
                     * @param request GetTargetProjectRequest message or plain object
                     * @returns Promise
                     */
                    public getTargetProject(request: google.cloud.vmmigration.v1.IGetTargetProjectRequest): Promise<google.cloud.vmmigration.v1.TargetProject>;

                    /**
                     * Calls CreateTargetProject.
                     * @param request CreateTargetProjectRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createTargetProject(request: google.cloud.vmmigration.v1.ICreateTargetProjectRequest, callback: google.cloud.vmmigration.v1.VmMigration.CreateTargetProjectCallback): void;

                    /**
                     * Calls CreateTargetProject.
                     * @param request CreateTargetProjectRequest message or plain object
                     * @returns Promise
                     */
                    public createTargetProject(request: google.cloud.vmmigration.v1.ICreateTargetProjectRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateTargetProject.
                     * @param request UpdateTargetProjectRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateTargetProject(request: google.cloud.vmmigration.v1.IUpdateTargetProjectRequest, callback: google.cloud.vmmigration.v1.VmMigration.UpdateTargetProjectCallback): void;

                    /**
                     * Calls UpdateTargetProject.
                     * @param request UpdateTargetProjectRequest message or plain object
                     * @returns Promise
                     */
                    public updateTargetProject(request: google.cloud.vmmigration.v1.IUpdateTargetProjectRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteTargetProject.
                     * @param request DeleteTargetProjectRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteTargetProject(request: google.cloud.vmmigration.v1.IDeleteTargetProjectRequest, callback: google.cloud.vmmigration.v1.VmMigration.DeleteTargetProjectCallback): void;

                    /**
                     * Calls DeleteTargetProject.
                     * @param request DeleteTargetProjectRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTargetProject(request: google.cloud.vmmigration.v1.IDeleteTargetProjectRequest): Promise<google.longrunning.Operation>;
                }

                namespace VmMigration {

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#listSources}.
                     * @param error Error, if any
                     * @param [response] ListSourcesResponse
                     */
                    type ListSourcesCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.ListSourcesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#getSource}.
                     * @param error Error, if any
                     * @param [response] Source
                     */
                    type GetSourceCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.Source) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#createSource}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateSourceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#updateSource}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateSourceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#deleteSource}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteSourceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#fetchInventory}.
                     * @param error Error, if any
                     * @param [response] FetchInventoryResponse
                     */
                    type FetchInventoryCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.FetchInventoryResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#listUtilizationReports}.
                     * @param error Error, if any
                     * @param [response] ListUtilizationReportsResponse
                     */
                    type ListUtilizationReportsCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.ListUtilizationReportsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#getUtilizationReport}.
                     * @param error Error, if any
                     * @param [response] UtilizationReport
                     */
                    type GetUtilizationReportCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.UtilizationReport) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#createUtilizationReport}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateUtilizationReportCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#deleteUtilizationReport}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteUtilizationReportCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#listDatacenterConnectors}.
                     * @param error Error, if any
                     * @param [response] ListDatacenterConnectorsResponse
                     */
                    type ListDatacenterConnectorsCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.ListDatacenterConnectorsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#getDatacenterConnector}.
                     * @param error Error, if any
                     * @param [response] DatacenterConnector
                     */
                    type GetDatacenterConnectorCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.DatacenterConnector) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#createDatacenterConnector}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateDatacenterConnectorCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#deleteDatacenterConnector}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteDatacenterConnectorCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#createMigratingVm}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateMigratingVmCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#listMigratingVms}.
                     * @param error Error, if any
                     * @param [response] ListMigratingVmsResponse
                     */
                    type ListMigratingVmsCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.ListMigratingVmsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#getMigratingVm}.
                     * @param error Error, if any
                     * @param [response] MigratingVm
                     */
                    type GetMigratingVmCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.MigratingVm) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#updateMigratingVm}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateMigratingVmCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#deleteMigratingVm}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteMigratingVmCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#startMigration}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartMigrationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#resumeMigration}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ResumeMigrationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#pauseMigration}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type PauseMigrationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#finalizeMigration}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type FinalizeMigrationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#createCloneJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateCloneJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#cancelCloneJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CancelCloneJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#listCloneJobs}.
                     * @param error Error, if any
                     * @param [response] ListCloneJobsResponse
                     */
                    type ListCloneJobsCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.ListCloneJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#getCloneJob}.
                     * @param error Error, if any
                     * @param [response] CloneJob
                     */
                    type GetCloneJobCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.CloneJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#createCutoverJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateCutoverJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#cancelCutoverJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CancelCutoverJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#listCutoverJobs}.
                     * @param error Error, if any
                     * @param [response] ListCutoverJobsResponse
                     */
                    type ListCutoverJobsCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.ListCutoverJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#getCutoverJob}.
                     * @param error Error, if any
                     * @param [response] CutoverJob
                     */
                    type GetCutoverJobCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.CutoverJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#listGroups}.
                     * @param error Error, if any
                     * @param [response] ListGroupsResponse
                     */
                    type ListGroupsCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.ListGroupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#getGroup}.
                     * @param error Error, if any
                     * @param [response] Group
                     */
                    type GetGroupCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.Group) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#createGroup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateGroupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#updateGroup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateGroupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#deleteGroup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteGroupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#addGroupMigration}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type AddGroupMigrationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#removeGroupMigration}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RemoveGroupMigrationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#listTargetProjects}.
                     * @param error Error, if any
                     * @param [response] ListTargetProjectsResponse
                     */
                    type ListTargetProjectsCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.ListTargetProjectsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#getTargetProject}.
                     * @param error Error, if any
                     * @param [response] TargetProject
                     */
                    type GetTargetProjectCallback = (error: (Error|null), response?: google.cloud.vmmigration.v1.TargetProject) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#createTargetProject}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateTargetProjectCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#updateTargetProject}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateTargetProjectCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmmigration.v1.VmMigration#deleteTargetProject}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteTargetProjectCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ReplicationCycle. */
                interface IReplicationCycle {

                    /** ReplicationCycle startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** ReplicationCycle progressPercent */
                    progressPercent?: (number|null);
                }

                /** Represents a ReplicationCycle. */
                class ReplicationCycle implements IReplicationCycle {

                    /**
                     * Constructs a new ReplicationCycle.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IReplicationCycle);

                    /** ReplicationCycle startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** ReplicationCycle progressPercent. */
                    public progressPercent: number;

                    /**
                     * Creates a new ReplicationCycle instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplicationCycle instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IReplicationCycle): google.cloud.vmmigration.v1.ReplicationCycle;

                    /**
                     * Encodes the specified ReplicationCycle message. Does not implicitly {@link google.cloud.vmmigration.v1.ReplicationCycle.verify|verify} messages.
                     * @param message ReplicationCycle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IReplicationCycle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplicationCycle message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ReplicationCycle.verify|verify} messages.
                     * @param message ReplicationCycle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IReplicationCycle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplicationCycle message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplicationCycle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ReplicationCycle;

                    /**
                     * Decodes a ReplicationCycle message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplicationCycle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ReplicationCycle;

                    /**
                     * Verifies a ReplicationCycle message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplicationCycle message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplicationCycle
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ReplicationCycle;

                    /**
                     * Creates a plain object from a ReplicationCycle message. Also converts values to other types if specified.
                     * @param message ReplicationCycle
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ReplicationCycle, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplicationCycle to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** UtilizationReportView enum. */
                enum UtilizationReportView {
                    UTILIZATION_REPORT_VIEW_UNSPECIFIED = 0,
                    BASIC = 1,
                    FULL = 2
                }

                /** Properties of a ReplicationSync. */
                interface IReplicationSync {

                    /** ReplicationSync lastSyncTime */
                    lastSyncTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a ReplicationSync. */
                class ReplicationSync implements IReplicationSync {

                    /**
                     * Constructs a new ReplicationSync.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IReplicationSync);

                    /** ReplicationSync lastSyncTime. */
                    public lastSyncTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new ReplicationSync instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplicationSync instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IReplicationSync): google.cloud.vmmigration.v1.ReplicationSync;

                    /**
                     * Encodes the specified ReplicationSync message. Does not implicitly {@link google.cloud.vmmigration.v1.ReplicationSync.verify|verify} messages.
                     * @param message ReplicationSync message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IReplicationSync, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplicationSync message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ReplicationSync.verify|verify} messages.
                     * @param message ReplicationSync message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IReplicationSync, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplicationSync message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplicationSync
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ReplicationSync;

                    /**
                     * Decodes a ReplicationSync message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplicationSync
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ReplicationSync;

                    /**
                     * Verifies a ReplicationSync message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplicationSync message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplicationSync
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ReplicationSync;

                    /**
                     * Creates a plain object from a ReplicationSync message. Also converts values to other types if specified.
                     * @param message ReplicationSync
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ReplicationSync, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplicationSync to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** ComputeEngineDiskType enum. */
                enum ComputeEngineDiskType {
                    COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED = 0,
                    COMPUTE_ENGINE_DISK_TYPE_STANDARD = 1,
                    COMPUTE_ENGINE_DISK_TYPE_SSD = 2,
                    COMPUTE_ENGINE_DISK_TYPE_BALANCED = 3
                }

                /** ComputeEngineLicenseType enum. */
                enum ComputeEngineLicenseType {
                    COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT = 0,
                    COMPUTE_ENGINE_LICENSE_TYPE_PAYG = 1,
                    COMPUTE_ENGINE_LICENSE_TYPE_BYOL = 2
                }

                /** ComputeEngineBootOption enum. */
                enum ComputeEngineBootOption {
                    COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED = 0,
                    COMPUTE_ENGINE_BOOT_OPTION_EFI = 1,
                    COMPUTE_ENGINE_BOOT_OPTION_BIOS = 2
                }

                /** Properties of a MigratingVm. */
                interface IMigratingVm {

                    /** MigratingVm computeEngineTargetDefaults */
                    computeEngineTargetDefaults?: (google.cloud.vmmigration.v1.IComputeEngineTargetDefaults|null);

                    /** MigratingVm name */
                    name?: (string|null);

                    /** MigratingVm sourceVmId */
                    sourceVmId?: (string|null);

                    /** MigratingVm displayName */
                    displayName?: (string|null);

                    /** MigratingVm description */
                    description?: (string|null);

                    /** MigratingVm policy */
                    policy?: (google.cloud.vmmigration.v1.ISchedulePolicy|null);

                    /** MigratingVm createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** MigratingVm updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** MigratingVm lastSync */
                    lastSync?: (google.cloud.vmmigration.v1.IReplicationSync|null);

                    /** MigratingVm state */
                    state?: (google.cloud.vmmigration.v1.MigratingVm.State|keyof typeof google.cloud.vmmigration.v1.MigratingVm.State|null);

                    /** MigratingVm stateTime */
                    stateTime?: (google.protobuf.ITimestamp|null);

                    /** MigratingVm currentSyncInfo */
                    currentSyncInfo?: (google.cloud.vmmigration.v1.IReplicationCycle|null);

                    /** MigratingVm group */
                    group?: (string|null);

                    /** MigratingVm labels */
                    labels?: ({ [k: string]: string }|null);

                    /** MigratingVm error */
                    error?: (google.rpc.IStatus|null);
                }

                /** Represents a MigratingVm. */
                class MigratingVm implements IMigratingVm {

                    /**
                     * Constructs a new MigratingVm.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IMigratingVm);

                    /** MigratingVm computeEngineTargetDefaults. */
                    public computeEngineTargetDefaults?: (google.cloud.vmmigration.v1.IComputeEngineTargetDefaults|null);

                    /** MigratingVm name. */
                    public name: string;

                    /** MigratingVm sourceVmId. */
                    public sourceVmId: string;

                    /** MigratingVm displayName. */
                    public displayName: string;

                    /** MigratingVm description. */
                    public description: string;

                    /** MigratingVm policy. */
                    public policy?: (google.cloud.vmmigration.v1.ISchedulePolicy|null);

                    /** MigratingVm createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** MigratingVm updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** MigratingVm lastSync. */
                    public lastSync?: (google.cloud.vmmigration.v1.IReplicationSync|null);

                    /** MigratingVm state. */
                    public state: (google.cloud.vmmigration.v1.MigratingVm.State|keyof typeof google.cloud.vmmigration.v1.MigratingVm.State);

                    /** MigratingVm stateTime. */
                    public stateTime?: (google.protobuf.ITimestamp|null);

                    /** MigratingVm currentSyncInfo. */
                    public currentSyncInfo?: (google.cloud.vmmigration.v1.IReplicationCycle|null);

                    /** MigratingVm group. */
                    public group: string;

                    /** MigratingVm labels. */
                    public labels: { [k: string]: string };

                    /** MigratingVm error. */
                    public error?: (google.rpc.IStatus|null);

                    /** MigratingVm targetVmDefaults. */
                    public targetVmDefaults?: "computeEngineTargetDefaults";

                    /**
                     * Creates a new MigratingVm instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MigratingVm instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IMigratingVm): google.cloud.vmmigration.v1.MigratingVm;

                    /**
                     * Encodes the specified MigratingVm message. Does not implicitly {@link google.cloud.vmmigration.v1.MigratingVm.verify|verify} messages.
                     * @param message MigratingVm message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IMigratingVm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MigratingVm message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.MigratingVm.verify|verify} messages.
                     * @param message MigratingVm message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IMigratingVm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MigratingVm message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MigratingVm
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.MigratingVm;

                    /**
                     * Decodes a MigratingVm message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MigratingVm
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.MigratingVm;

                    /**
                     * Verifies a MigratingVm message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MigratingVm message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MigratingVm
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.MigratingVm;

                    /**
                     * Creates a plain object from a MigratingVm message. Also converts values to other types if specified.
                     * @param message MigratingVm
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.MigratingVm, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MigratingVm to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace MigratingVm {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PENDING = 1,
                        READY = 2,
                        FIRST_SYNC = 3,
                        ACTIVE = 4,
                        CUTTING_OVER = 7,
                        CUTOVER = 8,
                        FINAL_SYNC = 9,
                        PAUSED = 10,
                        FINALIZING = 11,
                        FINALIZED = 12,
                        ERROR = 13
                    }
                }

                /** Properties of a CloneJob. */
                interface ICloneJob {

                    /** CloneJob computeEngineTargetDetails */
                    computeEngineTargetDetails?: (google.cloud.vmmigration.v1.IComputeEngineTargetDetails|null);

                    /** CloneJob createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CloneJob name */
                    name?: (string|null);

                    /** CloneJob state */
                    state?: (google.cloud.vmmigration.v1.CloneJob.State|keyof typeof google.cloud.vmmigration.v1.CloneJob.State|null);

                    /** CloneJob stateTime */
                    stateTime?: (google.protobuf.ITimestamp|null);

                    /** CloneJob error */
                    error?: (google.rpc.IStatus|null);
                }

                /** Represents a CloneJob. */
                class CloneJob implements ICloneJob {

                    /**
                     * Constructs a new CloneJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICloneJob);

                    /** CloneJob computeEngineTargetDetails. */
                    public computeEngineTargetDetails?: (google.cloud.vmmigration.v1.IComputeEngineTargetDetails|null);

                    /** CloneJob createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CloneJob name. */
                    public name: string;

                    /** CloneJob state. */
                    public state: (google.cloud.vmmigration.v1.CloneJob.State|keyof typeof google.cloud.vmmigration.v1.CloneJob.State);

                    /** CloneJob stateTime. */
                    public stateTime?: (google.protobuf.ITimestamp|null);

                    /** CloneJob error. */
                    public error?: (google.rpc.IStatus|null);

                    /** CloneJob targetVmDetails. */
                    public targetVmDetails?: "computeEngineTargetDetails";

                    /**
                     * Creates a new CloneJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloneJob instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICloneJob): google.cloud.vmmigration.v1.CloneJob;

                    /**
                     * Encodes the specified CloneJob message. Does not implicitly {@link google.cloud.vmmigration.v1.CloneJob.verify|verify} messages.
                     * @param message CloneJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICloneJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloneJob message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CloneJob.verify|verify} messages.
                     * @param message CloneJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICloneJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloneJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloneJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CloneJob;

                    /**
                     * Decodes a CloneJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloneJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CloneJob;

                    /**
                     * Verifies a CloneJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloneJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloneJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CloneJob;

                    /**
                     * Creates a plain object from a CloneJob message. Also converts values to other types if specified.
                     * @param message CloneJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CloneJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloneJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CloneJob {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PENDING = 1,
                        ACTIVE = 2,
                        FAILED = 3,
                        SUCCEEDED = 4,
                        CANCELLED = 5,
                        CANCELLING = 6,
                        ADAPTING_OS = 7
                    }
                }

                /** Properties of a CutoverJob. */
                interface ICutoverJob {

                    /** CutoverJob computeEngineTargetDetails */
                    computeEngineTargetDetails?: (google.cloud.vmmigration.v1.IComputeEngineTargetDetails|null);

                    /** CutoverJob createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CutoverJob name */
                    name?: (string|null);

                    /** CutoverJob state */
                    state?: (google.cloud.vmmigration.v1.CutoverJob.State|keyof typeof google.cloud.vmmigration.v1.CutoverJob.State|null);

                    /** CutoverJob stateTime */
                    stateTime?: (google.protobuf.ITimestamp|null);

                    /** CutoverJob progressPercent */
                    progressPercent?: (number|null);

                    /** CutoverJob error */
                    error?: (google.rpc.IStatus|null);

                    /** CutoverJob stateMessage */
                    stateMessage?: (string|null);
                }

                /** Represents a CutoverJob. */
                class CutoverJob implements ICutoverJob {

                    /**
                     * Constructs a new CutoverJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICutoverJob);

                    /** CutoverJob computeEngineTargetDetails. */
                    public computeEngineTargetDetails?: (google.cloud.vmmigration.v1.IComputeEngineTargetDetails|null);

                    /** CutoverJob createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CutoverJob name. */
                    public name: string;

                    /** CutoverJob state. */
                    public state: (google.cloud.vmmigration.v1.CutoverJob.State|keyof typeof google.cloud.vmmigration.v1.CutoverJob.State);

                    /** CutoverJob stateTime. */
                    public stateTime?: (google.protobuf.ITimestamp|null);

                    /** CutoverJob progressPercent. */
                    public progressPercent: number;

                    /** CutoverJob error. */
                    public error?: (google.rpc.IStatus|null);

                    /** CutoverJob stateMessage. */
                    public stateMessage: string;

                    /** CutoverJob targetVmDetails. */
                    public targetVmDetails?: "computeEngineTargetDetails";

                    /**
                     * Creates a new CutoverJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CutoverJob instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICutoverJob): google.cloud.vmmigration.v1.CutoverJob;

                    /**
                     * Encodes the specified CutoverJob message. Does not implicitly {@link google.cloud.vmmigration.v1.CutoverJob.verify|verify} messages.
                     * @param message CutoverJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICutoverJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CutoverJob message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CutoverJob.verify|verify} messages.
                     * @param message CutoverJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICutoverJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CutoverJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CutoverJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CutoverJob;

                    /**
                     * Decodes a CutoverJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CutoverJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CutoverJob;

                    /**
                     * Verifies a CutoverJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CutoverJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CutoverJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CutoverJob;

                    /**
                     * Creates a plain object from a CutoverJob message. Also converts values to other types if specified.
                     * @param message CutoverJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CutoverJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CutoverJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CutoverJob {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PENDING = 1,
                        FAILED = 2,
                        SUCCEEDED = 3,
                        CANCELLED = 4,
                        CANCELLING = 5,
                        ACTIVE = 6,
                        ADAPTING_OS = 7
                    }
                }

                /** Properties of a CreateCloneJobRequest. */
                interface ICreateCloneJobRequest {

                    /** CreateCloneJobRequest parent */
                    parent?: (string|null);

                    /** CreateCloneJobRequest cloneJobId */
                    cloneJobId?: (string|null);

                    /** CreateCloneJobRequest cloneJob */
                    cloneJob?: (google.cloud.vmmigration.v1.ICloneJob|null);

                    /** CreateCloneJobRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateCloneJobRequest. */
                class CreateCloneJobRequest implements ICreateCloneJobRequest {

                    /**
                     * Constructs a new CreateCloneJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICreateCloneJobRequest);

                    /** CreateCloneJobRequest parent. */
                    public parent: string;

                    /** CreateCloneJobRequest cloneJobId. */
                    public cloneJobId: string;

                    /** CreateCloneJobRequest cloneJob. */
                    public cloneJob?: (google.cloud.vmmigration.v1.ICloneJob|null);

                    /** CreateCloneJobRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateCloneJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCloneJobRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICreateCloneJobRequest): google.cloud.vmmigration.v1.CreateCloneJobRequest;

                    /**
                     * Encodes the specified CreateCloneJobRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.CreateCloneJobRequest.verify|verify} messages.
                     * @param message CreateCloneJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICreateCloneJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCloneJobRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CreateCloneJobRequest.verify|verify} messages.
                     * @param message CreateCloneJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICreateCloneJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCloneJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCloneJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CreateCloneJobRequest;

                    /**
                     * Decodes a CreateCloneJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCloneJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CreateCloneJobRequest;

                    /**
                     * Verifies a CreateCloneJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCloneJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCloneJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CreateCloneJobRequest;

                    /**
                     * Creates a plain object from a CreateCloneJobRequest message. Also converts values to other types if specified.
                     * @param message CreateCloneJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CreateCloneJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCloneJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CancelCloneJobRequest. */
                interface ICancelCloneJobRequest {

                    /** CancelCloneJobRequest name */
                    name?: (string|null);
                }

                /** Represents a CancelCloneJobRequest. */
                class CancelCloneJobRequest implements ICancelCloneJobRequest {

                    /**
                     * Constructs a new CancelCloneJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICancelCloneJobRequest);

                    /** CancelCloneJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new CancelCloneJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelCloneJobRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICancelCloneJobRequest): google.cloud.vmmigration.v1.CancelCloneJobRequest;

                    /**
                     * Encodes the specified CancelCloneJobRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.CancelCloneJobRequest.verify|verify} messages.
                     * @param message CancelCloneJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICancelCloneJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelCloneJobRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CancelCloneJobRequest.verify|verify} messages.
                     * @param message CancelCloneJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICancelCloneJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelCloneJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelCloneJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CancelCloneJobRequest;

                    /**
                     * Decodes a CancelCloneJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelCloneJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CancelCloneJobRequest;

                    /**
                     * Verifies a CancelCloneJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelCloneJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelCloneJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CancelCloneJobRequest;

                    /**
                     * Creates a plain object from a CancelCloneJobRequest message. Also converts values to other types if specified.
                     * @param message CancelCloneJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CancelCloneJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelCloneJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CancelCloneJobResponse. */
                interface ICancelCloneJobResponse {
                }

                /** Represents a CancelCloneJobResponse. */
                class CancelCloneJobResponse implements ICancelCloneJobResponse {

                    /**
                     * Constructs a new CancelCloneJobResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICancelCloneJobResponse);

                    /**
                     * Creates a new CancelCloneJobResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelCloneJobResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICancelCloneJobResponse): google.cloud.vmmigration.v1.CancelCloneJobResponse;

                    /**
                     * Encodes the specified CancelCloneJobResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.CancelCloneJobResponse.verify|verify} messages.
                     * @param message CancelCloneJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICancelCloneJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelCloneJobResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CancelCloneJobResponse.verify|verify} messages.
                     * @param message CancelCloneJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICancelCloneJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelCloneJobResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelCloneJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CancelCloneJobResponse;

                    /**
                     * Decodes a CancelCloneJobResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelCloneJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CancelCloneJobResponse;

                    /**
                     * Verifies a CancelCloneJobResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelCloneJobResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelCloneJobResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CancelCloneJobResponse;

                    /**
                     * Creates a plain object from a CancelCloneJobResponse message. Also converts values to other types if specified.
                     * @param message CancelCloneJobResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CancelCloneJobResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelCloneJobResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCloneJobsRequest. */
                interface IListCloneJobsRequest {

                    /** ListCloneJobsRequest parent */
                    parent?: (string|null);

                    /** ListCloneJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCloneJobsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCloneJobsRequest filter */
                    filter?: (string|null);

                    /** ListCloneJobsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListCloneJobsRequest. */
                class ListCloneJobsRequest implements IListCloneJobsRequest {

                    /**
                     * Constructs a new ListCloneJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListCloneJobsRequest);

                    /** ListCloneJobsRequest parent. */
                    public parent: string;

                    /** ListCloneJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListCloneJobsRequest pageToken. */
                    public pageToken: string;

                    /** ListCloneJobsRequest filter. */
                    public filter: string;

                    /** ListCloneJobsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListCloneJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCloneJobsRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListCloneJobsRequest): google.cloud.vmmigration.v1.ListCloneJobsRequest;

                    /**
                     * Encodes the specified ListCloneJobsRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.ListCloneJobsRequest.verify|verify} messages.
                     * @param message ListCloneJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListCloneJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCloneJobsRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListCloneJobsRequest.verify|verify} messages.
                     * @param message ListCloneJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListCloneJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCloneJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCloneJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListCloneJobsRequest;

                    /**
                     * Decodes a ListCloneJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCloneJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListCloneJobsRequest;

                    /**
                     * Verifies a ListCloneJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCloneJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCloneJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListCloneJobsRequest;

                    /**
                     * Creates a plain object from a ListCloneJobsRequest message. Also converts values to other types if specified.
                     * @param message ListCloneJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListCloneJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCloneJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCloneJobsResponse. */
                interface IListCloneJobsResponse {

                    /** ListCloneJobsResponse cloneJobs */
                    cloneJobs?: (google.cloud.vmmigration.v1.ICloneJob[]|null);

                    /** ListCloneJobsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListCloneJobsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListCloneJobsResponse. */
                class ListCloneJobsResponse implements IListCloneJobsResponse {

                    /**
                     * Constructs a new ListCloneJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListCloneJobsResponse);

                    /** ListCloneJobsResponse cloneJobs. */
                    public cloneJobs: google.cloud.vmmigration.v1.ICloneJob[];

                    /** ListCloneJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListCloneJobsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListCloneJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCloneJobsResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListCloneJobsResponse): google.cloud.vmmigration.v1.ListCloneJobsResponse;

                    /**
                     * Encodes the specified ListCloneJobsResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.ListCloneJobsResponse.verify|verify} messages.
                     * @param message ListCloneJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListCloneJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCloneJobsResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListCloneJobsResponse.verify|verify} messages.
                     * @param message ListCloneJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListCloneJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCloneJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCloneJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListCloneJobsResponse;

                    /**
                     * Decodes a ListCloneJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCloneJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListCloneJobsResponse;

                    /**
                     * Verifies a ListCloneJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCloneJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCloneJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListCloneJobsResponse;

                    /**
                     * Creates a plain object from a ListCloneJobsResponse message. Also converts values to other types if specified.
                     * @param message ListCloneJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListCloneJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCloneJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetCloneJobRequest. */
                interface IGetCloneJobRequest {

                    /** GetCloneJobRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCloneJobRequest. */
                class GetCloneJobRequest implements IGetCloneJobRequest {

                    /**
                     * Constructs a new GetCloneJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IGetCloneJobRequest);

                    /** GetCloneJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCloneJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCloneJobRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IGetCloneJobRequest): google.cloud.vmmigration.v1.GetCloneJobRequest;

                    /**
                     * Encodes the specified GetCloneJobRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.GetCloneJobRequest.verify|verify} messages.
                     * @param message GetCloneJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IGetCloneJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCloneJobRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.GetCloneJobRequest.verify|verify} messages.
                     * @param message GetCloneJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IGetCloneJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCloneJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCloneJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.GetCloneJobRequest;

                    /**
                     * Decodes a GetCloneJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCloneJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.GetCloneJobRequest;

                    /**
                     * Verifies a GetCloneJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCloneJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCloneJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.GetCloneJobRequest;

                    /**
                     * Creates a plain object from a GetCloneJobRequest message. Also converts values to other types if specified.
                     * @param message GetCloneJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.GetCloneJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCloneJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Source. */
                interface ISource {

                    /** Source vmware */
                    vmware?: (google.cloud.vmmigration.v1.IVmwareSourceDetails|null);

                    /** Source name */
                    name?: (string|null);

                    /** Source createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Source updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Source labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Source description */
                    description?: (string|null);
                }

                /** Represents a Source. */
                class Source implements ISource {

                    /**
                     * Constructs a new Source.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ISource);

                    /** Source vmware. */
                    public vmware?: (google.cloud.vmmigration.v1.IVmwareSourceDetails|null);

                    /** Source name. */
                    public name: string;

                    /** Source createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Source updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Source labels. */
                    public labels: { [k: string]: string };

                    /** Source description. */
                    public description: string;

                    /** Source sourceDetails. */
                    public sourceDetails?: "vmware";

                    /**
                     * Creates a new Source instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Source instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ISource): google.cloud.vmmigration.v1.Source;

                    /**
                     * Encodes the specified Source message. Does not implicitly {@link google.cloud.vmmigration.v1.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Source message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Source message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.Source;

                    /**
                     * Decodes a Source message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.Source;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.Source;

                    /**
                     * Creates a plain object from a Source message. Also converts values to other types if specified.
                     * @param message Source
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Source to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VmwareSourceDetails. */
                interface IVmwareSourceDetails {

                    /** VmwareSourceDetails username */
                    username?: (string|null);

                    /** VmwareSourceDetails password */
                    password?: (string|null);

                    /** VmwareSourceDetails vcenterIp */
                    vcenterIp?: (string|null);

                    /** VmwareSourceDetails thumbprint */
                    thumbprint?: (string|null);
                }

                /** Represents a VmwareSourceDetails. */
                class VmwareSourceDetails implements IVmwareSourceDetails {

                    /**
                     * Constructs a new VmwareSourceDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IVmwareSourceDetails);

                    /** VmwareSourceDetails username. */
                    public username: string;

                    /** VmwareSourceDetails password. */
                    public password: string;

                    /** VmwareSourceDetails vcenterIp. */
                    public vcenterIp: string;

                    /** VmwareSourceDetails thumbprint. */
                    public thumbprint: string;

                    /**
                     * Creates a new VmwareSourceDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VmwareSourceDetails instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IVmwareSourceDetails): google.cloud.vmmigration.v1.VmwareSourceDetails;

                    /**
                     * Encodes the specified VmwareSourceDetails message. Does not implicitly {@link google.cloud.vmmigration.v1.VmwareSourceDetails.verify|verify} messages.
                     * @param message VmwareSourceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IVmwareSourceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VmwareSourceDetails message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.VmwareSourceDetails.verify|verify} messages.
                     * @param message VmwareSourceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IVmwareSourceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VmwareSourceDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VmwareSourceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.VmwareSourceDetails;

                    /**
                     * Decodes a VmwareSourceDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VmwareSourceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.VmwareSourceDetails;

                    /**
                     * Verifies a VmwareSourceDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VmwareSourceDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VmwareSourceDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.VmwareSourceDetails;

                    /**
                     * Creates a plain object from a VmwareSourceDetails message. Also converts values to other types if specified.
                     * @param message VmwareSourceDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.VmwareSourceDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VmwareSourceDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DatacenterConnector. */
                interface IDatacenterConnector {

                    /** DatacenterConnector createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** DatacenterConnector updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** DatacenterConnector name */
                    name?: (string|null);

                    /** DatacenterConnector registrationId */
                    registrationId?: (string|null);

                    /** DatacenterConnector serviceAccount */
                    serviceAccount?: (string|null);

                    /** DatacenterConnector version */
                    version?: (string|null);

                    /** DatacenterConnector bucket */
                    bucket?: (string|null);

                    /** DatacenterConnector state */
                    state?: (google.cloud.vmmigration.v1.DatacenterConnector.State|keyof typeof google.cloud.vmmigration.v1.DatacenterConnector.State|null);

                    /** DatacenterConnector stateTime */
                    stateTime?: (google.protobuf.ITimestamp|null);

                    /** DatacenterConnector error */
                    error?: (google.rpc.IStatus|null);
                }

                /** Represents a DatacenterConnector. */
                class DatacenterConnector implements IDatacenterConnector {

                    /**
                     * Constructs a new DatacenterConnector.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IDatacenterConnector);

                    /** DatacenterConnector createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** DatacenterConnector updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** DatacenterConnector name. */
                    public name: string;

                    /** DatacenterConnector registrationId. */
                    public registrationId: string;

                    /** DatacenterConnector serviceAccount. */
                    public serviceAccount: string;

                    /** DatacenterConnector version. */
                    public version: string;

                    /** DatacenterConnector bucket. */
                    public bucket: string;

                    /** DatacenterConnector state. */
                    public state: (google.cloud.vmmigration.v1.DatacenterConnector.State|keyof typeof google.cloud.vmmigration.v1.DatacenterConnector.State);

                    /** DatacenterConnector stateTime. */
                    public stateTime?: (google.protobuf.ITimestamp|null);

                    /** DatacenterConnector error. */
                    public error?: (google.rpc.IStatus|null);

                    /**
                     * Creates a new DatacenterConnector instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DatacenterConnector instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IDatacenterConnector): google.cloud.vmmigration.v1.DatacenterConnector;

                    /**
                     * Encodes the specified DatacenterConnector message. Does not implicitly {@link google.cloud.vmmigration.v1.DatacenterConnector.verify|verify} messages.
                     * @param message DatacenterConnector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IDatacenterConnector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DatacenterConnector message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.DatacenterConnector.verify|verify} messages.
                     * @param message DatacenterConnector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IDatacenterConnector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DatacenterConnector message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DatacenterConnector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.DatacenterConnector;

                    /**
                     * Decodes a DatacenterConnector message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DatacenterConnector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.DatacenterConnector;

                    /**
                     * Verifies a DatacenterConnector message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DatacenterConnector message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DatacenterConnector
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.DatacenterConnector;

                    /**
                     * Creates a plain object from a DatacenterConnector message. Also converts values to other types if specified.
                     * @param message DatacenterConnector
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.DatacenterConnector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DatacenterConnector to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DatacenterConnector {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PENDING = 1,
                        OFFLINE = 2,
                        FAILED = 3,
                        ACTIVE = 4
                    }
                }

                /** Properties of a ListSourcesRequest. */
                interface IListSourcesRequest {

                    /** ListSourcesRequest parent */
                    parent?: (string|null);

                    /** ListSourcesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSourcesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSourcesRequest filter */
                    filter?: (string|null);

                    /** ListSourcesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListSourcesRequest. */
                class ListSourcesRequest implements IListSourcesRequest {

                    /**
                     * Constructs a new ListSourcesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListSourcesRequest);

                    /** ListSourcesRequest parent. */
                    public parent: string;

                    /** ListSourcesRequest pageSize. */
                    public pageSize: number;

                    /** ListSourcesRequest pageToken. */
                    public pageToken: string;

                    /** ListSourcesRequest filter. */
                    public filter: string;

                    /** ListSourcesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListSourcesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSourcesRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListSourcesRequest): google.cloud.vmmigration.v1.ListSourcesRequest;

                    /**
                     * Encodes the specified ListSourcesRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.ListSourcesRequest.verify|verify} messages.
                     * @param message ListSourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListSourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSourcesRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListSourcesRequest.verify|verify} messages.
                     * @param message ListSourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListSourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSourcesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListSourcesRequest;

                    /**
                     * Decodes a ListSourcesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListSourcesRequest;

                    /**
                     * Verifies a ListSourcesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSourcesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSourcesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListSourcesRequest;

                    /**
                     * Creates a plain object from a ListSourcesRequest message. Also converts values to other types if specified.
                     * @param message ListSourcesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListSourcesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSourcesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListSourcesResponse. */
                interface IListSourcesResponse {

                    /** ListSourcesResponse sources */
                    sources?: (google.cloud.vmmigration.v1.ISource[]|null);

                    /** ListSourcesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListSourcesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListSourcesResponse. */
                class ListSourcesResponse implements IListSourcesResponse {

                    /**
                     * Constructs a new ListSourcesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListSourcesResponse);

                    /** ListSourcesResponse sources. */
                    public sources: google.cloud.vmmigration.v1.ISource[];

                    /** ListSourcesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListSourcesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListSourcesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSourcesResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListSourcesResponse): google.cloud.vmmigration.v1.ListSourcesResponse;

                    /**
                     * Encodes the specified ListSourcesResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.ListSourcesResponse.verify|verify} messages.
                     * @param message ListSourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListSourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSourcesResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListSourcesResponse.verify|verify} messages.
                     * @param message ListSourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListSourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSourcesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListSourcesResponse;

                    /**
                     * Decodes a ListSourcesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListSourcesResponse;

                    /**
                     * Verifies a ListSourcesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSourcesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSourcesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListSourcesResponse;

                    /**
                     * Creates a plain object from a ListSourcesResponse message. Also converts values to other types if specified.
                     * @param message ListSourcesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListSourcesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSourcesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetSourceRequest. */
                interface IGetSourceRequest {

                    /** GetSourceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSourceRequest. */
                class GetSourceRequest implements IGetSourceRequest {

                    /**
                     * Constructs a new GetSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IGetSourceRequest);

                    /** GetSourceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSourceRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IGetSourceRequest): google.cloud.vmmigration.v1.GetSourceRequest;

                    /**
                     * Encodes the specified GetSourceRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.GetSourceRequest.verify|verify} messages.
                     * @param message GetSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IGetSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSourceRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.GetSourceRequest.verify|verify} messages.
                     * @param message GetSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IGetSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.GetSourceRequest;

                    /**
                     * Decodes a GetSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.GetSourceRequest;

                    /**
                     * Verifies a GetSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.GetSourceRequest;

                    /**
                     * Creates a plain object from a GetSourceRequest message. Also converts values to other types if specified.
                     * @param message GetSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.GetSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateSourceRequest. */
                interface ICreateSourceRequest {

                    /** CreateSourceRequest parent */
                    parent?: (string|null);

                    /** CreateSourceRequest sourceId */
                    sourceId?: (string|null);

                    /** CreateSourceRequest source */
                    source?: (google.cloud.vmmigration.v1.ISource|null);

                    /** CreateSourceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateSourceRequest. */
                class CreateSourceRequest implements ICreateSourceRequest {

                    /**
                     * Constructs a new CreateSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICreateSourceRequest);

                    /** CreateSourceRequest parent. */
                    public parent: string;

                    /** CreateSourceRequest sourceId. */
                    public sourceId: string;

                    /** CreateSourceRequest source. */
                    public source?: (google.cloud.vmmigration.v1.ISource|null);

                    /** CreateSourceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSourceRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICreateSourceRequest): google.cloud.vmmigration.v1.CreateSourceRequest;

                    /**
                     * Encodes the specified CreateSourceRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.CreateSourceRequest.verify|verify} messages.
                     * @param message CreateSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICreateSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSourceRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CreateSourceRequest.verify|verify} messages.
                     * @param message CreateSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICreateSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CreateSourceRequest;

                    /**
                     * Decodes a CreateSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CreateSourceRequest;

                    /**
                     * Verifies a CreateSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CreateSourceRequest;

                    /**
                     * Creates a plain object from a CreateSourceRequest message. Also converts values to other types if specified.
                     * @param message CreateSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CreateSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateSourceRequest. */
                interface IUpdateSourceRequest {

                    /** UpdateSourceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSourceRequest source */
                    source?: (google.cloud.vmmigration.v1.ISource|null);

                    /** UpdateSourceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateSourceRequest. */
                class UpdateSourceRequest implements IUpdateSourceRequest {

                    /**
                     * Constructs a new UpdateSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IUpdateSourceRequest);

                    /** UpdateSourceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSourceRequest source. */
                    public source?: (google.cloud.vmmigration.v1.ISource|null);

                    /** UpdateSourceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSourceRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IUpdateSourceRequest): google.cloud.vmmigration.v1.UpdateSourceRequest;

                    /**
                     * Encodes the specified UpdateSourceRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.UpdateSourceRequest.verify|verify} messages.
                     * @param message UpdateSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IUpdateSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSourceRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.UpdateSourceRequest.verify|verify} messages.
                     * @param message UpdateSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IUpdateSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.UpdateSourceRequest;

                    /**
                     * Decodes an UpdateSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.UpdateSourceRequest;

                    /**
                     * Verifies an UpdateSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.UpdateSourceRequest;

                    /**
                     * Creates a plain object from an UpdateSourceRequest message. Also converts values to other types if specified.
                     * @param message UpdateSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.UpdateSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteSourceRequest. */
                interface IDeleteSourceRequest {

                    /** DeleteSourceRequest name */
                    name?: (string|null);

                    /** DeleteSourceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteSourceRequest. */
                class DeleteSourceRequest implements IDeleteSourceRequest {

                    /**
                     * Constructs a new DeleteSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IDeleteSourceRequest);

                    /** DeleteSourceRequest name. */
                    public name: string;

                    /** DeleteSourceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteSourceRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IDeleteSourceRequest): google.cloud.vmmigration.v1.DeleteSourceRequest;

                    /**
                     * Encodes the specified DeleteSourceRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.DeleteSourceRequest.verify|verify} messages.
                     * @param message DeleteSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IDeleteSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteSourceRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.DeleteSourceRequest.verify|verify} messages.
                     * @param message DeleteSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IDeleteSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.DeleteSourceRequest;

                    /**
                     * Decodes a DeleteSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.DeleteSourceRequest;

                    /**
                     * Verifies a DeleteSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.DeleteSourceRequest;

                    /**
                     * Creates a plain object from a DeleteSourceRequest message. Also converts values to other types if specified.
                     * @param message DeleteSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.DeleteSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchInventoryRequest. */
                interface IFetchInventoryRequest {

                    /** FetchInventoryRequest source */
                    source?: (string|null);

                    /** FetchInventoryRequest forceRefresh */
                    forceRefresh?: (boolean|null);
                }

                /** Represents a FetchInventoryRequest. */
                class FetchInventoryRequest implements IFetchInventoryRequest {

                    /**
                     * Constructs a new FetchInventoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IFetchInventoryRequest);

                    /** FetchInventoryRequest source. */
                    public source: string;

                    /** FetchInventoryRequest forceRefresh. */
                    public forceRefresh: boolean;

                    /**
                     * Creates a new FetchInventoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchInventoryRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IFetchInventoryRequest): google.cloud.vmmigration.v1.FetchInventoryRequest;

                    /**
                     * Encodes the specified FetchInventoryRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.FetchInventoryRequest.verify|verify} messages.
                     * @param message FetchInventoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IFetchInventoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchInventoryRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.FetchInventoryRequest.verify|verify} messages.
                     * @param message FetchInventoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IFetchInventoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchInventoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchInventoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.FetchInventoryRequest;

                    /**
                     * Decodes a FetchInventoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchInventoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.FetchInventoryRequest;

                    /**
                     * Verifies a FetchInventoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchInventoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchInventoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.FetchInventoryRequest;

                    /**
                     * Creates a plain object from a FetchInventoryRequest message. Also converts values to other types if specified.
                     * @param message FetchInventoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.FetchInventoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchInventoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VmwareVmDetails. */
                interface IVmwareVmDetails {

                    /** VmwareVmDetails vmId */
                    vmId?: (string|null);

                    /** VmwareVmDetails datacenterId */
                    datacenterId?: (string|null);

                    /** VmwareVmDetails datacenterDescription */
                    datacenterDescription?: (string|null);

                    /** VmwareVmDetails uuid */
                    uuid?: (string|null);

                    /** VmwareVmDetails displayName */
                    displayName?: (string|null);

                    /** VmwareVmDetails powerState */
                    powerState?: (google.cloud.vmmigration.v1.VmwareVmDetails.PowerState|keyof typeof google.cloud.vmmigration.v1.VmwareVmDetails.PowerState|null);

                    /** VmwareVmDetails cpuCount */
                    cpuCount?: (number|null);

                    /** VmwareVmDetails memoryMb */
                    memoryMb?: (number|null);

                    /** VmwareVmDetails diskCount */
                    diskCount?: (number|null);

                    /** VmwareVmDetails committedStorageMb */
                    committedStorageMb?: (number|Long|string|null);

                    /** VmwareVmDetails guestDescription */
                    guestDescription?: (string|null);

                    /** VmwareVmDetails bootOption */
                    bootOption?: (google.cloud.vmmigration.v1.VmwareVmDetails.BootOption|keyof typeof google.cloud.vmmigration.v1.VmwareVmDetails.BootOption|null);
                }

                /** Represents a VmwareVmDetails. */
                class VmwareVmDetails implements IVmwareVmDetails {

                    /**
                     * Constructs a new VmwareVmDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IVmwareVmDetails);

                    /** VmwareVmDetails vmId. */
                    public vmId: string;

                    /** VmwareVmDetails datacenterId. */
                    public datacenterId: string;

                    /** VmwareVmDetails datacenterDescription. */
                    public datacenterDescription: string;

                    /** VmwareVmDetails uuid. */
                    public uuid: string;

                    /** VmwareVmDetails displayName. */
                    public displayName: string;

                    /** VmwareVmDetails powerState. */
                    public powerState: (google.cloud.vmmigration.v1.VmwareVmDetails.PowerState|keyof typeof google.cloud.vmmigration.v1.VmwareVmDetails.PowerState);

                    /** VmwareVmDetails cpuCount. */
                    public cpuCount: number;

                    /** VmwareVmDetails memoryMb. */
                    public memoryMb: number;

                    /** VmwareVmDetails diskCount. */
                    public diskCount: number;

                    /** VmwareVmDetails committedStorageMb. */
                    public committedStorageMb: (number|Long|string);

                    /** VmwareVmDetails guestDescription. */
                    public guestDescription: string;

                    /** VmwareVmDetails bootOption. */
                    public bootOption: (google.cloud.vmmigration.v1.VmwareVmDetails.BootOption|keyof typeof google.cloud.vmmigration.v1.VmwareVmDetails.BootOption);

                    /**
                     * Creates a new VmwareVmDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VmwareVmDetails instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IVmwareVmDetails): google.cloud.vmmigration.v1.VmwareVmDetails;

                    /**
                     * Encodes the specified VmwareVmDetails message. Does not implicitly {@link google.cloud.vmmigration.v1.VmwareVmDetails.verify|verify} messages.
                     * @param message VmwareVmDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IVmwareVmDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VmwareVmDetails message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.VmwareVmDetails.verify|verify} messages.
                     * @param message VmwareVmDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IVmwareVmDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VmwareVmDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VmwareVmDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.VmwareVmDetails;

                    /**
                     * Decodes a VmwareVmDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VmwareVmDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.VmwareVmDetails;

                    /**
                     * Verifies a VmwareVmDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VmwareVmDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VmwareVmDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.VmwareVmDetails;

                    /**
                     * Creates a plain object from a VmwareVmDetails message. Also converts values to other types if specified.
                     * @param message VmwareVmDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.VmwareVmDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VmwareVmDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace VmwareVmDetails {

                    /** PowerState enum. */
                    enum PowerState {
                        POWER_STATE_UNSPECIFIED = 0,
                        ON = 1,
                        OFF = 2,
                        SUSPENDED = 3
                    }

                    /** BootOption enum. */
                    enum BootOption {
                        BOOT_OPTION_UNSPECIFIED = 0,
                        EFI = 1,
                        BIOS = 2
                    }
                }

                /** Properties of a VmwareVmsDetails. */
                interface IVmwareVmsDetails {

                    /** VmwareVmsDetails details */
                    details?: (google.cloud.vmmigration.v1.IVmwareVmDetails[]|null);
                }

                /** Represents a VmwareVmsDetails. */
                class VmwareVmsDetails implements IVmwareVmsDetails {

                    /**
                     * Constructs a new VmwareVmsDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IVmwareVmsDetails);

                    /** VmwareVmsDetails details. */
                    public details: google.cloud.vmmigration.v1.IVmwareVmDetails[];

                    /**
                     * Creates a new VmwareVmsDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VmwareVmsDetails instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IVmwareVmsDetails): google.cloud.vmmigration.v1.VmwareVmsDetails;

                    /**
                     * Encodes the specified VmwareVmsDetails message. Does not implicitly {@link google.cloud.vmmigration.v1.VmwareVmsDetails.verify|verify} messages.
                     * @param message VmwareVmsDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IVmwareVmsDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VmwareVmsDetails message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.VmwareVmsDetails.verify|verify} messages.
                     * @param message VmwareVmsDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IVmwareVmsDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VmwareVmsDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VmwareVmsDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.VmwareVmsDetails;

                    /**
                     * Decodes a VmwareVmsDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VmwareVmsDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.VmwareVmsDetails;

                    /**
                     * Verifies a VmwareVmsDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VmwareVmsDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VmwareVmsDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.VmwareVmsDetails;

                    /**
                     * Creates a plain object from a VmwareVmsDetails message. Also converts values to other types if specified.
                     * @param message VmwareVmsDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.VmwareVmsDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VmwareVmsDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchInventoryResponse. */
                interface IFetchInventoryResponse {

                    /** FetchInventoryResponse vmwareVms */
                    vmwareVms?: (google.cloud.vmmigration.v1.IVmwareVmsDetails|null);

                    /** FetchInventoryResponse updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a FetchInventoryResponse. */
                class FetchInventoryResponse implements IFetchInventoryResponse {

                    /**
                     * Constructs a new FetchInventoryResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IFetchInventoryResponse);

                    /** FetchInventoryResponse vmwareVms. */
                    public vmwareVms?: (google.cloud.vmmigration.v1.IVmwareVmsDetails|null);

                    /** FetchInventoryResponse updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** FetchInventoryResponse SourceVms. */
                    public SourceVms?: "vmwareVms";

                    /**
                     * Creates a new FetchInventoryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchInventoryResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IFetchInventoryResponse): google.cloud.vmmigration.v1.FetchInventoryResponse;

                    /**
                     * Encodes the specified FetchInventoryResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.FetchInventoryResponse.verify|verify} messages.
                     * @param message FetchInventoryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IFetchInventoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchInventoryResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.FetchInventoryResponse.verify|verify} messages.
                     * @param message FetchInventoryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IFetchInventoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchInventoryResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchInventoryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.FetchInventoryResponse;

                    /**
                     * Decodes a FetchInventoryResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchInventoryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.FetchInventoryResponse;

                    /**
                     * Verifies a FetchInventoryResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchInventoryResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchInventoryResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.FetchInventoryResponse;

                    /**
                     * Creates a plain object from a FetchInventoryResponse message. Also converts values to other types if specified.
                     * @param message FetchInventoryResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.FetchInventoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchInventoryResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UtilizationReport. */
                interface IUtilizationReport {

                    /** UtilizationReport name */
                    name?: (string|null);

                    /** UtilizationReport displayName */
                    displayName?: (string|null);

                    /** UtilizationReport state */
                    state?: (google.cloud.vmmigration.v1.UtilizationReport.State|keyof typeof google.cloud.vmmigration.v1.UtilizationReport.State|null);

                    /** UtilizationReport stateTime */
                    stateTime?: (google.protobuf.ITimestamp|null);

                    /** UtilizationReport error */
                    error?: (google.rpc.IStatus|null);

                    /** UtilizationReport createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** UtilizationReport timeFrame */
                    timeFrame?: (google.cloud.vmmigration.v1.UtilizationReport.TimeFrame|keyof typeof google.cloud.vmmigration.v1.UtilizationReport.TimeFrame|null);

                    /** UtilizationReport frameEndTime */
                    frameEndTime?: (google.protobuf.ITimestamp|null);

                    /** UtilizationReport vmCount */
                    vmCount?: (number|null);

                    /** UtilizationReport vms */
                    vms?: (google.cloud.vmmigration.v1.IVmUtilizationInfo[]|null);
                }

                /** Represents an UtilizationReport. */
                class UtilizationReport implements IUtilizationReport {

                    /**
                     * Constructs a new UtilizationReport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IUtilizationReport);

                    /** UtilizationReport name. */
                    public name: string;

                    /** UtilizationReport displayName. */
                    public displayName: string;

                    /** UtilizationReport state. */
                    public state: (google.cloud.vmmigration.v1.UtilizationReport.State|keyof typeof google.cloud.vmmigration.v1.UtilizationReport.State);

                    /** UtilizationReport stateTime. */
                    public stateTime?: (google.protobuf.ITimestamp|null);

                    /** UtilizationReport error. */
                    public error?: (google.rpc.IStatus|null);

                    /** UtilizationReport createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** UtilizationReport timeFrame. */
                    public timeFrame: (google.cloud.vmmigration.v1.UtilizationReport.TimeFrame|keyof typeof google.cloud.vmmigration.v1.UtilizationReport.TimeFrame);

                    /** UtilizationReport frameEndTime. */
                    public frameEndTime?: (google.protobuf.ITimestamp|null);

                    /** UtilizationReport vmCount. */
                    public vmCount: number;

                    /** UtilizationReport vms. */
                    public vms: google.cloud.vmmigration.v1.IVmUtilizationInfo[];

                    /**
                     * Creates a new UtilizationReport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UtilizationReport instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IUtilizationReport): google.cloud.vmmigration.v1.UtilizationReport;

                    /**
                     * Encodes the specified UtilizationReport message. Does not implicitly {@link google.cloud.vmmigration.v1.UtilizationReport.verify|verify} messages.
                     * @param message UtilizationReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IUtilizationReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UtilizationReport message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.UtilizationReport.verify|verify} messages.
                     * @param message UtilizationReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IUtilizationReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UtilizationReport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UtilizationReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.UtilizationReport;

                    /**
                     * Decodes an UtilizationReport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UtilizationReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.UtilizationReport;

                    /**
                     * Verifies an UtilizationReport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UtilizationReport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UtilizationReport
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.UtilizationReport;

                    /**
                     * Creates a plain object from an UtilizationReport message. Also converts values to other types if specified.
                     * @param message UtilizationReport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.UtilizationReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UtilizationReport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace UtilizationReport {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3
                    }

                    /** TimeFrame enum. */
                    enum TimeFrame {
                        TIME_FRAME_UNSPECIFIED = 0,
                        WEEK = 1,
                        MONTH = 2,
                        YEAR = 3
                    }
                }

                /** Properties of a VmUtilizationInfo. */
                interface IVmUtilizationInfo {

                    /** VmUtilizationInfo vmwareVmDetails */
                    vmwareVmDetails?: (google.cloud.vmmigration.v1.IVmwareVmDetails|null);

                    /** VmUtilizationInfo vmId */
                    vmId?: (string|null);

                    /** VmUtilizationInfo utilization */
                    utilization?: (google.cloud.vmmigration.v1.IVmUtilizationMetrics|null);
                }

                /** Represents a VmUtilizationInfo. */
                class VmUtilizationInfo implements IVmUtilizationInfo {

                    /**
                     * Constructs a new VmUtilizationInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IVmUtilizationInfo);

                    /** VmUtilizationInfo vmwareVmDetails. */
                    public vmwareVmDetails?: (google.cloud.vmmigration.v1.IVmwareVmDetails|null);

                    /** VmUtilizationInfo vmId. */
                    public vmId: string;

                    /** VmUtilizationInfo utilization. */
                    public utilization?: (google.cloud.vmmigration.v1.IVmUtilizationMetrics|null);

                    /** VmUtilizationInfo VmDetails. */
                    public VmDetails?: "vmwareVmDetails";

                    /**
                     * Creates a new VmUtilizationInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VmUtilizationInfo instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IVmUtilizationInfo): google.cloud.vmmigration.v1.VmUtilizationInfo;

                    /**
                     * Encodes the specified VmUtilizationInfo message. Does not implicitly {@link google.cloud.vmmigration.v1.VmUtilizationInfo.verify|verify} messages.
                     * @param message VmUtilizationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IVmUtilizationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VmUtilizationInfo message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.VmUtilizationInfo.verify|verify} messages.
                     * @param message VmUtilizationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IVmUtilizationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VmUtilizationInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VmUtilizationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.VmUtilizationInfo;

                    /**
                     * Decodes a VmUtilizationInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VmUtilizationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.VmUtilizationInfo;

                    /**
                     * Verifies a VmUtilizationInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VmUtilizationInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VmUtilizationInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.VmUtilizationInfo;

                    /**
                     * Creates a plain object from a VmUtilizationInfo message. Also converts values to other types if specified.
                     * @param message VmUtilizationInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.VmUtilizationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VmUtilizationInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VmUtilizationMetrics. */
                interface IVmUtilizationMetrics {

                    /** VmUtilizationMetrics cpuMaxPercent */
                    cpuMaxPercent?: (number|null);

                    /** VmUtilizationMetrics cpuAveragePercent */
                    cpuAveragePercent?: (number|null);

                    /** VmUtilizationMetrics memoryMaxPercent */
                    memoryMaxPercent?: (number|null);

                    /** VmUtilizationMetrics memoryAveragePercent */
                    memoryAveragePercent?: (number|null);

                    /** VmUtilizationMetrics diskIoRateMaxKbps */
                    diskIoRateMaxKbps?: (number|Long|string|null);

                    /** VmUtilizationMetrics diskIoRateAverageKbps */
                    diskIoRateAverageKbps?: (number|Long|string|null);

                    /** VmUtilizationMetrics networkThroughputMaxKbps */
                    networkThroughputMaxKbps?: (number|Long|string|null);

                    /** VmUtilizationMetrics networkThroughputAverageKbps */
                    networkThroughputAverageKbps?: (number|Long|string|null);
                }

                /** Represents a VmUtilizationMetrics. */
                class VmUtilizationMetrics implements IVmUtilizationMetrics {

                    /**
                     * Constructs a new VmUtilizationMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IVmUtilizationMetrics);

                    /** VmUtilizationMetrics cpuMaxPercent. */
                    public cpuMaxPercent: number;

                    /** VmUtilizationMetrics cpuAveragePercent. */
                    public cpuAveragePercent: number;

                    /** VmUtilizationMetrics memoryMaxPercent. */
                    public memoryMaxPercent: number;

                    /** VmUtilizationMetrics memoryAveragePercent. */
                    public memoryAveragePercent: number;

                    /** VmUtilizationMetrics diskIoRateMaxKbps. */
                    public diskIoRateMaxKbps: (number|Long|string);

                    /** VmUtilizationMetrics diskIoRateAverageKbps. */
                    public diskIoRateAverageKbps: (number|Long|string);

                    /** VmUtilizationMetrics networkThroughputMaxKbps. */
                    public networkThroughputMaxKbps: (number|Long|string);

                    /** VmUtilizationMetrics networkThroughputAverageKbps. */
                    public networkThroughputAverageKbps: (number|Long|string);

                    /**
                     * Creates a new VmUtilizationMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VmUtilizationMetrics instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IVmUtilizationMetrics): google.cloud.vmmigration.v1.VmUtilizationMetrics;

                    /**
                     * Encodes the specified VmUtilizationMetrics message. Does not implicitly {@link google.cloud.vmmigration.v1.VmUtilizationMetrics.verify|verify} messages.
                     * @param message VmUtilizationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IVmUtilizationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VmUtilizationMetrics message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.VmUtilizationMetrics.verify|verify} messages.
                     * @param message VmUtilizationMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IVmUtilizationMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VmUtilizationMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VmUtilizationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.VmUtilizationMetrics;

                    /**
                     * Decodes a VmUtilizationMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VmUtilizationMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.VmUtilizationMetrics;

                    /**
                     * Verifies a VmUtilizationMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VmUtilizationMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VmUtilizationMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.VmUtilizationMetrics;

                    /**
                     * Creates a plain object from a VmUtilizationMetrics message. Also converts values to other types if specified.
                     * @param message VmUtilizationMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.VmUtilizationMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VmUtilizationMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListUtilizationReportsRequest. */
                interface IListUtilizationReportsRequest {

                    /** ListUtilizationReportsRequest parent */
                    parent?: (string|null);

                    /** ListUtilizationReportsRequest view */
                    view?: (google.cloud.vmmigration.v1.UtilizationReportView|keyof typeof google.cloud.vmmigration.v1.UtilizationReportView|null);

                    /** ListUtilizationReportsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListUtilizationReportsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListUtilizationReportsRequest filter */
                    filter?: (string|null);

                    /** ListUtilizationReportsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListUtilizationReportsRequest. */
                class ListUtilizationReportsRequest implements IListUtilizationReportsRequest {

                    /**
                     * Constructs a new ListUtilizationReportsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListUtilizationReportsRequest);

                    /** ListUtilizationReportsRequest parent. */
                    public parent: string;

                    /** ListUtilizationReportsRequest view. */
                    public view: (google.cloud.vmmigration.v1.UtilizationReportView|keyof typeof google.cloud.vmmigration.v1.UtilizationReportView);

                    /** ListUtilizationReportsRequest pageSize. */
                    public pageSize: number;

                    /** ListUtilizationReportsRequest pageToken. */
                    public pageToken: string;

                    /** ListUtilizationReportsRequest filter. */
                    public filter: string;

                    /** ListUtilizationReportsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListUtilizationReportsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUtilizationReportsRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListUtilizationReportsRequest): google.cloud.vmmigration.v1.ListUtilizationReportsRequest;

                    /**
                     * Encodes the specified ListUtilizationReportsRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.ListUtilizationReportsRequest.verify|verify} messages.
                     * @param message ListUtilizationReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListUtilizationReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUtilizationReportsRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListUtilizationReportsRequest.verify|verify} messages.
                     * @param message ListUtilizationReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListUtilizationReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUtilizationReportsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUtilizationReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListUtilizationReportsRequest;

                    /**
                     * Decodes a ListUtilizationReportsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUtilizationReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListUtilizationReportsRequest;

                    /**
                     * Verifies a ListUtilizationReportsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUtilizationReportsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUtilizationReportsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListUtilizationReportsRequest;

                    /**
                     * Creates a plain object from a ListUtilizationReportsRequest message. Also converts values to other types if specified.
                     * @param message ListUtilizationReportsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListUtilizationReportsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUtilizationReportsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListUtilizationReportsResponse. */
                interface IListUtilizationReportsResponse {

                    /** ListUtilizationReportsResponse utilizationReports */
                    utilizationReports?: (google.cloud.vmmigration.v1.IUtilizationReport[]|null);

                    /** ListUtilizationReportsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListUtilizationReportsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListUtilizationReportsResponse. */
                class ListUtilizationReportsResponse implements IListUtilizationReportsResponse {

                    /**
                     * Constructs a new ListUtilizationReportsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListUtilizationReportsResponse);

                    /** ListUtilizationReportsResponse utilizationReports. */
                    public utilizationReports: google.cloud.vmmigration.v1.IUtilizationReport[];

                    /** ListUtilizationReportsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListUtilizationReportsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListUtilizationReportsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUtilizationReportsResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListUtilizationReportsResponse): google.cloud.vmmigration.v1.ListUtilizationReportsResponse;

                    /**
                     * Encodes the specified ListUtilizationReportsResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.ListUtilizationReportsResponse.verify|verify} messages.
                     * @param message ListUtilizationReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListUtilizationReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUtilizationReportsResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListUtilizationReportsResponse.verify|verify} messages.
                     * @param message ListUtilizationReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListUtilizationReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUtilizationReportsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUtilizationReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListUtilizationReportsResponse;

                    /**
                     * Decodes a ListUtilizationReportsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUtilizationReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListUtilizationReportsResponse;

                    /**
                     * Verifies a ListUtilizationReportsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUtilizationReportsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUtilizationReportsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListUtilizationReportsResponse;

                    /**
                     * Creates a plain object from a ListUtilizationReportsResponse message. Also converts values to other types if specified.
                     * @param message ListUtilizationReportsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListUtilizationReportsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUtilizationReportsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetUtilizationReportRequest. */
                interface IGetUtilizationReportRequest {

                    /** GetUtilizationReportRequest name */
                    name?: (string|null);

                    /** GetUtilizationReportRequest view */
                    view?: (google.cloud.vmmigration.v1.UtilizationReportView|keyof typeof google.cloud.vmmigration.v1.UtilizationReportView|null);
                }

                /** Represents a GetUtilizationReportRequest. */
                class GetUtilizationReportRequest implements IGetUtilizationReportRequest {

                    /**
                     * Constructs a new GetUtilizationReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IGetUtilizationReportRequest);

                    /** GetUtilizationReportRequest name. */
                    public name: string;

                    /** GetUtilizationReportRequest view. */
                    public view: (google.cloud.vmmigration.v1.UtilizationReportView|keyof typeof google.cloud.vmmigration.v1.UtilizationReportView);

                    /**
                     * Creates a new GetUtilizationReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetUtilizationReportRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IGetUtilizationReportRequest): google.cloud.vmmigration.v1.GetUtilizationReportRequest;

                    /**
                     * Encodes the specified GetUtilizationReportRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.GetUtilizationReportRequest.verify|verify} messages.
                     * @param message GetUtilizationReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IGetUtilizationReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetUtilizationReportRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.GetUtilizationReportRequest.verify|verify} messages.
                     * @param message GetUtilizationReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IGetUtilizationReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetUtilizationReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetUtilizationReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.GetUtilizationReportRequest;

                    /**
                     * Decodes a GetUtilizationReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetUtilizationReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.GetUtilizationReportRequest;

                    /**
                     * Verifies a GetUtilizationReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetUtilizationReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetUtilizationReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.GetUtilizationReportRequest;

                    /**
                     * Creates a plain object from a GetUtilizationReportRequest message. Also converts values to other types if specified.
                     * @param message GetUtilizationReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.GetUtilizationReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetUtilizationReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateUtilizationReportRequest. */
                interface ICreateUtilizationReportRequest {

                    /** CreateUtilizationReportRequest parent */
                    parent?: (string|null);

                    /** CreateUtilizationReportRequest utilizationReport */
                    utilizationReport?: (google.cloud.vmmigration.v1.IUtilizationReport|null);

                    /** CreateUtilizationReportRequest utilizationReportId */
                    utilizationReportId?: (string|null);

                    /** CreateUtilizationReportRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateUtilizationReportRequest. */
                class CreateUtilizationReportRequest implements ICreateUtilizationReportRequest {

                    /**
                     * Constructs a new CreateUtilizationReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICreateUtilizationReportRequest);

                    /** CreateUtilizationReportRequest parent. */
                    public parent: string;

                    /** CreateUtilizationReportRequest utilizationReport. */
                    public utilizationReport?: (google.cloud.vmmigration.v1.IUtilizationReport|null);

                    /** CreateUtilizationReportRequest utilizationReportId. */
                    public utilizationReportId: string;

                    /** CreateUtilizationReportRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateUtilizationReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateUtilizationReportRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICreateUtilizationReportRequest): google.cloud.vmmigration.v1.CreateUtilizationReportRequest;

                    /**
                     * Encodes the specified CreateUtilizationReportRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.CreateUtilizationReportRequest.verify|verify} messages.
                     * @param message CreateUtilizationReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICreateUtilizationReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateUtilizationReportRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CreateUtilizationReportRequest.verify|verify} messages.
                     * @param message CreateUtilizationReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICreateUtilizationReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateUtilizationReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateUtilizationReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CreateUtilizationReportRequest;

                    /**
                     * Decodes a CreateUtilizationReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateUtilizationReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CreateUtilizationReportRequest;

                    /**
                     * Verifies a CreateUtilizationReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateUtilizationReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateUtilizationReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CreateUtilizationReportRequest;

                    /**
                     * Creates a plain object from a CreateUtilizationReportRequest message. Also converts values to other types if specified.
                     * @param message CreateUtilizationReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CreateUtilizationReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateUtilizationReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteUtilizationReportRequest. */
                interface IDeleteUtilizationReportRequest {

                    /** DeleteUtilizationReportRequest name */
                    name?: (string|null);

                    /** DeleteUtilizationReportRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteUtilizationReportRequest. */
                class DeleteUtilizationReportRequest implements IDeleteUtilizationReportRequest {

                    /**
                     * Constructs a new DeleteUtilizationReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IDeleteUtilizationReportRequest);

                    /** DeleteUtilizationReportRequest name. */
                    public name: string;

                    /** DeleteUtilizationReportRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteUtilizationReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteUtilizationReportRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IDeleteUtilizationReportRequest): google.cloud.vmmigration.v1.DeleteUtilizationReportRequest;

                    /**
                     * Encodes the specified DeleteUtilizationReportRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.DeleteUtilizationReportRequest.verify|verify} messages.
                     * @param message DeleteUtilizationReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IDeleteUtilizationReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteUtilizationReportRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.DeleteUtilizationReportRequest.verify|verify} messages.
                     * @param message DeleteUtilizationReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IDeleteUtilizationReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteUtilizationReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteUtilizationReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.DeleteUtilizationReportRequest;

                    /**
                     * Decodes a DeleteUtilizationReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteUtilizationReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.DeleteUtilizationReportRequest;

                    /**
                     * Verifies a DeleteUtilizationReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteUtilizationReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteUtilizationReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.DeleteUtilizationReportRequest;

                    /**
                     * Creates a plain object from a DeleteUtilizationReportRequest message. Also converts values to other types if specified.
                     * @param message DeleteUtilizationReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.DeleteUtilizationReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteUtilizationReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListDatacenterConnectorsResponse. */
                interface IListDatacenterConnectorsResponse {

                    /** ListDatacenterConnectorsResponse datacenterConnectors */
                    datacenterConnectors?: (google.cloud.vmmigration.v1.IDatacenterConnector[]|null);

                    /** ListDatacenterConnectorsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListDatacenterConnectorsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListDatacenterConnectorsResponse. */
                class ListDatacenterConnectorsResponse implements IListDatacenterConnectorsResponse {

                    /**
                     * Constructs a new ListDatacenterConnectorsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListDatacenterConnectorsResponse);

                    /** ListDatacenterConnectorsResponse datacenterConnectors. */
                    public datacenterConnectors: google.cloud.vmmigration.v1.IDatacenterConnector[];

                    /** ListDatacenterConnectorsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListDatacenterConnectorsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListDatacenterConnectorsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDatacenterConnectorsResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListDatacenterConnectorsResponse): google.cloud.vmmigration.v1.ListDatacenterConnectorsResponse;

                    /**
                     * Encodes the specified ListDatacenterConnectorsResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.ListDatacenterConnectorsResponse.verify|verify} messages.
                     * @param message ListDatacenterConnectorsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListDatacenterConnectorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDatacenterConnectorsResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListDatacenterConnectorsResponse.verify|verify} messages.
                     * @param message ListDatacenterConnectorsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListDatacenterConnectorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDatacenterConnectorsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDatacenterConnectorsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListDatacenterConnectorsResponse;

                    /**
                     * Decodes a ListDatacenterConnectorsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDatacenterConnectorsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListDatacenterConnectorsResponse;

                    /**
                     * Verifies a ListDatacenterConnectorsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDatacenterConnectorsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDatacenterConnectorsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListDatacenterConnectorsResponse;

                    /**
                     * Creates a plain object from a ListDatacenterConnectorsResponse message. Also converts values to other types if specified.
                     * @param message ListDatacenterConnectorsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListDatacenterConnectorsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDatacenterConnectorsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetDatacenterConnectorRequest. */
                interface IGetDatacenterConnectorRequest {

                    /** GetDatacenterConnectorRequest name */
                    name?: (string|null);
                }

                /** Represents a GetDatacenterConnectorRequest. */
                class GetDatacenterConnectorRequest implements IGetDatacenterConnectorRequest {

                    /**
                     * Constructs a new GetDatacenterConnectorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IGetDatacenterConnectorRequest);

                    /** GetDatacenterConnectorRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetDatacenterConnectorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDatacenterConnectorRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IGetDatacenterConnectorRequest): google.cloud.vmmigration.v1.GetDatacenterConnectorRequest;

                    /**
                     * Encodes the specified GetDatacenterConnectorRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.GetDatacenterConnectorRequest.verify|verify} messages.
                     * @param message GetDatacenterConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IGetDatacenterConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDatacenterConnectorRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.GetDatacenterConnectorRequest.verify|verify} messages.
                     * @param message GetDatacenterConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IGetDatacenterConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDatacenterConnectorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDatacenterConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.GetDatacenterConnectorRequest;

                    /**
                     * Decodes a GetDatacenterConnectorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDatacenterConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.GetDatacenterConnectorRequest;

                    /**
                     * Verifies a GetDatacenterConnectorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDatacenterConnectorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDatacenterConnectorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.GetDatacenterConnectorRequest;

                    /**
                     * Creates a plain object from a GetDatacenterConnectorRequest message. Also converts values to other types if specified.
                     * @param message GetDatacenterConnectorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.GetDatacenterConnectorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDatacenterConnectorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateDatacenterConnectorRequest. */
                interface ICreateDatacenterConnectorRequest {

                    /** CreateDatacenterConnectorRequest parent */
                    parent?: (string|null);

                    /** CreateDatacenterConnectorRequest datacenterConnectorId */
                    datacenterConnectorId?: (string|null);

                    /** CreateDatacenterConnectorRequest datacenterConnector */
                    datacenterConnector?: (google.cloud.vmmigration.v1.IDatacenterConnector|null);

                    /** CreateDatacenterConnectorRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateDatacenterConnectorRequest. */
                class CreateDatacenterConnectorRequest implements ICreateDatacenterConnectorRequest {

                    /**
                     * Constructs a new CreateDatacenterConnectorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICreateDatacenterConnectorRequest);

                    /** CreateDatacenterConnectorRequest parent. */
                    public parent: string;

                    /** CreateDatacenterConnectorRequest datacenterConnectorId. */
                    public datacenterConnectorId: string;

                    /** CreateDatacenterConnectorRequest datacenterConnector. */
                    public datacenterConnector?: (google.cloud.vmmigration.v1.IDatacenterConnector|null);

                    /** CreateDatacenterConnectorRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateDatacenterConnectorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDatacenterConnectorRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICreateDatacenterConnectorRequest): google.cloud.vmmigration.v1.CreateDatacenterConnectorRequest;

                    /**
                     * Encodes the specified CreateDatacenterConnectorRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.CreateDatacenterConnectorRequest.verify|verify} messages.
                     * @param message CreateDatacenterConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICreateDatacenterConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDatacenterConnectorRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CreateDatacenterConnectorRequest.verify|verify} messages.
                     * @param message CreateDatacenterConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICreateDatacenterConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDatacenterConnectorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDatacenterConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CreateDatacenterConnectorRequest;

                    /**
                     * Decodes a CreateDatacenterConnectorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDatacenterConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CreateDatacenterConnectorRequest;

                    /**
                     * Verifies a CreateDatacenterConnectorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDatacenterConnectorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDatacenterConnectorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CreateDatacenterConnectorRequest;

                    /**
                     * Creates a plain object from a CreateDatacenterConnectorRequest message. Also converts values to other types if specified.
                     * @param message CreateDatacenterConnectorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CreateDatacenterConnectorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDatacenterConnectorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteDatacenterConnectorRequest. */
                interface IDeleteDatacenterConnectorRequest {

                    /** DeleteDatacenterConnectorRequest name */
                    name?: (string|null);

                    /** DeleteDatacenterConnectorRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteDatacenterConnectorRequest. */
                class DeleteDatacenterConnectorRequest implements IDeleteDatacenterConnectorRequest {

                    /**
                     * Constructs a new DeleteDatacenterConnectorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IDeleteDatacenterConnectorRequest);

                    /** DeleteDatacenterConnectorRequest name. */
                    public name: string;

                    /** DeleteDatacenterConnectorRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteDatacenterConnectorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteDatacenterConnectorRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IDeleteDatacenterConnectorRequest): google.cloud.vmmigration.v1.DeleteDatacenterConnectorRequest;

                    /**
                     * Encodes the specified DeleteDatacenterConnectorRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.DeleteDatacenterConnectorRequest.verify|verify} messages.
                     * @param message DeleteDatacenterConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IDeleteDatacenterConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteDatacenterConnectorRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.DeleteDatacenterConnectorRequest.verify|verify} messages.
                     * @param message DeleteDatacenterConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IDeleteDatacenterConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteDatacenterConnectorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteDatacenterConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.DeleteDatacenterConnectorRequest;

                    /**
                     * Decodes a DeleteDatacenterConnectorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteDatacenterConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.DeleteDatacenterConnectorRequest;

                    /**
                     * Verifies a DeleteDatacenterConnectorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteDatacenterConnectorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteDatacenterConnectorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.DeleteDatacenterConnectorRequest;

                    /**
                     * Creates a plain object from a DeleteDatacenterConnectorRequest message. Also converts values to other types if specified.
                     * @param message DeleteDatacenterConnectorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.DeleteDatacenterConnectorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteDatacenterConnectorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListDatacenterConnectorsRequest. */
                interface IListDatacenterConnectorsRequest {

                    /** ListDatacenterConnectorsRequest parent */
                    parent?: (string|null);

                    /** ListDatacenterConnectorsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDatacenterConnectorsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListDatacenterConnectorsRequest filter */
                    filter?: (string|null);

                    /** ListDatacenterConnectorsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListDatacenterConnectorsRequest. */
                class ListDatacenterConnectorsRequest implements IListDatacenterConnectorsRequest {

                    /**
                     * Constructs a new ListDatacenterConnectorsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListDatacenterConnectorsRequest);

                    /** ListDatacenterConnectorsRequest parent. */
                    public parent: string;

                    /** ListDatacenterConnectorsRequest pageSize. */
                    public pageSize: number;

                    /** ListDatacenterConnectorsRequest pageToken. */
                    public pageToken: string;

                    /** ListDatacenterConnectorsRequest filter. */
                    public filter: string;

                    /** ListDatacenterConnectorsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListDatacenterConnectorsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDatacenterConnectorsRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListDatacenterConnectorsRequest): google.cloud.vmmigration.v1.ListDatacenterConnectorsRequest;

                    /**
                     * Encodes the specified ListDatacenterConnectorsRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.ListDatacenterConnectorsRequest.verify|verify} messages.
                     * @param message ListDatacenterConnectorsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListDatacenterConnectorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDatacenterConnectorsRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListDatacenterConnectorsRequest.verify|verify} messages.
                     * @param message ListDatacenterConnectorsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListDatacenterConnectorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDatacenterConnectorsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDatacenterConnectorsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListDatacenterConnectorsRequest;

                    /**
                     * Decodes a ListDatacenterConnectorsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDatacenterConnectorsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListDatacenterConnectorsRequest;

                    /**
                     * Verifies a ListDatacenterConnectorsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDatacenterConnectorsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDatacenterConnectorsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListDatacenterConnectorsRequest;

                    /**
                     * Creates a plain object from a ListDatacenterConnectorsRequest message. Also converts values to other types if specified.
                     * @param message ListDatacenterConnectorsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListDatacenterConnectorsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDatacenterConnectorsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ComputeEngineTargetDefaults. */
                interface IComputeEngineTargetDefaults {

                    /** ComputeEngineTargetDefaults vmName */
                    vmName?: (string|null);

                    /** ComputeEngineTargetDefaults targetProject */
                    targetProject?: (string|null);

                    /** ComputeEngineTargetDefaults zone */
                    zone?: (string|null);

                    /** ComputeEngineTargetDefaults machineTypeSeries */
                    machineTypeSeries?: (string|null);

                    /** ComputeEngineTargetDefaults machineType */
                    machineType?: (string|null);

                    /** ComputeEngineTargetDefaults networkTags */
                    networkTags?: (string[]|null);

                    /** ComputeEngineTargetDefaults networkInterfaces */
                    networkInterfaces?: (google.cloud.vmmigration.v1.INetworkInterface[]|null);

                    /** ComputeEngineTargetDefaults serviceAccount */
                    serviceAccount?: (string|null);

                    /** ComputeEngineTargetDefaults diskType */
                    diskType?: (google.cloud.vmmigration.v1.ComputeEngineDiskType|keyof typeof google.cloud.vmmigration.v1.ComputeEngineDiskType|null);

                    /** ComputeEngineTargetDefaults labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ComputeEngineTargetDefaults licenseType */
                    licenseType?: (google.cloud.vmmigration.v1.ComputeEngineLicenseType|keyof typeof google.cloud.vmmigration.v1.ComputeEngineLicenseType|null);

                    /** ComputeEngineTargetDefaults appliedLicense */
                    appliedLicense?: (google.cloud.vmmigration.v1.IAppliedLicense|null);

                    /** ComputeEngineTargetDefaults computeScheduling */
                    computeScheduling?: (google.cloud.vmmigration.v1.IComputeScheduling|null);

                    /** ComputeEngineTargetDefaults secureBoot */
                    secureBoot?: (boolean|null);

                    /** ComputeEngineTargetDefaults bootOption */
                    bootOption?: (google.cloud.vmmigration.v1.ComputeEngineBootOption|keyof typeof google.cloud.vmmigration.v1.ComputeEngineBootOption|null);

                    /** ComputeEngineTargetDefaults metadata */
                    metadata?: ({ [k: string]: string }|null);
                }

                /** Represents a ComputeEngineTargetDefaults. */
                class ComputeEngineTargetDefaults implements IComputeEngineTargetDefaults {

                    /**
                     * Constructs a new ComputeEngineTargetDefaults.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IComputeEngineTargetDefaults);

                    /** ComputeEngineTargetDefaults vmName. */
                    public vmName: string;

                    /** ComputeEngineTargetDefaults targetProject. */
                    public targetProject: string;

                    /** ComputeEngineTargetDefaults zone. */
                    public zone: string;

                    /** ComputeEngineTargetDefaults machineTypeSeries. */
                    public machineTypeSeries: string;

                    /** ComputeEngineTargetDefaults machineType. */
                    public machineType: string;

                    /** ComputeEngineTargetDefaults networkTags. */
                    public networkTags: string[];

                    /** ComputeEngineTargetDefaults networkInterfaces. */
                    public networkInterfaces: google.cloud.vmmigration.v1.INetworkInterface[];

                    /** ComputeEngineTargetDefaults serviceAccount. */
                    public serviceAccount: string;

                    /** ComputeEngineTargetDefaults diskType. */
                    public diskType: (google.cloud.vmmigration.v1.ComputeEngineDiskType|keyof typeof google.cloud.vmmigration.v1.ComputeEngineDiskType);

                    /** ComputeEngineTargetDefaults labels. */
                    public labels: { [k: string]: string };

                    /** ComputeEngineTargetDefaults licenseType. */
                    public licenseType: (google.cloud.vmmigration.v1.ComputeEngineLicenseType|keyof typeof google.cloud.vmmigration.v1.ComputeEngineLicenseType);

                    /** ComputeEngineTargetDefaults appliedLicense. */
                    public appliedLicense?: (google.cloud.vmmigration.v1.IAppliedLicense|null);

                    /** ComputeEngineTargetDefaults computeScheduling. */
                    public computeScheduling?: (google.cloud.vmmigration.v1.IComputeScheduling|null);

                    /** ComputeEngineTargetDefaults secureBoot. */
                    public secureBoot: boolean;

                    /** ComputeEngineTargetDefaults bootOption. */
                    public bootOption: (google.cloud.vmmigration.v1.ComputeEngineBootOption|keyof typeof google.cloud.vmmigration.v1.ComputeEngineBootOption);

                    /** ComputeEngineTargetDefaults metadata. */
                    public metadata: { [k: string]: string };

                    /**
                     * Creates a new ComputeEngineTargetDefaults instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeEngineTargetDefaults instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IComputeEngineTargetDefaults): google.cloud.vmmigration.v1.ComputeEngineTargetDefaults;

                    /**
                     * Encodes the specified ComputeEngineTargetDefaults message. Does not implicitly {@link google.cloud.vmmigration.v1.ComputeEngineTargetDefaults.verify|verify} messages.
                     * @param message ComputeEngineTargetDefaults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IComputeEngineTargetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeEngineTargetDefaults message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ComputeEngineTargetDefaults.verify|verify} messages.
                     * @param message ComputeEngineTargetDefaults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IComputeEngineTargetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeEngineTargetDefaults message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeEngineTargetDefaults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ComputeEngineTargetDefaults;

                    /**
                     * Decodes a ComputeEngineTargetDefaults message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeEngineTargetDefaults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ComputeEngineTargetDefaults;

                    /**
                     * Verifies a ComputeEngineTargetDefaults message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeEngineTargetDefaults message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeEngineTargetDefaults
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ComputeEngineTargetDefaults;

                    /**
                     * Creates a plain object from a ComputeEngineTargetDefaults message. Also converts values to other types if specified.
                     * @param message ComputeEngineTargetDefaults
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ComputeEngineTargetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeEngineTargetDefaults to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ComputeEngineTargetDetails. */
                interface IComputeEngineTargetDetails {

                    /** ComputeEngineTargetDetails vmName */
                    vmName?: (string|null);

                    /** ComputeEngineTargetDetails project */
                    project?: (string|null);

                    /** ComputeEngineTargetDetails zone */
                    zone?: (string|null);

                    /** ComputeEngineTargetDetails machineTypeSeries */
                    machineTypeSeries?: (string|null);

                    /** ComputeEngineTargetDetails machineType */
                    machineType?: (string|null);

                    /** ComputeEngineTargetDetails networkTags */
                    networkTags?: (string[]|null);

                    /** ComputeEngineTargetDetails networkInterfaces */
                    networkInterfaces?: (google.cloud.vmmigration.v1.INetworkInterface[]|null);

                    /** ComputeEngineTargetDetails serviceAccount */
                    serviceAccount?: (string|null);

                    /** ComputeEngineTargetDetails diskType */
                    diskType?: (google.cloud.vmmigration.v1.ComputeEngineDiskType|keyof typeof google.cloud.vmmigration.v1.ComputeEngineDiskType|null);

                    /** ComputeEngineTargetDetails labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ComputeEngineTargetDetails licenseType */
                    licenseType?: (google.cloud.vmmigration.v1.ComputeEngineLicenseType|keyof typeof google.cloud.vmmigration.v1.ComputeEngineLicenseType|null);

                    /** ComputeEngineTargetDetails appliedLicense */
                    appliedLicense?: (google.cloud.vmmigration.v1.IAppliedLicense|null);

                    /** ComputeEngineTargetDetails computeScheduling */
                    computeScheduling?: (google.cloud.vmmigration.v1.IComputeScheduling|null);

                    /** ComputeEngineTargetDetails secureBoot */
                    secureBoot?: (boolean|null);

                    /** ComputeEngineTargetDetails bootOption */
                    bootOption?: (google.cloud.vmmigration.v1.ComputeEngineBootOption|keyof typeof google.cloud.vmmigration.v1.ComputeEngineBootOption|null);

                    /** ComputeEngineTargetDetails metadata */
                    metadata?: ({ [k: string]: string }|null);
                }

                /** Represents a ComputeEngineTargetDetails. */
                class ComputeEngineTargetDetails implements IComputeEngineTargetDetails {

                    /**
                     * Constructs a new ComputeEngineTargetDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IComputeEngineTargetDetails);

                    /** ComputeEngineTargetDetails vmName. */
                    public vmName: string;

                    /** ComputeEngineTargetDetails project. */
                    public project: string;

                    /** ComputeEngineTargetDetails zone. */
                    public zone: string;

                    /** ComputeEngineTargetDetails machineTypeSeries. */
                    public machineTypeSeries: string;

                    /** ComputeEngineTargetDetails machineType. */
                    public machineType: string;

                    /** ComputeEngineTargetDetails networkTags. */
                    public networkTags: string[];

                    /** ComputeEngineTargetDetails networkInterfaces. */
                    public networkInterfaces: google.cloud.vmmigration.v1.INetworkInterface[];

                    /** ComputeEngineTargetDetails serviceAccount. */
                    public serviceAccount: string;

                    /** ComputeEngineTargetDetails diskType. */
                    public diskType: (google.cloud.vmmigration.v1.ComputeEngineDiskType|keyof typeof google.cloud.vmmigration.v1.ComputeEngineDiskType);

                    /** ComputeEngineTargetDetails labels. */
                    public labels: { [k: string]: string };

                    /** ComputeEngineTargetDetails licenseType. */
                    public licenseType: (google.cloud.vmmigration.v1.ComputeEngineLicenseType|keyof typeof google.cloud.vmmigration.v1.ComputeEngineLicenseType);

                    /** ComputeEngineTargetDetails appliedLicense. */
                    public appliedLicense?: (google.cloud.vmmigration.v1.IAppliedLicense|null);

                    /** ComputeEngineTargetDetails computeScheduling. */
                    public computeScheduling?: (google.cloud.vmmigration.v1.IComputeScheduling|null);

                    /** ComputeEngineTargetDetails secureBoot. */
                    public secureBoot: boolean;

                    /** ComputeEngineTargetDetails bootOption. */
                    public bootOption: (google.cloud.vmmigration.v1.ComputeEngineBootOption|keyof typeof google.cloud.vmmigration.v1.ComputeEngineBootOption);

                    /** ComputeEngineTargetDetails metadata. */
                    public metadata: { [k: string]: string };

                    /**
                     * Creates a new ComputeEngineTargetDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeEngineTargetDetails instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IComputeEngineTargetDetails): google.cloud.vmmigration.v1.ComputeEngineTargetDetails;

                    /**
                     * Encodes the specified ComputeEngineTargetDetails message. Does not implicitly {@link google.cloud.vmmigration.v1.ComputeEngineTargetDetails.verify|verify} messages.
                     * @param message ComputeEngineTargetDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IComputeEngineTargetDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeEngineTargetDetails message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ComputeEngineTargetDetails.verify|verify} messages.
                     * @param message ComputeEngineTargetDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IComputeEngineTargetDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeEngineTargetDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeEngineTargetDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ComputeEngineTargetDetails;

                    /**
                     * Decodes a ComputeEngineTargetDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeEngineTargetDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ComputeEngineTargetDetails;

                    /**
                     * Verifies a ComputeEngineTargetDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeEngineTargetDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeEngineTargetDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ComputeEngineTargetDetails;

                    /**
                     * Creates a plain object from a ComputeEngineTargetDetails message. Also converts values to other types if specified.
                     * @param message ComputeEngineTargetDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ComputeEngineTargetDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeEngineTargetDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NetworkInterface. */
                interface INetworkInterface {

                    /** NetworkInterface network */
                    network?: (string|null);

                    /** NetworkInterface subnetwork */
                    subnetwork?: (string|null);

                    /** NetworkInterface internalIp */
                    internalIp?: (string|null);

                    /** NetworkInterface externalIp */
                    externalIp?: (string|null);
                }

                /** Represents a NetworkInterface. */
                class NetworkInterface implements INetworkInterface {

                    /**
                     * Constructs a new NetworkInterface.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.INetworkInterface);

                    /** NetworkInterface network. */
                    public network: string;

                    /** NetworkInterface subnetwork. */
                    public subnetwork: string;

                    /** NetworkInterface internalIp. */
                    public internalIp: string;

                    /** NetworkInterface externalIp. */
                    public externalIp: string;

                    /**
                     * Creates a new NetworkInterface instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkInterface instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.INetworkInterface): google.cloud.vmmigration.v1.NetworkInterface;

                    /**
                     * Encodes the specified NetworkInterface message. Does not implicitly {@link google.cloud.vmmigration.v1.NetworkInterface.verify|verify} messages.
                     * @param message NetworkInterface message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.INetworkInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkInterface message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.NetworkInterface.verify|verify} messages.
                     * @param message NetworkInterface message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.INetworkInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkInterface message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkInterface
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.NetworkInterface;

                    /**
                     * Decodes a NetworkInterface message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkInterface
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.NetworkInterface;

                    /**
                     * Verifies a NetworkInterface message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkInterface message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkInterface
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.NetworkInterface;

                    /**
                     * Creates a plain object from a NetworkInterface message. Also converts values to other types if specified.
                     * @param message NetworkInterface
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.NetworkInterface, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkInterface to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AppliedLicense. */
                interface IAppliedLicense {

                    /** AppliedLicense type */
                    type?: (google.cloud.vmmigration.v1.AppliedLicense.Type|keyof typeof google.cloud.vmmigration.v1.AppliedLicense.Type|null);

                    /** AppliedLicense osLicense */
                    osLicense?: (string|null);
                }

                /** Represents an AppliedLicense. */
                class AppliedLicense implements IAppliedLicense {

                    /**
                     * Constructs a new AppliedLicense.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IAppliedLicense);

                    /** AppliedLicense type. */
                    public type: (google.cloud.vmmigration.v1.AppliedLicense.Type|keyof typeof google.cloud.vmmigration.v1.AppliedLicense.Type);

                    /** AppliedLicense osLicense. */
                    public osLicense: string;

                    /**
                     * Creates a new AppliedLicense instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppliedLicense instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IAppliedLicense): google.cloud.vmmigration.v1.AppliedLicense;

                    /**
                     * Encodes the specified AppliedLicense message. Does not implicitly {@link google.cloud.vmmigration.v1.AppliedLicense.verify|verify} messages.
                     * @param message AppliedLicense message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IAppliedLicense, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppliedLicense message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.AppliedLicense.verify|verify} messages.
                     * @param message AppliedLicense message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IAppliedLicense, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppliedLicense message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppliedLicense
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.AppliedLicense;

                    /**
                     * Decodes an AppliedLicense message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppliedLicense
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.AppliedLicense;

                    /**
                     * Verifies an AppliedLicense message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AppliedLicense message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AppliedLicense
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.AppliedLicense;

                    /**
                     * Creates a plain object from an AppliedLicense message. Also converts values to other types if specified.
                     * @param message AppliedLicense
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.AppliedLicense, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppliedLicense to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AppliedLicense {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        NONE = 1,
                        PAYG = 2,
                        BYOL = 3
                    }
                }

                /** Properties of a SchedulingNodeAffinity. */
                interface ISchedulingNodeAffinity {

                    /** SchedulingNodeAffinity key */
                    key?: (string|null);

                    /** SchedulingNodeAffinity operator */
                    operator?: (google.cloud.vmmigration.v1.SchedulingNodeAffinity.Operator|keyof typeof google.cloud.vmmigration.v1.SchedulingNodeAffinity.Operator|null);

                    /** SchedulingNodeAffinity values */
                    values?: (string[]|null);
                }

                /** Represents a SchedulingNodeAffinity. */
                class SchedulingNodeAffinity implements ISchedulingNodeAffinity {

                    /**
                     * Constructs a new SchedulingNodeAffinity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ISchedulingNodeAffinity);

                    /** SchedulingNodeAffinity key. */
                    public key: string;

                    /** SchedulingNodeAffinity operator. */
                    public operator: (google.cloud.vmmigration.v1.SchedulingNodeAffinity.Operator|keyof typeof google.cloud.vmmigration.v1.SchedulingNodeAffinity.Operator);

                    /** SchedulingNodeAffinity values. */
                    public values: string[];

                    /**
                     * Creates a new SchedulingNodeAffinity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SchedulingNodeAffinity instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ISchedulingNodeAffinity): google.cloud.vmmigration.v1.SchedulingNodeAffinity;

                    /**
                     * Encodes the specified SchedulingNodeAffinity message. Does not implicitly {@link google.cloud.vmmigration.v1.SchedulingNodeAffinity.verify|verify} messages.
                     * @param message SchedulingNodeAffinity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ISchedulingNodeAffinity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SchedulingNodeAffinity message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.SchedulingNodeAffinity.verify|verify} messages.
                     * @param message SchedulingNodeAffinity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ISchedulingNodeAffinity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SchedulingNodeAffinity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SchedulingNodeAffinity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.SchedulingNodeAffinity;

                    /**
                     * Decodes a SchedulingNodeAffinity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SchedulingNodeAffinity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.SchedulingNodeAffinity;

                    /**
                     * Verifies a SchedulingNodeAffinity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SchedulingNodeAffinity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SchedulingNodeAffinity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.SchedulingNodeAffinity;

                    /**
                     * Creates a plain object from a SchedulingNodeAffinity message. Also converts values to other types if specified.
                     * @param message SchedulingNodeAffinity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.SchedulingNodeAffinity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SchedulingNodeAffinity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SchedulingNodeAffinity {

                    /** Operator enum. */
                    enum Operator {
                        OPERATOR_UNSPECIFIED = 0,
                        IN = 1,
                        NOT_IN = 2
                    }
                }

                /** Properties of a ComputeScheduling. */
                interface IComputeScheduling {

                    /** ComputeScheduling onHostMaintenance */
                    onHostMaintenance?: (google.cloud.vmmigration.v1.ComputeScheduling.OnHostMaintenance|keyof typeof google.cloud.vmmigration.v1.ComputeScheduling.OnHostMaintenance|null);

                    /** ComputeScheduling restartType */
                    restartType?: (google.cloud.vmmigration.v1.ComputeScheduling.RestartType|keyof typeof google.cloud.vmmigration.v1.ComputeScheduling.RestartType|null);

                    /** ComputeScheduling nodeAffinities */
                    nodeAffinities?: (google.cloud.vmmigration.v1.ISchedulingNodeAffinity[]|null);

                    /** ComputeScheduling minNodeCpus */
                    minNodeCpus?: (number|null);
                }

                /** Represents a ComputeScheduling. */
                class ComputeScheduling implements IComputeScheduling {

                    /**
                     * Constructs a new ComputeScheduling.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IComputeScheduling);

                    /** ComputeScheduling onHostMaintenance. */
                    public onHostMaintenance: (google.cloud.vmmigration.v1.ComputeScheduling.OnHostMaintenance|keyof typeof google.cloud.vmmigration.v1.ComputeScheduling.OnHostMaintenance);

                    /** ComputeScheduling restartType. */
                    public restartType: (google.cloud.vmmigration.v1.ComputeScheduling.RestartType|keyof typeof google.cloud.vmmigration.v1.ComputeScheduling.RestartType);

                    /** ComputeScheduling nodeAffinities. */
                    public nodeAffinities: google.cloud.vmmigration.v1.ISchedulingNodeAffinity[];

                    /** ComputeScheduling minNodeCpus. */
                    public minNodeCpus: number;

                    /**
                     * Creates a new ComputeScheduling instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeScheduling instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IComputeScheduling): google.cloud.vmmigration.v1.ComputeScheduling;

                    /**
                     * Encodes the specified ComputeScheduling message. Does not implicitly {@link google.cloud.vmmigration.v1.ComputeScheduling.verify|verify} messages.
                     * @param message ComputeScheduling message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IComputeScheduling, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeScheduling message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ComputeScheduling.verify|verify} messages.
                     * @param message ComputeScheduling message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IComputeScheduling, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeScheduling message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeScheduling
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ComputeScheduling;

                    /**
                     * Decodes a ComputeScheduling message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeScheduling
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ComputeScheduling;

                    /**
                     * Verifies a ComputeScheduling message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeScheduling message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeScheduling
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ComputeScheduling;

                    /**
                     * Creates a plain object from a ComputeScheduling message. Also converts values to other types if specified.
                     * @param message ComputeScheduling
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ComputeScheduling, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeScheduling to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ComputeScheduling {

                    /** OnHostMaintenance enum. */
                    enum OnHostMaintenance {
                        ON_HOST_MAINTENANCE_UNSPECIFIED = 0,
                        TERMINATE = 1,
                        MIGRATE = 2
                    }

                    /** RestartType enum. */
                    enum RestartType {
                        RESTART_TYPE_UNSPECIFIED = 0,
                        AUTOMATIC_RESTART = 1,
                        NO_AUTOMATIC_RESTART = 2
                    }
                }

                /** Properties of a SchedulePolicy. */
                interface ISchedulePolicy {

                    /** SchedulePolicy idleDuration */
                    idleDuration?: (google.protobuf.IDuration|null);

                    /** SchedulePolicy skipOsAdaptation */
                    skipOsAdaptation?: (boolean|null);
                }

                /** Represents a SchedulePolicy. */
                class SchedulePolicy implements ISchedulePolicy {

                    /**
                     * Constructs a new SchedulePolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ISchedulePolicy);

                    /** SchedulePolicy idleDuration. */
                    public idleDuration?: (google.protobuf.IDuration|null);

                    /** SchedulePolicy skipOsAdaptation. */
                    public skipOsAdaptation: boolean;

                    /**
                     * Creates a new SchedulePolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SchedulePolicy instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ISchedulePolicy): google.cloud.vmmigration.v1.SchedulePolicy;

                    /**
                     * Encodes the specified SchedulePolicy message. Does not implicitly {@link google.cloud.vmmigration.v1.SchedulePolicy.verify|verify} messages.
                     * @param message SchedulePolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ISchedulePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SchedulePolicy message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.SchedulePolicy.verify|verify} messages.
                     * @param message SchedulePolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ISchedulePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SchedulePolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SchedulePolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.SchedulePolicy;

                    /**
                     * Decodes a SchedulePolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SchedulePolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.SchedulePolicy;

                    /**
                     * Verifies a SchedulePolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SchedulePolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SchedulePolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.SchedulePolicy;

                    /**
                     * Creates a plain object from a SchedulePolicy message. Also converts values to other types if specified.
                     * @param message SchedulePolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.SchedulePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SchedulePolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateMigratingVmRequest. */
                interface ICreateMigratingVmRequest {

                    /** CreateMigratingVmRequest parent */
                    parent?: (string|null);

                    /** CreateMigratingVmRequest migratingVmId */
                    migratingVmId?: (string|null);

                    /** CreateMigratingVmRequest migratingVm */
                    migratingVm?: (google.cloud.vmmigration.v1.IMigratingVm|null);

                    /** CreateMigratingVmRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateMigratingVmRequest. */
                class CreateMigratingVmRequest implements ICreateMigratingVmRequest {

                    /**
                     * Constructs a new CreateMigratingVmRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICreateMigratingVmRequest);

                    /** CreateMigratingVmRequest parent. */
                    public parent: string;

                    /** CreateMigratingVmRequest migratingVmId. */
                    public migratingVmId: string;

                    /** CreateMigratingVmRequest migratingVm. */
                    public migratingVm?: (google.cloud.vmmigration.v1.IMigratingVm|null);

                    /** CreateMigratingVmRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateMigratingVmRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateMigratingVmRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICreateMigratingVmRequest): google.cloud.vmmigration.v1.CreateMigratingVmRequest;

                    /**
                     * Encodes the specified CreateMigratingVmRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.CreateMigratingVmRequest.verify|verify} messages.
                     * @param message CreateMigratingVmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICreateMigratingVmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateMigratingVmRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CreateMigratingVmRequest.verify|verify} messages.
                     * @param message CreateMigratingVmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICreateMigratingVmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateMigratingVmRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateMigratingVmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CreateMigratingVmRequest;

                    /**
                     * Decodes a CreateMigratingVmRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateMigratingVmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CreateMigratingVmRequest;

                    /**
                     * Verifies a CreateMigratingVmRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateMigratingVmRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateMigratingVmRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CreateMigratingVmRequest;

                    /**
                     * Creates a plain object from a CreateMigratingVmRequest message. Also converts values to other types if specified.
                     * @param message CreateMigratingVmRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CreateMigratingVmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateMigratingVmRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListMigratingVmsRequest. */
                interface IListMigratingVmsRequest {

                    /** ListMigratingVmsRequest parent */
                    parent?: (string|null);

                    /** ListMigratingVmsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListMigratingVmsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListMigratingVmsRequest filter */
                    filter?: (string|null);

                    /** ListMigratingVmsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListMigratingVmsRequest. */
                class ListMigratingVmsRequest implements IListMigratingVmsRequest {

                    /**
                     * Constructs a new ListMigratingVmsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListMigratingVmsRequest);

                    /** ListMigratingVmsRequest parent. */
                    public parent: string;

                    /** ListMigratingVmsRequest pageSize. */
                    public pageSize: number;

                    /** ListMigratingVmsRequest pageToken. */
                    public pageToken: string;

                    /** ListMigratingVmsRequest filter. */
                    public filter: string;

                    /** ListMigratingVmsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListMigratingVmsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMigratingVmsRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListMigratingVmsRequest): google.cloud.vmmigration.v1.ListMigratingVmsRequest;

                    /**
                     * Encodes the specified ListMigratingVmsRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.ListMigratingVmsRequest.verify|verify} messages.
                     * @param message ListMigratingVmsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListMigratingVmsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMigratingVmsRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListMigratingVmsRequest.verify|verify} messages.
                     * @param message ListMigratingVmsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListMigratingVmsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMigratingVmsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMigratingVmsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListMigratingVmsRequest;

                    /**
                     * Decodes a ListMigratingVmsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMigratingVmsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListMigratingVmsRequest;

                    /**
                     * Verifies a ListMigratingVmsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMigratingVmsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMigratingVmsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListMigratingVmsRequest;

                    /**
                     * Creates a plain object from a ListMigratingVmsRequest message. Also converts values to other types if specified.
                     * @param message ListMigratingVmsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListMigratingVmsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMigratingVmsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListMigratingVmsResponse. */
                interface IListMigratingVmsResponse {

                    /** ListMigratingVmsResponse migratingVms */
                    migratingVms?: (google.cloud.vmmigration.v1.IMigratingVm[]|null);

                    /** ListMigratingVmsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListMigratingVmsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListMigratingVmsResponse. */
                class ListMigratingVmsResponse implements IListMigratingVmsResponse {

                    /**
                     * Constructs a new ListMigratingVmsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListMigratingVmsResponse);

                    /** ListMigratingVmsResponse migratingVms. */
                    public migratingVms: google.cloud.vmmigration.v1.IMigratingVm[];

                    /** ListMigratingVmsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListMigratingVmsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListMigratingVmsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMigratingVmsResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListMigratingVmsResponse): google.cloud.vmmigration.v1.ListMigratingVmsResponse;

                    /**
                     * Encodes the specified ListMigratingVmsResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.ListMigratingVmsResponse.verify|verify} messages.
                     * @param message ListMigratingVmsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListMigratingVmsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMigratingVmsResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListMigratingVmsResponse.verify|verify} messages.
                     * @param message ListMigratingVmsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListMigratingVmsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMigratingVmsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMigratingVmsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListMigratingVmsResponse;

                    /**
                     * Decodes a ListMigratingVmsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMigratingVmsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListMigratingVmsResponse;

                    /**
                     * Verifies a ListMigratingVmsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMigratingVmsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMigratingVmsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListMigratingVmsResponse;

                    /**
                     * Creates a plain object from a ListMigratingVmsResponse message. Also converts values to other types if specified.
                     * @param message ListMigratingVmsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListMigratingVmsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMigratingVmsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMigratingVmRequest. */
                interface IGetMigratingVmRequest {

                    /** GetMigratingVmRequest name */
                    name?: (string|null);
                }

                /** Represents a GetMigratingVmRequest. */
                class GetMigratingVmRequest implements IGetMigratingVmRequest {

                    /**
                     * Constructs a new GetMigratingVmRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IGetMigratingVmRequest);

                    /** GetMigratingVmRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetMigratingVmRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMigratingVmRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IGetMigratingVmRequest): google.cloud.vmmigration.v1.GetMigratingVmRequest;

                    /**
                     * Encodes the specified GetMigratingVmRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.GetMigratingVmRequest.verify|verify} messages.
                     * @param message GetMigratingVmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IGetMigratingVmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMigratingVmRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.GetMigratingVmRequest.verify|verify} messages.
                     * @param message GetMigratingVmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IGetMigratingVmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMigratingVmRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMigratingVmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.GetMigratingVmRequest;

                    /**
                     * Decodes a GetMigratingVmRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMigratingVmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.GetMigratingVmRequest;

                    /**
                     * Verifies a GetMigratingVmRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMigratingVmRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMigratingVmRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.GetMigratingVmRequest;

                    /**
                     * Creates a plain object from a GetMigratingVmRequest message. Also converts values to other types if specified.
                     * @param message GetMigratingVmRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.GetMigratingVmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMigratingVmRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateMigratingVmRequest. */
                interface IUpdateMigratingVmRequest {

                    /** UpdateMigratingVmRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMigratingVmRequest migratingVm */
                    migratingVm?: (google.cloud.vmmigration.v1.IMigratingVm|null);

                    /** UpdateMigratingVmRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateMigratingVmRequest. */
                class UpdateMigratingVmRequest implements IUpdateMigratingVmRequest {

                    /**
                     * Constructs a new UpdateMigratingVmRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IUpdateMigratingVmRequest);

                    /** UpdateMigratingVmRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMigratingVmRequest migratingVm. */
                    public migratingVm?: (google.cloud.vmmigration.v1.IMigratingVm|null);

                    /** UpdateMigratingVmRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateMigratingVmRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateMigratingVmRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IUpdateMigratingVmRequest): google.cloud.vmmigration.v1.UpdateMigratingVmRequest;

                    /**
                     * Encodes the specified UpdateMigratingVmRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.UpdateMigratingVmRequest.verify|verify} messages.
                     * @param message UpdateMigratingVmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IUpdateMigratingVmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateMigratingVmRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.UpdateMigratingVmRequest.verify|verify} messages.
                     * @param message UpdateMigratingVmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IUpdateMigratingVmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateMigratingVmRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateMigratingVmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.UpdateMigratingVmRequest;

                    /**
                     * Decodes an UpdateMigratingVmRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateMigratingVmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.UpdateMigratingVmRequest;

                    /**
                     * Verifies an UpdateMigratingVmRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateMigratingVmRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateMigratingVmRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.UpdateMigratingVmRequest;

                    /**
                     * Creates a plain object from an UpdateMigratingVmRequest message. Also converts values to other types if specified.
                     * @param message UpdateMigratingVmRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.UpdateMigratingVmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateMigratingVmRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteMigratingVmRequest. */
                interface IDeleteMigratingVmRequest {

                    /** DeleteMigratingVmRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteMigratingVmRequest. */
                class DeleteMigratingVmRequest implements IDeleteMigratingVmRequest {

                    /**
                     * Constructs a new DeleteMigratingVmRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IDeleteMigratingVmRequest);

                    /** DeleteMigratingVmRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteMigratingVmRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMigratingVmRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IDeleteMigratingVmRequest): google.cloud.vmmigration.v1.DeleteMigratingVmRequest;

                    /**
                     * Encodes the specified DeleteMigratingVmRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.DeleteMigratingVmRequest.verify|verify} messages.
                     * @param message DeleteMigratingVmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IDeleteMigratingVmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMigratingVmRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.DeleteMigratingVmRequest.verify|verify} messages.
                     * @param message DeleteMigratingVmRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IDeleteMigratingVmRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMigratingVmRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMigratingVmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.DeleteMigratingVmRequest;

                    /**
                     * Decodes a DeleteMigratingVmRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMigratingVmRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.DeleteMigratingVmRequest;

                    /**
                     * Verifies a DeleteMigratingVmRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMigratingVmRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMigratingVmRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.DeleteMigratingVmRequest;

                    /**
                     * Creates a plain object from a DeleteMigratingVmRequest message. Also converts values to other types if specified.
                     * @param message DeleteMigratingVmRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.DeleteMigratingVmRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMigratingVmRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StartMigrationRequest. */
                interface IStartMigrationRequest {

                    /** StartMigrationRequest migratingVm */
                    migratingVm?: (string|null);
                }

                /** Represents a StartMigrationRequest. */
                class StartMigrationRequest implements IStartMigrationRequest {

                    /**
                     * Constructs a new StartMigrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IStartMigrationRequest);

                    /** StartMigrationRequest migratingVm. */
                    public migratingVm: string;

                    /**
                     * Creates a new StartMigrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartMigrationRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IStartMigrationRequest): google.cloud.vmmigration.v1.StartMigrationRequest;

                    /**
                     * Encodes the specified StartMigrationRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.StartMigrationRequest.verify|verify} messages.
                     * @param message StartMigrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IStartMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartMigrationRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.StartMigrationRequest.verify|verify} messages.
                     * @param message StartMigrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IStartMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartMigrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartMigrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.StartMigrationRequest;

                    /**
                     * Decodes a StartMigrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartMigrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.StartMigrationRequest;

                    /**
                     * Verifies a StartMigrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartMigrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartMigrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.StartMigrationRequest;

                    /**
                     * Creates a plain object from a StartMigrationRequest message. Also converts values to other types if specified.
                     * @param message StartMigrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.StartMigrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartMigrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StartMigrationResponse. */
                interface IStartMigrationResponse {
                }

                /** Represents a StartMigrationResponse. */
                class StartMigrationResponse implements IStartMigrationResponse {

                    /**
                     * Constructs a new StartMigrationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IStartMigrationResponse);

                    /**
                     * Creates a new StartMigrationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartMigrationResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IStartMigrationResponse): google.cloud.vmmigration.v1.StartMigrationResponse;

                    /**
                     * Encodes the specified StartMigrationResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.StartMigrationResponse.verify|verify} messages.
                     * @param message StartMigrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IStartMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartMigrationResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.StartMigrationResponse.verify|verify} messages.
                     * @param message StartMigrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IStartMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartMigrationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartMigrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.StartMigrationResponse;

                    /**
                     * Decodes a StartMigrationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartMigrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.StartMigrationResponse;

                    /**
                     * Verifies a StartMigrationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartMigrationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartMigrationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.StartMigrationResponse;

                    /**
                     * Creates a plain object from a StartMigrationResponse message. Also converts values to other types if specified.
                     * @param message StartMigrationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.StartMigrationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartMigrationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PauseMigrationRequest. */
                interface IPauseMigrationRequest {

                    /** PauseMigrationRequest migratingVm */
                    migratingVm?: (string|null);
                }

                /** Represents a PauseMigrationRequest. */
                class PauseMigrationRequest implements IPauseMigrationRequest {

                    /**
                     * Constructs a new PauseMigrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IPauseMigrationRequest);

                    /** PauseMigrationRequest migratingVm. */
                    public migratingVm: string;

                    /**
                     * Creates a new PauseMigrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PauseMigrationRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IPauseMigrationRequest): google.cloud.vmmigration.v1.PauseMigrationRequest;

                    /**
                     * Encodes the specified PauseMigrationRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.PauseMigrationRequest.verify|verify} messages.
                     * @param message PauseMigrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IPauseMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PauseMigrationRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.PauseMigrationRequest.verify|verify} messages.
                     * @param message PauseMigrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IPauseMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PauseMigrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PauseMigrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.PauseMigrationRequest;

                    /**
                     * Decodes a PauseMigrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PauseMigrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.PauseMigrationRequest;

                    /**
                     * Verifies a PauseMigrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PauseMigrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PauseMigrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.PauseMigrationRequest;

                    /**
                     * Creates a plain object from a PauseMigrationRequest message. Also converts values to other types if specified.
                     * @param message PauseMigrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.PauseMigrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PauseMigrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PauseMigrationResponse. */
                interface IPauseMigrationResponse {
                }

                /** Represents a PauseMigrationResponse. */
                class PauseMigrationResponse implements IPauseMigrationResponse {

                    /**
                     * Constructs a new PauseMigrationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IPauseMigrationResponse);

                    /**
                     * Creates a new PauseMigrationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PauseMigrationResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IPauseMigrationResponse): google.cloud.vmmigration.v1.PauseMigrationResponse;

                    /**
                     * Encodes the specified PauseMigrationResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.PauseMigrationResponse.verify|verify} messages.
                     * @param message PauseMigrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IPauseMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PauseMigrationResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.PauseMigrationResponse.verify|verify} messages.
                     * @param message PauseMigrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IPauseMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PauseMigrationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PauseMigrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.PauseMigrationResponse;

                    /**
                     * Decodes a PauseMigrationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PauseMigrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.PauseMigrationResponse;

                    /**
                     * Verifies a PauseMigrationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PauseMigrationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PauseMigrationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.PauseMigrationResponse;

                    /**
                     * Creates a plain object from a PauseMigrationResponse message. Also converts values to other types if specified.
                     * @param message PauseMigrationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.PauseMigrationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PauseMigrationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResumeMigrationRequest. */
                interface IResumeMigrationRequest {

                    /** ResumeMigrationRequest migratingVm */
                    migratingVm?: (string|null);
                }

                /** Represents a ResumeMigrationRequest. */
                class ResumeMigrationRequest implements IResumeMigrationRequest {

                    /**
                     * Constructs a new ResumeMigrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IResumeMigrationRequest);

                    /** ResumeMigrationRequest migratingVm. */
                    public migratingVm: string;

                    /**
                     * Creates a new ResumeMigrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeMigrationRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IResumeMigrationRequest): google.cloud.vmmigration.v1.ResumeMigrationRequest;

                    /**
                     * Encodes the specified ResumeMigrationRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.ResumeMigrationRequest.verify|verify} messages.
                     * @param message ResumeMigrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IResumeMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeMigrationRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ResumeMigrationRequest.verify|verify} messages.
                     * @param message ResumeMigrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IResumeMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeMigrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeMigrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ResumeMigrationRequest;

                    /**
                     * Decodes a ResumeMigrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeMigrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ResumeMigrationRequest;

                    /**
                     * Verifies a ResumeMigrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeMigrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeMigrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ResumeMigrationRequest;

                    /**
                     * Creates a plain object from a ResumeMigrationRequest message. Also converts values to other types if specified.
                     * @param message ResumeMigrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ResumeMigrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeMigrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResumeMigrationResponse. */
                interface IResumeMigrationResponse {
                }

                /** Represents a ResumeMigrationResponse. */
                class ResumeMigrationResponse implements IResumeMigrationResponse {

                    /**
                     * Constructs a new ResumeMigrationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IResumeMigrationResponse);

                    /**
                     * Creates a new ResumeMigrationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeMigrationResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IResumeMigrationResponse): google.cloud.vmmigration.v1.ResumeMigrationResponse;

                    /**
                     * Encodes the specified ResumeMigrationResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.ResumeMigrationResponse.verify|verify} messages.
                     * @param message ResumeMigrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IResumeMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeMigrationResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ResumeMigrationResponse.verify|verify} messages.
                     * @param message ResumeMigrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IResumeMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeMigrationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeMigrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ResumeMigrationResponse;

                    /**
                     * Decodes a ResumeMigrationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeMigrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ResumeMigrationResponse;

                    /**
                     * Verifies a ResumeMigrationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeMigrationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeMigrationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ResumeMigrationResponse;

                    /**
                     * Creates a plain object from a ResumeMigrationResponse message. Also converts values to other types if specified.
                     * @param message ResumeMigrationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ResumeMigrationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeMigrationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FinalizeMigrationRequest. */
                interface IFinalizeMigrationRequest {

                    /** FinalizeMigrationRequest migratingVm */
                    migratingVm?: (string|null);
                }

                /** Represents a FinalizeMigrationRequest. */
                class FinalizeMigrationRequest implements IFinalizeMigrationRequest {

                    /**
                     * Constructs a new FinalizeMigrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IFinalizeMigrationRequest);

                    /** FinalizeMigrationRequest migratingVm. */
                    public migratingVm: string;

                    /**
                     * Creates a new FinalizeMigrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FinalizeMigrationRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IFinalizeMigrationRequest): google.cloud.vmmigration.v1.FinalizeMigrationRequest;

                    /**
                     * Encodes the specified FinalizeMigrationRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.FinalizeMigrationRequest.verify|verify} messages.
                     * @param message FinalizeMigrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IFinalizeMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FinalizeMigrationRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.FinalizeMigrationRequest.verify|verify} messages.
                     * @param message FinalizeMigrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IFinalizeMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FinalizeMigrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FinalizeMigrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.FinalizeMigrationRequest;

                    /**
                     * Decodes a FinalizeMigrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FinalizeMigrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.FinalizeMigrationRequest;

                    /**
                     * Verifies a FinalizeMigrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FinalizeMigrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FinalizeMigrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.FinalizeMigrationRequest;

                    /**
                     * Creates a plain object from a FinalizeMigrationRequest message. Also converts values to other types if specified.
                     * @param message FinalizeMigrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.FinalizeMigrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FinalizeMigrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FinalizeMigrationResponse. */
                interface IFinalizeMigrationResponse {
                }

                /** Represents a FinalizeMigrationResponse. */
                class FinalizeMigrationResponse implements IFinalizeMigrationResponse {

                    /**
                     * Constructs a new FinalizeMigrationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IFinalizeMigrationResponse);

                    /**
                     * Creates a new FinalizeMigrationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FinalizeMigrationResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IFinalizeMigrationResponse): google.cloud.vmmigration.v1.FinalizeMigrationResponse;

                    /**
                     * Encodes the specified FinalizeMigrationResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.FinalizeMigrationResponse.verify|verify} messages.
                     * @param message FinalizeMigrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IFinalizeMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FinalizeMigrationResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.FinalizeMigrationResponse.verify|verify} messages.
                     * @param message FinalizeMigrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IFinalizeMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FinalizeMigrationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FinalizeMigrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.FinalizeMigrationResponse;

                    /**
                     * Decodes a FinalizeMigrationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FinalizeMigrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.FinalizeMigrationResponse;

                    /**
                     * Verifies a FinalizeMigrationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FinalizeMigrationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FinalizeMigrationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.FinalizeMigrationResponse;

                    /**
                     * Creates a plain object from a FinalizeMigrationResponse message. Also converts values to other types if specified.
                     * @param message FinalizeMigrationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.FinalizeMigrationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FinalizeMigrationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TargetProject. */
                interface ITargetProject {

                    /** TargetProject name */
                    name?: (string|null);

                    /** TargetProject project */
                    project?: (string|null);

                    /** TargetProject description */
                    description?: (string|null);

                    /** TargetProject createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** TargetProject updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TargetProject. */
                class TargetProject implements ITargetProject {

                    /**
                     * Constructs a new TargetProject.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ITargetProject);

                    /** TargetProject name. */
                    public name: string;

                    /** TargetProject project. */
                    public project: string;

                    /** TargetProject description. */
                    public description: string;

                    /** TargetProject createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** TargetProject updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TargetProject instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TargetProject instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ITargetProject): google.cloud.vmmigration.v1.TargetProject;

                    /**
                     * Encodes the specified TargetProject message. Does not implicitly {@link google.cloud.vmmigration.v1.TargetProject.verify|verify} messages.
                     * @param message TargetProject message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ITargetProject, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TargetProject message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.TargetProject.verify|verify} messages.
                     * @param message TargetProject message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ITargetProject, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TargetProject message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TargetProject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.TargetProject;

                    /**
                     * Decodes a TargetProject message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TargetProject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.TargetProject;

                    /**
                     * Verifies a TargetProject message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TargetProject message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TargetProject
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.TargetProject;

                    /**
                     * Creates a plain object from a TargetProject message. Also converts values to other types if specified.
                     * @param message TargetProject
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.TargetProject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TargetProject to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetTargetProjectRequest. */
                interface IGetTargetProjectRequest {

                    /** GetTargetProjectRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTargetProjectRequest. */
                class GetTargetProjectRequest implements IGetTargetProjectRequest {

                    /**
                     * Constructs a new GetTargetProjectRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IGetTargetProjectRequest);

                    /** GetTargetProjectRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTargetProjectRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTargetProjectRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IGetTargetProjectRequest): google.cloud.vmmigration.v1.GetTargetProjectRequest;

                    /**
                     * Encodes the specified GetTargetProjectRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.GetTargetProjectRequest.verify|verify} messages.
                     * @param message GetTargetProjectRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IGetTargetProjectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTargetProjectRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.GetTargetProjectRequest.verify|verify} messages.
                     * @param message GetTargetProjectRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IGetTargetProjectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTargetProjectRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTargetProjectRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.GetTargetProjectRequest;

                    /**
                     * Decodes a GetTargetProjectRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTargetProjectRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.GetTargetProjectRequest;

                    /**
                     * Verifies a GetTargetProjectRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTargetProjectRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTargetProjectRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.GetTargetProjectRequest;

                    /**
                     * Creates a plain object from a GetTargetProjectRequest message. Also converts values to other types if specified.
                     * @param message GetTargetProjectRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.GetTargetProjectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTargetProjectRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTargetProjectsRequest. */
                interface IListTargetProjectsRequest {

                    /** ListTargetProjectsRequest parent */
                    parent?: (string|null);

                    /** ListTargetProjectsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTargetProjectsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListTargetProjectsRequest filter */
                    filter?: (string|null);

                    /** ListTargetProjectsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListTargetProjectsRequest. */
                class ListTargetProjectsRequest implements IListTargetProjectsRequest {

                    /**
                     * Constructs a new ListTargetProjectsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListTargetProjectsRequest);

                    /** ListTargetProjectsRequest parent. */
                    public parent: string;

                    /** ListTargetProjectsRequest pageSize. */
                    public pageSize: number;

                    /** ListTargetProjectsRequest pageToken. */
                    public pageToken: string;

                    /** ListTargetProjectsRequest filter. */
                    public filter: string;

                    /** ListTargetProjectsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListTargetProjectsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTargetProjectsRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListTargetProjectsRequest): google.cloud.vmmigration.v1.ListTargetProjectsRequest;

                    /**
                     * Encodes the specified ListTargetProjectsRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.ListTargetProjectsRequest.verify|verify} messages.
                     * @param message ListTargetProjectsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListTargetProjectsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTargetProjectsRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListTargetProjectsRequest.verify|verify} messages.
                     * @param message ListTargetProjectsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListTargetProjectsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTargetProjectsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTargetProjectsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListTargetProjectsRequest;

                    /**
                     * Decodes a ListTargetProjectsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTargetProjectsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListTargetProjectsRequest;

                    /**
                     * Verifies a ListTargetProjectsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTargetProjectsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTargetProjectsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListTargetProjectsRequest;

                    /**
                     * Creates a plain object from a ListTargetProjectsRequest message. Also converts values to other types if specified.
                     * @param message ListTargetProjectsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListTargetProjectsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTargetProjectsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTargetProjectsResponse. */
                interface IListTargetProjectsResponse {

                    /** ListTargetProjectsResponse targetProjects */
                    targetProjects?: (google.cloud.vmmigration.v1.ITargetProject[]|null);

                    /** ListTargetProjectsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListTargetProjectsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListTargetProjectsResponse. */
                class ListTargetProjectsResponse implements IListTargetProjectsResponse {

                    /**
                     * Constructs a new ListTargetProjectsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListTargetProjectsResponse);

                    /** ListTargetProjectsResponse targetProjects. */
                    public targetProjects: google.cloud.vmmigration.v1.ITargetProject[];

                    /** ListTargetProjectsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListTargetProjectsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListTargetProjectsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTargetProjectsResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListTargetProjectsResponse): google.cloud.vmmigration.v1.ListTargetProjectsResponse;

                    /**
                     * Encodes the specified ListTargetProjectsResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.ListTargetProjectsResponse.verify|verify} messages.
                     * @param message ListTargetProjectsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListTargetProjectsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTargetProjectsResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListTargetProjectsResponse.verify|verify} messages.
                     * @param message ListTargetProjectsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListTargetProjectsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTargetProjectsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTargetProjectsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListTargetProjectsResponse;

                    /**
                     * Decodes a ListTargetProjectsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTargetProjectsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListTargetProjectsResponse;

                    /**
                     * Verifies a ListTargetProjectsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTargetProjectsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTargetProjectsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListTargetProjectsResponse;

                    /**
                     * Creates a plain object from a ListTargetProjectsResponse message. Also converts values to other types if specified.
                     * @param message ListTargetProjectsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListTargetProjectsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTargetProjectsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateTargetProjectRequest. */
                interface ICreateTargetProjectRequest {

                    /** CreateTargetProjectRequest parent */
                    parent?: (string|null);

                    /** CreateTargetProjectRequest targetProjectId */
                    targetProjectId?: (string|null);

                    /** CreateTargetProjectRequest targetProject */
                    targetProject?: (google.cloud.vmmigration.v1.ITargetProject|null);

                    /** CreateTargetProjectRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateTargetProjectRequest. */
                class CreateTargetProjectRequest implements ICreateTargetProjectRequest {

                    /**
                     * Constructs a new CreateTargetProjectRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICreateTargetProjectRequest);

                    /** CreateTargetProjectRequest parent. */
                    public parent: string;

                    /** CreateTargetProjectRequest targetProjectId. */
                    public targetProjectId: string;

                    /** CreateTargetProjectRequest targetProject. */
                    public targetProject?: (google.cloud.vmmigration.v1.ITargetProject|null);

                    /** CreateTargetProjectRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateTargetProjectRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTargetProjectRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICreateTargetProjectRequest): google.cloud.vmmigration.v1.CreateTargetProjectRequest;

                    /**
                     * Encodes the specified CreateTargetProjectRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.CreateTargetProjectRequest.verify|verify} messages.
                     * @param message CreateTargetProjectRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICreateTargetProjectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTargetProjectRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CreateTargetProjectRequest.verify|verify} messages.
                     * @param message CreateTargetProjectRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICreateTargetProjectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTargetProjectRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTargetProjectRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CreateTargetProjectRequest;

                    /**
                     * Decodes a CreateTargetProjectRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTargetProjectRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CreateTargetProjectRequest;

                    /**
                     * Verifies a CreateTargetProjectRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTargetProjectRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTargetProjectRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CreateTargetProjectRequest;

                    /**
                     * Creates a plain object from a CreateTargetProjectRequest message. Also converts values to other types if specified.
                     * @param message CreateTargetProjectRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CreateTargetProjectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTargetProjectRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateTargetProjectRequest. */
                interface IUpdateTargetProjectRequest {

                    /** UpdateTargetProjectRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTargetProjectRequest targetProject */
                    targetProject?: (google.cloud.vmmigration.v1.ITargetProject|null);

                    /** UpdateTargetProjectRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateTargetProjectRequest. */
                class UpdateTargetProjectRequest implements IUpdateTargetProjectRequest {

                    /**
                     * Constructs a new UpdateTargetProjectRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IUpdateTargetProjectRequest);

                    /** UpdateTargetProjectRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTargetProjectRequest targetProject. */
                    public targetProject?: (google.cloud.vmmigration.v1.ITargetProject|null);

                    /** UpdateTargetProjectRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateTargetProjectRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTargetProjectRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IUpdateTargetProjectRequest): google.cloud.vmmigration.v1.UpdateTargetProjectRequest;

                    /**
                     * Encodes the specified UpdateTargetProjectRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.UpdateTargetProjectRequest.verify|verify} messages.
                     * @param message UpdateTargetProjectRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IUpdateTargetProjectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTargetProjectRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.UpdateTargetProjectRequest.verify|verify} messages.
                     * @param message UpdateTargetProjectRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IUpdateTargetProjectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTargetProjectRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTargetProjectRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.UpdateTargetProjectRequest;

                    /**
                     * Decodes an UpdateTargetProjectRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTargetProjectRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.UpdateTargetProjectRequest;

                    /**
                     * Verifies an UpdateTargetProjectRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTargetProjectRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTargetProjectRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.UpdateTargetProjectRequest;

                    /**
                     * Creates a plain object from an UpdateTargetProjectRequest message. Also converts values to other types if specified.
                     * @param message UpdateTargetProjectRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.UpdateTargetProjectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTargetProjectRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteTargetProjectRequest. */
                interface IDeleteTargetProjectRequest {

                    /** DeleteTargetProjectRequest name */
                    name?: (string|null);

                    /** DeleteTargetProjectRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteTargetProjectRequest. */
                class DeleteTargetProjectRequest implements IDeleteTargetProjectRequest {

                    /**
                     * Constructs a new DeleteTargetProjectRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IDeleteTargetProjectRequest);

                    /** DeleteTargetProjectRequest name. */
                    public name: string;

                    /** DeleteTargetProjectRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteTargetProjectRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTargetProjectRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IDeleteTargetProjectRequest): google.cloud.vmmigration.v1.DeleteTargetProjectRequest;

                    /**
                     * Encodes the specified DeleteTargetProjectRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.DeleteTargetProjectRequest.verify|verify} messages.
                     * @param message DeleteTargetProjectRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IDeleteTargetProjectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTargetProjectRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.DeleteTargetProjectRequest.verify|verify} messages.
                     * @param message DeleteTargetProjectRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IDeleteTargetProjectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTargetProjectRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTargetProjectRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.DeleteTargetProjectRequest;

                    /**
                     * Decodes a DeleteTargetProjectRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTargetProjectRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.DeleteTargetProjectRequest;

                    /**
                     * Verifies a DeleteTargetProjectRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTargetProjectRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTargetProjectRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.DeleteTargetProjectRequest;

                    /**
                     * Creates a plain object from a DeleteTargetProjectRequest message. Also converts values to other types if specified.
                     * @param message DeleteTargetProjectRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.DeleteTargetProjectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTargetProjectRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Group. */
                interface IGroup {

                    /** Group name */
                    name?: (string|null);

                    /** Group createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Group updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Group description */
                    description?: (string|null);

                    /** Group displayName */
                    displayName?: (string|null);
                }

                /** Represents a Group. */
                class Group implements IGroup {

                    /**
                     * Constructs a new Group.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IGroup);

                    /** Group name. */
                    public name: string;

                    /** Group createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Group updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Group description. */
                    public description: string;

                    /** Group displayName. */
                    public displayName: string;

                    /**
                     * Creates a new Group instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Group instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IGroup): google.cloud.vmmigration.v1.Group;

                    /**
                     * Encodes the specified Group message. Does not implicitly {@link google.cloud.vmmigration.v1.Group.verify|verify} messages.
                     * @param message Group message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Group message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.Group.verify|verify} messages.
                     * @param message Group message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Group message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Group
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.Group;

                    /**
                     * Decodes a Group message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Group
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.Group;

                    /**
                     * Verifies a Group message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Group message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Group
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.Group;

                    /**
                     * Creates a plain object from a Group message. Also converts values to other types if specified.
                     * @param message Group
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.Group, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Group to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListGroupsRequest. */
                interface IListGroupsRequest {

                    /** ListGroupsRequest parent */
                    parent?: (string|null);

                    /** ListGroupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGroupsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListGroupsRequest filter */
                    filter?: (string|null);

                    /** ListGroupsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListGroupsRequest. */
                class ListGroupsRequest implements IListGroupsRequest {

                    /**
                     * Constructs a new ListGroupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListGroupsRequest);

                    /** ListGroupsRequest parent. */
                    public parent: string;

                    /** ListGroupsRequest pageSize. */
                    public pageSize: number;

                    /** ListGroupsRequest pageToken. */
                    public pageToken: string;

                    /** ListGroupsRequest filter. */
                    public filter: string;

                    /** ListGroupsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListGroupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGroupsRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListGroupsRequest): google.cloud.vmmigration.v1.ListGroupsRequest;

                    /**
                     * Encodes the specified ListGroupsRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.ListGroupsRequest.verify|verify} messages.
                     * @param message ListGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGroupsRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListGroupsRequest.verify|verify} messages.
                     * @param message ListGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGroupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListGroupsRequest;

                    /**
                     * Decodes a ListGroupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListGroupsRequest;

                    /**
                     * Verifies a ListGroupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGroupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGroupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListGroupsRequest;

                    /**
                     * Creates a plain object from a ListGroupsRequest message. Also converts values to other types if specified.
                     * @param message ListGroupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListGroupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGroupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListGroupsResponse. */
                interface IListGroupsResponse {

                    /** ListGroupsResponse groups */
                    groups?: (google.cloud.vmmigration.v1.IGroup[]|null);

                    /** ListGroupsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListGroupsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListGroupsResponse. */
                class ListGroupsResponse implements IListGroupsResponse {

                    /**
                     * Constructs a new ListGroupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListGroupsResponse);

                    /** ListGroupsResponse groups. */
                    public groups: google.cloud.vmmigration.v1.IGroup[];

                    /** ListGroupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListGroupsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListGroupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGroupsResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListGroupsResponse): google.cloud.vmmigration.v1.ListGroupsResponse;

                    /**
                     * Encodes the specified ListGroupsResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.ListGroupsResponse.verify|verify} messages.
                     * @param message ListGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGroupsResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListGroupsResponse.verify|verify} messages.
                     * @param message ListGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGroupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListGroupsResponse;

                    /**
                     * Decodes a ListGroupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListGroupsResponse;

                    /**
                     * Verifies a ListGroupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGroupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGroupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListGroupsResponse;

                    /**
                     * Creates a plain object from a ListGroupsResponse message. Also converts values to other types if specified.
                     * @param message ListGroupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListGroupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGroupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetGroupRequest. */
                interface IGetGroupRequest {

                    /** GetGroupRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGroupRequest. */
                class GetGroupRequest implements IGetGroupRequest {

                    /**
                     * Constructs a new GetGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IGetGroupRequest);

                    /** GetGroupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGroupRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IGetGroupRequest): google.cloud.vmmigration.v1.GetGroupRequest;

                    /**
                     * Encodes the specified GetGroupRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.GetGroupRequest.verify|verify} messages.
                     * @param message GetGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IGetGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGroupRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.GetGroupRequest.verify|verify} messages.
                     * @param message GetGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IGetGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.GetGroupRequest;

                    /**
                     * Decodes a GetGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.GetGroupRequest;

                    /**
                     * Verifies a GetGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.GetGroupRequest;

                    /**
                     * Creates a plain object from a GetGroupRequest message. Also converts values to other types if specified.
                     * @param message GetGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.GetGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateGroupRequest. */
                interface ICreateGroupRequest {

                    /** CreateGroupRequest parent */
                    parent?: (string|null);

                    /** CreateGroupRequest groupId */
                    groupId?: (string|null);

                    /** CreateGroupRequest group */
                    group?: (google.cloud.vmmigration.v1.IGroup|null);

                    /** CreateGroupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateGroupRequest. */
                class CreateGroupRequest implements ICreateGroupRequest {

                    /**
                     * Constructs a new CreateGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICreateGroupRequest);

                    /** CreateGroupRequest parent. */
                    public parent: string;

                    /** CreateGroupRequest groupId. */
                    public groupId: string;

                    /** CreateGroupRequest group. */
                    public group?: (google.cloud.vmmigration.v1.IGroup|null);

                    /** CreateGroupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGroupRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICreateGroupRequest): google.cloud.vmmigration.v1.CreateGroupRequest;

                    /**
                     * Encodes the specified CreateGroupRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.CreateGroupRequest.verify|verify} messages.
                     * @param message CreateGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICreateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGroupRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CreateGroupRequest.verify|verify} messages.
                     * @param message CreateGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICreateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CreateGroupRequest;

                    /**
                     * Decodes a CreateGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CreateGroupRequest;

                    /**
                     * Verifies a CreateGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CreateGroupRequest;

                    /**
                     * Creates a plain object from a CreateGroupRequest message. Also converts values to other types if specified.
                     * @param message CreateGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CreateGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateGroupRequest. */
                interface IUpdateGroupRequest {

                    /** UpdateGroupRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateGroupRequest group */
                    group?: (google.cloud.vmmigration.v1.IGroup|null);

                    /** UpdateGroupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateGroupRequest. */
                class UpdateGroupRequest implements IUpdateGroupRequest {

                    /**
                     * Constructs a new UpdateGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IUpdateGroupRequest);

                    /** UpdateGroupRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateGroupRequest group. */
                    public group?: (google.cloud.vmmigration.v1.IGroup|null);

                    /** UpdateGroupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateGroupRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IUpdateGroupRequest): google.cloud.vmmigration.v1.UpdateGroupRequest;

                    /**
                     * Encodes the specified UpdateGroupRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.UpdateGroupRequest.verify|verify} messages.
                     * @param message UpdateGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IUpdateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateGroupRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.UpdateGroupRequest.verify|verify} messages.
                     * @param message UpdateGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IUpdateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.UpdateGroupRequest;

                    /**
                     * Decodes an UpdateGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.UpdateGroupRequest;

                    /**
                     * Verifies an UpdateGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.UpdateGroupRequest;

                    /**
                     * Creates a plain object from an UpdateGroupRequest message. Also converts values to other types if specified.
                     * @param message UpdateGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.UpdateGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteGroupRequest. */
                interface IDeleteGroupRequest {

                    /** DeleteGroupRequest name */
                    name?: (string|null);

                    /** DeleteGroupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteGroupRequest. */
                class DeleteGroupRequest implements IDeleteGroupRequest {

                    /**
                     * Constructs a new DeleteGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IDeleteGroupRequest);

                    /** DeleteGroupRequest name. */
                    public name: string;

                    /** DeleteGroupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGroupRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IDeleteGroupRequest): google.cloud.vmmigration.v1.DeleteGroupRequest;

                    /**
                     * Encodes the specified DeleteGroupRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.DeleteGroupRequest.verify|verify} messages.
                     * @param message DeleteGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IDeleteGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGroupRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.DeleteGroupRequest.verify|verify} messages.
                     * @param message DeleteGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IDeleteGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.DeleteGroupRequest;

                    /**
                     * Decodes a DeleteGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.DeleteGroupRequest;

                    /**
                     * Verifies a DeleteGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.DeleteGroupRequest;

                    /**
                     * Creates a plain object from a DeleteGroupRequest message. Also converts values to other types if specified.
                     * @param message DeleteGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.DeleteGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AddGroupMigrationRequest. */
                interface IAddGroupMigrationRequest {

                    /** AddGroupMigrationRequest group */
                    group?: (string|null);

                    /** AddGroupMigrationRequest migratingVm */
                    migratingVm?: (string|null);
                }

                /** Represents an AddGroupMigrationRequest. */
                class AddGroupMigrationRequest implements IAddGroupMigrationRequest {

                    /**
                     * Constructs a new AddGroupMigrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IAddGroupMigrationRequest);

                    /** AddGroupMigrationRequest group. */
                    public group: string;

                    /** AddGroupMigrationRequest migratingVm. */
                    public migratingVm: string;

                    /**
                     * Creates a new AddGroupMigrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddGroupMigrationRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IAddGroupMigrationRequest): google.cloud.vmmigration.v1.AddGroupMigrationRequest;

                    /**
                     * Encodes the specified AddGroupMigrationRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.AddGroupMigrationRequest.verify|verify} messages.
                     * @param message AddGroupMigrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IAddGroupMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddGroupMigrationRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.AddGroupMigrationRequest.verify|verify} messages.
                     * @param message AddGroupMigrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IAddGroupMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddGroupMigrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddGroupMigrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.AddGroupMigrationRequest;

                    /**
                     * Decodes an AddGroupMigrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddGroupMigrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.AddGroupMigrationRequest;

                    /**
                     * Verifies an AddGroupMigrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddGroupMigrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddGroupMigrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.AddGroupMigrationRequest;

                    /**
                     * Creates a plain object from an AddGroupMigrationRequest message. Also converts values to other types if specified.
                     * @param message AddGroupMigrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.AddGroupMigrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddGroupMigrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AddGroupMigrationResponse. */
                interface IAddGroupMigrationResponse {
                }

                /** Represents an AddGroupMigrationResponse. */
                class AddGroupMigrationResponse implements IAddGroupMigrationResponse {

                    /**
                     * Constructs a new AddGroupMigrationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IAddGroupMigrationResponse);

                    /**
                     * Creates a new AddGroupMigrationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddGroupMigrationResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IAddGroupMigrationResponse): google.cloud.vmmigration.v1.AddGroupMigrationResponse;

                    /**
                     * Encodes the specified AddGroupMigrationResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.AddGroupMigrationResponse.verify|verify} messages.
                     * @param message AddGroupMigrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IAddGroupMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddGroupMigrationResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.AddGroupMigrationResponse.verify|verify} messages.
                     * @param message AddGroupMigrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IAddGroupMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddGroupMigrationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddGroupMigrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.AddGroupMigrationResponse;

                    /**
                     * Decodes an AddGroupMigrationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddGroupMigrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.AddGroupMigrationResponse;

                    /**
                     * Verifies an AddGroupMigrationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddGroupMigrationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddGroupMigrationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.AddGroupMigrationResponse;

                    /**
                     * Creates a plain object from an AddGroupMigrationResponse message. Also converts values to other types if specified.
                     * @param message AddGroupMigrationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.AddGroupMigrationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddGroupMigrationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RemoveGroupMigrationRequest. */
                interface IRemoveGroupMigrationRequest {

                    /** RemoveGroupMigrationRequest group */
                    group?: (string|null);

                    /** RemoveGroupMigrationRequest migratingVm */
                    migratingVm?: (string|null);
                }

                /** Represents a RemoveGroupMigrationRequest. */
                class RemoveGroupMigrationRequest implements IRemoveGroupMigrationRequest {

                    /**
                     * Constructs a new RemoveGroupMigrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IRemoveGroupMigrationRequest);

                    /** RemoveGroupMigrationRequest group. */
                    public group: string;

                    /** RemoveGroupMigrationRequest migratingVm. */
                    public migratingVm: string;

                    /**
                     * Creates a new RemoveGroupMigrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveGroupMigrationRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IRemoveGroupMigrationRequest): google.cloud.vmmigration.v1.RemoveGroupMigrationRequest;

                    /**
                     * Encodes the specified RemoveGroupMigrationRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.RemoveGroupMigrationRequest.verify|verify} messages.
                     * @param message RemoveGroupMigrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IRemoveGroupMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveGroupMigrationRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.RemoveGroupMigrationRequest.verify|verify} messages.
                     * @param message RemoveGroupMigrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IRemoveGroupMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveGroupMigrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveGroupMigrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.RemoveGroupMigrationRequest;

                    /**
                     * Decodes a RemoveGroupMigrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveGroupMigrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.RemoveGroupMigrationRequest;

                    /**
                     * Verifies a RemoveGroupMigrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveGroupMigrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveGroupMigrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.RemoveGroupMigrationRequest;

                    /**
                     * Creates a plain object from a RemoveGroupMigrationRequest message. Also converts values to other types if specified.
                     * @param message RemoveGroupMigrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.RemoveGroupMigrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveGroupMigrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RemoveGroupMigrationResponse. */
                interface IRemoveGroupMigrationResponse {
                }

                /** Represents a RemoveGroupMigrationResponse. */
                class RemoveGroupMigrationResponse implements IRemoveGroupMigrationResponse {

                    /**
                     * Constructs a new RemoveGroupMigrationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IRemoveGroupMigrationResponse);

                    /**
                     * Creates a new RemoveGroupMigrationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveGroupMigrationResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IRemoveGroupMigrationResponse): google.cloud.vmmigration.v1.RemoveGroupMigrationResponse;

                    /**
                     * Encodes the specified RemoveGroupMigrationResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.RemoveGroupMigrationResponse.verify|verify} messages.
                     * @param message RemoveGroupMigrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IRemoveGroupMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveGroupMigrationResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.RemoveGroupMigrationResponse.verify|verify} messages.
                     * @param message RemoveGroupMigrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IRemoveGroupMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveGroupMigrationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveGroupMigrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.RemoveGroupMigrationResponse;

                    /**
                     * Decodes a RemoveGroupMigrationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveGroupMigrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.RemoveGroupMigrationResponse;

                    /**
                     * Verifies a RemoveGroupMigrationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveGroupMigrationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveGroupMigrationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.RemoveGroupMigrationResponse;

                    /**
                     * Creates a plain object from a RemoveGroupMigrationResponse message. Also converts values to other types if specified.
                     * @param message RemoveGroupMigrationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.RemoveGroupMigrationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveGroupMigrationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateCutoverJobRequest. */
                interface ICreateCutoverJobRequest {

                    /** CreateCutoverJobRequest parent */
                    parent?: (string|null);

                    /** CreateCutoverJobRequest cutoverJobId */
                    cutoverJobId?: (string|null);

                    /** CreateCutoverJobRequest cutoverJob */
                    cutoverJob?: (google.cloud.vmmigration.v1.ICutoverJob|null);

                    /** CreateCutoverJobRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateCutoverJobRequest. */
                class CreateCutoverJobRequest implements ICreateCutoverJobRequest {

                    /**
                     * Constructs a new CreateCutoverJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICreateCutoverJobRequest);

                    /** CreateCutoverJobRequest parent. */
                    public parent: string;

                    /** CreateCutoverJobRequest cutoverJobId. */
                    public cutoverJobId: string;

                    /** CreateCutoverJobRequest cutoverJob. */
                    public cutoverJob?: (google.cloud.vmmigration.v1.ICutoverJob|null);

                    /** CreateCutoverJobRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateCutoverJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCutoverJobRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICreateCutoverJobRequest): google.cloud.vmmigration.v1.CreateCutoverJobRequest;

                    /**
                     * Encodes the specified CreateCutoverJobRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.CreateCutoverJobRequest.verify|verify} messages.
                     * @param message CreateCutoverJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICreateCutoverJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCutoverJobRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CreateCutoverJobRequest.verify|verify} messages.
                     * @param message CreateCutoverJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICreateCutoverJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCutoverJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCutoverJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CreateCutoverJobRequest;

                    /**
                     * Decodes a CreateCutoverJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCutoverJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CreateCutoverJobRequest;

                    /**
                     * Verifies a CreateCutoverJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCutoverJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCutoverJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CreateCutoverJobRequest;

                    /**
                     * Creates a plain object from a CreateCutoverJobRequest message. Also converts values to other types if specified.
                     * @param message CreateCutoverJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CreateCutoverJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCutoverJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CancelCutoverJobRequest. */
                interface ICancelCutoverJobRequest {

                    /** CancelCutoverJobRequest name */
                    name?: (string|null);
                }

                /** Represents a CancelCutoverJobRequest. */
                class CancelCutoverJobRequest implements ICancelCutoverJobRequest {

                    /**
                     * Constructs a new CancelCutoverJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICancelCutoverJobRequest);

                    /** CancelCutoverJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new CancelCutoverJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelCutoverJobRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICancelCutoverJobRequest): google.cloud.vmmigration.v1.CancelCutoverJobRequest;

                    /**
                     * Encodes the specified CancelCutoverJobRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.CancelCutoverJobRequest.verify|verify} messages.
                     * @param message CancelCutoverJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICancelCutoverJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelCutoverJobRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CancelCutoverJobRequest.verify|verify} messages.
                     * @param message CancelCutoverJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICancelCutoverJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelCutoverJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelCutoverJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CancelCutoverJobRequest;

                    /**
                     * Decodes a CancelCutoverJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelCutoverJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CancelCutoverJobRequest;

                    /**
                     * Verifies a CancelCutoverJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelCutoverJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelCutoverJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CancelCutoverJobRequest;

                    /**
                     * Creates a plain object from a CancelCutoverJobRequest message. Also converts values to other types if specified.
                     * @param message CancelCutoverJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CancelCutoverJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelCutoverJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CancelCutoverJobResponse. */
                interface ICancelCutoverJobResponse {
                }

                /** Represents a CancelCutoverJobResponse. */
                class CancelCutoverJobResponse implements ICancelCutoverJobResponse {

                    /**
                     * Constructs a new CancelCutoverJobResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.ICancelCutoverJobResponse);

                    /**
                     * Creates a new CancelCutoverJobResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelCutoverJobResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.ICancelCutoverJobResponse): google.cloud.vmmigration.v1.CancelCutoverJobResponse;

                    /**
                     * Encodes the specified CancelCutoverJobResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.CancelCutoverJobResponse.verify|verify} messages.
                     * @param message CancelCutoverJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.ICancelCutoverJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelCutoverJobResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.CancelCutoverJobResponse.verify|verify} messages.
                     * @param message CancelCutoverJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.ICancelCutoverJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelCutoverJobResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelCutoverJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.CancelCutoverJobResponse;

                    /**
                     * Decodes a CancelCutoverJobResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelCutoverJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.CancelCutoverJobResponse;

                    /**
                     * Verifies a CancelCutoverJobResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelCutoverJobResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelCutoverJobResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.CancelCutoverJobResponse;

                    /**
                     * Creates a plain object from a CancelCutoverJobResponse message. Also converts values to other types if specified.
                     * @param message CancelCutoverJobResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.CancelCutoverJobResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelCutoverJobResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCutoverJobsRequest. */
                interface IListCutoverJobsRequest {

                    /** ListCutoverJobsRequest parent */
                    parent?: (string|null);

                    /** ListCutoverJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCutoverJobsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCutoverJobsRequest filter */
                    filter?: (string|null);

                    /** ListCutoverJobsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListCutoverJobsRequest. */
                class ListCutoverJobsRequest implements IListCutoverJobsRequest {

                    /**
                     * Constructs a new ListCutoverJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListCutoverJobsRequest);

                    /** ListCutoverJobsRequest parent. */
                    public parent: string;

                    /** ListCutoverJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListCutoverJobsRequest pageToken. */
                    public pageToken: string;

                    /** ListCutoverJobsRequest filter. */
                    public filter: string;

                    /** ListCutoverJobsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListCutoverJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCutoverJobsRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListCutoverJobsRequest): google.cloud.vmmigration.v1.ListCutoverJobsRequest;

                    /**
                     * Encodes the specified ListCutoverJobsRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.ListCutoverJobsRequest.verify|verify} messages.
                     * @param message ListCutoverJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListCutoverJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCutoverJobsRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListCutoverJobsRequest.verify|verify} messages.
                     * @param message ListCutoverJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListCutoverJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCutoverJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCutoverJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListCutoverJobsRequest;

                    /**
                     * Decodes a ListCutoverJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCutoverJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListCutoverJobsRequest;

                    /**
                     * Verifies a ListCutoverJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCutoverJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCutoverJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListCutoverJobsRequest;

                    /**
                     * Creates a plain object from a ListCutoverJobsRequest message. Also converts values to other types if specified.
                     * @param message ListCutoverJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListCutoverJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCutoverJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCutoverJobsResponse. */
                interface IListCutoverJobsResponse {

                    /** ListCutoverJobsResponse cutoverJobs */
                    cutoverJobs?: (google.cloud.vmmigration.v1.ICutoverJob[]|null);

                    /** ListCutoverJobsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListCutoverJobsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListCutoverJobsResponse. */
                class ListCutoverJobsResponse implements IListCutoverJobsResponse {

                    /**
                     * Constructs a new ListCutoverJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IListCutoverJobsResponse);

                    /** ListCutoverJobsResponse cutoverJobs. */
                    public cutoverJobs: google.cloud.vmmigration.v1.ICutoverJob[];

                    /** ListCutoverJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListCutoverJobsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListCutoverJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCutoverJobsResponse instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IListCutoverJobsResponse): google.cloud.vmmigration.v1.ListCutoverJobsResponse;

                    /**
                     * Encodes the specified ListCutoverJobsResponse message. Does not implicitly {@link google.cloud.vmmigration.v1.ListCutoverJobsResponse.verify|verify} messages.
                     * @param message ListCutoverJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IListCutoverJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCutoverJobsResponse message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.ListCutoverJobsResponse.verify|verify} messages.
                     * @param message ListCutoverJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IListCutoverJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCutoverJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCutoverJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.ListCutoverJobsResponse;

                    /**
                     * Decodes a ListCutoverJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCutoverJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.ListCutoverJobsResponse;

                    /**
                     * Verifies a ListCutoverJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCutoverJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCutoverJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.ListCutoverJobsResponse;

                    /**
                     * Creates a plain object from a ListCutoverJobsResponse message. Also converts values to other types if specified.
                     * @param message ListCutoverJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.ListCutoverJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCutoverJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetCutoverJobRequest. */
                interface IGetCutoverJobRequest {

                    /** GetCutoverJobRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCutoverJobRequest. */
                class GetCutoverJobRequest implements IGetCutoverJobRequest {

                    /**
                     * Constructs a new GetCutoverJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IGetCutoverJobRequest);

                    /** GetCutoverJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCutoverJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCutoverJobRequest instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IGetCutoverJobRequest): google.cloud.vmmigration.v1.GetCutoverJobRequest;

                    /**
                     * Encodes the specified GetCutoverJobRequest message. Does not implicitly {@link google.cloud.vmmigration.v1.GetCutoverJobRequest.verify|verify} messages.
                     * @param message GetCutoverJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IGetCutoverJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCutoverJobRequest message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.GetCutoverJobRequest.verify|verify} messages.
                     * @param message GetCutoverJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IGetCutoverJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCutoverJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCutoverJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.GetCutoverJobRequest;

                    /**
                     * Decodes a GetCutoverJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCutoverJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.GetCutoverJobRequest;

                    /**
                     * Verifies a GetCutoverJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCutoverJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCutoverJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.GetCutoverJobRequest;

                    /**
                     * Creates a plain object from a GetCutoverJobRequest message. Also converts values to other types if specified.
                     * @param message GetCutoverJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.GetCutoverJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCutoverJobRequest to JSON.
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
                    constructor(properties?: google.cloud.vmmigration.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.vmmigration.v1.IOperationMetadata): google.cloud.vmmigration.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.vmmigration.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MigrationError. */
                interface IMigrationError {

                    /** MigrationError code */
                    code?: (google.cloud.vmmigration.v1.MigrationError.ErrorCode|keyof typeof google.cloud.vmmigration.v1.MigrationError.ErrorCode|null);

                    /** MigrationError errorMessage */
                    errorMessage?: (google.rpc.ILocalizedMessage|null);

                    /** MigrationError actionItem */
                    actionItem?: (google.rpc.ILocalizedMessage|null);

                    /** MigrationError helpLinks */
                    helpLinks?: (google.rpc.Help.ILink[]|null);

                    /** MigrationError errorTime */
                    errorTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a MigrationError. */
                class MigrationError implements IMigrationError {

                    /**
                     * Constructs a new MigrationError.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmmigration.v1.IMigrationError);

                    /** MigrationError code. */
                    public code: (google.cloud.vmmigration.v1.MigrationError.ErrorCode|keyof typeof google.cloud.vmmigration.v1.MigrationError.ErrorCode);

                    /** MigrationError errorMessage. */
                    public errorMessage?: (google.rpc.ILocalizedMessage|null);

                    /** MigrationError actionItem. */
                    public actionItem?: (google.rpc.ILocalizedMessage|null);

                    /** MigrationError helpLinks. */
                    public helpLinks: google.rpc.Help.ILink[];

                    /** MigrationError errorTime. */
                    public errorTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new MigrationError instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MigrationError instance
                     */
                    public static create(properties?: google.cloud.vmmigration.v1.IMigrationError): google.cloud.vmmigration.v1.MigrationError;

                    /**
                     * Encodes the specified MigrationError message. Does not implicitly {@link google.cloud.vmmigration.v1.MigrationError.verify|verify} messages.
                     * @param message MigrationError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmmigration.v1.IMigrationError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MigrationError message, length delimited. Does not implicitly {@link google.cloud.vmmigration.v1.MigrationError.verify|verify} messages.
                     * @param message MigrationError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmmigration.v1.IMigrationError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MigrationError message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MigrationError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmmigration.v1.MigrationError;

                    /**
                     * Decodes a MigrationError message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MigrationError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmmigration.v1.MigrationError;

                    /**
                     * Verifies a MigrationError message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MigrationError message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MigrationError
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmmigration.v1.MigrationError;

                    /**
                     * Creates a plain object from a MigrationError message. Also converts values to other types if specified.
                     * @param message MigrationError
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmmigration.v1.MigrationError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MigrationError to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace MigrationError {

                    /** ErrorCode enum. */
                    enum ErrorCode {
                        ERROR_CODE_UNSPECIFIED = 0,
                        UNKNOWN_ERROR = 1,
                        SOURCE_VALIDATION_ERROR = 2,
                        SOURCE_REPLICATION_ERROR = 3,
                        TARGET_REPLICATION_ERROR = 4,
                        OS_ADAPTATION_ERROR = 5,
                        CLONE_ERROR = 6,
                        CUTOVER_ERROR = 7,
                        UTILIZATION_REPORT_ERROR = 8
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

        /** Properties of a RetryInfo. */
        interface IRetryInfo {

            /** RetryInfo retryDelay */
            retryDelay?: (google.protobuf.IDuration|null);
        }

        /** Represents a RetryInfo. */
        class RetryInfo implements IRetryInfo {

            /**
             * Constructs a new RetryInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IRetryInfo);

            /** RetryInfo retryDelay. */
            public retryDelay?: (google.protobuf.IDuration|null);

            /**
             * Creates a new RetryInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RetryInfo instance
             */
            public static create(properties?: google.rpc.IRetryInfo): google.rpc.RetryInfo;

            /**
             * Encodes the specified RetryInfo message. Does not implicitly {@link google.rpc.RetryInfo.verify|verify} messages.
             * @param message RetryInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IRetryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RetryInfo message, length delimited. Does not implicitly {@link google.rpc.RetryInfo.verify|verify} messages.
             * @param message RetryInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IRetryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RetryInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RetryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.RetryInfo;

            /**
             * Decodes a RetryInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RetryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.RetryInfo;

            /**
             * Verifies a RetryInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RetryInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RetryInfo
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.RetryInfo;

            /**
             * Creates a plain object from a RetryInfo message. Also converts values to other types if specified.
             * @param message RetryInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.RetryInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RetryInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DebugInfo. */
        interface IDebugInfo {

            /** DebugInfo stackEntries */
            stackEntries?: (string[]|null);

            /** DebugInfo detail */
            detail?: (string|null);
        }

        /** Represents a DebugInfo. */
        class DebugInfo implements IDebugInfo {

            /**
             * Constructs a new DebugInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IDebugInfo);

            /** DebugInfo stackEntries. */
            public stackEntries: string[];

            /** DebugInfo detail. */
            public detail: string;

            /**
             * Creates a new DebugInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DebugInfo instance
             */
            public static create(properties?: google.rpc.IDebugInfo): google.rpc.DebugInfo;

            /**
             * Encodes the specified DebugInfo message. Does not implicitly {@link google.rpc.DebugInfo.verify|verify} messages.
             * @param message DebugInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IDebugInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DebugInfo message, length delimited. Does not implicitly {@link google.rpc.DebugInfo.verify|verify} messages.
             * @param message DebugInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IDebugInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DebugInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DebugInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.DebugInfo;

            /**
             * Decodes a DebugInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DebugInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.DebugInfo;

            /**
             * Verifies a DebugInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DebugInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DebugInfo
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.DebugInfo;

            /**
             * Creates a plain object from a DebugInfo message. Also converts values to other types if specified.
             * @param message DebugInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.DebugInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DebugInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QuotaFailure. */
        interface IQuotaFailure {

            /** QuotaFailure violations */
            violations?: (google.rpc.QuotaFailure.IViolation[]|null);
        }

        /** Represents a QuotaFailure. */
        class QuotaFailure implements IQuotaFailure {

            /**
             * Constructs a new QuotaFailure.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IQuotaFailure);

            /** QuotaFailure violations. */
            public violations: google.rpc.QuotaFailure.IViolation[];

            /**
             * Creates a new QuotaFailure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QuotaFailure instance
             */
            public static create(properties?: google.rpc.IQuotaFailure): google.rpc.QuotaFailure;

            /**
             * Encodes the specified QuotaFailure message. Does not implicitly {@link google.rpc.QuotaFailure.verify|verify} messages.
             * @param message QuotaFailure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IQuotaFailure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QuotaFailure message, length delimited. Does not implicitly {@link google.rpc.QuotaFailure.verify|verify} messages.
             * @param message QuotaFailure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IQuotaFailure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QuotaFailure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QuotaFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.QuotaFailure;

            /**
             * Decodes a QuotaFailure message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QuotaFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.QuotaFailure;

            /**
             * Verifies a QuotaFailure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QuotaFailure message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QuotaFailure
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.QuotaFailure;

            /**
             * Creates a plain object from a QuotaFailure message. Also converts values to other types if specified.
             * @param message QuotaFailure
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.QuotaFailure, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QuotaFailure to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace QuotaFailure {

            /** Properties of a Violation. */
            interface IViolation {

                /** Violation subject */
                subject?: (string|null);

                /** Violation description */
                description?: (string|null);
            }

            /** Represents a Violation. */
            class Violation implements IViolation {

                /**
                 * Constructs a new Violation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.rpc.QuotaFailure.IViolation);

                /** Violation subject. */
                public subject: string;

                /** Violation description. */
                public description: string;

                /**
                 * Creates a new Violation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Violation instance
                 */
                public static create(properties?: google.rpc.QuotaFailure.IViolation): google.rpc.QuotaFailure.Violation;

                /**
                 * Encodes the specified Violation message. Does not implicitly {@link google.rpc.QuotaFailure.Violation.verify|verify} messages.
                 * @param message Violation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.rpc.QuotaFailure.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Violation message, length delimited. Does not implicitly {@link google.rpc.QuotaFailure.Violation.verify|verify} messages.
                 * @param message Violation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.rpc.QuotaFailure.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Violation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.QuotaFailure.Violation;

                /**
                 * Decodes a Violation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.QuotaFailure.Violation;

                /**
                 * Verifies a Violation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Violation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Violation
                 */
                public static fromObject(object: { [k: string]: any }): google.rpc.QuotaFailure.Violation;

                /**
                 * Creates a plain object from a Violation message. Also converts values to other types if specified.
                 * @param message Violation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.rpc.QuotaFailure.Violation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Violation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ErrorInfo. */
        interface IErrorInfo {

            /** ErrorInfo reason */
            reason?: (string|null);

            /** ErrorInfo domain */
            domain?: (string|null);

            /** ErrorInfo metadata */
            metadata?: ({ [k: string]: string }|null);
        }

        /** Represents an ErrorInfo. */
        class ErrorInfo implements IErrorInfo {

            /**
             * Constructs a new ErrorInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IErrorInfo);

            /** ErrorInfo reason. */
            public reason: string;

            /** ErrorInfo domain. */
            public domain: string;

            /** ErrorInfo metadata. */
            public metadata: { [k: string]: string };

            /**
             * Creates a new ErrorInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ErrorInfo instance
             */
            public static create(properties?: google.rpc.IErrorInfo): google.rpc.ErrorInfo;

            /**
             * Encodes the specified ErrorInfo message. Does not implicitly {@link google.rpc.ErrorInfo.verify|verify} messages.
             * @param message ErrorInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link google.rpc.ErrorInfo.verify|verify} messages.
             * @param message ErrorInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ErrorInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.ErrorInfo;

            /**
             * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.ErrorInfo;

            /**
             * Verifies an ErrorInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ErrorInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ErrorInfo
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.ErrorInfo;

            /**
             * Creates a plain object from an ErrorInfo message. Also converts values to other types if specified.
             * @param message ErrorInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.ErrorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ErrorInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PreconditionFailure. */
        interface IPreconditionFailure {

            /** PreconditionFailure violations */
            violations?: (google.rpc.PreconditionFailure.IViolation[]|null);
        }

        /** Represents a PreconditionFailure. */
        class PreconditionFailure implements IPreconditionFailure {

            /**
             * Constructs a new PreconditionFailure.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IPreconditionFailure);

            /** PreconditionFailure violations. */
            public violations: google.rpc.PreconditionFailure.IViolation[];

            /**
             * Creates a new PreconditionFailure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PreconditionFailure instance
             */
            public static create(properties?: google.rpc.IPreconditionFailure): google.rpc.PreconditionFailure;

            /**
             * Encodes the specified PreconditionFailure message. Does not implicitly {@link google.rpc.PreconditionFailure.verify|verify} messages.
             * @param message PreconditionFailure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IPreconditionFailure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PreconditionFailure message, length delimited. Does not implicitly {@link google.rpc.PreconditionFailure.verify|verify} messages.
             * @param message PreconditionFailure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IPreconditionFailure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PreconditionFailure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PreconditionFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.PreconditionFailure;

            /**
             * Decodes a PreconditionFailure message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PreconditionFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.PreconditionFailure;

            /**
             * Verifies a PreconditionFailure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PreconditionFailure message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PreconditionFailure
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.PreconditionFailure;

            /**
             * Creates a plain object from a PreconditionFailure message. Also converts values to other types if specified.
             * @param message PreconditionFailure
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.PreconditionFailure, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PreconditionFailure to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace PreconditionFailure {

            /** Properties of a Violation. */
            interface IViolation {

                /** Violation type */
                type?: (string|null);

                /** Violation subject */
                subject?: (string|null);

                /** Violation description */
                description?: (string|null);
            }

            /** Represents a Violation. */
            class Violation implements IViolation {

                /**
                 * Constructs a new Violation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.rpc.PreconditionFailure.IViolation);

                /** Violation type. */
                public type: string;

                /** Violation subject. */
                public subject: string;

                /** Violation description. */
                public description: string;

                /**
                 * Creates a new Violation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Violation instance
                 */
                public static create(properties?: google.rpc.PreconditionFailure.IViolation): google.rpc.PreconditionFailure.Violation;

                /**
                 * Encodes the specified Violation message. Does not implicitly {@link google.rpc.PreconditionFailure.Violation.verify|verify} messages.
                 * @param message Violation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.rpc.PreconditionFailure.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Violation message, length delimited. Does not implicitly {@link google.rpc.PreconditionFailure.Violation.verify|verify} messages.
                 * @param message Violation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.rpc.PreconditionFailure.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Violation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.PreconditionFailure.Violation;

                /**
                 * Decodes a Violation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.PreconditionFailure.Violation;

                /**
                 * Verifies a Violation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Violation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Violation
                 */
                public static fromObject(object: { [k: string]: any }): google.rpc.PreconditionFailure.Violation;

                /**
                 * Creates a plain object from a Violation message. Also converts values to other types if specified.
                 * @param message Violation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.rpc.PreconditionFailure.Violation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Violation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a BadRequest. */
        interface IBadRequest {

            /** BadRequest fieldViolations */
            fieldViolations?: (google.rpc.BadRequest.IFieldViolation[]|null);
        }

        /** Represents a BadRequest. */
        class BadRequest implements IBadRequest {

            /**
             * Constructs a new BadRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IBadRequest);

            /** BadRequest fieldViolations. */
            public fieldViolations: google.rpc.BadRequest.IFieldViolation[];

            /**
             * Creates a new BadRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BadRequest instance
             */
            public static create(properties?: google.rpc.IBadRequest): google.rpc.BadRequest;

            /**
             * Encodes the specified BadRequest message. Does not implicitly {@link google.rpc.BadRequest.verify|verify} messages.
             * @param message BadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IBadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BadRequest message, length delimited. Does not implicitly {@link google.rpc.BadRequest.verify|verify} messages.
             * @param message BadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IBadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BadRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.BadRequest;

            /**
             * Decodes a BadRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.BadRequest;

            /**
             * Verifies a BadRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BadRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BadRequest
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.BadRequest;

            /**
             * Creates a plain object from a BadRequest message. Also converts values to other types if specified.
             * @param message BadRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.BadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BadRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace BadRequest {

            /** Properties of a FieldViolation. */
            interface IFieldViolation {

                /** FieldViolation field */
                field?: (string|null);

                /** FieldViolation description */
                description?: (string|null);
            }

            /** Represents a FieldViolation. */
            class FieldViolation implements IFieldViolation {

                /**
                 * Constructs a new FieldViolation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.rpc.BadRequest.IFieldViolation);

                /** FieldViolation field. */
                public field: string;

                /** FieldViolation description. */
                public description: string;

                /**
                 * Creates a new FieldViolation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FieldViolation instance
                 */
                public static create(properties?: google.rpc.BadRequest.IFieldViolation): google.rpc.BadRequest.FieldViolation;

                /**
                 * Encodes the specified FieldViolation message. Does not implicitly {@link google.rpc.BadRequest.FieldViolation.verify|verify} messages.
                 * @param message FieldViolation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.rpc.BadRequest.IFieldViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FieldViolation message, length delimited. Does not implicitly {@link google.rpc.BadRequest.FieldViolation.verify|verify} messages.
                 * @param message FieldViolation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.rpc.BadRequest.IFieldViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FieldViolation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FieldViolation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.BadRequest.FieldViolation;

                /**
                 * Decodes a FieldViolation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FieldViolation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.BadRequest.FieldViolation;

                /**
                 * Verifies a FieldViolation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FieldViolation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FieldViolation
                 */
                public static fromObject(object: { [k: string]: any }): google.rpc.BadRequest.FieldViolation;

                /**
                 * Creates a plain object from a FieldViolation message. Also converts values to other types if specified.
                 * @param message FieldViolation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.rpc.BadRequest.FieldViolation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FieldViolation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a RequestInfo. */
        interface IRequestInfo {

            /** RequestInfo requestId */
            requestId?: (string|null);

            /** RequestInfo servingData */
            servingData?: (string|null);
        }

        /** Represents a RequestInfo. */
        class RequestInfo implements IRequestInfo {

            /**
             * Constructs a new RequestInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IRequestInfo);

            /** RequestInfo requestId. */
            public requestId: string;

            /** RequestInfo servingData. */
            public servingData: string;

            /**
             * Creates a new RequestInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestInfo instance
             */
            public static create(properties?: google.rpc.IRequestInfo): google.rpc.RequestInfo;

            /**
             * Encodes the specified RequestInfo message. Does not implicitly {@link google.rpc.RequestInfo.verify|verify} messages.
             * @param message RequestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IRequestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestInfo message, length delimited. Does not implicitly {@link google.rpc.RequestInfo.verify|verify} messages.
             * @param message RequestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IRequestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.RequestInfo;

            /**
             * Decodes a RequestInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.RequestInfo;

            /**
             * Verifies a RequestInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestInfo
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.RequestInfo;

            /**
             * Creates a plain object from a RequestInfo message. Also converts values to other types if specified.
             * @param message RequestInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.RequestInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResourceInfo. */
        interface IResourceInfo {

            /** ResourceInfo resourceType */
            resourceType?: (string|null);

            /** ResourceInfo resourceName */
            resourceName?: (string|null);

            /** ResourceInfo owner */
            owner?: (string|null);

            /** ResourceInfo description */
            description?: (string|null);
        }

        /** Represents a ResourceInfo. */
        class ResourceInfo implements IResourceInfo {

            /**
             * Constructs a new ResourceInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IResourceInfo);

            /** ResourceInfo resourceType. */
            public resourceType: string;

            /** ResourceInfo resourceName. */
            public resourceName: string;

            /** ResourceInfo owner. */
            public owner: string;

            /** ResourceInfo description. */
            public description: string;

            /**
             * Creates a new ResourceInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceInfo instance
             */
            public static create(properties?: google.rpc.IResourceInfo): google.rpc.ResourceInfo;

            /**
             * Encodes the specified ResourceInfo message. Does not implicitly {@link google.rpc.ResourceInfo.verify|verify} messages.
             * @param message ResourceInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IResourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceInfo message, length delimited. Does not implicitly {@link google.rpc.ResourceInfo.verify|verify} messages.
             * @param message ResourceInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IResourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.ResourceInfo;

            /**
             * Decodes a ResourceInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.ResourceInfo;

            /**
             * Verifies a ResourceInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceInfo
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.ResourceInfo;

            /**
             * Creates a plain object from a ResourceInfo message. Also converts values to other types if specified.
             * @param message ResourceInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.ResourceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Help. */
        interface IHelp {

            /** Help links */
            links?: (google.rpc.Help.ILink[]|null);
        }

        /** Represents a Help. */
        class Help implements IHelp {

            /**
             * Constructs a new Help.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IHelp);

            /** Help links. */
            public links: google.rpc.Help.ILink[];

            /**
             * Creates a new Help instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Help instance
             */
            public static create(properties?: google.rpc.IHelp): google.rpc.Help;

            /**
             * Encodes the specified Help message. Does not implicitly {@link google.rpc.Help.verify|verify} messages.
             * @param message Help message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IHelp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Help message, length delimited. Does not implicitly {@link google.rpc.Help.verify|verify} messages.
             * @param message Help message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IHelp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Help message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Help
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Help;

            /**
             * Decodes a Help message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Help
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Help;

            /**
             * Verifies a Help message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Help message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Help
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Help;

            /**
             * Creates a plain object from a Help message. Also converts values to other types if specified.
             * @param message Help
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Help, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Help to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Help {

            /** Properties of a Link. */
            interface ILink {

                /** Link description */
                description?: (string|null);

                /** Link url */
                url?: (string|null);
            }

            /** Represents a Link. */
            class Link implements ILink {

                /**
                 * Constructs a new Link.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.rpc.Help.ILink);

                /** Link description. */
                public description: string;

                /** Link url. */
                public url: string;

                /**
                 * Creates a new Link instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Link instance
                 */
                public static create(properties?: google.rpc.Help.ILink): google.rpc.Help.Link;

                /**
                 * Encodes the specified Link message. Does not implicitly {@link google.rpc.Help.Link.verify|verify} messages.
                 * @param message Link message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.rpc.Help.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Link message, length delimited. Does not implicitly {@link google.rpc.Help.Link.verify|verify} messages.
                 * @param message Link message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.rpc.Help.ILink, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Link message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Link
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Help.Link;

                /**
                 * Decodes a Link message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Link
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Help.Link;

                /**
                 * Verifies a Link message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Link message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Link
                 */
                public static fromObject(object: { [k: string]: any }): google.rpc.Help.Link;

                /**
                 * Creates a plain object from a Link message. Also converts values to other types if specified.
                 * @param message Link
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.rpc.Help.Link, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Link to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a LocalizedMessage. */
        interface ILocalizedMessage {

            /** LocalizedMessage locale */
            locale?: (string|null);

            /** LocalizedMessage message */
            message?: (string|null);
        }

        /** Represents a LocalizedMessage. */
        class LocalizedMessage implements ILocalizedMessage {

            /**
             * Constructs a new LocalizedMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.ILocalizedMessage);

            /** LocalizedMessage locale. */
            public locale: string;

            /** LocalizedMessage message. */
            public message: string;

            /**
             * Creates a new LocalizedMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LocalizedMessage instance
             */
            public static create(properties?: google.rpc.ILocalizedMessage): google.rpc.LocalizedMessage;

            /**
             * Encodes the specified LocalizedMessage message. Does not implicitly {@link google.rpc.LocalizedMessage.verify|verify} messages.
             * @param message LocalizedMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.ILocalizedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LocalizedMessage message, length delimited. Does not implicitly {@link google.rpc.LocalizedMessage.verify|verify} messages.
             * @param message LocalizedMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.ILocalizedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LocalizedMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LocalizedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.LocalizedMessage;

            /**
             * Decodes a LocalizedMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LocalizedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.LocalizedMessage;

            /**
             * Verifies a LocalizedMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LocalizedMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LocalizedMessage
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.LocalizedMessage;

            /**
             * Creates a plain object from a LocalizedMessage message. Also converts values to other types if specified.
             * @param message LocalizedMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.LocalizedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LocalizedMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
