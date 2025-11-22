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

        /** Namespace cloudsecuritycompliance. */
        namespace cloudsecuritycompliance {

            /** Namespace v1. */
            namespace v1 {

                /** Represents an Audit */
                class Audit extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Audit service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Audit service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Audit;

                    /**
                     * Calls GenerateFrameworkAuditScopeReport.
                     * @param request GenerateFrameworkAuditScopeReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateFrameworkAuditScopeReportResponse
                     */
                    public generateFrameworkAuditScopeReport(request: google.cloud.cloudsecuritycompliance.v1.IGenerateFrameworkAuditScopeReportRequest, callback: google.cloud.cloudsecuritycompliance.v1.Audit.GenerateFrameworkAuditScopeReportCallback): void;

                    /**
                     * Calls GenerateFrameworkAuditScopeReport.
                     * @param request GenerateFrameworkAuditScopeReportRequest message or plain object
                     * @returns Promise
                     */
                    public generateFrameworkAuditScopeReport(request: google.cloud.cloudsecuritycompliance.v1.IGenerateFrameworkAuditScopeReportRequest): Promise<google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportResponse>;

                    /**
                     * Calls CreateFrameworkAudit.
                     * @param request CreateFrameworkAuditRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createFrameworkAudit(request: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkAuditRequest, callback: google.cloud.cloudsecuritycompliance.v1.Audit.CreateFrameworkAuditCallback): void;

                    /**
                     * Calls CreateFrameworkAudit.
                     * @param request CreateFrameworkAuditRequest message or plain object
                     * @returns Promise
                     */
                    public createFrameworkAudit(request: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkAuditRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListFrameworkAudits.
                     * @param request ListFrameworkAuditsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFrameworkAuditsResponse
                     */
                    public listFrameworkAudits(request: google.cloud.cloudsecuritycompliance.v1.IListFrameworkAuditsRequest, callback: google.cloud.cloudsecuritycompliance.v1.Audit.ListFrameworkAuditsCallback): void;

                    /**
                     * Calls ListFrameworkAudits.
                     * @param request ListFrameworkAuditsRequest message or plain object
                     * @returns Promise
                     */
                    public listFrameworkAudits(request: google.cloud.cloudsecuritycompliance.v1.IListFrameworkAuditsRequest): Promise<google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsResponse>;

                    /**
                     * Calls GetFrameworkAudit.
                     * @param request GetFrameworkAuditRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FrameworkAudit
                     */
                    public getFrameworkAudit(request: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkAuditRequest, callback: google.cloud.cloudsecuritycompliance.v1.Audit.GetFrameworkAuditCallback): void;

                    /**
                     * Calls GetFrameworkAudit.
                     * @param request GetFrameworkAuditRequest message or plain object
                     * @returns Promise
                     */
                    public getFrameworkAudit(request: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkAuditRequest): Promise<google.cloud.cloudsecuritycompliance.v1.FrameworkAudit>;
                }

                namespace Audit {

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Audit|generateFrameworkAuditScopeReport}.
                     * @param error Error, if any
                     * @param [response] GenerateFrameworkAuditScopeReportResponse
                     */
                    type GenerateFrameworkAuditScopeReportCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Audit|createFrameworkAudit}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateFrameworkAuditCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Audit|listFrameworkAudits}.
                     * @param error Error, if any
                     * @param [response] ListFrameworkAuditsResponse
                     */
                    type ListFrameworkAuditsCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Audit|getFrameworkAudit}.
                     * @param error Error, if any
                     * @param [response] FrameworkAudit
                     */
                    type GetFrameworkAuditCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.FrameworkAudit) => void;
                }

                /** ComplianceState enum. */
                enum ComplianceState {
                    COMPLIANCE_STATE_UNSPECIFIED = 0,
                    COMPLIANT = 1,
                    VIOLATION = 2,
                    MANUAL_REVIEW_NEEDED = 3,
                    ERROR = 4,
                    AUDIT_NOT_SUPPORTED = 5
                }

                /** Properties of a GenerateFrameworkAuditScopeReportRequest. */
                interface IGenerateFrameworkAuditScopeReportRequest {

                    /** GenerateFrameworkAuditScopeReportRequest scope */
                    scope?: (string|null);

                    /** GenerateFrameworkAuditScopeReportRequest reportFormat */
                    reportFormat?: (google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportRequest.Format|keyof typeof google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportRequest.Format|null);

                    /** GenerateFrameworkAuditScopeReportRequest complianceFramework */
                    complianceFramework?: (string|null);
                }

                /** Represents a GenerateFrameworkAuditScopeReportRequest. */
                class GenerateFrameworkAuditScopeReportRequest implements IGenerateFrameworkAuditScopeReportRequest {

                    /**
                     * Constructs a new GenerateFrameworkAuditScopeReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IGenerateFrameworkAuditScopeReportRequest);

                    /** GenerateFrameworkAuditScopeReportRequest scope. */
                    public scope: string;

                    /** GenerateFrameworkAuditScopeReportRequest reportFormat. */
                    public reportFormat: (google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportRequest.Format|keyof typeof google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportRequest.Format);

                    /** GenerateFrameworkAuditScopeReportRequest complianceFramework. */
                    public complianceFramework: string;

                    /**
                     * Creates a new GenerateFrameworkAuditScopeReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateFrameworkAuditScopeReportRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IGenerateFrameworkAuditScopeReportRequest): google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportRequest;

                    /**
                     * Encodes the specified GenerateFrameworkAuditScopeReportRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportRequest.verify|verify} messages.
                     * @param message GenerateFrameworkAuditScopeReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IGenerateFrameworkAuditScopeReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateFrameworkAuditScopeReportRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportRequest.verify|verify} messages.
                     * @param message GenerateFrameworkAuditScopeReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IGenerateFrameworkAuditScopeReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateFrameworkAuditScopeReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateFrameworkAuditScopeReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportRequest;

                    /**
                     * Decodes a GenerateFrameworkAuditScopeReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateFrameworkAuditScopeReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportRequest;

                    /**
                     * Verifies a GenerateFrameworkAuditScopeReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateFrameworkAuditScopeReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateFrameworkAuditScopeReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportRequest;

                    /**
                     * Creates a plain object from a GenerateFrameworkAuditScopeReportRequest message. Also converts values to other types if specified.
                     * @param message GenerateFrameworkAuditScopeReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateFrameworkAuditScopeReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateFrameworkAuditScopeReportRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace GenerateFrameworkAuditScopeReportRequest {

                    /** Format enum. */
                    enum Format {
                        FORMAT_UNSPECIFIED = 0,
                        ODF = 1
                    }
                }

                /** Properties of a GenerateFrameworkAuditScopeReportResponse. */
                interface IGenerateFrameworkAuditScopeReportResponse {

                    /** GenerateFrameworkAuditScopeReportResponse scopeReportContents */
                    scopeReportContents?: (Uint8Array|Buffer|string|null);

                    /** GenerateFrameworkAuditScopeReportResponse name */
                    name?: (string|null);

                    /** GenerateFrameworkAuditScopeReportResponse complianceFramework */
                    complianceFramework?: (string|null);
                }

                /** Represents a GenerateFrameworkAuditScopeReportResponse. */
                class GenerateFrameworkAuditScopeReportResponse implements IGenerateFrameworkAuditScopeReportResponse {

                    /**
                     * Constructs a new GenerateFrameworkAuditScopeReportResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IGenerateFrameworkAuditScopeReportResponse);

                    /** GenerateFrameworkAuditScopeReportResponse scopeReportContents. */
                    public scopeReportContents?: (Uint8Array|Buffer|string|null);

                    /** GenerateFrameworkAuditScopeReportResponse name. */
                    public name: string;

                    /** GenerateFrameworkAuditScopeReportResponse complianceFramework. */
                    public complianceFramework: string;

                    /** GenerateFrameworkAuditScopeReportResponse auditReport. */
                    public auditReport?: "scopeReportContents";

                    /**
                     * Creates a new GenerateFrameworkAuditScopeReportResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateFrameworkAuditScopeReportResponse instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IGenerateFrameworkAuditScopeReportResponse): google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportResponse;

                    /**
                     * Encodes the specified GenerateFrameworkAuditScopeReportResponse message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportResponse.verify|verify} messages.
                     * @param message GenerateFrameworkAuditScopeReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IGenerateFrameworkAuditScopeReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateFrameworkAuditScopeReportResponse message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportResponse.verify|verify} messages.
                     * @param message GenerateFrameworkAuditScopeReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IGenerateFrameworkAuditScopeReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateFrameworkAuditScopeReportResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateFrameworkAuditScopeReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportResponse;

                    /**
                     * Decodes a GenerateFrameworkAuditScopeReportResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateFrameworkAuditScopeReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportResponse;

                    /**
                     * Verifies a GenerateFrameworkAuditScopeReportResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateFrameworkAuditScopeReportResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateFrameworkAuditScopeReportResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportResponse;

                    /**
                     * Creates a plain object from a GenerateFrameworkAuditScopeReportResponse message. Also converts values to other types if specified.
                     * @param message GenerateFrameworkAuditScopeReportResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.GenerateFrameworkAuditScopeReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateFrameworkAuditScopeReportResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateFrameworkAuditScopeReportResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReportSummary. */
                interface IReportSummary {

                    /** ReportSummary totalCount */
                    totalCount?: (number|null);

                    /** ReportSummary compliantCount */
                    compliantCount?: (number|null);

                    /** ReportSummary violationCount */
                    violationCount?: (number|null);

                    /** ReportSummary manualReviewNeededCount */
                    manualReviewNeededCount?: (number|null);

                    /** ReportSummary errorCount */
                    errorCount?: (number|null);
                }

                /** Represents a ReportSummary. */
                class ReportSummary implements IReportSummary {

                    /**
                     * Constructs a new ReportSummary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IReportSummary);

                    /** ReportSummary totalCount. */
                    public totalCount: number;

                    /** ReportSummary compliantCount. */
                    public compliantCount: number;

                    /** ReportSummary violationCount. */
                    public violationCount: number;

                    /** ReportSummary manualReviewNeededCount. */
                    public manualReviewNeededCount: number;

                    /** ReportSummary errorCount. */
                    public errorCount: number;

                    /**
                     * Creates a new ReportSummary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReportSummary instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IReportSummary): google.cloud.cloudsecuritycompliance.v1.ReportSummary;

                    /**
                     * Encodes the specified ReportSummary message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ReportSummary.verify|verify} messages.
                     * @param message ReportSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IReportSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReportSummary message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ReportSummary.verify|verify} messages.
                     * @param message ReportSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IReportSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReportSummary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReportSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ReportSummary;

                    /**
                     * Decodes a ReportSummary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReportSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ReportSummary;

                    /**
                     * Verifies a ReportSummary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReportSummary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReportSummary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ReportSummary;

                    /**
                     * Creates a plain object from a ReportSummary message. Also converts values to other types if specified.
                     * @param message ReportSummary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ReportSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReportSummary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReportSummary
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateFrameworkAuditRequest. */
                interface ICreateFrameworkAuditRequest {

                    /** CreateFrameworkAuditRequest parent */
                    parent?: (string|null);

                    /** CreateFrameworkAuditRequest frameworkAuditId */
                    frameworkAuditId?: (string|null);

                    /** CreateFrameworkAuditRequest frameworkAudit */
                    frameworkAudit?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkAudit|null);
                }

                /** Represents a CreateFrameworkAuditRequest. */
                class CreateFrameworkAuditRequest implements ICreateFrameworkAuditRequest {

                    /**
                     * Constructs a new CreateFrameworkAuditRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkAuditRequest);

                    /** CreateFrameworkAuditRequest parent. */
                    public parent: string;

                    /** CreateFrameworkAuditRequest frameworkAuditId. */
                    public frameworkAuditId: string;

                    /** CreateFrameworkAuditRequest frameworkAudit. */
                    public frameworkAudit?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkAudit|null);

                    /**
                     * Creates a new CreateFrameworkAuditRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateFrameworkAuditRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkAuditRequest): google.cloud.cloudsecuritycompliance.v1.CreateFrameworkAuditRequest;

                    /**
                     * Encodes the specified CreateFrameworkAuditRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CreateFrameworkAuditRequest.verify|verify} messages.
                     * @param message CreateFrameworkAuditRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkAuditRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateFrameworkAuditRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CreateFrameworkAuditRequest.verify|verify} messages.
                     * @param message CreateFrameworkAuditRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkAuditRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateFrameworkAuditRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateFrameworkAuditRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CreateFrameworkAuditRequest;

                    /**
                     * Decodes a CreateFrameworkAuditRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateFrameworkAuditRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CreateFrameworkAuditRequest;

                    /**
                     * Verifies a CreateFrameworkAuditRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateFrameworkAuditRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateFrameworkAuditRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CreateFrameworkAuditRequest;

                    /**
                     * Creates a plain object from a CreateFrameworkAuditRequest message. Also converts values to other types if specified.
                     * @param message CreateFrameworkAuditRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CreateFrameworkAuditRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateFrameworkAuditRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateFrameworkAuditRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FrameworkAuditDestination. */
                interface IFrameworkAuditDestination {

                    /** FrameworkAuditDestination bucket */
                    bucket?: (google.cloud.cloudsecuritycompliance.v1.IBucketDestination|null);
                }

                /** Represents a FrameworkAuditDestination. */
                class FrameworkAuditDestination implements IFrameworkAuditDestination {

                    /**
                     * Constructs a new FrameworkAuditDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkAuditDestination);

                    /** FrameworkAuditDestination bucket. */
                    public bucket?: (google.cloud.cloudsecuritycompliance.v1.IBucketDestination|null);

                    /** FrameworkAuditDestination destinationType. */
                    public destinationType?: "bucket";

                    /**
                     * Creates a new FrameworkAuditDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FrameworkAuditDestination instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkAuditDestination): google.cloud.cloudsecuritycompliance.v1.FrameworkAuditDestination;

                    /**
                     * Encodes the specified FrameworkAuditDestination message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkAuditDestination.verify|verify} messages.
                     * @param message FrameworkAuditDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkAuditDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FrameworkAuditDestination message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkAuditDestination.verify|verify} messages.
                     * @param message FrameworkAuditDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkAuditDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FrameworkAuditDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FrameworkAuditDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.FrameworkAuditDestination;

                    /**
                     * Decodes a FrameworkAuditDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FrameworkAuditDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.FrameworkAuditDestination;

                    /**
                     * Verifies a FrameworkAuditDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FrameworkAuditDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FrameworkAuditDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.FrameworkAuditDestination;

                    /**
                     * Creates a plain object from a FrameworkAuditDestination message. Also converts values to other types if specified.
                     * @param message FrameworkAuditDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.FrameworkAuditDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FrameworkAuditDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FrameworkAuditDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BucketDestination. */
                interface IBucketDestination {

                    /** BucketDestination bucketUri */
                    bucketUri?: (string|null);

                    /** BucketDestination frameworkAuditFormat */
                    frameworkAuditFormat?: (google.cloud.cloudsecuritycompliance.v1.BucketDestination.Format|keyof typeof google.cloud.cloudsecuritycompliance.v1.BucketDestination.Format|null);
                }

                /** Represents a BucketDestination. */
                class BucketDestination implements IBucketDestination {

                    /**
                     * Constructs a new BucketDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IBucketDestination);

                    /** BucketDestination bucketUri. */
                    public bucketUri: string;

                    /** BucketDestination frameworkAuditFormat. */
                    public frameworkAuditFormat: (google.cloud.cloudsecuritycompliance.v1.BucketDestination.Format|keyof typeof google.cloud.cloudsecuritycompliance.v1.BucketDestination.Format);

                    /**
                     * Creates a new BucketDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BucketDestination instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IBucketDestination): google.cloud.cloudsecuritycompliance.v1.BucketDestination;

                    /**
                     * Encodes the specified BucketDestination message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.BucketDestination.verify|verify} messages.
                     * @param message BucketDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IBucketDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BucketDestination message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.BucketDestination.verify|verify} messages.
                     * @param message BucketDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IBucketDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BucketDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BucketDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.BucketDestination;

                    /**
                     * Decodes a BucketDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BucketDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.BucketDestination;

                    /**
                     * Verifies a BucketDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BucketDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BucketDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.BucketDestination;

                    /**
                     * Creates a plain object from a BucketDestination message. Also converts values to other types if specified.
                     * @param message BucketDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.BucketDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BucketDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BucketDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BucketDestination {

                    /** Format enum. */
                    enum Format {
                        FORMAT_UNSPECIFIED = 0,
                        ODF = 1
                    }
                }

                /** Properties of a FrameworkAudit. */
                interface IFrameworkAudit {

                    /** FrameworkAudit name */
                    name?: (string|null);

                    /** FrameworkAudit frameworkAuditId */
                    frameworkAuditId?: (string|null);

                    /** FrameworkAudit complianceFramework */
                    complianceFramework?: (string|null);

                    /** FrameworkAudit scope */
                    scope?: (string|null);

                    /** FrameworkAudit frameworkAuditDestination */
                    frameworkAuditDestination?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkAuditDestination|null);

                    /** FrameworkAudit startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** FrameworkAudit finishTime */
                    finishTime?: (google.protobuf.ITimestamp|null);

                    /** FrameworkAudit complianceState */
                    complianceState?: (google.cloud.cloudsecuritycompliance.v1.ComplianceState|keyof typeof google.cloud.cloudsecuritycompliance.v1.ComplianceState|null);

                    /** FrameworkAudit reportSummary */
                    reportSummary?: (google.cloud.cloudsecuritycompliance.v1.IReportSummary|null);

                    /** FrameworkAudit cloudControlGroupAuditDetails */
                    cloudControlGroupAuditDetails?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlGroupAuditDetails[]|null);

                    /** FrameworkAudit cloudControlAuditDetails */
                    cloudControlAuditDetails?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlAuditDetails[]|null);

                    /** FrameworkAudit operationId */
                    operationId?: (string|null);

                    /** FrameworkAudit state */
                    state?: (google.cloud.cloudsecuritycompliance.v1.FrameworkAudit.State|keyof typeof google.cloud.cloudsecuritycompliance.v1.FrameworkAudit.State|null);
                }

                /** Represents a FrameworkAudit. */
                class FrameworkAudit implements IFrameworkAudit {

                    /**
                     * Constructs a new FrameworkAudit.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkAudit);

                    /** FrameworkAudit name. */
                    public name: string;

                    /** FrameworkAudit frameworkAuditId. */
                    public frameworkAuditId: string;

                    /** FrameworkAudit complianceFramework. */
                    public complianceFramework: string;

                    /** FrameworkAudit scope. */
                    public scope: string;

                    /** FrameworkAudit frameworkAuditDestination. */
                    public frameworkAuditDestination?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkAuditDestination|null);

                    /** FrameworkAudit startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** FrameworkAudit finishTime. */
                    public finishTime?: (google.protobuf.ITimestamp|null);

                    /** FrameworkAudit complianceState. */
                    public complianceState: (google.cloud.cloudsecuritycompliance.v1.ComplianceState|keyof typeof google.cloud.cloudsecuritycompliance.v1.ComplianceState);

                    /** FrameworkAudit reportSummary. */
                    public reportSummary?: (google.cloud.cloudsecuritycompliance.v1.IReportSummary|null);

                    /** FrameworkAudit cloudControlGroupAuditDetails. */
                    public cloudControlGroupAuditDetails: google.cloud.cloudsecuritycompliance.v1.ICloudControlGroupAuditDetails[];

                    /** FrameworkAudit cloudControlAuditDetails. */
                    public cloudControlAuditDetails: google.cloud.cloudsecuritycompliance.v1.ICloudControlAuditDetails[];

                    /** FrameworkAudit operationId. */
                    public operationId: string;

                    /** FrameworkAudit state. */
                    public state: (google.cloud.cloudsecuritycompliance.v1.FrameworkAudit.State|keyof typeof google.cloud.cloudsecuritycompliance.v1.FrameworkAudit.State);

                    /**
                     * Creates a new FrameworkAudit instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FrameworkAudit instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkAudit): google.cloud.cloudsecuritycompliance.v1.FrameworkAudit;

                    /**
                     * Encodes the specified FrameworkAudit message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkAudit.verify|verify} messages.
                     * @param message FrameworkAudit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkAudit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FrameworkAudit message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkAudit.verify|verify} messages.
                     * @param message FrameworkAudit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkAudit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FrameworkAudit message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FrameworkAudit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.FrameworkAudit;

                    /**
                     * Decodes a FrameworkAudit message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FrameworkAudit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.FrameworkAudit;

                    /**
                     * Verifies a FrameworkAudit message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FrameworkAudit message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FrameworkAudit
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.FrameworkAudit;

                    /**
                     * Creates a plain object from a FrameworkAudit message. Also converts values to other types if specified.
                     * @param message FrameworkAudit
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.FrameworkAudit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FrameworkAudit to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FrameworkAudit
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FrameworkAudit {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        SCHEDULED = 1,
                        RUNNING = 2,
                        UPLOADING = 3,
                        FAILED = 4,
                        SUCCEEDED = 5
                    }
                }

                /** Properties of a ListFrameworkAuditsRequest. */
                interface IListFrameworkAuditsRequest {

                    /** ListFrameworkAuditsRequest parent */
                    parent?: (string|null);

                    /** ListFrameworkAuditsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListFrameworkAuditsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListFrameworkAuditsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListFrameworkAuditsRequest. */
                class ListFrameworkAuditsRequest implements IListFrameworkAuditsRequest {

                    /**
                     * Constructs a new ListFrameworkAuditsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworkAuditsRequest);

                    /** ListFrameworkAuditsRequest parent. */
                    public parent: string;

                    /** ListFrameworkAuditsRequest pageSize. */
                    public pageSize: number;

                    /** ListFrameworkAuditsRequest pageToken. */
                    public pageToken: string;

                    /** ListFrameworkAuditsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListFrameworkAuditsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFrameworkAuditsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworkAuditsRequest): google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsRequest;

                    /**
                     * Encodes the specified ListFrameworkAuditsRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsRequest.verify|verify} messages.
                     * @param message ListFrameworkAuditsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworkAuditsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFrameworkAuditsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsRequest.verify|verify} messages.
                     * @param message ListFrameworkAuditsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworkAuditsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFrameworkAuditsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFrameworkAuditsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsRequest;

                    /**
                     * Decodes a ListFrameworkAuditsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFrameworkAuditsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsRequest;

                    /**
                     * Verifies a ListFrameworkAuditsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFrameworkAuditsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFrameworkAuditsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsRequest;

                    /**
                     * Creates a plain object from a ListFrameworkAuditsRequest message. Also converts values to other types if specified.
                     * @param message ListFrameworkAuditsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFrameworkAuditsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFrameworkAuditsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListFrameworkAuditsResponse. */
                interface IListFrameworkAuditsResponse {

                    /** ListFrameworkAuditsResponse frameworkAudits */
                    frameworkAudits?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkAudit[]|null);

                    /** ListFrameworkAuditsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListFrameworkAuditsResponse. */
                class ListFrameworkAuditsResponse implements IListFrameworkAuditsResponse {

                    /**
                     * Constructs a new ListFrameworkAuditsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworkAuditsResponse);

                    /** ListFrameworkAuditsResponse frameworkAudits. */
                    public frameworkAudits: google.cloud.cloudsecuritycompliance.v1.IFrameworkAudit[];

                    /** ListFrameworkAuditsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListFrameworkAuditsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFrameworkAuditsResponse instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworkAuditsResponse): google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsResponse;

                    /**
                     * Encodes the specified ListFrameworkAuditsResponse message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsResponse.verify|verify} messages.
                     * @param message ListFrameworkAuditsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworkAuditsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFrameworkAuditsResponse message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsResponse.verify|verify} messages.
                     * @param message ListFrameworkAuditsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworkAuditsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFrameworkAuditsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFrameworkAuditsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsResponse;

                    /**
                     * Decodes a ListFrameworkAuditsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFrameworkAuditsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsResponse;

                    /**
                     * Verifies a ListFrameworkAuditsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFrameworkAuditsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFrameworkAuditsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsResponse;

                    /**
                     * Creates a plain object from a ListFrameworkAuditsResponse message. Also converts values to other types if specified.
                     * @param message ListFrameworkAuditsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListFrameworkAuditsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFrameworkAuditsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFrameworkAuditsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetFrameworkAuditRequest. */
                interface IGetFrameworkAuditRequest {

                    /** GetFrameworkAuditRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFrameworkAuditRequest. */
                class GetFrameworkAuditRequest implements IGetFrameworkAuditRequest {

                    /**
                     * Constructs a new GetFrameworkAuditRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkAuditRequest);

                    /** GetFrameworkAuditRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFrameworkAuditRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFrameworkAuditRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkAuditRequest): google.cloud.cloudsecuritycompliance.v1.GetFrameworkAuditRequest;

                    /**
                     * Encodes the specified GetFrameworkAuditRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GetFrameworkAuditRequest.verify|verify} messages.
                     * @param message GetFrameworkAuditRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkAuditRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFrameworkAuditRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GetFrameworkAuditRequest.verify|verify} messages.
                     * @param message GetFrameworkAuditRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkAuditRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFrameworkAuditRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFrameworkAuditRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.GetFrameworkAuditRequest;

                    /**
                     * Decodes a GetFrameworkAuditRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFrameworkAuditRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.GetFrameworkAuditRequest;

                    /**
                     * Verifies a GetFrameworkAuditRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFrameworkAuditRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFrameworkAuditRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.GetFrameworkAuditRequest;

                    /**
                     * Creates a plain object from a GetFrameworkAuditRequest message. Also converts values to other types if specified.
                     * @param message GetFrameworkAuditRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.GetFrameworkAuditRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFrameworkAuditRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetFrameworkAuditRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudControlGroupAuditDetails. */
                interface ICloudControlGroupAuditDetails {

                    /** CloudControlGroupAuditDetails cloudControlGroupId */
                    cloudControlGroupId?: (string|null);

                    /** CloudControlGroupAuditDetails displayName */
                    displayName?: (string|null);

                    /** CloudControlGroupAuditDetails description */
                    description?: (string|null);

                    /** CloudControlGroupAuditDetails responsibilityType */
                    responsibilityType?: (string|null);

                    /** CloudControlGroupAuditDetails googleResponsibilityDescription */
                    googleResponsibilityDescription?: (string|null);

                    /** CloudControlGroupAuditDetails googleResponsibilityImplementation */
                    googleResponsibilityImplementation?: (string|null);

                    /** CloudControlGroupAuditDetails customerResponsibilityDescription */
                    customerResponsibilityDescription?: (string|null);

                    /** CloudControlGroupAuditDetails customerResponsibilityImplementation */
                    customerResponsibilityImplementation?: (string|null);

                    /** CloudControlGroupAuditDetails complianceState */
                    complianceState?: (google.cloud.cloudsecuritycompliance.v1.ComplianceState|keyof typeof google.cloud.cloudsecuritycompliance.v1.ComplianceState|null);

                    /** CloudControlGroupAuditDetails controlId */
                    controlId?: (string|null);

                    /** CloudControlGroupAuditDetails controlFamily */
                    controlFamily?: (google.cloud.cloudsecuritycompliance.v1.IControlFamily|null);

                    /** CloudControlGroupAuditDetails cloudControlDetails */
                    cloudControlDetails?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlAuditDetails[]|null);

                    /** CloudControlGroupAuditDetails reportSummary */
                    reportSummary?: (google.cloud.cloudsecuritycompliance.v1.IReportSummary|null);
                }

                /** Represents a CloudControlGroupAuditDetails. */
                class CloudControlGroupAuditDetails implements ICloudControlGroupAuditDetails {

                    /**
                     * Constructs a new CloudControlGroupAuditDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlGroupAuditDetails);

                    /** CloudControlGroupAuditDetails cloudControlGroupId. */
                    public cloudControlGroupId: string;

                    /** CloudControlGroupAuditDetails displayName. */
                    public displayName: string;

                    /** CloudControlGroupAuditDetails description. */
                    public description: string;

                    /** CloudControlGroupAuditDetails responsibilityType. */
                    public responsibilityType: string;

                    /** CloudControlGroupAuditDetails googleResponsibilityDescription. */
                    public googleResponsibilityDescription: string;

                    /** CloudControlGroupAuditDetails googleResponsibilityImplementation. */
                    public googleResponsibilityImplementation: string;

                    /** CloudControlGroupAuditDetails customerResponsibilityDescription. */
                    public customerResponsibilityDescription: string;

                    /** CloudControlGroupAuditDetails customerResponsibilityImplementation. */
                    public customerResponsibilityImplementation: string;

                    /** CloudControlGroupAuditDetails complianceState. */
                    public complianceState: (google.cloud.cloudsecuritycompliance.v1.ComplianceState|keyof typeof google.cloud.cloudsecuritycompliance.v1.ComplianceState);

                    /** CloudControlGroupAuditDetails controlId. */
                    public controlId: string;

                    /** CloudControlGroupAuditDetails controlFamily. */
                    public controlFamily?: (google.cloud.cloudsecuritycompliance.v1.IControlFamily|null);

                    /** CloudControlGroupAuditDetails cloudControlDetails. */
                    public cloudControlDetails: google.cloud.cloudsecuritycompliance.v1.ICloudControlAuditDetails[];

                    /** CloudControlGroupAuditDetails reportSummary. */
                    public reportSummary?: (google.cloud.cloudsecuritycompliance.v1.IReportSummary|null);

                    /**
                     * Creates a new CloudControlGroupAuditDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudControlGroupAuditDetails instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlGroupAuditDetails): google.cloud.cloudsecuritycompliance.v1.CloudControlGroupAuditDetails;

                    /**
                     * Encodes the specified CloudControlGroupAuditDetails message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlGroupAuditDetails.verify|verify} messages.
                     * @param message CloudControlGroupAuditDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlGroupAuditDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudControlGroupAuditDetails message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlGroupAuditDetails.verify|verify} messages.
                     * @param message CloudControlGroupAuditDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlGroupAuditDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudControlGroupAuditDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudControlGroupAuditDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CloudControlGroupAuditDetails;

                    /**
                     * Decodes a CloudControlGroupAuditDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudControlGroupAuditDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CloudControlGroupAuditDetails;

                    /**
                     * Verifies a CloudControlGroupAuditDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudControlGroupAuditDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudControlGroupAuditDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CloudControlGroupAuditDetails;

                    /**
                     * Creates a plain object from a CloudControlGroupAuditDetails message. Also converts values to other types if specified.
                     * @param message CloudControlGroupAuditDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CloudControlGroupAuditDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudControlGroupAuditDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudControlGroupAuditDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FindingDetails. */
                interface IFindingDetails {

                    /** FindingDetails name */
                    name?: (string|null);

                    /** FindingDetails complianceState */
                    complianceState?: (google.cloud.cloudsecuritycompliance.v1.ComplianceState|keyof typeof google.cloud.cloudsecuritycompliance.v1.ComplianceState|null);

                    /** FindingDetails observation */
                    observation?: (google.cloud.cloudsecuritycompliance.v1.IObservationDetails|null);

                    /** FindingDetails evidence */
                    evidence?: (google.cloud.cloudsecuritycompliance.v1.IEvidenceDetails|null);
                }

                /** Represents a FindingDetails. */
                class FindingDetails implements IFindingDetails {

                    /**
                     * Constructs a new FindingDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IFindingDetails);

                    /** FindingDetails name. */
                    public name: string;

                    /** FindingDetails complianceState. */
                    public complianceState: (google.cloud.cloudsecuritycompliance.v1.ComplianceState|keyof typeof google.cloud.cloudsecuritycompliance.v1.ComplianceState);

                    /** FindingDetails observation. */
                    public observation?: (google.cloud.cloudsecuritycompliance.v1.IObservationDetails|null);

                    /** FindingDetails evidence. */
                    public evidence?: (google.cloud.cloudsecuritycompliance.v1.IEvidenceDetails|null);

                    /**
                     * Creates a new FindingDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindingDetails instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IFindingDetails): google.cloud.cloudsecuritycompliance.v1.FindingDetails;

                    /**
                     * Encodes the specified FindingDetails message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FindingDetails.verify|verify} messages.
                     * @param message FindingDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IFindingDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindingDetails message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FindingDetails.verify|verify} messages.
                     * @param message FindingDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IFindingDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindingDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindingDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.FindingDetails;

                    /**
                     * Decodes a FindingDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindingDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.FindingDetails;

                    /**
                     * Verifies a FindingDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FindingDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FindingDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.FindingDetails;

                    /**
                     * Creates a plain object from a FindingDetails message. Also converts values to other types if specified.
                     * @param message FindingDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.FindingDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FindingDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FindingDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ObservationDetails. */
                interface IObservationDetails {

                    /** ObservationDetails currentValue */
                    currentValue?: (string|null);

                    /** ObservationDetails expectedValue */
                    expectedValue?: (string|null);

                    /** ObservationDetails guidance */
                    guidance?: (string|null);
                }

                /** Represents an ObservationDetails. */
                class ObservationDetails implements IObservationDetails {

                    /**
                     * Constructs a new ObservationDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IObservationDetails);

                    /** ObservationDetails currentValue. */
                    public currentValue: string;

                    /** ObservationDetails expectedValue. */
                    public expectedValue: string;

                    /** ObservationDetails guidance. */
                    public guidance: string;

                    /**
                     * Creates a new ObservationDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ObservationDetails instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IObservationDetails): google.cloud.cloudsecuritycompliance.v1.ObservationDetails;

                    /**
                     * Encodes the specified ObservationDetails message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ObservationDetails.verify|verify} messages.
                     * @param message ObservationDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IObservationDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ObservationDetails message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ObservationDetails.verify|verify} messages.
                     * @param message ObservationDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IObservationDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ObservationDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ObservationDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ObservationDetails;

                    /**
                     * Decodes an ObservationDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ObservationDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ObservationDetails;

                    /**
                     * Verifies an ObservationDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ObservationDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ObservationDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ObservationDetails;

                    /**
                     * Creates a plain object from an ObservationDetails message. Also converts values to other types if specified.
                     * @param message ObservationDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ObservationDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ObservationDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ObservationDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EvidenceDetails. */
                interface IEvidenceDetails {

                    /** EvidenceDetails resource */
                    resource?: (string|null);

                    /** EvidenceDetails service */
                    service?: (string|null);

                    /** EvidenceDetails evidencePath */
                    evidencePath?: (string|null);
                }

                /** Represents an EvidenceDetails. */
                class EvidenceDetails implements IEvidenceDetails {

                    /**
                     * Constructs a new EvidenceDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IEvidenceDetails);

                    /** EvidenceDetails resource. */
                    public resource: string;

                    /** EvidenceDetails service. */
                    public service: string;

                    /** EvidenceDetails evidencePath. */
                    public evidencePath: string;

                    /**
                     * Creates a new EvidenceDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EvidenceDetails instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IEvidenceDetails): google.cloud.cloudsecuritycompliance.v1.EvidenceDetails;

                    /**
                     * Encodes the specified EvidenceDetails message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.EvidenceDetails.verify|verify} messages.
                     * @param message EvidenceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IEvidenceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EvidenceDetails message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.EvidenceDetails.verify|verify} messages.
                     * @param message EvidenceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IEvidenceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EvidenceDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EvidenceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.EvidenceDetails;

                    /**
                     * Decodes an EvidenceDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EvidenceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.EvidenceDetails;

                    /**
                     * Verifies an EvidenceDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EvidenceDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EvidenceDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.EvidenceDetails;

                    /**
                     * Creates a plain object from an EvidenceDetails message. Also converts values to other types if specified.
                     * @param message EvidenceDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.EvidenceDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EvidenceDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EvidenceDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudControlAuditDetails. */
                interface ICloudControlAuditDetails {

                    /** CloudControlAuditDetails cloudControl */
                    cloudControl?: (string|null);

                    /** CloudControlAuditDetails cloudControlId */
                    cloudControlId?: (string|null);

                    /** CloudControlAuditDetails cloudControlDescription */
                    cloudControlDescription?: (string|null);

                    /** CloudControlAuditDetails complianceState */
                    complianceState?: (google.cloud.cloudsecuritycompliance.v1.ComplianceState|keyof typeof google.cloud.cloudsecuritycompliance.v1.ComplianceState|null);

                    /** CloudControlAuditDetails reportSummary */
                    reportSummary?: (google.cloud.cloudsecuritycompliance.v1.IReportSummary|null);

                    /** CloudControlAuditDetails findings */
                    findings?: (google.cloud.cloudsecuritycompliance.v1.IFindingDetails[]|null);
                }

                /** Represents a CloudControlAuditDetails. */
                class CloudControlAuditDetails implements ICloudControlAuditDetails {

                    /**
                     * Constructs a new CloudControlAuditDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlAuditDetails);

                    /** CloudControlAuditDetails cloudControl. */
                    public cloudControl: string;

                    /** CloudControlAuditDetails cloudControlId. */
                    public cloudControlId: string;

                    /** CloudControlAuditDetails cloudControlDescription. */
                    public cloudControlDescription: string;

                    /** CloudControlAuditDetails complianceState. */
                    public complianceState: (google.cloud.cloudsecuritycompliance.v1.ComplianceState|keyof typeof google.cloud.cloudsecuritycompliance.v1.ComplianceState);

                    /** CloudControlAuditDetails reportSummary. */
                    public reportSummary?: (google.cloud.cloudsecuritycompliance.v1.IReportSummary|null);

                    /** CloudControlAuditDetails findings. */
                    public findings: google.cloud.cloudsecuritycompliance.v1.IFindingDetails[];

                    /**
                     * Creates a new CloudControlAuditDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudControlAuditDetails instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlAuditDetails): google.cloud.cloudsecuritycompliance.v1.CloudControlAuditDetails;

                    /**
                     * Encodes the specified CloudControlAuditDetails message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlAuditDetails.verify|verify} messages.
                     * @param message CloudControlAuditDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlAuditDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudControlAuditDetails message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlAuditDetails.verify|verify} messages.
                     * @param message CloudControlAuditDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlAuditDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudControlAuditDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudControlAuditDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CloudControlAuditDetails;

                    /**
                     * Decodes a CloudControlAuditDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudControlAuditDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CloudControlAuditDetails;

                    /**
                     * Verifies a CloudControlAuditDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudControlAuditDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudControlAuditDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CloudControlAuditDetails;

                    /**
                     * Creates a plain object from a CloudControlAuditDetails message. Also converts values to other types if specified.
                     * @param message CloudControlAuditDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CloudControlAuditDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudControlAuditDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudControlAuditDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** RegulatoryControlResponsibilityType enum. */
                enum RegulatoryControlResponsibilityType {
                    REGULATORY_CONTROL_RESPONSIBILITY_TYPE_UNSPECIFIED = 0,
                    GOOGLE = 1,
                    CUSTOMER = 2,
                    SHARED = 3
                }

                /** EnforcementMode enum. */
                enum EnforcementMode {
                    ENFORCEMENT_MODE_UNSPECIFIED = 0,
                    PREVENTIVE = 1,
                    DETECTIVE = 2,
                    AUDIT = 3
                }

                /** FrameworkCategory enum. */
                enum FrameworkCategory {
                    FRAMEWORK_CATEGORY_UNSPECIFIED = 0,
                    INDUSTRY_DEFINED_STANDARD = 1,
                    ASSURED_WORKLOADS = 2,
                    DATA_SECURITY = 3,
                    GOOGLE_BEST_PRACTICES = 4,
                    CUSTOM_FRAMEWORK = 5
                }

                /** CloudControlCategory enum. */
                enum CloudControlCategory {
                    CLOUD_CONTROL_CATEGORY_UNSPECIFIED = 0,
                    CC_CATEGORY_INFRASTRUCTURE = 1,
                    CC_CATEGORY_ARTIFICIAL_INTELLIGENCE = 2,
                    CC_CATEGORY_PHYSICAL_SECURITY = 3,
                    CC_CATEGORY_DATA_SECURITY = 4,
                    CC_CATEGORY_NETWORK_SECURITY = 5,
                    CC_CATEGORY_INCIDENT_MANAGEMENT = 6,
                    CC_CATEGORY_IDENTITY_AND_ACCESS_MANAGEMENT = 7,
                    CC_CATEGORY_ENCRYPTION = 8,
                    CC_CATEGORY_LOGS_MANAGEMENT_AND_INFRASTRUCTURE = 9,
                    CC_CATEGORY_HR_ADMIN_AND_PROCESSES = 10,
                    CC_CATEGORY_THIRD_PARTY_AND_SUB_PROCESSOR_MANAGEMENT = 11,
                    CC_CATEGORY_LEGAL_AND_DISCLOSURES = 12,
                    CC_CATEGORY_VULNERABILITY_MANAGEMENT = 13,
                    CC_CATEGORY_PRIVACY = 14,
                    CC_CATEGORY_BCDR = 15
                }

                /** CloudProvider enum. */
                enum CloudProvider {
                    CLOUD_PROVIDER_UNSPECIFIED = 0,
                    AWS = 1,
                    AZURE = 2,
                    GCP = 3
                }

                /** Severity enum. */
                enum Severity {
                    SEVERITY_UNSPECIFIED = 0,
                    CRITICAL = 1,
                    HIGH = 2,
                    MEDIUM = 3,
                    LOW = 4
                }

                /** RuleActionType enum. */
                enum RuleActionType {
                    RULE_ACTION_TYPE_UNSPECIFIED = 0,
                    RULE_ACTION_TYPE_PREVENTIVE = 1,
                    RULE_ACTION_TYPE_DETECTIVE = 2,
                    RULE_ACTION_TYPE_AUDIT = 3
                }

                /** TargetResourceType enum. */
                enum TargetResourceType {
                    TARGET_RESOURCE_TYPE_UNSPECIFIED = 0,
                    TARGET_RESOURCE_CRM_TYPE_ORG = 1,
                    TARGET_RESOURCE_CRM_TYPE_FOLDER = 2,
                    TARGET_RESOURCE_CRM_TYPE_PROJECT = 3,
                    TARGET_RESOURCE_TYPE_APPLICATION = 4
                }

                /** Properties of a Framework. */
                interface IFramework {

                    /** Framework name */
                    name?: (string|null);

                    /** Framework majorRevisionId */
                    majorRevisionId?: (number|Long|string|null);

                    /** Framework displayName */
                    displayName?: (string|null);

                    /** Framework description */
                    description?: (string|null);

                    /** Framework type */
                    type?: (google.cloud.cloudsecuritycompliance.v1.Framework.FrameworkType|keyof typeof google.cloud.cloudsecuritycompliance.v1.Framework.FrameworkType|null);

                    /** Framework cloudControlDetails */
                    cloudControlDetails?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlDetails[]|null);

                    /** Framework category */
                    category?: (google.cloud.cloudsecuritycompliance.v1.FrameworkCategory[]|null);

                    /** Framework supportedCloudProviders */
                    supportedCloudProviders?: (google.cloud.cloudsecuritycompliance.v1.CloudProvider[]|null);

                    /** Framework supportedTargetResourceTypes */
                    supportedTargetResourceTypes?: (google.cloud.cloudsecuritycompliance.v1.TargetResourceType[]|null);

                    /** Framework supportedEnforcementModes */
                    supportedEnforcementModes?: (google.cloud.cloudsecuritycompliance.v1.EnforcementMode[]|null);
                }

                /** Represents a Framework. */
                class Framework implements IFramework {

                    /**
                     * Constructs a new Framework.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IFramework);

                    /** Framework name. */
                    public name: string;

                    /** Framework majorRevisionId. */
                    public majorRevisionId: (number|Long|string);

                    /** Framework displayName. */
                    public displayName: string;

                    /** Framework description. */
                    public description: string;

                    /** Framework type. */
                    public type: (google.cloud.cloudsecuritycompliance.v1.Framework.FrameworkType|keyof typeof google.cloud.cloudsecuritycompliance.v1.Framework.FrameworkType);

                    /** Framework cloudControlDetails. */
                    public cloudControlDetails: google.cloud.cloudsecuritycompliance.v1.ICloudControlDetails[];

                    /** Framework category. */
                    public category: google.cloud.cloudsecuritycompliance.v1.FrameworkCategory[];

                    /** Framework supportedCloudProviders. */
                    public supportedCloudProviders: google.cloud.cloudsecuritycompliance.v1.CloudProvider[];

                    /** Framework supportedTargetResourceTypes. */
                    public supportedTargetResourceTypes: google.cloud.cloudsecuritycompliance.v1.TargetResourceType[];

                    /** Framework supportedEnforcementModes. */
                    public supportedEnforcementModes: google.cloud.cloudsecuritycompliance.v1.EnforcementMode[];

                    /**
                     * Creates a new Framework instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Framework instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IFramework): google.cloud.cloudsecuritycompliance.v1.Framework;

                    /**
                     * Encodes the specified Framework message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.Framework.verify|verify} messages.
                     * @param message Framework message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IFramework, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Framework message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.Framework.verify|verify} messages.
                     * @param message Framework message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IFramework, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Framework message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Framework
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.Framework;

                    /**
                     * Decodes a Framework message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Framework
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.Framework;

                    /**
                     * Verifies a Framework message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Framework message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Framework
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.Framework;

                    /**
                     * Creates a plain object from a Framework message. Also converts values to other types if specified.
                     * @param message Framework
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.Framework, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Framework to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Framework
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Framework {

                    /** FrameworkType enum. */
                    enum FrameworkType {
                        FRAMEWORK_TYPE_UNSPECIFIED = 0,
                        BUILT_IN = 1,
                        CUSTOM = 2
                    }
                }

                /** Properties of a CloudControlDetails. */
                interface ICloudControlDetails {

                    /** CloudControlDetails name */
                    name?: (string|null);

                    /** CloudControlDetails majorRevisionId */
                    majorRevisionId?: (number|Long|string|null);

                    /** CloudControlDetails parameters */
                    parameters?: (google.cloud.cloudsecuritycompliance.v1.IParameter[]|null);
                }

                /** Represents a CloudControlDetails. */
                class CloudControlDetails implements ICloudControlDetails {

                    /**
                     * Constructs a new CloudControlDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlDetails);

                    /** CloudControlDetails name. */
                    public name: string;

                    /** CloudControlDetails majorRevisionId. */
                    public majorRevisionId: (number|Long|string);

                    /** CloudControlDetails parameters. */
                    public parameters: google.cloud.cloudsecuritycompliance.v1.IParameter[];

                    /**
                     * Creates a new CloudControlDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudControlDetails instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlDetails): google.cloud.cloudsecuritycompliance.v1.CloudControlDetails;

                    /**
                     * Encodes the specified CloudControlDetails message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlDetails.verify|verify} messages.
                     * @param message CloudControlDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudControlDetails message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlDetails.verify|verify} messages.
                     * @param message CloudControlDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudControlDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudControlDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CloudControlDetails;

                    /**
                     * Decodes a CloudControlDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudControlDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CloudControlDetails;

                    /**
                     * Verifies a CloudControlDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudControlDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudControlDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CloudControlDetails;

                    /**
                     * Creates a plain object from a CloudControlDetails message. Also converts values to other types if specified.
                     * @param message CloudControlDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CloudControlDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudControlDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudControlDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FrameworkReference. */
                interface IFrameworkReference {

                    /** FrameworkReference framework */
                    framework?: (string|null);

                    /** FrameworkReference majorRevisionId */
                    majorRevisionId?: (number|Long|string|null);
                }

                /** Represents a FrameworkReference. */
                class FrameworkReference implements IFrameworkReference {

                    /**
                     * Constructs a new FrameworkReference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkReference);

                    /** FrameworkReference framework. */
                    public framework: string;

                    /** FrameworkReference majorRevisionId. */
                    public majorRevisionId?: (number|Long|string|null);

                    /**
                     * Creates a new FrameworkReference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FrameworkReference instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkReference): google.cloud.cloudsecuritycompliance.v1.FrameworkReference;

                    /**
                     * Encodes the specified FrameworkReference message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkReference.verify|verify} messages.
                     * @param message FrameworkReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FrameworkReference message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkReference.verify|verify} messages.
                     * @param message FrameworkReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FrameworkReference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FrameworkReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.FrameworkReference;

                    /**
                     * Decodes a FrameworkReference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FrameworkReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.FrameworkReference;

                    /**
                     * Verifies a FrameworkReference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FrameworkReference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FrameworkReference
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.FrameworkReference;

                    /**
                     * Creates a plain object from a FrameworkReference message. Also converts values to other types if specified.
                     * @param message FrameworkReference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.FrameworkReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FrameworkReference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FrameworkReference
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Parameter. */
                interface IParameter {

                    /** Parameter name */
                    name?: (string|null);

                    /** Parameter parameterValue */
                    parameterValue?: (google.cloud.cloudsecuritycompliance.v1.IParamValue|null);
                }

                /** Represents a Parameter. */
                class Parameter implements IParameter {

                    /**
                     * Constructs a new Parameter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IParameter);

                    /** Parameter name. */
                    public name: string;

                    /** Parameter parameterValue. */
                    public parameterValue?: (google.cloud.cloudsecuritycompliance.v1.IParamValue|null);

                    /**
                     * Creates a new Parameter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Parameter instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IParameter): google.cloud.cloudsecuritycompliance.v1.Parameter;

                    /**
                     * Encodes the specified Parameter message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.Parameter.verify|verify} messages.
                     * @param message Parameter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Parameter message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.Parameter.verify|verify} messages.
                     * @param message Parameter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Parameter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.Parameter;

                    /**
                     * Decodes a Parameter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.Parameter;

                    /**
                     * Verifies a Parameter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Parameter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.Parameter;

                    /**
                     * Creates a plain object from a Parameter message. Also converts values to other types if specified.
                     * @param message Parameter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.Parameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Parameter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Parameter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudControl. */
                interface ICloudControl {

                    /** CloudControl name */
                    name?: (string|null);

                    /** CloudControl majorRevisionId */
                    majorRevisionId?: (number|Long|string|null);

                    /** CloudControl description */
                    description?: (string|null);

                    /** CloudControl displayName */
                    displayName?: (string|null);

                    /** CloudControl supportedEnforcementModes */
                    supportedEnforcementModes?: (google.cloud.cloudsecuritycompliance.v1.EnforcementMode[]|null);

                    /** CloudControl parameterSpec */
                    parameterSpec?: (google.cloud.cloudsecuritycompliance.v1.IParameterSpec[]|null);

                    /** CloudControl rules */
                    rules?: (google.cloud.cloudsecuritycompliance.v1.IRule[]|null);

                    /** CloudControl severity */
                    severity?: (google.cloud.cloudsecuritycompliance.v1.Severity|keyof typeof google.cloud.cloudsecuritycompliance.v1.Severity|null);

                    /** CloudControl findingCategory */
                    findingCategory?: (string|null);

                    /** CloudControl supportedCloudProviders */
                    supportedCloudProviders?: (google.cloud.cloudsecuritycompliance.v1.CloudProvider[]|null);

                    /** CloudControl relatedFrameworks */
                    relatedFrameworks?: (string[]|null);

                    /** CloudControl remediationSteps */
                    remediationSteps?: (string|null);

                    /** CloudControl categories */
                    categories?: (google.cloud.cloudsecuritycompliance.v1.CloudControlCategory[]|null);

                    /** CloudControl createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CloudControl supportedTargetResourceTypes */
                    supportedTargetResourceTypes?: (google.cloud.cloudsecuritycompliance.v1.TargetResourceType[]|null);
                }

                /** Represents a CloudControl. */
                class CloudControl implements ICloudControl {

                    /**
                     * Constructs a new CloudControl.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControl);

                    /** CloudControl name. */
                    public name: string;

                    /** CloudControl majorRevisionId. */
                    public majorRevisionId: (number|Long|string);

                    /** CloudControl description. */
                    public description: string;

                    /** CloudControl displayName. */
                    public displayName: string;

                    /** CloudControl supportedEnforcementModes. */
                    public supportedEnforcementModes: google.cloud.cloudsecuritycompliance.v1.EnforcementMode[];

                    /** CloudControl parameterSpec. */
                    public parameterSpec: google.cloud.cloudsecuritycompliance.v1.IParameterSpec[];

                    /** CloudControl rules. */
                    public rules: google.cloud.cloudsecuritycompliance.v1.IRule[];

                    /** CloudControl severity. */
                    public severity: (google.cloud.cloudsecuritycompliance.v1.Severity|keyof typeof google.cloud.cloudsecuritycompliance.v1.Severity);

                    /** CloudControl findingCategory. */
                    public findingCategory: string;

                    /** CloudControl supportedCloudProviders. */
                    public supportedCloudProviders: google.cloud.cloudsecuritycompliance.v1.CloudProvider[];

                    /** CloudControl relatedFrameworks. */
                    public relatedFrameworks: string[];

                    /** CloudControl remediationSteps. */
                    public remediationSteps: string;

                    /** CloudControl categories. */
                    public categories: google.cloud.cloudsecuritycompliance.v1.CloudControlCategory[];

                    /** CloudControl createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CloudControl supportedTargetResourceTypes. */
                    public supportedTargetResourceTypes: google.cloud.cloudsecuritycompliance.v1.TargetResourceType[];

                    /**
                     * Creates a new CloudControl instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudControl instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControl): google.cloud.cloudsecuritycompliance.v1.CloudControl;

                    /**
                     * Encodes the specified CloudControl message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControl.verify|verify} messages.
                     * @param message CloudControl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICloudControl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudControl message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControl.verify|verify} messages.
                     * @param message CloudControl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICloudControl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudControl message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudControl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CloudControl;

                    /**
                     * Decodes a CloudControl message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudControl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CloudControl;

                    /**
                     * Verifies a CloudControl message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudControl message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudControl
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CloudControl;

                    /**
                     * Creates a plain object from a CloudControl message. Also converts values to other types if specified.
                     * @param message CloudControl
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CloudControl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudControl to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudControl
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CloudControl {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        CUSTOM = 1,
                        BUILT_IN = 2
                    }
                }

                /** Properties of a ParameterSpec. */
                interface IParameterSpec {

                    /** ParameterSpec name */
                    name?: (string|null);

                    /** ParameterSpec displayName */
                    displayName?: (string|null);

                    /** ParameterSpec description */
                    description?: (string|null);

                    /** ParameterSpec isRequired */
                    isRequired?: (boolean|null);

                    /** ParameterSpec valueType */
                    valueType?: (google.cloud.cloudsecuritycompliance.v1.ParameterSpec.ValueType|keyof typeof google.cloud.cloudsecuritycompliance.v1.ParameterSpec.ValueType|null);

                    /** ParameterSpec defaultValue */
                    defaultValue?: (google.cloud.cloudsecuritycompliance.v1.IParamValue|null);

                    /** ParameterSpec substitutionRules */
                    substitutionRules?: (google.cloud.cloudsecuritycompliance.v1.IParameterSubstitutionRule[]|null);

                    /** ParameterSpec subParameters */
                    subParameters?: (google.cloud.cloudsecuritycompliance.v1.IParameterSpec[]|null);

                    /** ParameterSpec validation */
                    validation?: (google.cloud.cloudsecuritycompliance.v1.IValidation|null);
                }

                /** Represents a ParameterSpec. */
                class ParameterSpec implements IParameterSpec {

                    /**
                     * Constructs a new ParameterSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IParameterSpec);

                    /** ParameterSpec name. */
                    public name: string;

                    /** ParameterSpec displayName. */
                    public displayName: string;

                    /** ParameterSpec description. */
                    public description: string;

                    /** ParameterSpec isRequired. */
                    public isRequired: boolean;

                    /** ParameterSpec valueType. */
                    public valueType: (google.cloud.cloudsecuritycompliance.v1.ParameterSpec.ValueType|keyof typeof google.cloud.cloudsecuritycompliance.v1.ParameterSpec.ValueType);

                    /** ParameterSpec defaultValue. */
                    public defaultValue?: (google.cloud.cloudsecuritycompliance.v1.IParamValue|null);

                    /** ParameterSpec substitutionRules. */
                    public substitutionRules: google.cloud.cloudsecuritycompliance.v1.IParameterSubstitutionRule[];

                    /** ParameterSpec subParameters. */
                    public subParameters: google.cloud.cloudsecuritycompliance.v1.IParameterSpec[];

                    /** ParameterSpec validation. */
                    public validation?: (google.cloud.cloudsecuritycompliance.v1.IValidation|null);

                    /**
                     * Creates a new ParameterSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ParameterSpec instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IParameterSpec): google.cloud.cloudsecuritycompliance.v1.ParameterSpec;

                    /**
                     * Encodes the specified ParameterSpec message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ParameterSpec.verify|verify} messages.
                     * @param message ParameterSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IParameterSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ParameterSpec message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ParameterSpec.verify|verify} messages.
                     * @param message ParameterSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IParameterSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ParameterSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ParameterSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ParameterSpec;

                    /**
                     * Decodes a ParameterSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ParameterSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ParameterSpec;

                    /**
                     * Verifies a ParameterSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ParameterSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ParameterSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ParameterSpec;

                    /**
                     * Creates a plain object from a ParameterSpec message. Also converts values to other types if specified.
                     * @param message ParameterSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ParameterSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ParameterSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ParameterSpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ParameterSpec {

                    /** ValueType enum. */
                    enum ValueType {
                        VALUE_TYPE_UNSPECIFIED = 0,
                        STRING = 3,
                        BOOLEAN = 4,
                        STRINGLIST = 5,
                        NUMBER = 6,
                        ONEOF = 7
                    }
                }

                /** Properties of a Validation. */
                interface IValidation {

                    /** Validation allowedValues */
                    allowedValues?: (google.cloud.cloudsecuritycompliance.v1.IAllowedValues|null);

                    /** Validation intRange */
                    intRange?: (google.cloud.cloudsecuritycompliance.v1.IIntRange|null);

                    /** Validation regexpPattern */
                    regexpPattern?: (google.cloud.cloudsecuritycompliance.v1.IRegexpPattern|null);
                }

                /** Represents a Validation. */
                class Validation implements IValidation {

                    /**
                     * Constructs a new Validation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IValidation);

                    /** Validation allowedValues. */
                    public allowedValues?: (google.cloud.cloudsecuritycompliance.v1.IAllowedValues|null);

                    /** Validation intRange. */
                    public intRange?: (google.cloud.cloudsecuritycompliance.v1.IIntRange|null);

                    /** Validation regexpPattern. */
                    public regexpPattern?: (google.cloud.cloudsecuritycompliance.v1.IRegexpPattern|null);

                    /** Validation constraint. */
                    public constraint?: ("allowedValues"|"intRange"|"regexpPattern");

                    /**
                     * Creates a new Validation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Validation instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IValidation): google.cloud.cloudsecuritycompliance.v1.Validation;

                    /**
                     * Encodes the specified Validation message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.Validation.verify|verify} messages.
                     * @param message Validation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IValidation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Validation message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.Validation.verify|verify} messages.
                     * @param message Validation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IValidation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Validation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Validation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.Validation;

                    /**
                     * Decodes a Validation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Validation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.Validation;

                    /**
                     * Verifies a Validation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Validation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Validation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.Validation;

                    /**
                     * Creates a plain object from a Validation message. Also converts values to other types if specified.
                     * @param message Validation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.Validation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Validation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Validation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AllowedValues. */
                interface IAllowedValues {

                    /** AllowedValues values */
                    values?: (google.cloud.cloudsecuritycompliance.v1.IParamValue[]|null);
                }

                /** Represents an AllowedValues. */
                class AllowedValues implements IAllowedValues {

                    /**
                     * Constructs a new AllowedValues.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IAllowedValues);

                    /** AllowedValues values. */
                    public values: google.cloud.cloudsecuritycompliance.v1.IParamValue[];

                    /**
                     * Creates a new AllowedValues instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AllowedValues instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IAllowedValues): google.cloud.cloudsecuritycompliance.v1.AllowedValues;

                    /**
                     * Encodes the specified AllowedValues message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AllowedValues.verify|verify} messages.
                     * @param message AllowedValues message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IAllowedValues, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AllowedValues message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AllowedValues.verify|verify} messages.
                     * @param message AllowedValues message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IAllowedValues, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AllowedValues message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AllowedValues
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.AllowedValues;

                    /**
                     * Decodes an AllowedValues message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AllowedValues
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.AllowedValues;

                    /**
                     * Verifies an AllowedValues message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AllowedValues message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AllowedValues
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.AllowedValues;

                    /**
                     * Creates a plain object from an AllowedValues message. Also converts values to other types if specified.
                     * @param message AllowedValues
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.AllowedValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AllowedValues to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AllowedValues
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RegexpPattern. */
                interface IRegexpPattern {

                    /** RegexpPattern pattern */
                    pattern?: (string|null);
                }

                /** Represents a RegexpPattern. */
                class RegexpPattern implements IRegexpPattern {

                    /**
                     * Constructs a new RegexpPattern.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IRegexpPattern);

                    /** RegexpPattern pattern. */
                    public pattern: string;

                    /**
                     * Creates a new RegexpPattern instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RegexpPattern instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IRegexpPattern): google.cloud.cloudsecuritycompliance.v1.RegexpPattern;

                    /**
                     * Encodes the specified RegexpPattern message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.RegexpPattern.verify|verify} messages.
                     * @param message RegexpPattern message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IRegexpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RegexpPattern message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.RegexpPattern.verify|verify} messages.
                     * @param message RegexpPattern message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IRegexpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RegexpPattern message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RegexpPattern
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.RegexpPattern;

                    /**
                     * Decodes a RegexpPattern message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RegexpPattern
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.RegexpPattern;

                    /**
                     * Verifies a RegexpPattern message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RegexpPattern message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RegexpPattern
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.RegexpPattern;

                    /**
                     * Creates a plain object from a RegexpPattern message. Also converts values to other types if specified.
                     * @param message RegexpPattern
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.RegexpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RegexpPattern to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RegexpPattern
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an IntRange. */
                interface IIntRange {

                    /** IntRange min */
                    min?: (number|Long|string|null);

                    /** IntRange max */
                    max?: (number|Long|string|null);
                }

                /** Represents an IntRange. */
                class IntRange implements IIntRange {

                    /**
                     * Constructs a new IntRange.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IIntRange);

                    /** IntRange min. */
                    public min: (number|Long|string);

                    /** IntRange max. */
                    public max: (number|Long|string);

                    /**
                     * Creates a new IntRange instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IntRange instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IIntRange): google.cloud.cloudsecuritycompliance.v1.IntRange;

                    /**
                     * Encodes the specified IntRange message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.IntRange.verify|verify} messages.
                     * @param message IntRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IIntRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IntRange message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.IntRange.verify|verify} messages.
                     * @param message IntRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IIntRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IntRange message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IntRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.IntRange;

                    /**
                     * Decodes an IntRange message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IntRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.IntRange;

                    /**
                     * Verifies an IntRange message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IntRange message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IntRange
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.IntRange;

                    /**
                     * Creates a plain object from an IntRange message. Also converts values to other types if specified.
                     * @param message IntRange
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.IntRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IntRange to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IntRange
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StringList. */
                interface IStringList {

                    /** StringList values */
                    values?: (string[]|null);
                }

                /** Represents a StringList. */
                class StringList implements IStringList {

                    /**
                     * Constructs a new StringList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IStringList);

                    /** StringList values. */
                    public values: string[];

                    /**
                     * Creates a new StringList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StringList instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IStringList): google.cloud.cloudsecuritycompliance.v1.StringList;

                    /**
                     * Encodes the specified StringList message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.StringList.verify|verify} messages.
                     * @param message StringList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IStringList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StringList message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.StringList.verify|verify} messages.
                     * @param message StringList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IStringList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StringList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StringList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.StringList;

                    /**
                     * Decodes a StringList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StringList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.StringList;

                    /**
                     * Verifies a StringList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StringList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StringList
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.StringList;

                    /**
                     * Creates a plain object from a StringList message. Also converts values to other types if specified.
                     * @param message StringList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.StringList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StringList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StringList
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ParamValue. */
                interface IParamValue {

                    /** ParamValue stringValue */
                    stringValue?: (string|null);

                    /** ParamValue boolValue */
                    boolValue?: (boolean|null);

                    /** ParamValue stringListValue */
                    stringListValue?: (google.cloud.cloudsecuritycompliance.v1.IStringList|null);

                    /** ParamValue numberValue */
                    numberValue?: (number|null);

                    /** ParamValue oneofValue */
                    oneofValue?: (google.cloud.cloudsecuritycompliance.v1.IParameter|null);
                }

                /** Represents a ParamValue. */
                class ParamValue implements IParamValue {

                    /**
                     * Constructs a new ParamValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IParamValue);

                    /** ParamValue stringValue. */
                    public stringValue?: (string|null);

                    /** ParamValue boolValue. */
                    public boolValue?: (boolean|null);

                    /** ParamValue stringListValue. */
                    public stringListValue?: (google.cloud.cloudsecuritycompliance.v1.IStringList|null);

                    /** ParamValue numberValue. */
                    public numberValue?: (number|null);

                    /** ParamValue oneofValue. */
                    public oneofValue?: (google.cloud.cloudsecuritycompliance.v1.IParameter|null);

                    /** ParamValue kind. */
                    public kind?: ("stringValue"|"boolValue"|"stringListValue"|"numberValue"|"oneofValue");

                    /**
                     * Creates a new ParamValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ParamValue instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IParamValue): google.cloud.cloudsecuritycompliance.v1.ParamValue;

                    /**
                     * Encodes the specified ParamValue message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ParamValue.verify|verify} messages.
                     * @param message ParamValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IParamValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ParamValue message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ParamValue.verify|verify} messages.
                     * @param message ParamValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IParamValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ParamValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ParamValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ParamValue;

                    /**
                     * Decodes a ParamValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ParamValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ParamValue;

                    /**
                     * Verifies a ParamValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ParamValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ParamValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ParamValue;

                    /**
                     * Creates a plain object from a ParamValue message. Also converts values to other types if specified.
                     * @param message ParamValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ParamValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ParamValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ParamValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ParameterSubstitutionRule. */
                interface IParameterSubstitutionRule {

                    /** ParameterSubstitutionRule placeholderSubstitutionRule */
                    placeholderSubstitutionRule?: (google.cloud.cloudsecuritycompliance.v1.IPlaceholderSubstitutionRule|null);

                    /** ParameterSubstitutionRule attributeSubstitutionRule */
                    attributeSubstitutionRule?: (google.cloud.cloudsecuritycompliance.v1.IAttributeSubstitutionRule|null);
                }

                /** Represents a ParameterSubstitutionRule. */
                class ParameterSubstitutionRule implements IParameterSubstitutionRule {

                    /**
                     * Constructs a new ParameterSubstitutionRule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IParameterSubstitutionRule);

                    /** ParameterSubstitutionRule placeholderSubstitutionRule. */
                    public placeholderSubstitutionRule?: (google.cloud.cloudsecuritycompliance.v1.IPlaceholderSubstitutionRule|null);

                    /** ParameterSubstitutionRule attributeSubstitutionRule. */
                    public attributeSubstitutionRule?: (google.cloud.cloudsecuritycompliance.v1.IAttributeSubstitutionRule|null);

                    /** ParameterSubstitutionRule substitutionType. */
                    public substitutionType?: ("placeholderSubstitutionRule"|"attributeSubstitutionRule");

                    /**
                     * Creates a new ParameterSubstitutionRule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ParameterSubstitutionRule instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IParameterSubstitutionRule): google.cloud.cloudsecuritycompliance.v1.ParameterSubstitutionRule;

                    /**
                     * Encodes the specified ParameterSubstitutionRule message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ParameterSubstitutionRule.verify|verify} messages.
                     * @param message ParameterSubstitutionRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IParameterSubstitutionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ParameterSubstitutionRule message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ParameterSubstitutionRule.verify|verify} messages.
                     * @param message ParameterSubstitutionRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IParameterSubstitutionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ParameterSubstitutionRule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ParameterSubstitutionRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ParameterSubstitutionRule;

                    /**
                     * Decodes a ParameterSubstitutionRule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ParameterSubstitutionRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ParameterSubstitutionRule;

                    /**
                     * Verifies a ParameterSubstitutionRule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ParameterSubstitutionRule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ParameterSubstitutionRule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ParameterSubstitutionRule;

                    /**
                     * Creates a plain object from a ParameterSubstitutionRule message. Also converts values to other types if specified.
                     * @param message ParameterSubstitutionRule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ParameterSubstitutionRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ParameterSubstitutionRule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ParameterSubstitutionRule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AttributeSubstitutionRule. */
                interface IAttributeSubstitutionRule {

                    /** AttributeSubstitutionRule attribute */
                    attribute?: (string|null);
                }

                /** Represents an AttributeSubstitutionRule. */
                class AttributeSubstitutionRule implements IAttributeSubstitutionRule {

                    /**
                     * Constructs a new AttributeSubstitutionRule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IAttributeSubstitutionRule);

                    /** AttributeSubstitutionRule attribute. */
                    public attribute: string;

                    /**
                     * Creates a new AttributeSubstitutionRule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AttributeSubstitutionRule instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IAttributeSubstitutionRule): google.cloud.cloudsecuritycompliance.v1.AttributeSubstitutionRule;

                    /**
                     * Encodes the specified AttributeSubstitutionRule message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AttributeSubstitutionRule.verify|verify} messages.
                     * @param message AttributeSubstitutionRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IAttributeSubstitutionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AttributeSubstitutionRule message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AttributeSubstitutionRule.verify|verify} messages.
                     * @param message AttributeSubstitutionRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IAttributeSubstitutionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AttributeSubstitutionRule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AttributeSubstitutionRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.AttributeSubstitutionRule;

                    /**
                     * Decodes an AttributeSubstitutionRule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AttributeSubstitutionRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.AttributeSubstitutionRule;

                    /**
                     * Verifies an AttributeSubstitutionRule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AttributeSubstitutionRule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AttributeSubstitutionRule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.AttributeSubstitutionRule;

                    /**
                     * Creates a plain object from an AttributeSubstitutionRule message. Also converts values to other types if specified.
                     * @param message AttributeSubstitutionRule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.AttributeSubstitutionRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AttributeSubstitutionRule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AttributeSubstitutionRule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PlaceholderSubstitutionRule. */
                interface IPlaceholderSubstitutionRule {

                    /** PlaceholderSubstitutionRule attribute */
                    attribute?: (string|null);
                }

                /** Represents a PlaceholderSubstitutionRule. */
                class PlaceholderSubstitutionRule implements IPlaceholderSubstitutionRule {

                    /**
                     * Constructs a new PlaceholderSubstitutionRule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IPlaceholderSubstitutionRule);

                    /** PlaceholderSubstitutionRule attribute. */
                    public attribute: string;

                    /**
                     * Creates a new PlaceholderSubstitutionRule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PlaceholderSubstitutionRule instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IPlaceholderSubstitutionRule): google.cloud.cloudsecuritycompliance.v1.PlaceholderSubstitutionRule;

                    /**
                     * Encodes the specified PlaceholderSubstitutionRule message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.PlaceholderSubstitutionRule.verify|verify} messages.
                     * @param message PlaceholderSubstitutionRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IPlaceholderSubstitutionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PlaceholderSubstitutionRule message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.PlaceholderSubstitutionRule.verify|verify} messages.
                     * @param message PlaceholderSubstitutionRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IPlaceholderSubstitutionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PlaceholderSubstitutionRule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PlaceholderSubstitutionRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.PlaceholderSubstitutionRule;

                    /**
                     * Decodes a PlaceholderSubstitutionRule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PlaceholderSubstitutionRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.PlaceholderSubstitutionRule;

                    /**
                     * Verifies a PlaceholderSubstitutionRule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PlaceholderSubstitutionRule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PlaceholderSubstitutionRule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.PlaceholderSubstitutionRule;

                    /**
                     * Creates a plain object from a PlaceholderSubstitutionRule message. Also converts values to other types if specified.
                     * @param message PlaceholderSubstitutionRule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.PlaceholderSubstitutionRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PlaceholderSubstitutionRule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PlaceholderSubstitutionRule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Rule. */
                interface IRule {

                    /** Rule celExpression */
                    celExpression?: (google.cloud.cloudsecuritycompliance.v1.ICELExpression|null);

                    /** Rule description */
                    description?: (string|null);

                    /** Rule ruleActionTypes */
                    ruleActionTypes?: (google.cloud.cloudsecuritycompliance.v1.RuleActionType[]|null);
                }

                /** Represents a Rule. */
                class Rule implements IRule {

                    /**
                     * Constructs a new Rule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IRule);

                    /** Rule celExpression. */
                    public celExpression?: (google.cloud.cloudsecuritycompliance.v1.ICELExpression|null);

                    /** Rule description. */
                    public description: string;

                    /** Rule ruleActionTypes. */
                    public ruleActionTypes: google.cloud.cloudsecuritycompliance.v1.RuleActionType[];

                    /** Rule implementation. */
                    public implementation?: "celExpression";

                    /**
                     * Creates a new Rule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Rule instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IRule): google.cloud.cloudsecuritycompliance.v1.Rule;

                    /**
                     * Encodes the specified Rule message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.Rule.verify|verify} messages.
                     * @param message Rule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Rule message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.Rule.verify|verify} messages.
                     * @param message Rule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Rule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Rule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.Rule;

                    /**
                     * Decodes a Rule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Rule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.Rule;

                    /**
                     * Verifies a Rule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Rule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Rule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.Rule;

                    /**
                     * Creates a plain object from a Rule message. Also converts values to other types if specified.
                     * @param message Rule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.Rule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Rule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Rule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CELExpression. */
                interface ICELExpression {

                    /** CELExpression resourceTypesValues */
                    resourceTypesValues?: (google.cloud.cloudsecuritycompliance.v1.IStringList|null);

                    /** CELExpression expression */
                    expression?: (string|null);
                }

                /** Represents a CELExpression. */
                class CELExpression implements ICELExpression {

                    /**
                     * Constructs a new CELExpression.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICELExpression);

                    /** CELExpression resourceTypesValues. */
                    public resourceTypesValues?: (google.cloud.cloudsecuritycompliance.v1.IStringList|null);

                    /** CELExpression expression. */
                    public expression: string;

                    /** CELExpression criteria. */
                    public criteria?: "resourceTypesValues";

                    /**
                     * Creates a new CELExpression instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CELExpression instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICELExpression): google.cloud.cloudsecuritycompliance.v1.CELExpression;

                    /**
                     * Encodes the specified CELExpression message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CELExpression.verify|verify} messages.
                     * @param message CELExpression message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICELExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CELExpression message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CELExpression.verify|verify} messages.
                     * @param message CELExpression message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICELExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CELExpression message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CELExpression
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CELExpression;

                    /**
                     * Decodes a CELExpression message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CELExpression
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CELExpression;

                    /**
                     * Verifies a CELExpression message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CELExpression message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CELExpression
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CELExpression;

                    /**
                     * Creates a plain object from a CELExpression message. Also converts values to other types if specified.
                     * @param message CELExpression
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CELExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CELExpression to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CELExpression
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
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IOperationMetadata): google.cloud.cloudsecuritycompliance.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ControlFamily. */
                interface IControlFamily {

                    /** ControlFamily familyId */
                    familyId?: (string|null);

                    /** ControlFamily displayName */
                    displayName?: (string|null);
                }

                /** Represents a ControlFamily. */
                class ControlFamily implements IControlFamily {

                    /**
                     * Constructs a new ControlFamily.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IControlFamily);

                    /** ControlFamily familyId. */
                    public familyId: string;

                    /** ControlFamily displayName. */
                    public displayName: string;

                    /**
                     * Creates a new ControlFamily instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ControlFamily instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IControlFamily): google.cloud.cloudsecuritycompliance.v1.ControlFamily;

                    /**
                     * Encodes the specified ControlFamily message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ControlFamily.verify|verify} messages.
                     * @param message ControlFamily message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IControlFamily, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ControlFamily message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ControlFamily.verify|verify} messages.
                     * @param message ControlFamily message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IControlFamily, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ControlFamily message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ControlFamily
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ControlFamily;

                    /**
                     * Decodes a ControlFamily message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ControlFamily
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ControlFamily;

                    /**
                     * Verifies a ControlFamily message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ControlFamily message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ControlFamily
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ControlFamily;

                    /**
                     * Creates a plain object from a ControlFamily message. Also converts values to other types if specified.
                     * @param message ControlFamily
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ControlFamily, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ControlFamily to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ControlFamily
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a CmEnrollmentService */
                class CmEnrollmentService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CmEnrollmentService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CmEnrollmentService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CmEnrollmentService;

                    /**
                     * Calls UpdateCmEnrollment.
                     * @param request UpdateCmEnrollmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CmEnrollment
                     */
                    public updateCmEnrollment(request: google.cloud.cloudsecuritycompliance.v1.IUpdateCmEnrollmentRequest, callback: google.cloud.cloudsecuritycompliance.v1.CmEnrollmentService.UpdateCmEnrollmentCallback): void;

                    /**
                     * Calls UpdateCmEnrollment.
                     * @param request UpdateCmEnrollmentRequest message or plain object
                     * @returns Promise
                     */
                    public updateCmEnrollment(request: google.cloud.cloudsecuritycompliance.v1.IUpdateCmEnrollmentRequest): Promise<google.cloud.cloudsecuritycompliance.v1.CmEnrollment>;

                    /**
                     * Calls CalculateEffectiveCmEnrollment.
                     * @param request CalculateEffectiveCmEnrollmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CalculateEffectiveCmEnrollmentResponse
                     */
                    public calculateEffectiveCmEnrollment(request: google.cloud.cloudsecuritycompliance.v1.ICalculateEffectiveCmEnrollmentRequest, callback: google.cloud.cloudsecuritycompliance.v1.CmEnrollmentService.CalculateEffectiveCmEnrollmentCallback): void;

                    /**
                     * Calls CalculateEffectiveCmEnrollment.
                     * @param request CalculateEffectiveCmEnrollmentRequest message or plain object
                     * @returns Promise
                     */
                    public calculateEffectiveCmEnrollment(request: google.cloud.cloudsecuritycompliance.v1.ICalculateEffectiveCmEnrollmentRequest): Promise<google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentResponse>;
                }

                namespace CmEnrollmentService {

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.CmEnrollmentService|updateCmEnrollment}.
                     * @param error Error, if any
                     * @param [response] CmEnrollment
                     */
                    type UpdateCmEnrollmentCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.CmEnrollment) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.CmEnrollmentService|calculateEffectiveCmEnrollment}.
                     * @param error Error, if any
                     * @param [response] CalculateEffectiveCmEnrollmentResponse
                     */
                    type CalculateEffectiveCmEnrollmentCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentResponse) => void;
                }

                /** Properties of an UpdateCmEnrollmentRequest. */
                interface IUpdateCmEnrollmentRequest {

                    /** UpdateCmEnrollmentRequest cmEnrollment */
                    cmEnrollment?: (google.cloud.cloudsecuritycompliance.v1.ICmEnrollment|null);

                    /** UpdateCmEnrollmentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateCmEnrollmentRequest. */
                class UpdateCmEnrollmentRequest implements IUpdateCmEnrollmentRequest {

                    /**
                     * Constructs a new UpdateCmEnrollmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IUpdateCmEnrollmentRequest);

                    /** UpdateCmEnrollmentRequest cmEnrollment. */
                    public cmEnrollment?: (google.cloud.cloudsecuritycompliance.v1.ICmEnrollment|null);

                    /** UpdateCmEnrollmentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateCmEnrollmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCmEnrollmentRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IUpdateCmEnrollmentRequest): google.cloud.cloudsecuritycompliance.v1.UpdateCmEnrollmentRequest;

                    /**
                     * Encodes the specified UpdateCmEnrollmentRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.UpdateCmEnrollmentRequest.verify|verify} messages.
                     * @param message UpdateCmEnrollmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IUpdateCmEnrollmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCmEnrollmentRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.UpdateCmEnrollmentRequest.verify|verify} messages.
                     * @param message UpdateCmEnrollmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IUpdateCmEnrollmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCmEnrollmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCmEnrollmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.UpdateCmEnrollmentRequest;

                    /**
                     * Decodes an UpdateCmEnrollmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCmEnrollmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.UpdateCmEnrollmentRequest;

                    /**
                     * Verifies an UpdateCmEnrollmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCmEnrollmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCmEnrollmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.UpdateCmEnrollmentRequest;

                    /**
                     * Creates a plain object from an UpdateCmEnrollmentRequest message. Also converts values to other types if specified.
                     * @param message UpdateCmEnrollmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.UpdateCmEnrollmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCmEnrollmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateCmEnrollmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CalculateEffectiveCmEnrollmentRequest. */
                interface ICalculateEffectiveCmEnrollmentRequest {

                    /** CalculateEffectiveCmEnrollmentRequest name */
                    name?: (string|null);
                }

                /** Represents a CalculateEffectiveCmEnrollmentRequest. */
                class CalculateEffectiveCmEnrollmentRequest implements ICalculateEffectiveCmEnrollmentRequest {

                    /**
                     * Constructs a new CalculateEffectiveCmEnrollmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICalculateEffectiveCmEnrollmentRequest);

                    /** CalculateEffectiveCmEnrollmentRequest name. */
                    public name: string;

                    /**
                     * Creates a new CalculateEffectiveCmEnrollmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CalculateEffectiveCmEnrollmentRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICalculateEffectiveCmEnrollmentRequest): google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentRequest;

                    /**
                     * Encodes the specified CalculateEffectiveCmEnrollmentRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentRequest.verify|verify} messages.
                     * @param message CalculateEffectiveCmEnrollmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICalculateEffectiveCmEnrollmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CalculateEffectiveCmEnrollmentRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentRequest.verify|verify} messages.
                     * @param message CalculateEffectiveCmEnrollmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICalculateEffectiveCmEnrollmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CalculateEffectiveCmEnrollmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CalculateEffectiveCmEnrollmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentRequest;

                    /**
                     * Decodes a CalculateEffectiveCmEnrollmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CalculateEffectiveCmEnrollmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentRequest;

                    /**
                     * Verifies a CalculateEffectiveCmEnrollmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CalculateEffectiveCmEnrollmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CalculateEffectiveCmEnrollmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentRequest;

                    /**
                     * Creates a plain object from a CalculateEffectiveCmEnrollmentRequest message. Also converts values to other types if specified.
                     * @param message CalculateEffectiveCmEnrollmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CalculateEffectiveCmEnrollmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CalculateEffectiveCmEnrollmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CmEnrollment. */
                interface ICmEnrollment {

                    /** CmEnrollment name */
                    name?: (string|null);

                    /** CmEnrollment enrolled */
                    enrolled?: (boolean|null);

                    /** CmEnrollment auditConfig */
                    auditConfig?: (google.cloud.cloudsecuritycompliance.v1.IAuditConfig|null);
                }

                /** Represents a CmEnrollment. */
                class CmEnrollment implements ICmEnrollment {

                    /**
                     * Constructs a new CmEnrollment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICmEnrollment);

                    /** CmEnrollment name. */
                    public name: string;

                    /** CmEnrollment enrolled. */
                    public enrolled: boolean;

                    /** CmEnrollment auditConfig. */
                    public auditConfig?: (google.cloud.cloudsecuritycompliance.v1.IAuditConfig|null);

                    /**
                     * Creates a new CmEnrollment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CmEnrollment instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICmEnrollment): google.cloud.cloudsecuritycompliance.v1.CmEnrollment;

                    /**
                     * Encodes the specified CmEnrollment message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CmEnrollment.verify|verify} messages.
                     * @param message CmEnrollment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICmEnrollment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CmEnrollment message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CmEnrollment.verify|verify} messages.
                     * @param message CmEnrollment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICmEnrollment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CmEnrollment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CmEnrollment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CmEnrollment;

                    /**
                     * Decodes a CmEnrollment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CmEnrollment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CmEnrollment;

                    /**
                     * Verifies a CmEnrollment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CmEnrollment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CmEnrollment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CmEnrollment;

                    /**
                     * Creates a plain object from a CmEnrollment message. Also converts values to other types if specified.
                     * @param message CmEnrollment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CmEnrollment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CmEnrollment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CmEnrollment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CalculateEffectiveCmEnrollmentResponse. */
                interface ICalculateEffectiveCmEnrollmentResponse {

                    /** CalculateEffectiveCmEnrollmentResponse cmEnrollment */
                    cmEnrollment?: (google.cloud.cloudsecuritycompliance.v1.ICmEnrollment|null);
                }

                /** Represents a CalculateEffectiveCmEnrollmentResponse. */
                class CalculateEffectiveCmEnrollmentResponse implements ICalculateEffectiveCmEnrollmentResponse {

                    /**
                     * Constructs a new CalculateEffectiveCmEnrollmentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICalculateEffectiveCmEnrollmentResponse);

                    /** CalculateEffectiveCmEnrollmentResponse cmEnrollment. */
                    public cmEnrollment?: (google.cloud.cloudsecuritycompliance.v1.ICmEnrollment|null);

                    /**
                     * Creates a new CalculateEffectiveCmEnrollmentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CalculateEffectiveCmEnrollmentResponse instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICalculateEffectiveCmEnrollmentResponse): google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentResponse;

                    /**
                     * Encodes the specified CalculateEffectiveCmEnrollmentResponse message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentResponse.verify|verify} messages.
                     * @param message CalculateEffectiveCmEnrollmentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICalculateEffectiveCmEnrollmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CalculateEffectiveCmEnrollmentResponse message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentResponse.verify|verify} messages.
                     * @param message CalculateEffectiveCmEnrollmentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICalculateEffectiveCmEnrollmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CalculateEffectiveCmEnrollmentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CalculateEffectiveCmEnrollmentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentResponse;

                    /**
                     * Decodes a CalculateEffectiveCmEnrollmentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CalculateEffectiveCmEnrollmentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentResponse;

                    /**
                     * Verifies a CalculateEffectiveCmEnrollmentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CalculateEffectiveCmEnrollmentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CalculateEffectiveCmEnrollmentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentResponse;

                    /**
                     * Creates a plain object from a CalculateEffectiveCmEnrollmentResponse message. Also converts values to other types if specified.
                     * @param message CalculateEffectiveCmEnrollmentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CalculateEffectiveCmEnrollmentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CalculateEffectiveCmEnrollmentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CalculateEffectiveCmEnrollmentResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AuditConfig. */
                interface IAuditConfig {

                    /** AuditConfig destinations */
                    destinations?: (google.cloud.cloudsecuritycompliance.v1.AuditConfig.ICmEligibleDestination[]|null);
                }

                /** Represents an AuditConfig. */
                class AuditConfig implements IAuditConfig {

                    /**
                     * Constructs a new AuditConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IAuditConfig);

                    /** AuditConfig destinations. */
                    public destinations: google.cloud.cloudsecuritycompliance.v1.AuditConfig.ICmEligibleDestination[];

                    /**
                     * Creates a new AuditConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuditConfig instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IAuditConfig): google.cloud.cloudsecuritycompliance.v1.AuditConfig;

                    /**
                     * Encodes the specified AuditConfig message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AuditConfig.verify|verify} messages.
                     * @param message AuditConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AuditConfig message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AuditConfig.verify|verify} messages.
                     * @param message AuditConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuditConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuditConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.AuditConfig;

                    /**
                     * Decodes an AuditConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AuditConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.AuditConfig;

                    /**
                     * Verifies an AuditConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AuditConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AuditConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.AuditConfig;

                    /**
                     * Creates a plain object from an AuditConfig message. Also converts values to other types if specified.
                     * @param message AuditConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.AuditConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AuditConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AuditConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AuditConfig {

                    /** Properties of a CmEligibleDestination. */
                    interface ICmEligibleDestination {

                        /** CmEligibleDestination gcsBucket */
                        gcsBucket?: (string|null);
                    }

                    /** Represents a CmEligibleDestination. */
                    class CmEligibleDestination implements ICmEligibleDestination {

                        /**
                         * Constructs a new CmEligibleDestination.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.cloudsecuritycompliance.v1.AuditConfig.ICmEligibleDestination);

                        /** CmEligibleDestination gcsBucket. */
                        public gcsBucket?: (string|null);

                        /** CmEligibleDestination cmEligibleDestinations. */
                        public cmEligibleDestinations?: "gcsBucket";

                        /**
                         * Creates a new CmEligibleDestination instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CmEligibleDestination instance
                         */
                        public static create(properties?: google.cloud.cloudsecuritycompliance.v1.AuditConfig.ICmEligibleDestination): google.cloud.cloudsecuritycompliance.v1.AuditConfig.CmEligibleDestination;

                        /**
                         * Encodes the specified CmEligibleDestination message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AuditConfig.CmEligibleDestination.verify|verify} messages.
                         * @param message CmEligibleDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.cloudsecuritycompliance.v1.AuditConfig.ICmEligibleDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CmEligibleDestination message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AuditConfig.CmEligibleDestination.verify|verify} messages.
                         * @param message CmEligibleDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.AuditConfig.ICmEligibleDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CmEligibleDestination message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CmEligibleDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.AuditConfig.CmEligibleDestination;

                        /**
                         * Decodes a CmEligibleDestination message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CmEligibleDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.AuditConfig.CmEligibleDestination;

                        /**
                         * Verifies a CmEligibleDestination message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CmEligibleDestination message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CmEligibleDestination
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.AuditConfig.CmEligibleDestination;

                        /**
                         * Creates a plain object from a CmEligibleDestination message. Also converts values to other types if specified.
                         * @param message CmEligibleDestination
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.cloudsecuritycompliance.v1.AuditConfig.CmEligibleDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CmEligibleDestination to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CmEligibleDestination
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

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
                     * Calls ListFrameworks.
                     * @param request ListFrameworksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFrameworksResponse
                     */
                    public listFrameworks(request: google.cloud.cloudsecuritycompliance.v1.IListFrameworksRequest, callback: google.cloud.cloudsecuritycompliance.v1.Config.ListFrameworksCallback): void;

                    /**
                     * Calls ListFrameworks.
                     * @param request ListFrameworksRequest message or plain object
                     * @returns Promise
                     */
                    public listFrameworks(request: google.cloud.cloudsecuritycompliance.v1.IListFrameworksRequest): Promise<google.cloud.cloudsecuritycompliance.v1.ListFrameworksResponse>;

                    /**
                     * Calls GetFramework.
                     * @param request GetFrameworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Framework
                     */
                    public getFramework(request: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkRequest, callback: google.cloud.cloudsecuritycompliance.v1.Config.GetFrameworkCallback): void;

                    /**
                     * Calls GetFramework.
                     * @param request GetFrameworkRequest message or plain object
                     * @returns Promise
                     */
                    public getFramework(request: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkRequest): Promise<google.cloud.cloudsecuritycompliance.v1.Framework>;

                    /**
                     * Calls CreateFramework.
                     * @param request CreateFrameworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Framework
                     */
                    public createFramework(request: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkRequest, callback: google.cloud.cloudsecuritycompliance.v1.Config.CreateFrameworkCallback): void;

                    /**
                     * Calls CreateFramework.
                     * @param request CreateFrameworkRequest message or plain object
                     * @returns Promise
                     */
                    public createFramework(request: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkRequest): Promise<google.cloud.cloudsecuritycompliance.v1.Framework>;

                    /**
                     * Calls UpdateFramework.
                     * @param request UpdateFrameworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Framework
                     */
                    public updateFramework(request: google.cloud.cloudsecuritycompliance.v1.IUpdateFrameworkRequest, callback: google.cloud.cloudsecuritycompliance.v1.Config.UpdateFrameworkCallback): void;

                    /**
                     * Calls UpdateFramework.
                     * @param request UpdateFrameworkRequest message or plain object
                     * @returns Promise
                     */
                    public updateFramework(request: google.cloud.cloudsecuritycompliance.v1.IUpdateFrameworkRequest): Promise<google.cloud.cloudsecuritycompliance.v1.Framework>;

                    /**
                     * Calls DeleteFramework.
                     * @param request DeleteFrameworkRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteFramework(request: google.cloud.cloudsecuritycompliance.v1.IDeleteFrameworkRequest, callback: google.cloud.cloudsecuritycompliance.v1.Config.DeleteFrameworkCallback): void;

                    /**
                     * Calls DeleteFramework.
                     * @param request DeleteFrameworkRequest message or plain object
                     * @returns Promise
                     */
                    public deleteFramework(request: google.cloud.cloudsecuritycompliance.v1.IDeleteFrameworkRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListCloudControls.
                     * @param request ListCloudControlsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCloudControlsResponse
                     */
                    public listCloudControls(request: google.cloud.cloudsecuritycompliance.v1.IListCloudControlsRequest, callback: google.cloud.cloudsecuritycompliance.v1.Config.ListCloudControlsCallback): void;

                    /**
                     * Calls ListCloudControls.
                     * @param request ListCloudControlsRequest message or plain object
                     * @returns Promise
                     */
                    public listCloudControls(request: google.cloud.cloudsecuritycompliance.v1.IListCloudControlsRequest): Promise<google.cloud.cloudsecuritycompliance.v1.ListCloudControlsResponse>;

                    /**
                     * Calls GetCloudControl.
                     * @param request GetCloudControlRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CloudControl
                     */
                    public getCloudControl(request: google.cloud.cloudsecuritycompliance.v1.IGetCloudControlRequest, callback: google.cloud.cloudsecuritycompliance.v1.Config.GetCloudControlCallback): void;

                    /**
                     * Calls GetCloudControl.
                     * @param request GetCloudControlRequest message or plain object
                     * @returns Promise
                     */
                    public getCloudControl(request: google.cloud.cloudsecuritycompliance.v1.IGetCloudControlRequest): Promise<google.cloud.cloudsecuritycompliance.v1.CloudControl>;

                    /**
                     * Calls CreateCloudControl.
                     * @param request CreateCloudControlRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CloudControl
                     */
                    public createCloudControl(request: google.cloud.cloudsecuritycompliance.v1.ICreateCloudControlRequest, callback: google.cloud.cloudsecuritycompliance.v1.Config.CreateCloudControlCallback): void;

                    /**
                     * Calls CreateCloudControl.
                     * @param request CreateCloudControlRequest message or plain object
                     * @returns Promise
                     */
                    public createCloudControl(request: google.cloud.cloudsecuritycompliance.v1.ICreateCloudControlRequest): Promise<google.cloud.cloudsecuritycompliance.v1.CloudControl>;

                    /**
                     * Calls UpdateCloudControl.
                     * @param request UpdateCloudControlRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CloudControl
                     */
                    public updateCloudControl(request: google.cloud.cloudsecuritycompliance.v1.IUpdateCloudControlRequest, callback: google.cloud.cloudsecuritycompliance.v1.Config.UpdateCloudControlCallback): void;

                    /**
                     * Calls UpdateCloudControl.
                     * @param request UpdateCloudControlRequest message or plain object
                     * @returns Promise
                     */
                    public updateCloudControl(request: google.cloud.cloudsecuritycompliance.v1.IUpdateCloudControlRequest): Promise<google.cloud.cloudsecuritycompliance.v1.CloudControl>;

                    /**
                     * Calls DeleteCloudControl.
                     * @param request DeleteCloudControlRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteCloudControl(request: google.cloud.cloudsecuritycompliance.v1.IDeleteCloudControlRequest, callback: google.cloud.cloudsecuritycompliance.v1.Config.DeleteCloudControlCallback): void;

                    /**
                     * Calls DeleteCloudControl.
                     * @param request DeleteCloudControlRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCloudControl(request: google.cloud.cloudsecuritycompliance.v1.IDeleteCloudControlRequest): Promise<google.protobuf.Empty>;
                }

                namespace Config {

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Config|listFrameworks}.
                     * @param error Error, if any
                     * @param [response] ListFrameworksResponse
                     */
                    type ListFrameworksCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.ListFrameworksResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Config|getFramework}.
                     * @param error Error, if any
                     * @param [response] Framework
                     */
                    type GetFrameworkCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.Framework) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Config|createFramework}.
                     * @param error Error, if any
                     * @param [response] Framework
                     */
                    type CreateFrameworkCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.Framework) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Config|updateFramework}.
                     * @param error Error, if any
                     * @param [response] Framework
                     */
                    type UpdateFrameworkCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.Framework) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Config|deleteFramework}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteFrameworkCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Config|listCloudControls}.
                     * @param error Error, if any
                     * @param [response] ListCloudControlsResponse
                     */
                    type ListCloudControlsCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.ListCloudControlsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Config|getCloudControl}.
                     * @param error Error, if any
                     * @param [response] CloudControl
                     */
                    type GetCloudControlCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.CloudControl) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Config|createCloudControl}.
                     * @param error Error, if any
                     * @param [response] CloudControl
                     */
                    type CreateCloudControlCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.CloudControl) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Config|updateCloudControl}.
                     * @param error Error, if any
                     * @param [response] CloudControl
                     */
                    type UpdateCloudControlCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.CloudControl) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Config|deleteCloudControl}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteCloudControlCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a ListFrameworksRequest. */
                interface IListFrameworksRequest {

                    /** ListFrameworksRequest parent */
                    parent?: (string|null);

                    /** ListFrameworksRequest pageSize */
                    pageSize?: (number|null);

                    /** ListFrameworksRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListFrameworksRequest. */
                class ListFrameworksRequest implements IListFrameworksRequest {

                    /**
                     * Constructs a new ListFrameworksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworksRequest);

                    /** ListFrameworksRequest parent. */
                    public parent: string;

                    /** ListFrameworksRequest pageSize. */
                    public pageSize: number;

                    /** ListFrameworksRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListFrameworksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFrameworksRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworksRequest): google.cloud.cloudsecuritycompliance.v1.ListFrameworksRequest;

                    /**
                     * Encodes the specified ListFrameworksRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworksRequest.verify|verify} messages.
                     * @param message ListFrameworksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFrameworksRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworksRequest.verify|verify} messages.
                     * @param message ListFrameworksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFrameworksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFrameworksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListFrameworksRequest;

                    /**
                     * Decodes a ListFrameworksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFrameworksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListFrameworksRequest;

                    /**
                     * Verifies a ListFrameworksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFrameworksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFrameworksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListFrameworksRequest;

                    /**
                     * Creates a plain object from a ListFrameworksRequest message. Also converts values to other types if specified.
                     * @param message ListFrameworksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListFrameworksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFrameworksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFrameworksRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListFrameworksResponse. */
                interface IListFrameworksResponse {

                    /** ListFrameworksResponse frameworks */
                    frameworks?: (google.cloud.cloudsecuritycompliance.v1.IFramework[]|null);

                    /** ListFrameworksResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListFrameworksResponse. */
                class ListFrameworksResponse implements IListFrameworksResponse {

                    /**
                     * Constructs a new ListFrameworksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworksResponse);

                    /** ListFrameworksResponse frameworks. */
                    public frameworks: google.cloud.cloudsecuritycompliance.v1.IFramework[];

                    /** ListFrameworksResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListFrameworksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFrameworksResponse instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworksResponse): google.cloud.cloudsecuritycompliance.v1.ListFrameworksResponse;

                    /**
                     * Encodes the specified ListFrameworksResponse message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworksResponse.verify|verify} messages.
                     * @param message ListFrameworksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFrameworksResponse message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworksResponse.verify|verify} messages.
                     * @param message ListFrameworksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFrameworksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFrameworksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListFrameworksResponse;

                    /**
                     * Decodes a ListFrameworksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFrameworksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListFrameworksResponse;

                    /**
                     * Verifies a ListFrameworksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFrameworksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFrameworksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListFrameworksResponse;

                    /**
                     * Creates a plain object from a ListFrameworksResponse message. Also converts values to other types if specified.
                     * @param message ListFrameworksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListFrameworksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFrameworksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFrameworksResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetFrameworkRequest. */
                interface IGetFrameworkRequest {

                    /** GetFrameworkRequest name */
                    name?: (string|null);

                    /** GetFrameworkRequest majorRevisionId */
                    majorRevisionId?: (number|Long|string|null);
                }

                /** Represents a GetFrameworkRequest. */
                class GetFrameworkRequest implements IGetFrameworkRequest {

                    /**
                     * Constructs a new GetFrameworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkRequest);

                    /** GetFrameworkRequest name. */
                    public name: string;

                    /** GetFrameworkRequest majorRevisionId. */
                    public majorRevisionId: (number|Long|string);

                    /**
                     * Creates a new GetFrameworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFrameworkRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkRequest): google.cloud.cloudsecuritycompliance.v1.GetFrameworkRequest;

                    /**
                     * Encodes the specified GetFrameworkRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GetFrameworkRequest.verify|verify} messages.
                     * @param message GetFrameworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFrameworkRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GetFrameworkRequest.verify|verify} messages.
                     * @param message GetFrameworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFrameworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFrameworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.GetFrameworkRequest;

                    /**
                     * Decodes a GetFrameworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFrameworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.GetFrameworkRequest;

                    /**
                     * Verifies a GetFrameworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFrameworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFrameworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.GetFrameworkRequest;

                    /**
                     * Creates a plain object from a GetFrameworkRequest message. Also converts values to other types if specified.
                     * @param message GetFrameworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.GetFrameworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFrameworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetFrameworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateFrameworkRequest. */
                interface ICreateFrameworkRequest {

                    /** CreateFrameworkRequest parent */
                    parent?: (string|null);

                    /** CreateFrameworkRequest frameworkId */
                    frameworkId?: (string|null);

                    /** CreateFrameworkRequest framework */
                    framework?: (google.cloud.cloudsecuritycompliance.v1.IFramework|null);
                }

                /** Represents a CreateFrameworkRequest. */
                class CreateFrameworkRequest implements ICreateFrameworkRequest {

                    /**
                     * Constructs a new CreateFrameworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkRequest);

                    /** CreateFrameworkRequest parent. */
                    public parent: string;

                    /** CreateFrameworkRequest frameworkId. */
                    public frameworkId: string;

                    /** CreateFrameworkRequest framework. */
                    public framework?: (google.cloud.cloudsecuritycompliance.v1.IFramework|null);

                    /**
                     * Creates a new CreateFrameworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateFrameworkRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkRequest): google.cloud.cloudsecuritycompliance.v1.CreateFrameworkRequest;

                    /**
                     * Encodes the specified CreateFrameworkRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CreateFrameworkRequest.verify|verify} messages.
                     * @param message CreateFrameworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateFrameworkRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CreateFrameworkRequest.verify|verify} messages.
                     * @param message CreateFrameworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateFrameworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateFrameworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CreateFrameworkRequest;

                    /**
                     * Decodes a CreateFrameworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateFrameworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CreateFrameworkRequest;

                    /**
                     * Verifies a CreateFrameworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateFrameworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateFrameworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CreateFrameworkRequest;

                    /**
                     * Creates a plain object from a CreateFrameworkRequest message. Also converts values to other types if specified.
                     * @param message CreateFrameworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CreateFrameworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateFrameworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateFrameworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateFrameworkRequest. */
                interface IUpdateFrameworkRequest {

                    /** UpdateFrameworkRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateFrameworkRequest framework */
                    framework?: (google.cloud.cloudsecuritycompliance.v1.IFramework|null);

                    /** UpdateFrameworkRequest majorRevisionId */
                    majorRevisionId?: (number|Long|string|null);
                }

                /** Represents an UpdateFrameworkRequest. */
                class UpdateFrameworkRequest implements IUpdateFrameworkRequest {

                    /**
                     * Constructs a new UpdateFrameworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IUpdateFrameworkRequest);

                    /** UpdateFrameworkRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateFrameworkRequest framework. */
                    public framework?: (google.cloud.cloudsecuritycompliance.v1.IFramework|null);

                    /** UpdateFrameworkRequest majorRevisionId. */
                    public majorRevisionId: (number|Long|string);

                    /**
                     * Creates a new UpdateFrameworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFrameworkRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IUpdateFrameworkRequest): google.cloud.cloudsecuritycompliance.v1.UpdateFrameworkRequest;

                    /**
                     * Encodes the specified UpdateFrameworkRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.UpdateFrameworkRequest.verify|verify} messages.
                     * @param message UpdateFrameworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IUpdateFrameworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFrameworkRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.UpdateFrameworkRequest.verify|verify} messages.
                     * @param message UpdateFrameworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IUpdateFrameworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFrameworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFrameworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.UpdateFrameworkRequest;

                    /**
                     * Decodes an UpdateFrameworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFrameworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.UpdateFrameworkRequest;

                    /**
                     * Verifies an UpdateFrameworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFrameworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFrameworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.UpdateFrameworkRequest;

                    /**
                     * Creates a plain object from an UpdateFrameworkRequest message. Also converts values to other types if specified.
                     * @param message UpdateFrameworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.UpdateFrameworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFrameworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateFrameworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteFrameworkRequest. */
                interface IDeleteFrameworkRequest {

                    /** DeleteFrameworkRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteFrameworkRequest. */
                class DeleteFrameworkRequest implements IDeleteFrameworkRequest {

                    /**
                     * Constructs a new DeleteFrameworkRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IDeleteFrameworkRequest);

                    /** DeleteFrameworkRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteFrameworkRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteFrameworkRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IDeleteFrameworkRequest): google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkRequest;

                    /**
                     * Encodes the specified DeleteFrameworkRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkRequest.verify|verify} messages.
                     * @param message DeleteFrameworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IDeleteFrameworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteFrameworkRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkRequest.verify|verify} messages.
                     * @param message DeleteFrameworkRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IDeleteFrameworkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteFrameworkRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteFrameworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkRequest;

                    /**
                     * Decodes a DeleteFrameworkRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteFrameworkRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkRequest;

                    /**
                     * Verifies a DeleteFrameworkRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteFrameworkRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteFrameworkRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkRequest;

                    /**
                     * Creates a plain object from a DeleteFrameworkRequest message. Also converts values to other types if specified.
                     * @param message DeleteFrameworkRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteFrameworkRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteFrameworkRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCloudControlsRequest. */
                interface IListCloudControlsRequest {

                    /** ListCloudControlsRequest parent */
                    parent?: (string|null);

                    /** ListCloudControlsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCloudControlsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListCloudControlsRequest. */
                class ListCloudControlsRequest implements IListCloudControlsRequest {

                    /**
                     * Constructs a new ListCloudControlsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListCloudControlsRequest);

                    /** ListCloudControlsRequest parent. */
                    public parent: string;

                    /** ListCloudControlsRequest pageSize. */
                    public pageSize: number;

                    /** ListCloudControlsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListCloudControlsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCloudControlsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListCloudControlsRequest): google.cloud.cloudsecuritycompliance.v1.ListCloudControlsRequest;

                    /**
                     * Encodes the specified ListCloudControlsRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListCloudControlsRequest.verify|verify} messages.
                     * @param message ListCloudControlsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListCloudControlsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCloudControlsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListCloudControlsRequest.verify|verify} messages.
                     * @param message ListCloudControlsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListCloudControlsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCloudControlsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCloudControlsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListCloudControlsRequest;

                    /**
                     * Decodes a ListCloudControlsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCloudControlsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListCloudControlsRequest;

                    /**
                     * Verifies a ListCloudControlsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCloudControlsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCloudControlsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListCloudControlsRequest;

                    /**
                     * Creates a plain object from a ListCloudControlsRequest message. Also converts values to other types if specified.
                     * @param message ListCloudControlsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListCloudControlsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCloudControlsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCloudControlsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCloudControlsResponse. */
                interface IListCloudControlsResponse {

                    /** ListCloudControlsResponse cloudControls */
                    cloudControls?: (google.cloud.cloudsecuritycompliance.v1.ICloudControl[]|null);

                    /** ListCloudControlsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListCloudControlsResponse. */
                class ListCloudControlsResponse implements IListCloudControlsResponse {

                    /**
                     * Constructs a new ListCloudControlsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListCloudControlsResponse);

                    /** ListCloudControlsResponse cloudControls. */
                    public cloudControls: google.cloud.cloudsecuritycompliance.v1.ICloudControl[];

                    /** ListCloudControlsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListCloudControlsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCloudControlsResponse instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListCloudControlsResponse): google.cloud.cloudsecuritycompliance.v1.ListCloudControlsResponse;

                    /**
                     * Encodes the specified ListCloudControlsResponse message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListCloudControlsResponse.verify|verify} messages.
                     * @param message ListCloudControlsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListCloudControlsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCloudControlsResponse message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListCloudControlsResponse.verify|verify} messages.
                     * @param message ListCloudControlsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListCloudControlsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCloudControlsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCloudControlsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListCloudControlsResponse;

                    /**
                     * Decodes a ListCloudControlsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCloudControlsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListCloudControlsResponse;

                    /**
                     * Verifies a ListCloudControlsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCloudControlsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCloudControlsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListCloudControlsResponse;

                    /**
                     * Creates a plain object from a ListCloudControlsResponse message. Also converts values to other types if specified.
                     * @param message ListCloudControlsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListCloudControlsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCloudControlsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCloudControlsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCloudControlRequest. */
                interface IGetCloudControlRequest {

                    /** GetCloudControlRequest name */
                    name?: (string|null);

                    /** GetCloudControlRequest majorRevisionId */
                    majorRevisionId?: (number|Long|string|null);
                }

                /** Represents a GetCloudControlRequest. */
                class GetCloudControlRequest implements IGetCloudControlRequest {

                    /**
                     * Constructs a new GetCloudControlRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IGetCloudControlRequest);

                    /** GetCloudControlRequest name. */
                    public name: string;

                    /** GetCloudControlRequest majorRevisionId. */
                    public majorRevisionId: (number|Long|string);

                    /**
                     * Creates a new GetCloudControlRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCloudControlRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IGetCloudControlRequest): google.cloud.cloudsecuritycompliance.v1.GetCloudControlRequest;

                    /**
                     * Encodes the specified GetCloudControlRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GetCloudControlRequest.verify|verify} messages.
                     * @param message GetCloudControlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IGetCloudControlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCloudControlRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GetCloudControlRequest.verify|verify} messages.
                     * @param message GetCloudControlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IGetCloudControlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCloudControlRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCloudControlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.GetCloudControlRequest;

                    /**
                     * Decodes a GetCloudControlRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCloudControlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.GetCloudControlRequest;

                    /**
                     * Verifies a GetCloudControlRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCloudControlRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCloudControlRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.GetCloudControlRequest;

                    /**
                     * Creates a plain object from a GetCloudControlRequest message. Also converts values to other types if specified.
                     * @param message GetCloudControlRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.GetCloudControlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCloudControlRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCloudControlRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateCloudControlRequest. */
                interface ICreateCloudControlRequest {

                    /** CreateCloudControlRequest parent */
                    parent?: (string|null);

                    /** CreateCloudControlRequest cloudControlId */
                    cloudControlId?: (string|null);

                    /** CreateCloudControlRequest cloudControl */
                    cloudControl?: (google.cloud.cloudsecuritycompliance.v1.ICloudControl|null);
                }

                /** Represents a CreateCloudControlRequest. */
                class CreateCloudControlRequest implements ICreateCloudControlRequest {

                    /**
                     * Constructs a new CreateCloudControlRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICreateCloudControlRequest);

                    /** CreateCloudControlRequest parent. */
                    public parent: string;

                    /** CreateCloudControlRequest cloudControlId. */
                    public cloudControlId: string;

                    /** CreateCloudControlRequest cloudControl. */
                    public cloudControl?: (google.cloud.cloudsecuritycompliance.v1.ICloudControl|null);

                    /**
                     * Creates a new CreateCloudControlRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCloudControlRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICreateCloudControlRequest): google.cloud.cloudsecuritycompliance.v1.CreateCloudControlRequest;

                    /**
                     * Encodes the specified CreateCloudControlRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CreateCloudControlRequest.verify|verify} messages.
                     * @param message CreateCloudControlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICreateCloudControlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCloudControlRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CreateCloudControlRequest.verify|verify} messages.
                     * @param message CreateCloudControlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICreateCloudControlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCloudControlRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCloudControlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CreateCloudControlRequest;

                    /**
                     * Decodes a CreateCloudControlRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCloudControlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CreateCloudControlRequest;

                    /**
                     * Verifies a CreateCloudControlRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCloudControlRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCloudControlRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CreateCloudControlRequest;

                    /**
                     * Creates a plain object from a CreateCloudControlRequest message. Also converts values to other types if specified.
                     * @param message CreateCloudControlRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CreateCloudControlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCloudControlRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCloudControlRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateCloudControlRequest. */
                interface IUpdateCloudControlRequest {

                    /** UpdateCloudControlRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateCloudControlRequest cloudControl */
                    cloudControl?: (google.cloud.cloudsecuritycompliance.v1.ICloudControl|null);
                }

                /** Represents an UpdateCloudControlRequest. */
                class UpdateCloudControlRequest implements IUpdateCloudControlRequest {

                    /**
                     * Constructs a new UpdateCloudControlRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IUpdateCloudControlRequest);

                    /** UpdateCloudControlRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateCloudControlRequest cloudControl. */
                    public cloudControl?: (google.cloud.cloudsecuritycompliance.v1.ICloudControl|null);

                    /**
                     * Creates a new UpdateCloudControlRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCloudControlRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IUpdateCloudControlRequest): google.cloud.cloudsecuritycompliance.v1.UpdateCloudControlRequest;

                    /**
                     * Encodes the specified UpdateCloudControlRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.UpdateCloudControlRequest.verify|verify} messages.
                     * @param message UpdateCloudControlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IUpdateCloudControlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCloudControlRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.UpdateCloudControlRequest.verify|verify} messages.
                     * @param message UpdateCloudControlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IUpdateCloudControlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCloudControlRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCloudControlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.UpdateCloudControlRequest;

                    /**
                     * Decodes an UpdateCloudControlRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCloudControlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.UpdateCloudControlRequest;

                    /**
                     * Verifies an UpdateCloudControlRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCloudControlRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCloudControlRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.UpdateCloudControlRequest;

                    /**
                     * Creates a plain object from an UpdateCloudControlRequest message. Also converts values to other types if specified.
                     * @param message UpdateCloudControlRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.UpdateCloudControlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCloudControlRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateCloudControlRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteCloudControlRequest. */
                interface IDeleteCloudControlRequest {

                    /** DeleteCloudControlRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteCloudControlRequest. */
                class DeleteCloudControlRequest implements IDeleteCloudControlRequest {

                    /**
                     * Constructs a new DeleteCloudControlRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IDeleteCloudControlRequest);

                    /** DeleteCloudControlRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteCloudControlRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCloudControlRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IDeleteCloudControlRequest): google.cloud.cloudsecuritycompliance.v1.DeleteCloudControlRequest;

                    /**
                     * Encodes the specified DeleteCloudControlRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.DeleteCloudControlRequest.verify|verify} messages.
                     * @param message DeleteCloudControlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IDeleteCloudControlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCloudControlRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.DeleteCloudControlRequest.verify|verify} messages.
                     * @param message DeleteCloudControlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IDeleteCloudControlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCloudControlRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCloudControlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.DeleteCloudControlRequest;

                    /**
                     * Decodes a DeleteCloudControlRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCloudControlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.DeleteCloudControlRequest;

                    /**
                     * Verifies a DeleteCloudControlRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCloudControlRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCloudControlRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.DeleteCloudControlRequest;

                    /**
                     * Creates a plain object from a DeleteCloudControlRequest message. Also converts values to other types if specified.
                     * @param message DeleteCloudControlRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.DeleteCloudControlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCloudControlRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteCloudControlRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a Deployment */
                class Deployment extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Deployment service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Deployment service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Deployment;

                    /**
                     * Calls CreateFrameworkDeployment.
                     * @param request CreateFrameworkDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createFrameworkDeployment(request: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkDeploymentRequest, callback: google.cloud.cloudsecuritycompliance.v1.Deployment.CreateFrameworkDeploymentCallback): void;

                    /**
                     * Calls CreateFrameworkDeployment.
                     * @param request CreateFrameworkDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public createFrameworkDeployment(request: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkDeploymentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteFrameworkDeployment.
                     * @param request DeleteFrameworkDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteFrameworkDeployment(request: google.cloud.cloudsecuritycompliance.v1.IDeleteFrameworkDeploymentRequest, callback: google.cloud.cloudsecuritycompliance.v1.Deployment.DeleteFrameworkDeploymentCallback): void;

                    /**
                     * Calls DeleteFrameworkDeployment.
                     * @param request DeleteFrameworkDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public deleteFrameworkDeployment(request: google.cloud.cloudsecuritycompliance.v1.IDeleteFrameworkDeploymentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetFrameworkDeployment.
                     * @param request GetFrameworkDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FrameworkDeployment
                     */
                    public getFrameworkDeployment(request: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkDeploymentRequest, callback: google.cloud.cloudsecuritycompliance.v1.Deployment.GetFrameworkDeploymentCallback): void;

                    /**
                     * Calls GetFrameworkDeployment.
                     * @param request GetFrameworkDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public getFrameworkDeployment(request: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkDeploymentRequest): Promise<google.cloud.cloudsecuritycompliance.v1.FrameworkDeployment>;

                    /**
                     * Calls ListFrameworkDeployments.
                     * @param request ListFrameworkDeploymentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFrameworkDeploymentsResponse
                     */
                    public listFrameworkDeployments(request: google.cloud.cloudsecuritycompliance.v1.IListFrameworkDeploymentsRequest, callback: google.cloud.cloudsecuritycompliance.v1.Deployment.ListFrameworkDeploymentsCallback): void;

                    /**
                     * Calls ListFrameworkDeployments.
                     * @param request ListFrameworkDeploymentsRequest message or plain object
                     * @returns Promise
                     */
                    public listFrameworkDeployments(request: google.cloud.cloudsecuritycompliance.v1.IListFrameworkDeploymentsRequest): Promise<google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsResponse>;

                    /**
                     * Calls GetCloudControlDeployment.
                     * @param request GetCloudControlDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CloudControlDeployment
                     */
                    public getCloudControlDeployment(request: google.cloud.cloudsecuritycompliance.v1.IGetCloudControlDeploymentRequest, callback: google.cloud.cloudsecuritycompliance.v1.Deployment.GetCloudControlDeploymentCallback): void;

                    /**
                     * Calls GetCloudControlDeployment.
                     * @param request GetCloudControlDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public getCloudControlDeployment(request: google.cloud.cloudsecuritycompliance.v1.IGetCloudControlDeploymentRequest): Promise<google.cloud.cloudsecuritycompliance.v1.CloudControlDeployment>;

                    /**
                     * Calls ListCloudControlDeployments.
                     * @param request ListCloudControlDeploymentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCloudControlDeploymentsResponse
                     */
                    public listCloudControlDeployments(request: google.cloud.cloudsecuritycompliance.v1.IListCloudControlDeploymentsRequest, callback: google.cloud.cloudsecuritycompliance.v1.Deployment.ListCloudControlDeploymentsCallback): void;

                    /**
                     * Calls ListCloudControlDeployments.
                     * @param request ListCloudControlDeploymentsRequest message or plain object
                     * @returns Promise
                     */
                    public listCloudControlDeployments(request: google.cloud.cloudsecuritycompliance.v1.IListCloudControlDeploymentsRequest): Promise<google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsResponse>;
                }

                namespace Deployment {

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Deployment|createFrameworkDeployment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateFrameworkDeploymentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Deployment|deleteFrameworkDeployment}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteFrameworkDeploymentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Deployment|getFrameworkDeployment}.
                     * @param error Error, if any
                     * @param [response] FrameworkDeployment
                     */
                    type GetFrameworkDeploymentCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.FrameworkDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Deployment|listFrameworkDeployments}.
                     * @param error Error, if any
                     * @param [response] ListFrameworkDeploymentsResponse
                     */
                    type ListFrameworkDeploymentsCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Deployment|getCloudControlDeployment}.
                     * @param error Error, if any
                     * @param [response] CloudControlDeployment
                     */
                    type GetCloudControlDeploymentCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.CloudControlDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Deployment|listCloudControlDeployments}.
                     * @param error Error, if any
                     * @param [response] ListCloudControlDeploymentsResponse
                     */
                    type ListCloudControlDeploymentsCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsResponse) => void;
                }

                /** DeploymentState enum. */
                enum DeploymentState {
                    DEPLOYMENT_STATE_UNSPECIFIED = 0,
                    DEPLOYMENT_STATE_VALIDATING = 1,
                    DEPLOYMENT_STATE_CREATING = 2,
                    DEPLOYMENT_STATE_DELETING = 3,
                    DEPLOYMENT_STATE_FAILED = 4,
                    DEPLOYMENT_STATE_READY = 5,
                    DEPLOYMENT_STATE_PARTIALLY_DEPLOYED = 6,
                    DEPLOYMENT_STATE_PARTIALLY_DELETED = 7
                }

                /** Properties of a FrameworkDeployment. */
                interface IFrameworkDeployment {

                    /** FrameworkDeployment name */
                    name?: (string|null);

                    /** FrameworkDeployment targetResourceConfig */
                    targetResourceConfig?: (google.cloud.cloudsecuritycompliance.v1.ITargetResourceConfig|null);

                    /** FrameworkDeployment computedTargetResource */
                    computedTargetResource?: (string|null);

                    /** FrameworkDeployment framework */
                    framework?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkReference|null);

                    /** FrameworkDeployment description */
                    description?: (string|null);

                    /** FrameworkDeployment cloudControlMetadata */
                    cloudControlMetadata?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlMetadata[]|null);

                    /** FrameworkDeployment deploymentState */
                    deploymentState?: (google.cloud.cloudsecuritycompliance.v1.DeploymentState|keyof typeof google.cloud.cloudsecuritycompliance.v1.DeploymentState|null);

                    /** FrameworkDeployment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** FrameworkDeployment updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** FrameworkDeployment etag */
                    etag?: (string|null);

                    /** FrameworkDeployment targetResourceDisplayName */
                    targetResourceDisplayName?: (string|null);

                    /** FrameworkDeployment cloudControlDeploymentReferences */
                    cloudControlDeploymentReferences?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlDeploymentReference[]|null);
                }

                /** Represents a FrameworkDeployment. */
                class FrameworkDeployment implements IFrameworkDeployment {

                    /**
                     * Constructs a new FrameworkDeployment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkDeployment);

                    /** FrameworkDeployment name. */
                    public name: string;

                    /** FrameworkDeployment targetResourceConfig. */
                    public targetResourceConfig?: (google.cloud.cloudsecuritycompliance.v1.ITargetResourceConfig|null);

                    /** FrameworkDeployment computedTargetResource. */
                    public computedTargetResource: string;

                    /** FrameworkDeployment framework. */
                    public framework?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkReference|null);

                    /** FrameworkDeployment description. */
                    public description: string;

                    /** FrameworkDeployment cloudControlMetadata. */
                    public cloudControlMetadata: google.cloud.cloudsecuritycompliance.v1.ICloudControlMetadata[];

                    /** FrameworkDeployment deploymentState. */
                    public deploymentState: (google.cloud.cloudsecuritycompliance.v1.DeploymentState|keyof typeof google.cloud.cloudsecuritycompliance.v1.DeploymentState);

                    /** FrameworkDeployment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** FrameworkDeployment updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** FrameworkDeployment etag. */
                    public etag: string;

                    /** FrameworkDeployment targetResourceDisplayName. */
                    public targetResourceDisplayName: string;

                    /** FrameworkDeployment cloudControlDeploymentReferences. */
                    public cloudControlDeploymentReferences: google.cloud.cloudsecuritycompliance.v1.ICloudControlDeploymentReference[];

                    /**
                     * Creates a new FrameworkDeployment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FrameworkDeployment instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkDeployment): google.cloud.cloudsecuritycompliance.v1.FrameworkDeployment;

                    /**
                     * Encodes the specified FrameworkDeployment message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkDeployment.verify|verify} messages.
                     * @param message FrameworkDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FrameworkDeployment message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkDeployment.verify|verify} messages.
                     * @param message FrameworkDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FrameworkDeployment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FrameworkDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.FrameworkDeployment;

                    /**
                     * Decodes a FrameworkDeployment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FrameworkDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.FrameworkDeployment;

                    /**
                     * Verifies a FrameworkDeployment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FrameworkDeployment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FrameworkDeployment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.FrameworkDeployment;

                    /**
                     * Creates a plain object from a FrameworkDeployment message. Also converts values to other types if specified.
                     * @param message FrameworkDeployment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.FrameworkDeployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FrameworkDeployment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FrameworkDeployment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudControlDeployment. */
                interface ICloudControlDeployment {

                    /** CloudControlDeployment name */
                    name?: (string|null);

                    /** CloudControlDeployment targetResourceConfig */
                    targetResourceConfig?: (google.cloud.cloudsecuritycompliance.v1.ITargetResourceConfig|null);

                    /** CloudControlDeployment targetResource */
                    targetResource?: (string|null);

                    /** CloudControlDeployment cloudControlMetadata */
                    cloudControlMetadata?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlMetadata|null);

                    /** CloudControlDeployment description */
                    description?: (string|null);

                    /** CloudControlDeployment deploymentState */
                    deploymentState?: (google.cloud.cloudsecuritycompliance.v1.DeploymentState|keyof typeof google.cloud.cloudsecuritycompliance.v1.DeploymentState|null);

                    /** CloudControlDeployment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CloudControlDeployment updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** CloudControlDeployment etag */
                    etag?: (string|null);

                    /** CloudControlDeployment parameterSubstitutedCloudControl */
                    parameterSubstitutedCloudControl?: (google.cloud.cloudsecuritycompliance.v1.ICloudControl|null);

                    /** CloudControlDeployment frameworkDeploymentReferences */
                    frameworkDeploymentReferences?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkDeploymentReference[]|null);

                    /** CloudControlDeployment targetResourceDisplayName */
                    targetResourceDisplayName?: (string|null);
                }

                /** Represents a CloudControlDeployment. */
                class CloudControlDeployment implements ICloudControlDeployment {

                    /**
                     * Constructs a new CloudControlDeployment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlDeployment);

                    /** CloudControlDeployment name. */
                    public name: string;

                    /** CloudControlDeployment targetResourceConfig. */
                    public targetResourceConfig?: (google.cloud.cloudsecuritycompliance.v1.ITargetResourceConfig|null);

                    /** CloudControlDeployment targetResource. */
                    public targetResource: string;

                    /** CloudControlDeployment cloudControlMetadata. */
                    public cloudControlMetadata?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlMetadata|null);

                    /** CloudControlDeployment description. */
                    public description: string;

                    /** CloudControlDeployment deploymentState. */
                    public deploymentState: (google.cloud.cloudsecuritycompliance.v1.DeploymentState|keyof typeof google.cloud.cloudsecuritycompliance.v1.DeploymentState);

                    /** CloudControlDeployment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CloudControlDeployment updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** CloudControlDeployment etag. */
                    public etag: string;

                    /** CloudControlDeployment parameterSubstitutedCloudControl. */
                    public parameterSubstitutedCloudControl?: (google.cloud.cloudsecuritycompliance.v1.ICloudControl|null);

                    /** CloudControlDeployment frameworkDeploymentReferences. */
                    public frameworkDeploymentReferences: google.cloud.cloudsecuritycompliance.v1.IFrameworkDeploymentReference[];

                    /** CloudControlDeployment targetResourceDisplayName. */
                    public targetResourceDisplayName: string;

                    /**
                     * Creates a new CloudControlDeployment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudControlDeployment instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlDeployment): google.cloud.cloudsecuritycompliance.v1.CloudControlDeployment;

                    /**
                     * Encodes the specified CloudControlDeployment message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlDeployment.verify|verify} messages.
                     * @param message CloudControlDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudControlDeployment message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlDeployment.verify|verify} messages.
                     * @param message CloudControlDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudControlDeployment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudControlDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CloudControlDeployment;

                    /**
                     * Decodes a CloudControlDeployment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudControlDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CloudControlDeployment;

                    /**
                     * Verifies a CloudControlDeployment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudControlDeployment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudControlDeployment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CloudControlDeployment;

                    /**
                     * Creates a plain object from a CloudControlDeployment message. Also converts values to other types if specified.
                     * @param message CloudControlDeployment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CloudControlDeployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudControlDeployment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudControlDeployment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TargetResourceConfig. */
                interface ITargetResourceConfig {

                    /** TargetResourceConfig existingTargetResource */
                    existingTargetResource?: (string|null);

                    /** TargetResourceConfig targetResourceCreationConfig */
                    targetResourceCreationConfig?: (google.cloud.cloudsecuritycompliance.v1.ITargetResourceCreationConfig|null);
                }

                /** Represents a TargetResourceConfig. */
                class TargetResourceConfig implements ITargetResourceConfig {

                    /**
                     * Constructs a new TargetResourceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ITargetResourceConfig);

                    /** TargetResourceConfig existingTargetResource. */
                    public existingTargetResource?: (string|null);

                    /** TargetResourceConfig targetResourceCreationConfig. */
                    public targetResourceCreationConfig?: (google.cloud.cloudsecuritycompliance.v1.ITargetResourceCreationConfig|null);

                    /** TargetResourceConfig resourceConfig. */
                    public resourceConfig?: ("existingTargetResource"|"targetResourceCreationConfig");

                    /**
                     * Creates a new TargetResourceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TargetResourceConfig instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ITargetResourceConfig): google.cloud.cloudsecuritycompliance.v1.TargetResourceConfig;

                    /**
                     * Encodes the specified TargetResourceConfig message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.TargetResourceConfig.verify|verify} messages.
                     * @param message TargetResourceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ITargetResourceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TargetResourceConfig message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.TargetResourceConfig.verify|verify} messages.
                     * @param message TargetResourceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ITargetResourceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TargetResourceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TargetResourceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.TargetResourceConfig;

                    /**
                     * Decodes a TargetResourceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TargetResourceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.TargetResourceConfig;

                    /**
                     * Verifies a TargetResourceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TargetResourceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TargetResourceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.TargetResourceConfig;

                    /**
                     * Creates a plain object from a TargetResourceConfig message. Also converts values to other types if specified.
                     * @param message TargetResourceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.TargetResourceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TargetResourceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TargetResourceConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TargetResourceCreationConfig. */
                interface ITargetResourceCreationConfig {

                    /** TargetResourceCreationConfig folderCreationConfig */
                    folderCreationConfig?: (google.cloud.cloudsecuritycompliance.v1.IFolderCreationConfig|null);

                    /** TargetResourceCreationConfig projectCreationConfig */
                    projectCreationConfig?: (google.cloud.cloudsecuritycompliance.v1.IProjectCreationConfig|null);
                }

                /** Represents a TargetResourceCreationConfig. */
                class TargetResourceCreationConfig implements ITargetResourceCreationConfig {

                    /**
                     * Constructs a new TargetResourceCreationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ITargetResourceCreationConfig);

                    /** TargetResourceCreationConfig folderCreationConfig. */
                    public folderCreationConfig?: (google.cloud.cloudsecuritycompliance.v1.IFolderCreationConfig|null);

                    /** TargetResourceCreationConfig projectCreationConfig. */
                    public projectCreationConfig?: (google.cloud.cloudsecuritycompliance.v1.IProjectCreationConfig|null);

                    /** TargetResourceCreationConfig resourceCreationConfig. */
                    public resourceCreationConfig?: ("folderCreationConfig"|"projectCreationConfig");

                    /**
                     * Creates a new TargetResourceCreationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TargetResourceCreationConfig instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ITargetResourceCreationConfig): google.cloud.cloudsecuritycompliance.v1.TargetResourceCreationConfig;

                    /**
                     * Encodes the specified TargetResourceCreationConfig message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.TargetResourceCreationConfig.verify|verify} messages.
                     * @param message TargetResourceCreationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ITargetResourceCreationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TargetResourceCreationConfig message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.TargetResourceCreationConfig.verify|verify} messages.
                     * @param message TargetResourceCreationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ITargetResourceCreationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TargetResourceCreationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TargetResourceCreationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.TargetResourceCreationConfig;

                    /**
                     * Decodes a TargetResourceCreationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TargetResourceCreationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.TargetResourceCreationConfig;

                    /**
                     * Verifies a TargetResourceCreationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TargetResourceCreationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TargetResourceCreationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.TargetResourceCreationConfig;

                    /**
                     * Creates a plain object from a TargetResourceCreationConfig message. Also converts values to other types if specified.
                     * @param message TargetResourceCreationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.TargetResourceCreationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TargetResourceCreationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TargetResourceCreationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FolderCreationConfig. */
                interface IFolderCreationConfig {

                    /** FolderCreationConfig parent */
                    parent?: (string|null);

                    /** FolderCreationConfig folderDisplayName */
                    folderDisplayName?: (string|null);
                }

                /** Represents a FolderCreationConfig. */
                class FolderCreationConfig implements IFolderCreationConfig {

                    /**
                     * Constructs a new FolderCreationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IFolderCreationConfig);

                    /** FolderCreationConfig parent. */
                    public parent: string;

                    /** FolderCreationConfig folderDisplayName. */
                    public folderDisplayName: string;

                    /**
                     * Creates a new FolderCreationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FolderCreationConfig instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IFolderCreationConfig): google.cloud.cloudsecuritycompliance.v1.FolderCreationConfig;

                    /**
                     * Encodes the specified FolderCreationConfig message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FolderCreationConfig.verify|verify} messages.
                     * @param message FolderCreationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IFolderCreationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FolderCreationConfig message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FolderCreationConfig.verify|verify} messages.
                     * @param message FolderCreationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IFolderCreationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FolderCreationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FolderCreationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.FolderCreationConfig;

                    /**
                     * Decodes a FolderCreationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FolderCreationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.FolderCreationConfig;

                    /**
                     * Verifies a FolderCreationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FolderCreationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FolderCreationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.FolderCreationConfig;

                    /**
                     * Creates a plain object from a FolderCreationConfig message. Also converts values to other types if specified.
                     * @param message FolderCreationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.FolderCreationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FolderCreationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FolderCreationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ProjectCreationConfig. */
                interface IProjectCreationConfig {

                    /** ProjectCreationConfig parent */
                    parent?: (string|null);

                    /** ProjectCreationConfig projectDisplayName */
                    projectDisplayName?: (string|null);

                    /** ProjectCreationConfig billingAccountId */
                    billingAccountId?: (string|null);
                }

                /** Represents a ProjectCreationConfig. */
                class ProjectCreationConfig implements IProjectCreationConfig {

                    /**
                     * Constructs a new ProjectCreationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IProjectCreationConfig);

                    /** ProjectCreationConfig parent. */
                    public parent: string;

                    /** ProjectCreationConfig projectDisplayName. */
                    public projectDisplayName: string;

                    /** ProjectCreationConfig billingAccountId. */
                    public billingAccountId: string;

                    /**
                     * Creates a new ProjectCreationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProjectCreationConfig instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IProjectCreationConfig): google.cloud.cloudsecuritycompliance.v1.ProjectCreationConfig;

                    /**
                     * Encodes the specified ProjectCreationConfig message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ProjectCreationConfig.verify|verify} messages.
                     * @param message ProjectCreationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IProjectCreationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProjectCreationConfig message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ProjectCreationConfig.verify|verify} messages.
                     * @param message ProjectCreationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IProjectCreationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProjectCreationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProjectCreationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ProjectCreationConfig;

                    /**
                     * Decodes a ProjectCreationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProjectCreationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ProjectCreationConfig;

                    /**
                     * Verifies a ProjectCreationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProjectCreationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProjectCreationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ProjectCreationConfig;

                    /**
                     * Creates a plain object from a ProjectCreationConfig message. Also converts values to other types if specified.
                     * @param message ProjectCreationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ProjectCreationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProjectCreationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ProjectCreationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudControlMetadata. */
                interface ICloudControlMetadata {

                    /** CloudControlMetadata cloudControlDetails */
                    cloudControlDetails?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlDetails|null);

                    /** CloudControlMetadata enforcementMode */
                    enforcementMode?: (google.cloud.cloudsecuritycompliance.v1.EnforcementMode|keyof typeof google.cloud.cloudsecuritycompliance.v1.EnforcementMode|null);
                }

                /** Represents a CloudControlMetadata. */
                class CloudControlMetadata implements ICloudControlMetadata {

                    /**
                     * Constructs a new CloudControlMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlMetadata);

                    /** CloudControlMetadata cloudControlDetails. */
                    public cloudControlDetails?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlDetails|null);

                    /** CloudControlMetadata enforcementMode. */
                    public enforcementMode: (google.cloud.cloudsecuritycompliance.v1.EnforcementMode|keyof typeof google.cloud.cloudsecuritycompliance.v1.EnforcementMode);

                    /**
                     * Creates a new CloudControlMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudControlMetadata instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlMetadata): google.cloud.cloudsecuritycompliance.v1.CloudControlMetadata;

                    /**
                     * Encodes the specified CloudControlMetadata message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlMetadata.verify|verify} messages.
                     * @param message CloudControlMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudControlMetadata message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlMetadata.verify|verify} messages.
                     * @param message CloudControlMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudControlMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudControlMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CloudControlMetadata;

                    /**
                     * Decodes a CloudControlMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudControlMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CloudControlMetadata;

                    /**
                     * Verifies a CloudControlMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudControlMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudControlMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CloudControlMetadata;

                    /**
                     * Creates a plain object from a CloudControlMetadata message. Also converts values to other types if specified.
                     * @param message CloudControlMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CloudControlMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudControlMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudControlMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateFrameworkDeploymentRequest. */
                interface ICreateFrameworkDeploymentRequest {

                    /** CreateFrameworkDeploymentRequest parent */
                    parent?: (string|null);

                    /** CreateFrameworkDeploymentRequest frameworkDeploymentId */
                    frameworkDeploymentId?: (string|null);

                    /** CreateFrameworkDeploymentRequest frameworkDeployment */
                    frameworkDeployment?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkDeployment|null);
                }

                /** Represents a CreateFrameworkDeploymentRequest. */
                class CreateFrameworkDeploymentRequest implements ICreateFrameworkDeploymentRequest {

                    /**
                     * Constructs a new CreateFrameworkDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkDeploymentRequest);

                    /** CreateFrameworkDeploymentRequest parent. */
                    public parent: string;

                    /** CreateFrameworkDeploymentRequest frameworkDeploymentId. */
                    public frameworkDeploymentId: string;

                    /** CreateFrameworkDeploymentRequest frameworkDeployment. */
                    public frameworkDeployment?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkDeployment|null);

                    /**
                     * Creates a new CreateFrameworkDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateFrameworkDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkDeploymentRequest): google.cloud.cloudsecuritycompliance.v1.CreateFrameworkDeploymentRequest;

                    /**
                     * Encodes the specified CreateFrameworkDeploymentRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CreateFrameworkDeploymentRequest.verify|verify} messages.
                     * @param message CreateFrameworkDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateFrameworkDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CreateFrameworkDeploymentRequest.verify|verify} messages.
                     * @param message CreateFrameworkDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICreateFrameworkDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateFrameworkDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateFrameworkDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CreateFrameworkDeploymentRequest;

                    /**
                     * Decodes a CreateFrameworkDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateFrameworkDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CreateFrameworkDeploymentRequest;

                    /**
                     * Verifies a CreateFrameworkDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateFrameworkDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateFrameworkDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CreateFrameworkDeploymentRequest;

                    /**
                     * Creates a plain object from a CreateFrameworkDeploymentRequest message. Also converts values to other types if specified.
                     * @param message CreateFrameworkDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CreateFrameworkDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateFrameworkDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateFrameworkDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteFrameworkDeploymentRequest. */
                interface IDeleteFrameworkDeploymentRequest {

                    /** DeleteFrameworkDeploymentRequest name */
                    name?: (string|null);

                    /** DeleteFrameworkDeploymentRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteFrameworkDeploymentRequest. */
                class DeleteFrameworkDeploymentRequest implements IDeleteFrameworkDeploymentRequest {

                    /**
                     * Constructs a new DeleteFrameworkDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IDeleteFrameworkDeploymentRequest);

                    /** DeleteFrameworkDeploymentRequest name. */
                    public name: string;

                    /** DeleteFrameworkDeploymentRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteFrameworkDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteFrameworkDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IDeleteFrameworkDeploymentRequest): google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkDeploymentRequest;

                    /**
                     * Encodes the specified DeleteFrameworkDeploymentRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkDeploymentRequest.verify|verify} messages.
                     * @param message DeleteFrameworkDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IDeleteFrameworkDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteFrameworkDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkDeploymentRequest.verify|verify} messages.
                     * @param message DeleteFrameworkDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IDeleteFrameworkDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteFrameworkDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteFrameworkDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkDeploymentRequest;

                    /**
                     * Decodes a DeleteFrameworkDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteFrameworkDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkDeploymentRequest;

                    /**
                     * Verifies a DeleteFrameworkDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteFrameworkDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteFrameworkDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkDeploymentRequest;

                    /**
                     * Creates a plain object from a DeleteFrameworkDeploymentRequest message. Also converts values to other types if specified.
                     * @param message DeleteFrameworkDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.DeleteFrameworkDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteFrameworkDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteFrameworkDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetFrameworkDeploymentRequest. */
                interface IGetFrameworkDeploymentRequest {

                    /** GetFrameworkDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFrameworkDeploymentRequest. */
                class GetFrameworkDeploymentRequest implements IGetFrameworkDeploymentRequest {

                    /**
                     * Constructs a new GetFrameworkDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkDeploymentRequest);

                    /** GetFrameworkDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFrameworkDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFrameworkDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkDeploymentRequest): google.cloud.cloudsecuritycompliance.v1.GetFrameworkDeploymentRequest;

                    /**
                     * Encodes the specified GetFrameworkDeploymentRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GetFrameworkDeploymentRequest.verify|verify} messages.
                     * @param message GetFrameworkDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFrameworkDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GetFrameworkDeploymentRequest.verify|verify} messages.
                     * @param message GetFrameworkDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IGetFrameworkDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFrameworkDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFrameworkDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.GetFrameworkDeploymentRequest;

                    /**
                     * Decodes a GetFrameworkDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFrameworkDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.GetFrameworkDeploymentRequest;

                    /**
                     * Verifies a GetFrameworkDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFrameworkDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFrameworkDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.GetFrameworkDeploymentRequest;

                    /**
                     * Creates a plain object from a GetFrameworkDeploymentRequest message. Also converts values to other types if specified.
                     * @param message GetFrameworkDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.GetFrameworkDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFrameworkDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetFrameworkDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListFrameworkDeploymentsRequest. */
                interface IListFrameworkDeploymentsRequest {

                    /** ListFrameworkDeploymentsRequest parent */
                    parent?: (string|null);

                    /** ListFrameworkDeploymentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListFrameworkDeploymentsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListFrameworkDeploymentsRequest filter */
                    filter?: (string|null);

                    /** ListFrameworkDeploymentsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListFrameworkDeploymentsRequest. */
                class ListFrameworkDeploymentsRequest implements IListFrameworkDeploymentsRequest {

                    /**
                     * Constructs a new ListFrameworkDeploymentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworkDeploymentsRequest);

                    /** ListFrameworkDeploymentsRequest parent. */
                    public parent: string;

                    /** ListFrameworkDeploymentsRequest pageSize. */
                    public pageSize: number;

                    /** ListFrameworkDeploymentsRequest pageToken. */
                    public pageToken: string;

                    /** ListFrameworkDeploymentsRequest filter. */
                    public filter: string;

                    /** ListFrameworkDeploymentsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListFrameworkDeploymentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFrameworkDeploymentsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworkDeploymentsRequest): google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsRequest;

                    /**
                     * Encodes the specified ListFrameworkDeploymentsRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsRequest.verify|verify} messages.
                     * @param message ListFrameworkDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworkDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFrameworkDeploymentsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsRequest.verify|verify} messages.
                     * @param message ListFrameworkDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworkDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFrameworkDeploymentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFrameworkDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsRequest;

                    /**
                     * Decodes a ListFrameworkDeploymentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFrameworkDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsRequest;

                    /**
                     * Verifies a ListFrameworkDeploymentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFrameworkDeploymentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFrameworkDeploymentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsRequest;

                    /**
                     * Creates a plain object from a ListFrameworkDeploymentsRequest message. Also converts values to other types if specified.
                     * @param message ListFrameworkDeploymentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFrameworkDeploymentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFrameworkDeploymentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListFrameworkDeploymentsResponse. */
                interface IListFrameworkDeploymentsResponse {

                    /** ListFrameworkDeploymentsResponse frameworkDeployments */
                    frameworkDeployments?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkDeployment[]|null);

                    /** ListFrameworkDeploymentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListFrameworkDeploymentsResponse. */
                class ListFrameworkDeploymentsResponse implements IListFrameworkDeploymentsResponse {

                    /**
                     * Constructs a new ListFrameworkDeploymentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworkDeploymentsResponse);

                    /** ListFrameworkDeploymentsResponse frameworkDeployments. */
                    public frameworkDeployments: google.cloud.cloudsecuritycompliance.v1.IFrameworkDeployment[];

                    /** ListFrameworkDeploymentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListFrameworkDeploymentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFrameworkDeploymentsResponse instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworkDeploymentsResponse): google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsResponse;

                    /**
                     * Encodes the specified ListFrameworkDeploymentsResponse message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsResponse.verify|verify} messages.
                     * @param message ListFrameworkDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworkDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFrameworkDeploymentsResponse message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsResponse.verify|verify} messages.
                     * @param message ListFrameworkDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworkDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFrameworkDeploymentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFrameworkDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsResponse;

                    /**
                     * Decodes a ListFrameworkDeploymentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFrameworkDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsResponse;

                    /**
                     * Verifies a ListFrameworkDeploymentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFrameworkDeploymentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFrameworkDeploymentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsResponse;

                    /**
                     * Creates a plain object from a ListFrameworkDeploymentsResponse message. Also converts values to other types if specified.
                     * @param message ListFrameworkDeploymentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListFrameworkDeploymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFrameworkDeploymentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFrameworkDeploymentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCloudControlDeploymentRequest. */
                interface IGetCloudControlDeploymentRequest {

                    /** GetCloudControlDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCloudControlDeploymentRequest. */
                class GetCloudControlDeploymentRequest implements IGetCloudControlDeploymentRequest {

                    /**
                     * Constructs a new GetCloudControlDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IGetCloudControlDeploymentRequest);

                    /** GetCloudControlDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCloudControlDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCloudControlDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IGetCloudControlDeploymentRequest): google.cloud.cloudsecuritycompliance.v1.GetCloudControlDeploymentRequest;

                    /**
                     * Encodes the specified GetCloudControlDeploymentRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GetCloudControlDeploymentRequest.verify|verify} messages.
                     * @param message GetCloudControlDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IGetCloudControlDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCloudControlDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.GetCloudControlDeploymentRequest.verify|verify} messages.
                     * @param message GetCloudControlDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IGetCloudControlDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCloudControlDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCloudControlDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.GetCloudControlDeploymentRequest;

                    /**
                     * Decodes a GetCloudControlDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCloudControlDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.GetCloudControlDeploymentRequest;

                    /**
                     * Verifies a GetCloudControlDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCloudControlDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCloudControlDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.GetCloudControlDeploymentRequest;

                    /**
                     * Creates a plain object from a GetCloudControlDeploymentRequest message. Also converts values to other types if specified.
                     * @param message GetCloudControlDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.GetCloudControlDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCloudControlDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCloudControlDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCloudControlDeploymentsRequest. */
                interface IListCloudControlDeploymentsRequest {

                    /** ListCloudControlDeploymentsRequest parent */
                    parent?: (string|null);

                    /** ListCloudControlDeploymentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCloudControlDeploymentsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCloudControlDeploymentsRequest filter */
                    filter?: (string|null);

                    /** ListCloudControlDeploymentsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListCloudControlDeploymentsRequest. */
                class ListCloudControlDeploymentsRequest implements IListCloudControlDeploymentsRequest {

                    /**
                     * Constructs a new ListCloudControlDeploymentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListCloudControlDeploymentsRequest);

                    /** ListCloudControlDeploymentsRequest parent. */
                    public parent: string;

                    /** ListCloudControlDeploymentsRequest pageSize. */
                    public pageSize: number;

                    /** ListCloudControlDeploymentsRequest pageToken. */
                    public pageToken: string;

                    /** ListCloudControlDeploymentsRequest filter. */
                    public filter: string;

                    /** ListCloudControlDeploymentsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListCloudControlDeploymentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCloudControlDeploymentsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListCloudControlDeploymentsRequest): google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsRequest;

                    /**
                     * Encodes the specified ListCloudControlDeploymentsRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsRequest.verify|verify} messages.
                     * @param message ListCloudControlDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListCloudControlDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCloudControlDeploymentsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsRequest.verify|verify} messages.
                     * @param message ListCloudControlDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListCloudControlDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCloudControlDeploymentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCloudControlDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsRequest;

                    /**
                     * Decodes a ListCloudControlDeploymentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCloudControlDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsRequest;

                    /**
                     * Verifies a ListCloudControlDeploymentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCloudControlDeploymentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCloudControlDeploymentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsRequest;

                    /**
                     * Creates a plain object from a ListCloudControlDeploymentsRequest message. Also converts values to other types if specified.
                     * @param message ListCloudControlDeploymentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCloudControlDeploymentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCloudControlDeploymentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCloudControlDeploymentsResponse. */
                interface IListCloudControlDeploymentsResponse {

                    /** ListCloudControlDeploymentsResponse cloudControlDeployments */
                    cloudControlDeployments?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlDeployment[]|null);

                    /** ListCloudControlDeploymentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListCloudControlDeploymentsResponse. */
                class ListCloudControlDeploymentsResponse implements IListCloudControlDeploymentsResponse {

                    /**
                     * Constructs a new ListCloudControlDeploymentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListCloudControlDeploymentsResponse);

                    /** ListCloudControlDeploymentsResponse cloudControlDeployments. */
                    public cloudControlDeployments: google.cloud.cloudsecuritycompliance.v1.ICloudControlDeployment[];

                    /** ListCloudControlDeploymentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListCloudControlDeploymentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCloudControlDeploymentsResponse instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListCloudControlDeploymentsResponse): google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsResponse;

                    /**
                     * Encodes the specified ListCloudControlDeploymentsResponse message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsResponse.verify|verify} messages.
                     * @param message ListCloudControlDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListCloudControlDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCloudControlDeploymentsResponse message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsResponse.verify|verify} messages.
                     * @param message ListCloudControlDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListCloudControlDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCloudControlDeploymentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCloudControlDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsResponse;

                    /**
                     * Decodes a ListCloudControlDeploymentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCloudControlDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsResponse;

                    /**
                     * Verifies a ListCloudControlDeploymentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCloudControlDeploymentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCloudControlDeploymentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsResponse;

                    /**
                     * Creates a plain object from a ListCloudControlDeploymentsResponse message. Also converts values to other types if specified.
                     * @param message ListCloudControlDeploymentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListCloudControlDeploymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCloudControlDeploymentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCloudControlDeploymentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudControlDeploymentReference. */
                interface ICloudControlDeploymentReference {

                    /** CloudControlDeploymentReference cloudControlDeployment */
                    cloudControlDeployment?: (string|null);
                }

                /** Represents a CloudControlDeploymentReference. */
                class CloudControlDeploymentReference implements ICloudControlDeploymentReference {

                    /**
                     * Constructs a new CloudControlDeploymentReference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlDeploymentReference);

                    /** CloudControlDeploymentReference cloudControlDeployment. */
                    public cloudControlDeployment: string;

                    /**
                     * Creates a new CloudControlDeploymentReference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudControlDeploymentReference instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlDeploymentReference): google.cloud.cloudsecuritycompliance.v1.CloudControlDeploymentReference;

                    /**
                     * Encodes the specified CloudControlDeploymentReference message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlDeploymentReference.verify|verify} messages.
                     * @param message CloudControlDeploymentReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlDeploymentReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudControlDeploymentReference message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlDeploymentReference.verify|verify} messages.
                     * @param message CloudControlDeploymentReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlDeploymentReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudControlDeploymentReference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudControlDeploymentReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CloudControlDeploymentReference;

                    /**
                     * Decodes a CloudControlDeploymentReference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudControlDeploymentReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CloudControlDeploymentReference;

                    /**
                     * Verifies a CloudControlDeploymentReference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudControlDeploymentReference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudControlDeploymentReference
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CloudControlDeploymentReference;

                    /**
                     * Creates a plain object from a CloudControlDeploymentReference message. Also converts values to other types if specified.
                     * @param message CloudControlDeploymentReference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CloudControlDeploymentReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudControlDeploymentReference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudControlDeploymentReference
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FrameworkDeploymentReference. */
                interface IFrameworkDeploymentReference {

                    /** FrameworkDeploymentReference frameworkDeployment */
                    frameworkDeployment?: (string|null);

                    /** FrameworkDeploymentReference frameworkReference */
                    frameworkReference?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkReference|null);

                    /** FrameworkDeploymentReference frameworkDisplayName */
                    frameworkDisplayName?: (string|null);
                }

                /** Represents a FrameworkDeploymentReference. */
                class FrameworkDeploymentReference implements IFrameworkDeploymentReference {

                    /**
                     * Constructs a new FrameworkDeploymentReference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkDeploymentReference);

                    /** FrameworkDeploymentReference frameworkDeployment. */
                    public frameworkDeployment: string;

                    /** FrameworkDeploymentReference frameworkReference. */
                    public frameworkReference?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkReference|null);

                    /** FrameworkDeploymentReference frameworkDisplayName. */
                    public frameworkDisplayName: string;

                    /**
                     * Creates a new FrameworkDeploymentReference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FrameworkDeploymentReference instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkDeploymentReference): google.cloud.cloudsecuritycompliance.v1.FrameworkDeploymentReference;

                    /**
                     * Encodes the specified FrameworkDeploymentReference message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkDeploymentReference.verify|verify} messages.
                     * @param message FrameworkDeploymentReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkDeploymentReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FrameworkDeploymentReference message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkDeploymentReference.verify|verify} messages.
                     * @param message FrameworkDeploymentReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkDeploymentReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FrameworkDeploymentReference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FrameworkDeploymentReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.FrameworkDeploymentReference;

                    /**
                     * Decodes a FrameworkDeploymentReference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FrameworkDeploymentReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.FrameworkDeploymentReference;

                    /**
                     * Verifies a FrameworkDeploymentReference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FrameworkDeploymentReference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FrameworkDeploymentReference
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.FrameworkDeploymentReference;

                    /**
                     * Creates a plain object from a FrameworkDeploymentReference message. Also converts values to other types if specified.
                     * @param message FrameworkDeploymentReference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.FrameworkDeploymentReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FrameworkDeploymentReference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FrameworkDeploymentReference
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a Monitoring */
                class Monitoring extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Monitoring service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Monitoring service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Monitoring;

                    /**
                     * Calls ListFrameworkComplianceSummaries.
                     * @param request ListFrameworkComplianceSummariesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFrameworkComplianceSummariesResponse
                     */
                    public listFrameworkComplianceSummaries(request: google.cloud.cloudsecuritycompliance.v1.IListFrameworkComplianceSummariesRequest, callback: google.cloud.cloudsecuritycompliance.v1.Monitoring.ListFrameworkComplianceSummariesCallback): void;

                    /**
                     * Calls ListFrameworkComplianceSummaries.
                     * @param request ListFrameworkComplianceSummariesRequest message or plain object
                     * @returns Promise
                     */
                    public listFrameworkComplianceSummaries(request: google.cloud.cloudsecuritycompliance.v1.IListFrameworkComplianceSummariesRequest): Promise<google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesResponse>;

                    /**
                     * Calls ListFindingSummaries.
                     * @param request ListFindingSummariesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFindingSummariesResponse
                     */
                    public listFindingSummaries(request: google.cloud.cloudsecuritycompliance.v1.IListFindingSummariesRequest, callback: google.cloud.cloudsecuritycompliance.v1.Monitoring.ListFindingSummariesCallback): void;

                    /**
                     * Calls ListFindingSummaries.
                     * @param request ListFindingSummariesRequest message or plain object
                     * @returns Promise
                     */
                    public listFindingSummaries(request: google.cloud.cloudsecuritycompliance.v1.IListFindingSummariesRequest): Promise<google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesResponse>;

                    /**
                     * Calls FetchFrameworkComplianceReport.
                     * @param request FetchFrameworkComplianceReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FrameworkComplianceReport
                     */
                    public fetchFrameworkComplianceReport(request: google.cloud.cloudsecuritycompliance.v1.IFetchFrameworkComplianceReportRequest, callback: google.cloud.cloudsecuritycompliance.v1.Monitoring.FetchFrameworkComplianceReportCallback): void;

                    /**
                     * Calls FetchFrameworkComplianceReport.
                     * @param request FetchFrameworkComplianceReportRequest message or plain object
                     * @returns Promise
                     */
                    public fetchFrameworkComplianceReport(request: google.cloud.cloudsecuritycompliance.v1.IFetchFrameworkComplianceReportRequest): Promise<google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceReport>;

                    /**
                     * Calls ListControlComplianceSummaries.
                     * @param request ListControlComplianceSummariesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListControlComplianceSummariesResponse
                     */
                    public listControlComplianceSummaries(request: google.cloud.cloudsecuritycompliance.v1.IListControlComplianceSummariesRequest, callback: google.cloud.cloudsecuritycompliance.v1.Monitoring.ListControlComplianceSummariesCallback): void;

                    /**
                     * Calls ListControlComplianceSummaries.
                     * @param request ListControlComplianceSummariesRequest message or plain object
                     * @returns Promise
                     */
                    public listControlComplianceSummaries(request: google.cloud.cloudsecuritycompliance.v1.IListControlComplianceSummariesRequest): Promise<google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesResponse>;

                    /**
                     * Calls AggregateFrameworkComplianceReport.
                     * @param request AggregateFrameworkComplianceReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AggregateFrameworkComplianceReportResponse
                     */
                    public aggregateFrameworkComplianceReport(request: google.cloud.cloudsecuritycompliance.v1.IAggregateFrameworkComplianceReportRequest, callback: google.cloud.cloudsecuritycompliance.v1.Monitoring.AggregateFrameworkComplianceReportCallback): void;

                    /**
                     * Calls AggregateFrameworkComplianceReport.
                     * @param request AggregateFrameworkComplianceReportRequest message or plain object
                     * @returns Promise
                     */
                    public aggregateFrameworkComplianceReport(request: google.cloud.cloudsecuritycompliance.v1.IAggregateFrameworkComplianceReportRequest): Promise<google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportResponse>;
                }

                namespace Monitoring {

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Monitoring|listFrameworkComplianceSummaries}.
                     * @param error Error, if any
                     * @param [response] ListFrameworkComplianceSummariesResponse
                     */
                    type ListFrameworkComplianceSummariesCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Monitoring|listFindingSummaries}.
                     * @param error Error, if any
                     * @param [response] ListFindingSummariesResponse
                     */
                    type ListFindingSummariesCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Monitoring|fetchFrameworkComplianceReport}.
                     * @param error Error, if any
                     * @param [response] FrameworkComplianceReport
                     */
                    type FetchFrameworkComplianceReportCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceReport) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Monitoring|listControlComplianceSummaries}.
                     * @param error Error, if any
                     * @param [response] ListControlComplianceSummariesResponse
                     */
                    type ListControlComplianceSummariesCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudsecuritycompliance.v1.Monitoring|aggregateFrameworkComplianceReport}.
                     * @param error Error, if any
                     * @param [response] AggregateFrameworkComplianceReportResponse
                     */
                    type AggregateFrameworkComplianceReportCallback = (error: (Error|null), response?: google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportResponse) => void;
                }

                /** EvaluationState enum. */
                enum EvaluationState {
                    EVALUATION_STATE_UNSPECIFIED = 0,
                    EVALUATION_STATE_PASSED = 1,
                    EVALUATION_STATE_FAILED = 2,
                    EVALUATION_STATE_NOT_ASSESSED = 3
                }

                /** FindingClass enum. */
                enum FindingClass {
                    FINDING_CLASS_UNSPECIFIED = 0,
                    THREAT = 1,
                    VULNERABILITY = 2,
                    MISCONFIGURATION = 3,
                    OBSERVATION = 4,
                    SCC_ERROR = 5,
                    POSTURE_VIOLATION = 6,
                    TOXIC_COMBINATION = 7,
                    SENSITIVE_DATA_RISK = 8,
                    CHOKEPOINT = 9
                }

                /** Properties of a ListFrameworkComplianceSummariesRequest. */
                interface IListFrameworkComplianceSummariesRequest {

                    /** ListFrameworkComplianceSummariesRequest parent */
                    parent?: (string|null);

                    /** ListFrameworkComplianceSummariesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListFrameworkComplianceSummariesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListFrameworkComplianceSummariesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListFrameworkComplianceSummariesRequest. */
                class ListFrameworkComplianceSummariesRequest implements IListFrameworkComplianceSummariesRequest {

                    /**
                     * Constructs a new ListFrameworkComplianceSummariesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworkComplianceSummariesRequest);

                    /** ListFrameworkComplianceSummariesRequest parent. */
                    public parent: string;

                    /** ListFrameworkComplianceSummariesRequest pageSize. */
                    public pageSize: number;

                    /** ListFrameworkComplianceSummariesRequest pageToken. */
                    public pageToken: string;

                    /** ListFrameworkComplianceSummariesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListFrameworkComplianceSummariesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFrameworkComplianceSummariesRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworkComplianceSummariesRequest): google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesRequest;

                    /**
                     * Encodes the specified ListFrameworkComplianceSummariesRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesRequest.verify|verify} messages.
                     * @param message ListFrameworkComplianceSummariesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworkComplianceSummariesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFrameworkComplianceSummariesRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesRequest.verify|verify} messages.
                     * @param message ListFrameworkComplianceSummariesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworkComplianceSummariesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFrameworkComplianceSummariesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFrameworkComplianceSummariesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesRequest;

                    /**
                     * Decodes a ListFrameworkComplianceSummariesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFrameworkComplianceSummariesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesRequest;

                    /**
                     * Verifies a ListFrameworkComplianceSummariesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFrameworkComplianceSummariesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFrameworkComplianceSummariesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesRequest;

                    /**
                     * Creates a plain object from a ListFrameworkComplianceSummariesRequest message. Also converts values to other types if specified.
                     * @param message ListFrameworkComplianceSummariesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFrameworkComplianceSummariesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFrameworkComplianceSummariesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListFrameworkComplianceSummariesResponse. */
                interface IListFrameworkComplianceSummariesResponse {

                    /** ListFrameworkComplianceSummariesResponse frameworkComplianceSummaries */
                    frameworkComplianceSummaries?: (google.cloud.cloudsecuritycompliance.v1.IFrameworkComplianceSummary[]|null);

                    /** ListFrameworkComplianceSummariesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListFrameworkComplianceSummariesResponse. */
                class ListFrameworkComplianceSummariesResponse implements IListFrameworkComplianceSummariesResponse {

                    /**
                     * Constructs a new ListFrameworkComplianceSummariesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworkComplianceSummariesResponse);

                    /** ListFrameworkComplianceSummariesResponse frameworkComplianceSummaries. */
                    public frameworkComplianceSummaries: google.cloud.cloudsecuritycompliance.v1.IFrameworkComplianceSummary[];

                    /** ListFrameworkComplianceSummariesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListFrameworkComplianceSummariesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFrameworkComplianceSummariesResponse instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListFrameworkComplianceSummariesResponse): google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesResponse;

                    /**
                     * Encodes the specified ListFrameworkComplianceSummariesResponse message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesResponse.verify|verify} messages.
                     * @param message ListFrameworkComplianceSummariesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworkComplianceSummariesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFrameworkComplianceSummariesResponse message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesResponse.verify|verify} messages.
                     * @param message ListFrameworkComplianceSummariesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListFrameworkComplianceSummariesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFrameworkComplianceSummariesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFrameworkComplianceSummariesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesResponse;

                    /**
                     * Decodes a ListFrameworkComplianceSummariesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFrameworkComplianceSummariesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesResponse;

                    /**
                     * Verifies a ListFrameworkComplianceSummariesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFrameworkComplianceSummariesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFrameworkComplianceSummariesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesResponse;

                    /**
                     * Creates a plain object from a ListFrameworkComplianceSummariesResponse message. Also converts values to other types if specified.
                     * @param message ListFrameworkComplianceSummariesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListFrameworkComplianceSummariesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFrameworkComplianceSummariesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFrameworkComplianceSummariesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FrameworkComplianceReport. */
                interface IFrameworkComplianceReport {

                    /** FrameworkComplianceReport framework */
                    framework?: (string|null);

                    /** FrameworkComplianceReport frameworkDescription */
                    frameworkDescription?: (string|null);

                    /** FrameworkComplianceReport updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** FrameworkComplianceReport controlAssessmentDetails */
                    controlAssessmentDetails?: (google.cloud.cloudsecuritycompliance.v1.IControlAssessmentDetails|null);

                    /** FrameworkComplianceReport frameworkType */
                    frameworkType?: (google.cloud.cloudsecuritycompliance.v1.Framework.FrameworkType|keyof typeof google.cloud.cloudsecuritycompliance.v1.Framework.FrameworkType|null);

                    /** FrameworkComplianceReport supportedCloudProviders */
                    supportedCloudProviders?: (google.cloud.cloudsecuritycompliance.v1.CloudProvider[]|null);

                    /** FrameworkComplianceReport frameworkCategories */
                    frameworkCategories?: (google.cloud.cloudsecuritycompliance.v1.FrameworkCategory[]|null);

                    /** FrameworkComplianceReport frameworkDisplayName */
                    frameworkDisplayName?: (string|null);

                    /** FrameworkComplianceReport name */
                    name?: (string|null);

                    /** FrameworkComplianceReport majorRevisionId */
                    majorRevisionId?: (number|Long|string|null);

                    /** FrameworkComplianceReport minorRevisionId */
                    minorRevisionId?: (number|Long|string|null);

                    /** FrameworkComplianceReport targetResourceDetails */
                    targetResourceDetails?: (google.cloud.cloudsecuritycompliance.v1.ITargetResourceDetails[]|null);
                }

                /** Represents a FrameworkComplianceReport. */
                class FrameworkComplianceReport implements IFrameworkComplianceReport {

                    /**
                     * Constructs a new FrameworkComplianceReport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkComplianceReport);

                    /** FrameworkComplianceReport framework. */
                    public framework: string;

                    /** FrameworkComplianceReport frameworkDescription. */
                    public frameworkDescription: string;

                    /** FrameworkComplianceReport updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** FrameworkComplianceReport controlAssessmentDetails. */
                    public controlAssessmentDetails?: (google.cloud.cloudsecuritycompliance.v1.IControlAssessmentDetails|null);

                    /** FrameworkComplianceReport frameworkType. */
                    public frameworkType: (google.cloud.cloudsecuritycompliance.v1.Framework.FrameworkType|keyof typeof google.cloud.cloudsecuritycompliance.v1.Framework.FrameworkType);

                    /** FrameworkComplianceReport supportedCloudProviders. */
                    public supportedCloudProviders: google.cloud.cloudsecuritycompliance.v1.CloudProvider[];

                    /** FrameworkComplianceReport frameworkCategories. */
                    public frameworkCategories: google.cloud.cloudsecuritycompliance.v1.FrameworkCategory[];

                    /** FrameworkComplianceReport frameworkDisplayName. */
                    public frameworkDisplayName: string;

                    /** FrameworkComplianceReport name. */
                    public name: string;

                    /** FrameworkComplianceReport majorRevisionId. */
                    public majorRevisionId: (number|Long|string);

                    /** FrameworkComplianceReport minorRevisionId. */
                    public minorRevisionId: (number|Long|string);

                    /** FrameworkComplianceReport targetResourceDetails. */
                    public targetResourceDetails: google.cloud.cloudsecuritycompliance.v1.ITargetResourceDetails[];

                    /**
                     * Creates a new FrameworkComplianceReport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FrameworkComplianceReport instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkComplianceReport): google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceReport;

                    /**
                     * Encodes the specified FrameworkComplianceReport message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceReport.verify|verify} messages.
                     * @param message FrameworkComplianceReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkComplianceReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FrameworkComplianceReport message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceReport.verify|verify} messages.
                     * @param message FrameworkComplianceReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkComplianceReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FrameworkComplianceReport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FrameworkComplianceReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceReport;

                    /**
                     * Decodes a FrameworkComplianceReport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FrameworkComplianceReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceReport;

                    /**
                     * Verifies a FrameworkComplianceReport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FrameworkComplianceReport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FrameworkComplianceReport
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceReport;

                    /**
                     * Creates a plain object from a FrameworkComplianceReport message. Also converts values to other types if specified.
                     * @param message FrameworkComplianceReport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FrameworkComplianceReport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FrameworkComplianceReport
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FetchFrameworkComplianceReportRequest. */
                interface IFetchFrameworkComplianceReportRequest {

                    /** FetchFrameworkComplianceReportRequest name */
                    name?: (string|null);

                    /** FetchFrameworkComplianceReportRequest endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a FetchFrameworkComplianceReportRequest. */
                class FetchFrameworkComplianceReportRequest implements IFetchFrameworkComplianceReportRequest {

                    /**
                     * Constructs a new FetchFrameworkComplianceReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IFetchFrameworkComplianceReportRequest);

                    /** FetchFrameworkComplianceReportRequest name. */
                    public name: string;

                    /** FetchFrameworkComplianceReportRequest endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new FetchFrameworkComplianceReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FetchFrameworkComplianceReportRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IFetchFrameworkComplianceReportRequest): google.cloud.cloudsecuritycompliance.v1.FetchFrameworkComplianceReportRequest;

                    /**
                     * Encodes the specified FetchFrameworkComplianceReportRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FetchFrameworkComplianceReportRequest.verify|verify} messages.
                     * @param message FetchFrameworkComplianceReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IFetchFrameworkComplianceReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FetchFrameworkComplianceReportRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FetchFrameworkComplianceReportRequest.verify|verify} messages.
                     * @param message FetchFrameworkComplianceReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IFetchFrameworkComplianceReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FetchFrameworkComplianceReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FetchFrameworkComplianceReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.FetchFrameworkComplianceReportRequest;

                    /**
                     * Decodes a FetchFrameworkComplianceReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FetchFrameworkComplianceReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.FetchFrameworkComplianceReportRequest;

                    /**
                     * Verifies a FetchFrameworkComplianceReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FetchFrameworkComplianceReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FetchFrameworkComplianceReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.FetchFrameworkComplianceReportRequest;

                    /**
                     * Creates a plain object from a FetchFrameworkComplianceReportRequest message. Also converts values to other types if specified.
                     * @param message FetchFrameworkComplianceReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.FetchFrameworkComplianceReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FetchFrameworkComplianceReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FetchFrameworkComplianceReportRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListFindingSummariesRequest. */
                interface IListFindingSummariesRequest {

                    /** ListFindingSummariesRequest parent */
                    parent?: (string|null);

                    /** ListFindingSummariesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListFindingSummariesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListFindingSummariesRequest filter */
                    filter?: (string|null);

                    /** ListFindingSummariesRequest endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a ListFindingSummariesRequest. */
                class ListFindingSummariesRequest implements IListFindingSummariesRequest {

                    /**
                     * Constructs a new ListFindingSummariesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListFindingSummariesRequest);

                    /** ListFindingSummariesRequest parent. */
                    public parent: string;

                    /** ListFindingSummariesRequest pageSize. */
                    public pageSize: number;

                    /** ListFindingSummariesRequest pageToken. */
                    public pageToken: string;

                    /** ListFindingSummariesRequest filter. */
                    public filter: string;

                    /** ListFindingSummariesRequest endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new ListFindingSummariesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingSummariesRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListFindingSummariesRequest): google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesRequest;

                    /**
                     * Encodes the specified ListFindingSummariesRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesRequest.verify|verify} messages.
                     * @param message ListFindingSummariesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListFindingSummariesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingSummariesRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesRequest.verify|verify} messages.
                     * @param message ListFindingSummariesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListFindingSummariesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingSummariesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingSummariesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesRequest;

                    /**
                     * Decodes a ListFindingSummariesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingSummariesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesRequest;

                    /**
                     * Verifies a ListFindingSummariesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingSummariesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingSummariesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesRequest;

                    /**
                     * Creates a plain object from a ListFindingSummariesRequest message. Also converts values to other types if specified.
                     * @param message ListFindingSummariesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingSummariesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFindingSummariesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListFindingSummariesResponse. */
                interface IListFindingSummariesResponse {

                    /** ListFindingSummariesResponse findingSummaries */
                    findingSummaries?: (google.cloud.cloudsecuritycompliance.v1.IFindingSummary[]|null);

                    /** ListFindingSummariesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListFindingSummariesResponse. */
                class ListFindingSummariesResponse implements IListFindingSummariesResponse {

                    /**
                     * Constructs a new ListFindingSummariesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListFindingSummariesResponse);

                    /** ListFindingSummariesResponse findingSummaries. */
                    public findingSummaries: google.cloud.cloudsecuritycompliance.v1.IFindingSummary[];

                    /** ListFindingSummariesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListFindingSummariesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingSummariesResponse instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListFindingSummariesResponse): google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesResponse;

                    /**
                     * Encodes the specified ListFindingSummariesResponse message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesResponse.verify|verify} messages.
                     * @param message ListFindingSummariesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListFindingSummariesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingSummariesResponse message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesResponse.verify|verify} messages.
                     * @param message ListFindingSummariesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListFindingSummariesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingSummariesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingSummariesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesResponse;

                    /**
                     * Decodes a ListFindingSummariesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingSummariesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesResponse;

                    /**
                     * Verifies a ListFindingSummariesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingSummariesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingSummariesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesResponse;

                    /**
                     * Creates a plain object from a ListFindingSummariesResponse message. Also converts values to other types if specified.
                     * @param message ListFindingSummariesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListFindingSummariesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingSummariesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFindingSummariesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListControlComplianceSummariesRequest. */
                interface IListControlComplianceSummariesRequest {

                    /** ListControlComplianceSummariesRequest parent */
                    parent?: (string|null);

                    /** ListControlComplianceSummariesRequest endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** ListControlComplianceSummariesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListControlComplianceSummariesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListControlComplianceSummariesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListControlComplianceSummariesRequest. */
                class ListControlComplianceSummariesRequest implements IListControlComplianceSummariesRequest {

                    /**
                     * Constructs a new ListControlComplianceSummariesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListControlComplianceSummariesRequest);

                    /** ListControlComplianceSummariesRequest parent. */
                    public parent: string;

                    /** ListControlComplianceSummariesRequest endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** ListControlComplianceSummariesRequest pageSize. */
                    public pageSize: number;

                    /** ListControlComplianceSummariesRequest pageToken. */
                    public pageToken: string;

                    /** ListControlComplianceSummariesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListControlComplianceSummariesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListControlComplianceSummariesRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListControlComplianceSummariesRequest): google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesRequest;

                    /**
                     * Encodes the specified ListControlComplianceSummariesRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesRequest.verify|verify} messages.
                     * @param message ListControlComplianceSummariesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListControlComplianceSummariesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListControlComplianceSummariesRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesRequest.verify|verify} messages.
                     * @param message ListControlComplianceSummariesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListControlComplianceSummariesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListControlComplianceSummariesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListControlComplianceSummariesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesRequest;

                    /**
                     * Decodes a ListControlComplianceSummariesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListControlComplianceSummariesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesRequest;

                    /**
                     * Verifies a ListControlComplianceSummariesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListControlComplianceSummariesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListControlComplianceSummariesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesRequest;

                    /**
                     * Creates a plain object from a ListControlComplianceSummariesRequest message. Also converts values to other types if specified.
                     * @param message ListControlComplianceSummariesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListControlComplianceSummariesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListControlComplianceSummariesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListControlComplianceSummariesResponse. */
                interface IListControlComplianceSummariesResponse {

                    /** ListControlComplianceSummariesResponse controlComplianceSummaries */
                    controlComplianceSummaries?: (google.cloud.cloudsecuritycompliance.v1.IControlComplianceSummary[]|null);

                    /** ListControlComplianceSummariesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListControlComplianceSummariesResponse. */
                class ListControlComplianceSummariesResponse implements IListControlComplianceSummariesResponse {

                    /**
                     * Constructs a new ListControlComplianceSummariesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IListControlComplianceSummariesResponse);

                    /** ListControlComplianceSummariesResponse controlComplianceSummaries. */
                    public controlComplianceSummaries: google.cloud.cloudsecuritycompliance.v1.IControlComplianceSummary[];

                    /** ListControlComplianceSummariesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListControlComplianceSummariesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListControlComplianceSummariesResponse instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IListControlComplianceSummariesResponse): google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesResponse;

                    /**
                     * Encodes the specified ListControlComplianceSummariesResponse message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesResponse.verify|verify} messages.
                     * @param message ListControlComplianceSummariesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IListControlComplianceSummariesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListControlComplianceSummariesResponse message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesResponse.verify|verify} messages.
                     * @param message ListControlComplianceSummariesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IListControlComplianceSummariesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListControlComplianceSummariesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListControlComplianceSummariesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesResponse;

                    /**
                     * Decodes a ListControlComplianceSummariesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListControlComplianceSummariesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesResponse;

                    /**
                     * Verifies a ListControlComplianceSummariesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListControlComplianceSummariesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListControlComplianceSummariesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesResponse;

                    /**
                     * Creates a plain object from a ListControlComplianceSummariesResponse message. Also converts values to other types if specified.
                     * @param message ListControlComplianceSummariesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ListControlComplianceSummariesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListControlComplianceSummariesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListControlComplianceSummariesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AggregateFrameworkComplianceReportRequest. */
                interface IAggregateFrameworkComplianceReportRequest {

                    /** AggregateFrameworkComplianceReportRequest name */
                    name?: (string|null);

                    /** AggregateFrameworkComplianceReportRequest interval */
                    interval?: (google.type.IInterval|null);

                    /** AggregateFrameworkComplianceReportRequest filter */
                    filter?: (string|null);
                }

                /** Represents an AggregateFrameworkComplianceReportRequest. */
                class AggregateFrameworkComplianceReportRequest implements IAggregateFrameworkComplianceReportRequest {

                    /**
                     * Constructs a new AggregateFrameworkComplianceReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IAggregateFrameworkComplianceReportRequest);

                    /** AggregateFrameworkComplianceReportRequest name. */
                    public name: string;

                    /** AggregateFrameworkComplianceReportRequest interval. */
                    public interval?: (google.type.IInterval|null);

                    /** AggregateFrameworkComplianceReportRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new AggregateFrameworkComplianceReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AggregateFrameworkComplianceReportRequest instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IAggregateFrameworkComplianceReportRequest): google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportRequest;

                    /**
                     * Encodes the specified AggregateFrameworkComplianceReportRequest message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportRequest.verify|verify} messages.
                     * @param message AggregateFrameworkComplianceReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IAggregateFrameworkComplianceReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AggregateFrameworkComplianceReportRequest message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportRequest.verify|verify} messages.
                     * @param message AggregateFrameworkComplianceReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IAggregateFrameworkComplianceReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AggregateFrameworkComplianceReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AggregateFrameworkComplianceReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportRequest;

                    /**
                     * Decodes an AggregateFrameworkComplianceReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AggregateFrameworkComplianceReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportRequest;

                    /**
                     * Verifies an AggregateFrameworkComplianceReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AggregateFrameworkComplianceReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AggregateFrameworkComplianceReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportRequest;

                    /**
                     * Creates a plain object from an AggregateFrameworkComplianceReportRequest message. Also converts values to other types if specified.
                     * @param message AggregateFrameworkComplianceReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AggregateFrameworkComplianceReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AggregateFrameworkComplianceReportRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AggregateFrameworkComplianceReportResponse. */
                interface IAggregateFrameworkComplianceReportResponse {

                    /** AggregateFrameworkComplianceReportResponse aggregatedComplianceReports */
                    aggregatedComplianceReports?: (google.cloud.cloudsecuritycompliance.v1.IAggregatedComplianceReport[]|null);
                }

                /** Represents an AggregateFrameworkComplianceReportResponse. */
                class AggregateFrameworkComplianceReportResponse implements IAggregateFrameworkComplianceReportResponse {

                    /**
                     * Constructs a new AggregateFrameworkComplianceReportResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IAggregateFrameworkComplianceReportResponse);

                    /** AggregateFrameworkComplianceReportResponse aggregatedComplianceReports. */
                    public aggregatedComplianceReports: google.cloud.cloudsecuritycompliance.v1.IAggregatedComplianceReport[];

                    /**
                     * Creates a new AggregateFrameworkComplianceReportResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AggregateFrameworkComplianceReportResponse instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IAggregateFrameworkComplianceReportResponse): google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportResponse;

                    /**
                     * Encodes the specified AggregateFrameworkComplianceReportResponse message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportResponse.verify|verify} messages.
                     * @param message AggregateFrameworkComplianceReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IAggregateFrameworkComplianceReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AggregateFrameworkComplianceReportResponse message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportResponse.verify|verify} messages.
                     * @param message AggregateFrameworkComplianceReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IAggregateFrameworkComplianceReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AggregateFrameworkComplianceReportResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AggregateFrameworkComplianceReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportResponse;

                    /**
                     * Decodes an AggregateFrameworkComplianceReportResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AggregateFrameworkComplianceReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportResponse;

                    /**
                     * Verifies an AggregateFrameworkComplianceReportResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AggregateFrameworkComplianceReportResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AggregateFrameworkComplianceReportResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportResponse;

                    /**
                     * Creates a plain object from an AggregateFrameworkComplianceReportResponse message. Also converts values to other types if specified.
                     * @param message AggregateFrameworkComplianceReportResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.AggregateFrameworkComplianceReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AggregateFrameworkComplianceReportResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AggregateFrameworkComplianceReportResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ControlAssessmentDetails. */
                interface IControlAssessmentDetails {

                    /** ControlAssessmentDetails passingControls */
                    passingControls?: (number|null);

                    /** ControlAssessmentDetails failingControls */
                    failingControls?: (number|null);

                    /** ControlAssessmentDetails assessedPassingControls */
                    assessedPassingControls?: (number|null);

                    /** ControlAssessmentDetails notAssessedControls */
                    notAssessedControls?: (number|null);
                }

                /** Represents a ControlAssessmentDetails. */
                class ControlAssessmentDetails implements IControlAssessmentDetails {

                    /**
                     * Constructs a new ControlAssessmentDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IControlAssessmentDetails);

                    /** ControlAssessmentDetails passingControls. */
                    public passingControls: number;

                    /** ControlAssessmentDetails failingControls. */
                    public failingControls: number;

                    /** ControlAssessmentDetails assessedPassingControls. */
                    public assessedPassingControls: number;

                    /** ControlAssessmentDetails notAssessedControls. */
                    public notAssessedControls: number;

                    /**
                     * Creates a new ControlAssessmentDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ControlAssessmentDetails instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IControlAssessmentDetails): google.cloud.cloudsecuritycompliance.v1.ControlAssessmentDetails;

                    /**
                     * Encodes the specified ControlAssessmentDetails message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ControlAssessmentDetails.verify|verify} messages.
                     * @param message ControlAssessmentDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IControlAssessmentDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ControlAssessmentDetails message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ControlAssessmentDetails.verify|verify} messages.
                     * @param message ControlAssessmentDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IControlAssessmentDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ControlAssessmentDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ControlAssessmentDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ControlAssessmentDetails;

                    /**
                     * Decodes a ControlAssessmentDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ControlAssessmentDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ControlAssessmentDetails;

                    /**
                     * Verifies a ControlAssessmentDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ControlAssessmentDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ControlAssessmentDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ControlAssessmentDetails;

                    /**
                     * Creates a plain object from a ControlAssessmentDetails message. Also converts values to other types if specified.
                     * @param message ControlAssessmentDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ControlAssessmentDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ControlAssessmentDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ControlAssessmentDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FrameworkComplianceSummary. */
                interface IFrameworkComplianceSummary {

                    /** FrameworkComplianceSummary framework */
                    framework?: (string|null);

                    /** FrameworkComplianceSummary controlAssessmentDetails */
                    controlAssessmentDetails?: (google.cloud.cloudsecuritycompliance.v1.IControlAssessmentDetails|null);

                    /** FrameworkComplianceSummary frameworkType */
                    frameworkType?: (google.cloud.cloudsecuritycompliance.v1.Framework.FrameworkType|keyof typeof google.cloud.cloudsecuritycompliance.v1.Framework.FrameworkType|null);

                    /** FrameworkComplianceSummary supportedCloudProviders */
                    supportedCloudProviders?: (google.cloud.cloudsecuritycompliance.v1.CloudProvider[]|null);

                    /** FrameworkComplianceSummary frameworkCategories */
                    frameworkCategories?: (google.cloud.cloudsecuritycompliance.v1.FrameworkCategory[]|null);

                    /** FrameworkComplianceSummary frameworkDisplayName */
                    frameworkDisplayName?: (string|null);

                    /** FrameworkComplianceSummary name */
                    name?: (string|null);

                    /** FrameworkComplianceSummary majorRevisionId */
                    majorRevisionId?: (number|Long|string|null);

                    /** FrameworkComplianceSummary minorRevisionId */
                    minorRevisionId?: (number|Long|string|null);

                    /** FrameworkComplianceSummary targetResourceDetails */
                    targetResourceDetails?: (google.cloud.cloudsecuritycompliance.v1.ITargetResourceDetails[]|null);
                }

                /** Represents a FrameworkComplianceSummary. */
                class FrameworkComplianceSummary implements IFrameworkComplianceSummary {

                    /**
                     * Constructs a new FrameworkComplianceSummary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkComplianceSummary);

                    /** FrameworkComplianceSummary framework. */
                    public framework: string;

                    /** FrameworkComplianceSummary controlAssessmentDetails. */
                    public controlAssessmentDetails?: (google.cloud.cloudsecuritycompliance.v1.IControlAssessmentDetails|null);

                    /** FrameworkComplianceSummary frameworkType. */
                    public frameworkType: (google.cloud.cloudsecuritycompliance.v1.Framework.FrameworkType|keyof typeof google.cloud.cloudsecuritycompliance.v1.Framework.FrameworkType);

                    /** FrameworkComplianceSummary supportedCloudProviders. */
                    public supportedCloudProviders: google.cloud.cloudsecuritycompliance.v1.CloudProvider[];

                    /** FrameworkComplianceSummary frameworkCategories. */
                    public frameworkCategories: google.cloud.cloudsecuritycompliance.v1.FrameworkCategory[];

                    /** FrameworkComplianceSummary frameworkDisplayName. */
                    public frameworkDisplayName: string;

                    /** FrameworkComplianceSummary name. */
                    public name: string;

                    /** FrameworkComplianceSummary majorRevisionId. */
                    public majorRevisionId: (number|Long|string);

                    /** FrameworkComplianceSummary minorRevisionId. */
                    public minorRevisionId: (number|Long|string);

                    /** FrameworkComplianceSummary targetResourceDetails. */
                    public targetResourceDetails: google.cloud.cloudsecuritycompliance.v1.ITargetResourceDetails[];

                    /**
                     * Creates a new FrameworkComplianceSummary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FrameworkComplianceSummary instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IFrameworkComplianceSummary): google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceSummary;

                    /**
                     * Encodes the specified FrameworkComplianceSummary message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceSummary.verify|verify} messages.
                     * @param message FrameworkComplianceSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkComplianceSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FrameworkComplianceSummary message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceSummary.verify|verify} messages.
                     * @param message FrameworkComplianceSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IFrameworkComplianceSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FrameworkComplianceSummary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FrameworkComplianceSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceSummary;

                    /**
                     * Decodes a FrameworkComplianceSummary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FrameworkComplianceSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceSummary;

                    /**
                     * Verifies a FrameworkComplianceSummary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FrameworkComplianceSummary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FrameworkComplianceSummary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceSummary;

                    /**
                     * Creates a plain object from a FrameworkComplianceSummary message. Also converts values to other types if specified.
                     * @param message FrameworkComplianceSummary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.FrameworkComplianceSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FrameworkComplianceSummary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FrameworkComplianceSummary
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FindingSummary. */
                interface IFindingSummary {

                    /** FindingSummary findingCategory */
                    findingCategory?: (string|null);

                    /** FindingSummary findingClass */
                    findingClass?: (google.cloud.cloudsecuritycompliance.v1.FindingClass|keyof typeof google.cloud.cloudsecuritycompliance.v1.FindingClass|null);

                    /** FindingSummary severity */
                    severity?: (google.cloud.cloudsecuritycompliance.v1.Severity|keyof typeof google.cloud.cloudsecuritycompliance.v1.Severity|null);

                    /** FindingSummary findingCount */
                    findingCount?: (number|Long|string|null);

                    /** FindingSummary updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** FindingSummary relatedFrameworks */
                    relatedFrameworks?: (string[]|null);

                    /** FindingSummary name */
                    name?: (string|null);
                }

                /** Represents a FindingSummary. */
                class FindingSummary implements IFindingSummary {

                    /**
                     * Constructs a new FindingSummary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IFindingSummary);

                    /** FindingSummary findingCategory. */
                    public findingCategory: string;

                    /** FindingSummary findingClass. */
                    public findingClass: (google.cloud.cloudsecuritycompliance.v1.FindingClass|keyof typeof google.cloud.cloudsecuritycompliance.v1.FindingClass);

                    /** FindingSummary severity. */
                    public severity: (google.cloud.cloudsecuritycompliance.v1.Severity|keyof typeof google.cloud.cloudsecuritycompliance.v1.Severity);

                    /** FindingSummary findingCount. */
                    public findingCount: (number|Long|string);

                    /** FindingSummary updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** FindingSummary relatedFrameworks. */
                    public relatedFrameworks: string[];

                    /** FindingSummary name. */
                    public name: string;

                    /**
                     * Creates a new FindingSummary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindingSummary instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IFindingSummary): google.cloud.cloudsecuritycompliance.v1.FindingSummary;

                    /**
                     * Encodes the specified FindingSummary message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FindingSummary.verify|verify} messages.
                     * @param message FindingSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IFindingSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindingSummary message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.FindingSummary.verify|verify} messages.
                     * @param message FindingSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IFindingSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindingSummary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindingSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.FindingSummary;

                    /**
                     * Decodes a FindingSummary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindingSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.FindingSummary;

                    /**
                     * Verifies a FindingSummary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FindingSummary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FindingSummary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.FindingSummary;

                    /**
                     * Creates a plain object from a FindingSummary message. Also converts values to other types if specified.
                     * @param message FindingSummary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.FindingSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FindingSummary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FindingSummary
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ControlComplianceSummary. */
                interface IControlComplianceSummary {

                    /** ControlComplianceSummary control */
                    control?: (string|null);

                    /** ControlComplianceSummary displayName */
                    displayName?: (string|null);

                    /** ControlComplianceSummary description */
                    description?: (string|null);

                    /** ControlComplianceSummary overallEvaluationState */
                    overallEvaluationState?: (google.cloud.cloudsecuritycompliance.v1.EvaluationState|keyof typeof google.cloud.cloudsecuritycompliance.v1.EvaluationState|null);

                    /** ControlComplianceSummary totalFindingsCount */
                    totalFindingsCount?: (number|null);

                    /** ControlComplianceSummary complianceFrameworks */
                    complianceFrameworks?: (string[]|null);

                    /** ControlComplianceSummary similarControls */
                    similarControls?: (google.cloud.cloudsecuritycompliance.v1.ISimilarControls[]|null);

                    /** ControlComplianceSummary cloudControlReports */
                    cloudControlReports?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlReport[]|null);

                    /** ControlComplianceSummary controlResponsibilityType */
                    controlResponsibilityType?: (google.cloud.cloudsecuritycompliance.v1.RegulatoryControlResponsibilityType|keyof typeof google.cloud.cloudsecuritycompliance.v1.RegulatoryControlResponsibilityType|null);

                    /** ControlComplianceSummary isFakeControl */
                    isFakeControl?: (boolean|null);

                    /** ControlComplianceSummary name */
                    name?: (string|null);
                }

                /** Represents a ControlComplianceSummary. */
                class ControlComplianceSummary implements IControlComplianceSummary {

                    /**
                     * Constructs a new ControlComplianceSummary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IControlComplianceSummary);

                    /** ControlComplianceSummary control. */
                    public control: string;

                    /** ControlComplianceSummary displayName. */
                    public displayName: string;

                    /** ControlComplianceSummary description. */
                    public description: string;

                    /** ControlComplianceSummary overallEvaluationState. */
                    public overallEvaluationState: (google.cloud.cloudsecuritycompliance.v1.EvaluationState|keyof typeof google.cloud.cloudsecuritycompliance.v1.EvaluationState);

                    /** ControlComplianceSummary totalFindingsCount. */
                    public totalFindingsCount: number;

                    /** ControlComplianceSummary complianceFrameworks. */
                    public complianceFrameworks: string[];

                    /** ControlComplianceSummary similarControls. */
                    public similarControls: google.cloud.cloudsecuritycompliance.v1.ISimilarControls[];

                    /** ControlComplianceSummary cloudControlReports. */
                    public cloudControlReports: google.cloud.cloudsecuritycompliance.v1.ICloudControlReport[];

                    /** ControlComplianceSummary controlResponsibilityType. */
                    public controlResponsibilityType: (google.cloud.cloudsecuritycompliance.v1.RegulatoryControlResponsibilityType|keyof typeof google.cloud.cloudsecuritycompliance.v1.RegulatoryControlResponsibilityType);

                    /** ControlComplianceSummary isFakeControl. */
                    public isFakeControl: boolean;

                    /** ControlComplianceSummary name. */
                    public name: string;

                    /**
                     * Creates a new ControlComplianceSummary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ControlComplianceSummary instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IControlComplianceSummary): google.cloud.cloudsecuritycompliance.v1.ControlComplianceSummary;

                    /**
                     * Encodes the specified ControlComplianceSummary message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ControlComplianceSummary.verify|verify} messages.
                     * @param message ControlComplianceSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IControlComplianceSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ControlComplianceSummary message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ControlComplianceSummary.verify|verify} messages.
                     * @param message ControlComplianceSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IControlComplianceSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ControlComplianceSummary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ControlComplianceSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ControlComplianceSummary;

                    /**
                     * Decodes a ControlComplianceSummary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ControlComplianceSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ControlComplianceSummary;

                    /**
                     * Verifies a ControlComplianceSummary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ControlComplianceSummary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ControlComplianceSummary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ControlComplianceSummary;

                    /**
                     * Creates a plain object from a ControlComplianceSummary message. Also converts values to other types if specified.
                     * @param message ControlComplianceSummary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ControlComplianceSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ControlComplianceSummary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ControlComplianceSummary
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudControlReport. */
                interface ICloudControlReport {

                    /** CloudControlReport manualCloudControlAssessmentDetails */
                    manualCloudControlAssessmentDetails?: (google.cloud.cloudsecuritycompliance.v1.IManualCloudControlAssessmentDetails|null);

                    /** CloudControlReport cloudControlAssessmentDetails */
                    cloudControlAssessmentDetails?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlAssessmentDetails|null);

                    /** CloudControlReport cloudControl */
                    cloudControl?: (string|null);

                    /** CloudControlReport displayName */
                    displayName?: (string|null);

                    /** CloudControlReport description */
                    description?: (string|null);

                    /** CloudControlReport categories */
                    categories?: (string[]|null);

                    /** CloudControlReport similarControls */
                    similarControls?: (google.cloud.cloudsecuritycompliance.v1.ISimilarControls[]|null);

                    /** CloudControlReport cloudControlType */
                    cloudControlType?: (google.cloud.cloudsecuritycompliance.v1.CloudControl.Type|keyof typeof google.cloud.cloudsecuritycompliance.v1.CloudControl.Type|null);

                    /** CloudControlReport findingCategory */
                    findingCategory?: (string|null);

                    /** CloudControlReport rules */
                    rules?: (google.cloud.cloudsecuritycompliance.v1.IRule[]|null);

                    /** CloudControlReport findingSeverity */
                    findingSeverity?: (google.cloud.cloudsecuritycompliance.v1.Severity|keyof typeof google.cloud.cloudsecuritycompliance.v1.Severity|null);

                    /** CloudControlReport enforcementMode */
                    enforcementMode?: (google.cloud.cloudsecuritycompliance.v1.EnforcementMode|keyof typeof google.cloud.cloudsecuritycompliance.v1.EnforcementMode|null);

                    /** CloudControlReport cloudControlDeployment */
                    cloudControlDeployment?: (string|null);

                    /** CloudControlReport majorRevisionId */
                    majorRevisionId?: (number|Long|string|null);

                    /** CloudControlReport minorRevisionId */
                    minorRevisionId?: (number|Long|string|null);

                    /** CloudControlReport frameworkMajorRevisionIds */
                    frameworkMajorRevisionIds?: ((number|Long|string)[]|null);
                }

                /** Represents a CloudControlReport. */
                class CloudControlReport implements ICloudControlReport {

                    /**
                     * Constructs a new CloudControlReport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlReport);

                    /** CloudControlReport manualCloudControlAssessmentDetails. */
                    public manualCloudControlAssessmentDetails?: (google.cloud.cloudsecuritycompliance.v1.IManualCloudControlAssessmentDetails|null);

                    /** CloudControlReport cloudControlAssessmentDetails. */
                    public cloudControlAssessmentDetails?: (google.cloud.cloudsecuritycompliance.v1.ICloudControlAssessmentDetails|null);

                    /** CloudControlReport cloudControl. */
                    public cloudControl: string;

                    /** CloudControlReport displayName. */
                    public displayName: string;

                    /** CloudControlReport description. */
                    public description: string;

                    /** CloudControlReport categories. */
                    public categories: string[];

                    /** CloudControlReport similarControls. */
                    public similarControls: google.cloud.cloudsecuritycompliance.v1.ISimilarControls[];

                    /** CloudControlReport cloudControlType. */
                    public cloudControlType: (google.cloud.cloudsecuritycompliance.v1.CloudControl.Type|keyof typeof google.cloud.cloudsecuritycompliance.v1.CloudControl.Type);

                    /** CloudControlReport findingCategory. */
                    public findingCategory: string;

                    /** CloudControlReport rules. */
                    public rules: google.cloud.cloudsecuritycompliance.v1.IRule[];

                    /** CloudControlReport findingSeverity. */
                    public findingSeverity: (google.cloud.cloudsecuritycompliance.v1.Severity|keyof typeof google.cloud.cloudsecuritycompliance.v1.Severity);

                    /** CloudControlReport enforcementMode. */
                    public enforcementMode: (google.cloud.cloudsecuritycompliance.v1.EnforcementMode|keyof typeof google.cloud.cloudsecuritycompliance.v1.EnforcementMode);

                    /** CloudControlReport cloudControlDeployment. */
                    public cloudControlDeployment: string;

                    /** CloudControlReport majorRevisionId. */
                    public majorRevisionId: (number|Long|string);

                    /** CloudControlReport minorRevisionId. */
                    public minorRevisionId: (number|Long|string);

                    /** CloudControlReport frameworkMajorRevisionIds. */
                    public frameworkMajorRevisionIds: (number|Long|string)[];

                    /** CloudControlReport assessmentDetails. */
                    public assessmentDetails?: ("manualCloudControlAssessmentDetails"|"cloudControlAssessmentDetails");

                    /**
                     * Creates a new CloudControlReport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudControlReport instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlReport): google.cloud.cloudsecuritycompliance.v1.CloudControlReport;

                    /**
                     * Encodes the specified CloudControlReport message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlReport.verify|verify} messages.
                     * @param message CloudControlReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudControlReport message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlReport.verify|verify} messages.
                     * @param message CloudControlReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudControlReport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudControlReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CloudControlReport;

                    /**
                     * Decodes a CloudControlReport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudControlReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CloudControlReport;

                    /**
                     * Verifies a CloudControlReport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudControlReport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudControlReport
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CloudControlReport;

                    /**
                     * Creates a plain object from a CloudControlReport message. Also converts values to other types if specified.
                     * @param message CloudControlReport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CloudControlReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudControlReport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudControlReport
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ManualCloudControlAssessmentDetails. */
                interface IManualCloudControlAssessmentDetails {

                    /** ManualCloudControlAssessmentDetails manualCloudControlGuide */
                    manualCloudControlGuide?: (string[]|null);
                }

                /** Represents a ManualCloudControlAssessmentDetails. */
                class ManualCloudControlAssessmentDetails implements IManualCloudControlAssessmentDetails {

                    /**
                     * Constructs a new ManualCloudControlAssessmentDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IManualCloudControlAssessmentDetails);

                    /** ManualCloudControlAssessmentDetails manualCloudControlGuide. */
                    public manualCloudControlGuide: string[];

                    /**
                     * Creates a new ManualCloudControlAssessmentDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ManualCloudControlAssessmentDetails instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IManualCloudControlAssessmentDetails): google.cloud.cloudsecuritycompliance.v1.ManualCloudControlAssessmentDetails;

                    /**
                     * Encodes the specified ManualCloudControlAssessmentDetails message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ManualCloudControlAssessmentDetails.verify|verify} messages.
                     * @param message ManualCloudControlAssessmentDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IManualCloudControlAssessmentDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ManualCloudControlAssessmentDetails message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.ManualCloudControlAssessmentDetails.verify|verify} messages.
                     * @param message ManualCloudControlAssessmentDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IManualCloudControlAssessmentDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ManualCloudControlAssessmentDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ManualCloudControlAssessmentDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.ManualCloudControlAssessmentDetails;

                    /**
                     * Decodes a ManualCloudControlAssessmentDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ManualCloudControlAssessmentDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.ManualCloudControlAssessmentDetails;

                    /**
                     * Verifies a ManualCloudControlAssessmentDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ManualCloudControlAssessmentDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ManualCloudControlAssessmentDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.ManualCloudControlAssessmentDetails;

                    /**
                     * Creates a plain object from a ManualCloudControlAssessmentDetails message. Also converts values to other types if specified.
                     * @param message ManualCloudControlAssessmentDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.ManualCloudControlAssessmentDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ManualCloudControlAssessmentDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ManualCloudControlAssessmentDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudControlAssessmentDetails. */
                interface ICloudControlAssessmentDetails {

                    /** CloudControlAssessmentDetails findingsCount */
                    findingsCount?: (number|null);

                    /** CloudControlAssessmentDetails evaluationState */
                    evaluationState?: (google.cloud.cloudsecuritycompliance.v1.EvaluationState|keyof typeof google.cloud.cloudsecuritycompliance.v1.EvaluationState|null);
                }

                /** Represents a CloudControlAssessmentDetails. */
                class CloudControlAssessmentDetails implements ICloudControlAssessmentDetails {

                    /**
                     * Constructs a new CloudControlAssessmentDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlAssessmentDetails);

                    /** CloudControlAssessmentDetails findingsCount. */
                    public findingsCount: number;

                    /** CloudControlAssessmentDetails evaluationState. */
                    public evaluationState: (google.cloud.cloudsecuritycompliance.v1.EvaluationState|keyof typeof google.cloud.cloudsecuritycompliance.v1.EvaluationState);

                    /**
                     * Creates a new CloudControlAssessmentDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudControlAssessmentDetails instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ICloudControlAssessmentDetails): google.cloud.cloudsecuritycompliance.v1.CloudControlAssessmentDetails;

                    /**
                     * Encodes the specified CloudControlAssessmentDetails message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlAssessmentDetails.verify|verify} messages.
                     * @param message CloudControlAssessmentDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlAssessmentDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudControlAssessmentDetails message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.CloudControlAssessmentDetails.verify|verify} messages.
                     * @param message CloudControlAssessmentDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ICloudControlAssessmentDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudControlAssessmentDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudControlAssessmentDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.CloudControlAssessmentDetails;

                    /**
                     * Decodes a CloudControlAssessmentDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudControlAssessmentDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.CloudControlAssessmentDetails;

                    /**
                     * Verifies a CloudControlAssessmentDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudControlAssessmentDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudControlAssessmentDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.CloudControlAssessmentDetails;

                    /**
                     * Creates a plain object from a CloudControlAssessmentDetails message. Also converts values to other types if specified.
                     * @param message CloudControlAssessmentDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.CloudControlAssessmentDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudControlAssessmentDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudControlAssessmentDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SimilarControls. */
                interface ISimilarControls {

                    /** SimilarControls framework */
                    framework?: (string|null);

                    /** SimilarControls controlId */
                    controlId?: (string|null);
                }

                /** Represents a SimilarControls. */
                class SimilarControls implements ISimilarControls {

                    /**
                     * Constructs a new SimilarControls.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ISimilarControls);

                    /** SimilarControls framework. */
                    public framework: string;

                    /** SimilarControls controlId. */
                    public controlId: string;

                    /**
                     * Creates a new SimilarControls instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SimilarControls instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ISimilarControls): google.cloud.cloudsecuritycompliance.v1.SimilarControls;

                    /**
                     * Encodes the specified SimilarControls message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.SimilarControls.verify|verify} messages.
                     * @param message SimilarControls message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ISimilarControls, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SimilarControls message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.SimilarControls.verify|verify} messages.
                     * @param message SimilarControls message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ISimilarControls, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SimilarControls message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SimilarControls
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.SimilarControls;

                    /**
                     * Decodes a SimilarControls message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SimilarControls
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.SimilarControls;

                    /**
                     * Verifies a SimilarControls message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SimilarControls message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SimilarControls
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.SimilarControls;

                    /**
                     * Creates a plain object from a SimilarControls message. Also converts values to other types if specified.
                     * @param message SimilarControls
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.SimilarControls, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SimilarControls to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SimilarControls
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AggregatedComplianceReport. */
                interface IAggregatedComplianceReport {

                    /** AggregatedComplianceReport controlAssessmentDetails */
                    controlAssessmentDetails?: (google.cloud.cloudsecuritycompliance.v1.IControlAssessmentDetails|null);

                    /** AggregatedComplianceReport reportTime */
                    reportTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an AggregatedComplianceReport. */
                class AggregatedComplianceReport implements IAggregatedComplianceReport {

                    /**
                     * Constructs a new AggregatedComplianceReport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.IAggregatedComplianceReport);

                    /** AggregatedComplianceReport controlAssessmentDetails. */
                    public controlAssessmentDetails?: (google.cloud.cloudsecuritycompliance.v1.IControlAssessmentDetails|null);

                    /** AggregatedComplianceReport reportTime. */
                    public reportTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new AggregatedComplianceReport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AggregatedComplianceReport instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.IAggregatedComplianceReport): google.cloud.cloudsecuritycompliance.v1.AggregatedComplianceReport;

                    /**
                     * Encodes the specified AggregatedComplianceReport message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AggregatedComplianceReport.verify|verify} messages.
                     * @param message AggregatedComplianceReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.IAggregatedComplianceReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AggregatedComplianceReport message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.AggregatedComplianceReport.verify|verify} messages.
                     * @param message AggregatedComplianceReport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.IAggregatedComplianceReport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AggregatedComplianceReport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AggregatedComplianceReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.AggregatedComplianceReport;

                    /**
                     * Decodes an AggregatedComplianceReport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AggregatedComplianceReport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.AggregatedComplianceReport;

                    /**
                     * Verifies an AggregatedComplianceReport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AggregatedComplianceReport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AggregatedComplianceReport
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.AggregatedComplianceReport;

                    /**
                     * Creates a plain object from an AggregatedComplianceReport message. Also converts values to other types if specified.
                     * @param message AggregatedComplianceReport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.AggregatedComplianceReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AggregatedComplianceReport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AggregatedComplianceReport
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TargetResourceDetails. */
                interface ITargetResourceDetails {

                    /** TargetResourceDetails frameworkDeployment */
                    frameworkDeployment?: (string|null);

                    /** TargetResourceDetails targetResourceDisplayName */
                    targetResourceDisplayName?: (string|null);

                    /** TargetResourceDetails targetResource */
                    targetResource?: (string|null);

                    /** TargetResourceDetails createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** TargetResourceDetails updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** TargetResourceDetails majorRevisionId */
                    majorRevisionId?: (number|Long|string|null);

                    /** TargetResourceDetails minorRevisionId */
                    minorRevisionId?: (number|Long|string|null);
                }

                /** Represents a TargetResourceDetails. */
                class TargetResourceDetails implements ITargetResourceDetails {

                    /**
                     * Constructs a new TargetResourceDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudsecuritycompliance.v1.ITargetResourceDetails);

                    /** TargetResourceDetails frameworkDeployment. */
                    public frameworkDeployment: string;

                    /** TargetResourceDetails targetResourceDisplayName. */
                    public targetResourceDisplayName: string;

                    /** TargetResourceDetails targetResource. */
                    public targetResource: string;

                    /** TargetResourceDetails createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** TargetResourceDetails updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** TargetResourceDetails majorRevisionId. */
                    public majorRevisionId: (number|Long|string);

                    /** TargetResourceDetails minorRevisionId. */
                    public minorRevisionId: (number|Long|string);

                    /**
                     * Creates a new TargetResourceDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TargetResourceDetails instance
                     */
                    public static create(properties?: google.cloud.cloudsecuritycompliance.v1.ITargetResourceDetails): google.cloud.cloudsecuritycompliance.v1.TargetResourceDetails;

                    /**
                     * Encodes the specified TargetResourceDetails message. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.TargetResourceDetails.verify|verify} messages.
                     * @param message TargetResourceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudsecuritycompliance.v1.ITargetResourceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TargetResourceDetails message, length delimited. Does not implicitly {@link google.cloud.cloudsecuritycompliance.v1.TargetResourceDetails.verify|verify} messages.
                     * @param message TargetResourceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudsecuritycompliance.v1.ITargetResourceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TargetResourceDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TargetResourceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudsecuritycompliance.v1.TargetResourceDetails;

                    /**
                     * Decodes a TargetResourceDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TargetResourceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudsecuritycompliance.v1.TargetResourceDetails;

                    /**
                     * Verifies a TargetResourceDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TargetResourceDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TargetResourceDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudsecuritycompliance.v1.TargetResourceDetails;

                    /**
                     * Creates a plain object from a TargetResourceDetails message. Also converts values to other types if specified.
                     * @param message TargetResourceDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudsecuritycompliance.v1.TargetResourceDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TargetResourceDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TargetResourceDetails
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

            /**
             * Gets the default type url for Interval
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
