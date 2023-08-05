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

        /** Namespace assuredworkloads. */
        namespace assuredworkloads {

            /** Namespace v1. */
            namespace v1 {

                /** Represents an AssuredWorkloadsService */
                class AssuredWorkloadsService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AssuredWorkloadsService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AssuredWorkloadsService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AssuredWorkloadsService;

                    /**
                     * Calls CreateWorkload.
                     * @param request CreateWorkloadRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createWorkload(request: google.cloud.assuredworkloads.v1.ICreateWorkloadRequest, callback: google.cloud.assuredworkloads.v1.AssuredWorkloadsService.CreateWorkloadCallback): void;

                    /**
                     * Calls CreateWorkload.
                     * @param request CreateWorkloadRequest message or plain object
                     * @returns Promise
                     */
                    public createWorkload(request: google.cloud.assuredworkloads.v1.ICreateWorkloadRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateWorkload.
                     * @param request UpdateWorkloadRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Workload
                     */
                    public updateWorkload(request: google.cloud.assuredworkloads.v1.IUpdateWorkloadRequest, callback: google.cloud.assuredworkloads.v1.AssuredWorkloadsService.UpdateWorkloadCallback): void;

                    /**
                     * Calls UpdateWorkload.
                     * @param request UpdateWorkloadRequest message or plain object
                     * @returns Promise
                     */
                    public updateWorkload(request: google.cloud.assuredworkloads.v1.IUpdateWorkloadRequest): Promise<google.cloud.assuredworkloads.v1.Workload>;

                    /**
                     * Calls RestrictAllowedResources.
                     * @param request RestrictAllowedResourcesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RestrictAllowedResourcesResponse
                     */
                    public restrictAllowedResources(request: google.cloud.assuredworkloads.v1.IRestrictAllowedResourcesRequest, callback: google.cloud.assuredworkloads.v1.AssuredWorkloadsService.RestrictAllowedResourcesCallback): void;

                    /**
                     * Calls RestrictAllowedResources.
                     * @param request RestrictAllowedResourcesRequest message or plain object
                     * @returns Promise
                     */
                    public restrictAllowedResources(request: google.cloud.assuredworkloads.v1.IRestrictAllowedResourcesRequest): Promise<google.cloud.assuredworkloads.v1.RestrictAllowedResourcesResponse>;

                    /**
                     * Calls DeleteWorkload.
                     * @param request DeleteWorkloadRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteWorkload(request: google.cloud.assuredworkloads.v1.IDeleteWorkloadRequest, callback: google.cloud.assuredworkloads.v1.AssuredWorkloadsService.DeleteWorkloadCallback): void;

                    /**
                     * Calls DeleteWorkload.
                     * @param request DeleteWorkloadRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWorkload(request: google.cloud.assuredworkloads.v1.IDeleteWorkloadRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetWorkload.
                     * @param request GetWorkloadRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Workload
                     */
                    public getWorkload(request: google.cloud.assuredworkloads.v1.IGetWorkloadRequest, callback: google.cloud.assuredworkloads.v1.AssuredWorkloadsService.GetWorkloadCallback): void;

                    /**
                     * Calls GetWorkload.
                     * @param request GetWorkloadRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkload(request: google.cloud.assuredworkloads.v1.IGetWorkloadRequest): Promise<google.cloud.assuredworkloads.v1.Workload>;

                    /**
                     * Calls ListWorkloads.
                     * @param request ListWorkloadsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkloadsResponse
                     */
                    public listWorkloads(request: google.cloud.assuredworkloads.v1.IListWorkloadsRequest, callback: google.cloud.assuredworkloads.v1.AssuredWorkloadsService.ListWorkloadsCallback): void;

                    /**
                     * Calls ListWorkloads.
                     * @param request ListWorkloadsRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkloads(request: google.cloud.assuredworkloads.v1.IListWorkloadsRequest): Promise<google.cloud.assuredworkloads.v1.ListWorkloadsResponse>;

                    /**
                     * Calls ListViolations.
                     * @param request ListViolationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListViolationsResponse
                     */
                    public listViolations(request: google.cloud.assuredworkloads.v1.IListViolationsRequest, callback: google.cloud.assuredworkloads.v1.AssuredWorkloadsService.ListViolationsCallback): void;

                    /**
                     * Calls ListViolations.
                     * @param request ListViolationsRequest message or plain object
                     * @returns Promise
                     */
                    public listViolations(request: google.cloud.assuredworkloads.v1.IListViolationsRequest): Promise<google.cloud.assuredworkloads.v1.ListViolationsResponse>;

                    /**
                     * Calls GetViolation.
                     * @param request GetViolationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Violation
                     */
                    public getViolation(request: google.cloud.assuredworkloads.v1.IGetViolationRequest, callback: google.cloud.assuredworkloads.v1.AssuredWorkloadsService.GetViolationCallback): void;

                    /**
                     * Calls GetViolation.
                     * @param request GetViolationRequest message or plain object
                     * @returns Promise
                     */
                    public getViolation(request: google.cloud.assuredworkloads.v1.IGetViolationRequest): Promise<google.cloud.assuredworkloads.v1.Violation>;

                    /**
                     * Calls AcknowledgeViolation.
                     * @param request AcknowledgeViolationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AcknowledgeViolationResponse
                     */
                    public acknowledgeViolation(request: google.cloud.assuredworkloads.v1.IAcknowledgeViolationRequest, callback: google.cloud.assuredworkloads.v1.AssuredWorkloadsService.AcknowledgeViolationCallback): void;

                    /**
                     * Calls AcknowledgeViolation.
                     * @param request AcknowledgeViolationRequest message or plain object
                     * @returns Promise
                     */
                    public acknowledgeViolation(request: google.cloud.assuredworkloads.v1.IAcknowledgeViolationRequest): Promise<google.cloud.assuredworkloads.v1.AcknowledgeViolationResponse>;
                }

                namespace AssuredWorkloadsService {

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1.AssuredWorkloadsService|createWorkload}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateWorkloadCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1.AssuredWorkloadsService|updateWorkload}.
                     * @param error Error, if any
                     * @param [response] Workload
                     */
                    type UpdateWorkloadCallback = (error: (Error|null), response?: google.cloud.assuredworkloads.v1.Workload) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1.AssuredWorkloadsService|restrictAllowedResources}.
                     * @param error Error, if any
                     * @param [response] RestrictAllowedResourcesResponse
                     */
                    type RestrictAllowedResourcesCallback = (error: (Error|null), response?: google.cloud.assuredworkloads.v1.RestrictAllowedResourcesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1.AssuredWorkloadsService|deleteWorkload}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteWorkloadCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1.AssuredWorkloadsService|getWorkload}.
                     * @param error Error, if any
                     * @param [response] Workload
                     */
                    type GetWorkloadCallback = (error: (Error|null), response?: google.cloud.assuredworkloads.v1.Workload) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1.AssuredWorkloadsService|listWorkloads}.
                     * @param error Error, if any
                     * @param [response] ListWorkloadsResponse
                     */
                    type ListWorkloadsCallback = (error: (Error|null), response?: google.cloud.assuredworkloads.v1.ListWorkloadsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1.AssuredWorkloadsService|listViolations}.
                     * @param error Error, if any
                     * @param [response] ListViolationsResponse
                     */
                    type ListViolationsCallback = (error: (Error|null), response?: google.cloud.assuredworkloads.v1.ListViolationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1.AssuredWorkloadsService|getViolation}.
                     * @param error Error, if any
                     * @param [response] Violation
                     */
                    type GetViolationCallback = (error: (Error|null), response?: google.cloud.assuredworkloads.v1.Violation) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1.AssuredWorkloadsService|acknowledgeViolation}.
                     * @param error Error, if any
                     * @param [response] AcknowledgeViolationResponse
                     */
                    type AcknowledgeViolationCallback = (error: (Error|null), response?: google.cloud.assuredworkloads.v1.AcknowledgeViolationResponse) => void;
                }

                /** Properties of a CreateWorkloadRequest. */
                interface ICreateWorkloadRequest {

                    /** CreateWorkloadRequest parent */
                    parent?: (string|null);

                    /** CreateWorkloadRequest workload */
                    workload?: (google.cloud.assuredworkloads.v1.IWorkload|null);

                    /** CreateWorkloadRequest externalId */
                    externalId?: (string|null);
                }

                /** Represents a CreateWorkloadRequest. */
                class CreateWorkloadRequest implements ICreateWorkloadRequest {

                    /**
                     * Constructs a new CreateWorkloadRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.ICreateWorkloadRequest);

                    /** CreateWorkloadRequest parent. */
                    public parent: string;

                    /** CreateWorkloadRequest workload. */
                    public workload?: (google.cloud.assuredworkloads.v1.IWorkload|null);

                    /** CreateWorkloadRequest externalId. */
                    public externalId: string;

                    /**
                     * Creates a new CreateWorkloadRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkloadRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.ICreateWorkloadRequest): google.cloud.assuredworkloads.v1.CreateWorkloadRequest;

                    /**
                     * Encodes the specified CreateWorkloadRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1.CreateWorkloadRequest.verify|verify} messages.
                     * @param message CreateWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.ICreateWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkloadRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.CreateWorkloadRequest.verify|verify} messages.
                     * @param message CreateWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.ICreateWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkloadRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.CreateWorkloadRequest;

                    /**
                     * Decodes a CreateWorkloadRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.CreateWorkloadRequest;

                    /**
                     * Verifies a CreateWorkloadRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkloadRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkloadRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.CreateWorkloadRequest;

                    /**
                     * Creates a plain object from a CreateWorkloadRequest message. Also converts values to other types if specified.
                     * @param message CreateWorkloadRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.CreateWorkloadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkloadRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateWorkloadRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateWorkloadRequest. */
                interface IUpdateWorkloadRequest {

                    /** UpdateWorkloadRequest workload */
                    workload?: (google.cloud.assuredworkloads.v1.IWorkload|null);

                    /** UpdateWorkloadRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateWorkloadRequest. */
                class UpdateWorkloadRequest implements IUpdateWorkloadRequest {

                    /**
                     * Constructs a new UpdateWorkloadRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IUpdateWorkloadRequest);

                    /** UpdateWorkloadRequest workload. */
                    public workload?: (google.cloud.assuredworkloads.v1.IWorkload|null);

                    /** UpdateWorkloadRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateWorkloadRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateWorkloadRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IUpdateWorkloadRequest): google.cloud.assuredworkloads.v1.UpdateWorkloadRequest;

                    /**
                     * Encodes the specified UpdateWorkloadRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1.UpdateWorkloadRequest.verify|verify} messages.
                     * @param message UpdateWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IUpdateWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateWorkloadRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.UpdateWorkloadRequest.verify|verify} messages.
                     * @param message UpdateWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IUpdateWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateWorkloadRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.UpdateWorkloadRequest;

                    /**
                     * Decodes an UpdateWorkloadRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.UpdateWorkloadRequest;

                    /**
                     * Verifies an UpdateWorkloadRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateWorkloadRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateWorkloadRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.UpdateWorkloadRequest;

                    /**
                     * Creates a plain object from an UpdateWorkloadRequest message. Also converts values to other types if specified.
                     * @param message UpdateWorkloadRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.UpdateWorkloadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateWorkloadRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateWorkloadRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteWorkloadRequest. */
                interface IDeleteWorkloadRequest {

                    /** DeleteWorkloadRequest name */
                    name?: (string|null);

                    /** DeleteWorkloadRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteWorkloadRequest. */
                class DeleteWorkloadRequest implements IDeleteWorkloadRequest {

                    /**
                     * Constructs a new DeleteWorkloadRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IDeleteWorkloadRequest);

                    /** DeleteWorkloadRequest name. */
                    public name: string;

                    /** DeleteWorkloadRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteWorkloadRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWorkloadRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IDeleteWorkloadRequest): google.cloud.assuredworkloads.v1.DeleteWorkloadRequest;

                    /**
                     * Encodes the specified DeleteWorkloadRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1.DeleteWorkloadRequest.verify|verify} messages.
                     * @param message DeleteWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IDeleteWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWorkloadRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.DeleteWorkloadRequest.verify|verify} messages.
                     * @param message DeleteWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IDeleteWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWorkloadRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.DeleteWorkloadRequest;

                    /**
                     * Decodes a DeleteWorkloadRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.DeleteWorkloadRequest;

                    /**
                     * Verifies a DeleteWorkloadRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWorkloadRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWorkloadRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.DeleteWorkloadRequest;

                    /**
                     * Creates a plain object from a DeleteWorkloadRequest message. Also converts values to other types if specified.
                     * @param message DeleteWorkloadRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.DeleteWorkloadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWorkloadRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteWorkloadRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetWorkloadRequest. */
                interface IGetWorkloadRequest {

                    /** GetWorkloadRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWorkloadRequest. */
                class GetWorkloadRequest implements IGetWorkloadRequest {

                    /**
                     * Constructs a new GetWorkloadRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IGetWorkloadRequest);

                    /** GetWorkloadRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWorkloadRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkloadRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IGetWorkloadRequest): google.cloud.assuredworkloads.v1.GetWorkloadRequest;

                    /**
                     * Encodes the specified GetWorkloadRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1.GetWorkloadRequest.verify|verify} messages.
                     * @param message GetWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IGetWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkloadRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.GetWorkloadRequest.verify|verify} messages.
                     * @param message GetWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IGetWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkloadRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.GetWorkloadRequest;

                    /**
                     * Decodes a GetWorkloadRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.GetWorkloadRequest;

                    /**
                     * Verifies a GetWorkloadRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkloadRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkloadRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.GetWorkloadRequest;

                    /**
                     * Creates a plain object from a GetWorkloadRequest message. Also converts values to other types if specified.
                     * @param message GetWorkloadRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.GetWorkloadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkloadRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetWorkloadRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkloadsRequest. */
                interface IListWorkloadsRequest {

                    /** ListWorkloadsRequest parent */
                    parent?: (string|null);

                    /** ListWorkloadsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkloadsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListWorkloadsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListWorkloadsRequest. */
                class ListWorkloadsRequest implements IListWorkloadsRequest {

                    /**
                     * Constructs a new ListWorkloadsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IListWorkloadsRequest);

                    /** ListWorkloadsRequest parent. */
                    public parent: string;

                    /** ListWorkloadsRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkloadsRequest pageToken. */
                    public pageToken: string;

                    /** ListWorkloadsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListWorkloadsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkloadsRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IListWorkloadsRequest): google.cloud.assuredworkloads.v1.ListWorkloadsRequest;

                    /**
                     * Encodes the specified ListWorkloadsRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1.ListWorkloadsRequest.verify|verify} messages.
                     * @param message ListWorkloadsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IListWorkloadsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkloadsRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.ListWorkloadsRequest.verify|verify} messages.
                     * @param message ListWorkloadsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IListWorkloadsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkloadsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkloadsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.ListWorkloadsRequest;

                    /**
                     * Decodes a ListWorkloadsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkloadsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.ListWorkloadsRequest;

                    /**
                     * Verifies a ListWorkloadsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkloadsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkloadsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.ListWorkloadsRequest;

                    /**
                     * Creates a plain object from a ListWorkloadsRequest message. Also converts values to other types if specified.
                     * @param message ListWorkloadsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.ListWorkloadsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkloadsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkloadsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkloadsResponse. */
                interface IListWorkloadsResponse {

                    /** ListWorkloadsResponse workloads */
                    workloads?: (google.cloud.assuredworkloads.v1.IWorkload[]|null);

                    /** ListWorkloadsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListWorkloadsResponse. */
                class ListWorkloadsResponse implements IListWorkloadsResponse {

                    /**
                     * Constructs a new ListWorkloadsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IListWorkloadsResponse);

                    /** ListWorkloadsResponse workloads. */
                    public workloads: google.cloud.assuredworkloads.v1.IWorkload[];

                    /** ListWorkloadsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListWorkloadsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkloadsResponse instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IListWorkloadsResponse): google.cloud.assuredworkloads.v1.ListWorkloadsResponse;

                    /**
                     * Encodes the specified ListWorkloadsResponse message. Does not implicitly {@link google.cloud.assuredworkloads.v1.ListWorkloadsResponse.verify|verify} messages.
                     * @param message ListWorkloadsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IListWorkloadsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkloadsResponse message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.ListWorkloadsResponse.verify|verify} messages.
                     * @param message ListWorkloadsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IListWorkloadsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkloadsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkloadsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.ListWorkloadsResponse;

                    /**
                     * Decodes a ListWorkloadsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkloadsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.ListWorkloadsResponse;

                    /**
                     * Verifies a ListWorkloadsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkloadsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkloadsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.ListWorkloadsResponse;

                    /**
                     * Creates a plain object from a ListWorkloadsResponse message. Also converts values to other types if specified.
                     * @param message ListWorkloadsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.ListWorkloadsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkloadsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkloadsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Workload. */
                interface IWorkload {

                    /** Workload name */
                    name?: (string|null);

                    /** Workload displayName */
                    displayName?: (string|null);

                    /** Workload resources */
                    resources?: (google.cloud.assuredworkloads.v1.Workload.IResourceInfo[]|null);

                    /** Workload complianceRegime */
                    complianceRegime?: (google.cloud.assuredworkloads.v1.Workload.ComplianceRegime|keyof typeof google.cloud.assuredworkloads.v1.Workload.ComplianceRegime|null);

                    /** Workload createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Workload billingAccount */
                    billingAccount?: (string|null);

                    /** Workload etag */
                    etag?: (string|null);

                    /** Workload labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Workload provisionedResourcesParent */
                    provisionedResourcesParent?: (string|null);

                    /** Workload kmsSettings */
                    kmsSettings?: (google.cloud.assuredworkloads.v1.Workload.IKMSSettings|null);

                    /** Workload resourceSettings */
                    resourceSettings?: (google.cloud.assuredworkloads.v1.Workload.IResourceSettings[]|null);

                    /** Workload kajEnrollmentState */
                    kajEnrollmentState?: (google.cloud.assuredworkloads.v1.Workload.KajEnrollmentState|keyof typeof google.cloud.assuredworkloads.v1.Workload.KajEnrollmentState|null);

                    /** Workload enableSovereignControls */
                    enableSovereignControls?: (boolean|null);

                    /** Workload saaEnrollmentResponse */
                    saaEnrollmentResponse?: (google.cloud.assuredworkloads.v1.Workload.ISaaEnrollmentResponse|null);

                    /** Workload compliantButDisallowedServices */
                    compliantButDisallowedServices?: (string[]|null);

                    /** Workload partner */
                    partner?: (google.cloud.assuredworkloads.v1.Workload.Partner|keyof typeof google.cloud.assuredworkloads.v1.Workload.Partner|null);
                }

                /** Represents a Workload. */
                class Workload implements IWorkload {

                    /**
                     * Constructs a new Workload.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IWorkload);

                    /** Workload name. */
                    public name: string;

                    /** Workload displayName. */
                    public displayName: string;

                    /** Workload resources. */
                    public resources: google.cloud.assuredworkloads.v1.Workload.IResourceInfo[];

                    /** Workload complianceRegime. */
                    public complianceRegime: (google.cloud.assuredworkloads.v1.Workload.ComplianceRegime|keyof typeof google.cloud.assuredworkloads.v1.Workload.ComplianceRegime);

                    /** Workload createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Workload billingAccount. */
                    public billingAccount: string;

                    /** Workload etag. */
                    public etag: string;

                    /** Workload labels. */
                    public labels: { [k: string]: string };

                    /** Workload provisionedResourcesParent. */
                    public provisionedResourcesParent: string;

                    /** Workload kmsSettings. */
                    public kmsSettings?: (google.cloud.assuredworkloads.v1.Workload.IKMSSettings|null);

                    /** Workload resourceSettings. */
                    public resourceSettings: google.cloud.assuredworkloads.v1.Workload.IResourceSettings[];

                    /** Workload kajEnrollmentState. */
                    public kajEnrollmentState: (google.cloud.assuredworkloads.v1.Workload.KajEnrollmentState|keyof typeof google.cloud.assuredworkloads.v1.Workload.KajEnrollmentState);

                    /** Workload enableSovereignControls. */
                    public enableSovereignControls: boolean;

                    /** Workload saaEnrollmentResponse. */
                    public saaEnrollmentResponse?: (google.cloud.assuredworkloads.v1.Workload.ISaaEnrollmentResponse|null);

                    /** Workload compliantButDisallowedServices. */
                    public compliantButDisallowedServices: string[];

                    /** Workload partner. */
                    public partner: (google.cloud.assuredworkloads.v1.Workload.Partner|keyof typeof google.cloud.assuredworkloads.v1.Workload.Partner);

                    /**
                     * Creates a new Workload instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Workload instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IWorkload): google.cloud.assuredworkloads.v1.Workload;

                    /**
                     * Encodes the specified Workload message. Does not implicitly {@link google.cloud.assuredworkloads.v1.Workload.verify|verify} messages.
                     * @param message Workload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IWorkload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Workload message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.Workload.verify|verify} messages.
                     * @param message Workload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IWorkload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Workload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Workload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.Workload;

                    /**
                     * Decodes a Workload message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Workload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.Workload;

                    /**
                     * Verifies a Workload message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Workload message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Workload
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.Workload;

                    /**
                     * Creates a plain object from a Workload message. Also converts values to other types if specified.
                     * @param message Workload
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.Workload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Workload to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Workload
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Workload {

                    /** Properties of a ResourceInfo. */
                    interface IResourceInfo {

                        /** ResourceInfo resourceId */
                        resourceId?: (number|Long|string|null);

                        /** ResourceInfo resourceType */
                        resourceType?: (google.cloud.assuredworkloads.v1.Workload.ResourceInfo.ResourceType|keyof typeof google.cloud.assuredworkloads.v1.Workload.ResourceInfo.ResourceType|null);
                    }

                    /** Represents a ResourceInfo. */
                    class ResourceInfo implements IResourceInfo {

                        /**
                         * Constructs a new ResourceInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.assuredworkloads.v1.Workload.IResourceInfo);

                        /** ResourceInfo resourceId. */
                        public resourceId: (number|Long|string);

                        /** ResourceInfo resourceType. */
                        public resourceType: (google.cloud.assuredworkloads.v1.Workload.ResourceInfo.ResourceType|keyof typeof google.cloud.assuredworkloads.v1.Workload.ResourceInfo.ResourceType);

                        /**
                         * Creates a new ResourceInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceInfo instance
                         */
                        public static create(properties?: google.cloud.assuredworkloads.v1.Workload.IResourceInfo): google.cloud.assuredworkloads.v1.Workload.ResourceInfo;

                        /**
                         * Encodes the specified ResourceInfo message. Does not implicitly {@link google.cloud.assuredworkloads.v1.Workload.ResourceInfo.verify|verify} messages.
                         * @param message ResourceInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.assuredworkloads.v1.Workload.IResourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceInfo message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.Workload.ResourceInfo.verify|verify} messages.
                         * @param message ResourceInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.assuredworkloads.v1.Workload.IResourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.Workload.ResourceInfo;

                        /**
                         * Decodes a ResourceInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.Workload.ResourceInfo;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.Workload.ResourceInfo;

                        /**
                         * Creates a plain object from a ResourceInfo message. Also converts values to other types if specified.
                         * @param message ResourceInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.assuredworkloads.v1.Workload.ResourceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResourceInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ResourceInfo {

                        /** ResourceType enum. */
                        enum ResourceType {
                            RESOURCE_TYPE_UNSPECIFIED = 0,
                            CONSUMER_PROJECT = 1,
                            CONSUMER_FOLDER = 4,
                            ENCRYPTION_KEYS_PROJECT = 2,
                            KEYRING = 3
                        }
                    }

                    /** ComplianceRegime enum. */
                    enum ComplianceRegime {
                        COMPLIANCE_REGIME_UNSPECIFIED = 0,
                        IL4 = 1,
                        CJIS = 2,
                        FEDRAMP_HIGH = 3,
                        FEDRAMP_MODERATE = 4,
                        US_REGIONAL_ACCESS = 5,
                        HIPAA = 6,
                        HITRUST = 7,
                        EU_REGIONS_AND_SUPPORT = 8,
                        CA_REGIONS_AND_SUPPORT = 9,
                        ITAR = 10,
                        AU_REGIONS_AND_US_SUPPORT = 11,
                        ASSURED_WORKLOADS_FOR_PARTNERS = 12
                    }

                    /** Properties of a KMSSettings. */
                    interface IKMSSettings {

                        /** KMSSettings nextRotationTime */
                        nextRotationTime?: (google.protobuf.ITimestamp|null);

                        /** KMSSettings rotationPeriod */
                        rotationPeriod?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a KMSSettings. */
                    class KMSSettings implements IKMSSettings {

                        /**
                         * Constructs a new KMSSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.assuredworkloads.v1.Workload.IKMSSettings);

                        /** KMSSettings nextRotationTime. */
                        public nextRotationTime?: (google.protobuf.ITimestamp|null);

                        /** KMSSettings rotationPeriod. */
                        public rotationPeriod?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new KMSSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns KMSSettings instance
                         */
                        public static create(properties?: google.cloud.assuredworkloads.v1.Workload.IKMSSettings): google.cloud.assuredworkloads.v1.Workload.KMSSettings;

                        /**
                         * Encodes the specified KMSSettings message. Does not implicitly {@link google.cloud.assuredworkloads.v1.Workload.KMSSettings.verify|verify} messages.
                         * @param message KMSSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.assuredworkloads.v1.Workload.IKMSSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified KMSSettings message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.Workload.KMSSettings.verify|verify} messages.
                         * @param message KMSSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.assuredworkloads.v1.Workload.IKMSSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a KMSSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns KMSSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.Workload.KMSSettings;

                        /**
                         * Decodes a KMSSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns KMSSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.Workload.KMSSettings;

                        /**
                         * Verifies a KMSSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a KMSSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns KMSSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.Workload.KMSSettings;

                        /**
                         * Creates a plain object from a KMSSettings message. Also converts values to other types if specified.
                         * @param message KMSSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.assuredworkloads.v1.Workload.KMSSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this KMSSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for KMSSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ResourceSettings. */
                    interface IResourceSettings {

                        /** ResourceSettings resourceId */
                        resourceId?: (string|null);

                        /** ResourceSettings resourceType */
                        resourceType?: (google.cloud.assuredworkloads.v1.Workload.ResourceInfo.ResourceType|keyof typeof google.cloud.assuredworkloads.v1.Workload.ResourceInfo.ResourceType|null);

                        /** ResourceSettings displayName */
                        displayName?: (string|null);
                    }

                    /** Represents a ResourceSettings. */
                    class ResourceSettings implements IResourceSettings {

                        /**
                         * Constructs a new ResourceSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.assuredworkloads.v1.Workload.IResourceSettings);

                        /** ResourceSettings resourceId. */
                        public resourceId: string;

                        /** ResourceSettings resourceType. */
                        public resourceType: (google.cloud.assuredworkloads.v1.Workload.ResourceInfo.ResourceType|keyof typeof google.cloud.assuredworkloads.v1.Workload.ResourceInfo.ResourceType);

                        /** ResourceSettings displayName. */
                        public displayName: string;

                        /**
                         * Creates a new ResourceSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceSettings instance
                         */
                        public static create(properties?: google.cloud.assuredworkloads.v1.Workload.IResourceSettings): google.cloud.assuredworkloads.v1.Workload.ResourceSettings;

                        /**
                         * Encodes the specified ResourceSettings message. Does not implicitly {@link google.cloud.assuredworkloads.v1.Workload.ResourceSettings.verify|verify} messages.
                         * @param message ResourceSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.assuredworkloads.v1.Workload.IResourceSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceSettings message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.Workload.ResourceSettings.verify|verify} messages.
                         * @param message ResourceSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.assuredworkloads.v1.Workload.IResourceSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.Workload.ResourceSettings;

                        /**
                         * Decodes a ResourceSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.Workload.ResourceSettings;

                        /**
                         * Verifies a ResourceSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResourceSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResourceSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.Workload.ResourceSettings;

                        /**
                         * Creates a plain object from a ResourceSettings message. Also converts values to other types if specified.
                         * @param message ResourceSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.assuredworkloads.v1.Workload.ResourceSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResourceSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** KajEnrollmentState enum. */
                    enum KajEnrollmentState {
                        KAJ_ENROLLMENT_STATE_UNSPECIFIED = 0,
                        KAJ_ENROLLMENT_STATE_PENDING = 1,
                        KAJ_ENROLLMENT_STATE_COMPLETE = 2
                    }

                    /** Properties of a SaaEnrollmentResponse. */
                    interface ISaaEnrollmentResponse {

                        /** SaaEnrollmentResponse setupStatus */
                        setupStatus?: (google.cloud.assuredworkloads.v1.Workload.SaaEnrollmentResponse.SetupState|keyof typeof google.cloud.assuredworkloads.v1.Workload.SaaEnrollmentResponse.SetupState|null);

                        /** SaaEnrollmentResponse setupErrors */
                        setupErrors?: (google.cloud.assuredworkloads.v1.Workload.SaaEnrollmentResponse.SetupError[]|null);
                    }

                    /** Represents a SaaEnrollmentResponse. */
                    class SaaEnrollmentResponse implements ISaaEnrollmentResponse {

                        /**
                         * Constructs a new SaaEnrollmentResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.assuredworkloads.v1.Workload.ISaaEnrollmentResponse);

                        /** SaaEnrollmentResponse setupStatus. */
                        public setupStatus?: (google.cloud.assuredworkloads.v1.Workload.SaaEnrollmentResponse.SetupState|keyof typeof google.cloud.assuredworkloads.v1.Workload.SaaEnrollmentResponse.SetupState|null);

                        /** SaaEnrollmentResponse setupErrors. */
                        public setupErrors: google.cloud.assuredworkloads.v1.Workload.SaaEnrollmentResponse.SetupError[];

                        /** SaaEnrollmentResponse _setupStatus. */
                        public _setupStatus?: "setupStatus";

                        /**
                         * Creates a new SaaEnrollmentResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SaaEnrollmentResponse instance
                         */
                        public static create(properties?: google.cloud.assuredworkloads.v1.Workload.ISaaEnrollmentResponse): google.cloud.assuredworkloads.v1.Workload.SaaEnrollmentResponse;

                        /**
                         * Encodes the specified SaaEnrollmentResponse message. Does not implicitly {@link google.cloud.assuredworkloads.v1.Workload.SaaEnrollmentResponse.verify|verify} messages.
                         * @param message SaaEnrollmentResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.assuredworkloads.v1.Workload.ISaaEnrollmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SaaEnrollmentResponse message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.Workload.SaaEnrollmentResponse.verify|verify} messages.
                         * @param message SaaEnrollmentResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.assuredworkloads.v1.Workload.ISaaEnrollmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SaaEnrollmentResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SaaEnrollmentResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.Workload.SaaEnrollmentResponse;

                        /**
                         * Decodes a SaaEnrollmentResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SaaEnrollmentResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.Workload.SaaEnrollmentResponse;

                        /**
                         * Verifies a SaaEnrollmentResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SaaEnrollmentResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SaaEnrollmentResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.Workload.SaaEnrollmentResponse;

                        /**
                         * Creates a plain object from a SaaEnrollmentResponse message. Also converts values to other types if specified.
                         * @param message SaaEnrollmentResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.assuredworkloads.v1.Workload.SaaEnrollmentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SaaEnrollmentResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SaaEnrollmentResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SaaEnrollmentResponse {

                        /** SetupState enum. */
                        enum SetupState {
                            SETUP_STATE_UNSPECIFIED = 0,
                            STATUS_PENDING = 1,
                            STATUS_COMPLETE = 2
                        }

                        /** SetupError enum. */
                        enum SetupError {
                            SETUP_ERROR_UNSPECIFIED = 0,
                            ERROR_INVALID_BASE_SETUP = 1,
                            ERROR_MISSING_EXTERNAL_SIGNING_KEY = 2,
                            ERROR_NOT_ALL_SERVICES_ENROLLED = 3,
                            ERROR_SETUP_CHECK_FAILED = 4
                        }
                    }

                    /** Partner enum. */
                    enum Partner {
                        PARTNER_UNSPECIFIED = 0,
                        LOCAL_CONTROLS_BY_S3NS = 1
                    }
                }

                /** Properties of a CreateWorkloadOperationMetadata. */
                interface ICreateWorkloadOperationMetadata {

                    /** CreateWorkloadOperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CreateWorkloadOperationMetadata displayName */
                    displayName?: (string|null);

                    /** CreateWorkloadOperationMetadata parent */
                    parent?: (string|null);

                    /** CreateWorkloadOperationMetadata complianceRegime */
                    complianceRegime?: (google.cloud.assuredworkloads.v1.Workload.ComplianceRegime|keyof typeof google.cloud.assuredworkloads.v1.Workload.ComplianceRegime|null);
                }

                /** Represents a CreateWorkloadOperationMetadata. */
                class CreateWorkloadOperationMetadata implements ICreateWorkloadOperationMetadata {

                    /**
                     * Constructs a new CreateWorkloadOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.ICreateWorkloadOperationMetadata);

                    /** CreateWorkloadOperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CreateWorkloadOperationMetadata displayName. */
                    public displayName: string;

                    /** CreateWorkloadOperationMetadata parent. */
                    public parent: string;

                    /** CreateWorkloadOperationMetadata complianceRegime. */
                    public complianceRegime: (google.cloud.assuredworkloads.v1.Workload.ComplianceRegime|keyof typeof google.cloud.assuredworkloads.v1.Workload.ComplianceRegime);

                    /**
                     * Creates a new CreateWorkloadOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkloadOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.ICreateWorkloadOperationMetadata): google.cloud.assuredworkloads.v1.CreateWorkloadOperationMetadata;

                    /**
                     * Encodes the specified CreateWorkloadOperationMetadata message. Does not implicitly {@link google.cloud.assuredworkloads.v1.CreateWorkloadOperationMetadata.verify|verify} messages.
                     * @param message CreateWorkloadOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.ICreateWorkloadOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkloadOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.CreateWorkloadOperationMetadata.verify|verify} messages.
                     * @param message CreateWorkloadOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.ICreateWorkloadOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkloadOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkloadOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.CreateWorkloadOperationMetadata;

                    /**
                     * Decodes a CreateWorkloadOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkloadOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.CreateWorkloadOperationMetadata;

                    /**
                     * Verifies a CreateWorkloadOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkloadOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkloadOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.CreateWorkloadOperationMetadata;

                    /**
                     * Creates a plain object from a CreateWorkloadOperationMetadata message. Also converts values to other types if specified.
                     * @param message CreateWorkloadOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.CreateWorkloadOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkloadOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateWorkloadOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RestrictAllowedResourcesRequest. */
                interface IRestrictAllowedResourcesRequest {

                    /** RestrictAllowedResourcesRequest name */
                    name?: (string|null);

                    /** RestrictAllowedResourcesRequest restrictionType */
                    restrictionType?: (google.cloud.assuredworkloads.v1.RestrictAllowedResourcesRequest.RestrictionType|keyof typeof google.cloud.assuredworkloads.v1.RestrictAllowedResourcesRequest.RestrictionType|null);
                }

                /** Represents a RestrictAllowedResourcesRequest. */
                class RestrictAllowedResourcesRequest implements IRestrictAllowedResourcesRequest {

                    /**
                     * Constructs a new RestrictAllowedResourcesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IRestrictAllowedResourcesRequest);

                    /** RestrictAllowedResourcesRequest name. */
                    public name: string;

                    /** RestrictAllowedResourcesRequest restrictionType. */
                    public restrictionType: (google.cloud.assuredworkloads.v1.RestrictAllowedResourcesRequest.RestrictionType|keyof typeof google.cloud.assuredworkloads.v1.RestrictAllowedResourcesRequest.RestrictionType);

                    /**
                     * Creates a new RestrictAllowedResourcesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestrictAllowedResourcesRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IRestrictAllowedResourcesRequest): google.cloud.assuredworkloads.v1.RestrictAllowedResourcesRequest;

                    /**
                     * Encodes the specified RestrictAllowedResourcesRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1.RestrictAllowedResourcesRequest.verify|verify} messages.
                     * @param message RestrictAllowedResourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IRestrictAllowedResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestrictAllowedResourcesRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.RestrictAllowedResourcesRequest.verify|verify} messages.
                     * @param message RestrictAllowedResourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IRestrictAllowedResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestrictAllowedResourcesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestrictAllowedResourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.RestrictAllowedResourcesRequest;

                    /**
                     * Decodes a RestrictAllowedResourcesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestrictAllowedResourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.RestrictAllowedResourcesRequest;

                    /**
                     * Verifies a RestrictAllowedResourcesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestrictAllowedResourcesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestrictAllowedResourcesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.RestrictAllowedResourcesRequest;

                    /**
                     * Creates a plain object from a RestrictAllowedResourcesRequest message. Also converts values to other types if specified.
                     * @param message RestrictAllowedResourcesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.RestrictAllowedResourcesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestrictAllowedResourcesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestrictAllowedResourcesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RestrictAllowedResourcesRequest {

                    /** RestrictionType enum. */
                    enum RestrictionType {
                        RESTRICTION_TYPE_UNSPECIFIED = 0,
                        ALLOW_ALL_GCP_RESOURCES = 1,
                        ALLOW_COMPLIANT_RESOURCES = 2
                    }
                }

                /** Properties of a RestrictAllowedResourcesResponse. */
                interface IRestrictAllowedResourcesResponse {
                }

                /** Represents a RestrictAllowedResourcesResponse. */
                class RestrictAllowedResourcesResponse implements IRestrictAllowedResourcesResponse {

                    /**
                     * Constructs a new RestrictAllowedResourcesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IRestrictAllowedResourcesResponse);

                    /**
                     * Creates a new RestrictAllowedResourcesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestrictAllowedResourcesResponse instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IRestrictAllowedResourcesResponse): google.cloud.assuredworkloads.v1.RestrictAllowedResourcesResponse;

                    /**
                     * Encodes the specified RestrictAllowedResourcesResponse message. Does not implicitly {@link google.cloud.assuredworkloads.v1.RestrictAllowedResourcesResponse.verify|verify} messages.
                     * @param message RestrictAllowedResourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IRestrictAllowedResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestrictAllowedResourcesResponse message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.RestrictAllowedResourcesResponse.verify|verify} messages.
                     * @param message RestrictAllowedResourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IRestrictAllowedResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestrictAllowedResourcesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestrictAllowedResourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.RestrictAllowedResourcesResponse;

                    /**
                     * Decodes a RestrictAllowedResourcesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestrictAllowedResourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.RestrictAllowedResourcesResponse;

                    /**
                     * Verifies a RestrictAllowedResourcesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestrictAllowedResourcesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestrictAllowedResourcesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.RestrictAllowedResourcesResponse;

                    /**
                     * Creates a plain object from a RestrictAllowedResourcesResponse message. Also converts values to other types if specified.
                     * @param message RestrictAllowedResourcesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.RestrictAllowedResourcesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestrictAllowedResourcesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestrictAllowedResourcesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AcknowledgeViolationRequest. */
                interface IAcknowledgeViolationRequest {

                    /** AcknowledgeViolationRequest name */
                    name?: (string|null);

                    /** AcknowledgeViolationRequest comment */
                    comment?: (string|null);

                    /** AcknowledgeViolationRequest nonCompliantOrgPolicy */
                    nonCompliantOrgPolicy?: (string|null);
                }

                /** Represents an AcknowledgeViolationRequest. */
                class AcknowledgeViolationRequest implements IAcknowledgeViolationRequest {

                    /**
                     * Constructs a new AcknowledgeViolationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IAcknowledgeViolationRequest);

                    /** AcknowledgeViolationRequest name. */
                    public name: string;

                    /** AcknowledgeViolationRequest comment. */
                    public comment: string;

                    /** AcknowledgeViolationRequest nonCompliantOrgPolicy. */
                    public nonCompliantOrgPolicy: string;

                    /**
                     * Creates a new AcknowledgeViolationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AcknowledgeViolationRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IAcknowledgeViolationRequest): google.cloud.assuredworkloads.v1.AcknowledgeViolationRequest;

                    /**
                     * Encodes the specified AcknowledgeViolationRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1.AcknowledgeViolationRequest.verify|verify} messages.
                     * @param message AcknowledgeViolationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IAcknowledgeViolationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AcknowledgeViolationRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.AcknowledgeViolationRequest.verify|verify} messages.
                     * @param message AcknowledgeViolationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IAcknowledgeViolationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AcknowledgeViolationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AcknowledgeViolationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.AcknowledgeViolationRequest;

                    /**
                     * Decodes an AcknowledgeViolationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AcknowledgeViolationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.AcknowledgeViolationRequest;

                    /**
                     * Verifies an AcknowledgeViolationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AcknowledgeViolationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AcknowledgeViolationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.AcknowledgeViolationRequest;

                    /**
                     * Creates a plain object from an AcknowledgeViolationRequest message. Also converts values to other types if specified.
                     * @param message AcknowledgeViolationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.AcknowledgeViolationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AcknowledgeViolationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AcknowledgeViolationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AcknowledgeViolationResponse. */
                interface IAcknowledgeViolationResponse {
                }

                /** Represents an AcknowledgeViolationResponse. */
                class AcknowledgeViolationResponse implements IAcknowledgeViolationResponse {

                    /**
                     * Constructs a new AcknowledgeViolationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IAcknowledgeViolationResponse);

                    /**
                     * Creates a new AcknowledgeViolationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AcknowledgeViolationResponse instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IAcknowledgeViolationResponse): google.cloud.assuredworkloads.v1.AcknowledgeViolationResponse;

                    /**
                     * Encodes the specified AcknowledgeViolationResponse message. Does not implicitly {@link google.cloud.assuredworkloads.v1.AcknowledgeViolationResponse.verify|verify} messages.
                     * @param message AcknowledgeViolationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IAcknowledgeViolationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AcknowledgeViolationResponse message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.AcknowledgeViolationResponse.verify|verify} messages.
                     * @param message AcknowledgeViolationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IAcknowledgeViolationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AcknowledgeViolationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AcknowledgeViolationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.AcknowledgeViolationResponse;

                    /**
                     * Decodes an AcknowledgeViolationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AcknowledgeViolationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.AcknowledgeViolationResponse;

                    /**
                     * Verifies an AcknowledgeViolationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AcknowledgeViolationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AcknowledgeViolationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.AcknowledgeViolationResponse;

                    /**
                     * Creates a plain object from an AcknowledgeViolationResponse message. Also converts values to other types if specified.
                     * @param message AcknowledgeViolationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.AcknowledgeViolationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AcknowledgeViolationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AcknowledgeViolationResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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
                    constructor(properties?: google.cloud.assuredworkloads.v1.ITimeWindow);

                    /** TimeWindow startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TimeWindow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeWindow instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.ITimeWindow): google.cloud.assuredworkloads.v1.TimeWindow;

                    /**
                     * Encodes the specified TimeWindow message. Does not implicitly {@link google.cloud.assuredworkloads.v1.TimeWindow.verify|verify} messages.
                     * @param message TimeWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.ITimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimeWindow message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.TimeWindow.verify|verify} messages.
                     * @param message TimeWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.ITimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimeWindow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.TimeWindow;

                    /**
                     * Decodes a TimeWindow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.TimeWindow;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.TimeWindow;

                    /**
                     * Creates a plain object from a TimeWindow message. Also converts values to other types if specified.
                     * @param message TimeWindow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.TimeWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeWindow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TimeWindow
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListViolationsRequest. */
                interface IListViolationsRequest {

                    /** ListViolationsRequest parent */
                    parent?: (string|null);

                    /** ListViolationsRequest interval */
                    interval?: (google.cloud.assuredworkloads.v1.ITimeWindow|null);

                    /** ListViolationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListViolationsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListViolationsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListViolationsRequest. */
                class ListViolationsRequest implements IListViolationsRequest {

                    /**
                     * Constructs a new ListViolationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IListViolationsRequest);

                    /** ListViolationsRequest parent. */
                    public parent: string;

                    /** ListViolationsRequest interval. */
                    public interval?: (google.cloud.assuredworkloads.v1.ITimeWindow|null);

                    /** ListViolationsRequest pageSize. */
                    public pageSize: number;

                    /** ListViolationsRequest pageToken. */
                    public pageToken: string;

                    /** ListViolationsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListViolationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListViolationsRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IListViolationsRequest): google.cloud.assuredworkloads.v1.ListViolationsRequest;

                    /**
                     * Encodes the specified ListViolationsRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1.ListViolationsRequest.verify|verify} messages.
                     * @param message ListViolationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IListViolationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListViolationsRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.ListViolationsRequest.verify|verify} messages.
                     * @param message ListViolationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IListViolationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListViolationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListViolationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.ListViolationsRequest;

                    /**
                     * Decodes a ListViolationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListViolationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.ListViolationsRequest;

                    /**
                     * Verifies a ListViolationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListViolationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListViolationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.ListViolationsRequest;

                    /**
                     * Creates a plain object from a ListViolationsRequest message. Also converts values to other types if specified.
                     * @param message ListViolationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.ListViolationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListViolationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListViolationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListViolationsResponse. */
                interface IListViolationsResponse {

                    /** ListViolationsResponse violations */
                    violations?: (google.cloud.assuredworkloads.v1.IViolation[]|null);

                    /** ListViolationsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListViolationsResponse. */
                class ListViolationsResponse implements IListViolationsResponse {

                    /**
                     * Constructs a new ListViolationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IListViolationsResponse);

                    /** ListViolationsResponse violations. */
                    public violations: google.cloud.assuredworkloads.v1.IViolation[];

                    /** ListViolationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListViolationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListViolationsResponse instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IListViolationsResponse): google.cloud.assuredworkloads.v1.ListViolationsResponse;

                    /**
                     * Encodes the specified ListViolationsResponse message. Does not implicitly {@link google.cloud.assuredworkloads.v1.ListViolationsResponse.verify|verify} messages.
                     * @param message ListViolationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IListViolationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListViolationsResponse message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.ListViolationsResponse.verify|verify} messages.
                     * @param message ListViolationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IListViolationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListViolationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListViolationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.ListViolationsResponse;

                    /**
                     * Decodes a ListViolationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListViolationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.ListViolationsResponse;

                    /**
                     * Verifies a ListViolationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListViolationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListViolationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.ListViolationsResponse;

                    /**
                     * Creates a plain object from a ListViolationsResponse message. Also converts values to other types if specified.
                     * @param message ListViolationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.ListViolationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListViolationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListViolationsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetViolationRequest. */
                interface IGetViolationRequest {

                    /** GetViolationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetViolationRequest. */
                class GetViolationRequest implements IGetViolationRequest {

                    /**
                     * Constructs a new GetViolationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IGetViolationRequest);

                    /** GetViolationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetViolationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetViolationRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IGetViolationRequest): google.cloud.assuredworkloads.v1.GetViolationRequest;

                    /**
                     * Encodes the specified GetViolationRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1.GetViolationRequest.verify|verify} messages.
                     * @param message GetViolationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IGetViolationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetViolationRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.GetViolationRequest.verify|verify} messages.
                     * @param message GetViolationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IGetViolationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetViolationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetViolationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.GetViolationRequest;

                    /**
                     * Decodes a GetViolationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetViolationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.GetViolationRequest;

                    /**
                     * Verifies a GetViolationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetViolationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetViolationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.GetViolationRequest;

                    /**
                     * Creates a plain object from a GetViolationRequest message. Also converts values to other types if specified.
                     * @param message GetViolationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.GetViolationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetViolationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetViolationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Violation. */
                interface IViolation {

                    /** Violation name */
                    name?: (string|null);

                    /** Violation description */
                    description?: (string|null);

                    /** Violation beginTime */
                    beginTime?: (google.protobuf.ITimestamp|null);

                    /** Violation updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Violation resolveTime */
                    resolveTime?: (google.protobuf.ITimestamp|null);

                    /** Violation category */
                    category?: (string|null);

                    /** Violation state */
                    state?: (google.cloud.assuredworkloads.v1.Violation.State|keyof typeof google.cloud.assuredworkloads.v1.Violation.State|null);

                    /** Violation orgPolicyConstraint */
                    orgPolicyConstraint?: (string|null);

                    /** Violation auditLogLink */
                    auditLogLink?: (string|null);

                    /** Violation nonCompliantOrgPolicy */
                    nonCompliantOrgPolicy?: (string|null);

                    /** Violation remediation */
                    remediation?: (google.cloud.assuredworkloads.v1.Violation.IRemediation|null);

                    /** Violation acknowledged */
                    acknowledged?: (boolean|null);

                    /** Violation acknowledgementTime */
                    acknowledgementTime?: (google.protobuf.ITimestamp|null);

                    /** Violation exceptionAuditLogLink */
                    exceptionAuditLogLink?: (string|null);
                }

                /** Represents a Violation. */
                class Violation implements IViolation {

                    /**
                     * Constructs a new Violation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1.IViolation);

                    /** Violation name. */
                    public name: string;

                    /** Violation description. */
                    public description: string;

                    /** Violation beginTime. */
                    public beginTime?: (google.protobuf.ITimestamp|null);

                    /** Violation updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Violation resolveTime. */
                    public resolveTime?: (google.protobuf.ITimestamp|null);

                    /** Violation category. */
                    public category: string;

                    /** Violation state. */
                    public state: (google.cloud.assuredworkloads.v1.Violation.State|keyof typeof google.cloud.assuredworkloads.v1.Violation.State);

                    /** Violation orgPolicyConstraint. */
                    public orgPolicyConstraint: string;

                    /** Violation auditLogLink. */
                    public auditLogLink: string;

                    /** Violation nonCompliantOrgPolicy. */
                    public nonCompliantOrgPolicy: string;

                    /** Violation remediation. */
                    public remediation?: (google.cloud.assuredworkloads.v1.Violation.IRemediation|null);

                    /** Violation acknowledged. */
                    public acknowledged: boolean;

                    /** Violation acknowledgementTime. */
                    public acknowledgementTime?: (google.protobuf.ITimestamp|null);

                    /** Violation exceptionAuditLogLink. */
                    public exceptionAuditLogLink: string;

                    /** Violation _acknowledgementTime. */
                    public _acknowledgementTime?: "acknowledgementTime";

                    /**
                     * Creates a new Violation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Violation instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1.IViolation): google.cloud.assuredworkloads.v1.Violation;

                    /**
                     * Encodes the specified Violation message. Does not implicitly {@link google.cloud.assuredworkloads.v1.Violation.verify|verify} messages.
                     * @param message Violation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Violation message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.Violation.verify|verify} messages.
                     * @param message Violation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Violation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Violation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.Violation;

                    /**
                     * Decodes a Violation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Violation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.Violation;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.Violation;

                    /**
                     * Creates a plain object from a Violation message. Also converts values to other types if specified.
                     * @param message Violation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1.Violation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Violation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Violation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Violation {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RESOLVED = 2,
                        UNRESOLVED = 3,
                        EXCEPTION = 4
                    }

                    /** Properties of a Remediation. */
                    interface IRemediation {

                        /** Remediation instructions */
                        instructions?: (google.cloud.assuredworkloads.v1.Violation.Remediation.IInstructions|null);

                        /** Remediation compliantValues */
                        compliantValues?: (string[]|null);

                        /** Remediation remediationType */
                        remediationType?: (google.cloud.assuredworkloads.v1.Violation.Remediation.RemediationType|keyof typeof google.cloud.assuredworkloads.v1.Violation.Remediation.RemediationType|null);
                    }

                    /** Represents a Remediation. */
                    class Remediation implements IRemediation {

                        /**
                         * Constructs a new Remediation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.assuredworkloads.v1.Violation.IRemediation);

                        /** Remediation instructions. */
                        public instructions?: (google.cloud.assuredworkloads.v1.Violation.Remediation.IInstructions|null);

                        /** Remediation compliantValues. */
                        public compliantValues: string[];

                        /** Remediation remediationType. */
                        public remediationType: (google.cloud.assuredworkloads.v1.Violation.Remediation.RemediationType|keyof typeof google.cloud.assuredworkloads.v1.Violation.Remediation.RemediationType);

                        /**
                         * Creates a new Remediation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Remediation instance
                         */
                        public static create(properties?: google.cloud.assuredworkloads.v1.Violation.IRemediation): google.cloud.assuredworkloads.v1.Violation.Remediation;

                        /**
                         * Encodes the specified Remediation message. Does not implicitly {@link google.cloud.assuredworkloads.v1.Violation.Remediation.verify|verify} messages.
                         * @param message Remediation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.assuredworkloads.v1.Violation.IRemediation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Remediation message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.Violation.Remediation.verify|verify} messages.
                         * @param message Remediation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.assuredworkloads.v1.Violation.IRemediation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Remediation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Remediation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.Violation.Remediation;

                        /**
                         * Decodes a Remediation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Remediation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.Violation.Remediation;

                        /**
                         * Verifies a Remediation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Remediation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Remediation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.Violation.Remediation;

                        /**
                         * Creates a plain object from a Remediation message. Also converts values to other types if specified.
                         * @param message Remediation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.assuredworkloads.v1.Violation.Remediation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Remediation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Remediation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Remediation {

                        /** RemediationType enum. */
                        enum RemediationType {
                            REMEDIATION_TYPE_UNSPECIFIED = 0,
                            REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION = 1,
                            REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION = 2,
                            REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION = 3,
                            REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION = 4
                        }

                        /** Properties of an Instructions. */
                        interface IInstructions {

                            /** Instructions gcloudInstructions */
                            gcloudInstructions?: (google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.IGcloud|null);

                            /** Instructions consoleInstructions */
                            consoleInstructions?: (google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.IConsole|null);
                        }

                        /** Represents an Instructions. */
                        class Instructions implements IInstructions {

                            /**
                             * Constructs a new Instructions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.assuredworkloads.v1.Violation.Remediation.IInstructions);

                            /** Instructions gcloudInstructions. */
                            public gcloudInstructions?: (google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.IGcloud|null);

                            /** Instructions consoleInstructions. */
                            public consoleInstructions?: (google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.IConsole|null);

                            /**
                             * Creates a new Instructions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Instructions instance
                             */
                            public static create(properties?: google.cloud.assuredworkloads.v1.Violation.Remediation.IInstructions): google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions;

                            /**
                             * Encodes the specified Instructions message. Does not implicitly {@link google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.verify|verify} messages.
                             * @param message Instructions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.assuredworkloads.v1.Violation.Remediation.IInstructions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Instructions message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.verify|verify} messages.
                             * @param message Instructions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.assuredworkloads.v1.Violation.Remediation.IInstructions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Instructions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Instructions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions;

                            /**
                             * Decodes an Instructions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Instructions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions;

                            /**
                             * Verifies an Instructions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Instructions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Instructions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions;

                            /**
                             * Creates a plain object from an Instructions message. Also converts values to other types if specified.
                             * @param message Instructions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Instructions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Instructions
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace Instructions {

                            /** Properties of a Gcloud. */
                            interface IGcloud {

                                /** Gcloud gcloudCommands */
                                gcloudCommands?: (string[]|null);

                                /** Gcloud steps */
                                steps?: (string[]|null);

                                /** Gcloud additionalLinks */
                                additionalLinks?: (string[]|null);
                            }

                            /** Represents a Gcloud. */
                            class Gcloud implements IGcloud {

                                /**
                                 * Constructs a new Gcloud.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.IGcloud);

                                /** Gcloud gcloudCommands. */
                                public gcloudCommands: string[];

                                /** Gcloud steps. */
                                public steps: string[];

                                /** Gcloud additionalLinks. */
                                public additionalLinks: string[];

                                /**
                                 * Creates a new Gcloud instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Gcloud instance
                                 */
                                public static create(properties?: google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.IGcloud): google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Gcloud;

                                /**
                                 * Encodes the specified Gcloud message. Does not implicitly {@link google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Gcloud.verify|verify} messages.
                                 * @param message Gcloud message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.IGcloud, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Gcloud message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Gcloud.verify|verify} messages.
                                 * @param message Gcloud message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.IGcloud, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Gcloud message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Gcloud
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Gcloud;

                                /**
                                 * Decodes a Gcloud message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Gcloud
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Gcloud;

                                /**
                                 * Verifies a Gcloud message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Gcloud message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Gcloud
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Gcloud;

                                /**
                                 * Creates a plain object from a Gcloud message. Also converts values to other types if specified.
                                 * @param message Gcloud
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Gcloud, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Gcloud to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Gcloud
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a Console. */
                            interface IConsole {

                                /** Console consoleUris */
                                consoleUris?: (string[]|null);

                                /** Console steps */
                                steps?: (string[]|null);

                                /** Console additionalLinks */
                                additionalLinks?: (string[]|null);
                            }

                            /** Represents a Console. */
                            class Console implements IConsole {

                                /**
                                 * Constructs a new Console.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.IConsole);

                                /** Console consoleUris. */
                                public consoleUris: string[];

                                /** Console steps. */
                                public steps: string[];

                                /** Console additionalLinks. */
                                public additionalLinks: string[];

                                /**
                                 * Creates a new Console instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Console instance
                                 */
                                public static create(properties?: google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.IConsole): google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Console;

                                /**
                                 * Encodes the specified Console message. Does not implicitly {@link google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Console.verify|verify} messages.
                                 * @param message Console message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.IConsole, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Console message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Console.verify|verify} messages.
                                 * @param message Console message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.IConsole, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Console message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Console
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Console;

                                /**
                                 * Decodes a Console message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Console
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Console;

                                /**
                                 * Verifies a Console message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Console message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Console
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Console;

                                /**
                                 * Creates a plain object from a Console message. Also converts values to other types if specified.
                                 * @param message Console
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.assuredworkloads.v1.Violation.Remediation.Instructions.Console, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Console to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Console
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }
                    }
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Properties of a CreateWorkloadRequest. */
                interface ICreateWorkloadRequest {

                    /** CreateWorkloadRequest parent */
                    parent?: (string|null);

                    /** CreateWorkloadRequest workload */
                    workload?: (google.cloud.assuredworkloads.v1beta1.IWorkload|null);

                    /** CreateWorkloadRequest externalId */
                    externalId?: (string|null);
                }

                /** Represents a CreateWorkloadRequest. */
                class CreateWorkloadRequest implements ICreateWorkloadRequest {

                    /**
                     * Constructs a new CreateWorkloadRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1beta1.ICreateWorkloadRequest);

                    /** CreateWorkloadRequest parent. */
                    public parent: string;

                    /** CreateWorkloadRequest workload. */
                    public workload?: (google.cloud.assuredworkloads.v1beta1.IWorkload|null);

                    /** CreateWorkloadRequest externalId. */
                    public externalId: string;

                    /**
                     * Creates a new CreateWorkloadRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkloadRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1beta1.ICreateWorkloadRequest): google.cloud.assuredworkloads.v1beta1.CreateWorkloadRequest;

                    /**
                     * Encodes the specified CreateWorkloadRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.CreateWorkloadRequest.verify|verify} messages.
                     * @param message CreateWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1beta1.ICreateWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkloadRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.CreateWorkloadRequest.verify|verify} messages.
                     * @param message CreateWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.ICreateWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkloadRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.CreateWorkloadRequest;

                    /**
                     * Decodes a CreateWorkloadRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.CreateWorkloadRequest;

                    /**
                     * Verifies a CreateWorkloadRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkloadRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkloadRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.CreateWorkloadRequest;

                    /**
                     * Creates a plain object from a CreateWorkloadRequest message. Also converts values to other types if specified.
                     * @param message CreateWorkloadRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1beta1.CreateWorkloadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkloadRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateWorkloadRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateWorkloadRequest. */
                interface IUpdateWorkloadRequest {

                    /** UpdateWorkloadRequest workload */
                    workload?: (google.cloud.assuredworkloads.v1beta1.IWorkload|null);

                    /** UpdateWorkloadRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateWorkloadRequest. */
                class UpdateWorkloadRequest implements IUpdateWorkloadRequest {

                    /**
                     * Constructs a new UpdateWorkloadRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1beta1.IUpdateWorkloadRequest);

                    /** UpdateWorkloadRequest workload. */
                    public workload?: (google.cloud.assuredworkloads.v1beta1.IWorkload|null);

                    /** UpdateWorkloadRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateWorkloadRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateWorkloadRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1beta1.IUpdateWorkloadRequest): google.cloud.assuredworkloads.v1beta1.UpdateWorkloadRequest;

                    /**
                     * Encodes the specified UpdateWorkloadRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.UpdateWorkloadRequest.verify|verify} messages.
                     * @param message UpdateWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1beta1.IUpdateWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateWorkloadRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.UpdateWorkloadRequest.verify|verify} messages.
                     * @param message UpdateWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.IUpdateWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateWorkloadRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.UpdateWorkloadRequest;

                    /**
                     * Decodes an UpdateWorkloadRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.UpdateWorkloadRequest;

                    /**
                     * Verifies an UpdateWorkloadRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateWorkloadRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateWorkloadRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.UpdateWorkloadRequest;

                    /**
                     * Creates a plain object from an UpdateWorkloadRequest message. Also converts values to other types if specified.
                     * @param message UpdateWorkloadRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1beta1.UpdateWorkloadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateWorkloadRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateWorkloadRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RestrictAllowedResourcesRequest. */
                interface IRestrictAllowedResourcesRequest {

                    /** RestrictAllowedResourcesRequest name */
                    name?: (string|null);

                    /** RestrictAllowedResourcesRequest restrictionType */
                    restrictionType?: (google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesRequest.RestrictionType|keyof typeof google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesRequest.RestrictionType|null);
                }

                /** Represents a RestrictAllowedResourcesRequest. */
                class RestrictAllowedResourcesRequest implements IRestrictAllowedResourcesRequest {

                    /**
                     * Constructs a new RestrictAllowedResourcesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1beta1.IRestrictAllowedResourcesRequest);

                    /** RestrictAllowedResourcesRequest name. */
                    public name: string;

                    /** RestrictAllowedResourcesRequest restrictionType. */
                    public restrictionType: (google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesRequest.RestrictionType|keyof typeof google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesRequest.RestrictionType);

                    /**
                     * Creates a new RestrictAllowedResourcesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestrictAllowedResourcesRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1beta1.IRestrictAllowedResourcesRequest): google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesRequest;

                    /**
                     * Encodes the specified RestrictAllowedResourcesRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesRequest.verify|verify} messages.
                     * @param message RestrictAllowedResourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1beta1.IRestrictAllowedResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestrictAllowedResourcesRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesRequest.verify|verify} messages.
                     * @param message RestrictAllowedResourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.IRestrictAllowedResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestrictAllowedResourcesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestrictAllowedResourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesRequest;

                    /**
                     * Decodes a RestrictAllowedResourcesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestrictAllowedResourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesRequest;

                    /**
                     * Verifies a RestrictAllowedResourcesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestrictAllowedResourcesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestrictAllowedResourcesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesRequest;

                    /**
                     * Creates a plain object from a RestrictAllowedResourcesRequest message. Also converts values to other types if specified.
                     * @param message RestrictAllowedResourcesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestrictAllowedResourcesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestrictAllowedResourcesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RestrictAllowedResourcesRequest {

                    /** RestrictionType enum. */
                    enum RestrictionType {
                        RESTRICTION_TYPE_UNSPECIFIED = 0,
                        ALLOW_ALL_GCP_RESOURCES = 1,
                        ALLOW_COMPLIANT_RESOURCES = 2
                    }
                }

                /** Properties of a RestrictAllowedResourcesResponse. */
                interface IRestrictAllowedResourcesResponse {
                }

                /** Represents a RestrictAllowedResourcesResponse. */
                class RestrictAllowedResourcesResponse implements IRestrictAllowedResourcesResponse {

                    /**
                     * Constructs a new RestrictAllowedResourcesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1beta1.IRestrictAllowedResourcesResponse);

                    /**
                     * Creates a new RestrictAllowedResourcesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestrictAllowedResourcesResponse instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1beta1.IRestrictAllowedResourcesResponse): google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesResponse;

                    /**
                     * Encodes the specified RestrictAllowedResourcesResponse message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesResponse.verify|verify} messages.
                     * @param message RestrictAllowedResourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1beta1.IRestrictAllowedResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestrictAllowedResourcesResponse message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesResponse.verify|verify} messages.
                     * @param message RestrictAllowedResourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.IRestrictAllowedResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestrictAllowedResourcesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestrictAllowedResourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesResponse;

                    /**
                     * Decodes a RestrictAllowedResourcesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestrictAllowedResourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesResponse;

                    /**
                     * Verifies a RestrictAllowedResourcesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestrictAllowedResourcesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestrictAllowedResourcesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesResponse;

                    /**
                     * Creates a plain object from a RestrictAllowedResourcesResponse message. Also converts values to other types if specified.
                     * @param message RestrictAllowedResourcesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestrictAllowedResourcesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestrictAllowedResourcesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteWorkloadRequest. */
                interface IDeleteWorkloadRequest {

                    /** DeleteWorkloadRequest name */
                    name?: (string|null);

                    /** DeleteWorkloadRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteWorkloadRequest. */
                class DeleteWorkloadRequest implements IDeleteWorkloadRequest {

                    /**
                     * Constructs a new DeleteWorkloadRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1beta1.IDeleteWorkloadRequest);

                    /** DeleteWorkloadRequest name. */
                    public name: string;

                    /** DeleteWorkloadRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteWorkloadRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWorkloadRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1beta1.IDeleteWorkloadRequest): google.cloud.assuredworkloads.v1beta1.DeleteWorkloadRequest;

                    /**
                     * Encodes the specified DeleteWorkloadRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.DeleteWorkloadRequest.verify|verify} messages.
                     * @param message DeleteWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1beta1.IDeleteWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWorkloadRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.DeleteWorkloadRequest.verify|verify} messages.
                     * @param message DeleteWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.IDeleteWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWorkloadRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.DeleteWorkloadRequest;

                    /**
                     * Decodes a DeleteWorkloadRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.DeleteWorkloadRequest;

                    /**
                     * Verifies a DeleteWorkloadRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWorkloadRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWorkloadRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.DeleteWorkloadRequest;

                    /**
                     * Creates a plain object from a DeleteWorkloadRequest message. Also converts values to other types if specified.
                     * @param message DeleteWorkloadRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1beta1.DeleteWorkloadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWorkloadRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteWorkloadRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetWorkloadRequest. */
                interface IGetWorkloadRequest {

                    /** GetWorkloadRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWorkloadRequest. */
                class GetWorkloadRequest implements IGetWorkloadRequest {

                    /**
                     * Constructs a new GetWorkloadRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1beta1.IGetWorkloadRequest);

                    /** GetWorkloadRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWorkloadRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkloadRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1beta1.IGetWorkloadRequest): google.cloud.assuredworkloads.v1beta1.GetWorkloadRequest;

                    /**
                     * Encodes the specified GetWorkloadRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.GetWorkloadRequest.verify|verify} messages.
                     * @param message GetWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1beta1.IGetWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkloadRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.GetWorkloadRequest.verify|verify} messages.
                     * @param message GetWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.IGetWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkloadRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.GetWorkloadRequest;

                    /**
                     * Decodes a GetWorkloadRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.GetWorkloadRequest;

                    /**
                     * Verifies a GetWorkloadRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkloadRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkloadRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.GetWorkloadRequest;

                    /**
                     * Creates a plain object from a GetWorkloadRequest message. Also converts values to other types if specified.
                     * @param message GetWorkloadRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1beta1.GetWorkloadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkloadRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetWorkloadRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AnalyzeWorkloadMoveRequest. */
                interface IAnalyzeWorkloadMoveRequest {

                    /** AnalyzeWorkloadMoveRequest source */
                    source?: (string|null);

                    /** AnalyzeWorkloadMoveRequest project */
                    project?: (string|null);

                    /** AnalyzeWorkloadMoveRequest target */
                    target?: (string|null);
                }

                /** Represents an AnalyzeWorkloadMoveRequest. */
                class AnalyzeWorkloadMoveRequest implements IAnalyzeWorkloadMoveRequest {

                    /**
                     * Constructs a new AnalyzeWorkloadMoveRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1beta1.IAnalyzeWorkloadMoveRequest);

                    /** AnalyzeWorkloadMoveRequest source. */
                    public source?: (string|null);

                    /** AnalyzeWorkloadMoveRequest project. */
                    public project?: (string|null);

                    /** AnalyzeWorkloadMoveRequest target. */
                    public target: string;

                    /** AnalyzeWorkloadMoveRequest projectOrWorkloadResource. */
                    public projectOrWorkloadResource?: ("source"|"project");

                    /**
                     * Creates a new AnalyzeWorkloadMoveRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeWorkloadMoveRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1beta1.IAnalyzeWorkloadMoveRequest): google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveRequest;

                    /**
                     * Encodes the specified AnalyzeWorkloadMoveRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveRequest.verify|verify} messages.
                     * @param message AnalyzeWorkloadMoveRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1beta1.IAnalyzeWorkloadMoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeWorkloadMoveRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveRequest.verify|verify} messages.
                     * @param message AnalyzeWorkloadMoveRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.IAnalyzeWorkloadMoveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeWorkloadMoveRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeWorkloadMoveRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveRequest;

                    /**
                     * Decodes an AnalyzeWorkloadMoveRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeWorkloadMoveRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveRequest;

                    /**
                     * Verifies an AnalyzeWorkloadMoveRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeWorkloadMoveRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeWorkloadMoveRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveRequest;

                    /**
                     * Creates a plain object from an AnalyzeWorkloadMoveRequest message. Also converts values to other types if specified.
                     * @param message AnalyzeWorkloadMoveRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeWorkloadMoveRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnalyzeWorkloadMoveRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AnalyzeWorkloadMoveResponse. */
                interface IAnalyzeWorkloadMoveResponse {

                    /** AnalyzeWorkloadMoveResponse blockers */
                    blockers?: (string[]|null);
                }

                /** Represents an AnalyzeWorkloadMoveResponse. */
                class AnalyzeWorkloadMoveResponse implements IAnalyzeWorkloadMoveResponse {

                    /**
                     * Constructs a new AnalyzeWorkloadMoveResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1beta1.IAnalyzeWorkloadMoveResponse);

                    /** AnalyzeWorkloadMoveResponse blockers. */
                    public blockers: string[];

                    /**
                     * Creates a new AnalyzeWorkloadMoveResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeWorkloadMoveResponse instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1beta1.IAnalyzeWorkloadMoveResponse): google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveResponse;

                    /**
                     * Encodes the specified AnalyzeWorkloadMoveResponse message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveResponse.verify|verify} messages.
                     * @param message AnalyzeWorkloadMoveResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1beta1.IAnalyzeWorkloadMoveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeWorkloadMoveResponse message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveResponse.verify|verify} messages.
                     * @param message AnalyzeWorkloadMoveResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.IAnalyzeWorkloadMoveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeWorkloadMoveResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeWorkloadMoveResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveResponse;

                    /**
                     * Decodes an AnalyzeWorkloadMoveResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeWorkloadMoveResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveResponse;

                    /**
                     * Verifies an AnalyzeWorkloadMoveResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeWorkloadMoveResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeWorkloadMoveResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveResponse;

                    /**
                     * Creates a plain object from an AnalyzeWorkloadMoveResponse message. Also converts values to other types if specified.
                     * @param message AnalyzeWorkloadMoveResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeWorkloadMoveResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnalyzeWorkloadMoveResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkloadsRequest. */
                interface IListWorkloadsRequest {

                    /** ListWorkloadsRequest parent */
                    parent?: (string|null);

                    /** ListWorkloadsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkloadsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListWorkloadsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListWorkloadsRequest. */
                class ListWorkloadsRequest implements IListWorkloadsRequest {

                    /**
                     * Constructs a new ListWorkloadsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1beta1.IListWorkloadsRequest);

                    /** ListWorkloadsRequest parent. */
                    public parent: string;

                    /** ListWorkloadsRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkloadsRequest pageToken. */
                    public pageToken: string;

                    /** ListWorkloadsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListWorkloadsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkloadsRequest instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1beta1.IListWorkloadsRequest): google.cloud.assuredworkloads.v1beta1.ListWorkloadsRequest;

                    /**
                     * Encodes the specified ListWorkloadsRequest message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.ListWorkloadsRequest.verify|verify} messages.
                     * @param message ListWorkloadsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1beta1.IListWorkloadsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkloadsRequest message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.ListWorkloadsRequest.verify|verify} messages.
                     * @param message ListWorkloadsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.IListWorkloadsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkloadsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkloadsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.ListWorkloadsRequest;

                    /**
                     * Decodes a ListWorkloadsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkloadsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.ListWorkloadsRequest;

                    /**
                     * Verifies a ListWorkloadsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkloadsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkloadsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.ListWorkloadsRequest;

                    /**
                     * Creates a plain object from a ListWorkloadsRequest message. Also converts values to other types if specified.
                     * @param message ListWorkloadsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1beta1.ListWorkloadsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkloadsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkloadsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkloadsResponse. */
                interface IListWorkloadsResponse {

                    /** ListWorkloadsResponse workloads */
                    workloads?: (google.cloud.assuredworkloads.v1beta1.IWorkload[]|null);

                    /** ListWorkloadsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListWorkloadsResponse. */
                class ListWorkloadsResponse implements IListWorkloadsResponse {

                    /**
                     * Constructs a new ListWorkloadsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1beta1.IListWorkloadsResponse);

                    /** ListWorkloadsResponse workloads. */
                    public workloads: google.cloud.assuredworkloads.v1beta1.IWorkload[];

                    /** ListWorkloadsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListWorkloadsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkloadsResponse instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1beta1.IListWorkloadsResponse): google.cloud.assuredworkloads.v1beta1.ListWorkloadsResponse;

                    /**
                     * Encodes the specified ListWorkloadsResponse message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.ListWorkloadsResponse.verify|verify} messages.
                     * @param message ListWorkloadsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1beta1.IListWorkloadsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkloadsResponse message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.ListWorkloadsResponse.verify|verify} messages.
                     * @param message ListWorkloadsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.IListWorkloadsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkloadsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkloadsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.ListWorkloadsResponse;

                    /**
                     * Decodes a ListWorkloadsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkloadsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.ListWorkloadsResponse;

                    /**
                     * Verifies a ListWorkloadsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkloadsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkloadsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.ListWorkloadsResponse;

                    /**
                     * Creates a plain object from a ListWorkloadsResponse message. Also converts values to other types if specified.
                     * @param message ListWorkloadsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1beta1.ListWorkloadsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkloadsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkloadsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Workload. */
                interface IWorkload {

                    /** Workload name */
                    name?: (string|null);

                    /** Workload displayName */
                    displayName?: (string|null);

                    /** Workload resources */
                    resources?: (google.cloud.assuredworkloads.v1beta1.Workload.IResourceInfo[]|null);

                    /** Workload complianceRegime */
                    complianceRegime?: (google.cloud.assuredworkloads.v1beta1.Workload.ComplianceRegime|keyof typeof google.cloud.assuredworkloads.v1beta1.Workload.ComplianceRegime|null);

                    /** Workload createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Workload billingAccount */
                    billingAccount?: (string|null);

                    /** Workload il4Settings */
                    il4Settings?: (google.cloud.assuredworkloads.v1beta1.Workload.IIL4Settings|null);

                    /** Workload cjisSettings */
                    cjisSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.ICJISSettings|null);

                    /** Workload fedrampHighSettings */
                    fedrampHighSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IFedrampHighSettings|null);

                    /** Workload fedrampModerateSettings */
                    fedrampModerateSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IFedrampModerateSettings|null);

                    /** Workload etag */
                    etag?: (string|null);

                    /** Workload labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Workload provisionedResourcesParent */
                    provisionedResourcesParent?: (string|null);

                    /** Workload kmsSettings */
                    kmsSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings|null);

                    /** Workload resourceSettings */
                    resourceSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IResourceSettings[]|null);

                    /** Workload kajEnrollmentState */
                    kajEnrollmentState?: (google.cloud.assuredworkloads.v1beta1.Workload.KajEnrollmentState|keyof typeof google.cloud.assuredworkloads.v1beta1.Workload.KajEnrollmentState|null);

                    /** Workload enableSovereignControls */
                    enableSovereignControls?: (boolean|null);

                    /** Workload saaEnrollmentResponse */
                    saaEnrollmentResponse?: (google.cloud.assuredworkloads.v1beta1.Workload.ISaaEnrollmentResponse|null);

                    /** Workload compliantButDisallowedServices */
                    compliantButDisallowedServices?: (string[]|null);
                }

                /** Represents a Workload. */
                class Workload implements IWorkload {

                    /**
                     * Constructs a new Workload.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1beta1.IWorkload);

                    /** Workload name. */
                    public name: string;

                    /** Workload displayName. */
                    public displayName: string;

                    /** Workload resources. */
                    public resources: google.cloud.assuredworkloads.v1beta1.Workload.IResourceInfo[];

                    /** Workload complianceRegime. */
                    public complianceRegime: (google.cloud.assuredworkloads.v1beta1.Workload.ComplianceRegime|keyof typeof google.cloud.assuredworkloads.v1beta1.Workload.ComplianceRegime);

                    /** Workload createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Workload billingAccount. */
                    public billingAccount: string;

                    /** Workload il4Settings. */
                    public il4Settings?: (google.cloud.assuredworkloads.v1beta1.Workload.IIL4Settings|null);

                    /** Workload cjisSettings. */
                    public cjisSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.ICJISSettings|null);

                    /** Workload fedrampHighSettings. */
                    public fedrampHighSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IFedrampHighSettings|null);

                    /** Workload fedrampModerateSettings. */
                    public fedrampModerateSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IFedrampModerateSettings|null);

                    /** Workload etag. */
                    public etag: string;

                    /** Workload labels. */
                    public labels: { [k: string]: string };

                    /** Workload provisionedResourcesParent. */
                    public provisionedResourcesParent: string;

                    /** Workload kmsSettings. */
                    public kmsSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings|null);

                    /** Workload resourceSettings. */
                    public resourceSettings: google.cloud.assuredworkloads.v1beta1.Workload.IResourceSettings[];

                    /** Workload kajEnrollmentState. */
                    public kajEnrollmentState: (google.cloud.assuredworkloads.v1beta1.Workload.KajEnrollmentState|keyof typeof google.cloud.assuredworkloads.v1beta1.Workload.KajEnrollmentState);

                    /** Workload enableSovereignControls. */
                    public enableSovereignControls: boolean;

                    /** Workload saaEnrollmentResponse. */
                    public saaEnrollmentResponse?: (google.cloud.assuredworkloads.v1beta1.Workload.ISaaEnrollmentResponse|null);

                    /** Workload compliantButDisallowedServices. */
                    public compliantButDisallowedServices: string[];

                    /** Workload complianceRegimeSettings. */
                    public complianceRegimeSettings?: ("il4Settings"|"cjisSettings"|"fedrampHighSettings"|"fedrampModerateSettings");

                    /**
                     * Creates a new Workload instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Workload instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1beta1.IWorkload): google.cloud.assuredworkloads.v1beta1.Workload;

                    /**
                     * Encodes the specified Workload message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.verify|verify} messages.
                     * @param message Workload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1beta1.IWorkload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Workload message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.verify|verify} messages.
                     * @param message Workload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.IWorkload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Workload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Workload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.Workload;

                    /**
                     * Decodes a Workload message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Workload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.Workload;

                    /**
                     * Verifies a Workload message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Workload message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Workload
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.Workload;

                    /**
                     * Creates a plain object from a Workload message. Also converts values to other types if specified.
                     * @param message Workload
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1beta1.Workload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Workload to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Workload
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Workload {

                    /** Properties of a ResourceInfo. */
                    interface IResourceInfo {

                        /** ResourceInfo resourceId */
                        resourceId?: (number|Long|string|null);

                        /** ResourceInfo resourceType */
                        resourceType?: (google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo.ResourceType|keyof typeof google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo.ResourceType|null);
                    }

                    /** Represents a ResourceInfo. */
                    class ResourceInfo implements IResourceInfo {

                        /**
                         * Constructs a new ResourceInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.assuredworkloads.v1beta1.Workload.IResourceInfo);

                        /** ResourceInfo resourceId. */
                        public resourceId: (number|Long|string);

                        /** ResourceInfo resourceType. */
                        public resourceType: (google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo.ResourceType|keyof typeof google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo.ResourceType);

                        /**
                         * Creates a new ResourceInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceInfo instance
                         */
                        public static create(properties?: google.cloud.assuredworkloads.v1beta1.Workload.IResourceInfo): google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo;

                        /**
                         * Encodes the specified ResourceInfo message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo.verify|verify} messages.
                         * @param message ResourceInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.assuredworkloads.v1beta1.Workload.IResourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceInfo message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo.verify|verify} messages.
                         * @param message ResourceInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.Workload.IResourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo;

                        /**
                         * Decodes a ResourceInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo;

                        /**
                         * Creates a plain object from a ResourceInfo message. Also converts values to other types if specified.
                         * @param message ResourceInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResourceInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ResourceInfo {

                        /** ResourceType enum. */
                        enum ResourceType {
                            RESOURCE_TYPE_UNSPECIFIED = 0,
                            CONSUMER_PROJECT = 1,
                            CONSUMER_FOLDER = 4,
                            ENCRYPTION_KEYS_PROJECT = 2,
                            KEYRING = 3
                        }
                    }

                    /** ComplianceRegime enum. */
                    enum ComplianceRegime {
                        COMPLIANCE_REGIME_UNSPECIFIED = 0,
                        IL4 = 1,
                        CJIS = 2,
                        FEDRAMP_HIGH = 3,
                        FEDRAMP_MODERATE = 4,
                        US_REGIONAL_ACCESS = 5,
                        HIPAA = 6,
                        HITRUST = 7,
                        EU_REGIONS_AND_SUPPORT = 8,
                        CA_REGIONS_AND_SUPPORT = 9,
                        ITAR = 10,
                        AU_REGIONS_AND_US_SUPPORT = 11
                    }

                    /** Properties of a KMSSettings. */
                    interface IKMSSettings {

                        /** KMSSettings nextRotationTime */
                        nextRotationTime?: (google.protobuf.ITimestamp|null);

                        /** KMSSettings rotationPeriod */
                        rotationPeriod?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a KMSSettings. */
                    class KMSSettings implements IKMSSettings {

                        /**
                         * Constructs a new KMSSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings);

                        /** KMSSettings nextRotationTime. */
                        public nextRotationTime?: (google.protobuf.ITimestamp|null);

                        /** KMSSettings rotationPeriod. */
                        public rotationPeriod?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new KMSSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns KMSSettings instance
                         */
                        public static create(properties?: google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings): google.cloud.assuredworkloads.v1beta1.Workload.KMSSettings;

                        /**
                         * Encodes the specified KMSSettings message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.KMSSettings.verify|verify} messages.
                         * @param message KMSSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified KMSSettings message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.KMSSettings.verify|verify} messages.
                         * @param message KMSSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a KMSSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns KMSSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.Workload.KMSSettings;

                        /**
                         * Decodes a KMSSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns KMSSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.Workload.KMSSettings;

                        /**
                         * Verifies a KMSSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a KMSSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns KMSSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.Workload.KMSSettings;

                        /**
                         * Creates a plain object from a KMSSettings message. Also converts values to other types if specified.
                         * @param message KMSSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.assuredworkloads.v1beta1.Workload.KMSSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this KMSSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for KMSSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a IL4Settings. */
                    interface IIL4Settings {

                        /** IL4Settings kmsSettings */
                        kmsSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings|null);
                    }

                    /** Represents a IL4Settings. */
                    class IL4Settings implements IIL4Settings {

                        /**
                         * Constructs a new IL4Settings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.assuredworkloads.v1beta1.Workload.IIL4Settings);

                        /** IL4Settings kmsSettings. */
                        public kmsSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings|null);

                        /**
                         * Creates a new IL4Settings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IL4Settings instance
                         */
                        public static create(properties?: google.cloud.assuredworkloads.v1beta1.Workload.IIL4Settings): google.cloud.assuredworkloads.v1beta1.Workload.IL4Settings;

                        /**
                         * Encodes the specified IL4Settings message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.IL4Settings.verify|verify} messages.
                         * @param message IL4Settings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.assuredworkloads.v1beta1.Workload.IIL4Settings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IL4Settings message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.IL4Settings.verify|verify} messages.
                         * @param message IL4Settings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.Workload.IIL4Settings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a IL4Settings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IL4Settings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.Workload.IL4Settings;

                        /**
                         * Decodes a IL4Settings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IL4Settings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.Workload.IL4Settings;

                        /**
                         * Verifies a IL4Settings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a IL4Settings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IL4Settings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.Workload.IL4Settings;

                        /**
                         * Creates a plain object from a IL4Settings message. Also converts values to other types if specified.
                         * @param message IL4Settings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.assuredworkloads.v1beta1.Workload.IL4Settings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IL4Settings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IL4Settings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CJISSettings. */
                    interface ICJISSettings {

                        /** CJISSettings kmsSettings */
                        kmsSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings|null);
                    }

                    /** Represents a CJISSettings. */
                    class CJISSettings implements ICJISSettings {

                        /**
                         * Constructs a new CJISSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.assuredworkloads.v1beta1.Workload.ICJISSettings);

                        /** CJISSettings kmsSettings. */
                        public kmsSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings|null);

                        /**
                         * Creates a new CJISSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CJISSettings instance
                         */
                        public static create(properties?: google.cloud.assuredworkloads.v1beta1.Workload.ICJISSettings): google.cloud.assuredworkloads.v1beta1.Workload.CJISSettings;

                        /**
                         * Encodes the specified CJISSettings message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.CJISSettings.verify|verify} messages.
                         * @param message CJISSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.assuredworkloads.v1beta1.Workload.ICJISSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CJISSettings message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.CJISSettings.verify|verify} messages.
                         * @param message CJISSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.Workload.ICJISSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CJISSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CJISSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.Workload.CJISSettings;

                        /**
                         * Decodes a CJISSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CJISSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.Workload.CJISSettings;

                        /**
                         * Verifies a CJISSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CJISSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CJISSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.Workload.CJISSettings;

                        /**
                         * Creates a plain object from a CJISSettings message. Also converts values to other types if specified.
                         * @param message CJISSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.assuredworkloads.v1beta1.Workload.CJISSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CJISSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CJISSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FedrampHighSettings. */
                    interface IFedrampHighSettings {

                        /** FedrampHighSettings kmsSettings */
                        kmsSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings|null);
                    }

                    /** Represents a FedrampHighSettings. */
                    class FedrampHighSettings implements IFedrampHighSettings {

                        /**
                         * Constructs a new FedrampHighSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.assuredworkloads.v1beta1.Workload.IFedrampHighSettings);

                        /** FedrampHighSettings kmsSettings. */
                        public kmsSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings|null);

                        /**
                         * Creates a new FedrampHighSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FedrampHighSettings instance
                         */
                        public static create(properties?: google.cloud.assuredworkloads.v1beta1.Workload.IFedrampHighSettings): google.cloud.assuredworkloads.v1beta1.Workload.FedrampHighSettings;

                        /**
                         * Encodes the specified FedrampHighSettings message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.FedrampHighSettings.verify|verify} messages.
                         * @param message FedrampHighSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.assuredworkloads.v1beta1.Workload.IFedrampHighSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FedrampHighSettings message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.FedrampHighSettings.verify|verify} messages.
                         * @param message FedrampHighSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.Workload.IFedrampHighSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FedrampHighSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FedrampHighSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.Workload.FedrampHighSettings;

                        /**
                         * Decodes a FedrampHighSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FedrampHighSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.Workload.FedrampHighSettings;

                        /**
                         * Verifies a FedrampHighSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FedrampHighSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FedrampHighSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.Workload.FedrampHighSettings;

                        /**
                         * Creates a plain object from a FedrampHighSettings message. Also converts values to other types if specified.
                         * @param message FedrampHighSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.assuredworkloads.v1beta1.Workload.FedrampHighSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FedrampHighSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FedrampHighSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FedrampModerateSettings. */
                    interface IFedrampModerateSettings {

                        /** FedrampModerateSettings kmsSettings */
                        kmsSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings|null);
                    }

                    /** Represents a FedrampModerateSettings. */
                    class FedrampModerateSettings implements IFedrampModerateSettings {

                        /**
                         * Constructs a new FedrampModerateSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.assuredworkloads.v1beta1.Workload.IFedrampModerateSettings);

                        /** FedrampModerateSettings kmsSettings. */
                        public kmsSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IKMSSettings|null);

                        /**
                         * Creates a new FedrampModerateSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FedrampModerateSettings instance
                         */
                        public static create(properties?: google.cloud.assuredworkloads.v1beta1.Workload.IFedrampModerateSettings): google.cloud.assuredworkloads.v1beta1.Workload.FedrampModerateSettings;

                        /**
                         * Encodes the specified FedrampModerateSettings message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.FedrampModerateSettings.verify|verify} messages.
                         * @param message FedrampModerateSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.assuredworkloads.v1beta1.Workload.IFedrampModerateSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FedrampModerateSettings message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.FedrampModerateSettings.verify|verify} messages.
                         * @param message FedrampModerateSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.Workload.IFedrampModerateSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FedrampModerateSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FedrampModerateSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.Workload.FedrampModerateSettings;

                        /**
                         * Decodes a FedrampModerateSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FedrampModerateSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.Workload.FedrampModerateSettings;

                        /**
                         * Verifies a FedrampModerateSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FedrampModerateSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FedrampModerateSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.Workload.FedrampModerateSettings;

                        /**
                         * Creates a plain object from a FedrampModerateSettings message. Also converts values to other types if specified.
                         * @param message FedrampModerateSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.assuredworkloads.v1beta1.Workload.FedrampModerateSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FedrampModerateSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FedrampModerateSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ResourceSettings. */
                    interface IResourceSettings {

                        /** ResourceSettings resourceId */
                        resourceId?: (string|null);

                        /** ResourceSettings resourceType */
                        resourceType?: (google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo.ResourceType|keyof typeof google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo.ResourceType|null);

                        /** ResourceSettings displayName */
                        displayName?: (string|null);
                    }

                    /** Represents a ResourceSettings. */
                    class ResourceSettings implements IResourceSettings {

                        /**
                         * Constructs a new ResourceSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.assuredworkloads.v1beta1.Workload.IResourceSettings);

                        /** ResourceSettings resourceId. */
                        public resourceId: string;

                        /** ResourceSettings resourceType. */
                        public resourceType: (google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo.ResourceType|keyof typeof google.cloud.assuredworkloads.v1beta1.Workload.ResourceInfo.ResourceType);

                        /** ResourceSettings displayName. */
                        public displayName: string;

                        /**
                         * Creates a new ResourceSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceSettings instance
                         */
                        public static create(properties?: google.cloud.assuredworkloads.v1beta1.Workload.IResourceSettings): google.cloud.assuredworkloads.v1beta1.Workload.ResourceSettings;

                        /**
                         * Encodes the specified ResourceSettings message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.ResourceSettings.verify|verify} messages.
                         * @param message ResourceSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.assuredworkloads.v1beta1.Workload.IResourceSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceSettings message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.ResourceSettings.verify|verify} messages.
                         * @param message ResourceSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.Workload.IResourceSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.Workload.ResourceSettings;

                        /**
                         * Decodes a ResourceSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.Workload.ResourceSettings;

                        /**
                         * Verifies a ResourceSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResourceSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResourceSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.Workload.ResourceSettings;

                        /**
                         * Creates a plain object from a ResourceSettings message. Also converts values to other types if specified.
                         * @param message ResourceSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.assuredworkloads.v1beta1.Workload.ResourceSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResourceSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** KajEnrollmentState enum. */
                    enum KajEnrollmentState {
                        KAJ_ENROLLMENT_STATE_UNSPECIFIED = 0,
                        KAJ_ENROLLMENT_STATE_PENDING = 1,
                        KAJ_ENROLLMENT_STATE_COMPLETE = 2
                    }

                    /** Properties of a SaaEnrollmentResponse. */
                    interface ISaaEnrollmentResponse {

                        /** SaaEnrollmentResponse setupStatus */
                        setupStatus?: (google.cloud.assuredworkloads.v1beta1.Workload.SaaEnrollmentResponse.SetupState|keyof typeof google.cloud.assuredworkloads.v1beta1.Workload.SaaEnrollmentResponse.SetupState|null);

                        /** SaaEnrollmentResponse setupErrors */
                        setupErrors?: (google.cloud.assuredworkloads.v1beta1.Workload.SaaEnrollmentResponse.SetupError[]|null);
                    }

                    /** Represents a SaaEnrollmentResponse. */
                    class SaaEnrollmentResponse implements ISaaEnrollmentResponse {

                        /**
                         * Constructs a new SaaEnrollmentResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.assuredworkloads.v1beta1.Workload.ISaaEnrollmentResponse);

                        /** SaaEnrollmentResponse setupStatus. */
                        public setupStatus?: (google.cloud.assuredworkloads.v1beta1.Workload.SaaEnrollmentResponse.SetupState|keyof typeof google.cloud.assuredworkloads.v1beta1.Workload.SaaEnrollmentResponse.SetupState|null);

                        /** SaaEnrollmentResponse setupErrors. */
                        public setupErrors: google.cloud.assuredworkloads.v1beta1.Workload.SaaEnrollmentResponse.SetupError[];

                        /** SaaEnrollmentResponse _setupStatus. */
                        public _setupStatus?: "setupStatus";

                        /**
                         * Creates a new SaaEnrollmentResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SaaEnrollmentResponse instance
                         */
                        public static create(properties?: google.cloud.assuredworkloads.v1beta1.Workload.ISaaEnrollmentResponse): google.cloud.assuredworkloads.v1beta1.Workload.SaaEnrollmentResponse;

                        /**
                         * Encodes the specified SaaEnrollmentResponse message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.SaaEnrollmentResponse.verify|verify} messages.
                         * @param message SaaEnrollmentResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.assuredworkloads.v1beta1.Workload.ISaaEnrollmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SaaEnrollmentResponse message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.Workload.SaaEnrollmentResponse.verify|verify} messages.
                         * @param message SaaEnrollmentResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.Workload.ISaaEnrollmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SaaEnrollmentResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SaaEnrollmentResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.Workload.SaaEnrollmentResponse;

                        /**
                         * Decodes a SaaEnrollmentResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SaaEnrollmentResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.Workload.SaaEnrollmentResponse;

                        /**
                         * Verifies a SaaEnrollmentResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SaaEnrollmentResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SaaEnrollmentResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.Workload.SaaEnrollmentResponse;

                        /**
                         * Creates a plain object from a SaaEnrollmentResponse message. Also converts values to other types if specified.
                         * @param message SaaEnrollmentResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.assuredworkloads.v1beta1.Workload.SaaEnrollmentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SaaEnrollmentResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SaaEnrollmentResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SaaEnrollmentResponse {

                        /** SetupState enum. */
                        enum SetupState {
                            SETUP_STATE_UNSPECIFIED = 0,
                            STATUS_PENDING = 1,
                            STATUS_COMPLETE = 2
                        }

                        /** SetupError enum. */
                        enum SetupError {
                            SETUP_ERROR_UNSPECIFIED = 0,
                            ERROR_INVALID_BASE_SETUP = 1,
                            ERROR_MISSING_EXTERNAL_SIGNING_KEY = 2,
                            ERROR_NOT_ALL_SERVICES_ENROLLED = 3,
                            ERROR_SETUP_CHECK_FAILED = 4
                        }
                    }
                }

                /** Properties of a CreateWorkloadOperationMetadata. */
                interface ICreateWorkloadOperationMetadata {

                    /** CreateWorkloadOperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CreateWorkloadOperationMetadata displayName */
                    displayName?: (string|null);

                    /** CreateWorkloadOperationMetadata parent */
                    parent?: (string|null);

                    /** CreateWorkloadOperationMetadata complianceRegime */
                    complianceRegime?: (google.cloud.assuredworkloads.v1beta1.Workload.ComplianceRegime|keyof typeof google.cloud.assuredworkloads.v1beta1.Workload.ComplianceRegime|null);

                    /** CreateWorkloadOperationMetadata resourceSettings */
                    resourceSettings?: (google.cloud.assuredworkloads.v1beta1.Workload.IResourceSettings[]|null);
                }

                /** Represents a CreateWorkloadOperationMetadata. */
                class CreateWorkloadOperationMetadata implements ICreateWorkloadOperationMetadata {

                    /**
                     * Constructs a new CreateWorkloadOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.assuredworkloads.v1beta1.ICreateWorkloadOperationMetadata);

                    /** CreateWorkloadOperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CreateWorkloadOperationMetadata displayName. */
                    public displayName: string;

                    /** CreateWorkloadOperationMetadata parent. */
                    public parent: string;

                    /** CreateWorkloadOperationMetadata complianceRegime. */
                    public complianceRegime: (google.cloud.assuredworkloads.v1beta1.Workload.ComplianceRegime|keyof typeof google.cloud.assuredworkloads.v1beta1.Workload.ComplianceRegime);

                    /** CreateWorkloadOperationMetadata resourceSettings. */
                    public resourceSettings: google.cloud.assuredworkloads.v1beta1.Workload.IResourceSettings[];

                    /**
                     * Creates a new CreateWorkloadOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkloadOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.assuredworkloads.v1beta1.ICreateWorkloadOperationMetadata): google.cloud.assuredworkloads.v1beta1.CreateWorkloadOperationMetadata;

                    /**
                     * Encodes the specified CreateWorkloadOperationMetadata message. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.CreateWorkloadOperationMetadata.verify|verify} messages.
                     * @param message CreateWorkloadOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.assuredworkloads.v1beta1.ICreateWorkloadOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkloadOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.assuredworkloads.v1beta1.CreateWorkloadOperationMetadata.verify|verify} messages.
                     * @param message CreateWorkloadOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.assuredworkloads.v1beta1.ICreateWorkloadOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkloadOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkloadOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.assuredworkloads.v1beta1.CreateWorkloadOperationMetadata;

                    /**
                     * Decodes a CreateWorkloadOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkloadOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.assuredworkloads.v1beta1.CreateWorkloadOperationMetadata;

                    /**
                     * Verifies a CreateWorkloadOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkloadOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkloadOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.assuredworkloads.v1beta1.CreateWorkloadOperationMetadata;

                    /**
                     * Creates a plain object from a CreateWorkloadOperationMetadata message. Also converts values to other types if specified.
                     * @param message CreateWorkloadOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.assuredworkloads.v1beta1.CreateWorkloadOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkloadOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateWorkloadOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents an AssuredWorkloadsService */
                class AssuredWorkloadsService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AssuredWorkloadsService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AssuredWorkloadsService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AssuredWorkloadsService;

                    /**
                     * Calls CreateWorkload.
                     * @param request CreateWorkloadRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createWorkload(request: google.cloud.assuredworkloads.v1beta1.ICreateWorkloadRequest, callback: google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.CreateWorkloadCallback): void;

                    /**
                     * Calls CreateWorkload.
                     * @param request CreateWorkloadRequest message or plain object
                     * @returns Promise
                     */
                    public createWorkload(request: google.cloud.assuredworkloads.v1beta1.ICreateWorkloadRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateWorkload.
                     * @param request UpdateWorkloadRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Workload
                     */
                    public updateWorkload(request: google.cloud.assuredworkloads.v1beta1.IUpdateWorkloadRequest, callback: google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.UpdateWorkloadCallback): void;

                    /**
                     * Calls UpdateWorkload.
                     * @param request UpdateWorkloadRequest message or plain object
                     * @returns Promise
                     */
                    public updateWorkload(request: google.cloud.assuredworkloads.v1beta1.IUpdateWorkloadRequest): Promise<google.cloud.assuredworkloads.v1beta1.Workload>;

                    /**
                     * Calls RestrictAllowedResources.
                     * @param request RestrictAllowedResourcesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RestrictAllowedResourcesResponse
                     */
                    public restrictAllowedResources(request: google.cloud.assuredworkloads.v1beta1.IRestrictAllowedResourcesRequest, callback: google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.RestrictAllowedResourcesCallback): void;

                    /**
                     * Calls RestrictAllowedResources.
                     * @param request RestrictAllowedResourcesRequest message or plain object
                     * @returns Promise
                     */
                    public restrictAllowedResources(request: google.cloud.assuredworkloads.v1beta1.IRestrictAllowedResourcesRequest): Promise<google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesResponse>;

                    /**
                     * Calls DeleteWorkload.
                     * @param request DeleteWorkloadRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteWorkload(request: google.cloud.assuredworkloads.v1beta1.IDeleteWorkloadRequest, callback: google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.DeleteWorkloadCallback): void;

                    /**
                     * Calls DeleteWorkload.
                     * @param request DeleteWorkloadRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWorkload(request: google.cloud.assuredworkloads.v1beta1.IDeleteWorkloadRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetWorkload.
                     * @param request GetWorkloadRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Workload
                     */
                    public getWorkload(request: google.cloud.assuredworkloads.v1beta1.IGetWorkloadRequest, callback: google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.GetWorkloadCallback): void;

                    /**
                     * Calls GetWorkload.
                     * @param request GetWorkloadRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkload(request: google.cloud.assuredworkloads.v1beta1.IGetWorkloadRequest): Promise<google.cloud.assuredworkloads.v1beta1.Workload>;

                    /**
                     * Calls AnalyzeWorkloadMove.
                     * @param request AnalyzeWorkloadMoveRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnalyzeWorkloadMoveResponse
                     */
                    public analyzeWorkloadMove(request: google.cloud.assuredworkloads.v1beta1.IAnalyzeWorkloadMoveRequest, callback: google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.AnalyzeWorkloadMoveCallback): void;

                    /**
                     * Calls AnalyzeWorkloadMove.
                     * @param request AnalyzeWorkloadMoveRequest message or plain object
                     * @returns Promise
                     */
                    public analyzeWorkloadMove(request: google.cloud.assuredworkloads.v1beta1.IAnalyzeWorkloadMoveRequest): Promise<google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveResponse>;

                    /**
                     * Calls ListWorkloads.
                     * @param request ListWorkloadsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkloadsResponse
                     */
                    public listWorkloads(request: google.cloud.assuredworkloads.v1beta1.IListWorkloadsRequest, callback: google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService.ListWorkloadsCallback): void;

                    /**
                     * Calls ListWorkloads.
                     * @param request ListWorkloadsRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkloads(request: google.cloud.assuredworkloads.v1beta1.IListWorkloadsRequest): Promise<google.cloud.assuredworkloads.v1beta1.ListWorkloadsResponse>;
                }

                namespace AssuredWorkloadsService {

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService|createWorkload}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateWorkloadCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService|updateWorkload}.
                     * @param error Error, if any
                     * @param [response] Workload
                     */
                    type UpdateWorkloadCallback = (error: (Error|null), response?: google.cloud.assuredworkloads.v1beta1.Workload) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService|restrictAllowedResources}.
                     * @param error Error, if any
                     * @param [response] RestrictAllowedResourcesResponse
                     */
                    type RestrictAllowedResourcesCallback = (error: (Error|null), response?: google.cloud.assuredworkloads.v1beta1.RestrictAllowedResourcesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService|deleteWorkload}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteWorkloadCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService|getWorkload}.
                     * @param error Error, if any
                     * @param [response] Workload
                     */
                    type GetWorkloadCallback = (error: (Error|null), response?: google.cloud.assuredworkloads.v1beta1.Workload) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService|analyzeWorkloadMove}.
                     * @param error Error, if any
                     * @param [response] AnalyzeWorkloadMoveResponse
                     */
                    type AnalyzeWorkloadMoveCallback = (error: (Error|null), response?: google.cloud.assuredworkloads.v1beta1.AnalyzeWorkloadMoveResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService|listWorkloads}.
                     * @param error Error, if any
                     * @param [response] ListWorkloadsResponse
                     */
                    type ListWorkloadsCallback = (error: (Error|null), response?: google.cloud.assuredworkloads.v1beta1.ListWorkloadsResponse) => void;
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
            STREET_VIEW = 4
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

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

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

            /** FieldOptions target */
            target?: (google.protobuf.FieldOptions.OptionTargetType|keyof typeof google.protobuf.FieldOptions.OptionTargetType|null);

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

            /** FieldOptions target. */
            public target: (google.protobuf.FieldOptions.OptionTargetType|keyof typeof google.protobuf.FieldOptions.OptionTargetType);

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

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

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
