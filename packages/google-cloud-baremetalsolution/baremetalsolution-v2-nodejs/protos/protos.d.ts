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

        /** Namespace baremetalsolution. */
        namespace baremetalsolution {

            /** Namespace v2. */
            namespace v2 {

                /** Represents a BareMetalSolution */
                class BareMetalSolution extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new BareMetalSolution service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new BareMetalSolution service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BareMetalSolution;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInstancesResponse
                     */
                    public listInstances(request: google.cloud.baremetalsolution.v2.IListInstancesRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.ListInstancesCallback): void;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @returns Promise
                     */
                    public listInstances(request: google.cloud.baremetalsolution.v2.IListInstancesRequest): Promise<google.cloud.baremetalsolution.v2.ListInstancesResponse>;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Instance
                     */
                    public getInstance(request: google.cloud.baremetalsolution.v2.IGetInstanceRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.GetInstanceCallback): void;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public getInstance(request: google.cloud.baremetalsolution.v2.IGetInstanceRequest): Promise<google.cloud.baremetalsolution.v2.Instance>;

                    /**
                     * Calls UpdateInstance.
                     * @param request UpdateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateInstance(request: google.cloud.baremetalsolution.v2.IUpdateInstanceRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.UpdateInstanceCallback): void;

                    /**
                     * Calls UpdateInstance.
                     * @param request UpdateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public updateInstance(request: google.cloud.baremetalsolution.v2.IUpdateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RenameInstance.
                     * @param request RenameInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Instance
                     */
                    public renameInstance(request: google.cloud.baremetalsolution.v2.IRenameInstanceRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.RenameInstanceCallback): void;

                    /**
                     * Calls RenameInstance.
                     * @param request RenameInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public renameInstance(request: google.cloud.baremetalsolution.v2.IRenameInstanceRequest): Promise<google.cloud.baremetalsolution.v2.Instance>;

                    /**
                     * Calls ResetInstance.
                     * @param request ResetInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public resetInstance(request: google.cloud.baremetalsolution.v2.IResetInstanceRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.ResetInstanceCallback): void;

                    /**
                     * Calls ResetInstance.
                     * @param request ResetInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public resetInstance(request: google.cloud.baremetalsolution.v2.IResetInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartInstance.
                     * @param request StartInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startInstance(request: google.cloud.baremetalsolution.v2.IStartInstanceRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.StartInstanceCallback): void;

                    /**
                     * Calls StartInstance.
                     * @param request StartInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public startInstance(request: google.cloud.baremetalsolution.v2.IStartInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StopInstance.
                     * @param request StopInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopInstance(request: google.cloud.baremetalsolution.v2.IStopInstanceRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.StopInstanceCallback): void;

                    /**
                     * Calls StopInstance.
                     * @param request StopInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public stopInstance(request: google.cloud.baremetalsolution.v2.IStopInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls EnableInteractiveSerialConsole.
                     * @param request EnableInteractiveSerialConsoleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public enableInteractiveSerialConsole(request: google.cloud.baremetalsolution.v2.IEnableInteractiveSerialConsoleRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.EnableInteractiveSerialConsoleCallback): void;

                    /**
                     * Calls EnableInteractiveSerialConsole.
                     * @param request EnableInteractiveSerialConsoleRequest message or plain object
                     * @returns Promise
                     */
                    public enableInteractiveSerialConsole(request: google.cloud.baremetalsolution.v2.IEnableInteractiveSerialConsoleRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DisableInteractiveSerialConsole.
                     * @param request DisableInteractiveSerialConsoleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public disableInteractiveSerialConsole(request: google.cloud.baremetalsolution.v2.IDisableInteractiveSerialConsoleRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.DisableInteractiveSerialConsoleCallback): void;

                    /**
                     * Calls DisableInteractiveSerialConsole.
                     * @param request DisableInteractiveSerialConsoleRequest message or plain object
                     * @returns Promise
                     */
                    public disableInteractiveSerialConsole(request: google.cloud.baremetalsolution.v2.IDisableInteractiveSerialConsoleRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DetachLun.
                     * @param request DetachLunRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public detachLun(request: google.cloud.baremetalsolution.v2.IDetachLunRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.DetachLunCallback): void;

                    /**
                     * Calls DetachLun.
                     * @param request DetachLunRequest message or plain object
                     * @returns Promise
                     */
                    public detachLun(request: google.cloud.baremetalsolution.v2.IDetachLunRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListSSHKeys.
                     * @param request ListSSHKeysRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSSHKeysResponse
                     */
                    public listSSHKeys(request: google.cloud.baremetalsolution.v2.IListSSHKeysRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.ListSSHKeysCallback): void;

                    /**
                     * Calls ListSSHKeys.
                     * @param request ListSSHKeysRequest message or plain object
                     * @returns Promise
                     */
                    public listSSHKeys(request: google.cloud.baremetalsolution.v2.IListSSHKeysRequest): Promise<google.cloud.baremetalsolution.v2.ListSSHKeysResponse>;

                    /**
                     * Calls CreateSSHKey.
                     * @param request CreateSSHKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SSHKey
                     */
                    public createSSHKey(request: google.cloud.baremetalsolution.v2.ICreateSSHKeyRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.CreateSSHKeyCallback): void;

                    /**
                     * Calls CreateSSHKey.
                     * @param request CreateSSHKeyRequest message or plain object
                     * @returns Promise
                     */
                    public createSSHKey(request: google.cloud.baremetalsolution.v2.ICreateSSHKeyRequest): Promise<google.cloud.baremetalsolution.v2.SSHKey>;

                    /**
                     * Calls DeleteSSHKey.
                     * @param request DeleteSSHKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteSSHKey(request: google.cloud.baremetalsolution.v2.IDeleteSSHKeyRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.DeleteSSHKeyCallback): void;

                    /**
                     * Calls DeleteSSHKey.
                     * @param request DeleteSSHKeyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteSSHKey(request: google.cloud.baremetalsolution.v2.IDeleteSSHKeyRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListVolumes.
                     * @param request ListVolumesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListVolumesResponse
                     */
                    public listVolumes(request: google.cloud.baremetalsolution.v2.IListVolumesRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.ListVolumesCallback): void;

                    /**
                     * Calls ListVolumes.
                     * @param request ListVolumesRequest message or plain object
                     * @returns Promise
                     */
                    public listVolumes(request: google.cloud.baremetalsolution.v2.IListVolumesRequest): Promise<google.cloud.baremetalsolution.v2.ListVolumesResponse>;

                    /**
                     * Calls GetVolume.
                     * @param request GetVolumeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Volume
                     */
                    public getVolume(request: google.cloud.baremetalsolution.v2.IGetVolumeRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.GetVolumeCallback): void;

                    /**
                     * Calls GetVolume.
                     * @param request GetVolumeRequest message or plain object
                     * @returns Promise
                     */
                    public getVolume(request: google.cloud.baremetalsolution.v2.IGetVolumeRequest): Promise<google.cloud.baremetalsolution.v2.Volume>;

                    /**
                     * Calls UpdateVolume.
                     * @param request UpdateVolumeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateVolume(request: google.cloud.baremetalsolution.v2.IUpdateVolumeRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.UpdateVolumeCallback): void;

                    /**
                     * Calls UpdateVolume.
                     * @param request UpdateVolumeRequest message or plain object
                     * @returns Promise
                     */
                    public updateVolume(request: google.cloud.baremetalsolution.v2.IUpdateVolumeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RenameVolume.
                     * @param request RenameVolumeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Volume
                     */
                    public renameVolume(request: google.cloud.baremetalsolution.v2.IRenameVolumeRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.RenameVolumeCallback): void;

                    /**
                     * Calls RenameVolume.
                     * @param request RenameVolumeRequest message or plain object
                     * @returns Promise
                     */
                    public renameVolume(request: google.cloud.baremetalsolution.v2.IRenameVolumeRequest): Promise<google.cloud.baremetalsolution.v2.Volume>;

                    /**
                     * Calls EvictVolume.
                     * @param request EvictVolumeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public evictVolume(request: google.cloud.baremetalsolution.v2.IEvictVolumeRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.EvictVolumeCallback): void;

                    /**
                     * Calls EvictVolume.
                     * @param request EvictVolumeRequest message or plain object
                     * @returns Promise
                     */
                    public evictVolume(request: google.cloud.baremetalsolution.v2.IEvictVolumeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ResizeVolume.
                     * @param request ResizeVolumeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public resizeVolume(request: google.cloud.baremetalsolution.v2.IResizeVolumeRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.ResizeVolumeCallback): void;

                    /**
                     * Calls ResizeVolume.
                     * @param request ResizeVolumeRequest message or plain object
                     * @returns Promise
                     */
                    public resizeVolume(request: google.cloud.baremetalsolution.v2.IResizeVolumeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListNetworks.
                     * @param request ListNetworksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListNetworksResponse
                     */
                    public listNetworks(request: google.cloud.baremetalsolution.v2.IListNetworksRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.ListNetworksCallback): void;

                    /**
                     * Calls ListNetworks.
                     * @param request ListNetworksRequest message or plain object
                     * @returns Promise
                     */
                    public listNetworks(request: google.cloud.baremetalsolution.v2.IListNetworksRequest): Promise<google.cloud.baremetalsolution.v2.ListNetworksResponse>;

                    /**
                     * Calls ListNetworkUsage.
                     * @param request ListNetworkUsageRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListNetworkUsageResponse
                     */
                    public listNetworkUsage(request: google.cloud.baremetalsolution.v2.IListNetworkUsageRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.ListNetworkUsageCallback): void;

                    /**
                     * Calls ListNetworkUsage.
                     * @param request ListNetworkUsageRequest message or plain object
                     * @returns Promise
                     */
                    public listNetworkUsage(request: google.cloud.baremetalsolution.v2.IListNetworkUsageRequest): Promise<google.cloud.baremetalsolution.v2.ListNetworkUsageResponse>;

                    /**
                     * Calls GetNetwork.
                     * @param request GetNetworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Network
                     */
                    public getNetwork(request: google.cloud.baremetalsolution.v2.IGetNetworkRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.GetNetworkCallback): void;

                    /**
                     * Calls GetNetwork.
                     * @param request GetNetworkRequest message or plain object
                     * @returns Promise
                     */
                    public getNetwork(request: google.cloud.baremetalsolution.v2.IGetNetworkRequest): Promise<google.cloud.baremetalsolution.v2.Network>;

                    /**
                     * Calls UpdateNetwork.
                     * @param request UpdateNetworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateNetwork(request: google.cloud.baremetalsolution.v2.IUpdateNetworkRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.UpdateNetworkCallback): void;

                    /**
                     * Calls UpdateNetwork.
                     * @param request UpdateNetworkRequest message or plain object
                     * @returns Promise
                     */
                    public updateNetwork(request: google.cloud.baremetalsolution.v2.IUpdateNetworkRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateVolumeSnapshot.
                     * @param request CreateVolumeSnapshotRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and VolumeSnapshot
                     */
                    public createVolumeSnapshot(request: google.cloud.baremetalsolution.v2.ICreateVolumeSnapshotRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.CreateVolumeSnapshotCallback): void;

                    /**
                     * Calls CreateVolumeSnapshot.
                     * @param request CreateVolumeSnapshotRequest message or plain object
                     * @returns Promise
                     */
                    public createVolumeSnapshot(request: google.cloud.baremetalsolution.v2.ICreateVolumeSnapshotRequest): Promise<google.cloud.baremetalsolution.v2.VolumeSnapshot>;

                    /**
                     * Calls RestoreVolumeSnapshot.
                     * @param request RestoreVolumeSnapshotRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restoreVolumeSnapshot(request: google.cloud.baremetalsolution.v2.IRestoreVolumeSnapshotRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.RestoreVolumeSnapshotCallback): void;

                    /**
                     * Calls RestoreVolumeSnapshot.
                     * @param request RestoreVolumeSnapshotRequest message or plain object
                     * @returns Promise
                     */
                    public restoreVolumeSnapshot(request: google.cloud.baremetalsolution.v2.IRestoreVolumeSnapshotRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteVolumeSnapshot.
                     * @param request DeleteVolumeSnapshotRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteVolumeSnapshot(request: google.cloud.baremetalsolution.v2.IDeleteVolumeSnapshotRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.DeleteVolumeSnapshotCallback): void;

                    /**
                     * Calls DeleteVolumeSnapshot.
                     * @param request DeleteVolumeSnapshotRequest message or plain object
                     * @returns Promise
                     */
                    public deleteVolumeSnapshot(request: google.cloud.baremetalsolution.v2.IDeleteVolumeSnapshotRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetVolumeSnapshot.
                     * @param request GetVolumeSnapshotRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and VolumeSnapshot
                     */
                    public getVolumeSnapshot(request: google.cloud.baremetalsolution.v2.IGetVolumeSnapshotRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.GetVolumeSnapshotCallback): void;

                    /**
                     * Calls GetVolumeSnapshot.
                     * @param request GetVolumeSnapshotRequest message or plain object
                     * @returns Promise
                     */
                    public getVolumeSnapshot(request: google.cloud.baremetalsolution.v2.IGetVolumeSnapshotRequest): Promise<google.cloud.baremetalsolution.v2.VolumeSnapshot>;

                    /**
                     * Calls ListVolumeSnapshots.
                     * @param request ListVolumeSnapshotsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListVolumeSnapshotsResponse
                     */
                    public listVolumeSnapshots(request: google.cloud.baremetalsolution.v2.IListVolumeSnapshotsRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.ListVolumeSnapshotsCallback): void;

                    /**
                     * Calls ListVolumeSnapshots.
                     * @param request ListVolumeSnapshotsRequest message or plain object
                     * @returns Promise
                     */
                    public listVolumeSnapshots(request: google.cloud.baremetalsolution.v2.IListVolumeSnapshotsRequest): Promise<google.cloud.baremetalsolution.v2.ListVolumeSnapshotsResponse>;

                    /**
                     * Calls GetLun.
                     * @param request GetLunRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Lun
                     */
                    public getLun(request: google.cloud.baremetalsolution.v2.IGetLunRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.GetLunCallback): void;

                    /**
                     * Calls GetLun.
                     * @param request GetLunRequest message or plain object
                     * @returns Promise
                     */
                    public getLun(request: google.cloud.baremetalsolution.v2.IGetLunRequest): Promise<google.cloud.baremetalsolution.v2.Lun>;

                    /**
                     * Calls ListLuns.
                     * @param request ListLunsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListLunsResponse
                     */
                    public listLuns(request: google.cloud.baremetalsolution.v2.IListLunsRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.ListLunsCallback): void;

                    /**
                     * Calls ListLuns.
                     * @param request ListLunsRequest message or plain object
                     * @returns Promise
                     */
                    public listLuns(request: google.cloud.baremetalsolution.v2.IListLunsRequest): Promise<google.cloud.baremetalsolution.v2.ListLunsResponse>;

                    /**
                     * Calls EvictLun.
                     * @param request EvictLunRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public evictLun(request: google.cloud.baremetalsolution.v2.IEvictLunRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.EvictLunCallback): void;

                    /**
                     * Calls EvictLun.
                     * @param request EvictLunRequest message or plain object
                     * @returns Promise
                     */
                    public evictLun(request: google.cloud.baremetalsolution.v2.IEvictLunRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetNfsShare.
                     * @param request GetNfsShareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and NfsShare
                     */
                    public getNfsShare(request: google.cloud.baremetalsolution.v2.IGetNfsShareRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.GetNfsShareCallback): void;

                    /**
                     * Calls GetNfsShare.
                     * @param request GetNfsShareRequest message or plain object
                     * @returns Promise
                     */
                    public getNfsShare(request: google.cloud.baremetalsolution.v2.IGetNfsShareRequest): Promise<google.cloud.baremetalsolution.v2.NfsShare>;

                    /**
                     * Calls ListNfsShares.
                     * @param request ListNfsSharesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListNfsSharesResponse
                     */
                    public listNfsShares(request: google.cloud.baremetalsolution.v2.IListNfsSharesRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.ListNfsSharesCallback): void;

                    /**
                     * Calls ListNfsShares.
                     * @param request ListNfsSharesRequest message or plain object
                     * @returns Promise
                     */
                    public listNfsShares(request: google.cloud.baremetalsolution.v2.IListNfsSharesRequest): Promise<google.cloud.baremetalsolution.v2.ListNfsSharesResponse>;

                    /**
                     * Calls UpdateNfsShare.
                     * @param request UpdateNfsShareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateNfsShare(request: google.cloud.baremetalsolution.v2.IUpdateNfsShareRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.UpdateNfsShareCallback): void;

                    /**
                     * Calls UpdateNfsShare.
                     * @param request UpdateNfsShareRequest message or plain object
                     * @returns Promise
                     */
                    public updateNfsShare(request: google.cloud.baremetalsolution.v2.IUpdateNfsShareRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateNfsShare.
                     * @param request CreateNfsShareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createNfsShare(request: google.cloud.baremetalsolution.v2.ICreateNfsShareRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.CreateNfsShareCallback): void;

                    /**
                     * Calls CreateNfsShare.
                     * @param request CreateNfsShareRequest message or plain object
                     * @returns Promise
                     */
                    public createNfsShare(request: google.cloud.baremetalsolution.v2.ICreateNfsShareRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RenameNfsShare.
                     * @param request RenameNfsShareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and NfsShare
                     */
                    public renameNfsShare(request: google.cloud.baremetalsolution.v2.IRenameNfsShareRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.RenameNfsShareCallback): void;

                    /**
                     * Calls RenameNfsShare.
                     * @param request RenameNfsShareRequest message or plain object
                     * @returns Promise
                     */
                    public renameNfsShare(request: google.cloud.baremetalsolution.v2.IRenameNfsShareRequest): Promise<google.cloud.baremetalsolution.v2.NfsShare>;

                    /**
                     * Calls DeleteNfsShare.
                     * @param request DeleteNfsShareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteNfsShare(request: google.cloud.baremetalsolution.v2.IDeleteNfsShareRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.DeleteNfsShareCallback): void;

                    /**
                     * Calls DeleteNfsShare.
                     * @param request DeleteNfsShareRequest message or plain object
                     * @returns Promise
                     */
                    public deleteNfsShare(request: google.cloud.baremetalsolution.v2.IDeleteNfsShareRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListProvisioningQuotas.
                     * @param request ListProvisioningQuotasRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListProvisioningQuotasResponse
                     */
                    public listProvisioningQuotas(request: google.cloud.baremetalsolution.v2.IListProvisioningQuotasRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.ListProvisioningQuotasCallback): void;

                    /**
                     * Calls ListProvisioningQuotas.
                     * @param request ListProvisioningQuotasRequest message or plain object
                     * @returns Promise
                     */
                    public listProvisioningQuotas(request: google.cloud.baremetalsolution.v2.IListProvisioningQuotasRequest): Promise<google.cloud.baremetalsolution.v2.ListProvisioningQuotasResponse>;

                    /**
                     * Calls SubmitProvisioningConfig.
                     * @param request SubmitProvisioningConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SubmitProvisioningConfigResponse
                     */
                    public submitProvisioningConfig(request: google.cloud.baremetalsolution.v2.ISubmitProvisioningConfigRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.SubmitProvisioningConfigCallback): void;

                    /**
                     * Calls SubmitProvisioningConfig.
                     * @param request SubmitProvisioningConfigRequest message or plain object
                     * @returns Promise
                     */
                    public submitProvisioningConfig(request: google.cloud.baremetalsolution.v2.ISubmitProvisioningConfigRequest): Promise<google.cloud.baremetalsolution.v2.SubmitProvisioningConfigResponse>;

                    /**
                     * Calls GetProvisioningConfig.
                     * @param request GetProvisioningConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ProvisioningConfig
                     */
                    public getProvisioningConfig(request: google.cloud.baremetalsolution.v2.IGetProvisioningConfigRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.GetProvisioningConfigCallback): void;

                    /**
                     * Calls GetProvisioningConfig.
                     * @param request GetProvisioningConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getProvisioningConfig(request: google.cloud.baremetalsolution.v2.IGetProvisioningConfigRequest): Promise<google.cloud.baremetalsolution.v2.ProvisioningConfig>;

                    /**
                     * Calls CreateProvisioningConfig.
                     * @param request CreateProvisioningConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ProvisioningConfig
                     */
                    public createProvisioningConfig(request: google.cloud.baremetalsolution.v2.ICreateProvisioningConfigRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.CreateProvisioningConfigCallback): void;

                    /**
                     * Calls CreateProvisioningConfig.
                     * @param request CreateProvisioningConfigRequest message or plain object
                     * @returns Promise
                     */
                    public createProvisioningConfig(request: google.cloud.baremetalsolution.v2.ICreateProvisioningConfigRequest): Promise<google.cloud.baremetalsolution.v2.ProvisioningConfig>;

                    /**
                     * Calls UpdateProvisioningConfig.
                     * @param request UpdateProvisioningConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ProvisioningConfig
                     */
                    public updateProvisioningConfig(request: google.cloud.baremetalsolution.v2.IUpdateProvisioningConfigRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.UpdateProvisioningConfigCallback): void;

                    /**
                     * Calls UpdateProvisioningConfig.
                     * @param request UpdateProvisioningConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateProvisioningConfig(request: google.cloud.baremetalsolution.v2.IUpdateProvisioningConfigRequest): Promise<google.cloud.baremetalsolution.v2.ProvisioningConfig>;

                    /**
                     * Calls RenameNetwork.
                     * @param request RenameNetworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Network
                     */
                    public renameNetwork(request: google.cloud.baremetalsolution.v2.IRenameNetworkRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.RenameNetworkCallback): void;

                    /**
                     * Calls RenameNetwork.
                     * @param request RenameNetworkRequest message or plain object
                     * @returns Promise
                     */
                    public renameNetwork(request: google.cloud.baremetalsolution.v2.IRenameNetworkRequest): Promise<google.cloud.baremetalsolution.v2.Network>;

                    /**
                     * Calls ListOSImages.
                     * @param request ListOSImagesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListOSImagesResponse
                     */
                    public listOSImages(request: google.cloud.baremetalsolution.v2.IListOSImagesRequest, callback: google.cloud.baremetalsolution.v2.BareMetalSolution.ListOSImagesCallback): void;

                    /**
                     * Calls ListOSImages.
                     * @param request ListOSImagesRequest message or plain object
                     * @returns Promise
                     */
                    public listOSImages(request: google.cloud.baremetalsolution.v2.IListOSImagesRequest): Promise<google.cloud.baremetalsolution.v2.ListOSImagesResponse>;
                }

                namespace BareMetalSolution {

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|listInstances}.
                     * @param error Error, if any
                     * @param [response] ListInstancesResponse
                     */
                    type ListInstancesCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.ListInstancesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|getInstance}.
                     * @param error Error, if any
                     * @param [response] Instance
                     */
                    type GetInstanceCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.Instance) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|updateInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|renameInstance}.
                     * @param error Error, if any
                     * @param [response] Instance
                     */
                    type RenameInstanceCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.Instance) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|resetInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ResetInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|startInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|stopInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|enableInteractiveSerialConsole}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type EnableInteractiveSerialConsoleCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|disableInteractiveSerialConsole}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DisableInteractiveSerialConsoleCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|detachLun}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DetachLunCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|listSSHKeys}.
                     * @param error Error, if any
                     * @param [response] ListSSHKeysResponse
                     */
                    type ListSSHKeysCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.ListSSHKeysResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|createSSHKey}.
                     * @param error Error, if any
                     * @param [response] SSHKey
                     */
                    type CreateSSHKeyCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.SSHKey) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|deleteSSHKey}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteSSHKeyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|listVolumes}.
                     * @param error Error, if any
                     * @param [response] ListVolumesResponse
                     */
                    type ListVolumesCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.ListVolumesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|getVolume}.
                     * @param error Error, if any
                     * @param [response] Volume
                     */
                    type GetVolumeCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.Volume) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|updateVolume}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateVolumeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|renameVolume}.
                     * @param error Error, if any
                     * @param [response] Volume
                     */
                    type RenameVolumeCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.Volume) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|evictVolume}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type EvictVolumeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|resizeVolume}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ResizeVolumeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|listNetworks}.
                     * @param error Error, if any
                     * @param [response] ListNetworksResponse
                     */
                    type ListNetworksCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.ListNetworksResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|listNetworkUsage}.
                     * @param error Error, if any
                     * @param [response] ListNetworkUsageResponse
                     */
                    type ListNetworkUsageCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.ListNetworkUsageResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|getNetwork}.
                     * @param error Error, if any
                     * @param [response] Network
                     */
                    type GetNetworkCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.Network) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|updateNetwork}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateNetworkCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|createVolumeSnapshot}.
                     * @param error Error, if any
                     * @param [response] VolumeSnapshot
                     */
                    type CreateVolumeSnapshotCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.VolumeSnapshot) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|restoreVolumeSnapshot}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestoreVolumeSnapshotCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|deleteVolumeSnapshot}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteVolumeSnapshotCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|getVolumeSnapshot}.
                     * @param error Error, if any
                     * @param [response] VolumeSnapshot
                     */
                    type GetVolumeSnapshotCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.VolumeSnapshot) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|listVolumeSnapshots}.
                     * @param error Error, if any
                     * @param [response] ListVolumeSnapshotsResponse
                     */
                    type ListVolumeSnapshotsCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.ListVolumeSnapshotsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|getLun}.
                     * @param error Error, if any
                     * @param [response] Lun
                     */
                    type GetLunCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.Lun) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|listLuns}.
                     * @param error Error, if any
                     * @param [response] ListLunsResponse
                     */
                    type ListLunsCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.ListLunsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|evictLun}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type EvictLunCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|getNfsShare}.
                     * @param error Error, if any
                     * @param [response] NfsShare
                     */
                    type GetNfsShareCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.NfsShare) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|listNfsShares}.
                     * @param error Error, if any
                     * @param [response] ListNfsSharesResponse
                     */
                    type ListNfsSharesCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.ListNfsSharesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|updateNfsShare}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateNfsShareCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|createNfsShare}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateNfsShareCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|renameNfsShare}.
                     * @param error Error, if any
                     * @param [response] NfsShare
                     */
                    type RenameNfsShareCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.NfsShare) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|deleteNfsShare}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteNfsShareCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|listProvisioningQuotas}.
                     * @param error Error, if any
                     * @param [response] ListProvisioningQuotasResponse
                     */
                    type ListProvisioningQuotasCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.ListProvisioningQuotasResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|submitProvisioningConfig}.
                     * @param error Error, if any
                     * @param [response] SubmitProvisioningConfigResponse
                     */
                    type SubmitProvisioningConfigCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.SubmitProvisioningConfigResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|getProvisioningConfig}.
                     * @param error Error, if any
                     * @param [response] ProvisioningConfig
                     */
                    type GetProvisioningConfigCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.ProvisioningConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|createProvisioningConfig}.
                     * @param error Error, if any
                     * @param [response] ProvisioningConfig
                     */
                    type CreateProvisioningConfigCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.ProvisioningConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|updateProvisioningConfig}.
                     * @param error Error, if any
                     * @param [response] ProvisioningConfig
                     */
                    type UpdateProvisioningConfigCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.ProvisioningConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|renameNetwork}.
                     * @param error Error, if any
                     * @param [response] Network
                     */
                    type RenameNetworkCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.Network) => void;

                    /**
                     * Callback as used by {@link google.cloud.baremetalsolution.v2.BareMetalSolution|listOSImages}.
                     * @param error Error, if any
                     * @param [response] ListOSImagesResponse
                     */
                    type ListOSImagesCallback = (error: (Error|null), response?: google.cloud.baremetalsolution.v2.ListOSImagesResponse) => void;
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
                    constructor(properties?: google.cloud.baremetalsolution.v2.IOperationMetadata);

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
                    public static create(properties?: google.cloud.baremetalsolution.v2.IOperationMetadata): google.cloud.baremetalsolution.v2.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.baremetalsolution.v2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ResetInstanceResponse. */
                interface IResetInstanceResponse {
                }

                /** Represents a ResetInstanceResponse. */
                class ResetInstanceResponse implements IResetInstanceResponse {

                    /**
                     * Constructs a new ResetInstanceResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IResetInstanceResponse);

                    /**
                     * Creates a new ResetInstanceResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResetInstanceResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IResetInstanceResponse): google.cloud.baremetalsolution.v2.ResetInstanceResponse;

                    /**
                     * Encodes the specified ResetInstanceResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ResetInstanceResponse.verify|verify} messages.
                     * @param message ResetInstanceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IResetInstanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResetInstanceResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ResetInstanceResponse.verify|verify} messages.
                     * @param message ResetInstanceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IResetInstanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResetInstanceResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResetInstanceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ResetInstanceResponse;

                    /**
                     * Decodes a ResetInstanceResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResetInstanceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ResetInstanceResponse;

                    /**
                     * Verifies a ResetInstanceResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResetInstanceResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResetInstanceResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ResetInstanceResponse;

                    /**
                     * Creates a plain object from a ResetInstanceResponse message. Also converts values to other types if specified.
                     * @param message ResetInstanceResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ResetInstanceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResetInstanceResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResetInstanceResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Instance. */
                interface IInstance {

                    /** Instance name */
                    name?: (string|null);

                    /** Instance id */
                    id?: (string|null);

                    /** Instance createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instance machineType */
                    machineType?: (string|null);

                    /** Instance state */
                    state?: (google.cloud.baremetalsolution.v2.Instance.State|keyof typeof google.cloud.baremetalsolution.v2.Instance.State|null);

                    /** Instance hyperthreadingEnabled */
                    hyperthreadingEnabled?: (boolean|null);

                    /** Instance labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Instance luns */
                    luns?: (google.cloud.baremetalsolution.v2.ILun[]|null);

                    /** Instance volumes */
                    volumes?: (google.cloud.baremetalsolution.v2.IVolume[]|null);

                    /** Instance networks */
                    networks?: (google.cloud.baremetalsolution.v2.INetwork[]|null);

                    /** Instance interactiveSerialConsoleEnabled */
                    interactiveSerialConsoleEnabled?: (boolean|null);

                    /** Instance osImage */
                    osImage?: (string|null);

                    /** Instance pod */
                    pod?: (string|null);

                    /** Instance networkTemplate */
                    networkTemplate?: (string|null);

                    /** Instance logicalInterfaces */
                    logicalInterfaces?: (google.cloud.baremetalsolution.v2.ILogicalInterface[]|null);

                    /** Instance loginInfo */
                    loginInfo?: (string|null);

                    /** Instance workloadProfile */
                    workloadProfile?: (google.cloud.baremetalsolution.v2.WorkloadProfile|keyof typeof google.cloud.baremetalsolution.v2.WorkloadProfile|null);

                    /** Instance firmwareVersion */
                    firmwareVersion?: (string|null);
                }

                /** Represents an Instance. */
                class Instance implements IInstance {

                    /**
                     * Constructs a new Instance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IInstance);

                    /** Instance name. */
                    public name: string;

                    /** Instance id. */
                    public id: string;

                    /** Instance createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instance machineType. */
                    public machineType: string;

                    /** Instance state. */
                    public state: (google.cloud.baremetalsolution.v2.Instance.State|keyof typeof google.cloud.baremetalsolution.v2.Instance.State);

                    /** Instance hyperthreadingEnabled. */
                    public hyperthreadingEnabled: boolean;

                    /** Instance labels. */
                    public labels: { [k: string]: string };

                    /** Instance luns. */
                    public luns: google.cloud.baremetalsolution.v2.ILun[];

                    /** Instance volumes. */
                    public volumes: google.cloud.baremetalsolution.v2.IVolume[];

                    /** Instance networks. */
                    public networks: google.cloud.baremetalsolution.v2.INetwork[];

                    /** Instance interactiveSerialConsoleEnabled. */
                    public interactiveSerialConsoleEnabled: boolean;

                    /** Instance osImage. */
                    public osImage: string;

                    /** Instance pod. */
                    public pod: string;

                    /** Instance networkTemplate. */
                    public networkTemplate: string;

                    /** Instance logicalInterfaces. */
                    public logicalInterfaces: google.cloud.baremetalsolution.v2.ILogicalInterface[];

                    /** Instance loginInfo. */
                    public loginInfo: string;

                    /** Instance workloadProfile. */
                    public workloadProfile: (google.cloud.baremetalsolution.v2.WorkloadProfile|keyof typeof google.cloud.baremetalsolution.v2.WorkloadProfile);

                    /** Instance firmwareVersion. */
                    public firmwareVersion: string;

                    /**
                     * Creates a new Instance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instance instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IInstance): google.cloud.baremetalsolution.v2.Instance;

                    /**
                     * Encodes the specified Instance message. Does not implicitly {@link google.cloud.baremetalsolution.v2.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instance message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.Instance;

                    /**
                     * Decodes an Instance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.Instance;

                    /**
                     * Verifies an Instance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Instance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Instance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.Instance;

                    /**
                     * Creates a plain object from an Instance message. Also converts values to other types if specified.
                     * @param message Instance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.Instance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Instance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Instance
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Instance {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PROVISIONING = 1,
                        RUNNING = 2,
                        DELETED = 3,
                        UPDATING = 4,
                        STARTING = 5,
                        STOPPING = 6,
                        SHUTDOWN = 7
                    }
                }

                /** Properties of a GetInstanceRequest. */
                interface IGetInstanceRequest {

                    /** GetInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetInstanceRequest. */
                class GetInstanceRequest implements IGetInstanceRequest {

                    /**
                     * Constructs a new GetInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IGetInstanceRequest);

                    /** GetInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IGetInstanceRequest): google.cloud.baremetalsolution.v2.GetInstanceRequest;

                    /**
                     * Encodes the specified GetInstanceRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.GetInstanceRequest;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.GetInstanceRequest;

                    /**
                     * Verifies a GetInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.GetInstanceRequest;

                    /**
                     * Creates a plain object from a GetInstanceRequest message. Also converts values to other types if specified.
                     * @param message GetInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.GetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetInstanceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInstancesRequest. */
                interface IListInstancesRequest {

                    /** ListInstancesRequest parent */
                    parent?: (string|null);

                    /** ListInstancesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInstancesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListInstancesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListInstancesRequest. */
                class ListInstancesRequest implements IListInstancesRequest {

                    /**
                     * Constructs a new ListInstancesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListInstancesRequest);

                    /** ListInstancesRequest parent. */
                    public parent: string;

                    /** ListInstancesRequest pageSize. */
                    public pageSize: number;

                    /** ListInstancesRequest pageToken. */
                    public pageToken: string;

                    /** ListInstancesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListInstancesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListInstancesRequest): google.cloud.baremetalsolution.v2.ListInstancesRequest;

                    /**
                     * Encodes the specified ListInstancesRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListInstancesRequest;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListInstancesRequest;

                    /**
                     * Verifies a ListInstancesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInstancesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInstancesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListInstancesRequest;

                    /**
                     * Creates a plain object from a ListInstancesRequest message. Also converts values to other types if specified.
                     * @param message ListInstancesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListInstancesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstancesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInstancesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInstancesResponse. */
                interface IListInstancesResponse {

                    /** ListInstancesResponse instances */
                    instances?: (google.cloud.baremetalsolution.v2.IInstance[]|null);

                    /** ListInstancesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListInstancesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListInstancesResponse. */
                class ListInstancesResponse implements IListInstancesResponse {

                    /**
                     * Constructs a new ListInstancesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListInstancesResponse);

                    /** ListInstancesResponse instances. */
                    public instances: google.cloud.baremetalsolution.v2.IInstance[];

                    /** ListInstancesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListInstancesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListInstancesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListInstancesResponse): google.cloud.baremetalsolution.v2.ListInstancesResponse;

                    /**
                     * Encodes the specified ListInstancesResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListInstancesResponse;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListInstancesResponse;

                    /**
                     * Verifies a ListInstancesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInstancesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInstancesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListInstancesResponse;

                    /**
                     * Creates a plain object from a ListInstancesResponse message. Also converts values to other types if specified.
                     * @param message ListInstancesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListInstancesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstancesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInstancesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateInstanceRequest. */
                interface IUpdateInstanceRequest {

                    /** UpdateInstanceRequest instance */
                    instance?: (google.cloud.baremetalsolution.v2.IInstance|null);

                    /** UpdateInstanceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateInstanceRequest. */
                class UpdateInstanceRequest implements IUpdateInstanceRequest {

                    /**
                     * Constructs a new UpdateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IUpdateInstanceRequest);

                    /** UpdateInstanceRequest instance. */
                    public instance?: (google.cloud.baremetalsolution.v2.IInstance|null);

                    /** UpdateInstanceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IUpdateInstanceRequest): google.cloud.baremetalsolution.v2.UpdateInstanceRequest;

                    /**
                     * Encodes the specified UpdateInstanceRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.UpdateInstanceRequest.verify|verify} messages.
                     * @param message UpdateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IUpdateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.UpdateInstanceRequest.verify|verify} messages.
                     * @param message UpdateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IUpdateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.UpdateInstanceRequest;

                    /**
                     * Decodes an UpdateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.UpdateInstanceRequest;

                    /**
                     * Verifies an UpdateInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.UpdateInstanceRequest;

                    /**
                     * Creates a plain object from an UpdateInstanceRequest message. Also converts values to other types if specified.
                     * @param message UpdateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.UpdateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateInstanceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RenameInstanceRequest. */
                interface IRenameInstanceRequest {

                    /** RenameInstanceRequest name */
                    name?: (string|null);

                    /** RenameInstanceRequest newInstanceId */
                    newInstanceId?: (string|null);
                }

                /** Represents a RenameInstanceRequest. */
                class RenameInstanceRequest implements IRenameInstanceRequest {

                    /**
                     * Constructs a new RenameInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IRenameInstanceRequest);

                    /** RenameInstanceRequest name. */
                    public name: string;

                    /** RenameInstanceRequest newInstanceId. */
                    public newInstanceId: string;

                    /**
                     * Creates a new RenameInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RenameInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IRenameInstanceRequest): google.cloud.baremetalsolution.v2.RenameInstanceRequest;

                    /**
                     * Encodes the specified RenameInstanceRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.RenameInstanceRequest.verify|verify} messages.
                     * @param message RenameInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IRenameInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RenameInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.RenameInstanceRequest.verify|verify} messages.
                     * @param message RenameInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IRenameInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RenameInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RenameInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.RenameInstanceRequest;

                    /**
                     * Decodes a RenameInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RenameInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.RenameInstanceRequest;

                    /**
                     * Verifies a RenameInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RenameInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RenameInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.RenameInstanceRequest;

                    /**
                     * Creates a plain object from a RenameInstanceRequest message. Also converts values to other types if specified.
                     * @param message RenameInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.RenameInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RenameInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RenameInstanceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResetInstanceRequest. */
                interface IResetInstanceRequest {

                    /** ResetInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a ResetInstanceRequest. */
                class ResetInstanceRequest implements IResetInstanceRequest {

                    /**
                     * Constructs a new ResetInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IResetInstanceRequest);

                    /** ResetInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResetInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResetInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IResetInstanceRequest): google.cloud.baremetalsolution.v2.ResetInstanceRequest;

                    /**
                     * Encodes the specified ResetInstanceRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ResetInstanceRequest.verify|verify} messages.
                     * @param message ResetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IResetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResetInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ResetInstanceRequest.verify|verify} messages.
                     * @param message ResetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IResetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResetInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ResetInstanceRequest;

                    /**
                     * Decodes a ResetInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ResetInstanceRequest;

                    /**
                     * Verifies a ResetInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResetInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResetInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ResetInstanceRequest;

                    /**
                     * Creates a plain object from a ResetInstanceRequest message. Also converts values to other types if specified.
                     * @param message ResetInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ResetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResetInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResetInstanceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StartInstanceRequest. */
                interface IStartInstanceRequest {

                    /** StartInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a StartInstanceRequest. */
                class StartInstanceRequest implements IStartInstanceRequest {

                    /**
                     * Constructs a new StartInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IStartInstanceRequest);

                    /** StartInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new StartInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IStartInstanceRequest): google.cloud.baremetalsolution.v2.StartInstanceRequest;

                    /**
                     * Encodes the specified StartInstanceRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.StartInstanceRequest.verify|verify} messages.
                     * @param message StartInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IStartInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.StartInstanceRequest.verify|verify} messages.
                     * @param message StartInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IStartInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.StartInstanceRequest;

                    /**
                     * Decodes a StartInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.StartInstanceRequest;

                    /**
                     * Verifies a StartInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.StartInstanceRequest;

                    /**
                     * Creates a plain object from a StartInstanceRequest message. Also converts values to other types if specified.
                     * @param message StartInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.StartInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StartInstanceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StartInstanceResponse. */
                interface IStartInstanceResponse {
                }

                /** Represents a StartInstanceResponse. */
                class StartInstanceResponse implements IStartInstanceResponse {

                    /**
                     * Constructs a new StartInstanceResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IStartInstanceResponse);

                    /**
                     * Creates a new StartInstanceResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartInstanceResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IStartInstanceResponse): google.cloud.baremetalsolution.v2.StartInstanceResponse;

                    /**
                     * Encodes the specified StartInstanceResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.StartInstanceResponse.verify|verify} messages.
                     * @param message StartInstanceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IStartInstanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartInstanceResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.StartInstanceResponse.verify|verify} messages.
                     * @param message StartInstanceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IStartInstanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartInstanceResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartInstanceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.StartInstanceResponse;

                    /**
                     * Decodes a StartInstanceResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartInstanceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.StartInstanceResponse;

                    /**
                     * Verifies a StartInstanceResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartInstanceResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartInstanceResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.StartInstanceResponse;

                    /**
                     * Creates a plain object from a StartInstanceResponse message. Also converts values to other types if specified.
                     * @param message StartInstanceResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.StartInstanceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartInstanceResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StartInstanceResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StopInstanceRequest. */
                interface IStopInstanceRequest {

                    /** StopInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a StopInstanceRequest. */
                class StopInstanceRequest implements IStopInstanceRequest {

                    /**
                     * Constructs a new StopInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IStopInstanceRequest);

                    /** StopInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new StopInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IStopInstanceRequest): google.cloud.baremetalsolution.v2.StopInstanceRequest;

                    /**
                     * Encodes the specified StopInstanceRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.StopInstanceRequest.verify|verify} messages.
                     * @param message StopInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IStopInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.StopInstanceRequest.verify|verify} messages.
                     * @param message StopInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IStopInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.StopInstanceRequest;

                    /**
                     * Decodes a StopInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.StopInstanceRequest;

                    /**
                     * Verifies a StopInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.StopInstanceRequest;

                    /**
                     * Creates a plain object from a StopInstanceRequest message. Also converts values to other types if specified.
                     * @param message StopInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.StopInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StopInstanceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StopInstanceResponse. */
                interface IStopInstanceResponse {
                }

                /** Represents a StopInstanceResponse. */
                class StopInstanceResponse implements IStopInstanceResponse {

                    /**
                     * Constructs a new StopInstanceResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IStopInstanceResponse);

                    /**
                     * Creates a new StopInstanceResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopInstanceResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IStopInstanceResponse): google.cloud.baremetalsolution.v2.StopInstanceResponse;

                    /**
                     * Encodes the specified StopInstanceResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.StopInstanceResponse.verify|verify} messages.
                     * @param message StopInstanceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IStopInstanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopInstanceResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.StopInstanceResponse.verify|verify} messages.
                     * @param message StopInstanceResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IStopInstanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopInstanceResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopInstanceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.StopInstanceResponse;

                    /**
                     * Decodes a StopInstanceResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopInstanceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.StopInstanceResponse;

                    /**
                     * Verifies a StopInstanceResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopInstanceResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopInstanceResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.StopInstanceResponse;

                    /**
                     * Creates a plain object from a StopInstanceResponse message. Also converts values to other types if specified.
                     * @param message StopInstanceResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.StopInstanceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopInstanceResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StopInstanceResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EnableInteractiveSerialConsoleRequest. */
                interface IEnableInteractiveSerialConsoleRequest {

                    /** EnableInteractiveSerialConsoleRequest name */
                    name?: (string|null);
                }

                /** Represents an EnableInteractiveSerialConsoleRequest. */
                class EnableInteractiveSerialConsoleRequest implements IEnableInteractiveSerialConsoleRequest {

                    /**
                     * Constructs a new EnableInteractiveSerialConsoleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IEnableInteractiveSerialConsoleRequest);

                    /** EnableInteractiveSerialConsoleRequest name. */
                    public name: string;

                    /**
                     * Creates a new EnableInteractiveSerialConsoleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnableInteractiveSerialConsoleRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IEnableInteractiveSerialConsoleRequest): google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleRequest;

                    /**
                     * Encodes the specified EnableInteractiveSerialConsoleRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleRequest.verify|verify} messages.
                     * @param message EnableInteractiveSerialConsoleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IEnableInteractiveSerialConsoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnableInteractiveSerialConsoleRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleRequest.verify|verify} messages.
                     * @param message EnableInteractiveSerialConsoleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IEnableInteractiveSerialConsoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnableInteractiveSerialConsoleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnableInteractiveSerialConsoleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleRequest;

                    /**
                     * Decodes an EnableInteractiveSerialConsoleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnableInteractiveSerialConsoleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleRequest;

                    /**
                     * Verifies an EnableInteractiveSerialConsoleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EnableInteractiveSerialConsoleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EnableInteractiveSerialConsoleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleRequest;

                    /**
                     * Creates a plain object from an EnableInteractiveSerialConsoleRequest message. Also converts values to other types if specified.
                     * @param message EnableInteractiveSerialConsoleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnableInteractiveSerialConsoleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EnableInteractiveSerialConsoleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EnableInteractiveSerialConsoleResponse. */
                interface IEnableInteractiveSerialConsoleResponse {
                }

                /** Represents an EnableInteractiveSerialConsoleResponse. */
                class EnableInteractiveSerialConsoleResponse implements IEnableInteractiveSerialConsoleResponse {

                    /**
                     * Constructs a new EnableInteractiveSerialConsoleResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IEnableInteractiveSerialConsoleResponse);

                    /**
                     * Creates a new EnableInteractiveSerialConsoleResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnableInteractiveSerialConsoleResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IEnableInteractiveSerialConsoleResponse): google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleResponse;

                    /**
                     * Encodes the specified EnableInteractiveSerialConsoleResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleResponse.verify|verify} messages.
                     * @param message EnableInteractiveSerialConsoleResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IEnableInteractiveSerialConsoleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnableInteractiveSerialConsoleResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleResponse.verify|verify} messages.
                     * @param message EnableInteractiveSerialConsoleResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IEnableInteractiveSerialConsoleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnableInteractiveSerialConsoleResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnableInteractiveSerialConsoleResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleResponse;

                    /**
                     * Decodes an EnableInteractiveSerialConsoleResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnableInteractiveSerialConsoleResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleResponse;

                    /**
                     * Verifies an EnableInteractiveSerialConsoleResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EnableInteractiveSerialConsoleResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EnableInteractiveSerialConsoleResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleResponse;

                    /**
                     * Creates a plain object from an EnableInteractiveSerialConsoleResponse message. Also converts values to other types if specified.
                     * @param message EnableInteractiveSerialConsoleResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.EnableInteractiveSerialConsoleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnableInteractiveSerialConsoleResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EnableInteractiveSerialConsoleResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DisableInteractiveSerialConsoleRequest. */
                interface IDisableInteractiveSerialConsoleRequest {

                    /** DisableInteractiveSerialConsoleRequest name */
                    name?: (string|null);
                }

                /** Represents a DisableInteractiveSerialConsoleRequest. */
                class DisableInteractiveSerialConsoleRequest implements IDisableInteractiveSerialConsoleRequest {

                    /**
                     * Constructs a new DisableInteractiveSerialConsoleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IDisableInteractiveSerialConsoleRequest);

                    /** DisableInteractiveSerialConsoleRequest name. */
                    public name: string;

                    /**
                     * Creates a new DisableInteractiveSerialConsoleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DisableInteractiveSerialConsoleRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IDisableInteractiveSerialConsoleRequest): google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleRequest;

                    /**
                     * Encodes the specified DisableInteractiveSerialConsoleRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleRequest.verify|verify} messages.
                     * @param message DisableInteractiveSerialConsoleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IDisableInteractiveSerialConsoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DisableInteractiveSerialConsoleRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleRequest.verify|verify} messages.
                     * @param message DisableInteractiveSerialConsoleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IDisableInteractiveSerialConsoleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DisableInteractiveSerialConsoleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DisableInteractiveSerialConsoleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleRequest;

                    /**
                     * Decodes a DisableInteractiveSerialConsoleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DisableInteractiveSerialConsoleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleRequest;

                    /**
                     * Verifies a DisableInteractiveSerialConsoleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DisableInteractiveSerialConsoleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DisableInteractiveSerialConsoleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleRequest;

                    /**
                     * Creates a plain object from a DisableInteractiveSerialConsoleRequest message. Also converts values to other types if specified.
                     * @param message DisableInteractiveSerialConsoleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DisableInteractiveSerialConsoleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DisableInteractiveSerialConsoleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DisableInteractiveSerialConsoleResponse. */
                interface IDisableInteractiveSerialConsoleResponse {
                }

                /** Represents a DisableInteractiveSerialConsoleResponse. */
                class DisableInteractiveSerialConsoleResponse implements IDisableInteractiveSerialConsoleResponse {

                    /**
                     * Constructs a new DisableInteractiveSerialConsoleResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IDisableInteractiveSerialConsoleResponse);

                    /**
                     * Creates a new DisableInteractiveSerialConsoleResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DisableInteractiveSerialConsoleResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IDisableInteractiveSerialConsoleResponse): google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleResponse;

                    /**
                     * Encodes the specified DisableInteractiveSerialConsoleResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleResponse.verify|verify} messages.
                     * @param message DisableInteractiveSerialConsoleResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IDisableInteractiveSerialConsoleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DisableInteractiveSerialConsoleResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleResponse.verify|verify} messages.
                     * @param message DisableInteractiveSerialConsoleResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IDisableInteractiveSerialConsoleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DisableInteractiveSerialConsoleResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DisableInteractiveSerialConsoleResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleResponse;

                    /**
                     * Decodes a DisableInteractiveSerialConsoleResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DisableInteractiveSerialConsoleResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleResponse;

                    /**
                     * Verifies a DisableInteractiveSerialConsoleResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DisableInteractiveSerialConsoleResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DisableInteractiveSerialConsoleResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleResponse;

                    /**
                     * Creates a plain object from a DisableInteractiveSerialConsoleResponse message. Also converts values to other types if specified.
                     * @param message DisableInteractiveSerialConsoleResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.DisableInteractiveSerialConsoleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DisableInteractiveSerialConsoleResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DisableInteractiveSerialConsoleResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DetachLunRequest. */
                interface IDetachLunRequest {

                    /** DetachLunRequest instance */
                    instance?: (string|null);

                    /** DetachLunRequest lun */
                    lun?: (string|null);

                    /** DetachLunRequest skipReboot */
                    skipReboot?: (boolean|null);
                }

                /** Represents a DetachLunRequest. */
                class DetachLunRequest implements IDetachLunRequest {

                    /**
                     * Constructs a new DetachLunRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IDetachLunRequest);

                    /** DetachLunRequest instance. */
                    public instance: string;

                    /** DetachLunRequest lun. */
                    public lun: string;

                    /** DetachLunRequest skipReboot. */
                    public skipReboot: boolean;

                    /**
                     * Creates a new DetachLunRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DetachLunRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IDetachLunRequest): google.cloud.baremetalsolution.v2.DetachLunRequest;

                    /**
                     * Encodes the specified DetachLunRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.DetachLunRequest.verify|verify} messages.
                     * @param message DetachLunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IDetachLunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DetachLunRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.DetachLunRequest.verify|verify} messages.
                     * @param message DetachLunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IDetachLunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DetachLunRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DetachLunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.DetachLunRequest;

                    /**
                     * Decodes a DetachLunRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DetachLunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.DetachLunRequest;

                    /**
                     * Verifies a DetachLunRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DetachLunRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DetachLunRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.DetachLunRequest;

                    /**
                     * Creates a plain object from a DetachLunRequest message. Also converts values to other types if specified.
                     * @param message DetachLunRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.DetachLunRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DetachLunRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DetachLunRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ServerNetworkTemplate. */
                interface IServerNetworkTemplate {

                    /** ServerNetworkTemplate name */
                    name?: (string|null);

                    /** ServerNetworkTemplate applicableInstanceTypes */
                    applicableInstanceTypes?: (string[]|null);

                    /** ServerNetworkTemplate logicalInterfaces */
                    logicalInterfaces?: (google.cloud.baremetalsolution.v2.ServerNetworkTemplate.ILogicalInterface[]|null);
                }

                /** Represents a ServerNetworkTemplate. */
                class ServerNetworkTemplate implements IServerNetworkTemplate {

                    /**
                     * Constructs a new ServerNetworkTemplate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IServerNetworkTemplate);

                    /** ServerNetworkTemplate name. */
                    public name: string;

                    /** ServerNetworkTemplate applicableInstanceTypes. */
                    public applicableInstanceTypes: string[];

                    /** ServerNetworkTemplate logicalInterfaces. */
                    public logicalInterfaces: google.cloud.baremetalsolution.v2.ServerNetworkTemplate.ILogicalInterface[];

                    /**
                     * Creates a new ServerNetworkTemplate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServerNetworkTemplate instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IServerNetworkTemplate): google.cloud.baremetalsolution.v2.ServerNetworkTemplate;

                    /**
                     * Encodes the specified ServerNetworkTemplate message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ServerNetworkTemplate.verify|verify} messages.
                     * @param message ServerNetworkTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IServerNetworkTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServerNetworkTemplate message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ServerNetworkTemplate.verify|verify} messages.
                     * @param message ServerNetworkTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IServerNetworkTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServerNetworkTemplate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServerNetworkTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ServerNetworkTemplate;

                    /**
                     * Decodes a ServerNetworkTemplate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServerNetworkTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ServerNetworkTemplate;

                    /**
                     * Verifies a ServerNetworkTemplate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServerNetworkTemplate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServerNetworkTemplate
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ServerNetworkTemplate;

                    /**
                     * Creates a plain object from a ServerNetworkTemplate message. Also converts values to other types if specified.
                     * @param message ServerNetworkTemplate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ServerNetworkTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServerNetworkTemplate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ServerNetworkTemplate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ServerNetworkTemplate {

                    /** Properties of a LogicalInterface. */
                    interface ILogicalInterface {

                        /** LogicalInterface name */
                        name?: (string|null);

                        /** LogicalInterface type */
                        type?: (google.cloud.baremetalsolution.v2.ServerNetworkTemplate.LogicalInterface.InterfaceType|keyof typeof google.cloud.baremetalsolution.v2.ServerNetworkTemplate.LogicalInterface.InterfaceType|null);

                        /** LogicalInterface required */
                        required?: (boolean|null);
                    }

                    /** Represents a LogicalInterface. */
                    class LogicalInterface implements ILogicalInterface {

                        /**
                         * Constructs a new LogicalInterface.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.baremetalsolution.v2.ServerNetworkTemplate.ILogicalInterface);

                        /** LogicalInterface name. */
                        public name: string;

                        /** LogicalInterface type. */
                        public type: (google.cloud.baremetalsolution.v2.ServerNetworkTemplate.LogicalInterface.InterfaceType|keyof typeof google.cloud.baremetalsolution.v2.ServerNetworkTemplate.LogicalInterface.InterfaceType);

                        /** LogicalInterface required. */
                        public required: boolean;

                        /**
                         * Creates a new LogicalInterface instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LogicalInterface instance
                         */
                        public static create(properties?: google.cloud.baremetalsolution.v2.ServerNetworkTemplate.ILogicalInterface): google.cloud.baremetalsolution.v2.ServerNetworkTemplate.LogicalInterface;

                        /**
                         * Encodes the specified LogicalInterface message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ServerNetworkTemplate.LogicalInterface.verify|verify} messages.
                         * @param message LogicalInterface message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.baremetalsolution.v2.ServerNetworkTemplate.ILogicalInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LogicalInterface message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ServerNetworkTemplate.LogicalInterface.verify|verify} messages.
                         * @param message LogicalInterface message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.baremetalsolution.v2.ServerNetworkTemplate.ILogicalInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LogicalInterface message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LogicalInterface
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ServerNetworkTemplate.LogicalInterface;

                        /**
                         * Decodes a LogicalInterface message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LogicalInterface
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ServerNetworkTemplate.LogicalInterface;

                        /**
                         * Verifies a LogicalInterface message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LogicalInterface message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LogicalInterface
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ServerNetworkTemplate.LogicalInterface;

                        /**
                         * Creates a plain object from a LogicalInterface message. Also converts values to other types if specified.
                         * @param message LogicalInterface
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.baremetalsolution.v2.ServerNetworkTemplate.LogicalInterface, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LogicalInterface to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LogicalInterface
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace LogicalInterface {

                        /** InterfaceType enum. */
                        enum InterfaceType {
                            INTERFACE_TYPE_UNSPECIFIED = 0,
                            BOND = 1,
                            NIC = 2
                        }
                    }
                }

                /** VolumePerformanceTier enum. */
                enum VolumePerformanceTier {
                    VOLUME_PERFORMANCE_TIER_UNSPECIFIED = 0,
                    VOLUME_PERFORMANCE_TIER_SHARED = 1,
                    VOLUME_PERFORMANCE_TIER_ASSIGNED = 2,
                    VOLUME_PERFORMANCE_TIER_HT = 3
                }

                /** WorkloadProfile enum. */
                enum WorkloadProfile {
                    WORKLOAD_PROFILE_UNSPECIFIED = 0,
                    WORKLOAD_PROFILE_GENERIC = 1,
                    WORKLOAD_PROFILE_HANA = 2
                }

                /** Properties of a Lun. */
                interface ILun {

                    /** Lun name */
                    name?: (string|null);

                    /** Lun id */
                    id?: (string|null);

                    /** Lun state */
                    state?: (google.cloud.baremetalsolution.v2.Lun.State|keyof typeof google.cloud.baremetalsolution.v2.Lun.State|null);

                    /** Lun sizeGb */
                    sizeGb?: (number|Long|string|null);

                    /** Lun multiprotocolType */
                    multiprotocolType?: (google.cloud.baremetalsolution.v2.Lun.MultiprotocolType|keyof typeof google.cloud.baremetalsolution.v2.Lun.MultiprotocolType|null);

                    /** Lun storageVolume */
                    storageVolume?: (string|null);

                    /** Lun shareable */
                    shareable?: (boolean|null);

                    /** Lun bootLun */
                    bootLun?: (boolean|null);

                    /** Lun storageType */
                    storageType?: (google.cloud.baremetalsolution.v2.Lun.StorageType|keyof typeof google.cloud.baremetalsolution.v2.Lun.StorageType|null);

                    /** Lun wwid */
                    wwid?: (string|null);

                    /** Lun expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** Lun instances */
                    instances?: (string[]|null);
                }

                /** Represents a Lun. */
                class Lun implements ILun {

                    /**
                     * Constructs a new Lun.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.ILun);

                    /** Lun name. */
                    public name: string;

                    /** Lun id. */
                    public id: string;

                    /** Lun state. */
                    public state: (google.cloud.baremetalsolution.v2.Lun.State|keyof typeof google.cloud.baremetalsolution.v2.Lun.State);

                    /** Lun sizeGb. */
                    public sizeGb: (number|Long|string);

                    /** Lun multiprotocolType. */
                    public multiprotocolType: (google.cloud.baremetalsolution.v2.Lun.MultiprotocolType|keyof typeof google.cloud.baremetalsolution.v2.Lun.MultiprotocolType);

                    /** Lun storageVolume. */
                    public storageVolume: string;

                    /** Lun shareable. */
                    public shareable: boolean;

                    /** Lun bootLun. */
                    public bootLun: boolean;

                    /** Lun storageType. */
                    public storageType: (google.cloud.baremetalsolution.v2.Lun.StorageType|keyof typeof google.cloud.baremetalsolution.v2.Lun.StorageType);

                    /** Lun wwid. */
                    public wwid: string;

                    /** Lun expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** Lun instances. */
                    public instances: string[];

                    /**
                     * Creates a new Lun instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Lun instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.ILun): google.cloud.baremetalsolution.v2.Lun;

                    /**
                     * Encodes the specified Lun message. Does not implicitly {@link google.cloud.baremetalsolution.v2.Lun.verify|verify} messages.
                     * @param message Lun message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.ILun, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Lun message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.Lun.verify|verify} messages.
                     * @param message Lun message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.ILun, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Lun message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Lun
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.Lun;

                    /**
                     * Decodes a Lun message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Lun
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.Lun;

                    /**
                     * Verifies a Lun message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Lun message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Lun
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.Lun;

                    /**
                     * Creates a plain object from a Lun message. Also converts values to other types if specified.
                     * @param message Lun
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.Lun, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Lun to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Lun
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Lun {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        UPDATING = 2,
                        READY = 3,
                        DELETING = 4,
                        COOL_OFF = 5
                    }

                    /** MultiprotocolType enum. */
                    enum MultiprotocolType {
                        MULTIPROTOCOL_TYPE_UNSPECIFIED = 0,
                        LINUX = 1
                    }

                    /** StorageType enum. */
                    enum StorageType {
                        STORAGE_TYPE_UNSPECIFIED = 0,
                        SSD = 1,
                        HDD = 2
                    }
                }

                /** Properties of a GetLunRequest. */
                interface IGetLunRequest {

                    /** GetLunRequest name */
                    name?: (string|null);
                }

                /** Represents a GetLunRequest. */
                class GetLunRequest implements IGetLunRequest {

                    /**
                     * Constructs a new GetLunRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IGetLunRequest);

                    /** GetLunRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetLunRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetLunRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IGetLunRequest): google.cloud.baremetalsolution.v2.GetLunRequest;

                    /**
                     * Encodes the specified GetLunRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetLunRequest.verify|verify} messages.
                     * @param message GetLunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IGetLunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetLunRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetLunRequest.verify|verify} messages.
                     * @param message GetLunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IGetLunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetLunRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetLunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.GetLunRequest;

                    /**
                     * Decodes a GetLunRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetLunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.GetLunRequest;

                    /**
                     * Verifies a GetLunRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetLunRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetLunRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.GetLunRequest;

                    /**
                     * Creates a plain object from a GetLunRequest message. Also converts values to other types if specified.
                     * @param message GetLunRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.GetLunRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetLunRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetLunRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListLunsRequest. */
                interface IListLunsRequest {

                    /** ListLunsRequest parent */
                    parent?: (string|null);

                    /** ListLunsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListLunsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListLunsRequest. */
                class ListLunsRequest implements IListLunsRequest {

                    /**
                     * Constructs a new ListLunsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListLunsRequest);

                    /** ListLunsRequest parent. */
                    public parent: string;

                    /** ListLunsRequest pageSize. */
                    public pageSize: number;

                    /** ListLunsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListLunsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListLunsRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListLunsRequest): google.cloud.baremetalsolution.v2.ListLunsRequest;

                    /**
                     * Encodes the specified ListLunsRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListLunsRequest.verify|verify} messages.
                     * @param message ListLunsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListLunsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListLunsRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListLunsRequest.verify|verify} messages.
                     * @param message ListLunsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListLunsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListLunsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListLunsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListLunsRequest;

                    /**
                     * Decodes a ListLunsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListLunsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListLunsRequest;

                    /**
                     * Verifies a ListLunsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListLunsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListLunsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListLunsRequest;

                    /**
                     * Creates a plain object from a ListLunsRequest message. Also converts values to other types if specified.
                     * @param message ListLunsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListLunsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListLunsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListLunsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListLunsResponse. */
                interface IListLunsResponse {

                    /** ListLunsResponse luns */
                    luns?: (google.cloud.baremetalsolution.v2.ILun[]|null);

                    /** ListLunsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListLunsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListLunsResponse. */
                class ListLunsResponse implements IListLunsResponse {

                    /**
                     * Constructs a new ListLunsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListLunsResponse);

                    /** ListLunsResponse luns. */
                    public luns: google.cloud.baremetalsolution.v2.ILun[];

                    /** ListLunsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListLunsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListLunsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListLunsResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListLunsResponse): google.cloud.baremetalsolution.v2.ListLunsResponse;

                    /**
                     * Encodes the specified ListLunsResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListLunsResponse.verify|verify} messages.
                     * @param message ListLunsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListLunsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListLunsResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListLunsResponse.verify|verify} messages.
                     * @param message ListLunsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListLunsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListLunsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListLunsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListLunsResponse;

                    /**
                     * Decodes a ListLunsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListLunsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListLunsResponse;

                    /**
                     * Verifies a ListLunsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListLunsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListLunsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListLunsResponse;

                    /**
                     * Creates a plain object from a ListLunsResponse message. Also converts values to other types if specified.
                     * @param message ListLunsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListLunsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListLunsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListLunsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EvictLunRequest. */
                interface IEvictLunRequest {

                    /** EvictLunRequest name */
                    name?: (string|null);
                }

                /** Represents an EvictLunRequest. */
                class EvictLunRequest implements IEvictLunRequest {

                    /**
                     * Constructs a new EvictLunRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IEvictLunRequest);

                    /** EvictLunRequest name. */
                    public name: string;

                    /**
                     * Creates a new EvictLunRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EvictLunRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IEvictLunRequest): google.cloud.baremetalsolution.v2.EvictLunRequest;

                    /**
                     * Encodes the specified EvictLunRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.EvictLunRequest.verify|verify} messages.
                     * @param message EvictLunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IEvictLunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EvictLunRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.EvictLunRequest.verify|verify} messages.
                     * @param message EvictLunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IEvictLunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EvictLunRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EvictLunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.EvictLunRequest;

                    /**
                     * Decodes an EvictLunRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EvictLunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.EvictLunRequest;

                    /**
                     * Verifies an EvictLunRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EvictLunRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EvictLunRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.EvictLunRequest;

                    /**
                     * Creates a plain object from an EvictLunRequest message. Also converts values to other types if specified.
                     * @param message EvictLunRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.EvictLunRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EvictLunRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EvictLunRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Network. */
                interface INetwork {

                    /** Network name */
                    name?: (string|null);

                    /** Network id */
                    id?: (string|null);

                    /** Network type */
                    type?: (google.cloud.baremetalsolution.v2.Network.Type|keyof typeof google.cloud.baremetalsolution.v2.Network.Type|null);

                    /** Network ipAddress */
                    ipAddress?: (string|null);

                    /** Network macAddress */
                    macAddress?: (string[]|null);

                    /** Network state */
                    state?: (google.cloud.baremetalsolution.v2.Network.State|keyof typeof google.cloud.baremetalsolution.v2.Network.State|null);

                    /** Network vlanId */
                    vlanId?: (string|null);

                    /** Network cidr */
                    cidr?: (string|null);

                    /** Network vrf */
                    vrf?: (google.cloud.baremetalsolution.v2.IVRF|null);

                    /** Network labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Network servicesCidr */
                    servicesCidr?: (string|null);

                    /** Network reservations */
                    reservations?: (google.cloud.baremetalsolution.v2.INetworkAddressReservation[]|null);

                    /** Network pod */
                    pod?: (string|null);

                    /** Network mountPoints */
                    mountPoints?: (google.cloud.baremetalsolution.v2.INetworkMountPoint[]|null);

                    /** Network jumboFramesEnabled */
                    jumboFramesEnabled?: (boolean|null);

                    /** Network gatewayIp */
                    gatewayIp?: (string|null);
                }

                /** Represents a Network. */
                class Network implements INetwork {

                    /**
                     * Constructs a new Network.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.INetwork);

                    /** Network name. */
                    public name: string;

                    /** Network id. */
                    public id: string;

                    /** Network type. */
                    public type: (google.cloud.baremetalsolution.v2.Network.Type|keyof typeof google.cloud.baremetalsolution.v2.Network.Type);

                    /** Network ipAddress. */
                    public ipAddress: string;

                    /** Network macAddress. */
                    public macAddress: string[];

                    /** Network state. */
                    public state: (google.cloud.baremetalsolution.v2.Network.State|keyof typeof google.cloud.baremetalsolution.v2.Network.State);

                    /** Network vlanId. */
                    public vlanId: string;

                    /** Network cidr. */
                    public cidr: string;

                    /** Network vrf. */
                    public vrf?: (google.cloud.baremetalsolution.v2.IVRF|null);

                    /** Network labels. */
                    public labels: { [k: string]: string };

                    /** Network servicesCidr. */
                    public servicesCidr: string;

                    /** Network reservations. */
                    public reservations: google.cloud.baremetalsolution.v2.INetworkAddressReservation[];

                    /** Network pod. */
                    public pod: string;

                    /** Network mountPoints. */
                    public mountPoints: google.cloud.baremetalsolution.v2.INetworkMountPoint[];

                    /** Network jumboFramesEnabled. */
                    public jumboFramesEnabled: boolean;

                    /** Network gatewayIp. */
                    public gatewayIp: string;

                    /**
                     * Creates a new Network instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Network instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.INetwork): google.cloud.baremetalsolution.v2.Network;

                    /**
                     * Encodes the specified Network message. Does not implicitly {@link google.cloud.baremetalsolution.v2.Network.verify|verify} messages.
                     * @param message Network message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.INetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Network message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.Network.verify|verify} messages.
                     * @param message Network message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.INetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Network message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Network
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.Network;

                    /**
                     * Decodes a Network message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Network
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.Network;

                    /**
                     * Verifies a Network message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Network message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Network
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.Network;

                    /**
                     * Creates a plain object from a Network message. Also converts values to other types if specified.
                     * @param message Network
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.Network, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Network to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Network
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Network {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        CLIENT = 1,
                        PRIVATE = 2
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PROVISIONING = 1,
                        PROVISIONED = 2,
                        DEPROVISIONING = 3,
                        UPDATING = 4
                    }
                }

                /** Properties of a NetworkAddressReservation. */
                interface INetworkAddressReservation {

                    /** NetworkAddressReservation startAddress */
                    startAddress?: (string|null);

                    /** NetworkAddressReservation endAddress */
                    endAddress?: (string|null);

                    /** NetworkAddressReservation note */
                    note?: (string|null);
                }

                /** Represents a NetworkAddressReservation. */
                class NetworkAddressReservation implements INetworkAddressReservation {

                    /**
                     * Constructs a new NetworkAddressReservation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.INetworkAddressReservation);

                    /** NetworkAddressReservation startAddress. */
                    public startAddress: string;

                    /** NetworkAddressReservation endAddress. */
                    public endAddress: string;

                    /** NetworkAddressReservation note. */
                    public note: string;

                    /**
                     * Creates a new NetworkAddressReservation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkAddressReservation instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.INetworkAddressReservation): google.cloud.baremetalsolution.v2.NetworkAddressReservation;

                    /**
                     * Encodes the specified NetworkAddressReservation message. Does not implicitly {@link google.cloud.baremetalsolution.v2.NetworkAddressReservation.verify|verify} messages.
                     * @param message NetworkAddressReservation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.INetworkAddressReservation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkAddressReservation message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.NetworkAddressReservation.verify|verify} messages.
                     * @param message NetworkAddressReservation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.INetworkAddressReservation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkAddressReservation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkAddressReservation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.NetworkAddressReservation;

                    /**
                     * Decodes a NetworkAddressReservation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkAddressReservation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.NetworkAddressReservation;

                    /**
                     * Verifies a NetworkAddressReservation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkAddressReservation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkAddressReservation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.NetworkAddressReservation;

                    /**
                     * Creates a plain object from a NetworkAddressReservation message. Also converts values to other types if specified.
                     * @param message NetworkAddressReservation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.NetworkAddressReservation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkAddressReservation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NetworkAddressReservation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VRF. */
                interface IVRF {

                    /** VRF name */
                    name?: (string|null);

                    /** VRF state */
                    state?: (google.cloud.baremetalsolution.v2.VRF.State|keyof typeof google.cloud.baremetalsolution.v2.VRF.State|null);

                    /** VRF qosPolicy */
                    qosPolicy?: (google.cloud.baremetalsolution.v2.VRF.IQosPolicy|null);

                    /** VRF vlanAttachments */
                    vlanAttachments?: (google.cloud.baremetalsolution.v2.VRF.IVlanAttachment[]|null);
                }

                /** Represents a VRF. */
                class VRF implements IVRF {

                    /**
                     * Constructs a new VRF.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IVRF);

                    /** VRF name. */
                    public name: string;

                    /** VRF state. */
                    public state: (google.cloud.baremetalsolution.v2.VRF.State|keyof typeof google.cloud.baremetalsolution.v2.VRF.State);

                    /** VRF qosPolicy. */
                    public qosPolicy?: (google.cloud.baremetalsolution.v2.VRF.IQosPolicy|null);

                    /** VRF vlanAttachments. */
                    public vlanAttachments: google.cloud.baremetalsolution.v2.VRF.IVlanAttachment[];

                    /**
                     * Creates a new VRF instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VRF instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IVRF): google.cloud.baremetalsolution.v2.VRF;

                    /**
                     * Encodes the specified VRF message. Does not implicitly {@link google.cloud.baremetalsolution.v2.VRF.verify|verify} messages.
                     * @param message VRF message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IVRF, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VRF message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.VRF.verify|verify} messages.
                     * @param message VRF message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IVRF, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VRF message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VRF
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.VRF;

                    /**
                     * Decodes a VRF message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VRF
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.VRF;

                    /**
                     * Verifies a VRF message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VRF message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VRF
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.VRF;

                    /**
                     * Creates a plain object from a VRF message. Also converts values to other types if specified.
                     * @param message VRF
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.VRF, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VRF to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VRF
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VRF {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PROVISIONING = 1,
                        PROVISIONED = 2
                    }

                    /** Properties of a QosPolicy. */
                    interface IQosPolicy {

                        /** QosPolicy bandwidthGbps */
                        bandwidthGbps?: (number|null);
                    }

                    /** Represents a QosPolicy. */
                    class QosPolicy implements IQosPolicy {

                        /**
                         * Constructs a new QosPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.baremetalsolution.v2.VRF.IQosPolicy);

                        /** QosPolicy bandwidthGbps. */
                        public bandwidthGbps: number;

                        /**
                         * Creates a new QosPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns QosPolicy instance
                         */
                        public static create(properties?: google.cloud.baremetalsolution.v2.VRF.IQosPolicy): google.cloud.baremetalsolution.v2.VRF.QosPolicy;

                        /**
                         * Encodes the specified QosPolicy message. Does not implicitly {@link google.cloud.baremetalsolution.v2.VRF.QosPolicy.verify|verify} messages.
                         * @param message QosPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.baremetalsolution.v2.VRF.IQosPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified QosPolicy message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.VRF.QosPolicy.verify|verify} messages.
                         * @param message QosPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.baremetalsolution.v2.VRF.IQosPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a QosPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns QosPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.VRF.QosPolicy;

                        /**
                         * Decodes a QosPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns QosPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.VRF.QosPolicy;

                        /**
                         * Verifies a QosPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a QosPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns QosPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.VRF.QosPolicy;

                        /**
                         * Creates a plain object from a QosPolicy message. Also converts values to other types if specified.
                         * @param message QosPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.baremetalsolution.v2.VRF.QosPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this QosPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for QosPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a VlanAttachment. */
                    interface IVlanAttachment {

                        /** VlanAttachment peerVlanId */
                        peerVlanId?: (number|Long|string|null);

                        /** VlanAttachment peerIp */
                        peerIp?: (string|null);

                        /** VlanAttachment routerIp */
                        routerIp?: (string|null);

                        /** VlanAttachment pairingKey */
                        pairingKey?: (string|null);

                        /** VlanAttachment qosPolicy */
                        qosPolicy?: (google.cloud.baremetalsolution.v2.VRF.IQosPolicy|null);

                        /** VlanAttachment id */
                        id?: (string|null);

                        /** VlanAttachment interconnectAttachment */
                        interconnectAttachment?: (string|null);
                    }

                    /** Represents a VlanAttachment. */
                    class VlanAttachment implements IVlanAttachment {

                        /**
                         * Constructs a new VlanAttachment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.baremetalsolution.v2.VRF.IVlanAttachment);

                        /** VlanAttachment peerVlanId. */
                        public peerVlanId: (number|Long|string);

                        /** VlanAttachment peerIp. */
                        public peerIp: string;

                        /** VlanAttachment routerIp. */
                        public routerIp: string;

                        /** VlanAttachment pairingKey. */
                        public pairingKey: string;

                        /** VlanAttachment qosPolicy. */
                        public qosPolicy?: (google.cloud.baremetalsolution.v2.VRF.IQosPolicy|null);

                        /** VlanAttachment id. */
                        public id: string;

                        /** VlanAttachment interconnectAttachment. */
                        public interconnectAttachment: string;

                        /**
                         * Creates a new VlanAttachment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VlanAttachment instance
                         */
                        public static create(properties?: google.cloud.baremetalsolution.v2.VRF.IVlanAttachment): google.cloud.baremetalsolution.v2.VRF.VlanAttachment;

                        /**
                         * Encodes the specified VlanAttachment message. Does not implicitly {@link google.cloud.baremetalsolution.v2.VRF.VlanAttachment.verify|verify} messages.
                         * @param message VlanAttachment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.baremetalsolution.v2.VRF.IVlanAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VlanAttachment message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.VRF.VlanAttachment.verify|verify} messages.
                         * @param message VlanAttachment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.baremetalsolution.v2.VRF.IVlanAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VlanAttachment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VlanAttachment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.VRF.VlanAttachment;

                        /**
                         * Decodes a VlanAttachment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VlanAttachment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.VRF.VlanAttachment;

                        /**
                         * Verifies a VlanAttachment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VlanAttachment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VlanAttachment
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.VRF.VlanAttachment;

                        /**
                         * Creates a plain object from a VlanAttachment message. Also converts values to other types if specified.
                         * @param message VlanAttachment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.baremetalsolution.v2.VRF.VlanAttachment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VlanAttachment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VlanAttachment
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a LogicalInterface. */
                interface ILogicalInterface {

                    /** LogicalInterface logicalNetworkInterfaces */
                    logicalNetworkInterfaces?: (google.cloud.baremetalsolution.v2.LogicalInterface.ILogicalNetworkInterface[]|null);

                    /** LogicalInterface name */
                    name?: (string|null);

                    /** LogicalInterface interfaceIndex */
                    interfaceIndex?: (number|null);
                }

                /** Represents a LogicalInterface. */
                class LogicalInterface implements ILogicalInterface {

                    /**
                     * Constructs a new LogicalInterface.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.ILogicalInterface);

                    /** LogicalInterface logicalNetworkInterfaces. */
                    public logicalNetworkInterfaces: google.cloud.baremetalsolution.v2.LogicalInterface.ILogicalNetworkInterface[];

                    /** LogicalInterface name. */
                    public name: string;

                    /** LogicalInterface interfaceIndex. */
                    public interfaceIndex: number;

                    /**
                     * Creates a new LogicalInterface instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LogicalInterface instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.ILogicalInterface): google.cloud.baremetalsolution.v2.LogicalInterface;

                    /**
                     * Encodes the specified LogicalInterface message. Does not implicitly {@link google.cloud.baremetalsolution.v2.LogicalInterface.verify|verify} messages.
                     * @param message LogicalInterface message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.ILogicalInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LogicalInterface message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.LogicalInterface.verify|verify} messages.
                     * @param message LogicalInterface message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.ILogicalInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LogicalInterface message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LogicalInterface
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.LogicalInterface;

                    /**
                     * Decodes a LogicalInterface message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LogicalInterface
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.LogicalInterface;

                    /**
                     * Verifies a LogicalInterface message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LogicalInterface message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LogicalInterface
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.LogicalInterface;

                    /**
                     * Creates a plain object from a LogicalInterface message. Also converts values to other types if specified.
                     * @param message LogicalInterface
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.LogicalInterface, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LogicalInterface to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LogicalInterface
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace LogicalInterface {

                    /** Properties of a LogicalNetworkInterface. */
                    interface ILogicalNetworkInterface {

                        /** LogicalNetworkInterface network */
                        network?: (string|null);

                        /** LogicalNetworkInterface ipAddress */
                        ipAddress?: (string|null);

                        /** LogicalNetworkInterface defaultGateway */
                        defaultGateway?: (boolean|null);

                        /** LogicalNetworkInterface networkType */
                        networkType?: (google.cloud.baremetalsolution.v2.Network.Type|keyof typeof google.cloud.baremetalsolution.v2.Network.Type|null);

                        /** LogicalNetworkInterface id */
                        id?: (string|null);
                    }

                    /** Represents a LogicalNetworkInterface. */
                    class LogicalNetworkInterface implements ILogicalNetworkInterface {

                        /**
                         * Constructs a new LogicalNetworkInterface.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.baremetalsolution.v2.LogicalInterface.ILogicalNetworkInterface);

                        /** LogicalNetworkInterface network. */
                        public network: string;

                        /** LogicalNetworkInterface ipAddress. */
                        public ipAddress: string;

                        /** LogicalNetworkInterface defaultGateway. */
                        public defaultGateway: boolean;

                        /** LogicalNetworkInterface networkType. */
                        public networkType: (google.cloud.baremetalsolution.v2.Network.Type|keyof typeof google.cloud.baremetalsolution.v2.Network.Type);

                        /** LogicalNetworkInterface id. */
                        public id: string;

                        /**
                         * Creates a new LogicalNetworkInterface instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LogicalNetworkInterface instance
                         */
                        public static create(properties?: google.cloud.baremetalsolution.v2.LogicalInterface.ILogicalNetworkInterface): google.cloud.baremetalsolution.v2.LogicalInterface.LogicalNetworkInterface;

                        /**
                         * Encodes the specified LogicalNetworkInterface message. Does not implicitly {@link google.cloud.baremetalsolution.v2.LogicalInterface.LogicalNetworkInterface.verify|verify} messages.
                         * @param message LogicalNetworkInterface message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.baremetalsolution.v2.LogicalInterface.ILogicalNetworkInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LogicalNetworkInterface message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.LogicalInterface.LogicalNetworkInterface.verify|verify} messages.
                         * @param message LogicalNetworkInterface message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.baremetalsolution.v2.LogicalInterface.ILogicalNetworkInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LogicalNetworkInterface message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LogicalNetworkInterface
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.LogicalInterface.LogicalNetworkInterface;

                        /**
                         * Decodes a LogicalNetworkInterface message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LogicalNetworkInterface
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.LogicalInterface.LogicalNetworkInterface;

                        /**
                         * Verifies a LogicalNetworkInterface message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LogicalNetworkInterface message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LogicalNetworkInterface
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.LogicalInterface.LogicalNetworkInterface;

                        /**
                         * Creates a plain object from a LogicalNetworkInterface message. Also converts values to other types if specified.
                         * @param message LogicalNetworkInterface
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.baremetalsolution.v2.LogicalInterface.LogicalNetworkInterface, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LogicalNetworkInterface to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LogicalNetworkInterface
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a GetNetworkRequest. */
                interface IGetNetworkRequest {

                    /** GetNetworkRequest name */
                    name?: (string|null);
                }

                /** Represents a GetNetworkRequest. */
                class GetNetworkRequest implements IGetNetworkRequest {

                    /**
                     * Constructs a new GetNetworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IGetNetworkRequest);

                    /** GetNetworkRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetNetworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetNetworkRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IGetNetworkRequest): google.cloud.baremetalsolution.v2.GetNetworkRequest;

                    /**
                     * Encodes the specified GetNetworkRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetNetworkRequest.verify|verify} messages.
                     * @param message GetNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IGetNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetNetworkRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetNetworkRequest.verify|verify} messages.
                     * @param message GetNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IGetNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetNetworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.GetNetworkRequest;

                    /**
                     * Decodes a GetNetworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.GetNetworkRequest;

                    /**
                     * Verifies a GetNetworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetNetworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetNetworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.GetNetworkRequest;

                    /**
                     * Creates a plain object from a GetNetworkRequest message. Also converts values to other types if specified.
                     * @param message GetNetworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.GetNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetNetworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetNetworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNetworksRequest. */
                interface IListNetworksRequest {

                    /** ListNetworksRequest parent */
                    parent?: (string|null);

                    /** ListNetworksRequest pageSize */
                    pageSize?: (number|null);

                    /** ListNetworksRequest pageToken */
                    pageToken?: (string|null);

                    /** ListNetworksRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListNetworksRequest. */
                class ListNetworksRequest implements IListNetworksRequest {

                    /**
                     * Constructs a new ListNetworksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListNetworksRequest);

                    /** ListNetworksRequest parent. */
                    public parent: string;

                    /** ListNetworksRequest pageSize. */
                    public pageSize: number;

                    /** ListNetworksRequest pageToken. */
                    public pageToken: string;

                    /** ListNetworksRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListNetworksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNetworksRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListNetworksRequest): google.cloud.baremetalsolution.v2.ListNetworksRequest;

                    /**
                     * Encodes the specified ListNetworksRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListNetworksRequest.verify|verify} messages.
                     * @param message ListNetworksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListNetworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNetworksRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListNetworksRequest.verify|verify} messages.
                     * @param message ListNetworksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListNetworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNetworksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNetworksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListNetworksRequest;

                    /**
                     * Decodes a ListNetworksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNetworksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListNetworksRequest;

                    /**
                     * Verifies a ListNetworksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNetworksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNetworksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListNetworksRequest;

                    /**
                     * Creates a plain object from a ListNetworksRequest message. Also converts values to other types if specified.
                     * @param message ListNetworksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListNetworksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNetworksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNetworksRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNetworksResponse. */
                interface IListNetworksResponse {

                    /** ListNetworksResponse networks */
                    networks?: (google.cloud.baremetalsolution.v2.INetwork[]|null);

                    /** ListNetworksResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListNetworksResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListNetworksResponse. */
                class ListNetworksResponse implements IListNetworksResponse {

                    /**
                     * Constructs a new ListNetworksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListNetworksResponse);

                    /** ListNetworksResponse networks. */
                    public networks: google.cloud.baremetalsolution.v2.INetwork[];

                    /** ListNetworksResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListNetworksResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListNetworksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNetworksResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListNetworksResponse): google.cloud.baremetalsolution.v2.ListNetworksResponse;

                    /**
                     * Encodes the specified ListNetworksResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListNetworksResponse.verify|verify} messages.
                     * @param message ListNetworksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListNetworksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNetworksResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListNetworksResponse.verify|verify} messages.
                     * @param message ListNetworksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListNetworksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNetworksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNetworksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListNetworksResponse;

                    /**
                     * Decodes a ListNetworksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNetworksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListNetworksResponse;

                    /**
                     * Verifies a ListNetworksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNetworksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNetworksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListNetworksResponse;

                    /**
                     * Creates a plain object from a ListNetworksResponse message. Also converts values to other types if specified.
                     * @param message ListNetworksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListNetworksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNetworksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNetworksResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateNetworkRequest. */
                interface IUpdateNetworkRequest {

                    /** UpdateNetworkRequest network */
                    network?: (google.cloud.baremetalsolution.v2.INetwork|null);

                    /** UpdateNetworkRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateNetworkRequest. */
                class UpdateNetworkRequest implements IUpdateNetworkRequest {

                    /**
                     * Constructs a new UpdateNetworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IUpdateNetworkRequest);

                    /** UpdateNetworkRequest network. */
                    public network?: (google.cloud.baremetalsolution.v2.INetwork|null);

                    /** UpdateNetworkRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateNetworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateNetworkRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IUpdateNetworkRequest): google.cloud.baremetalsolution.v2.UpdateNetworkRequest;

                    /**
                     * Encodes the specified UpdateNetworkRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.UpdateNetworkRequest.verify|verify} messages.
                     * @param message UpdateNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IUpdateNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateNetworkRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.UpdateNetworkRequest.verify|verify} messages.
                     * @param message UpdateNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IUpdateNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateNetworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.UpdateNetworkRequest;

                    /**
                     * Decodes an UpdateNetworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.UpdateNetworkRequest;

                    /**
                     * Verifies an UpdateNetworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateNetworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateNetworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.UpdateNetworkRequest;

                    /**
                     * Creates a plain object from an UpdateNetworkRequest message. Also converts values to other types if specified.
                     * @param message UpdateNetworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.UpdateNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateNetworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateNetworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NetworkUsage. */
                interface INetworkUsage {

                    /** NetworkUsage network */
                    network?: (google.cloud.baremetalsolution.v2.INetwork|null);

                    /** NetworkUsage usedIps */
                    usedIps?: (string[]|null);
                }

                /** Represents a NetworkUsage. */
                class NetworkUsage implements INetworkUsage {

                    /**
                     * Constructs a new NetworkUsage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.INetworkUsage);

                    /** NetworkUsage network. */
                    public network?: (google.cloud.baremetalsolution.v2.INetwork|null);

                    /** NetworkUsage usedIps. */
                    public usedIps: string[];

                    /**
                     * Creates a new NetworkUsage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkUsage instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.INetworkUsage): google.cloud.baremetalsolution.v2.NetworkUsage;

                    /**
                     * Encodes the specified NetworkUsage message. Does not implicitly {@link google.cloud.baremetalsolution.v2.NetworkUsage.verify|verify} messages.
                     * @param message NetworkUsage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.INetworkUsage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkUsage message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.NetworkUsage.verify|verify} messages.
                     * @param message NetworkUsage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.INetworkUsage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkUsage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkUsage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.NetworkUsage;

                    /**
                     * Decodes a NetworkUsage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkUsage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.NetworkUsage;

                    /**
                     * Verifies a NetworkUsage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkUsage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkUsage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.NetworkUsage;

                    /**
                     * Creates a plain object from a NetworkUsage message. Also converts values to other types if specified.
                     * @param message NetworkUsage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.NetworkUsage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkUsage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NetworkUsage
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNetworkUsageRequest. */
                interface IListNetworkUsageRequest {

                    /** ListNetworkUsageRequest location */
                    location?: (string|null);
                }

                /** Represents a ListNetworkUsageRequest. */
                class ListNetworkUsageRequest implements IListNetworkUsageRequest {

                    /**
                     * Constructs a new ListNetworkUsageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListNetworkUsageRequest);

                    /** ListNetworkUsageRequest location. */
                    public location: string;

                    /**
                     * Creates a new ListNetworkUsageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNetworkUsageRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListNetworkUsageRequest): google.cloud.baremetalsolution.v2.ListNetworkUsageRequest;

                    /**
                     * Encodes the specified ListNetworkUsageRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListNetworkUsageRequest.verify|verify} messages.
                     * @param message ListNetworkUsageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListNetworkUsageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNetworkUsageRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListNetworkUsageRequest.verify|verify} messages.
                     * @param message ListNetworkUsageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListNetworkUsageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNetworkUsageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNetworkUsageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListNetworkUsageRequest;

                    /**
                     * Decodes a ListNetworkUsageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNetworkUsageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListNetworkUsageRequest;

                    /**
                     * Verifies a ListNetworkUsageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNetworkUsageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNetworkUsageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListNetworkUsageRequest;

                    /**
                     * Creates a plain object from a ListNetworkUsageRequest message. Also converts values to other types if specified.
                     * @param message ListNetworkUsageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListNetworkUsageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNetworkUsageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNetworkUsageRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNetworkUsageResponse. */
                interface IListNetworkUsageResponse {

                    /** ListNetworkUsageResponse networks */
                    networks?: (google.cloud.baremetalsolution.v2.INetworkUsage[]|null);
                }

                /** Represents a ListNetworkUsageResponse. */
                class ListNetworkUsageResponse implements IListNetworkUsageResponse {

                    /**
                     * Constructs a new ListNetworkUsageResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListNetworkUsageResponse);

                    /** ListNetworkUsageResponse networks. */
                    public networks: google.cloud.baremetalsolution.v2.INetworkUsage[];

                    /**
                     * Creates a new ListNetworkUsageResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNetworkUsageResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListNetworkUsageResponse): google.cloud.baremetalsolution.v2.ListNetworkUsageResponse;

                    /**
                     * Encodes the specified ListNetworkUsageResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListNetworkUsageResponse.verify|verify} messages.
                     * @param message ListNetworkUsageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListNetworkUsageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNetworkUsageResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListNetworkUsageResponse.verify|verify} messages.
                     * @param message ListNetworkUsageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListNetworkUsageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNetworkUsageResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNetworkUsageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListNetworkUsageResponse;

                    /**
                     * Decodes a ListNetworkUsageResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNetworkUsageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListNetworkUsageResponse;

                    /**
                     * Verifies a ListNetworkUsageResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNetworkUsageResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNetworkUsageResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListNetworkUsageResponse;

                    /**
                     * Creates a plain object from a ListNetworkUsageResponse message. Also converts values to other types if specified.
                     * @param message ListNetworkUsageResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListNetworkUsageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNetworkUsageResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNetworkUsageResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NetworkMountPoint. */
                interface INetworkMountPoint {

                    /** NetworkMountPoint instance */
                    instance?: (string|null);

                    /** NetworkMountPoint logicalInterface */
                    logicalInterface?: (string|null);

                    /** NetworkMountPoint defaultGateway */
                    defaultGateway?: (boolean|null);

                    /** NetworkMountPoint ipAddress */
                    ipAddress?: (string|null);
                }

                /** Represents a NetworkMountPoint. */
                class NetworkMountPoint implements INetworkMountPoint {

                    /**
                     * Constructs a new NetworkMountPoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.INetworkMountPoint);

                    /** NetworkMountPoint instance. */
                    public instance: string;

                    /** NetworkMountPoint logicalInterface. */
                    public logicalInterface: string;

                    /** NetworkMountPoint defaultGateway. */
                    public defaultGateway: boolean;

                    /** NetworkMountPoint ipAddress. */
                    public ipAddress: string;

                    /**
                     * Creates a new NetworkMountPoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkMountPoint instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.INetworkMountPoint): google.cloud.baremetalsolution.v2.NetworkMountPoint;

                    /**
                     * Encodes the specified NetworkMountPoint message. Does not implicitly {@link google.cloud.baremetalsolution.v2.NetworkMountPoint.verify|verify} messages.
                     * @param message NetworkMountPoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.INetworkMountPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkMountPoint message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.NetworkMountPoint.verify|verify} messages.
                     * @param message NetworkMountPoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.INetworkMountPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkMountPoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkMountPoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.NetworkMountPoint;

                    /**
                     * Decodes a NetworkMountPoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkMountPoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.NetworkMountPoint;

                    /**
                     * Verifies a NetworkMountPoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkMountPoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkMountPoint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.NetworkMountPoint;

                    /**
                     * Creates a plain object from a NetworkMountPoint message. Also converts values to other types if specified.
                     * @param message NetworkMountPoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.NetworkMountPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkMountPoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NetworkMountPoint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RenameNetworkRequest. */
                interface IRenameNetworkRequest {

                    /** RenameNetworkRequest name */
                    name?: (string|null);

                    /** RenameNetworkRequest newNetworkId */
                    newNetworkId?: (string|null);
                }

                /** Represents a RenameNetworkRequest. */
                class RenameNetworkRequest implements IRenameNetworkRequest {

                    /**
                     * Constructs a new RenameNetworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IRenameNetworkRequest);

                    /** RenameNetworkRequest name. */
                    public name: string;

                    /** RenameNetworkRequest newNetworkId. */
                    public newNetworkId: string;

                    /**
                     * Creates a new RenameNetworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RenameNetworkRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IRenameNetworkRequest): google.cloud.baremetalsolution.v2.RenameNetworkRequest;

                    /**
                     * Encodes the specified RenameNetworkRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.RenameNetworkRequest.verify|verify} messages.
                     * @param message RenameNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IRenameNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RenameNetworkRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.RenameNetworkRequest.verify|verify} messages.
                     * @param message RenameNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IRenameNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RenameNetworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RenameNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.RenameNetworkRequest;

                    /**
                     * Decodes a RenameNetworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RenameNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.RenameNetworkRequest;

                    /**
                     * Verifies a RenameNetworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RenameNetworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RenameNetworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.RenameNetworkRequest;

                    /**
                     * Creates a plain object from a RenameNetworkRequest message. Also converts values to other types if specified.
                     * @param message RenameNetworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.RenameNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RenameNetworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RenameNetworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Volume. */
                interface IVolume {

                    /** Volume name */
                    name?: (string|null);

                    /** Volume id */
                    id?: (string|null);

                    /** Volume storageType */
                    storageType?: (google.cloud.baremetalsolution.v2.Volume.StorageType|keyof typeof google.cloud.baremetalsolution.v2.Volume.StorageType|null);

                    /** Volume state */
                    state?: (google.cloud.baremetalsolution.v2.Volume.State|keyof typeof google.cloud.baremetalsolution.v2.Volume.State|null);

                    /** Volume requestedSizeGib */
                    requestedSizeGib?: (number|Long|string|null);

                    /** Volume originallyRequestedSizeGib */
                    originallyRequestedSizeGib?: (number|Long|string|null);

                    /** Volume currentSizeGib */
                    currentSizeGib?: (number|Long|string|null);

                    /** Volume emergencySizeGib */
                    emergencySizeGib?: (number|Long|string|null);

                    /** Volume maxSizeGib */
                    maxSizeGib?: (number|Long|string|null);

                    /** Volume autoGrownSizeGib */
                    autoGrownSizeGib?: (number|Long|string|null);

                    /** Volume remainingSpaceGib */
                    remainingSpaceGib?: (number|Long|string|null);

                    /** Volume snapshotReservationDetail */
                    snapshotReservationDetail?: (google.cloud.baremetalsolution.v2.Volume.ISnapshotReservationDetail|null);

                    /** Volume snapshotAutoDeleteBehavior */
                    snapshotAutoDeleteBehavior?: (google.cloud.baremetalsolution.v2.Volume.SnapshotAutoDeleteBehavior|keyof typeof google.cloud.baremetalsolution.v2.Volume.SnapshotAutoDeleteBehavior|null);

                    /** Volume labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Volume snapshotEnabled */
                    snapshotEnabled?: (boolean|null);

                    /** Volume pod */
                    pod?: (string|null);

                    /** Volume protocol */
                    protocol?: (google.cloud.baremetalsolution.v2.Volume.Protocol|keyof typeof google.cloud.baremetalsolution.v2.Volume.Protocol|null);

                    /** Volume bootVolume */
                    bootVolume?: (boolean|null);

                    /** Volume performanceTier */
                    performanceTier?: (google.cloud.baremetalsolution.v2.VolumePerformanceTier|keyof typeof google.cloud.baremetalsolution.v2.VolumePerformanceTier|null);

                    /** Volume notes */
                    notes?: (string|null);

                    /** Volume workloadProfile */
                    workloadProfile?: (google.cloud.baremetalsolution.v2.Volume.WorkloadProfile|keyof typeof google.cloud.baremetalsolution.v2.Volume.WorkloadProfile|null);

                    /** Volume expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** Volume instances */
                    instances?: (string[]|null);

                    /** Volume attached */
                    attached?: (boolean|null);
                }

                /** Represents a Volume. */
                class Volume implements IVolume {

                    /**
                     * Constructs a new Volume.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IVolume);

                    /** Volume name. */
                    public name: string;

                    /** Volume id. */
                    public id: string;

                    /** Volume storageType. */
                    public storageType: (google.cloud.baremetalsolution.v2.Volume.StorageType|keyof typeof google.cloud.baremetalsolution.v2.Volume.StorageType);

                    /** Volume state. */
                    public state: (google.cloud.baremetalsolution.v2.Volume.State|keyof typeof google.cloud.baremetalsolution.v2.Volume.State);

                    /** Volume requestedSizeGib. */
                    public requestedSizeGib: (number|Long|string);

                    /** Volume originallyRequestedSizeGib. */
                    public originallyRequestedSizeGib: (number|Long|string);

                    /** Volume currentSizeGib. */
                    public currentSizeGib: (number|Long|string);

                    /** Volume emergencySizeGib. */
                    public emergencySizeGib: (number|Long|string);

                    /** Volume maxSizeGib. */
                    public maxSizeGib: (number|Long|string);

                    /** Volume autoGrownSizeGib. */
                    public autoGrownSizeGib: (number|Long|string);

                    /** Volume remainingSpaceGib. */
                    public remainingSpaceGib: (number|Long|string);

                    /** Volume snapshotReservationDetail. */
                    public snapshotReservationDetail?: (google.cloud.baremetalsolution.v2.Volume.ISnapshotReservationDetail|null);

                    /** Volume snapshotAutoDeleteBehavior. */
                    public snapshotAutoDeleteBehavior: (google.cloud.baremetalsolution.v2.Volume.SnapshotAutoDeleteBehavior|keyof typeof google.cloud.baremetalsolution.v2.Volume.SnapshotAutoDeleteBehavior);

                    /** Volume labels. */
                    public labels: { [k: string]: string };

                    /** Volume snapshotEnabled. */
                    public snapshotEnabled: boolean;

                    /** Volume pod. */
                    public pod: string;

                    /** Volume protocol. */
                    public protocol: (google.cloud.baremetalsolution.v2.Volume.Protocol|keyof typeof google.cloud.baremetalsolution.v2.Volume.Protocol);

                    /** Volume bootVolume. */
                    public bootVolume: boolean;

                    /** Volume performanceTier. */
                    public performanceTier: (google.cloud.baremetalsolution.v2.VolumePerformanceTier|keyof typeof google.cloud.baremetalsolution.v2.VolumePerformanceTier);

                    /** Volume notes. */
                    public notes: string;

                    /** Volume workloadProfile. */
                    public workloadProfile: (google.cloud.baremetalsolution.v2.Volume.WorkloadProfile|keyof typeof google.cloud.baremetalsolution.v2.Volume.WorkloadProfile);

                    /** Volume expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** Volume instances. */
                    public instances: string[];

                    /** Volume attached. */
                    public attached: boolean;

                    /**
                     * Creates a new Volume instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Volume instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IVolume): google.cloud.baremetalsolution.v2.Volume;

                    /**
                     * Encodes the specified Volume message. Does not implicitly {@link google.cloud.baremetalsolution.v2.Volume.verify|verify} messages.
                     * @param message Volume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Volume message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.Volume.verify|verify} messages.
                     * @param message Volume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Volume message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Volume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.Volume;

                    /**
                     * Decodes a Volume message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Volume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.Volume;

                    /**
                     * Verifies a Volume message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Volume message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Volume
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.Volume;

                    /**
                     * Creates a plain object from a Volume message. Also converts values to other types if specified.
                     * @param message Volume
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.Volume, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Volume to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Volume
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Volume {

                    /** StorageType enum. */
                    enum StorageType {
                        STORAGE_TYPE_UNSPECIFIED = 0,
                        SSD = 1,
                        HDD = 2
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        READY = 2,
                        DELETING = 3,
                        UPDATING = 4,
                        COOL_OFF = 5
                    }

                    /** Properties of a SnapshotReservationDetail. */
                    interface ISnapshotReservationDetail {

                        /** SnapshotReservationDetail reservedSpaceGib */
                        reservedSpaceGib?: (number|Long|string|null);

                        /** SnapshotReservationDetail reservedSpaceUsedPercent */
                        reservedSpaceUsedPercent?: (number|null);

                        /** SnapshotReservationDetail reservedSpaceRemainingGib */
                        reservedSpaceRemainingGib?: (number|Long|string|null);

                        /** SnapshotReservationDetail reservedSpacePercent */
                        reservedSpacePercent?: (number|null);
                    }

                    /** Represents a SnapshotReservationDetail. */
                    class SnapshotReservationDetail implements ISnapshotReservationDetail {

                        /**
                         * Constructs a new SnapshotReservationDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.baremetalsolution.v2.Volume.ISnapshotReservationDetail);

                        /** SnapshotReservationDetail reservedSpaceGib. */
                        public reservedSpaceGib: (number|Long|string);

                        /** SnapshotReservationDetail reservedSpaceUsedPercent. */
                        public reservedSpaceUsedPercent: number;

                        /** SnapshotReservationDetail reservedSpaceRemainingGib. */
                        public reservedSpaceRemainingGib: (number|Long|string);

                        /** SnapshotReservationDetail reservedSpacePercent. */
                        public reservedSpacePercent: number;

                        /**
                         * Creates a new SnapshotReservationDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SnapshotReservationDetail instance
                         */
                        public static create(properties?: google.cloud.baremetalsolution.v2.Volume.ISnapshotReservationDetail): google.cloud.baremetalsolution.v2.Volume.SnapshotReservationDetail;

                        /**
                         * Encodes the specified SnapshotReservationDetail message. Does not implicitly {@link google.cloud.baremetalsolution.v2.Volume.SnapshotReservationDetail.verify|verify} messages.
                         * @param message SnapshotReservationDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.baremetalsolution.v2.Volume.ISnapshotReservationDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SnapshotReservationDetail message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.Volume.SnapshotReservationDetail.verify|verify} messages.
                         * @param message SnapshotReservationDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.baremetalsolution.v2.Volume.ISnapshotReservationDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SnapshotReservationDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SnapshotReservationDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.Volume.SnapshotReservationDetail;

                        /**
                         * Decodes a SnapshotReservationDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SnapshotReservationDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.Volume.SnapshotReservationDetail;

                        /**
                         * Verifies a SnapshotReservationDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SnapshotReservationDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SnapshotReservationDetail
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.Volume.SnapshotReservationDetail;

                        /**
                         * Creates a plain object from a SnapshotReservationDetail message. Also converts values to other types if specified.
                         * @param message SnapshotReservationDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.baremetalsolution.v2.Volume.SnapshotReservationDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SnapshotReservationDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SnapshotReservationDetail
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** SnapshotAutoDeleteBehavior enum. */
                    enum SnapshotAutoDeleteBehavior {
                        SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED = 0,
                        DISABLED = 1,
                        OLDEST_FIRST = 2,
                        NEWEST_FIRST = 3
                    }

                    /** Protocol enum. */
                    enum Protocol {
                        PROTOCOL_UNSPECIFIED = 0,
                        FIBRE_CHANNEL = 1,
                        NFS = 2
                    }

                    /** WorkloadProfile enum. */
                    enum WorkloadProfile {
                        WORKLOAD_PROFILE_UNSPECIFIED = 0,
                        GENERIC = 1,
                        HANA = 2
                    }
                }

                /** Properties of a GetVolumeRequest. */
                interface IGetVolumeRequest {

                    /** GetVolumeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetVolumeRequest. */
                class GetVolumeRequest implements IGetVolumeRequest {

                    /**
                     * Constructs a new GetVolumeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IGetVolumeRequest);

                    /** GetVolumeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetVolumeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetVolumeRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IGetVolumeRequest): google.cloud.baremetalsolution.v2.GetVolumeRequest;

                    /**
                     * Encodes the specified GetVolumeRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetVolumeRequest.verify|verify} messages.
                     * @param message GetVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IGetVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetVolumeRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetVolumeRequest.verify|verify} messages.
                     * @param message GetVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IGetVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetVolumeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.GetVolumeRequest;

                    /**
                     * Decodes a GetVolumeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.GetVolumeRequest;

                    /**
                     * Verifies a GetVolumeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetVolumeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetVolumeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.GetVolumeRequest;

                    /**
                     * Creates a plain object from a GetVolumeRequest message. Also converts values to other types if specified.
                     * @param message GetVolumeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.GetVolumeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetVolumeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetVolumeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVolumesRequest. */
                interface IListVolumesRequest {

                    /** ListVolumesRequest parent */
                    parent?: (string|null);

                    /** ListVolumesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListVolumesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListVolumesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListVolumesRequest. */
                class ListVolumesRequest implements IListVolumesRequest {

                    /**
                     * Constructs a new ListVolumesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListVolumesRequest);

                    /** ListVolumesRequest parent. */
                    public parent: string;

                    /** ListVolumesRequest pageSize. */
                    public pageSize: number;

                    /** ListVolumesRequest pageToken. */
                    public pageToken: string;

                    /** ListVolumesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListVolumesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVolumesRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListVolumesRequest): google.cloud.baremetalsolution.v2.ListVolumesRequest;

                    /**
                     * Encodes the specified ListVolumesRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListVolumesRequest.verify|verify} messages.
                     * @param message ListVolumesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListVolumesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVolumesRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListVolumesRequest.verify|verify} messages.
                     * @param message ListVolumesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListVolumesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVolumesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVolumesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListVolumesRequest;

                    /**
                     * Decodes a ListVolumesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVolumesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListVolumesRequest;

                    /**
                     * Verifies a ListVolumesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVolumesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVolumesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListVolumesRequest;

                    /**
                     * Creates a plain object from a ListVolumesRequest message. Also converts values to other types if specified.
                     * @param message ListVolumesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListVolumesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVolumesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVolumesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVolumesResponse. */
                interface IListVolumesResponse {

                    /** ListVolumesResponse volumes */
                    volumes?: (google.cloud.baremetalsolution.v2.IVolume[]|null);

                    /** ListVolumesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListVolumesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListVolumesResponse. */
                class ListVolumesResponse implements IListVolumesResponse {

                    /**
                     * Constructs a new ListVolumesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListVolumesResponse);

                    /** ListVolumesResponse volumes. */
                    public volumes: google.cloud.baremetalsolution.v2.IVolume[];

                    /** ListVolumesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListVolumesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListVolumesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVolumesResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListVolumesResponse): google.cloud.baremetalsolution.v2.ListVolumesResponse;

                    /**
                     * Encodes the specified ListVolumesResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListVolumesResponse.verify|verify} messages.
                     * @param message ListVolumesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListVolumesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVolumesResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListVolumesResponse.verify|verify} messages.
                     * @param message ListVolumesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListVolumesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVolumesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVolumesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListVolumesResponse;

                    /**
                     * Decodes a ListVolumesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVolumesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListVolumesResponse;

                    /**
                     * Verifies a ListVolumesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVolumesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVolumesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListVolumesResponse;

                    /**
                     * Creates a plain object from a ListVolumesResponse message. Also converts values to other types if specified.
                     * @param message ListVolumesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListVolumesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVolumesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVolumesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateVolumeRequest. */
                interface IUpdateVolumeRequest {

                    /** UpdateVolumeRequest volume */
                    volume?: (google.cloud.baremetalsolution.v2.IVolume|null);

                    /** UpdateVolumeRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateVolumeRequest. */
                class UpdateVolumeRequest implements IUpdateVolumeRequest {

                    /**
                     * Constructs a new UpdateVolumeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IUpdateVolumeRequest);

                    /** UpdateVolumeRequest volume. */
                    public volume?: (google.cloud.baremetalsolution.v2.IVolume|null);

                    /** UpdateVolumeRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateVolumeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateVolumeRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IUpdateVolumeRequest): google.cloud.baremetalsolution.v2.UpdateVolumeRequest;

                    /**
                     * Encodes the specified UpdateVolumeRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.UpdateVolumeRequest.verify|verify} messages.
                     * @param message UpdateVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IUpdateVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateVolumeRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.UpdateVolumeRequest.verify|verify} messages.
                     * @param message UpdateVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IUpdateVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateVolumeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.UpdateVolumeRequest;

                    /**
                     * Decodes an UpdateVolumeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.UpdateVolumeRequest;

                    /**
                     * Verifies an UpdateVolumeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateVolumeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateVolumeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.UpdateVolumeRequest;

                    /**
                     * Creates a plain object from an UpdateVolumeRequest message. Also converts values to other types if specified.
                     * @param message UpdateVolumeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.UpdateVolumeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateVolumeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateVolumeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RenameVolumeRequest. */
                interface IRenameVolumeRequest {

                    /** RenameVolumeRequest name */
                    name?: (string|null);

                    /** RenameVolumeRequest newVolumeId */
                    newVolumeId?: (string|null);
                }

                /** Represents a RenameVolumeRequest. */
                class RenameVolumeRequest implements IRenameVolumeRequest {

                    /**
                     * Constructs a new RenameVolumeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IRenameVolumeRequest);

                    /** RenameVolumeRequest name. */
                    public name: string;

                    /** RenameVolumeRequest newVolumeId. */
                    public newVolumeId: string;

                    /**
                     * Creates a new RenameVolumeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RenameVolumeRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IRenameVolumeRequest): google.cloud.baremetalsolution.v2.RenameVolumeRequest;

                    /**
                     * Encodes the specified RenameVolumeRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.RenameVolumeRequest.verify|verify} messages.
                     * @param message RenameVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IRenameVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RenameVolumeRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.RenameVolumeRequest.verify|verify} messages.
                     * @param message RenameVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IRenameVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RenameVolumeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RenameVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.RenameVolumeRequest;

                    /**
                     * Decodes a RenameVolumeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RenameVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.RenameVolumeRequest;

                    /**
                     * Verifies a RenameVolumeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RenameVolumeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RenameVolumeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.RenameVolumeRequest;

                    /**
                     * Creates a plain object from a RenameVolumeRequest message. Also converts values to other types if specified.
                     * @param message RenameVolumeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.RenameVolumeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RenameVolumeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RenameVolumeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EvictVolumeRequest. */
                interface IEvictVolumeRequest {

                    /** EvictVolumeRequest name */
                    name?: (string|null);
                }

                /** Represents an EvictVolumeRequest. */
                class EvictVolumeRequest implements IEvictVolumeRequest {

                    /**
                     * Constructs a new EvictVolumeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IEvictVolumeRequest);

                    /** EvictVolumeRequest name. */
                    public name: string;

                    /**
                     * Creates a new EvictVolumeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EvictVolumeRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IEvictVolumeRequest): google.cloud.baremetalsolution.v2.EvictVolumeRequest;

                    /**
                     * Encodes the specified EvictVolumeRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.EvictVolumeRequest.verify|verify} messages.
                     * @param message EvictVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IEvictVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EvictVolumeRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.EvictVolumeRequest.verify|verify} messages.
                     * @param message EvictVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IEvictVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EvictVolumeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EvictVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.EvictVolumeRequest;

                    /**
                     * Decodes an EvictVolumeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EvictVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.EvictVolumeRequest;

                    /**
                     * Verifies an EvictVolumeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EvictVolumeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EvictVolumeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.EvictVolumeRequest;

                    /**
                     * Creates a plain object from an EvictVolumeRequest message. Also converts values to other types if specified.
                     * @param message EvictVolumeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.EvictVolumeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EvictVolumeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EvictVolumeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResizeVolumeRequest. */
                interface IResizeVolumeRequest {

                    /** ResizeVolumeRequest volume */
                    volume?: (string|null);

                    /** ResizeVolumeRequest sizeGib */
                    sizeGib?: (number|Long|string|null);
                }

                /** Represents a ResizeVolumeRequest. */
                class ResizeVolumeRequest implements IResizeVolumeRequest {

                    /**
                     * Constructs a new ResizeVolumeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IResizeVolumeRequest);

                    /** ResizeVolumeRequest volume. */
                    public volume: string;

                    /** ResizeVolumeRequest sizeGib. */
                    public sizeGib: (number|Long|string);

                    /**
                     * Creates a new ResizeVolumeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResizeVolumeRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IResizeVolumeRequest): google.cloud.baremetalsolution.v2.ResizeVolumeRequest;

                    /**
                     * Encodes the specified ResizeVolumeRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ResizeVolumeRequest.verify|verify} messages.
                     * @param message ResizeVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IResizeVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResizeVolumeRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ResizeVolumeRequest.verify|verify} messages.
                     * @param message ResizeVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IResizeVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResizeVolumeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResizeVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ResizeVolumeRequest;

                    /**
                     * Decodes a ResizeVolumeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResizeVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ResizeVolumeRequest;

                    /**
                     * Verifies a ResizeVolumeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResizeVolumeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResizeVolumeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ResizeVolumeRequest;

                    /**
                     * Creates a plain object from a ResizeVolumeRequest message. Also converts values to other types if specified.
                     * @param message ResizeVolumeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ResizeVolumeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResizeVolumeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResizeVolumeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NfsShare. */
                interface INfsShare {

                    /** NfsShare name */
                    name?: (string|null);

                    /** NfsShare nfsShareId */
                    nfsShareId?: (string|null);

                    /** NfsShare id */
                    id?: (string|null);

                    /** NfsShare state */
                    state?: (google.cloud.baremetalsolution.v2.NfsShare.State|keyof typeof google.cloud.baremetalsolution.v2.NfsShare.State|null);

                    /** NfsShare volume */
                    volume?: (string|null);

                    /** NfsShare allowedClients */
                    allowedClients?: (google.cloud.baremetalsolution.v2.NfsShare.IAllowedClient[]|null);

                    /** NfsShare labels */
                    labels?: ({ [k: string]: string }|null);

                    /** NfsShare requestedSizeGib */
                    requestedSizeGib?: (number|Long|string|null);

                    /** NfsShare storageType */
                    storageType?: (google.cloud.baremetalsolution.v2.NfsShare.StorageType|keyof typeof google.cloud.baremetalsolution.v2.NfsShare.StorageType|null);
                }

                /** Represents a NfsShare. */
                class NfsShare implements INfsShare {

                    /**
                     * Constructs a new NfsShare.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.INfsShare);

                    /** NfsShare name. */
                    public name: string;

                    /** NfsShare nfsShareId. */
                    public nfsShareId: string;

                    /** NfsShare id. */
                    public id: string;

                    /** NfsShare state. */
                    public state: (google.cloud.baremetalsolution.v2.NfsShare.State|keyof typeof google.cloud.baremetalsolution.v2.NfsShare.State);

                    /** NfsShare volume. */
                    public volume: string;

                    /** NfsShare allowedClients. */
                    public allowedClients: google.cloud.baremetalsolution.v2.NfsShare.IAllowedClient[];

                    /** NfsShare labels. */
                    public labels: { [k: string]: string };

                    /** NfsShare requestedSizeGib. */
                    public requestedSizeGib: (number|Long|string);

                    /** NfsShare storageType. */
                    public storageType: (google.cloud.baremetalsolution.v2.NfsShare.StorageType|keyof typeof google.cloud.baremetalsolution.v2.NfsShare.StorageType);

                    /**
                     * Creates a new NfsShare instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NfsShare instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.INfsShare): google.cloud.baremetalsolution.v2.NfsShare;

                    /**
                     * Encodes the specified NfsShare message. Does not implicitly {@link google.cloud.baremetalsolution.v2.NfsShare.verify|verify} messages.
                     * @param message NfsShare message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.INfsShare, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NfsShare message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.NfsShare.verify|verify} messages.
                     * @param message NfsShare message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.INfsShare, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NfsShare message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NfsShare
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.NfsShare;

                    /**
                     * Decodes a NfsShare message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NfsShare
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.NfsShare;

                    /**
                     * Verifies a NfsShare message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NfsShare message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NfsShare
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.NfsShare;

                    /**
                     * Creates a plain object from a NfsShare message. Also converts values to other types if specified.
                     * @param message NfsShare
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.NfsShare, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NfsShare to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NfsShare
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace NfsShare {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PROVISIONED = 1,
                        CREATING = 2,
                        UPDATING = 3,
                        DELETING = 4
                    }

                    /** MountPermissions enum. */
                    enum MountPermissions {
                        MOUNT_PERMISSIONS_UNSPECIFIED = 0,
                        READ = 1,
                        READ_WRITE = 2
                    }

                    /** Properties of an AllowedClient. */
                    interface IAllowedClient {

                        /** AllowedClient network */
                        network?: (string|null);

                        /** AllowedClient shareIp */
                        shareIp?: (string|null);

                        /** AllowedClient allowedClientsCidr */
                        allowedClientsCidr?: (string|null);

                        /** AllowedClient mountPermissions */
                        mountPermissions?: (google.cloud.baremetalsolution.v2.NfsShare.MountPermissions|keyof typeof google.cloud.baremetalsolution.v2.NfsShare.MountPermissions|null);

                        /** AllowedClient allowDev */
                        allowDev?: (boolean|null);

                        /** AllowedClient allowSuid */
                        allowSuid?: (boolean|null);

                        /** AllowedClient noRootSquash */
                        noRootSquash?: (boolean|null);

                        /** AllowedClient nfsPath */
                        nfsPath?: (string|null);
                    }

                    /** Represents an AllowedClient. */
                    class AllowedClient implements IAllowedClient {

                        /**
                         * Constructs a new AllowedClient.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.baremetalsolution.v2.NfsShare.IAllowedClient);

                        /** AllowedClient network. */
                        public network: string;

                        /** AllowedClient shareIp. */
                        public shareIp: string;

                        /** AllowedClient allowedClientsCidr. */
                        public allowedClientsCidr: string;

                        /** AllowedClient mountPermissions. */
                        public mountPermissions: (google.cloud.baremetalsolution.v2.NfsShare.MountPermissions|keyof typeof google.cloud.baremetalsolution.v2.NfsShare.MountPermissions);

                        /** AllowedClient allowDev. */
                        public allowDev: boolean;

                        /** AllowedClient allowSuid. */
                        public allowSuid: boolean;

                        /** AllowedClient noRootSquash. */
                        public noRootSquash: boolean;

                        /** AllowedClient nfsPath. */
                        public nfsPath: string;

                        /**
                         * Creates a new AllowedClient instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AllowedClient instance
                         */
                        public static create(properties?: google.cloud.baremetalsolution.v2.NfsShare.IAllowedClient): google.cloud.baremetalsolution.v2.NfsShare.AllowedClient;

                        /**
                         * Encodes the specified AllowedClient message. Does not implicitly {@link google.cloud.baremetalsolution.v2.NfsShare.AllowedClient.verify|verify} messages.
                         * @param message AllowedClient message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.baremetalsolution.v2.NfsShare.IAllowedClient, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AllowedClient message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.NfsShare.AllowedClient.verify|verify} messages.
                         * @param message AllowedClient message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.baremetalsolution.v2.NfsShare.IAllowedClient, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AllowedClient message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AllowedClient
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.NfsShare.AllowedClient;

                        /**
                         * Decodes an AllowedClient message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AllowedClient
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.NfsShare.AllowedClient;

                        /**
                         * Verifies an AllowedClient message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AllowedClient message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AllowedClient
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.NfsShare.AllowedClient;

                        /**
                         * Creates a plain object from an AllowedClient message. Also converts values to other types if specified.
                         * @param message AllowedClient
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.baremetalsolution.v2.NfsShare.AllowedClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AllowedClient to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AllowedClient
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** StorageType enum. */
                    enum StorageType {
                        STORAGE_TYPE_UNSPECIFIED = 0,
                        SSD = 1,
                        HDD = 2
                    }
                }

                /** Properties of a GetNfsShareRequest. */
                interface IGetNfsShareRequest {

                    /** GetNfsShareRequest name */
                    name?: (string|null);
                }

                /** Represents a GetNfsShareRequest. */
                class GetNfsShareRequest implements IGetNfsShareRequest {

                    /**
                     * Constructs a new GetNfsShareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IGetNfsShareRequest);

                    /** GetNfsShareRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetNfsShareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetNfsShareRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IGetNfsShareRequest): google.cloud.baremetalsolution.v2.GetNfsShareRequest;

                    /**
                     * Encodes the specified GetNfsShareRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetNfsShareRequest.verify|verify} messages.
                     * @param message GetNfsShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IGetNfsShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetNfsShareRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetNfsShareRequest.verify|verify} messages.
                     * @param message GetNfsShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IGetNfsShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetNfsShareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetNfsShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.GetNfsShareRequest;

                    /**
                     * Decodes a GetNfsShareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetNfsShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.GetNfsShareRequest;

                    /**
                     * Verifies a GetNfsShareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetNfsShareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetNfsShareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.GetNfsShareRequest;

                    /**
                     * Creates a plain object from a GetNfsShareRequest message. Also converts values to other types if specified.
                     * @param message GetNfsShareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.GetNfsShareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetNfsShareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetNfsShareRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNfsSharesRequest. */
                interface IListNfsSharesRequest {

                    /** ListNfsSharesRequest parent */
                    parent?: (string|null);

                    /** ListNfsSharesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListNfsSharesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListNfsSharesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListNfsSharesRequest. */
                class ListNfsSharesRequest implements IListNfsSharesRequest {

                    /**
                     * Constructs a new ListNfsSharesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListNfsSharesRequest);

                    /** ListNfsSharesRequest parent. */
                    public parent: string;

                    /** ListNfsSharesRequest pageSize. */
                    public pageSize: number;

                    /** ListNfsSharesRequest pageToken. */
                    public pageToken: string;

                    /** ListNfsSharesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListNfsSharesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNfsSharesRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListNfsSharesRequest): google.cloud.baremetalsolution.v2.ListNfsSharesRequest;

                    /**
                     * Encodes the specified ListNfsSharesRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListNfsSharesRequest.verify|verify} messages.
                     * @param message ListNfsSharesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListNfsSharesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNfsSharesRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListNfsSharesRequest.verify|verify} messages.
                     * @param message ListNfsSharesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListNfsSharesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNfsSharesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNfsSharesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListNfsSharesRequest;

                    /**
                     * Decodes a ListNfsSharesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNfsSharesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListNfsSharesRequest;

                    /**
                     * Verifies a ListNfsSharesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNfsSharesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNfsSharesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListNfsSharesRequest;

                    /**
                     * Creates a plain object from a ListNfsSharesRequest message. Also converts values to other types if specified.
                     * @param message ListNfsSharesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListNfsSharesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNfsSharesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNfsSharesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNfsSharesResponse. */
                interface IListNfsSharesResponse {

                    /** ListNfsSharesResponse nfsShares */
                    nfsShares?: (google.cloud.baremetalsolution.v2.INfsShare[]|null);

                    /** ListNfsSharesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListNfsSharesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListNfsSharesResponse. */
                class ListNfsSharesResponse implements IListNfsSharesResponse {

                    /**
                     * Constructs a new ListNfsSharesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListNfsSharesResponse);

                    /** ListNfsSharesResponse nfsShares. */
                    public nfsShares: google.cloud.baremetalsolution.v2.INfsShare[];

                    /** ListNfsSharesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListNfsSharesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListNfsSharesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNfsSharesResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListNfsSharesResponse): google.cloud.baremetalsolution.v2.ListNfsSharesResponse;

                    /**
                     * Encodes the specified ListNfsSharesResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListNfsSharesResponse.verify|verify} messages.
                     * @param message ListNfsSharesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListNfsSharesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNfsSharesResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListNfsSharesResponse.verify|verify} messages.
                     * @param message ListNfsSharesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListNfsSharesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNfsSharesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNfsSharesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListNfsSharesResponse;

                    /**
                     * Decodes a ListNfsSharesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNfsSharesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListNfsSharesResponse;

                    /**
                     * Verifies a ListNfsSharesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNfsSharesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNfsSharesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListNfsSharesResponse;

                    /**
                     * Creates a plain object from a ListNfsSharesResponse message. Also converts values to other types if specified.
                     * @param message ListNfsSharesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListNfsSharesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNfsSharesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNfsSharesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateNfsShareRequest. */
                interface IUpdateNfsShareRequest {

                    /** UpdateNfsShareRequest nfsShare */
                    nfsShare?: (google.cloud.baremetalsolution.v2.INfsShare|null);

                    /** UpdateNfsShareRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateNfsShareRequest. */
                class UpdateNfsShareRequest implements IUpdateNfsShareRequest {

                    /**
                     * Constructs a new UpdateNfsShareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IUpdateNfsShareRequest);

                    /** UpdateNfsShareRequest nfsShare. */
                    public nfsShare?: (google.cloud.baremetalsolution.v2.INfsShare|null);

                    /** UpdateNfsShareRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateNfsShareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateNfsShareRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IUpdateNfsShareRequest): google.cloud.baremetalsolution.v2.UpdateNfsShareRequest;

                    /**
                     * Encodes the specified UpdateNfsShareRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.UpdateNfsShareRequest.verify|verify} messages.
                     * @param message UpdateNfsShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IUpdateNfsShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateNfsShareRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.UpdateNfsShareRequest.verify|verify} messages.
                     * @param message UpdateNfsShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IUpdateNfsShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateNfsShareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateNfsShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.UpdateNfsShareRequest;

                    /**
                     * Decodes an UpdateNfsShareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateNfsShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.UpdateNfsShareRequest;

                    /**
                     * Verifies an UpdateNfsShareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateNfsShareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateNfsShareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.UpdateNfsShareRequest;

                    /**
                     * Creates a plain object from an UpdateNfsShareRequest message. Also converts values to other types if specified.
                     * @param message UpdateNfsShareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.UpdateNfsShareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateNfsShareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateNfsShareRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RenameNfsShareRequest. */
                interface IRenameNfsShareRequest {

                    /** RenameNfsShareRequest name */
                    name?: (string|null);

                    /** RenameNfsShareRequest newNfsshareId */
                    newNfsshareId?: (string|null);
                }

                /** Represents a RenameNfsShareRequest. */
                class RenameNfsShareRequest implements IRenameNfsShareRequest {

                    /**
                     * Constructs a new RenameNfsShareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IRenameNfsShareRequest);

                    /** RenameNfsShareRequest name. */
                    public name: string;

                    /** RenameNfsShareRequest newNfsshareId. */
                    public newNfsshareId: string;

                    /**
                     * Creates a new RenameNfsShareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RenameNfsShareRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IRenameNfsShareRequest): google.cloud.baremetalsolution.v2.RenameNfsShareRequest;

                    /**
                     * Encodes the specified RenameNfsShareRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.RenameNfsShareRequest.verify|verify} messages.
                     * @param message RenameNfsShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IRenameNfsShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RenameNfsShareRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.RenameNfsShareRequest.verify|verify} messages.
                     * @param message RenameNfsShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IRenameNfsShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RenameNfsShareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RenameNfsShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.RenameNfsShareRequest;

                    /**
                     * Decodes a RenameNfsShareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RenameNfsShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.RenameNfsShareRequest;

                    /**
                     * Verifies a RenameNfsShareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RenameNfsShareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RenameNfsShareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.RenameNfsShareRequest;

                    /**
                     * Creates a plain object from a RenameNfsShareRequest message. Also converts values to other types if specified.
                     * @param message RenameNfsShareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.RenameNfsShareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RenameNfsShareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RenameNfsShareRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateNfsShareRequest. */
                interface ICreateNfsShareRequest {

                    /** CreateNfsShareRequest parent */
                    parent?: (string|null);

                    /** CreateNfsShareRequest nfsShare */
                    nfsShare?: (google.cloud.baremetalsolution.v2.INfsShare|null);
                }

                /** Represents a CreateNfsShareRequest. */
                class CreateNfsShareRequest implements ICreateNfsShareRequest {

                    /**
                     * Constructs a new CreateNfsShareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.ICreateNfsShareRequest);

                    /** CreateNfsShareRequest parent. */
                    public parent: string;

                    /** CreateNfsShareRequest nfsShare. */
                    public nfsShare?: (google.cloud.baremetalsolution.v2.INfsShare|null);

                    /**
                     * Creates a new CreateNfsShareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateNfsShareRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.ICreateNfsShareRequest): google.cloud.baremetalsolution.v2.CreateNfsShareRequest;

                    /**
                     * Encodes the specified CreateNfsShareRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.CreateNfsShareRequest.verify|verify} messages.
                     * @param message CreateNfsShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.ICreateNfsShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateNfsShareRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.CreateNfsShareRequest.verify|verify} messages.
                     * @param message CreateNfsShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.ICreateNfsShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateNfsShareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateNfsShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.CreateNfsShareRequest;

                    /**
                     * Decodes a CreateNfsShareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateNfsShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.CreateNfsShareRequest;

                    /**
                     * Verifies a CreateNfsShareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateNfsShareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateNfsShareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.CreateNfsShareRequest;

                    /**
                     * Creates a plain object from a CreateNfsShareRequest message. Also converts values to other types if specified.
                     * @param message CreateNfsShareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.CreateNfsShareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateNfsShareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateNfsShareRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteNfsShareRequest. */
                interface IDeleteNfsShareRequest {

                    /** DeleteNfsShareRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteNfsShareRequest. */
                class DeleteNfsShareRequest implements IDeleteNfsShareRequest {

                    /**
                     * Constructs a new DeleteNfsShareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IDeleteNfsShareRequest);

                    /** DeleteNfsShareRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteNfsShareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteNfsShareRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IDeleteNfsShareRequest): google.cloud.baremetalsolution.v2.DeleteNfsShareRequest;

                    /**
                     * Encodes the specified DeleteNfsShareRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.DeleteNfsShareRequest.verify|verify} messages.
                     * @param message DeleteNfsShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IDeleteNfsShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteNfsShareRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.DeleteNfsShareRequest.verify|verify} messages.
                     * @param message DeleteNfsShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IDeleteNfsShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteNfsShareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteNfsShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.DeleteNfsShareRequest;

                    /**
                     * Decodes a DeleteNfsShareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteNfsShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.DeleteNfsShareRequest;

                    /**
                     * Verifies a DeleteNfsShareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteNfsShareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteNfsShareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.DeleteNfsShareRequest;

                    /**
                     * Creates a plain object from a DeleteNfsShareRequest message. Also converts values to other types if specified.
                     * @param message DeleteNfsShareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.DeleteNfsShareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteNfsShareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteNfsShareRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a OSImage. */
                interface IOSImage {

                    /** OSImage name */
                    name?: (string|null);

                    /** OSImage code */
                    code?: (string|null);

                    /** OSImage description */
                    description?: (string|null);

                    /** OSImage applicableInstanceTypes */
                    applicableInstanceTypes?: (string[]|null);

                    /** OSImage supportedNetworkTemplates */
                    supportedNetworkTemplates?: (string[]|null);
                }

                /** Represents a OSImage. */
                class OSImage implements IOSImage {

                    /**
                     * Constructs a new OSImage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IOSImage);

                    /** OSImage name. */
                    public name: string;

                    /** OSImage code. */
                    public code: string;

                    /** OSImage description. */
                    public description: string;

                    /** OSImage applicableInstanceTypes. */
                    public applicableInstanceTypes: string[];

                    /** OSImage supportedNetworkTemplates. */
                    public supportedNetworkTemplates: string[];

                    /**
                     * Creates a new OSImage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OSImage instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IOSImage): google.cloud.baremetalsolution.v2.OSImage;

                    /**
                     * Encodes the specified OSImage message. Does not implicitly {@link google.cloud.baremetalsolution.v2.OSImage.verify|verify} messages.
                     * @param message OSImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IOSImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OSImage message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.OSImage.verify|verify} messages.
                     * @param message OSImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IOSImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a OSImage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OSImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.OSImage;

                    /**
                     * Decodes a OSImage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OSImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.OSImage;

                    /**
                     * Verifies a OSImage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a OSImage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OSImage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.OSImage;

                    /**
                     * Creates a plain object from a OSImage message. Also converts values to other types if specified.
                     * @param message OSImage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.OSImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OSImage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OSImage
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOSImagesRequest. */
                interface IListOSImagesRequest {

                    /** ListOSImagesRequest parent */
                    parent?: (string|null);

                    /** ListOSImagesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListOSImagesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListOSImagesRequest. */
                class ListOSImagesRequest implements IListOSImagesRequest {

                    /**
                     * Constructs a new ListOSImagesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListOSImagesRequest);

                    /** ListOSImagesRequest parent. */
                    public parent: string;

                    /** ListOSImagesRequest pageSize. */
                    public pageSize: number;

                    /** ListOSImagesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListOSImagesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOSImagesRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListOSImagesRequest): google.cloud.baremetalsolution.v2.ListOSImagesRequest;

                    /**
                     * Encodes the specified ListOSImagesRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListOSImagesRequest.verify|verify} messages.
                     * @param message ListOSImagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListOSImagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOSImagesRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListOSImagesRequest.verify|verify} messages.
                     * @param message ListOSImagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListOSImagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOSImagesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOSImagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListOSImagesRequest;

                    /**
                     * Decodes a ListOSImagesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOSImagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListOSImagesRequest;

                    /**
                     * Verifies a ListOSImagesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOSImagesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOSImagesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListOSImagesRequest;

                    /**
                     * Creates a plain object from a ListOSImagesRequest message. Also converts values to other types if specified.
                     * @param message ListOSImagesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListOSImagesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOSImagesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOSImagesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListOSImagesResponse. */
                interface IListOSImagesResponse {

                    /** ListOSImagesResponse osImages */
                    osImages?: (google.cloud.baremetalsolution.v2.IOSImage[]|null);

                    /** ListOSImagesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListOSImagesResponse. */
                class ListOSImagesResponse implements IListOSImagesResponse {

                    /**
                     * Constructs a new ListOSImagesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListOSImagesResponse);

                    /** ListOSImagesResponse osImages. */
                    public osImages: google.cloud.baremetalsolution.v2.IOSImage[];

                    /** ListOSImagesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListOSImagesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListOSImagesResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListOSImagesResponse): google.cloud.baremetalsolution.v2.ListOSImagesResponse;

                    /**
                     * Encodes the specified ListOSImagesResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListOSImagesResponse.verify|verify} messages.
                     * @param message ListOSImagesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListOSImagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListOSImagesResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListOSImagesResponse.verify|verify} messages.
                     * @param message ListOSImagesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListOSImagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListOSImagesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListOSImagesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListOSImagesResponse;

                    /**
                     * Decodes a ListOSImagesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListOSImagesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListOSImagesResponse;

                    /**
                     * Verifies a ListOSImagesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListOSImagesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListOSImagesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListOSImagesResponse;

                    /**
                     * Creates a plain object from a ListOSImagesResponse message. Also converts values to other types if specified.
                     * @param message ListOSImagesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListOSImagesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListOSImagesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListOSImagesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ProvisioningConfig. */
                interface IProvisioningConfig {

                    /** ProvisioningConfig name */
                    name?: (string|null);

                    /** ProvisioningConfig instances */
                    instances?: (google.cloud.baremetalsolution.v2.IInstanceConfig[]|null);

                    /** ProvisioningConfig networks */
                    networks?: (google.cloud.baremetalsolution.v2.INetworkConfig[]|null);

                    /** ProvisioningConfig volumes */
                    volumes?: (google.cloud.baremetalsolution.v2.IVolumeConfig[]|null);

                    /** ProvisioningConfig ticketId */
                    ticketId?: (string|null);

                    /** ProvisioningConfig handoverServiceAccount */
                    handoverServiceAccount?: (string|null);

                    /** ProvisioningConfig email */
                    email?: (string|null);

                    /** ProvisioningConfig state */
                    state?: (google.cloud.baremetalsolution.v2.ProvisioningConfig.State|keyof typeof google.cloud.baremetalsolution.v2.ProvisioningConfig.State|null);

                    /** ProvisioningConfig location */
                    location?: (string|null);

                    /** ProvisioningConfig updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ProvisioningConfig cloudConsoleUri */
                    cloudConsoleUri?: (string|null);

                    /** ProvisioningConfig vpcScEnabled */
                    vpcScEnabled?: (boolean|null);

                    /** ProvisioningConfig statusMessage */
                    statusMessage?: (string|null);

                    /** ProvisioningConfig customId */
                    customId?: (string|null);
                }

                /** Represents a ProvisioningConfig. */
                class ProvisioningConfig implements IProvisioningConfig {

                    /**
                     * Constructs a new ProvisioningConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IProvisioningConfig);

                    /** ProvisioningConfig name. */
                    public name: string;

                    /** ProvisioningConfig instances. */
                    public instances: google.cloud.baremetalsolution.v2.IInstanceConfig[];

                    /** ProvisioningConfig networks. */
                    public networks: google.cloud.baremetalsolution.v2.INetworkConfig[];

                    /** ProvisioningConfig volumes. */
                    public volumes: google.cloud.baremetalsolution.v2.IVolumeConfig[];

                    /** ProvisioningConfig ticketId. */
                    public ticketId: string;

                    /** ProvisioningConfig handoverServiceAccount. */
                    public handoverServiceAccount: string;

                    /** ProvisioningConfig email. */
                    public email: string;

                    /** ProvisioningConfig state. */
                    public state: (google.cloud.baremetalsolution.v2.ProvisioningConfig.State|keyof typeof google.cloud.baremetalsolution.v2.ProvisioningConfig.State);

                    /** ProvisioningConfig location. */
                    public location: string;

                    /** ProvisioningConfig updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ProvisioningConfig cloudConsoleUri. */
                    public cloudConsoleUri: string;

                    /** ProvisioningConfig vpcScEnabled. */
                    public vpcScEnabled: boolean;

                    /** ProvisioningConfig statusMessage. */
                    public statusMessage: string;

                    /** ProvisioningConfig customId. */
                    public customId: string;

                    /**
                     * Creates a new ProvisioningConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProvisioningConfig instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IProvisioningConfig): google.cloud.baremetalsolution.v2.ProvisioningConfig;

                    /**
                     * Encodes the specified ProvisioningConfig message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ProvisioningConfig.verify|verify} messages.
                     * @param message ProvisioningConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IProvisioningConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProvisioningConfig message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ProvisioningConfig.verify|verify} messages.
                     * @param message ProvisioningConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IProvisioningConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProvisioningConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProvisioningConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ProvisioningConfig;

                    /**
                     * Decodes a ProvisioningConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProvisioningConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ProvisioningConfig;

                    /**
                     * Verifies a ProvisioningConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProvisioningConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProvisioningConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ProvisioningConfig;

                    /**
                     * Creates a plain object from a ProvisioningConfig message. Also converts values to other types if specified.
                     * @param message ProvisioningConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ProvisioningConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProvisioningConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ProvisioningConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ProvisioningConfig {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        DRAFT = 1,
                        SUBMITTED = 2,
                        PROVISIONING = 3,
                        PROVISIONED = 4,
                        VALIDATED = 5,
                        CANCELLED = 6,
                        FAILED = 7
                    }
                }

                /** Properties of a SubmitProvisioningConfigRequest. */
                interface ISubmitProvisioningConfigRequest {

                    /** SubmitProvisioningConfigRequest parent */
                    parent?: (string|null);

                    /** SubmitProvisioningConfigRequest provisioningConfig */
                    provisioningConfig?: (google.cloud.baremetalsolution.v2.IProvisioningConfig|null);

                    /** SubmitProvisioningConfigRequest email */
                    email?: (string|null);
                }

                /** Represents a SubmitProvisioningConfigRequest. */
                class SubmitProvisioningConfigRequest implements ISubmitProvisioningConfigRequest {

                    /**
                     * Constructs a new SubmitProvisioningConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.ISubmitProvisioningConfigRequest);

                    /** SubmitProvisioningConfigRequest parent. */
                    public parent: string;

                    /** SubmitProvisioningConfigRequest provisioningConfig. */
                    public provisioningConfig?: (google.cloud.baremetalsolution.v2.IProvisioningConfig|null);

                    /** SubmitProvisioningConfigRequest email. */
                    public email: string;

                    /**
                     * Creates a new SubmitProvisioningConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubmitProvisioningConfigRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.ISubmitProvisioningConfigRequest): google.cloud.baremetalsolution.v2.SubmitProvisioningConfigRequest;

                    /**
                     * Encodes the specified SubmitProvisioningConfigRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.SubmitProvisioningConfigRequest.verify|verify} messages.
                     * @param message SubmitProvisioningConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.ISubmitProvisioningConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubmitProvisioningConfigRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.SubmitProvisioningConfigRequest.verify|verify} messages.
                     * @param message SubmitProvisioningConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.ISubmitProvisioningConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubmitProvisioningConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubmitProvisioningConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.SubmitProvisioningConfigRequest;

                    /**
                     * Decodes a SubmitProvisioningConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubmitProvisioningConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.SubmitProvisioningConfigRequest;

                    /**
                     * Verifies a SubmitProvisioningConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubmitProvisioningConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubmitProvisioningConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.SubmitProvisioningConfigRequest;

                    /**
                     * Creates a plain object from a SubmitProvisioningConfigRequest message. Also converts values to other types if specified.
                     * @param message SubmitProvisioningConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.SubmitProvisioningConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubmitProvisioningConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SubmitProvisioningConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SubmitProvisioningConfigResponse. */
                interface ISubmitProvisioningConfigResponse {

                    /** SubmitProvisioningConfigResponse provisioningConfig */
                    provisioningConfig?: (google.cloud.baremetalsolution.v2.IProvisioningConfig|null);
                }

                /** Represents a SubmitProvisioningConfigResponse. */
                class SubmitProvisioningConfigResponse implements ISubmitProvisioningConfigResponse {

                    /**
                     * Constructs a new SubmitProvisioningConfigResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.ISubmitProvisioningConfigResponse);

                    /** SubmitProvisioningConfigResponse provisioningConfig. */
                    public provisioningConfig?: (google.cloud.baremetalsolution.v2.IProvisioningConfig|null);

                    /**
                     * Creates a new SubmitProvisioningConfigResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubmitProvisioningConfigResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.ISubmitProvisioningConfigResponse): google.cloud.baremetalsolution.v2.SubmitProvisioningConfigResponse;

                    /**
                     * Encodes the specified SubmitProvisioningConfigResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.SubmitProvisioningConfigResponse.verify|verify} messages.
                     * @param message SubmitProvisioningConfigResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.ISubmitProvisioningConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubmitProvisioningConfigResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.SubmitProvisioningConfigResponse.verify|verify} messages.
                     * @param message SubmitProvisioningConfigResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.ISubmitProvisioningConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubmitProvisioningConfigResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubmitProvisioningConfigResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.SubmitProvisioningConfigResponse;

                    /**
                     * Decodes a SubmitProvisioningConfigResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubmitProvisioningConfigResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.SubmitProvisioningConfigResponse;

                    /**
                     * Verifies a SubmitProvisioningConfigResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubmitProvisioningConfigResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubmitProvisioningConfigResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.SubmitProvisioningConfigResponse;

                    /**
                     * Creates a plain object from a SubmitProvisioningConfigResponse message. Also converts values to other types if specified.
                     * @param message SubmitProvisioningConfigResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.SubmitProvisioningConfigResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubmitProvisioningConfigResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SubmitProvisioningConfigResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ProvisioningQuota. */
                interface IProvisioningQuota {

                    /** ProvisioningQuota name */
                    name?: (string|null);

                    /** ProvisioningQuota assetType */
                    assetType?: (google.cloud.baremetalsolution.v2.ProvisioningQuota.AssetType|keyof typeof google.cloud.baremetalsolution.v2.ProvisioningQuota.AssetType|null);

                    /** ProvisioningQuota gcpService */
                    gcpService?: (string|null);

                    /** ProvisioningQuota location */
                    location?: (string|null);

                    /** ProvisioningQuota availableCount */
                    availableCount?: (number|null);

                    /** ProvisioningQuota instanceQuota */
                    instanceQuota?: (google.cloud.baremetalsolution.v2.IInstanceQuota|null);

                    /** ProvisioningQuota serverCount */
                    serverCount?: (number|Long|string|null);

                    /** ProvisioningQuota networkBandwidth */
                    networkBandwidth?: (number|Long|string|null);

                    /** ProvisioningQuota storageGib */
                    storageGib?: (number|Long|string|null);
                }

                /** Represents a ProvisioningQuota. */
                class ProvisioningQuota implements IProvisioningQuota {

                    /**
                     * Constructs a new ProvisioningQuota.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IProvisioningQuota);

                    /** ProvisioningQuota name. */
                    public name: string;

                    /** ProvisioningQuota assetType. */
                    public assetType: (google.cloud.baremetalsolution.v2.ProvisioningQuota.AssetType|keyof typeof google.cloud.baremetalsolution.v2.ProvisioningQuota.AssetType);

                    /** ProvisioningQuota gcpService. */
                    public gcpService: string;

                    /** ProvisioningQuota location. */
                    public location: string;

                    /** ProvisioningQuota availableCount. */
                    public availableCount: number;

                    /** ProvisioningQuota instanceQuota. */
                    public instanceQuota?: (google.cloud.baremetalsolution.v2.IInstanceQuota|null);

                    /** ProvisioningQuota serverCount. */
                    public serverCount?: (number|Long|string|null);

                    /** ProvisioningQuota networkBandwidth. */
                    public networkBandwidth?: (number|Long|string|null);

                    /** ProvisioningQuota storageGib. */
                    public storageGib?: (number|Long|string|null);

                    /** ProvisioningQuota quota. */
                    public quota?: "instanceQuota";

                    /** ProvisioningQuota availability. */
                    public availability?: ("serverCount"|"networkBandwidth"|"storageGib");

                    /**
                     * Creates a new ProvisioningQuota instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProvisioningQuota instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IProvisioningQuota): google.cloud.baremetalsolution.v2.ProvisioningQuota;

                    /**
                     * Encodes the specified ProvisioningQuota message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ProvisioningQuota.verify|verify} messages.
                     * @param message ProvisioningQuota message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IProvisioningQuota, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProvisioningQuota message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ProvisioningQuota.verify|verify} messages.
                     * @param message ProvisioningQuota message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IProvisioningQuota, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProvisioningQuota message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProvisioningQuota
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ProvisioningQuota;

                    /**
                     * Decodes a ProvisioningQuota message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProvisioningQuota
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ProvisioningQuota;

                    /**
                     * Verifies a ProvisioningQuota message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProvisioningQuota message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProvisioningQuota
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ProvisioningQuota;

                    /**
                     * Creates a plain object from a ProvisioningQuota message. Also converts values to other types if specified.
                     * @param message ProvisioningQuota
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ProvisioningQuota, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProvisioningQuota to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ProvisioningQuota
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ProvisioningQuota {

                    /** AssetType enum. */
                    enum AssetType {
                        ASSET_TYPE_UNSPECIFIED = 0,
                        ASSET_TYPE_SERVER = 1,
                        ASSET_TYPE_STORAGE = 2,
                        ASSET_TYPE_NETWORK = 3
                    }
                }

                /** Properties of a ListProvisioningQuotasRequest. */
                interface IListProvisioningQuotasRequest {

                    /** ListProvisioningQuotasRequest parent */
                    parent?: (string|null);

                    /** ListProvisioningQuotasRequest pageSize */
                    pageSize?: (number|null);

                    /** ListProvisioningQuotasRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListProvisioningQuotasRequest. */
                class ListProvisioningQuotasRequest implements IListProvisioningQuotasRequest {

                    /**
                     * Constructs a new ListProvisioningQuotasRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListProvisioningQuotasRequest);

                    /** ListProvisioningQuotasRequest parent. */
                    public parent: string;

                    /** ListProvisioningQuotasRequest pageSize. */
                    public pageSize: number;

                    /** ListProvisioningQuotasRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListProvisioningQuotasRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProvisioningQuotasRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListProvisioningQuotasRequest): google.cloud.baremetalsolution.v2.ListProvisioningQuotasRequest;

                    /**
                     * Encodes the specified ListProvisioningQuotasRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListProvisioningQuotasRequest.verify|verify} messages.
                     * @param message ListProvisioningQuotasRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListProvisioningQuotasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProvisioningQuotasRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListProvisioningQuotasRequest.verify|verify} messages.
                     * @param message ListProvisioningQuotasRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListProvisioningQuotasRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProvisioningQuotasRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProvisioningQuotasRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListProvisioningQuotasRequest;

                    /**
                     * Decodes a ListProvisioningQuotasRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProvisioningQuotasRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListProvisioningQuotasRequest;

                    /**
                     * Verifies a ListProvisioningQuotasRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProvisioningQuotasRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProvisioningQuotasRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListProvisioningQuotasRequest;

                    /**
                     * Creates a plain object from a ListProvisioningQuotasRequest message. Also converts values to other types if specified.
                     * @param message ListProvisioningQuotasRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListProvisioningQuotasRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProvisioningQuotasRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListProvisioningQuotasRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListProvisioningQuotasResponse. */
                interface IListProvisioningQuotasResponse {

                    /** ListProvisioningQuotasResponse provisioningQuotas */
                    provisioningQuotas?: (google.cloud.baremetalsolution.v2.IProvisioningQuota[]|null);

                    /** ListProvisioningQuotasResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListProvisioningQuotasResponse. */
                class ListProvisioningQuotasResponse implements IListProvisioningQuotasResponse {

                    /**
                     * Constructs a new ListProvisioningQuotasResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListProvisioningQuotasResponse);

                    /** ListProvisioningQuotasResponse provisioningQuotas. */
                    public provisioningQuotas: google.cloud.baremetalsolution.v2.IProvisioningQuota[];

                    /** ListProvisioningQuotasResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListProvisioningQuotasResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProvisioningQuotasResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListProvisioningQuotasResponse): google.cloud.baremetalsolution.v2.ListProvisioningQuotasResponse;

                    /**
                     * Encodes the specified ListProvisioningQuotasResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListProvisioningQuotasResponse.verify|verify} messages.
                     * @param message ListProvisioningQuotasResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListProvisioningQuotasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProvisioningQuotasResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListProvisioningQuotasResponse.verify|verify} messages.
                     * @param message ListProvisioningQuotasResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListProvisioningQuotasResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProvisioningQuotasResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProvisioningQuotasResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListProvisioningQuotasResponse;

                    /**
                     * Decodes a ListProvisioningQuotasResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProvisioningQuotasResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListProvisioningQuotasResponse;

                    /**
                     * Verifies a ListProvisioningQuotasResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProvisioningQuotasResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProvisioningQuotasResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListProvisioningQuotasResponse;

                    /**
                     * Creates a plain object from a ListProvisioningQuotasResponse message. Also converts values to other types if specified.
                     * @param message ListProvisioningQuotasResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListProvisioningQuotasResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProvisioningQuotasResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListProvisioningQuotasResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InstanceConfig. */
                interface IInstanceConfig {

                    /** InstanceConfig name */
                    name?: (string|null);

                    /** InstanceConfig id */
                    id?: (string|null);

                    /** InstanceConfig instanceType */
                    instanceType?: (string|null);

                    /** InstanceConfig hyperthreading */
                    hyperthreading?: (boolean|null);

                    /** InstanceConfig osImage */
                    osImage?: (string|null);

                    /** InstanceConfig clientNetwork */
                    clientNetwork?: (google.cloud.baremetalsolution.v2.InstanceConfig.INetworkAddress|null);

                    /** InstanceConfig privateNetwork */
                    privateNetwork?: (google.cloud.baremetalsolution.v2.InstanceConfig.INetworkAddress|null);

                    /** InstanceConfig userNote */
                    userNote?: (string|null);

                    /** InstanceConfig accountNetworksEnabled */
                    accountNetworksEnabled?: (boolean|null);

                    /** InstanceConfig networkConfig */
                    networkConfig?: (google.cloud.baremetalsolution.v2.InstanceConfig.NetworkConfig|keyof typeof google.cloud.baremetalsolution.v2.InstanceConfig.NetworkConfig|null);

                    /** InstanceConfig networkTemplate */
                    networkTemplate?: (string|null);

                    /** InstanceConfig logicalInterfaces */
                    logicalInterfaces?: (google.cloud.baremetalsolution.v2.ILogicalInterface[]|null);

                    /** InstanceConfig sshKeyNames */
                    sshKeyNames?: (string[]|null);
                }

                /** Represents an InstanceConfig. */
                class InstanceConfig implements IInstanceConfig {

                    /**
                     * Constructs a new InstanceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IInstanceConfig);

                    /** InstanceConfig name. */
                    public name: string;

                    /** InstanceConfig id. */
                    public id: string;

                    /** InstanceConfig instanceType. */
                    public instanceType: string;

                    /** InstanceConfig hyperthreading. */
                    public hyperthreading: boolean;

                    /** InstanceConfig osImage. */
                    public osImage: string;

                    /** InstanceConfig clientNetwork. */
                    public clientNetwork?: (google.cloud.baremetalsolution.v2.InstanceConfig.INetworkAddress|null);

                    /** InstanceConfig privateNetwork. */
                    public privateNetwork?: (google.cloud.baremetalsolution.v2.InstanceConfig.INetworkAddress|null);

                    /** InstanceConfig userNote. */
                    public userNote: string;

                    /** InstanceConfig accountNetworksEnabled. */
                    public accountNetworksEnabled: boolean;

                    /** InstanceConfig networkConfig. */
                    public networkConfig: (google.cloud.baremetalsolution.v2.InstanceConfig.NetworkConfig|keyof typeof google.cloud.baremetalsolution.v2.InstanceConfig.NetworkConfig);

                    /** InstanceConfig networkTemplate. */
                    public networkTemplate: string;

                    /** InstanceConfig logicalInterfaces. */
                    public logicalInterfaces: google.cloud.baremetalsolution.v2.ILogicalInterface[];

                    /** InstanceConfig sshKeyNames. */
                    public sshKeyNames: string[];

                    /**
                     * Creates a new InstanceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstanceConfig instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IInstanceConfig): google.cloud.baremetalsolution.v2.InstanceConfig;

                    /**
                     * Encodes the specified InstanceConfig message. Does not implicitly {@link google.cloud.baremetalsolution.v2.InstanceConfig.verify|verify} messages.
                     * @param message InstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstanceConfig message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.InstanceConfig.verify|verify} messages.
                     * @param message InstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstanceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.InstanceConfig;

                    /**
                     * Decodes an InstanceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.InstanceConfig;

                    /**
                     * Verifies an InstanceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstanceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstanceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.InstanceConfig;

                    /**
                     * Creates a plain object from an InstanceConfig message. Also converts values to other types if specified.
                     * @param message InstanceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.InstanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstanceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InstanceConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace InstanceConfig {

                    /** Properties of a NetworkAddress. */
                    interface INetworkAddress {

                        /** NetworkAddress networkId */
                        networkId?: (string|null);

                        /** NetworkAddress address */
                        address?: (string|null);

                        /** NetworkAddress existingNetworkId */
                        existingNetworkId?: (string|null);
                    }

                    /** Represents a NetworkAddress. */
                    class NetworkAddress implements INetworkAddress {

                        /**
                         * Constructs a new NetworkAddress.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.baremetalsolution.v2.InstanceConfig.INetworkAddress);

                        /** NetworkAddress networkId. */
                        public networkId: string;

                        /** NetworkAddress address. */
                        public address: string;

                        /** NetworkAddress existingNetworkId. */
                        public existingNetworkId: string;

                        /**
                         * Creates a new NetworkAddress instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NetworkAddress instance
                         */
                        public static create(properties?: google.cloud.baremetalsolution.v2.InstanceConfig.INetworkAddress): google.cloud.baremetalsolution.v2.InstanceConfig.NetworkAddress;

                        /**
                         * Encodes the specified NetworkAddress message. Does not implicitly {@link google.cloud.baremetalsolution.v2.InstanceConfig.NetworkAddress.verify|verify} messages.
                         * @param message NetworkAddress message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.baremetalsolution.v2.InstanceConfig.INetworkAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NetworkAddress message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.InstanceConfig.NetworkAddress.verify|verify} messages.
                         * @param message NetworkAddress message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.baremetalsolution.v2.InstanceConfig.INetworkAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NetworkAddress message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NetworkAddress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.InstanceConfig.NetworkAddress;

                        /**
                         * Decodes a NetworkAddress message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NetworkAddress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.InstanceConfig.NetworkAddress;

                        /**
                         * Verifies a NetworkAddress message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NetworkAddress message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NetworkAddress
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.InstanceConfig.NetworkAddress;

                        /**
                         * Creates a plain object from a NetworkAddress message. Also converts values to other types if specified.
                         * @param message NetworkAddress
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.baremetalsolution.v2.InstanceConfig.NetworkAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NetworkAddress to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NetworkAddress
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** NetworkConfig enum. */
                    enum NetworkConfig {
                        NETWORKCONFIG_UNSPECIFIED = 0,
                        SINGLE_VLAN = 1,
                        MULTI_VLAN = 2
                    }
                }

                /** Properties of a VolumeConfig. */
                interface IVolumeConfig {

                    /** VolumeConfig name */
                    name?: (string|null);

                    /** VolumeConfig id */
                    id?: (string|null);

                    /** VolumeConfig snapshotsEnabled */
                    snapshotsEnabled?: (boolean|null);

                    /** VolumeConfig type */
                    type?: (google.cloud.baremetalsolution.v2.VolumeConfig.Type|keyof typeof google.cloud.baremetalsolution.v2.VolumeConfig.Type|null);

                    /** VolumeConfig protocol */
                    protocol?: (google.cloud.baremetalsolution.v2.VolumeConfig.Protocol|keyof typeof google.cloud.baremetalsolution.v2.VolumeConfig.Protocol|null);

                    /** VolumeConfig sizeGb */
                    sizeGb?: (number|null);

                    /** VolumeConfig lunRanges */
                    lunRanges?: (google.cloud.baremetalsolution.v2.VolumeConfig.ILunRange[]|null);

                    /** VolumeConfig machineIds */
                    machineIds?: (string[]|null);

                    /** VolumeConfig nfsExports */
                    nfsExports?: (google.cloud.baremetalsolution.v2.VolumeConfig.INfsExport[]|null);

                    /** VolumeConfig userNote */
                    userNote?: (string|null);

                    /** VolumeConfig gcpService */
                    gcpService?: (string|null);

                    /** VolumeConfig performanceTier */
                    performanceTier?: (google.cloud.baremetalsolution.v2.VolumePerformanceTier|keyof typeof google.cloud.baremetalsolution.v2.VolumePerformanceTier|null);
                }

                /** Represents a VolumeConfig. */
                class VolumeConfig implements IVolumeConfig {

                    /**
                     * Constructs a new VolumeConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IVolumeConfig);

                    /** VolumeConfig name. */
                    public name: string;

                    /** VolumeConfig id. */
                    public id: string;

                    /** VolumeConfig snapshotsEnabled. */
                    public snapshotsEnabled: boolean;

                    /** VolumeConfig type. */
                    public type: (google.cloud.baremetalsolution.v2.VolumeConfig.Type|keyof typeof google.cloud.baremetalsolution.v2.VolumeConfig.Type);

                    /** VolumeConfig protocol. */
                    public protocol: (google.cloud.baremetalsolution.v2.VolumeConfig.Protocol|keyof typeof google.cloud.baremetalsolution.v2.VolumeConfig.Protocol);

                    /** VolumeConfig sizeGb. */
                    public sizeGb: number;

                    /** VolumeConfig lunRanges. */
                    public lunRanges: google.cloud.baremetalsolution.v2.VolumeConfig.ILunRange[];

                    /** VolumeConfig machineIds. */
                    public machineIds: string[];

                    /** VolumeConfig nfsExports. */
                    public nfsExports: google.cloud.baremetalsolution.v2.VolumeConfig.INfsExport[];

                    /** VolumeConfig userNote. */
                    public userNote: string;

                    /** VolumeConfig gcpService. */
                    public gcpService: string;

                    /** VolumeConfig performanceTier. */
                    public performanceTier: (google.cloud.baremetalsolution.v2.VolumePerformanceTier|keyof typeof google.cloud.baremetalsolution.v2.VolumePerformanceTier);

                    /**
                     * Creates a new VolumeConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VolumeConfig instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IVolumeConfig): google.cloud.baremetalsolution.v2.VolumeConfig;

                    /**
                     * Encodes the specified VolumeConfig message. Does not implicitly {@link google.cloud.baremetalsolution.v2.VolumeConfig.verify|verify} messages.
                     * @param message VolumeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IVolumeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VolumeConfig message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.VolumeConfig.verify|verify} messages.
                     * @param message VolumeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IVolumeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VolumeConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VolumeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.VolumeConfig;

                    /**
                     * Decodes a VolumeConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VolumeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.VolumeConfig;

                    /**
                     * Verifies a VolumeConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VolumeConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VolumeConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.VolumeConfig;

                    /**
                     * Creates a plain object from a VolumeConfig message. Also converts values to other types if specified.
                     * @param message VolumeConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.VolumeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VolumeConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VolumeConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VolumeConfig {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        FLASH = 1,
                        DISK = 2
                    }

                    /** Protocol enum. */
                    enum Protocol {
                        PROTOCOL_UNSPECIFIED = 0,
                        PROTOCOL_FC = 1,
                        PROTOCOL_NFS = 2
                    }

                    /** Properties of a LunRange. */
                    interface ILunRange {

                        /** LunRange quantity */
                        quantity?: (number|null);

                        /** LunRange sizeGb */
                        sizeGb?: (number|null);
                    }

                    /** Represents a LunRange. */
                    class LunRange implements ILunRange {

                        /**
                         * Constructs a new LunRange.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.baremetalsolution.v2.VolumeConfig.ILunRange);

                        /** LunRange quantity. */
                        public quantity: number;

                        /** LunRange sizeGb. */
                        public sizeGb: number;

                        /**
                         * Creates a new LunRange instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LunRange instance
                         */
                        public static create(properties?: google.cloud.baremetalsolution.v2.VolumeConfig.ILunRange): google.cloud.baremetalsolution.v2.VolumeConfig.LunRange;

                        /**
                         * Encodes the specified LunRange message. Does not implicitly {@link google.cloud.baremetalsolution.v2.VolumeConfig.LunRange.verify|verify} messages.
                         * @param message LunRange message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.baremetalsolution.v2.VolumeConfig.ILunRange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LunRange message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.VolumeConfig.LunRange.verify|verify} messages.
                         * @param message LunRange message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.baremetalsolution.v2.VolumeConfig.ILunRange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LunRange message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LunRange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.VolumeConfig.LunRange;

                        /**
                         * Decodes a LunRange message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LunRange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.VolumeConfig.LunRange;

                        /**
                         * Verifies a LunRange message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LunRange message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LunRange
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.VolumeConfig.LunRange;

                        /**
                         * Creates a plain object from a LunRange message. Also converts values to other types if specified.
                         * @param message LunRange
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.baremetalsolution.v2.VolumeConfig.LunRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LunRange to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LunRange
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NfsExport. */
                    interface INfsExport {

                        /** NfsExport networkId */
                        networkId?: (string|null);

                        /** NfsExport machineId */
                        machineId?: (string|null);

                        /** NfsExport cidr */
                        cidr?: (string|null);

                        /** NfsExport permissions */
                        permissions?: (google.cloud.baremetalsolution.v2.VolumeConfig.NfsExport.Permissions|keyof typeof google.cloud.baremetalsolution.v2.VolumeConfig.NfsExport.Permissions|null);

                        /** NfsExport noRootSquash */
                        noRootSquash?: (boolean|null);

                        /** NfsExport allowSuid */
                        allowSuid?: (boolean|null);

                        /** NfsExport allowDev */
                        allowDev?: (boolean|null);
                    }

                    /** Represents a NfsExport. */
                    class NfsExport implements INfsExport {

                        /**
                         * Constructs a new NfsExport.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.baremetalsolution.v2.VolumeConfig.INfsExport);

                        /** NfsExport networkId. */
                        public networkId: string;

                        /** NfsExport machineId. */
                        public machineId?: (string|null);

                        /** NfsExport cidr. */
                        public cidr?: (string|null);

                        /** NfsExport permissions. */
                        public permissions: (google.cloud.baremetalsolution.v2.VolumeConfig.NfsExport.Permissions|keyof typeof google.cloud.baremetalsolution.v2.VolumeConfig.NfsExport.Permissions);

                        /** NfsExport noRootSquash. */
                        public noRootSquash: boolean;

                        /** NfsExport allowSuid. */
                        public allowSuid: boolean;

                        /** NfsExport allowDev. */
                        public allowDev: boolean;

                        /** NfsExport client. */
                        public client?: ("machineId"|"cidr");

                        /**
                         * Creates a new NfsExport instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NfsExport instance
                         */
                        public static create(properties?: google.cloud.baremetalsolution.v2.VolumeConfig.INfsExport): google.cloud.baremetalsolution.v2.VolumeConfig.NfsExport;

                        /**
                         * Encodes the specified NfsExport message. Does not implicitly {@link google.cloud.baremetalsolution.v2.VolumeConfig.NfsExport.verify|verify} messages.
                         * @param message NfsExport message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.baremetalsolution.v2.VolumeConfig.INfsExport, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NfsExport message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.VolumeConfig.NfsExport.verify|verify} messages.
                         * @param message NfsExport message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.baremetalsolution.v2.VolumeConfig.INfsExport, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NfsExport message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NfsExport
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.VolumeConfig.NfsExport;

                        /**
                         * Decodes a NfsExport message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NfsExport
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.VolumeConfig.NfsExport;

                        /**
                         * Verifies a NfsExport message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NfsExport message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NfsExport
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.VolumeConfig.NfsExport;

                        /**
                         * Creates a plain object from a NfsExport message. Also converts values to other types if specified.
                         * @param message NfsExport
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.baremetalsolution.v2.VolumeConfig.NfsExport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NfsExport to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NfsExport
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace NfsExport {

                        /** Permissions enum. */
                        enum Permissions {
                            PERMISSIONS_UNSPECIFIED = 0,
                            READ_ONLY = 1,
                            READ_WRITE = 2
                        }
                    }
                }

                /** Properties of a NetworkConfig. */
                interface INetworkConfig {

                    /** NetworkConfig name */
                    name?: (string|null);

                    /** NetworkConfig id */
                    id?: (string|null);

                    /** NetworkConfig type */
                    type?: (google.cloud.baremetalsolution.v2.NetworkConfig.Type|keyof typeof google.cloud.baremetalsolution.v2.NetworkConfig.Type|null);

                    /** NetworkConfig bandwidth */
                    bandwidth?: (google.cloud.baremetalsolution.v2.NetworkConfig.Bandwidth|keyof typeof google.cloud.baremetalsolution.v2.NetworkConfig.Bandwidth|null);

                    /** NetworkConfig vlanAttachments */
                    vlanAttachments?: (google.cloud.baremetalsolution.v2.NetworkConfig.IIntakeVlanAttachment[]|null);

                    /** NetworkConfig cidr */
                    cidr?: (string|null);

                    /** NetworkConfig serviceCidr */
                    serviceCidr?: (google.cloud.baremetalsolution.v2.NetworkConfig.ServiceCidr|keyof typeof google.cloud.baremetalsolution.v2.NetworkConfig.ServiceCidr|null);

                    /** NetworkConfig userNote */
                    userNote?: (string|null);

                    /** NetworkConfig gcpService */
                    gcpService?: (string|null);

                    /** NetworkConfig vlanSameProject */
                    vlanSameProject?: (boolean|null);

                    /** NetworkConfig jumboFramesEnabled */
                    jumboFramesEnabled?: (boolean|null);
                }

                /** Represents a NetworkConfig. */
                class NetworkConfig implements INetworkConfig {

                    /**
                     * Constructs a new NetworkConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.INetworkConfig);

                    /** NetworkConfig name. */
                    public name: string;

                    /** NetworkConfig id. */
                    public id: string;

                    /** NetworkConfig type. */
                    public type: (google.cloud.baremetalsolution.v2.NetworkConfig.Type|keyof typeof google.cloud.baremetalsolution.v2.NetworkConfig.Type);

                    /** NetworkConfig bandwidth. */
                    public bandwidth: (google.cloud.baremetalsolution.v2.NetworkConfig.Bandwidth|keyof typeof google.cloud.baremetalsolution.v2.NetworkConfig.Bandwidth);

                    /** NetworkConfig vlanAttachments. */
                    public vlanAttachments: google.cloud.baremetalsolution.v2.NetworkConfig.IIntakeVlanAttachment[];

                    /** NetworkConfig cidr. */
                    public cidr: string;

                    /** NetworkConfig serviceCidr. */
                    public serviceCidr: (google.cloud.baremetalsolution.v2.NetworkConfig.ServiceCidr|keyof typeof google.cloud.baremetalsolution.v2.NetworkConfig.ServiceCidr);

                    /** NetworkConfig userNote. */
                    public userNote: string;

                    /** NetworkConfig gcpService. */
                    public gcpService: string;

                    /** NetworkConfig vlanSameProject. */
                    public vlanSameProject: boolean;

                    /** NetworkConfig jumboFramesEnabled. */
                    public jumboFramesEnabled: boolean;

                    /**
                     * Creates a new NetworkConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkConfig instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.INetworkConfig): google.cloud.baremetalsolution.v2.NetworkConfig;

                    /**
                     * Encodes the specified NetworkConfig message. Does not implicitly {@link google.cloud.baremetalsolution.v2.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.NetworkConfig;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.NetworkConfig;

                    /**
                     * Verifies a NetworkConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.NetworkConfig;

                    /**
                     * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                     * @param message NetworkConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NetworkConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace NetworkConfig {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        CLIENT = 1,
                        PRIVATE = 2
                    }

                    /** Bandwidth enum. */
                    enum Bandwidth {
                        BANDWIDTH_UNSPECIFIED = 0,
                        BW_1_GBPS = 1,
                        BW_2_GBPS = 2,
                        BW_5_GBPS = 3,
                        BW_10_GBPS = 4
                    }

                    /** Properties of an IntakeVlanAttachment. */
                    interface IIntakeVlanAttachment {

                        /** IntakeVlanAttachment id */
                        id?: (string|null);

                        /** IntakeVlanAttachment pairingKey */
                        pairingKey?: (string|null);
                    }

                    /** Represents an IntakeVlanAttachment. */
                    class IntakeVlanAttachment implements IIntakeVlanAttachment {

                        /**
                         * Constructs a new IntakeVlanAttachment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.baremetalsolution.v2.NetworkConfig.IIntakeVlanAttachment);

                        /** IntakeVlanAttachment id. */
                        public id: string;

                        /** IntakeVlanAttachment pairingKey. */
                        public pairingKey: string;

                        /**
                         * Creates a new IntakeVlanAttachment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IntakeVlanAttachment instance
                         */
                        public static create(properties?: google.cloud.baremetalsolution.v2.NetworkConfig.IIntakeVlanAttachment): google.cloud.baremetalsolution.v2.NetworkConfig.IntakeVlanAttachment;

                        /**
                         * Encodes the specified IntakeVlanAttachment message. Does not implicitly {@link google.cloud.baremetalsolution.v2.NetworkConfig.IntakeVlanAttachment.verify|verify} messages.
                         * @param message IntakeVlanAttachment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.baremetalsolution.v2.NetworkConfig.IIntakeVlanAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IntakeVlanAttachment message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.NetworkConfig.IntakeVlanAttachment.verify|verify} messages.
                         * @param message IntakeVlanAttachment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.baremetalsolution.v2.NetworkConfig.IIntakeVlanAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IntakeVlanAttachment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IntakeVlanAttachment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.NetworkConfig.IntakeVlanAttachment;

                        /**
                         * Decodes an IntakeVlanAttachment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IntakeVlanAttachment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.NetworkConfig.IntakeVlanAttachment;

                        /**
                         * Verifies an IntakeVlanAttachment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IntakeVlanAttachment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IntakeVlanAttachment
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.NetworkConfig.IntakeVlanAttachment;

                        /**
                         * Creates a plain object from an IntakeVlanAttachment message. Also converts values to other types if specified.
                         * @param message IntakeVlanAttachment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.baremetalsolution.v2.NetworkConfig.IntakeVlanAttachment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IntakeVlanAttachment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IntakeVlanAttachment
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** ServiceCidr enum. */
                    enum ServiceCidr {
                        SERVICE_CIDR_UNSPECIFIED = 0,
                        DISABLED = 1,
                        HIGH_26 = 2,
                        HIGH_27 = 3,
                        HIGH_28 = 4
                    }
                }

                /** Properties of an InstanceQuota. */
                interface IInstanceQuota {

                    /** InstanceQuota name */
                    name?: (string|null);

                    /** InstanceQuota instanceType */
                    instanceType?: (string|null);

                    /** InstanceQuota gcpService */
                    gcpService?: (string|null);

                    /** InstanceQuota location */
                    location?: (string|null);

                    /** InstanceQuota availableMachineCount */
                    availableMachineCount?: (number|null);
                }

                /** Represents an InstanceQuota. */
                class InstanceQuota implements IInstanceQuota {

                    /**
                     * Constructs a new InstanceQuota.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IInstanceQuota);

                    /** InstanceQuota name. */
                    public name: string;

                    /** InstanceQuota instanceType. */
                    public instanceType: string;

                    /** InstanceQuota gcpService. */
                    public gcpService: string;

                    /** InstanceQuota location. */
                    public location: string;

                    /** InstanceQuota availableMachineCount. */
                    public availableMachineCount: number;

                    /**
                     * Creates a new InstanceQuota instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstanceQuota instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IInstanceQuota): google.cloud.baremetalsolution.v2.InstanceQuota;

                    /**
                     * Encodes the specified InstanceQuota message. Does not implicitly {@link google.cloud.baremetalsolution.v2.InstanceQuota.verify|verify} messages.
                     * @param message InstanceQuota message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IInstanceQuota, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstanceQuota message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.InstanceQuota.verify|verify} messages.
                     * @param message InstanceQuota message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IInstanceQuota, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstanceQuota message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstanceQuota
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.InstanceQuota;

                    /**
                     * Decodes an InstanceQuota message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstanceQuota
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.InstanceQuota;

                    /**
                     * Verifies an InstanceQuota message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstanceQuota message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstanceQuota
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.InstanceQuota;

                    /**
                     * Creates a plain object from an InstanceQuota message. Also converts values to other types if specified.
                     * @param message InstanceQuota
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.InstanceQuota, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstanceQuota to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InstanceQuota
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetProvisioningConfigRequest. */
                interface IGetProvisioningConfigRequest {

                    /** GetProvisioningConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetProvisioningConfigRequest. */
                class GetProvisioningConfigRequest implements IGetProvisioningConfigRequest {

                    /**
                     * Constructs a new GetProvisioningConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IGetProvisioningConfigRequest);

                    /** GetProvisioningConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetProvisioningConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetProvisioningConfigRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IGetProvisioningConfigRequest): google.cloud.baremetalsolution.v2.GetProvisioningConfigRequest;

                    /**
                     * Encodes the specified GetProvisioningConfigRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetProvisioningConfigRequest.verify|verify} messages.
                     * @param message GetProvisioningConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IGetProvisioningConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetProvisioningConfigRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetProvisioningConfigRequest.verify|verify} messages.
                     * @param message GetProvisioningConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IGetProvisioningConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetProvisioningConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetProvisioningConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.GetProvisioningConfigRequest;

                    /**
                     * Decodes a GetProvisioningConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetProvisioningConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.GetProvisioningConfigRequest;

                    /**
                     * Verifies a GetProvisioningConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetProvisioningConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetProvisioningConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.GetProvisioningConfigRequest;

                    /**
                     * Creates a plain object from a GetProvisioningConfigRequest message. Also converts values to other types if specified.
                     * @param message GetProvisioningConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.GetProvisioningConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetProvisioningConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetProvisioningConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateProvisioningConfigRequest. */
                interface ICreateProvisioningConfigRequest {

                    /** CreateProvisioningConfigRequest parent */
                    parent?: (string|null);

                    /** CreateProvisioningConfigRequest provisioningConfig */
                    provisioningConfig?: (google.cloud.baremetalsolution.v2.IProvisioningConfig|null);

                    /** CreateProvisioningConfigRequest email */
                    email?: (string|null);
                }

                /** Represents a CreateProvisioningConfigRequest. */
                class CreateProvisioningConfigRequest implements ICreateProvisioningConfigRequest {

                    /**
                     * Constructs a new CreateProvisioningConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.ICreateProvisioningConfigRequest);

                    /** CreateProvisioningConfigRequest parent. */
                    public parent: string;

                    /** CreateProvisioningConfigRequest provisioningConfig. */
                    public provisioningConfig?: (google.cloud.baremetalsolution.v2.IProvisioningConfig|null);

                    /** CreateProvisioningConfigRequest email. */
                    public email: string;

                    /**
                     * Creates a new CreateProvisioningConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateProvisioningConfigRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.ICreateProvisioningConfigRequest): google.cloud.baremetalsolution.v2.CreateProvisioningConfigRequest;

                    /**
                     * Encodes the specified CreateProvisioningConfigRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.CreateProvisioningConfigRequest.verify|verify} messages.
                     * @param message CreateProvisioningConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.ICreateProvisioningConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateProvisioningConfigRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.CreateProvisioningConfigRequest.verify|verify} messages.
                     * @param message CreateProvisioningConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.ICreateProvisioningConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateProvisioningConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateProvisioningConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.CreateProvisioningConfigRequest;

                    /**
                     * Decodes a CreateProvisioningConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateProvisioningConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.CreateProvisioningConfigRequest;

                    /**
                     * Verifies a CreateProvisioningConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateProvisioningConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateProvisioningConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.CreateProvisioningConfigRequest;

                    /**
                     * Creates a plain object from a CreateProvisioningConfigRequest message. Also converts values to other types if specified.
                     * @param message CreateProvisioningConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.CreateProvisioningConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateProvisioningConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateProvisioningConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateProvisioningConfigRequest. */
                interface IUpdateProvisioningConfigRequest {

                    /** UpdateProvisioningConfigRequest provisioningConfig */
                    provisioningConfig?: (google.cloud.baremetalsolution.v2.IProvisioningConfig|null);

                    /** UpdateProvisioningConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateProvisioningConfigRequest email */
                    email?: (string|null);
                }

                /** Represents an UpdateProvisioningConfigRequest. */
                class UpdateProvisioningConfigRequest implements IUpdateProvisioningConfigRequest {

                    /**
                     * Constructs a new UpdateProvisioningConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IUpdateProvisioningConfigRequest);

                    /** UpdateProvisioningConfigRequest provisioningConfig. */
                    public provisioningConfig?: (google.cloud.baremetalsolution.v2.IProvisioningConfig|null);

                    /** UpdateProvisioningConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateProvisioningConfigRequest email. */
                    public email: string;

                    /**
                     * Creates a new UpdateProvisioningConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateProvisioningConfigRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IUpdateProvisioningConfigRequest): google.cloud.baremetalsolution.v2.UpdateProvisioningConfigRequest;

                    /**
                     * Encodes the specified UpdateProvisioningConfigRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.UpdateProvisioningConfigRequest.verify|verify} messages.
                     * @param message UpdateProvisioningConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IUpdateProvisioningConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateProvisioningConfigRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.UpdateProvisioningConfigRequest.verify|verify} messages.
                     * @param message UpdateProvisioningConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IUpdateProvisioningConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateProvisioningConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateProvisioningConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.UpdateProvisioningConfigRequest;

                    /**
                     * Decodes an UpdateProvisioningConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateProvisioningConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.UpdateProvisioningConfigRequest;

                    /**
                     * Verifies an UpdateProvisioningConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateProvisioningConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateProvisioningConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.UpdateProvisioningConfigRequest;

                    /**
                     * Creates a plain object from an UpdateProvisioningConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateProvisioningConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.UpdateProvisioningConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateProvisioningConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateProvisioningConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SSHKey. */
                interface ISSHKey {

                    /** SSHKey name */
                    name?: (string|null);

                    /** SSHKey publicKey */
                    publicKey?: (string|null);
                }

                /** Represents a SSHKey. */
                class SSHKey implements ISSHKey {

                    /**
                     * Constructs a new SSHKey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.ISSHKey);

                    /** SSHKey name. */
                    public name: string;

                    /** SSHKey publicKey. */
                    public publicKey: string;

                    /**
                     * Creates a new SSHKey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SSHKey instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.ISSHKey): google.cloud.baremetalsolution.v2.SSHKey;

                    /**
                     * Encodes the specified SSHKey message. Does not implicitly {@link google.cloud.baremetalsolution.v2.SSHKey.verify|verify} messages.
                     * @param message SSHKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.ISSHKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SSHKey message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.SSHKey.verify|verify} messages.
                     * @param message SSHKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.ISSHKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SSHKey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SSHKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.SSHKey;

                    /**
                     * Decodes a SSHKey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SSHKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.SSHKey;

                    /**
                     * Verifies a SSHKey message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SSHKey message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SSHKey
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.SSHKey;

                    /**
                     * Creates a plain object from a SSHKey message. Also converts values to other types if specified.
                     * @param message SSHKey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.SSHKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SSHKey to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SSHKey
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSSHKeysRequest. */
                interface IListSSHKeysRequest {

                    /** ListSSHKeysRequest parent */
                    parent?: (string|null);

                    /** ListSSHKeysRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSSHKeysRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListSSHKeysRequest. */
                class ListSSHKeysRequest implements IListSSHKeysRequest {

                    /**
                     * Constructs a new ListSSHKeysRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListSSHKeysRequest);

                    /** ListSSHKeysRequest parent. */
                    public parent: string;

                    /** ListSSHKeysRequest pageSize. */
                    public pageSize: number;

                    /** ListSSHKeysRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListSSHKeysRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSSHKeysRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListSSHKeysRequest): google.cloud.baremetalsolution.v2.ListSSHKeysRequest;

                    /**
                     * Encodes the specified ListSSHKeysRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListSSHKeysRequest.verify|verify} messages.
                     * @param message ListSSHKeysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListSSHKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSSHKeysRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListSSHKeysRequest.verify|verify} messages.
                     * @param message ListSSHKeysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListSSHKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSSHKeysRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSSHKeysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListSSHKeysRequest;

                    /**
                     * Decodes a ListSSHKeysRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSSHKeysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListSSHKeysRequest;

                    /**
                     * Verifies a ListSSHKeysRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSSHKeysRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSSHKeysRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListSSHKeysRequest;

                    /**
                     * Creates a plain object from a ListSSHKeysRequest message. Also converts values to other types if specified.
                     * @param message ListSSHKeysRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListSSHKeysRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSSHKeysRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSSHKeysRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSSHKeysResponse. */
                interface IListSSHKeysResponse {

                    /** ListSSHKeysResponse sshKeys */
                    sshKeys?: (google.cloud.baremetalsolution.v2.ISSHKey[]|null);

                    /** ListSSHKeysResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListSSHKeysResponse. */
                class ListSSHKeysResponse implements IListSSHKeysResponse {

                    /**
                     * Constructs a new ListSSHKeysResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListSSHKeysResponse);

                    /** ListSSHKeysResponse sshKeys. */
                    public sshKeys: google.cloud.baremetalsolution.v2.ISSHKey[];

                    /** ListSSHKeysResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListSSHKeysResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSSHKeysResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListSSHKeysResponse): google.cloud.baremetalsolution.v2.ListSSHKeysResponse;

                    /**
                     * Encodes the specified ListSSHKeysResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListSSHKeysResponse.verify|verify} messages.
                     * @param message ListSSHKeysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListSSHKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSSHKeysResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListSSHKeysResponse.verify|verify} messages.
                     * @param message ListSSHKeysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListSSHKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSSHKeysResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSSHKeysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListSSHKeysResponse;

                    /**
                     * Decodes a ListSSHKeysResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSSHKeysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListSSHKeysResponse;

                    /**
                     * Verifies a ListSSHKeysResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSSHKeysResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSSHKeysResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListSSHKeysResponse;

                    /**
                     * Creates a plain object from a ListSSHKeysResponse message. Also converts values to other types if specified.
                     * @param message ListSSHKeysResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListSSHKeysResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSSHKeysResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSSHKeysResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateSSHKeyRequest. */
                interface ICreateSSHKeyRequest {

                    /** CreateSSHKeyRequest parent */
                    parent?: (string|null);

                    /** CreateSSHKeyRequest sshKey */
                    sshKey?: (google.cloud.baremetalsolution.v2.ISSHKey|null);

                    /** CreateSSHKeyRequest sshKeyId */
                    sshKeyId?: (string|null);
                }

                /** Represents a CreateSSHKeyRequest. */
                class CreateSSHKeyRequest implements ICreateSSHKeyRequest {

                    /**
                     * Constructs a new CreateSSHKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.ICreateSSHKeyRequest);

                    /** CreateSSHKeyRequest parent. */
                    public parent: string;

                    /** CreateSSHKeyRequest sshKey. */
                    public sshKey?: (google.cloud.baremetalsolution.v2.ISSHKey|null);

                    /** CreateSSHKeyRequest sshKeyId. */
                    public sshKeyId: string;

                    /**
                     * Creates a new CreateSSHKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSSHKeyRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.ICreateSSHKeyRequest): google.cloud.baremetalsolution.v2.CreateSSHKeyRequest;

                    /**
                     * Encodes the specified CreateSSHKeyRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.CreateSSHKeyRequest.verify|verify} messages.
                     * @param message CreateSSHKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.ICreateSSHKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSSHKeyRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.CreateSSHKeyRequest.verify|verify} messages.
                     * @param message CreateSSHKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.ICreateSSHKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSSHKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSSHKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.CreateSSHKeyRequest;

                    /**
                     * Decodes a CreateSSHKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSSHKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.CreateSSHKeyRequest;

                    /**
                     * Verifies a CreateSSHKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSSHKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSSHKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.CreateSSHKeyRequest;

                    /**
                     * Creates a plain object from a CreateSSHKeyRequest message. Also converts values to other types if specified.
                     * @param message CreateSSHKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.CreateSSHKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSSHKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateSSHKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteSSHKeyRequest. */
                interface IDeleteSSHKeyRequest {

                    /** DeleteSSHKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteSSHKeyRequest. */
                class DeleteSSHKeyRequest implements IDeleteSSHKeyRequest {

                    /**
                     * Constructs a new DeleteSSHKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IDeleteSSHKeyRequest);

                    /** DeleteSSHKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteSSHKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteSSHKeyRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IDeleteSSHKeyRequest): google.cloud.baremetalsolution.v2.DeleteSSHKeyRequest;

                    /**
                     * Encodes the specified DeleteSSHKeyRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.DeleteSSHKeyRequest.verify|verify} messages.
                     * @param message DeleteSSHKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IDeleteSSHKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteSSHKeyRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.DeleteSSHKeyRequest.verify|verify} messages.
                     * @param message DeleteSSHKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IDeleteSSHKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteSSHKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteSSHKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.DeleteSSHKeyRequest;

                    /**
                     * Decodes a DeleteSSHKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteSSHKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.DeleteSSHKeyRequest;

                    /**
                     * Verifies a DeleteSSHKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteSSHKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteSSHKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.DeleteSSHKeyRequest;

                    /**
                     * Creates a plain object from a DeleteSSHKeyRequest message. Also converts values to other types if specified.
                     * @param message DeleteSSHKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.DeleteSSHKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteSSHKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteSSHKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VolumeSnapshot. */
                interface IVolumeSnapshot {

                    /** VolumeSnapshot name */
                    name?: (string|null);

                    /** VolumeSnapshot id */
                    id?: (string|null);

                    /** VolumeSnapshot description */
                    description?: (string|null);

                    /** VolumeSnapshot createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeSnapshot storageVolume */
                    storageVolume?: (string|null);

                    /** VolumeSnapshot type */
                    type?: (google.cloud.baremetalsolution.v2.VolumeSnapshot.SnapshotType|keyof typeof google.cloud.baremetalsolution.v2.VolumeSnapshot.SnapshotType|null);
                }

                /** Represents a VolumeSnapshot. */
                class VolumeSnapshot implements IVolumeSnapshot {

                    /**
                     * Constructs a new VolumeSnapshot.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IVolumeSnapshot);

                    /** VolumeSnapshot name. */
                    public name: string;

                    /** VolumeSnapshot id. */
                    public id: string;

                    /** VolumeSnapshot description. */
                    public description: string;

                    /** VolumeSnapshot createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeSnapshot storageVolume. */
                    public storageVolume: string;

                    /** VolumeSnapshot type. */
                    public type: (google.cloud.baremetalsolution.v2.VolumeSnapshot.SnapshotType|keyof typeof google.cloud.baremetalsolution.v2.VolumeSnapshot.SnapshotType);

                    /**
                     * Creates a new VolumeSnapshot instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VolumeSnapshot instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IVolumeSnapshot): google.cloud.baremetalsolution.v2.VolumeSnapshot;

                    /**
                     * Encodes the specified VolumeSnapshot message. Does not implicitly {@link google.cloud.baremetalsolution.v2.VolumeSnapshot.verify|verify} messages.
                     * @param message VolumeSnapshot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IVolumeSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VolumeSnapshot message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.VolumeSnapshot.verify|verify} messages.
                     * @param message VolumeSnapshot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IVolumeSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VolumeSnapshot message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VolumeSnapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.VolumeSnapshot;

                    /**
                     * Decodes a VolumeSnapshot message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VolumeSnapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.VolumeSnapshot;

                    /**
                     * Verifies a VolumeSnapshot message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VolumeSnapshot message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VolumeSnapshot
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.VolumeSnapshot;

                    /**
                     * Creates a plain object from a VolumeSnapshot message. Also converts values to other types if specified.
                     * @param message VolumeSnapshot
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.VolumeSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VolumeSnapshot to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VolumeSnapshot
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VolumeSnapshot {

                    /** SnapshotType enum. */
                    enum SnapshotType {
                        SNAPSHOT_TYPE_UNSPECIFIED = 0,
                        AD_HOC = 1,
                        SCHEDULED = 2
                    }
                }

                /** Properties of a GetVolumeSnapshotRequest. */
                interface IGetVolumeSnapshotRequest {

                    /** GetVolumeSnapshotRequest name */
                    name?: (string|null);
                }

                /** Represents a GetVolumeSnapshotRequest. */
                class GetVolumeSnapshotRequest implements IGetVolumeSnapshotRequest {

                    /**
                     * Constructs a new GetVolumeSnapshotRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IGetVolumeSnapshotRequest);

                    /** GetVolumeSnapshotRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetVolumeSnapshotRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetVolumeSnapshotRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IGetVolumeSnapshotRequest): google.cloud.baremetalsolution.v2.GetVolumeSnapshotRequest;

                    /**
                     * Encodes the specified GetVolumeSnapshotRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetVolumeSnapshotRequest.verify|verify} messages.
                     * @param message GetVolumeSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IGetVolumeSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetVolumeSnapshotRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.GetVolumeSnapshotRequest.verify|verify} messages.
                     * @param message GetVolumeSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IGetVolumeSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetVolumeSnapshotRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetVolumeSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.GetVolumeSnapshotRequest;

                    /**
                     * Decodes a GetVolumeSnapshotRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetVolumeSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.GetVolumeSnapshotRequest;

                    /**
                     * Verifies a GetVolumeSnapshotRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetVolumeSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetVolumeSnapshotRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.GetVolumeSnapshotRequest;

                    /**
                     * Creates a plain object from a GetVolumeSnapshotRequest message. Also converts values to other types if specified.
                     * @param message GetVolumeSnapshotRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.GetVolumeSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetVolumeSnapshotRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetVolumeSnapshotRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVolumeSnapshotsRequest. */
                interface IListVolumeSnapshotsRequest {

                    /** ListVolumeSnapshotsRequest parent */
                    parent?: (string|null);

                    /** ListVolumeSnapshotsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListVolumeSnapshotsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListVolumeSnapshotsRequest. */
                class ListVolumeSnapshotsRequest implements IListVolumeSnapshotsRequest {

                    /**
                     * Constructs a new ListVolumeSnapshotsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListVolumeSnapshotsRequest);

                    /** ListVolumeSnapshotsRequest parent. */
                    public parent: string;

                    /** ListVolumeSnapshotsRequest pageSize. */
                    public pageSize: number;

                    /** ListVolumeSnapshotsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListVolumeSnapshotsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVolumeSnapshotsRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListVolumeSnapshotsRequest): google.cloud.baremetalsolution.v2.ListVolumeSnapshotsRequest;

                    /**
                     * Encodes the specified ListVolumeSnapshotsRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListVolumeSnapshotsRequest.verify|verify} messages.
                     * @param message ListVolumeSnapshotsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListVolumeSnapshotsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVolumeSnapshotsRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListVolumeSnapshotsRequest.verify|verify} messages.
                     * @param message ListVolumeSnapshotsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListVolumeSnapshotsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVolumeSnapshotsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVolumeSnapshotsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListVolumeSnapshotsRequest;

                    /**
                     * Decodes a ListVolumeSnapshotsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVolumeSnapshotsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListVolumeSnapshotsRequest;

                    /**
                     * Verifies a ListVolumeSnapshotsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVolumeSnapshotsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVolumeSnapshotsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListVolumeSnapshotsRequest;

                    /**
                     * Creates a plain object from a ListVolumeSnapshotsRequest message. Also converts values to other types if specified.
                     * @param message ListVolumeSnapshotsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListVolumeSnapshotsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVolumeSnapshotsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVolumeSnapshotsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVolumeSnapshotsResponse. */
                interface IListVolumeSnapshotsResponse {

                    /** ListVolumeSnapshotsResponse volumeSnapshots */
                    volumeSnapshots?: (google.cloud.baremetalsolution.v2.IVolumeSnapshot[]|null);

                    /** ListVolumeSnapshotsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListVolumeSnapshotsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListVolumeSnapshotsResponse. */
                class ListVolumeSnapshotsResponse implements IListVolumeSnapshotsResponse {

                    /**
                     * Constructs a new ListVolumeSnapshotsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IListVolumeSnapshotsResponse);

                    /** ListVolumeSnapshotsResponse volumeSnapshots. */
                    public volumeSnapshots: google.cloud.baremetalsolution.v2.IVolumeSnapshot[];

                    /** ListVolumeSnapshotsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListVolumeSnapshotsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListVolumeSnapshotsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVolumeSnapshotsResponse instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IListVolumeSnapshotsResponse): google.cloud.baremetalsolution.v2.ListVolumeSnapshotsResponse;

                    /**
                     * Encodes the specified ListVolumeSnapshotsResponse message. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListVolumeSnapshotsResponse.verify|verify} messages.
                     * @param message ListVolumeSnapshotsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IListVolumeSnapshotsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVolumeSnapshotsResponse message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.ListVolumeSnapshotsResponse.verify|verify} messages.
                     * @param message ListVolumeSnapshotsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IListVolumeSnapshotsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVolumeSnapshotsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVolumeSnapshotsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.ListVolumeSnapshotsResponse;

                    /**
                     * Decodes a ListVolumeSnapshotsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVolumeSnapshotsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.ListVolumeSnapshotsResponse;

                    /**
                     * Verifies a ListVolumeSnapshotsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVolumeSnapshotsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVolumeSnapshotsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.ListVolumeSnapshotsResponse;

                    /**
                     * Creates a plain object from a ListVolumeSnapshotsResponse message. Also converts values to other types if specified.
                     * @param message ListVolumeSnapshotsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.ListVolumeSnapshotsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVolumeSnapshotsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVolumeSnapshotsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteVolumeSnapshotRequest. */
                interface IDeleteVolumeSnapshotRequest {

                    /** DeleteVolumeSnapshotRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteVolumeSnapshotRequest. */
                class DeleteVolumeSnapshotRequest implements IDeleteVolumeSnapshotRequest {

                    /**
                     * Constructs a new DeleteVolumeSnapshotRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IDeleteVolumeSnapshotRequest);

                    /** DeleteVolumeSnapshotRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteVolumeSnapshotRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteVolumeSnapshotRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IDeleteVolumeSnapshotRequest): google.cloud.baremetalsolution.v2.DeleteVolumeSnapshotRequest;

                    /**
                     * Encodes the specified DeleteVolumeSnapshotRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.DeleteVolumeSnapshotRequest.verify|verify} messages.
                     * @param message DeleteVolumeSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IDeleteVolumeSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteVolumeSnapshotRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.DeleteVolumeSnapshotRequest.verify|verify} messages.
                     * @param message DeleteVolumeSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IDeleteVolumeSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteVolumeSnapshotRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteVolumeSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.DeleteVolumeSnapshotRequest;

                    /**
                     * Decodes a DeleteVolumeSnapshotRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteVolumeSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.DeleteVolumeSnapshotRequest;

                    /**
                     * Verifies a DeleteVolumeSnapshotRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteVolumeSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteVolumeSnapshotRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.DeleteVolumeSnapshotRequest;

                    /**
                     * Creates a plain object from a DeleteVolumeSnapshotRequest message. Also converts values to other types if specified.
                     * @param message DeleteVolumeSnapshotRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.DeleteVolumeSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteVolumeSnapshotRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteVolumeSnapshotRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateVolumeSnapshotRequest. */
                interface ICreateVolumeSnapshotRequest {

                    /** CreateVolumeSnapshotRequest parent */
                    parent?: (string|null);

                    /** CreateVolumeSnapshotRequest volumeSnapshot */
                    volumeSnapshot?: (google.cloud.baremetalsolution.v2.IVolumeSnapshot|null);
                }

                /** Represents a CreateVolumeSnapshotRequest. */
                class CreateVolumeSnapshotRequest implements ICreateVolumeSnapshotRequest {

                    /**
                     * Constructs a new CreateVolumeSnapshotRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.ICreateVolumeSnapshotRequest);

                    /** CreateVolumeSnapshotRequest parent. */
                    public parent: string;

                    /** CreateVolumeSnapshotRequest volumeSnapshot. */
                    public volumeSnapshot?: (google.cloud.baremetalsolution.v2.IVolumeSnapshot|null);

                    /**
                     * Creates a new CreateVolumeSnapshotRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateVolumeSnapshotRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.ICreateVolumeSnapshotRequest): google.cloud.baremetalsolution.v2.CreateVolumeSnapshotRequest;

                    /**
                     * Encodes the specified CreateVolumeSnapshotRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.CreateVolumeSnapshotRequest.verify|verify} messages.
                     * @param message CreateVolumeSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.ICreateVolumeSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateVolumeSnapshotRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.CreateVolumeSnapshotRequest.verify|verify} messages.
                     * @param message CreateVolumeSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.ICreateVolumeSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateVolumeSnapshotRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateVolumeSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.CreateVolumeSnapshotRequest;

                    /**
                     * Decodes a CreateVolumeSnapshotRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateVolumeSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.CreateVolumeSnapshotRequest;

                    /**
                     * Verifies a CreateVolumeSnapshotRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateVolumeSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateVolumeSnapshotRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.CreateVolumeSnapshotRequest;

                    /**
                     * Creates a plain object from a CreateVolumeSnapshotRequest message. Also converts values to other types if specified.
                     * @param message CreateVolumeSnapshotRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.CreateVolumeSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateVolumeSnapshotRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateVolumeSnapshotRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RestoreVolumeSnapshotRequest. */
                interface IRestoreVolumeSnapshotRequest {

                    /** RestoreVolumeSnapshotRequest volumeSnapshot */
                    volumeSnapshot?: (string|null);
                }

                /** Represents a RestoreVolumeSnapshotRequest. */
                class RestoreVolumeSnapshotRequest implements IRestoreVolumeSnapshotRequest {

                    /**
                     * Constructs a new RestoreVolumeSnapshotRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.baremetalsolution.v2.IRestoreVolumeSnapshotRequest);

                    /** RestoreVolumeSnapshotRequest volumeSnapshot. */
                    public volumeSnapshot: string;

                    /**
                     * Creates a new RestoreVolumeSnapshotRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestoreVolumeSnapshotRequest instance
                     */
                    public static create(properties?: google.cloud.baremetalsolution.v2.IRestoreVolumeSnapshotRequest): google.cloud.baremetalsolution.v2.RestoreVolumeSnapshotRequest;

                    /**
                     * Encodes the specified RestoreVolumeSnapshotRequest message. Does not implicitly {@link google.cloud.baremetalsolution.v2.RestoreVolumeSnapshotRequest.verify|verify} messages.
                     * @param message RestoreVolumeSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.baremetalsolution.v2.IRestoreVolumeSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestoreVolumeSnapshotRequest message, length delimited. Does not implicitly {@link google.cloud.baremetalsolution.v2.RestoreVolumeSnapshotRequest.verify|verify} messages.
                     * @param message RestoreVolumeSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.baremetalsolution.v2.IRestoreVolumeSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestoreVolumeSnapshotRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestoreVolumeSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.baremetalsolution.v2.RestoreVolumeSnapshotRequest;

                    /**
                     * Decodes a RestoreVolumeSnapshotRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestoreVolumeSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.baremetalsolution.v2.RestoreVolumeSnapshotRequest;

                    /**
                     * Verifies a RestoreVolumeSnapshotRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestoreVolumeSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestoreVolumeSnapshotRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.baremetalsolution.v2.RestoreVolumeSnapshotRequest;

                    /**
                     * Creates a plain object from a RestoreVolumeSnapshotRequest message. Also converts values to other types if specified.
                     * @param message RestoreVolumeSnapshotRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.baremetalsolution.v2.RestoreVolumeSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestoreVolumeSnapshotRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestoreVolumeSnapshotRequest
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
