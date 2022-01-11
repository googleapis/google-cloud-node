// Copyright 2022 Google LLC
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

    /** Namespace container. */
    namespace container {

        /** Namespace v1. */
        namespace v1 {

            /** Represents a ClusterManager */
            class ClusterManager extends $protobuf.rpc.Service {

                /**
                 * Constructs a new ClusterManager service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new ClusterManager service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ClusterManager;

                /**
                 * Calls ListClusters.
                 * @param request ListClustersRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListClustersResponse
                 */
                public listClusters(request: google.container.v1.IListClustersRequest, callback: google.container.v1.ClusterManager.ListClustersCallback): void;

                /**
                 * Calls ListClusters.
                 * @param request ListClustersRequest message or plain object
                 * @returns Promise
                 */
                public listClusters(request: google.container.v1.IListClustersRequest): Promise<google.container.v1.ListClustersResponse>;

                /**
                 * Calls GetCluster.
                 * @param request GetClusterRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Cluster
                 */
                public getCluster(request: google.container.v1.IGetClusterRequest, callback: google.container.v1.ClusterManager.GetClusterCallback): void;

                /**
                 * Calls GetCluster.
                 * @param request GetClusterRequest message or plain object
                 * @returns Promise
                 */
                public getCluster(request: google.container.v1.IGetClusterRequest): Promise<google.container.v1.Cluster>;

                /**
                 * Calls CreateCluster.
                 * @param request CreateClusterRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createCluster(request: google.container.v1.ICreateClusterRequest, callback: google.container.v1.ClusterManager.CreateClusterCallback): void;

                /**
                 * Calls CreateCluster.
                 * @param request CreateClusterRequest message or plain object
                 * @returns Promise
                 */
                public createCluster(request: google.container.v1.ICreateClusterRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls UpdateCluster.
                 * @param request UpdateClusterRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updateCluster(request: google.container.v1.IUpdateClusterRequest, callback: google.container.v1.ClusterManager.UpdateClusterCallback): void;

                /**
                 * Calls UpdateCluster.
                 * @param request UpdateClusterRequest message or plain object
                 * @returns Promise
                 */
                public updateCluster(request: google.container.v1.IUpdateClusterRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls UpdateNodePool.
                 * @param request UpdateNodePoolRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updateNodePool(request: google.container.v1.IUpdateNodePoolRequest, callback: google.container.v1.ClusterManager.UpdateNodePoolCallback): void;

                /**
                 * Calls UpdateNodePool.
                 * @param request UpdateNodePoolRequest message or plain object
                 * @returns Promise
                 */
                public updateNodePool(request: google.container.v1.IUpdateNodePoolRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls SetNodePoolAutoscaling.
                 * @param request SetNodePoolAutoscalingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public setNodePoolAutoscaling(request: google.container.v1.ISetNodePoolAutoscalingRequest, callback: google.container.v1.ClusterManager.SetNodePoolAutoscalingCallback): void;

                /**
                 * Calls SetNodePoolAutoscaling.
                 * @param request SetNodePoolAutoscalingRequest message or plain object
                 * @returns Promise
                 */
                public setNodePoolAutoscaling(request: google.container.v1.ISetNodePoolAutoscalingRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls SetLoggingService.
                 * @param request SetLoggingServiceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public setLoggingService(request: google.container.v1.ISetLoggingServiceRequest, callback: google.container.v1.ClusterManager.SetLoggingServiceCallback): void;

                /**
                 * Calls SetLoggingService.
                 * @param request SetLoggingServiceRequest message or plain object
                 * @returns Promise
                 */
                public setLoggingService(request: google.container.v1.ISetLoggingServiceRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls SetMonitoringService.
                 * @param request SetMonitoringServiceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public setMonitoringService(request: google.container.v1.ISetMonitoringServiceRequest, callback: google.container.v1.ClusterManager.SetMonitoringServiceCallback): void;

                /**
                 * Calls SetMonitoringService.
                 * @param request SetMonitoringServiceRequest message or plain object
                 * @returns Promise
                 */
                public setMonitoringService(request: google.container.v1.ISetMonitoringServiceRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls SetAddonsConfig.
                 * @param request SetAddonsConfigRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public setAddonsConfig(request: google.container.v1.ISetAddonsConfigRequest, callback: google.container.v1.ClusterManager.SetAddonsConfigCallback): void;

                /**
                 * Calls SetAddonsConfig.
                 * @param request SetAddonsConfigRequest message or plain object
                 * @returns Promise
                 */
                public setAddonsConfig(request: google.container.v1.ISetAddonsConfigRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls SetLocations.
                 * @param request SetLocationsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public setLocations(request: google.container.v1.ISetLocationsRequest, callback: google.container.v1.ClusterManager.SetLocationsCallback): void;

                /**
                 * Calls SetLocations.
                 * @param request SetLocationsRequest message or plain object
                 * @returns Promise
                 */
                public setLocations(request: google.container.v1.ISetLocationsRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls UpdateMaster.
                 * @param request UpdateMasterRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updateMaster(request: google.container.v1.IUpdateMasterRequest, callback: google.container.v1.ClusterManager.UpdateMasterCallback): void;

                /**
                 * Calls UpdateMaster.
                 * @param request UpdateMasterRequest message or plain object
                 * @returns Promise
                 */
                public updateMaster(request: google.container.v1.IUpdateMasterRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls SetMasterAuth.
                 * @param request SetMasterAuthRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public setMasterAuth(request: google.container.v1.ISetMasterAuthRequest, callback: google.container.v1.ClusterManager.SetMasterAuthCallback): void;

                /**
                 * Calls SetMasterAuth.
                 * @param request SetMasterAuthRequest message or plain object
                 * @returns Promise
                 */
                public setMasterAuth(request: google.container.v1.ISetMasterAuthRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls DeleteCluster.
                 * @param request DeleteClusterRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deleteCluster(request: google.container.v1.IDeleteClusterRequest, callback: google.container.v1.ClusterManager.DeleteClusterCallback): void;

                /**
                 * Calls DeleteCluster.
                 * @param request DeleteClusterRequest message or plain object
                 * @returns Promise
                 */
                public deleteCluster(request: google.container.v1.IDeleteClusterRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls ListOperations.
                 * @param request ListOperationsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
                 */
                public listOperations(request: google.container.v1.IListOperationsRequest, callback: google.container.v1.ClusterManager.ListOperationsCallback): void;

                /**
                 * Calls ListOperations.
                 * @param request ListOperationsRequest message or plain object
                 * @returns Promise
                 */
                public listOperations(request: google.container.v1.IListOperationsRequest): Promise<google.container.v1.ListOperationsResponse>;

                /**
                 * Calls GetOperation.
                 * @param request GetOperationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public getOperation(request: google.container.v1.IGetOperationRequest, callback: google.container.v1.ClusterManager.GetOperationCallback): void;

                /**
                 * Calls GetOperation.
                 * @param request GetOperationRequest message or plain object
                 * @returns Promise
                 */
                public getOperation(request: google.container.v1.IGetOperationRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls CancelOperation.
                 * @param request CancelOperationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public cancelOperation(request: google.container.v1.ICancelOperationRequest, callback: google.container.v1.ClusterManager.CancelOperationCallback): void;

                /**
                 * Calls CancelOperation.
                 * @param request CancelOperationRequest message or plain object
                 * @returns Promise
                 */
                public cancelOperation(request: google.container.v1.ICancelOperationRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls GetServerConfig.
                 * @param request GetServerConfigRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ServerConfig
                 */
                public getServerConfig(request: google.container.v1.IGetServerConfigRequest, callback: google.container.v1.ClusterManager.GetServerConfigCallback): void;

                /**
                 * Calls GetServerConfig.
                 * @param request GetServerConfigRequest message or plain object
                 * @returns Promise
                 */
                public getServerConfig(request: google.container.v1.IGetServerConfigRequest): Promise<google.container.v1.ServerConfig>;

                /**
                 * Calls GetJSONWebKeys.
                 * @param request GetJSONWebKeysRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetJSONWebKeysResponse
                 */
                public getJSONWebKeys(request: google.container.v1.IGetJSONWebKeysRequest, callback: google.container.v1.ClusterManager.GetJSONWebKeysCallback): void;

                /**
                 * Calls GetJSONWebKeys.
                 * @param request GetJSONWebKeysRequest message or plain object
                 * @returns Promise
                 */
                public getJSONWebKeys(request: google.container.v1.IGetJSONWebKeysRequest): Promise<google.container.v1.GetJSONWebKeysResponse>;

                /**
                 * Calls ListNodePools.
                 * @param request ListNodePoolsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListNodePoolsResponse
                 */
                public listNodePools(request: google.container.v1.IListNodePoolsRequest, callback: google.container.v1.ClusterManager.ListNodePoolsCallback): void;

                /**
                 * Calls ListNodePools.
                 * @param request ListNodePoolsRequest message or plain object
                 * @returns Promise
                 */
                public listNodePools(request: google.container.v1.IListNodePoolsRequest): Promise<google.container.v1.ListNodePoolsResponse>;

                /**
                 * Calls GetNodePool.
                 * @param request GetNodePoolRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and NodePool
                 */
                public getNodePool(request: google.container.v1.IGetNodePoolRequest, callback: google.container.v1.ClusterManager.GetNodePoolCallback): void;

                /**
                 * Calls GetNodePool.
                 * @param request GetNodePoolRequest message or plain object
                 * @returns Promise
                 */
                public getNodePool(request: google.container.v1.IGetNodePoolRequest): Promise<google.container.v1.NodePool>;

                /**
                 * Calls CreateNodePool.
                 * @param request CreateNodePoolRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createNodePool(request: google.container.v1.ICreateNodePoolRequest, callback: google.container.v1.ClusterManager.CreateNodePoolCallback): void;

                /**
                 * Calls CreateNodePool.
                 * @param request CreateNodePoolRequest message or plain object
                 * @returns Promise
                 */
                public createNodePool(request: google.container.v1.ICreateNodePoolRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls DeleteNodePool.
                 * @param request DeleteNodePoolRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deleteNodePool(request: google.container.v1.IDeleteNodePoolRequest, callback: google.container.v1.ClusterManager.DeleteNodePoolCallback): void;

                /**
                 * Calls DeleteNodePool.
                 * @param request DeleteNodePoolRequest message or plain object
                 * @returns Promise
                 */
                public deleteNodePool(request: google.container.v1.IDeleteNodePoolRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls RollbackNodePoolUpgrade.
                 * @param request RollbackNodePoolUpgradeRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public rollbackNodePoolUpgrade(request: google.container.v1.IRollbackNodePoolUpgradeRequest, callback: google.container.v1.ClusterManager.RollbackNodePoolUpgradeCallback): void;

                /**
                 * Calls RollbackNodePoolUpgrade.
                 * @param request RollbackNodePoolUpgradeRequest message or plain object
                 * @returns Promise
                 */
                public rollbackNodePoolUpgrade(request: google.container.v1.IRollbackNodePoolUpgradeRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls SetNodePoolManagement.
                 * @param request SetNodePoolManagementRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public setNodePoolManagement(request: google.container.v1.ISetNodePoolManagementRequest, callback: google.container.v1.ClusterManager.SetNodePoolManagementCallback): void;

                /**
                 * Calls SetNodePoolManagement.
                 * @param request SetNodePoolManagementRequest message or plain object
                 * @returns Promise
                 */
                public setNodePoolManagement(request: google.container.v1.ISetNodePoolManagementRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls SetLabels.
                 * @param request SetLabelsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public setLabels(request: google.container.v1.ISetLabelsRequest, callback: google.container.v1.ClusterManager.SetLabelsCallback): void;

                /**
                 * Calls SetLabels.
                 * @param request SetLabelsRequest message or plain object
                 * @returns Promise
                 */
                public setLabels(request: google.container.v1.ISetLabelsRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls SetLegacyAbac.
                 * @param request SetLegacyAbacRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public setLegacyAbac(request: google.container.v1.ISetLegacyAbacRequest, callback: google.container.v1.ClusterManager.SetLegacyAbacCallback): void;

                /**
                 * Calls SetLegacyAbac.
                 * @param request SetLegacyAbacRequest message or plain object
                 * @returns Promise
                 */
                public setLegacyAbac(request: google.container.v1.ISetLegacyAbacRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls StartIPRotation.
                 * @param request StartIPRotationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public startIPRotation(request: google.container.v1.IStartIPRotationRequest, callback: google.container.v1.ClusterManager.StartIPRotationCallback): void;

                /**
                 * Calls StartIPRotation.
                 * @param request StartIPRotationRequest message or plain object
                 * @returns Promise
                 */
                public startIPRotation(request: google.container.v1.IStartIPRotationRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls CompleteIPRotation.
                 * @param request CompleteIPRotationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public completeIPRotation(request: google.container.v1.ICompleteIPRotationRequest, callback: google.container.v1.ClusterManager.CompleteIPRotationCallback): void;

                /**
                 * Calls CompleteIPRotation.
                 * @param request CompleteIPRotationRequest message or plain object
                 * @returns Promise
                 */
                public completeIPRotation(request: google.container.v1.ICompleteIPRotationRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls SetNodePoolSize.
                 * @param request SetNodePoolSizeRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public setNodePoolSize(request: google.container.v1.ISetNodePoolSizeRequest, callback: google.container.v1.ClusterManager.SetNodePoolSizeCallback): void;

                /**
                 * Calls SetNodePoolSize.
                 * @param request SetNodePoolSizeRequest message or plain object
                 * @returns Promise
                 */
                public setNodePoolSize(request: google.container.v1.ISetNodePoolSizeRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls SetNetworkPolicy.
                 * @param request SetNetworkPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public setNetworkPolicy(request: google.container.v1.ISetNetworkPolicyRequest, callback: google.container.v1.ClusterManager.SetNetworkPolicyCallback): void;

                /**
                 * Calls SetNetworkPolicy.
                 * @param request SetNetworkPolicyRequest message or plain object
                 * @returns Promise
                 */
                public setNetworkPolicy(request: google.container.v1.ISetNetworkPolicyRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls SetMaintenancePolicy.
                 * @param request SetMaintenancePolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public setMaintenancePolicy(request: google.container.v1.ISetMaintenancePolicyRequest, callback: google.container.v1.ClusterManager.SetMaintenancePolicyCallback): void;

                /**
                 * Calls SetMaintenancePolicy.
                 * @param request SetMaintenancePolicyRequest message or plain object
                 * @returns Promise
                 */
                public setMaintenancePolicy(request: google.container.v1.ISetMaintenancePolicyRequest): Promise<google.container.v1.Operation>;

                /**
                 * Calls ListUsableSubnetworks.
                 * @param request ListUsableSubnetworksRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListUsableSubnetworksResponse
                 */
                public listUsableSubnetworks(request: google.container.v1.IListUsableSubnetworksRequest, callback: google.container.v1.ClusterManager.ListUsableSubnetworksCallback): void;

                /**
                 * Calls ListUsableSubnetworks.
                 * @param request ListUsableSubnetworksRequest message or plain object
                 * @returns Promise
                 */
                public listUsableSubnetworks(request: google.container.v1.IListUsableSubnetworksRequest): Promise<google.container.v1.ListUsableSubnetworksResponse>;
            }

            namespace ClusterManager {

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#listClusters}.
                 * @param error Error, if any
                 * @param [response] ListClustersResponse
                 */
                type ListClustersCallback = (error: (Error|null), response?: google.container.v1.ListClustersResponse) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#getCluster}.
                 * @param error Error, if any
                 * @param [response] Cluster
                 */
                type GetClusterCallback = (error: (Error|null), response?: google.container.v1.Cluster) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#createCluster}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreateClusterCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#updateCluster}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdateClusterCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#updateNodePool}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdateNodePoolCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#setNodePoolAutoscaling}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type SetNodePoolAutoscalingCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#setLoggingService}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type SetLoggingServiceCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#setMonitoringService}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type SetMonitoringServiceCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#setAddonsConfig}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type SetAddonsConfigCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#setLocations}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type SetLocationsCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#updateMaster}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdateMasterCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#setMasterAuth}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type SetMasterAuthCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#deleteCluster}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeleteClusterCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#listOperations}.
                 * @param error Error, if any
                 * @param [response] ListOperationsResponse
                 */
                type ListOperationsCallback = (error: (Error|null), response?: google.container.v1.ListOperationsResponse) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#getOperation}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type GetOperationCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#cancelOperation}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#getServerConfig}.
                 * @param error Error, if any
                 * @param [response] ServerConfig
                 */
                type GetServerConfigCallback = (error: (Error|null), response?: google.container.v1.ServerConfig) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#getJSONWebKeys}.
                 * @param error Error, if any
                 * @param [response] GetJSONWebKeysResponse
                 */
                type GetJSONWebKeysCallback = (error: (Error|null), response?: google.container.v1.GetJSONWebKeysResponse) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#listNodePools}.
                 * @param error Error, if any
                 * @param [response] ListNodePoolsResponse
                 */
                type ListNodePoolsCallback = (error: (Error|null), response?: google.container.v1.ListNodePoolsResponse) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#getNodePool}.
                 * @param error Error, if any
                 * @param [response] NodePool
                 */
                type GetNodePoolCallback = (error: (Error|null), response?: google.container.v1.NodePool) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#createNodePool}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreateNodePoolCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#deleteNodePool}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeleteNodePoolCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#rollbackNodePoolUpgrade}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type RollbackNodePoolUpgradeCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#setNodePoolManagement}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type SetNodePoolManagementCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#setLabels}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type SetLabelsCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#setLegacyAbac}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type SetLegacyAbacCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#startIPRotation}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type StartIPRotationCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#completeIPRotation}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CompleteIPRotationCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#setNodePoolSize}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type SetNodePoolSizeCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#setNetworkPolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type SetNetworkPolicyCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#setMaintenancePolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type SetMaintenancePolicyCallback = (error: (Error|null), response?: google.container.v1.Operation) => void;

                /**
                 * Callback as used by {@link google.container.v1.ClusterManager#listUsableSubnetworks}.
                 * @param error Error, if any
                 * @param [response] ListUsableSubnetworksResponse
                 */
                type ListUsableSubnetworksCallback = (error: (Error|null), response?: google.container.v1.ListUsableSubnetworksResponse) => void;
            }

            /** Properties of a NodeConfig. */
            interface INodeConfig {

                /** NodeConfig machineType */
                machineType?: (string|null);

                /** NodeConfig diskSizeGb */
                diskSizeGb?: (number|null);

                /** NodeConfig oauthScopes */
                oauthScopes?: (string[]|null);

                /** NodeConfig serviceAccount */
                serviceAccount?: (string|null);

                /** NodeConfig metadata */
                metadata?: ({ [k: string]: string }|null);

                /** NodeConfig imageType */
                imageType?: (string|null);

                /** NodeConfig labels */
                labels?: ({ [k: string]: string }|null);

                /** NodeConfig localSsdCount */
                localSsdCount?: (number|null);

                /** NodeConfig tags */
                tags?: (string[]|null);

                /** NodeConfig preemptible */
                preemptible?: (boolean|null);

                /** NodeConfig accelerators */
                accelerators?: (google.container.v1.IAcceleratorConfig[]|null);

                /** NodeConfig diskType */
                diskType?: (string|null);

                /** NodeConfig minCpuPlatform */
                minCpuPlatform?: (string|null);

                /** NodeConfig workloadMetadataConfig */
                workloadMetadataConfig?: (google.container.v1.IWorkloadMetadataConfig|null);

                /** NodeConfig taints */
                taints?: (google.container.v1.INodeTaint[]|null);

                /** NodeConfig sandboxConfig */
                sandboxConfig?: (google.container.v1.ISandboxConfig|null);

                /** NodeConfig nodeGroup */
                nodeGroup?: (string|null);

                /** NodeConfig reservationAffinity */
                reservationAffinity?: (google.container.v1.IReservationAffinity|null);

                /** NodeConfig shieldedInstanceConfig */
                shieldedInstanceConfig?: (google.container.v1.IShieldedInstanceConfig|null);

                /** NodeConfig bootDiskKmsKey */
                bootDiskKmsKey?: (string|null);
            }

            /** Represents a NodeConfig. */
            class NodeConfig implements INodeConfig {

                /**
                 * Constructs a new NodeConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.INodeConfig);

                /** NodeConfig machineType. */
                public machineType: string;

                /** NodeConfig diskSizeGb. */
                public diskSizeGb: number;

                /** NodeConfig oauthScopes. */
                public oauthScopes: string[];

                /** NodeConfig serviceAccount. */
                public serviceAccount: string;

                /** NodeConfig metadata. */
                public metadata: { [k: string]: string };

                /** NodeConfig imageType. */
                public imageType: string;

                /** NodeConfig labels. */
                public labels: { [k: string]: string };

                /** NodeConfig localSsdCount. */
                public localSsdCount: number;

                /** NodeConfig tags. */
                public tags: string[];

                /** NodeConfig preemptible. */
                public preemptible: boolean;

                /** NodeConfig accelerators. */
                public accelerators: google.container.v1.IAcceleratorConfig[];

                /** NodeConfig diskType. */
                public diskType: string;

                /** NodeConfig minCpuPlatform. */
                public minCpuPlatform: string;

                /** NodeConfig workloadMetadataConfig. */
                public workloadMetadataConfig?: (google.container.v1.IWorkloadMetadataConfig|null);

                /** NodeConfig taints. */
                public taints: google.container.v1.INodeTaint[];

                /** NodeConfig sandboxConfig. */
                public sandboxConfig?: (google.container.v1.ISandboxConfig|null);

                /** NodeConfig nodeGroup. */
                public nodeGroup: string;

                /** NodeConfig reservationAffinity. */
                public reservationAffinity?: (google.container.v1.IReservationAffinity|null);

                /** NodeConfig shieldedInstanceConfig. */
                public shieldedInstanceConfig?: (google.container.v1.IShieldedInstanceConfig|null);

                /** NodeConfig bootDiskKmsKey. */
                public bootDiskKmsKey: string;

                /**
                 * Creates a new NodeConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NodeConfig instance
                 */
                public static create(properties?: google.container.v1.INodeConfig): google.container.v1.NodeConfig;

                /**
                 * Encodes the specified NodeConfig message. Does not implicitly {@link google.container.v1.NodeConfig.verify|verify} messages.
                 * @param message NodeConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.INodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NodeConfig message, length delimited. Does not implicitly {@link google.container.v1.NodeConfig.verify|verify} messages.
                 * @param message NodeConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.INodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NodeConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NodeConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.NodeConfig;

                /**
                 * Decodes a NodeConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NodeConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.NodeConfig;

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
                public static fromObject(object: { [k: string]: any }): google.container.v1.NodeConfig;

                /**
                 * Creates a plain object from a NodeConfig message. Also converts values to other types if specified.
                 * @param message NodeConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.NodeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NodeConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ShieldedInstanceConfig. */
            interface IShieldedInstanceConfig {

                /** ShieldedInstanceConfig enableSecureBoot */
                enableSecureBoot?: (boolean|null);

                /** ShieldedInstanceConfig enableIntegrityMonitoring */
                enableIntegrityMonitoring?: (boolean|null);
            }

            /** Represents a ShieldedInstanceConfig. */
            class ShieldedInstanceConfig implements IShieldedInstanceConfig {

                /**
                 * Constructs a new ShieldedInstanceConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IShieldedInstanceConfig);

                /** ShieldedInstanceConfig enableSecureBoot. */
                public enableSecureBoot: boolean;

                /** ShieldedInstanceConfig enableIntegrityMonitoring. */
                public enableIntegrityMonitoring: boolean;

                /**
                 * Creates a new ShieldedInstanceConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ShieldedInstanceConfig instance
                 */
                public static create(properties?: google.container.v1.IShieldedInstanceConfig): google.container.v1.ShieldedInstanceConfig;

                /**
                 * Encodes the specified ShieldedInstanceConfig message. Does not implicitly {@link google.container.v1.ShieldedInstanceConfig.verify|verify} messages.
                 * @param message ShieldedInstanceConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ShieldedInstanceConfig message, length delimited. Does not implicitly {@link google.container.v1.ShieldedInstanceConfig.verify|verify} messages.
                 * @param message ShieldedInstanceConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ShieldedInstanceConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ShieldedInstanceConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ShieldedInstanceConfig;

                /**
                 * Decodes a ShieldedInstanceConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ShieldedInstanceConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ShieldedInstanceConfig;

                /**
                 * Verifies a ShieldedInstanceConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ShieldedInstanceConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ShieldedInstanceConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ShieldedInstanceConfig;

                /**
                 * Creates a plain object from a ShieldedInstanceConfig message. Also converts values to other types if specified.
                 * @param message ShieldedInstanceConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ShieldedInstanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ShieldedInstanceConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SandboxConfig. */
            interface ISandboxConfig {

                /** SandboxConfig type */
                type?: (google.container.v1.SandboxConfig.Type|keyof typeof google.container.v1.SandboxConfig.Type|null);
            }

            /** Represents a SandboxConfig. */
            class SandboxConfig implements ISandboxConfig {

                /**
                 * Constructs a new SandboxConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ISandboxConfig);

                /** SandboxConfig type. */
                public type: (google.container.v1.SandboxConfig.Type|keyof typeof google.container.v1.SandboxConfig.Type);

                /**
                 * Creates a new SandboxConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SandboxConfig instance
                 */
                public static create(properties?: google.container.v1.ISandboxConfig): google.container.v1.SandboxConfig;

                /**
                 * Encodes the specified SandboxConfig message. Does not implicitly {@link google.container.v1.SandboxConfig.verify|verify} messages.
                 * @param message SandboxConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ISandboxConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SandboxConfig message, length delimited. Does not implicitly {@link google.container.v1.SandboxConfig.verify|verify} messages.
                 * @param message SandboxConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ISandboxConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SandboxConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SandboxConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.SandboxConfig;

                /**
                 * Decodes a SandboxConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SandboxConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.SandboxConfig;

                /**
                 * Verifies a SandboxConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SandboxConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SandboxConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.SandboxConfig;

                /**
                 * Creates a plain object from a SandboxConfig message. Also converts values to other types if specified.
                 * @param message SandboxConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.SandboxConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SandboxConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace SandboxConfig {

                /** Type enum. */
                enum Type {
                    UNSPECIFIED = 0,
                    GVISOR = 1
                }
            }

            /** Properties of a ReservationAffinity. */
            interface IReservationAffinity {

                /** ReservationAffinity consumeReservationType */
                consumeReservationType?: (google.container.v1.ReservationAffinity.Type|keyof typeof google.container.v1.ReservationAffinity.Type|null);

                /** ReservationAffinity key */
                key?: (string|null);

                /** ReservationAffinity values */
                values?: (string[]|null);
            }

            /** Represents a ReservationAffinity. */
            class ReservationAffinity implements IReservationAffinity {

                /**
                 * Constructs a new ReservationAffinity.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IReservationAffinity);

                /** ReservationAffinity consumeReservationType. */
                public consumeReservationType: (google.container.v1.ReservationAffinity.Type|keyof typeof google.container.v1.ReservationAffinity.Type);

                /** ReservationAffinity key. */
                public key: string;

                /** ReservationAffinity values. */
                public values: string[];

                /**
                 * Creates a new ReservationAffinity instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservationAffinity instance
                 */
                public static create(properties?: google.container.v1.IReservationAffinity): google.container.v1.ReservationAffinity;

                /**
                 * Encodes the specified ReservationAffinity message. Does not implicitly {@link google.container.v1.ReservationAffinity.verify|verify} messages.
                 * @param message ReservationAffinity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IReservationAffinity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservationAffinity message, length delimited. Does not implicitly {@link google.container.v1.ReservationAffinity.verify|verify} messages.
                 * @param message ReservationAffinity message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IReservationAffinity, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservationAffinity message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservationAffinity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ReservationAffinity;

                /**
                 * Decodes a ReservationAffinity message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservationAffinity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ReservationAffinity;

                /**
                 * Verifies a ReservationAffinity message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservationAffinity message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservationAffinity
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ReservationAffinity;

                /**
                 * Creates a plain object from a ReservationAffinity message. Also converts values to other types if specified.
                 * @param message ReservationAffinity
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ReservationAffinity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservationAffinity to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ReservationAffinity {

                /** Type enum. */
                enum Type {
                    UNSPECIFIED = 0,
                    NO_RESERVATION = 1,
                    ANY_RESERVATION = 2,
                    SPECIFIC_RESERVATION = 3
                }
            }

            /** Properties of a NodeTaint. */
            interface INodeTaint {

                /** NodeTaint key */
                key?: (string|null);

                /** NodeTaint value */
                value?: (string|null);

                /** NodeTaint effect */
                effect?: (google.container.v1.NodeTaint.Effect|keyof typeof google.container.v1.NodeTaint.Effect|null);
            }

            /** Represents a NodeTaint. */
            class NodeTaint implements INodeTaint {

                /**
                 * Constructs a new NodeTaint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.INodeTaint);

                /** NodeTaint key. */
                public key: string;

                /** NodeTaint value. */
                public value: string;

                /** NodeTaint effect. */
                public effect: (google.container.v1.NodeTaint.Effect|keyof typeof google.container.v1.NodeTaint.Effect);

                /**
                 * Creates a new NodeTaint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NodeTaint instance
                 */
                public static create(properties?: google.container.v1.INodeTaint): google.container.v1.NodeTaint;

                /**
                 * Encodes the specified NodeTaint message. Does not implicitly {@link google.container.v1.NodeTaint.verify|verify} messages.
                 * @param message NodeTaint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.INodeTaint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NodeTaint message, length delimited. Does not implicitly {@link google.container.v1.NodeTaint.verify|verify} messages.
                 * @param message NodeTaint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.INodeTaint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NodeTaint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NodeTaint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.NodeTaint;

                /**
                 * Decodes a NodeTaint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NodeTaint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.NodeTaint;

                /**
                 * Verifies a NodeTaint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NodeTaint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NodeTaint
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.NodeTaint;

                /**
                 * Creates a plain object from a NodeTaint message. Also converts values to other types if specified.
                 * @param message NodeTaint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.NodeTaint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NodeTaint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace NodeTaint {

                /** Effect enum. */
                enum Effect {
                    EFFECT_UNSPECIFIED = 0,
                    NO_SCHEDULE = 1,
                    PREFER_NO_SCHEDULE = 2,
                    NO_EXECUTE = 3
                }
            }

            /** Properties of a MasterAuth. */
            interface IMasterAuth {

                /** MasterAuth username */
                username?: (string|null);

                /** MasterAuth password */
                password?: (string|null);

                /** MasterAuth clientCertificateConfig */
                clientCertificateConfig?: (google.container.v1.IClientCertificateConfig|null);

                /** MasterAuth clusterCaCertificate */
                clusterCaCertificate?: (string|null);

                /** MasterAuth clientCertificate */
                clientCertificate?: (string|null);

                /** MasterAuth clientKey */
                clientKey?: (string|null);
            }

            /** Represents a MasterAuth. */
            class MasterAuth implements IMasterAuth {

                /**
                 * Constructs a new MasterAuth.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IMasterAuth);

                /** MasterAuth username. */
                public username: string;

                /** MasterAuth password. */
                public password: string;

                /** MasterAuth clientCertificateConfig. */
                public clientCertificateConfig?: (google.container.v1.IClientCertificateConfig|null);

                /** MasterAuth clusterCaCertificate. */
                public clusterCaCertificate: string;

                /** MasterAuth clientCertificate. */
                public clientCertificate: string;

                /** MasterAuth clientKey. */
                public clientKey: string;

                /**
                 * Creates a new MasterAuth instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MasterAuth instance
                 */
                public static create(properties?: google.container.v1.IMasterAuth): google.container.v1.MasterAuth;

                /**
                 * Encodes the specified MasterAuth message. Does not implicitly {@link google.container.v1.MasterAuth.verify|verify} messages.
                 * @param message MasterAuth message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IMasterAuth, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MasterAuth message, length delimited. Does not implicitly {@link google.container.v1.MasterAuth.verify|verify} messages.
                 * @param message MasterAuth message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IMasterAuth, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MasterAuth message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MasterAuth
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.MasterAuth;

                /**
                 * Decodes a MasterAuth message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MasterAuth
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.MasterAuth;

                /**
                 * Verifies a MasterAuth message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MasterAuth message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MasterAuth
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.MasterAuth;

                /**
                 * Creates a plain object from a MasterAuth message. Also converts values to other types if specified.
                 * @param message MasterAuth
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.MasterAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MasterAuth to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ClientCertificateConfig. */
            interface IClientCertificateConfig {

                /** ClientCertificateConfig issueClientCertificate */
                issueClientCertificate?: (boolean|null);
            }

            /** Represents a ClientCertificateConfig. */
            class ClientCertificateConfig implements IClientCertificateConfig {

                /**
                 * Constructs a new ClientCertificateConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IClientCertificateConfig);

                /** ClientCertificateConfig issueClientCertificate. */
                public issueClientCertificate: boolean;

                /**
                 * Creates a new ClientCertificateConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ClientCertificateConfig instance
                 */
                public static create(properties?: google.container.v1.IClientCertificateConfig): google.container.v1.ClientCertificateConfig;

                /**
                 * Encodes the specified ClientCertificateConfig message. Does not implicitly {@link google.container.v1.ClientCertificateConfig.verify|verify} messages.
                 * @param message ClientCertificateConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IClientCertificateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ClientCertificateConfig message, length delimited. Does not implicitly {@link google.container.v1.ClientCertificateConfig.verify|verify} messages.
                 * @param message ClientCertificateConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IClientCertificateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ClientCertificateConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ClientCertificateConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ClientCertificateConfig;

                /**
                 * Decodes a ClientCertificateConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ClientCertificateConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ClientCertificateConfig;

                /**
                 * Verifies a ClientCertificateConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ClientCertificateConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ClientCertificateConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ClientCertificateConfig;

                /**
                 * Creates a plain object from a ClientCertificateConfig message. Also converts values to other types if specified.
                 * @param message ClientCertificateConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ClientCertificateConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ClientCertificateConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AddonsConfig. */
            interface IAddonsConfig {

                /** AddonsConfig httpLoadBalancing */
                httpLoadBalancing?: (google.container.v1.IHttpLoadBalancing|null);

                /** AddonsConfig horizontalPodAutoscaling */
                horizontalPodAutoscaling?: (google.container.v1.IHorizontalPodAutoscaling|null);

                /** AddonsConfig kubernetesDashboard */
                kubernetesDashboard?: (google.container.v1.IKubernetesDashboard|null);

                /** AddonsConfig networkPolicyConfig */
                networkPolicyConfig?: (google.container.v1.INetworkPolicyConfig|null);

                /** AddonsConfig cloudRunConfig */
                cloudRunConfig?: (google.container.v1.ICloudRunConfig|null);

                /** AddonsConfig dnsCacheConfig */
                dnsCacheConfig?: (google.container.v1.IDnsCacheConfig|null);

                /** AddonsConfig configConnectorConfig */
                configConnectorConfig?: (google.container.v1.IConfigConnectorConfig|null);
            }

            /** Represents an AddonsConfig. */
            class AddonsConfig implements IAddonsConfig {

                /**
                 * Constructs a new AddonsConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IAddonsConfig);

                /** AddonsConfig httpLoadBalancing. */
                public httpLoadBalancing?: (google.container.v1.IHttpLoadBalancing|null);

                /** AddonsConfig horizontalPodAutoscaling. */
                public horizontalPodAutoscaling?: (google.container.v1.IHorizontalPodAutoscaling|null);

                /** AddonsConfig kubernetesDashboard. */
                public kubernetesDashboard?: (google.container.v1.IKubernetesDashboard|null);

                /** AddonsConfig networkPolicyConfig. */
                public networkPolicyConfig?: (google.container.v1.INetworkPolicyConfig|null);

                /** AddonsConfig cloudRunConfig. */
                public cloudRunConfig?: (google.container.v1.ICloudRunConfig|null);

                /** AddonsConfig dnsCacheConfig. */
                public dnsCacheConfig?: (google.container.v1.IDnsCacheConfig|null);

                /** AddonsConfig configConnectorConfig. */
                public configConnectorConfig?: (google.container.v1.IConfigConnectorConfig|null);

                /**
                 * Creates a new AddonsConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AddonsConfig instance
                 */
                public static create(properties?: google.container.v1.IAddonsConfig): google.container.v1.AddonsConfig;

                /**
                 * Encodes the specified AddonsConfig message. Does not implicitly {@link google.container.v1.AddonsConfig.verify|verify} messages.
                 * @param message AddonsConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IAddonsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AddonsConfig message, length delimited. Does not implicitly {@link google.container.v1.AddonsConfig.verify|verify} messages.
                 * @param message AddonsConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IAddonsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AddonsConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AddonsConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.AddonsConfig;

                /**
                 * Decodes an AddonsConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AddonsConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.AddonsConfig;

                /**
                 * Verifies an AddonsConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AddonsConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AddonsConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.AddonsConfig;

                /**
                 * Creates a plain object from an AddonsConfig message. Also converts values to other types if specified.
                 * @param message AddonsConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.AddonsConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AddonsConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a HttpLoadBalancing. */
            interface IHttpLoadBalancing {

                /** HttpLoadBalancing disabled */
                disabled?: (boolean|null);
            }

            /** Represents a HttpLoadBalancing. */
            class HttpLoadBalancing implements IHttpLoadBalancing {

                /**
                 * Constructs a new HttpLoadBalancing.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IHttpLoadBalancing);

                /** HttpLoadBalancing disabled. */
                public disabled: boolean;

                /**
                 * Creates a new HttpLoadBalancing instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HttpLoadBalancing instance
                 */
                public static create(properties?: google.container.v1.IHttpLoadBalancing): google.container.v1.HttpLoadBalancing;

                /**
                 * Encodes the specified HttpLoadBalancing message. Does not implicitly {@link google.container.v1.HttpLoadBalancing.verify|verify} messages.
                 * @param message HttpLoadBalancing message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IHttpLoadBalancing, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HttpLoadBalancing message, length delimited. Does not implicitly {@link google.container.v1.HttpLoadBalancing.verify|verify} messages.
                 * @param message HttpLoadBalancing message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IHttpLoadBalancing, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HttpLoadBalancing message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HttpLoadBalancing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.HttpLoadBalancing;

                /**
                 * Decodes a HttpLoadBalancing message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HttpLoadBalancing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.HttpLoadBalancing;

                /**
                 * Verifies a HttpLoadBalancing message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HttpLoadBalancing message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HttpLoadBalancing
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.HttpLoadBalancing;

                /**
                 * Creates a plain object from a HttpLoadBalancing message. Also converts values to other types if specified.
                 * @param message HttpLoadBalancing
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.HttpLoadBalancing, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HttpLoadBalancing to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a HorizontalPodAutoscaling. */
            interface IHorizontalPodAutoscaling {

                /** HorizontalPodAutoscaling disabled */
                disabled?: (boolean|null);
            }

            /** Represents a HorizontalPodAutoscaling. */
            class HorizontalPodAutoscaling implements IHorizontalPodAutoscaling {

                /**
                 * Constructs a new HorizontalPodAutoscaling.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IHorizontalPodAutoscaling);

                /** HorizontalPodAutoscaling disabled. */
                public disabled: boolean;

                /**
                 * Creates a new HorizontalPodAutoscaling instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HorizontalPodAutoscaling instance
                 */
                public static create(properties?: google.container.v1.IHorizontalPodAutoscaling): google.container.v1.HorizontalPodAutoscaling;

                /**
                 * Encodes the specified HorizontalPodAutoscaling message. Does not implicitly {@link google.container.v1.HorizontalPodAutoscaling.verify|verify} messages.
                 * @param message HorizontalPodAutoscaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IHorizontalPodAutoscaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HorizontalPodAutoscaling message, length delimited. Does not implicitly {@link google.container.v1.HorizontalPodAutoscaling.verify|verify} messages.
                 * @param message HorizontalPodAutoscaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IHorizontalPodAutoscaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HorizontalPodAutoscaling message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HorizontalPodAutoscaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.HorizontalPodAutoscaling;

                /**
                 * Decodes a HorizontalPodAutoscaling message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HorizontalPodAutoscaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.HorizontalPodAutoscaling;

                /**
                 * Verifies a HorizontalPodAutoscaling message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HorizontalPodAutoscaling message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HorizontalPodAutoscaling
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.HorizontalPodAutoscaling;

                /**
                 * Creates a plain object from a HorizontalPodAutoscaling message. Also converts values to other types if specified.
                 * @param message HorizontalPodAutoscaling
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.HorizontalPodAutoscaling, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HorizontalPodAutoscaling to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a KubernetesDashboard. */
            interface IKubernetesDashboard {

                /** KubernetesDashboard disabled */
                disabled?: (boolean|null);
            }

            /** Represents a KubernetesDashboard. */
            class KubernetesDashboard implements IKubernetesDashboard {

                /**
                 * Constructs a new KubernetesDashboard.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IKubernetesDashboard);

                /** KubernetesDashboard disabled. */
                public disabled: boolean;

                /**
                 * Creates a new KubernetesDashboard instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns KubernetesDashboard instance
                 */
                public static create(properties?: google.container.v1.IKubernetesDashboard): google.container.v1.KubernetesDashboard;

                /**
                 * Encodes the specified KubernetesDashboard message. Does not implicitly {@link google.container.v1.KubernetesDashboard.verify|verify} messages.
                 * @param message KubernetesDashboard message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IKubernetesDashboard, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified KubernetesDashboard message, length delimited. Does not implicitly {@link google.container.v1.KubernetesDashboard.verify|verify} messages.
                 * @param message KubernetesDashboard message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IKubernetesDashboard, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a KubernetesDashboard message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns KubernetesDashboard
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.KubernetesDashboard;

                /**
                 * Decodes a KubernetesDashboard message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns KubernetesDashboard
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.KubernetesDashboard;

                /**
                 * Verifies a KubernetesDashboard message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a KubernetesDashboard message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns KubernetesDashboard
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.KubernetesDashboard;

                /**
                 * Creates a plain object from a KubernetesDashboard message. Also converts values to other types if specified.
                 * @param message KubernetesDashboard
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.KubernetesDashboard, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this KubernetesDashboard to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NetworkPolicyConfig. */
            interface INetworkPolicyConfig {

                /** NetworkPolicyConfig disabled */
                disabled?: (boolean|null);
            }

            /** Represents a NetworkPolicyConfig. */
            class NetworkPolicyConfig implements INetworkPolicyConfig {

                /**
                 * Constructs a new NetworkPolicyConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.INetworkPolicyConfig);

                /** NetworkPolicyConfig disabled. */
                public disabled: boolean;

                /**
                 * Creates a new NetworkPolicyConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NetworkPolicyConfig instance
                 */
                public static create(properties?: google.container.v1.INetworkPolicyConfig): google.container.v1.NetworkPolicyConfig;

                /**
                 * Encodes the specified NetworkPolicyConfig message. Does not implicitly {@link google.container.v1.NetworkPolicyConfig.verify|verify} messages.
                 * @param message NetworkPolicyConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.INetworkPolicyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NetworkPolicyConfig message, length delimited. Does not implicitly {@link google.container.v1.NetworkPolicyConfig.verify|verify} messages.
                 * @param message NetworkPolicyConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.INetworkPolicyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NetworkPolicyConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NetworkPolicyConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.NetworkPolicyConfig;

                /**
                 * Decodes a NetworkPolicyConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NetworkPolicyConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.NetworkPolicyConfig;

                /**
                 * Verifies a NetworkPolicyConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NetworkPolicyConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NetworkPolicyConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.NetworkPolicyConfig;

                /**
                 * Creates a plain object from a NetworkPolicyConfig message. Also converts values to other types if specified.
                 * @param message NetworkPolicyConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.NetworkPolicyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NetworkPolicyConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DnsCacheConfig. */
            interface IDnsCacheConfig {

                /** DnsCacheConfig enabled */
                enabled?: (boolean|null);
            }

            /** Represents a DnsCacheConfig. */
            class DnsCacheConfig implements IDnsCacheConfig {

                /**
                 * Constructs a new DnsCacheConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IDnsCacheConfig);

                /** DnsCacheConfig enabled. */
                public enabled: boolean;

                /**
                 * Creates a new DnsCacheConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DnsCacheConfig instance
                 */
                public static create(properties?: google.container.v1.IDnsCacheConfig): google.container.v1.DnsCacheConfig;

                /**
                 * Encodes the specified DnsCacheConfig message. Does not implicitly {@link google.container.v1.DnsCacheConfig.verify|verify} messages.
                 * @param message DnsCacheConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IDnsCacheConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DnsCacheConfig message, length delimited. Does not implicitly {@link google.container.v1.DnsCacheConfig.verify|verify} messages.
                 * @param message DnsCacheConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IDnsCacheConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DnsCacheConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DnsCacheConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.DnsCacheConfig;

                /**
                 * Decodes a DnsCacheConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DnsCacheConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.DnsCacheConfig;

                /**
                 * Verifies a DnsCacheConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DnsCacheConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DnsCacheConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.DnsCacheConfig;

                /**
                 * Creates a plain object from a DnsCacheConfig message. Also converts values to other types if specified.
                 * @param message DnsCacheConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.DnsCacheConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DnsCacheConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PrivateClusterMasterGlobalAccessConfig. */
            interface IPrivateClusterMasterGlobalAccessConfig {

                /** PrivateClusterMasterGlobalAccessConfig enabled */
                enabled?: (boolean|null);
            }

            /** Represents a PrivateClusterMasterGlobalAccessConfig. */
            class PrivateClusterMasterGlobalAccessConfig implements IPrivateClusterMasterGlobalAccessConfig {

                /**
                 * Constructs a new PrivateClusterMasterGlobalAccessConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IPrivateClusterMasterGlobalAccessConfig);

                /** PrivateClusterMasterGlobalAccessConfig enabled. */
                public enabled: boolean;

                /**
                 * Creates a new PrivateClusterMasterGlobalAccessConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PrivateClusterMasterGlobalAccessConfig instance
                 */
                public static create(properties?: google.container.v1.IPrivateClusterMasterGlobalAccessConfig): google.container.v1.PrivateClusterMasterGlobalAccessConfig;

                /**
                 * Encodes the specified PrivateClusterMasterGlobalAccessConfig message. Does not implicitly {@link google.container.v1.PrivateClusterMasterGlobalAccessConfig.verify|verify} messages.
                 * @param message PrivateClusterMasterGlobalAccessConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IPrivateClusterMasterGlobalAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PrivateClusterMasterGlobalAccessConfig message, length delimited. Does not implicitly {@link google.container.v1.PrivateClusterMasterGlobalAccessConfig.verify|verify} messages.
                 * @param message PrivateClusterMasterGlobalAccessConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IPrivateClusterMasterGlobalAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PrivateClusterMasterGlobalAccessConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PrivateClusterMasterGlobalAccessConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.PrivateClusterMasterGlobalAccessConfig;

                /**
                 * Decodes a PrivateClusterMasterGlobalAccessConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PrivateClusterMasterGlobalAccessConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.PrivateClusterMasterGlobalAccessConfig;

                /**
                 * Verifies a PrivateClusterMasterGlobalAccessConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PrivateClusterMasterGlobalAccessConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PrivateClusterMasterGlobalAccessConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.PrivateClusterMasterGlobalAccessConfig;

                /**
                 * Creates a plain object from a PrivateClusterMasterGlobalAccessConfig message. Also converts values to other types if specified.
                 * @param message PrivateClusterMasterGlobalAccessConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.PrivateClusterMasterGlobalAccessConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PrivateClusterMasterGlobalAccessConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PrivateClusterConfig. */
            interface IPrivateClusterConfig {

                /** PrivateClusterConfig enablePrivateNodes */
                enablePrivateNodes?: (boolean|null);

                /** PrivateClusterConfig enablePrivateEndpoint */
                enablePrivateEndpoint?: (boolean|null);

                /** PrivateClusterConfig masterIpv4CidrBlock */
                masterIpv4CidrBlock?: (string|null);

                /** PrivateClusterConfig privateEndpoint */
                privateEndpoint?: (string|null);

                /** PrivateClusterConfig publicEndpoint */
                publicEndpoint?: (string|null);

                /** PrivateClusterConfig peeringName */
                peeringName?: (string|null);

                /** PrivateClusterConfig masterGlobalAccessConfig */
                masterGlobalAccessConfig?: (google.container.v1.IPrivateClusterMasterGlobalAccessConfig|null);
            }

            /** Represents a PrivateClusterConfig. */
            class PrivateClusterConfig implements IPrivateClusterConfig {

                /**
                 * Constructs a new PrivateClusterConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IPrivateClusterConfig);

                /** PrivateClusterConfig enablePrivateNodes. */
                public enablePrivateNodes: boolean;

                /** PrivateClusterConfig enablePrivateEndpoint. */
                public enablePrivateEndpoint: boolean;

                /** PrivateClusterConfig masterIpv4CidrBlock. */
                public masterIpv4CidrBlock: string;

                /** PrivateClusterConfig privateEndpoint. */
                public privateEndpoint: string;

                /** PrivateClusterConfig publicEndpoint. */
                public publicEndpoint: string;

                /** PrivateClusterConfig peeringName. */
                public peeringName: string;

                /** PrivateClusterConfig masterGlobalAccessConfig. */
                public masterGlobalAccessConfig?: (google.container.v1.IPrivateClusterMasterGlobalAccessConfig|null);

                /**
                 * Creates a new PrivateClusterConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PrivateClusterConfig instance
                 */
                public static create(properties?: google.container.v1.IPrivateClusterConfig): google.container.v1.PrivateClusterConfig;

                /**
                 * Encodes the specified PrivateClusterConfig message. Does not implicitly {@link google.container.v1.PrivateClusterConfig.verify|verify} messages.
                 * @param message PrivateClusterConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IPrivateClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PrivateClusterConfig message, length delimited. Does not implicitly {@link google.container.v1.PrivateClusterConfig.verify|verify} messages.
                 * @param message PrivateClusterConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IPrivateClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PrivateClusterConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PrivateClusterConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.PrivateClusterConfig;

                /**
                 * Decodes a PrivateClusterConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PrivateClusterConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.PrivateClusterConfig;

                /**
                 * Verifies a PrivateClusterConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PrivateClusterConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PrivateClusterConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.PrivateClusterConfig;

                /**
                 * Creates a plain object from a PrivateClusterConfig message. Also converts values to other types if specified.
                 * @param message PrivateClusterConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.PrivateClusterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PrivateClusterConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AuthenticatorGroupsConfig. */
            interface IAuthenticatorGroupsConfig {

                /** AuthenticatorGroupsConfig enabled */
                enabled?: (boolean|null);

                /** AuthenticatorGroupsConfig securityGroup */
                securityGroup?: (string|null);
            }

            /** Represents an AuthenticatorGroupsConfig. */
            class AuthenticatorGroupsConfig implements IAuthenticatorGroupsConfig {

                /**
                 * Constructs a new AuthenticatorGroupsConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IAuthenticatorGroupsConfig);

                /** AuthenticatorGroupsConfig enabled. */
                public enabled: boolean;

                /** AuthenticatorGroupsConfig securityGroup. */
                public securityGroup: string;

                /**
                 * Creates a new AuthenticatorGroupsConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuthenticatorGroupsConfig instance
                 */
                public static create(properties?: google.container.v1.IAuthenticatorGroupsConfig): google.container.v1.AuthenticatorGroupsConfig;

                /**
                 * Encodes the specified AuthenticatorGroupsConfig message. Does not implicitly {@link google.container.v1.AuthenticatorGroupsConfig.verify|verify} messages.
                 * @param message AuthenticatorGroupsConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IAuthenticatorGroupsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuthenticatorGroupsConfig message, length delimited. Does not implicitly {@link google.container.v1.AuthenticatorGroupsConfig.verify|verify} messages.
                 * @param message AuthenticatorGroupsConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IAuthenticatorGroupsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuthenticatorGroupsConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuthenticatorGroupsConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.AuthenticatorGroupsConfig;

                /**
                 * Decodes an AuthenticatorGroupsConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuthenticatorGroupsConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.AuthenticatorGroupsConfig;

                /**
                 * Verifies an AuthenticatorGroupsConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuthenticatorGroupsConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuthenticatorGroupsConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.AuthenticatorGroupsConfig;

                /**
                 * Creates a plain object from an AuthenticatorGroupsConfig message. Also converts values to other types if specified.
                 * @param message AuthenticatorGroupsConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.AuthenticatorGroupsConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuthenticatorGroupsConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CloudRunConfig. */
            interface ICloudRunConfig {

                /** CloudRunConfig disabled */
                disabled?: (boolean|null);

                /** CloudRunConfig loadBalancerType */
                loadBalancerType?: (google.container.v1.CloudRunConfig.LoadBalancerType|keyof typeof google.container.v1.CloudRunConfig.LoadBalancerType|null);
            }

            /** Represents a CloudRunConfig. */
            class CloudRunConfig implements ICloudRunConfig {

                /**
                 * Constructs a new CloudRunConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ICloudRunConfig);

                /** CloudRunConfig disabled. */
                public disabled: boolean;

                /** CloudRunConfig loadBalancerType. */
                public loadBalancerType: (google.container.v1.CloudRunConfig.LoadBalancerType|keyof typeof google.container.v1.CloudRunConfig.LoadBalancerType);

                /**
                 * Creates a new CloudRunConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CloudRunConfig instance
                 */
                public static create(properties?: google.container.v1.ICloudRunConfig): google.container.v1.CloudRunConfig;

                /**
                 * Encodes the specified CloudRunConfig message. Does not implicitly {@link google.container.v1.CloudRunConfig.verify|verify} messages.
                 * @param message CloudRunConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ICloudRunConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CloudRunConfig message, length delimited. Does not implicitly {@link google.container.v1.CloudRunConfig.verify|verify} messages.
                 * @param message CloudRunConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ICloudRunConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CloudRunConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CloudRunConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.CloudRunConfig;

                /**
                 * Decodes a CloudRunConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CloudRunConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.CloudRunConfig;

                /**
                 * Verifies a CloudRunConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CloudRunConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CloudRunConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.CloudRunConfig;

                /**
                 * Creates a plain object from a CloudRunConfig message. Also converts values to other types if specified.
                 * @param message CloudRunConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.CloudRunConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CloudRunConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace CloudRunConfig {

                /** LoadBalancerType enum. */
                enum LoadBalancerType {
                    LOAD_BALANCER_TYPE_UNSPECIFIED = 0,
                    LOAD_BALANCER_TYPE_EXTERNAL = 1,
                    LOAD_BALANCER_TYPE_INTERNAL = 2
                }
            }

            /** Properties of a ConfigConnectorConfig. */
            interface IConfigConnectorConfig {

                /** ConfigConnectorConfig enabled */
                enabled?: (boolean|null);
            }

            /** Represents a ConfigConnectorConfig. */
            class ConfigConnectorConfig implements IConfigConnectorConfig {

                /**
                 * Constructs a new ConfigConnectorConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IConfigConnectorConfig);

                /** ConfigConnectorConfig enabled. */
                public enabled: boolean;

                /**
                 * Creates a new ConfigConnectorConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ConfigConnectorConfig instance
                 */
                public static create(properties?: google.container.v1.IConfigConnectorConfig): google.container.v1.ConfigConnectorConfig;

                /**
                 * Encodes the specified ConfigConnectorConfig message. Does not implicitly {@link google.container.v1.ConfigConnectorConfig.verify|verify} messages.
                 * @param message ConfigConnectorConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IConfigConnectorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ConfigConnectorConfig message, length delimited. Does not implicitly {@link google.container.v1.ConfigConnectorConfig.verify|verify} messages.
                 * @param message ConfigConnectorConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IConfigConnectorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ConfigConnectorConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ConfigConnectorConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ConfigConnectorConfig;

                /**
                 * Decodes a ConfigConnectorConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ConfigConnectorConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ConfigConnectorConfig;

                /**
                 * Verifies a ConfigConnectorConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ConfigConnectorConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ConfigConnectorConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ConfigConnectorConfig;

                /**
                 * Creates a plain object from a ConfigConnectorConfig message. Also converts values to other types if specified.
                 * @param message ConfigConnectorConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ConfigConnectorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ConfigConnectorConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MasterAuthorizedNetworksConfig. */
            interface IMasterAuthorizedNetworksConfig {

                /** MasterAuthorizedNetworksConfig enabled */
                enabled?: (boolean|null);

                /** MasterAuthorizedNetworksConfig cidrBlocks */
                cidrBlocks?: (google.container.v1.MasterAuthorizedNetworksConfig.ICidrBlock[]|null);
            }

            /** Represents a MasterAuthorizedNetworksConfig. */
            class MasterAuthorizedNetworksConfig implements IMasterAuthorizedNetworksConfig {

                /**
                 * Constructs a new MasterAuthorizedNetworksConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IMasterAuthorizedNetworksConfig);

                /** MasterAuthorizedNetworksConfig enabled. */
                public enabled: boolean;

                /** MasterAuthorizedNetworksConfig cidrBlocks. */
                public cidrBlocks: google.container.v1.MasterAuthorizedNetworksConfig.ICidrBlock[];

                /**
                 * Creates a new MasterAuthorizedNetworksConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MasterAuthorizedNetworksConfig instance
                 */
                public static create(properties?: google.container.v1.IMasterAuthorizedNetworksConfig): google.container.v1.MasterAuthorizedNetworksConfig;

                /**
                 * Encodes the specified MasterAuthorizedNetworksConfig message. Does not implicitly {@link google.container.v1.MasterAuthorizedNetworksConfig.verify|verify} messages.
                 * @param message MasterAuthorizedNetworksConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IMasterAuthorizedNetworksConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MasterAuthorizedNetworksConfig message, length delimited. Does not implicitly {@link google.container.v1.MasterAuthorizedNetworksConfig.verify|verify} messages.
                 * @param message MasterAuthorizedNetworksConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IMasterAuthorizedNetworksConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MasterAuthorizedNetworksConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MasterAuthorizedNetworksConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.MasterAuthorizedNetworksConfig;

                /**
                 * Decodes a MasterAuthorizedNetworksConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MasterAuthorizedNetworksConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.MasterAuthorizedNetworksConfig;

                /**
                 * Verifies a MasterAuthorizedNetworksConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MasterAuthorizedNetworksConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MasterAuthorizedNetworksConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.MasterAuthorizedNetworksConfig;

                /**
                 * Creates a plain object from a MasterAuthorizedNetworksConfig message. Also converts values to other types if specified.
                 * @param message MasterAuthorizedNetworksConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.MasterAuthorizedNetworksConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MasterAuthorizedNetworksConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace MasterAuthorizedNetworksConfig {

                /** Properties of a CidrBlock. */
                interface ICidrBlock {

                    /** CidrBlock displayName */
                    displayName?: (string|null);

                    /** CidrBlock cidrBlock */
                    cidrBlock?: (string|null);
                }

                /** Represents a CidrBlock. */
                class CidrBlock implements ICidrBlock {

                    /**
                     * Constructs a new CidrBlock.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.container.v1.MasterAuthorizedNetworksConfig.ICidrBlock);

                    /** CidrBlock displayName. */
                    public displayName: string;

                    /** CidrBlock cidrBlock. */
                    public cidrBlock: string;

                    /**
                     * Creates a new CidrBlock instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CidrBlock instance
                     */
                    public static create(properties?: google.container.v1.MasterAuthorizedNetworksConfig.ICidrBlock): google.container.v1.MasterAuthorizedNetworksConfig.CidrBlock;

                    /**
                     * Encodes the specified CidrBlock message. Does not implicitly {@link google.container.v1.MasterAuthorizedNetworksConfig.CidrBlock.verify|verify} messages.
                     * @param message CidrBlock message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.container.v1.MasterAuthorizedNetworksConfig.ICidrBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CidrBlock message, length delimited. Does not implicitly {@link google.container.v1.MasterAuthorizedNetworksConfig.CidrBlock.verify|verify} messages.
                     * @param message CidrBlock message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.container.v1.MasterAuthorizedNetworksConfig.ICidrBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CidrBlock message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CidrBlock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.MasterAuthorizedNetworksConfig.CidrBlock;

                    /**
                     * Decodes a CidrBlock message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CidrBlock
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.MasterAuthorizedNetworksConfig.CidrBlock;

                    /**
                     * Verifies a CidrBlock message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CidrBlock message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CidrBlock
                     */
                    public static fromObject(object: { [k: string]: any }): google.container.v1.MasterAuthorizedNetworksConfig.CidrBlock;

                    /**
                     * Creates a plain object from a CidrBlock message. Also converts values to other types if specified.
                     * @param message CidrBlock
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.container.v1.MasterAuthorizedNetworksConfig.CidrBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CidrBlock to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a LegacyAbac. */
            interface ILegacyAbac {

                /** LegacyAbac enabled */
                enabled?: (boolean|null);
            }

            /** Represents a LegacyAbac. */
            class LegacyAbac implements ILegacyAbac {

                /**
                 * Constructs a new LegacyAbac.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ILegacyAbac);

                /** LegacyAbac enabled. */
                public enabled: boolean;

                /**
                 * Creates a new LegacyAbac instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LegacyAbac instance
                 */
                public static create(properties?: google.container.v1.ILegacyAbac): google.container.v1.LegacyAbac;

                /**
                 * Encodes the specified LegacyAbac message. Does not implicitly {@link google.container.v1.LegacyAbac.verify|verify} messages.
                 * @param message LegacyAbac message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ILegacyAbac, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LegacyAbac message, length delimited. Does not implicitly {@link google.container.v1.LegacyAbac.verify|verify} messages.
                 * @param message LegacyAbac message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ILegacyAbac, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LegacyAbac message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LegacyAbac
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.LegacyAbac;

                /**
                 * Decodes a LegacyAbac message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LegacyAbac
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.LegacyAbac;

                /**
                 * Verifies a LegacyAbac message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LegacyAbac message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LegacyAbac
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.LegacyAbac;

                /**
                 * Creates a plain object from a LegacyAbac message. Also converts values to other types if specified.
                 * @param message LegacyAbac
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.LegacyAbac, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LegacyAbac to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NetworkPolicy. */
            interface INetworkPolicy {

                /** NetworkPolicy provider */
                provider?: (google.container.v1.NetworkPolicy.Provider|keyof typeof google.container.v1.NetworkPolicy.Provider|null);

                /** NetworkPolicy enabled */
                enabled?: (boolean|null);
            }

            /** Represents a NetworkPolicy. */
            class NetworkPolicy implements INetworkPolicy {

                /**
                 * Constructs a new NetworkPolicy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.INetworkPolicy);

                /** NetworkPolicy provider. */
                public provider: (google.container.v1.NetworkPolicy.Provider|keyof typeof google.container.v1.NetworkPolicy.Provider);

                /** NetworkPolicy enabled. */
                public enabled: boolean;

                /**
                 * Creates a new NetworkPolicy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NetworkPolicy instance
                 */
                public static create(properties?: google.container.v1.INetworkPolicy): google.container.v1.NetworkPolicy;

                /**
                 * Encodes the specified NetworkPolicy message. Does not implicitly {@link google.container.v1.NetworkPolicy.verify|verify} messages.
                 * @param message NetworkPolicy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.INetworkPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NetworkPolicy message, length delimited. Does not implicitly {@link google.container.v1.NetworkPolicy.verify|verify} messages.
                 * @param message NetworkPolicy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.INetworkPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NetworkPolicy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NetworkPolicy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.NetworkPolicy;

                /**
                 * Decodes a NetworkPolicy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NetworkPolicy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.NetworkPolicy;

                /**
                 * Verifies a NetworkPolicy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NetworkPolicy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NetworkPolicy
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.NetworkPolicy;

                /**
                 * Creates a plain object from a NetworkPolicy message. Also converts values to other types if specified.
                 * @param message NetworkPolicy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.NetworkPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NetworkPolicy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace NetworkPolicy {

                /** Provider enum. */
                enum Provider {
                    PROVIDER_UNSPECIFIED = 0,
                    CALICO = 1
                }
            }

            /** Properties of a BinaryAuthorization. */
            interface IBinaryAuthorization {

                /** BinaryAuthorization enabled */
                enabled?: (boolean|null);
            }

            /** Represents a BinaryAuthorization. */
            class BinaryAuthorization implements IBinaryAuthorization {

                /**
                 * Constructs a new BinaryAuthorization.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IBinaryAuthorization);

                /** BinaryAuthorization enabled. */
                public enabled: boolean;

                /**
                 * Creates a new BinaryAuthorization instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BinaryAuthorization instance
                 */
                public static create(properties?: google.container.v1.IBinaryAuthorization): google.container.v1.BinaryAuthorization;

                /**
                 * Encodes the specified BinaryAuthorization message. Does not implicitly {@link google.container.v1.BinaryAuthorization.verify|verify} messages.
                 * @param message BinaryAuthorization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IBinaryAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BinaryAuthorization message, length delimited. Does not implicitly {@link google.container.v1.BinaryAuthorization.verify|verify} messages.
                 * @param message BinaryAuthorization message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IBinaryAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BinaryAuthorization message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BinaryAuthorization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.BinaryAuthorization;

                /**
                 * Decodes a BinaryAuthorization message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BinaryAuthorization
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.BinaryAuthorization;

                /**
                 * Verifies a BinaryAuthorization message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BinaryAuthorization message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BinaryAuthorization
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.BinaryAuthorization;

                /**
                 * Creates a plain object from a BinaryAuthorization message. Also converts values to other types if specified.
                 * @param message BinaryAuthorization
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.BinaryAuthorization, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BinaryAuthorization to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a IPAllocationPolicy. */
            interface IIPAllocationPolicy {

                /** IPAllocationPolicy useIpAliases */
                useIpAliases?: (boolean|null);

                /** IPAllocationPolicy createSubnetwork */
                createSubnetwork?: (boolean|null);

                /** IPAllocationPolicy subnetworkName */
                subnetworkName?: (string|null);

                /** IPAllocationPolicy clusterIpv4Cidr */
                clusterIpv4Cidr?: (string|null);

                /** IPAllocationPolicy nodeIpv4Cidr */
                nodeIpv4Cidr?: (string|null);

                /** IPAllocationPolicy servicesIpv4Cidr */
                servicesIpv4Cidr?: (string|null);

                /** IPAllocationPolicy clusterSecondaryRangeName */
                clusterSecondaryRangeName?: (string|null);

                /** IPAllocationPolicy servicesSecondaryRangeName */
                servicesSecondaryRangeName?: (string|null);

                /** IPAllocationPolicy clusterIpv4CidrBlock */
                clusterIpv4CidrBlock?: (string|null);

                /** IPAllocationPolicy nodeIpv4CidrBlock */
                nodeIpv4CidrBlock?: (string|null);

                /** IPAllocationPolicy servicesIpv4CidrBlock */
                servicesIpv4CidrBlock?: (string|null);

                /** IPAllocationPolicy tpuIpv4CidrBlock */
                tpuIpv4CidrBlock?: (string|null);

                /** IPAllocationPolicy useRoutes */
                useRoutes?: (boolean|null);
            }

            /** Represents a IPAllocationPolicy. */
            class IPAllocationPolicy implements IIPAllocationPolicy {

                /**
                 * Constructs a new IPAllocationPolicy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IIPAllocationPolicy);

                /** IPAllocationPolicy useIpAliases. */
                public useIpAliases: boolean;

                /** IPAllocationPolicy createSubnetwork. */
                public createSubnetwork: boolean;

                /** IPAllocationPolicy subnetworkName. */
                public subnetworkName: string;

                /** IPAllocationPolicy clusterIpv4Cidr. */
                public clusterIpv4Cidr: string;

                /** IPAllocationPolicy nodeIpv4Cidr. */
                public nodeIpv4Cidr: string;

                /** IPAllocationPolicy servicesIpv4Cidr. */
                public servicesIpv4Cidr: string;

                /** IPAllocationPolicy clusterSecondaryRangeName. */
                public clusterSecondaryRangeName: string;

                /** IPAllocationPolicy servicesSecondaryRangeName. */
                public servicesSecondaryRangeName: string;

                /** IPAllocationPolicy clusterIpv4CidrBlock. */
                public clusterIpv4CidrBlock: string;

                /** IPAllocationPolicy nodeIpv4CidrBlock. */
                public nodeIpv4CidrBlock: string;

                /** IPAllocationPolicy servicesIpv4CidrBlock. */
                public servicesIpv4CidrBlock: string;

                /** IPAllocationPolicy tpuIpv4CidrBlock. */
                public tpuIpv4CidrBlock: string;

                /** IPAllocationPolicy useRoutes. */
                public useRoutes: boolean;

                /**
                 * Creates a new IPAllocationPolicy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IPAllocationPolicy instance
                 */
                public static create(properties?: google.container.v1.IIPAllocationPolicy): google.container.v1.IPAllocationPolicy;

                /**
                 * Encodes the specified IPAllocationPolicy message. Does not implicitly {@link google.container.v1.IPAllocationPolicy.verify|verify} messages.
                 * @param message IPAllocationPolicy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IIPAllocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IPAllocationPolicy message, length delimited. Does not implicitly {@link google.container.v1.IPAllocationPolicy.verify|verify} messages.
                 * @param message IPAllocationPolicy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IIPAllocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a IPAllocationPolicy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IPAllocationPolicy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.IPAllocationPolicy;

                /**
                 * Decodes a IPAllocationPolicy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IPAllocationPolicy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.IPAllocationPolicy;

                /**
                 * Verifies a IPAllocationPolicy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a IPAllocationPolicy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IPAllocationPolicy
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.IPAllocationPolicy;

                /**
                 * Creates a plain object from a IPAllocationPolicy message. Also converts values to other types if specified.
                 * @param message IPAllocationPolicy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.IPAllocationPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IPAllocationPolicy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Cluster. */
            interface ICluster {

                /** Cluster name */
                name?: (string|null);

                /** Cluster description */
                description?: (string|null);

                /** Cluster initialNodeCount */
                initialNodeCount?: (number|null);

                /** Cluster nodeConfig */
                nodeConfig?: (google.container.v1.INodeConfig|null);

                /** Cluster masterAuth */
                masterAuth?: (google.container.v1.IMasterAuth|null);

                /** Cluster loggingService */
                loggingService?: (string|null);

                /** Cluster monitoringService */
                monitoringService?: (string|null);

                /** Cluster network */
                network?: (string|null);

                /** Cluster clusterIpv4Cidr */
                clusterIpv4Cidr?: (string|null);

                /** Cluster addonsConfig */
                addonsConfig?: (google.container.v1.IAddonsConfig|null);

                /** Cluster subnetwork */
                subnetwork?: (string|null);

                /** Cluster nodePools */
                nodePools?: (google.container.v1.INodePool[]|null);

                /** Cluster locations */
                locations?: (string[]|null);

                /** Cluster enableKubernetesAlpha */
                enableKubernetesAlpha?: (boolean|null);

                /** Cluster resourceLabels */
                resourceLabels?: ({ [k: string]: string }|null);

                /** Cluster labelFingerprint */
                labelFingerprint?: (string|null);

                /** Cluster legacyAbac */
                legacyAbac?: (google.container.v1.ILegacyAbac|null);

                /** Cluster networkPolicy */
                networkPolicy?: (google.container.v1.INetworkPolicy|null);

                /** Cluster ipAllocationPolicy */
                ipAllocationPolicy?: (google.container.v1.IIPAllocationPolicy|null);

                /** Cluster masterAuthorizedNetworksConfig */
                masterAuthorizedNetworksConfig?: (google.container.v1.IMasterAuthorizedNetworksConfig|null);

                /** Cluster maintenancePolicy */
                maintenancePolicy?: (google.container.v1.IMaintenancePolicy|null);

                /** Cluster binaryAuthorization */
                binaryAuthorization?: (google.container.v1.IBinaryAuthorization|null);

                /** Cluster autoscaling */
                autoscaling?: (google.container.v1.IClusterAutoscaling|null);

                /** Cluster networkConfig */
                networkConfig?: (google.container.v1.INetworkConfig|null);

                /** Cluster defaultMaxPodsConstraint */
                defaultMaxPodsConstraint?: (google.container.v1.IMaxPodsConstraint|null);

                /** Cluster resourceUsageExportConfig */
                resourceUsageExportConfig?: (google.container.v1.IResourceUsageExportConfig|null);

                /** Cluster authenticatorGroupsConfig */
                authenticatorGroupsConfig?: (google.container.v1.IAuthenticatorGroupsConfig|null);

                /** Cluster privateClusterConfig */
                privateClusterConfig?: (google.container.v1.IPrivateClusterConfig|null);

                /** Cluster databaseEncryption */
                databaseEncryption?: (google.container.v1.IDatabaseEncryption|null);

                /** Cluster verticalPodAutoscaling */
                verticalPodAutoscaling?: (google.container.v1.IVerticalPodAutoscaling|null);

                /** Cluster shieldedNodes */
                shieldedNodes?: (google.container.v1.IShieldedNodes|null);

                /** Cluster releaseChannel */
                releaseChannel?: (google.container.v1.IReleaseChannel|null);

                /** Cluster workloadIdentityConfig */
                workloadIdentityConfig?: (google.container.v1.IWorkloadIdentityConfig|null);

                /** Cluster selfLink */
                selfLink?: (string|null);

                /** Cluster zone */
                zone?: (string|null);

                /** Cluster endpoint */
                endpoint?: (string|null);

                /** Cluster initialClusterVersion */
                initialClusterVersion?: (string|null);

                /** Cluster currentMasterVersion */
                currentMasterVersion?: (string|null);

                /** Cluster currentNodeVersion */
                currentNodeVersion?: (string|null);

                /** Cluster createTime */
                createTime?: (string|null);

                /** Cluster status */
                status?: (google.container.v1.Cluster.Status|keyof typeof google.container.v1.Cluster.Status|null);

                /** Cluster statusMessage */
                statusMessage?: (string|null);

                /** Cluster nodeIpv4CidrSize */
                nodeIpv4CidrSize?: (number|null);

                /** Cluster servicesIpv4Cidr */
                servicesIpv4Cidr?: (string|null);

                /** Cluster instanceGroupUrls */
                instanceGroupUrls?: (string[]|null);

                /** Cluster currentNodeCount */
                currentNodeCount?: (number|null);

                /** Cluster expireTime */
                expireTime?: (string|null);

                /** Cluster location */
                location?: (string|null);

                /** Cluster enableTpu */
                enableTpu?: (boolean|null);

                /** Cluster tpuIpv4CidrBlock */
                tpuIpv4CidrBlock?: (string|null);

                /** Cluster conditions */
                conditions?: (google.container.v1.IStatusCondition[]|null);
            }

            /** Represents a Cluster. */
            class Cluster implements ICluster {

                /**
                 * Constructs a new Cluster.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ICluster);

                /** Cluster name. */
                public name: string;

                /** Cluster description. */
                public description: string;

                /** Cluster initialNodeCount. */
                public initialNodeCount: number;

                /** Cluster nodeConfig. */
                public nodeConfig?: (google.container.v1.INodeConfig|null);

                /** Cluster masterAuth. */
                public masterAuth?: (google.container.v1.IMasterAuth|null);

                /** Cluster loggingService. */
                public loggingService: string;

                /** Cluster monitoringService. */
                public monitoringService: string;

                /** Cluster network. */
                public network: string;

                /** Cluster clusterIpv4Cidr. */
                public clusterIpv4Cidr: string;

                /** Cluster addonsConfig. */
                public addonsConfig?: (google.container.v1.IAddonsConfig|null);

                /** Cluster subnetwork. */
                public subnetwork: string;

                /** Cluster nodePools. */
                public nodePools: google.container.v1.INodePool[];

                /** Cluster locations. */
                public locations: string[];

                /** Cluster enableKubernetesAlpha. */
                public enableKubernetesAlpha: boolean;

                /** Cluster resourceLabels. */
                public resourceLabels: { [k: string]: string };

                /** Cluster labelFingerprint. */
                public labelFingerprint: string;

                /** Cluster legacyAbac. */
                public legacyAbac?: (google.container.v1.ILegacyAbac|null);

                /** Cluster networkPolicy. */
                public networkPolicy?: (google.container.v1.INetworkPolicy|null);

                /** Cluster ipAllocationPolicy. */
                public ipAllocationPolicy?: (google.container.v1.IIPAllocationPolicy|null);

                /** Cluster masterAuthorizedNetworksConfig. */
                public masterAuthorizedNetworksConfig?: (google.container.v1.IMasterAuthorizedNetworksConfig|null);

                /** Cluster maintenancePolicy. */
                public maintenancePolicy?: (google.container.v1.IMaintenancePolicy|null);

                /** Cluster binaryAuthorization. */
                public binaryAuthorization?: (google.container.v1.IBinaryAuthorization|null);

                /** Cluster autoscaling. */
                public autoscaling?: (google.container.v1.IClusterAutoscaling|null);

                /** Cluster networkConfig. */
                public networkConfig?: (google.container.v1.INetworkConfig|null);

                /** Cluster defaultMaxPodsConstraint. */
                public defaultMaxPodsConstraint?: (google.container.v1.IMaxPodsConstraint|null);

                /** Cluster resourceUsageExportConfig. */
                public resourceUsageExportConfig?: (google.container.v1.IResourceUsageExportConfig|null);

                /** Cluster authenticatorGroupsConfig. */
                public authenticatorGroupsConfig?: (google.container.v1.IAuthenticatorGroupsConfig|null);

                /** Cluster privateClusterConfig. */
                public privateClusterConfig?: (google.container.v1.IPrivateClusterConfig|null);

                /** Cluster databaseEncryption. */
                public databaseEncryption?: (google.container.v1.IDatabaseEncryption|null);

                /** Cluster verticalPodAutoscaling. */
                public verticalPodAutoscaling?: (google.container.v1.IVerticalPodAutoscaling|null);

                /** Cluster shieldedNodes. */
                public shieldedNodes?: (google.container.v1.IShieldedNodes|null);

                /** Cluster releaseChannel. */
                public releaseChannel?: (google.container.v1.IReleaseChannel|null);

                /** Cluster workloadIdentityConfig. */
                public workloadIdentityConfig?: (google.container.v1.IWorkloadIdentityConfig|null);

                /** Cluster selfLink. */
                public selfLink: string;

                /** Cluster zone. */
                public zone: string;

                /** Cluster endpoint. */
                public endpoint: string;

                /** Cluster initialClusterVersion. */
                public initialClusterVersion: string;

                /** Cluster currentMasterVersion. */
                public currentMasterVersion: string;

                /** Cluster currentNodeVersion. */
                public currentNodeVersion: string;

                /** Cluster createTime. */
                public createTime: string;

                /** Cluster status. */
                public status: (google.container.v1.Cluster.Status|keyof typeof google.container.v1.Cluster.Status);

                /** Cluster statusMessage. */
                public statusMessage: string;

                /** Cluster nodeIpv4CidrSize. */
                public nodeIpv4CidrSize: number;

                /** Cluster servicesIpv4Cidr. */
                public servicesIpv4Cidr: string;

                /** Cluster instanceGroupUrls. */
                public instanceGroupUrls: string[];

                /** Cluster currentNodeCount. */
                public currentNodeCount: number;

                /** Cluster expireTime. */
                public expireTime: string;

                /** Cluster location. */
                public location: string;

                /** Cluster enableTpu. */
                public enableTpu: boolean;

                /** Cluster tpuIpv4CidrBlock. */
                public tpuIpv4CidrBlock: string;

                /** Cluster conditions. */
                public conditions: google.container.v1.IStatusCondition[];

                /**
                 * Creates a new Cluster instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Cluster instance
                 */
                public static create(properties?: google.container.v1.ICluster): google.container.v1.Cluster;

                /**
                 * Encodes the specified Cluster message. Does not implicitly {@link google.container.v1.Cluster.verify|verify} messages.
                 * @param message Cluster message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ICluster, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Cluster message, length delimited. Does not implicitly {@link google.container.v1.Cluster.verify|verify} messages.
                 * @param message Cluster message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ICluster, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Cluster message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Cluster
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.Cluster;

                /**
                 * Decodes a Cluster message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Cluster
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.Cluster;

                /**
                 * Verifies a Cluster message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Cluster message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Cluster
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.Cluster;

                /**
                 * Creates a plain object from a Cluster message. Also converts values to other types if specified.
                 * @param message Cluster
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.Cluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Cluster to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Cluster {

                /** Status enum. */
                enum Status {
                    STATUS_UNSPECIFIED = 0,
                    PROVISIONING = 1,
                    RUNNING = 2,
                    RECONCILING = 3,
                    STOPPING = 4,
                    ERROR = 5,
                    DEGRADED = 6
                }
            }

            /** Properties of a ClusterUpdate. */
            interface IClusterUpdate {

                /** ClusterUpdate desiredNodeVersion */
                desiredNodeVersion?: (string|null);

                /** ClusterUpdate desiredMonitoringService */
                desiredMonitoringService?: (string|null);

                /** ClusterUpdate desiredAddonsConfig */
                desiredAddonsConfig?: (google.container.v1.IAddonsConfig|null);

                /** ClusterUpdate desiredNodePoolId */
                desiredNodePoolId?: (string|null);

                /** ClusterUpdate desiredImageType */
                desiredImageType?: (string|null);

                /** ClusterUpdate desiredDatabaseEncryption */
                desiredDatabaseEncryption?: (google.container.v1.IDatabaseEncryption|null);

                /** ClusterUpdate desiredWorkloadIdentityConfig */
                desiredWorkloadIdentityConfig?: (google.container.v1.IWorkloadIdentityConfig|null);

                /** ClusterUpdate desiredShieldedNodes */
                desiredShieldedNodes?: (google.container.v1.IShieldedNodes|null);

                /** ClusterUpdate desiredNodePoolAutoscaling */
                desiredNodePoolAutoscaling?: (google.container.v1.INodePoolAutoscaling|null);

                /** ClusterUpdate desiredLocations */
                desiredLocations?: (string[]|null);

                /** ClusterUpdate desiredMasterAuthorizedNetworksConfig */
                desiredMasterAuthorizedNetworksConfig?: (google.container.v1.IMasterAuthorizedNetworksConfig|null);

                /** ClusterUpdate desiredClusterAutoscaling */
                desiredClusterAutoscaling?: (google.container.v1.IClusterAutoscaling|null);

                /** ClusterUpdate desiredBinaryAuthorization */
                desiredBinaryAuthorization?: (google.container.v1.IBinaryAuthorization|null);

                /** ClusterUpdate desiredLoggingService */
                desiredLoggingService?: (string|null);

                /** ClusterUpdate desiredResourceUsageExportConfig */
                desiredResourceUsageExportConfig?: (google.container.v1.IResourceUsageExportConfig|null);

                /** ClusterUpdate desiredVerticalPodAutoscaling */
                desiredVerticalPodAutoscaling?: (google.container.v1.IVerticalPodAutoscaling|null);

                /** ClusterUpdate desiredPrivateClusterConfig */
                desiredPrivateClusterConfig?: (google.container.v1.IPrivateClusterConfig|null);

                /** ClusterUpdate desiredIntraNodeVisibilityConfig */
                desiredIntraNodeVisibilityConfig?: (google.container.v1.IIntraNodeVisibilityConfig|null);

                /** ClusterUpdate desiredDefaultSnatStatus */
                desiredDefaultSnatStatus?: (google.container.v1.IDefaultSnatStatus|null);

                /** ClusterUpdate desiredReleaseChannel */
                desiredReleaseChannel?: (google.container.v1.IReleaseChannel|null);

                /** ClusterUpdate desiredAuthenticatorGroupsConfig */
                desiredAuthenticatorGroupsConfig?: (google.container.v1.IAuthenticatorGroupsConfig|null);

                /** ClusterUpdate desiredMasterVersion */
                desiredMasterVersion?: (string|null);
            }

            /** Represents a ClusterUpdate. */
            class ClusterUpdate implements IClusterUpdate {

                /**
                 * Constructs a new ClusterUpdate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IClusterUpdate);

                /** ClusterUpdate desiredNodeVersion. */
                public desiredNodeVersion: string;

                /** ClusterUpdate desiredMonitoringService. */
                public desiredMonitoringService: string;

                /** ClusterUpdate desiredAddonsConfig. */
                public desiredAddonsConfig?: (google.container.v1.IAddonsConfig|null);

                /** ClusterUpdate desiredNodePoolId. */
                public desiredNodePoolId: string;

                /** ClusterUpdate desiredImageType. */
                public desiredImageType: string;

                /** ClusterUpdate desiredDatabaseEncryption. */
                public desiredDatabaseEncryption?: (google.container.v1.IDatabaseEncryption|null);

                /** ClusterUpdate desiredWorkloadIdentityConfig. */
                public desiredWorkloadIdentityConfig?: (google.container.v1.IWorkloadIdentityConfig|null);

                /** ClusterUpdate desiredShieldedNodes. */
                public desiredShieldedNodes?: (google.container.v1.IShieldedNodes|null);

                /** ClusterUpdate desiredNodePoolAutoscaling. */
                public desiredNodePoolAutoscaling?: (google.container.v1.INodePoolAutoscaling|null);

                /** ClusterUpdate desiredLocations. */
                public desiredLocations: string[];

                /** ClusterUpdate desiredMasterAuthorizedNetworksConfig. */
                public desiredMasterAuthorizedNetworksConfig?: (google.container.v1.IMasterAuthorizedNetworksConfig|null);

                /** ClusterUpdate desiredClusterAutoscaling. */
                public desiredClusterAutoscaling?: (google.container.v1.IClusterAutoscaling|null);

                /** ClusterUpdate desiredBinaryAuthorization. */
                public desiredBinaryAuthorization?: (google.container.v1.IBinaryAuthorization|null);

                /** ClusterUpdate desiredLoggingService. */
                public desiredLoggingService: string;

                /** ClusterUpdate desiredResourceUsageExportConfig. */
                public desiredResourceUsageExportConfig?: (google.container.v1.IResourceUsageExportConfig|null);

                /** ClusterUpdate desiredVerticalPodAutoscaling. */
                public desiredVerticalPodAutoscaling?: (google.container.v1.IVerticalPodAutoscaling|null);

                /** ClusterUpdate desiredPrivateClusterConfig. */
                public desiredPrivateClusterConfig?: (google.container.v1.IPrivateClusterConfig|null);

                /** ClusterUpdate desiredIntraNodeVisibilityConfig. */
                public desiredIntraNodeVisibilityConfig?: (google.container.v1.IIntraNodeVisibilityConfig|null);

                /** ClusterUpdate desiredDefaultSnatStatus. */
                public desiredDefaultSnatStatus?: (google.container.v1.IDefaultSnatStatus|null);

                /** ClusterUpdate desiredReleaseChannel. */
                public desiredReleaseChannel?: (google.container.v1.IReleaseChannel|null);

                /** ClusterUpdate desiredAuthenticatorGroupsConfig. */
                public desiredAuthenticatorGroupsConfig?: (google.container.v1.IAuthenticatorGroupsConfig|null);

                /** ClusterUpdate desiredMasterVersion. */
                public desiredMasterVersion: string;

                /**
                 * Creates a new ClusterUpdate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ClusterUpdate instance
                 */
                public static create(properties?: google.container.v1.IClusterUpdate): google.container.v1.ClusterUpdate;

                /**
                 * Encodes the specified ClusterUpdate message. Does not implicitly {@link google.container.v1.ClusterUpdate.verify|verify} messages.
                 * @param message ClusterUpdate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IClusterUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ClusterUpdate message, length delimited. Does not implicitly {@link google.container.v1.ClusterUpdate.verify|verify} messages.
                 * @param message ClusterUpdate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IClusterUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ClusterUpdate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ClusterUpdate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ClusterUpdate;

                /**
                 * Decodes a ClusterUpdate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ClusterUpdate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ClusterUpdate;

                /**
                 * Verifies a ClusterUpdate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ClusterUpdate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ClusterUpdate
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ClusterUpdate;

                /**
                 * Creates a plain object from a ClusterUpdate message. Also converts values to other types if specified.
                 * @param message ClusterUpdate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ClusterUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ClusterUpdate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Operation. */
            interface IOperation {

                /** Operation name */
                name?: (string|null);

                /** Operation zone */
                zone?: (string|null);

                /** Operation operationType */
                operationType?: (google.container.v1.Operation.Type|keyof typeof google.container.v1.Operation.Type|null);

                /** Operation status */
                status?: (google.container.v1.Operation.Status|keyof typeof google.container.v1.Operation.Status|null);

                /** Operation detail */
                detail?: (string|null);

                /** Operation statusMessage */
                statusMessage?: (string|null);

                /** Operation selfLink */
                selfLink?: (string|null);

                /** Operation targetLink */
                targetLink?: (string|null);

                /** Operation location */
                location?: (string|null);

                /** Operation startTime */
                startTime?: (string|null);

                /** Operation endTime */
                endTime?: (string|null);

                /** Operation progress */
                progress?: (google.container.v1.IOperationProgress|null);

                /** Operation clusterConditions */
                clusterConditions?: (google.container.v1.IStatusCondition[]|null);

                /** Operation nodepoolConditions */
                nodepoolConditions?: (google.container.v1.IStatusCondition[]|null);
            }

            /** Represents an Operation. */
            class Operation implements IOperation {

                /**
                 * Constructs a new Operation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IOperation);

                /** Operation name. */
                public name: string;

                /** Operation zone. */
                public zone: string;

                /** Operation operationType. */
                public operationType: (google.container.v1.Operation.Type|keyof typeof google.container.v1.Operation.Type);

                /** Operation status. */
                public status: (google.container.v1.Operation.Status|keyof typeof google.container.v1.Operation.Status);

                /** Operation detail. */
                public detail: string;

                /** Operation statusMessage. */
                public statusMessage: string;

                /** Operation selfLink. */
                public selfLink: string;

                /** Operation targetLink. */
                public targetLink: string;

                /** Operation location. */
                public location: string;

                /** Operation startTime. */
                public startTime: string;

                /** Operation endTime. */
                public endTime: string;

                /** Operation progress. */
                public progress?: (google.container.v1.IOperationProgress|null);

                /** Operation clusterConditions. */
                public clusterConditions: google.container.v1.IStatusCondition[];

                /** Operation nodepoolConditions. */
                public nodepoolConditions: google.container.v1.IStatusCondition[];

                /**
                 * Creates a new Operation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Operation instance
                 */
                public static create(properties?: google.container.v1.IOperation): google.container.v1.Operation;

                /**
                 * Encodes the specified Operation message. Does not implicitly {@link google.container.v1.Operation.verify|verify} messages.
                 * @param message Operation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.container.v1.Operation.verify|verify} messages.
                 * @param message Operation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Operation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Operation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.Operation;

                /**
                 * Decodes an Operation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Operation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.Operation;

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
                public static fromObject(object: { [k: string]: any }): google.container.v1.Operation;

                /**
                 * Creates a plain object from an Operation message. Also converts values to other types if specified.
                 * @param message Operation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Operation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Operation {

                /** Status enum. */
                enum Status {
                    STATUS_UNSPECIFIED = 0,
                    PENDING = 1,
                    RUNNING = 2,
                    DONE = 3,
                    ABORTING = 4
                }

                /** Type enum. */
                enum Type {
                    TYPE_UNSPECIFIED = 0,
                    CREATE_CLUSTER = 1,
                    DELETE_CLUSTER = 2,
                    UPGRADE_MASTER = 3,
                    UPGRADE_NODES = 4,
                    REPAIR_CLUSTER = 5,
                    UPDATE_CLUSTER = 6,
                    CREATE_NODE_POOL = 7,
                    DELETE_NODE_POOL = 8,
                    SET_NODE_POOL_MANAGEMENT = 9,
                    AUTO_REPAIR_NODES = 10,
                    AUTO_UPGRADE_NODES = 11,
                    SET_LABELS = 12,
                    SET_MASTER_AUTH = 13,
                    SET_NODE_POOL_SIZE = 14,
                    SET_NETWORK_POLICY = 15,
                    SET_MAINTENANCE_POLICY = 16
                }
            }

            /** Properties of an OperationProgress. */
            interface IOperationProgress {

                /** OperationProgress name */
                name?: (string|null);

                /** OperationProgress status */
                status?: (google.container.v1.Operation.Status|keyof typeof google.container.v1.Operation.Status|null);

                /** OperationProgress metrics */
                metrics?: (google.container.v1.OperationProgress.IMetric[]|null);

                /** OperationProgress stages */
                stages?: (google.container.v1.IOperationProgress[]|null);
            }

            /** Represents an OperationProgress. */
            class OperationProgress implements IOperationProgress {

                /**
                 * Constructs a new OperationProgress.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IOperationProgress);

                /** OperationProgress name. */
                public name: string;

                /** OperationProgress status. */
                public status: (google.container.v1.Operation.Status|keyof typeof google.container.v1.Operation.Status);

                /** OperationProgress metrics. */
                public metrics: google.container.v1.OperationProgress.IMetric[];

                /** OperationProgress stages. */
                public stages: google.container.v1.IOperationProgress[];

                /**
                 * Creates a new OperationProgress instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationProgress instance
                 */
                public static create(properties?: google.container.v1.IOperationProgress): google.container.v1.OperationProgress;

                /**
                 * Encodes the specified OperationProgress message. Does not implicitly {@link google.container.v1.OperationProgress.verify|verify} messages.
                 * @param message OperationProgress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IOperationProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OperationProgress message, length delimited. Does not implicitly {@link google.container.v1.OperationProgress.verify|verify} messages.
                 * @param message OperationProgress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IOperationProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationProgress message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationProgress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.OperationProgress;

                /**
                 * Decodes an OperationProgress message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OperationProgress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.OperationProgress;

                /**
                 * Verifies an OperationProgress message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OperationProgress message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OperationProgress
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.OperationProgress;

                /**
                 * Creates a plain object from an OperationProgress message. Also converts values to other types if specified.
                 * @param message OperationProgress
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.OperationProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OperationProgress to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace OperationProgress {

                /** Properties of a Metric. */
                interface IMetric {

                    /** Metric name */
                    name?: (string|null);

                    /** Metric intValue */
                    intValue?: (number|Long|string|null);

                    /** Metric doubleValue */
                    doubleValue?: (number|null);

                    /** Metric stringValue */
                    stringValue?: (string|null);
                }

                /** Represents a Metric. */
                class Metric implements IMetric {

                    /**
                     * Constructs a new Metric.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.container.v1.OperationProgress.IMetric);

                    /** Metric name. */
                    public name: string;

                    /** Metric intValue. */
                    public intValue?: (number|Long|string|null);

                    /** Metric doubleValue. */
                    public doubleValue?: (number|null);

                    /** Metric stringValue. */
                    public stringValue?: (string|null);

                    /** Metric value. */
                    public value?: ("intValue"|"doubleValue"|"stringValue");

                    /**
                     * Creates a new Metric instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Metric instance
                     */
                    public static create(properties?: google.container.v1.OperationProgress.IMetric): google.container.v1.OperationProgress.Metric;

                    /**
                     * Encodes the specified Metric message. Does not implicitly {@link google.container.v1.OperationProgress.Metric.verify|verify} messages.
                     * @param message Metric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.container.v1.OperationProgress.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Metric message, length delimited. Does not implicitly {@link google.container.v1.OperationProgress.Metric.verify|verify} messages.
                     * @param message Metric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.container.v1.OperationProgress.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Metric message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Metric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.OperationProgress.Metric;

                    /**
                     * Decodes a Metric message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Metric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.OperationProgress.Metric;

                    /**
                     * Verifies a Metric message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Metric message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Metric
                     */
                    public static fromObject(object: { [k: string]: any }): google.container.v1.OperationProgress.Metric;

                    /**
                     * Creates a plain object from a Metric message. Also converts values to other types if specified.
                     * @param message Metric
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.container.v1.OperationProgress.Metric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Metric to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a CreateClusterRequest. */
            interface ICreateClusterRequest {

                /** CreateClusterRequest projectId */
                projectId?: (string|null);

                /** CreateClusterRequest zone */
                zone?: (string|null);

                /** CreateClusterRequest cluster */
                cluster?: (google.container.v1.ICluster|null);

                /** CreateClusterRequest parent */
                parent?: (string|null);
            }

            /** Represents a CreateClusterRequest. */
            class CreateClusterRequest implements ICreateClusterRequest {

                /**
                 * Constructs a new CreateClusterRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ICreateClusterRequest);

                /** CreateClusterRequest projectId. */
                public projectId: string;

                /** CreateClusterRequest zone. */
                public zone: string;

                /** CreateClusterRequest cluster. */
                public cluster?: (google.container.v1.ICluster|null);

                /** CreateClusterRequest parent. */
                public parent: string;

                /**
                 * Creates a new CreateClusterRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateClusterRequest instance
                 */
                public static create(properties?: google.container.v1.ICreateClusterRequest): google.container.v1.CreateClusterRequest;

                /**
                 * Encodes the specified CreateClusterRequest message. Does not implicitly {@link google.container.v1.CreateClusterRequest.verify|verify} messages.
                 * @param message CreateClusterRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ICreateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateClusterRequest message, length delimited. Does not implicitly {@link google.container.v1.CreateClusterRequest.verify|verify} messages.
                 * @param message CreateClusterRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ICreateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateClusterRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateClusterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.CreateClusterRequest;

                /**
                 * Decodes a CreateClusterRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateClusterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.CreateClusterRequest;

                /**
                 * Verifies a CreateClusterRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateClusterRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateClusterRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.CreateClusterRequest;

                /**
                 * Creates a plain object from a CreateClusterRequest message. Also converts values to other types if specified.
                 * @param message CreateClusterRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.CreateClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateClusterRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetClusterRequest. */
            interface IGetClusterRequest {

                /** GetClusterRequest projectId */
                projectId?: (string|null);

                /** GetClusterRequest zone */
                zone?: (string|null);

                /** GetClusterRequest clusterId */
                clusterId?: (string|null);

                /** GetClusterRequest name */
                name?: (string|null);
            }

            /** Represents a GetClusterRequest. */
            class GetClusterRequest implements IGetClusterRequest {

                /**
                 * Constructs a new GetClusterRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IGetClusterRequest);

                /** GetClusterRequest projectId. */
                public projectId: string;

                /** GetClusterRequest zone. */
                public zone: string;

                /** GetClusterRequest clusterId. */
                public clusterId: string;

                /** GetClusterRequest name. */
                public name: string;

                /**
                 * Creates a new GetClusterRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetClusterRequest instance
                 */
                public static create(properties?: google.container.v1.IGetClusterRequest): google.container.v1.GetClusterRequest;

                /**
                 * Encodes the specified GetClusterRequest message. Does not implicitly {@link google.container.v1.GetClusterRequest.verify|verify} messages.
                 * @param message GetClusterRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IGetClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetClusterRequest message, length delimited. Does not implicitly {@link google.container.v1.GetClusterRequest.verify|verify} messages.
                 * @param message GetClusterRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IGetClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetClusterRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetClusterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.GetClusterRequest;

                /**
                 * Decodes a GetClusterRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetClusterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.GetClusterRequest;

                /**
                 * Verifies a GetClusterRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetClusterRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetClusterRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.GetClusterRequest;

                /**
                 * Creates a plain object from a GetClusterRequest message. Also converts values to other types if specified.
                 * @param message GetClusterRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.GetClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetClusterRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateClusterRequest. */
            interface IUpdateClusterRequest {

                /** UpdateClusterRequest projectId */
                projectId?: (string|null);

                /** UpdateClusterRequest zone */
                zone?: (string|null);

                /** UpdateClusterRequest clusterId */
                clusterId?: (string|null);

                /** UpdateClusterRequest update */
                update?: (google.container.v1.IClusterUpdate|null);

                /** UpdateClusterRequest name */
                name?: (string|null);
            }

            /** Represents an UpdateClusterRequest. */
            class UpdateClusterRequest implements IUpdateClusterRequest {

                /**
                 * Constructs a new UpdateClusterRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IUpdateClusterRequest);

                /** UpdateClusterRequest projectId. */
                public projectId: string;

                /** UpdateClusterRequest zone. */
                public zone: string;

                /** UpdateClusterRequest clusterId. */
                public clusterId: string;

                /** UpdateClusterRequest update. */
                public update?: (google.container.v1.IClusterUpdate|null);

                /** UpdateClusterRequest name. */
                public name: string;

                /**
                 * Creates a new UpdateClusterRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateClusterRequest instance
                 */
                public static create(properties?: google.container.v1.IUpdateClusterRequest): google.container.v1.UpdateClusterRequest;

                /**
                 * Encodes the specified UpdateClusterRequest message. Does not implicitly {@link google.container.v1.UpdateClusterRequest.verify|verify} messages.
                 * @param message UpdateClusterRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IUpdateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateClusterRequest message, length delimited. Does not implicitly {@link google.container.v1.UpdateClusterRequest.verify|verify} messages.
                 * @param message UpdateClusterRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IUpdateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateClusterRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateClusterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.UpdateClusterRequest;

                /**
                 * Decodes an UpdateClusterRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateClusterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.UpdateClusterRequest;

                /**
                 * Verifies an UpdateClusterRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateClusterRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateClusterRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.UpdateClusterRequest;

                /**
                 * Creates a plain object from an UpdateClusterRequest message. Also converts values to other types if specified.
                 * @param message UpdateClusterRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.UpdateClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateClusterRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateNodePoolRequest. */
            interface IUpdateNodePoolRequest {

                /** UpdateNodePoolRequest projectId */
                projectId?: (string|null);

                /** UpdateNodePoolRequest zone */
                zone?: (string|null);

                /** UpdateNodePoolRequest clusterId */
                clusterId?: (string|null);

                /** UpdateNodePoolRequest nodePoolId */
                nodePoolId?: (string|null);

                /** UpdateNodePoolRequest nodeVersion */
                nodeVersion?: (string|null);

                /** UpdateNodePoolRequest imageType */
                imageType?: (string|null);

                /** UpdateNodePoolRequest name */
                name?: (string|null);

                /** UpdateNodePoolRequest locations */
                locations?: (string[]|null);

                /** UpdateNodePoolRequest workloadMetadataConfig */
                workloadMetadataConfig?: (google.container.v1.IWorkloadMetadataConfig|null);

                /** UpdateNodePoolRequest upgradeSettings */
                upgradeSettings?: (google.container.v1.NodePool.IUpgradeSettings|null);
            }

            /** Represents an UpdateNodePoolRequest. */
            class UpdateNodePoolRequest implements IUpdateNodePoolRequest {

                /**
                 * Constructs a new UpdateNodePoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IUpdateNodePoolRequest);

                /** UpdateNodePoolRequest projectId. */
                public projectId: string;

                /** UpdateNodePoolRequest zone. */
                public zone: string;

                /** UpdateNodePoolRequest clusterId. */
                public clusterId: string;

                /** UpdateNodePoolRequest nodePoolId. */
                public nodePoolId: string;

                /** UpdateNodePoolRequest nodeVersion. */
                public nodeVersion: string;

                /** UpdateNodePoolRequest imageType. */
                public imageType: string;

                /** UpdateNodePoolRequest name. */
                public name: string;

                /** UpdateNodePoolRequest locations. */
                public locations: string[];

                /** UpdateNodePoolRequest workloadMetadataConfig. */
                public workloadMetadataConfig?: (google.container.v1.IWorkloadMetadataConfig|null);

                /** UpdateNodePoolRequest upgradeSettings. */
                public upgradeSettings?: (google.container.v1.NodePool.IUpgradeSettings|null);

                /**
                 * Creates a new UpdateNodePoolRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateNodePoolRequest instance
                 */
                public static create(properties?: google.container.v1.IUpdateNodePoolRequest): google.container.v1.UpdateNodePoolRequest;

                /**
                 * Encodes the specified UpdateNodePoolRequest message. Does not implicitly {@link google.container.v1.UpdateNodePoolRequest.verify|verify} messages.
                 * @param message UpdateNodePoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IUpdateNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateNodePoolRequest message, length delimited. Does not implicitly {@link google.container.v1.UpdateNodePoolRequest.verify|verify} messages.
                 * @param message UpdateNodePoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IUpdateNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateNodePoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateNodePoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.UpdateNodePoolRequest;

                /**
                 * Decodes an UpdateNodePoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateNodePoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.UpdateNodePoolRequest;

                /**
                 * Verifies an UpdateNodePoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateNodePoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateNodePoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.UpdateNodePoolRequest;

                /**
                 * Creates a plain object from an UpdateNodePoolRequest message. Also converts values to other types if specified.
                 * @param message UpdateNodePoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.UpdateNodePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateNodePoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SetNodePoolAutoscalingRequest. */
            interface ISetNodePoolAutoscalingRequest {

                /** SetNodePoolAutoscalingRequest projectId */
                projectId?: (string|null);

                /** SetNodePoolAutoscalingRequest zone */
                zone?: (string|null);

                /** SetNodePoolAutoscalingRequest clusterId */
                clusterId?: (string|null);

                /** SetNodePoolAutoscalingRequest nodePoolId */
                nodePoolId?: (string|null);

                /** SetNodePoolAutoscalingRequest autoscaling */
                autoscaling?: (google.container.v1.INodePoolAutoscaling|null);

                /** SetNodePoolAutoscalingRequest name */
                name?: (string|null);
            }

            /** Represents a SetNodePoolAutoscalingRequest. */
            class SetNodePoolAutoscalingRequest implements ISetNodePoolAutoscalingRequest {

                /**
                 * Constructs a new SetNodePoolAutoscalingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ISetNodePoolAutoscalingRequest);

                /** SetNodePoolAutoscalingRequest projectId. */
                public projectId: string;

                /** SetNodePoolAutoscalingRequest zone. */
                public zone: string;

                /** SetNodePoolAutoscalingRequest clusterId. */
                public clusterId: string;

                /** SetNodePoolAutoscalingRequest nodePoolId. */
                public nodePoolId: string;

                /** SetNodePoolAutoscalingRequest autoscaling. */
                public autoscaling?: (google.container.v1.INodePoolAutoscaling|null);

                /** SetNodePoolAutoscalingRequest name. */
                public name: string;

                /**
                 * Creates a new SetNodePoolAutoscalingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetNodePoolAutoscalingRequest instance
                 */
                public static create(properties?: google.container.v1.ISetNodePoolAutoscalingRequest): google.container.v1.SetNodePoolAutoscalingRequest;

                /**
                 * Encodes the specified SetNodePoolAutoscalingRequest message. Does not implicitly {@link google.container.v1.SetNodePoolAutoscalingRequest.verify|verify} messages.
                 * @param message SetNodePoolAutoscalingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ISetNodePoolAutoscalingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetNodePoolAutoscalingRequest message, length delimited. Does not implicitly {@link google.container.v1.SetNodePoolAutoscalingRequest.verify|verify} messages.
                 * @param message SetNodePoolAutoscalingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ISetNodePoolAutoscalingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetNodePoolAutoscalingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetNodePoolAutoscalingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.SetNodePoolAutoscalingRequest;

                /**
                 * Decodes a SetNodePoolAutoscalingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetNodePoolAutoscalingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.SetNodePoolAutoscalingRequest;

                /**
                 * Verifies a SetNodePoolAutoscalingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetNodePoolAutoscalingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetNodePoolAutoscalingRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.SetNodePoolAutoscalingRequest;

                /**
                 * Creates a plain object from a SetNodePoolAutoscalingRequest message. Also converts values to other types if specified.
                 * @param message SetNodePoolAutoscalingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.SetNodePoolAutoscalingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetNodePoolAutoscalingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SetLoggingServiceRequest. */
            interface ISetLoggingServiceRequest {

                /** SetLoggingServiceRequest projectId */
                projectId?: (string|null);

                /** SetLoggingServiceRequest zone */
                zone?: (string|null);

                /** SetLoggingServiceRequest clusterId */
                clusterId?: (string|null);

                /** SetLoggingServiceRequest loggingService */
                loggingService?: (string|null);

                /** SetLoggingServiceRequest name */
                name?: (string|null);
            }

            /** Represents a SetLoggingServiceRequest. */
            class SetLoggingServiceRequest implements ISetLoggingServiceRequest {

                /**
                 * Constructs a new SetLoggingServiceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ISetLoggingServiceRequest);

                /** SetLoggingServiceRequest projectId. */
                public projectId: string;

                /** SetLoggingServiceRequest zone. */
                public zone: string;

                /** SetLoggingServiceRequest clusterId. */
                public clusterId: string;

                /** SetLoggingServiceRequest loggingService. */
                public loggingService: string;

                /** SetLoggingServiceRequest name. */
                public name: string;

                /**
                 * Creates a new SetLoggingServiceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetLoggingServiceRequest instance
                 */
                public static create(properties?: google.container.v1.ISetLoggingServiceRequest): google.container.v1.SetLoggingServiceRequest;

                /**
                 * Encodes the specified SetLoggingServiceRequest message. Does not implicitly {@link google.container.v1.SetLoggingServiceRequest.verify|verify} messages.
                 * @param message SetLoggingServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ISetLoggingServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetLoggingServiceRequest message, length delimited. Does not implicitly {@link google.container.v1.SetLoggingServiceRequest.verify|verify} messages.
                 * @param message SetLoggingServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ISetLoggingServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetLoggingServiceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetLoggingServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.SetLoggingServiceRequest;

                /**
                 * Decodes a SetLoggingServiceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetLoggingServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.SetLoggingServiceRequest;

                /**
                 * Verifies a SetLoggingServiceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetLoggingServiceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetLoggingServiceRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.SetLoggingServiceRequest;

                /**
                 * Creates a plain object from a SetLoggingServiceRequest message. Also converts values to other types if specified.
                 * @param message SetLoggingServiceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.SetLoggingServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetLoggingServiceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SetMonitoringServiceRequest. */
            interface ISetMonitoringServiceRequest {

                /** SetMonitoringServiceRequest projectId */
                projectId?: (string|null);

                /** SetMonitoringServiceRequest zone */
                zone?: (string|null);

                /** SetMonitoringServiceRequest clusterId */
                clusterId?: (string|null);

                /** SetMonitoringServiceRequest monitoringService */
                monitoringService?: (string|null);

                /** SetMonitoringServiceRequest name */
                name?: (string|null);
            }

            /** Represents a SetMonitoringServiceRequest. */
            class SetMonitoringServiceRequest implements ISetMonitoringServiceRequest {

                /**
                 * Constructs a new SetMonitoringServiceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ISetMonitoringServiceRequest);

                /** SetMonitoringServiceRequest projectId. */
                public projectId: string;

                /** SetMonitoringServiceRequest zone. */
                public zone: string;

                /** SetMonitoringServiceRequest clusterId. */
                public clusterId: string;

                /** SetMonitoringServiceRequest monitoringService. */
                public monitoringService: string;

                /** SetMonitoringServiceRequest name. */
                public name: string;

                /**
                 * Creates a new SetMonitoringServiceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetMonitoringServiceRequest instance
                 */
                public static create(properties?: google.container.v1.ISetMonitoringServiceRequest): google.container.v1.SetMonitoringServiceRequest;

                /**
                 * Encodes the specified SetMonitoringServiceRequest message. Does not implicitly {@link google.container.v1.SetMonitoringServiceRequest.verify|verify} messages.
                 * @param message SetMonitoringServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ISetMonitoringServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetMonitoringServiceRequest message, length delimited. Does not implicitly {@link google.container.v1.SetMonitoringServiceRequest.verify|verify} messages.
                 * @param message SetMonitoringServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ISetMonitoringServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetMonitoringServiceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetMonitoringServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.SetMonitoringServiceRequest;

                /**
                 * Decodes a SetMonitoringServiceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetMonitoringServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.SetMonitoringServiceRequest;

                /**
                 * Verifies a SetMonitoringServiceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetMonitoringServiceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetMonitoringServiceRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.SetMonitoringServiceRequest;

                /**
                 * Creates a plain object from a SetMonitoringServiceRequest message. Also converts values to other types if specified.
                 * @param message SetMonitoringServiceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.SetMonitoringServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetMonitoringServiceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SetAddonsConfigRequest. */
            interface ISetAddonsConfigRequest {

                /** SetAddonsConfigRequest projectId */
                projectId?: (string|null);

                /** SetAddonsConfigRequest zone */
                zone?: (string|null);

                /** SetAddonsConfigRequest clusterId */
                clusterId?: (string|null);

                /** SetAddonsConfigRequest addonsConfig */
                addonsConfig?: (google.container.v1.IAddonsConfig|null);

                /** SetAddonsConfigRequest name */
                name?: (string|null);
            }

            /** Represents a SetAddonsConfigRequest. */
            class SetAddonsConfigRequest implements ISetAddonsConfigRequest {

                /**
                 * Constructs a new SetAddonsConfigRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ISetAddonsConfigRequest);

                /** SetAddonsConfigRequest projectId. */
                public projectId: string;

                /** SetAddonsConfigRequest zone. */
                public zone: string;

                /** SetAddonsConfigRequest clusterId. */
                public clusterId: string;

                /** SetAddonsConfigRequest addonsConfig. */
                public addonsConfig?: (google.container.v1.IAddonsConfig|null);

                /** SetAddonsConfigRequest name. */
                public name: string;

                /**
                 * Creates a new SetAddonsConfigRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetAddonsConfigRequest instance
                 */
                public static create(properties?: google.container.v1.ISetAddonsConfigRequest): google.container.v1.SetAddonsConfigRequest;

                /**
                 * Encodes the specified SetAddonsConfigRequest message. Does not implicitly {@link google.container.v1.SetAddonsConfigRequest.verify|verify} messages.
                 * @param message SetAddonsConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ISetAddonsConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetAddonsConfigRequest message, length delimited. Does not implicitly {@link google.container.v1.SetAddonsConfigRequest.verify|verify} messages.
                 * @param message SetAddonsConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ISetAddonsConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetAddonsConfigRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetAddonsConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.SetAddonsConfigRequest;

                /**
                 * Decodes a SetAddonsConfigRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetAddonsConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.SetAddonsConfigRequest;

                /**
                 * Verifies a SetAddonsConfigRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetAddonsConfigRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetAddonsConfigRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.SetAddonsConfigRequest;

                /**
                 * Creates a plain object from a SetAddonsConfigRequest message. Also converts values to other types if specified.
                 * @param message SetAddonsConfigRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.SetAddonsConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetAddonsConfigRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SetLocationsRequest. */
            interface ISetLocationsRequest {

                /** SetLocationsRequest projectId */
                projectId?: (string|null);

                /** SetLocationsRequest zone */
                zone?: (string|null);

                /** SetLocationsRequest clusterId */
                clusterId?: (string|null);

                /** SetLocationsRequest locations */
                locations?: (string[]|null);

                /** SetLocationsRequest name */
                name?: (string|null);
            }

            /** Represents a SetLocationsRequest. */
            class SetLocationsRequest implements ISetLocationsRequest {

                /**
                 * Constructs a new SetLocationsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ISetLocationsRequest);

                /** SetLocationsRequest projectId. */
                public projectId: string;

                /** SetLocationsRequest zone. */
                public zone: string;

                /** SetLocationsRequest clusterId. */
                public clusterId: string;

                /** SetLocationsRequest locations. */
                public locations: string[];

                /** SetLocationsRequest name. */
                public name: string;

                /**
                 * Creates a new SetLocationsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetLocationsRequest instance
                 */
                public static create(properties?: google.container.v1.ISetLocationsRequest): google.container.v1.SetLocationsRequest;

                /**
                 * Encodes the specified SetLocationsRequest message. Does not implicitly {@link google.container.v1.SetLocationsRequest.verify|verify} messages.
                 * @param message SetLocationsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ISetLocationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetLocationsRequest message, length delimited. Does not implicitly {@link google.container.v1.SetLocationsRequest.verify|verify} messages.
                 * @param message SetLocationsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ISetLocationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetLocationsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetLocationsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.SetLocationsRequest;

                /**
                 * Decodes a SetLocationsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetLocationsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.SetLocationsRequest;

                /**
                 * Verifies a SetLocationsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetLocationsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetLocationsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.SetLocationsRequest;

                /**
                 * Creates a plain object from a SetLocationsRequest message. Also converts values to other types if specified.
                 * @param message SetLocationsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.SetLocationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetLocationsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateMasterRequest. */
            interface IUpdateMasterRequest {

                /** UpdateMasterRequest projectId */
                projectId?: (string|null);

                /** UpdateMasterRequest zone */
                zone?: (string|null);

                /** UpdateMasterRequest clusterId */
                clusterId?: (string|null);

                /** UpdateMasterRequest masterVersion */
                masterVersion?: (string|null);

                /** UpdateMasterRequest name */
                name?: (string|null);
            }

            /** Represents an UpdateMasterRequest. */
            class UpdateMasterRequest implements IUpdateMasterRequest {

                /**
                 * Constructs a new UpdateMasterRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IUpdateMasterRequest);

                /** UpdateMasterRequest projectId. */
                public projectId: string;

                /** UpdateMasterRequest zone. */
                public zone: string;

                /** UpdateMasterRequest clusterId. */
                public clusterId: string;

                /** UpdateMasterRequest masterVersion. */
                public masterVersion: string;

                /** UpdateMasterRequest name. */
                public name: string;

                /**
                 * Creates a new UpdateMasterRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateMasterRequest instance
                 */
                public static create(properties?: google.container.v1.IUpdateMasterRequest): google.container.v1.UpdateMasterRequest;

                /**
                 * Encodes the specified UpdateMasterRequest message. Does not implicitly {@link google.container.v1.UpdateMasterRequest.verify|verify} messages.
                 * @param message UpdateMasterRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IUpdateMasterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateMasterRequest message, length delimited. Does not implicitly {@link google.container.v1.UpdateMasterRequest.verify|verify} messages.
                 * @param message UpdateMasterRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IUpdateMasterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateMasterRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateMasterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.UpdateMasterRequest;

                /**
                 * Decodes an UpdateMasterRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateMasterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.UpdateMasterRequest;

                /**
                 * Verifies an UpdateMasterRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateMasterRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateMasterRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.UpdateMasterRequest;

                /**
                 * Creates a plain object from an UpdateMasterRequest message. Also converts values to other types if specified.
                 * @param message UpdateMasterRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.UpdateMasterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateMasterRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SetMasterAuthRequest. */
            interface ISetMasterAuthRequest {

                /** SetMasterAuthRequest projectId */
                projectId?: (string|null);

                /** SetMasterAuthRequest zone */
                zone?: (string|null);

                /** SetMasterAuthRequest clusterId */
                clusterId?: (string|null);

                /** SetMasterAuthRequest action */
                action?: (google.container.v1.SetMasterAuthRequest.Action|keyof typeof google.container.v1.SetMasterAuthRequest.Action|null);

                /** SetMasterAuthRequest update */
                update?: (google.container.v1.IMasterAuth|null);

                /** SetMasterAuthRequest name */
                name?: (string|null);
            }

            /** Represents a SetMasterAuthRequest. */
            class SetMasterAuthRequest implements ISetMasterAuthRequest {

                /**
                 * Constructs a new SetMasterAuthRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ISetMasterAuthRequest);

                /** SetMasterAuthRequest projectId. */
                public projectId: string;

                /** SetMasterAuthRequest zone. */
                public zone: string;

                /** SetMasterAuthRequest clusterId. */
                public clusterId: string;

                /** SetMasterAuthRequest action. */
                public action: (google.container.v1.SetMasterAuthRequest.Action|keyof typeof google.container.v1.SetMasterAuthRequest.Action);

                /** SetMasterAuthRequest update. */
                public update?: (google.container.v1.IMasterAuth|null);

                /** SetMasterAuthRequest name. */
                public name: string;

                /**
                 * Creates a new SetMasterAuthRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetMasterAuthRequest instance
                 */
                public static create(properties?: google.container.v1.ISetMasterAuthRequest): google.container.v1.SetMasterAuthRequest;

                /**
                 * Encodes the specified SetMasterAuthRequest message. Does not implicitly {@link google.container.v1.SetMasterAuthRequest.verify|verify} messages.
                 * @param message SetMasterAuthRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ISetMasterAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetMasterAuthRequest message, length delimited. Does not implicitly {@link google.container.v1.SetMasterAuthRequest.verify|verify} messages.
                 * @param message SetMasterAuthRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ISetMasterAuthRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetMasterAuthRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetMasterAuthRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.SetMasterAuthRequest;

                /**
                 * Decodes a SetMasterAuthRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetMasterAuthRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.SetMasterAuthRequest;

                /**
                 * Verifies a SetMasterAuthRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetMasterAuthRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetMasterAuthRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.SetMasterAuthRequest;

                /**
                 * Creates a plain object from a SetMasterAuthRequest message. Also converts values to other types if specified.
                 * @param message SetMasterAuthRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.SetMasterAuthRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetMasterAuthRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace SetMasterAuthRequest {

                /** Action enum. */
                enum Action {
                    UNKNOWN = 0,
                    SET_PASSWORD = 1,
                    GENERATE_PASSWORD = 2,
                    SET_USERNAME = 3
                }
            }

            /** Properties of a DeleteClusterRequest. */
            interface IDeleteClusterRequest {

                /** DeleteClusterRequest projectId */
                projectId?: (string|null);

                /** DeleteClusterRequest zone */
                zone?: (string|null);

                /** DeleteClusterRequest clusterId */
                clusterId?: (string|null);

                /** DeleteClusterRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteClusterRequest. */
            class DeleteClusterRequest implements IDeleteClusterRequest {

                /**
                 * Constructs a new DeleteClusterRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IDeleteClusterRequest);

                /** DeleteClusterRequest projectId. */
                public projectId: string;

                /** DeleteClusterRequest zone. */
                public zone: string;

                /** DeleteClusterRequest clusterId. */
                public clusterId: string;

                /** DeleteClusterRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteClusterRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteClusterRequest instance
                 */
                public static create(properties?: google.container.v1.IDeleteClusterRequest): google.container.v1.DeleteClusterRequest;

                /**
                 * Encodes the specified DeleteClusterRequest message. Does not implicitly {@link google.container.v1.DeleteClusterRequest.verify|verify} messages.
                 * @param message DeleteClusterRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IDeleteClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteClusterRequest message, length delimited. Does not implicitly {@link google.container.v1.DeleteClusterRequest.verify|verify} messages.
                 * @param message DeleteClusterRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IDeleteClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteClusterRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteClusterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.DeleteClusterRequest;

                /**
                 * Decodes a DeleteClusterRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteClusterRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.DeleteClusterRequest;

                /**
                 * Verifies a DeleteClusterRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteClusterRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteClusterRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.DeleteClusterRequest;

                /**
                 * Creates a plain object from a DeleteClusterRequest message. Also converts values to other types if specified.
                 * @param message DeleteClusterRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.DeleteClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteClusterRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListClustersRequest. */
            interface IListClustersRequest {

                /** ListClustersRequest projectId */
                projectId?: (string|null);

                /** ListClustersRequest zone */
                zone?: (string|null);

                /** ListClustersRequest parent */
                parent?: (string|null);
            }

            /** Represents a ListClustersRequest. */
            class ListClustersRequest implements IListClustersRequest {

                /**
                 * Constructs a new ListClustersRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IListClustersRequest);

                /** ListClustersRequest projectId. */
                public projectId: string;

                /** ListClustersRequest zone. */
                public zone: string;

                /** ListClustersRequest parent. */
                public parent: string;

                /**
                 * Creates a new ListClustersRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListClustersRequest instance
                 */
                public static create(properties?: google.container.v1.IListClustersRequest): google.container.v1.ListClustersRequest;

                /**
                 * Encodes the specified ListClustersRequest message. Does not implicitly {@link google.container.v1.ListClustersRequest.verify|verify} messages.
                 * @param message ListClustersRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IListClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListClustersRequest message, length delimited. Does not implicitly {@link google.container.v1.ListClustersRequest.verify|verify} messages.
                 * @param message ListClustersRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IListClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListClustersRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListClustersRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ListClustersRequest;

                /**
                 * Decodes a ListClustersRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListClustersRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ListClustersRequest;

                /**
                 * Verifies a ListClustersRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListClustersRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListClustersRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ListClustersRequest;

                /**
                 * Creates a plain object from a ListClustersRequest message. Also converts values to other types if specified.
                 * @param message ListClustersRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ListClustersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListClustersRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListClustersResponse. */
            interface IListClustersResponse {

                /** ListClustersResponse clusters */
                clusters?: (google.container.v1.ICluster[]|null);

                /** ListClustersResponse missingZones */
                missingZones?: (string[]|null);
            }

            /** Represents a ListClustersResponse. */
            class ListClustersResponse implements IListClustersResponse {

                /**
                 * Constructs a new ListClustersResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IListClustersResponse);

                /** ListClustersResponse clusters. */
                public clusters: google.container.v1.ICluster[];

                /** ListClustersResponse missingZones. */
                public missingZones: string[];

                /**
                 * Creates a new ListClustersResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListClustersResponse instance
                 */
                public static create(properties?: google.container.v1.IListClustersResponse): google.container.v1.ListClustersResponse;

                /**
                 * Encodes the specified ListClustersResponse message. Does not implicitly {@link google.container.v1.ListClustersResponse.verify|verify} messages.
                 * @param message ListClustersResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IListClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListClustersResponse message, length delimited. Does not implicitly {@link google.container.v1.ListClustersResponse.verify|verify} messages.
                 * @param message ListClustersResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IListClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListClustersResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListClustersResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ListClustersResponse;

                /**
                 * Decodes a ListClustersResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListClustersResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ListClustersResponse;

                /**
                 * Verifies a ListClustersResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListClustersResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListClustersResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ListClustersResponse;

                /**
                 * Creates a plain object from a ListClustersResponse message. Also converts values to other types if specified.
                 * @param message ListClustersResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ListClustersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListClustersResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetOperationRequest. */
            interface IGetOperationRequest {

                /** GetOperationRequest projectId */
                projectId?: (string|null);

                /** GetOperationRequest zone */
                zone?: (string|null);

                /** GetOperationRequest operationId */
                operationId?: (string|null);

                /** GetOperationRequest name */
                name?: (string|null);
            }

            /** Represents a GetOperationRequest. */
            class GetOperationRequest implements IGetOperationRequest {

                /**
                 * Constructs a new GetOperationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IGetOperationRequest);

                /** GetOperationRequest projectId. */
                public projectId: string;

                /** GetOperationRequest zone. */
                public zone: string;

                /** GetOperationRequest operationId. */
                public operationId: string;

                /** GetOperationRequest name. */
                public name: string;

                /**
                 * Creates a new GetOperationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetOperationRequest instance
                 */
                public static create(properties?: google.container.v1.IGetOperationRequest): google.container.v1.GetOperationRequest;

                /**
                 * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.container.v1.GetOperationRequest.verify|verify} messages.
                 * @param message GetOperationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.container.v1.GetOperationRequest.verify|verify} messages.
                 * @param message GetOperationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetOperationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.GetOperationRequest;

                /**
                 * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.GetOperationRequest;

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
                public static fromObject(object: { [k: string]: any }): google.container.v1.GetOperationRequest;

                /**
                 * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
                 * @param message GetOperationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetOperationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListOperationsRequest. */
            interface IListOperationsRequest {

                /** ListOperationsRequest projectId */
                projectId?: (string|null);

                /** ListOperationsRequest zone */
                zone?: (string|null);

                /** ListOperationsRequest parent */
                parent?: (string|null);
            }

            /** Represents a ListOperationsRequest. */
            class ListOperationsRequest implements IListOperationsRequest {

                /**
                 * Constructs a new ListOperationsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IListOperationsRequest);

                /** ListOperationsRequest projectId. */
                public projectId: string;

                /** ListOperationsRequest zone. */
                public zone: string;

                /** ListOperationsRequest parent. */
                public parent: string;

                /**
                 * Creates a new ListOperationsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListOperationsRequest instance
                 */
                public static create(properties?: google.container.v1.IListOperationsRequest): google.container.v1.ListOperationsRequest;

                /**
                 * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.container.v1.ListOperationsRequest.verify|verify} messages.
                 * @param message ListOperationsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.container.v1.ListOperationsRequest.verify|verify} messages.
                 * @param message ListOperationsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListOperationsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListOperationsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ListOperationsRequest;

                /**
                 * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListOperationsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ListOperationsRequest;

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
                public static fromObject(object: { [k: string]: any }): google.container.v1.ListOperationsRequest;

                /**
                 * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
                 * @param message ListOperationsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListOperationsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CancelOperationRequest. */
            interface ICancelOperationRequest {

                /** CancelOperationRequest projectId */
                projectId?: (string|null);

                /** CancelOperationRequest zone */
                zone?: (string|null);

                /** CancelOperationRequest operationId */
                operationId?: (string|null);

                /** CancelOperationRequest name */
                name?: (string|null);
            }

            /** Represents a CancelOperationRequest. */
            class CancelOperationRequest implements ICancelOperationRequest {

                /**
                 * Constructs a new CancelOperationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ICancelOperationRequest);

                /** CancelOperationRequest projectId. */
                public projectId: string;

                /** CancelOperationRequest zone. */
                public zone: string;

                /** CancelOperationRequest operationId. */
                public operationId: string;

                /** CancelOperationRequest name. */
                public name: string;

                /**
                 * Creates a new CancelOperationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CancelOperationRequest instance
                 */
                public static create(properties?: google.container.v1.ICancelOperationRequest): google.container.v1.CancelOperationRequest;

                /**
                 * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.container.v1.CancelOperationRequest.verify|verify} messages.
                 * @param message CancelOperationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.container.v1.CancelOperationRequest.verify|verify} messages.
                 * @param message CancelOperationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CancelOperationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CancelOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.CancelOperationRequest;

                /**
                 * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CancelOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.CancelOperationRequest;

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
                public static fromObject(object: { [k: string]: any }): google.container.v1.CancelOperationRequest;

                /**
                 * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
                 * @param message CancelOperationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CancelOperationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListOperationsResponse. */
            interface IListOperationsResponse {

                /** ListOperationsResponse operations */
                operations?: (google.container.v1.IOperation[]|null);

                /** ListOperationsResponse missingZones */
                missingZones?: (string[]|null);
            }

            /** Represents a ListOperationsResponse. */
            class ListOperationsResponse implements IListOperationsResponse {

                /**
                 * Constructs a new ListOperationsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IListOperationsResponse);

                /** ListOperationsResponse operations. */
                public operations: google.container.v1.IOperation[];

                /** ListOperationsResponse missingZones. */
                public missingZones: string[];

                /**
                 * Creates a new ListOperationsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListOperationsResponse instance
                 */
                public static create(properties?: google.container.v1.IListOperationsResponse): google.container.v1.ListOperationsResponse;

                /**
                 * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.container.v1.ListOperationsResponse.verify|verify} messages.
                 * @param message ListOperationsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.container.v1.ListOperationsResponse.verify|verify} messages.
                 * @param message ListOperationsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListOperationsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListOperationsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ListOperationsResponse;

                /**
                 * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListOperationsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ListOperationsResponse;

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
                public static fromObject(object: { [k: string]: any }): google.container.v1.ListOperationsResponse;

                /**
                 * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
                 * @param message ListOperationsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListOperationsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetServerConfigRequest. */
            interface IGetServerConfigRequest {

                /** GetServerConfigRequest projectId */
                projectId?: (string|null);

                /** GetServerConfigRequest zone */
                zone?: (string|null);

                /** GetServerConfigRequest name */
                name?: (string|null);
            }

            /** Represents a GetServerConfigRequest. */
            class GetServerConfigRequest implements IGetServerConfigRequest {

                /**
                 * Constructs a new GetServerConfigRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IGetServerConfigRequest);

                /** GetServerConfigRequest projectId. */
                public projectId: string;

                /** GetServerConfigRequest zone. */
                public zone: string;

                /** GetServerConfigRequest name. */
                public name: string;

                /**
                 * Creates a new GetServerConfigRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetServerConfigRequest instance
                 */
                public static create(properties?: google.container.v1.IGetServerConfigRequest): google.container.v1.GetServerConfigRequest;

                /**
                 * Encodes the specified GetServerConfigRequest message. Does not implicitly {@link google.container.v1.GetServerConfigRequest.verify|verify} messages.
                 * @param message GetServerConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IGetServerConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetServerConfigRequest message, length delimited. Does not implicitly {@link google.container.v1.GetServerConfigRequest.verify|verify} messages.
                 * @param message GetServerConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IGetServerConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetServerConfigRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetServerConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.GetServerConfigRequest;

                /**
                 * Decodes a GetServerConfigRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetServerConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.GetServerConfigRequest;

                /**
                 * Verifies a GetServerConfigRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetServerConfigRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetServerConfigRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.GetServerConfigRequest;

                /**
                 * Creates a plain object from a GetServerConfigRequest message. Also converts values to other types if specified.
                 * @param message GetServerConfigRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.GetServerConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetServerConfigRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ServerConfig. */
            interface IServerConfig {

                /** ServerConfig defaultClusterVersion */
                defaultClusterVersion?: (string|null);

                /** ServerConfig validNodeVersions */
                validNodeVersions?: (string[]|null);

                /** ServerConfig defaultImageType */
                defaultImageType?: (string|null);

                /** ServerConfig validImageTypes */
                validImageTypes?: (string[]|null);

                /** ServerConfig validMasterVersions */
                validMasterVersions?: (string[]|null);

                /** ServerConfig channels */
                channels?: (google.container.v1.ServerConfig.IReleaseChannelConfig[]|null);
            }

            /** Represents a ServerConfig. */
            class ServerConfig implements IServerConfig {

                /**
                 * Constructs a new ServerConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IServerConfig);

                /** ServerConfig defaultClusterVersion. */
                public defaultClusterVersion: string;

                /** ServerConfig validNodeVersions. */
                public validNodeVersions: string[];

                /** ServerConfig defaultImageType. */
                public defaultImageType: string;

                /** ServerConfig validImageTypes. */
                public validImageTypes: string[];

                /** ServerConfig validMasterVersions. */
                public validMasterVersions: string[];

                /** ServerConfig channels. */
                public channels: google.container.v1.ServerConfig.IReleaseChannelConfig[];

                /**
                 * Creates a new ServerConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ServerConfig instance
                 */
                public static create(properties?: google.container.v1.IServerConfig): google.container.v1.ServerConfig;

                /**
                 * Encodes the specified ServerConfig message. Does not implicitly {@link google.container.v1.ServerConfig.verify|verify} messages.
                 * @param message ServerConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ServerConfig message, length delimited. Does not implicitly {@link google.container.v1.ServerConfig.verify|verify} messages.
                 * @param message ServerConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ServerConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ServerConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ServerConfig;

                /**
                 * Decodes a ServerConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ServerConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ServerConfig;

                /**
                 * Verifies a ServerConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ServerConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ServerConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ServerConfig;

                /**
                 * Creates a plain object from a ServerConfig message. Also converts values to other types if specified.
                 * @param message ServerConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ServerConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ServerConfig {

                /** Properties of a ReleaseChannelConfig. */
                interface IReleaseChannelConfig {

                    /** ReleaseChannelConfig channel */
                    channel?: (google.container.v1.ReleaseChannel.Channel|keyof typeof google.container.v1.ReleaseChannel.Channel|null);

                    /** ReleaseChannelConfig defaultVersion */
                    defaultVersion?: (string|null);

                    /** ReleaseChannelConfig validVersions */
                    validVersions?: (string[]|null);
                }

                /** Represents a ReleaseChannelConfig. */
                class ReleaseChannelConfig implements IReleaseChannelConfig {

                    /**
                     * Constructs a new ReleaseChannelConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.container.v1.ServerConfig.IReleaseChannelConfig);

                    /** ReleaseChannelConfig channel. */
                    public channel: (google.container.v1.ReleaseChannel.Channel|keyof typeof google.container.v1.ReleaseChannel.Channel);

                    /** ReleaseChannelConfig defaultVersion. */
                    public defaultVersion: string;

                    /** ReleaseChannelConfig validVersions. */
                    public validVersions: string[];

                    /**
                     * Creates a new ReleaseChannelConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReleaseChannelConfig instance
                     */
                    public static create(properties?: google.container.v1.ServerConfig.IReleaseChannelConfig): google.container.v1.ServerConfig.ReleaseChannelConfig;

                    /**
                     * Encodes the specified ReleaseChannelConfig message. Does not implicitly {@link google.container.v1.ServerConfig.ReleaseChannelConfig.verify|verify} messages.
                     * @param message ReleaseChannelConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.container.v1.ServerConfig.IReleaseChannelConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReleaseChannelConfig message, length delimited. Does not implicitly {@link google.container.v1.ServerConfig.ReleaseChannelConfig.verify|verify} messages.
                     * @param message ReleaseChannelConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.container.v1.ServerConfig.IReleaseChannelConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReleaseChannelConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReleaseChannelConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ServerConfig.ReleaseChannelConfig;

                    /**
                     * Decodes a ReleaseChannelConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReleaseChannelConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ServerConfig.ReleaseChannelConfig;

                    /**
                     * Verifies a ReleaseChannelConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReleaseChannelConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReleaseChannelConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.container.v1.ServerConfig.ReleaseChannelConfig;

                    /**
                     * Creates a plain object from a ReleaseChannelConfig message. Also converts values to other types if specified.
                     * @param message ReleaseChannelConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.container.v1.ServerConfig.ReleaseChannelConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReleaseChannelConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a CreateNodePoolRequest. */
            interface ICreateNodePoolRequest {

                /** CreateNodePoolRequest projectId */
                projectId?: (string|null);

                /** CreateNodePoolRequest zone */
                zone?: (string|null);

                /** CreateNodePoolRequest clusterId */
                clusterId?: (string|null);

                /** CreateNodePoolRequest nodePool */
                nodePool?: (google.container.v1.INodePool|null);

                /** CreateNodePoolRequest parent */
                parent?: (string|null);
            }

            /** Represents a CreateNodePoolRequest. */
            class CreateNodePoolRequest implements ICreateNodePoolRequest {

                /**
                 * Constructs a new CreateNodePoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ICreateNodePoolRequest);

                /** CreateNodePoolRequest projectId. */
                public projectId: string;

                /** CreateNodePoolRequest zone. */
                public zone: string;

                /** CreateNodePoolRequest clusterId. */
                public clusterId: string;

                /** CreateNodePoolRequest nodePool. */
                public nodePool?: (google.container.v1.INodePool|null);

                /** CreateNodePoolRequest parent. */
                public parent: string;

                /**
                 * Creates a new CreateNodePoolRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateNodePoolRequest instance
                 */
                public static create(properties?: google.container.v1.ICreateNodePoolRequest): google.container.v1.CreateNodePoolRequest;

                /**
                 * Encodes the specified CreateNodePoolRequest message. Does not implicitly {@link google.container.v1.CreateNodePoolRequest.verify|verify} messages.
                 * @param message CreateNodePoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ICreateNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateNodePoolRequest message, length delimited. Does not implicitly {@link google.container.v1.CreateNodePoolRequest.verify|verify} messages.
                 * @param message CreateNodePoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ICreateNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateNodePoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateNodePoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.CreateNodePoolRequest;

                /**
                 * Decodes a CreateNodePoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateNodePoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.CreateNodePoolRequest;

                /**
                 * Verifies a CreateNodePoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateNodePoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateNodePoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.CreateNodePoolRequest;

                /**
                 * Creates a plain object from a CreateNodePoolRequest message. Also converts values to other types if specified.
                 * @param message CreateNodePoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.CreateNodePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateNodePoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteNodePoolRequest. */
            interface IDeleteNodePoolRequest {

                /** DeleteNodePoolRequest projectId */
                projectId?: (string|null);

                /** DeleteNodePoolRequest zone */
                zone?: (string|null);

                /** DeleteNodePoolRequest clusterId */
                clusterId?: (string|null);

                /** DeleteNodePoolRequest nodePoolId */
                nodePoolId?: (string|null);

                /** DeleteNodePoolRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteNodePoolRequest. */
            class DeleteNodePoolRequest implements IDeleteNodePoolRequest {

                /**
                 * Constructs a new DeleteNodePoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IDeleteNodePoolRequest);

                /** DeleteNodePoolRequest projectId. */
                public projectId: string;

                /** DeleteNodePoolRequest zone. */
                public zone: string;

                /** DeleteNodePoolRequest clusterId. */
                public clusterId: string;

                /** DeleteNodePoolRequest nodePoolId. */
                public nodePoolId: string;

                /** DeleteNodePoolRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteNodePoolRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteNodePoolRequest instance
                 */
                public static create(properties?: google.container.v1.IDeleteNodePoolRequest): google.container.v1.DeleteNodePoolRequest;

                /**
                 * Encodes the specified DeleteNodePoolRequest message. Does not implicitly {@link google.container.v1.DeleteNodePoolRequest.verify|verify} messages.
                 * @param message DeleteNodePoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IDeleteNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteNodePoolRequest message, length delimited. Does not implicitly {@link google.container.v1.DeleteNodePoolRequest.verify|verify} messages.
                 * @param message DeleteNodePoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IDeleteNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteNodePoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteNodePoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.DeleteNodePoolRequest;

                /**
                 * Decodes a DeleteNodePoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteNodePoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.DeleteNodePoolRequest;

                /**
                 * Verifies a DeleteNodePoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteNodePoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteNodePoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.DeleteNodePoolRequest;

                /**
                 * Creates a plain object from a DeleteNodePoolRequest message. Also converts values to other types if specified.
                 * @param message DeleteNodePoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.DeleteNodePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteNodePoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListNodePoolsRequest. */
            interface IListNodePoolsRequest {

                /** ListNodePoolsRequest projectId */
                projectId?: (string|null);

                /** ListNodePoolsRequest zone */
                zone?: (string|null);

                /** ListNodePoolsRequest clusterId */
                clusterId?: (string|null);

                /** ListNodePoolsRequest parent */
                parent?: (string|null);
            }

            /** Represents a ListNodePoolsRequest. */
            class ListNodePoolsRequest implements IListNodePoolsRequest {

                /**
                 * Constructs a new ListNodePoolsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IListNodePoolsRequest);

                /** ListNodePoolsRequest projectId. */
                public projectId: string;

                /** ListNodePoolsRequest zone. */
                public zone: string;

                /** ListNodePoolsRequest clusterId. */
                public clusterId: string;

                /** ListNodePoolsRequest parent. */
                public parent: string;

                /**
                 * Creates a new ListNodePoolsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListNodePoolsRequest instance
                 */
                public static create(properties?: google.container.v1.IListNodePoolsRequest): google.container.v1.ListNodePoolsRequest;

                /**
                 * Encodes the specified ListNodePoolsRequest message. Does not implicitly {@link google.container.v1.ListNodePoolsRequest.verify|verify} messages.
                 * @param message ListNodePoolsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IListNodePoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListNodePoolsRequest message, length delimited. Does not implicitly {@link google.container.v1.ListNodePoolsRequest.verify|verify} messages.
                 * @param message ListNodePoolsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IListNodePoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListNodePoolsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListNodePoolsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ListNodePoolsRequest;

                /**
                 * Decodes a ListNodePoolsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListNodePoolsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ListNodePoolsRequest;

                /**
                 * Verifies a ListNodePoolsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListNodePoolsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListNodePoolsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ListNodePoolsRequest;

                /**
                 * Creates a plain object from a ListNodePoolsRequest message. Also converts values to other types if specified.
                 * @param message ListNodePoolsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ListNodePoolsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListNodePoolsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetNodePoolRequest. */
            interface IGetNodePoolRequest {

                /** GetNodePoolRequest projectId */
                projectId?: (string|null);

                /** GetNodePoolRequest zone */
                zone?: (string|null);

                /** GetNodePoolRequest clusterId */
                clusterId?: (string|null);

                /** GetNodePoolRequest nodePoolId */
                nodePoolId?: (string|null);

                /** GetNodePoolRequest name */
                name?: (string|null);
            }

            /** Represents a GetNodePoolRequest. */
            class GetNodePoolRequest implements IGetNodePoolRequest {

                /**
                 * Constructs a new GetNodePoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IGetNodePoolRequest);

                /** GetNodePoolRequest projectId. */
                public projectId: string;

                /** GetNodePoolRequest zone. */
                public zone: string;

                /** GetNodePoolRequest clusterId. */
                public clusterId: string;

                /** GetNodePoolRequest nodePoolId. */
                public nodePoolId: string;

                /** GetNodePoolRequest name. */
                public name: string;

                /**
                 * Creates a new GetNodePoolRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetNodePoolRequest instance
                 */
                public static create(properties?: google.container.v1.IGetNodePoolRequest): google.container.v1.GetNodePoolRequest;

                /**
                 * Encodes the specified GetNodePoolRequest message. Does not implicitly {@link google.container.v1.GetNodePoolRequest.verify|verify} messages.
                 * @param message GetNodePoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IGetNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetNodePoolRequest message, length delimited. Does not implicitly {@link google.container.v1.GetNodePoolRequest.verify|verify} messages.
                 * @param message GetNodePoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IGetNodePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetNodePoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetNodePoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.GetNodePoolRequest;

                /**
                 * Decodes a GetNodePoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetNodePoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.GetNodePoolRequest;

                /**
                 * Verifies a GetNodePoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetNodePoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetNodePoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.GetNodePoolRequest;

                /**
                 * Creates a plain object from a GetNodePoolRequest message. Also converts values to other types if specified.
                 * @param message GetNodePoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.GetNodePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetNodePoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NodePool. */
            interface INodePool {

                /** NodePool name */
                name?: (string|null);

                /** NodePool config */
                config?: (google.container.v1.INodeConfig|null);

                /** NodePool initialNodeCount */
                initialNodeCount?: (number|null);

                /** NodePool locations */
                locations?: (string[]|null);

                /** NodePool selfLink */
                selfLink?: (string|null);

                /** NodePool version */
                version?: (string|null);

                /** NodePool instanceGroupUrls */
                instanceGroupUrls?: (string[]|null);

                /** NodePool status */
                status?: (google.container.v1.NodePool.Status|keyof typeof google.container.v1.NodePool.Status|null);

                /** NodePool statusMessage */
                statusMessage?: (string|null);

                /** NodePool autoscaling */
                autoscaling?: (google.container.v1.INodePoolAutoscaling|null);

                /** NodePool management */
                management?: (google.container.v1.INodeManagement|null);

                /** NodePool maxPodsConstraint */
                maxPodsConstraint?: (google.container.v1.IMaxPodsConstraint|null);

                /** NodePool conditions */
                conditions?: (google.container.v1.IStatusCondition[]|null);

                /** NodePool podIpv4CidrSize */
                podIpv4CidrSize?: (number|null);

                /** NodePool upgradeSettings */
                upgradeSettings?: (google.container.v1.NodePool.IUpgradeSettings|null);
            }

            /** Represents a NodePool. */
            class NodePool implements INodePool {

                /**
                 * Constructs a new NodePool.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.INodePool);

                /** NodePool name. */
                public name: string;

                /** NodePool config. */
                public config?: (google.container.v1.INodeConfig|null);

                /** NodePool initialNodeCount. */
                public initialNodeCount: number;

                /** NodePool locations. */
                public locations: string[];

                /** NodePool selfLink. */
                public selfLink: string;

                /** NodePool version. */
                public version: string;

                /** NodePool instanceGroupUrls. */
                public instanceGroupUrls: string[];

                /** NodePool status. */
                public status: (google.container.v1.NodePool.Status|keyof typeof google.container.v1.NodePool.Status);

                /** NodePool statusMessage. */
                public statusMessage: string;

                /** NodePool autoscaling. */
                public autoscaling?: (google.container.v1.INodePoolAutoscaling|null);

                /** NodePool management. */
                public management?: (google.container.v1.INodeManagement|null);

                /** NodePool maxPodsConstraint. */
                public maxPodsConstraint?: (google.container.v1.IMaxPodsConstraint|null);

                /** NodePool conditions. */
                public conditions: google.container.v1.IStatusCondition[];

                /** NodePool podIpv4CidrSize. */
                public podIpv4CidrSize: number;

                /** NodePool upgradeSettings. */
                public upgradeSettings?: (google.container.v1.NodePool.IUpgradeSettings|null);

                /**
                 * Creates a new NodePool instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NodePool instance
                 */
                public static create(properties?: google.container.v1.INodePool): google.container.v1.NodePool;

                /**
                 * Encodes the specified NodePool message. Does not implicitly {@link google.container.v1.NodePool.verify|verify} messages.
                 * @param message NodePool message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.INodePool, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NodePool message, length delimited. Does not implicitly {@link google.container.v1.NodePool.verify|verify} messages.
                 * @param message NodePool message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.INodePool, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NodePool message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NodePool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.NodePool;

                /**
                 * Decodes a NodePool message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NodePool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.NodePool;

                /**
                 * Verifies a NodePool message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NodePool message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NodePool
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.NodePool;

                /**
                 * Creates a plain object from a NodePool message. Also converts values to other types if specified.
                 * @param message NodePool
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.NodePool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NodePool to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace NodePool {

                /** Properties of an UpgradeSettings. */
                interface IUpgradeSettings {

                    /** UpgradeSettings maxSurge */
                    maxSurge?: (number|null);

                    /** UpgradeSettings maxUnavailable */
                    maxUnavailable?: (number|null);
                }

                /** Represents an UpgradeSettings. */
                class UpgradeSettings implements IUpgradeSettings {

                    /**
                     * Constructs a new UpgradeSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.container.v1.NodePool.IUpgradeSettings);

                    /** UpgradeSettings maxSurge. */
                    public maxSurge: number;

                    /** UpgradeSettings maxUnavailable. */
                    public maxUnavailable: number;

                    /**
                     * Creates a new UpgradeSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpgradeSettings instance
                     */
                    public static create(properties?: google.container.v1.NodePool.IUpgradeSettings): google.container.v1.NodePool.UpgradeSettings;

                    /**
                     * Encodes the specified UpgradeSettings message. Does not implicitly {@link google.container.v1.NodePool.UpgradeSettings.verify|verify} messages.
                     * @param message UpgradeSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.container.v1.NodePool.IUpgradeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpgradeSettings message, length delimited. Does not implicitly {@link google.container.v1.NodePool.UpgradeSettings.verify|verify} messages.
                     * @param message UpgradeSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.container.v1.NodePool.IUpgradeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpgradeSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpgradeSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.NodePool.UpgradeSettings;

                    /**
                     * Decodes an UpgradeSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpgradeSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.NodePool.UpgradeSettings;

                    /**
                     * Verifies an UpgradeSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpgradeSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpgradeSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.container.v1.NodePool.UpgradeSettings;

                    /**
                     * Creates a plain object from an UpgradeSettings message. Also converts values to other types if specified.
                     * @param message UpgradeSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.container.v1.NodePool.UpgradeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpgradeSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Status enum. */
                enum Status {
                    STATUS_UNSPECIFIED = 0,
                    PROVISIONING = 1,
                    RUNNING = 2,
                    RUNNING_WITH_ERROR = 3,
                    RECONCILING = 4,
                    STOPPING = 5,
                    ERROR = 6
                }
            }

            /** Properties of a NodeManagement. */
            interface INodeManagement {

                /** NodeManagement autoUpgrade */
                autoUpgrade?: (boolean|null);

                /** NodeManagement autoRepair */
                autoRepair?: (boolean|null);

                /** NodeManagement upgradeOptions */
                upgradeOptions?: (google.container.v1.IAutoUpgradeOptions|null);
            }

            /** Represents a NodeManagement. */
            class NodeManagement implements INodeManagement {

                /**
                 * Constructs a new NodeManagement.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.INodeManagement);

                /** NodeManagement autoUpgrade. */
                public autoUpgrade: boolean;

                /** NodeManagement autoRepair. */
                public autoRepair: boolean;

                /** NodeManagement upgradeOptions. */
                public upgradeOptions?: (google.container.v1.IAutoUpgradeOptions|null);

                /**
                 * Creates a new NodeManagement instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NodeManagement instance
                 */
                public static create(properties?: google.container.v1.INodeManagement): google.container.v1.NodeManagement;

                /**
                 * Encodes the specified NodeManagement message. Does not implicitly {@link google.container.v1.NodeManagement.verify|verify} messages.
                 * @param message NodeManagement message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.INodeManagement, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NodeManagement message, length delimited. Does not implicitly {@link google.container.v1.NodeManagement.verify|verify} messages.
                 * @param message NodeManagement message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.INodeManagement, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NodeManagement message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NodeManagement
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.NodeManagement;

                /**
                 * Decodes a NodeManagement message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NodeManagement
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.NodeManagement;

                /**
                 * Verifies a NodeManagement message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NodeManagement message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NodeManagement
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.NodeManagement;

                /**
                 * Creates a plain object from a NodeManagement message. Also converts values to other types if specified.
                 * @param message NodeManagement
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.NodeManagement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NodeManagement to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AutoUpgradeOptions. */
            interface IAutoUpgradeOptions {

                /** AutoUpgradeOptions autoUpgradeStartTime */
                autoUpgradeStartTime?: (string|null);

                /** AutoUpgradeOptions description */
                description?: (string|null);
            }

            /** Represents an AutoUpgradeOptions. */
            class AutoUpgradeOptions implements IAutoUpgradeOptions {

                /**
                 * Constructs a new AutoUpgradeOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IAutoUpgradeOptions);

                /** AutoUpgradeOptions autoUpgradeStartTime. */
                public autoUpgradeStartTime: string;

                /** AutoUpgradeOptions description. */
                public description: string;

                /**
                 * Creates a new AutoUpgradeOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AutoUpgradeOptions instance
                 */
                public static create(properties?: google.container.v1.IAutoUpgradeOptions): google.container.v1.AutoUpgradeOptions;

                /**
                 * Encodes the specified AutoUpgradeOptions message. Does not implicitly {@link google.container.v1.AutoUpgradeOptions.verify|verify} messages.
                 * @param message AutoUpgradeOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IAutoUpgradeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AutoUpgradeOptions message, length delimited. Does not implicitly {@link google.container.v1.AutoUpgradeOptions.verify|verify} messages.
                 * @param message AutoUpgradeOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IAutoUpgradeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AutoUpgradeOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AutoUpgradeOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.AutoUpgradeOptions;

                /**
                 * Decodes an AutoUpgradeOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AutoUpgradeOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.AutoUpgradeOptions;

                /**
                 * Verifies an AutoUpgradeOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AutoUpgradeOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AutoUpgradeOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.AutoUpgradeOptions;

                /**
                 * Creates a plain object from an AutoUpgradeOptions message. Also converts values to other types if specified.
                 * @param message AutoUpgradeOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.AutoUpgradeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AutoUpgradeOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MaintenancePolicy. */
            interface IMaintenancePolicy {

                /** MaintenancePolicy window */
                window?: (google.container.v1.IMaintenanceWindow|null);

                /** MaintenancePolicy resourceVersion */
                resourceVersion?: (string|null);
            }

            /** Represents a MaintenancePolicy. */
            class MaintenancePolicy implements IMaintenancePolicy {

                /**
                 * Constructs a new MaintenancePolicy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IMaintenancePolicy);

                /** MaintenancePolicy window. */
                public window?: (google.container.v1.IMaintenanceWindow|null);

                /** MaintenancePolicy resourceVersion. */
                public resourceVersion: string;

                /**
                 * Creates a new MaintenancePolicy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MaintenancePolicy instance
                 */
                public static create(properties?: google.container.v1.IMaintenancePolicy): google.container.v1.MaintenancePolicy;

                /**
                 * Encodes the specified MaintenancePolicy message. Does not implicitly {@link google.container.v1.MaintenancePolicy.verify|verify} messages.
                 * @param message MaintenancePolicy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IMaintenancePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MaintenancePolicy message, length delimited. Does not implicitly {@link google.container.v1.MaintenancePolicy.verify|verify} messages.
                 * @param message MaintenancePolicy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IMaintenancePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MaintenancePolicy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MaintenancePolicy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.MaintenancePolicy;

                /**
                 * Decodes a MaintenancePolicy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MaintenancePolicy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.MaintenancePolicy;

                /**
                 * Verifies a MaintenancePolicy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MaintenancePolicy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MaintenancePolicy
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.MaintenancePolicy;

                /**
                 * Creates a plain object from a MaintenancePolicy message. Also converts values to other types if specified.
                 * @param message MaintenancePolicy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.MaintenancePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MaintenancePolicy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MaintenanceWindow. */
            interface IMaintenanceWindow {

                /** MaintenanceWindow dailyMaintenanceWindow */
                dailyMaintenanceWindow?: (google.container.v1.IDailyMaintenanceWindow|null);

                /** MaintenanceWindow recurringWindow */
                recurringWindow?: (google.container.v1.IRecurringTimeWindow|null);

                /** MaintenanceWindow maintenanceExclusions */
                maintenanceExclusions?: ({ [k: string]: google.container.v1.ITimeWindow }|null);
            }

            /** Represents a MaintenanceWindow. */
            class MaintenanceWindow implements IMaintenanceWindow {

                /**
                 * Constructs a new MaintenanceWindow.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IMaintenanceWindow);

                /** MaintenanceWindow dailyMaintenanceWindow. */
                public dailyMaintenanceWindow?: (google.container.v1.IDailyMaintenanceWindow|null);

                /** MaintenanceWindow recurringWindow. */
                public recurringWindow?: (google.container.v1.IRecurringTimeWindow|null);

                /** MaintenanceWindow maintenanceExclusions. */
                public maintenanceExclusions: { [k: string]: google.container.v1.ITimeWindow };

                /** MaintenanceWindow policy. */
                public policy?: ("dailyMaintenanceWindow"|"recurringWindow");

                /**
                 * Creates a new MaintenanceWindow instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MaintenanceWindow instance
                 */
                public static create(properties?: google.container.v1.IMaintenanceWindow): google.container.v1.MaintenanceWindow;

                /**
                 * Encodes the specified MaintenanceWindow message. Does not implicitly {@link google.container.v1.MaintenanceWindow.verify|verify} messages.
                 * @param message MaintenanceWindow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MaintenanceWindow message, length delimited. Does not implicitly {@link google.container.v1.MaintenanceWindow.verify|verify} messages.
                 * @param message MaintenanceWindow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MaintenanceWindow message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MaintenanceWindow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.MaintenanceWindow;

                /**
                 * Decodes a MaintenanceWindow message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MaintenanceWindow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.MaintenanceWindow;

                /**
                 * Verifies a MaintenanceWindow message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MaintenanceWindow message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MaintenanceWindow
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.MaintenanceWindow;

                /**
                 * Creates a plain object from a MaintenanceWindow message. Also converts values to other types if specified.
                 * @param message MaintenanceWindow
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.MaintenanceWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MaintenanceWindow to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TimeWindow. */
            interface ITimeWindow {

                /** TimeWindow startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** TimeWindow endTime */
                endTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a TimeWindow. */
            class TimeWindow implements ITimeWindow {

                /**
                 * Constructs a new TimeWindow.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ITimeWindow);

                /** TimeWindow startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** TimeWindow endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new TimeWindow instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TimeWindow instance
                 */
                public static create(properties?: google.container.v1.ITimeWindow): google.container.v1.TimeWindow;

                /**
                 * Encodes the specified TimeWindow message. Does not implicitly {@link google.container.v1.TimeWindow.verify|verify} messages.
                 * @param message TimeWindow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ITimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TimeWindow message, length delimited. Does not implicitly {@link google.container.v1.TimeWindow.verify|verify} messages.
                 * @param message TimeWindow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ITimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TimeWindow message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TimeWindow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.TimeWindow;

                /**
                 * Decodes a TimeWindow message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TimeWindow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.TimeWindow;

                /**
                 * Verifies a TimeWindow message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TimeWindow message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TimeWindow
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.TimeWindow;

                /**
                 * Creates a plain object from a TimeWindow message. Also converts values to other types if specified.
                 * @param message TimeWindow
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.TimeWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TimeWindow to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RecurringTimeWindow. */
            interface IRecurringTimeWindow {

                /** RecurringTimeWindow window */
                window?: (google.container.v1.ITimeWindow|null);

                /** RecurringTimeWindow recurrence */
                recurrence?: (string|null);
            }

            /** Represents a RecurringTimeWindow. */
            class RecurringTimeWindow implements IRecurringTimeWindow {

                /**
                 * Constructs a new RecurringTimeWindow.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IRecurringTimeWindow);

                /** RecurringTimeWindow window. */
                public window?: (google.container.v1.ITimeWindow|null);

                /** RecurringTimeWindow recurrence. */
                public recurrence: string;

                /**
                 * Creates a new RecurringTimeWindow instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RecurringTimeWindow instance
                 */
                public static create(properties?: google.container.v1.IRecurringTimeWindow): google.container.v1.RecurringTimeWindow;

                /**
                 * Encodes the specified RecurringTimeWindow message. Does not implicitly {@link google.container.v1.RecurringTimeWindow.verify|verify} messages.
                 * @param message RecurringTimeWindow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IRecurringTimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RecurringTimeWindow message, length delimited. Does not implicitly {@link google.container.v1.RecurringTimeWindow.verify|verify} messages.
                 * @param message RecurringTimeWindow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IRecurringTimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RecurringTimeWindow message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RecurringTimeWindow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.RecurringTimeWindow;

                /**
                 * Decodes a RecurringTimeWindow message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RecurringTimeWindow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.RecurringTimeWindow;

                /**
                 * Verifies a RecurringTimeWindow message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RecurringTimeWindow message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RecurringTimeWindow
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.RecurringTimeWindow;

                /**
                 * Creates a plain object from a RecurringTimeWindow message. Also converts values to other types if specified.
                 * @param message RecurringTimeWindow
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.RecurringTimeWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RecurringTimeWindow to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DailyMaintenanceWindow. */
            interface IDailyMaintenanceWindow {

                /** DailyMaintenanceWindow startTime */
                startTime?: (string|null);

                /** DailyMaintenanceWindow duration */
                duration?: (string|null);
            }

            /** Represents a DailyMaintenanceWindow. */
            class DailyMaintenanceWindow implements IDailyMaintenanceWindow {

                /**
                 * Constructs a new DailyMaintenanceWindow.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IDailyMaintenanceWindow);

                /** DailyMaintenanceWindow startTime. */
                public startTime: string;

                /** DailyMaintenanceWindow duration. */
                public duration: string;

                /**
                 * Creates a new DailyMaintenanceWindow instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DailyMaintenanceWindow instance
                 */
                public static create(properties?: google.container.v1.IDailyMaintenanceWindow): google.container.v1.DailyMaintenanceWindow;

                /**
                 * Encodes the specified DailyMaintenanceWindow message. Does not implicitly {@link google.container.v1.DailyMaintenanceWindow.verify|verify} messages.
                 * @param message DailyMaintenanceWindow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IDailyMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DailyMaintenanceWindow message, length delimited. Does not implicitly {@link google.container.v1.DailyMaintenanceWindow.verify|verify} messages.
                 * @param message DailyMaintenanceWindow message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IDailyMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DailyMaintenanceWindow message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DailyMaintenanceWindow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.DailyMaintenanceWindow;

                /**
                 * Decodes a DailyMaintenanceWindow message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DailyMaintenanceWindow
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.DailyMaintenanceWindow;

                /**
                 * Verifies a DailyMaintenanceWindow message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DailyMaintenanceWindow message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DailyMaintenanceWindow
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.DailyMaintenanceWindow;

                /**
                 * Creates a plain object from a DailyMaintenanceWindow message. Also converts values to other types if specified.
                 * @param message DailyMaintenanceWindow
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.DailyMaintenanceWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DailyMaintenanceWindow to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SetNodePoolManagementRequest. */
            interface ISetNodePoolManagementRequest {

                /** SetNodePoolManagementRequest projectId */
                projectId?: (string|null);

                /** SetNodePoolManagementRequest zone */
                zone?: (string|null);

                /** SetNodePoolManagementRequest clusterId */
                clusterId?: (string|null);

                /** SetNodePoolManagementRequest nodePoolId */
                nodePoolId?: (string|null);

                /** SetNodePoolManagementRequest management */
                management?: (google.container.v1.INodeManagement|null);

                /** SetNodePoolManagementRequest name */
                name?: (string|null);
            }

            /** Represents a SetNodePoolManagementRequest. */
            class SetNodePoolManagementRequest implements ISetNodePoolManagementRequest {

                /**
                 * Constructs a new SetNodePoolManagementRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ISetNodePoolManagementRequest);

                /** SetNodePoolManagementRequest projectId. */
                public projectId: string;

                /** SetNodePoolManagementRequest zone. */
                public zone: string;

                /** SetNodePoolManagementRequest clusterId. */
                public clusterId: string;

                /** SetNodePoolManagementRequest nodePoolId. */
                public nodePoolId: string;

                /** SetNodePoolManagementRequest management. */
                public management?: (google.container.v1.INodeManagement|null);

                /** SetNodePoolManagementRequest name. */
                public name: string;

                /**
                 * Creates a new SetNodePoolManagementRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetNodePoolManagementRequest instance
                 */
                public static create(properties?: google.container.v1.ISetNodePoolManagementRequest): google.container.v1.SetNodePoolManagementRequest;

                /**
                 * Encodes the specified SetNodePoolManagementRequest message. Does not implicitly {@link google.container.v1.SetNodePoolManagementRequest.verify|verify} messages.
                 * @param message SetNodePoolManagementRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ISetNodePoolManagementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetNodePoolManagementRequest message, length delimited. Does not implicitly {@link google.container.v1.SetNodePoolManagementRequest.verify|verify} messages.
                 * @param message SetNodePoolManagementRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ISetNodePoolManagementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetNodePoolManagementRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetNodePoolManagementRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.SetNodePoolManagementRequest;

                /**
                 * Decodes a SetNodePoolManagementRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetNodePoolManagementRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.SetNodePoolManagementRequest;

                /**
                 * Verifies a SetNodePoolManagementRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetNodePoolManagementRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetNodePoolManagementRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.SetNodePoolManagementRequest;

                /**
                 * Creates a plain object from a SetNodePoolManagementRequest message. Also converts values to other types if specified.
                 * @param message SetNodePoolManagementRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.SetNodePoolManagementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetNodePoolManagementRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SetNodePoolSizeRequest. */
            interface ISetNodePoolSizeRequest {

                /** SetNodePoolSizeRequest projectId */
                projectId?: (string|null);

                /** SetNodePoolSizeRequest zone */
                zone?: (string|null);

                /** SetNodePoolSizeRequest clusterId */
                clusterId?: (string|null);

                /** SetNodePoolSizeRequest nodePoolId */
                nodePoolId?: (string|null);

                /** SetNodePoolSizeRequest nodeCount */
                nodeCount?: (number|null);

                /** SetNodePoolSizeRequest name */
                name?: (string|null);
            }

            /** Represents a SetNodePoolSizeRequest. */
            class SetNodePoolSizeRequest implements ISetNodePoolSizeRequest {

                /**
                 * Constructs a new SetNodePoolSizeRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ISetNodePoolSizeRequest);

                /** SetNodePoolSizeRequest projectId. */
                public projectId: string;

                /** SetNodePoolSizeRequest zone. */
                public zone: string;

                /** SetNodePoolSizeRequest clusterId. */
                public clusterId: string;

                /** SetNodePoolSizeRequest nodePoolId. */
                public nodePoolId: string;

                /** SetNodePoolSizeRequest nodeCount. */
                public nodeCount: number;

                /** SetNodePoolSizeRequest name. */
                public name: string;

                /**
                 * Creates a new SetNodePoolSizeRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetNodePoolSizeRequest instance
                 */
                public static create(properties?: google.container.v1.ISetNodePoolSizeRequest): google.container.v1.SetNodePoolSizeRequest;

                /**
                 * Encodes the specified SetNodePoolSizeRequest message. Does not implicitly {@link google.container.v1.SetNodePoolSizeRequest.verify|verify} messages.
                 * @param message SetNodePoolSizeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ISetNodePoolSizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetNodePoolSizeRequest message, length delimited. Does not implicitly {@link google.container.v1.SetNodePoolSizeRequest.verify|verify} messages.
                 * @param message SetNodePoolSizeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ISetNodePoolSizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetNodePoolSizeRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetNodePoolSizeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.SetNodePoolSizeRequest;

                /**
                 * Decodes a SetNodePoolSizeRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetNodePoolSizeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.SetNodePoolSizeRequest;

                /**
                 * Verifies a SetNodePoolSizeRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetNodePoolSizeRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetNodePoolSizeRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.SetNodePoolSizeRequest;

                /**
                 * Creates a plain object from a SetNodePoolSizeRequest message. Also converts values to other types if specified.
                 * @param message SetNodePoolSizeRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.SetNodePoolSizeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetNodePoolSizeRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RollbackNodePoolUpgradeRequest. */
            interface IRollbackNodePoolUpgradeRequest {

                /** RollbackNodePoolUpgradeRequest projectId */
                projectId?: (string|null);

                /** RollbackNodePoolUpgradeRequest zone */
                zone?: (string|null);

                /** RollbackNodePoolUpgradeRequest clusterId */
                clusterId?: (string|null);

                /** RollbackNodePoolUpgradeRequest nodePoolId */
                nodePoolId?: (string|null);

                /** RollbackNodePoolUpgradeRequest name */
                name?: (string|null);
            }

            /** Represents a RollbackNodePoolUpgradeRequest. */
            class RollbackNodePoolUpgradeRequest implements IRollbackNodePoolUpgradeRequest {

                /**
                 * Constructs a new RollbackNodePoolUpgradeRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IRollbackNodePoolUpgradeRequest);

                /** RollbackNodePoolUpgradeRequest projectId. */
                public projectId: string;

                /** RollbackNodePoolUpgradeRequest zone. */
                public zone: string;

                /** RollbackNodePoolUpgradeRequest clusterId. */
                public clusterId: string;

                /** RollbackNodePoolUpgradeRequest nodePoolId. */
                public nodePoolId: string;

                /** RollbackNodePoolUpgradeRequest name. */
                public name: string;

                /**
                 * Creates a new RollbackNodePoolUpgradeRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RollbackNodePoolUpgradeRequest instance
                 */
                public static create(properties?: google.container.v1.IRollbackNodePoolUpgradeRequest): google.container.v1.RollbackNodePoolUpgradeRequest;

                /**
                 * Encodes the specified RollbackNodePoolUpgradeRequest message. Does not implicitly {@link google.container.v1.RollbackNodePoolUpgradeRequest.verify|verify} messages.
                 * @param message RollbackNodePoolUpgradeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IRollbackNodePoolUpgradeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RollbackNodePoolUpgradeRequest message, length delimited. Does not implicitly {@link google.container.v1.RollbackNodePoolUpgradeRequest.verify|verify} messages.
                 * @param message RollbackNodePoolUpgradeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IRollbackNodePoolUpgradeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RollbackNodePoolUpgradeRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RollbackNodePoolUpgradeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.RollbackNodePoolUpgradeRequest;

                /**
                 * Decodes a RollbackNodePoolUpgradeRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RollbackNodePoolUpgradeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.RollbackNodePoolUpgradeRequest;

                /**
                 * Verifies a RollbackNodePoolUpgradeRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RollbackNodePoolUpgradeRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RollbackNodePoolUpgradeRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.RollbackNodePoolUpgradeRequest;

                /**
                 * Creates a plain object from a RollbackNodePoolUpgradeRequest message. Also converts values to other types if specified.
                 * @param message RollbackNodePoolUpgradeRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.RollbackNodePoolUpgradeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RollbackNodePoolUpgradeRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListNodePoolsResponse. */
            interface IListNodePoolsResponse {

                /** ListNodePoolsResponse nodePools */
                nodePools?: (google.container.v1.INodePool[]|null);
            }

            /** Represents a ListNodePoolsResponse. */
            class ListNodePoolsResponse implements IListNodePoolsResponse {

                /**
                 * Constructs a new ListNodePoolsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IListNodePoolsResponse);

                /** ListNodePoolsResponse nodePools. */
                public nodePools: google.container.v1.INodePool[];

                /**
                 * Creates a new ListNodePoolsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListNodePoolsResponse instance
                 */
                public static create(properties?: google.container.v1.IListNodePoolsResponse): google.container.v1.ListNodePoolsResponse;

                /**
                 * Encodes the specified ListNodePoolsResponse message. Does not implicitly {@link google.container.v1.ListNodePoolsResponse.verify|verify} messages.
                 * @param message ListNodePoolsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IListNodePoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListNodePoolsResponse message, length delimited. Does not implicitly {@link google.container.v1.ListNodePoolsResponse.verify|verify} messages.
                 * @param message ListNodePoolsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IListNodePoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListNodePoolsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListNodePoolsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ListNodePoolsResponse;

                /**
                 * Decodes a ListNodePoolsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListNodePoolsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ListNodePoolsResponse;

                /**
                 * Verifies a ListNodePoolsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListNodePoolsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListNodePoolsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ListNodePoolsResponse;

                /**
                 * Creates a plain object from a ListNodePoolsResponse message. Also converts values to other types if specified.
                 * @param message ListNodePoolsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ListNodePoolsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListNodePoolsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ClusterAutoscaling. */
            interface IClusterAutoscaling {

                /** ClusterAutoscaling enableNodeAutoprovisioning */
                enableNodeAutoprovisioning?: (boolean|null);

                /** ClusterAutoscaling resourceLimits */
                resourceLimits?: (google.container.v1.IResourceLimit[]|null);

                /** ClusterAutoscaling autoprovisioningNodePoolDefaults */
                autoprovisioningNodePoolDefaults?: (google.container.v1.IAutoprovisioningNodePoolDefaults|null);

                /** ClusterAutoscaling autoprovisioningLocations */
                autoprovisioningLocations?: (string[]|null);
            }

            /** Represents a ClusterAutoscaling. */
            class ClusterAutoscaling implements IClusterAutoscaling {

                /**
                 * Constructs a new ClusterAutoscaling.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IClusterAutoscaling);

                /** ClusterAutoscaling enableNodeAutoprovisioning. */
                public enableNodeAutoprovisioning: boolean;

                /** ClusterAutoscaling resourceLimits. */
                public resourceLimits: google.container.v1.IResourceLimit[];

                /** ClusterAutoscaling autoprovisioningNodePoolDefaults. */
                public autoprovisioningNodePoolDefaults?: (google.container.v1.IAutoprovisioningNodePoolDefaults|null);

                /** ClusterAutoscaling autoprovisioningLocations. */
                public autoprovisioningLocations: string[];

                /**
                 * Creates a new ClusterAutoscaling instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ClusterAutoscaling instance
                 */
                public static create(properties?: google.container.v1.IClusterAutoscaling): google.container.v1.ClusterAutoscaling;

                /**
                 * Encodes the specified ClusterAutoscaling message. Does not implicitly {@link google.container.v1.ClusterAutoscaling.verify|verify} messages.
                 * @param message ClusterAutoscaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IClusterAutoscaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ClusterAutoscaling message, length delimited. Does not implicitly {@link google.container.v1.ClusterAutoscaling.verify|verify} messages.
                 * @param message ClusterAutoscaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IClusterAutoscaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ClusterAutoscaling message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ClusterAutoscaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ClusterAutoscaling;

                /**
                 * Decodes a ClusterAutoscaling message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ClusterAutoscaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ClusterAutoscaling;

                /**
                 * Verifies a ClusterAutoscaling message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ClusterAutoscaling message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ClusterAutoscaling
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ClusterAutoscaling;

                /**
                 * Creates a plain object from a ClusterAutoscaling message. Also converts values to other types if specified.
                 * @param message ClusterAutoscaling
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ClusterAutoscaling, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ClusterAutoscaling to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AutoprovisioningNodePoolDefaults. */
            interface IAutoprovisioningNodePoolDefaults {

                /** AutoprovisioningNodePoolDefaults oauthScopes */
                oauthScopes?: (string[]|null);

                /** AutoprovisioningNodePoolDefaults serviceAccount */
                serviceAccount?: (string|null);

                /** AutoprovisioningNodePoolDefaults upgradeSettings */
                upgradeSettings?: (google.container.v1.NodePool.IUpgradeSettings|null);

                /** AutoprovisioningNodePoolDefaults management */
                management?: (google.container.v1.INodeManagement|null);

                /** AutoprovisioningNodePoolDefaults minCpuPlatform */
                minCpuPlatform?: (string|null);

                /** AutoprovisioningNodePoolDefaults diskSizeGb */
                diskSizeGb?: (number|null);

                /** AutoprovisioningNodePoolDefaults diskType */
                diskType?: (string|null);

                /** AutoprovisioningNodePoolDefaults shieldedInstanceConfig */
                shieldedInstanceConfig?: (google.container.v1.IShieldedInstanceConfig|null);

                /** AutoprovisioningNodePoolDefaults bootDiskKmsKey */
                bootDiskKmsKey?: (string|null);

                /** AutoprovisioningNodePoolDefaults imageType */
                imageType?: (string|null);
            }

            /** Represents an AutoprovisioningNodePoolDefaults. */
            class AutoprovisioningNodePoolDefaults implements IAutoprovisioningNodePoolDefaults {

                /**
                 * Constructs a new AutoprovisioningNodePoolDefaults.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IAutoprovisioningNodePoolDefaults);

                /** AutoprovisioningNodePoolDefaults oauthScopes. */
                public oauthScopes: string[];

                /** AutoprovisioningNodePoolDefaults serviceAccount. */
                public serviceAccount: string;

                /** AutoprovisioningNodePoolDefaults upgradeSettings. */
                public upgradeSettings?: (google.container.v1.NodePool.IUpgradeSettings|null);

                /** AutoprovisioningNodePoolDefaults management. */
                public management?: (google.container.v1.INodeManagement|null);

                /** AutoprovisioningNodePoolDefaults minCpuPlatform. */
                public minCpuPlatform: string;

                /** AutoprovisioningNodePoolDefaults diskSizeGb. */
                public diskSizeGb: number;

                /** AutoprovisioningNodePoolDefaults diskType. */
                public diskType: string;

                /** AutoprovisioningNodePoolDefaults shieldedInstanceConfig. */
                public shieldedInstanceConfig?: (google.container.v1.IShieldedInstanceConfig|null);

                /** AutoprovisioningNodePoolDefaults bootDiskKmsKey. */
                public bootDiskKmsKey: string;

                /** AutoprovisioningNodePoolDefaults imageType. */
                public imageType: string;

                /**
                 * Creates a new AutoprovisioningNodePoolDefaults instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AutoprovisioningNodePoolDefaults instance
                 */
                public static create(properties?: google.container.v1.IAutoprovisioningNodePoolDefaults): google.container.v1.AutoprovisioningNodePoolDefaults;

                /**
                 * Encodes the specified AutoprovisioningNodePoolDefaults message. Does not implicitly {@link google.container.v1.AutoprovisioningNodePoolDefaults.verify|verify} messages.
                 * @param message AutoprovisioningNodePoolDefaults message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IAutoprovisioningNodePoolDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AutoprovisioningNodePoolDefaults message, length delimited. Does not implicitly {@link google.container.v1.AutoprovisioningNodePoolDefaults.verify|verify} messages.
                 * @param message AutoprovisioningNodePoolDefaults message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IAutoprovisioningNodePoolDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AutoprovisioningNodePoolDefaults message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AutoprovisioningNodePoolDefaults
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.AutoprovisioningNodePoolDefaults;

                /**
                 * Decodes an AutoprovisioningNodePoolDefaults message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AutoprovisioningNodePoolDefaults
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.AutoprovisioningNodePoolDefaults;

                /**
                 * Verifies an AutoprovisioningNodePoolDefaults message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AutoprovisioningNodePoolDefaults message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AutoprovisioningNodePoolDefaults
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.AutoprovisioningNodePoolDefaults;

                /**
                 * Creates a plain object from an AutoprovisioningNodePoolDefaults message. Also converts values to other types if specified.
                 * @param message AutoprovisioningNodePoolDefaults
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.AutoprovisioningNodePoolDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AutoprovisioningNodePoolDefaults to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ResourceLimit. */
            interface IResourceLimit {

                /** ResourceLimit resourceType */
                resourceType?: (string|null);

                /** ResourceLimit minimum */
                minimum?: (number|Long|string|null);

                /** ResourceLimit maximum */
                maximum?: (number|Long|string|null);
            }

            /** Represents a ResourceLimit. */
            class ResourceLimit implements IResourceLimit {

                /**
                 * Constructs a new ResourceLimit.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IResourceLimit);

                /** ResourceLimit resourceType. */
                public resourceType: string;

                /** ResourceLimit minimum. */
                public minimum: (number|Long|string);

                /** ResourceLimit maximum. */
                public maximum: (number|Long|string);

                /**
                 * Creates a new ResourceLimit instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResourceLimit instance
                 */
                public static create(properties?: google.container.v1.IResourceLimit): google.container.v1.ResourceLimit;

                /**
                 * Encodes the specified ResourceLimit message. Does not implicitly {@link google.container.v1.ResourceLimit.verify|verify} messages.
                 * @param message ResourceLimit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IResourceLimit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ResourceLimit message, length delimited. Does not implicitly {@link google.container.v1.ResourceLimit.verify|verify} messages.
                 * @param message ResourceLimit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IResourceLimit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ResourceLimit message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResourceLimit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ResourceLimit;

                /**
                 * Decodes a ResourceLimit message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResourceLimit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ResourceLimit;

                /**
                 * Verifies a ResourceLimit message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResourceLimit message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResourceLimit
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ResourceLimit;

                /**
                 * Creates a plain object from a ResourceLimit message. Also converts values to other types if specified.
                 * @param message ResourceLimit
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ResourceLimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResourceLimit to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NodePoolAutoscaling. */
            interface INodePoolAutoscaling {

                /** NodePoolAutoscaling enabled */
                enabled?: (boolean|null);

                /** NodePoolAutoscaling minNodeCount */
                minNodeCount?: (number|null);

                /** NodePoolAutoscaling maxNodeCount */
                maxNodeCount?: (number|null);

                /** NodePoolAutoscaling autoprovisioned */
                autoprovisioned?: (boolean|null);
            }

            /** Represents a NodePoolAutoscaling. */
            class NodePoolAutoscaling implements INodePoolAutoscaling {

                /**
                 * Constructs a new NodePoolAutoscaling.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.INodePoolAutoscaling);

                /** NodePoolAutoscaling enabled. */
                public enabled: boolean;

                /** NodePoolAutoscaling minNodeCount. */
                public minNodeCount: number;

                /** NodePoolAutoscaling maxNodeCount. */
                public maxNodeCount: number;

                /** NodePoolAutoscaling autoprovisioned. */
                public autoprovisioned: boolean;

                /**
                 * Creates a new NodePoolAutoscaling instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NodePoolAutoscaling instance
                 */
                public static create(properties?: google.container.v1.INodePoolAutoscaling): google.container.v1.NodePoolAutoscaling;

                /**
                 * Encodes the specified NodePoolAutoscaling message. Does not implicitly {@link google.container.v1.NodePoolAutoscaling.verify|verify} messages.
                 * @param message NodePoolAutoscaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.INodePoolAutoscaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NodePoolAutoscaling message, length delimited. Does not implicitly {@link google.container.v1.NodePoolAutoscaling.verify|verify} messages.
                 * @param message NodePoolAutoscaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.INodePoolAutoscaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NodePoolAutoscaling message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NodePoolAutoscaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.NodePoolAutoscaling;

                /**
                 * Decodes a NodePoolAutoscaling message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NodePoolAutoscaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.NodePoolAutoscaling;

                /**
                 * Verifies a NodePoolAutoscaling message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NodePoolAutoscaling message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NodePoolAutoscaling
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.NodePoolAutoscaling;

                /**
                 * Creates a plain object from a NodePoolAutoscaling message. Also converts values to other types if specified.
                 * @param message NodePoolAutoscaling
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.NodePoolAutoscaling, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NodePoolAutoscaling to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SetLabelsRequest. */
            interface ISetLabelsRequest {

                /** SetLabelsRequest projectId */
                projectId?: (string|null);

                /** SetLabelsRequest zone */
                zone?: (string|null);

                /** SetLabelsRequest clusterId */
                clusterId?: (string|null);

                /** SetLabelsRequest resourceLabels */
                resourceLabels?: ({ [k: string]: string }|null);

                /** SetLabelsRequest labelFingerprint */
                labelFingerprint?: (string|null);

                /** SetLabelsRequest name */
                name?: (string|null);
            }

            /** Represents a SetLabelsRequest. */
            class SetLabelsRequest implements ISetLabelsRequest {

                /**
                 * Constructs a new SetLabelsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ISetLabelsRequest);

                /** SetLabelsRequest projectId. */
                public projectId: string;

                /** SetLabelsRequest zone. */
                public zone: string;

                /** SetLabelsRequest clusterId. */
                public clusterId: string;

                /** SetLabelsRequest resourceLabels. */
                public resourceLabels: { [k: string]: string };

                /** SetLabelsRequest labelFingerprint. */
                public labelFingerprint: string;

                /** SetLabelsRequest name. */
                public name: string;

                /**
                 * Creates a new SetLabelsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetLabelsRequest instance
                 */
                public static create(properties?: google.container.v1.ISetLabelsRequest): google.container.v1.SetLabelsRequest;

                /**
                 * Encodes the specified SetLabelsRequest message. Does not implicitly {@link google.container.v1.SetLabelsRequest.verify|verify} messages.
                 * @param message SetLabelsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ISetLabelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetLabelsRequest message, length delimited. Does not implicitly {@link google.container.v1.SetLabelsRequest.verify|verify} messages.
                 * @param message SetLabelsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ISetLabelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetLabelsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetLabelsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.SetLabelsRequest;

                /**
                 * Decodes a SetLabelsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetLabelsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.SetLabelsRequest;

                /**
                 * Verifies a SetLabelsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetLabelsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetLabelsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.SetLabelsRequest;

                /**
                 * Creates a plain object from a SetLabelsRequest message. Also converts values to other types if specified.
                 * @param message SetLabelsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.SetLabelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetLabelsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SetLegacyAbacRequest. */
            interface ISetLegacyAbacRequest {

                /** SetLegacyAbacRequest projectId */
                projectId?: (string|null);

                /** SetLegacyAbacRequest zone */
                zone?: (string|null);

                /** SetLegacyAbacRequest clusterId */
                clusterId?: (string|null);

                /** SetLegacyAbacRequest enabled */
                enabled?: (boolean|null);

                /** SetLegacyAbacRequest name */
                name?: (string|null);
            }

            /** Represents a SetLegacyAbacRequest. */
            class SetLegacyAbacRequest implements ISetLegacyAbacRequest {

                /**
                 * Constructs a new SetLegacyAbacRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ISetLegacyAbacRequest);

                /** SetLegacyAbacRequest projectId. */
                public projectId: string;

                /** SetLegacyAbacRequest zone. */
                public zone: string;

                /** SetLegacyAbacRequest clusterId. */
                public clusterId: string;

                /** SetLegacyAbacRequest enabled. */
                public enabled: boolean;

                /** SetLegacyAbacRequest name. */
                public name: string;

                /**
                 * Creates a new SetLegacyAbacRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetLegacyAbacRequest instance
                 */
                public static create(properties?: google.container.v1.ISetLegacyAbacRequest): google.container.v1.SetLegacyAbacRequest;

                /**
                 * Encodes the specified SetLegacyAbacRequest message. Does not implicitly {@link google.container.v1.SetLegacyAbacRequest.verify|verify} messages.
                 * @param message SetLegacyAbacRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ISetLegacyAbacRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetLegacyAbacRequest message, length delimited. Does not implicitly {@link google.container.v1.SetLegacyAbacRequest.verify|verify} messages.
                 * @param message SetLegacyAbacRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ISetLegacyAbacRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetLegacyAbacRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetLegacyAbacRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.SetLegacyAbacRequest;

                /**
                 * Decodes a SetLegacyAbacRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetLegacyAbacRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.SetLegacyAbacRequest;

                /**
                 * Verifies a SetLegacyAbacRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetLegacyAbacRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetLegacyAbacRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.SetLegacyAbacRequest;

                /**
                 * Creates a plain object from a SetLegacyAbacRequest message. Also converts values to other types if specified.
                 * @param message SetLegacyAbacRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.SetLegacyAbacRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetLegacyAbacRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StartIPRotationRequest. */
            interface IStartIPRotationRequest {

                /** StartIPRotationRequest projectId */
                projectId?: (string|null);

                /** StartIPRotationRequest zone */
                zone?: (string|null);

                /** StartIPRotationRequest clusterId */
                clusterId?: (string|null);

                /** StartIPRotationRequest name */
                name?: (string|null);

                /** StartIPRotationRequest rotateCredentials */
                rotateCredentials?: (boolean|null);
            }

            /** Represents a StartIPRotationRequest. */
            class StartIPRotationRequest implements IStartIPRotationRequest {

                /**
                 * Constructs a new StartIPRotationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IStartIPRotationRequest);

                /** StartIPRotationRequest projectId. */
                public projectId: string;

                /** StartIPRotationRequest zone. */
                public zone: string;

                /** StartIPRotationRequest clusterId. */
                public clusterId: string;

                /** StartIPRotationRequest name. */
                public name: string;

                /** StartIPRotationRequest rotateCredentials. */
                public rotateCredentials: boolean;

                /**
                 * Creates a new StartIPRotationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StartIPRotationRequest instance
                 */
                public static create(properties?: google.container.v1.IStartIPRotationRequest): google.container.v1.StartIPRotationRequest;

                /**
                 * Encodes the specified StartIPRotationRequest message. Does not implicitly {@link google.container.v1.StartIPRotationRequest.verify|verify} messages.
                 * @param message StartIPRotationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IStartIPRotationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StartIPRotationRequest message, length delimited. Does not implicitly {@link google.container.v1.StartIPRotationRequest.verify|verify} messages.
                 * @param message StartIPRotationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IStartIPRotationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StartIPRotationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StartIPRotationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.StartIPRotationRequest;

                /**
                 * Decodes a StartIPRotationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StartIPRotationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.StartIPRotationRequest;

                /**
                 * Verifies a StartIPRotationRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StartIPRotationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StartIPRotationRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.StartIPRotationRequest;

                /**
                 * Creates a plain object from a StartIPRotationRequest message. Also converts values to other types if specified.
                 * @param message StartIPRotationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.StartIPRotationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StartIPRotationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CompleteIPRotationRequest. */
            interface ICompleteIPRotationRequest {

                /** CompleteIPRotationRequest projectId */
                projectId?: (string|null);

                /** CompleteIPRotationRequest zone */
                zone?: (string|null);

                /** CompleteIPRotationRequest clusterId */
                clusterId?: (string|null);

                /** CompleteIPRotationRequest name */
                name?: (string|null);
            }

            /** Represents a CompleteIPRotationRequest. */
            class CompleteIPRotationRequest implements ICompleteIPRotationRequest {

                /**
                 * Constructs a new CompleteIPRotationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ICompleteIPRotationRequest);

                /** CompleteIPRotationRequest projectId. */
                public projectId: string;

                /** CompleteIPRotationRequest zone. */
                public zone: string;

                /** CompleteIPRotationRequest clusterId. */
                public clusterId: string;

                /** CompleteIPRotationRequest name. */
                public name: string;

                /**
                 * Creates a new CompleteIPRotationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CompleteIPRotationRequest instance
                 */
                public static create(properties?: google.container.v1.ICompleteIPRotationRequest): google.container.v1.CompleteIPRotationRequest;

                /**
                 * Encodes the specified CompleteIPRotationRequest message. Does not implicitly {@link google.container.v1.CompleteIPRotationRequest.verify|verify} messages.
                 * @param message CompleteIPRotationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ICompleteIPRotationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CompleteIPRotationRequest message, length delimited. Does not implicitly {@link google.container.v1.CompleteIPRotationRequest.verify|verify} messages.
                 * @param message CompleteIPRotationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ICompleteIPRotationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CompleteIPRotationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CompleteIPRotationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.CompleteIPRotationRequest;

                /**
                 * Decodes a CompleteIPRotationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CompleteIPRotationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.CompleteIPRotationRequest;

                /**
                 * Verifies a CompleteIPRotationRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CompleteIPRotationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CompleteIPRotationRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.CompleteIPRotationRequest;

                /**
                 * Creates a plain object from a CompleteIPRotationRequest message. Also converts values to other types if specified.
                 * @param message CompleteIPRotationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.CompleteIPRotationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CompleteIPRotationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AcceleratorConfig. */
            interface IAcceleratorConfig {

                /** AcceleratorConfig acceleratorCount */
                acceleratorCount?: (number|Long|string|null);

                /** AcceleratorConfig acceleratorType */
                acceleratorType?: (string|null);
            }

            /** Represents an AcceleratorConfig. */
            class AcceleratorConfig implements IAcceleratorConfig {

                /**
                 * Constructs a new AcceleratorConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IAcceleratorConfig);

                /** AcceleratorConfig acceleratorCount. */
                public acceleratorCount: (number|Long|string);

                /** AcceleratorConfig acceleratorType. */
                public acceleratorType: string;

                /**
                 * Creates a new AcceleratorConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AcceleratorConfig instance
                 */
                public static create(properties?: google.container.v1.IAcceleratorConfig): google.container.v1.AcceleratorConfig;

                /**
                 * Encodes the specified AcceleratorConfig message. Does not implicitly {@link google.container.v1.AcceleratorConfig.verify|verify} messages.
                 * @param message AcceleratorConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AcceleratorConfig message, length delimited. Does not implicitly {@link google.container.v1.AcceleratorConfig.verify|verify} messages.
                 * @param message AcceleratorConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IAcceleratorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AcceleratorConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AcceleratorConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.AcceleratorConfig;

                /**
                 * Decodes an AcceleratorConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AcceleratorConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.AcceleratorConfig;

                /**
                 * Verifies an AcceleratorConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AcceleratorConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AcceleratorConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.AcceleratorConfig;

                /**
                 * Creates a plain object from an AcceleratorConfig message. Also converts values to other types if specified.
                 * @param message AcceleratorConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.AcceleratorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AcceleratorConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a WorkloadMetadataConfig. */
            interface IWorkloadMetadataConfig {

                /** WorkloadMetadataConfig mode */
                mode?: (google.container.v1.WorkloadMetadataConfig.Mode|keyof typeof google.container.v1.WorkloadMetadataConfig.Mode|null);
            }

            /** Represents a WorkloadMetadataConfig. */
            class WorkloadMetadataConfig implements IWorkloadMetadataConfig {

                /**
                 * Constructs a new WorkloadMetadataConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IWorkloadMetadataConfig);

                /** WorkloadMetadataConfig mode. */
                public mode: (google.container.v1.WorkloadMetadataConfig.Mode|keyof typeof google.container.v1.WorkloadMetadataConfig.Mode);

                /**
                 * Creates a new WorkloadMetadataConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WorkloadMetadataConfig instance
                 */
                public static create(properties?: google.container.v1.IWorkloadMetadataConfig): google.container.v1.WorkloadMetadataConfig;

                /**
                 * Encodes the specified WorkloadMetadataConfig message. Does not implicitly {@link google.container.v1.WorkloadMetadataConfig.verify|verify} messages.
                 * @param message WorkloadMetadataConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IWorkloadMetadataConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WorkloadMetadataConfig message, length delimited. Does not implicitly {@link google.container.v1.WorkloadMetadataConfig.verify|verify} messages.
                 * @param message WorkloadMetadataConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IWorkloadMetadataConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WorkloadMetadataConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WorkloadMetadataConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.WorkloadMetadataConfig;

                /**
                 * Decodes a WorkloadMetadataConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WorkloadMetadataConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.WorkloadMetadataConfig;

                /**
                 * Verifies a WorkloadMetadataConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WorkloadMetadataConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WorkloadMetadataConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.WorkloadMetadataConfig;

                /**
                 * Creates a plain object from a WorkloadMetadataConfig message. Also converts values to other types if specified.
                 * @param message WorkloadMetadataConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.WorkloadMetadataConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WorkloadMetadataConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace WorkloadMetadataConfig {

                /** Mode enum. */
                enum Mode {
                    MODE_UNSPECIFIED = 0,
                    GCE_METADATA = 1,
                    GKE_METADATA = 2
                }
            }

            /** Properties of a SetNetworkPolicyRequest. */
            interface ISetNetworkPolicyRequest {

                /** SetNetworkPolicyRequest projectId */
                projectId?: (string|null);

                /** SetNetworkPolicyRequest zone */
                zone?: (string|null);

                /** SetNetworkPolicyRequest clusterId */
                clusterId?: (string|null);

                /** SetNetworkPolicyRequest networkPolicy */
                networkPolicy?: (google.container.v1.INetworkPolicy|null);

                /** SetNetworkPolicyRequest name */
                name?: (string|null);
            }

            /** Represents a SetNetworkPolicyRequest. */
            class SetNetworkPolicyRequest implements ISetNetworkPolicyRequest {

                /**
                 * Constructs a new SetNetworkPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ISetNetworkPolicyRequest);

                /** SetNetworkPolicyRequest projectId. */
                public projectId: string;

                /** SetNetworkPolicyRequest zone. */
                public zone: string;

                /** SetNetworkPolicyRequest clusterId. */
                public clusterId: string;

                /** SetNetworkPolicyRequest networkPolicy. */
                public networkPolicy?: (google.container.v1.INetworkPolicy|null);

                /** SetNetworkPolicyRequest name. */
                public name: string;

                /**
                 * Creates a new SetNetworkPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetNetworkPolicyRequest instance
                 */
                public static create(properties?: google.container.v1.ISetNetworkPolicyRequest): google.container.v1.SetNetworkPolicyRequest;

                /**
                 * Encodes the specified SetNetworkPolicyRequest message. Does not implicitly {@link google.container.v1.SetNetworkPolicyRequest.verify|verify} messages.
                 * @param message SetNetworkPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ISetNetworkPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetNetworkPolicyRequest message, length delimited. Does not implicitly {@link google.container.v1.SetNetworkPolicyRequest.verify|verify} messages.
                 * @param message SetNetworkPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ISetNetworkPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetNetworkPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetNetworkPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.SetNetworkPolicyRequest;

                /**
                 * Decodes a SetNetworkPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetNetworkPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.SetNetworkPolicyRequest;

                /**
                 * Verifies a SetNetworkPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetNetworkPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetNetworkPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.SetNetworkPolicyRequest;

                /**
                 * Creates a plain object from a SetNetworkPolicyRequest message. Also converts values to other types if specified.
                 * @param message SetNetworkPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.SetNetworkPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetNetworkPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SetMaintenancePolicyRequest. */
            interface ISetMaintenancePolicyRequest {

                /** SetMaintenancePolicyRequest projectId */
                projectId?: (string|null);

                /** SetMaintenancePolicyRequest zone */
                zone?: (string|null);

                /** SetMaintenancePolicyRequest clusterId */
                clusterId?: (string|null);

                /** SetMaintenancePolicyRequest maintenancePolicy */
                maintenancePolicy?: (google.container.v1.IMaintenancePolicy|null);

                /** SetMaintenancePolicyRequest name */
                name?: (string|null);
            }

            /** Represents a SetMaintenancePolicyRequest. */
            class SetMaintenancePolicyRequest implements ISetMaintenancePolicyRequest {

                /**
                 * Constructs a new SetMaintenancePolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.ISetMaintenancePolicyRequest);

                /** SetMaintenancePolicyRequest projectId. */
                public projectId: string;

                /** SetMaintenancePolicyRequest zone. */
                public zone: string;

                /** SetMaintenancePolicyRequest clusterId. */
                public clusterId: string;

                /** SetMaintenancePolicyRequest maintenancePolicy. */
                public maintenancePolicy?: (google.container.v1.IMaintenancePolicy|null);

                /** SetMaintenancePolicyRequest name. */
                public name: string;

                /**
                 * Creates a new SetMaintenancePolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetMaintenancePolicyRequest instance
                 */
                public static create(properties?: google.container.v1.ISetMaintenancePolicyRequest): google.container.v1.SetMaintenancePolicyRequest;

                /**
                 * Encodes the specified SetMaintenancePolicyRequest message. Does not implicitly {@link google.container.v1.SetMaintenancePolicyRequest.verify|verify} messages.
                 * @param message SetMaintenancePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.ISetMaintenancePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetMaintenancePolicyRequest message, length delimited. Does not implicitly {@link google.container.v1.SetMaintenancePolicyRequest.verify|verify} messages.
                 * @param message SetMaintenancePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.ISetMaintenancePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetMaintenancePolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetMaintenancePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.SetMaintenancePolicyRequest;

                /**
                 * Decodes a SetMaintenancePolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetMaintenancePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.SetMaintenancePolicyRequest;

                /**
                 * Verifies a SetMaintenancePolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetMaintenancePolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetMaintenancePolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.SetMaintenancePolicyRequest;

                /**
                 * Creates a plain object from a SetMaintenancePolicyRequest message. Also converts values to other types if specified.
                 * @param message SetMaintenancePolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.SetMaintenancePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetMaintenancePolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StatusCondition. */
            interface IStatusCondition {

                /** StatusCondition code */
                code?: (google.container.v1.StatusCondition.Code|keyof typeof google.container.v1.StatusCondition.Code|null);

                /** StatusCondition message */
                message?: (string|null);
            }

            /** Represents a StatusCondition. */
            class StatusCondition implements IStatusCondition {

                /**
                 * Constructs a new StatusCondition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IStatusCondition);

                /** StatusCondition code. */
                public code: (google.container.v1.StatusCondition.Code|keyof typeof google.container.v1.StatusCondition.Code);

                /** StatusCondition message. */
                public message: string;

                /**
                 * Creates a new StatusCondition instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StatusCondition instance
                 */
                public static create(properties?: google.container.v1.IStatusCondition): google.container.v1.StatusCondition;

                /**
                 * Encodes the specified StatusCondition message. Does not implicitly {@link google.container.v1.StatusCondition.verify|verify} messages.
                 * @param message StatusCondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IStatusCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StatusCondition message, length delimited. Does not implicitly {@link google.container.v1.StatusCondition.verify|verify} messages.
                 * @param message StatusCondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IStatusCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StatusCondition message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StatusCondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.StatusCondition;

                /**
                 * Decodes a StatusCondition message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StatusCondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.StatusCondition;

                /**
                 * Verifies a StatusCondition message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StatusCondition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StatusCondition
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.StatusCondition;

                /**
                 * Creates a plain object from a StatusCondition message. Also converts values to other types if specified.
                 * @param message StatusCondition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.StatusCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StatusCondition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace StatusCondition {

                /** Code enum. */
                enum Code {
                    UNKNOWN = 0,
                    GCE_STOCKOUT = 1,
                    GKE_SERVICE_ACCOUNT_DELETED = 2,
                    GCE_QUOTA_EXCEEDED = 3,
                    SET_BY_OPERATOR = 4,
                    CLOUD_KMS_KEY_ERROR = 7
                }
            }

            /** Properties of a NetworkConfig. */
            interface INetworkConfig {

                /** NetworkConfig network */
                network?: (string|null);

                /** NetworkConfig subnetwork */
                subnetwork?: (string|null);

                /** NetworkConfig enableIntraNodeVisibility */
                enableIntraNodeVisibility?: (boolean|null);

                /** NetworkConfig defaultSnatStatus */
                defaultSnatStatus?: (google.container.v1.IDefaultSnatStatus|null);
            }

            /** Represents a NetworkConfig. */
            class NetworkConfig implements INetworkConfig {

                /**
                 * Constructs a new NetworkConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.INetworkConfig);

                /** NetworkConfig network. */
                public network: string;

                /** NetworkConfig subnetwork. */
                public subnetwork: string;

                /** NetworkConfig enableIntraNodeVisibility. */
                public enableIntraNodeVisibility: boolean;

                /** NetworkConfig defaultSnatStatus. */
                public defaultSnatStatus?: (google.container.v1.IDefaultSnatStatus|null);

                /**
                 * Creates a new NetworkConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NetworkConfig instance
                 */
                public static create(properties?: google.container.v1.INetworkConfig): google.container.v1.NetworkConfig;

                /**
                 * Encodes the specified NetworkConfig message. Does not implicitly {@link google.container.v1.NetworkConfig.verify|verify} messages.
                 * @param message NetworkConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.container.v1.NetworkConfig.verify|verify} messages.
                 * @param message NetworkConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NetworkConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NetworkConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.NetworkConfig;

                /**
                 * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NetworkConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.NetworkConfig;

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
                public static fromObject(object: { [k: string]: any }): google.container.v1.NetworkConfig;

                /**
                 * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                 * @param message NetworkConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NetworkConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetOpenIDConfigRequest. */
            interface IGetOpenIDConfigRequest {

                /** GetOpenIDConfigRequest parent */
                parent?: (string|null);
            }

            /** Represents a GetOpenIDConfigRequest. */
            class GetOpenIDConfigRequest implements IGetOpenIDConfigRequest {

                /**
                 * Constructs a new GetOpenIDConfigRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IGetOpenIDConfigRequest);

                /** GetOpenIDConfigRequest parent. */
                public parent: string;

                /**
                 * Creates a new GetOpenIDConfigRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetOpenIDConfigRequest instance
                 */
                public static create(properties?: google.container.v1.IGetOpenIDConfigRequest): google.container.v1.GetOpenIDConfigRequest;

                /**
                 * Encodes the specified GetOpenIDConfigRequest message. Does not implicitly {@link google.container.v1.GetOpenIDConfigRequest.verify|verify} messages.
                 * @param message GetOpenIDConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IGetOpenIDConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetOpenIDConfigRequest message, length delimited. Does not implicitly {@link google.container.v1.GetOpenIDConfigRequest.verify|verify} messages.
                 * @param message GetOpenIDConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IGetOpenIDConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetOpenIDConfigRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetOpenIDConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.GetOpenIDConfigRequest;

                /**
                 * Decodes a GetOpenIDConfigRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetOpenIDConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.GetOpenIDConfigRequest;

                /**
                 * Verifies a GetOpenIDConfigRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetOpenIDConfigRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetOpenIDConfigRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.GetOpenIDConfigRequest;

                /**
                 * Creates a plain object from a GetOpenIDConfigRequest message. Also converts values to other types if specified.
                 * @param message GetOpenIDConfigRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.GetOpenIDConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetOpenIDConfigRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetOpenIDConfigResponse. */
            interface IGetOpenIDConfigResponse {

                /** GetOpenIDConfigResponse issuer */
                issuer?: (string|null);

                /** GetOpenIDConfigResponse jwksUri */
                jwksUri?: (string|null);

                /** GetOpenIDConfigResponse responseTypesSupported */
                responseTypesSupported?: (string[]|null);

                /** GetOpenIDConfigResponse subjectTypesSupported */
                subjectTypesSupported?: (string[]|null);

                /** GetOpenIDConfigResponse idTokenSigningAlgValuesSupported */
                idTokenSigningAlgValuesSupported?: (string[]|null);

                /** GetOpenIDConfigResponse claimsSupported */
                claimsSupported?: (string[]|null);

                /** GetOpenIDConfigResponse grantTypes */
                grantTypes?: (string[]|null);
            }

            /** Represents a GetOpenIDConfigResponse. */
            class GetOpenIDConfigResponse implements IGetOpenIDConfigResponse {

                /**
                 * Constructs a new GetOpenIDConfigResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IGetOpenIDConfigResponse);

                /** GetOpenIDConfigResponse issuer. */
                public issuer: string;

                /** GetOpenIDConfigResponse jwksUri. */
                public jwksUri: string;

                /** GetOpenIDConfigResponse responseTypesSupported. */
                public responseTypesSupported: string[];

                /** GetOpenIDConfigResponse subjectTypesSupported. */
                public subjectTypesSupported: string[];

                /** GetOpenIDConfigResponse idTokenSigningAlgValuesSupported. */
                public idTokenSigningAlgValuesSupported: string[];

                /** GetOpenIDConfigResponse claimsSupported. */
                public claimsSupported: string[];

                /** GetOpenIDConfigResponse grantTypes. */
                public grantTypes: string[];

                /**
                 * Creates a new GetOpenIDConfigResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetOpenIDConfigResponse instance
                 */
                public static create(properties?: google.container.v1.IGetOpenIDConfigResponse): google.container.v1.GetOpenIDConfigResponse;

                /**
                 * Encodes the specified GetOpenIDConfigResponse message. Does not implicitly {@link google.container.v1.GetOpenIDConfigResponse.verify|verify} messages.
                 * @param message GetOpenIDConfigResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IGetOpenIDConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetOpenIDConfigResponse message, length delimited. Does not implicitly {@link google.container.v1.GetOpenIDConfigResponse.verify|verify} messages.
                 * @param message GetOpenIDConfigResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IGetOpenIDConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetOpenIDConfigResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetOpenIDConfigResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.GetOpenIDConfigResponse;

                /**
                 * Decodes a GetOpenIDConfigResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetOpenIDConfigResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.GetOpenIDConfigResponse;

                /**
                 * Verifies a GetOpenIDConfigResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetOpenIDConfigResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetOpenIDConfigResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.GetOpenIDConfigResponse;

                /**
                 * Creates a plain object from a GetOpenIDConfigResponse message. Also converts values to other types if specified.
                 * @param message GetOpenIDConfigResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.GetOpenIDConfigResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetOpenIDConfigResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetJSONWebKeysRequest. */
            interface IGetJSONWebKeysRequest {

                /** GetJSONWebKeysRequest parent */
                parent?: (string|null);
            }

            /** Represents a GetJSONWebKeysRequest. */
            class GetJSONWebKeysRequest implements IGetJSONWebKeysRequest {

                /**
                 * Constructs a new GetJSONWebKeysRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IGetJSONWebKeysRequest);

                /** GetJSONWebKeysRequest parent. */
                public parent: string;

                /**
                 * Creates a new GetJSONWebKeysRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetJSONWebKeysRequest instance
                 */
                public static create(properties?: google.container.v1.IGetJSONWebKeysRequest): google.container.v1.GetJSONWebKeysRequest;

                /**
                 * Encodes the specified GetJSONWebKeysRequest message. Does not implicitly {@link google.container.v1.GetJSONWebKeysRequest.verify|verify} messages.
                 * @param message GetJSONWebKeysRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IGetJSONWebKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetJSONWebKeysRequest message, length delimited. Does not implicitly {@link google.container.v1.GetJSONWebKeysRequest.verify|verify} messages.
                 * @param message GetJSONWebKeysRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IGetJSONWebKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetJSONWebKeysRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetJSONWebKeysRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.GetJSONWebKeysRequest;

                /**
                 * Decodes a GetJSONWebKeysRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetJSONWebKeysRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.GetJSONWebKeysRequest;

                /**
                 * Verifies a GetJSONWebKeysRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetJSONWebKeysRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetJSONWebKeysRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.GetJSONWebKeysRequest;

                /**
                 * Creates a plain object from a GetJSONWebKeysRequest message. Also converts values to other types if specified.
                 * @param message GetJSONWebKeysRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.GetJSONWebKeysRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetJSONWebKeysRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Jwk. */
            interface IJwk {

                /** Jwk kty */
                kty?: (string|null);

                /** Jwk alg */
                alg?: (string|null);

                /** Jwk use */
                use?: (string|null);

                /** Jwk kid */
                kid?: (string|null);

                /** Jwk n */
                n?: (string|null);

                /** Jwk e */
                e?: (string|null);

                /** Jwk x */
                x?: (string|null);

                /** Jwk y */
                y?: (string|null);

                /** Jwk crv */
                crv?: (string|null);
            }

            /** Represents a Jwk. */
            class Jwk implements IJwk {

                /**
                 * Constructs a new Jwk.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IJwk);

                /** Jwk kty. */
                public kty: string;

                /** Jwk alg. */
                public alg: string;

                /** Jwk use. */
                public use: string;

                /** Jwk kid. */
                public kid: string;

                /** Jwk n. */
                public n: string;

                /** Jwk e. */
                public e: string;

                /** Jwk x. */
                public x: string;

                /** Jwk y. */
                public y: string;

                /** Jwk crv. */
                public crv: string;

                /**
                 * Creates a new Jwk instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Jwk instance
                 */
                public static create(properties?: google.container.v1.IJwk): google.container.v1.Jwk;

                /**
                 * Encodes the specified Jwk message. Does not implicitly {@link google.container.v1.Jwk.verify|verify} messages.
                 * @param message Jwk message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IJwk, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Jwk message, length delimited. Does not implicitly {@link google.container.v1.Jwk.verify|verify} messages.
                 * @param message Jwk message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IJwk, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Jwk message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Jwk
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.Jwk;

                /**
                 * Decodes a Jwk message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Jwk
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.Jwk;

                /**
                 * Verifies a Jwk message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Jwk message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Jwk
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.Jwk;

                /**
                 * Creates a plain object from a Jwk message. Also converts values to other types if specified.
                 * @param message Jwk
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.Jwk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Jwk to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetJSONWebKeysResponse. */
            interface IGetJSONWebKeysResponse {

                /** GetJSONWebKeysResponse keys */
                keys?: (google.container.v1.IJwk[]|null);
            }

            /** Represents a GetJSONWebKeysResponse. */
            class GetJSONWebKeysResponse implements IGetJSONWebKeysResponse {

                /**
                 * Constructs a new GetJSONWebKeysResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IGetJSONWebKeysResponse);

                /** GetJSONWebKeysResponse keys. */
                public keys: google.container.v1.IJwk[];

                /**
                 * Creates a new GetJSONWebKeysResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetJSONWebKeysResponse instance
                 */
                public static create(properties?: google.container.v1.IGetJSONWebKeysResponse): google.container.v1.GetJSONWebKeysResponse;

                /**
                 * Encodes the specified GetJSONWebKeysResponse message. Does not implicitly {@link google.container.v1.GetJSONWebKeysResponse.verify|verify} messages.
                 * @param message GetJSONWebKeysResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IGetJSONWebKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetJSONWebKeysResponse message, length delimited. Does not implicitly {@link google.container.v1.GetJSONWebKeysResponse.verify|verify} messages.
                 * @param message GetJSONWebKeysResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IGetJSONWebKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetJSONWebKeysResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetJSONWebKeysResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.GetJSONWebKeysResponse;

                /**
                 * Decodes a GetJSONWebKeysResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetJSONWebKeysResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.GetJSONWebKeysResponse;

                /**
                 * Verifies a GetJSONWebKeysResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetJSONWebKeysResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetJSONWebKeysResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.GetJSONWebKeysResponse;

                /**
                 * Creates a plain object from a GetJSONWebKeysResponse message. Also converts values to other types if specified.
                 * @param message GetJSONWebKeysResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.GetJSONWebKeysResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetJSONWebKeysResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReleaseChannel. */
            interface IReleaseChannel {

                /** ReleaseChannel channel */
                channel?: (google.container.v1.ReleaseChannel.Channel|keyof typeof google.container.v1.ReleaseChannel.Channel|null);
            }

            /** Represents a ReleaseChannel. */
            class ReleaseChannel implements IReleaseChannel {

                /**
                 * Constructs a new ReleaseChannel.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IReleaseChannel);

                /** ReleaseChannel channel. */
                public channel: (google.container.v1.ReleaseChannel.Channel|keyof typeof google.container.v1.ReleaseChannel.Channel);

                /**
                 * Creates a new ReleaseChannel instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReleaseChannel instance
                 */
                public static create(properties?: google.container.v1.IReleaseChannel): google.container.v1.ReleaseChannel;

                /**
                 * Encodes the specified ReleaseChannel message. Does not implicitly {@link google.container.v1.ReleaseChannel.verify|verify} messages.
                 * @param message ReleaseChannel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IReleaseChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReleaseChannel message, length delimited. Does not implicitly {@link google.container.v1.ReleaseChannel.verify|verify} messages.
                 * @param message ReleaseChannel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IReleaseChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReleaseChannel message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReleaseChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ReleaseChannel;

                /**
                 * Decodes a ReleaseChannel message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReleaseChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ReleaseChannel;

                /**
                 * Verifies a ReleaseChannel message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReleaseChannel message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReleaseChannel
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ReleaseChannel;

                /**
                 * Creates a plain object from a ReleaseChannel message. Also converts values to other types if specified.
                 * @param message ReleaseChannel
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ReleaseChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReleaseChannel to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ReleaseChannel {

                /** Channel enum. */
                enum Channel {
                    UNSPECIFIED = 0,
                    RAPID = 1,
                    REGULAR = 2,
                    STABLE = 3
                }
            }

            /** Properties of an IntraNodeVisibilityConfig. */
            interface IIntraNodeVisibilityConfig {

                /** IntraNodeVisibilityConfig enabled */
                enabled?: (boolean|null);
            }

            /** Represents an IntraNodeVisibilityConfig. */
            class IntraNodeVisibilityConfig implements IIntraNodeVisibilityConfig {

                /**
                 * Constructs a new IntraNodeVisibilityConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IIntraNodeVisibilityConfig);

                /** IntraNodeVisibilityConfig enabled. */
                public enabled: boolean;

                /**
                 * Creates a new IntraNodeVisibilityConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IntraNodeVisibilityConfig instance
                 */
                public static create(properties?: google.container.v1.IIntraNodeVisibilityConfig): google.container.v1.IntraNodeVisibilityConfig;

                /**
                 * Encodes the specified IntraNodeVisibilityConfig message. Does not implicitly {@link google.container.v1.IntraNodeVisibilityConfig.verify|verify} messages.
                 * @param message IntraNodeVisibilityConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IIntraNodeVisibilityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IntraNodeVisibilityConfig message, length delimited. Does not implicitly {@link google.container.v1.IntraNodeVisibilityConfig.verify|verify} messages.
                 * @param message IntraNodeVisibilityConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IIntraNodeVisibilityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IntraNodeVisibilityConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IntraNodeVisibilityConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.IntraNodeVisibilityConfig;

                /**
                 * Decodes an IntraNodeVisibilityConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IntraNodeVisibilityConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.IntraNodeVisibilityConfig;

                /**
                 * Verifies an IntraNodeVisibilityConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an IntraNodeVisibilityConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IntraNodeVisibilityConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.IntraNodeVisibilityConfig;

                /**
                 * Creates a plain object from an IntraNodeVisibilityConfig message. Also converts values to other types if specified.
                 * @param message IntraNodeVisibilityConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.IntraNodeVisibilityConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IntraNodeVisibilityConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a MaxPodsConstraint. */
            interface IMaxPodsConstraint {

                /** MaxPodsConstraint maxPodsPerNode */
                maxPodsPerNode?: (number|Long|string|null);
            }

            /** Represents a MaxPodsConstraint. */
            class MaxPodsConstraint implements IMaxPodsConstraint {

                /**
                 * Constructs a new MaxPodsConstraint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IMaxPodsConstraint);

                /** MaxPodsConstraint maxPodsPerNode. */
                public maxPodsPerNode: (number|Long|string);

                /**
                 * Creates a new MaxPodsConstraint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MaxPodsConstraint instance
                 */
                public static create(properties?: google.container.v1.IMaxPodsConstraint): google.container.v1.MaxPodsConstraint;

                /**
                 * Encodes the specified MaxPodsConstraint message. Does not implicitly {@link google.container.v1.MaxPodsConstraint.verify|verify} messages.
                 * @param message MaxPodsConstraint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IMaxPodsConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MaxPodsConstraint message, length delimited. Does not implicitly {@link google.container.v1.MaxPodsConstraint.verify|verify} messages.
                 * @param message MaxPodsConstraint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IMaxPodsConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MaxPodsConstraint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MaxPodsConstraint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.MaxPodsConstraint;

                /**
                 * Decodes a MaxPodsConstraint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MaxPodsConstraint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.MaxPodsConstraint;

                /**
                 * Verifies a MaxPodsConstraint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MaxPodsConstraint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MaxPodsConstraint
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.MaxPodsConstraint;

                /**
                 * Creates a plain object from a MaxPodsConstraint message. Also converts values to other types if specified.
                 * @param message MaxPodsConstraint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.MaxPodsConstraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MaxPodsConstraint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a WorkloadIdentityConfig. */
            interface IWorkloadIdentityConfig {

                /** WorkloadIdentityConfig workloadPool */
                workloadPool?: (string|null);
            }

            /** Represents a WorkloadIdentityConfig. */
            class WorkloadIdentityConfig implements IWorkloadIdentityConfig {

                /**
                 * Constructs a new WorkloadIdentityConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IWorkloadIdentityConfig);

                /** WorkloadIdentityConfig workloadPool. */
                public workloadPool: string;

                /**
                 * Creates a new WorkloadIdentityConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WorkloadIdentityConfig instance
                 */
                public static create(properties?: google.container.v1.IWorkloadIdentityConfig): google.container.v1.WorkloadIdentityConfig;

                /**
                 * Encodes the specified WorkloadIdentityConfig message. Does not implicitly {@link google.container.v1.WorkloadIdentityConfig.verify|verify} messages.
                 * @param message WorkloadIdentityConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IWorkloadIdentityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WorkloadIdentityConfig message, length delimited. Does not implicitly {@link google.container.v1.WorkloadIdentityConfig.verify|verify} messages.
                 * @param message WorkloadIdentityConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IWorkloadIdentityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WorkloadIdentityConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WorkloadIdentityConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.WorkloadIdentityConfig;

                /**
                 * Decodes a WorkloadIdentityConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WorkloadIdentityConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.WorkloadIdentityConfig;

                /**
                 * Verifies a WorkloadIdentityConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WorkloadIdentityConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WorkloadIdentityConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.WorkloadIdentityConfig;

                /**
                 * Creates a plain object from a WorkloadIdentityConfig message. Also converts values to other types if specified.
                 * @param message WorkloadIdentityConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.WorkloadIdentityConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WorkloadIdentityConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DatabaseEncryption. */
            interface IDatabaseEncryption {

                /** DatabaseEncryption state */
                state?: (google.container.v1.DatabaseEncryption.State|keyof typeof google.container.v1.DatabaseEncryption.State|null);

                /** DatabaseEncryption keyName */
                keyName?: (string|null);
            }

            /** Represents a DatabaseEncryption. */
            class DatabaseEncryption implements IDatabaseEncryption {

                /**
                 * Constructs a new DatabaseEncryption.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IDatabaseEncryption);

                /** DatabaseEncryption state. */
                public state: (google.container.v1.DatabaseEncryption.State|keyof typeof google.container.v1.DatabaseEncryption.State);

                /** DatabaseEncryption keyName. */
                public keyName: string;

                /**
                 * Creates a new DatabaseEncryption instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DatabaseEncryption instance
                 */
                public static create(properties?: google.container.v1.IDatabaseEncryption): google.container.v1.DatabaseEncryption;

                /**
                 * Encodes the specified DatabaseEncryption message. Does not implicitly {@link google.container.v1.DatabaseEncryption.verify|verify} messages.
                 * @param message DatabaseEncryption message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IDatabaseEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DatabaseEncryption message, length delimited. Does not implicitly {@link google.container.v1.DatabaseEncryption.verify|verify} messages.
                 * @param message DatabaseEncryption message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IDatabaseEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DatabaseEncryption message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DatabaseEncryption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.DatabaseEncryption;

                /**
                 * Decodes a DatabaseEncryption message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DatabaseEncryption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.DatabaseEncryption;

                /**
                 * Verifies a DatabaseEncryption message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DatabaseEncryption message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DatabaseEncryption
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.DatabaseEncryption;

                /**
                 * Creates a plain object from a DatabaseEncryption message. Also converts values to other types if specified.
                 * @param message DatabaseEncryption
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.DatabaseEncryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DatabaseEncryption to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace DatabaseEncryption {

                /** State enum. */
                enum State {
                    UNKNOWN = 0,
                    ENCRYPTED = 1,
                    DECRYPTED = 2
                }
            }

            /** Properties of a ListUsableSubnetworksRequest. */
            interface IListUsableSubnetworksRequest {

                /** ListUsableSubnetworksRequest parent */
                parent?: (string|null);

                /** ListUsableSubnetworksRequest filter */
                filter?: (string|null);

                /** ListUsableSubnetworksRequest pageSize */
                pageSize?: (number|null);

                /** ListUsableSubnetworksRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListUsableSubnetworksRequest. */
            class ListUsableSubnetworksRequest implements IListUsableSubnetworksRequest {

                /**
                 * Constructs a new ListUsableSubnetworksRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IListUsableSubnetworksRequest);

                /** ListUsableSubnetworksRequest parent. */
                public parent: string;

                /** ListUsableSubnetworksRequest filter. */
                public filter: string;

                /** ListUsableSubnetworksRequest pageSize. */
                public pageSize: number;

                /** ListUsableSubnetworksRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListUsableSubnetworksRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListUsableSubnetworksRequest instance
                 */
                public static create(properties?: google.container.v1.IListUsableSubnetworksRequest): google.container.v1.ListUsableSubnetworksRequest;

                /**
                 * Encodes the specified ListUsableSubnetworksRequest message. Does not implicitly {@link google.container.v1.ListUsableSubnetworksRequest.verify|verify} messages.
                 * @param message ListUsableSubnetworksRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IListUsableSubnetworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListUsableSubnetworksRequest message, length delimited. Does not implicitly {@link google.container.v1.ListUsableSubnetworksRequest.verify|verify} messages.
                 * @param message ListUsableSubnetworksRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IListUsableSubnetworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListUsableSubnetworksRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListUsableSubnetworksRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ListUsableSubnetworksRequest;

                /**
                 * Decodes a ListUsableSubnetworksRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListUsableSubnetworksRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ListUsableSubnetworksRequest;

                /**
                 * Verifies a ListUsableSubnetworksRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListUsableSubnetworksRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListUsableSubnetworksRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ListUsableSubnetworksRequest;

                /**
                 * Creates a plain object from a ListUsableSubnetworksRequest message. Also converts values to other types if specified.
                 * @param message ListUsableSubnetworksRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ListUsableSubnetworksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListUsableSubnetworksRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListUsableSubnetworksResponse. */
            interface IListUsableSubnetworksResponse {

                /** ListUsableSubnetworksResponse subnetworks */
                subnetworks?: (google.container.v1.IUsableSubnetwork[]|null);

                /** ListUsableSubnetworksResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListUsableSubnetworksResponse. */
            class ListUsableSubnetworksResponse implements IListUsableSubnetworksResponse {

                /**
                 * Constructs a new ListUsableSubnetworksResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IListUsableSubnetworksResponse);

                /** ListUsableSubnetworksResponse subnetworks. */
                public subnetworks: google.container.v1.IUsableSubnetwork[];

                /** ListUsableSubnetworksResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListUsableSubnetworksResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListUsableSubnetworksResponse instance
                 */
                public static create(properties?: google.container.v1.IListUsableSubnetworksResponse): google.container.v1.ListUsableSubnetworksResponse;

                /**
                 * Encodes the specified ListUsableSubnetworksResponse message. Does not implicitly {@link google.container.v1.ListUsableSubnetworksResponse.verify|verify} messages.
                 * @param message ListUsableSubnetworksResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IListUsableSubnetworksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListUsableSubnetworksResponse message, length delimited. Does not implicitly {@link google.container.v1.ListUsableSubnetworksResponse.verify|verify} messages.
                 * @param message ListUsableSubnetworksResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IListUsableSubnetworksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListUsableSubnetworksResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListUsableSubnetworksResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ListUsableSubnetworksResponse;

                /**
                 * Decodes a ListUsableSubnetworksResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListUsableSubnetworksResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ListUsableSubnetworksResponse;

                /**
                 * Verifies a ListUsableSubnetworksResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListUsableSubnetworksResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListUsableSubnetworksResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ListUsableSubnetworksResponse;

                /**
                 * Creates a plain object from a ListUsableSubnetworksResponse message. Also converts values to other types if specified.
                 * @param message ListUsableSubnetworksResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ListUsableSubnetworksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListUsableSubnetworksResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a UsableSubnetworkSecondaryRange. */
            interface IUsableSubnetworkSecondaryRange {

                /** UsableSubnetworkSecondaryRange rangeName */
                rangeName?: (string|null);

                /** UsableSubnetworkSecondaryRange ipCidrRange */
                ipCidrRange?: (string|null);

                /** UsableSubnetworkSecondaryRange status */
                status?: (google.container.v1.UsableSubnetworkSecondaryRange.Status|keyof typeof google.container.v1.UsableSubnetworkSecondaryRange.Status|null);
            }

            /** Represents a UsableSubnetworkSecondaryRange. */
            class UsableSubnetworkSecondaryRange implements IUsableSubnetworkSecondaryRange {

                /**
                 * Constructs a new UsableSubnetworkSecondaryRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IUsableSubnetworkSecondaryRange);

                /** UsableSubnetworkSecondaryRange rangeName. */
                public rangeName: string;

                /** UsableSubnetworkSecondaryRange ipCidrRange. */
                public ipCidrRange: string;

                /** UsableSubnetworkSecondaryRange status. */
                public status: (google.container.v1.UsableSubnetworkSecondaryRange.Status|keyof typeof google.container.v1.UsableSubnetworkSecondaryRange.Status);

                /**
                 * Creates a new UsableSubnetworkSecondaryRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UsableSubnetworkSecondaryRange instance
                 */
                public static create(properties?: google.container.v1.IUsableSubnetworkSecondaryRange): google.container.v1.UsableSubnetworkSecondaryRange;

                /**
                 * Encodes the specified UsableSubnetworkSecondaryRange message. Does not implicitly {@link google.container.v1.UsableSubnetworkSecondaryRange.verify|verify} messages.
                 * @param message UsableSubnetworkSecondaryRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IUsableSubnetworkSecondaryRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UsableSubnetworkSecondaryRange message, length delimited. Does not implicitly {@link google.container.v1.UsableSubnetworkSecondaryRange.verify|verify} messages.
                 * @param message UsableSubnetworkSecondaryRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IUsableSubnetworkSecondaryRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UsableSubnetworkSecondaryRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UsableSubnetworkSecondaryRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.UsableSubnetworkSecondaryRange;

                /**
                 * Decodes a UsableSubnetworkSecondaryRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UsableSubnetworkSecondaryRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.UsableSubnetworkSecondaryRange;

                /**
                 * Verifies a UsableSubnetworkSecondaryRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UsableSubnetworkSecondaryRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UsableSubnetworkSecondaryRange
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.UsableSubnetworkSecondaryRange;

                /**
                 * Creates a plain object from a UsableSubnetworkSecondaryRange message. Also converts values to other types if specified.
                 * @param message UsableSubnetworkSecondaryRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.UsableSubnetworkSecondaryRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UsableSubnetworkSecondaryRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace UsableSubnetworkSecondaryRange {

                /** Status enum. */
                enum Status {
                    UNKNOWN = 0,
                    UNUSED = 1,
                    IN_USE_SERVICE = 2,
                    IN_USE_SHAREABLE_POD = 3,
                    IN_USE_MANAGED_POD = 4
                }
            }

            /** Properties of a UsableSubnetwork. */
            interface IUsableSubnetwork {

                /** UsableSubnetwork subnetwork */
                subnetwork?: (string|null);

                /** UsableSubnetwork network */
                network?: (string|null);

                /** UsableSubnetwork ipCidrRange */
                ipCidrRange?: (string|null);

                /** UsableSubnetwork secondaryIpRanges */
                secondaryIpRanges?: (google.container.v1.IUsableSubnetworkSecondaryRange[]|null);

                /** UsableSubnetwork statusMessage */
                statusMessage?: (string|null);
            }

            /** Represents a UsableSubnetwork. */
            class UsableSubnetwork implements IUsableSubnetwork {

                /**
                 * Constructs a new UsableSubnetwork.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IUsableSubnetwork);

                /** UsableSubnetwork subnetwork. */
                public subnetwork: string;

                /** UsableSubnetwork network. */
                public network: string;

                /** UsableSubnetwork ipCidrRange. */
                public ipCidrRange: string;

                /** UsableSubnetwork secondaryIpRanges. */
                public secondaryIpRanges: google.container.v1.IUsableSubnetworkSecondaryRange[];

                /** UsableSubnetwork statusMessage. */
                public statusMessage: string;

                /**
                 * Creates a new UsableSubnetwork instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UsableSubnetwork instance
                 */
                public static create(properties?: google.container.v1.IUsableSubnetwork): google.container.v1.UsableSubnetwork;

                /**
                 * Encodes the specified UsableSubnetwork message. Does not implicitly {@link google.container.v1.UsableSubnetwork.verify|verify} messages.
                 * @param message UsableSubnetwork message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IUsableSubnetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UsableSubnetwork message, length delimited. Does not implicitly {@link google.container.v1.UsableSubnetwork.verify|verify} messages.
                 * @param message UsableSubnetwork message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IUsableSubnetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UsableSubnetwork message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UsableSubnetwork
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.UsableSubnetwork;

                /**
                 * Decodes a UsableSubnetwork message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UsableSubnetwork
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.UsableSubnetwork;

                /**
                 * Verifies a UsableSubnetwork message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UsableSubnetwork message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UsableSubnetwork
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.UsableSubnetwork;

                /**
                 * Creates a plain object from a UsableSubnetwork message. Also converts values to other types if specified.
                 * @param message UsableSubnetwork
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.UsableSubnetwork, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UsableSubnetwork to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ResourceUsageExportConfig. */
            interface IResourceUsageExportConfig {

                /** ResourceUsageExportConfig bigqueryDestination */
                bigqueryDestination?: (google.container.v1.ResourceUsageExportConfig.IBigQueryDestination|null);

                /** ResourceUsageExportConfig enableNetworkEgressMetering */
                enableNetworkEgressMetering?: (boolean|null);

                /** ResourceUsageExportConfig consumptionMeteringConfig */
                consumptionMeteringConfig?: (google.container.v1.ResourceUsageExportConfig.IConsumptionMeteringConfig|null);
            }

            /** Represents a ResourceUsageExportConfig. */
            class ResourceUsageExportConfig implements IResourceUsageExportConfig {

                /**
                 * Constructs a new ResourceUsageExportConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IResourceUsageExportConfig);

                /** ResourceUsageExportConfig bigqueryDestination. */
                public bigqueryDestination?: (google.container.v1.ResourceUsageExportConfig.IBigQueryDestination|null);

                /** ResourceUsageExportConfig enableNetworkEgressMetering. */
                public enableNetworkEgressMetering: boolean;

                /** ResourceUsageExportConfig consumptionMeteringConfig. */
                public consumptionMeteringConfig?: (google.container.v1.ResourceUsageExportConfig.IConsumptionMeteringConfig|null);

                /**
                 * Creates a new ResourceUsageExportConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResourceUsageExportConfig instance
                 */
                public static create(properties?: google.container.v1.IResourceUsageExportConfig): google.container.v1.ResourceUsageExportConfig;

                /**
                 * Encodes the specified ResourceUsageExportConfig message. Does not implicitly {@link google.container.v1.ResourceUsageExportConfig.verify|verify} messages.
                 * @param message ResourceUsageExportConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IResourceUsageExportConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ResourceUsageExportConfig message, length delimited. Does not implicitly {@link google.container.v1.ResourceUsageExportConfig.verify|verify} messages.
                 * @param message ResourceUsageExportConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IResourceUsageExportConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ResourceUsageExportConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResourceUsageExportConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ResourceUsageExportConfig;

                /**
                 * Decodes a ResourceUsageExportConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResourceUsageExportConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ResourceUsageExportConfig;

                /**
                 * Verifies a ResourceUsageExportConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResourceUsageExportConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResourceUsageExportConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ResourceUsageExportConfig;

                /**
                 * Creates a plain object from a ResourceUsageExportConfig message. Also converts values to other types if specified.
                 * @param message ResourceUsageExportConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ResourceUsageExportConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResourceUsageExportConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ResourceUsageExportConfig {

                /** Properties of a BigQueryDestination. */
                interface IBigQueryDestination {

                    /** BigQueryDestination datasetId */
                    datasetId?: (string|null);
                }

                /** Represents a BigQueryDestination. */
                class BigQueryDestination implements IBigQueryDestination {

                    /**
                     * Constructs a new BigQueryDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.container.v1.ResourceUsageExportConfig.IBigQueryDestination);

                    /** BigQueryDestination datasetId. */
                    public datasetId: string;

                    /**
                     * Creates a new BigQueryDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BigQueryDestination instance
                     */
                    public static create(properties?: google.container.v1.ResourceUsageExportConfig.IBigQueryDestination): google.container.v1.ResourceUsageExportConfig.BigQueryDestination;

                    /**
                     * Encodes the specified BigQueryDestination message. Does not implicitly {@link google.container.v1.ResourceUsageExportConfig.BigQueryDestination.verify|verify} messages.
                     * @param message BigQueryDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.container.v1.ResourceUsageExportConfig.IBigQueryDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BigQueryDestination message, length delimited. Does not implicitly {@link google.container.v1.ResourceUsageExportConfig.BigQueryDestination.verify|verify} messages.
                     * @param message BigQueryDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.container.v1.ResourceUsageExportConfig.IBigQueryDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BigQueryDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BigQueryDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ResourceUsageExportConfig.BigQueryDestination;

                    /**
                     * Decodes a BigQueryDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BigQueryDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ResourceUsageExportConfig.BigQueryDestination;

                    /**
                     * Verifies a BigQueryDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BigQueryDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BigQueryDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.container.v1.ResourceUsageExportConfig.BigQueryDestination;

                    /**
                     * Creates a plain object from a BigQueryDestination message. Also converts values to other types if specified.
                     * @param message BigQueryDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.container.v1.ResourceUsageExportConfig.BigQueryDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BigQueryDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConsumptionMeteringConfig. */
                interface IConsumptionMeteringConfig {

                    /** ConsumptionMeteringConfig enabled */
                    enabled?: (boolean|null);
                }

                /** Represents a ConsumptionMeteringConfig. */
                class ConsumptionMeteringConfig implements IConsumptionMeteringConfig {

                    /**
                     * Constructs a new ConsumptionMeteringConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.container.v1.ResourceUsageExportConfig.IConsumptionMeteringConfig);

                    /** ConsumptionMeteringConfig enabled. */
                    public enabled: boolean;

                    /**
                     * Creates a new ConsumptionMeteringConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConsumptionMeteringConfig instance
                     */
                    public static create(properties?: google.container.v1.ResourceUsageExportConfig.IConsumptionMeteringConfig): google.container.v1.ResourceUsageExportConfig.ConsumptionMeteringConfig;

                    /**
                     * Encodes the specified ConsumptionMeteringConfig message. Does not implicitly {@link google.container.v1.ResourceUsageExportConfig.ConsumptionMeteringConfig.verify|verify} messages.
                     * @param message ConsumptionMeteringConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.container.v1.ResourceUsageExportConfig.IConsumptionMeteringConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConsumptionMeteringConfig message, length delimited. Does not implicitly {@link google.container.v1.ResourceUsageExportConfig.ConsumptionMeteringConfig.verify|verify} messages.
                     * @param message ConsumptionMeteringConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.container.v1.ResourceUsageExportConfig.IConsumptionMeteringConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConsumptionMeteringConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConsumptionMeteringConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ResourceUsageExportConfig.ConsumptionMeteringConfig;

                    /**
                     * Decodes a ConsumptionMeteringConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConsumptionMeteringConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ResourceUsageExportConfig.ConsumptionMeteringConfig;

                    /**
                     * Verifies a ConsumptionMeteringConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConsumptionMeteringConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConsumptionMeteringConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.container.v1.ResourceUsageExportConfig.ConsumptionMeteringConfig;

                    /**
                     * Creates a plain object from a ConsumptionMeteringConfig message. Also converts values to other types if specified.
                     * @param message ConsumptionMeteringConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.container.v1.ResourceUsageExportConfig.ConsumptionMeteringConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConsumptionMeteringConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a VerticalPodAutoscaling. */
            interface IVerticalPodAutoscaling {

                /** VerticalPodAutoscaling enabled */
                enabled?: (boolean|null);
            }

            /** Represents a VerticalPodAutoscaling. */
            class VerticalPodAutoscaling implements IVerticalPodAutoscaling {

                /**
                 * Constructs a new VerticalPodAutoscaling.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IVerticalPodAutoscaling);

                /** VerticalPodAutoscaling enabled. */
                public enabled: boolean;

                /**
                 * Creates a new VerticalPodAutoscaling instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VerticalPodAutoscaling instance
                 */
                public static create(properties?: google.container.v1.IVerticalPodAutoscaling): google.container.v1.VerticalPodAutoscaling;

                /**
                 * Encodes the specified VerticalPodAutoscaling message. Does not implicitly {@link google.container.v1.VerticalPodAutoscaling.verify|verify} messages.
                 * @param message VerticalPodAutoscaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IVerticalPodAutoscaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VerticalPodAutoscaling message, length delimited. Does not implicitly {@link google.container.v1.VerticalPodAutoscaling.verify|verify} messages.
                 * @param message VerticalPodAutoscaling message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IVerticalPodAutoscaling, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VerticalPodAutoscaling message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VerticalPodAutoscaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.VerticalPodAutoscaling;

                /**
                 * Decodes a VerticalPodAutoscaling message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VerticalPodAutoscaling
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.VerticalPodAutoscaling;

                /**
                 * Verifies a VerticalPodAutoscaling message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VerticalPodAutoscaling message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VerticalPodAutoscaling
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.VerticalPodAutoscaling;

                /**
                 * Creates a plain object from a VerticalPodAutoscaling message. Also converts values to other types if specified.
                 * @param message VerticalPodAutoscaling
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.VerticalPodAutoscaling, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VerticalPodAutoscaling to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DefaultSnatStatus. */
            interface IDefaultSnatStatus {

                /** DefaultSnatStatus disabled */
                disabled?: (boolean|null);
            }

            /** Represents a DefaultSnatStatus. */
            class DefaultSnatStatus implements IDefaultSnatStatus {

                /**
                 * Constructs a new DefaultSnatStatus.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IDefaultSnatStatus);

                /** DefaultSnatStatus disabled. */
                public disabled: boolean;

                /**
                 * Creates a new DefaultSnatStatus instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DefaultSnatStatus instance
                 */
                public static create(properties?: google.container.v1.IDefaultSnatStatus): google.container.v1.DefaultSnatStatus;

                /**
                 * Encodes the specified DefaultSnatStatus message. Does not implicitly {@link google.container.v1.DefaultSnatStatus.verify|verify} messages.
                 * @param message DefaultSnatStatus message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IDefaultSnatStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DefaultSnatStatus message, length delimited. Does not implicitly {@link google.container.v1.DefaultSnatStatus.verify|verify} messages.
                 * @param message DefaultSnatStatus message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IDefaultSnatStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DefaultSnatStatus message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DefaultSnatStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.DefaultSnatStatus;

                /**
                 * Decodes a DefaultSnatStatus message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DefaultSnatStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.DefaultSnatStatus;

                /**
                 * Verifies a DefaultSnatStatus message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DefaultSnatStatus message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DefaultSnatStatus
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.DefaultSnatStatus;

                /**
                 * Creates a plain object from a DefaultSnatStatus message. Also converts values to other types if specified.
                 * @param message DefaultSnatStatus
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.DefaultSnatStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DefaultSnatStatus to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ShieldedNodes. */
            interface IShieldedNodes {

                /** ShieldedNodes enabled */
                enabled?: (boolean|null);
            }

            /** Represents a ShieldedNodes. */
            class ShieldedNodes implements IShieldedNodes {

                /**
                 * Constructs a new ShieldedNodes.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.container.v1.IShieldedNodes);

                /** ShieldedNodes enabled. */
                public enabled: boolean;

                /**
                 * Creates a new ShieldedNodes instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ShieldedNodes instance
                 */
                public static create(properties?: google.container.v1.IShieldedNodes): google.container.v1.ShieldedNodes;

                /**
                 * Encodes the specified ShieldedNodes message. Does not implicitly {@link google.container.v1.ShieldedNodes.verify|verify} messages.
                 * @param message ShieldedNodes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.container.v1.IShieldedNodes, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ShieldedNodes message, length delimited. Does not implicitly {@link google.container.v1.ShieldedNodes.verify|verify} messages.
                 * @param message ShieldedNodes message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.container.v1.IShieldedNodes, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ShieldedNodes message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ShieldedNodes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.container.v1.ShieldedNodes;

                /**
                 * Decodes a ShieldedNodes message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ShieldedNodes
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.container.v1.ShieldedNodes;

                /**
                 * Verifies a ShieldedNodes message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ShieldedNodes message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ShieldedNodes
                 */
                public static fromObject(object: { [k: string]: any }): google.container.v1.ShieldedNodes;

                /**
                 * Creates a plain object from a ShieldedNodes message. Also converts values to other types if specified.
                 * @param message ShieldedNodes
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.container.v1.ShieldedNodes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ShieldedNodes to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
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
}
