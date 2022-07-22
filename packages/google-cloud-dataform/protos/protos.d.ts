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

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace dataform. */
        namespace dataform {

            /** Namespace v1alpha2. */
            namespace v1alpha2 {

                /** Represents a Dataform */
                class Dataform extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Dataform service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Dataform service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Dataform;

                    /**
                     * Calls ListRepositories.
                     * @param request ListRepositoriesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRepositoriesResponse
                     */
                    public listRepositories(request: google.cloud.dataform.v1alpha2.IListRepositoriesRequest, callback: google.cloud.dataform.v1alpha2.Dataform.ListRepositoriesCallback): void;

                    /**
                     * Calls ListRepositories.
                     * @param request ListRepositoriesRequest message or plain object
                     * @returns Promise
                     */
                    public listRepositories(request: google.cloud.dataform.v1alpha2.IListRepositoriesRequest): Promise<google.cloud.dataform.v1alpha2.ListRepositoriesResponse>;

                    /**
                     * Calls GetRepository.
                     * @param request GetRepositoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Repository
                     */
                    public getRepository(request: google.cloud.dataform.v1alpha2.IGetRepositoryRequest, callback: google.cloud.dataform.v1alpha2.Dataform.GetRepositoryCallback): void;

                    /**
                     * Calls GetRepository.
                     * @param request GetRepositoryRequest message or plain object
                     * @returns Promise
                     */
                    public getRepository(request: google.cloud.dataform.v1alpha2.IGetRepositoryRequest): Promise<google.cloud.dataform.v1alpha2.Repository>;

                    /**
                     * Calls CreateRepository.
                     * @param request CreateRepositoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Repository
                     */
                    public createRepository(request: google.cloud.dataform.v1alpha2.ICreateRepositoryRequest, callback: google.cloud.dataform.v1alpha2.Dataform.CreateRepositoryCallback): void;

                    /**
                     * Calls CreateRepository.
                     * @param request CreateRepositoryRequest message or plain object
                     * @returns Promise
                     */
                    public createRepository(request: google.cloud.dataform.v1alpha2.ICreateRepositoryRequest): Promise<google.cloud.dataform.v1alpha2.Repository>;

                    /**
                     * Calls UpdateRepository.
                     * @param request UpdateRepositoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Repository
                     */
                    public updateRepository(request: google.cloud.dataform.v1alpha2.IUpdateRepositoryRequest, callback: google.cloud.dataform.v1alpha2.Dataform.UpdateRepositoryCallback): void;

                    /**
                     * Calls UpdateRepository.
                     * @param request UpdateRepositoryRequest message or plain object
                     * @returns Promise
                     */
                    public updateRepository(request: google.cloud.dataform.v1alpha2.IUpdateRepositoryRequest): Promise<google.cloud.dataform.v1alpha2.Repository>;

                    /**
                     * Calls DeleteRepository.
                     * @param request DeleteRepositoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteRepository(request: google.cloud.dataform.v1alpha2.IDeleteRepositoryRequest, callback: google.cloud.dataform.v1alpha2.Dataform.DeleteRepositoryCallback): void;

                    /**
                     * Calls DeleteRepository.
                     * @param request DeleteRepositoryRequest message or plain object
                     * @returns Promise
                     */
                    public deleteRepository(request: google.cloud.dataform.v1alpha2.IDeleteRepositoryRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls FetchRemoteBranches.
                     * @param request FetchRemoteBranchesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FetchRemoteBranchesResponse
                     */
                    public fetchRemoteBranches(request: google.cloud.dataform.v1alpha2.IFetchRemoteBranchesRequest, callback: google.cloud.dataform.v1alpha2.Dataform.FetchRemoteBranchesCallback): void;

                    /**
                     * Calls FetchRemoteBranches.
                     * @param request FetchRemoteBranchesRequest message or plain object
                     * @returns Promise
                     */
                    public fetchRemoteBranches(request: google.cloud.dataform.v1alpha2.IFetchRemoteBranchesRequest): Promise<google.cloud.dataform.v1alpha2.FetchRemoteBranchesResponse>;

                    /**
                     * Calls ListWorkspaces.
                     * @param request ListWorkspacesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkspacesResponse
                     */
                    public listWorkspaces(request: google.cloud.dataform.v1alpha2.IListWorkspacesRequest, callback: google.cloud.dataform.v1alpha2.Dataform.ListWorkspacesCallback): void;

                    /**
                     * Calls ListWorkspaces.
                     * @param request ListWorkspacesRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkspaces(request: google.cloud.dataform.v1alpha2.IListWorkspacesRequest): Promise<google.cloud.dataform.v1alpha2.ListWorkspacesResponse>;

                    /**
                     * Calls GetWorkspace.
                     * @param request GetWorkspaceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Workspace
                     */
                    public getWorkspace(request: google.cloud.dataform.v1alpha2.IGetWorkspaceRequest, callback: google.cloud.dataform.v1alpha2.Dataform.GetWorkspaceCallback): void;

                    /**
                     * Calls GetWorkspace.
                     * @param request GetWorkspaceRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkspace(request: google.cloud.dataform.v1alpha2.IGetWorkspaceRequest): Promise<google.cloud.dataform.v1alpha2.Workspace>;

                    /**
                     * Calls CreateWorkspace.
                     * @param request CreateWorkspaceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Workspace
                     */
                    public createWorkspace(request: google.cloud.dataform.v1alpha2.ICreateWorkspaceRequest, callback: google.cloud.dataform.v1alpha2.Dataform.CreateWorkspaceCallback): void;

                    /**
                     * Calls CreateWorkspace.
                     * @param request CreateWorkspaceRequest message or plain object
                     * @returns Promise
                     */
                    public createWorkspace(request: google.cloud.dataform.v1alpha2.ICreateWorkspaceRequest): Promise<google.cloud.dataform.v1alpha2.Workspace>;

                    /**
                     * Calls DeleteWorkspace.
                     * @param request DeleteWorkspaceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteWorkspace(request: google.cloud.dataform.v1alpha2.IDeleteWorkspaceRequest, callback: google.cloud.dataform.v1alpha2.Dataform.DeleteWorkspaceCallback): void;

                    /**
                     * Calls DeleteWorkspace.
                     * @param request DeleteWorkspaceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWorkspace(request: google.cloud.dataform.v1alpha2.IDeleteWorkspaceRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls InstallNpmPackages.
                     * @param request InstallNpmPackagesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and InstallNpmPackagesResponse
                     */
                    public installNpmPackages(request: google.cloud.dataform.v1alpha2.IInstallNpmPackagesRequest, callback: google.cloud.dataform.v1alpha2.Dataform.InstallNpmPackagesCallback): void;

                    /**
                     * Calls InstallNpmPackages.
                     * @param request InstallNpmPackagesRequest message or plain object
                     * @returns Promise
                     */
                    public installNpmPackages(request: google.cloud.dataform.v1alpha2.IInstallNpmPackagesRequest): Promise<google.cloud.dataform.v1alpha2.InstallNpmPackagesResponse>;

                    /**
                     * Calls PullGitCommits.
                     * @param request PullGitCommitsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public pullGitCommits(request: google.cloud.dataform.v1alpha2.IPullGitCommitsRequest, callback: google.cloud.dataform.v1alpha2.Dataform.PullGitCommitsCallback): void;

                    /**
                     * Calls PullGitCommits.
                     * @param request PullGitCommitsRequest message or plain object
                     * @returns Promise
                     */
                    public pullGitCommits(request: google.cloud.dataform.v1alpha2.IPullGitCommitsRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls PushGitCommits.
                     * @param request PushGitCommitsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public pushGitCommits(request: google.cloud.dataform.v1alpha2.IPushGitCommitsRequest, callback: google.cloud.dataform.v1alpha2.Dataform.PushGitCommitsCallback): void;

                    /**
                     * Calls PushGitCommits.
                     * @param request PushGitCommitsRequest message or plain object
                     * @returns Promise
                     */
                    public pushGitCommits(request: google.cloud.dataform.v1alpha2.IPushGitCommitsRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls FetchFileGitStatuses.
                     * @param request FetchFileGitStatusesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FetchFileGitStatusesResponse
                     */
                    public fetchFileGitStatuses(request: google.cloud.dataform.v1alpha2.IFetchFileGitStatusesRequest, callback: google.cloud.dataform.v1alpha2.Dataform.FetchFileGitStatusesCallback): void;

                    /**
                     * Calls FetchFileGitStatuses.
                     * @param request FetchFileGitStatusesRequest message or plain object
                     * @returns Promise
                     */
                    public fetchFileGitStatuses(request: google.cloud.dataform.v1alpha2.IFetchFileGitStatusesRequest): Promise<google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse>;

                    /**
                     * Calls FetchGitAheadBehind.
                     * @param request FetchGitAheadBehindRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FetchGitAheadBehindResponse
                     */
                    public fetchGitAheadBehind(request: google.cloud.dataform.v1alpha2.IFetchGitAheadBehindRequest, callback: google.cloud.dataform.v1alpha2.Dataform.FetchGitAheadBehindCallback): void;

                    /**
                     * Calls FetchGitAheadBehind.
                     * @param request FetchGitAheadBehindRequest message or plain object
                     * @returns Promise
                     */
                    public fetchGitAheadBehind(request: google.cloud.dataform.v1alpha2.IFetchGitAheadBehindRequest): Promise<google.cloud.dataform.v1alpha2.FetchGitAheadBehindResponse>;

                    /**
                     * Calls CommitWorkspaceChanges.
                     * @param request CommitWorkspaceChangesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public commitWorkspaceChanges(request: google.cloud.dataform.v1alpha2.ICommitWorkspaceChangesRequest, callback: google.cloud.dataform.v1alpha2.Dataform.CommitWorkspaceChangesCallback): void;

                    /**
                     * Calls CommitWorkspaceChanges.
                     * @param request CommitWorkspaceChangesRequest message or plain object
                     * @returns Promise
                     */
                    public commitWorkspaceChanges(request: google.cloud.dataform.v1alpha2.ICommitWorkspaceChangesRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ResetWorkspaceChanges.
                     * @param request ResetWorkspaceChangesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public resetWorkspaceChanges(request: google.cloud.dataform.v1alpha2.IResetWorkspaceChangesRequest, callback: google.cloud.dataform.v1alpha2.Dataform.ResetWorkspaceChangesCallback): void;

                    /**
                     * Calls ResetWorkspaceChanges.
                     * @param request ResetWorkspaceChangesRequest message or plain object
                     * @returns Promise
                     */
                    public resetWorkspaceChanges(request: google.cloud.dataform.v1alpha2.IResetWorkspaceChangesRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls FetchFileDiff.
                     * @param request FetchFileDiffRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FetchFileDiffResponse
                     */
                    public fetchFileDiff(request: google.cloud.dataform.v1alpha2.IFetchFileDiffRequest, callback: google.cloud.dataform.v1alpha2.Dataform.FetchFileDiffCallback): void;

                    /**
                     * Calls FetchFileDiff.
                     * @param request FetchFileDiffRequest message or plain object
                     * @returns Promise
                     */
                    public fetchFileDiff(request: google.cloud.dataform.v1alpha2.IFetchFileDiffRequest): Promise<google.cloud.dataform.v1alpha2.FetchFileDiffResponse>;

                    /**
                     * Calls QueryDirectoryContents.
                     * @param request QueryDirectoryContentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryDirectoryContentsResponse
                     */
                    public queryDirectoryContents(request: google.cloud.dataform.v1alpha2.IQueryDirectoryContentsRequest, callback: google.cloud.dataform.v1alpha2.Dataform.QueryDirectoryContentsCallback): void;

                    /**
                     * Calls QueryDirectoryContents.
                     * @param request QueryDirectoryContentsRequest message or plain object
                     * @returns Promise
                     */
                    public queryDirectoryContents(request: google.cloud.dataform.v1alpha2.IQueryDirectoryContentsRequest): Promise<google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse>;

                    /**
                     * Calls MakeDirectory.
                     * @param request MakeDirectoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and MakeDirectoryResponse
                     */
                    public makeDirectory(request: google.cloud.dataform.v1alpha2.IMakeDirectoryRequest, callback: google.cloud.dataform.v1alpha2.Dataform.MakeDirectoryCallback): void;

                    /**
                     * Calls MakeDirectory.
                     * @param request MakeDirectoryRequest message or plain object
                     * @returns Promise
                     */
                    public makeDirectory(request: google.cloud.dataform.v1alpha2.IMakeDirectoryRequest): Promise<google.cloud.dataform.v1alpha2.MakeDirectoryResponse>;

                    /**
                     * Calls RemoveDirectory.
                     * @param request RemoveDirectoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public removeDirectory(request: google.cloud.dataform.v1alpha2.IRemoveDirectoryRequest, callback: google.cloud.dataform.v1alpha2.Dataform.RemoveDirectoryCallback): void;

                    /**
                     * Calls RemoveDirectory.
                     * @param request RemoveDirectoryRequest message or plain object
                     * @returns Promise
                     */
                    public removeDirectory(request: google.cloud.dataform.v1alpha2.IRemoveDirectoryRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls MoveDirectory.
                     * @param request MoveDirectoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and MoveDirectoryResponse
                     */
                    public moveDirectory(request: google.cloud.dataform.v1alpha2.IMoveDirectoryRequest, callback: google.cloud.dataform.v1alpha2.Dataform.MoveDirectoryCallback): void;

                    /**
                     * Calls MoveDirectory.
                     * @param request MoveDirectoryRequest message or plain object
                     * @returns Promise
                     */
                    public moveDirectory(request: google.cloud.dataform.v1alpha2.IMoveDirectoryRequest): Promise<google.cloud.dataform.v1alpha2.MoveDirectoryResponse>;

                    /**
                     * Calls ReadFile.
                     * @param request ReadFileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ReadFileResponse
                     */
                    public readFile(request: google.cloud.dataform.v1alpha2.IReadFileRequest, callback: google.cloud.dataform.v1alpha2.Dataform.ReadFileCallback): void;

                    /**
                     * Calls ReadFile.
                     * @param request ReadFileRequest message or plain object
                     * @returns Promise
                     */
                    public readFile(request: google.cloud.dataform.v1alpha2.IReadFileRequest): Promise<google.cloud.dataform.v1alpha2.ReadFileResponse>;

                    /**
                     * Calls RemoveFile.
                     * @param request RemoveFileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public removeFile(request: google.cloud.dataform.v1alpha2.IRemoveFileRequest, callback: google.cloud.dataform.v1alpha2.Dataform.RemoveFileCallback): void;

                    /**
                     * Calls RemoveFile.
                     * @param request RemoveFileRequest message or plain object
                     * @returns Promise
                     */
                    public removeFile(request: google.cloud.dataform.v1alpha2.IRemoveFileRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls MoveFile.
                     * @param request MoveFileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and MoveFileResponse
                     */
                    public moveFile(request: google.cloud.dataform.v1alpha2.IMoveFileRequest, callback: google.cloud.dataform.v1alpha2.Dataform.MoveFileCallback): void;

                    /**
                     * Calls MoveFile.
                     * @param request MoveFileRequest message or plain object
                     * @returns Promise
                     */
                    public moveFile(request: google.cloud.dataform.v1alpha2.IMoveFileRequest): Promise<google.cloud.dataform.v1alpha2.MoveFileResponse>;

                    /**
                     * Calls WriteFile.
                     * @param request WriteFileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WriteFileResponse
                     */
                    public writeFile(request: google.cloud.dataform.v1alpha2.IWriteFileRequest, callback: google.cloud.dataform.v1alpha2.Dataform.WriteFileCallback): void;

                    /**
                     * Calls WriteFile.
                     * @param request WriteFileRequest message or plain object
                     * @returns Promise
                     */
                    public writeFile(request: google.cloud.dataform.v1alpha2.IWriteFileRequest): Promise<google.cloud.dataform.v1alpha2.WriteFileResponse>;

                    /**
                     * Calls ListCompilationResults.
                     * @param request ListCompilationResultsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCompilationResultsResponse
                     */
                    public listCompilationResults(request: google.cloud.dataform.v1alpha2.IListCompilationResultsRequest, callback: google.cloud.dataform.v1alpha2.Dataform.ListCompilationResultsCallback): void;

                    /**
                     * Calls ListCompilationResults.
                     * @param request ListCompilationResultsRequest message or plain object
                     * @returns Promise
                     */
                    public listCompilationResults(request: google.cloud.dataform.v1alpha2.IListCompilationResultsRequest): Promise<google.cloud.dataform.v1alpha2.ListCompilationResultsResponse>;

                    /**
                     * Calls GetCompilationResult.
                     * @param request GetCompilationResultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CompilationResult
                     */
                    public getCompilationResult(request: google.cloud.dataform.v1alpha2.IGetCompilationResultRequest, callback: google.cloud.dataform.v1alpha2.Dataform.GetCompilationResultCallback): void;

                    /**
                     * Calls GetCompilationResult.
                     * @param request GetCompilationResultRequest message or plain object
                     * @returns Promise
                     */
                    public getCompilationResult(request: google.cloud.dataform.v1alpha2.IGetCompilationResultRequest): Promise<google.cloud.dataform.v1alpha2.CompilationResult>;

                    /**
                     * Calls CreateCompilationResult.
                     * @param request CreateCompilationResultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CompilationResult
                     */
                    public createCompilationResult(request: google.cloud.dataform.v1alpha2.ICreateCompilationResultRequest, callback: google.cloud.dataform.v1alpha2.Dataform.CreateCompilationResultCallback): void;

                    /**
                     * Calls CreateCompilationResult.
                     * @param request CreateCompilationResultRequest message or plain object
                     * @returns Promise
                     */
                    public createCompilationResult(request: google.cloud.dataform.v1alpha2.ICreateCompilationResultRequest): Promise<google.cloud.dataform.v1alpha2.CompilationResult>;

                    /**
                     * Calls QueryCompilationResultActions.
                     * @param request QueryCompilationResultActionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryCompilationResultActionsResponse
                     */
                    public queryCompilationResultActions(request: google.cloud.dataform.v1alpha2.IQueryCompilationResultActionsRequest, callback: google.cloud.dataform.v1alpha2.Dataform.QueryCompilationResultActionsCallback): void;

                    /**
                     * Calls QueryCompilationResultActions.
                     * @param request QueryCompilationResultActionsRequest message or plain object
                     * @returns Promise
                     */
                    public queryCompilationResultActions(request: google.cloud.dataform.v1alpha2.IQueryCompilationResultActionsRequest): Promise<google.cloud.dataform.v1alpha2.QueryCompilationResultActionsResponse>;

                    /**
                     * Calls ListWorkflowInvocations.
                     * @param request ListWorkflowInvocationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkflowInvocationsResponse
                     */
                    public listWorkflowInvocations(request: google.cloud.dataform.v1alpha2.IListWorkflowInvocationsRequest, callback: google.cloud.dataform.v1alpha2.Dataform.ListWorkflowInvocationsCallback): void;

                    /**
                     * Calls ListWorkflowInvocations.
                     * @param request ListWorkflowInvocationsRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkflowInvocations(request: google.cloud.dataform.v1alpha2.IListWorkflowInvocationsRequest): Promise<google.cloud.dataform.v1alpha2.ListWorkflowInvocationsResponse>;

                    /**
                     * Calls GetWorkflowInvocation.
                     * @param request GetWorkflowInvocationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WorkflowInvocation
                     */
                    public getWorkflowInvocation(request: google.cloud.dataform.v1alpha2.IGetWorkflowInvocationRequest, callback: google.cloud.dataform.v1alpha2.Dataform.GetWorkflowInvocationCallback): void;

                    /**
                     * Calls GetWorkflowInvocation.
                     * @param request GetWorkflowInvocationRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkflowInvocation(request: google.cloud.dataform.v1alpha2.IGetWorkflowInvocationRequest): Promise<google.cloud.dataform.v1alpha2.WorkflowInvocation>;

                    /**
                     * Calls CreateWorkflowInvocation.
                     * @param request CreateWorkflowInvocationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WorkflowInvocation
                     */
                    public createWorkflowInvocation(request: google.cloud.dataform.v1alpha2.ICreateWorkflowInvocationRequest, callback: google.cloud.dataform.v1alpha2.Dataform.CreateWorkflowInvocationCallback): void;

                    /**
                     * Calls CreateWorkflowInvocation.
                     * @param request CreateWorkflowInvocationRequest message or plain object
                     * @returns Promise
                     */
                    public createWorkflowInvocation(request: google.cloud.dataform.v1alpha2.ICreateWorkflowInvocationRequest): Promise<google.cloud.dataform.v1alpha2.WorkflowInvocation>;

                    /**
                     * Calls DeleteWorkflowInvocation.
                     * @param request DeleteWorkflowInvocationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteWorkflowInvocation(request: google.cloud.dataform.v1alpha2.IDeleteWorkflowInvocationRequest, callback: google.cloud.dataform.v1alpha2.Dataform.DeleteWorkflowInvocationCallback): void;

                    /**
                     * Calls DeleteWorkflowInvocation.
                     * @param request DeleteWorkflowInvocationRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWorkflowInvocation(request: google.cloud.dataform.v1alpha2.IDeleteWorkflowInvocationRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls CancelWorkflowInvocation.
                     * @param request CancelWorkflowInvocationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public cancelWorkflowInvocation(request: google.cloud.dataform.v1alpha2.ICancelWorkflowInvocationRequest, callback: google.cloud.dataform.v1alpha2.Dataform.CancelWorkflowInvocationCallback): void;

                    /**
                     * Calls CancelWorkflowInvocation.
                     * @param request CancelWorkflowInvocationRequest message or plain object
                     * @returns Promise
                     */
                    public cancelWorkflowInvocation(request: google.cloud.dataform.v1alpha2.ICancelWorkflowInvocationRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls QueryWorkflowInvocationActions.
                     * @param request QueryWorkflowInvocationActionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryWorkflowInvocationActionsResponse
                     */
                    public queryWorkflowInvocationActions(request: google.cloud.dataform.v1alpha2.IQueryWorkflowInvocationActionsRequest, callback: google.cloud.dataform.v1alpha2.Dataform.QueryWorkflowInvocationActionsCallback): void;

                    /**
                     * Calls QueryWorkflowInvocationActions.
                     * @param request QueryWorkflowInvocationActionsRequest message or plain object
                     * @returns Promise
                     */
                    public queryWorkflowInvocationActions(request: google.cloud.dataform.v1alpha2.IQueryWorkflowInvocationActionsRequest): Promise<google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsResponse>;
                }

                namespace Dataform {

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#listRepositories}.
                     * @param error Error, if any
                     * @param [response] ListRepositoriesResponse
                     */
                    type ListRepositoriesCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.ListRepositoriesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#getRepository}.
                     * @param error Error, if any
                     * @param [response] Repository
                     */
                    type GetRepositoryCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.Repository) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#createRepository}.
                     * @param error Error, if any
                     * @param [response] Repository
                     */
                    type CreateRepositoryCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.Repository) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#updateRepository}.
                     * @param error Error, if any
                     * @param [response] Repository
                     */
                    type UpdateRepositoryCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.Repository) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#deleteRepository}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteRepositoryCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#fetchRemoteBranches}.
                     * @param error Error, if any
                     * @param [response] FetchRemoteBranchesResponse
                     */
                    type FetchRemoteBranchesCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.FetchRemoteBranchesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#listWorkspaces}.
                     * @param error Error, if any
                     * @param [response] ListWorkspacesResponse
                     */
                    type ListWorkspacesCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.ListWorkspacesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#getWorkspace}.
                     * @param error Error, if any
                     * @param [response] Workspace
                     */
                    type GetWorkspaceCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.Workspace) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#createWorkspace}.
                     * @param error Error, if any
                     * @param [response] Workspace
                     */
                    type CreateWorkspaceCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.Workspace) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#deleteWorkspace}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteWorkspaceCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#installNpmPackages}.
                     * @param error Error, if any
                     * @param [response] InstallNpmPackagesResponse
                     */
                    type InstallNpmPackagesCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.InstallNpmPackagesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#pullGitCommits}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type PullGitCommitsCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#pushGitCommits}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type PushGitCommitsCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#fetchFileGitStatuses}.
                     * @param error Error, if any
                     * @param [response] FetchFileGitStatusesResponse
                     */
                    type FetchFileGitStatusesCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#fetchGitAheadBehind}.
                     * @param error Error, if any
                     * @param [response] FetchGitAheadBehindResponse
                     */
                    type FetchGitAheadBehindCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.FetchGitAheadBehindResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#commitWorkspaceChanges}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type CommitWorkspaceChangesCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#resetWorkspaceChanges}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type ResetWorkspaceChangesCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#fetchFileDiff}.
                     * @param error Error, if any
                     * @param [response] FetchFileDiffResponse
                     */
                    type FetchFileDiffCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.FetchFileDiffResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#queryDirectoryContents}.
                     * @param error Error, if any
                     * @param [response] QueryDirectoryContentsResponse
                     */
                    type QueryDirectoryContentsCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#makeDirectory}.
                     * @param error Error, if any
                     * @param [response] MakeDirectoryResponse
                     */
                    type MakeDirectoryCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.MakeDirectoryResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#removeDirectory}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type RemoveDirectoryCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#moveDirectory}.
                     * @param error Error, if any
                     * @param [response] MoveDirectoryResponse
                     */
                    type MoveDirectoryCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.MoveDirectoryResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#readFile}.
                     * @param error Error, if any
                     * @param [response] ReadFileResponse
                     */
                    type ReadFileCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.ReadFileResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#removeFile}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type RemoveFileCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#moveFile}.
                     * @param error Error, if any
                     * @param [response] MoveFileResponse
                     */
                    type MoveFileCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.MoveFileResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#writeFile}.
                     * @param error Error, if any
                     * @param [response] WriteFileResponse
                     */
                    type WriteFileCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.WriteFileResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#listCompilationResults}.
                     * @param error Error, if any
                     * @param [response] ListCompilationResultsResponse
                     */
                    type ListCompilationResultsCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.ListCompilationResultsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#getCompilationResult}.
                     * @param error Error, if any
                     * @param [response] CompilationResult
                     */
                    type GetCompilationResultCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.CompilationResult) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#createCompilationResult}.
                     * @param error Error, if any
                     * @param [response] CompilationResult
                     */
                    type CreateCompilationResultCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.CompilationResult) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#queryCompilationResultActions}.
                     * @param error Error, if any
                     * @param [response] QueryCompilationResultActionsResponse
                     */
                    type QueryCompilationResultActionsCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.QueryCompilationResultActionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#listWorkflowInvocations}.
                     * @param error Error, if any
                     * @param [response] ListWorkflowInvocationsResponse
                     */
                    type ListWorkflowInvocationsCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.ListWorkflowInvocationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#getWorkflowInvocation}.
                     * @param error Error, if any
                     * @param [response] WorkflowInvocation
                     */
                    type GetWorkflowInvocationCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.WorkflowInvocation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#createWorkflowInvocation}.
                     * @param error Error, if any
                     * @param [response] WorkflowInvocation
                     */
                    type CreateWorkflowInvocationCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.WorkflowInvocation) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#deleteWorkflowInvocation}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteWorkflowInvocationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#cancelWorkflowInvocation}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type CancelWorkflowInvocationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataform.v1alpha2.Dataform#queryWorkflowInvocationActions}.
                     * @param error Error, if any
                     * @param [response] QueryWorkflowInvocationActionsResponse
                     */
                    type QueryWorkflowInvocationActionsCallback = (error: (Error|null), response?: google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsResponse) => void;
                }

                /** Properties of a Repository. */
                interface IRepository {

                    /** Repository name */
                    name?: (string|null);

                    /** Repository gitRemoteSettings */
                    gitRemoteSettings?: (google.cloud.dataform.v1alpha2.Repository.IGitRemoteSettings|null);
                }

                /** Represents a Repository. */
                class Repository implements IRepository {

                    /**
                     * Constructs a new Repository.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IRepository);

                    /** Repository name. */
                    public name: string;

                    /** Repository gitRemoteSettings. */
                    public gitRemoteSettings?: (google.cloud.dataform.v1alpha2.Repository.IGitRemoteSettings|null);

                    /**
                     * Creates a new Repository instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Repository instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IRepository): google.cloud.dataform.v1alpha2.Repository;

                    /**
                     * Encodes the specified Repository message. Does not implicitly {@link google.cloud.dataform.v1alpha2.Repository.verify|verify} messages.
                     * @param message Repository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Repository message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.Repository.verify|verify} messages.
                     * @param message Repository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Repository message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Repository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.Repository;

                    /**
                     * Decodes a Repository message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Repository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.Repository;

                    /**
                     * Verifies a Repository message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Repository message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Repository
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.Repository;

                    /**
                     * Creates a plain object from a Repository message. Also converts values to other types if specified.
                     * @param message Repository
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.Repository, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Repository to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Repository {

                    /** Properties of a GitRemoteSettings. */
                    interface IGitRemoteSettings {

                        /** GitRemoteSettings url */
                        url?: (string|null);

                        /** GitRemoteSettings defaultBranch */
                        defaultBranch?: (string|null);

                        /** GitRemoteSettings authenticationTokenSecretVersion */
                        authenticationTokenSecretVersion?: (string|null);

                        /** GitRemoteSettings tokenStatus */
                        tokenStatus?: (google.cloud.dataform.v1alpha2.Repository.GitRemoteSettings.TokenStatus|keyof typeof google.cloud.dataform.v1alpha2.Repository.GitRemoteSettings.TokenStatus|null);
                    }

                    /** Represents a GitRemoteSettings. */
                    class GitRemoteSettings implements IGitRemoteSettings {

                        /**
                         * Constructs a new GitRemoteSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataform.v1alpha2.Repository.IGitRemoteSettings);

                        /** GitRemoteSettings url. */
                        public url: string;

                        /** GitRemoteSettings defaultBranch. */
                        public defaultBranch: string;

                        /** GitRemoteSettings authenticationTokenSecretVersion. */
                        public authenticationTokenSecretVersion: string;

                        /** GitRemoteSettings tokenStatus. */
                        public tokenStatus: (google.cloud.dataform.v1alpha2.Repository.GitRemoteSettings.TokenStatus|keyof typeof google.cloud.dataform.v1alpha2.Repository.GitRemoteSettings.TokenStatus);

                        /**
                         * Creates a new GitRemoteSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GitRemoteSettings instance
                         */
                        public static create(properties?: google.cloud.dataform.v1alpha2.Repository.IGitRemoteSettings): google.cloud.dataform.v1alpha2.Repository.GitRemoteSettings;

                        /**
                         * Encodes the specified GitRemoteSettings message. Does not implicitly {@link google.cloud.dataform.v1alpha2.Repository.GitRemoteSettings.verify|verify} messages.
                         * @param message GitRemoteSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataform.v1alpha2.Repository.IGitRemoteSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GitRemoteSettings message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.Repository.GitRemoteSettings.verify|verify} messages.
                         * @param message GitRemoteSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataform.v1alpha2.Repository.IGitRemoteSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GitRemoteSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GitRemoteSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.Repository.GitRemoteSettings;

                        /**
                         * Decodes a GitRemoteSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GitRemoteSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.Repository.GitRemoteSettings;

                        /**
                         * Verifies a GitRemoteSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GitRemoteSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GitRemoteSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.Repository.GitRemoteSettings;

                        /**
                         * Creates a plain object from a GitRemoteSettings message. Also converts values to other types if specified.
                         * @param message GitRemoteSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataform.v1alpha2.Repository.GitRemoteSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GitRemoteSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace GitRemoteSettings {

                        /** TokenStatus enum. */
                        enum TokenStatus {
                            TOKEN_STATUS_UNSPECIFIED = 0,
                            NOT_FOUND = 1,
                            INVALID = 2,
                            VALID = 3
                        }
                    }
                }

                /** Properties of a ListRepositoriesRequest. */
                interface IListRepositoriesRequest {

                    /** ListRepositoriesRequest parent */
                    parent?: (string|null);

                    /** ListRepositoriesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRepositoriesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRepositoriesRequest orderBy */
                    orderBy?: (string|null);

                    /** ListRepositoriesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListRepositoriesRequest. */
                class ListRepositoriesRequest implements IListRepositoriesRequest {

                    /**
                     * Constructs a new ListRepositoriesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IListRepositoriesRequest);

                    /** ListRepositoriesRequest parent. */
                    public parent: string;

                    /** ListRepositoriesRequest pageSize. */
                    public pageSize: number;

                    /** ListRepositoriesRequest pageToken. */
                    public pageToken: string;

                    /** ListRepositoriesRequest orderBy. */
                    public orderBy: string;

                    /** ListRepositoriesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListRepositoriesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRepositoriesRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IListRepositoriesRequest): google.cloud.dataform.v1alpha2.ListRepositoriesRequest;

                    /**
                     * Encodes the specified ListRepositoriesRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListRepositoriesRequest.verify|verify} messages.
                     * @param message ListRepositoriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IListRepositoriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRepositoriesRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListRepositoriesRequest.verify|verify} messages.
                     * @param message ListRepositoriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IListRepositoriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRepositoriesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRepositoriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.ListRepositoriesRequest;

                    /**
                     * Decodes a ListRepositoriesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRepositoriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.ListRepositoriesRequest;

                    /**
                     * Verifies a ListRepositoriesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRepositoriesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRepositoriesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.ListRepositoriesRequest;

                    /**
                     * Creates a plain object from a ListRepositoriesRequest message. Also converts values to other types if specified.
                     * @param message ListRepositoriesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.ListRepositoriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRepositoriesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRepositoriesResponse. */
                interface IListRepositoriesResponse {

                    /** ListRepositoriesResponse repositories */
                    repositories?: (google.cloud.dataform.v1alpha2.IRepository[]|null);

                    /** ListRepositoriesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListRepositoriesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListRepositoriesResponse. */
                class ListRepositoriesResponse implements IListRepositoriesResponse {

                    /**
                     * Constructs a new ListRepositoriesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IListRepositoriesResponse);

                    /** ListRepositoriesResponse repositories. */
                    public repositories: google.cloud.dataform.v1alpha2.IRepository[];

                    /** ListRepositoriesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListRepositoriesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListRepositoriesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRepositoriesResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IListRepositoriesResponse): google.cloud.dataform.v1alpha2.ListRepositoriesResponse;

                    /**
                     * Encodes the specified ListRepositoriesResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListRepositoriesResponse.verify|verify} messages.
                     * @param message ListRepositoriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IListRepositoriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRepositoriesResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListRepositoriesResponse.verify|verify} messages.
                     * @param message ListRepositoriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IListRepositoriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRepositoriesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRepositoriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.ListRepositoriesResponse;

                    /**
                     * Decodes a ListRepositoriesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRepositoriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.ListRepositoriesResponse;

                    /**
                     * Verifies a ListRepositoriesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRepositoriesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRepositoriesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.ListRepositoriesResponse;

                    /**
                     * Creates a plain object from a ListRepositoriesResponse message. Also converts values to other types if specified.
                     * @param message ListRepositoriesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.ListRepositoriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRepositoriesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetRepositoryRequest. */
                interface IGetRepositoryRequest {

                    /** GetRepositoryRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRepositoryRequest. */
                class GetRepositoryRequest implements IGetRepositoryRequest {

                    /**
                     * Constructs a new GetRepositoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IGetRepositoryRequest);

                    /** GetRepositoryRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRepositoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRepositoryRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IGetRepositoryRequest): google.cloud.dataform.v1alpha2.GetRepositoryRequest;

                    /**
                     * Encodes the specified GetRepositoryRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.GetRepositoryRequest.verify|verify} messages.
                     * @param message GetRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IGetRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRepositoryRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.GetRepositoryRequest.verify|verify} messages.
                     * @param message GetRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IGetRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRepositoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.GetRepositoryRequest;

                    /**
                     * Decodes a GetRepositoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.GetRepositoryRequest;

                    /**
                     * Verifies a GetRepositoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRepositoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRepositoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.GetRepositoryRequest;

                    /**
                     * Creates a plain object from a GetRepositoryRequest message. Also converts values to other types if specified.
                     * @param message GetRepositoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.GetRepositoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRepositoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateRepositoryRequest. */
                interface ICreateRepositoryRequest {

                    /** CreateRepositoryRequest parent */
                    parent?: (string|null);

                    /** CreateRepositoryRequest repository */
                    repository?: (google.cloud.dataform.v1alpha2.IRepository|null);

                    /** CreateRepositoryRequest repositoryId */
                    repositoryId?: (string|null);
                }

                /** Represents a CreateRepositoryRequest. */
                class CreateRepositoryRequest implements ICreateRepositoryRequest {

                    /**
                     * Constructs a new CreateRepositoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.ICreateRepositoryRequest);

                    /** CreateRepositoryRequest parent. */
                    public parent: string;

                    /** CreateRepositoryRequest repository. */
                    public repository?: (google.cloud.dataform.v1alpha2.IRepository|null);

                    /** CreateRepositoryRequest repositoryId. */
                    public repositoryId: string;

                    /**
                     * Creates a new CreateRepositoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRepositoryRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.ICreateRepositoryRequest): google.cloud.dataform.v1alpha2.CreateRepositoryRequest;

                    /**
                     * Encodes the specified CreateRepositoryRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CreateRepositoryRequest.verify|verify} messages.
                     * @param message CreateRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.ICreateRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRepositoryRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CreateRepositoryRequest.verify|verify} messages.
                     * @param message CreateRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.ICreateRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRepositoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CreateRepositoryRequest;

                    /**
                     * Decodes a CreateRepositoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CreateRepositoryRequest;

                    /**
                     * Verifies a CreateRepositoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRepositoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRepositoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CreateRepositoryRequest;

                    /**
                     * Creates a plain object from a CreateRepositoryRequest message. Also converts values to other types if specified.
                     * @param message CreateRepositoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.CreateRepositoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRepositoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateRepositoryRequest. */
                interface IUpdateRepositoryRequest {

                    /** UpdateRepositoryRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRepositoryRequest repository */
                    repository?: (google.cloud.dataform.v1alpha2.IRepository|null);
                }

                /** Represents an UpdateRepositoryRequest. */
                class UpdateRepositoryRequest implements IUpdateRepositoryRequest {

                    /**
                     * Constructs a new UpdateRepositoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IUpdateRepositoryRequest);

                    /** UpdateRepositoryRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRepositoryRequest repository. */
                    public repository?: (google.cloud.dataform.v1alpha2.IRepository|null);

                    /**
                     * Creates a new UpdateRepositoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRepositoryRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IUpdateRepositoryRequest): google.cloud.dataform.v1alpha2.UpdateRepositoryRequest;

                    /**
                     * Encodes the specified UpdateRepositoryRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.UpdateRepositoryRequest.verify|verify} messages.
                     * @param message UpdateRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IUpdateRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRepositoryRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.UpdateRepositoryRequest.verify|verify} messages.
                     * @param message UpdateRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IUpdateRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRepositoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.UpdateRepositoryRequest;

                    /**
                     * Decodes an UpdateRepositoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.UpdateRepositoryRequest;

                    /**
                     * Verifies an UpdateRepositoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRepositoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRepositoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.UpdateRepositoryRequest;

                    /**
                     * Creates a plain object from an UpdateRepositoryRequest message. Also converts values to other types if specified.
                     * @param message UpdateRepositoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.UpdateRepositoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRepositoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteRepositoryRequest. */
                interface IDeleteRepositoryRequest {

                    /** DeleteRepositoryRequest name */
                    name?: (string|null);

                    /** DeleteRepositoryRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteRepositoryRequest. */
                class DeleteRepositoryRequest implements IDeleteRepositoryRequest {

                    /**
                     * Constructs a new DeleteRepositoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IDeleteRepositoryRequest);

                    /** DeleteRepositoryRequest name. */
                    public name: string;

                    /** DeleteRepositoryRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteRepositoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRepositoryRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IDeleteRepositoryRequest): google.cloud.dataform.v1alpha2.DeleteRepositoryRequest;

                    /**
                     * Encodes the specified DeleteRepositoryRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.DeleteRepositoryRequest.verify|verify} messages.
                     * @param message DeleteRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IDeleteRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRepositoryRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.DeleteRepositoryRequest.verify|verify} messages.
                     * @param message DeleteRepositoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IDeleteRepositoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRepositoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.DeleteRepositoryRequest;

                    /**
                     * Decodes a DeleteRepositoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRepositoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.DeleteRepositoryRequest;

                    /**
                     * Verifies a DeleteRepositoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRepositoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRepositoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.DeleteRepositoryRequest;

                    /**
                     * Creates a plain object from a DeleteRepositoryRequest message. Also converts values to other types if specified.
                     * @param message DeleteRepositoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.DeleteRepositoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRepositoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchRemoteBranchesRequest. */
                interface IFetchRemoteBranchesRequest {

                    /** FetchRemoteBranchesRequest name */
                    name?: (string|null);
                }

                /** Represents a FetchRemoteBranchesRequest. */
                class FetchRemoteBranchesRequest implements IFetchRemoteBranchesRequest {

                    /**
                     * Constructs a new FetchRemoteBranchesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IFetchRemoteBranchesRequest);

                    /** FetchRemoteBranchesRequest name. */
                    public name: string;

                    /**
                     * Creates a new FetchRemoteBranchesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchRemoteBranchesRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IFetchRemoteBranchesRequest): google.cloud.dataform.v1alpha2.FetchRemoteBranchesRequest;

                    /**
                     * Encodes the specified FetchRemoteBranchesRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchRemoteBranchesRequest.verify|verify} messages.
                     * @param message FetchRemoteBranchesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IFetchRemoteBranchesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchRemoteBranchesRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchRemoteBranchesRequest.verify|verify} messages.
                     * @param message FetchRemoteBranchesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IFetchRemoteBranchesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchRemoteBranchesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchRemoteBranchesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.FetchRemoteBranchesRequest;

                    /**
                     * Decodes a FetchRemoteBranchesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchRemoteBranchesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.FetchRemoteBranchesRequest;

                    /**
                     * Verifies a FetchRemoteBranchesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchRemoteBranchesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchRemoteBranchesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.FetchRemoteBranchesRequest;

                    /**
                     * Creates a plain object from a FetchRemoteBranchesRequest message. Also converts values to other types if specified.
                     * @param message FetchRemoteBranchesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.FetchRemoteBranchesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchRemoteBranchesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchRemoteBranchesResponse. */
                interface IFetchRemoteBranchesResponse {

                    /** FetchRemoteBranchesResponse branches */
                    branches?: (string[]|null);
                }

                /** Represents a FetchRemoteBranchesResponse. */
                class FetchRemoteBranchesResponse implements IFetchRemoteBranchesResponse {

                    /**
                     * Constructs a new FetchRemoteBranchesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IFetchRemoteBranchesResponse);

                    /** FetchRemoteBranchesResponse branches. */
                    public branches: string[];

                    /**
                     * Creates a new FetchRemoteBranchesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchRemoteBranchesResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IFetchRemoteBranchesResponse): google.cloud.dataform.v1alpha2.FetchRemoteBranchesResponse;

                    /**
                     * Encodes the specified FetchRemoteBranchesResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchRemoteBranchesResponse.verify|verify} messages.
                     * @param message FetchRemoteBranchesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IFetchRemoteBranchesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchRemoteBranchesResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchRemoteBranchesResponse.verify|verify} messages.
                     * @param message FetchRemoteBranchesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IFetchRemoteBranchesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchRemoteBranchesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchRemoteBranchesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.FetchRemoteBranchesResponse;

                    /**
                     * Decodes a FetchRemoteBranchesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchRemoteBranchesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.FetchRemoteBranchesResponse;

                    /**
                     * Verifies a FetchRemoteBranchesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchRemoteBranchesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchRemoteBranchesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.FetchRemoteBranchesResponse;

                    /**
                     * Creates a plain object from a FetchRemoteBranchesResponse message. Also converts values to other types if specified.
                     * @param message FetchRemoteBranchesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.FetchRemoteBranchesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchRemoteBranchesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Workspace. */
                interface IWorkspace {

                    /** Workspace name */
                    name?: (string|null);
                }

                /** Represents a Workspace. */
                class Workspace implements IWorkspace {

                    /**
                     * Constructs a new Workspace.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IWorkspace);

                    /** Workspace name. */
                    public name: string;

                    /**
                     * Creates a new Workspace instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Workspace instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IWorkspace): google.cloud.dataform.v1alpha2.Workspace;

                    /**
                     * Encodes the specified Workspace message. Does not implicitly {@link google.cloud.dataform.v1alpha2.Workspace.verify|verify} messages.
                     * @param message Workspace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IWorkspace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Workspace message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.Workspace.verify|verify} messages.
                     * @param message Workspace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IWorkspace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Workspace message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Workspace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.Workspace;

                    /**
                     * Decodes a Workspace message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Workspace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.Workspace;

                    /**
                     * Verifies a Workspace message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Workspace message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Workspace
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.Workspace;

                    /**
                     * Creates a plain object from a Workspace message. Also converts values to other types if specified.
                     * @param message Workspace
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.Workspace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Workspace to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListWorkspacesRequest. */
                interface IListWorkspacesRequest {

                    /** ListWorkspacesRequest parent */
                    parent?: (string|null);

                    /** ListWorkspacesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkspacesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListWorkspacesRequest orderBy */
                    orderBy?: (string|null);

                    /** ListWorkspacesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListWorkspacesRequest. */
                class ListWorkspacesRequest implements IListWorkspacesRequest {

                    /**
                     * Constructs a new ListWorkspacesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IListWorkspacesRequest);

                    /** ListWorkspacesRequest parent. */
                    public parent: string;

                    /** ListWorkspacesRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkspacesRequest pageToken. */
                    public pageToken: string;

                    /** ListWorkspacesRequest orderBy. */
                    public orderBy: string;

                    /** ListWorkspacesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListWorkspacesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkspacesRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IListWorkspacesRequest): google.cloud.dataform.v1alpha2.ListWorkspacesRequest;

                    /**
                     * Encodes the specified ListWorkspacesRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListWorkspacesRequest.verify|verify} messages.
                     * @param message ListWorkspacesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IListWorkspacesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkspacesRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListWorkspacesRequest.verify|verify} messages.
                     * @param message ListWorkspacesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IListWorkspacesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkspacesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkspacesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.ListWorkspacesRequest;

                    /**
                     * Decodes a ListWorkspacesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkspacesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.ListWorkspacesRequest;

                    /**
                     * Verifies a ListWorkspacesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkspacesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkspacesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.ListWorkspacesRequest;

                    /**
                     * Creates a plain object from a ListWorkspacesRequest message. Also converts values to other types if specified.
                     * @param message ListWorkspacesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.ListWorkspacesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkspacesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListWorkspacesResponse. */
                interface IListWorkspacesResponse {

                    /** ListWorkspacesResponse workspaces */
                    workspaces?: (google.cloud.dataform.v1alpha2.IWorkspace[]|null);

                    /** ListWorkspacesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListWorkspacesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListWorkspacesResponse. */
                class ListWorkspacesResponse implements IListWorkspacesResponse {

                    /**
                     * Constructs a new ListWorkspacesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IListWorkspacesResponse);

                    /** ListWorkspacesResponse workspaces. */
                    public workspaces: google.cloud.dataform.v1alpha2.IWorkspace[];

                    /** ListWorkspacesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListWorkspacesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListWorkspacesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkspacesResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IListWorkspacesResponse): google.cloud.dataform.v1alpha2.ListWorkspacesResponse;

                    /**
                     * Encodes the specified ListWorkspacesResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListWorkspacesResponse.verify|verify} messages.
                     * @param message ListWorkspacesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IListWorkspacesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkspacesResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListWorkspacesResponse.verify|verify} messages.
                     * @param message ListWorkspacesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IListWorkspacesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkspacesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkspacesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.ListWorkspacesResponse;

                    /**
                     * Decodes a ListWorkspacesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkspacesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.ListWorkspacesResponse;

                    /**
                     * Verifies a ListWorkspacesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkspacesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkspacesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.ListWorkspacesResponse;

                    /**
                     * Creates a plain object from a ListWorkspacesResponse message. Also converts values to other types if specified.
                     * @param message ListWorkspacesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.ListWorkspacesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkspacesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetWorkspaceRequest. */
                interface IGetWorkspaceRequest {

                    /** GetWorkspaceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWorkspaceRequest. */
                class GetWorkspaceRequest implements IGetWorkspaceRequest {

                    /**
                     * Constructs a new GetWorkspaceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IGetWorkspaceRequest);

                    /** GetWorkspaceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWorkspaceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkspaceRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IGetWorkspaceRequest): google.cloud.dataform.v1alpha2.GetWorkspaceRequest;

                    /**
                     * Encodes the specified GetWorkspaceRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.GetWorkspaceRequest.verify|verify} messages.
                     * @param message GetWorkspaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IGetWorkspaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkspaceRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.GetWorkspaceRequest.verify|verify} messages.
                     * @param message GetWorkspaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IGetWorkspaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkspaceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkspaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.GetWorkspaceRequest;

                    /**
                     * Decodes a GetWorkspaceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkspaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.GetWorkspaceRequest;

                    /**
                     * Verifies a GetWorkspaceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkspaceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkspaceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.GetWorkspaceRequest;

                    /**
                     * Creates a plain object from a GetWorkspaceRequest message. Also converts values to other types if specified.
                     * @param message GetWorkspaceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.GetWorkspaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkspaceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateWorkspaceRequest. */
                interface ICreateWorkspaceRequest {

                    /** CreateWorkspaceRequest parent */
                    parent?: (string|null);

                    /** CreateWorkspaceRequest workspace */
                    workspace?: (google.cloud.dataform.v1alpha2.IWorkspace|null);

                    /** CreateWorkspaceRequest workspaceId */
                    workspaceId?: (string|null);
                }

                /** Represents a CreateWorkspaceRequest. */
                class CreateWorkspaceRequest implements ICreateWorkspaceRequest {

                    /**
                     * Constructs a new CreateWorkspaceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.ICreateWorkspaceRequest);

                    /** CreateWorkspaceRequest parent. */
                    public parent: string;

                    /** CreateWorkspaceRequest workspace. */
                    public workspace?: (google.cloud.dataform.v1alpha2.IWorkspace|null);

                    /** CreateWorkspaceRequest workspaceId. */
                    public workspaceId: string;

                    /**
                     * Creates a new CreateWorkspaceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkspaceRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.ICreateWorkspaceRequest): google.cloud.dataform.v1alpha2.CreateWorkspaceRequest;

                    /**
                     * Encodes the specified CreateWorkspaceRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CreateWorkspaceRequest.verify|verify} messages.
                     * @param message CreateWorkspaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.ICreateWorkspaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkspaceRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CreateWorkspaceRequest.verify|verify} messages.
                     * @param message CreateWorkspaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.ICreateWorkspaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkspaceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkspaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CreateWorkspaceRequest;

                    /**
                     * Decodes a CreateWorkspaceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkspaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CreateWorkspaceRequest;

                    /**
                     * Verifies a CreateWorkspaceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkspaceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkspaceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CreateWorkspaceRequest;

                    /**
                     * Creates a plain object from a CreateWorkspaceRequest message. Also converts values to other types if specified.
                     * @param message CreateWorkspaceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.CreateWorkspaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkspaceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteWorkspaceRequest. */
                interface IDeleteWorkspaceRequest {

                    /** DeleteWorkspaceRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteWorkspaceRequest. */
                class DeleteWorkspaceRequest implements IDeleteWorkspaceRequest {

                    /**
                     * Constructs a new DeleteWorkspaceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IDeleteWorkspaceRequest);

                    /** DeleteWorkspaceRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteWorkspaceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWorkspaceRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IDeleteWorkspaceRequest): google.cloud.dataform.v1alpha2.DeleteWorkspaceRequest;

                    /**
                     * Encodes the specified DeleteWorkspaceRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.DeleteWorkspaceRequest.verify|verify} messages.
                     * @param message DeleteWorkspaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IDeleteWorkspaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWorkspaceRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.DeleteWorkspaceRequest.verify|verify} messages.
                     * @param message DeleteWorkspaceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IDeleteWorkspaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWorkspaceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWorkspaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.DeleteWorkspaceRequest;

                    /**
                     * Decodes a DeleteWorkspaceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWorkspaceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.DeleteWorkspaceRequest;

                    /**
                     * Verifies a DeleteWorkspaceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWorkspaceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWorkspaceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.DeleteWorkspaceRequest;

                    /**
                     * Creates a plain object from a DeleteWorkspaceRequest message. Also converts values to other types if specified.
                     * @param message DeleteWorkspaceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.DeleteWorkspaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWorkspaceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CommitAuthor. */
                interface ICommitAuthor {

                    /** CommitAuthor name */
                    name?: (string|null);

                    /** CommitAuthor emailAddress */
                    emailAddress?: (string|null);
                }

                /** Represents a CommitAuthor. */
                class CommitAuthor implements ICommitAuthor {

                    /**
                     * Constructs a new CommitAuthor.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.ICommitAuthor);

                    /** CommitAuthor name. */
                    public name: string;

                    /** CommitAuthor emailAddress. */
                    public emailAddress: string;

                    /**
                     * Creates a new CommitAuthor instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommitAuthor instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.ICommitAuthor): google.cloud.dataform.v1alpha2.CommitAuthor;

                    /**
                     * Encodes the specified CommitAuthor message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CommitAuthor.verify|verify} messages.
                     * @param message CommitAuthor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.ICommitAuthor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommitAuthor message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CommitAuthor.verify|verify} messages.
                     * @param message CommitAuthor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.ICommitAuthor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommitAuthor message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommitAuthor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CommitAuthor;

                    /**
                     * Decodes a CommitAuthor message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommitAuthor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CommitAuthor;

                    /**
                     * Verifies a CommitAuthor message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommitAuthor message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommitAuthor
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CommitAuthor;

                    /**
                     * Creates a plain object from a CommitAuthor message. Also converts values to other types if specified.
                     * @param message CommitAuthor
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.CommitAuthor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommitAuthor to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PullGitCommitsRequest. */
                interface IPullGitCommitsRequest {

                    /** PullGitCommitsRequest name */
                    name?: (string|null);

                    /** PullGitCommitsRequest remoteBranch */
                    remoteBranch?: (string|null);

                    /** PullGitCommitsRequest author */
                    author?: (google.cloud.dataform.v1alpha2.ICommitAuthor|null);
                }

                /** Represents a PullGitCommitsRequest. */
                class PullGitCommitsRequest implements IPullGitCommitsRequest {

                    /**
                     * Constructs a new PullGitCommitsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IPullGitCommitsRequest);

                    /** PullGitCommitsRequest name. */
                    public name: string;

                    /** PullGitCommitsRequest remoteBranch. */
                    public remoteBranch: string;

                    /** PullGitCommitsRequest author. */
                    public author?: (google.cloud.dataform.v1alpha2.ICommitAuthor|null);

                    /**
                     * Creates a new PullGitCommitsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PullGitCommitsRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IPullGitCommitsRequest): google.cloud.dataform.v1alpha2.PullGitCommitsRequest;

                    /**
                     * Encodes the specified PullGitCommitsRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.PullGitCommitsRequest.verify|verify} messages.
                     * @param message PullGitCommitsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IPullGitCommitsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PullGitCommitsRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.PullGitCommitsRequest.verify|verify} messages.
                     * @param message PullGitCommitsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IPullGitCommitsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PullGitCommitsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PullGitCommitsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.PullGitCommitsRequest;

                    /**
                     * Decodes a PullGitCommitsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PullGitCommitsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.PullGitCommitsRequest;

                    /**
                     * Verifies a PullGitCommitsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PullGitCommitsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PullGitCommitsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.PullGitCommitsRequest;

                    /**
                     * Creates a plain object from a PullGitCommitsRequest message. Also converts values to other types if specified.
                     * @param message PullGitCommitsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.PullGitCommitsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PullGitCommitsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PushGitCommitsRequest. */
                interface IPushGitCommitsRequest {

                    /** PushGitCommitsRequest name */
                    name?: (string|null);

                    /** PushGitCommitsRequest remoteBranch */
                    remoteBranch?: (string|null);
                }

                /** Represents a PushGitCommitsRequest. */
                class PushGitCommitsRequest implements IPushGitCommitsRequest {

                    /**
                     * Constructs a new PushGitCommitsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IPushGitCommitsRequest);

                    /** PushGitCommitsRequest name. */
                    public name: string;

                    /** PushGitCommitsRequest remoteBranch. */
                    public remoteBranch: string;

                    /**
                     * Creates a new PushGitCommitsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PushGitCommitsRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IPushGitCommitsRequest): google.cloud.dataform.v1alpha2.PushGitCommitsRequest;

                    /**
                     * Encodes the specified PushGitCommitsRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.PushGitCommitsRequest.verify|verify} messages.
                     * @param message PushGitCommitsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IPushGitCommitsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PushGitCommitsRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.PushGitCommitsRequest.verify|verify} messages.
                     * @param message PushGitCommitsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IPushGitCommitsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PushGitCommitsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PushGitCommitsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.PushGitCommitsRequest;

                    /**
                     * Decodes a PushGitCommitsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PushGitCommitsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.PushGitCommitsRequest;

                    /**
                     * Verifies a PushGitCommitsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PushGitCommitsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PushGitCommitsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.PushGitCommitsRequest;

                    /**
                     * Creates a plain object from a PushGitCommitsRequest message. Also converts values to other types if specified.
                     * @param message PushGitCommitsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.PushGitCommitsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PushGitCommitsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchFileGitStatusesRequest. */
                interface IFetchFileGitStatusesRequest {

                    /** FetchFileGitStatusesRequest name */
                    name?: (string|null);
                }

                /** Represents a FetchFileGitStatusesRequest. */
                class FetchFileGitStatusesRequest implements IFetchFileGitStatusesRequest {

                    /**
                     * Constructs a new FetchFileGitStatusesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IFetchFileGitStatusesRequest);

                    /** FetchFileGitStatusesRequest name. */
                    public name: string;

                    /**
                     * Creates a new FetchFileGitStatusesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchFileGitStatusesRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IFetchFileGitStatusesRequest): google.cloud.dataform.v1alpha2.FetchFileGitStatusesRequest;

                    /**
                     * Encodes the specified FetchFileGitStatusesRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchFileGitStatusesRequest.verify|verify} messages.
                     * @param message FetchFileGitStatusesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IFetchFileGitStatusesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchFileGitStatusesRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchFileGitStatusesRequest.verify|verify} messages.
                     * @param message FetchFileGitStatusesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IFetchFileGitStatusesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchFileGitStatusesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchFileGitStatusesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.FetchFileGitStatusesRequest;

                    /**
                     * Decodes a FetchFileGitStatusesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchFileGitStatusesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.FetchFileGitStatusesRequest;

                    /**
                     * Verifies a FetchFileGitStatusesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchFileGitStatusesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchFileGitStatusesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.FetchFileGitStatusesRequest;

                    /**
                     * Creates a plain object from a FetchFileGitStatusesRequest message. Also converts values to other types if specified.
                     * @param message FetchFileGitStatusesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.FetchFileGitStatusesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchFileGitStatusesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchFileGitStatusesResponse. */
                interface IFetchFileGitStatusesResponse {

                    /** FetchFileGitStatusesResponse uncommittedFileChanges */
                    uncommittedFileChanges?: (google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.IUncommittedFileChange[]|null);
                }

                /** Represents a FetchFileGitStatusesResponse. */
                class FetchFileGitStatusesResponse implements IFetchFileGitStatusesResponse {

                    /**
                     * Constructs a new FetchFileGitStatusesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IFetchFileGitStatusesResponse);

                    /** FetchFileGitStatusesResponse uncommittedFileChanges. */
                    public uncommittedFileChanges: google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.IUncommittedFileChange[];

                    /**
                     * Creates a new FetchFileGitStatusesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchFileGitStatusesResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IFetchFileGitStatusesResponse): google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse;

                    /**
                     * Encodes the specified FetchFileGitStatusesResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.verify|verify} messages.
                     * @param message FetchFileGitStatusesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IFetchFileGitStatusesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchFileGitStatusesResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.verify|verify} messages.
                     * @param message FetchFileGitStatusesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IFetchFileGitStatusesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchFileGitStatusesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchFileGitStatusesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse;

                    /**
                     * Decodes a FetchFileGitStatusesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchFileGitStatusesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse;

                    /**
                     * Verifies a FetchFileGitStatusesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchFileGitStatusesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchFileGitStatusesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse;

                    /**
                     * Creates a plain object from a FetchFileGitStatusesResponse message. Also converts values to other types if specified.
                     * @param message FetchFileGitStatusesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchFileGitStatusesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace FetchFileGitStatusesResponse {

                    /** Properties of an UncommittedFileChange. */
                    interface IUncommittedFileChange {

                        /** UncommittedFileChange path */
                        path?: (string|null);

                        /** UncommittedFileChange state */
                        state?: (google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.UncommittedFileChange.State|keyof typeof google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.UncommittedFileChange.State|null);
                    }

                    /** Represents an UncommittedFileChange. */
                    class UncommittedFileChange implements IUncommittedFileChange {

                        /**
                         * Constructs a new UncommittedFileChange.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.IUncommittedFileChange);

                        /** UncommittedFileChange path. */
                        public path: string;

                        /** UncommittedFileChange state. */
                        public state: (google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.UncommittedFileChange.State|keyof typeof google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.UncommittedFileChange.State);

                        /**
                         * Creates a new UncommittedFileChange instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UncommittedFileChange instance
                         */
                        public static create(properties?: google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.IUncommittedFileChange): google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.UncommittedFileChange;

                        /**
                         * Encodes the specified UncommittedFileChange message. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.UncommittedFileChange.verify|verify} messages.
                         * @param message UncommittedFileChange message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.IUncommittedFileChange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UncommittedFileChange message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.UncommittedFileChange.verify|verify} messages.
                         * @param message UncommittedFileChange message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.IUncommittedFileChange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UncommittedFileChange message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UncommittedFileChange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.UncommittedFileChange;

                        /**
                         * Decodes an UncommittedFileChange message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UncommittedFileChange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.UncommittedFileChange;

                        /**
                         * Verifies an UncommittedFileChange message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UncommittedFileChange message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UncommittedFileChange
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.UncommittedFileChange;

                        /**
                         * Creates a plain object from an UncommittedFileChange message. Also converts values to other types if specified.
                         * @param message UncommittedFileChange
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataform.v1alpha2.FetchFileGitStatusesResponse.UncommittedFileChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UncommittedFileChange to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace UncommittedFileChange {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            ADDED = 1,
                            DELETED = 2,
                            MODIFIED = 3,
                            HAS_CONFLICTS = 4
                        }
                    }
                }

                /** Properties of a FetchGitAheadBehindRequest. */
                interface IFetchGitAheadBehindRequest {

                    /** FetchGitAheadBehindRequest name */
                    name?: (string|null);

                    /** FetchGitAheadBehindRequest remoteBranch */
                    remoteBranch?: (string|null);
                }

                /** Represents a FetchGitAheadBehindRequest. */
                class FetchGitAheadBehindRequest implements IFetchGitAheadBehindRequest {

                    /**
                     * Constructs a new FetchGitAheadBehindRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IFetchGitAheadBehindRequest);

                    /** FetchGitAheadBehindRequest name. */
                    public name: string;

                    /** FetchGitAheadBehindRequest remoteBranch. */
                    public remoteBranch: string;

                    /**
                     * Creates a new FetchGitAheadBehindRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchGitAheadBehindRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IFetchGitAheadBehindRequest): google.cloud.dataform.v1alpha2.FetchGitAheadBehindRequest;

                    /**
                     * Encodes the specified FetchGitAheadBehindRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchGitAheadBehindRequest.verify|verify} messages.
                     * @param message FetchGitAheadBehindRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IFetchGitAheadBehindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchGitAheadBehindRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchGitAheadBehindRequest.verify|verify} messages.
                     * @param message FetchGitAheadBehindRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IFetchGitAheadBehindRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchGitAheadBehindRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchGitAheadBehindRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.FetchGitAheadBehindRequest;

                    /**
                     * Decodes a FetchGitAheadBehindRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchGitAheadBehindRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.FetchGitAheadBehindRequest;

                    /**
                     * Verifies a FetchGitAheadBehindRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchGitAheadBehindRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchGitAheadBehindRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.FetchGitAheadBehindRequest;

                    /**
                     * Creates a plain object from a FetchGitAheadBehindRequest message. Also converts values to other types if specified.
                     * @param message FetchGitAheadBehindRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.FetchGitAheadBehindRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchGitAheadBehindRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchGitAheadBehindResponse. */
                interface IFetchGitAheadBehindResponse {

                    /** FetchGitAheadBehindResponse commitsAhead */
                    commitsAhead?: (number|null);

                    /** FetchGitAheadBehindResponse commitsBehind */
                    commitsBehind?: (number|null);
                }

                /** Represents a FetchGitAheadBehindResponse. */
                class FetchGitAheadBehindResponse implements IFetchGitAheadBehindResponse {

                    /**
                     * Constructs a new FetchGitAheadBehindResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IFetchGitAheadBehindResponse);

                    /** FetchGitAheadBehindResponse commitsAhead. */
                    public commitsAhead: number;

                    /** FetchGitAheadBehindResponse commitsBehind. */
                    public commitsBehind: number;

                    /**
                     * Creates a new FetchGitAheadBehindResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchGitAheadBehindResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IFetchGitAheadBehindResponse): google.cloud.dataform.v1alpha2.FetchGitAheadBehindResponse;

                    /**
                     * Encodes the specified FetchGitAheadBehindResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchGitAheadBehindResponse.verify|verify} messages.
                     * @param message FetchGitAheadBehindResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IFetchGitAheadBehindResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchGitAheadBehindResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchGitAheadBehindResponse.verify|verify} messages.
                     * @param message FetchGitAheadBehindResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IFetchGitAheadBehindResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchGitAheadBehindResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchGitAheadBehindResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.FetchGitAheadBehindResponse;

                    /**
                     * Decodes a FetchGitAheadBehindResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchGitAheadBehindResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.FetchGitAheadBehindResponse;

                    /**
                     * Verifies a FetchGitAheadBehindResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchGitAheadBehindResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchGitAheadBehindResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.FetchGitAheadBehindResponse;

                    /**
                     * Creates a plain object from a FetchGitAheadBehindResponse message. Also converts values to other types if specified.
                     * @param message FetchGitAheadBehindResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.FetchGitAheadBehindResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchGitAheadBehindResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CommitWorkspaceChangesRequest. */
                interface ICommitWorkspaceChangesRequest {

                    /** CommitWorkspaceChangesRequest name */
                    name?: (string|null);

                    /** CommitWorkspaceChangesRequest author */
                    author?: (google.cloud.dataform.v1alpha2.ICommitAuthor|null);

                    /** CommitWorkspaceChangesRequest commitMessage */
                    commitMessage?: (string|null);

                    /** CommitWorkspaceChangesRequest paths */
                    paths?: (string[]|null);
                }

                /** Represents a CommitWorkspaceChangesRequest. */
                class CommitWorkspaceChangesRequest implements ICommitWorkspaceChangesRequest {

                    /**
                     * Constructs a new CommitWorkspaceChangesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.ICommitWorkspaceChangesRequest);

                    /** CommitWorkspaceChangesRequest name. */
                    public name: string;

                    /** CommitWorkspaceChangesRequest author. */
                    public author?: (google.cloud.dataform.v1alpha2.ICommitAuthor|null);

                    /** CommitWorkspaceChangesRequest commitMessage. */
                    public commitMessage: string;

                    /** CommitWorkspaceChangesRequest paths. */
                    public paths: string[];

                    /**
                     * Creates a new CommitWorkspaceChangesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommitWorkspaceChangesRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.ICommitWorkspaceChangesRequest): google.cloud.dataform.v1alpha2.CommitWorkspaceChangesRequest;

                    /**
                     * Encodes the specified CommitWorkspaceChangesRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CommitWorkspaceChangesRequest.verify|verify} messages.
                     * @param message CommitWorkspaceChangesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.ICommitWorkspaceChangesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommitWorkspaceChangesRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CommitWorkspaceChangesRequest.verify|verify} messages.
                     * @param message CommitWorkspaceChangesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.ICommitWorkspaceChangesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommitWorkspaceChangesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommitWorkspaceChangesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CommitWorkspaceChangesRequest;

                    /**
                     * Decodes a CommitWorkspaceChangesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommitWorkspaceChangesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CommitWorkspaceChangesRequest;

                    /**
                     * Verifies a CommitWorkspaceChangesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommitWorkspaceChangesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommitWorkspaceChangesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CommitWorkspaceChangesRequest;

                    /**
                     * Creates a plain object from a CommitWorkspaceChangesRequest message. Also converts values to other types if specified.
                     * @param message CommitWorkspaceChangesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.CommitWorkspaceChangesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommitWorkspaceChangesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResetWorkspaceChangesRequest. */
                interface IResetWorkspaceChangesRequest {

                    /** ResetWorkspaceChangesRequest name */
                    name?: (string|null);

                    /** ResetWorkspaceChangesRequest paths */
                    paths?: (string[]|null);

                    /** ResetWorkspaceChangesRequest clean */
                    clean?: (boolean|null);
                }

                /** Represents a ResetWorkspaceChangesRequest. */
                class ResetWorkspaceChangesRequest implements IResetWorkspaceChangesRequest {

                    /**
                     * Constructs a new ResetWorkspaceChangesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IResetWorkspaceChangesRequest);

                    /** ResetWorkspaceChangesRequest name. */
                    public name: string;

                    /** ResetWorkspaceChangesRequest paths. */
                    public paths: string[];

                    /** ResetWorkspaceChangesRequest clean. */
                    public clean: boolean;

                    /**
                     * Creates a new ResetWorkspaceChangesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResetWorkspaceChangesRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IResetWorkspaceChangesRequest): google.cloud.dataform.v1alpha2.ResetWorkspaceChangesRequest;

                    /**
                     * Encodes the specified ResetWorkspaceChangesRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.ResetWorkspaceChangesRequest.verify|verify} messages.
                     * @param message ResetWorkspaceChangesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IResetWorkspaceChangesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResetWorkspaceChangesRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.ResetWorkspaceChangesRequest.verify|verify} messages.
                     * @param message ResetWorkspaceChangesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IResetWorkspaceChangesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResetWorkspaceChangesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResetWorkspaceChangesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.ResetWorkspaceChangesRequest;

                    /**
                     * Decodes a ResetWorkspaceChangesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResetWorkspaceChangesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.ResetWorkspaceChangesRequest;

                    /**
                     * Verifies a ResetWorkspaceChangesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResetWorkspaceChangesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResetWorkspaceChangesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.ResetWorkspaceChangesRequest;

                    /**
                     * Creates a plain object from a ResetWorkspaceChangesRequest message. Also converts values to other types if specified.
                     * @param message ResetWorkspaceChangesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.ResetWorkspaceChangesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResetWorkspaceChangesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchFileDiffRequest. */
                interface IFetchFileDiffRequest {

                    /** FetchFileDiffRequest workspace */
                    workspace?: (string|null);

                    /** FetchFileDiffRequest path */
                    path?: (string|null);
                }

                /** Represents a FetchFileDiffRequest. */
                class FetchFileDiffRequest implements IFetchFileDiffRequest {

                    /**
                     * Constructs a new FetchFileDiffRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IFetchFileDiffRequest);

                    /** FetchFileDiffRequest workspace. */
                    public workspace: string;

                    /** FetchFileDiffRequest path. */
                    public path: string;

                    /**
                     * Creates a new FetchFileDiffRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchFileDiffRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IFetchFileDiffRequest): google.cloud.dataform.v1alpha2.FetchFileDiffRequest;

                    /**
                     * Encodes the specified FetchFileDiffRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchFileDiffRequest.verify|verify} messages.
                     * @param message FetchFileDiffRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IFetchFileDiffRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchFileDiffRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchFileDiffRequest.verify|verify} messages.
                     * @param message FetchFileDiffRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IFetchFileDiffRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchFileDiffRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchFileDiffRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.FetchFileDiffRequest;

                    /**
                     * Decodes a FetchFileDiffRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchFileDiffRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.FetchFileDiffRequest;

                    /**
                     * Verifies a FetchFileDiffRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchFileDiffRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchFileDiffRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.FetchFileDiffRequest;

                    /**
                     * Creates a plain object from a FetchFileDiffRequest message. Also converts values to other types if specified.
                     * @param message FetchFileDiffRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.FetchFileDiffRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchFileDiffRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FetchFileDiffResponse. */
                interface IFetchFileDiffResponse {

                    /** FetchFileDiffResponse formattedDiff */
                    formattedDiff?: (string|null);
                }

                /** Represents a FetchFileDiffResponse. */
                class FetchFileDiffResponse implements IFetchFileDiffResponse {

                    /**
                     * Constructs a new FetchFileDiffResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IFetchFileDiffResponse);

                    /** FetchFileDiffResponse formattedDiff. */
                    public formattedDiff: string;

                    /**
                     * Creates a new FetchFileDiffResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchFileDiffResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IFetchFileDiffResponse): google.cloud.dataform.v1alpha2.FetchFileDiffResponse;

                    /**
                     * Encodes the specified FetchFileDiffResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchFileDiffResponse.verify|verify} messages.
                     * @param message FetchFileDiffResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IFetchFileDiffResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchFileDiffResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.FetchFileDiffResponse.verify|verify} messages.
                     * @param message FetchFileDiffResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IFetchFileDiffResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchFileDiffResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchFileDiffResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.FetchFileDiffResponse;

                    /**
                     * Decodes a FetchFileDiffResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchFileDiffResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.FetchFileDiffResponse;

                    /**
                     * Verifies a FetchFileDiffResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchFileDiffResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchFileDiffResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.FetchFileDiffResponse;

                    /**
                     * Creates a plain object from a FetchFileDiffResponse message. Also converts values to other types if specified.
                     * @param message FetchFileDiffResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.FetchFileDiffResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchFileDiffResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryDirectoryContentsRequest. */
                interface IQueryDirectoryContentsRequest {

                    /** QueryDirectoryContentsRequest workspace */
                    workspace?: (string|null);

                    /** QueryDirectoryContentsRequest path */
                    path?: (string|null);

                    /** QueryDirectoryContentsRequest pageSize */
                    pageSize?: (number|null);

                    /** QueryDirectoryContentsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a QueryDirectoryContentsRequest. */
                class QueryDirectoryContentsRequest implements IQueryDirectoryContentsRequest {

                    /**
                     * Constructs a new QueryDirectoryContentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IQueryDirectoryContentsRequest);

                    /** QueryDirectoryContentsRequest workspace. */
                    public workspace: string;

                    /** QueryDirectoryContentsRequest path. */
                    public path: string;

                    /** QueryDirectoryContentsRequest pageSize. */
                    public pageSize: number;

                    /** QueryDirectoryContentsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new QueryDirectoryContentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryDirectoryContentsRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IQueryDirectoryContentsRequest): google.cloud.dataform.v1alpha2.QueryDirectoryContentsRequest;

                    /**
                     * Encodes the specified QueryDirectoryContentsRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryDirectoryContentsRequest.verify|verify} messages.
                     * @param message QueryDirectoryContentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IQueryDirectoryContentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryDirectoryContentsRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryDirectoryContentsRequest.verify|verify} messages.
                     * @param message QueryDirectoryContentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IQueryDirectoryContentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryDirectoryContentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryDirectoryContentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.QueryDirectoryContentsRequest;

                    /**
                     * Decodes a QueryDirectoryContentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryDirectoryContentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.QueryDirectoryContentsRequest;

                    /**
                     * Verifies a QueryDirectoryContentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryDirectoryContentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryDirectoryContentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.QueryDirectoryContentsRequest;

                    /**
                     * Creates a plain object from a QueryDirectoryContentsRequest message. Also converts values to other types if specified.
                     * @param message QueryDirectoryContentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.QueryDirectoryContentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryDirectoryContentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryDirectoryContentsResponse. */
                interface IQueryDirectoryContentsResponse {

                    /** QueryDirectoryContentsResponse directoryEntries */
                    directoryEntries?: (google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.IDirectoryEntry[]|null);

                    /** QueryDirectoryContentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a QueryDirectoryContentsResponse. */
                class QueryDirectoryContentsResponse implements IQueryDirectoryContentsResponse {

                    /**
                     * Constructs a new QueryDirectoryContentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IQueryDirectoryContentsResponse);

                    /** QueryDirectoryContentsResponse directoryEntries. */
                    public directoryEntries: google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.IDirectoryEntry[];

                    /** QueryDirectoryContentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new QueryDirectoryContentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryDirectoryContentsResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IQueryDirectoryContentsResponse): google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse;

                    /**
                     * Encodes the specified QueryDirectoryContentsResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.verify|verify} messages.
                     * @param message QueryDirectoryContentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IQueryDirectoryContentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryDirectoryContentsResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.verify|verify} messages.
                     * @param message QueryDirectoryContentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IQueryDirectoryContentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryDirectoryContentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryDirectoryContentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse;

                    /**
                     * Decodes a QueryDirectoryContentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryDirectoryContentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse;

                    /**
                     * Verifies a QueryDirectoryContentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryDirectoryContentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryDirectoryContentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse;

                    /**
                     * Creates a plain object from a QueryDirectoryContentsResponse message. Also converts values to other types if specified.
                     * @param message QueryDirectoryContentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryDirectoryContentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace QueryDirectoryContentsResponse {

                    /** Properties of a DirectoryEntry. */
                    interface IDirectoryEntry {

                        /** DirectoryEntry file */
                        file?: (string|null);

                        /** DirectoryEntry directory */
                        directory?: (string|null);
                    }

                    /** Represents a DirectoryEntry. */
                    class DirectoryEntry implements IDirectoryEntry {

                        /**
                         * Constructs a new DirectoryEntry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.IDirectoryEntry);

                        /** DirectoryEntry file. */
                        public file?: (string|null);

                        /** DirectoryEntry directory. */
                        public directory?: (string|null);

                        /** DirectoryEntry entry. */
                        public entry?: ("file"|"directory");

                        /**
                         * Creates a new DirectoryEntry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DirectoryEntry instance
                         */
                        public static create(properties?: google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.IDirectoryEntry): google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.DirectoryEntry;

                        /**
                         * Encodes the specified DirectoryEntry message. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.DirectoryEntry.verify|verify} messages.
                         * @param message DirectoryEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.IDirectoryEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DirectoryEntry message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.DirectoryEntry.verify|verify} messages.
                         * @param message DirectoryEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.IDirectoryEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DirectoryEntry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DirectoryEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.DirectoryEntry;

                        /**
                         * Decodes a DirectoryEntry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DirectoryEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.DirectoryEntry;

                        /**
                         * Verifies a DirectoryEntry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DirectoryEntry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DirectoryEntry
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.DirectoryEntry;

                        /**
                         * Creates a plain object from a DirectoryEntry message. Also converts values to other types if specified.
                         * @param message DirectoryEntry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataform.v1alpha2.QueryDirectoryContentsResponse.DirectoryEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DirectoryEntry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a MakeDirectoryRequest. */
                interface IMakeDirectoryRequest {

                    /** MakeDirectoryRequest workspace */
                    workspace?: (string|null);

                    /** MakeDirectoryRequest path */
                    path?: (string|null);
                }

                /** Represents a MakeDirectoryRequest. */
                class MakeDirectoryRequest implements IMakeDirectoryRequest {

                    /**
                     * Constructs a new MakeDirectoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IMakeDirectoryRequest);

                    /** MakeDirectoryRequest workspace. */
                    public workspace: string;

                    /** MakeDirectoryRequest path. */
                    public path: string;

                    /**
                     * Creates a new MakeDirectoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MakeDirectoryRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IMakeDirectoryRequest): google.cloud.dataform.v1alpha2.MakeDirectoryRequest;

                    /**
                     * Encodes the specified MakeDirectoryRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.MakeDirectoryRequest.verify|verify} messages.
                     * @param message MakeDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IMakeDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MakeDirectoryRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.MakeDirectoryRequest.verify|verify} messages.
                     * @param message MakeDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IMakeDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MakeDirectoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MakeDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.MakeDirectoryRequest;

                    /**
                     * Decodes a MakeDirectoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MakeDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.MakeDirectoryRequest;

                    /**
                     * Verifies a MakeDirectoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MakeDirectoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MakeDirectoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.MakeDirectoryRequest;

                    /**
                     * Creates a plain object from a MakeDirectoryRequest message. Also converts values to other types if specified.
                     * @param message MakeDirectoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.MakeDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MakeDirectoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MakeDirectoryResponse. */
                interface IMakeDirectoryResponse {
                }

                /** Represents a MakeDirectoryResponse. */
                class MakeDirectoryResponse implements IMakeDirectoryResponse {

                    /**
                     * Constructs a new MakeDirectoryResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IMakeDirectoryResponse);

                    /**
                     * Creates a new MakeDirectoryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MakeDirectoryResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IMakeDirectoryResponse): google.cloud.dataform.v1alpha2.MakeDirectoryResponse;

                    /**
                     * Encodes the specified MakeDirectoryResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.MakeDirectoryResponse.verify|verify} messages.
                     * @param message MakeDirectoryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IMakeDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MakeDirectoryResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.MakeDirectoryResponse.verify|verify} messages.
                     * @param message MakeDirectoryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IMakeDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MakeDirectoryResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MakeDirectoryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.MakeDirectoryResponse;

                    /**
                     * Decodes a MakeDirectoryResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MakeDirectoryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.MakeDirectoryResponse;

                    /**
                     * Verifies a MakeDirectoryResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MakeDirectoryResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MakeDirectoryResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.MakeDirectoryResponse;

                    /**
                     * Creates a plain object from a MakeDirectoryResponse message. Also converts values to other types if specified.
                     * @param message MakeDirectoryResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.MakeDirectoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MakeDirectoryResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RemoveDirectoryRequest. */
                interface IRemoveDirectoryRequest {

                    /** RemoveDirectoryRequest workspace */
                    workspace?: (string|null);

                    /** RemoveDirectoryRequest path */
                    path?: (string|null);
                }

                /** Represents a RemoveDirectoryRequest. */
                class RemoveDirectoryRequest implements IRemoveDirectoryRequest {

                    /**
                     * Constructs a new RemoveDirectoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IRemoveDirectoryRequest);

                    /** RemoveDirectoryRequest workspace. */
                    public workspace: string;

                    /** RemoveDirectoryRequest path. */
                    public path: string;

                    /**
                     * Creates a new RemoveDirectoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveDirectoryRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IRemoveDirectoryRequest): google.cloud.dataform.v1alpha2.RemoveDirectoryRequest;

                    /**
                     * Encodes the specified RemoveDirectoryRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.RemoveDirectoryRequest.verify|verify} messages.
                     * @param message RemoveDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IRemoveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveDirectoryRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.RemoveDirectoryRequest.verify|verify} messages.
                     * @param message RemoveDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IRemoveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveDirectoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.RemoveDirectoryRequest;

                    /**
                     * Decodes a RemoveDirectoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.RemoveDirectoryRequest;

                    /**
                     * Verifies a RemoveDirectoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveDirectoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveDirectoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.RemoveDirectoryRequest;

                    /**
                     * Creates a plain object from a RemoveDirectoryRequest message. Also converts values to other types if specified.
                     * @param message RemoveDirectoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.RemoveDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveDirectoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MoveDirectoryRequest. */
                interface IMoveDirectoryRequest {

                    /** MoveDirectoryRequest workspace */
                    workspace?: (string|null);

                    /** MoveDirectoryRequest path */
                    path?: (string|null);

                    /** MoveDirectoryRequest newPath */
                    newPath?: (string|null);
                }

                /** Represents a MoveDirectoryRequest. */
                class MoveDirectoryRequest implements IMoveDirectoryRequest {

                    /**
                     * Constructs a new MoveDirectoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IMoveDirectoryRequest);

                    /** MoveDirectoryRequest workspace. */
                    public workspace: string;

                    /** MoveDirectoryRequest path. */
                    public path: string;

                    /** MoveDirectoryRequest newPath. */
                    public newPath: string;

                    /**
                     * Creates a new MoveDirectoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MoveDirectoryRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IMoveDirectoryRequest): google.cloud.dataform.v1alpha2.MoveDirectoryRequest;

                    /**
                     * Encodes the specified MoveDirectoryRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.MoveDirectoryRequest.verify|verify} messages.
                     * @param message MoveDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IMoveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MoveDirectoryRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.MoveDirectoryRequest.verify|verify} messages.
                     * @param message MoveDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IMoveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MoveDirectoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MoveDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.MoveDirectoryRequest;

                    /**
                     * Decodes a MoveDirectoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MoveDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.MoveDirectoryRequest;

                    /**
                     * Verifies a MoveDirectoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MoveDirectoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MoveDirectoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.MoveDirectoryRequest;

                    /**
                     * Creates a plain object from a MoveDirectoryRequest message. Also converts values to other types if specified.
                     * @param message MoveDirectoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.MoveDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MoveDirectoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MoveDirectoryResponse. */
                interface IMoveDirectoryResponse {
                }

                /** Represents a MoveDirectoryResponse. */
                class MoveDirectoryResponse implements IMoveDirectoryResponse {

                    /**
                     * Constructs a new MoveDirectoryResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IMoveDirectoryResponse);

                    /**
                     * Creates a new MoveDirectoryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MoveDirectoryResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IMoveDirectoryResponse): google.cloud.dataform.v1alpha2.MoveDirectoryResponse;

                    /**
                     * Encodes the specified MoveDirectoryResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.MoveDirectoryResponse.verify|verify} messages.
                     * @param message MoveDirectoryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IMoveDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MoveDirectoryResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.MoveDirectoryResponse.verify|verify} messages.
                     * @param message MoveDirectoryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IMoveDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MoveDirectoryResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MoveDirectoryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.MoveDirectoryResponse;

                    /**
                     * Decodes a MoveDirectoryResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MoveDirectoryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.MoveDirectoryResponse;

                    /**
                     * Verifies a MoveDirectoryResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MoveDirectoryResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MoveDirectoryResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.MoveDirectoryResponse;

                    /**
                     * Creates a plain object from a MoveDirectoryResponse message. Also converts values to other types if specified.
                     * @param message MoveDirectoryResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.MoveDirectoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MoveDirectoryResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReadFileRequest. */
                interface IReadFileRequest {

                    /** ReadFileRequest workspace */
                    workspace?: (string|null);

                    /** ReadFileRequest path */
                    path?: (string|null);
                }

                /** Represents a ReadFileRequest. */
                class ReadFileRequest implements IReadFileRequest {

                    /**
                     * Constructs a new ReadFileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IReadFileRequest);

                    /** ReadFileRequest workspace. */
                    public workspace: string;

                    /** ReadFileRequest path. */
                    public path: string;

                    /**
                     * Creates a new ReadFileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReadFileRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IReadFileRequest): google.cloud.dataform.v1alpha2.ReadFileRequest;

                    /**
                     * Encodes the specified ReadFileRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.ReadFileRequest.verify|verify} messages.
                     * @param message ReadFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IReadFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReadFileRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.ReadFileRequest.verify|verify} messages.
                     * @param message ReadFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IReadFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReadFileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReadFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.ReadFileRequest;

                    /**
                     * Decodes a ReadFileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReadFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.ReadFileRequest;

                    /**
                     * Verifies a ReadFileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReadFileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReadFileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.ReadFileRequest;

                    /**
                     * Creates a plain object from a ReadFileRequest message. Also converts values to other types if specified.
                     * @param message ReadFileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.ReadFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReadFileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReadFileResponse. */
                interface IReadFileResponse {

                    /** ReadFileResponse fileContents */
                    fileContents?: (Uint8Array|string|null);
                }

                /** Represents a ReadFileResponse. */
                class ReadFileResponse implements IReadFileResponse {

                    /**
                     * Constructs a new ReadFileResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IReadFileResponse);

                    /** ReadFileResponse fileContents. */
                    public fileContents: (Uint8Array|string);

                    /**
                     * Creates a new ReadFileResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReadFileResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IReadFileResponse): google.cloud.dataform.v1alpha2.ReadFileResponse;

                    /**
                     * Encodes the specified ReadFileResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.ReadFileResponse.verify|verify} messages.
                     * @param message ReadFileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IReadFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReadFileResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.ReadFileResponse.verify|verify} messages.
                     * @param message ReadFileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IReadFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReadFileResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReadFileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.ReadFileResponse;

                    /**
                     * Decodes a ReadFileResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReadFileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.ReadFileResponse;

                    /**
                     * Verifies a ReadFileResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReadFileResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReadFileResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.ReadFileResponse;

                    /**
                     * Creates a plain object from a ReadFileResponse message. Also converts values to other types if specified.
                     * @param message ReadFileResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.ReadFileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReadFileResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RemoveFileRequest. */
                interface IRemoveFileRequest {

                    /** RemoveFileRequest workspace */
                    workspace?: (string|null);

                    /** RemoveFileRequest path */
                    path?: (string|null);
                }

                /** Represents a RemoveFileRequest. */
                class RemoveFileRequest implements IRemoveFileRequest {

                    /**
                     * Constructs a new RemoveFileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IRemoveFileRequest);

                    /** RemoveFileRequest workspace. */
                    public workspace: string;

                    /** RemoveFileRequest path. */
                    public path: string;

                    /**
                     * Creates a new RemoveFileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveFileRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IRemoveFileRequest): google.cloud.dataform.v1alpha2.RemoveFileRequest;

                    /**
                     * Encodes the specified RemoveFileRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.RemoveFileRequest.verify|verify} messages.
                     * @param message RemoveFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IRemoveFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveFileRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.RemoveFileRequest.verify|verify} messages.
                     * @param message RemoveFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IRemoveFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveFileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.RemoveFileRequest;

                    /**
                     * Decodes a RemoveFileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.RemoveFileRequest;

                    /**
                     * Verifies a RemoveFileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveFileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveFileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.RemoveFileRequest;

                    /**
                     * Creates a plain object from a RemoveFileRequest message. Also converts values to other types if specified.
                     * @param message RemoveFileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.RemoveFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveFileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MoveFileRequest. */
                interface IMoveFileRequest {

                    /** MoveFileRequest workspace */
                    workspace?: (string|null);

                    /** MoveFileRequest path */
                    path?: (string|null);

                    /** MoveFileRequest newPath */
                    newPath?: (string|null);
                }

                /** Represents a MoveFileRequest. */
                class MoveFileRequest implements IMoveFileRequest {

                    /**
                     * Constructs a new MoveFileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IMoveFileRequest);

                    /** MoveFileRequest workspace. */
                    public workspace: string;

                    /** MoveFileRequest path. */
                    public path: string;

                    /** MoveFileRequest newPath. */
                    public newPath: string;

                    /**
                     * Creates a new MoveFileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MoveFileRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IMoveFileRequest): google.cloud.dataform.v1alpha2.MoveFileRequest;

                    /**
                     * Encodes the specified MoveFileRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.MoveFileRequest.verify|verify} messages.
                     * @param message MoveFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IMoveFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MoveFileRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.MoveFileRequest.verify|verify} messages.
                     * @param message MoveFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IMoveFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MoveFileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MoveFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.MoveFileRequest;

                    /**
                     * Decodes a MoveFileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MoveFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.MoveFileRequest;

                    /**
                     * Verifies a MoveFileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MoveFileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MoveFileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.MoveFileRequest;

                    /**
                     * Creates a plain object from a MoveFileRequest message. Also converts values to other types if specified.
                     * @param message MoveFileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.MoveFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MoveFileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MoveFileResponse. */
                interface IMoveFileResponse {
                }

                /** Represents a MoveFileResponse. */
                class MoveFileResponse implements IMoveFileResponse {

                    /**
                     * Constructs a new MoveFileResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IMoveFileResponse);

                    /**
                     * Creates a new MoveFileResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MoveFileResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IMoveFileResponse): google.cloud.dataform.v1alpha2.MoveFileResponse;

                    /**
                     * Encodes the specified MoveFileResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.MoveFileResponse.verify|verify} messages.
                     * @param message MoveFileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IMoveFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MoveFileResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.MoveFileResponse.verify|verify} messages.
                     * @param message MoveFileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IMoveFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MoveFileResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MoveFileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.MoveFileResponse;

                    /**
                     * Decodes a MoveFileResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MoveFileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.MoveFileResponse;

                    /**
                     * Verifies a MoveFileResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MoveFileResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MoveFileResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.MoveFileResponse;

                    /**
                     * Creates a plain object from a MoveFileResponse message. Also converts values to other types if specified.
                     * @param message MoveFileResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.MoveFileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MoveFileResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WriteFileRequest. */
                interface IWriteFileRequest {

                    /** WriteFileRequest workspace */
                    workspace?: (string|null);

                    /** WriteFileRequest path */
                    path?: (string|null);

                    /** WriteFileRequest contents */
                    contents?: (Uint8Array|string|null);
                }

                /** Represents a WriteFileRequest. */
                class WriteFileRequest implements IWriteFileRequest {

                    /**
                     * Constructs a new WriteFileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IWriteFileRequest);

                    /** WriteFileRequest workspace. */
                    public workspace: string;

                    /** WriteFileRequest path. */
                    public path: string;

                    /** WriteFileRequest contents. */
                    public contents: (Uint8Array|string);

                    /**
                     * Creates a new WriteFileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WriteFileRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IWriteFileRequest): google.cloud.dataform.v1alpha2.WriteFileRequest;

                    /**
                     * Encodes the specified WriteFileRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.WriteFileRequest.verify|verify} messages.
                     * @param message WriteFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IWriteFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WriteFileRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.WriteFileRequest.verify|verify} messages.
                     * @param message WriteFileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IWriteFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WriteFileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WriteFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.WriteFileRequest;

                    /**
                     * Decodes a WriteFileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WriteFileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.WriteFileRequest;

                    /**
                     * Verifies a WriteFileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WriteFileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WriteFileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.WriteFileRequest;

                    /**
                     * Creates a plain object from a WriteFileRequest message. Also converts values to other types if specified.
                     * @param message WriteFileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.WriteFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WriteFileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WriteFileResponse. */
                interface IWriteFileResponse {
                }

                /** Represents a WriteFileResponse. */
                class WriteFileResponse implements IWriteFileResponse {

                    /**
                     * Constructs a new WriteFileResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IWriteFileResponse);

                    /**
                     * Creates a new WriteFileResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WriteFileResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IWriteFileResponse): google.cloud.dataform.v1alpha2.WriteFileResponse;

                    /**
                     * Encodes the specified WriteFileResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.WriteFileResponse.verify|verify} messages.
                     * @param message WriteFileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IWriteFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WriteFileResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.WriteFileResponse.verify|verify} messages.
                     * @param message WriteFileResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IWriteFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WriteFileResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WriteFileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.WriteFileResponse;

                    /**
                     * Decodes a WriteFileResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WriteFileResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.WriteFileResponse;

                    /**
                     * Verifies a WriteFileResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WriteFileResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WriteFileResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.WriteFileResponse;

                    /**
                     * Creates a plain object from a WriteFileResponse message. Also converts values to other types if specified.
                     * @param message WriteFileResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.WriteFileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WriteFileResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstallNpmPackagesRequest. */
                interface IInstallNpmPackagesRequest {

                    /** InstallNpmPackagesRequest workspace */
                    workspace?: (string|null);
                }

                /** Represents an InstallNpmPackagesRequest. */
                class InstallNpmPackagesRequest implements IInstallNpmPackagesRequest {

                    /**
                     * Constructs a new InstallNpmPackagesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IInstallNpmPackagesRequest);

                    /** InstallNpmPackagesRequest workspace. */
                    public workspace: string;

                    /**
                     * Creates a new InstallNpmPackagesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstallNpmPackagesRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IInstallNpmPackagesRequest): google.cloud.dataform.v1alpha2.InstallNpmPackagesRequest;

                    /**
                     * Encodes the specified InstallNpmPackagesRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.InstallNpmPackagesRequest.verify|verify} messages.
                     * @param message InstallNpmPackagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IInstallNpmPackagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstallNpmPackagesRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.InstallNpmPackagesRequest.verify|verify} messages.
                     * @param message InstallNpmPackagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IInstallNpmPackagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstallNpmPackagesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstallNpmPackagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.InstallNpmPackagesRequest;

                    /**
                     * Decodes an InstallNpmPackagesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstallNpmPackagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.InstallNpmPackagesRequest;

                    /**
                     * Verifies an InstallNpmPackagesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstallNpmPackagesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstallNpmPackagesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.InstallNpmPackagesRequest;

                    /**
                     * Creates a plain object from an InstallNpmPackagesRequest message. Also converts values to other types if specified.
                     * @param message InstallNpmPackagesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.InstallNpmPackagesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstallNpmPackagesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InstallNpmPackagesResponse. */
                interface IInstallNpmPackagesResponse {
                }

                /** Represents an InstallNpmPackagesResponse. */
                class InstallNpmPackagesResponse implements IInstallNpmPackagesResponse {

                    /**
                     * Constructs a new InstallNpmPackagesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IInstallNpmPackagesResponse);

                    /**
                     * Creates a new InstallNpmPackagesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InstallNpmPackagesResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IInstallNpmPackagesResponse): google.cloud.dataform.v1alpha2.InstallNpmPackagesResponse;

                    /**
                     * Encodes the specified InstallNpmPackagesResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.InstallNpmPackagesResponse.verify|verify} messages.
                     * @param message InstallNpmPackagesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IInstallNpmPackagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InstallNpmPackagesResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.InstallNpmPackagesResponse.verify|verify} messages.
                     * @param message InstallNpmPackagesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IInstallNpmPackagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InstallNpmPackagesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InstallNpmPackagesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.InstallNpmPackagesResponse;

                    /**
                     * Decodes an InstallNpmPackagesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InstallNpmPackagesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.InstallNpmPackagesResponse;

                    /**
                     * Verifies an InstallNpmPackagesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InstallNpmPackagesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InstallNpmPackagesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.InstallNpmPackagesResponse;

                    /**
                     * Creates a plain object from an InstallNpmPackagesResponse message. Also converts values to other types if specified.
                     * @param message InstallNpmPackagesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.InstallNpmPackagesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InstallNpmPackagesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CompilationResult. */
                interface ICompilationResult {

                    /** CompilationResult name */
                    name?: (string|null);

                    /** CompilationResult gitCommitish */
                    gitCommitish?: (string|null);

                    /** CompilationResult workspace */
                    workspace?: (string|null);

                    /** CompilationResult codeCompilationConfig */
                    codeCompilationConfig?: (google.cloud.dataform.v1alpha2.CompilationResult.ICodeCompilationConfig|null);

                    /** CompilationResult dataformCoreVersion */
                    dataformCoreVersion?: (string|null);

                    /** CompilationResult compilationErrors */
                    compilationErrors?: (google.cloud.dataform.v1alpha2.CompilationResult.ICompilationError[]|null);
                }

                /** Represents a CompilationResult. */
                class CompilationResult implements ICompilationResult {

                    /**
                     * Constructs a new CompilationResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.ICompilationResult);

                    /** CompilationResult name. */
                    public name: string;

                    /** CompilationResult gitCommitish. */
                    public gitCommitish?: (string|null);

                    /** CompilationResult workspace. */
                    public workspace?: (string|null);

                    /** CompilationResult codeCompilationConfig. */
                    public codeCompilationConfig?: (google.cloud.dataform.v1alpha2.CompilationResult.ICodeCompilationConfig|null);

                    /** CompilationResult dataformCoreVersion. */
                    public dataformCoreVersion: string;

                    /** CompilationResult compilationErrors. */
                    public compilationErrors: google.cloud.dataform.v1alpha2.CompilationResult.ICompilationError[];

                    /** CompilationResult source. */
                    public source?: ("gitCommitish"|"workspace");

                    /**
                     * Creates a new CompilationResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CompilationResult instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.ICompilationResult): google.cloud.dataform.v1alpha2.CompilationResult;

                    /**
                     * Encodes the specified CompilationResult message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResult.verify|verify} messages.
                     * @param message CompilationResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.ICompilationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CompilationResult message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResult.verify|verify} messages.
                     * @param message CompilationResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.ICompilationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CompilationResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CompilationResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CompilationResult;

                    /**
                     * Decodes a CompilationResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CompilationResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CompilationResult;

                    /**
                     * Verifies a CompilationResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CompilationResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CompilationResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CompilationResult;

                    /**
                     * Creates a plain object from a CompilationResult message. Also converts values to other types if specified.
                     * @param message CompilationResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.CompilationResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CompilationResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CompilationResult {

                    /** Properties of a CodeCompilationConfig. */
                    interface ICodeCompilationConfig {

                        /** CodeCompilationConfig defaultDatabase */
                        defaultDatabase?: (string|null);

                        /** CodeCompilationConfig defaultSchema */
                        defaultSchema?: (string|null);

                        /** CodeCompilationConfig defaultLocation */
                        defaultLocation?: (string|null);

                        /** CodeCompilationConfig assertionSchema */
                        assertionSchema?: (string|null);

                        /** CodeCompilationConfig vars */
                        vars?: ({ [k: string]: string }|null);

                        /** CodeCompilationConfig databaseSuffix */
                        databaseSuffix?: (string|null);

                        /** CodeCompilationConfig schemaSuffix */
                        schemaSuffix?: (string|null);

                        /** CodeCompilationConfig tablePrefix */
                        tablePrefix?: (string|null);
                    }

                    /** Represents a CodeCompilationConfig. */
                    class CodeCompilationConfig implements ICodeCompilationConfig {

                        /**
                         * Constructs a new CodeCompilationConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataform.v1alpha2.CompilationResult.ICodeCompilationConfig);

                        /** CodeCompilationConfig defaultDatabase. */
                        public defaultDatabase: string;

                        /** CodeCompilationConfig defaultSchema. */
                        public defaultSchema: string;

                        /** CodeCompilationConfig defaultLocation. */
                        public defaultLocation: string;

                        /** CodeCompilationConfig assertionSchema. */
                        public assertionSchema: string;

                        /** CodeCompilationConfig vars. */
                        public vars: { [k: string]: string };

                        /** CodeCompilationConfig databaseSuffix. */
                        public databaseSuffix: string;

                        /** CodeCompilationConfig schemaSuffix. */
                        public schemaSuffix: string;

                        /** CodeCompilationConfig tablePrefix. */
                        public tablePrefix: string;

                        /**
                         * Creates a new CodeCompilationConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CodeCompilationConfig instance
                         */
                        public static create(properties?: google.cloud.dataform.v1alpha2.CompilationResult.ICodeCompilationConfig): google.cloud.dataform.v1alpha2.CompilationResult.CodeCompilationConfig;

                        /**
                         * Encodes the specified CodeCompilationConfig message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResult.CodeCompilationConfig.verify|verify} messages.
                         * @param message CodeCompilationConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataform.v1alpha2.CompilationResult.ICodeCompilationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CodeCompilationConfig message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResult.CodeCompilationConfig.verify|verify} messages.
                         * @param message CodeCompilationConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataform.v1alpha2.CompilationResult.ICodeCompilationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CodeCompilationConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CodeCompilationConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CompilationResult.CodeCompilationConfig;

                        /**
                         * Decodes a CodeCompilationConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CodeCompilationConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CompilationResult.CodeCompilationConfig;

                        /**
                         * Verifies a CodeCompilationConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CodeCompilationConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CodeCompilationConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CompilationResult.CodeCompilationConfig;

                        /**
                         * Creates a plain object from a CodeCompilationConfig message. Also converts values to other types if specified.
                         * @param message CodeCompilationConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataform.v1alpha2.CompilationResult.CodeCompilationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CodeCompilationConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CompilationError. */
                    interface ICompilationError {

                        /** CompilationError message */
                        message?: (string|null);

                        /** CompilationError stack */
                        stack?: (string|null);

                        /** CompilationError path */
                        path?: (string|null);

                        /** CompilationError actionTarget */
                        actionTarget?: (google.cloud.dataform.v1alpha2.ITarget|null);
                    }

                    /** Represents a CompilationError. */
                    class CompilationError implements ICompilationError {

                        /**
                         * Constructs a new CompilationError.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataform.v1alpha2.CompilationResult.ICompilationError);

                        /** CompilationError message. */
                        public message: string;

                        /** CompilationError stack. */
                        public stack: string;

                        /** CompilationError path. */
                        public path: string;

                        /** CompilationError actionTarget. */
                        public actionTarget?: (google.cloud.dataform.v1alpha2.ITarget|null);

                        /**
                         * Creates a new CompilationError instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompilationError instance
                         */
                        public static create(properties?: google.cloud.dataform.v1alpha2.CompilationResult.ICompilationError): google.cloud.dataform.v1alpha2.CompilationResult.CompilationError;

                        /**
                         * Encodes the specified CompilationError message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResult.CompilationError.verify|verify} messages.
                         * @param message CompilationError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataform.v1alpha2.CompilationResult.ICompilationError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompilationError message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResult.CompilationError.verify|verify} messages.
                         * @param message CompilationError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataform.v1alpha2.CompilationResult.ICompilationError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompilationError message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompilationError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CompilationResult.CompilationError;

                        /**
                         * Decodes a CompilationError message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompilationError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CompilationResult.CompilationError;

                        /**
                         * Verifies a CompilationError message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompilationError message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompilationError
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CompilationResult.CompilationError;

                        /**
                         * Creates a plain object from a CompilationError message. Also converts values to other types if specified.
                         * @param message CompilationError
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataform.v1alpha2.CompilationResult.CompilationError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompilationError to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a ListCompilationResultsRequest. */
                interface IListCompilationResultsRequest {

                    /** ListCompilationResultsRequest parent */
                    parent?: (string|null);

                    /** ListCompilationResultsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCompilationResultsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListCompilationResultsRequest. */
                class ListCompilationResultsRequest implements IListCompilationResultsRequest {

                    /**
                     * Constructs a new ListCompilationResultsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IListCompilationResultsRequest);

                    /** ListCompilationResultsRequest parent. */
                    public parent: string;

                    /** ListCompilationResultsRequest pageSize. */
                    public pageSize: number;

                    /** ListCompilationResultsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListCompilationResultsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCompilationResultsRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IListCompilationResultsRequest): google.cloud.dataform.v1alpha2.ListCompilationResultsRequest;

                    /**
                     * Encodes the specified ListCompilationResultsRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListCompilationResultsRequest.verify|verify} messages.
                     * @param message ListCompilationResultsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IListCompilationResultsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCompilationResultsRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListCompilationResultsRequest.verify|verify} messages.
                     * @param message ListCompilationResultsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IListCompilationResultsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCompilationResultsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCompilationResultsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.ListCompilationResultsRequest;

                    /**
                     * Decodes a ListCompilationResultsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCompilationResultsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.ListCompilationResultsRequest;

                    /**
                     * Verifies a ListCompilationResultsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCompilationResultsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCompilationResultsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.ListCompilationResultsRequest;

                    /**
                     * Creates a plain object from a ListCompilationResultsRequest message. Also converts values to other types if specified.
                     * @param message ListCompilationResultsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.ListCompilationResultsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCompilationResultsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCompilationResultsResponse. */
                interface IListCompilationResultsResponse {

                    /** ListCompilationResultsResponse compilationResults */
                    compilationResults?: (google.cloud.dataform.v1alpha2.ICompilationResult[]|null);

                    /** ListCompilationResultsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListCompilationResultsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListCompilationResultsResponse. */
                class ListCompilationResultsResponse implements IListCompilationResultsResponse {

                    /**
                     * Constructs a new ListCompilationResultsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IListCompilationResultsResponse);

                    /** ListCompilationResultsResponse compilationResults. */
                    public compilationResults: google.cloud.dataform.v1alpha2.ICompilationResult[];

                    /** ListCompilationResultsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListCompilationResultsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListCompilationResultsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCompilationResultsResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IListCompilationResultsResponse): google.cloud.dataform.v1alpha2.ListCompilationResultsResponse;

                    /**
                     * Encodes the specified ListCompilationResultsResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListCompilationResultsResponse.verify|verify} messages.
                     * @param message ListCompilationResultsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IListCompilationResultsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCompilationResultsResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListCompilationResultsResponse.verify|verify} messages.
                     * @param message ListCompilationResultsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IListCompilationResultsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCompilationResultsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCompilationResultsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.ListCompilationResultsResponse;

                    /**
                     * Decodes a ListCompilationResultsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCompilationResultsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.ListCompilationResultsResponse;

                    /**
                     * Verifies a ListCompilationResultsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCompilationResultsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCompilationResultsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.ListCompilationResultsResponse;

                    /**
                     * Creates a plain object from a ListCompilationResultsResponse message. Also converts values to other types if specified.
                     * @param message ListCompilationResultsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.ListCompilationResultsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCompilationResultsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetCompilationResultRequest. */
                interface IGetCompilationResultRequest {

                    /** GetCompilationResultRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCompilationResultRequest. */
                class GetCompilationResultRequest implements IGetCompilationResultRequest {

                    /**
                     * Constructs a new GetCompilationResultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IGetCompilationResultRequest);

                    /** GetCompilationResultRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCompilationResultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCompilationResultRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IGetCompilationResultRequest): google.cloud.dataform.v1alpha2.GetCompilationResultRequest;

                    /**
                     * Encodes the specified GetCompilationResultRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.GetCompilationResultRequest.verify|verify} messages.
                     * @param message GetCompilationResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IGetCompilationResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCompilationResultRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.GetCompilationResultRequest.verify|verify} messages.
                     * @param message GetCompilationResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IGetCompilationResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCompilationResultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCompilationResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.GetCompilationResultRequest;

                    /**
                     * Decodes a GetCompilationResultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCompilationResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.GetCompilationResultRequest;

                    /**
                     * Verifies a GetCompilationResultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCompilationResultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCompilationResultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.GetCompilationResultRequest;

                    /**
                     * Creates a plain object from a GetCompilationResultRequest message. Also converts values to other types if specified.
                     * @param message GetCompilationResultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.GetCompilationResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCompilationResultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateCompilationResultRequest. */
                interface ICreateCompilationResultRequest {

                    /** CreateCompilationResultRequest parent */
                    parent?: (string|null);

                    /** CreateCompilationResultRequest compilationResult */
                    compilationResult?: (google.cloud.dataform.v1alpha2.ICompilationResult|null);
                }

                /** Represents a CreateCompilationResultRequest. */
                class CreateCompilationResultRequest implements ICreateCompilationResultRequest {

                    /**
                     * Constructs a new CreateCompilationResultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.ICreateCompilationResultRequest);

                    /** CreateCompilationResultRequest parent. */
                    public parent: string;

                    /** CreateCompilationResultRequest compilationResult. */
                    public compilationResult?: (google.cloud.dataform.v1alpha2.ICompilationResult|null);

                    /**
                     * Creates a new CreateCompilationResultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCompilationResultRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.ICreateCompilationResultRequest): google.cloud.dataform.v1alpha2.CreateCompilationResultRequest;

                    /**
                     * Encodes the specified CreateCompilationResultRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CreateCompilationResultRequest.verify|verify} messages.
                     * @param message CreateCompilationResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.ICreateCompilationResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCompilationResultRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CreateCompilationResultRequest.verify|verify} messages.
                     * @param message CreateCompilationResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.ICreateCompilationResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCompilationResultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCompilationResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CreateCompilationResultRequest;

                    /**
                     * Decodes a CreateCompilationResultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCompilationResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CreateCompilationResultRequest;

                    /**
                     * Verifies a CreateCompilationResultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCompilationResultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCompilationResultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CreateCompilationResultRequest;

                    /**
                     * Creates a plain object from a CreateCompilationResultRequest message. Also converts values to other types if specified.
                     * @param message CreateCompilationResultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.CreateCompilationResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCompilationResultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Target. */
                interface ITarget {

                    /** Target database */
                    database?: (string|null);

                    /** Target schema */
                    schema?: (string|null);

                    /** Target name */
                    name?: (string|null);
                }

                /** Represents a Target. */
                class Target implements ITarget {

                    /**
                     * Constructs a new Target.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.ITarget);

                    /** Target database. */
                    public database: string;

                    /** Target schema. */
                    public schema: string;

                    /** Target name. */
                    public name: string;

                    /**
                     * Creates a new Target instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Target instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.ITarget): google.cloud.dataform.v1alpha2.Target;

                    /**
                     * Encodes the specified Target message. Does not implicitly {@link google.cloud.dataform.v1alpha2.Target.verify|verify} messages.
                     * @param message Target message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.ITarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Target message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.Target.verify|verify} messages.
                     * @param message Target message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.ITarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Target message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Target
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.Target;

                    /**
                     * Decodes a Target message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Target
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.Target;

                    /**
                     * Verifies a Target message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Target message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Target
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.Target;

                    /**
                     * Creates a plain object from a Target message. Also converts values to other types if specified.
                     * @param message Target
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.Target, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Target to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RelationDescriptor. */
                interface IRelationDescriptor {

                    /** RelationDescriptor description */
                    description?: (string|null);

                    /** RelationDescriptor columns */
                    columns?: (google.cloud.dataform.v1alpha2.RelationDescriptor.IColumnDescriptor[]|null);

                    /** RelationDescriptor bigqueryLabels */
                    bigqueryLabels?: ({ [k: string]: string }|null);
                }

                /** Represents a RelationDescriptor. */
                class RelationDescriptor implements IRelationDescriptor {

                    /**
                     * Constructs a new RelationDescriptor.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IRelationDescriptor);

                    /** RelationDescriptor description. */
                    public description: string;

                    /** RelationDescriptor columns. */
                    public columns: google.cloud.dataform.v1alpha2.RelationDescriptor.IColumnDescriptor[];

                    /** RelationDescriptor bigqueryLabels. */
                    public bigqueryLabels: { [k: string]: string };

                    /**
                     * Creates a new RelationDescriptor instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RelationDescriptor instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IRelationDescriptor): google.cloud.dataform.v1alpha2.RelationDescriptor;

                    /**
                     * Encodes the specified RelationDescriptor message. Does not implicitly {@link google.cloud.dataform.v1alpha2.RelationDescriptor.verify|verify} messages.
                     * @param message RelationDescriptor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IRelationDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RelationDescriptor message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.RelationDescriptor.verify|verify} messages.
                     * @param message RelationDescriptor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IRelationDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RelationDescriptor message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RelationDescriptor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.RelationDescriptor;

                    /**
                     * Decodes a RelationDescriptor message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RelationDescriptor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.RelationDescriptor;

                    /**
                     * Verifies a RelationDescriptor message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RelationDescriptor message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RelationDescriptor
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.RelationDescriptor;

                    /**
                     * Creates a plain object from a RelationDescriptor message. Also converts values to other types if specified.
                     * @param message RelationDescriptor
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.RelationDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RelationDescriptor to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace RelationDescriptor {

                    /** Properties of a ColumnDescriptor. */
                    interface IColumnDescriptor {

                        /** ColumnDescriptor path */
                        path?: (string[]|null);

                        /** ColumnDescriptor description */
                        description?: (string|null);

                        /** ColumnDescriptor bigqueryPolicyTags */
                        bigqueryPolicyTags?: (string[]|null);
                    }

                    /** Represents a ColumnDescriptor. */
                    class ColumnDescriptor implements IColumnDescriptor {

                        /**
                         * Constructs a new ColumnDescriptor.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataform.v1alpha2.RelationDescriptor.IColumnDescriptor);

                        /** ColumnDescriptor path. */
                        public path: string[];

                        /** ColumnDescriptor description. */
                        public description: string;

                        /** ColumnDescriptor bigqueryPolicyTags. */
                        public bigqueryPolicyTags: string[];

                        /**
                         * Creates a new ColumnDescriptor instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ColumnDescriptor instance
                         */
                        public static create(properties?: google.cloud.dataform.v1alpha2.RelationDescriptor.IColumnDescriptor): google.cloud.dataform.v1alpha2.RelationDescriptor.ColumnDescriptor;

                        /**
                         * Encodes the specified ColumnDescriptor message. Does not implicitly {@link google.cloud.dataform.v1alpha2.RelationDescriptor.ColumnDescriptor.verify|verify} messages.
                         * @param message ColumnDescriptor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataform.v1alpha2.RelationDescriptor.IColumnDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ColumnDescriptor message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.RelationDescriptor.ColumnDescriptor.verify|verify} messages.
                         * @param message ColumnDescriptor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataform.v1alpha2.RelationDescriptor.IColumnDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ColumnDescriptor message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ColumnDescriptor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.RelationDescriptor.ColumnDescriptor;

                        /**
                         * Decodes a ColumnDescriptor message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ColumnDescriptor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.RelationDescriptor.ColumnDescriptor;

                        /**
                         * Verifies a ColumnDescriptor message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ColumnDescriptor message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ColumnDescriptor
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.RelationDescriptor.ColumnDescriptor;

                        /**
                         * Creates a plain object from a ColumnDescriptor message. Also converts values to other types if specified.
                         * @param message ColumnDescriptor
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataform.v1alpha2.RelationDescriptor.ColumnDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ColumnDescriptor to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a CompilationResultAction. */
                interface ICompilationResultAction {

                    /** CompilationResultAction target */
                    target?: (google.cloud.dataform.v1alpha2.ITarget|null);

                    /** CompilationResultAction canonicalTarget */
                    canonicalTarget?: (google.cloud.dataform.v1alpha2.ITarget|null);

                    /** CompilationResultAction filePath */
                    filePath?: (string|null);

                    /** CompilationResultAction relation */
                    relation?: (google.cloud.dataform.v1alpha2.CompilationResultAction.IRelation|null);

                    /** CompilationResultAction operations */
                    operations?: (google.cloud.dataform.v1alpha2.CompilationResultAction.IOperations|null);

                    /** CompilationResultAction assertion */
                    assertion?: (google.cloud.dataform.v1alpha2.CompilationResultAction.IAssertion|null);

                    /** CompilationResultAction declaration */
                    declaration?: (google.cloud.dataform.v1alpha2.CompilationResultAction.IDeclaration|null);
                }

                /** Represents a CompilationResultAction. */
                class CompilationResultAction implements ICompilationResultAction {

                    /**
                     * Constructs a new CompilationResultAction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.ICompilationResultAction);

                    /** CompilationResultAction target. */
                    public target?: (google.cloud.dataform.v1alpha2.ITarget|null);

                    /** CompilationResultAction canonicalTarget. */
                    public canonicalTarget?: (google.cloud.dataform.v1alpha2.ITarget|null);

                    /** CompilationResultAction filePath. */
                    public filePath: string;

                    /** CompilationResultAction relation. */
                    public relation?: (google.cloud.dataform.v1alpha2.CompilationResultAction.IRelation|null);

                    /** CompilationResultAction operations. */
                    public operations?: (google.cloud.dataform.v1alpha2.CompilationResultAction.IOperations|null);

                    /** CompilationResultAction assertion. */
                    public assertion?: (google.cloud.dataform.v1alpha2.CompilationResultAction.IAssertion|null);

                    /** CompilationResultAction declaration. */
                    public declaration?: (google.cloud.dataform.v1alpha2.CompilationResultAction.IDeclaration|null);

                    /** CompilationResultAction compiledObject. */
                    public compiledObject?: ("relation"|"operations"|"assertion"|"declaration");

                    /**
                     * Creates a new CompilationResultAction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CompilationResultAction instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.ICompilationResultAction): google.cloud.dataform.v1alpha2.CompilationResultAction;

                    /**
                     * Encodes the specified CompilationResultAction message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResultAction.verify|verify} messages.
                     * @param message CompilationResultAction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.ICompilationResultAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CompilationResultAction message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResultAction.verify|verify} messages.
                     * @param message CompilationResultAction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.ICompilationResultAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CompilationResultAction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CompilationResultAction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CompilationResultAction;

                    /**
                     * Decodes a CompilationResultAction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CompilationResultAction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CompilationResultAction;

                    /**
                     * Verifies a CompilationResultAction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CompilationResultAction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CompilationResultAction
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CompilationResultAction;

                    /**
                     * Creates a plain object from a CompilationResultAction message. Also converts values to other types if specified.
                     * @param message CompilationResultAction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.CompilationResultAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CompilationResultAction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CompilationResultAction {

                    /** Properties of a Relation. */
                    interface IRelation {

                        /** Relation dependencyTargets */
                        dependencyTargets?: (google.cloud.dataform.v1alpha2.ITarget[]|null);

                        /** Relation disabled */
                        disabled?: (boolean|null);

                        /** Relation tags */
                        tags?: (string[]|null);

                        /** Relation relationDescriptor */
                        relationDescriptor?: (google.cloud.dataform.v1alpha2.IRelationDescriptor|null);

                        /** Relation relationType */
                        relationType?: (google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.RelationType|keyof typeof google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.RelationType|null);

                        /** Relation selectQuery */
                        selectQuery?: (string|null);

                        /** Relation preOperations */
                        preOperations?: (string[]|null);

                        /** Relation postOperations */
                        postOperations?: (string[]|null);

                        /** Relation incrementalTableConfig */
                        incrementalTableConfig?: (google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.IIncrementalTableConfig|null);

                        /** Relation partitionExpression */
                        partitionExpression?: (string|null);

                        /** Relation clusterExpressions */
                        clusterExpressions?: (string[]|null);

                        /** Relation partitionExpirationDays */
                        partitionExpirationDays?: (number|null);

                        /** Relation requirePartitionFilter */
                        requirePartitionFilter?: (boolean|null);

                        /** Relation additionalOptions */
                        additionalOptions?: ({ [k: string]: string }|null);
                    }

                    /** Represents a Relation. */
                    class Relation implements IRelation {

                        /**
                         * Constructs a new Relation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataform.v1alpha2.CompilationResultAction.IRelation);

                        /** Relation dependencyTargets. */
                        public dependencyTargets: google.cloud.dataform.v1alpha2.ITarget[];

                        /** Relation disabled. */
                        public disabled: boolean;

                        /** Relation tags. */
                        public tags: string[];

                        /** Relation relationDescriptor. */
                        public relationDescriptor?: (google.cloud.dataform.v1alpha2.IRelationDescriptor|null);

                        /** Relation relationType. */
                        public relationType: (google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.RelationType|keyof typeof google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.RelationType);

                        /** Relation selectQuery. */
                        public selectQuery: string;

                        /** Relation preOperations. */
                        public preOperations: string[];

                        /** Relation postOperations. */
                        public postOperations: string[];

                        /** Relation incrementalTableConfig. */
                        public incrementalTableConfig?: (google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.IIncrementalTableConfig|null);

                        /** Relation partitionExpression. */
                        public partitionExpression: string;

                        /** Relation clusterExpressions. */
                        public clusterExpressions: string[];

                        /** Relation partitionExpirationDays. */
                        public partitionExpirationDays: number;

                        /** Relation requirePartitionFilter. */
                        public requirePartitionFilter: boolean;

                        /** Relation additionalOptions. */
                        public additionalOptions: { [k: string]: string };

                        /**
                         * Creates a new Relation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Relation instance
                         */
                        public static create(properties?: google.cloud.dataform.v1alpha2.CompilationResultAction.IRelation): google.cloud.dataform.v1alpha2.CompilationResultAction.Relation;

                        /**
                         * Encodes the specified Relation message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.verify|verify} messages.
                         * @param message Relation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataform.v1alpha2.CompilationResultAction.IRelation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Relation message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.verify|verify} messages.
                         * @param message Relation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataform.v1alpha2.CompilationResultAction.IRelation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Relation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Relation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CompilationResultAction.Relation;

                        /**
                         * Decodes a Relation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Relation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CompilationResultAction.Relation;

                        /**
                         * Verifies a Relation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Relation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Relation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CompilationResultAction.Relation;

                        /**
                         * Creates a plain object from a Relation message. Also converts values to other types if specified.
                         * @param message Relation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataform.v1alpha2.CompilationResultAction.Relation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Relation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Relation {

                        /** RelationType enum. */
                        enum RelationType {
                            RELATION_TYPE_UNSPECIFIED = 0,
                            TABLE = 1,
                            VIEW = 2,
                            INCREMENTAL_TABLE = 3,
                            MATERIALIZED_VIEW = 4
                        }

                        /** Properties of an IncrementalTableConfig. */
                        interface IIncrementalTableConfig {

                            /** IncrementalTableConfig incrementalSelectQuery */
                            incrementalSelectQuery?: (string|null);

                            /** IncrementalTableConfig refreshDisabled */
                            refreshDisabled?: (boolean|null);

                            /** IncrementalTableConfig uniqueKeyParts */
                            uniqueKeyParts?: (string[]|null);

                            /** IncrementalTableConfig updatePartitionFilter */
                            updatePartitionFilter?: (string|null);

                            /** IncrementalTableConfig incrementalPreOperations */
                            incrementalPreOperations?: (string[]|null);

                            /** IncrementalTableConfig incrementalPostOperations */
                            incrementalPostOperations?: (string[]|null);
                        }

                        /** Represents an IncrementalTableConfig. */
                        class IncrementalTableConfig implements IIncrementalTableConfig {

                            /**
                             * Constructs a new IncrementalTableConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.IIncrementalTableConfig);

                            /** IncrementalTableConfig incrementalSelectQuery. */
                            public incrementalSelectQuery: string;

                            /** IncrementalTableConfig refreshDisabled. */
                            public refreshDisabled: boolean;

                            /** IncrementalTableConfig uniqueKeyParts. */
                            public uniqueKeyParts: string[];

                            /** IncrementalTableConfig updatePartitionFilter. */
                            public updatePartitionFilter: string;

                            /** IncrementalTableConfig incrementalPreOperations. */
                            public incrementalPreOperations: string[];

                            /** IncrementalTableConfig incrementalPostOperations. */
                            public incrementalPostOperations: string[];

                            /**
                             * Creates a new IncrementalTableConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns IncrementalTableConfig instance
                             */
                            public static create(properties?: google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.IIncrementalTableConfig): google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.IncrementalTableConfig;

                            /**
                             * Encodes the specified IncrementalTableConfig message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.IncrementalTableConfig.verify|verify} messages.
                             * @param message IncrementalTableConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.IIncrementalTableConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified IncrementalTableConfig message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.IncrementalTableConfig.verify|verify} messages.
                             * @param message IncrementalTableConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.IIncrementalTableConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an IncrementalTableConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns IncrementalTableConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.IncrementalTableConfig;

                            /**
                             * Decodes an IncrementalTableConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns IncrementalTableConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.IncrementalTableConfig;

                            /**
                             * Verifies an IncrementalTableConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an IncrementalTableConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns IncrementalTableConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.IncrementalTableConfig;

                            /**
                             * Creates a plain object from an IncrementalTableConfig message. Also converts values to other types if specified.
                             * @param message IncrementalTableConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.dataform.v1alpha2.CompilationResultAction.Relation.IncrementalTableConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this IncrementalTableConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of an Operations. */
                    interface IOperations {

                        /** Operations dependencyTargets */
                        dependencyTargets?: (google.cloud.dataform.v1alpha2.ITarget[]|null);

                        /** Operations disabled */
                        disabled?: (boolean|null);

                        /** Operations tags */
                        tags?: (string[]|null);

                        /** Operations relationDescriptor */
                        relationDescriptor?: (google.cloud.dataform.v1alpha2.IRelationDescriptor|null);

                        /** Operations queries */
                        queries?: (string[]|null);

                        /** Operations hasOutput */
                        hasOutput?: (boolean|null);
                    }

                    /** Represents an Operations. */
                    class Operations implements IOperations {

                        /**
                         * Constructs a new Operations.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataform.v1alpha2.CompilationResultAction.IOperations);

                        /** Operations dependencyTargets. */
                        public dependencyTargets: google.cloud.dataform.v1alpha2.ITarget[];

                        /** Operations disabled. */
                        public disabled: boolean;

                        /** Operations tags. */
                        public tags: string[];

                        /** Operations relationDescriptor. */
                        public relationDescriptor?: (google.cloud.dataform.v1alpha2.IRelationDescriptor|null);

                        /** Operations queries. */
                        public queries: string[];

                        /** Operations hasOutput. */
                        public hasOutput: boolean;

                        /**
                         * Creates a new Operations instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Operations instance
                         */
                        public static create(properties?: google.cloud.dataform.v1alpha2.CompilationResultAction.IOperations): google.cloud.dataform.v1alpha2.CompilationResultAction.Operations;

                        /**
                         * Encodes the specified Operations message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResultAction.Operations.verify|verify} messages.
                         * @param message Operations message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataform.v1alpha2.CompilationResultAction.IOperations, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Operations message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResultAction.Operations.verify|verify} messages.
                         * @param message Operations message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataform.v1alpha2.CompilationResultAction.IOperations, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Operations message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Operations
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CompilationResultAction.Operations;

                        /**
                         * Decodes an Operations message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Operations
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CompilationResultAction.Operations;

                        /**
                         * Verifies an Operations message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Operations message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Operations
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CompilationResultAction.Operations;

                        /**
                         * Creates a plain object from an Operations message. Also converts values to other types if specified.
                         * @param message Operations
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataform.v1alpha2.CompilationResultAction.Operations, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Operations to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Assertion. */
                    interface IAssertion {

                        /** Assertion dependencyTargets */
                        dependencyTargets?: (google.cloud.dataform.v1alpha2.ITarget[]|null);

                        /** Assertion parentAction */
                        parentAction?: (google.cloud.dataform.v1alpha2.ITarget|null);

                        /** Assertion disabled */
                        disabled?: (boolean|null);

                        /** Assertion tags */
                        tags?: (string[]|null);

                        /** Assertion selectQuery */
                        selectQuery?: (string|null);

                        /** Assertion relationDescriptor */
                        relationDescriptor?: (google.cloud.dataform.v1alpha2.IRelationDescriptor|null);
                    }

                    /** Represents an Assertion. */
                    class Assertion implements IAssertion {

                        /**
                         * Constructs a new Assertion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataform.v1alpha2.CompilationResultAction.IAssertion);

                        /** Assertion dependencyTargets. */
                        public dependencyTargets: google.cloud.dataform.v1alpha2.ITarget[];

                        /** Assertion parentAction. */
                        public parentAction?: (google.cloud.dataform.v1alpha2.ITarget|null);

                        /** Assertion disabled. */
                        public disabled: boolean;

                        /** Assertion tags. */
                        public tags: string[];

                        /** Assertion selectQuery. */
                        public selectQuery: string;

                        /** Assertion relationDescriptor. */
                        public relationDescriptor?: (google.cloud.dataform.v1alpha2.IRelationDescriptor|null);

                        /**
                         * Creates a new Assertion instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Assertion instance
                         */
                        public static create(properties?: google.cloud.dataform.v1alpha2.CompilationResultAction.IAssertion): google.cloud.dataform.v1alpha2.CompilationResultAction.Assertion;

                        /**
                         * Encodes the specified Assertion message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResultAction.Assertion.verify|verify} messages.
                         * @param message Assertion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataform.v1alpha2.CompilationResultAction.IAssertion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Assertion message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResultAction.Assertion.verify|verify} messages.
                         * @param message Assertion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataform.v1alpha2.CompilationResultAction.IAssertion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Assertion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Assertion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CompilationResultAction.Assertion;

                        /**
                         * Decodes an Assertion message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Assertion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CompilationResultAction.Assertion;

                        /**
                         * Verifies an Assertion message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Assertion message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Assertion
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CompilationResultAction.Assertion;

                        /**
                         * Creates a plain object from an Assertion message. Also converts values to other types if specified.
                         * @param message Assertion
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataform.v1alpha2.CompilationResultAction.Assertion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Assertion to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Declaration. */
                    interface IDeclaration {

                        /** Declaration relationDescriptor */
                        relationDescriptor?: (google.cloud.dataform.v1alpha2.IRelationDescriptor|null);
                    }

                    /** Represents a Declaration. */
                    class Declaration implements IDeclaration {

                        /**
                         * Constructs a new Declaration.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataform.v1alpha2.CompilationResultAction.IDeclaration);

                        /** Declaration relationDescriptor. */
                        public relationDescriptor?: (google.cloud.dataform.v1alpha2.IRelationDescriptor|null);

                        /**
                         * Creates a new Declaration instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Declaration instance
                         */
                        public static create(properties?: google.cloud.dataform.v1alpha2.CompilationResultAction.IDeclaration): google.cloud.dataform.v1alpha2.CompilationResultAction.Declaration;

                        /**
                         * Encodes the specified Declaration message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResultAction.Declaration.verify|verify} messages.
                         * @param message Declaration message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataform.v1alpha2.CompilationResultAction.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CompilationResultAction.Declaration.verify|verify} messages.
                         * @param message Declaration message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataform.v1alpha2.CompilationResultAction.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Declaration message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Declaration
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CompilationResultAction.Declaration;

                        /**
                         * Decodes a Declaration message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Declaration
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CompilationResultAction.Declaration;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CompilationResultAction.Declaration;

                        /**
                         * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                         * @param message Declaration
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataform.v1alpha2.CompilationResultAction.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Declaration to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a QueryCompilationResultActionsRequest. */
                interface IQueryCompilationResultActionsRequest {

                    /** QueryCompilationResultActionsRequest name */
                    name?: (string|null);

                    /** QueryCompilationResultActionsRequest pageSize */
                    pageSize?: (number|null);

                    /** QueryCompilationResultActionsRequest pageToken */
                    pageToken?: (string|null);

                    /** QueryCompilationResultActionsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a QueryCompilationResultActionsRequest. */
                class QueryCompilationResultActionsRequest implements IQueryCompilationResultActionsRequest {

                    /**
                     * Constructs a new QueryCompilationResultActionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IQueryCompilationResultActionsRequest);

                    /** QueryCompilationResultActionsRequest name. */
                    public name: string;

                    /** QueryCompilationResultActionsRequest pageSize. */
                    public pageSize: number;

                    /** QueryCompilationResultActionsRequest pageToken. */
                    public pageToken: string;

                    /** QueryCompilationResultActionsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new QueryCompilationResultActionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryCompilationResultActionsRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IQueryCompilationResultActionsRequest): google.cloud.dataform.v1alpha2.QueryCompilationResultActionsRequest;

                    /**
                     * Encodes the specified QueryCompilationResultActionsRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryCompilationResultActionsRequest.verify|verify} messages.
                     * @param message QueryCompilationResultActionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IQueryCompilationResultActionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryCompilationResultActionsRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryCompilationResultActionsRequest.verify|verify} messages.
                     * @param message QueryCompilationResultActionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IQueryCompilationResultActionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryCompilationResultActionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryCompilationResultActionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.QueryCompilationResultActionsRequest;

                    /**
                     * Decodes a QueryCompilationResultActionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryCompilationResultActionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.QueryCompilationResultActionsRequest;

                    /**
                     * Verifies a QueryCompilationResultActionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryCompilationResultActionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryCompilationResultActionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.QueryCompilationResultActionsRequest;

                    /**
                     * Creates a plain object from a QueryCompilationResultActionsRequest message. Also converts values to other types if specified.
                     * @param message QueryCompilationResultActionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.QueryCompilationResultActionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryCompilationResultActionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryCompilationResultActionsResponse. */
                interface IQueryCompilationResultActionsResponse {

                    /** QueryCompilationResultActionsResponse compilationResultActions */
                    compilationResultActions?: (google.cloud.dataform.v1alpha2.ICompilationResultAction[]|null);

                    /** QueryCompilationResultActionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a QueryCompilationResultActionsResponse. */
                class QueryCompilationResultActionsResponse implements IQueryCompilationResultActionsResponse {

                    /**
                     * Constructs a new QueryCompilationResultActionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IQueryCompilationResultActionsResponse);

                    /** QueryCompilationResultActionsResponse compilationResultActions. */
                    public compilationResultActions: google.cloud.dataform.v1alpha2.ICompilationResultAction[];

                    /** QueryCompilationResultActionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new QueryCompilationResultActionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryCompilationResultActionsResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IQueryCompilationResultActionsResponse): google.cloud.dataform.v1alpha2.QueryCompilationResultActionsResponse;

                    /**
                     * Encodes the specified QueryCompilationResultActionsResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryCompilationResultActionsResponse.verify|verify} messages.
                     * @param message QueryCompilationResultActionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IQueryCompilationResultActionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryCompilationResultActionsResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryCompilationResultActionsResponse.verify|verify} messages.
                     * @param message QueryCompilationResultActionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IQueryCompilationResultActionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryCompilationResultActionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryCompilationResultActionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.QueryCompilationResultActionsResponse;

                    /**
                     * Decodes a QueryCompilationResultActionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryCompilationResultActionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.QueryCompilationResultActionsResponse;

                    /**
                     * Verifies a QueryCompilationResultActionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryCompilationResultActionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryCompilationResultActionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.QueryCompilationResultActionsResponse;

                    /**
                     * Creates a plain object from a QueryCompilationResultActionsResponse message. Also converts values to other types if specified.
                     * @param message QueryCompilationResultActionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.QueryCompilationResultActionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryCompilationResultActionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WorkflowInvocation. */
                interface IWorkflowInvocation {

                    /** WorkflowInvocation name */
                    name?: (string|null);

                    /** WorkflowInvocation compilationResult */
                    compilationResult?: (string|null);

                    /** WorkflowInvocation invocationConfig */
                    invocationConfig?: (google.cloud.dataform.v1alpha2.WorkflowInvocation.IInvocationConfig|null);

                    /** WorkflowInvocation state */
                    state?: (google.cloud.dataform.v1alpha2.WorkflowInvocation.State|keyof typeof google.cloud.dataform.v1alpha2.WorkflowInvocation.State|null);

                    /** WorkflowInvocation invocationTiming */
                    invocationTiming?: (google.type.IInterval|null);
                }

                /** Represents a WorkflowInvocation. */
                class WorkflowInvocation implements IWorkflowInvocation {

                    /**
                     * Constructs a new WorkflowInvocation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IWorkflowInvocation);

                    /** WorkflowInvocation name. */
                    public name: string;

                    /** WorkflowInvocation compilationResult. */
                    public compilationResult: string;

                    /** WorkflowInvocation invocationConfig. */
                    public invocationConfig?: (google.cloud.dataform.v1alpha2.WorkflowInvocation.IInvocationConfig|null);

                    /** WorkflowInvocation state. */
                    public state: (google.cloud.dataform.v1alpha2.WorkflowInvocation.State|keyof typeof google.cloud.dataform.v1alpha2.WorkflowInvocation.State);

                    /** WorkflowInvocation invocationTiming. */
                    public invocationTiming?: (google.type.IInterval|null);

                    /**
                     * Creates a new WorkflowInvocation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkflowInvocation instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IWorkflowInvocation): google.cloud.dataform.v1alpha2.WorkflowInvocation;

                    /**
                     * Encodes the specified WorkflowInvocation message. Does not implicitly {@link google.cloud.dataform.v1alpha2.WorkflowInvocation.verify|verify} messages.
                     * @param message WorkflowInvocation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IWorkflowInvocation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkflowInvocation message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.WorkflowInvocation.verify|verify} messages.
                     * @param message WorkflowInvocation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IWorkflowInvocation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkflowInvocation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkflowInvocation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.WorkflowInvocation;

                    /**
                     * Decodes a WorkflowInvocation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkflowInvocation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.WorkflowInvocation;

                    /**
                     * Verifies a WorkflowInvocation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkflowInvocation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkflowInvocation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.WorkflowInvocation;

                    /**
                     * Creates a plain object from a WorkflowInvocation message. Also converts values to other types if specified.
                     * @param message WorkflowInvocation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.WorkflowInvocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkflowInvocation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace WorkflowInvocation {

                    /** Properties of an InvocationConfig. */
                    interface IInvocationConfig {

                        /** InvocationConfig includedTargets */
                        includedTargets?: (google.cloud.dataform.v1alpha2.ITarget[]|null);

                        /** InvocationConfig includedTags */
                        includedTags?: (string[]|null);

                        /** InvocationConfig transitiveDependenciesIncluded */
                        transitiveDependenciesIncluded?: (boolean|null);

                        /** InvocationConfig transitiveDependentsIncluded */
                        transitiveDependentsIncluded?: (boolean|null);

                        /** InvocationConfig fullyRefreshIncrementalTablesEnabled */
                        fullyRefreshIncrementalTablesEnabled?: (boolean|null);
                    }

                    /** Represents an InvocationConfig. */
                    class InvocationConfig implements IInvocationConfig {

                        /**
                         * Constructs a new InvocationConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataform.v1alpha2.WorkflowInvocation.IInvocationConfig);

                        /** InvocationConfig includedTargets. */
                        public includedTargets: google.cloud.dataform.v1alpha2.ITarget[];

                        /** InvocationConfig includedTags. */
                        public includedTags: string[];

                        /** InvocationConfig transitiveDependenciesIncluded. */
                        public transitiveDependenciesIncluded: boolean;

                        /** InvocationConfig transitiveDependentsIncluded. */
                        public transitiveDependentsIncluded: boolean;

                        /** InvocationConfig fullyRefreshIncrementalTablesEnabled. */
                        public fullyRefreshIncrementalTablesEnabled: boolean;

                        /**
                         * Creates a new InvocationConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InvocationConfig instance
                         */
                        public static create(properties?: google.cloud.dataform.v1alpha2.WorkflowInvocation.IInvocationConfig): google.cloud.dataform.v1alpha2.WorkflowInvocation.InvocationConfig;

                        /**
                         * Encodes the specified InvocationConfig message. Does not implicitly {@link google.cloud.dataform.v1alpha2.WorkflowInvocation.InvocationConfig.verify|verify} messages.
                         * @param message InvocationConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataform.v1alpha2.WorkflowInvocation.IInvocationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InvocationConfig message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.WorkflowInvocation.InvocationConfig.verify|verify} messages.
                         * @param message InvocationConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataform.v1alpha2.WorkflowInvocation.IInvocationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InvocationConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InvocationConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.WorkflowInvocation.InvocationConfig;

                        /**
                         * Decodes an InvocationConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InvocationConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.WorkflowInvocation.InvocationConfig;

                        /**
                         * Verifies an InvocationConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InvocationConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InvocationConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.WorkflowInvocation.InvocationConfig;

                        /**
                         * Creates a plain object from an InvocationConfig message. Also converts values to other types if specified.
                         * @param message InvocationConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataform.v1alpha2.WorkflowInvocation.InvocationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InvocationConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        CANCELLED = 3,
                        FAILED = 4,
                        CANCELING = 5
                    }
                }

                /** Properties of a ListWorkflowInvocationsRequest. */
                interface IListWorkflowInvocationsRequest {

                    /** ListWorkflowInvocationsRequest parent */
                    parent?: (string|null);

                    /** ListWorkflowInvocationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkflowInvocationsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListWorkflowInvocationsRequest. */
                class ListWorkflowInvocationsRequest implements IListWorkflowInvocationsRequest {

                    /**
                     * Constructs a new ListWorkflowInvocationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IListWorkflowInvocationsRequest);

                    /** ListWorkflowInvocationsRequest parent. */
                    public parent: string;

                    /** ListWorkflowInvocationsRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkflowInvocationsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListWorkflowInvocationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkflowInvocationsRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IListWorkflowInvocationsRequest): google.cloud.dataform.v1alpha2.ListWorkflowInvocationsRequest;

                    /**
                     * Encodes the specified ListWorkflowInvocationsRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListWorkflowInvocationsRequest.verify|verify} messages.
                     * @param message ListWorkflowInvocationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IListWorkflowInvocationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkflowInvocationsRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListWorkflowInvocationsRequest.verify|verify} messages.
                     * @param message ListWorkflowInvocationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IListWorkflowInvocationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkflowInvocationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkflowInvocationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.ListWorkflowInvocationsRequest;

                    /**
                     * Decodes a ListWorkflowInvocationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkflowInvocationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.ListWorkflowInvocationsRequest;

                    /**
                     * Verifies a ListWorkflowInvocationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkflowInvocationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkflowInvocationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.ListWorkflowInvocationsRequest;

                    /**
                     * Creates a plain object from a ListWorkflowInvocationsRequest message. Also converts values to other types if specified.
                     * @param message ListWorkflowInvocationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.ListWorkflowInvocationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkflowInvocationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListWorkflowInvocationsResponse. */
                interface IListWorkflowInvocationsResponse {

                    /** ListWorkflowInvocationsResponse workflowInvocations */
                    workflowInvocations?: (google.cloud.dataform.v1alpha2.IWorkflowInvocation[]|null);

                    /** ListWorkflowInvocationsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListWorkflowInvocationsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListWorkflowInvocationsResponse. */
                class ListWorkflowInvocationsResponse implements IListWorkflowInvocationsResponse {

                    /**
                     * Constructs a new ListWorkflowInvocationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IListWorkflowInvocationsResponse);

                    /** ListWorkflowInvocationsResponse workflowInvocations. */
                    public workflowInvocations: google.cloud.dataform.v1alpha2.IWorkflowInvocation[];

                    /** ListWorkflowInvocationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListWorkflowInvocationsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListWorkflowInvocationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkflowInvocationsResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IListWorkflowInvocationsResponse): google.cloud.dataform.v1alpha2.ListWorkflowInvocationsResponse;

                    /**
                     * Encodes the specified ListWorkflowInvocationsResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListWorkflowInvocationsResponse.verify|verify} messages.
                     * @param message ListWorkflowInvocationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IListWorkflowInvocationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkflowInvocationsResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.ListWorkflowInvocationsResponse.verify|verify} messages.
                     * @param message ListWorkflowInvocationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IListWorkflowInvocationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkflowInvocationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkflowInvocationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.ListWorkflowInvocationsResponse;

                    /**
                     * Decodes a ListWorkflowInvocationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkflowInvocationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.ListWorkflowInvocationsResponse;

                    /**
                     * Verifies a ListWorkflowInvocationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkflowInvocationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkflowInvocationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.ListWorkflowInvocationsResponse;

                    /**
                     * Creates a plain object from a ListWorkflowInvocationsResponse message. Also converts values to other types if specified.
                     * @param message ListWorkflowInvocationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.ListWorkflowInvocationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkflowInvocationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetWorkflowInvocationRequest. */
                interface IGetWorkflowInvocationRequest {

                    /** GetWorkflowInvocationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWorkflowInvocationRequest. */
                class GetWorkflowInvocationRequest implements IGetWorkflowInvocationRequest {

                    /**
                     * Constructs a new GetWorkflowInvocationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IGetWorkflowInvocationRequest);

                    /** GetWorkflowInvocationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWorkflowInvocationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkflowInvocationRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IGetWorkflowInvocationRequest): google.cloud.dataform.v1alpha2.GetWorkflowInvocationRequest;

                    /**
                     * Encodes the specified GetWorkflowInvocationRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.GetWorkflowInvocationRequest.verify|verify} messages.
                     * @param message GetWorkflowInvocationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IGetWorkflowInvocationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkflowInvocationRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.GetWorkflowInvocationRequest.verify|verify} messages.
                     * @param message GetWorkflowInvocationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IGetWorkflowInvocationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkflowInvocationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkflowInvocationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.GetWorkflowInvocationRequest;

                    /**
                     * Decodes a GetWorkflowInvocationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkflowInvocationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.GetWorkflowInvocationRequest;

                    /**
                     * Verifies a GetWorkflowInvocationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkflowInvocationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkflowInvocationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.GetWorkflowInvocationRequest;

                    /**
                     * Creates a plain object from a GetWorkflowInvocationRequest message. Also converts values to other types if specified.
                     * @param message GetWorkflowInvocationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.GetWorkflowInvocationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkflowInvocationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateWorkflowInvocationRequest. */
                interface ICreateWorkflowInvocationRequest {

                    /** CreateWorkflowInvocationRequest parent */
                    parent?: (string|null);

                    /** CreateWorkflowInvocationRequest workflowInvocation */
                    workflowInvocation?: (google.cloud.dataform.v1alpha2.IWorkflowInvocation|null);
                }

                /** Represents a CreateWorkflowInvocationRequest. */
                class CreateWorkflowInvocationRequest implements ICreateWorkflowInvocationRequest {

                    /**
                     * Constructs a new CreateWorkflowInvocationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.ICreateWorkflowInvocationRequest);

                    /** CreateWorkflowInvocationRequest parent. */
                    public parent: string;

                    /** CreateWorkflowInvocationRequest workflowInvocation. */
                    public workflowInvocation?: (google.cloud.dataform.v1alpha2.IWorkflowInvocation|null);

                    /**
                     * Creates a new CreateWorkflowInvocationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkflowInvocationRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.ICreateWorkflowInvocationRequest): google.cloud.dataform.v1alpha2.CreateWorkflowInvocationRequest;

                    /**
                     * Encodes the specified CreateWorkflowInvocationRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CreateWorkflowInvocationRequest.verify|verify} messages.
                     * @param message CreateWorkflowInvocationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.ICreateWorkflowInvocationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkflowInvocationRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CreateWorkflowInvocationRequest.verify|verify} messages.
                     * @param message CreateWorkflowInvocationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.ICreateWorkflowInvocationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkflowInvocationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkflowInvocationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CreateWorkflowInvocationRequest;

                    /**
                     * Decodes a CreateWorkflowInvocationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkflowInvocationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CreateWorkflowInvocationRequest;

                    /**
                     * Verifies a CreateWorkflowInvocationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkflowInvocationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkflowInvocationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CreateWorkflowInvocationRequest;

                    /**
                     * Creates a plain object from a CreateWorkflowInvocationRequest message. Also converts values to other types if specified.
                     * @param message CreateWorkflowInvocationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.CreateWorkflowInvocationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkflowInvocationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteWorkflowInvocationRequest. */
                interface IDeleteWorkflowInvocationRequest {

                    /** DeleteWorkflowInvocationRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteWorkflowInvocationRequest. */
                class DeleteWorkflowInvocationRequest implements IDeleteWorkflowInvocationRequest {

                    /**
                     * Constructs a new DeleteWorkflowInvocationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IDeleteWorkflowInvocationRequest);

                    /** DeleteWorkflowInvocationRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteWorkflowInvocationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWorkflowInvocationRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IDeleteWorkflowInvocationRequest): google.cloud.dataform.v1alpha2.DeleteWorkflowInvocationRequest;

                    /**
                     * Encodes the specified DeleteWorkflowInvocationRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.DeleteWorkflowInvocationRequest.verify|verify} messages.
                     * @param message DeleteWorkflowInvocationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IDeleteWorkflowInvocationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWorkflowInvocationRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.DeleteWorkflowInvocationRequest.verify|verify} messages.
                     * @param message DeleteWorkflowInvocationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IDeleteWorkflowInvocationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWorkflowInvocationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWorkflowInvocationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.DeleteWorkflowInvocationRequest;

                    /**
                     * Decodes a DeleteWorkflowInvocationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWorkflowInvocationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.DeleteWorkflowInvocationRequest;

                    /**
                     * Verifies a DeleteWorkflowInvocationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWorkflowInvocationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWorkflowInvocationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.DeleteWorkflowInvocationRequest;

                    /**
                     * Creates a plain object from a DeleteWorkflowInvocationRequest message. Also converts values to other types if specified.
                     * @param message DeleteWorkflowInvocationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.DeleteWorkflowInvocationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWorkflowInvocationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CancelWorkflowInvocationRequest. */
                interface ICancelWorkflowInvocationRequest {

                    /** CancelWorkflowInvocationRequest name */
                    name?: (string|null);
                }

                /** Represents a CancelWorkflowInvocationRequest. */
                class CancelWorkflowInvocationRequest implements ICancelWorkflowInvocationRequest {

                    /**
                     * Constructs a new CancelWorkflowInvocationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.ICancelWorkflowInvocationRequest);

                    /** CancelWorkflowInvocationRequest name. */
                    public name: string;

                    /**
                     * Creates a new CancelWorkflowInvocationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelWorkflowInvocationRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.ICancelWorkflowInvocationRequest): google.cloud.dataform.v1alpha2.CancelWorkflowInvocationRequest;

                    /**
                     * Encodes the specified CancelWorkflowInvocationRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.CancelWorkflowInvocationRequest.verify|verify} messages.
                     * @param message CancelWorkflowInvocationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.ICancelWorkflowInvocationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelWorkflowInvocationRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.CancelWorkflowInvocationRequest.verify|verify} messages.
                     * @param message CancelWorkflowInvocationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.ICancelWorkflowInvocationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelWorkflowInvocationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelWorkflowInvocationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.CancelWorkflowInvocationRequest;

                    /**
                     * Decodes a CancelWorkflowInvocationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelWorkflowInvocationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.CancelWorkflowInvocationRequest;

                    /**
                     * Verifies a CancelWorkflowInvocationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelWorkflowInvocationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelWorkflowInvocationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.CancelWorkflowInvocationRequest;

                    /**
                     * Creates a plain object from a CancelWorkflowInvocationRequest message. Also converts values to other types if specified.
                     * @param message CancelWorkflowInvocationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.CancelWorkflowInvocationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelWorkflowInvocationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WorkflowInvocationAction. */
                interface IWorkflowInvocationAction {

                    /** WorkflowInvocationAction target */
                    target?: (google.cloud.dataform.v1alpha2.ITarget|null);

                    /** WorkflowInvocationAction canonicalTarget */
                    canonicalTarget?: (google.cloud.dataform.v1alpha2.ITarget|null);

                    /** WorkflowInvocationAction state */
                    state?: (google.cloud.dataform.v1alpha2.WorkflowInvocationAction.State|keyof typeof google.cloud.dataform.v1alpha2.WorkflowInvocationAction.State|null);

                    /** WorkflowInvocationAction failureReason */
                    failureReason?: (string|null);

                    /** WorkflowInvocationAction invocationTiming */
                    invocationTiming?: (google.type.IInterval|null);

                    /** WorkflowInvocationAction bigqueryAction */
                    bigqueryAction?: (google.cloud.dataform.v1alpha2.WorkflowInvocationAction.IBigQueryAction|null);
                }

                /** Represents a WorkflowInvocationAction. */
                class WorkflowInvocationAction implements IWorkflowInvocationAction {

                    /**
                     * Constructs a new WorkflowInvocationAction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IWorkflowInvocationAction);

                    /** WorkflowInvocationAction target. */
                    public target?: (google.cloud.dataform.v1alpha2.ITarget|null);

                    /** WorkflowInvocationAction canonicalTarget. */
                    public canonicalTarget?: (google.cloud.dataform.v1alpha2.ITarget|null);

                    /** WorkflowInvocationAction state. */
                    public state: (google.cloud.dataform.v1alpha2.WorkflowInvocationAction.State|keyof typeof google.cloud.dataform.v1alpha2.WorkflowInvocationAction.State);

                    /** WorkflowInvocationAction failureReason. */
                    public failureReason: string;

                    /** WorkflowInvocationAction invocationTiming. */
                    public invocationTiming?: (google.type.IInterval|null);

                    /** WorkflowInvocationAction bigqueryAction. */
                    public bigqueryAction?: (google.cloud.dataform.v1alpha2.WorkflowInvocationAction.IBigQueryAction|null);

                    /**
                     * Creates a new WorkflowInvocationAction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkflowInvocationAction instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IWorkflowInvocationAction): google.cloud.dataform.v1alpha2.WorkflowInvocationAction;

                    /**
                     * Encodes the specified WorkflowInvocationAction message. Does not implicitly {@link google.cloud.dataform.v1alpha2.WorkflowInvocationAction.verify|verify} messages.
                     * @param message WorkflowInvocationAction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IWorkflowInvocationAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkflowInvocationAction message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.WorkflowInvocationAction.verify|verify} messages.
                     * @param message WorkflowInvocationAction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IWorkflowInvocationAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkflowInvocationAction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkflowInvocationAction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.WorkflowInvocationAction;

                    /**
                     * Decodes a WorkflowInvocationAction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkflowInvocationAction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.WorkflowInvocationAction;

                    /**
                     * Verifies a WorkflowInvocationAction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkflowInvocationAction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkflowInvocationAction
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.WorkflowInvocationAction;

                    /**
                     * Creates a plain object from a WorkflowInvocationAction message. Also converts values to other types if specified.
                     * @param message WorkflowInvocationAction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.WorkflowInvocationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkflowInvocationAction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace WorkflowInvocationAction {

                    /** State enum. */
                    enum State {
                        PENDING = 0,
                        RUNNING = 1,
                        SKIPPED = 2,
                        DISABLED = 3,
                        SUCCEEDED = 4,
                        CANCELLED = 5,
                        FAILED = 6
                    }

                    /** Properties of a BigQueryAction. */
                    interface IBigQueryAction {

                        /** BigQueryAction sqlScript */
                        sqlScript?: (string|null);
                    }

                    /** Represents a BigQueryAction. */
                    class BigQueryAction implements IBigQueryAction {

                        /**
                         * Constructs a new BigQueryAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataform.v1alpha2.WorkflowInvocationAction.IBigQueryAction);

                        /** BigQueryAction sqlScript. */
                        public sqlScript: string;

                        /**
                         * Creates a new BigQueryAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BigQueryAction instance
                         */
                        public static create(properties?: google.cloud.dataform.v1alpha2.WorkflowInvocationAction.IBigQueryAction): google.cloud.dataform.v1alpha2.WorkflowInvocationAction.BigQueryAction;

                        /**
                         * Encodes the specified BigQueryAction message. Does not implicitly {@link google.cloud.dataform.v1alpha2.WorkflowInvocationAction.BigQueryAction.verify|verify} messages.
                         * @param message BigQueryAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataform.v1alpha2.WorkflowInvocationAction.IBigQueryAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BigQueryAction message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.WorkflowInvocationAction.BigQueryAction.verify|verify} messages.
                         * @param message BigQueryAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataform.v1alpha2.WorkflowInvocationAction.IBigQueryAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BigQueryAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BigQueryAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.WorkflowInvocationAction.BigQueryAction;

                        /**
                         * Decodes a BigQueryAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BigQueryAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.WorkflowInvocationAction.BigQueryAction;

                        /**
                         * Verifies a BigQueryAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BigQueryAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BigQueryAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.WorkflowInvocationAction.BigQueryAction;

                        /**
                         * Creates a plain object from a BigQueryAction message. Also converts values to other types if specified.
                         * @param message BigQueryAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataform.v1alpha2.WorkflowInvocationAction.BigQueryAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BigQueryAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a QueryWorkflowInvocationActionsRequest. */
                interface IQueryWorkflowInvocationActionsRequest {

                    /** QueryWorkflowInvocationActionsRequest name */
                    name?: (string|null);

                    /** QueryWorkflowInvocationActionsRequest pageSize */
                    pageSize?: (number|null);

                    /** QueryWorkflowInvocationActionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a QueryWorkflowInvocationActionsRequest. */
                class QueryWorkflowInvocationActionsRequest implements IQueryWorkflowInvocationActionsRequest {

                    /**
                     * Constructs a new QueryWorkflowInvocationActionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IQueryWorkflowInvocationActionsRequest);

                    /** QueryWorkflowInvocationActionsRequest name. */
                    public name: string;

                    /** QueryWorkflowInvocationActionsRequest pageSize. */
                    public pageSize: number;

                    /** QueryWorkflowInvocationActionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new QueryWorkflowInvocationActionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryWorkflowInvocationActionsRequest instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IQueryWorkflowInvocationActionsRequest): google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsRequest;

                    /**
                     * Encodes the specified QueryWorkflowInvocationActionsRequest message. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsRequest.verify|verify} messages.
                     * @param message QueryWorkflowInvocationActionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IQueryWorkflowInvocationActionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryWorkflowInvocationActionsRequest message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsRequest.verify|verify} messages.
                     * @param message QueryWorkflowInvocationActionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IQueryWorkflowInvocationActionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryWorkflowInvocationActionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryWorkflowInvocationActionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsRequest;

                    /**
                     * Decodes a QueryWorkflowInvocationActionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryWorkflowInvocationActionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsRequest;

                    /**
                     * Verifies a QueryWorkflowInvocationActionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryWorkflowInvocationActionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryWorkflowInvocationActionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsRequest;

                    /**
                     * Creates a plain object from a QueryWorkflowInvocationActionsRequest message. Also converts values to other types if specified.
                     * @param message QueryWorkflowInvocationActionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryWorkflowInvocationActionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueryWorkflowInvocationActionsResponse. */
                interface IQueryWorkflowInvocationActionsResponse {

                    /** QueryWorkflowInvocationActionsResponse workflowInvocationActions */
                    workflowInvocationActions?: (google.cloud.dataform.v1alpha2.IWorkflowInvocationAction[]|null);

                    /** QueryWorkflowInvocationActionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a QueryWorkflowInvocationActionsResponse. */
                class QueryWorkflowInvocationActionsResponse implements IQueryWorkflowInvocationActionsResponse {

                    /**
                     * Constructs a new QueryWorkflowInvocationActionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataform.v1alpha2.IQueryWorkflowInvocationActionsResponse);

                    /** QueryWorkflowInvocationActionsResponse workflowInvocationActions. */
                    public workflowInvocationActions: google.cloud.dataform.v1alpha2.IWorkflowInvocationAction[];

                    /** QueryWorkflowInvocationActionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new QueryWorkflowInvocationActionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryWorkflowInvocationActionsResponse instance
                     */
                    public static create(properties?: google.cloud.dataform.v1alpha2.IQueryWorkflowInvocationActionsResponse): google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsResponse;

                    /**
                     * Encodes the specified QueryWorkflowInvocationActionsResponse message. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsResponse.verify|verify} messages.
                     * @param message QueryWorkflowInvocationActionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataform.v1alpha2.IQueryWorkflowInvocationActionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryWorkflowInvocationActionsResponse message, length delimited. Does not implicitly {@link google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsResponse.verify|verify} messages.
                     * @param message QueryWorkflowInvocationActionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataform.v1alpha2.IQueryWorkflowInvocationActionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryWorkflowInvocationActionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryWorkflowInvocationActionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsResponse;

                    /**
                     * Decodes a QueryWorkflowInvocationActionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryWorkflowInvocationActionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsResponse;

                    /**
                     * Verifies a QueryWorkflowInvocationActionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryWorkflowInvocationActionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryWorkflowInvocationActionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsResponse;

                    /**
                     * Creates a plain object from a QueryWorkflowInvocationActionsResponse message. Also converts values to other types if specified.
                     * @param message QueryWorkflowInvocationActionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataform.v1alpha2.QueryWorkflowInvocationActionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryWorkflowInvocationActionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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

    /** Namespace type. */
    namespace type {

        /** Properties of an Interval. */
        interface IInterval {

            /** Interval startTime */
            startTime?: (google.protobuf.ITimestamp|null);

            /** Interval endTime */
            endTime?: (google.protobuf.ITimestamp|null);
        }

        /** Represents an Interval. */
        class Interval implements IInterval {

            /**
             * Constructs a new Interval.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IInterval);

            /** Interval startTime. */
            public startTime?: (google.protobuf.ITimestamp|null);

            /** Interval endTime. */
            public endTime?: (google.protobuf.ITimestamp|null);

            /**
             * Creates a new Interval instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Interval instance
             */
            public static create(properties?: google.type.IInterval): google.type.Interval;

            /**
             * Encodes the specified Interval message. Does not implicitly {@link google.type.Interval.verify|verify} messages.
             * @param message Interval message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Interval message, length delimited. Does not implicitly {@link google.type.Interval.verify|verify} messages.
             * @param message Interval message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Interval message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Interval
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Interval;

            /**
             * Decodes an Interval message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Interval
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Interval;

            /**
             * Verifies an Interval message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Interval message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Interval
             */
            public static fromObject(object: { [k: string]: any }): google.type.Interval;

            /**
             * Creates a plain object from an Interval message. Also converts values to other types if specified.
             * @param message Interval
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Interval, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Interval to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
