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

        /** Namespace clouddms. */
        namespace clouddms {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a DataMigrationService */
                class DataMigrationService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DataMigrationService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DataMigrationService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DataMigrationService;

                    /**
                     * Calls ListMigrationJobs.
                     * @param request ListMigrationJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListMigrationJobsResponse
                     */
                    public listMigrationJobs(request: google.cloud.clouddms.v1.IListMigrationJobsRequest, callback: google.cloud.clouddms.v1.DataMigrationService.ListMigrationJobsCallback): void;

                    /**
                     * Calls ListMigrationJobs.
                     * @param request ListMigrationJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listMigrationJobs(request: google.cloud.clouddms.v1.IListMigrationJobsRequest): Promise<google.cloud.clouddms.v1.ListMigrationJobsResponse>;

                    /**
                     * Calls GetMigrationJob.
                     * @param request GetMigrationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and MigrationJob
                     */
                    public getMigrationJob(request: google.cloud.clouddms.v1.IGetMigrationJobRequest, callback: google.cloud.clouddms.v1.DataMigrationService.GetMigrationJobCallback): void;

                    /**
                     * Calls GetMigrationJob.
                     * @param request GetMigrationJobRequest message or plain object
                     * @returns Promise
                     */
                    public getMigrationJob(request: google.cloud.clouddms.v1.IGetMigrationJobRequest): Promise<google.cloud.clouddms.v1.MigrationJob>;

                    /**
                     * Calls CreateMigrationJob.
                     * @param request CreateMigrationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createMigrationJob(request: google.cloud.clouddms.v1.ICreateMigrationJobRequest, callback: google.cloud.clouddms.v1.DataMigrationService.CreateMigrationJobCallback): void;

                    /**
                     * Calls CreateMigrationJob.
                     * @param request CreateMigrationJobRequest message or plain object
                     * @returns Promise
                     */
                    public createMigrationJob(request: google.cloud.clouddms.v1.ICreateMigrationJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateMigrationJob.
                     * @param request UpdateMigrationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateMigrationJob(request: google.cloud.clouddms.v1.IUpdateMigrationJobRequest, callback: google.cloud.clouddms.v1.DataMigrationService.UpdateMigrationJobCallback): void;

                    /**
                     * Calls UpdateMigrationJob.
                     * @param request UpdateMigrationJobRequest message or plain object
                     * @returns Promise
                     */
                    public updateMigrationJob(request: google.cloud.clouddms.v1.IUpdateMigrationJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteMigrationJob.
                     * @param request DeleteMigrationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteMigrationJob(request: google.cloud.clouddms.v1.IDeleteMigrationJobRequest, callback: google.cloud.clouddms.v1.DataMigrationService.DeleteMigrationJobCallback): void;

                    /**
                     * Calls DeleteMigrationJob.
                     * @param request DeleteMigrationJobRequest message or plain object
                     * @returns Promise
                     */
                    public deleteMigrationJob(request: google.cloud.clouddms.v1.IDeleteMigrationJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartMigrationJob.
                     * @param request StartMigrationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startMigrationJob(request: google.cloud.clouddms.v1.IStartMigrationJobRequest, callback: google.cloud.clouddms.v1.DataMigrationService.StartMigrationJobCallback): void;

                    /**
                     * Calls StartMigrationJob.
                     * @param request StartMigrationJobRequest message or plain object
                     * @returns Promise
                     */
                    public startMigrationJob(request: google.cloud.clouddms.v1.IStartMigrationJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StopMigrationJob.
                     * @param request StopMigrationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopMigrationJob(request: google.cloud.clouddms.v1.IStopMigrationJobRequest, callback: google.cloud.clouddms.v1.DataMigrationService.StopMigrationJobCallback): void;

                    /**
                     * Calls StopMigrationJob.
                     * @param request StopMigrationJobRequest message or plain object
                     * @returns Promise
                     */
                    public stopMigrationJob(request: google.cloud.clouddms.v1.IStopMigrationJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ResumeMigrationJob.
                     * @param request ResumeMigrationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public resumeMigrationJob(request: google.cloud.clouddms.v1.IResumeMigrationJobRequest, callback: google.cloud.clouddms.v1.DataMigrationService.ResumeMigrationJobCallback): void;

                    /**
                     * Calls ResumeMigrationJob.
                     * @param request ResumeMigrationJobRequest message or plain object
                     * @returns Promise
                     */
                    public resumeMigrationJob(request: google.cloud.clouddms.v1.IResumeMigrationJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls PromoteMigrationJob.
                     * @param request PromoteMigrationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public promoteMigrationJob(request: google.cloud.clouddms.v1.IPromoteMigrationJobRequest, callback: google.cloud.clouddms.v1.DataMigrationService.PromoteMigrationJobCallback): void;

                    /**
                     * Calls PromoteMigrationJob.
                     * @param request PromoteMigrationJobRequest message or plain object
                     * @returns Promise
                     */
                    public promoteMigrationJob(request: google.cloud.clouddms.v1.IPromoteMigrationJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls VerifyMigrationJob.
                     * @param request VerifyMigrationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public verifyMigrationJob(request: google.cloud.clouddms.v1.IVerifyMigrationJobRequest, callback: google.cloud.clouddms.v1.DataMigrationService.VerifyMigrationJobCallback): void;

                    /**
                     * Calls VerifyMigrationJob.
                     * @param request VerifyMigrationJobRequest message or plain object
                     * @returns Promise
                     */
                    public verifyMigrationJob(request: google.cloud.clouddms.v1.IVerifyMigrationJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RestartMigrationJob.
                     * @param request RestartMigrationJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restartMigrationJob(request: google.cloud.clouddms.v1.IRestartMigrationJobRequest, callback: google.cloud.clouddms.v1.DataMigrationService.RestartMigrationJobCallback): void;

                    /**
                     * Calls RestartMigrationJob.
                     * @param request RestartMigrationJobRequest message or plain object
                     * @returns Promise
                     */
                    public restartMigrationJob(request: google.cloud.clouddms.v1.IRestartMigrationJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GenerateSshScript.
                     * @param request GenerateSshScriptRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SshScript
                     */
                    public generateSshScript(request: google.cloud.clouddms.v1.IGenerateSshScriptRequest, callback: google.cloud.clouddms.v1.DataMigrationService.GenerateSshScriptCallback): void;

                    /**
                     * Calls GenerateSshScript.
                     * @param request GenerateSshScriptRequest message or plain object
                     * @returns Promise
                     */
                    public generateSshScript(request: google.cloud.clouddms.v1.IGenerateSshScriptRequest): Promise<google.cloud.clouddms.v1.SshScript>;

                    /**
                     * Calls ListConnectionProfiles.
                     * @param request ListConnectionProfilesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConnectionProfilesResponse
                     */
                    public listConnectionProfiles(request: google.cloud.clouddms.v1.IListConnectionProfilesRequest, callback: google.cloud.clouddms.v1.DataMigrationService.ListConnectionProfilesCallback): void;

                    /**
                     * Calls ListConnectionProfiles.
                     * @param request ListConnectionProfilesRequest message or plain object
                     * @returns Promise
                     */
                    public listConnectionProfiles(request: google.cloud.clouddms.v1.IListConnectionProfilesRequest): Promise<google.cloud.clouddms.v1.ListConnectionProfilesResponse>;

                    /**
                     * Calls GetConnectionProfile.
                     * @param request GetConnectionProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConnectionProfile
                     */
                    public getConnectionProfile(request: google.cloud.clouddms.v1.IGetConnectionProfileRequest, callback: google.cloud.clouddms.v1.DataMigrationService.GetConnectionProfileCallback): void;

                    /**
                     * Calls GetConnectionProfile.
                     * @param request GetConnectionProfileRequest message or plain object
                     * @returns Promise
                     */
                    public getConnectionProfile(request: google.cloud.clouddms.v1.IGetConnectionProfileRequest): Promise<google.cloud.clouddms.v1.ConnectionProfile>;

                    /**
                     * Calls CreateConnectionProfile.
                     * @param request CreateConnectionProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createConnectionProfile(request: google.cloud.clouddms.v1.ICreateConnectionProfileRequest, callback: google.cloud.clouddms.v1.DataMigrationService.CreateConnectionProfileCallback): void;

                    /**
                     * Calls CreateConnectionProfile.
                     * @param request CreateConnectionProfileRequest message or plain object
                     * @returns Promise
                     */
                    public createConnectionProfile(request: google.cloud.clouddms.v1.ICreateConnectionProfileRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateConnectionProfile.
                     * @param request UpdateConnectionProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateConnectionProfile(request: google.cloud.clouddms.v1.IUpdateConnectionProfileRequest, callback: google.cloud.clouddms.v1.DataMigrationService.UpdateConnectionProfileCallback): void;

                    /**
                     * Calls UpdateConnectionProfile.
                     * @param request UpdateConnectionProfileRequest message or plain object
                     * @returns Promise
                     */
                    public updateConnectionProfile(request: google.cloud.clouddms.v1.IUpdateConnectionProfileRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteConnectionProfile.
                     * @param request DeleteConnectionProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteConnectionProfile(request: google.cloud.clouddms.v1.IDeleteConnectionProfileRequest, callback: google.cloud.clouddms.v1.DataMigrationService.DeleteConnectionProfileCallback): void;

                    /**
                     * Calls DeleteConnectionProfile.
                     * @param request DeleteConnectionProfileRequest message or plain object
                     * @returns Promise
                     */
                    public deleteConnectionProfile(request: google.cloud.clouddms.v1.IDeleteConnectionProfileRequest): Promise<google.longrunning.Operation>;
                }

                namespace DataMigrationService {

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#listMigrationJobs}.
                     * @param error Error, if any
                     * @param [response] ListMigrationJobsResponse
                     */
                    type ListMigrationJobsCallback = (error: (Error|null), response?: google.cloud.clouddms.v1.ListMigrationJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#getMigrationJob}.
                     * @param error Error, if any
                     * @param [response] MigrationJob
                     */
                    type GetMigrationJobCallback = (error: (Error|null), response?: google.cloud.clouddms.v1.MigrationJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#createMigrationJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateMigrationJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#updateMigrationJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateMigrationJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#deleteMigrationJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteMigrationJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#startMigrationJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartMigrationJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#stopMigrationJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopMigrationJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#resumeMigrationJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ResumeMigrationJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#promoteMigrationJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type PromoteMigrationJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#verifyMigrationJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type VerifyMigrationJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#restartMigrationJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestartMigrationJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#generateSshScript}.
                     * @param error Error, if any
                     * @param [response] SshScript
                     */
                    type GenerateSshScriptCallback = (error: (Error|null), response?: google.cloud.clouddms.v1.SshScript) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#listConnectionProfiles}.
                     * @param error Error, if any
                     * @param [response] ListConnectionProfilesResponse
                     */
                    type ListConnectionProfilesCallback = (error: (Error|null), response?: google.cloud.clouddms.v1.ListConnectionProfilesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#getConnectionProfile}.
                     * @param error Error, if any
                     * @param [response] ConnectionProfile
                     */
                    type GetConnectionProfileCallback = (error: (Error|null), response?: google.cloud.clouddms.v1.ConnectionProfile) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#createConnectionProfile}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateConnectionProfileCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#updateConnectionProfile}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateConnectionProfileCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.clouddms.v1.DataMigrationService#deleteConnectionProfile}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteConnectionProfileCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ListMigrationJobsRequest. */
                interface IListMigrationJobsRequest {

                    /** ListMigrationJobsRequest parent */
                    parent?: (string|null);

                    /** ListMigrationJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListMigrationJobsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListMigrationJobsRequest filter */
                    filter?: (string|null);

                    /** ListMigrationJobsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListMigrationJobsRequest. */
                class ListMigrationJobsRequest implements IListMigrationJobsRequest {

                    /**
                     * Constructs a new ListMigrationJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IListMigrationJobsRequest);

                    /** ListMigrationJobsRequest parent. */
                    public parent: string;

                    /** ListMigrationJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListMigrationJobsRequest pageToken. */
                    public pageToken: string;

                    /** ListMigrationJobsRequest filter. */
                    public filter: string;

                    /** ListMigrationJobsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListMigrationJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMigrationJobsRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IListMigrationJobsRequest): google.cloud.clouddms.v1.ListMigrationJobsRequest;

                    /**
                     * Encodes the specified ListMigrationJobsRequest message. Does not implicitly {@link google.cloud.clouddms.v1.ListMigrationJobsRequest.verify|verify} messages.
                     * @param message ListMigrationJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IListMigrationJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMigrationJobsRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.ListMigrationJobsRequest.verify|verify} messages.
                     * @param message ListMigrationJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IListMigrationJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMigrationJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMigrationJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.ListMigrationJobsRequest;

                    /**
                     * Decodes a ListMigrationJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMigrationJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.ListMigrationJobsRequest;

                    /**
                     * Verifies a ListMigrationJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMigrationJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMigrationJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.ListMigrationJobsRequest;

                    /**
                     * Creates a plain object from a ListMigrationJobsRequest message. Also converts values to other types if specified.
                     * @param message ListMigrationJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.ListMigrationJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMigrationJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListMigrationJobsResponse. */
                interface IListMigrationJobsResponse {

                    /** ListMigrationJobsResponse migrationJobs */
                    migrationJobs?: (google.cloud.clouddms.v1.IMigrationJob[]|null);

                    /** ListMigrationJobsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListMigrationJobsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListMigrationJobsResponse. */
                class ListMigrationJobsResponse implements IListMigrationJobsResponse {

                    /**
                     * Constructs a new ListMigrationJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IListMigrationJobsResponse);

                    /** ListMigrationJobsResponse migrationJobs. */
                    public migrationJobs: google.cloud.clouddms.v1.IMigrationJob[];

                    /** ListMigrationJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListMigrationJobsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListMigrationJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMigrationJobsResponse instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IListMigrationJobsResponse): google.cloud.clouddms.v1.ListMigrationJobsResponse;

                    /**
                     * Encodes the specified ListMigrationJobsResponse message. Does not implicitly {@link google.cloud.clouddms.v1.ListMigrationJobsResponse.verify|verify} messages.
                     * @param message ListMigrationJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IListMigrationJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMigrationJobsResponse message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.ListMigrationJobsResponse.verify|verify} messages.
                     * @param message ListMigrationJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IListMigrationJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMigrationJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMigrationJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.ListMigrationJobsResponse;

                    /**
                     * Decodes a ListMigrationJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMigrationJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.ListMigrationJobsResponse;

                    /**
                     * Verifies a ListMigrationJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMigrationJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMigrationJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.ListMigrationJobsResponse;

                    /**
                     * Creates a plain object from a ListMigrationJobsResponse message. Also converts values to other types if specified.
                     * @param message ListMigrationJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.ListMigrationJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMigrationJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMigrationJobRequest. */
                interface IGetMigrationJobRequest {

                    /** GetMigrationJobRequest name */
                    name?: (string|null);
                }

                /** Represents a GetMigrationJobRequest. */
                class GetMigrationJobRequest implements IGetMigrationJobRequest {

                    /**
                     * Constructs a new GetMigrationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IGetMigrationJobRequest);

                    /** GetMigrationJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetMigrationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMigrationJobRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IGetMigrationJobRequest): google.cloud.clouddms.v1.GetMigrationJobRequest;

                    /**
                     * Encodes the specified GetMigrationJobRequest message. Does not implicitly {@link google.cloud.clouddms.v1.GetMigrationJobRequest.verify|verify} messages.
                     * @param message GetMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IGetMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMigrationJobRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.GetMigrationJobRequest.verify|verify} messages.
                     * @param message GetMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IGetMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMigrationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.GetMigrationJobRequest;

                    /**
                     * Decodes a GetMigrationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.GetMigrationJobRequest;

                    /**
                     * Verifies a GetMigrationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMigrationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMigrationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.GetMigrationJobRequest;

                    /**
                     * Creates a plain object from a GetMigrationJobRequest message. Also converts values to other types if specified.
                     * @param message GetMigrationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.GetMigrationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMigrationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateMigrationJobRequest. */
                interface ICreateMigrationJobRequest {

                    /** CreateMigrationJobRequest parent */
                    parent?: (string|null);

                    /** CreateMigrationJobRequest migrationJobId */
                    migrationJobId?: (string|null);

                    /** CreateMigrationJobRequest migrationJob */
                    migrationJob?: (google.cloud.clouddms.v1.IMigrationJob|null);

                    /** CreateMigrationJobRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateMigrationJobRequest. */
                class CreateMigrationJobRequest implements ICreateMigrationJobRequest {

                    /**
                     * Constructs a new CreateMigrationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.ICreateMigrationJobRequest);

                    /** CreateMigrationJobRequest parent. */
                    public parent: string;

                    /** CreateMigrationJobRequest migrationJobId. */
                    public migrationJobId: string;

                    /** CreateMigrationJobRequest migrationJob. */
                    public migrationJob?: (google.cloud.clouddms.v1.IMigrationJob|null);

                    /** CreateMigrationJobRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateMigrationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateMigrationJobRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.ICreateMigrationJobRequest): google.cloud.clouddms.v1.CreateMigrationJobRequest;

                    /**
                     * Encodes the specified CreateMigrationJobRequest message. Does not implicitly {@link google.cloud.clouddms.v1.CreateMigrationJobRequest.verify|verify} messages.
                     * @param message CreateMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.ICreateMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateMigrationJobRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.CreateMigrationJobRequest.verify|verify} messages.
                     * @param message CreateMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.ICreateMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateMigrationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.CreateMigrationJobRequest;

                    /**
                     * Decodes a CreateMigrationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.CreateMigrationJobRequest;

                    /**
                     * Verifies a CreateMigrationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateMigrationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateMigrationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.CreateMigrationJobRequest;

                    /**
                     * Creates a plain object from a CreateMigrationJobRequest message. Also converts values to other types if specified.
                     * @param message CreateMigrationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.CreateMigrationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateMigrationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateMigrationJobRequest. */
                interface IUpdateMigrationJobRequest {

                    /** UpdateMigrationJobRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMigrationJobRequest migrationJob */
                    migrationJob?: (google.cloud.clouddms.v1.IMigrationJob|null);

                    /** UpdateMigrationJobRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateMigrationJobRequest. */
                class UpdateMigrationJobRequest implements IUpdateMigrationJobRequest {

                    /**
                     * Constructs a new UpdateMigrationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IUpdateMigrationJobRequest);

                    /** UpdateMigrationJobRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMigrationJobRequest migrationJob. */
                    public migrationJob?: (google.cloud.clouddms.v1.IMigrationJob|null);

                    /** UpdateMigrationJobRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateMigrationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateMigrationJobRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IUpdateMigrationJobRequest): google.cloud.clouddms.v1.UpdateMigrationJobRequest;

                    /**
                     * Encodes the specified UpdateMigrationJobRequest message. Does not implicitly {@link google.cloud.clouddms.v1.UpdateMigrationJobRequest.verify|verify} messages.
                     * @param message UpdateMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IUpdateMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateMigrationJobRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.UpdateMigrationJobRequest.verify|verify} messages.
                     * @param message UpdateMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IUpdateMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateMigrationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.UpdateMigrationJobRequest;

                    /**
                     * Decodes an UpdateMigrationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.UpdateMigrationJobRequest;

                    /**
                     * Verifies an UpdateMigrationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateMigrationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateMigrationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.UpdateMigrationJobRequest;

                    /**
                     * Creates a plain object from an UpdateMigrationJobRequest message. Also converts values to other types if specified.
                     * @param message UpdateMigrationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.UpdateMigrationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateMigrationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteMigrationJobRequest. */
                interface IDeleteMigrationJobRequest {

                    /** DeleteMigrationJobRequest name */
                    name?: (string|null);

                    /** DeleteMigrationJobRequest requestId */
                    requestId?: (string|null);

                    /** DeleteMigrationJobRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteMigrationJobRequest. */
                class DeleteMigrationJobRequest implements IDeleteMigrationJobRequest {

                    /**
                     * Constructs a new DeleteMigrationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IDeleteMigrationJobRequest);

                    /** DeleteMigrationJobRequest name. */
                    public name: string;

                    /** DeleteMigrationJobRequest requestId. */
                    public requestId: string;

                    /** DeleteMigrationJobRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteMigrationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMigrationJobRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IDeleteMigrationJobRequest): google.cloud.clouddms.v1.DeleteMigrationJobRequest;

                    /**
                     * Encodes the specified DeleteMigrationJobRequest message. Does not implicitly {@link google.cloud.clouddms.v1.DeleteMigrationJobRequest.verify|verify} messages.
                     * @param message DeleteMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IDeleteMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMigrationJobRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.DeleteMigrationJobRequest.verify|verify} messages.
                     * @param message DeleteMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IDeleteMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMigrationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.DeleteMigrationJobRequest;

                    /**
                     * Decodes a DeleteMigrationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.DeleteMigrationJobRequest;

                    /**
                     * Verifies a DeleteMigrationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMigrationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMigrationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.DeleteMigrationJobRequest;

                    /**
                     * Creates a plain object from a DeleteMigrationJobRequest message. Also converts values to other types if specified.
                     * @param message DeleteMigrationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.DeleteMigrationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMigrationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StartMigrationJobRequest. */
                interface IStartMigrationJobRequest {

                    /** StartMigrationJobRequest name */
                    name?: (string|null);
                }

                /** Represents a StartMigrationJobRequest. */
                class StartMigrationJobRequest implements IStartMigrationJobRequest {

                    /**
                     * Constructs a new StartMigrationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IStartMigrationJobRequest);

                    /** StartMigrationJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new StartMigrationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartMigrationJobRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IStartMigrationJobRequest): google.cloud.clouddms.v1.StartMigrationJobRequest;

                    /**
                     * Encodes the specified StartMigrationJobRequest message. Does not implicitly {@link google.cloud.clouddms.v1.StartMigrationJobRequest.verify|verify} messages.
                     * @param message StartMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IStartMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartMigrationJobRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.StartMigrationJobRequest.verify|verify} messages.
                     * @param message StartMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IStartMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartMigrationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.StartMigrationJobRequest;

                    /**
                     * Decodes a StartMigrationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.StartMigrationJobRequest;

                    /**
                     * Verifies a StartMigrationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartMigrationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartMigrationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.StartMigrationJobRequest;

                    /**
                     * Creates a plain object from a StartMigrationJobRequest message. Also converts values to other types if specified.
                     * @param message StartMigrationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.StartMigrationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartMigrationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StopMigrationJobRequest. */
                interface IStopMigrationJobRequest {

                    /** StopMigrationJobRequest name */
                    name?: (string|null);
                }

                /** Represents a StopMigrationJobRequest. */
                class StopMigrationJobRequest implements IStopMigrationJobRequest {

                    /**
                     * Constructs a new StopMigrationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IStopMigrationJobRequest);

                    /** StopMigrationJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new StopMigrationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopMigrationJobRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IStopMigrationJobRequest): google.cloud.clouddms.v1.StopMigrationJobRequest;

                    /**
                     * Encodes the specified StopMigrationJobRequest message. Does not implicitly {@link google.cloud.clouddms.v1.StopMigrationJobRequest.verify|verify} messages.
                     * @param message StopMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IStopMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopMigrationJobRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.StopMigrationJobRequest.verify|verify} messages.
                     * @param message StopMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IStopMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopMigrationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.StopMigrationJobRequest;

                    /**
                     * Decodes a StopMigrationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.StopMigrationJobRequest;

                    /**
                     * Verifies a StopMigrationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopMigrationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopMigrationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.StopMigrationJobRequest;

                    /**
                     * Creates a plain object from a StopMigrationJobRequest message. Also converts values to other types if specified.
                     * @param message StopMigrationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.StopMigrationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopMigrationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResumeMigrationJobRequest. */
                interface IResumeMigrationJobRequest {

                    /** ResumeMigrationJobRequest name */
                    name?: (string|null);
                }

                /** Represents a ResumeMigrationJobRequest. */
                class ResumeMigrationJobRequest implements IResumeMigrationJobRequest {

                    /**
                     * Constructs a new ResumeMigrationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IResumeMigrationJobRequest);

                    /** ResumeMigrationJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResumeMigrationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeMigrationJobRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IResumeMigrationJobRequest): google.cloud.clouddms.v1.ResumeMigrationJobRequest;

                    /**
                     * Encodes the specified ResumeMigrationJobRequest message. Does not implicitly {@link google.cloud.clouddms.v1.ResumeMigrationJobRequest.verify|verify} messages.
                     * @param message ResumeMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IResumeMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeMigrationJobRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.ResumeMigrationJobRequest.verify|verify} messages.
                     * @param message ResumeMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IResumeMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeMigrationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.ResumeMigrationJobRequest;

                    /**
                     * Decodes a ResumeMigrationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.ResumeMigrationJobRequest;

                    /**
                     * Verifies a ResumeMigrationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeMigrationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeMigrationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.ResumeMigrationJobRequest;

                    /**
                     * Creates a plain object from a ResumeMigrationJobRequest message. Also converts values to other types if specified.
                     * @param message ResumeMigrationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.ResumeMigrationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeMigrationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PromoteMigrationJobRequest. */
                interface IPromoteMigrationJobRequest {

                    /** PromoteMigrationJobRequest name */
                    name?: (string|null);
                }

                /** Represents a PromoteMigrationJobRequest. */
                class PromoteMigrationJobRequest implements IPromoteMigrationJobRequest {

                    /**
                     * Constructs a new PromoteMigrationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IPromoteMigrationJobRequest);

                    /** PromoteMigrationJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new PromoteMigrationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PromoteMigrationJobRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IPromoteMigrationJobRequest): google.cloud.clouddms.v1.PromoteMigrationJobRequest;

                    /**
                     * Encodes the specified PromoteMigrationJobRequest message. Does not implicitly {@link google.cloud.clouddms.v1.PromoteMigrationJobRequest.verify|verify} messages.
                     * @param message PromoteMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IPromoteMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PromoteMigrationJobRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.PromoteMigrationJobRequest.verify|verify} messages.
                     * @param message PromoteMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IPromoteMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PromoteMigrationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PromoteMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.PromoteMigrationJobRequest;

                    /**
                     * Decodes a PromoteMigrationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PromoteMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.PromoteMigrationJobRequest;

                    /**
                     * Verifies a PromoteMigrationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PromoteMigrationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PromoteMigrationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.PromoteMigrationJobRequest;

                    /**
                     * Creates a plain object from a PromoteMigrationJobRequest message. Also converts values to other types if specified.
                     * @param message PromoteMigrationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.PromoteMigrationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PromoteMigrationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VerifyMigrationJobRequest. */
                interface IVerifyMigrationJobRequest {

                    /** VerifyMigrationJobRequest name */
                    name?: (string|null);
                }

                /** Represents a VerifyMigrationJobRequest. */
                class VerifyMigrationJobRequest implements IVerifyMigrationJobRequest {

                    /**
                     * Constructs a new VerifyMigrationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IVerifyMigrationJobRequest);

                    /** VerifyMigrationJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new VerifyMigrationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VerifyMigrationJobRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IVerifyMigrationJobRequest): google.cloud.clouddms.v1.VerifyMigrationJobRequest;

                    /**
                     * Encodes the specified VerifyMigrationJobRequest message. Does not implicitly {@link google.cloud.clouddms.v1.VerifyMigrationJobRequest.verify|verify} messages.
                     * @param message VerifyMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IVerifyMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VerifyMigrationJobRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.VerifyMigrationJobRequest.verify|verify} messages.
                     * @param message VerifyMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IVerifyMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VerifyMigrationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VerifyMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.VerifyMigrationJobRequest;

                    /**
                     * Decodes a VerifyMigrationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VerifyMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.VerifyMigrationJobRequest;

                    /**
                     * Verifies a VerifyMigrationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VerifyMigrationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VerifyMigrationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.VerifyMigrationJobRequest;

                    /**
                     * Creates a plain object from a VerifyMigrationJobRequest message. Also converts values to other types if specified.
                     * @param message VerifyMigrationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.VerifyMigrationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VerifyMigrationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RestartMigrationJobRequest. */
                interface IRestartMigrationJobRequest {

                    /** RestartMigrationJobRequest name */
                    name?: (string|null);
                }

                /** Represents a RestartMigrationJobRequest. */
                class RestartMigrationJobRequest implements IRestartMigrationJobRequest {

                    /**
                     * Constructs a new RestartMigrationJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IRestartMigrationJobRequest);

                    /** RestartMigrationJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new RestartMigrationJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestartMigrationJobRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IRestartMigrationJobRequest): google.cloud.clouddms.v1.RestartMigrationJobRequest;

                    /**
                     * Encodes the specified RestartMigrationJobRequest message. Does not implicitly {@link google.cloud.clouddms.v1.RestartMigrationJobRequest.verify|verify} messages.
                     * @param message RestartMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IRestartMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestartMigrationJobRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.RestartMigrationJobRequest.verify|verify} messages.
                     * @param message RestartMigrationJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IRestartMigrationJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestartMigrationJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestartMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.RestartMigrationJobRequest;

                    /**
                     * Decodes a RestartMigrationJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestartMigrationJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.RestartMigrationJobRequest;

                    /**
                     * Verifies a RestartMigrationJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestartMigrationJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestartMigrationJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.RestartMigrationJobRequest;

                    /**
                     * Creates a plain object from a RestartMigrationJobRequest message. Also converts values to other types if specified.
                     * @param message RestartMigrationJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.RestartMigrationJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestartMigrationJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateSshScriptRequest. */
                interface IGenerateSshScriptRequest {

                    /** GenerateSshScriptRequest migrationJob */
                    migrationJob?: (string|null);

                    /** GenerateSshScriptRequest vm */
                    vm?: (string|null);

                    /** GenerateSshScriptRequest vmCreationConfig */
                    vmCreationConfig?: (google.cloud.clouddms.v1.IVmCreationConfig|null);

                    /** GenerateSshScriptRequest vmSelectionConfig */
                    vmSelectionConfig?: (google.cloud.clouddms.v1.IVmSelectionConfig|null);

                    /** GenerateSshScriptRequest vmPort */
                    vmPort?: (number|null);
                }

                /** Represents a GenerateSshScriptRequest. */
                class GenerateSshScriptRequest implements IGenerateSshScriptRequest {

                    /**
                     * Constructs a new GenerateSshScriptRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IGenerateSshScriptRequest);

                    /** GenerateSshScriptRequest migrationJob. */
                    public migrationJob: string;

                    /** GenerateSshScriptRequest vm. */
                    public vm: string;

                    /** GenerateSshScriptRequest vmCreationConfig. */
                    public vmCreationConfig?: (google.cloud.clouddms.v1.IVmCreationConfig|null);

                    /** GenerateSshScriptRequest vmSelectionConfig. */
                    public vmSelectionConfig?: (google.cloud.clouddms.v1.IVmSelectionConfig|null);

                    /** GenerateSshScriptRequest vmPort. */
                    public vmPort: number;

                    /** GenerateSshScriptRequest vmConfig. */
                    public vmConfig?: ("vmCreationConfig"|"vmSelectionConfig");

                    /**
                     * Creates a new GenerateSshScriptRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateSshScriptRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IGenerateSshScriptRequest): google.cloud.clouddms.v1.GenerateSshScriptRequest;

                    /**
                     * Encodes the specified GenerateSshScriptRequest message. Does not implicitly {@link google.cloud.clouddms.v1.GenerateSshScriptRequest.verify|verify} messages.
                     * @param message GenerateSshScriptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IGenerateSshScriptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateSshScriptRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.GenerateSshScriptRequest.verify|verify} messages.
                     * @param message GenerateSshScriptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IGenerateSshScriptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateSshScriptRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateSshScriptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.GenerateSshScriptRequest;

                    /**
                     * Decodes a GenerateSshScriptRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateSshScriptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.GenerateSshScriptRequest;

                    /**
                     * Verifies a GenerateSshScriptRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateSshScriptRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateSshScriptRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.GenerateSshScriptRequest;

                    /**
                     * Creates a plain object from a GenerateSshScriptRequest message. Also converts values to other types if specified.
                     * @param message GenerateSshScriptRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.GenerateSshScriptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateSshScriptRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VmCreationConfig. */
                interface IVmCreationConfig {

                    /** VmCreationConfig vmMachineType */
                    vmMachineType?: (string|null);

                    /** VmCreationConfig vmZone */
                    vmZone?: (string|null);

                    /** VmCreationConfig subnet */
                    subnet?: (string|null);
                }

                /** Represents a VmCreationConfig. */
                class VmCreationConfig implements IVmCreationConfig {

                    /**
                     * Constructs a new VmCreationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IVmCreationConfig);

                    /** VmCreationConfig vmMachineType. */
                    public vmMachineType: string;

                    /** VmCreationConfig vmZone. */
                    public vmZone: string;

                    /** VmCreationConfig subnet. */
                    public subnet: string;

                    /**
                     * Creates a new VmCreationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VmCreationConfig instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IVmCreationConfig): google.cloud.clouddms.v1.VmCreationConfig;

                    /**
                     * Encodes the specified VmCreationConfig message. Does not implicitly {@link google.cloud.clouddms.v1.VmCreationConfig.verify|verify} messages.
                     * @param message VmCreationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IVmCreationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VmCreationConfig message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.VmCreationConfig.verify|verify} messages.
                     * @param message VmCreationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IVmCreationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VmCreationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VmCreationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.VmCreationConfig;

                    /**
                     * Decodes a VmCreationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VmCreationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.VmCreationConfig;

                    /**
                     * Verifies a VmCreationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VmCreationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VmCreationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.VmCreationConfig;

                    /**
                     * Creates a plain object from a VmCreationConfig message. Also converts values to other types if specified.
                     * @param message VmCreationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.VmCreationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VmCreationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VmSelectionConfig. */
                interface IVmSelectionConfig {

                    /** VmSelectionConfig vmZone */
                    vmZone?: (string|null);
                }

                /** Represents a VmSelectionConfig. */
                class VmSelectionConfig implements IVmSelectionConfig {

                    /**
                     * Constructs a new VmSelectionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IVmSelectionConfig);

                    /** VmSelectionConfig vmZone. */
                    public vmZone: string;

                    /**
                     * Creates a new VmSelectionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VmSelectionConfig instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IVmSelectionConfig): google.cloud.clouddms.v1.VmSelectionConfig;

                    /**
                     * Encodes the specified VmSelectionConfig message. Does not implicitly {@link google.cloud.clouddms.v1.VmSelectionConfig.verify|verify} messages.
                     * @param message VmSelectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IVmSelectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VmSelectionConfig message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.VmSelectionConfig.verify|verify} messages.
                     * @param message VmSelectionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IVmSelectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VmSelectionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VmSelectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.VmSelectionConfig;

                    /**
                     * Decodes a VmSelectionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VmSelectionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.VmSelectionConfig;

                    /**
                     * Verifies a VmSelectionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VmSelectionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VmSelectionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.VmSelectionConfig;

                    /**
                     * Creates a plain object from a VmSelectionConfig message. Also converts values to other types if specified.
                     * @param message VmSelectionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.VmSelectionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VmSelectionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SshScript. */
                interface ISshScript {

                    /** SshScript script */
                    script?: (string|null);
                }

                /** Represents a SshScript. */
                class SshScript implements ISshScript {

                    /**
                     * Constructs a new SshScript.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.ISshScript);

                    /** SshScript script. */
                    public script: string;

                    /**
                     * Creates a new SshScript instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SshScript instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.ISshScript): google.cloud.clouddms.v1.SshScript;

                    /**
                     * Encodes the specified SshScript message. Does not implicitly {@link google.cloud.clouddms.v1.SshScript.verify|verify} messages.
                     * @param message SshScript message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.ISshScript, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SshScript message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.SshScript.verify|verify} messages.
                     * @param message SshScript message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.ISshScript, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SshScript message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SshScript
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.SshScript;

                    /**
                     * Decodes a SshScript message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SshScript
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.SshScript;

                    /**
                     * Verifies a SshScript message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SshScript message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SshScript
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.SshScript;

                    /**
                     * Creates a plain object from a SshScript message. Also converts values to other types if specified.
                     * @param message SshScript
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.SshScript, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SshScript to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListConnectionProfilesRequest. */
                interface IListConnectionProfilesRequest {

                    /** ListConnectionProfilesRequest parent */
                    parent?: (string|null);

                    /** ListConnectionProfilesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConnectionProfilesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListConnectionProfilesRequest filter */
                    filter?: (string|null);

                    /** ListConnectionProfilesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListConnectionProfilesRequest. */
                class ListConnectionProfilesRequest implements IListConnectionProfilesRequest {

                    /**
                     * Constructs a new ListConnectionProfilesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IListConnectionProfilesRequest);

                    /** ListConnectionProfilesRequest parent. */
                    public parent: string;

                    /** ListConnectionProfilesRequest pageSize. */
                    public pageSize: number;

                    /** ListConnectionProfilesRequest pageToken. */
                    public pageToken: string;

                    /** ListConnectionProfilesRequest filter. */
                    public filter: string;

                    /** ListConnectionProfilesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListConnectionProfilesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectionProfilesRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IListConnectionProfilesRequest): google.cloud.clouddms.v1.ListConnectionProfilesRequest;

                    /**
                     * Encodes the specified ListConnectionProfilesRequest message. Does not implicitly {@link google.cloud.clouddms.v1.ListConnectionProfilesRequest.verify|verify} messages.
                     * @param message ListConnectionProfilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IListConnectionProfilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectionProfilesRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.ListConnectionProfilesRequest.verify|verify} messages.
                     * @param message ListConnectionProfilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IListConnectionProfilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectionProfilesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectionProfilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.ListConnectionProfilesRequest;

                    /**
                     * Decodes a ListConnectionProfilesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectionProfilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.ListConnectionProfilesRequest;

                    /**
                     * Verifies a ListConnectionProfilesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectionProfilesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectionProfilesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.ListConnectionProfilesRequest;

                    /**
                     * Creates a plain object from a ListConnectionProfilesRequest message. Also converts values to other types if specified.
                     * @param message ListConnectionProfilesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.ListConnectionProfilesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectionProfilesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListConnectionProfilesResponse. */
                interface IListConnectionProfilesResponse {

                    /** ListConnectionProfilesResponse connectionProfiles */
                    connectionProfiles?: (google.cloud.clouddms.v1.IConnectionProfile[]|null);

                    /** ListConnectionProfilesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListConnectionProfilesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListConnectionProfilesResponse. */
                class ListConnectionProfilesResponse implements IListConnectionProfilesResponse {

                    /**
                     * Constructs a new ListConnectionProfilesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IListConnectionProfilesResponse);

                    /** ListConnectionProfilesResponse connectionProfiles. */
                    public connectionProfiles: google.cloud.clouddms.v1.IConnectionProfile[];

                    /** ListConnectionProfilesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListConnectionProfilesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListConnectionProfilesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectionProfilesResponse instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IListConnectionProfilesResponse): google.cloud.clouddms.v1.ListConnectionProfilesResponse;

                    /**
                     * Encodes the specified ListConnectionProfilesResponse message. Does not implicitly {@link google.cloud.clouddms.v1.ListConnectionProfilesResponse.verify|verify} messages.
                     * @param message ListConnectionProfilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IListConnectionProfilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectionProfilesResponse message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.ListConnectionProfilesResponse.verify|verify} messages.
                     * @param message ListConnectionProfilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IListConnectionProfilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectionProfilesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectionProfilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.ListConnectionProfilesResponse;

                    /**
                     * Decodes a ListConnectionProfilesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectionProfilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.ListConnectionProfilesResponse;

                    /**
                     * Verifies a ListConnectionProfilesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectionProfilesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectionProfilesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.ListConnectionProfilesResponse;

                    /**
                     * Creates a plain object from a ListConnectionProfilesResponse message. Also converts values to other types if specified.
                     * @param message ListConnectionProfilesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.ListConnectionProfilesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectionProfilesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetConnectionProfileRequest. */
                interface IGetConnectionProfileRequest {

                    /** GetConnectionProfileRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConnectionProfileRequest. */
                class GetConnectionProfileRequest implements IGetConnectionProfileRequest {

                    /**
                     * Constructs a new GetConnectionProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IGetConnectionProfileRequest);

                    /** GetConnectionProfileRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConnectionProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConnectionProfileRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IGetConnectionProfileRequest): google.cloud.clouddms.v1.GetConnectionProfileRequest;

                    /**
                     * Encodes the specified GetConnectionProfileRequest message. Does not implicitly {@link google.cloud.clouddms.v1.GetConnectionProfileRequest.verify|verify} messages.
                     * @param message GetConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IGetConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConnectionProfileRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.GetConnectionProfileRequest.verify|verify} messages.
                     * @param message GetConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IGetConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConnectionProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.GetConnectionProfileRequest;

                    /**
                     * Decodes a GetConnectionProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.GetConnectionProfileRequest;

                    /**
                     * Verifies a GetConnectionProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConnectionProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConnectionProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.GetConnectionProfileRequest;

                    /**
                     * Creates a plain object from a GetConnectionProfileRequest message. Also converts values to other types if specified.
                     * @param message GetConnectionProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.GetConnectionProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConnectionProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateConnectionProfileRequest. */
                interface ICreateConnectionProfileRequest {

                    /** CreateConnectionProfileRequest parent */
                    parent?: (string|null);

                    /** CreateConnectionProfileRequest connectionProfileId */
                    connectionProfileId?: (string|null);

                    /** CreateConnectionProfileRequest connectionProfile */
                    connectionProfile?: (google.cloud.clouddms.v1.IConnectionProfile|null);

                    /** CreateConnectionProfileRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateConnectionProfileRequest. */
                class CreateConnectionProfileRequest implements ICreateConnectionProfileRequest {

                    /**
                     * Constructs a new CreateConnectionProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.ICreateConnectionProfileRequest);

                    /** CreateConnectionProfileRequest parent. */
                    public parent: string;

                    /** CreateConnectionProfileRequest connectionProfileId. */
                    public connectionProfileId: string;

                    /** CreateConnectionProfileRequest connectionProfile. */
                    public connectionProfile?: (google.cloud.clouddms.v1.IConnectionProfile|null);

                    /** CreateConnectionProfileRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateConnectionProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateConnectionProfileRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.ICreateConnectionProfileRequest): google.cloud.clouddms.v1.CreateConnectionProfileRequest;

                    /**
                     * Encodes the specified CreateConnectionProfileRequest message. Does not implicitly {@link google.cloud.clouddms.v1.CreateConnectionProfileRequest.verify|verify} messages.
                     * @param message CreateConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.ICreateConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateConnectionProfileRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.CreateConnectionProfileRequest.verify|verify} messages.
                     * @param message CreateConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.ICreateConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateConnectionProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.CreateConnectionProfileRequest;

                    /**
                     * Decodes a CreateConnectionProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.CreateConnectionProfileRequest;

                    /**
                     * Verifies a CreateConnectionProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateConnectionProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateConnectionProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.CreateConnectionProfileRequest;

                    /**
                     * Creates a plain object from a CreateConnectionProfileRequest message. Also converts values to other types if specified.
                     * @param message CreateConnectionProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.CreateConnectionProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateConnectionProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateConnectionProfileRequest. */
                interface IUpdateConnectionProfileRequest {

                    /** UpdateConnectionProfileRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConnectionProfileRequest connectionProfile */
                    connectionProfile?: (google.cloud.clouddms.v1.IConnectionProfile|null);

                    /** UpdateConnectionProfileRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateConnectionProfileRequest. */
                class UpdateConnectionProfileRequest implements IUpdateConnectionProfileRequest {

                    /**
                     * Constructs a new UpdateConnectionProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IUpdateConnectionProfileRequest);

                    /** UpdateConnectionProfileRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConnectionProfileRequest connectionProfile. */
                    public connectionProfile?: (google.cloud.clouddms.v1.IConnectionProfile|null);

                    /** UpdateConnectionProfileRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateConnectionProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateConnectionProfileRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IUpdateConnectionProfileRequest): google.cloud.clouddms.v1.UpdateConnectionProfileRequest;

                    /**
                     * Encodes the specified UpdateConnectionProfileRequest message. Does not implicitly {@link google.cloud.clouddms.v1.UpdateConnectionProfileRequest.verify|verify} messages.
                     * @param message UpdateConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IUpdateConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateConnectionProfileRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.UpdateConnectionProfileRequest.verify|verify} messages.
                     * @param message UpdateConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IUpdateConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateConnectionProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.UpdateConnectionProfileRequest;

                    /**
                     * Decodes an UpdateConnectionProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.UpdateConnectionProfileRequest;

                    /**
                     * Verifies an UpdateConnectionProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateConnectionProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateConnectionProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.UpdateConnectionProfileRequest;

                    /**
                     * Creates a plain object from an UpdateConnectionProfileRequest message. Also converts values to other types if specified.
                     * @param message UpdateConnectionProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.UpdateConnectionProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateConnectionProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteConnectionProfileRequest. */
                interface IDeleteConnectionProfileRequest {

                    /** DeleteConnectionProfileRequest name */
                    name?: (string|null);

                    /** DeleteConnectionProfileRequest requestId */
                    requestId?: (string|null);

                    /** DeleteConnectionProfileRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteConnectionProfileRequest. */
                class DeleteConnectionProfileRequest implements IDeleteConnectionProfileRequest {

                    /**
                     * Constructs a new DeleteConnectionProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IDeleteConnectionProfileRequest);

                    /** DeleteConnectionProfileRequest name. */
                    public name: string;

                    /** DeleteConnectionProfileRequest requestId. */
                    public requestId: string;

                    /** DeleteConnectionProfileRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteConnectionProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteConnectionProfileRequest instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IDeleteConnectionProfileRequest): google.cloud.clouddms.v1.DeleteConnectionProfileRequest;

                    /**
                     * Encodes the specified DeleteConnectionProfileRequest message. Does not implicitly {@link google.cloud.clouddms.v1.DeleteConnectionProfileRequest.verify|verify} messages.
                     * @param message DeleteConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IDeleteConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteConnectionProfileRequest message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.DeleteConnectionProfileRequest.verify|verify} messages.
                     * @param message DeleteConnectionProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IDeleteConnectionProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteConnectionProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.DeleteConnectionProfileRequest;

                    /**
                     * Decodes a DeleteConnectionProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteConnectionProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.DeleteConnectionProfileRequest;

                    /**
                     * Verifies a DeleteConnectionProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteConnectionProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteConnectionProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.DeleteConnectionProfileRequest;

                    /**
                     * Creates a plain object from a DeleteConnectionProfileRequest message. Also converts values to other types if specified.
                     * @param message DeleteConnectionProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.DeleteConnectionProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteConnectionProfileRequest to JSON.
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
                    constructor(properties?: google.cloud.clouddms.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.clouddms.v1.IOperationMetadata): google.cloud.clouddms.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.clouddms.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SslConfig. */
                interface ISslConfig {

                    /** SslConfig type */
                    type?: (google.cloud.clouddms.v1.SslConfig.SslType|keyof typeof google.cloud.clouddms.v1.SslConfig.SslType|null);

                    /** SslConfig clientKey */
                    clientKey?: (string|null);

                    /** SslConfig clientCertificate */
                    clientCertificate?: (string|null);

                    /** SslConfig caCertificate */
                    caCertificate?: (string|null);
                }

                /** Represents a SslConfig. */
                class SslConfig implements ISslConfig {

                    /**
                     * Constructs a new SslConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.ISslConfig);

                    /** SslConfig type. */
                    public type: (google.cloud.clouddms.v1.SslConfig.SslType|keyof typeof google.cloud.clouddms.v1.SslConfig.SslType);

                    /** SslConfig clientKey. */
                    public clientKey: string;

                    /** SslConfig clientCertificate. */
                    public clientCertificate: string;

                    /** SslConfig caCertificate. */
                    public caCertificate: string;

                    /**
                     * Creates a new SslConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SslConfig instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.ISslConfig): google.cloud.clouddms.v1.SslConfig;

                    /**
                     * Encodes the specified SslConfig message. Does not implicitly {@link google.cloud.clouddms.v1.SslConfig.verify|verify} messages.
                     * @param message SslConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.ISslConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SslConfig message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.SslConfig.verify|verify} messages.
                     * @param message SslConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.ISslConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SslConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SslConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.SslConfig;

                    /**
                     * Decodes a SslConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SslConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.SslConfig;

                    /**
                     * Verifies a SslConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SslConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SslConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.SslConfig;

                    /**
                     * Creates a plain object from a SslConfig message. Also converts values to other types if specified.
                     * @param message SslConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.SslConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SslConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SslConfig {

                    /** SslType enum. */
                    enum SslType {
                        SSL_TYPE_UNSPECIFIED = 0,
                        SERVER_ONLY = 1,
                        SERVER_CLIENT = 2
                    }
                }

                /** Properties of a MySqlConnectionProfile. */
                interface IMySqlConnectionProfile {

                    /** MySqlConnectionProfile host */
                    host?: (string|null);

                    /** MySqlConnectionProfile port */
                    port?: (number|null);

                    /** MySqlConnectionProfile username */
                    username?: (string|null);

                    /** MySqlConnectionProfile password */
                    password?: (string|null);

                    /** MySqlConnectionProfile passwordSet */
                    passwordSet?: (boolean|null);

                    /** MySqlConnectionProfile ssl */
                    ssl?: (google.cloud.clouddms.v1.ISslConfig|null);

                    /** MySqlConnectionProfile cloudSqlId */
                    cloudSqlId?: (string|null);
                }

                /** Represents a MySqlConnectionProfile. */
                class MySqlConnectionProfile implements IMySqlConnectionProfile {

                    /**
                     * Constructs a new MySqlConnectionProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IMySqlConnectionProfile);

                    /** MySqlConnectionProfile host. */
                    public host: string;

                    /** MySqlConnectionProfile port. */
                    public port: number;

                    /** MySqlConnectionProfile username. */
                    public username: string;

                    /** MySqlConnectionProfile password. */
                    public password: string;

                    /** MySqlConnectionProfile passwordSet. */
                    public passwordSet: boolean;

                    /** MySqlConnectionProfile ssl. */
                    public ssl?: (google.cloud.clouddms.v1.ISslConfig|null);

                    /** MySqlConnectionProfile cloudSqlId. */
                    public cloudSqlId: string;

                    /**
                     * Creates a new MySqlConnectionProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MySqlConnectionProfile instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IMySqlConnectionProfile): google.cloud.clouddms.v1.MySqlConnectionProfile;

                    /**
                     * Encodes the specified MySqlConnectionProfile message. Does not implicitly {@link google.cloud.clouddms.v1.MySqlConnectionProfile.verify|verify} messages.
                     * @param message MySqlConnectionProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IMySqlConnectionProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MySqlConnectionProfile message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.MySqlConnectionProfile.verify|verify} messages.
                     * @param message MySqlConnectionProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IMySqlConnectionProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MySqlConnectionProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MySqlConnectionProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.MySqlConnectionProfile;

                    /**
                     * Decodes a MySqlConnectionProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MySqlConnectionProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.MySqlConnectionProfile;

                    /**
                     * Verifies a MySqlConnectionProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MySqlConnectionProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MySqlConnectionProfile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.MySqlConnectionProfile;

                    /**
                     * Creates a plain object from a MySqlConnectionProfile message. Also converts values to other types if specified.
                     * @param message MySqlConnectionProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.MySqlConnectionProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MySqlConnectionProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PostgreSqlConnectionProfile. */
                interface IPostgreSqlConnectionProfile {

                    /** PostgreSqlConnectionProfile host */
                    host?: (string|null);

                    /** PostgreSqlConnectionProfile port */
                    port?: (number|null);

                    /** PostgreSqlConnectionProfile username */
                    username?: (string|null);

                    /** PostgreSqlConnectionProfile password */
                    password?: (string|null);

                    /** PostgreSqlConnectionProfile passwordSet */
                    passwordSet?: (boolean|null);

                    /** PostgreSqlConnectionProfile ssl */
                    ssl?: (google.cloud.clouddms.v1.ISslConfig|null);

                    /** PostgreSqlConnectionProfile cloudSqlId */
                    cloudSqlId?: (string|null);
                }

                /** Represents a PostgreSqlConnectionProfile. */
                class PostgreSqlConnectionProfile implements IPostgreSqlConnectionProfile {

                    /**
                     * Constructs a new PostgreSqlConnectionProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IPostgreSqlConnectionProfile);

                    /** PostgreSqlConnectionProfile host. */
                    public host: string;

                    /** PostgreSqlConnectionProfile port. */
                    public port: number;

                    /** PostgreSqlConnectionProfile username. */
                    public username: string;

                    /** PostgreSqlConnectionProfile password. */
                    public password: string;

                    /** PostgreSqlConnectionProfile passwordSet. */
                    public passwordSet: boolean;

                    /** PostgreSqlConnectionProfile ssl. */
                    public ssl?: (google.cloud.clouddms.v1.ISslConfig|null);

                    /** PostgreSqlConnectionProfile cloudSqlId. */
                    public cloudSqlId: string;

                    /**
                     * Creates a new PostgreSqlConnectionProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PostgreSqlConnectionProfile instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IPostgreSqlConnectionProfile): google.cloud.clouddms.v1.PostgreSqlConnectionProfile;

                    /**
                     * Encodes the specified PostgreSqlConnectionProfile message. Does not implicitly {@link google.cloud.clouddms.v1.PostgreSqlConnectionProfile.verify|verify} messages.
                     * @param message PostgreSqlConnectionProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IPostgreSqlConnectionProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PostgreSqlConnectionProfile message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.PostgreSqlConnectionProfile.verify|verify} messages.
                     * @param message PostgreSqlConnectionProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IPostgreSqlConnectionProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PostgreSqlConnectionProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PostgreSqlConnectionProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.PostgreSqlConnectionProfile;

                    /**
                     * Decodes a PostgreSqlConnectionProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PostgreSqlConnectionProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.PostgreSqlConnectionProfile;

                    /**
                     * Verifies a PostgreSqlConnectionProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PostgreSqlConnectionProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PostgreSqlConnectionProfile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.PostgreSqlConnectionProfile;

                    /**
                     * Creates a plain object from a PostgreSqlConnectionProfile message. Also converts values to other types if specified.
                     * @param message PostgreSqlConnectionProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.PostgreSqlConnectionProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PostgreSqlConnectionProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CloudSqlConnectionProfile. */
                interface ICloudSqlConnectionProfile {

                    /** CloudSqlConnectionProfile cloudSqlId */
                    cloudSqlId?: (string|null);

                    /** CloudSqlConnectionProfile settings */
                    settings?: (google.cloud.clouddms.v1.ICloudSqlSettings|null);

                    /** CloudSqlConnectionProfile privateIp */
                    privateIp?: (string|null);

                    /** CloudSqlConnectionProfile publicIp */
                    publicIp?: (string|null);
                }

                /** Represents a CloudSqlConnectionProfile. */
                class CloudSqlConnectionProfile implements ICloudSqlConnectionProfile {

                    /**
                     * Constructs a new CloudSqlConnectionProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.ICloudSqlConnectionProfile);

                    /** CloudSqlConnectionProfile cloudSqlId. */
                    public cloudSqlId: string;

                    /** CloudSqlConnectionProfile settings. */
                    public settings?: (google.cloud.clouddms.v1.ICloudSqlSettings|null);

                    /** CloudSqlConnectionProfile privateIp. */
                    public privateIp: string;

                    /** CloudSqlConnectionProfile publicIp. */
                    public publicIp: string;

                    /**
                     * Creates a new CloudSqlConnectionProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudSqlConnectionProfile instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.ICloudSqlConnectionProfile): google.cloud.clouddms.v1.CloudSqlConnectionProfile;

                    /**
                     * Encodes the specified CloudSqlConnectionProfile message. Does not implicitly {@link google.cloud.clouddms.v1.CloudSqlConnectionProfile.verify|verify} messages.
                     * @param message CloudSqlConnectionProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.ICloudSqlConnectionProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudSqlConnectionProfile message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.CloudSqlConnectionProfile.verify|verify} messages.
                     * @param message CloudSqlConnectionProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.ICloudSqlConnectionProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudSqlConnectionProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudSqlConnectionProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.CloudSqlConnectionProfile;

                    /**
                     * Decodes a CloudSqlConnectionProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudSqlConnectionProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.CloudSqlConnectionProfile;

                    /**
                     * Verifies a CloudSqlConnectionProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudSqlConnectionProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudSqlConnectionProfile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.CloudSqlConnectionProfile;

                    /**
                     * Creates a plain object from a CloudSqlConnectionProfile message. Also converts values to other types if specified.
                     * @param message CloudSqlConnectionProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.CloudSqlConnectionProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudSqlConnectionProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlAclEntry. */
                interface ISqlAclEntry {

                    /** SqlAclEntry value */
                    value?: (string|null);

                    /** SqlAclEntry expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** SqlAclEntry ttl */
                    ttl?: (google.protobuf.IDuration|null);

                    /** SqlAclEntry label */
                    label?: (string|null);
                }

                /** Represents a SqlAclEntry. */
                class SqlAclEntry implements ISqlAclEntry {

                    /**
                     * Constructs a new SqlAclEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.ISqlAclEntry);

                    /** SqlAclEntry value. */
                    public value: string;

                    /** SqlAclEntry expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** SqlAclEntry ttl. */
                    public ttl?: (google.protobuf.IDuration|null);

                    /** SqlAclEntry label. */
                    public label: string;

                    /** SqlAclEntry expiration. */
                    public expiration?: ("expireTime"|"ttl");

                    /**
                     * Creates a new SqlAclEntry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlAclEntry instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.ISqlAclEntry): google.cloud.clouddms.v1.SqlAclEntry;

                    /**
                     * Encodes the specified SqlAclEntry message. Does not implicitly {@link google.cloud.clouddms.v1.SqlAclEntry.verify|verify} messages.
                     * @param message SqlAclEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.ISqlAclEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlAclEntry message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.SqlAclEntry.verify|verify} messages.
                     * @param message SqlAclEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.ISqlAclEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlAclEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlAclEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.SqlAclEntry;

                    /**
                     * Decodes a SqlAclEntry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlAclEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.SqlAclEntry;

                    /**
                     * Verifies a SqlAclEntry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlAclEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlAclEntry
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.SqlAclEntry;

                    /**
                     * Creates a plain object from a SqlAclEntry message. Also converts values to other types if specified.
                     * @param message SqlAclEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.SqlAclEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlAclEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SqlIpConfig. */
                interface ISqlIpConfig {

                    /** SqlIpConfig enableIpv4 */
                    enableIpv4?: (google.protobuf.IBoolValue|null);

                    /** SqlIpConfig privateNetwork */
                    privateNetwork?: (string|null);

                    /** SqlIpConfig requireSsl */
                    requireSsl?: (google.protobuf.IBoolValue|null);

                    /** SqlIpConfig authorizedNetworks */
                    authorizedNetworks?: (google.cloud.clouddms.v1.ISqlAclEntry[]|null);
                }

                /** Represents a SqlIpConfig. */
                class SqlIpConfig implements ISqlIpConfig {

                    /**
                     * Constructs a new SqlIpConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.ISqlIpConfig);

                    /** SqlIpConfig enableIpv4. */
                    public enableIpv4?: (google.protobuf.IBoolValue|null);

                    /** SqlIpConfig privateNetwork. */
                    public privateNetwork: string;

                    /** SqlIpConfig requireSsl. */
                    public requireSsl?: (google.protobuf.IBoolValue|null);

                    /** SqlIpConfig authorizedNetworks. */
                    public authorizedNetworks: google.cloud.clouddms.v1.ISqlAclEntry[];

                    /**
                     * Creates a new SqlIpConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SqlIpConfig instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.ISqlIpConfig): google.cloud.clouddms.v1.SqlIpConfig;

                    /**
                     * Encodes the specified SqlIpConfig message. Does not implicitly {@link google.cloud.clouddms.v1.SqlIpConfig.verify|verify} messages.
                     * @param message SqlIpConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.ISqlIpConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SqlIpConfig message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.SqlIpConfig.verify|verify} messages.
                     * @param message SqlIpConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.ISqlIpConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SqlIpConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SqlIpConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.SqlIpConfig;

                    /**
                     * Decodes a SqlIpConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SqlIpConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.SqlIpConfig;

                    /**
                     * Verifies a SqlIpConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SqlIpConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SqlIpConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.SqlIpConfig;

                    /**
                     * Creates a plain object from a SqlIpConfig message. Also converts values to other types if specified.
                     * @param message SqlIpConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.SqlIpConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SqlIpConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CloudSqlSettings. */
                interface ICloudSqlSettings {

                    /** CloudSqlSettings databaseVersion */
                    databaseVersion?: (google.cloud.clouddms.v1.CloudSqlSettings.SqlDatabaseVersion|keyof typeof google.cloud.clouddms.v1.CloudSqlSettings.SqlDatabaseVersion|null);

                    /** CloudSqlSettings userLabels */
                    userLabels?: ({ [k: string]: string }|null);

                    /** CloudSqlSettings tier */
                    tier?: (string|null);

                    /** CloudSqlSettings storageAutoResizeLimit */
                    storageAutoResizeLimit?: (google.protobuf.IInt64Value|null);

                    /** CloudSqlSettings activationPolicy */
                    activationPolicy?: (google.cloud.clouddms.v1.CloudSqlSettings.SqlActivationPolicy|keyof typeof google.cloud.clouddms.v1.CloudSqlSettings.SqlActivationPolicy|null);

                    /** CloudSqlSettings ipConfig */
                    ipConfig?: (google.cloud.clouddms.v1.ISqlIpConfig|null);

                    /** CloudSqlSettings autoStorageIncrease */
                    autoStorageIncrease?: (google.protobuf.IBoolValue|null);

                    /** CloudSqlSettings databaseFlags */
                    databaseFlags?: ({ [k: string]: string }|null);

                    /** CloudSqlSettings dataDiskType */
                    dataDiskType?: (google.cloud.clouddms.v1.CloudSqlSettings.SqlDataDiskType|keyof typeof google.cloud.clouddms.v1.CloudSqlSettings.SqlDataDiskType|null);

                    /** CloudSqlSettings dataDiskSizeGb */
                    dataDiskSizeGb?: (google.protobuf.IInt64Value|null);

                    /** CloudSqlSettings zone */
                    zone?: (string|null);

                    /** CloudSqlSettings sourceId */
                    sourceId?: (string|null);

                    /** CloudSqlSettings rootPassword */
                    rootPassword?: (string|null);

                    /** CloudSqlSettings rootPasswordSet */
                    rootPasswordSet?: (boolean|null);

                    /** CloudSqlSettings collation */
                    collation?: (string|null);
                }

                /** Represents a CloudSqlSettings. */
                class CloudSqlSettings implements ICloudSqlSettings {

                    /**
                     * Constructs a new CloudSqlSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.ICloudSqlSettings);

                    /** CloudSqlSettings databaseVersion. */
                    public databaseVersion: (google.cloud.clouddms.v1.CloudSqlSettings.SqlDatabaseVersion|keyof typeof google.cloud.clouddms.v1.CloudSqlSettings.SqlDatabaseVersion);

                    /** CloudSqlSettings userLabels. */
                    public userLabels: { [k: string]: string };

                    /** CloudSqlSettings tier. */
                    public tier: string;

                    /** CloudSqlSettings storageAutoResizeLimit. */
                    public storageAutoResizeLimit?: (google.protobuf.IInt64Value|null);

                    /** CloudSqlSettings activationPolicy. */
                    public activationPolicy: (google.cloud.clouddms.v1.CloudSqlSettings.SqlActivationPolicy|keyof typeof google.cloud.clouddms.v1.CloudSqlSettings.SqlActivationPolicy);

                    /** CloudSqlSettings ipConfig. */
                    public ipConfig?: (google.cloud.clouddms.v1.ISqlIpConfig|null);

                    /** CloudSqlSettings autoStorageIncrease. */
                    public autoStorageIncrease?: (google.protobuf.IBoolValue|null);

                    /** CloudSqlSettings databaseFlags. */
                    public databaseFlags: { [k: string]: string };

                    /** CloudSqlSettings dataDiskType. */
                    public dataDiskType: (google.cloud.clouddms.v1.CloudSqlSettings.SqlDataDiskType|keyof typeof google.cloud.clouddms.v1.CloudSqlSettings.SqlDataDiskType);

                    /** CloudSqlSettings dataDiskSizeGb. */
                    public dataDiskSizeGb?: (google.protobuf.IInt64Value|null);

                    /** CloudSqlSettings zone. */
                    public zone: string;

                    /** CloudSqlSettings sourceId. */
                    public sourceId: string;

                    /** CloudSqlSettings rootPassword. */
                    public rootPassword: string;

                    /** CloudSqlSettings rootPasswordSet. */
                    public rootPasswordSet: boolean;

                    /** CloudSqlSettings collation. */
                    public collation: string;

                    /**
                     * Creates a new CloudSqlSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudSqlSettings instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.ICloudSqlSettings): google.cloud.clouddms.v1.CloudSqlSettings;

                    /**
                     * Encodes the specified CloudSqlSettings message. Does not implicitly {@link google.cloud.clouddms.v1.CloudSqlSettings.verify|verify} messages.
                     * @param message CloudSqlSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.ICloudSqlSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudSqlSettings message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.CloudSqlSettings.verify|verify} messages.
                     * @param message CloudSqlSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.ICloudSqlSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudSqlSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudSqlSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.CloudSqlSettings;

                    /**
                     * Decodes a CloudSqlSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudSqlSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.CloudSqlSettings;

                    /**
                     * Verifies a CloudSqlSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudSqlSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudSqlSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.CloudSqlSettings;

                    /**
                     * Creates a plain object from a CloudSqlSettings message. Also converts values to other types if specified.
                     * @param message CloudSqlSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.CloudSqlSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudSqlSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CloudSqlSettings {

                    /** SqlActivationPolicy enum. */
                    enum SqlActivationPolicy {
                        SQL_ACTIVATION_POLICY_UNSPECIFIED = 0,
                        ALWAYS = 1,
                        NEVER = 2
                    }

                    /** SqlDataDiskType enum. */
                    enum SqlDataDiskType {
                        SQL_DATA_DISK_TYPE_UNSPECIFIED = 0,
                        PD_SSD = 1,
                        PD_HDD = 2
                    }

                    /** SqlDatabaseVersion enum. */
                    enum SqlDatabaseVersion {
                        SQL_DATABASE_VERSION_UNSPECIFIED = 0,
                        MYSQL_5_6 = 1,
                        MYSQL_5_7 = 2,
                        POSTGRES_9_6 = 3,
                        POSTGRES_11 = 4,
                        POSTGRES_10 = 5,
                        MYSQL_8_0 = 6,
                        POSTGRES_12 = 7,
                        POSTGRES_13 = 8
                    }
                }

                /** Properties of a StaticIpConnectivity. */
                interface IStaticIpConnectivity {
                }

                /** Represents a StaticIpConnectivity. */
                class StaticIpConnectivity implements IStaticIpConnectivity {

                    /**
                     * Constructs a new StaticIpConnectivity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IStaticIpConnectivity);

                    /**
                     * Creates a new StaticIpConnectivity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StaticIpConnectivity instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IStaticIpConnectivity): google.cloud.clouddms.v1.StaticIpConnectivity;

                    /**
                     * Encodes the specified StaticIpConnectivity message. Does not implicitly {@link google.cloud.clouddms.v1.StaticIpConnectivity.verify|verify} messages.
                     * @param message StaticIpConnectivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IStaticIpConnectivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StaticIpConnectivity message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.StaticIpConnectivity.verify|verify} messages.
                     * @param message StaticIpConnectivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IStaticIpConnectivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StaticIpConnectivity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StaticIpConnectivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.StaticIpConnectivity;

                    /**
                     * Decodes a StaticIpConnectivity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StaticIpConnectivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.StaticIpConnectivity;

                    /**
                     * Verifies a StaticIpConnectivity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StaticIpConnectivity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StaticIpConnectivity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.StaticIpConnectivity;

                    /**
                     * Creates a plain object from a StaticIpConnectivity message. Also converts values to other types if specified.
                     * @param message StaticIpConnectivity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.StaticIpConnectivity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StaticIpConnectivity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReverseSshConnectivity. */
                interface IReverseSshConnectivity {

                    /** ReverseSshConnectivity vmIp */
                    vmIp?: (string|null);

                    /** ReverseSshConnectivity vmPort */
                    vmPort?: (number|null);

                    /** ReverseSshConnectivity vm */
                    vm?: (string|null);

                    /** ReverseSshConnectivity vpc */
                    vpc?: (string|null);
                }

                /** Represents a ReverseSshConnectivity. */
                class ReverseSshConnectivity implements IReverseSshConnectivity {

                    /**
                     * Constructs a new ReverseSshConnectivity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IReverseSshConnectivity);

                    /** ReverseSshConnectivity vmIp. */
                    public vmIp: string;

                    /** ReverseSshConnectivity vmPort. */
                    public vmPort: number;

                    /** ReverseSshConnectivity vm. */
                    public vm: string;

                    /** ReverseSshConnectivity vpc. */
                    public vpc: string;

                    /**
                     * Creates a new ReverseSshConnectivity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReverseSshConnectivity instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IReverseSshConnectivity): google.cloud.clouddms.v1.ReverseSshConnectivity;

                    /**
                     * Encodes the specified ReverseSshConnectivity message. Does not implicitly {@link google.cloud.clouddms.v1.ReverseSshConnectivity.verify|verify} messages.
                     * @param message ReverseSshConnectivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IReverseSshConnectivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReverseSshConnectivity message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.ReverseSshConnectivity.verify|verify} messages.
                     * @param message ReverseSshConnectivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IReverseSshConnectivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReverseSshConnectivity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReverseSshConnectivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.ReverseSshConnectivity;

                    /**
                     * Decodes a ReverseSshConnectivity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReverseSshConnectivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.ReverseSshConnectivity;

                    /**
                     * Verifies a ReverseSshConnectivity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReverseSshConnectivity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReverseSshConnectivity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.ReverseSshConnectivity;

                    /**
                     * Creates a plain object from a ReverseSshConnectivity message. Also converts values to other types if specified.
                     * @param message ReverseSshConnectivity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.ReverseSshConnectivity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReverseSshConnectivity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VpcPeeringConnectivity. */
                interface IVpcPeeringConnectivity {

                    /** VpcPeeringConnectivity vpc */
                    vpc?: (string|null);
                }

                /** Represents a VpcPeeringConnectivity. */
                class VpcPeeringConnectivity implements IVpcPeeringConnectivity {

                    /**
                     * Constructs a new VpcPeeringConnectivity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IVpcPeeringConnectivity);

                    /** VpcPeeringConnectivity vpc. */
                    public vpc: string;

                    /**
                     * Creates a new VpcPeeringConnectivity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VpcPeeringConnectivity instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IVpcPeeringConnectivity): google.cloud.clouddms.v1.VpcPeeringConnectivity;

                    /**
                     * Encodes the specified VpcPeeringConnectivity message. Does not implicitly {@link google.cloud.clouddms.v1.VpcPeeringConnectivity.verify|verify} messages.
                     * @param message VpcPeeringConnectivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IVpcPeeringConnectivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VpcPeeringConnectivity message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.VpcPeeringConnectivity.verify|verify} messages.
                     * @param message VpcPeeringConnectivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IVpcPeeringConnectivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VpcPeeringConnectivity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VpcPeeringConnectivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.VpcPeeringConnectivity;

                    /**
                     * Decodes a VpcPeeringConnectivity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VpcPeeringConnectivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.VpcPeeringConnectivity;

                    /**
                     * Verifies a VpcPeeringConnectivity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VpcPeeringConnectivity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VpcPeeringConnectivity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.VpcPeeringConnectivity;

                    /**
                     * Creates a plain object from a VpcPeeringConnectivity message. Also converts values to other types if specified.
                     * @param message VpcPeeringConnectivity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.VpcPeeringConnectivity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VpcPeeringConnectivity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DatabaseType. */
                interface IDatabaseType {

                    /** DatabaseType provider */
                    provider?: (google.cloud.clouddms.v1.DatabaseProvider|keyof typeof google.cloud.clouddms.v1.DatabaseProvider|null);

                    /** DatabaseType engine */
                    engine?: (google.cloud.clouddms.v1.DatabaseEngine|keyof typeof google.cloud.clouddms.v1.DatabaseEngine|null);
                }

                /** Represents a DatabaseType. */
                class DatabaseType implements IDatabaseType {

                    /**
                     * Constructs a new DatabaseType.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IDatabaseType);

                    /** DatabaseType provider. */
                    public provider: (google.cloud.clouddms.v1.DatabaseProvider|keyof typeof google.cloud.clouddms.v1.DatabaseProvider);

                    /** DatabaseType engine. */
                    public engine: (google.cloud.clouddms.v1.DatabaseEngine|keyof typeof google.cloud.clouddms.v1.DatabaseEngine);

                    /**
                     * Creates a new DatabaseType instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DatabaseType instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IDatabaseType): google.cloud.clouddms.v1.DatabaseType;

                    /**
                     * Encodes the specified DatabaseType message. Does not implicitly {@link google.cloud.clouddms.v1.DatabaseType.verify|verify} messages.
                     * @param message DatabaseType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IDatabaseType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DatabaseType message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.DatabaseType.verify|verify} messages.
                     * @param message DatabaseType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IDatabaseType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DatabaseType message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DatabaseType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.DatabaseType;

                    /**
                     * Decodes a DatabaseType message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DatabaseType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.DatabaseType;

                    /**
                     * Verifies a DatabaseType message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DatabaseType message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DatabaseType
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.DatabaseType;

                    /**
                     * Creates a plain object from a DatabaseType message. Also converts values to other types if specified.
                     * @param message DatabaseType
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.DatabaseType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DatabaseType to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MigrationJob. */
                interface IMigrationJob {

                    /** MigrationJob name */
                    name?: (string|null);

                    /** MigrationJob createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** MigrationJob updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** MigrationJob labels */
                    labels?: ({ [k: string]: string }|null);

                    /** MigrationJob displayName */
                    displayName?: (string|null);

                    /** MigrationJob state */
                    state?: (google.cloud.clouddms.v1.MigrationJob.State|keyof typeof google.cloud.clouddms.v1.MigrationJob.State|null);

                    /** MigrationJob phase */
                    phase?: (google.cloud.clouddms.v1.MigrationJob.Phase|keyof typeof google.cloud.clouddms.v1.MigrationJob.Phase|null);

                    /** MigrationJob type */
                    type?: (google.cloud.clouddms.v1.MigrationJob.Type|keyof typeof google.cloud.clouddms.v1.MigrationJob.Type|null);

                    /** MigrationJob dumpPath */
                    dumpPath?: (string|null);

                    /** MigrationJob source */
                    source?: (string|null);

                    /** MigrationJob destination */
                    destination?: (string|null);

                    /** MigrationJob reverseSshConnectivity */
                    reverseSshConnectivity?: (google.cloud.clouddms.v1.IReverseSshConnectivity|null);

                    /** MigrationJob vpcPeeringConnectivity */
                    vpcPeeringConnectivity?: (google.cloud.clouddms.v1.IVpcPeeringConnectivity|null);

                    /** MigrationJob staticIpConnectivity */
                    staticIpConnectivity?: (google.cloud.clouddms.v1.IStaticIpConnectivity|null);

                    /** MigrationJob duration */
                    duration?: (google.protobuf.IDuration|null);

                    /** MigrationJob error */
                    error?: (google.rpc.IStatus|null);

                    /** MigrationJob sourceDatabase */
                    sourceDatabase?: (google.cloud.clouddms.v1.IDatabaseType|null);

                    /** MigrationJob destinationDatabase */
                    destinationDatabase?: (google.cloud.clouddms.v1.IDatabaseType|null);

                    /** MigrationJob endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a MigrationJob. */
                class MigrationJob implements IMigrationJob {

                    /**
                     * Constructs a new MigrationJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IMigrationJob);

                    /** MigrationJob name. */
                    public name: string;

                    /** MigrationJob createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** MigrationJob updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** MigrationJob labels. */
                    public labels: { [k: string]: string };

                    /** MigrationJob displayName. */
                    public displayName: string;

                    /** MigrationJob state. */
                    public state: (google.cloud.clouddms.v1.MigrationJob.State|keyof typeof google.cloud.clouddms.v1.MigrationJob.State);

                    /** MigrationJob phase. */
                    public phase: (google.cloud.clouddms.v1.MigrationJob.Phase|keyof typeof google.cloud.clouddms.v1.MigrationJob.Phase);

                    /** MigrationJob type. */
                    public type: (google.cloud.clouddms.v1.MigrationJob.Type|keyof typeof google.cloud.clouddms.v1.MigrationJob.Type);

                    /** MigrationJob dumpPath. */
                    public dumpPath: string;

                    /** MigrationJob source. */
                    public source: string;

                    /** MigrationJob destination. */
                    public destination: string;

                    /** MigrationJob reverseSshConnectivity. */
                    public reverseSshConnectivity?: (google.cloud.clouddms.v1.IReverseSshConnectivity|null);

                    /** MigrationJob vpcPeeringConnectivity. */
                    public vpcPeeringConnectivity?: (google.cloud.clouddms.v1.IVpcPeeringConnectivity|null);

                    /** MigrationJob staticIpConnectivity. */
                    public staticIpConnectivity?: (google.cloud.clouddms.v1.IStaticIpConnectivity|null);

                    /** MigrationJob duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /** MigrationJob error. */
                    public error?: (google.rpc.IStatus|null);

                    /** MigrationJob sourceDatabase. */
                    public sourceDatabase?: (google.cloud.clouddms.v1.IDatabaseType|null);

                    /** MigrationJob destinationDatabase. */
                    public destinationDatabase?: (google.cloud.clouddms.v1.IDatabaseType|null);

                    /** MigrationJob endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** MigrationJob connectivity. */
                    public connectivity?: ("reverseSshConnectivity"|"vpcPeeringConnectivity"|"staticIpConnectivity");

                    /**
                     * Creates a new MigrationJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MigrationJob instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IMigrationJob): google.cloud.clouddms.v1.MigrationJob;

                    /**
                     * Encodes the specified MigrationJob message. Does not implicitly {@link google.cloud.clouddms.v1.MigrationJob.verify|verify} messages.
                     * @param message MigrationJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IMigrationJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MigrationJob message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.MigrationJob.verify|verify} messages.
                     * @param message MigrationJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IMigrationJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MigrationJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MigrationJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.MigrationJob;

                    /**
                     * Decodes a MigrationJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MigrationJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.MigrationJob;

                    /**
                     * Verifies a MigrationJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MigrationJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MigrationJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.MigrationJob;

                    /**
                     * Creates a plain object from a MigrationJob message. Also converts values to other types if specified.
                     * @param message MigrationJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.MigrationJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MigrationJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace MigrationJob {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        MAINTENANCE = 1,
                        DRAFT = 2,
                        CREATING = 3,
                        NOT_STARTED = 4,
                        RUNNING = 5,
                        FAILED = 6,
                        COMPLETED = 7,
                        DELETING = 8,
                        STOPPING = 9,
                        STOPPED = 10,
                        DELETED = 11,
                        UPDATING = 12,
                        STARTING = 13,
                        RESTARTING = 14,
                        RESUMING = 15
                    }

                    /** Phase enum. */
                    enum Phase {
                        PHASE_UNSPECIFIED = 0,
                        FULL_DUMP = 1,
                        CDC = 2,
                        PROMOTE_IN_PROGRESS = 3,
                        WAITING_FOR_SOURCE_WRITES_TO_STOP = 4,
                        PREPARING_THE_DUMP = 5
                    }

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        ONE_TIME = 1,
                        CONTINUOUS = 2
                    }
                }

                /** Properties of a ConnectionProfile. */
                interface IConnectionProfile {

                    /** ConnectionProfile name */
                    name?: (string|null);

                    /** ConnectionProfile createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectionProfile updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectionProfile labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ConnectionProfile state */
                    state?: (google.cloud.clouddms.v1.ConnectionProfile.State|keyof typeof google.cloud.clouddms.v1.ConnectionProfile.State|null);

                    /** ConnectionProfile displayName */
                    displayName?: (string|null);

                    /** ConnectionProfile mysql */
                    mysql?: (google.cloud.clouddms.v1.IMySqlConnectionProfile|null);

                    /** ConnectionProfile postgresql */
                    postgresql?: (google.cloud.clouddms.v1.IPostgreSqlConnectionProfile|null);

                    /** ConnectionProfile cloudsql */
                    cloudsql?: (google.cloud.clouddms.v1.ICloudSqlConnectionProfile|null);

                    /** ConnectionProfile error */
                    error?: (google.rpc.IStatus|null);

                    /** ConnectionProfile provider */
                    provider?: (google.cloud.clouddms.v1.DatabaseProvider|keyof typeof google.cloud.clouddms.v1.DatabaseProvider|null);
                }

                /** Represents a ConnectionProfile. */
                class ConnectionProfile implements IConnectionProfile {

                    /**
                     * Constructs a new ConnectionProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IConnectionProfile);

                    /** ConnectionProfile name. */
                    public name: string;

                    /** ConnectionProfile createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectionProfile updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectionProfile labels. */
                    public labels: { [k: string]: string };

                    /** ConnectionProfile state. */
                    public state: (google.cloud.clouddms.v1.ConnectionProfile.State|keyof typeof google.cloud.clouddms.v1.ConnectionProfile.State);

                    /** ConnectionProfile displayName. */
                    public displayName: string;

                    /** ConnectionProfile mysql. */
                    public mysql?: (google.cloud.clouddms.v1.IMySqlConnectionProfile|null);

                    /** ConnectionProfile postgresql. */
                    public postgresql?: (google.cloud.clouddms.v1.IPostgreSqlConnectionProfile|null);

                    /** ConnectionProfile cloudsql. */
                    public cloudsql?: (google.cloud.clouddms.v1.ICloudSqlConnectionProfile|null);

                    /** ConnectionProfile error. */
                    public error?: (google.rpc.IStatus|null);

                    /** ConnectionProfile provider. */
                    public provider: (google.cloud.clouddms.v1.DatabaseProvider|keyof typeof google.cloud.clouddms.v1.DatabaseProvider);

                    /** ConnectionProfile connectionProfile. */
                    public connectionProfile?: ("mysql"|"postgresql"|"cloudsql");

                    /**
                     * Creates a new ConnectionProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectionProfile instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IConnectionProfile): google.cloud.clouddms.v1.ConnectionProfile;

                    /**
                     * Encodes the specified ConnectionProfile message. Does not implicitly {@link google.cloud.clouddms.v1.ConnectionProfile.verify|verify} messages.
                     * @param message ConnectionProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IConnectionProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConnectionProfile message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.ConnectionProfile.verify|verify} messages.
                     * @param message ConnectionProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IConnectionProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConnectionProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConnectionProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.ConnectionProfile;

                    /**
                     * Decodes a ConnectionProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConnectionProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.ConnectionProfile;

                    /**
                     * Verifies a ConnectionProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConnectionProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConnectionProfile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.ConnectionProfile;

                    /**
                     * Creates a plain object from a ConnectionProfile message. Also converts values to other types if specified.
                     * @param message ConnectionProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.ConnectionProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConnectionProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ConnectionProfile {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        DRAFT = 1,
                        CREATING = 2,
                        READY = 3,
                        UPDATING = 4,
                        DELETING = 5,
                        DELETED = 6,
                        FAILED = 7
                    }
                }

                /** Properties of a MigrationJobVerificationError. */
                interface IMigrationJobVerificationError {

                    /** MigrationJobVerificationError errorCode */
                    errorCode?: (google.cloud.clouddms.v1.MigrationJobVerificationError.ErrorCode|keyof typeof google.cloud.clouddms.v1.MigrationJobVerificationError.ErrorCode|null);

                    /** MigrationJobVerificationError errorMessage */
                    errorMessage?: (string|null);

                    /** MigrationJobVerificationError errorDetailMessage */
                    errorDetailMessage?: (string|null);
                }

                /** Represents a MigrationJobVerificationError. */
                class MigrationJobVerificationError implements IMigrationJobVerificationError {

                    /**
                     * Constructs a new MigrationJobVerificationError.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.clouddms.v1.IMigrationJobVerificationError);

                    /** MigrationJobVerificationError errorCode. */
                    public errorCode: (google.cloud.clouddms.v1.MigrationJobVerificationError.ErrorCode|keyof typeof google.cloud.clouddms.v1.MigrationJobVerificationError.ErrorCode);

                    /** MigrationJobVerificationError errorMessage. */
                    public errorMessage: string;

                    /** MigrationJobVerificationError errorDetailMessage. */
                    public errorDetailMessage: string;

                    /**
                     * Creates a new MigrationJobVerificationError instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MigrationJobVerificationError instance
                     */
                    public static create(properties?: google.cloud.clouddms.v1.IMigrationJobVerificationError): google.cloud.clouddms.v1.MigrationJobVerificationError;

                    /**
                     * Encodes the specified MigrationJobVerificationError message. Does not implicitly {@link google.cloud.clouddms.v1.MigrationJobVerificationError.verify|verify} messages.
                     * @param message MigrationJobVerificationError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.clouddms.v1.IMigrationJobVerificationError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MigrationJobVerificationError message, length delimited. Does not implicitly {@link google.cloud.clouddms.v1.MigrationJobVerificationError.verify|verify} messages.
                     * @param message MigrationJobVerificationError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.clouddms.v1.IMigrationJobVerificationError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MigrationJobVerificationError message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MigrationJobVerificationError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.clouddms.v1.MigrationJobVerificationError;

                    /**
                     * Decodes a MigrationJobVerificationError message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MigrationJobVerificationError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.clouddms.v1.MigrationJobVerificationError;

                    /**
                     * Verifies a MigrationJobVerificationError message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MigrationJobVerificationError message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MigrationJobVerificationError
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.clouddms.v1.MigrationJobVerificationError;

                    /**
                     * Creates a plain object from a MigrationJobVerificationError message. Also converts values to other types if specified.
                     * @param message MigrationJobVerificationError
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.clouddms.v1.MigrationJobVerificationError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MigrationJobVerificationError to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace MigrationJobVerificationError {

                    /** ErrorCode enum. */
                    enum ErrorCode {
                        ERROR_CODE_UNSPECIFIED = 0,
                        CONNECTION_FAILURE = 1,
                        AUTHENTICATION_FAILURE = 2,
                        INVALID_CONNECTION_PROFILE_CONFIG = 3,
                        VERSION_INCOMPATIBILITY = 4,
                        CONNECTION_PROFILE_TYPES_INCOMPATIBILITY = 5,
                        NO_PGLOGICAL_INSTALLED = 7,
                        PGLOGICAL_NODE_ALREADY_EXISTS = 8,
                        INVALID_WAL_LEVEL = 9,
                        INVALID_SHARED_PRELOAD_LIBRARY = 10,
                        INSUFFICIENT_MAX_REPLICATION_SLOTS = 11,
                        INSUFFICIENT_MAX_WAL_SENDERS = 12,
                        INSUFFICIENT_MAX_WORKER_PROCESSES = 13,
                        UNSUPPORTED_EXTENSIONS = 14,
                        UNSUPPORTED_MIGRATION_TYPE = 15,
                        INVALID_RDS_LOGICAL_REPLICATION = 16,
                        UNSUPPORTED_GTID_MODE = 17,
                        UNSUPPORTED_TABLE_DEFINITION = 18,
                        UNSUPPORTED_DEFINER = 19,
                        CANT_RESTART_RUNNING_MIGRATION = 21
                    }
                }

                /** DatabaseEngine enum. */
                enum DatabaseEngine {
                    DATABASE_ENGINE_UNSPECIFIED = 0,
                    MYSQL = 1,
                    POSTGRESQL = 2
                }

                /** DatabaseProvider enum. */
                enum DatabaseProvider {
                    DATABASE_PROVIDER_UNSPECIFIED = 0,
                    CLOUDSQL = 1,
                    RDS = 2
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
}
