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

        /** Namespace vmwareengine. */
        namespace vmwareengine {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a VmwareEngine */
                class VmwareEngine extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new VmwareEngine service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new VmwareEngine service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): VmwareEngine;

                    /**
                     * Calls ListPrivateClouds.
                     * @param request ListPrivateCloudsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPrivateCloudsResponse
                     */
                    public listPrivateClouds(request: google.cloud.vmwareengine.v1.IListPrivateCloudsRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.ListPrivateCloudsCallback): void;

                    /**
                     * Calls ListPrivateClouds.
                     * @param request ListPrivateCloudsRequest message or plain object
                     * @returns Promise
                     */
                    public listPrivateClouds(request: google.cloud.vmwareengine.v1.IListPrivateCloudsRequest): Promise<google.cloud.vmwareengine.v1.ListPrivateCloudsResponse>;

                    /**
                     * Calls GetPrivateCloud.
                     * @param request GetPrivateCloudRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PrivateCloud
                     */
                    public getPrivateCloud(request: google.cloud.vmwareengine.v1.IGetPrivateCloudRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.GetPrivateCloudCallback): void;

                    /**
                     * Calls GetPrivateCloud.
                     * @param request GetPrivateCloudRequest message or plain object
                     * @returns Promise
                     */
                    public getPrivateCloud(request: google.cloud.vmwareengine.v1.IGetPrivateCloudRequest): Promise<google.cloud.vmwareengine.v1.PrivateCloud>;

                    /**
                     * Calls CreatePrivateCloud.
                     * @param request CreatePrivateCloudRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createPrivateCloud(request: google.cloud.vmwareengine.v1.ICreatePrivateCloudRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.CreatePrivateCloudCallback): void;

                    /**
                     * Calls CreatePrivateCloud.
                     * @param request CreatePrivateCloudRequest message or plain object
                     * @returns Promise
                     */
                    public createPrivateCloud(request: google.cloud.vmwareengine.v1.ICreatePrivateCloudRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdatePrivateCloud.
                     * @param request UpdatePrivateCloudRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updatePrivateCloud(request: google.cloud.vmwareengine.v1.IUpdatePrivateCloudRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.UpdatePrivateCloudCallback): void;

                    /**
                     * Calls UpdatePrivateCloud.
                     * @param request UpdatePrivateCloudRequest message or plain object
                     * @returns Promise
                     */
                    public updatePrivateCloud(request: google.cloud.vmwareengine.v1.IUpdatePrivateCloudRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeletePrivateCloud.
                     * @param request DeletePrivateCloudRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deletePrivateCloud(request: google.cloud.vmwareengine.v1.IDeletePrivateCloudRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.DeletePrivateCloudCallback): void;

                    /**
                     * Calls DeletePrivateCloud.
                     * @param request DeletePrivateCloudRequest message or plain object
                     * @returns Promise
                     */
                    public deletePrivateCloud(request: google.cloud.vmwareengine.v1.IDeletePrivateCloudRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UndeletePrivateCloud.
                     * @param request UndeletePrivateCloudRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public undeletePrivateCloud(request: google.cloud.vmwareengine.v1.IUndeletePrivateCloudRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.UndeletePrivateCloudCallback): void;

                    /**
                     * Calls UndeletePrivateCloud.
                     * @param request UndeletePrivateCloudRequest message or plain object
                     * @returns Promise
                     */
                    public undeletePrivateCloud(request: google.cloud.vmwareengine.v1.IUndeletePrivateCloudRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListClusters.
                     * @param request ListClustersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListClustersResponse
                     */
                    public listClusters(request: google.cloud.vmwareengine.v1.IListClustersRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.ListClustersCallback): void;

                    /**
                     * Calls ListClusters.
                     * @param request ListClustersRequest message or plain object
                     * @returns Promise
                     */
                    public listClusters(request: google.cloud.vmwareengine.v1.IListClustersRequest): Promise<google.cloud.vmwareengine.v1.ListClustersResponse>;

                    /**
                     * Calls GetCluster.
                     * @param request GetClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Cluster
                     */
                    public getCluster(request: google.cloud.vmwareengine.v1.IGetClusterRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.GetClusterCallback): void;

                    /**
                     * Calls GetCluster.
                     * @param request GetClusterRequest message or plain object
                     * @returns Promise
                     */
                    public getCluster(request: google.cloud.vmwareengine.v1.IGetClusterRequest): Promise<google.cloud.vmwareengine.v1.Cluster>;

                    /**
                     * Calls CreateCluster.
                     * @param request CreateClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createCluster(request: google.cloud.vmwareengine.v1.ICreateClusterRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.CreateClusterCallback): void;

                    /**
                     * Calls CreateCluster.
                     * @param request CreateClusterRequest message or plain object
                     * @returns Promise
                     */
                    public createCluster(request: google.cloud.vmwareengine.v1.ICreateClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateCluster.
                     * @param request UpdateClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateCluster(request: google.cloud.vmwareengine.v1.IUpdateClusterRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.UpdateClusterCallback): void;

                    /**
                     * Calls UpdateCluster.
                     * @param request UpdateClusterRequest message or plain object
                     * @returns Promise
                     */
                    public updateCluster(request: google.cloud.vmwareengine.v1.IUpdateClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteCluster.
                     * @param request DeleteClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteCluster(request: google.cloud.vmwareengine.v1.IDeleteClusterRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.DeleteClusterCallback): void;

                    /**
                     * Calls DeleteCluster.
                     * @param request DeleteClusterRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCluster(request: google.cloud.vmwareengine.v1.IDeleteClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListSubnets.
                     * @param request ListSubnetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSubnetsResponse
                     */
                    public listSubnets(request: google.cloud.vmwareengine.v1.IListSubnetsRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.ListSubnetsCallback): void;

                    /**
                     * Calls ListSubnets.
                     * @param request ListSubnetsRequest message or plain object
                     * @returns Promise
                     */
                    public listSubnets(request: google.cloud.vmwareengine.v1.IListSubnetsRequest): Promise<google.cloud.vmwareengine.v1.ListSubnetsResponse>;

                    /**
                     * Calls ListNodeTypes.
                     * @param request ListNodeTypesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListNodeTypesResponse
                     */
                    public listNodeTypes(request: google.cloud.vmwareengine.v1.IListNodeTypesRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.ListNodeTypesCallback): void;

                    /**
                     * Calls ListNodeTypes.
                     * @param request ListNodeTypesRequest message or plain object
                     * @returns Promise
                     */
                    public listNodeTypes(request: google.cloud.vmwareengine.v1.IListNodeTypesRequest): Promise<google.cloud.vmwareengine.v1.ListNodeTypesResponse>;

                    /**
                     * Calls GetNodeType.
                     * @param request GetNodeTypeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and NodeType
                     */
                    public getNodeType(request: google.cloud.vmwareengine.v1.IGetNodeTypeRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.GetNodeTypeCallback): void;

                    /**
                     * Calls GetNodeType.
                     * @param request GetNodeTypeRequest message or plain object
                     * @returns Promise
                     */
                    public getNodeType(request: google.cloud.vmwareengine.v1.IGetNodeTypeRequest): Promise<google.cloud.vmwareengine.v1.NodeType>;

                    /**
                     * Calls ShowNsxCredentials.
                     * @param request ShowNsxCredentialsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Credentials
                     */
                    public showNsxCredentials(request: google.cloud.vmwareengine.v1.IShowNsxCredentialsRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.ShowNsxCredentialsCallback): void;

                    /**
                     * Calls ShowNsxCredentials.
                     * @param request ShowNsxCredentialsRequest message or plain object
                     * @returns Promise
                     */
                    public showNsxCredentials(request: google.cloud.vmwareengine.v1.IShowNsxCredentialsRequest): Promise<google.cloud.vmwareengine.v1.Credentials>;

                    /**
                     * Calls ShowVcenterCredentials.
                     * @param request ShowVcenterCredentialsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Credentials
                     */
                    public showVcenterCredentials(request: google.cloud.vmwareengine.v1.IShowVcenterCredentialsRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.ShowVcenterCredentialsCallback): void;

                    /**
                     * Calls ShowVcenterCredentials.
                     * @param request ShowVcenterCredentialsRequest message or plain object
                     * @returns Promise
                     */
                    public showVcenterCredentials(request: google.cloud.vmwareengine.v1.IShowVcenterCredentialsRequest): Promise<google.cloud.vmwareengine.v1.Credentials>;

                    /**
                     * Calls ResetNsxCredentials.
                     * @param request ResetNsxCredentialsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public resetNsxCredentials(request: google.cloud.vmwareengine.v1.IResetNsxCredentialsRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.ResetNsxCredentialsCallback): void;

                    /**
                     * Calls ResetNsxCredentials.
                     * @param request ResetNsxCredentialsRequest message or plain object
                     * @returns Promise
                     */
                    public resetNsxCredentials(request: google.cloud.vmwareengine.v1.IResetNsxCredentialsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ResetVcenterCredentials.
                     * @param request ResetVcenterCredentialsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public resetVcenterCredentials(request: google.cloud.vmwareengine.v1.IResetVcenterCredentialsRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.ResetVcenterCredentialsCallback): void;

                    /**
                     * Calls ResetVcenterCredentials.
                     * @param request ResetVcenterCredentialsRequest message or plain object
                     * @returns Promise
                     */
                    public resetVcenterCredentials(request: google.cloud.vmwareengine.v1.IResetVcenterCredentialsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateHcxActivationKey.
                     * @param request CreateHcxActivationKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createHcxActivationKey(request: google.cloud.vmwareengine.v1.ICreateHcxActivationKeyRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.CreateHcxActivationKeyCallback): void;

                    /**
                     * Calls CreateHcxActivationKey.
                     * @param request CreateHcxActivationKeyRequest message or plain object
                     * @returns Promise
                     */
                    public createHcxActivationKey(request: google.cloud.vmwareengine.v1.ICreateHcxActivationKeyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListHcxActivationKeys.
                     * @param request ListHcxActivationKeysRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListHcxActivationKeysResponse
                     */
                    public listHcxActivationKeys(request: google.cloud.vmwareengine.v1.IListHcxActivationKeysRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.ListHcxActivationKeysCallback): void;

                    /**
                     * Calls ListHcxActivationKeys.
                     * @param request ListHcxActivationKeysRequest message or plain object
                     * @returns Promise
                     */
                    public listHcxActivationKeys(request: google.cloud.vmwareengine.v1.IListHcxActivationKeysRequest): Promise<google.cloud.vmwareengine.v1.ListHcxActivationKeysResponse>;

                    /**
                     * Calls GetHcxActivationKey.
                     * @param request GetHcxActivationKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and HcxActivationKey
                     */
                    public getHcxActivationKey(request: google.cloud.vmwareengine.v1.IGetHcxActivationKeyRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.GetHcxActivationKeyCallback): void;

                    /**
                     * Calls GetHcxActivationKey.
                     * @param request GetHcxActivationKeyRequest message or plain object
                     * @returns Promise
                     */
                    public getHcxActivationKey(request: google.cloud.vmwareengine.v1.IGetHcxActivationKeyRequest): Promise<google.cloud.vmwareengine.v1.HcxActivationKey>;

                    /**
                     * Calls GetNetworkPolicy.
                     * @param request GetNetworkPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and NetworkPolicy
                     */
                    public getNetworkPolicy(request: google.cloud.vmwareengine.v1.IGetNetworkPolicyRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.GetNetworkPolicyCallback): void;

                    /**
                     * Calls GetNetworkPolicy.
                     * @param request GetNetworkPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getNetworkPolicy(request: google.cloud.vmwareengine.v1.IGetNetworkPolicyRequest): Promise<google.cloud.vmwareengine.v1.NetworkPolicy>;

                    /**
                     * Calls ListNetworkPolicies.
                     * @param request ListNetworkPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListNetworkPoliciesResponse
                     */
                    public listNetworkPolicies(request: google.cloud.vmwareengine.v1.IListNetworkPoliciesRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.ListNetworkPoliciesCallback): void;

                    /**
                     * Calls ListNetworkPolicies.
                     * @param request ListNetworkPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listNetworkPolicies(request: google.cloud.vmwareengine.v1.IListNetworkPoliciesRequest): Promise<google.cloud.vmwareengine.v1.ListNetworkPoliciesResponse>;

                    /**
                     * Calls CreateNetworkPolicy.
                     * @param request CreateNetworkPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createNetworkPolicy(request: google.cloud.vmwareengine.v1.ICreateNetworkPolicyRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.CreateNetworkPolicyCallback): void;

                    /**
                     * Calls CreateNetworkPolicy.
                     * @param request CreateNetworkPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createNetworkPolicy(request: google.cloud.vmwareengine.v1.ICreateNetworkPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateNetworkPolicy.
                     * @param request UpdateNetworkPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateNetworkPolicy(request: google.cloud.vmwareengine.v1.IUpdateNetworkPolicyRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.UpdateNetworkPolicyCallback): void;

                    /**
                     * Calls UpdateNetworkPolicy.
                     * @param request UpdateNetworkPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateNetworkPolicy(request: google.cloud.vmwareengine.v1.IUpdateNetworkPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteNetworkPolicy.
                     * @param request DeleteNetworkPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteNetworkPolicy(request: google.cloud.vmwareengine.v1.IDeleteNetworkPolicyRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.DeleteNetworkPolicyCallback): void;

                    /**
                     * Calls DeleteNetworkPolicy.
                     * @param request DeleteNetworkPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteNetworkPolicy(request: google.cloud.vmwareengine.v1.IDeleteNetworkPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateVmwareEngineNetwork.
                     * @param request CreateVmwareEngineNetworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createVmwareEngineNetwork(request: google.cloud.vmwareengine.v1.ICreateVmwareEngineNetworkRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.CreateVmwareEngineNetworkCallback): void;

                    /**
                     * Calls CreateVmwareEngineNetwork.
                     * @param request CreateVmwareEngineNetworkRequest message or plain object
                     * @returns Promise
                     */
                    public createVmwareEngineNetwork(request: google.cloud.vmwareengine.v1.ICreateVmwareEngineNetworkRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateVmwareEngineNetwork.
                     * @param request UpdateVmwareEngineNetworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateVmwareEngineNetwork(request: google.cloud.vmwareengine.v1.IUpdateVmwareEngineNetworkRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.UpdateVmwareEngineNetworkCallback): void;

                    /**
                     * Calls UpdateVmwareEngineNetwork.
                     * @param request UpdateVmwareEngineNetworkRequest message or plain object
                     * @returns Promise
                     */
                    public updateVmwareEngineNetwork(request: google.cloud.vmwareengine.v1.IUpdateVmwareEngineNetworkRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteVmwareEngineNetwork.
                     * @param request DeleteVmwareEngineNetworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteVmwareEngineNetwork(request: google.cloud.vmwareengine.v1.IDeleteVmwareEngineNetworkRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.DeleteVmwareEngineNetworkCallback): void;

                    /**
                     * Calls DeleteVmwareEngineNetwork.
                     * @param request DeleteVmwareEngineNetworkRequest message or plain object
                     * @returns Promise
                     */
                    public deleteVmwareEngineNetwork(request: google.cloud.vmwareengine.v1.IDeleteVmwareEngineNetworkRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetVmwareEngineNetwork.
                     * @param request GetVmwareEngineNetworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and VmwareEngineNetwork
                     */
                    public getVmwareEngineNetwork(request: google.cloud.vmwareengine.v1.IGetVmwareEngineNetworkRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.GetVmwareEngineNetworkCallback): void;

                    /**
                     * Calls GetVmwareEngineNetwork.
                     * @param request GetVmwareEngineNetworkRequest message or plain object
                     * @returns Promise
                     */
                    public getVmwareEngineNetwork(request: google.cloud.vmwareengine.v1.IGetVmwareEngineNetworkRequest): Promise<google.cloud.vmwareengine.v1.VmwareEngineNetwork>;

                    /**
                     * Calls ListVmwareEngineNetworks.
                     * @param request ListVmwareEngineNetworksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListVmwareEngineNetworksResponse
                     */
                    public listVmwareEngineNetworks(request: google.cloud.vmwareengine.v1.IListVmwareEngineNetworksRequest, callback: google.cloud.vmwareengine.v1.VmwareEngine.ListVmwareEngineNetworksCallback): void;

                    /**
                     * Calls ListVmwareEngineNetworks.
                     * @param request ListVmwareEngineNetworksRequest message or plain object
                     * @returns Promise
                     */
                    public listVmwareEngineNetworks(request: google.cloud.vmwareengine.v1.IListVmwareEngineNetworksRequest): Promise<google.cloud.vmwareengine.v1.ListVmwareEngineNetworksResponse>;
                }

                namespace VmwareEngine {

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|listPrivateClouds}.
                     * @param error Error, if any
                     * @param [response] ListPrivateCloudsResponse
                     */
                    type ListPrivateCloudsCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.ListPrivateCloudsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|getPrivateCloud}.
                     * @param error Error, if any
                     * @param [response] PrivateCloud
                     */
                    type GetPrivateCloudCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.PrivateCloud) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|createPrivateCloud}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreatePrivateCloudCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|updatePrivateCloud}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdatePrivateCloudCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|deletePrivateCloud}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeletePrivateCloudCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|undeletePrivateCloud}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UndeletePrivateCloudCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|listClusters}.
                     * @param error Error, if any
                     * @param [response] ListClustersResponse
                     */
                    type ListClustersCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.ListClustersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|getCluster}.
                     * @param error Error, if any
                     * @param [response] Cluster
                     */
                    type GetClusterCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.Cluster) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|createCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|updateCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|deleteCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|listSubnets}.
                     * @param error Error, if any
                     * @param [response] ListSubnetsResponse
                     */
                    type ListSubnetsCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.ListSubnetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|listNodeTypes}.
                     * @param error Error, if any
                     * @param [response] ListNodeTypesResponse
                     */
                    type ListNodeTypesCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.ListNodeTypesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|getNodeType}.
                     * @param error Error, if any
                     * @param [response] NodeType
                     */
                    type GetNodeTypeCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.NodeType) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|showNsxCredentials}.
                     * @param error Error, if any
                     * @param [response] Credentials
                     */
                    type ShowNsxCredentialsCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.Credentials) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|showVcenterCredentials}.
                     * @param error Error, if any
                     * @param [response] Credentials
                     */
                    type ShowVcenterCredentialsCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.Credentials) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|resetNsxCredentials}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ResetNsxCredentialsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|resetVcenterCredentials}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ResetVcenterCredentialsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|createHcxActivationKey}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateHcxActivationKeyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|listHcxActivationKeys}.
                     * @param error Error, if any
                     * @param [response] ListHcxActivationKeysResponse
                     */
                    type ListHcxActivationKeysCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.ListHcxActivationKeysResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|getHcxActivationKey}.
                     * @param error Error, if any
                     * @param [response] HcxActivationKey
                     */
                    type GetHcxActivationKeyCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.HcxActivationKey) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|getNetworkPolicy}.
                     * @param error Error, if any
                     * @param [response] NetworkPolicy
                     */
                    type GetNetworkPolicyCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.NetworkPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|listNetworkPolicies}.
                     * @param error Error, if any
                     * @param [response] ListNetworkPoliciesResponse
                     */
                    type ListNetworkPoliciesCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.ListNetworkPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|createNetworkPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateNetworkPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|updateNetworkPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateNetworkPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|deleteNetworkPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteNetworkPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|createVmwareEngineNetwork}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateVmwareEngineNetworkCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|updateVmwareEngineNetwork}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateVmwareEngineNetworkCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|deleteVmwareEngineNetwork}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteVmwareEngineNetworkCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|getVmwareEngineNetwork}.
                     * @param error Error, if any
                     * @param [response] VmwareEngineNetwork
                     */
                    type GetVmwareEngineNetworkCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.VmwareEngineNetwork) => void;

                    /**
                     * Callback as used by {@link google.cloud.vmwareengine.v1.VmwareEngine|listVmwareEngineNetworks}.
                     * @param error Error, if any
                     * @param [response] ListVmwareEngineNetworksResponse
                     */
                    type ListVmwareEngineNetworksCallback = (error: (Error|null), response?: google.cloud.vmwareengine.v1.ListVmwareEngineNetworksResponse) => void;
                }

                /** Properties of a NetworkConfig. */
                interface INetworkConfig {

                    /** NetworkConfig managementCidr */
                    managementCidr?: (string|null);

                    /** NetworkConfig vmwareEngineNetwork */
                    vmwareEngineNetwork?: (string|null);

                    /** NetworkConfig vmwareEngineNetworkCanonical */
                    vmwareEngineNetworkCanonical?: (string|null);

                    /** NetworkConfig managementIpAddressLayoutVersion */
                    managementIpAddressLayoutVersion?: (number|null);
                }

                /** Represents a NetworkConfig. */
                class NetworkConfig implements INetworkConfig {

                    /**
                     * Constructs a new NetworkConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.INetworkConfig);

                    /** NetworkConfig managementCidr. */
                    public managementCidr: string;

                    /** NetworkConfig vmwareEngineNetwork. */
                    public vmwareEngineNetwork: string;

                    /** NetworkConfig vmwareEngineNetworkCanonical. */
                    public vmwareEngineNetworkCanonical: string;

                    /** NetworkConfig managementIpAddressLayoutVersion. */
                    public managementIpAddressLayoutVersion: number;

                    /**
                     * Creates a new NetworkConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkConfig instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.INetworkConfig): google.cloud.vmwareengine.v1.NetworkConfig;

                    /**
                     * Encodes the specified NetworkConfig message. Does not implicitly {@link google.cloud.vmwareengine.v1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.NetworkConfig;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.NetworkConfig;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.NetworkConfig;

                    /**
                     * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                     * @param message NetworkConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a NodeTypeConfig. */
                interface INodeTypeConfig {

                    /** NodeTypeConfig nodeCount */
                    nodeCount?: (number|null);

                    /** NodeTypeConfig customCoreCount */
                    customCoreCount?: (number|null);
                }

                /** Represents a NodeTypeConfig. */
                class NodeTypeConfig implements INodeTypeConfig {

                    /**
                     * Constructs a new NodeTypeConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.INodeTypeConfig);

                    /** NodeTypeConfig nodeCount. */
                    public nodeCount: number;

                    /** NodeTypeConfig customCoreCount. */
                    public customCoreCount: number;

                    /**
                     * Creates a new NodeTypeConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NodeTypeConfig instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.INodeTypeConfig): google.cloud.vmwareengine.v1.NodeTypeConfig;

                    /**
                     * Encodes the specified NodeTypeConfig message. Does not implicitly {@link google.cloud.vmwareengine.v1.NodeTypeConfig.verify|verify} messages.
                     * @param message NodeTypeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.INodeTypeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NodeTypeConfig message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.NodeTypeConfig.verify|verify} messages.
                     * @param message NodeTypeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.INodeTypeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NodeTypeConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NodeTypeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.NodeTypeConfig;

                    /**
                     * Decodes a NodeTypeConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NodeTypeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.NodeTypeConfig;

                    /**
                     * Verifies a NodeTypeConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NodeTypeConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NodeTypeConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.NodeTypeConfig;

                    /**
                     * Creates a plain object from a NodeTypeConfig message. Also converts values to other types if specified.
                     * @param message NodeTypeConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.NodeTypeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NodeTypeConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NodeTypeConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PrivateCloud. */
                interface IPrivateCloud {

                    /** PrivateCloud name */
                    name?: (string|null);

                    /** PrivateCloud createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateCloud updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateCloud deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateCloud expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateCloud state */
                    state?: (google.cloud.vmwareengine.v1.PrivateCloud.State|keyof typeof google.cloud.vmwareengine.v1.PrivateCloud.State|null);

                    /** PrivateCloud networkConfig */
                    networkConfig?: (google.cloud.vmwareengine.v1.INetworkConfig|null);

                    /** PrivateCloud managementCluster */
                    managementCluster?: (google.cloud.vmwareengine.v1.PrivateCloud.IManagementCluster|null);

                    /** PrivateCloud description */
                    description?: (string|null);

                    /** PrivateCloud hcx */
                    hcx?: (google.cloud.vmwareengine.v1.IHcx|null);

                    /** PrivateCloud nsx */
                    nsx?: (google.cloud.vmwareengine.v1.INsx|null);

                    /** PrivateCloud vcenter */
                    vcenter?: (google.cloud.vmwareengine.v1.IVcenter|null);

                    /** PrivateCloud uid */
                    uid?: (string|null);
                }

                /** Represents a PrivateCloud. */
                class PrivateCloud implements IPrivateCloud {

                    /**
                     * Constructs a new PrivateCloud.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IPrivateCloud);

                    /** PrivateCloud name. */
                    public name: string;

                    /** PrivateCloud createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateCloud updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateCloud deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateCloud expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** PrivateCloud state. */
                    public state: (google.cloud.vmwareengine.v1.PrivateCloud.State|keyof typeof google.cloud.vmwareengine.v1.PrivateCloud.State);

                    /** PrivateCloud networkConfig. */
                    public networkConfig?: (google.cloud.vmwareengine.v1.INetworkConfig|null);

                    /** PrivateCloud managementCluster. */
                    public managementCluster?: (google.cloud.vmwareengine.v1.PrivateCloud.IManagementCluster|null);

                    /** PrivateCloud description. */
                    public description: string;

                    /** PrivateCloud hcx. */
                    public hcx?: (google.cloud.vmwareengine.v1.IHcx|null);

                    /** PrivateCloud nsx. */
                    public nsx?: (google.cloud.vmwareengine.v1.INsx|null);

                    /** PrivateCloud vcenter. */
                    public vcenter?: (google.cloud.vmwareengine.v1.IVcenter|null);

                    /** PrivateCloud uid. */
                    public uid: string;

                    /**
                     * Creates a new PrivateCloud instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PrivateCloud instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IPrivateCloud): google.cloud.vmwareengine.v1.PrivateCloud;

                    /**
                     * Encodes the specified PrivateCloud message. Does not implicitly {@link google.cloud.vmwareengine.v1.PrivateCloud.verify|verify} messages.
                     * @param message PrivateCloud message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IPrivateCloud, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PrivateCloud message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.PrivateCloud.verify|verify} messages.
                     * @param message PrivateCloud message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IPrivateCloud, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PrivateCloud message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PrivateCloud
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.PrivateCloud;

                    /**
                     * Decodes a PrivateCloud message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PrivateCloud
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.PrivateCloud;

                    /**
                     * Verifies a PrivateCloud message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PrivateCloud message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PrivateCloud
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.PrivateCloud;

                    /**
                     * Creates a plain object from a PrivateCloud message. Also converts values to other types if specified.
                     * @param message PrivateCloud
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.PrivateCloud, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PrivateCloud to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PrivateCloud
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PrivateCloud {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        CREATING = 2,
                        UPDATING = 3,
                        FAILED = 5,
                        DELETED = 6,
                        PURGING = 7
                    }

                    /** Properties of a ManagementCluster. */
                    interface IManagementCluster {

                        /** ManagementCluster clusterId */
                        clusterId?: (string|null);

                        /** ManagementCluster nodeTypeConfigs */
                        nodeTypeConfigs?: ({ [k: string]: google.cloud.vmwareengine.v1.INodeTypeConfig }|null);
                    }

                    /** Represents a ManagementCluster. */
                    class ManagementCluster implements IManagementCluster {

                        /**
                         * Constructs a new ManagementCluster.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vmwareengine.v1.PrivateCloud.IManagementCluster);

                        /** ManagementCluster clusterId. */
                        public clusterId: string;

                        /** ManagementCluster nodeTypeConfigs. */
                        public nodeTypeConfigs: { [k: string]: google.cloud.vmwareengine.v1.INodeTypeConfig };

                        /**
                         * Creates a new ManagementCluster instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ManagementCluster instance
                         */
                        public static create(properties?: google.cloud.vmwareengine.v1.PrivateCloud.IManagementCluster): google.cloud.vmwareengine.v1.PrivateCloud.ManagementCluster;

                        /**
                         * Encodes the specified ManagementCluster message. Does not implicitly {@link google.cloud.vmwareengine.v1.PrivateCloud.ManagementCluster.verify|verify} messages.
                         * @param message ManagementCluster message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vmwareengine.v1.PrivateCloud.IManagementCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ManagementCluster message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.PrivateCloud.ManagementCluster.verify|verify} messages.
                         * @param message ManagementCluster message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vmwareengine.v1.PrivateCloud.IManagementCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ManagementCluster message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ManagementCluster
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.PrivateCloud.ManagementCluster;

                        /**
                         * Decodes a ManagementCluster message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ManagementCluster
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.PrivateCloud.ManagementCluster;

                        /**
                         * Verifies a ManagementCluster message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ManagementCluster message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ManagementCluster
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.PrivateCloud.ManagementCluster;

                        /**
                         * Creates a plain object from a ManagementCluster message. Also converts values to other types if specified.
                         * @param message ManagementCluster
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vmwareengine.v1.PrivateCloud.ManagementCluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ManagementCluster to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ManagementCluster
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a ListPrivateCloudsRequest. */
                interface IListPrivateCloudsRequest {

                    /** ListPrivateCloudsRequest parent */
                    parent?: (string|null);

                    /** ListPrivateCloudsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPrivateCloudsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPrivateCloudsRequest filter */
                    filter?: (string|null);

                    /** ListPrivateCloudsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListPrivateCloudsRequest. */
                class ListPrivateCloudsRequest implements IListPrivateCloudsRequest {

                    /**
                     * Constructs a new ListPrivateCloudsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListPrivateCloudsRequest);

                    /** ListPrivateCloudsRequest parent. */
                    public parent: string;

                    /** ListPrivateCloudsRequest pageSize. */
                    public pageSize: number;

                    /** ListPrivateCloudsRequest pageToken. */
                    public pageToken: string;

                    /** ListPrivateCloudsRequest filter. */
                    public filter: string;

                    /** ListPrivateCloudsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListPrivateCloudsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPrivateCloudsRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListPrivateCloudsRequest): google.cloud.vmwareengine.v1.ListPrivateCloudsRequest;

                    /**
                     * Encodes the specified ListPrivateCloudsRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListPrivateCloudsRequest.verify|verify} messages.
                     * @param message ListPrivateCloudsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListPrivateCloudsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPrivateCloudsRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListPrivateCloudsRequest.verify|verify} messages.
                     * @param message ListPrivateCloudsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListPrivateCloudsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPrivateCloudsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPrivateCloudsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListPrivateCloudsRequest;

                    /**
                     * Decodes a ListPrivateCloudsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPrivateCloudsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListPrivateCloudsRequest;

                    /**
                     * Verifies a ListPrivateCloudsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPrivateCloudsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPrivateCloudsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListPrivateCloudsRequest;

                    /**
                     * Creates a plain object from a ListPrivateCloudsRequest message. Also converts values to other types if specified.
                     * @param message ListPrivateCloudsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListPrivateCloudsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPrivateCloudsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPrivateCloudsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPrivateCloudsResponse. */
                interface IListPrivateCloudsResponse {

                    /** ListPrivateCloudsResponse privateClouds */
                    privateClouds?: (google.cloud.vmwareengine.v1.IPrivateCloud[]|null);

                    /** ListPrivateCloudsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListPrivateCloudsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListPrivateCloudsResponse. */
                class ListPrivateCloudsResponse implements IListPrivateCloudsResponse {

                    /**
                     * Constructs a new ListPrivateCloudsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListPrivateCloudsResponse);

                    /** ListPrivateCloudsResponse privateClouds. */
                    public privateClouds: google.cloud.vmwareengine.v1.IPrivateCloud[];

                    /** ListPrivateCloudsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListPrivateCloudsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListPrivateCloudsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPrivateCloudsResponse instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListPrivateCloudsResponse): google.cloud.vmwareengine.v1.ListPrivateCloudsResponse;

                    /**
                     * Encodes the specified ListPrivateCloudsResponse message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListPrivateCloudsResponse.verify|verify} messages.
                     * @param message ListPrivateCloudsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListPrivateCloudsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPrivateCloudsResponse message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListPrivateCloudsResponse.verify|verify} messages.
                     * @param message ListPrivateCloudsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListPrivateCloudsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPrivateCloudsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPrivateCloudsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListPrivateCloudsResponse;

                    /**
                     * Decodes a ListPrivateCloudsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPrivateCloudsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListPrivateCloudsResponse;

                    /**
                     * Verifies a ListPrivateCloudsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPrivateCloudsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPrivateCloudsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListPrivateCloudsResponse;

                    /**
                     * Creates a plain object from a ListPrivateCloudsResponse message. Also converts values to other types if specified.
                     * @param message ListPrivateCloudsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListPrivateCloudsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPrivateCloudsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPrivateCloudsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPrivateCloudRequest. */
                interface IGetPrivateCloudRequest {

                    /** GetPrivateCloudRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPrivateCloudRequest. */
                class GetPrivateCloudRequest implements IGetPrivateCloudRequest {

                    /**
                     * Constructs a new GetPrivateCloudRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IGetPrivateCloudRequest);

                    /** GetPrivateCloudRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPrivateCloudRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPrivateCloudRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IGetPrivateCloudRequest): google.cloud.vmwareengine.v1.GetPrivateCloudRequest;

                    /**
                     * Encodes the specified GetPrivateCloudRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.GetPrivateCloudRequest.verify|verify} messages.
                     * @param message GetPrivateCloudRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IGetPrivateCloudRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPrivateCloudRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.GetPrivateCloudRequest.verify|verify} messages.
                     * @param message GetPrivateCloudRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IGetPrivateCloudRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPrivateCloudRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPrivateCloudRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.GetPrivateCloudRequest;

                    /**
                     * Decodes a GetPrivateCloudRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPrivateCloudRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.GetPrivateCloudRequest;

                    /**
                     * Verifies a GetPrivateCloudRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPrivateCloudRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPrivateCloudRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.GetPrivateCloudRequest;

                    /**
                     * Creates a plain object from a GetPrivateCloudRequest message. Also converts values to other types if specified.
                     * @param message GetPrivateCloudRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.GetPrivateCloudRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPrivateCloudRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPrivateCloudRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePrivateCloudRequest. */
                interface ICreatePrivateCloudRequest {

                    /** CreatePrivateCloudRequest parent */
                    parent?: (string|null);

                    /** CreatePrivateCloudRequest privateCloudId */
                    privateCloudId?: (string|null);

                    /** CreatePrivateCloudRequest privateCloud */
                    privateCloud?: (google.cloud.vmwareengine.v1.IPrivateCloud|null);

                    /** CreatePrivateCloudRequest requestId */
                    requestId?: (string|null);

                    /** CreatePrivateCloudRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreatePrivateCloudRequest. */
                class CreatePrivateCloudRequest implements ICreatePrivateCloudRequest {

                    /**
                     * Constructs a new CreatePrivateCloudRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.ICreatePrivateCloudRequest);

                    /** CreatePrivateCloudRequest parent. */
                    public parent: string;

                    /** CreatePrivateCloudRequest privateCloudId. */
                    public privateCloudId: string;

                    /** CreatePrivateCloudRequest privateCloud. */
                    public privateCloud?: (google.cloud.vmwareengine.v1.IPrivateCloud|null);

                    /** CreatePrivateCloudRequest requestId. */
                    public requestId: string;

                    /** CreatePrivateCloudRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreatePrivateCloudRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePrivateCloudRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.ICreatePrivateCloudRequest): google.cloud.vmwareengine.v1.CreatePrivateCloudRequest;

                    /**
                     * Encodes the specified CreatePrivateCloudRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.CreatePrivateCloudRequest.verify|verify} messages.
                     * @param message CreatePrivateCloudRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.ICreatePrivateCloudRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePrivateCloudRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.CreatePrivateCloudRequest.verify|verify} messages.
                     * @param message CreatePrivateCloudRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.ICreatePrivateCloudRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePrivateCloudRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePrivateCloudRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.CreatePrivateCloudRequest;

                    /**
                     * Decodes a CreatePrivateCloudRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePrivateCloudRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.CreatePrivateCloudRequest;

                    /**
                     * Verifies a CreatePrivateCloudRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePrivateCloudRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePrivateCloudRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.CreatePrivateCloudRequest;

                    /**
                     * Creates a plain object from a CreatePrivateCloudRequest message. Also converts values to other types if specified.
                     * @param message CreatePrivateCloudRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.CreatePrivateCloudRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePrivateCloudRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePrivateCloudRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePrivateCloudRequest. */
                interface IUpdatePrivateCloudRequest {

                    /** UpdatePrivateCloudRequest privateCloud */
                    privateCloud?: (google.cloud.vmwareengine.v1.IPrivateCloud|null);

                    /** UpdatePrivateCloudRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePrivateCloudRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdatePrivateCloudRequest. */
                class UpdatePrivateCloudRequest implements IUpdatePrivateCloudRequest {

                    /**
                     * Constructs a new UpdatePrivateCloudRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IUpdatePrivateCloudRequest);

                    /** UpdatePrivateCloudRequest privateCloud. */
                    public privateCloud?: (google.cloud.vmwareengine.v1.IPrivateCloud|null);

                    /** UpdatePrivateCloudRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePrivateCloudRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdatePrivateCloudRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePrivateCloudRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IUpdatePrivateCloudRequest): google.cloud.vmwareengine.v1.UpdatePrivateCloudRequest;

                    /**
                     * Encodes the specified UpdatePrivateCloudRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.UpdatePrivateCloudRequest.verify|verify} messages.
                     * @param message UpdatePrivateCloudRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IUpdatePrivateCloudRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePrivateCloudRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.UpdatePrivateCloudRequest.verify|verify} messages.
                     * @param message UpdatePrivateCloudRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IUpdatePrivateCloudRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePrivateCloudRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePrivateCloudRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.UpdatePrivateCloudRequest;

                    /**
                     * Decodes an UpdatePrivateCloudRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePrivateCloudRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.UpdatePrivateCloudRequest;

                    /**
                     * Verifies an UpdatePrivateCloudRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePrivateCloudRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePrivateCloudRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.UpdatePrivateCloudRequest;

                    /**
                     * Creates a plain object from an UpdatePrivateCloudRequest message. Also converts values to other types if specified.
                     * @param message UpdatePrivateCloudRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.UpdatePrivateCloudRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePrivateCloudRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePrivateCloudRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePrivateCloudRequest. */
                interface IDeletePrivateCloudRequest {

                    /** DeletePrivateCloudRequest name */
                    name?: (string|null);

                    /** DeletePrivateCloudRequest requestId */
                    requestId?: (string|null);

                    /** DeletePrivateCloudRequest force */
                    force?: (boolean|null);

                    /** DeletePrivateCloudRequest delayHours */
                    delayHours?: (number|null);
                }

                /** Represents a DeletePrivateCloudRequest. */
                class DeletePrivateCloudRequest implements IDeletePrivateCloudRequest {

                    /**
                     * Constructs a new DeletePrivateCloudRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IDeletePrivateCloudRequest);

                    /** DeletePrivateCloudRequest name. */
                    public name: string;

                    /** DeletePrivateCloudRequest requestId. */
                    public requestId: string;

                    /** DeletePrivateCloudRequest force. */
                    public force: boolean;

                    /** DeletePrivateCloudRequest delayHours. */
                    public delayHours?: (number|null);

                    /** DeletePrivateCloudRequest _delayHours. */
                    public _delayHours?: "delayHours";

                    /**
                     * Creates a new DeletePrivateCloudRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePrivateCloudRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IDeletePrivateCloudRequest): google.cloud.vmwareengine.v1.DeletePrivateCloudRequest;

                    /**
                     * Encodes the specified DeletePrivateCloudRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.DeletePrivateCloudRequest.verify|verify} messages.
                     * @param message DeletePrivateCloudRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IDeletePrivateCloudRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePrivateCloudRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.DeletePrivateCloudRequest.verify|verify} messages.
                     * @param message DeletePrivateCloudRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IDeletePrivateCloudRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePrivateCloudRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePrivateCloudRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.DeletePrivateCloudRequest;

                    /**
                     * Decodes a DeletePrivateCloudRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePrivateCloudRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.DeletePrivateCloudRequest;

                    /**
                     * Verifies a DeletePrivateCloudRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePrivateCloudRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePrivateCloudRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.DeletePrivateCloudRequest;

                    /**
                     * Creates a plain object from a DeletePrivateCloudRequest message. Also converts values to other types if specified.
                     * @param message DeletePrivateCloudRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.DeletePrivateCloudRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePrivateCloudRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePrivateCloudRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UndeletePrivateCloudRequest. */
                interface IUndeletePrivateCloudRequest {

                    /** UndeletePrivateCloudRequest name */
                    name?: (string|null);

                    /** UndeletePrivateCloudRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UndeletePrivateCloudRequest. */
                class UndeletePrivateCloudRequest implements IUndeletePrivateCloudRequest {

                    /**
                     * Constructs a new UndeletePrivateCloudRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IUndeletePrivateCloudRequest);

                    /** UndeletePrivateCloudRequest name. */
                    public name: string;

                    /** UndeletePrivateCloudRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UndeletePrivateCloudRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeletePrivateCloudRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IUndeletePrivateCloudRequest): google.cloud.vmwareengine.v1.UndeletePrivateCloudRequest;

                    /**
                     * Encodes the specified UndeletePrivateCloudRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.UndeletePrivateCloudRequest.verify|verify} messages.
                     * @param message UndeletePrivateCloudRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IUndeletePrivateCloudRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeletePrivateCloudRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.UndeletePrivateCloudRequest.verify|verify} messages.
                     * @param message UndeletePrivateCloudRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IUndeletePrivateCloudRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeletePrivateCloudRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeletePrivateCloudRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.UndeletePrivateCloudRequest;

                    /**
                     * Decodes an UndeletePrivateCloudRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeletePrivateCloudRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.UndeletePrivateCloudRequest;

                    /**
                     * Verifies an UndeletePrivateCloudRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeletePrivateCloudRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeletePrivateCloudRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.UndeletePrivateCloudRequest;

                    /**
                     * Creates a plain object from an UndeletePrivateCloudRequest message. Also converts values to other types if specified.
                     * @param message UndeletePrivateCloudRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.UndeletePrivateCloudRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeletePrivateCloudRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UndeletePrivateCloudRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Cluster. */
                interface ICluster {

                    /** Cluster name */
                    name?: (string|null);

                    /** Cluster createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Cluster updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Cluster state */
                    state?: (google.cloud.vmwareengine.v1.Cluster.State|keyof typeof google.cloud.vmwareengine.v1.Cluster.State|null);

                    /** Cluster management */
                    management?: (boolean|null);

                    /** Cluster uid */
                    uid?: (string|null);

                    /** Cluster nodeTypeConfigs */
                    nodeTypeConfigs?: ({ [k: string]: google.cloud.vmwareengine.v1.INodeTypeConfig }|null);
                }

                /** Represents a Cluster. */
                class Cluster implements ICluster {

                    /**
                     * Constructs a new Cluster.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.ICluster);

                    /** Cluster name. */
                    public name: string;

                    /** Cluster createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Cluster updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Cluster state. */
                    public state: (google.cloud.vmwareengine.v1.Cluster.State|keyof typeof google.cloud.vmwareengine.v1.Cluster.State);

                    /** Cluster management. */
                    public management: boolean;

                    /** Cluster uid. */
                    public uid: string;

                    /** Cluster nodeTypeConfigs. */
                    public nodeTypeConfigs: { [k: string]: google.cloud.vmwareengine.v1.INodeTypeConfig };

                    /**
                     * Creates a new Cluster instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Cluster instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.ICluster): google.cloud.vmwareengine.v1.Cluster;

                    /**
                     * Encodes the specified Cluster message. Does not implicitly {@link google.cloud.vmwareengine.v1.Cluster.verify|verify} messages.
                     * @param message Cluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.ICluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Cluster message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.Cluster.verify|verify} messages.
                     * @param message Cluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.ICluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Cluster message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Cluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.Cluster;

                    /**
                     * Decodes a Cluster message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Cluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.Cluster;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.Cluster;

                    /**
                     * Creates a plain object from a Cluster message. Also converts values to other types if specified.
                     * @param message Cluster
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.Cluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Cluster to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Cluster
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Cluster {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        CREATING = 2,
                        UPDATING = 3,
                        DELETING = 4,
                        REPAIRING = 5
                    }
                }

                /** Properties of a ListClustersRequest. */
                interface IListClustersRequest {

                    /** ListClustersRequest parent */
                    parent?: (string|null);

                    /** ListClustersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListClustersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListClustersRequest filter */
                    filter?: (string|null);

                    /** ListClustersRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListClustersRequest. */
                class ListClustersRequest implements IListClustersRequest {

                    /**
                     * Constructs a new ListClustersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListClustersRequest);

                    /** ListClustersRequest parent. */
                    public parent: string;

                    /** ListClustersRequest pageSize. */
                    public pageSize: number;

                    /** ListClustersRequest pageToken. */
                    public pageToken: string;

                    /** ListClustersRequest filter. */
                    public filter: string;

                    /** ListClustersRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListClustersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClustersRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListClustersRequest): google.cloud.vmwareengine.v1.ListClustersRequest;

                    /**
                     * Encodes the specified ListClustersRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListClustersRequest.verify|verify} messages.
                     * @param message ListClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClustersRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListClustersRequest.verify|verify} messages.
                     * @param message ListClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClustersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListClustersRequest;

                    /**
                     * Decodes a ListClustersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListClustersRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListClustersRequest;

                    /**
                     * Creates a plain object from a ListClustersRequest message. Also converts values to other types if specified.
                     * @param message ListClustersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListClustersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClustersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListClustersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListClustersResponse. */
                interface IListClustersResponse {

                    /** ListClustersResponse clusters */
                    clusters?: (google.cloud.vmwareengine.v1.ICluster[]|null);

                    /** ListClustersResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListClustersResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListClustersResponse. */
                class ListClustersResponse implements IListClustersResponse {

                    /**
                     * Constructs a new ListClustersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListClustersResponse);

                    /** ListClustersResponse clusters. */
                    public clusters: google.cloud.vmwareengine.v1.ICluster[];

                    /** ListClustersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListClustersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListClustersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClustersResponse instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListClustersResponse): google.cloud.vmwareengine.v1.ListClustersResponse;

                    /**
                     * Encodes the specified ListClustersResponse message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListClustersResponse.verify|verify} messages.
                     * @param message ListClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClustersResponse message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListClustersResponse.verify|verify} messages.
                     * @param message ListClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClustersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListClustersResponse;

                    /**
                     * Decodes a ListClustersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListClustersResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListClustersResponse;

                    /**
                     * Creates a plain object from a ListClustersResponse message. Also converts values to other types if specified.
                     * @param message ListClustersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListClustersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClustersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListClustersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetClusterRequest. */
                interface IGetClusterRequest {

                    /** GetClusterRequest name */
                    name?: (string|null);
                }

                /** Represents a GetClusterRequest. */
                class GetClusterRequest implements IGetClusterRequest {

                    /**
                     * Constructs a new GetClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IGetClusterRequest);

                    /** GetClusterRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetClusterRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IGetClusterRequest): google.cloud.vmwareengine.v1.GetClusterRequest;

                    /**
                     * Encodes the specified GetClusterRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.GetClusterRequest.verify|verify} messages.
                     * @param message GetClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IGetClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetClusterRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.GetClusterRequest.verify|verify} messages.
                     * @param message GetClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IGetClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.GetClusterRequest;

                    /**
                     * Decodes a GetClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.GetClusterRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.GetClusterRequest;

                    /**
                     * Creates a plain object from a GetClusterRequest message. Also converts values to other types if specified.
                     * @param message GetClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.GetClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateClusterRequest. */
                interface ICreateClusterRequest {

                    /** CreateClusterRequest parent */
                    parent?: (string|null);

                    /** CreateClusterRequest clusterId */
                    clusterId?: (string|null);

                    /** CreateClusterRequest cluster */
                    cluster?: (google.cloud.vmwareengine.v1.ICluster|null);

                    /** CreateClusterRequest requestId */
                    requestId?: (string|null);

                    /** CreateClusterRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateClusterRequest. */
                class CreateClusterRequest implements ICreateClusterRequest {

                    /**
                     * Constructs a new CreateClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.ICreateClusterRequest);

                    /** CreateClusterRequest parent. */
                    public parent: string;

                    /** CreateClusterRequest clusterId. */
                    public clusterId: string;

                    /** CreateClusterRequest cluster. */
                    public cluster?: (google.cloud.vmwareengine.v1.ICluster|null);

                    /** CreateClusterRequest requestId. */
                    public requestId: string;

                    /** CreateClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateClusterRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.ICreateClusterRequest): google.cloud.vmwareengine.v1.CreateClusterRequest;

                    /**
                     * Encodes the specified CreateClusterRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.CreateClusterRequest.verify|verify} messages.
                     * @param message CreateClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.ICreateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateClusterRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.CreateClusterRequest.verify|verify} messages.
                     * @param message CreateClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.ICreateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.CreateClusterRequest;

                    /**
                     * Decodes a CreateClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.CreateClusterRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.CreateClusterRequest;

                    /**
                     * Creates a plain object from a CreateClusterRequest message. Also converts values to other types if specified.
                     * @param message CreateClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.CreateClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateClusterRequest. */
                interface IUpdateClusterRequest {

                    /** UpdateClusterRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateClusterRequest cluster */
                    cluster?: (google.cloud.vmwareengine.v1.ICluster|null);

                    /** UpdateClusterRequest requestId */
                    requestId?: (string|null);

                    /** UpdateClusterRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateClusterRequest. */
                class UpdateClusterRequest implements IUpdateClusterRequest {

                    /**
                     * Constructs a new UpdateClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IUpdateClusterRequest);

                    /** UpdateClusterRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateClusterRequest cluster. */
                    public cluster?: (google.cloud.vmwareengine.v1.ICluster|null);

                    /** UpdateClusterRequest requestId. */
                    public requestId: string;

                    /** UpdateClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateClusterRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IUpdateClusterRequest): google.cloud.vmwareengine.v1.UpdateClusterRequest;

                    /**
                     * Encodes the specified UpdateClusterRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.UpdateClusterRequest.verify|verify} messages.
                     * @param message UpdateClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IUpdateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateClusterRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.UpdateClusterRequest.verify|verify} messages.
                     * @param message UpdateClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IUpdateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.UpdateClusterRequest;

                    /**
                     * Decodes an UpdateClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.UpdateClusterRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.UpdateClusterRequest;

                    /**
                     * Creates a plain object from an UpdateClusterRequest message. Also converts values to other types if specified.
                     * @param message UpdateClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.UpdateClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteClusterRequest. */
                interface IDeleteClusterRequest {

                    /** DeleteClusterRequest name */
                    name?: (string|null);

                    /** DeleteClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteClusterRequest. */
                class DeleteClusterRequest implements IDeleteClusterRequest {

                    /**
                     * Constructs a new DeleteClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IDeleteClusterRequest);

                    /** DeleteClusterRequest name. */
                    public name: string;

                    /** DeleteClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteClusterRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IDeleteClusterRequest): google.cloud.vmwareengine.v1.DeleteClusterRequest;

                    /**
                     * Encodes the specified DeleteClusterRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.DeleteClusterRequest.verify|verify} messages.
                     * @param message DeleteClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IDeleteClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteClusterRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.DeleteClusterRequest.verify|verify} messages.
                     * @param message DeleteClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IDeleteClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.DeleteClusterRequest;

                    /**
                     * Decodes a DeleteClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.DeleteClusterRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.DeleteClusterRequest;

                    /**
                     * Creates a plain object from a DeleteClusterRequest message. Also converts values to other types if specified.
                     * @param message DeleteClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.DeleteClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Subnet. */
                interface ISubnet {

                    /** Subnet name */
                    name?: (string|null);

                    /** Subnet ipCidrRange */
                    ipCidrRange?: (string|null);

                    /** Subnet gatewayIp */
                    gatewayIp?: (string|null);

                    /** Subnet type */
                    type?: (string|null);

                    /** Subnet state */
                    state?: (google.cloud.vmwareengine.v1.Subnet.State|keyof typeof google.cloud.vmwareengine.v1.Subnet.State|null);
                }

                /** Represents a Subnet. */
                class Subnet implements ISubnet {

                    /**
                     * Constructs a new Subnet.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.ISubnet);

                    /** Subnet name. */
                    public name: string;

                    /** Subnet ipCidrRange. */
                    public ipCidrRange: string;

                    /** Subnet gatewayIp. */
                    public gatewayIp: string;

                    /** Subnet type. */
                    public type: string;

                    /** Subnet state. */
                    public state: (google.cloud.vmwareengine.v1.Subnet.State|keyof typeof google.cloud.vmwareengine.v1.Subnet.State);

                    /**
                     * Creates a new Subnet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Subnet instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.ISubnet): google.cloud.vmwareengine.v1.Subnet;

                    /**
                     * Encodes the specified Subnet message. Does not implicitly {@link google.cloud.vmwareengine.v1.Subnet.verify|verify} messages.
                     * @param message Subnet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.ISubnet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Subnet message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.Subnet.verify|verify} messages.
                     * @param message Subnet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.ISubnet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Subnet message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Subnet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.Subnet;

                    /**
                     * Decodes a Subnet message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Subnet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.Subnet;

                    /**
                     * Verifies a Subnet message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Subnet message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Subnet
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.Subnet;

                    /**
                     * Creates a plain object from a Subnet message. Also converts values to other types if specified.
                     * @param message Subnet
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.Subnet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Subnet to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Subnet
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Subnet {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        CREATING = 2,
                        UPDATING = 3,
                        DELETING = 4
                    }
                }

                /** Properties of a ListSubnetsRequest. */
                interface IListSubnetsRequest {

                    /** ListSubnetsRequest parent */
                    parent?: (string|null);

                    /** ListSubnetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSubnetsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListSubnetsRequest. */
                class ListSubnetsRequest implements IListSubnetsRequest {

                    /**
                     * Constructs a new ListSubnetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListSubnetsRequest);

                    /** ListSubnetsRequest parent. */
                    public parent: string;

                    /** ListSubnetsRequest pageSize. */
                    public pageSize: number;

                    /** ListSubnetsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListSubnetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSubnetsRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListSubnetsRequest): google.cloud.vmwareengine.v1.ListSubnetsRequest;

                    /**
                     * Encodes the specified ListSubnetsRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListSubnetsRequest.verify|verify} messages.
                     * @param message ListSubnetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListSubnetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSubnetsRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListSubnetsRequest.verify|verify} messages.
                     * @param message ListSubnetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListSubnetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSubnetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSubnetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListSubnetsRequest;

                    /**
                     * Decodes a ListSubnetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSubnetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListSubnetsRequest;

                    /**
                     * Verifies a ListSubnetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSubnetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSubnetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListSubnetsRequest;

                    /**
                     * Creates a plain object from a ListSubnetsRequest message. Also converts values to other types if specified.
                     * @param message ListSubnetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListSubnetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSubnetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSubnetsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSubnetsResponse. */
                interface IListSubnetsResponse {

                    /** ListSubnetsResponse subnets */
                    subnets?: (google.cloud.vmwareengine.v1.ISubnet[]|null);

                    /** ListSubnetsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListSubnetsResponse. */
                class ListSubnetsResponse implements IListSubnetsResponse {

                    /**
                     * Constructs a new ListSubnetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListSubnetsResponse);

                    /** ListSubnetsResponse subnets. */
                    public subnets: google.cloud.vmwareengine.v1.ISubnet[];

                    /** ListSubnetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListSubnetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSubnetsResponse instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListSubnetsResponse): google.cloud.vmwareengine.v1.ListSubnetsResponse;

                    /**
                     * Encodes the specified ListSubnetsResponse message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListSubnetsResponse.verify|verify} messages.
                     * @param message ListSubnetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListSubnetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSubnetsResponse message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListSubnetsResponse.verify|verify} messages.
                     * @param message ListSubnetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListSubnetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSubnetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSubnetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListSubnetsResponse;

                    /**
                     * Decodes a ListSubnetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSubnetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListSubnetsResponse;

                    /**
                     * Verifies a ListSubnetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSubnetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSubnetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListSubnetsResponse;

                    /**
                     * Creates a plain object from a ListSubnetsResponse message. Also converts values to other types if specified.
                     * @param message ListSubnetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListSubnetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSubnetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSubnetsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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
                    constructor(properties?: google.cloud.vmwareengine.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.vmwareengine.v1.IOperationMetadata): google.cloud.vmwareengine.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.vmwareengine.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a NodeType. */
                interface INodeType {

                    /** NodeType name */
                    name?: (string|null);

                    /** NodeType nodeTypeId */
                    nodeTypeId?: (string|null);

                    /** NodeType displayName */
                    displayName?: (string|null);

                    /** NodeType virtualCpuCount */
                    virtualCpuCount?: (number|null);

                    /** NodeType totalCoreCount */
                    totalCoreCount?: (number|null);

                    /** NodeType memoryGb */
                    memoryGb?: (number|null);

                    /** NodeType diskSizeGb */
                    diskSizeGb?: (number|null);

                    /** NodeType availableCustomCoreCounts */
                    availableCustomCoreCounts?: (number[]|null);
                }

                /** Represents a NodeType. */
                class NodeType implements INodeType {

                    /**
                     * Constructs a new NodeType.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.INodeType);

                    /** NodeType name. */
                    public name: string;

                    /** NodeType nodeTypeId. */
                    public nodeTypeId: string;

                    /** NodeType displayName. */
                    public displayName: string;

                    /** NodeType virtualCpuCount. */
                    public virtualCpuCount: number;

                    /** NodeType totalCoreCount. */
                    public totalCoreCount: number;

                    /** NodeType memoryGb. */
                    public memoryGb: number;

                    /** NodeType diskSizeGb. */
                    public diskSizeGb: number;

                    /** NodeType availableCustomCoreCounts. */
                    public availableCustomCoreCounts: number[];

                    /**
                     * Creates a new NodeType instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NodeType instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.INodeType): google.cloud.vmwareengine.v1.NodeType;

                    /**
                     * Encodes the specified NodeType message. Does not implicitly {@link google.cloud.vmwareengine.v1.NodeType.verify|verify} messages.
                     * @param message NodeType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.INodeType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NodeType message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.NodeType.verify|verify} messages.
                     * @param message NodeType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.INodeType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NodeType message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NodeType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.NodeType;

                    /**
                     * Decodes a NodeType message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NodeType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.NodeType;

                    /**
                     * Verifies a NodeType message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NodeType message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NodeType
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.NodeType;

                    /**
                     * Creates a plain object from a NodeType message. Also converts values to other types if specified.
                     * @param message NodeType
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.NodeType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NodeType to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NodeType
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNodeTypesRequest. */
                interface IListNodeTypesRequest {

                    /** ListNodeTypesRequest parent */
                    parent?: (string|null);

                    /** ListNodeTypesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListNodeTypesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListNodeTypesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListNodeTypesRequest. */
                class ListNodeTypesRequest implements IListNodeTypesRequest {

                    /**
                     * Constructs a new ListNodeTypesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListNodeTypesRequest);

                    /** ListNodeTypesRequest parent. */
                    public parent: string;

                    /** ListNodeTypesRequest pageSize. */
                    public pageSize: number;

                    /** ListNodeTypesRequest pageToken. */
                    public pageToken: string;

                    /** ListNodeTypesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListNodeTypesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNodeTypesRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListNodeTypesRequest): google.cloud.vmwareengine.v1.ListNodeTypesRequest;

                    /**
                     * Encodes the specified ListNodeTypesRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListNodeTypesRequest.verify|verify} messages.
                     * @param message ListNodeTypesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListNodeTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNodeTypesRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListNodeTypesRequest.verify|verify} messages.
                     * @param message ListNodeTypesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListNodeTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNodeTypesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNodeTypesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListNodeTypesRequest;

                    /**
                     * Decodes a ListNodeTypesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNodeTypesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListNodeTypesRequest;

                    /**
                     * Verifies a ListNodeTypesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNodeTypesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNodeTypesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListNodeTypesRequest;

                    /**
                     * Creates a plain object from a ListNodeTypesRequest message. Also converts values to other types if specified.
                     * @param message ListNodeTypesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListNodeTypesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNodeTypesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNodeTypesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNodeTypesResponse. */
                interface IListNodeTypesResponse {

                    /** ListNodeTypesResponse nodeTypes */
                    nodeTypes?: (google.cloud.vmwareengine.v1.INodeType[]|null);

                    /** ListNodeTypesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListNodeTypesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListNodeTypesResponse. */
                class ListNodeTypesResponse implements IListNodeTypesResponse {

                    /**
                     * Constructs a new ListNodeTypesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListNodeTypesResponse);

                    /** ListNodeTypesResponse nodeTypes. */
                    public nodeTypes: google.cloud.vmwareengine.v1.INodeType[];

                    /** ListNodeTypesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListNodeTypesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListNodeTypesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNodeTypesResponse instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListNodeTypesResponse): google.cloud.vmwareengine.v1.ListNodeTypesResponse;

                    /**
                     * Encodes the specified ListNodeTypesResponse message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListNodeTypesResponse.verify|verify} messages.
                     * @param message ListNodeTypesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListNodeTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNodeTypesResponse message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListNodeTypesResponse.verify|verify} messages.
                     * @param message ListNodeTypesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListNodeTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNodeTypesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNodeTypesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListNodeTypesResponse;

                    /**
                     * Decodes a ListNodeTypesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNodeTypesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListNodeTypesResponse;

                    /**
                     * Verifies a ListNodeTypesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNodeTypesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNodeTypesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListNodeTypesResponse;

                    /**
                     * Creates a plain object from a ListNodeTypesResponse message. Also converts values to other types if specified.
                     * @param message ListNodeTypesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListNodeTypesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNodeTypesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNodeTypesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetNodeTypeRequest. */
                interface IGetNodeTypeRequest {

                    /** GetNodeTypeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetNodeTypeRequest. */
                class GetNodeTypeRequest implements IGetNodeTypeRequest {

                    /**
                     * Constructs a new GetNodeTypeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IGetNodeTypeRequest);

                    /** GetNodeTypeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetNodeTypeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetNodeTypeRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IGetNodeTypeRequest): google.cloud.vmwareengine.v1.GetNodeTypeRequest;

                    /**
                     * Encodes the specified GetNodeTypeRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.GetNodeTypeRequest.verify|verify} messages.
                     * @param message GetNodeTypeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IGetNodeTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetNodeTypeRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.GetNodeTypeRequest.verify|verify} messages.
                     * @param message GetNodeTypeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IGetNodeTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetNodeTypeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetNodeTypeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.GetNodeTypeRequest;

                    /**
                     * Decodes a GetNodeTypeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetNodeTypeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.GetNodeTypeRequest;

                    /**
                     * Verifies a GetNodeTypeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetNodeTypeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetNodeTypeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.GetNodeTypeRequest;

                    /**
                     * Creates a plain object from a GetNodeTypeRequest message. Also converts values to other types if specified.
                     * @param message GetNodeTypeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.GetNodeTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetNodeTypeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetNodeTypeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Credentials. */
                interface ICredentials {

                    /** Credentials username */
                    username?: (string|null);

                    /** Credentials password */
                    password?: (string|null);
                }

                /** Represents a Credentials. */
                class Credentials implements ICredentials {

                    /**
                     * Constructs a new Credentials.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.ICredentials);

                    /** Credentials username. */
                    public username: string;

                    /** Credentials password. */
                    public password: string;

                    /**
                     * Creates a new Credentials instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Credentials instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.ICredentials): google.cloud.vmwareengine.v1.Credentials;

                    /**
                     * Encodes the specified Credentials message. Does not implicitly {@link google.cloud.vmwareengine.v1.Credentials.verify|verify} messages.
                     * @param message Credentials message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.ICredentials, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Credentials message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.Credentials.verify|verify} messages.
                     * @param message Credentials message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.ICredentials, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Credentials message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Credentials
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.Credentials;

                    /**
                     * Decodes a Credentials message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Credentials
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.Credentials;

                    /**
                     * Verifies a Credentials message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Credentials message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Credentials
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.Credentials;

                    /**
                     * Creates a plain object from a Credentials message. Also converts values to other types if specified.
                     * @param message Credentials
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.Credentials, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Credentials to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Credentials
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ShowNsxCredentialsRequest. */
                interface IShowNsxCredentialsRequest {

                    /** ShowNsxCredentialsRequest privateCloud */
                    privateCloud?: (string|null);
                }

                /** Represents a ShowNsxCredentialsRequest. */
                class ShowNsxCredentialsRequest implements IShowNsxCredentialsRequest {

                    /**
                     * Constructs a new ShowNsxCredentialsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IShowNsxCredentialsRequest);

                    /** ShowNsxCredentialsRequest privateCloud. */
                    public privateCloud: string;

                    /**
                     * Creates a new ShowNsxCredentialsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShowNsxCredentialsRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IShowNsxCredentialsRequest): google.cloud.vmwareengine.v1.ShowNsxCredentialsRequest;

                    /**
                     * Encodes the specified ShowNsxCredentialsRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.ShowNsxCredentialsRequest.verify|verify} messages.
                     * @param message ShowNsxCredentialsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IShowNsxCredentialsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShowNsxCredentialsRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ShowNsxCredentialsRequest.verify|verify} messages.
                     * @param message ShowNsxCredentialsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IShowNsxCredentialsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShowNsxCredentialsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShowNsxCredentialsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ShowNsxCredentialsRequest;

                    /**
                     * Decodes a ShowNsxCredentialsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShowNsxCredentialsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ShowNsxCredentialsRequest;

                    /**
                     * Verifies a ShowNsxCredentialsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShowNsxCredentialsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShowNsxCredentialsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ShowNsxCredentialsRequest;

                    /**
                     * Creates a plain object from a ShowNsxCredentialsRequest message. Also converts values to other types if specified.
                     * @param message ShowNsxCredentialsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ShowNsxCredentialsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShowNsxCredentialsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShowNsxCredentialsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ShowVcenterCredentialsRequest. */
                interface IShowVcenterCredentialsRequest {

                    /** ShowVcenterCredentialsRequest privateCloud */
                    privateCloud?: (string|null);
                }

                /** Represents a ShowVcenterCredentialsRequest. */
                class ShowVcenterCredentialsRequest implements IShowVcenterCredentialsRequest {

                    /**
                     * Constructs a new ShowVcenterCredentialsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IShowVcenterCredentialsRequest);

                    /** ShowVcenterCredentialsRequest privateCloud. */
                    public privateCloud: string;

                    /**
                     * Creates a new ShowVcenterCredentialsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShowVcenterCredentialsRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IShowVcenterCredentialsRequest): google.cloud.vmwareengine.v1.ShowVcenterCredentialsRequest;

                    /**
                     * Encodes the specified ShowVcenterCredentialsRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.ShowVcenterCredentialsRequest.verify|verify} messages.
                     * @param message ShowVcenterCredentialsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IShowVcenterCredentialsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShowVcenterCredentialsRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ShowVcenterCredentialsRequest.verify|verify} messages.
                     * @param message ShowVcenterCredentialsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IShowVcenterCredentialsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShowVcenterCredentialsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShowVcenterCredentialsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ShowVcenterCredentialsRequest;

                    /**
                     * Decodes a ShowVcenterCredentialsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShowVcenterCredentialsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ShowVcenterCredentialsRequest;

                    /**
                     * Verifies a ShowVcenterCredentialsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShowVcenterCredentialsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShowVcenterCredentialsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ShowVcenterCredentialsRequest;

                    /**
                     * Creates a plain object from a ShowVcenterCredentialsRequest message. Also converts values to other types if specified.
                     * @param message ShowVcenterCredentialsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ShowVcenterCredentialsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShowVcenterCredentialsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShowVcenterCredentialsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResetNsxCredentialsRequest. */
                interface IResetNsxCredentialsRequest {

                    /** ResetNsxCredentialsRequest privateCloud */
                    privateCloud?: (string|null);

                    /** ResetNsxCredentialsRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a ResetNsxCredentialsRequest. */
                class ResetNsxCredentialsRequest implements IResetNsxCredentialsRequest {

                    /**
                     * Constructs a new ResetNsxCredentialsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IResetNsxCredentialsRequest);

                    /** ResetNsxCredentialsRequest privateCloud. */
                    public privateCloud: string;

                    /** ResetNsxCredentialsRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new ResetNsxCredentialsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResetNsxCredentialsRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IResetNsxCredentialsRequest): google.cloud.vmwareengine.v1.ResetNsxCredentialsRequest;

                    /**
                     * Encodes the specified ResetNsxCredentialsRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.ResetNsxCredentialsRequest.verify|verify} messages.
                     * @param message ResetNsxCredentialsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IResetNsxCredentialsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResetNsxCredentialsRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ResetNsxCredentialsRequest.verify|verify} messages.
                     * @param message ResetNsxCredentialsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IResetNsxCredentialsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResetNsxCredentialsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResetNsxCredentialsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ResetNsxCredentialsRequest;

                    /**
                     * Decodes a ResetNsxCredentialsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResetNsxCredentialsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ResetNsxCredentialsRequest;

                    /**
                     * Verifies a ResetNsxCredentialsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResetNsxCredentialsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResetNsxCredentialsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ResetNsxCredentialsRequest;

                    /**
                     * Creates a plain object from a ResetNsxCredentialsRequest message. Also converts values to other types if specified.
                     * @param message ResetNsxCredentialsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ResetNsxCredentialsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResetNsxCredentialsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResetNsxCredentialsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResetVcenterCredentialsRequest. */
                interface IResetVcenterCredentialsRequest {

                    /** ResetVcenterCredentialsRequest privateCloud */
                    privateCloud?: (string|null);

                    /** ResetVcenterCredentialsRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a ResetVcenterCredentialsRequest. */
                class ResetVcenterCredentialsRequest implements IResetVcenterCredentialsRequest {

                    /**
                     * Constructs a new ResetVcenterCredentialsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IResetVcenterCredentialsRequest);

                    /** ResetVcenterCredentialsRequest privateCloud. */
                    public privateCloud: string;

                    /** ResetVcenterCredentialsRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new ResetVcenterCredentialsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResetVcenterCredentialsRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IResetVcenterCredentialsRequest): google.cloud.vmwareengine.v1.ResetVcenterCredentialsRequest;

                    /**
                     * Encodes the specified ResetVcenterCredentialsRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.ResetVcenterCredentialsRequest.verify|verify} messages.
                     * @param message ResetVcenterCredentialsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IResetVcenterCredentialsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResetVcenterCredentialsRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ResetVcenterCredentialsRequest.verify|verify} messages.
                     * @param message ResetVcenterCredentialsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IResetVcenterCredentialsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResetVcenterCredentialsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResetVcenterCredentialsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ResetVcenterCredentialsRequest;

                    /**
                     * Decodes a ResetVcenterCredentialsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResetVcenterCredentialsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ResetVcenterCredentialsRequest;

                    /**
                     * Verifies a ResetVcenterCredentialsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResetVcenterCredentialsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResetVcenterCredentialsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ResetVcenterCredentialsRequest;

                    /**
                     * Creates a plain object from a ResetVcenterCredentialsRequest message. Also converts values to other types if specified.
                     * @param message ResetVcenterCredentialsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ResetVcenterCredentialsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResetVcenterCredentialsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResetVcenterCredentialsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListHcxActivationKeysResponse. */
                interface IListHcxActivationKeysResponse {

                    /** ListHcxActivationKeysResponse hcxActivationKeys */
                    hcxActivationKeys?: (google.cloud.vmwareengine.v1.IHcxActivationKey[]|null);

                    /** ListHcxActivationKeysResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListHcxActivationKeysResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListHcxActivationKeysResponse. */
                class ListHcxActivationKeysResponse implements IListHcxActivationKeysResponse {

                    /**
                     * Constructs a new ListHcxActivationKeysResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListHcxActivationKeysResponse);

                    /** ListHcxActivationKeysResponse hcxActivationKeys. */
                    public hcxActivationKeys: google.cloud.vmwareengine.v1.IHcxActivationKey[];

                    /** ListHcxActivationKeysResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListHcxActivationKeysResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListHcxActivationKeysResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHcxActivationKeysResponse instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListHcxActivationKeysResponse): google.cloud.vmwareengine.v1.ListHcxActivationKeysResponse;

                    /**
                     * Encodes the specified ListHcxActivationKeysResponse message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListHcxActivationKeysResponse.verify|verify} messages.
                     * @param message ListHcxActivationKeysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListHcxActivationKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHcxActivationKeysResponse message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListHcxActivationKeysResponse.verify|verify} messages.
                     * @param message ListHcxActivationKeysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListHcxActivationKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHcxActivationKeysResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHcxActivationKeysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListHcxActivationKeysResponse;

                    /**
                     * Decodes a ListHcxActivationKeysResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHcxActivationKeysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListHcxActivationKeysResponse;

                    /**
                     * Verifies a ListHcxActivationKeysResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHcxActivationKeysResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHcxActivationKeysResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListHcxActivationKeysResponse;

                    /**
                     * Creates a plain object from a ListHcxActivationKeysResponse message. Also converts values to other types if specified.
                     * @param message ListHcxActivationKeysResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListHcxActivationKeysResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHcxActivationKeysResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHcxActivationKeysResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a HcxActivationKey. */
                interface IHcxActivationKey {

                    /** HcxActivationKey name */
                    name?: (string|null);

                    /** HcxActivationKey createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** HcxActivationKey state */
                    state?: (google.cloud.vmwareengine.v1.HcxActivationKey.State|keyof typeof google.cloud.vmwareengine.v1.HcxActivationKey.State|null);

                    /** HcxActivationKey activationKey */
                    activationKey?: (string|null);

                    /** HcxActivationKey uid */
                    uid?: (string|null);
                }

                /** Represents a HcxActivationKey. */
                class HcxActivationKey implements IHcxActivationKey {

                    /**
                     * Constructs a new HcxActivationKey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IHcxActivationKey);

                    /** HcxActivationKey name. */
                    public name: string;

                    /** HcxActivationKey createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** HcxActivationKey state. */
                    public state: (google.cloud.vmwareengine.v1.HcxActivationKey.State|keyof typeof google.cloud.vmwareengine.v1.HcxActivationKey.State);

                    /** HcxActivationKey activationKey. */
                    public activationKey: string;

                    /** HcxActivationKey uid. */
                    public uid: string;

                    /**
                     * Creates a new HcxActivationKey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HcxActivationKey instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IHcxActivationKey): google.cloud.vmwareengine.v1.HcxActivationKey;

                    /**
                     * Encodes the specified HcxActivationKey message. Does not implicitly {@link google.cloud.vmwareengine.v1.HcxActivationKey.verify|verify} messages.
                     * @param message HcxActivationKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IHcxActivationKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HcxActivationKey message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.HcxActivationKey.verify|verify} messages.
                     * @param message HcxActivationKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IHcxActivationKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HcxActivationKey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HcxActivationKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.HcxActivationKey;

                    /**
                     * Decodes a HcxActivationKey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HcxActivationKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.HcxActivationKey;

                    /**
                     * Verifies a HcxActivationKey message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HcxActivationKey message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HcxActivationKey
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.HcxActivationKey;

                    /**
                     * Creates a plain object from a HcxActivationKey message. Also converts values to other types if specified.
                     * @param message HcxActivationKey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.HcxActivationKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HcxActivationKey to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HcxActivationKey
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace HcxActivationKey {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        AVAILABLE = 1,
                        CONSUMED = 2,
                        CREATING = 3
                    }
                }

                /** Properties of a ListHcxActivationKeysRequest. */
                interface IListHcxActivationKeysRequest {

                    /** ListHcxActivationKeysRequest parent */
                    parent?: (string|null);

                    /** ListHcxActivationKeysRequest pageSize */
                    pageSize?: (number|null);

                    /** ListHcxActivationKeysRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListHcxActivationKeysRequest. */
                class ListHcxActivationKeysRequest implements IListHcxActivationKeysRequest {

                    /**
                     * Constructs a new ListHcxActivationKeysRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListHcxActivationKeysRequest);

                    /** ListHcxActivationKeysRequest parent. */
                    public parent: string;

                    /** ListHcxActivationKeysRequest pageSize. */
                    public pageSize: number;

                    /** ListHcxActivationKeysRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListHcxActivationKeysRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHcxActivationKeysRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListHcxActivationKeysRequest): google.cloud.vmwareengine.v1.ListHcxActivationKeysRequest;

                    /**
                     * Encodes the specified ListHcxActivationKeysRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListHcxActivationKeysRequest.verify|verify} messages.
                     * @param message ListHcxActivationKeysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListHcxActivationKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHcxActivationKeysRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListHcxActivationKeysRequest.verify|verify} messages.
                     * @param message ListHcxActivationKeysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListHcxActivationKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHcxActivationKeysRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHcxActivationKeysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListHcxActivationKeysRequest;

                    /**
                     * Decodes a ListHcxActivationKeysRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHcxActivationKeysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListHcxActivationKeysRequest;

                    /**
                     * Verifies a ListHcxActivationKeysRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHcxActivationKeysRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHcxActivationKeysRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListHcxActivationKeysRequest;

                    /**
                     * Creates a plain object from a ListHcxActivationKeysRequest message. Also converts values to other types if specified.
                     * @param message ListHcxActivationKeysRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListHcxActivationKeysRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHcxActivationKeysRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHcxActivationKeysRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetHcxActivationKeyRequest. */
                interface IGetHcxActivationKeyRequest {

                    /** GetHcxActivationKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetHcxActivationKeyRequest. */
                class GetHcxActivationKeyRequest implements IGetHcxActivationKeyRequest {

                    /**
                     * Constructs a new GetHcxActivationKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IGetHcxActivationKeyRequest);

                    /** GetHcxActivationKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetHcxActivationKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetHcxActivationKeyRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IGetHcxActivationKeyRequest): google.cloud.vmwareengine.v1.GetHcxActivationKeyRequest;

                    /**
                     * Encodes the specified GetHcxActivationKeyRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.GetHcxActivationKeyRequest.verify|verify} messages.
                     * @param message GetHcxActivationKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IGetHcxActivationKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetHcxActivationKeyRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.GetHcxActivationKeyRequest.verify|verify} messages.
                     * @param message GetHcxActivationKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IGetHcxActivationKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetHcxActivationKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetHcxActivationKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.GetHcxActivationKeyRequest;

                    /**
                     * Decodes a GetHcxActivationKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetHcxActivationKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.GetHcxActivationKeyRequest;

                    /**
                     * Verifies a GetHcxActivationKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetHcxActivationKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetHcxActivationKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.GetHcxActivationKeyRequest;

                    /**
                     * Creates a plain object from a GetHcxActivationKeyRequest message. Also converts values to other types if specified.
                     * @param message GetHcxActivationKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.GetHcxActivationKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetHcxActivationKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetHcxActivationKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateHcxActivationKeyRequest. */
                interface ICreateHcxActivationKeyRequest {

                    /** CreateHcxActivationKeyRequest parent */
                    parent?: (string|null);

                    /** CreateHcxActivationKeyRequest hcxActivationKey */
                    hcxActivationKey?: (google.cloud.vmwareengine.v1.IHcxActivationKey|null);

                    /** CreateHcxActivationKeyRequest hcxActivationKeyId */
                    hcxActivationKeyId?: (string|null);

                    /** CreateHcxActivationKeyRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateHcxActivationKeyRequest. */
                class CreateHcxActivationKeyRequest implements ICreateHcxActivationKeyRequest {

                    /**
                     * Constructs a new CreateHcxActivationKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.ICreateHcxActivationKeyRequest);

                    /** CreateHcxActivationKeyRequest parent. */
                    public parent: string;

                    /** CreateHcxActivationKeyRequest hcxActivationKey. */
                    public hcxActivationKey?: (google.cloud.vmwareengine.v1.IHcxActivationKey|null);

                    /** CreateHcxActivationKeyRequest hcxActivationKeyId. */
                    public hcxActivationKeyId: string;

                    /** CreateHcxActivationKeyRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateHcxActivationKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateHcxActivationKeyRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.ICreateHcxActivationKeyRequest): google.cloud.vmwareengine.v1.CreateHcxActivationKeyRequest;

                    /**
                     * Encodes the specified CreateHcxActivationKeyRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.CreateHcxActivationKeyRequest.verify|verify} messages.
                     * @param message CreateHcxActivationKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.ICreateHcxActivationKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateHcxActivationKeyRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.CreateHcxActivationKeyRequest.verify|verify} messages.
                     * @param message CreateHcxActivationKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.ICreateHcxActivationKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateHcxActivationKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateHcxActivationKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.CreateHcxActivationKeyRequest;

                    /**
                     * Decodes a CreateHcxActivationKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateHcxActivationKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.CreateHcxActivationKeyRequest;

                    /**
                     * Verifies a CreateHcxActivationKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateHcxActivationKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateHcxActivationKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.CreateHcxActivationKeyRequest;

                    /**
                     * Creates a plain object from a CreateHcxActivationKeyRequest message. Also converts values to other types if specified.
                     * @param message CreateHcxActivationKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.CreateHcxActivationKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateHcxActivationKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateHcxActivationKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Hcx. */
                interface IHcx {

                    /** Hcx internalIp */
                    internalIp?: (string|null);

                    /** Hcx version */
                    version?: (string|null);

                    /** Hcx state */
                    state?: (google.cloud.vmwareengine.v1.Hcx.State|keyof typeof google.cloud.vmwareengine.v1.Hcx.State|null);

                    /** Hcx fqdn */
                    fqdn?: (string|null);
                }

                /** Represents a Hcx. */
                class Hcx implements IHcx {

                    /**
                     * Constructs a new Hcx.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IHcx);

                    /** Hcx internalIp. */
                    public internalIp: string;

                    /** Hcx version. */
                    public version: string;

                    /** Hcx state. */
                    public state: (google.cloud.vmwareengine.v1.Hcx.State|keyof typeof google.cloud.vmwareengine.v1.Hcx.State);

                    /** Hcx fqdn. */
                    public fqdn: string;

                    /**
                     * Creates a new Hcx instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Hcx instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IHcx): google.cloud.vmwareengine.v1.Hcx;

                    /**
                     * Encodes the specified Hcx message. Does not implicitly {@link google.cloud.vmwareengine.v1.Hcx.verify|verify} messages.
                     * @param message Hcx message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IHcx, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Hcx message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.Hcx.verify|verify} messages.
                     * @param message Hcx message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IHcx, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Hcx message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Hcx
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.Hcx;

                    /**
                     * Decodes a Hcx message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Hcx
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.Hcx;

                    /**
                     * Verifies a Hcx message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Hcx message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Hcx
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.Hcx;

                    /**
                     * Creates a plain object from a Hcx message. Also converts values to other types if specified.
                     * @param message Hcx
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.Hcx, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Hcx to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Hcx
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Hcx {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        CREATING = 2
                    }
                }

                /** Properties of a Nsx. */
                interface INsx {

                    /** Nsx internalIp */
                    internalIp?: (string|null);

                    /** Nsx version */
                    version?: (string|null);

                    /** Nsx state */
                    state?: (google.cloud.vmwareengine.v1.Nsx.State|keyof typeof google.cloud.vmwareengine.v1.Nsx.State|null);

                    /** Nsx fqdn */
                    fqdn?: (string|null);
                }

                /** Represents a Nsx. */
                class Nsx implements INsx {

                    /**
                     * Constructs a new Nsx.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.INsx);

                    /** Nsx internalIp. */
                    public internalIp: string;

                    /** Nsx version. */
                    public version: string;

                    /** Nsx state. */
                    public state: (google.cloud.vmwareengine.v1.Nsx.State|keyof typeof google.cloud.vmwareengine.v1.Nsx.State);

                    /** Nsx fqdn. */
                    public fqdn: string;

                    /**
                     * Creates a new Nsx instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Nsx instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.INsx): google.cloud.vmwareengine.v1.Nsx;

                    /**
                     * Encodes the specified Nsx message. Does not implicitly {@link google.cloud.vmwareengine.v1.Nsx.verify|verify} messages.
                     * @param message Nsx message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.INsx, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Nsx message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.Nsx.verify|verify} messages.
                     * @param message Nsx message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.INsx, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Nsx message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Nsx
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.Nsx;

                    /**
                     * Decodes a Nsx message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Nsx
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.Nsx;

                    /**
                     * Verifies a Nsx message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Nsx message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Nsx
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.Nsx;

                    /**
                     * Creates a plain object from a Nsx message. Also converts values to other types if specified.
                     * @param message Nsx
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.Nsx, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Nsx to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Nsx
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Nsx {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        CREATING = 2
                    }
                }

                /** Properties of a Vcenter. */
                interface IVcenter {

                    /** Vcenter internalIp */
                    internalIp?: (string|null);

                    /** Vcenter version */
                    version?: (string|null);

                    /** Vcenter state */
                    state?: (google.cloud.vmwareengine.v1.Vcenter.State|keyof typeof google.cloud.vmwareengine.v1.Vcenter.State|null);

                    /** Vcenter fqdn */
                    fqdn?: (string|null);
                }

                /** Represents a Vcenter. */
                class Vcenter implements IVcenter {

                    /**
                     * Constructs a new Vcenter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IVcenter);

                    /** Vcenter internalIp. */
                    public internalIp: string;

                    /** Vcenter version. */
                    public version: string;

                    /** Vcenter state. */
                    public state: (google.cloud.vmwareengine.v1.Vcenter.State|keyof typeof google.cloud.vmwareengine.v1.Vcenter.State);

                    /** Vcenter fqdn. */
                    public fqdn: string;

                    /**
                     * Creates a new Vcenter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Vcenter instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IVcenter): google.cloud.vmwareengine.v1.Vcenter;

                    /**
                     * Encodes the specified Vcenter message. Does not implicitly {@link google.cloud.vmwareengine.v1.Vcenter.verify|verify} messages.
                     * @param message Vcenter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IVcenter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Vcenter message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.Vcenter.verify|verify} messages.
                     * @param message Vcenter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IVcenter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Vcenter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Vcenter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.Vcenter;

                    /**
                     * Decodes a Vcenter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Vcenter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.Vcenter;

                    /**
                     * Verifies a Vcenter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Vcenter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Vcenter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.Vcenter;

                    /**
                     * Creates a plain object from a Vcenter message. Also converts values to other types if specified.
                     * @param message Vcenter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.Vcenter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Vcenter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Vcenter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Vcenter {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        CREATING = 2
                    }
                }

                /** Properties of a NetworkPolicy. */
                interface INetworkPolicy {

                    /** NetworkPolicy name */
                    name?: (string|null);

                    /** NetworkPolicy createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** NetworkPolicy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** NetworkPolicy internetAccess */
                    internetAccess?: (google.cloud.vmwareengine.v1.NetworkPolicy.INetworkService|null);

                    /** NetworkPolicy externalIp */
                    externalIp?: (google.cloud.vmwareengine.v1.NetworkPolicy.INetworkService|null);

                    /** NetworkPolicy edgeServicesCidr */
                    edgeServicesCidr?: (string|null);

                    /** NetworkPolicy uid */
                    uid?: (string|null);

                    /** NetworkPolicy vmwareEngineNetwork */
                    vmwareEngineNetwork?: (string|null);

                    /** NetworkPolicy description */
                    description?: (string|null);

                    /** NetworkPolicy vmwareEngineNetworkCanonical */
                    vmwareEngineNetworkCanonical?: (string|null);
                }

                /** Represents a NetworkPolicy. */
                class NetworkPolicy implements INetworkPolicy {

                    /**
                     * Constructs a new NetworkPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.INetworkPolicy);

                    /** NetworkPolicy name. */
                    public name: string;

                    /** NetworkPolicy createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** NetworkPolicy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** NetworkPolicy internetAccess. */
                    public internetAccess?: (google.cloud.vmwareengine.v1.NetworkPolicy.INetworkService|null);

                    /** NetworkPolicy externalIp. */
                    public externalIp?: (google.cloud.vmwareengine.v1.NetworkPolicy.INetworkService|null);

                    /** NetworkPolicy edgeServicesCidr. */
                    public edgeServicesCidr: string;

                    /** NetworkPolicy uid. */
                    public uid: string;

                    /** NetworkPolicy vmwareEngineNetwork. */
                    public vmwareEngineNetwork: string;

                    /** NetworkPolicy description. */
                    public description: string;

                    /** NetworkPolicy vmwareEngineNetworkCanonical. */
                    public vmwareEngineNetworkCanonical: string;

                    /**
                     * Creates a new NetworkPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkPolicy instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.INetworkPolicy): google.cloud.vmwareengine.v1.NetworkPolicy;

                    /**
                     * Encodes the specified NetworkPolicy message. Does not implicitly {@link google.cloud.vmwareengine.v1.NetworkPolicy.verify|verify} messages.
                     * @param message NetworkPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.INetworkPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkPolicy message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.NetworkPolicy.verify|verify} messages.
                     * @param message NetworkPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.INetworkPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.NetworkPolicy;

                    /**
                     * Decodes a NetworkPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.NetworkPolicy;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.NetworkPolicy;

                    /**
                     * Creates a plain object from a NetworkPolicy message. Also converts values to other types if specified.
                     * @param message NetworkPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.NetworkPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NetworkPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace NetworkPolicy {

                    /** Properties of a NetworkService. */
                    interface INetworkService {

                        /** NetworkService enabled */
                        enabled?: (boolean|null);

                        /** NetworkService state */
                        state?: (google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService.State|keyof typeof google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService.State|null);
                    }

                    /** Represents a NetworkService. */
                    class NetworkService implements INetworkService {

                        /**
                         * Constructs a new NetworkService.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vmwareengine.v1.NetworkPolicy.INetworkService);

                        /** NetworkService enabled. */
                        public enabled: boolean;

                        /** NetworkService state. */
                        public state: (google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService.State|keyof typeof google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService.State);

                        /**
                         * Creates a new NetworkService instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NetworkService instance
                         */
                        public static create(properties?: google.cloud.vmwareengine.v1.NetworkPolicy.INetworkService): google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService;

                        /**
                         * Encodes the specified NetworkService message. Does not implicitly {@link google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService.verify|verify} messages.
                         * @param message NetworkService message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vmwareengine.v1.NetworkPolicy.INetworkService, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NetworkService message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService.verify|verify} messages.
                         * @param message NetworkService message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vmwareengine.v1.NetworkPolicy.INetworkService, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NetworkService message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NetworkService
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService;

                        /**
                         * Decodes a NetworkService message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NetworkService
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService;

                        /**
                         * Verifies a NetworkService message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NetworkService message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NetworkService
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService;

                        /**
                         * Creates a plain object from a NetworkService message. Also converts values to other types if specified.
                         * @param message NetworkService
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vmwareengine.v1.NetworkPolicy.NetworkService, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NetworkService to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NetworkService
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace NetworkService {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            UNPROVISIONED = 1,
                            RECONCILING = 2,
                            ACTIVE = 3
                        }
                    }
                }

                /** Properties of a ListNetworkPoliciesRequest. */
                interface IListNetworkPoliciesRequest {

                    /** ListNetworkPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListNetworkPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListNetworkPoliciesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListNetworkPoliciesRequest filter */
                    filter?: (string|null);

                    /** ListNetworkPoliciesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListNetworkPoliciesRequest. */
                class ListNetworkPoliciesRequest implements IListNetworkPoliciesRequest {

                    /**
                     * Constructs a new ListNetworkPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListNetworkPoliciesRequest);

                    /** ListNetworkPoliciesRequest parent. */
                    public parent: string;

                    /** ListNetworkPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListNetworkPoliciesRequest pageToken. */
                    public pageToken: string;

                    /** ListNetworkPoliciesRequest filter. */
                    public filter: string;

                    /** ListNetworkPoliciesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListNetworkPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNetworkPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListNetworkPoliciesRequest): google.cloud.vmwareengine.v1.ListNetworkPoliciesRequest;

                    /**
                     * Encodes the specified ListNetworkPoliciesRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListNetworkPoliciesRequest.verify|verify} messages.
                     * @param message ListNetworkPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListNetworkPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNetworkPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListNetworkPoliciesRequest.verify|verify} messages.
                     * @param message ListNetworkPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListNetworkPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNetworkPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNetworkPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListNetworkPoliciesRequest;

                    /**
                     * Decodes a ListNetworkPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNetworkPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListNetworkPoliciesRequest;

                    /**
                     * Verifies a ListNetworkPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNetworkPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNetworkPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListNetworkPoliciesRequest;

                    /**
                     * Creates a plain object from a ListNetworkPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListNetworkPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListNetworkPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNetworkPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNetworkPoliciesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNetworkPoliciesResponse. */
                interface IListNetworkPoliciesResponse {

                    /** ListNetworkPoliciesResponse networkPolicies */
                    networkPolicies?: (google.cloud.vmwareengine.v1.INetworkPolicy[]|null);

                    /** ListNetworkPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListNetworkPoliciesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListNetworkPoliciesResponse. */
                class ListNetworkPoliciesResponse implements IListNetworkPoliciesResponse {

                    /**
                     * Constructs a new ListNetworkPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListNetworkPoliciesResponse);

                    /** ListNetworkPoliciesResponse networkPolicies. */
                    public networkPolicies: google.cloud.vmwareengine.v1.INetworkPolicy[];

                    /** ListNetworkPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListNetworkPoliciesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListNetworkPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNetworkPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListNetworkPoliciesResponse): google.cloud.vmwareengine.v1.ListNetworkPoliciesResponse;

                    /**
                     * Encodes the specified ListNetworkPoliciesResponse message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListNetworkPoliciesResponse.verify|verify} messages.
                     * @param message ListNetworkPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListNetworkPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNetworkPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListNetworkPoliciesResponse.verify|verify} messages.
                     * @param message ListNetworkPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListNetworkPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNetworkPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNetworkPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListNetworkPoliciesResponse;

                    /**
                     * Decodes a ListNetworkPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNetworkPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListNetworkPoliciesResponse;

                    /**
                     * Verifies a ListNetworkPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNetworkPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNetworkPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListNetworkPoliciesResponse;

                    /**
                     * Creates a plain object from a ListNetworkPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListNetworkPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListNetworkPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNetworkPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNetworkPoliciesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetNetworkPolicyRequest. */
                interface IGetNetworkPolicyRequest {

                    /** GetNetworkPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetNetworkPolicyRequest. */
                class GetNetworkPolicyRequest implements IGetNetworkPolicyRequest {

                    /**
                     * Constructs a new GetNetworkPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IGetNetworkPolicyRequest);

                    /** GetNetworkPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetNetworkPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetNetworkPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IGetNetworkPolicyRequest): google.cloud.vmwareengine.v1.GetNetworkPolicyRequest;

                    /**
                     * Encodes the specified GetNetworkPolicyRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.GetNetworkPolicyRequest.verify|verify} messages.
                     * @param message GetNetworkPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IGetNetworkPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetNetworkPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.GetNetworkPolicyRequest.verify|verify} messages.
                     * @param message GetNetworkPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IGetNetworkPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetNetworkPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetNetworkPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.GetNetworkPolicyRequest;

                    /**
                     * Decodes a GetNetworkPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetNetworkPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.GetNetworkPolicyRequest;

                    /**
                     * Verifies a GetNetworkPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetNetworkPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetNetworkPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.GetNetworkPolicyRequest;

                    /**
                     * Creates a plain object from a GetNetworkPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetNetworkPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.GetNetworkPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetNetworkPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetNetworkPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateNetworkPolicyRequest. */
                interface IUpdateNetworkPolicyRequest {

                    /** UpdateNetworkPolicyRequest networkPolicy */
                    networkPolicy?: (google.cloud.vmwareengine.v1.INetworkPolicy|null);

                    /** UpdateNetworkPolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateNetworkPolicyRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateNetworkPolicyRequest. */
                class UpdateNetworkPolicyRequest implements IUpdateNetworkPolicyRequest {

                    /**
                     * Constructs a new UpdateNetworkPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IUpdateNetworkPolicyRequest);

                    /** UpdateNetworkPolicyRequest networkPolicy. */
                    public networkPolicy?: (google.cloud.vmwareengine.v1.INetworkPolicy|null);

                    /** UpdateNetworkPolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateNetworkPolicyRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateNetworkPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateNetworkPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IUpdateNetworkPolicyRequest): google.cloud.vmwareengine.v1.UpdateNetworkPolicyRequest;

                    /**
                     * Encodes the specified UpdateNetworkPolicyRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.UpdateNetworkPolicyRequest.verify|verify} messages.
                     * @param message UpdateNetworkPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IUpdateNetworkPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateNetworkPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.UpdateNetworkPolicyRequest.verify|verify} messages.
                     * @param message UpdateNetworkPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IUpdateNetworkPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateNetworkPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateNetworkPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.UpdateNetworkPolicyRequest;

                    /**
                     * Decodes an UpdateNetworkPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateNetworkPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.UpdateNetworkPolicyRequest;

                    /**
                     * Verifies an UpdateNetworkPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateNetworkPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateNetworkPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.UpdateNetworkPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateNetworkPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateNetworkPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.UpdateNetworkPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateNetworkPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateNetworkPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateNetworkPolicyRequest. */
                interface ICreateNetworkPolicyRequest {

                    /** CreateNetworkPolicyRequest parent */
                    parent?: (string|null);

                    /** CreateNetworkPolicyRequest networkPolicyId */
                    networkPolicyId?: (string|null);

                    /** CreateNetworkPolicyRequest networkPolicy */
                    networkPolicy?: (google.cloud.vmwareengine.v1.INetworkPolicy|null);

                    /** CreateNetworkPolicyRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateNetworkPolicyRequest. */
                class CreateNetworkPolicyRequest implements ICreateNetworkPolicyRequest {

                    /**
                     * Constructs a new CreateNetworkPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.ICreateNetworkPolicyRequest);

                    /** CreateNetworkPolicyRequest parent. */
                    public parent: string;

                    /** CreateNetworkPolicyRequest networkPolicyId. */
                    public networkPolicyId: string;

                    /** CreateNetworkPolicyRequest networkPolicy. */
                    public networkPolicy?: (google.cloud.vmwareengine.v1.INetworkPolicy|null);

                    /** CreateNetworkPolicyRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateNetworkPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateNetworkPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.ICreateNetworkPolicyRequest): google.cloud.vmwareengine.v1.CreateNetworkPolicyRequest;

                    /**
                     * Encodes the specified CreateNetworkPolicyRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.CreateNetworkPolicyRequest.verify|verify} messages.
                     * @param message CreateNetworkPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.ICreateNetworkPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateNetworkPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.CreateNetworkPolicyRequest.verify|verify} messages.
                     * @param message CreateNetworkPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.ICreateNetworkPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateNetworkPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateNetworkPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.CreateNetworkPolicyRequest;

                    /**
                     * Decodes a CreateNetworkPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateNetworkPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.CreateNetworkPolicyRequest;

                    /**
                     * Verifies a CreateNetworkPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateNetworkPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateNetworkPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.CreateNetworkPolicyRequest;

                    /**
                     * Creates a plain object from a CreateNetworkPolicyRequest message. Also converts values to other types if specified.
                     * @param message CreateNetworkPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.CreateNetworkPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateNetworkPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateNetworkPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteNetworkPolicyRequest. */
                interface IDeleteNetworkPolicyRequest {

                    /** DeleteNetworkPolicyRequest name */
                    name?: (string|null);

                    /** DeleteNetworkPolicyRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteNetworkPolicyRequest. */
                class DeleteNetworkPolicyRequest implements IDeleteNetworkPolicyRequest {

                    /**
                     * Constructs a new DeleteNetworkPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IDeleteNetworkPolicyRequest);

                    /** DeleteNetworkPolicyRequest name. */
                    public name: string;

                    /** DeleteNetworkPolicyRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteNetworkPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteNetworkPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IDeleteNetworkPolicyRequest): google.cloud.vmwareengine.v1.DeleteNetworkPolicyRequest;

                    /**
                     * Encodes the specified DeleteNetworkPolicyRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.DeleteNetworkPolicyRequest.verify|verify} messages.
                     * @param message DeleteNetworkPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IDeleteNetworkPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteNetworkPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.DeleteNetworkPolicyRequest.verify|verify} messages.
                     * @param message DeleteNetworkPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IDeleteNetworkPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteNetworkPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteNetworkPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.DeleteNetworkPolicyRequest;

                    /**
                     * Decodes a DeleteNetworkPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteNetworkPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.DeleteNetworkPolicyRequest;

                    /**
                     * Verifies a DeleteNetworkPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteNetworkPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteNetworkPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.DeleteNetworkPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteNetworkPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteNetworkPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.DeleteNetworkPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteNetworkPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteNetworkPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VmwareEngineNetwork. */
                interface IVmwareEngineNetwork {

                    /** VmwareEngineNetwork name */
                    name?: (string|null);

                    /** VmwareEngineNetwork createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** VmwareEngineNetwork updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** VmwareEngineNetwork description */
                    description?: (string|null);

                    /** VmwareEngineNetwork vpcNetworks */
                    vpcNetworks?: (google.cloud.vmwareengine.v1.VmwareEngineNetwork.IVpcNetwork[]|null);

                    /** VmwareEngineNetwork state */
                    state?: (google.cloud.vmwareengine.v1.VmwareEngineNetwork.State|keyof typeof google.cloud.vmwareengine.v1.VmwareEngineNetwork.State|null);

                    /** VmwareEngineNetwork type */
                    type?: (google.cloud.vmwareengine.v1.VmwareEngineNetwork.Type|keyof typeof google.cloud.vmwareengine.v1.VmwareEngineNetwork.Type|null);

                    /** VmwareEngineNetwork uid */
                    uid?: (string|null);

                    /** VmwareEngineNetwork etag */
                    etag?: (string|null);
                }

                /** Represents a VmwareEngineNetwork. */
                class VmwareEngineNetwork implements IVmwareEngineNetwork {

                    /**
                     * Constructs a new VmwareEngineNetwork.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IVmwareEngineNetwork);

                    /** VmwareEngineNetwork name. */
                    public name: string;

                    /** VmwareEngineNetwork createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** VmwareEngineNetwork updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** VmwareEngineNetwork description. */
                    public description: string;

                    /** VmwareEngineNetwork vpcNetworks. */
                    public vpcNetworks: google.cloud.vmwareengine.v1.VmwareEngineNetwork.IVpcNetwork[];

                    /** VmwareEngineNetwork state. */
                    public state: (google.cloud.vmwareengine.v1.VmwareEngineNetwork.State|keyof typeof google.cloud.vmwareengine.v1.VmwareEngineNetwork.State);

                    /** VmwareEngineNetwork type. */
                    public type: (google.cloud.vmwareengine.v1.VmwareEngineNetwork.Type|keyof typeof google.cloud.vmwareengine.v1.VmwareEngineNetwork.Type);

                    /** VmwareEngineNetwork uid. */
                    public uid: string;

                    /** VmwareEngineNetwork etag. */
                    public etag: string;

                    /**
                     * Creates a new VmwareEngineNetwork instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VmwareEngineNetwork instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IVmwareEngineNetwork): google.cloud.vmwareengine.v1.VmwareEngineNetwork;

                    /**
                     * Encodes the specified VmwareEngineNetwork message. Does not implicitly {@link google.cloud.vmwareengine.v1.VmwareEngineNetwork.verify|verify} messages.
                     * @param message VmwareEngineNetwork message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IVmwareEngineNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VmwareEngineNetwork message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.VmwareEngineNetwork.verify|verify} messages.
                     * @param message VmwareEngineNetwork message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IVmwareEngineNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VmwareEngineNetwork message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VmwareEngineNetwork
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.VmwareEngineNetwork;

                    /**
                     * Decodes a VmwareEngineNetwork message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VmwareEngineNetwork
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.VmwareEngineNetwork;

                    /**
                     * Verifies a VmwareEngineNetwork message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VmwareEngineNetwork message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VmwareEngineNetwork
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.VmwareEngineNetwork;

                    /**
                     * Creates a plain object from a VmwareEngineNetwork message. Also converts values to other types if specified.
                     * @param message VmwareEngineNetwork
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.VmwareEngineNetwork, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VmwareEngineNetwork to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VmwareEngineNetwork
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VmwareEngineNetwork {

                    /** Properties of a VpcNetwork. */
                    interface IVpcNetwork {

                        /** VpcNetwork type */
                        type?: (google.cloud.vmwareengine.v1.VmwareEngineNetwork.VpcNetwork.Type|keyof typeof google.cloud.vmwareengine.v1.VmwareEngineNetwork.VpcNetwork.Type|null);

                        /** VpcNetwork network */
                        network?: (string|null);
                    }

                    /** Represents a VpcNetwork. */
                    class VpcNetwork implements IVpcNetwork {

                        /**
                         * Constructs a new VpcNetwork.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.vmwareengine.v1.VmwareEngineNetwork.IVpcNetwork);

                        /** VpcNetwork type. */
                        public type: (google.cloud.vmwareengine.v1.VmwareEngineNetwork.VpcNetwork.Type|keyof typeof google.cloud.vmwareengine.v1.VmwareEngineNetwork.VpcNetwork.Type);

                        /** VpcNetwork network. */
                        public network: string;

                        /**
                         * Creates a new VpcNetwork instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VpcNetwork instance
                         */
                        public static create(properties?: google.cloud.vmwareengine.v1.VmwareEngineNetwork.IVpcNetwork): google.cloud.vmwareengine.v1.VmwareEngineNetwork.VpcNetwork;

                        /**
                         * Encodes the specified VpcNetwork message. Does not implicitly {@link google.cloud.vmwareengine.v1.VmwareEngineNetwork.VpcNetwork.verify|verify} messages.
                         * @param message VpcNetwork message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.vmwareengine.v1.VmwareEngineNetwork.IVpcNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VpcNetwork message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.VmwareEngineNetwork.VpcNetwork.verify|verify} messages.
                         * @param message VpcNetwork message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.vmwareengine.v1.VmwareEngineNetwork.IVpcNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VpcNetwork message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VpcNetwork
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.VmwareEngineNetwork.VpcNetwork;

                        /**
                         * Decodes a VpcNetwork message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VpcNetwork
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.VmwareEngineNetwork.VpcNetwork;

                        /**
                         * Verifies a VpcNetwork message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VpcNetwork message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VpcNetwork
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.VmwareEngineNetwork.VpcNetwork;

                        /**
                         * Creates a plain object from a VpcNetwork message. Also converts values to other types if specified.
                         * @param message VpcNetwork
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.vmwareengine.v1.VmwareEngineNetwork.VpcNetwork, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VpcNetwork to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VpcNetwork
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace VpcNetwork {

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            INTRANET = 1,
                            INTERNET = 2,
                            GOOGLE_CLOUD = 3
                        }
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        UPDATING = 3,
                        DELETING = 4
                    }

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        LEGACY = 1
                    }
                }

                /** Properties of a CreateVmwareEngineNetworkRequest. */
                interface ICreateVmwareEngineNetworkRequest {

                    /** CreateVmwareEngineNetworkRequest parent */
                    parent?: (string|null);

                    /** CreateVmwareEngineNetworkRequest vmwareEngineNetworkId */
                    vmwareEngineNetworkId?: (string|null);

                    /** CreateVmwareEngineNetworkRequest vmwareEngineNetwork */
                    vmwareEngineNetwork?: (google.cloud.vmwareengine.v1.IVmwareEngineNetwork|null);

                    /** CreateVmwareEngineNetworkRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateVmwareEngineNetworkRequest. */
                class CreateVmwareEngineNetworkRequest implements ICreateVmwareEngineNetworkRequest {

                    /**
                     * Constructs a new CreateVmwareEngineNetworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.ICreateVmwareEngineNetworkRequest);

                    /** CreateVmwareEngineNetworkRequest parent. */
                    public parent: string;

                    /** CreateVmwareEngineNetworkRequest vmwareEngineNetworkId. */
                    public vmwareEngineNetworkId: string;

                    /** CreateVmwareEngineNetworkRequest vmwareEngineNetwork. */
                    public vmwareEngineNetwork?: (google.cloud.vmwareengine.v1.IVmwareEngineNetwork|null);

                    /** CreateVmwareEngineNetworkRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateVmwareEngineNetworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateVmwareEngineNetworkRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.ICreateVmwareEngineNetworkRequest): google.cloud.vmwareengine.v1.CreateVmwareEngineNetworkRequest;

                    /**
                     * Encodes the specified CreateVmwareEngineNetworkRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.CreateVmwareEngineNetworkRequest.verify|verify} messages.
                     * @param message CreateVmwareEngineNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.ICreateVmwareEngineNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateVmwareEngineNetworkRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.CreateVmwareEngineNetworkRequest.verify|verify} messages.
                     * @param message CreateVmwareEngineNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.ICreateVmwareEngineNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateVmwareEngineNetworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateVmwareEngineNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.CreateVmwareEngineNetworkRequest;

                    /**
                     * Decodes a CreateVmwareEngineNetworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateVmwareEngineNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.CreateVmwareEngineNetworkRequest;

                    /**
                     * Verifies a CreateVmwareEngineNetworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateVmwareEngineNetworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateVmwareEngineNetworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.CreateVmwareEngineNetworkRequest;

                    /**
                     * Creates a plain object from a CreateVmwareEngineNetworkRequest message. Also converts values to other types if specified.
                     * @param message CreateVmwareEngineNetworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.CreateVmwareEngineNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateVmwareEngineNetworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateVmwareEngineNetworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateVmwareEngineNetworkRequest. */
                interface IUpdateVmwareEngineNetworkRequest {

                    /** UpdateVmwareEngineNetworkRequest vmwareEngineNetwork */
                    vmwareEngineNetwork?: (google.cloud.vmwareengine.v1.IVmwareEngineNetwork|null);

                    /** UpdateVmwareEngineNetworkRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateVmwareEngineNetworkRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateVmwareEngineNetworkRequest. */
                class UpdateVmwareEngineNetworkRequest implements IUpdateVmwareEngineNetworkRequest {

                    /**
                     * Constructs a new UpdateVmwareEngineNetworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IUpdateVmwareEngineNetworkRequest);

                    /** UpdateVmwareEngineNetworkRequest vmwareEngineNetwork. */
                    public vmwareEngineNetwork?: (google.cloud.vmwareengine.v1.IVmwareEngineNetwork|null);

                    /** UpdateVmwareEngineNetworkRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateVmwareEngineNetworkRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateVmwareEngineNetworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateVmwareEngineNetworkRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IUpdateVmwareEngineNetworkRequest): google.cloud.vmwareengine.v1.UpdateVmwareEngineNetworkRequest;

                    /**
                     * Encodes the specified UpdateVmwareEngineNetworkRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.UpdateVmwareEngineNetworkRequest.verify|verify} messages.
                     * @param message UpdateVmwareEngineNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IUpdateVmwareEngineNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateVmwareEngineNetworkRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.UpdateVmwareEngineNetworkRequest.verify|verify} messages.
                     * @param message UpdateVmwareEngineNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IUpdateVmwareEngineNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateVmwareEngineNetworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateVmwareEngineNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.UpdateVmwareEngineNetworkRequest;

                    /**
                     * Decodes an UpdateVmwareEngineNetworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateVmwareEngineNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.UpdateVmwareEngineNetworkRequest;

                    /**
                     * Verifies an UpdateVmwareEngineNetworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateVmwareEngineNetworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateVmwareEngineNetworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.UpdateVmwareEngineNetworkRequest;

                    /**
                     * Creates a plain object from an UpdateVmwareEngineNetworkRequest message. Also converts values to other types if specified.
                     * @param message UpdateVmwareEngineNetworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.UpdateVmwareEngineNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateVmwareEngineNetworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateVmwareEngineNetworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteVmwareEngineNetworkRequest. */
                interface IDeleteVmwareEngineNetworkRequest {

                    /** DeleteVmwareEngineNetworkRequest name */
                    name?: (string|null);

                    /** DeleteVmwareEngineNetworkRequest requestId */
                    requestId?: (string|null);

                    /** DeleteVmwareEngineNetworkRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteVmwareEngineNetworkRequest. */
                class DeleteVmwareEngineNetworkRequest implements IDeleteVmwareEngineNetworkRequest {

                    /**
                     * Constructs a new DeleteVmwareEngineNetworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IDeleteVmwareEngineNetworkRequest);

                    /** DeleteVmwareEngineNetworkRequest name. */
                    public name: string;

                    /** DeleteVmwareEngineNetworkRequest requestId. */
                    public requestId: string;

                    /** DeleteVmwareEngineNetworkRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteVmwareEngineNetworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteVmwareEngineNetworkRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IDeleteVmwareEngineNetworkRequest): google.cloud.vmwareengine.v1.DeleteVmwareEngineNetworkRequest;

                    /**
                     * Encodes the specified DeleteVmwareEngineNetworkRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.DeleteVmwareEngineNetworkRequest.verify|verify} messages.
                     * @param message DeleteVmwareEngineNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IDeleteVmwareEngineNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteVmwareEngineNetworkRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.DeleteVmwareEngineNetworkRequest.verify|verify} messages.
                     * @param message DeleteVmwareEngineNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IDeleteVmwareEngineNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteVmwareEngineNetworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteVmwareEngineNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.DeleteVmwareEngineNetworkRequest;

                    /**
                     * Decodes a DeleteVmwareEngineNetworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteVmwareEngineNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.DeleteVmwareEngineNetworkRequest;

                    /**
                     * Verifies a DeleteVmwareEngineNetworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteVmwareEngineNetworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteVmwareEngineNetworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.DeleteVmwareEngineNetworkRequest;

                    /**
                     * Creates a plain object from a DeleteVmwareEngineNetworkRequest message. Also converts values to other types if specified.
                     * @param message DeleteVmwareEngineNetworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.DeleteVmwareEngineNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteVmwareEngineNetworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteVmwareEngineNetworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetVmwareEngineNetworkRequest. */
                interface IGetVmwareEngineNetworkRequest {

                    /** GetVmwareEngineNetworkRequest name */
                    name?: (string|null);
                }

                /** Represents a GetVmwareEngineNetworkRequest. */
                class GetVmwareEngineNetworkRequest implements IGetVmwareEngineNetworkRequest {

                    /**
                     * Constructs a new GetVmwareEngineNetworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IGetVmwareEngineNetworkRequest);

                    /** GetVmwareEngineNetworkRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetVmwareEngineNetworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetVmwareEngineNetworkRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IGetVmwareEngineNetworkRequest): google.cloud.vmwareengine.v1.GetVmwareEngineNetworkRequest;

                    /**
                     * Encodes the specified GetVmwareEngineNetworkRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.GetVmwareEngineNetworkRequest.verify|verify} messages.
                     * @param message GetVmwareEngineNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IGetVmwareEngineNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetVmwareEngineNetworkRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.GetVmwareEngineNetworkRequest.verify|verify} messages.
                     * @param message GetVmwareEngineNetworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IGetVmwareEngineNetworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetVmwareEngineNetworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetVmwareEngineNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.GetVmwareEngineNetworkRequest;

                    /**
                     * Decodes a GetVmwareEngineNetworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetVmwareEngineNetworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.GetVmwareEngineNetworkRequest;

                    /**
                     * Verifies a GetVmwareEngineNetworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetVmwareEngineNetworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetVmwareEngineNetworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.GetVmwareEngineNetworkRequest;

                    /**
                     * Creates a plain object from a GetVmwareEngineNetworkRequest message. Also converts values to other types if specified.
                     * @param message GetVmwareEngineNetworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.GetVmwareEngineNetworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetVmwareEngineNetworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetVmwareEngineNetworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVmwareEngineNetworksRequest. */
                interface IListVmwareEngineNetworksRequest {

                    /** ListVmwareEngineNetworksRequest parent */
                    parent?: (string|null);

                    /** ListVmwareEngineNetworksRequest pageSize */
                    pageSize?: (number|null);

                    /** ListVmwareEngineNetworksRequest pageToken */
                    pageToken?: (string|null);

                    /** ListVmwareEngineNetworksRequest filter */
                    filter?: (string|null);

                    /** ListVmwareEngineNetworksRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListVmwareEngineNetworksRequest. */
                class ListVmwareEngineNetworksRequest implements IListVmwareEngineNetworksRequest {

                    /**
                     * Constructs a new ListVmwareEngineNetworksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListVmwareEngineNetworksRequest);

                    /** ListVmwareEngineNetworksRequest parent. */
                    public parent: string;

                    /** ListVmwareEngineNetworksRequest pageSize. */
                    public pageSize: number;

                    /** ListVmwareEngineNetworksRequest pageToken. */
                    public pageToken: string;

                    /** ListVmwareEngineNetworksRequest filter. */
                    public filter: string;

                    /** ListVmwareEngineNetworksRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListVmwareEngineNetworksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVmwareEngineNetworksRequest instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListVmwareEngineNetworksRequest): google.cloud.vmwareengine.v1.ListVmwareEngineNetworksRequest;

                    /**
                     * Encodes the specified ListVmwareEngineNetworksRequest message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListVmwareEngineNetworksRequest.verify|verify} messages.
                     * @param message ListVmwareEngineNetworksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListVmwareEngineNetworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVmwareEngineNetworksRequest message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListVmwareEngineNetworksRequest.verify|verify} messages.
                     * @param message ListVmwareEngineNetworksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListVmwareEngineNetworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVmwareEngineNetworksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVmwareEngineNetworksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListVmwareEngineNetworksRequest;

                    /**
                     * Decodes a ListVmwareEngineNetworksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVmwareEngineNetworksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListVmwareEngineNetworksRequest;

                    /**
                     * Verifies a ListVmwareEngineNetworksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVmwareEngineNetworksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVmwareEngineNetworksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListVmwareEngineNetworksRequest;

                    /**
                     * Creates a plain object from a ListVmwareEngineNetworksRequest message. Also converts values to other types if specified.
                     * @param message ListVmwareEngineNetworksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListVmwareEngineNetworksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVmwareEngineNetworksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVmwareEngineNetworksRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVmwareEngineNetworksResponse. */
                interface IListVmwareEngineNetworksResponse {

                    /** ListVmwareEngineNetworksResponse vmwareEngineNetworks */
                    vmwareEngineNetworks?: (google.cloud.vmwareengine.v1.IVmwareEngineNetwork[]|null);

                    /** ListVmwareEngineNetworksResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListVmwareEngineNetworksResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListVmwareEngineNetworksResponse. */
                class ListVmwareEngineNetworksResponse implements IListVmwareEngineNetworksResponse {

                    /**
                     * Constructs a new ListVmwareEngineNetworksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.vmwareengine.v1.IListVmwareEngineNetworksResponse);

                    /** ListVmwareEngineNetworksResponse vmwareEngineNetworks. */
                    public vmwareEngineNetworks: google.cloud.vmwareengine.v1.IVmwareEngineNetwork[];

                    /** ListVmwareEngineNetworksResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListVmwareEngineNetworksResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListVmwareEngineNetworksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVmwareEngineNetworksResponse instance
                     */
                    public static create(properties?: google.cloud.vmwareengine.v1.IListVmwareEngineNetworksResponse): google.cloud.vmwareengine.v1.ListVmwareEngineNetworksResponse;

                    /**
                     * Encodes the specified ListVmwareEngineNetworksResponse message. Does not implicitly {@link google.cloud.vmwareengine.v1.ListVmwareEngineNetworksResponse.verify|verify} messages.
                     * @param message ListVmwareEngineNetworksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.vmwareengine.v1.IListVmwareEngineNetworksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVmwareEngineNetworksResponse message, length delimited. Does not implicitly {@link google.cloud.vmwareengine.v1.ListVmwareEngineNetworksResponse.verify|verify} messages.
                     * @param message ListVmwareEngineNetworksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.vmwareengine.v1.IListVmwareEngineNetworksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVmwareEngineNetworksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVmwareEngineNetworksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.vmwareengine.v1.ListVmwareEngineNetworksResponse;

                    /**
                     * Decodes a ListVmwareEngineNetworksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVmwareEngineNetworksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.vmwareengine.v1.ListVmwareEngineNetworksResponse;

                    /**
                     * Verifies a ListVmwareEngineNetworksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVmwareEngineNetworksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVmwareEngineNetworksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.vmwareengine.v1.ListVmwareEngineNetworksResponse;

                    /**
                     * Creates a plain object from a ListVmwareEngineNetworksResponse message. Also converts values to other types if specified.
                     * @param message ListVmwareEngineNetworksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.vmwareengine.v1.ListVmwareEngineNetworksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVmwareEngineNetworksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVmwareEngineNetworksResponse
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

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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
