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

        /** Namespace recaptchaenterprise. */
        namespace recaptchaenterprise {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a RecaptchaEnterpriseService */
                class RecaptchaEnterpriseService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new RecaptchaEnterpriseService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new RecaptchaEnterpriseService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): RecaptchaEnterpriseService;

                    /**
                     * Calls CreateAssessment.
                     * @param request CreateAssessmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Assessment
                     */
                    public createAssessment(request: google.cloud.recaptchaenterprise.v1.ICreateAssessmentRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateAssessmentCallback): void;

                    /**
                     * Calls CreateAssessment.
                     * @param request CreateAssessmentRequest message or plain object
                     * @returns Promise
                     */
                    public createAssessment(request: google.cloud.recaptchaenterprise.v1.ICreateAssessmentRequest): Promise<google.cloud.recaptchaenterprise.v1.Assessment>;

                    /**
                     * Calls AnnotateAssessment.
                     * @param request AnnotateAssessmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnnotateAssessmentResponse
                     */
                    public annotateAssessment(request: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.AnnotateAssessmentCallback): void;

                    /**
                     * Calls AnnotateAssessment.
                     * @param request AnnotateAssessmentRequest message or plain object
                     * @returns Promise
                     */
                    public annotateAssessment(request: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentRequest): Promise<google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse>;

                    /**
                     * Calls CreateKey.
                     * @param request CreateKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Key
                     */
                    public createKey(request: google.cloud.recaptchaenterprise.v1.ICreateKeyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateKeyCallback): void;

                    /**
                     * Calls CreateKey.
                     * @param request CreateKeyRequest message or plain object
                     * @returns Promise
                     */
                    public createKey(request: google.cloud.recaptchaenterprise.v1.ICreateKeyRequest): Promise<google.cloud.recaptchaenterprise.v1.Key>;

                    /**
                     * Calls ListKeys.
                     * @param request ListKeysRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListKeysResponse
                     */
                    public listKeys(request: google.cloud.recaptchaenterprise.v1.IListKeysRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListKeysCallback): void;

                    /**
                     * Calls ListKeys.
                     * @param request ListKeysRequest message or plain object
                     * @returns Promise
                     */
                    public listKeys(request: google.cloud.recaptchaenterprise.v1.IListKeysRequest): Promise<google.cloud.recaptchaenterprise.v1.ListKeysResponse>;

                    /**
                     * Calls GetKey.
                     * @param request GetKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Key
                     */
                    public getKey(request: google.cloud.recaptchaenterprise.v1.IGetKeyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetKeyCallback): void;

                    /**
                     * Calls GetKey.
                     * @param request GetKeyRequest message or plain object
                     * @returns Promise
                     */
                    public getKey(request: google.cloud.recaptchaenterprise.v1.IGetKeyRequest): Promise<google.cloud.recaptchaenterprise.v1.Key>;

                    /**
                     * Calls UpdateKey.
                     * @param request UpdateKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Key
                     */
                    public updateKey(request: google.cloud.recaptchaenterprise.v1.IUpdateKeyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.UpdateKeyCallback): void;

                    /**
                     * Calls UpdateKey.
                     * @param request UpdateKeyRequest message or plain object
                     * @returns Promise
                     */
                    public updateKey(request: google.cloud.recaptchaenterprise.v1.IUpdateKeyRequest): Promise<google.cloud.recaptchaenterprise.v1.Key>;

                    /**
                     * Calls DeleteKey.
                     * @param request DeleteKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteKey(request: google.cloud.recaptchaenterprise.v1.IDeleteKeyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.DeleteKeyCallback): void;

                    /**
                     * Calls DeleteKey.
                     * @param request DeleteKeyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteKey(request: google.cloud.recaptchaenterprise.v1.IDeleteKeyRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls MigrateKey.
                     * @param request MigrateKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Key
                     */
                    public migrateKey(request: google.cloud.recaptchaenterprise.v1.IMigrateKeyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.MigrateKeyCallback): void;

                    /**
                     * Calls MigrateKey.
                     * @param request MigrateKeyRequest message or plain object
                     * @returns Promise
                     */
                    public migrateKey(request: google.cloud.recaptchaenterprise.v1.IMigrateKeyRequest): Promise<google.cloud.recaptchaenterprise.v1.Key>;

                    /**
                     * Calls GetMetrics.
                     * @param request GetMetricsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Metrics
                     */
                    public getMetrics(request: google.cloud.recaptchaenterprise.v1.IGetMetricsRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetMetricsCallback): void;

                    /**
                     * Calls GetMetrics.
                     * @param request GetMetricsRequest message or plain object
                     * @returns Promise
                     */
                    public getMetrics(request: google.cloud.recaptchaenterprise.v1.IGetMetricsRequest): Promise<google.cloud.recaptchaenterprise.v1.Metrics>;
                }

                namespace RecaptchaEnterpriseService {

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService#createAssessment}.
                     * @param error Error, if any
                     * @param [response] Assessment
                     */
                    type CreateAssessmentCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.Assessment) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService#annotateAssessment}.
                     * @param error Error, if any
                     * @param [response] AnnotateAssessmentResponse
                     */
                    type AnnotateAssessmentCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService#createKey}.
                     * @param error Error, if any
                     * @param [response] Key
                     */
                    type CreateKeyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.Key) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService#listKeys}.
                     * @param error Error, if any
                     * @param [response] ListKeysResponse
                     */
                    type ListKeysCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.ListKeysResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService#getKey}.
                     * @param error Error, if any
                     * @param [response] Key
                     */
                    type GetKeyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.Key) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService#updateKey}.
                     * @param error Error, if any
                     * @param [response] Key
                     */
                    type UpdateKeyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.Key) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService#deleteKey}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteKeyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService#migrateKey}.
                     * @param error Error, if any
                     * @param [response] Key
                     */
                    type MigrateKeyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.Key) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService#getMetrics}.
                     * @param error Error, if any
                     * @param [response] Metrics
                     */
                    type GetMetricsCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.Metrics) => void;
                }

                /** Properties of a CreateAssessmentRequest. */
                interface ICreateAssessmentRequest {

                    /** CreateAssessmentRequest parent */
                    parent?: (string|null);

                    /** CreateAssessmentRequest assessment */
                    assessment?: (google.cloud.recaptchaenterprise.v1.IAssessment|null);
                }

                /** Represents a CreateAssessmentRequest. */
                class CreateAssessmentRequest implements ICreateAssessmentRequest {

                    /**
                     * Constructs a new CreateAssessmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ICreateAssessmentRequest);

                    /** CreateAssessmentRequest parent. */
                    public parent: string;

                    /** CreateAssessmentRequest assessment. */
                    public assessment?: (google.cloud.recaptchaenterprise.v1.IAssessment|null);

                    /**
                     * Creates a new CreateAssessmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAssessmentRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ICreateAssessmentRequest): google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest;

                    /**
                     * Encodes the specified CreateAssessmentRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest.verify|verify} messages.
                     * @param message CreateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ICreateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAssessmentRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest.verify|verify} messages.
                     * @param message CreateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ICreateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAssessmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest;

                    /**
                     * Decodes a CreateAssessmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest;

                    /**
                     * Verifies a CreateAssessmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAssessmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAssessmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest;

                    /**
                     * Creates a plain object from a CreateAssessmentRequest message. Also converts values to other types if specified.
                     * @param message CreateAssessmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAssessmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnnotateAssessmentRequest. */
                interface IAnnotateAssessmentRequest {

                    /** AnnotateAssessmentRequest name */
                    name?: (string|null);

                    /** AnnotateAssessmentRequest annotation */
                    annotation?: (google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.Annotation|keyof typeof google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.Annotation|null);

                    /** AnnotateAssessmentRequest reasons */
                    reasons?: (google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.Reason[]|null);
                }

                /** Represents an AnnotateAssessmentRequest. */
                class AnnotateAssessmentRequest implements IAnnotateAssessmentRequest {

                    /**
                     * Constructs a new AnnotateAssessmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentRequest);

                    /** AnnotateAssessmentRequest name. */
                    public name: string;

                    /** AnnotateAssessmentRequest annotation. */
                    public annotation: (google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.Annotation|keyof typeof google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.Annotation);

                    /** AnnotateAssessmentRequest reasons. */
                    public reasons: google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.Reason[];

                    /**
                     * Creates a new AnnotateAssessmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateAssessmentRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentRequest): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest;

                    /**
                     * Encodes the specified AnnotateAssessmentRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.verify|verify} messages.
                     * @param message AnnotateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateAssessmentRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.verify|verify} messages.
                     * @param message AnnotateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateAssessmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest;

                    /**
                     * Decodes an AnnotateAssessmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest;

                    /**
                     * Verifies an AnnotateAssessmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateAssessmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateAssessmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest;

                    /**
                     * Creates a plain object from an AnnotateAssessmentRequest message. Also converts values to other types if specified.
                     * @param message AnnotateAssessmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateAssessmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AnnotateAssessmentRequest {

                    /** Annotation enum. */
                    enum Annotation {
                        ANNOTATION_UNSPECIFIED = 0,
                        LEGITIMATE = 1,
                        FRAUDULENT = 2,
                        PASSWORD_CORRECT = 3,
                        PASSWORD_INCORRECT = 4
                    }

                    /** Reason enum. */
                    enum Reason {
                        REASON_UNSPECIFIED = 0,
                        CHARGEBACK = 1,
                        PAYMENT_HEURISTICS = 2,
                        INITIATED_TWO_FACTOR = 7,
                        PASSED_TWO_FACTOR = 3,
                        FAILED_TWO_FACTOR = 4,
                        CORRECT_PASSWORD = 5,
                        INCORRECT_PASSWORD = 6
                    }
                }

                /** Properties of an AnnotateAssessmentResponse. */
                interface IAnnotateAssessmentResponse {
                }

                /** Represents an AnnotateAssessmentResponse. */
                class AnnotateAssessmentResponse implements IAnnotateAssessmentResponse {

                    /**
                     * Constructs a new AnnotateAssessmentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentResponse);

                    /**
                     * Creates a new AnnotateAssessmentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateAssessmentResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentResponse): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse;

                    /**
                     * Encodes the specified AnnotateAssessmentResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse.verify|verify} messages.
                     * @param message AnnotateAssessmentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateAssessmentResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse.verify|verify} messages.
                     * @param message AnnotateAssessmentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateAssessmentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateAssessmentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse;

                    /**
                     * Decodes an AnnotateAssessmentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateAssessmentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse;

                    /**
                     * Verifies an AnnotateAssessmentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateAssessmentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateAssessmentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse;

                    /**
                     * Creates a plain object from an AnnotateAssessmentResponse message. Also converts values to other types if specified.
                     * @param message AnnotateAssessmentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateAssessmentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Assessment. */
                interface IAssessment {

                    /** Assessment name */
                    name?: (string|null);

                    /** Assessment event */
                    event?: (google.cloud.recaptchaenterprise.v1.IEvent|null);

                    /** Assessment riskAnalysis */
                    riskAnalysis?: (google.cloud.recaptchaenterprise.v1.IRiskAnalysis|null);

                    /** Assessment tokenProperties */
                    tokenProperties?: (google.cloud.recaptchaenterprise.v1.ITokenProperties|null);
                }

                /** Represents an Assessment. */
                class Assessment implements IAssessment {

                    /**
                     * Constructs a new Assessment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAssessment);

                    /** Assessment name. */
                    public name: string;

                    /** Assessment event. */
                    public event?: (google.cloud.recaptchaenterprise.v1.IEvent|null);

                    /** Assessment riskAnalysis. */
                    public riskAnalysis?: (google.cloud.recaptchaenterprise.v1.IRiskAnalysis|null);

                    /** Assessment tokenProperties. */
                    public tokenProperties?: (google.cloud.recaptchaenterprise.v1.ITokenProperties|null);

                    /**
                     * Creates a new Assessment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Assessment instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAssessment): google.cloud.recaptchaenterprise.v1.Assessment;

                    /**
                     * Encodes the specified Assessment message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Assessment.verify|verify} messages.
                     * @param message Assessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Assessment message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Assessment.verify|verify} messages.
                     * @param message Assessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Assessment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Assessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.Assessment;

                    /**
                     * Decodes an Assessment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Assessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.Assessment;

                    /**
                     * Verifies an Assessment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Assessment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Assessment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.Assessment;

                    /**
                     * Creates a plain object from an Assessment message. Also converts values to other types if specified.
                     * @param message Assessment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.Assessment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Assessment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Event. */
                interface IEvent {

                    /** Event token */
                    token?: (string|null);

                    /** Event siteKey */
                    siteKey?: (string|null);

                    /** Event userAgent */
                    userAgent?: (string|null);

                    /** Event userIpAddress */
                    userIpAddress?: (string|null);

                    /** Event expectedAction */
                    expectedAction?: (string|null);
                }

                /** Represents an Event. */
                class Event implements IEvent {

                    /**
                     * Constructs a new Event.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IEvent);

                    /** Event token. */
                    public token: string;

                    /** Event siteKey. */
                    public siteKey: string;

                    /** Event userAgent. */
                    public userAgent: string;

                    /** Event userIpAddress. */
                    public userIpAddress: string;

                    /** Event expectedAction. */
                    public expectedAction: string;

                    /**
                     * Creates a new Event instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Event instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IEvent): google.cloud.recaptchaenterprise.v1.Event;

                    /**
                     * Encodes the specified Event message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Event.verify|verify} messages.
                     * @param message Event message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Event message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Event.verify|verify} messages.
                     * @param message Event message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Event message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.Event;

                    /**
                     * Decodes an Event message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.Event;

                    /**
                     * Verifies an Event message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Event message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Event
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.Event;

                    /**
                     * Creates a plain object from an Event message. Also converts values to other types if specified.
                     * @param message Event
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Event to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RiskAnalysis. */
                interface IRiskAnalysis {

                    /** RiskAnalysis score */
                    score?: (number|null);

                    /** RiskAnalysis reasons */
                    reasons?: (google.cloud.recaptchaenterprise.v1.RiskAnalysis.ClassificationReason[]|null);
                }

                /** Represents a RiskAnalysis. */
                class RiskAnalysis implements IRiskAnalysis {

                    /**
                     * Constructs a new RiskAnalysis.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IRiskAnalysis);

                    /** RiskAnalysis score. */
                    public score: number;

                    /** RiskAnalysis reasons. */
                    public reasons: google.cloud.recaptchaenterprise.v1.RiskAnalysis.ClassificationReason[];

                    /**
                     * Creates a new RiskAnalysis instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RiskAnalysis instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IRiskAnalysis): google.cloud.recaptchaenterprise.v1.RiskAnalysis;

                    /**
                     * Encodes the specified RiskAnalysis message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RiskAnalysis.verify|verify} messages.
                     * @param message RiskAnalysis message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IRiskAnalysis, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RiskAnalysis message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RiskAnalysis.verify|verify} messages.
                     * @param message RiskAnalysis message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IRiskAnalysis, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RiskAnalysis message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RiskAnalysis
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.RiskAnalysis;

                    /**
                     * Decodes a RiskAnalysis message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RiskAnalysis
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.RiskAnalysis;

                    /**
                     * Verifies a RiskAnalysis message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RiskAnalysis message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RiskAnalysis
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.RiskAnalysis;

                    /**
                     * Creates a plain object from a RiskAnalysis message. Also converts values to other types if specified.
                     * @param message RiskAnalysis
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.RiskAnalysis, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RiskAnalysis to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace RiskAnalysis {

                    /** ClassificationReason enum. */
                    enum ClassificationReason {
                        CLASSIFICATION_REASON_UNSPECIFIED = 0,
                        AUTOMATION = 1,
                        UNEXPECTED_ENVIRONMENT = 2,
                        TOO_MUCH_TRAFFIC = 3,
                        UNEXPECTED_USAGE_PATTERNS = 4,
                        LOW_CONFIDENCE_SCORE = 5
                    }
                }

                /** Properties of a TokenProperties. */
                interface ITokenProperties {

                    /** TokenProperties valid */
                    valid?: (boolean|null);

                    /** TokenProperties invalidReason */
                    invalidReason?: (google.cloud.recaptchaenterprise.v1.TokenProperties.InvalidReason|keyof typeof google.cloud.recaptchaenterprise.v1.TokenProperties.InvalidReason|null);

                    /** TokenProperties createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** TokenProperties hostname */
                    hostname?: (string|null);

                    /** TokenProperties action */
                    action?: (string|null);
                }

                /** Represents a TokenProperties. */
                class TokenProperties implements ITokenProperties {

                    /**
                     * Constructs a new TokenProperties.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ITokenProperties);

                    /** TokenProperties valid. */
                    public valid: boolean;

                    /** TokenProperties invalidReason. */
                    public invalidReason: (google.cloud.recaptchaenterprise.v1.TokenProperties.InvalidReason|keyof typeof google.cloud.recaptchaenterprise.v1.TokenProperties.InvalidReason);

                    /** TokenProperties createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** TokenProperties hostname. */
                    public hostname: string;

                    /** TokenProperties action. */
                    public action: string;

                    /**
                     * Creates a new TokenProperties instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TokenProperties instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ITokenProperties): google.cloud.recaptchaenterprise.v1.TokenProperties;

                    /**
                     * Encodes the specified TokenProperties message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TokenProperties.verify|verify} messages.
                     * @param message TokenProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ITokenProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TokenProperties message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TokenProperties.verify|verify} messages.
                     * @param message TokenProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ITokenProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TokenProperties message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TokenProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.TokenProperties;

                    /**
                     * Decodes a TokenProperties message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TokenProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.TokenProperties;

                    /**
                     * Verifies a TokenProperties message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TokenProperties message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TokenProperties
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.TokenProperties;

                    /**
                     * Creates a plain object from a TokenProperties message. Also converts values to other types if specified.
                     * @param message TokenProperties
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.TokenProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TokenProperties to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace TokenProperties {

                    /** InvalidReason enum. */
                    enum InvalidReason {
                        INVALID_REASON_UNSPECIFIED = 0,
                        UNKNOWN_INVALID_REASON = 1,
                        MALFORMED = 2,
                        EXPIRED = 3,
                        DUPE = 4,
                        MISSING = 5,
                        BROWSER_ERROR = 6
                    }
                }

                /** Properties of a CreateKeyRequest. */
                interface ICreateKeyRequest {

                    /** CreateKeyRequest parent */
                    parent?: (string|null);

                    /** CreateKeyRequest key */
                    key?: (google.cloud.recaptchaenterprise.v1.IKey|null);
                }

                /** Represents a CreateKeyRequest. */
                class CreateKeyRequest implements ICreateKeyRequest {

                    /**
                     * Constructs a new CreateKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ICreateKeyRequest);

                    /** CreateKeyRequest parent. */
                    public parent: string;

                    /** CreateKeyRequest key. */
                    public key?: (google.cloud.recaptchaenterprise.v1.IKey|null);

                    /**
                     * Creates a new CreateKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ICreateKeyRequest): google.cloud.recaptchaenterprise.v1.CreateKeyRequest;

                    /**
                     * Encodes the specified CreateKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.CreateKeyRequest.verify|verify} messages.
                     * @param message CreateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ICreateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.CreateKeyRequest.verify|verify} messages.
                     * @param message CreateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ICreateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.CreateKeyRequest;

                    /**
                     * Decodes a CreateKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.CreateKeyRequest;

                    /**
                     * Verifies a CreateKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.CreateKeyRequest;

                    /**
                     * Creates a plain object from a CreateKeyRequest message. Also converts values to other types if specified.
                     * @param message CreateKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.CreateKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListKeysRequest. */
                interface IListKeysRequest {

                    /** ListKeysRequest parent */
                    parent?: (string|null);

                    /** ListKeysRequest pageSize */
                    pageSize?: (number|null);

                    /** ListKeysRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListKeysRequest. */
                class ListKeysRequest implements IListKeysRequest {

                    /**
                     * Constructs a new ListKeysRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IListKeysRequest);

                    /** ListKeysRequest parent. */
                    public parent: string;

                    /** ListKeysRequest pageSize. */
                    public pageSize: number;

                    /** ListKeysRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListKeysRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListKeysRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IListKeysRequest): google.cloud.recaptchaenterprise.v1.ListKeysRequest;

                    /**
                     * Encodes the specified ListKeysRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListKeysRequest.verify|verify} messages.
                     * @param message ListKeysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IListKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListKeysRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListKeysRequest.verify|verify} messages.
                     * @param message ListKeysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IListKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListKeysRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListKeysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ListKeysRequest;

                    /**
                     * Decodes a ListKeysRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListKeysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ListKeysRequest;

                    /**
                     * Verifies a ListKeysRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListKeysRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListKeysRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ListKeysRequest;

                    /**
                     * Creates a plain object from a ListKeysRequest message. Also converts values to other types if specified.
                     * @param message ListKeysRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ListKeysRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListKeysRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListKeysResponse. */
                interface IListKeysResponse {

                    /** ListKeysResponse keys */
                    keys?: (google.cloud.recaptchaenterprise.v1.IKey[]|null);

                    /** ListKeysResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListKeysResponse. */
                class ListKeysResponse implements IListKeysResponse {

                    /**
                     * Constructs a new ListKeysResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IListKeysResponse);

                    /** ListKeysResponse keys. */
                    public keys: google.cloud.recaptchaenterprise.v1.IKey[];

                    /** ListKeysResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListKeysResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListKeysResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IListKeysResponse): google.cloud.recaptchaenterprise.v1.ListKeysResponse;

                    /**
                     * Encodes the specified ListKeysResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListKeysResponse.verify|verify} messages.
                     * @param message ListKeysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IListKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListKeysResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListKeysResponse.verify|verify} messages.
                     * @param message ListKeysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IListKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListKeysResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListKeysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ListKeysResponse;

                    /**
                     * Decodes a ListKeysResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListKeysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ListKeysResponse;

                    /**
                     * Verifies a ListKeysResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListKeysResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListKeysResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ListKeysResponse;

                    /**
                     * Creates a plain object from a ListKeysResponse message. Also converts values to other types if specified.
                     * @param message ListKeysResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ListKeysResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListKeysResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetKeyRequest. */
                interface IGetKeyRequest {

                    /** GetKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetKeyRequest. */
                class GetKeyRequest implements IGetKeyRequest {

                    /**
                     * Constructs a new GetKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IGetKeyRequest);

                    /** GetKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IGetKeyRequest): google.cloud.recaptchaenterprise.v1.GetKeyRequest;

                    /**
                     * Encodes the specified GetKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.GetKeyRequest.verify|verify} messages.
                     * @param message GetKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IGetKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.GetKeyRequest.verify|verify} messages.
                     * @param message GetKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IGetKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.GetKeyRequest;

                    /**
                     * Decodes a GetKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.GetKeyRequest;

                    /**
                     * Verifies a GetKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.GetKeyRequest;

                    /**
                     * Creates a plain object from a GetKeyRequest message. Also converts values to other types if specified.
                     * @param message GetKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.GetKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateKeyRequest. */
                interface IUpdateKeyRequest {

                    /** UpdateKeyRequest key */
                    key?: (google.cloud.recaptchaenterprise.v1.IKey|null);

                    /** UpdateKeyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateKeyRequest. */
                class UpdateKeyRequest implements IUpdateKeyRequest {

                    /**
                     * Constructs a new UpdateKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IUpdateKeyRequest);

                    /** UpdateKeyRequest key. */
                    public key?: (google.cloud.recaptchaenterprise.v1.IKey|null);

                    /** UpdateKeyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IUpdateKeyRequest): google.cloud.recaptchaenterprise.v1.UpdateKeyRequest;

                    /**
                     * Encodes the specified UpdateKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.UpdateKeyRequest.verify|verify} messages.
                     * @param message UpdateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IUpdateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.UpdateKeyRequest.verify|verify} messages.
                     * @param message UpdateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IUpdateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.UpdateKeyRequest;

                    /**
                     * Decodes an UpdateKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.UpdateKeyRequest;

                    /**
                     * Verifies an UpdateKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.UpdateKeyRequest;

                    /**
                     * Creates a plain object from an UpdateKeyRequest message. Also converts values to other types if specified.
                     * @param message UpdateKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.UpdateKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteKeyRequest. */
                interface IDeleteKeyRequest {

                    /** DeleteKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteKeyRequest. */
                class DeleteKeyRequest implements IDeleteKeyRequest {

                    /**
                     * Constructs a new DeleteKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IDeleteKeyRequest);

                    /** DeleteKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IDeleteKeyRequest): google.cloud.recaptchaenterprise.v1.DeleteKeyRequest;

                    /**
                     * Encodes the specified DeleteKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.DeleteKeyRequest.verify|verify} messages.
                     * @param message DeleteKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IDeleteKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.DeleteKeyRequest.verify|verify} messages.
                     * @param message DeleteKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IDeleteKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.DeleteKeyRequest;

                    /**
                     * Decodes a DeleteKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.DeleteKeyRequest;

                    /**
                     * Verifies a DeleteKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.DeleteKeyRequest;

                    /**
                     * Creates a plain object from a DeleteKeyRequest message. Also converts values to other types if specified.
                     * @param message DeleteKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.DeleteKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MigrateKeyRequest. */
                interface IMigrateKeyRequest {

                    /** MigrateKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a MigrateKeyRequest. */
                class MigrateKeyRequest implements IMigrateKeyRequest {

                    /**
                     * Constructs a new MigrateKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IMigrateKeyRequest);

                    /** MigrateKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new MigrateKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MigrateKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IMigrateKeyRequest): google.cloud.recaptchaenterprise.v1.MigrateKeyRequest;

                    /**
                     * Encodes the specified MigrateKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.MigrateKeyRequest.verify|verify} messages.
                     * @param message MigrateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IMigrateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MigrateKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.MigrateKeyRequest.verify|verify} messages.
                     * @param message MigrateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IMigrateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MigrateKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MigrateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.MigrateKeyRequest;

                    /**
                     * Decodes a MigrateKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MigrateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.MigrateKeyRequest;

                    /**
                     * Verifies a MigrateKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MigrateKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MigrateKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.MigrateKeyRequest;

                    /**
                     * Creates a plain object from a MigrateKeyRequest message. Also converts values to other types if specified.
                     * @param message MigrateKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.MigrateKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MigrateKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMetricsRequest. */
                interface IGetMetricsRequest {

                    /** GetMetricsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetMetricsRequest. */
                class GetMetricsRequest implements IGetMetricsRequest {

                    /**
                     * Constructs a new GetMetricsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IGetMetricsRequest);

                    /** GetMetricsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetMetricsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMetricsRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IGetMetricsRequest): google.cloud.recaptchaenterprise.v1.GetMetricsRequest;

                    /**
                     * Encodes the specified GetMetricsRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.GetMetricsRequest.verify|verify} messages.
                     * @param message GetMetricsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IGetMetricsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMetricsRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.GetMetricsRequest.verify|verify} messages.
                     * @param message GetMetricsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IGetMetricsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMetricsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMetricsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.GetMetricsRequest;

                    /**
                     * Decodes a GetMetricsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMetricsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.GetMetricsRequest;

                    /**
                     * Verifies a GetMetricsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMetricsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMetricsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.GetMetricsRequest;

                    /**
                     * Creates a plain object from a GetMetricsRequest message. Also converts values to other types if specified.
                     * @param message GetMetricsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.GetMetricsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMetricsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Metrics. */
                interface IMetrics {

                    /** Metrics name */
                    name?: (string|null);

                    /** Metrics startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Metrics scoreMetrics */
                    scoreMetrics?: (google.cloud.recaptchaenterprise.v1.IScoreMetrics[]|null);

                    /** Metrics challengeMetrics */
                    challengeMetrics?: (google.cloud.recaptchaenterprise.v1.IChallengeMetrics[]|null);
                }

                /** Represents a Metrics. */
                class Metrics implements IMetrics {

                    /**
                     * Constructs a new Metrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IMetrics);

                    /** Metrics name. */
                    public name: string;

                    /** Metrics startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Metrics scoreMetrics. */
                    public scoreMetrics: google.cloud.recaptchaenterprise.v1.IScoreMetrics[];

                    /** Metrics challengeMetrics. */
                    public challengeMetrics: google.cloud.recaptchaenterprise.v1.IChallengeMetrics[];

                    /**
                     * Creates a new Metrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Metrics instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IMetrics): google.cloud.recaptchaenterprise.v1.Metrics;

                    /**
                     * Encodes the specified Metrics message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Metrics.verify|verify} messages.
                     * @param message Metrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Metrics message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Metrics.verify|verify} messages.
                     * @param message Metrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Metrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Metrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.Metrics;

                    /**
                     * Decodes a Metrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Metrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.Metrics;

                    /**
                     * Verifies a Metrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Metrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Metrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.Metrics;

                    /**
                     * Creates a plain object from a Metrics message. Also converts values to other types if specified.
                     * @param message Metrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.Metrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Metrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Key. */
                interface IKey {

                    /** Key name */
                    name?: (string|null);

                    /** Key displayName */
                    displayName?: (string|null);

                    /** Key webSettings */
                    webSettings?: (google.cloud.recaptchaenterprise.v1.IWebKeySettings|null);

                    /** Key androidSettings */
                    androidSettings?: (google.cloud.recaptchaenterprise.v1.IAndroidKeySettings|null);

                    /** Key iosSettings */
                    iosSettings?: (google.cloud.recaptchaenterprise.v1.IIOSKeySettings|null);

                    /** Key labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Key createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Key testingOptions */
                    testingOptions?: (google.cloud.recaptchaenterprise.v1.ITestingOptions|null);
                }

                /** Represents a Key. */
                class Key implements IKey {

                    /**
                     * Constructs a new Key.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IKey);

                    /** Key name. */
                    public name: string;

                    /** Key displayName. */
                    public displayName: string;

                    /** Key webSettings. */
                    public webSettings?: (google.cloud.recaptchaenterprise.v1.IWebKeySettings|null);

                    /** Key androidSettings. */
                    public androidSettings?: (google.cloud.recaptchaenterprise.v1.IAndroidKeySettings|null);

                    /** Key iosSettings. */
                    public iosSettings?: (google.cloud.recaptchaenterprise.v1.IIOSKeySettings|null);

                    /** Key labels. */
                    public labels: { [k: string]: string };

                    /** Key createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Key testingOptions. */
                    public testingOptions?: (google.cloud.recaptchaenterprise.v1.ITestingOptions|null);

                    /** Key platformSettings. */
                    public platformSettings?: ("webSettings"|"androidSettings"|"iosSettings");

                    /**
                     * Creates a new Key instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Key instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IKey): google.cloud.recaptchaenterprise.v1.Key;

                    /**
                     * Encodes the specified Key message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Key.verify|verify} messages.
                     * @param message Key message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Key message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Key.verify|verify} messages.
                     * @param message Key message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Key message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Key
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.Key;

                    /**
                     * Decodes a Key message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Key
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.Key;

                    /**
                     * Verifies a Key message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Key message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Key
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.Key;

                    /**
                     * Creates a plain object from a Key message. Also converts values to other types if specified.
                     * @param message Key
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.Key, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Key to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TestingOptions. */
                interface ITestingOptions {

                    /** TestingOptions testingScore */
                    testingScore?: (number|null);

                    /** TestingOptions testingChallenge */
                    testingChallenge?: (google.cloud.recaptchaenterprise.v1.TestingOptions.TestingChallenge|keyof typeof google.cloud.recaptchaenterprise.v1.TestingOptions.TestingChallenge|null);
                }

                /** Represents a TestingOptions. */
                class TestingOptions implements ITestingOptions {

                    /**
                     * Constructs a new TestingOptions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ITestingOptions);

                    /** TestingOptions testingScore. */
                    public testingScore: number;

                    /** TestingOptions testingChallenge. */
                    public testingChallenge: (google.cloud.recaptchaenterprise.v1.TestingOptions.TestingChallenge|keyof typeof google.cloud.recaptchaenterprise.v1.TestingOptions.TestingChallenge);

                    /**
                     * Creates a new TestingOptions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TestingOptions instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ITestingOptions): google.cloud.recaptchaenterprise.v1.TestingOptions;

                    /**
                     * Encodes the specified TestingOptions message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TestingOptions.verify|verify} messages.
                     * @param message TestingOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ITestingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TestingOptions message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TestingOptions.verify|verify} messages.
                     * @param message TestingOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ITestingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TestingOptions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TestingOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.TestingOptions;

                    /**
                     * Decodes a TestingOptions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TestingOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.TestingOptions;

                    /**
                     * Verifies a TestingOptions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TestingOptions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TestingOptions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.TestingOptions;

                    /**
                     * Creates a plain object from a TestingOptions message. Also converts values to other types if specified.
                     * @param message TestingOptions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.TestingOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TestingOptions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace TestingOptions {

                    /** TestingChallenge enum. */
                    enum TestingChallenge {
                        TESTING_CHALLENGE_UNSPECIFIED = 0,
                        NOCAPTCHA = 1,
                        UNSOLVABLE_CHALLENGE = 2
                    }
                }

                /** Properties of a WebKeySettings. */
                interface IWebKeySettings {

                    /** WebKeySettings allowAllDomains */
                    allowAllDomains?: (boolean|null);

                    /** WebKeySettings allowedDomains */
                    allowedDomains?: (string[]|null);

                    /** WebKeySettings allowAmpTraffic */
                    allowAmpTraffic?: (boolean|null);

                    /** WebKeySettings integrationType */
                    integrationType?: (google.cloud.recaptchaenterprise.v1.WebKeySettings.IntegrationType|keyof typeof google.cloud.recaptchaenterprise.v1.WebKeySettings.IntegrationType|null);

                    /** WebKeySettings challengeSecurityPreference */
                    challengeSecurityPreference?: (google.cloud.recaptchaenterprise.v1.WebKeySettings.ChallengeSecurityPreference|keyof typeof google.cloud.recaptchaenterprise.v1.WebKeySettings.ChallengeSecurityPreference|null);
                }

                /** Represents a WebKeySettings. */
                class WebKeySettings implements IWebKeySettings {

                    /**
                     * Constructs a new WebKeySettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IWebKeySettings);

                    /** WebKeySettings allowAllDomains. */
                    public allowAllDomains: boolean;

                    /** WebKeySettings allowedDomains. */
                    public allowedDomains: string[];

                    /** WebKeySettings allowAmpTraffic. */
                    public allowAmpTraffic: boolean;

                    /** WebKeySettings integrationType. */
                    public integrationType: (google.cloud.recaptchaenterprise.v1.WebKeySettings.IntegrationType|keyof typeof google.cloud.recaptchaenterprise.v1.WebKeySettings.IntegrationType);

                    /** WebKeySettings challengeSecurityPreference. */
                    public challengeSecurityPreference: (google.cloud.recaptchaenterprise.v1.WebKeySettings.ChallengeSecurityPreference|keyof typeof google.cloud.recaptchaenterprise.v1.WebKeySettings.ChallengeSecurityPreference);

                    /**
                     * Creates a new WebKeySettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WebKeySettings instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IWebKeySettings): google.cloud.recaptchaenterprise.v1.WebKeySettings;

                    /**
                     * Encodes the specified WebKeySettings message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.WebKeySettings.verify|verify} messages.
                     * @param message WebKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IWebKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WebKeySettings message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.WebKeySettings.verify|verify} messages.
                     * @param message WebKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IWebKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WebKeySettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WebKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.WebKeySettings;

                    /**
                     * Decodes a WebKeySettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WebKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.WebKeySettings;

                    /**
                     * Verifies a WebKeySettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WebKeySettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WebKeySettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.WebKeySettings;

                    /**
                     * Creates a plain object from a WebKeySettings message. Also converts values to other types if specified.
                     * @param message WebKeySettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.WebKeySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WebKeySettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace WebKeySettings {

                    /** IntegrationType enum. */
                    enum IntegrationType {
                        INTEGRATION_TYPE_UNSPECIFIED = 0,
                        SCORE = 1,
                        CHECKBOX = 2,
                        INVISIBLE = 3
                    }

                    /** ChallengeSecurityPreference enum. */
                    enum ChallengeSecurityPreference {
                        CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED = 0,
                        USABILITY = 1,
                        BALANCE = 2,
                        SECURITY = 3
                    }
                }

                /** Properties of an AndroidKeySettings. */
                interface IAndroidKeySettings {

                    /** AndroidKeySettings allowAllPackageNames */
                    allowAllPackageNames?: (boolean|null);

                    /** AndroidKeySettings allowedPackageNames */
                    allowedPackageNames?: (string[]|null);
                }

                /** Represents an AndroidKeySettings. */
                class AndroidKeySettings implements IAndroidKeySettings {

                    /**
                     * Constructs a new AndroidKeySettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAndroidKeySettings);

                    /** AndroidKeySettings allowAllPackageNames. */
                    public allowAllPackageNames: boolean;

                    /** AndroidKeySettings allowedPackageNames. */
                    public allowedPackageNames: string[];

                    /**
                     * Creates a new AndroidKeySettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AndroidKeySettings instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAndroidKeySettings): google.cloud.recaptchaenterprise.v1.AndroidKeySettings;

                    /**
                     * Encodes the specified AndroidKeySettings message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AndroidKeySettings.verify|verify} messages.
                     * @param message AndroidKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAndroidKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AndroidKeySettings message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AndroidKeySettings.verify|verify} messages.
                     * @param message AndroidKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAndroidKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AndroidKeySettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AndroidKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.AndroidKeySettings;

                    /**
                     * Decodes an AndroidKeySettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AndroidKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.AndroidKeySettings;

                    /**
                     * Verifies an AndroidKeySettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AndroidKeySettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AndroidKeySettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.AndroidKeySettings;

                    /**
                     * Creates a plain object from an AndroidKeySettings message. Also converts values to other types if specified.
                     * @param message AndroidKeySettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.AndroidKeySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AndroidKeySettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a IOSKeySettings. */
                interface IIOSKeySettings {

                    /** IOSKeySettings allowAllBundleIds */
                    allowAllBundleIds?: (boolean|null);

                    /** IOSKeySettings allowedBundleIds */
                    allowedBundleIds?: (string[]|null);
                }

                /** Represents a IOSKeySettings. */
                class IOSKeySettings implements IIOSKeySettings {

                    /**
                     * Constructs a new IOSKeySettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IIOSKeySettings);

                    /** IOSKeySettings allowAllBundleIds. */
                    public allowAllBundleIds: boolean;

                    /** IOSKeySettings allowedBundleIds. */
                    public allowedBundleIds: string[];

                    /**
                     * Creates a new IOSKeySettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IOSKeySettings instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IIOSKeySettings): google.cloud.recaptchaenterprise.v1.IOSKeySettings;

                    /**
                     * Encodes the specified IOSKeySettings message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.IOSKeySettings.verify|verify} messages.
                     * @param message IOSKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IIOSKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IOSKeySettings message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.IOSKeySettings.verify|verify} messages.
                     * @param message IOSKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IIOSKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a IOSKeySettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IOSKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.IOSKeySettings;

                    /**
                     * Decodes a IOSKeySettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IOSKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.IOSKeySettings;

                    /**
                     * Verifies a IOSKeySettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a IOSKeySettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IOSKeySettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.IOSKeySettings;

                    /**
                     * Creates a plain object from a IOSKeySettings message. Also converts values to other types if specified.
                     * @param message IOSKeySettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.IOSKeySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IOSKeySettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ScoreDistribution. */
                interface IScoreDistribution {

                    /** ScoreDistribution scoreBuckets */
                    scoreBuckets?: ({ [k: string]: (number|Long|string) }|null);
                }

                /** Represents a ScoreDistribution. */
                class ScoreDistribution implements IScoreDistribution {

                    /**
                     * Constructs a new ScoreDistribution.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IScoreDistribution);

                    /** ScoreDistribution scoreBuckets. */
                    public scoreBuckets: { [k: string]: (number|Long|string) };

                    /**
                     * Creates a new ScoreDistribution instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScoreDistribution instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IScoreDistribution): google.cloud.recaptchaenterprise.v1.ScoreDistribution;

                    /**
                     * Encodes the specified ScoreDistribution message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ScoreDistribution.verify|verify} messages.
                     * @param message ScoreDistribution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IScoreDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScoreDistribution message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ScoreDistribution.verify|verify} messages.
                     * @param message ScoreDistribution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IScoreDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScoreDistribution message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScoreDistribution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ScoreDistribution;

                    /**
                     * Decodes a ScoreDistribution message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScoreDistribution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ScoreDistribution;

                    /**
                     * Verifies a ScoreDistribution message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScoreDistribution message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScoreDistribution
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ScoreDistribution;

                    /**
                     * Creates a plain object from a ScoreDistribution message. Also converts values to other types if specified.
                     * @param message ScoreDistribution
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ScoreDistribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScoreDistribution to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ScoreMetrics. */
                interface IScoreMetrics {

                    /** ScoreMetrics overallMetrics */
                    overallMetrics?: (google.cloud.recaptchaenterprise.v1.IScoreDistribution|null);

                    /** ScoreMetrics actionMetrics */
                    actionMetrics?: ({ [k: string]: google.cloud.recaptchaenterprise.v1.IScoreDistribution }|null);
                }

                /** Represents a ScoreMetrics. */
                class ScoreMetrics implements IScoreMetrics {

                    /**
                     * Constructs a new ScoreMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IScoreMetrics);

                    /** ScoreMetrics overallMetrics. */
                    public overallMetrics?: (google.cloud.recaptchaenterprise.v1.IScoreDistribution|null);

                    /** ScoreMetrics actionMetrics. */
                    public actionMetrics: { [k: string]: google.cloud.recaptchaenterprise.v1.IScoreDistribution };

                    /**
                     * Creates a new ScoreMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScoreMetrics instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IScoreMetrics): google.cloud.recaptchaenterprise.v1.ScoreMetrics;

                    /**
                     * Encodes the specified ScoreMetrics message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ScoreMetrics.verify|verify} messages.
                     * @param message ScoreMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IScoreMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScoreMetrics message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ScoreMetrics.verify|verify} messages.
                     * @param message ScoreMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IScoreMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScoreMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScoreMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ScoreMetrics;

                    /**
                     * Decodes a ScoreMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScoreMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ScoreMetrics;

                    /**
                     * Verifies a ScoreMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScoreMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScoreMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ScoreMetrics;

                    /**
                     * Creates a plain object from a ScoreMetrics message. Also converts values to other types if specified.
                     * @param message ScoreMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ScoreMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScoreMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ChallengeMetrics. */
                interface IChallengeMetrics {

                    /** ChallengeMetrics pageloadCount */
                    pageloadCount?: (number|Long|string|null);

                    /** ChallengeMetrics nocaptchaCount */
                    nocaptchaCount?: (number|Long|string|null);

                    /** ChallengeMetrics failedCount */
                    failedCount?: (number|Long|string|null);

                    /** ChallengeMetrics passedCount */
                    passedCount?: (number|Long|string|null);
                }

                /** Represents a ChallengeMetrics. */
                class ChallengeMetrics implements IChallengeMetrics {

                    /**
                     * Constructs a new ChallengeMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IChallengeMetrics);

                    /** ChallengeMetrics pageloadCount. */
                    public pageloadCount: (number|Long|string);

                    /** ChallengeMetrics nocaptchaCount. */
                    public nocaptchaCount: (number|Long|string);

                    /** ChallengeMetrics failedCount. */
                    public failedCount: (number|Long|string);

                    /** ChallengeMetrics passedCount. */
                    public passedCount: (number|Long|string);

                    /**
                     * Creates a new ChallengeMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChallengeMetrics instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IChallengeMetrics): google.cloud.recaptchaenterprise.v1.ChallengeMetrics;

                    /**
                     * Encodes the specified ChallengeMetrics message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ChallengeMetrics.verify|verify} messages.
                     * @param message ChallengeMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IChallengeMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChallengeMetrics message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ChallengeMetrics.verify|verify} messages.
                     * @param message ChallengeMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IChallengeMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChallengeMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChallengeMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ChallengeMetrics;

                    /**
                     * Decodes a ChallengeMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChallengeMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ChallengeMetrics;

                    /**
                     * Verifies a ChallengeMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChallengeMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChallengeMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ChallengeMetrics;

                    /**
                     * Creates a plain object from a ChallengeMetrics message. Also converts values to other types if specified.
                     * @param message ChallengeMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ChallengeMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChallengeMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Represents a RecaptchaEnterpriseServiceV1Beta1 */
                class RecaptchaEnterpriseServiceV1Beta1 extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new RecaptchaEnterpriseServiceV1Beta1 service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new RecaptchaEnterpriseServiceV1Beta1 service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): RecaptchaEnterpriseServiceV1Beta1;

                    /**
                     * Calls CreateAssessment.
                     * @param request CreateAssessmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Assessment
                     */
                    public createAssessment(request: google.cloud.recaptchaenterprise.v1beta1.ICreateAssessmentRequest, callback: google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.CreateAssessmentCallback): void;

                    /**
                     * Calls CreateAssessment.
                     * @param request CreateAssessmentRequest message or plain object
                     * @returns Promise
                     */
                    public createAssessment(request: google.cloud.recaptchaenterprise.v1beta1.ICreateAssessmentRequest): Promise<google.cloud.recaptchaenterprise.v1beta1.Assessment>;

                    /**
                     * Calls AnnotateAssessment.
                     * @param request AnnotateAssessmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnnotateAssessmentResponse
                     */
                    public annotateAssessment(request: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentRequest, callback: google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.AnnotateAssessmentCallback): void;

                    /**
                     * Calls AnnotateAssessment.
                     * @param request AnnotateAssessmentRequest message or plain object
                     * @returns Promise
                     */
                    public annotateAssessment(request: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentRequest): Promise<google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse>;

                    /**
                     * Calls CreateKey.
                     * @param request CreateKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Key
                     */
                    public createKey(request: google.cloud.recaptchaenterprise.v1beta1.ICreateKeyRequest, callback: google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.CreateKeyCallback): void;

                    /**
                     * Calls CreateKey.
                     * @param request CreateKeyRequest message or plain object
                     * @returns Promise
                     */
                    public createKey(request: google.cloud.recaptchaenterprise.v1beta1.ICreateKeyRequest): Promise<google.cloud.recaptchaenterprise.v1beta1.Key>;

                    /**
                     * Calls ListKeys.
                     * @param request ListKeysRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListKeysResponse
                     */
                    public listKeys(request: google.cloud.recaptchaenterprise.v1beta1.IListKeysRequest, callback: google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.ListKeysCallback): void;

                    /**
                     * Calls ListKeys.
                     * @param request ListKeysRequest message or plain object
                     * @returns Promise
                     */
                    public listKeys(request: google.cloud.recaptchaenterprise.v1beta1.IListKeysRequest): Promise<google.cloud.recaptchaenterprise.v1beta1.ListKeysResponse>;

                    /**
                     * Calls GetKey.
                     * @param request GetKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Key
                     */
                    public getKey(request: google.cloud.recaptchaenterprise.v1beta1.IGetKeyRequest, callback: google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.GetKeyCallback): void;

                    /**
                     * Calls GetKey.
                     * @param request GetKeyRequest message or plain object
                     * @returns Promise
                     */
                    public getKey(request: google.cloud.recaptchaenterprise.v1beta1.IGetKeyRequest): Promise<google.cloud.recaptchaenterprise.v1beta1.Key>;

                    /**
                     * Calls UpdateKey.
                     * @param request UpdateKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Key
                     */
                    public updateKey(request: google.cloud.recaptchaenterprise.v1beta1.IUpdateKeyRequest, callback: google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.UpdateKeyCallback): void;

                    /**
                     * Calls UpdateKey.
                     * @param request UpdateKeyRequest message or plain object
                     * @returns Promise
                     */
                    public updateKey(request: google.cloud.recaptchaenterprise.v1beta1.IUpdateKeyRequest): Promise<google.cloud.recaptchaenterprise.v1beta1.Key>;

                    /**
                     * Calls DeleteKey.
                     * @param request DeleteKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteKey(request: google.cloud.recaptchaenterprise.v1beta1.IDeleteKeyRequest, callback: google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.DeleteKeyCallback): void;

                    /**
                     * Calls DeleteKey.
                     * @param request DeleteKeyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteKey(request: google.cloud.recaptchaenterprise.v1beta1.IDeleteKeyRequest): Promise<google.protobuf.Empty>;
                }

                namespace RecaptchaEnterpriseServiceV1Beta1 {

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1#createAssessment}.
                     * @param error Error, if any
                     * @param [response] Assessment
                     */
                    type CreateAssessmentCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1beta1.Assessment) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1#annotateAssessment}.
                     * @param error Error, if any
                     * @param [response] AnnotateAssessmentResponse
                     */
                    type AnnotateAssessmentCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1#createKey}.
                     * @param error Error, if any
                     * @param [response] Key
                     */
                    type CreateKeyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1beta1.Key) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1#listKeys}.
                     * @param error Error, if any
                     * @param [response] ListKeysResponse
                     */
                    type ListKeysCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1beta1.ListKeysResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1#getKey}.
                     * @param error Error, if any
                     * @param [response] Key
                     */
                    type GetKeyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1beta1.Key) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1#updateKey}.
                     * @param error Error, if any
                     * @param [response] Key
                     */
                    type UpdateKeyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1beta1.Key) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1#deleteKey}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteKeyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a CreateAssessmentRequest. */
                interface ICreateAssessmentRequest {

                    /** CreateAssessmentRequest parent */
                    parent?: (string|null);

                    /** CreateAssessmentRequest assessment */
                    assessment?: (google.cloud.recaptchaenterprise.v1beta1.IAssessment|null);
                }

                /** Represents a CreateAssessmentRequest. */
                class CreateAssessmentRequest implements ICreateAssessmentRequest {

                    /**
                     * Constructs a new CreateAssessmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.ICreateAssessmentRequest);

                    /** CreateAssessmentRequest parent. */
                    public parent: string;

                    /** CreateAssessmentRequest assessment. */
                    public assessment?: (google.cloud.recaptchaenterprise.v1beta1.IAssessment|null);

                    /**
                     * Creates a new CreateAssessmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAssessmentRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.ICreateAssessmentRequest): google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest;

                    /**
                     * Encodes the specified CreateAssessmentRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest.verify|verify} messages.
                     * @param message CreateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.ICreateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAssessmentRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest.verify|verify} messages.
                     * @param message CreateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.ICreateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAssessmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest;

                    /**
                     * Decodes a CreateAssessmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest;

                    /**
                     * Verifies a CreateAssessmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAssessmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAssessmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest;

                    /**
                     * Creates a plain object from a CreateAssessmentRequest message. Also converts values to other types if specified.
                     * @param message CreateAssessmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAssessmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnnotateAssessmentRequest. */
                interface IAnnotateAssessmentRequest {

                    /** AnnotateAssessmentRequest name */
                    name?: (string|null);

                    /** AnnotateAssessmentRequest annotation */
                    annotation?: (google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Annotation|keyof typeof google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Annotation|null);
                }

                /** Represents an AnnotateAssessmentRequest. */
                class AnnotateAssessmentRequest implements IAnnotateAssessmentRequest {

                    /**
                     * Constructs a new AnnotateAssessmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentRequest);

                    /** AnnotateAssessmentRequest name. */
                    public name: string;

                    /** AnnotateAssessmentRequest annotation. */
                    public annotation: (google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Annotation|keyof typeof google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Annotation);

                    /**
                     * Creates a new AnnotateAssessmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateAssessmentRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentRequest): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest;

                    /**
                     * Encodes the specified AnnotateAssessmentRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.verify|verify} messages.
                     * @param message AnnotateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateAssessmentRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.verify|verify} messages.
                     * @param message AnnotateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateAssessmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest;

                    /**
                     * Decodes an AnnotateAssessmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest;

                    /**
                     * Verifies an AnnotateAssessmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateAssessmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateAssessmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest;

                    /**
                     * Creates a plain object from an AnnotateAssessmentRequest message. Also converts values to other types if specified.
                     * @param message AnnotateAssessmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateAssessmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AnnotateAssessmentRequest {

                    /** Annotation enum. */
                    enum Annotation {
                        ANNOTATION_UNSPECIFIED = 0,
                        LEGITIMATE = 1,
                        FRAUDULENT = 2
                    }
                }

                /** Properties of an AnnotateAssessmentResponse. */
                interface IAnnotateAssessmentResponse {
                }

                /** Represents an AnnotateAssessmentResponse. */
                class AnnotateAssessmentResponse implements IAnnotateAssessmentResponse {

                    /**
                     * Constructs a new AnnotateAssessmentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentResponse);

                    /**
                     * Creates a new AnnotateAssessmentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateAssessmentResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentResponse): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse;

                    /**
                     * Encodes the specified AnnotateAssessmentResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse.verify|verify} messages.
                     * @param message AnnotateAssessmentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateAssessmentResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse.verify|verify} messages.
                     * @param message AnnotateAssessmentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateAssessmentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateAssessmentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse;

                    /**
                     * Decodes an AnnotateAssessmentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateAssessmentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse;

                    /**
                     * Verifies an AnnotateAssessmentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateAssessmentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateAssessmentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse;

                    /**
                     * Creates a plain object from an AnnotateAssessmentResponse message. Also converts values to other types if specified.
                     * @param message AnnotateAssessmentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateAssessmentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Assessment. */
                interface IAssessment {

                    /** Assessment name */
                    name?: (string|null);

                    /** Assessment event */
                    event?: (google.cloud.recaptchaenterprise.v1beta1.IEvent|null);

                    /** Assessment score */
                    score?: (number|null);

                    /** Assessment tokenProperties */
                    tokenProperties?: (google.cloud.recaptchaenterprise.v1beta1.ITokenProperties|null);

                    /** Assessment reasons */
                    reasons?: (google.cloud.recaptchaenterprise.v1beta1.Assessment.ClassificationReason[]|null);
                }

                /** Represents an Assessment. */
                class Assessment implements IAssessment {

                    /**
                     * Constructs a new Assessment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IAssessment);

                    /** Assessment name. */
                    public name: string;

                    /** Assessment event. */
                    public event?: (google.cloud.recaptchaenterprise.v1beta1.IEvent|null);

                    /** Assessment score. */
                    public score: number;

                    /** Assessment tokenProperties. */
                    public tokenProperties?: (google.cloud.recaptchaenterprise.v1beta1.ITokenProperties|null);

                    /** Assessment reasons. */
                    public reasons: google.cloud.recaptchaenterprise.v1beta1.Assessment.ClassificationReason[];

                    /**
                     * Creates a new Assessment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Assessment instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IAssessment): google.cloud.recaptchaenterprise.v1beta1.Assessment;

                    /**
                     * Encodes the specified Assessment message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.Assessment.verify|verify} messages.
                     * @param message Assessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Assessment message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.Assessment.verify|verify} messages.
                     * @param message Assessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Assessment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Assessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.Assessment;

                    /**
                     * Decodes an Assessment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Assessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.Assessment;

                    /**
                     * Verifies an Assessment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Assessment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Assessment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.Assessment;

                    /**
                     * Creates a plain object from an Assessment message. Also converts values to other types if specified.
                     * @param message Assessment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.Assessment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Assessment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Assessment {

                    /** ClassificationReason enum. */
                    enum ClassificationReason {
                        CLASSIFICATION_REASON_UNSPECIFIED = 0,
                        AUTOMATION = 1,
                        UNEXPECTED_ENVIRONMENT = 2,
                        TOO_MUCH_TRAFFIC = 3,
                        UNEXPECTED_USAGE_PATTERNS = 4,
                        LOW_CONFIDENCE_SCORE = 5
                    }
                }

                /** Properties of an Event. */
                interface IEvent {

                    /** Event token */
                    token?: (string|null);

                    /** Event siteKey */
                    siteKey?: (string|null);

                    /** Event userAgent */
                    userAgent?: (string|null);

                    /** Event userIpAddress */
                    userIpAddress?: (string|null);

                    /** Event expectedAction */
                    expectedAction?: (string|null);
                }

                /** Represents an Event. */
                class Event implements IEvent {

                    /**
                     * Constructs a new Event.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IEvent);

                    /** Event token. */
                    public token: string;

                    /** Event siteKey. */
                    public siteKey: string;

                    /** Event userAgent. */
                    public userAgent: string;

                    /** Event userIpAddress. */
                    public userIpAddress: string;

                    /** Event expectedAction. */
                    public expectedAction: string;

                    /**
                     * Creates a new Event instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Event instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IEvent): google.cloud.recaptchaenterprise.v1beta1.Event;

                    /**
                     * Encodes the specified Event message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.Event.verify|verify} messages.
                     * @param message Event message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Event message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.Event.verify|verify} messages.
                     * @param message Event message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Event message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.Event;

                    /**
                     * Decodes an Event message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.Event;

                    /**
                     * Verifies an Event message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Event message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Event
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.Event;

                    /**
                     * Creates a plain object from an Event message. Also converts values to other types if specified.
                     * @param message Event
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Event to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TokenProperties. */
                interface ITokenProperties {

                    /** TokenProperties valid */
                    valid?: (boolean|null);

                    /** TokenProperties invalidReason */
                    invalidReason?: (google.cloud.recaptchaenterprise.v1beta1.TokenProperties.InvalidReason|keyof typeof google.cloud.recaptchaenterprise.v1beta1.TokenProperties.InvalidReason|null);

                    /** TokenProperties createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** TokenProperties hostname */
                    hostname?: (string|null);

                    /** TokenProperties action */
                    action?: (string|null);
                }

                /** Represents a TokenProperties. */
                class TokenProperties implements ITokenProperties {

                    /**
                     * Constructs a new TokenProperties.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.ITokenProperties);

                    /** TokenProperties valid. */
                    public valid: boolean;

                    /** TokenProperties invalidReason. */
                    public invalidReason: (google.cloud.recaptchaenterprise.v1beta1.TokenProperties.InvalidReason|keyof typeof google.cloud.recaptchaenterprise.v1beta1.TokenProperties.InvalidReason);

                    /** TokenProperties createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** TokenProperties hostname. */
                    public hostname: string;

                    /** TokenProperties action. */
                    public action: string;

                    /**
                     * Creates a new TokenProperties instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TokenProperties instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.ITokenProperties): google.cloud.recaptchaenterprise.v1beta1.TokenProperties;

                    /**
                     * Encodes the specified TokenProperties message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TokenProperties.verify|verify} messages.
                     * @param message TokenProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.ITokenProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TokenProperties message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TokenProperties.verify|verify} messages.
                     * @param message TokenProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.ITokenProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TokenProperties message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TokenProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.TokenProperties;

                    /**
                     * Decodes a TokenProperties message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TokenProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.TokenProperties;

                    /**
                     * Verifies a TokenProperties message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TokenProperties message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TokenProperties
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.TokenProperties;

                    /**
                     * Creates a plain object from a TokenProperties message. Also converts values to other types if specified.
                     * @param message TokenProperties
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.TokenProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TokenProperties to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace TokenProperties {

                    /** InvalidReason enum. */
                    enum InvalidReason {
                        INVALID_REASON_UNSPECIFIED = 0,
                        UNKNOWN_INVALID_REASON = 1,
                        MALFORMED = 2,
                        EXPIRED = 3,
                        DUPE = 4,
                        SITE_MISMATCH = 5,
                        MISSING = 6
                    }
                }

                /** Properties of a CreateKeyRequest. */
                interface ICreateKeyRequest {

                    /** CreateKeyRequest parent */
                    parent?: (string|null);

                    /** CreateKeyRequest key */
                    key?: (google.cloud.recaptchaenterprise.v1beta1.IKey|null);
                }

                /** Represents a CreateKeyRequest. */
                class CreateKeyRequest implements ICreateKeyRequest {

                    /**
                     * Constructs a new CreateKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.ICreateKeyRequest);

                    /** CreateKeyRequest parent. */
                    public parent: string;

                    /** CreateKeyRequest key. */
                    public key?: (google.cloud.recaptchaenterprise.v1beta1.IKey|null);

                    /**
                     * Creates a new CreateKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.ICreateKeyRequest): google.cloud.recaptchaenterprise.v1beta1.CreateKeyRequest;

                    /**
                     * Encodes the specified CreateKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.CreateKeyRequest.verify|verify} messages.
                     * @param message CreateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.ICreateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.CreateKeyRequest.verify|verify} messages.
                     * @param message CreateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.ICreateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.CreateKeyRequest;

                    /**
                     * Decodes a CreateKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.CreateKeyRequest;

                    /**
                     * Verifies a CreateKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.CreateKeyRequest;

                    /**
                     * Creates a plain object from a CreateKeyRequest message. Also converts values to other types if specified.
                     * @param message CreateKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.CreateKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListKeysRequest. */
                interface IListKeysRequest {

                    /** ListKeysRequest parent */
                    parent?: (string|null);

                    /** ListKeysRequest pageSize */
                    pageSize?: (number|null);

                    /** ListKeysRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListKeysRequest. */
                class ListKeysRequest implements IListKeysRequest {

                    /**
                     * Constructs a new ListKeysRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IListKeysRequest);

                    /** ListKeysRequest parent. */
                    public parent: string;

                    /** ListKeysRequest pageSize. */
                    public pageSize: number;

                    /** ListKeysRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListKeysRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListKeysRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IListKeysRequest): google.cloud.recaptchaenterprise.v1beta1.ListKeysRequest;

                    /**
                     * Encodes the specified ListKeysRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.ListKeysRequest.verify|verify} messages.
                     * @param message ListKeysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IListKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListKeysRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.ListKeysRequest.verify|verify} messages.
                     * @param message ListKeysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IListKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListKeysRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListKeysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.ListKeysRequest;

                    /**
                     * Decodes a ListKeysRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListKeysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.ListKeysRequest;

                    /**
                     * Verifies a ListKeysRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListKeysRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListKeysRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.ListKeysRequest;

                    /**
                     * Creates a plain object from a ListKeysRequest message. Also converts values to other types if specified.
                     * @param message ListKeysRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.ListKeysRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListKeysRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListKeysResponse. */
                interface IListKeysResponse {

                    /** ListKeysResponse keys */
                    keys?: (google.cloud.recaptchaenterprise.v1beta1.IKey[]|null);

                    /** ListKeysResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListKeysResponse. */
                class ListKeysResponse implements IListKeysResponse {

                    /**
                     * Constructs a new ListKeysResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IListKeysResponse);

                    /** ListKeysResponse keys. */
                    public keys: google.cloud.recaptchaenterprise.v1beta1.IKey[];

                    /** ListKeysResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListKeysResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListKeysResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IListKeysResponse): google.cloud.recaptchaenterprise.v1beta1.ListKeysResponse;

                    /**
                     * Encodes the specified ListKeysResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.ListKeysResponse.verify|verify} messages.
                     * @param message ListKeysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IListKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListKeysResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.ListKeysResponse.verify|verify} messages.
                     * @param message ListKeysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IListKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListKeysResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListKeysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.ListKeysResponse;

                    /**
                     * Decodes a ListKeysResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListKeysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.ListKeysResponse;

                    /**
                     * Verifies a ListKeysResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListKeysResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListKeysResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.ListKeysResponse;

                    /**
                     * Creates a plain object from a ListKeysResponse message. Also converts values to other types if specified.
                     * @param message ListKeysResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.ListKeysResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListKeysResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetKeyRequest. */
                interface IGetKeyRequest {

                    /** GetKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetKeyRequest. */
                class GetKeyRequest implements IGetKeyRequest {

                    /**
                     * Constructs a new GetKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IGetKeyRequest);

                    /** GetKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IGetKeyRequest): google.cloud.recaptchaenterprise.v1beta1.GetKeyRequest;

                    /**
                     * Encodes the specified GetKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.GetKeyRequest.verify|verify} messages.
                     * @param message GetKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IGetKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.GetKeyRequest.verify|verify} messages.
                     * @param message GetKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IGetKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.GetKeyRequest;

                    /**
                     * Decodes a GetKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.GetKeyRequest;

                    /**
                     * Verifies a GetKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.GetKeyRequest;

                    /**
                     * Creates a plain object from a GetKeyRequest message. Also converts values to other types if specified.
                     * @param message GetKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.GetKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateKeyRequest. */
                interface IUpdateKeyRequest {

                    /** UpdateKeyRequest key */
                    key?: (google.cloud.recaptchaenterprise.v1beta1.IKey|null);

                    /** UpdateKeyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateKeyRequest. */
                class UpdateKeyRequest implements IUpdateKeyRequest {

                    /**
                     * Constructs a new UpdateKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IUpdateKeyRequest);

                    /** UpdateKeyRequest key. */
                    public key?: (google.cloud.recaptchaenterprise.v1beta1.IKey|null);

                    /** UpdateKeyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IUpdateKeyRequest): google.cloud.recaptchaenterprise.v1beta1.UpdateKeyRequest;

                    /**
                     * Encodes the specified UpdateKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.UpdateKeyRequest.verify|verify} messages.
                     * @param message UpdateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IUpdateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.UpdateKeyRequest.verify|verify} messages.
                     * @param message UpdateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IUpdateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.UpdateKeyRequest;

                    /**
                     * Decodes an UpdateKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.UpdateKeyRequest;

                    /**
                     * Verifies an UpdateKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.UpdateKeyRequest;

                    /**
                     * Creates a plain object from an UpdateKeyRequest message. Also converts values to other types if specified.
                     * @param message UpdateKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.UpdateKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteKeyRequest. */
                interface IDeleteKeyRequest {

                    /** DeleteKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteKeyRequest. */
                class DeleteKeyRequest implements IDeleteKeyRequest {

                    /**
                     * Constructs a new DeleteKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IDeleteKeyRequest);

                    /** DeleteKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IDeleteKeyRequest): google.cloud.recaptchaenterprise.v1beta1.DeleteKeyRequest;

                    /**
                     * Encodes the specified DeleteKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.DeleteKeyRequest.verify|verify} messages.
                     * @param message DeleteKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IDeleteKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.DeleteKeyRequest.verify|verify} messages.
                     * @param message DeleteKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IDeleteKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.DeleteKeyRequest;

                    /**
                     * Decodes a DeleteKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.DeleteKeyRequest;

                    /**
                     * Verifies a DeleteKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.DeleteKeyRequest;

                    /**
                     * Creates a plain object from a DeleteKeyRequest message. Also converts values to other types if specified.
                     * @param message DeleteKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.DeleteKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Key. */
                interface IKey {

                    /** Key name */
                    name?: (string|null);

                    /** Key displayName */
                    displayName?: (string|null);

                    /** Key webSettings */
                    webSettings?: (google.cloud.recaptchaenterprise.v1beta1.IWebKeySettings|null);

                    /** Key androidSettings */
                    androidSettings?: (google.cloud.recaptchaenterprise.v1beta1.IAndroidKeySettings|null);

                    /** Key iosSettings */
                    iosSettings?: (google.cloud.recaptchaenterprise.v1beta1.IIOSKeySettings|null);
                }

                /** Represents a Key. */
                class Key implements IKey {

                    /**
                     * Constructs a new Key.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IKey);

                    /** Key name. */
                    public name: string;

                    /** Key displayName. */
                    public displayName: string;

                    /** Key webSettings. */
                    public webSettings?: (google.cloud.recaptchaenterprise.v1beta1.IWebKeySettings|null);

                    /** Key androidSettings. */
                    public androidSettings?: (google.cloud.recaptchaenterprise.v1beta1.IAndroidKeySettings|null);

                    /** Key iosSettings. */
                    public iosSettings?: (google.cloud.recaptchaenterprise.v1beta1.IIOSKeySettings|null);

                    /** Key platformSettings. */
                    public platformSettings?: ("webSettings"|"androidSettings"|"iosSettings");

                    /**
                     * Creates a new Key instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Key instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IKey): google.cloud.recaptchaenterprise.v1beta1.Key;

                    /**
                     * Encodes the specified Key message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.Key.verify|verify} messages.
                     * @param message Key message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Key message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.Key.verify|verify} messages.
                     * @param message Key message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Key message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Key
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.Key;

                    /**
                     * Decodes a Key message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Key
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.Key;

                    /**
                     * Verifies a Key message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Key message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Key
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.Key;

                    /**
                     * Creates a plain object from a Key message. Also converts values to other types if specified.
                     * @param message Key
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.Key, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Key to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WebKeySettings. */
                interface IWebKeySettings {

                    /** WebKeySettings enforceAllowedDomains */
                    enforceAllowedDomains?: (boolean|null);

                    /** WebKeySettings allowedDomains */
                    allowedDomains?: (string[]|null);

                    /** WebKeySettings allowAmpTraffic */
                    allowAmpTraffic?: (boolean|null);

                    /** WebKeySettings integrationType */
                    integrationType?: (google.cloud.recaptchaenterprise.v1beta1.WebKeySettings.IntegrationType|keyof typeof google.cloud.recaptchaenterprise.v1beta1.WebKeySettings.IntegrationType|null);

                    /** WebKeySettings challengeSecurityPreference */
                    challengeSecurityPreference?: (google.cloud.recaptchaenterprise.v1beta1.WebKeySettings.ChallengeSecurityPreference|keyof typeof google.cloud.recaptchaenterprise.v1beta1.WebKeySettings.ChallengeSecurityPreference|null);
                }

                /** Represents a WebKeySettings. */
                class WebKeySettings implements IWebKeySettings {

                    /**
                     * Constructs a new WebKeySettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IWebKeySettings);

                    /** WebKeySettings enforceAllowedDomains. */
                    public enforceAllowedDomains: boolean;

                    /** WebKeySettings allowedDomains. */
                    public allowedDomains: string[];

                    /** WebKeySettings allowAmpTraffic. */
                    public allowAmpTraffic: boolean;

                    /** WebKeySettings integrationType. */
                    public integrationType: (google.cloud.recaptchaenterprise.v1beta1.WebKeySettings.IntegrationType|keyof typeof google.cloud.recaptchaenterprise.v1beta1.WebKeySettings.IntegrationType);

                    /** WebKeySettings challengeSecurityPreference. */
                    public challengeSecurityPreference: (google.cloud.recaptchaenterprise.v1beta1.WebKeySettings.ChallengeSecurityPreference|keyof typeof google.cloud.recaptchaenterprise.v1beta1.WebKeySettings.ChallengeSecurityPreference);

                    /**
                     * Creates a new WebKeySettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WebKeySettings instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IWebKeySettings): google.cloud.recaptchaenterprise.v1beta1.WebKeySettings;

                    /**
                     * Encodes the specified WebKeySettings message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.WebKeySettings.verify|verify} messages.
                     * @param message WebKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IWebKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WebKeySettings message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.WebKeySettings.verify|verify} messages.
                     * @param message WebKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IWebKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WebKeySettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WebKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.WebKeySettings;

                    /**
                     * Decodes a WebKeySettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WebKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.WebKeySettings;

                    /**
                     * Verifies a WebKeySettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WebKeySettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WebKeySettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.WebKeySettings;

                    /**
                     * Creates a plain object from a WebKeySettings message. Also converts values to other types if specified.
                     * @param message WebKeySettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.WebKeySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WebKeySettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace WebKeySettings {

                    /** IntegrationType enum. */
                    enum IntegrationType {
                        INTEGRATION_TYPE_UNSPECIFIED = 0,
                        SCORE_ONLY = 1,
                        CHECKBOX_CHALLENGE = 2,
                        INVISIBLE_CHALLENGE = 3
                    }

                    /** ChallengeSecurityPreference enum. */
                    enum ChallengeSecurityPreference {
                        CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED = 0,
                        USABILITY = 1,
                        BALANCED = 2,
                        SECURITY = 3
                    }
                }

                /** Properties of an AndroidKeySettings. */
                interface IAndroidKeySettings {

                    /** AndroidKeySettings allowedPackageNames */
                    allowedPackageNames?: (string[]|null);
                }

                /** Represents an AndroidKeySettings. */
                class AndroidKeySettings implements IAndroidKeySettings {

                    /**
                     * Constructs a new AndroidKeySettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IAndroidKeySettings);

                    /** AndroidKeySettings allowedPackageNames. */
                    public allowedPackageNames: string[];

                    /**
                     * Creates a new AndroidKeySettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AndroidKeySettings instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IAndroidKeySettings): google.cloud.recaptchaenterprise.v1beta1.AndroidKeySettings;

                    /**
                     * Encodes the specified AndroidKeySettings message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.AndroidKeySettings.verify|verify} messages.
                     * @param message AndroidKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IAndroidKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AndroidKeySettings message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.AndroidKeySettings.verify|verify} messages.
                     * @param message AndroidKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IAndroidKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AndroidKeySettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AndroidKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.AndroidKeySettings;

                    /**
                     * Decodes an AndroidKeySettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AndroidKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.AndroidKeySettings;

                    /**
                     * Verifies an AndroidKeySettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AndroidKeySettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AndroidKeySettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.AndroidKeySettings;

                    /**
                     * Creates a plain object from an AndroidKeySettings message. Also converts values to other types if specified.
                     * @param message AndroidKeySettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.AndroidKeySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AndroidKeySettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a IOSKeySettings. */
                interface IIOSKeySettings {

                    /** IOSKeySettings allowedBundleIds */
                    allowedBundleIds?: (string[]|null);
                }

                /** Represents a IOSKeySettings. */
                class IOSKeySettings implements IIOSKeySettings {

                    /**
                     * Constructs a new IOSKeySettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IIOSKeySettings);

                    /** IOSKeySettings allowedBundleIds. */
                    public allowedBundleIds: string[];

                    /**
                     * Creates a new IOSKeySettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IOSKeySettings instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IIOSKeySettings): google.cloud.recaptchaenterprise.v1beta1.IOSKeySettings;

                    /**
                     * Encodes the specified IOSKeySettings message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.IOSKeySettings.verify|verify} messages.
                     * @param message IOSKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IIOSKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IOSKeySettings message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.IOSKeySettings.verify|verify} messages.
                     * @param message IOSKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IIOSKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a IOSKeySettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IOSKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.IOSKeySettings;

                    /**
                     * Decodes a IOSKeySettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IOSKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.IOSKeySettings;

                    /**
                     * Verifies a IOSKeySettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a IOSKeySettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IOSKeySettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.IOSKeySettings;

                    /**
                     * Creates a plain object from a IOSKeySettings message. Also converts values to other types if specified.
                     * @param message IOSKeySettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.IOSKeySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IOSKeySettings to JSON.
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
}
